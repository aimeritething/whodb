import { useCallback, useEffect, useState } from 'react'
import { useConnectionStore } from '@/stores/useConnectionStore'
import { useGetStorageUnitRowsLazyQuery } from '@graphql'
import { resolveSchemaParam } from '@/utils/database-features'
import { useI18n } from '@/i18n/useI18n'
import { Loader2, RefreshCw } from 'lucide-react'

interface RedisKeyDetailViewProps {
  connectionId: string
  databaseName: string
  keyName: string
}

/** Displays the contents of a single Redis key in a simple table. */
export function RedisKeyDetailView({ connectionId, databaseName, keyName }: RedisKeyDetailViewProps) {
  const { connections } = useConnectionStore()
  const { t } = useI18n()
  const [getRows] = useGetStorageUnitRowsLazyQuery()

  const [columns, setColumns] = useState<string[]>([])
  const [rows, setRows] = useState<string[][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    const conn = connections.find(c => c.id === connectionId)
    if (!conn) return

    const schema = resolveSchemaParam(conn.type, databaseName)
    setLoading(true)
    setError(null)

    try {
      const { data, error: gqlError } = await getRows({
        variables: {
          schema,
          storageUnit: keyName,
          pageSize: 10000,
          pageOffset: 0,
        },
        context: { database: databaseName },
        fetchPolicy: 'no-cache',
      })

      if (gqlError) throw new Error(gqlError.message)

      const result = data?.Row
      if (result) {
        setColumns(result.Columns.map(c => c.Name))
        setRows(result.Rows)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message.trim() : ''
      setError(message || t('redis.detail.fetchFailed'))
    } finally {
      setLoading(false)
    }
  }, [connections, connectionId, databaseName, keyName, getRows, t])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center text-destructive">
        {error}
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-border shrink-0">
        <button
          onClick={fetchData}
          className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          title={t('common.actions.refresh')}
        >
          <RefreshCw className="h-4 w-4" />
        </button>
        <span className="text-sm text-muted-foreground ml-2">{keyName}</span>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead className="border-b sticky top-0 z-10 bg-background">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="text-left font-medium text-muted-foreground px-4 py-2 h-10 border-r border-border/50 last:border-r-0"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-muted/50 transition-colors">
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="px-4 py-2 border-b border-border/50 border-r border-r-border/50 last:border-r-0 font-mono text-xs"
                  >
                    <span className="block truncate max-w-[500px]" title={cell}>
                      {cell}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {rows.length === 0 && (
          <div className="flex items-center justify-center py-12 text-muted-foreground text-sm">
            {t('redis.detail.empty')}
          </div>
        )}
      </div>
    </div>
  )
}
