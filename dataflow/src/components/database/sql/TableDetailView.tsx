import { Plus, Minus, Download, RefreshCw, Undo2, Eye, Send } from 'lucide-react'
import { TableViewProvider, useTableView } from './TableView/TableViewProvider'
import { TableViewDataGrid } from './TableView/TableView.DataGrid'
import { DataView } from '@/components/database/shared/DataView'
import { FindBar } from '@/components/database/shared/FindBar'
import { Button } from '@/components/ui/Button'
import { FilterTableModal } from './FilterTableModal'
import { ExportDataModal } from './ExportDataModal'
import { ConfirmationModal } from '@/components/ui/ConfirmationModal'
import { AlertModal } from '@/components/ui/AlertModal'
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

  return (
    <div className="flex flex-col h-full">
      <DataView.FilterBar
        filters={filterChips}
        onClearAll={() => actions.handleFilterApply(state.visibleColumns, [])}
      />

      {/* Action bar */}
      <div className="flex items-center justify-between h-12 pr-2">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={actions.refresh} disabled={state.loading} title={t('sql.actions.refresh')}>
            <RefreshCw className={cn("h-4 w-4", state.loading && "animate-spin")} />
          </Button>
          {state.canEdit && (
            <>
              <Button variant="ghost" size="icon" onClick={actions.handleAddClick} title={t('sql.actions.addData')}>
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" disabled title={t('common.actions.delete')}>
                <Minus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" disabled title={t('common.actions.undo')}>
                <Undo2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => {}} title={t('sql.actions.previewChanges')}>
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => {}} title={t('common.actions.submit')}>
                <Send className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <DataView.FilterButton
            onClick={() => actions.setIsFilterModalOpen(true)}
            count={state.filterConditions.length}
          />
          <Button className="rounded-lg gap-2.5" onClick={() => actions.setShowExportModal(true)}>
            <Download className="h-4 w-4" />
            {t('sql.actions.export')}
          </Button>
        </div>
      </div>

      <FindBar.Provider rows={state.data?.rows} columns={state.visibleColumns}>
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

      <ConfirmationModal
        isOpen={state.showDeleteModal}
        onClose={() => actions.setShowDeleteModal(false)}
        onConfirm={actions.handleConfirmDelete}
        title={t('sql.deleteRow.title')}
        message={t('sql.deleteRow.message')}
        confirmText={t('sql.deleteRow.confirmText')}
        isDestructive={true}
        verificationText={state.deletingRowIndex !== null && state.data?.rows?.[state.deletingRowIndex] && state.primaryKey
          ? String(state.data.rows[state.deletingRowIndex][state.primaryKey])
          : t('common.actions.delete')}
        verificationLabel={state.deletingRowIndex !== null && state.data?.rows?.[state.deletingRowIndex] && state.primaryKey
          ? t('sql.deleteRow.typeToConfirm', { value: String(state.data.rows[state.deletingRowIndex][state.primaryKey]) })
          : t('sql.deleteRow.typeConfirmation')}
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
