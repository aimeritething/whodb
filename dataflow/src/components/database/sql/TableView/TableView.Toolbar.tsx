import { Plus, Minus, Download, RefreshCw, Undo2, Eye, SendHorizontal, TerminalSquare } from 'lucide-react'
import { useTableView } from './TableViewProvider'
import { DataView } from '@/components/database/shared/DataView'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/i18n/useI18n'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { useTabStore } from '@/stores/useTabStore'

interface TableViewToolbarProps {
  connectionId: string
  databaseName: string
  tableName: string
  schema?: string
}

export function TableViewToolbar({ connectionId, databaseName, tableName, schema }: TableViewToolbarProps) {
  const { t } = useI18n()
  const { state, actions } = useTableView()
  const openTab = useTabStore((s) => s.openTab)

  const handleOpenQuery = () => {
    const qualifiedName = schema ? `${schema}.${tableName}` : tableName
    openTab({
      type: 'query',
      title: t('sidebar.tab.queryWithDatabase', { database: databaseName }),
      connectionId,
      databaseName,
      schemaName: schema,
      sqlContent: `SELECT * FROM ${qualifiedName};`,
    })
  }

  return (
    <div className="flex items-center justify-between h-12 px-2">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={actions.refresh} disabled={state.loading}>
          <RefreshCw className={cn('h-4 w-4', state.loading && 'animate-spin')} />
        </Button>

        <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />

        {state.canEdit && (
          <>
            <Button variant="ghost" size="icon" onClick={actions.addPendingRow}>
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={actions.markSelectedRowsForDelete}
              disabled={state.selectedRowKeys.size === 0}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={actions.undoLastChange}
              disabled={state.undoStack.length === 0}
            >
              <Undo2 className="h-4 w-4" />
            </Button>

            <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => actions.setShowPreviewModal(true)}
              disabled={!state.hasPendingChanges}
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => actions.setShowSubmitModal(true)}
              disabled={!state.hasPendingChanges}
            >
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <DataView.FilterButton
          onClick={() => actions.setIsFilterModalOpen(true)}
          count={state.filterConditions.length}
        />
        <Button className="rounded-lg gap-2.5 min-w-[86px]" onClick={() => actions.setShowExportModal(true)}>
          <Download className="h-4 w-4" />
          {t('sql.actions.export')}
        </Button>
        <Button className="rounded-lg gap-2.5 min-w-[86px]" onClick={handleOpenQuery}>
          <TerminalSquare className="h-4 w-4" />
          {t('sql.actions.query')}
        </Button>
      </div>
    </div>
  )
}
