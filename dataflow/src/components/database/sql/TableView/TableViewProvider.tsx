import { createContext, use, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useConnectionStore } from '@/stores/useConnectionStore'
import {
  useGetStorageUnitRowsLazyQuery,
  WhereConditionType,
  SortDirection,
  type WhereCondition,
  type SortCondition,
} from '@graphql'
import { transformRowsResult, type TableData } from '@/utils/graphql-transforms'
import { resolveSchemaParam } from '@/utils/database-features'
import { parseSearchToWhereCondition, mergeSearchWithWhere } from '@/utils/search-parser'
import { useInlineEditing } from './useInlineEditing'
import type { TableViewContextValue, TableViewState, TableViewActions, FilterCondition } from './types'
import type { Alert } from '@/components/database/shared/types'

const TableViewCtx = createContext<TableViewContextValue | null>(null)

/** Hook to access TableView context. Throws if used outside TableViewProvider. */
export function useTableView(): TableViewContextValue {
  const ctx = use(TableViewCtx)
  if (!ctx) throw new Error('useTableView must be used within TableViewProvider')
  return ctx
}

/** Simplify verbose PostgreSQL column type names for display. */
export function simplifyColumnType(typeStr: string): string {
  if (!typeStr) return ''
  return typeStr
    .replace(/ varying/gi, '')
    .replace(/ without time zone/gi, '')
    .replace(/ with time zone/gi, ' tz')
    .replace(/character/gi, 'char')
    .replace(/double precision/gi, 'double')
    .trim()
}

interface TableViewProviderProps {
  connectionId: string
  databaseName: string
  tableName: string
  schema?: string
  children: ReactNode
}

/** Provider that owns all TableDetailView state, GraphQL operations, and handlers. */
export function TableViewProvider({ connectionId, databaseName, tableName, schema, children }: TableViewProviderProps) {
  const { connections, tableRefreshKey } = useConnectionStore()

  // ---- GraphQL hooks ----
  const [getRows] = useGetStorageUnitRowsLazyQuery({ fetchPolicy: 'no-cache' })

  // ---- Core state ----
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<TableData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [refreshKey, setRefreshKey] = useState(0)
  const [pageSize, setPageSize] = useState(50)

  // ---- Row metadata state ----
  const [primaryKey, setPrimaryKey] = useState<string | null>(null)
  const [foreignKeyColumns, setForeignKeyColumns] = useState<string[]>([])

  // ---- Column resizing state ----
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({})
  const resizingRef = useRef<{ column: string; startX: number; startWidth: number } | null>(null)

  // ---- Sorting state ----
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null)
  const [activeColumnMenu, setActiveColumnMenu] = useState<string | null>(null)

  // ---- Filter state ----
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [visibleColumns, setVisibleColumns] = useState<string[]>([])
  const [filterConditions, setFilterConditions] = useState<FilterCondition[]>([])

  // ---- Modal state ----
  const [showExportModal, setShowExportModal] = useState(false)

  // ---- Alert state ----
  const [alert, setAlert] = useState<Alert | null>(null)

  // ---- Refs ----
  const latestRequestIdRef = useRef(0)
  const filterConditionsRef = useRef(filterConditions)
  const columnsRef = useRef<{ names: string[]; types: string[] }>({ names: [], types: [] })
  const lastTableRef = useRef<string>('')

  // ---- Keep refs in sync ----
  useEffect(() => { filterConditionsRef.current = filterConditions }, [filterConditions])

  useEffect(() => {
    if (data?.columns && data.columns.length > 0) {
      columnsRef.current = {
        names: data.columns,
        types: data.columns.map(c => data.columnTypes[c] ?? 'string'),
      }
    }
  }, [data?.columns, data?.columnTypes])

  // ---- Initialize column widths ----
  useEffect(() => {
    if (data?.columns && Object.keys(columnWidths).length === 0) {
      const initialWidths: Record<string, number> = {}
      data.columns.forEach((col: string) => {
        initialWidths[col] = Math.max(120, col.length * 10 + 60)
      })
      setColumnWidths(initialWidths)
    }
  }, [data?.columns])

  // ---- Column resize mouse event listeners ----
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (resizingRef.current) {
        const { column, startX, startWidth } = resizingRef.current
        const diff = e.clientX - startX
        const newWidth = Math.max(60, startWidth + diff)
        setColumnWidths(prev => ({ ...prev, [column]: newWidth }))
      }
    }

    const handleMouseUp = () => {
      if (resizingRef.current) {
        resizingRef.current = null
        document.body.style.cursor = 'default'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // ---- Alert helpers ----
  const showAlert = useCallback((title: string, message: string, type: Alert['type'] = 'info') => {
    setAlert({ title, message, type })
  }, [])

  const closeAlert = useCallback(() => setAlert(null), [])

  // ---- Refresh ----
  const refresh = useCallback(() => {
    setRefreshKey(prev => prev + 1)
  }, [])

  // ---- Inline editing (edit/add/delete rows) ----
  const { state: editingState, actions: editingActions } = useInlineEditing({
    connectionId,
    databaseName,
    schema,
    tableName,
    primaryKey,
    data,
    refresh,
    showAlert,
  })

  // ---- Main data fetch ----
  const handleSubmitRequest = useCallback(async (overridePageOffset?: number) => {
    const conn = connections.find((c) => c.id === connectionId)
    if (!conn) return

    setLoading(true)
    setError(null)

    latestRequestIdRef.current += 1
    const thisRequestId = latestRequestIdRef.current

    const graphqlSchema = resolveSchemaParam(conn.type, databaseName, schema)

    // Build sort condition
    const sort: SortCondition[] | undefined =
      sortColumn && sortDirection
        ? [{ Column: sortColumn, Direction: sortDirection === 'asc' ? SortDirection.Asc : SortDirection.Desc }]
        : undefined

    // Build filter where condition
    const currentFilters = filterConditionsRef.current
    let filterWhere: WhereCondition | undefined
    if (currentFilters.length > 0) {
      const atomicConditions: WhereCondition[] = currentFilters
        .filter((fc) => fc.column && fc.operator)
        .map((fc) => ({
          Type: WhereConditionType.Atomic,
          Atomic: {
            Key: fc.column,
            Operator: fc.operator,
            Value: fc.value ?? '',
            ColumnType: data?.columnTypes[fc.column] ?? 'string',
          },
        }))

      if (atomicConditions.length === 1) {
        filterWhere = atomicConditions[0]
      } else if (atomicConditions.length > 1) {
        filterWhere = { Type: WhereConditionType.And, And: { Children: atomicConditions } }
      }
    }

    // Build search where condition
    const searchWhere = searchTerm.trim()
      ? parseSearchToWhereCondition(
          searchTerm,
          columnsRef.current.names,
          columnsRef.current.types,
        )
      : undefined

    const where = mergeSearchWithWhere(searchWhere, filterWhere)

    try {
      const { data: result, error: queryError } = await getRows({
        variables: {
          schema: graphqlSchema,
          storageUnit: tableName,
          where,
          sort,
          pageSize,
          pageOffset: overridePageOffset ?? (currentPage - 1) * pageSize,
        },
        context: { database: databaseName },
      })

      if (thisRequestId !== latestRequestIdRef.current) return

      if (queryError) {
        setError(queryError.message)
        return
      }

      if (result?.Row) {
        const tableData = transformRowsResult(result.Row)
        setData(tableData)
        setPrimaryKey(tableData.primaryKey)
        setForeignKeyColumns(tableData.foreignKeyColumns)
        if (visibleColumns.length === 0 && tableData.columns.length > 0) {
          setVisibleColumns(tableData.columns)
        }
      }
    } catch (err: any) {
      if (thisRequestId !== latestRequestIdRef.current) return
      setError(err.message || 'Failed to fetch table data')
    } finally {
      if (thisRequestId === latestRequestIdRef.current) {
        setLoading(false)
      }
    }
  }, [connections, connectionId, databaseName, schema, tableName, sortColumn, sortDirection, searchTerm, pageSize, currentPage, getRows, visibleColumns.length])

  // ---- Table switch: reset state + fetch ----
  useEffect(() => {
    const currentTableKey = `${connectionId}:${databaseName}:${schema || ''}:${tableName}`
    if (lastTableRef.current !== currentTableKey) {
      lastTableRef.current = currentTableKey
      setVisibleColumns([])
      setFilterConditions([])
      setSortColumn(null)
      setSortDirection(null)
      setSearchTerm('')
      setCurrentPage(1)
      editingActions.resetEditing()
    }
  }, [connectionId, databaseName, schema, tableName, editingActions])

  // ---- Initial fetch + refetch on data-changing params ----
  useEffect(() => {
    handleSubmitRequest()
  }, [handleSubmitRequest, refreshKey, tableRefreshKey])

  // ---- Search submit (reset to page 1) ----
  const handleSearchSubmit = useCallback(() => {
    setCurrentPage(1)
    handleSubmitRequest(0)
  }, [handleSubmitRequest])

  // ---- Sorting ----
  const handleSort = useCallback((column: string, direction: 'asc' | 'desc') => {
    setSortColumn(column)
    setSortDirection(direction)
    setActiveColumnMenu(null)
  }, [])

  const clearSort = useCallback(() => {
    setSortColumn(null)
    setSortDirection(null)
    setActiveColumnMenu(null)
  }, [])

  // ---- Column resize start ----
  const handleResizeStart = useCallback((e: React.MouseEvent, column: string) => {
    e.preventDefault()
    e.stopPropagation()
    resizingRef.current = {
      column,
      startX: e.clientX,
      startWidth: columnWidths[column] || 120,
    }
    document.body.style.cursor = 'col-resize'
  }, [columnWidths])

  // ---- Page change (useEffect-driven refetch) ----
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  // ---- Page size change ----
  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size)
    setCurrentPage(1)
  }, [])

  // ---- Filter apply ----
  const handleFilterApply = useCallback((cols: string[], conditions: FilterCondition[]) => {
    setVisibleColumns(cols)
    setFilterConditions(conditions)
    setCurrentPage(1)
    filterConditionsRef.current = conditions
    setRefreshKey(prev => prev + 1)
  }, [])

  // ---- Derived values ----
  const canEdit = data ? !data.disableUpdate : false
  const total = data?.total || 0
  const totalPages = Math.ceil(total / pageSize)

  const state: TableViewState = {
    loading,
    data,
    error,
    primaryKey,
    foreignKeyColumns,
    currentPage,
    pageSize,
    total,
    totalPages,
    searchTerm,
    visibleColumns,
    filterConditions,
    sortColumn,
    sortDirection,
    activeColumnMenu,
    ...editingState,
    columnWidths,
    showExportModal,
    isFilterModalOpen,
    alert,
    canEdit,
  }

  const actions: TableViewActions = {
    refresh,
    handleSubmitRequest,
    handlePageChange,
    handlePageSizeChange,
    setSearchTerm,
    handleSearchSubmit,
    handleSort,
    clearSort,
    setActiveColumnMenu,
    ...editingActions,
    handleResizeStart,
    setIsFilterModalOpen,
    handleFilterApply,
    setShowExportModal,
    showAlert,
    closeAlert,
  }

  return <TableViewCtx value={{ state, actions }}>{children}</TableViewCtx>
}

