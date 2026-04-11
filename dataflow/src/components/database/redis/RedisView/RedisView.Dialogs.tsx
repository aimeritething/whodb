import { ChartCreateModal } from '@/components/analysis/chart-create'
import { ConfirmationModal } from '@/components/ui/ConfirmationModal'
import { ExportRedisKeyModal } from '../ExportRedisKeyModal'
import { useI18n } from '@/i18n/useI18n'
import { useRedisView } from './RedisViewProvider'

export function RedisViewDialogs() {
  const { t } = useI18n()
  const { state, actions, meta } = useRedisView()

  return (
    <>
      <ConfirmationModal
        isOpen={state.showDeleteConfirm}
        onClose={() => actions.setShowDeleteConfirm(false)}
        onConfirm={actions.handleDeleteSelected}
        title={t('redis.detail.confirmDeleteTitle')}
        message={t('redis.detail.confirmDeleteMessage', { count: String(state.selectedRows.size) })}
        isDestructive
      />

      <ExportRedisKeyModal
        open={state.showExport}
        onOpenChange={actions.setShowExport}
        connectionId={meta.connectionId}
        databaseName={meta.databaseName}
        keyName={meta.keyName}
      />

      <ChartCreateModal
        open={state.isChartModalOpen}
        onOpenChange={actions.setIsChartModalOpen}
        initialData={meta.chartInitialData}
      />
    </>
  )
}
