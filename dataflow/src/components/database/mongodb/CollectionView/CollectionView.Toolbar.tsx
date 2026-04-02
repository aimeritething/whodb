import { Plus, Minus, Download, RefreshCw, Undo2 } from 'lucide-react'
import { useCollectionView } from './CollectionViewProvider'
import { DataView } from '@/components/database/shared/DataView'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/useI18n'

export function CollectionViewToolbar() {
  const { t } = useI18n()
  const { state, actions } = useCollectionView()

  return (
    <div className="flex items-center justify-between h-12 pr-2">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={actions.refresh} disabled={state.loading} title={t('mongodb.collection.refresh')}>
          <RefreshCw className={cn('h-4 w-4', state.loading && 'animate-spin')} />
        </Button>
        <Button variant="ghost" size="icon" onClick={actions.handleAddClick} title={t('mongodb.collection.addData')}>
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
        <DataView.FilterButton
          onClick={() => actions.setIsFilterModalOpen(true)}
          count={Object.keys(state.activeFilter).length}
        />
        <Button className="rounded-lg gap-2.5 min-w-[86px]" onClick={() => actions.setShowExportModal(true)}>
          <Download className="h-4 w-4" />
          {t('mongodb.collection.export')}
        </Button>
      </div>
    </div>
  )
}
