import { Plus, Minus, Download, RefreshCw, Undo2 } from 'lucide-react'
import { RedisViewProvider, useRedisView } from './RedisView/RedisViewProvider'
import { RedisViewFilterBar } from './RedisView/RedisView.FilterBar'
import { RedisViewKeyList } from './RedisView/RedisView.KeyList'
import { DataView } from '@/components/database/shared/DataView'
import { Button } from '@/components/ui/Button'
import { RedisKeyModal } from './RedisKeyModal'
import { ConfirmationModal } from '@/components/ui/ConfirmationModal'
import { ExportRedisModal } from './ExportRedisModal'
import { AlertModal } from '@/components/ui/AlertModal'
import { RedisFilterModal } from './RedisFilterModal'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/useI18n'

interface RedisDetailViewProps {
  connectionId: string
  databaseName: string
}

/** Redis key browser composed from Provider + subcomponents. */
export function RedisDetailView(props: RedisDetailViewProps) {
  return (
    <RedisViewProvider {...props}>
      <RedisDetailViewContent {...props} />
    </RedisViewProvider>
  )
}

/** Inner content rendered within the RedisViewProvider context. */
function RedisDetailViewContent({ connectionId, databaseName }: RedisDetailViewProps) {
  const { t } = useI18n()
  const { state, actions } = useRedisView()

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Action bar */}
      <div className="flex items-center justify-between h-12 pr-2">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => actions.refresh()} disabled={state.loading} title={t('redis.actions.refresh')}>
            <RefreshCw className={cn("h-4 w-4", state.loading && "animate-spin")} />
          </Button>
          <Button variant="ghost" size="icon" onClick={actions.openAddModal} title={t('redis.actions.addKey')}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" disabled title={t('common.actions.delete')}>
            <Minus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" disabled title={t('common.actions.undo')}>
            <Undo2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <DataView.FilterButton onClick={() => actions.setIsFilterModalOpen(true)} />
          <Button className="rounded-lg gap-2.5" onClick={() => actions.setShowExportModal(true)}>
            <Download className="h-4 w-4" />
            {t('redis.actions.export')}
          </Button>
        </div>
      </div>

      <RedisViewFilterBar />
      <RedisViewKeyList />

      {state.total > 0 && (
        <DataView.Pagination
          currentPage={state.currentPage}
          totalPages={state.totalPages}
          pageSize={state.pageSize}
          total={state.total}
          loading={state.loading}
          itemLabel={t('redis.pagination.keys')}
          onPageChange={actions.handlePageChange}
          onPageSizeChange={actions.handlePageSizeChange}
        />
      )}

      <RedisKeyModal
        open={state.isAddModalOpen}
        onOpenChange={(open) => {
          if (!open) {
            actions.setIsAddModalOpen(false)
            actions.setEditingKey(undefined)
          }
        }}
        onSave={actions.handleSaveKey}
        initialData={state.editingKey}
      />

      <ConfirmationModal
        isOpen={!!state.deletingKey}
        onClose={() => actions.setDeletingKey(undefined)}
        onConfirm={actions.handleConfirmDelete}
        title={t('redis.delete.title')}
        message={t('redis.delete.message', { key: state.deletingKey?.key ?? '' })}
        confirmText={t('redis.delete.confirmText')}
        isDestructive
      />

      <ExportRedisModal
        open={state.showExportModal}
        onOpenChange={actions.setShowExportModal}
        connectionId={connectionId}
        databaseName={databaseName}
        initialPattern={state.pattern}
        initialTypes={state.filterTypes}
      />

      {state.alert && (
        <AlertModal
          isOpen
          onClose={actions.closeAlert}
          {...state.alert}
        />
      )}

      <RedisFilterModal
        open={state.isFilterModalOpen}
        onOpenChange={actions.setIsFilterModalOpen}
        onApply={actions.handleApplyFilter}
        initialPattern={state.pattern}
        initialTypes={state.filterTypes}
      />
    </div>
  )
}
