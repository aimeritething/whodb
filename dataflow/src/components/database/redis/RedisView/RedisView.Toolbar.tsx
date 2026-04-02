import { Plus, Minus, Download, RefreshCw, Undo2, TerminalSquare } from 'lucide-react'
import { useRedisView } from './RedisViewProvider'
import { DataView } from '@/components/database/shared/DataView'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/useI18n'
import { useTabStore } from '@/stores/useTabStore'

interface RedisViewToolbarProps {
  connectionId: string
  databaseName: string
}

export function RedisViewToolbar({ connectionId, databaseName }: RedisViewToolbarProps) {
  const { t } = useI18n()
  const { state, actions } = useRedisView()
  const openTab = useTabStore((s) => s.openTab)

  const handleOpenQuery = () => {
    openTab({
      type: 'query',
      title: t('sidebar.tab.queryWithDatabase', { database: databaseName }),
      connectionId,
      databaseName,
      sqlContent: 'KEYS *',
    })
  }

  return (
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
        <Button className="rounded-lg gap-2.5 min-w-[86px]" onClick={() => actions.setShowExportModal(true)}>
          <Download className="h-4 w-4" />
          {t('redis.actions.export')}
        </Button>
        <Button className="rounded-lg gap-2.5 min-w-[86px]" onClick={handleOpenQuery}>
          <TerminalSquare className="h-4 w-4" />
          {t('redis.actions.query')}
        </Button>
      </div>
    </div>
  )
}
