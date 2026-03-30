import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useRedisView } from './RedisViewProvider'

/** Displays applied filter chips for pattern and type filters with dismiss controls. */
export function RedisViewFilterBar() {
  const { state, actions } = useRedisView()

  if (state.pattern === '*' && state.filterTypes.length === 0) return null

  return (
    <div className="px-6 py-2 bg-muted/30 border-b border-border/50 flex items-center gap-2 animate-in slide-in-from-top-2 duration-200 flex-wrap">
      <span className="text-xs font-medium text-muted-foreground mr-2">Filtered by:</span>

      {state.pattern !== '*' && (
        <div className="flex items-center gap-1 bg-background border border-border rounded-full px-3 py-1 text-xs">
          <span className="text-muted-foreground">Pattern:</span>
          <span className="font-medium">{state.pattern}</span>
          <button
            onClick={() => actions.handleApplyFilter('*', state.filterTypes)}
            className="ml-1 hover:text-destructive"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {state.filterTypes.length > 0 && (
        <div className="flex items-center gap-1 bg-background border border-border rounded-full px-3 py-1 text-xs">
          <span className="text-muted-foreground">Types:</span>
          <span className="font-medium">{state.filterTypes.map(t => t.toUpperCase()).join(', ')}</span>
          <button
            onClick={() => actions.handleApplyFilter(state.pattern, [])}
            className="ml-1 hover:text-destructive"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      <Button
        variant="ghost"
        size="sm"
        className="h-6 text-xs text-muted-foreground hover:text-destructive ml-auto"
        onClick={() => actions.handleApplyFilter('*', [])}
      >
        Clear All
      </Button>
    </div>
  )
}
