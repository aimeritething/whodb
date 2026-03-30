import { Plus, Filter, Download, RefreshCw, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/utils'
import { useCollectionView } from './CollectionViewProvider'

/** Secondary toolbar with search input, Add Data, Filter, Export, and Refresh buttons. */
export function CollectionViewToolbar() {
  const { state, actions } = useCollectionView()

  return (
    <div className="border-b border-border/50 px-6 py-4 flex items-center justify-between bg-card">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            className="h-8 w-[200px] pl-8 text-sm"
            placeholder="Search..."
            value={state.searchTerm}
            onChange={(e) => actions.setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={actions.handleAddClick} size="sm" className="gap-2 shadow-sm">
          <Plus className="h-3.5 w-3.5" />
          Add Data
        </Button>
        <div className="h-4 w-px bg-border mx-1" />
        <Button
          onClick={() => actions.setShowFilterModal(true)}
          variant="outline"
          size="sm"
          className={cn(
            'h-8 gap-2',
            Object.keys(state.activeFilter).length > 0 && 'bg-primary/10 text-primary border-primary/50',
          )}
        >
          <div className="relative flex items-center gap-2">
            <Filter className="h-3.5 w-3.5" />
            Filter
            {Object.keys(state.activeFilter).length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-3 h-3 text-[8px] font-bold rounded-full bg-primary text-primary-foreground">
                {Object.keys(state.activeFilter).length}
              </span>
            )}
          </div>
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
          onClick={actions.refresh}
          disabled={state.loading}
        >
          <div className={cn('flex items-center justify-center', state.loading && 'animate-spin')}>
            <RefreshCw className="h-3.5 w-3.5" />
          </div>
          Refresh
        </Button>
      </div>
    </div>
  )
}
