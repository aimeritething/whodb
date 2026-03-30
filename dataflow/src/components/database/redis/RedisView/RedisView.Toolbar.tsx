import { Plus, Filter, Download, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useRedisView } from './RedisViewProvider'

/** Action toolbar with Add Key, Filter, Export, and Refresh buttons. */
export function RedisViewToolbar() {
  const { state, actions } = useRedisView()

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={actions.openAddModal}
        size="sm"
        className="gap-2 shadow-sm"
      >
        <Plus className="h-3.5 w-3.5" />
        Add Key
      </Button>
      <div className="h-4 w-px bg-border mx-1" />
      <Button
        variant="outline"
        size="sm"
        className="h-8 gap-2"
        onClick={() => actions.setIsFilterModalOpen(true)}
      >
        <Filter className="h-3.5 w-3.5" />
        Filter
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-8 gap-2"
        onClick={() => actions.setShowExportModal(true)}
      >
        <Download className="h-3.5 w-3.5" />
        Export
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-8 gap-2"
        onClick={() => actions.fetchKeys()}
        disabled={state.isLoading}
      >
        <RefreshCw className={cn("h-3.5 w-3.5", state.isLoading && "animate-spin")} />
        Refresh
      </Button>
    </div>
  )
}
