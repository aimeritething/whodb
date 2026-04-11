import { createContext, use, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  useAddRowMutation,
  useDeleteRowMutation,
  useGetStorageUnitRowsLazyQuery,
  useUpdateStorageUnitMutation,
  SortDirection,
  type RecordInput,
  type SortCondition,
} from '@graphql'
import { useI18n } from '@/i18n/useI18n'
import { useConnectionStore } from '@/stores/useConnectionStore'
import { useTabStore } from '@/stores/useTabStore'
import { resolveSchemaParam } from '@/utils/database-features'
import { transformRowsResult, type TableData } from '@/utils/graphql-transforms'
import { useColumnResize } from '@/components/database/sql/TableView/useColumnResize'
import {
  buildAddRowValues,
  buildDeleteRowValues,
  buildRedisQuery,
  detectRedisKeyType,
} from './redis-view.utils'
import type { RedisViewContextValue } from './types'

const RedisViewCtx = createContext<RedisViewContextValue | null>(null)

export function useRedisView(): RedisViewContextValue {
  const ctx = use(RedisViewCtx)
  if (!ctx) throw new Error('useRedisView must be used within RedisViewProvider')
  return ctx
}

interface RedisViewProviderProps {
  connectionId: string
  databaseName: string
  keyName: string
  children: ReactNode
}

export function RedisViewProvider({ connectionId, databaseName, keyName, children }: RedisViewProviderProps) {
  const { connections, tableRefreshKey } = useConnectionStore()
  const openTab = useTabStore((state) => state.openTab)
  const { t } = useI18n()

  const [getRows] = useGetStorageUnitRowsLazyQuery({ fetchPolicy: 'no-cache' })
  const [addRowMutation] = useAddRowMutation()
  const [deleteRowMutation] = useDeleteRowMutation()
  const [updateMutation] = useUpdateStorageUnitMutation()

  const [data, setData] = useState<TableData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(50)

  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null)
  const [activeColumnMenu, setActiveColumnMenu] = useState<string | null>(null)

  const [activeCell, setActiveCell] = useState<{ rowIdx: number; column: string } | null>(null)
  const [activeDraftValue, setActiveDraftValue] = useState('')
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())
  const [newRow, setNewRow] = useState<Record<string, string> | null>(null)
  const [mutating, setMutating] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const [isChartModalOpen, setIsChartModalOpen] = useState(false)

  const latestRequestIdRef = useRef(0)

  const columns = data?.columns ?? []
  const rows = data?.rows ?? []
  const total = data?.total ?? 0
  const disableUpdate = data?.disableUpdate ?? false
  const keyType = columns.length > 0 ? detectRedisKeyType(columns, disableUpdate) : 'string'
  const canEdit = !disableUpdate
  const canAdd = keyType !== 'string'
  const totalPages = Math.ceil(total / pageSize)

  const {
    columnWidths,
    resizingColumn,
    resizedColumns,
    handleResizeStart,
  } = useColumnResize(data?.columns)

  const fetchData = useCallback(async () => {
    const connection = connections.find((item) => item.id === connectionId)
    if (!connection) return

    setLoading(true)
    setError(null)

    latestRequestIdRef.current += 1
    const requestId = latestRequestIdRef.current

    const schema = resolveSchemaParam(connection.type, databaseName)
    const sort: SortCondition[] | undefined = sortColumn && sortDirection
      ? [{ Column: sortColumn, Direction: sortDirection === 'asc' ? SortDirection.Asc : SortDirection.Desc }]
      : undefined

    try {
      const { data: result, error: gqlError } = await getRows({
        variables: {
          schema,
          storageUnit: keyName,
          sort,
          pageSize,
          pageOffset: (currentPage - 1) * pageSize,
        },
        context: { database: databaseName },
      })

      if (requestId !== latestRequestIdRef.current) return
      if (gqlError) {
        setError(gqlError.message)
        return
      }

      if (result?.Row) {
        setData(transformRowsResult(result.Row))
      }
    } catch (err) {
      if (requestId !== latestRequestIdRef.current) return
      const message = err instanceof Error ? err.message.trim() : ''
      setError(message || t('redis.detail.fetchFailed'))
    } finally {
      if (requestId === latestRequestIdRef.current) {
        setLoading(false)
      }
    }
  }, [connections, connectionId, currentPage, databaseName, getRows, keyName, pageSize, sortColumn, sortDirection, t])

  useEffect(() => {
    fetchData()
  }, [fetchData, refreshKey, tableRefreshKey])

  const refresh = useCallback(() => {
    setSelectedRows(new Set())
    setRefreshKey((value) => value + 1)
  }, [])

  const handleSort = useCallback((column: string, direction: 'asc' | 'desc') => {
    setSortColumn(column)
    setSortDirection(direction)
    setCurrentPage(1)
    setActiveColumnMenu(null)
  }, [])

  const clearSort = useCallback(() => {
    setSortColumn(null)
    setSortDirection(null)
    setCurrentPage(1)
    setActiveColumnMenu(null)
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size)
    setCurrentPage(1)
  }, [])

  const activateCell = useCallback((rowIdx: number, column: string) => {
    setActiveCell({ rowIdx, column })
    setActiveDraftValue(rows[rowIdx]?.[column] ?? '')
  }, [rows])

  const deactivateCell = useCallback(() => {
    setActiveCell(null)
  }, [])

  const commitCellEdit = useCallback(async () => {
    if (!activeCell) return

    const { rowIdx, column } = activeCell
    const row = rows[rowIdx]
    if (!row || activeDraftValue === row[column]) {
      deactivateCell()
      return
    }

    const connection = connections.find((item) => item.id === connectionId)
    if (!connection) return

    const schema = resolveSchemaParam(connection.type, databaseName)
    setMutating(true)

    try {
      if (keyType === 'zset' && column === 'score') {
        await addRowMutation({
          variables: {
            schema,
            storageUnit: keyName,
            values: [{ Key: 'member', Value: row.member }, { Key: 'score', Value: activeDraftValue }],
          },
          context: { database: databaseName },
        })
      } else {
        const values: RecordInput[] = columns.map((col) => ({
          Key: col,
          Value: col === column ? activeDraftValue : row[col],
        }))

        await updateMutation({
          variables: { schema, storageUnit: keyName, values, updatedColumns: [column] },
          context: { database: databaseName },
        })
      }

      deactivateCell()
      refresh()
    } catch {
      setError(t('redis.detail.editFailed'))
    } finally {
      setMutating(false)
    }
  }, [activeCell, activeDraftValue, addRowMutation, columns, connections, connectionId, databaseName, deactivateCell, keyName, keyType, refresh, rows, t, updateMutation])

  const handleCellKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      deactivateCell()
      return
    }

    if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) {
      event.preventDefault()
      void commitCellEdit()
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      void commitCellEdit()
    }
  }, [commitCellEdit, deactivateCell])

  const startNewRow = useCallback(() => {
    const nextRow: Record<string, string> = {}
    columns.forEach((col) => {
      nextRow[col] = ''
    })
    setNewRow(nextRow)
  }, [columns])

  const cancelNewRow = useCallback(() => {
    setNewRow(null)
  }, [])

  const updateNewRowValue = useCallback((column: string, value: string) => {
    setNewRow((current) => current ? { ...current, [column]: value } : null)
  }, [])

  const confirmNewRow = useCallback(async () => {
    if (!newRow) return

    const connection = connections.find((item) => item.id === connectionId)
    if (!connection) return

    const schema = resolveSchemaParam(connection.type, databaseName)
    setMutating(true)

    try {
      await addRowMutation({
        variables: {
          schema,
          storageUnit: keyName,
          values: buildAddRowValues(newRow, keyType),
        },
        context: { database: databaseName },
      })
      setNewRow(null)
      refresh()
    } catch {
      setError(t('redis.detail.addFailed'))
    } finally {
      setMutating(false)
    }
  }, [addRowMutation, connections, connectionId, databaseName, keyName, keyType, newRow, refresh, t])

  const handleNewRowKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      cancelNewRow()
      return
    }

    if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) {
      event.preventDefault()
      void confirmNewRow()
    }
  }, [cancelNewRow, confirmNewRow])

  const toggleRowSelection = useCallback((rowIdx: number) => {
    setSelectedRows((current) => {
      const next = new Set(current)
      if (next.has(rowIdx)) next.delete(rowIdx)
      else next.add(rowIdx)
      return next
    })
  }, [])

  const handleDeleteSelected = useCallback(async () => {
    if (selectedRows.size === 0) return

    const connection = connections.find((item) => item.id === connectionId)
    if (!connection) return

    const schema = resolveSchemaParam(connection.type, databaseName)
    setMutating(true)
    const indices = [...selectedRows].sort((left, right) => right - left)

    try {
      for (const rowIdx of indices) {
        const row = rows[rowIdx]
        if (!row) continue

        await deleteRowMutation({
          variables: {
            schema,
            storageUnit: keyName,
            values: buildDeleteRowValues(row, keyType, keyName),
          },
          context: { database: databaseName },
        })
      }

      refresh()
    } catch {
      setError(t('redis.detail.deleteFailed'))
    } finally {
      setMutating(false)
    }
  }, [connections, connectionId, databaseName, deleteRowMutation, keyName, keyType, refresh, rows, selectedRows, t])

  const dismissError = useCallback(() => {
    setError(null)
  }, [])

  const openQuery = useCallback(() => {
    openTab({
      type: 'query',
      title: t('sidebar.tab.queryWithDatabase', { database: databaseName }),
      connectionId,
      databaseName,
    })
  }, [connectionId, databaseName, openTab, t])

  const chartInitialData = useMemo(() => {
    if (!data) return undefined

    return {
      connectionId,
      databaseName,
      query: buildRedisQuery(keyType, keyName),
      columns,
      rows,
    }
  }, [columns, connectionId, data, databaseName, keyName, keyType, rows])

  const state: RedisViewContextValue['state'] = {
    data,
    hasLoadedData: data !== null,
    loading,
    error,
    columns,
    rows,
    total,
    currentPage,
    pageSize,
    totalPages,
    keyType,
    canEdit,
    canAdd,
    sortColumn,
    sortDirection,
    activeColumnMenu,
    columnWidths,
    resizingColumn,
    resizedColumns,
    activeCell,
    activeDraftValue,
    selectedRows,
    newRow,
    mutating,
    showDeleteConfirm,
    showExport,
    isChartModalOpen,
  }

  const actions: RedisViewContextValue['actions'] = {
    refresh,
    handleSort,
    clearSort,
    setActiveColumnMenu,
    handlePageChange,
    handlePageSizeChange,
    handleResizeStart,
    activateCell,
    deactivateCell,
    setActiveDraftValue,
    commitCellEdit,
    handleCellKeyDown,
    toggleRowSelection,
    startNewRow,
    cancelNewRow,
    confirmNewRow,
    updateNewRowValue,
    handleNewRowKeyDown,
    setShowDeleteConfirm,
    handleDeleteSelected,
    setShowExport,
    setIsChartModalOpen,
    dismissError,
  }

  const meta: RedisViewContextValue['meta'] = {
    connectionId,
    databaseName,
    keyName,
    openQuery,
    chartInitialData,
  }

  return (
    <RedisViewCtx value={{ state, actions, meta }}>
      {children}
    </RedisViewCtx>
  )
}
