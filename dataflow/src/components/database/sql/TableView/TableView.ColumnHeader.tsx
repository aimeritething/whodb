import {
  ArrowUpAZ,
  ArrowDownAZ,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useI18n } from '@/i18n/useI18n'
import { useTableView, simplifyColumnType } from './TableViewProvider'
import { TabularBrowser } from '@/components/database/shared/TabularBrowser'

interface ColumnHeaderProps {
  column: string
  index: number
}

/** Renders a single column header `<th>` with type badge, sort indicator, menu dropdown, and resize handle. */
export function TableViewColumnHeader({ column, index }: ColumnHeaderProps) {
  const { t } = useI18n()
  const { state, actions } = useTableView()
  const width = state.columnWidths[column] || 120

  return (
    <TabularBrowser.SortHeaderCell
      column={column}
      width={width}
      isResized={state.resizedColumns.has(column)}
      isResizing={state.resizingColumn === column}
      menuOpen={state.activeColumnMenu === column}
      onMenuOpenChange={(open) => actions.setActiveColumnMenu(open ? column : null)}
      sortDirection={state.sortColumn === column ? state.sortDirection : null}
      sortLabel={t('sql.table.sortActions')}
      sortAscLabel={t('sql.table.sortAsc')}
      sortDescLabel={t('sql.table.sortDesc')}
      clearSortLabel={t('sql.table.clearSort')}
      onSortAsc={() => actions.handleSort(column, 'asc')}
      onSortDesc={() => actions.handleSort(column, 'desc')}
      onClearSort={() => actions.clearSort()}
      onResizeStart={actions.handleResizeStart}
      align={index === 0 ? 'start' : 'end'}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center gap-1">
          <span className="truncate" title={column}>{column}</span>
          {column === state.primaryKey && <Badge variant="secondary" className="text-[10px] px-1 py-0 h-4 shrink-0">PK</Badge>}
          {state.foreignKeyColumns.includes(column) && <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 shrink-0 border-primary/30 text-primary">FK</Badge>}
          {state.sortColumn === column && (
            <span className="text-primary shrink-0">
              {state.sortDirection === 'asc' ? <ArrowUpAZ className="h-3 w-3" /> : <ArrowDownAZ className="h-3 w-3" />}
            </span>
          )}
        </div>
        {state.data?.columnTypes?.[column] && (
          <span className="text-xs font-normal text-muted-foreground/80 normal-case truncate">
            {simplifyColumnType(state.data.columnTypes[column])}
          </span>
        )}
      </div>
    </TabularBrowser.SortHeaderCell>
  )
}
