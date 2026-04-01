import { Plus, Minus, Download, RefreshCw, Undo2, Eye, Send } from 'lucide-react'
import { TableViewProvider, useTableView } from './TableView/TableViewProvider'
import { TableViewDataGrid } from './TableView/TableView.DataGrid'
import { buildPreviewSql, summarizeChanges } from './TableView/changeset-sql-preview'
import { DataView } from '@/components/database/shared/DataView'
import { FindBar } from '@/components/database/shared/FindBar'
import { ActionButton } from '@/components/ui/ActionButton'
import { FilterTableModal } from './FilterTableModal'
import { ExportDataModal } from './ExportDataModal'
import { ConfirmationModal } from '@/components/ui/ConfirmationModal'
import { AlertModal } from '@/components/ui/AlertModal'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useI18n } from '@/i18n/useI18n'
import { cn } from '@/lib/utils'
import type { FilterChip } from '@/components/database/shared/types'

interface TableDetailViewProps {
  connectionId: string
  databaseName: string
  tableName: string
  schema?: string
}

export function TableDetailView(props: TableDetailViewProps) {
  return (
    <TableViewProvider {...props}>
      <TableDetailViewContent {...props} />
    </TableViewProvider>
  )
}

function TableDetailViewContent({ databaseName, tableName, schema }: TableDetailViewProps) {
  const { t } = useI18n()
  const { state, actions } = useTableView()

  if (state.error) {
    return <DataView.Error message={state.error} onRetry={() => actions.handleSubmitRequest()} />
  }

  const filterChips: FilterChip[] = state.filterConditions.map((condition, idx) => ({
    id: condition.id,
    label: `${condition.column} ${condition.operator}`,
    value: ['IS NULL', 'IS NOT NULL'].includes(condition.operator) ? '' : condition.value,
    onRemove: () => {
      const remaining = state.filterConditions.filter((_, i) => i !== idx)
      actions.handleFilterApply(state.visibleColumns, remaining)
    },
  }))

  const previewStatements = buildPreviewSql(tableName, state.changes)
  const summary = summarizeChanges(state.changes)

  return (
    <div className="flex h-full flex-col">
      <DataView.FilterBar
        filters={filterChips}
        onClearAll={() => actions.handleFilterApply(state.visibleColumns, [])}
      />

      <div className="flex items-center justify-between border-b border-border/50 px-4 py-2">
        <div className="flex items-center gap-2">
          {state.canEdit && (
            <>
              <ActionButton onClick={actions.addPendingRow}>
                <Plus className="h-3.5 w-3.5" />
                {t('sql.actions.addData')}
              </ActionButton>
              <ActionButton
                variant="outline"
                onClick={actions.markSelectedRowsForDelete}
                disabled={state.selectedRowKeys.size === 0}
              >
                <Minus className="h-3.5 w-3.5" />
                {t('sql.changes.deleteSelected')}
              </ActionButton>
              <ActionButton
                variant="outline"
                onClick={actions.undoLastChange}
                disabled={state.undoStack.length === 0}
              >
                <Undo2 className="h-3.5 w-3.5" />
                {t('sql.changes.undo')}
              </ActionButton>
              <ActionButton
                variant="outline"
                onClick={() => actions.setShowPreviewModal(true)}
                disabled={!state.hasPendingChanges}
              >
                <Eye className="h-3.5 w-3.5" />
                {t('sql.actions.previewChanges')}
              </ActionButton>
              <ActionButton
                onClick={() => actions.setShowSubmitModal(true)}
                disabled={!state.hasPendingChanges}
              >
                <Send className="h-3.5 w-3.5" />
                {t('sql.changes.submit', { count: state.pendingChangeCount })}
              </ActionButton>
              <div className="mx-1 h-4 w-px bg-border" />
            </>
          )}
          <DataView.FilterButton
            onClick={() => actions.setIsFilterModalOpen(true)}
            count={state.filterConditions.length}
          />

          <ActionButton variant="outline" onClick={() => actions.setShowExportModal(true)}>
            <Download className="h-3.5 w-3.5" />
            {t('sql.actions.export')}
          </ActionButton>

          <ActionButton variant="outline" onClick={actions.refresh} disabled={state.loading}>
            <div className={cn('flex items-center justify-center', state.loading && 'animate-spin')}>
              <RefreshCw className="h-3.5 w-3.5" />
            </div>
            {t('sql.actions.refresh')}
          </ActionButton>
        </div>
      </div>

      <FindBar.Provider
        rows={state.renderedRows.map((row) => row.values)}
        columns={state.visibleColumns}
      >
        <FindBar.Bar />
        <TableViewDataGrid />
      </FindBar.Provider>

      {state.total > 0 && (
        <DataView.Pagination
          currentPage={state.currentPage}
          totalPages={state.totalPages}
          pageSize={state.pageSize}
          total={state.total}
          loading={state.loading}
          onPageChange={actions.handlePageChange}
          onPageSizeChange={actions.handlePageSizeChange}
        />
      )}

      <FilterTableModal
        open={state.isFilterModalOpen}
        onOpenChange={actions.setIsFilterModalOpen}
        columns={state.data?.columns || []}
        initialSelectedColumns={state.visibleColumns}
        initialConditions={state.filterConditions}
        onApply={actions.handleFilterApply}
      />

      {state.showExportModal && (
        <ExportDataModal
          open={state.showExportModal}
          onOpenChange={(open) => { if (!open) actions.setShowExportModal(false) }}
          databaseName={databaseName}
          schema={schema}
          tableName={tableName}
        />
      )}

      <Dialog open={state.showPreviewModal} onOpenChange={actions.setShowPreviewModal}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{t('sql.changes.previewTitle')}</DialogTitle>
            <DialogDescription>
              {t('sql.changes.previewDescription', { count: state.pendingChangeCount })}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="max-h-[60vh] rounded-md border bg-muted/20">
            <pre className="whitespace-pre-wrap p-4 font-mono text-xs">
              {previewStatements.join('\n\n')}
            </pre>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <ConfirmationModal
        isOpen={state.showSubmitModal}
        onClose={() => actions.setShowSubmitModal(false)}
        onConfirm={actions.submitChanges}
        title={t('sql.changes.submitConfirmTitle', { count: state.pendingChangeCount })}
        message={t('sql.changes.submitConfirmMessage', {
          count: state.pendingChangeCount,
          updates: summary.updates,
          inserts: summary.inserts,
          deletes: summary.deletes,
        })}
        confirmText={t('common.actions.confirm')}
      />

      <ConfirmationModal
        isOpen={state.showDiscardModal}
        onClose={() => actions.setShowDiscardModal(false)}
        onConfirm={actions.confirmDiscardAndContinue}
        title={t('sql.changes.discardTitle')}
        message={t('sql.changes.discardMessage', { count: state.pendingChangeCount })}
        confirmText={t('common.actions.discard')}
      />

      {state.alert && (
        <AlertModal
          isOpen
          onClose={actions.closeAlert}
          {...state.alert}
        />
      )}
    </div>
  )
}
