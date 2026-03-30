import { createContext, use, useCallback, useEffect, useState, type ReactNode } from 'react'
import { useConnectionStore } from '@/stores/useConnectionStore'
import {
  useGetStorageUnitsLazyQuery,
  useGetStorageUnitRowsLazyQuery,
  useAddStorageUnitMutation,
  useAddRowMutation,
  useDeleteRowMutation,
} from '@graphql'
import { resolveSchemaParam } from '@/utils/database-features'
import type { RedisKey, RedisViewContextValue } from './types'
import type { AlertState } from '@/components/database/shared/types'

const RedisViewCtx = createContext<RedisViewContextValue | null>(null)

/** Hook to access RedisView context. Throws if used outside RedisViewProvider. */
export function useRedisView(): RedisViewContextValue {
  const ctx = use(RedisViewCtx)
  if (!ctx) throw new Error('useRedisView must be used within RedisViewProvider')
  return ctx
}

/** Build fields for AddStorageUnit (create). Redis plugin reads type from fields[0].Extra["type"]. */
function buildRedisFields(keyData: any): Array<{ Key: string; Value: string; Extra?: Array<{ Key: string; Value: string }> }> {
  const fields: Array<{ Key: string; Value: string; Extra?: Array<{ Key: string; Value: string }> }> = []
  switch (keyData.type) {
    case 'string':
      fields.push({ Key: 'value', Value: String(keyData.value ?? '') })
      break
    case 'hash':
      if (Array.isArray(keyData.value)) {
        for (const item of keyData.value) {
          fields.push({ Key: String(item.field ?? ''), Value: String(item.value ?? '') })
        }
      }
      break
    case 'list': case 'set':
      if (Array.isArray(keyData.value)) {
        for (const item of keyData.value) {
          fields.push({ Key: 'value', Value: String(item.value ?? item) })
        }
      }
      break
    case 'zset':
      if (Array.isArray(keyData.value)) {
        for (const item of keyData.value) {
          fields.push({ Key: String(item.score ?? '0'), Value: String(item.member ?? item.value ?? '') })
        }
      }
      break
  }
  // Signal key type to Redis plugin via Extra on first field
  if (fields.length > 0) {
    fields[0] = { ...fields[0], Extra: [{ Key: 'type', Value: keyData.type }] }
  }
  return fields
}

/** Build values for AddRow (update). No Extra needed -- key already has its type. */
function buildRedisValues(keyData: any): Array<{ Key: string; Value: string }> {
  const fields: Array<{ Key: string; Value: string }> = []
  switch (keyData.type) {
    case 'string':
      fields.push({ Key: 'value', Value: String(keyData.value ?? '') })
      break
    case 'hash':
      if (Array.isArray(keyData.value)) {
        for (const item of keyData.value) {
          fields.push({ Key: String(item.field ?? ''), Value: String(item.value ?? '') })
        }
      }
      break
    case 'list': case 'set':
      if (Array.isArray(keyData.value)) {
        for (const item of keyData.value) {
          fields.push({ Key: 'value', Value: String(item.value ?? item) })
        }
      }
      break
    case 'zset':
      if (Array.isArray(keyData.value)) {
        for (const item of keyData.value) {
          fields.push({ Key: String(item.score ?? '0'), Value: String(item.member ?? item.value ?? '') })
        }
      }
      break
  }
  return fields
}

/** Transform GraphQL RowsResult into RedisKeyModal-compatible data. */
function transformRedisRowsToKeyData(keyName: string, keyType: string, rowResult: any): any {
  const columns = rowResult.Columns.map((c: any) => c.Name)
  const rows = rowResult.Rows
  switch (keyType) {
    case 'string':
      return { key: keyName, type: 'string', value: rows[0]?.[0] ?? '', ttl: -1 }
    case 'hash':
      return { key: keyName, type: 'hash', value: rows.map((row: string[]) => ({
        field: row[columns.indexOf('field')] ?? row[0],
        value: row[columns.indexOf('value')] ?? row[1],
      })), ttl: -1 }
    case 'list': case 'set':
      return { key: keyName, type: keyType, value: rows.map((row: string[]) => ({
        value: row[columns.indexOf('value')] ?? row[1] ?? row[0],
      })), ttl: -1 }
    case 'zset':
      return { key: keyName, type: 'zset', value: rows.map((row: string[]) => ({
        member: row[columns.indexOf('member')] ?? row[1],
        score: row[columns.indexOf('score')] ?? row[2],
      })), ttl: -1 }
    default:
      return { key: keyName, type: keyType, value: rows[0]?.[0] ?? '', ttl: -1 }
  }
}

interface RedisViewProviderProps {
  connectionId: string
  databaseName: string
  children: ReactNode
}

/** Provider that owns all RedisDetailView state, GraphQL operations, and handlers. */
export function RedisViewProvider({ connectionId, databaseName, children }: RedisViewProviderProps) {
  const { connections } = useConnectionStore()

  // ---- GraphQL hooks ----
  const [getStorageUnits] = useGetStorageUnitsLazyQuery({ fetchPolicy: 'no-cache' })
  const [getRows] = useGetStorageUnitRowsLazyQuery({ fetchPolicy: 'no-cache' })
  const [addStorageUnitMutation] = useAddStorageUnitMutation()
  const [addRowMutation] = useAddRowMutation()
  const [deleteRowMutation] = useDeleteRowMutation()

  // ---- Core state ----
  const [keys, setKeys] = useState<RedisKey[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(0)

  // ---- Filter state ----
  const [pattern, setPattern] = useState('*')
  const [filterTypes, setFilterTypes] = useState<string[]>([])

  // ---- Pagination state ----
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(50)

  // ---- Modal state ----
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingKey, setEditingKey] = useState<{ key: string; type: string; value: any; ttl?: number } | undefined>(undefined)
  const [deletingKey, setDeletingKey] = useState<RedisKey | undefined>(undefined)
  const [showExportModal, setShowExportModal] = useState(false)

  // ---- Alert state ----
  const [alertState, setAlertState] = useState<AlertState>({
    isOpen: false,
    title: '',
    message: '',
    type: 'info',
  })

  // ---- Alert helpers ----
  const showAlert = useCallback((title: string, message: string, type: AlertState['type'] = 'info') => {
    setAlertState({ isOpen: true, title, message, type })
  }, [])

  const closeAlert = useCallback(() => {
    setAlertState(prev => ({ ...prev, isOpen: false }))
  }, [])

  // ---- Fetch keys ----
  const fetchKeys = useCallback(async () => {
    const conn = connections.find(c => c.id === connectionId)
    if (!conn) return

    const graphqlSchema = resolveSchemaParam(conn.type, databaseName)
    setIsLoading(true)
    try {
      const { data, error } = await getStorageUnits({
        variables: { schema: graphqlSchema },
        context: { database: databaseName },
      })
      if (error) throw new Error(error.message)

      const units = data?.StorageUnit ?? []

      // Transform StorageUnit[] to RedisKey[]
      let redisKeys: RedisKey[] = units.map(unit => {
        const typeAttr = unit.Attributes.find(a => a.Key === 'Type')
        const sizeAttr = unit.Attributes.find(a => a.Key === 'Size')
        return {
          key: unit.Name,
          type: typeAttr?.Value ?? 'unknown',
          size: sizeAttr?.Value ?? '0',
        }
      })

      // Client-side pattern filtering
      if (pattern !== '*') {
        const regexStr = pattern
          .replace(/[.+^${}()|[\]\\]/g, '\\$&')
          .replace(/\*/g, '.*')
          .replace(/\?/g, '.')
        const regex = new RegExp(`^${regexStr}$`, 'i')
        redisKeys = redisKeys.filter(k => regex.test(k.key))
      }

      // Client-side type filtering
      if (filterTypes.length > 0) {
        redisKeys = redisKeys.filter(k => filterTypes.includes(k.type))
      }

      // Client-side pagination
      setTotal(redisKeys.length)
      const start = (page - 1) * pageSize
      const paged = redisKeys.slice(start, start + pageSize)
      setKeys(paged)
    } catch (error: any) {
      showAlert('Error', error.message || 'Failed to fetch Redis keys', 'error')
    } finally {
      setIsLoading(false)
    }
  }, [connections, connectionId, databaseName, page, pageSize, pattern, filterTypes, getStorageUnits, showAlert])

  useEffect(() => {
    fetchKeys()
  }, [fetchKeys])

  // ---- Handlers ----
  const handleApplyFilter = useCallback((newPattern: string, newTypes: string[]) => {
    setPattern(newPattern)
    setFilterTypes(newTypes)
    setPage(1)
  }, [])

  const openAddModal = useCallback(() => {
    setEditingKey(undefined)
    setIsAddModalOpen(true)
  }, [])

  const handleEditKey = useCallback(async (key: RedisKey) => {
    const conn = connections.find(c => c.id === connectionId)
    if (!conn) return
    const graphqlSchema = resolveSchemaParam(conn.type, databaseName)
    try {
      setIsLoading(true)
      const { data, error } = await getRows({
        variables: {
          schema: graphqlSchema,
          storageUnit: key.key,
          pageSize: 1000,
          pageOffset: 0,
        },
        context: { database: databaseName },
      })
      if (error) throw new Error(error.message)
      if (data?.Row) {
        const keyData = transformRedisRowsToKeyData(key.key, key.type, data.Row)
        setEditingKey(keyData)
        setIsAddModalOpen(true)
      }
    } catch (error: any) {
      showAlert('Error', error.message || 'Failed to fetch key details', 'error')
    } finally {
      setIsLoading(false)
    }
  }, [connections, connectionId, databaseName, getRows, showAlert])

  const handleSaveKey = useCallback(async (keyData: any) => {
    const conn = connections.find(c => c.id === connectionId)
    if (!conn) return

    const graphqlSchema = resolveSchemaParam(conn.type, databaseName)

    try {
      if (editingKey) {
        // Update existing key
        const values = buildRedisValues(keyData)
        const { errors } = await addRowMutation({
          variables: { schema: graphqlSchema, storageUnit: keyData.key, values },
          context: { database: databaseName },
        })
        if (errors?.length) throw new Error(errors[0].message)
      } else {
        // Create new key
        const fields = buildRedisFields(keyData)
        const { errors } = await addStorageUnitMutation({
          variables: { schema: graphqlSchema, storageUnit: keyData.key, fields },
          context: { database: databaseName },
        })
        if (errors?.length) throw new Error(errors[0].message)
      }

      showAlert('Success', `Key "${keyData.key}" ${editingKey ? 'updated' : 'created'} successfully!`, 'success')

      setEditingKey(undefined)
      setIsAddModalOpen(false)
      fetchKeys()
    } catch (error: any) {
      showAlert('Error', error.message || 'Failed to save key', 'error')
    }
  }, [connections, connectionId, databaseName, editingKey, addRowMutation, addStorageUnitMutation, fetchKeys, showAlert])

  const handleConfirmDelete = useCallback(async () => {
    if (!deletingKey) return
    const conn = connections.find(c => c.id === connectionId)
    if (!conn) return
    const graphqlSchema = resolveSchemaParam(conn.type, databaseName)
    try {
      const values = [{ Key: 'key', Value: deletingKey.key }]
      const { errors } = await deleteRowMutation({
        variables: { schema: graphqlSchema, storageUnit: deletingKey.key, values },
        context: { database: databaseName },
      })
      if (errors?.length) throw new Error(errors[0].message)
      showAlert('Success', `Key "${deletingKey.key}" deleted successfully!`, 'success')
      setDeletingKey(undefined)
      fetchKeys()
    } catch (error: any) {
      showAlert('Error', error.message || 'Failed to delete key', 'error')
    }
  }, [deletingKey, connections, connectionId, databaseName, deleteRowMutation, fetchKeys, showAlert])

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size)
    setPage(1)
  }, [])

  // ---- Derived values ----
  const totalPages = Math.ceil(total / pageSize)

  const state = {
    keys,
    isLoading,
    total,
    page,
    pageSize,
    totalPages,
    pattern,
    filterTypes,
    isFilterModalOpen,
    isAddModalOpen,
    editingKey,
    deletingKey,
    showExportModal,
    alertState,
  }

  const actions = {
    fetchKeys,
    handlePageChange,
    handlePageSizeChange,
    handleApplyFilter,
    setIsFilterModalOpen,
    handleEditKey,
    handleSaveKey,
    handleConfirmDelete,
    openAddModal,
    setIsAddModalOpen,
    setEditingKey,
    setDeletingKey,
    setShowExportModal,
    closeAlert,
  }

  return <RedisViewCtx value={{ state, actions }}>{children}</RedisViewCtx>
}
