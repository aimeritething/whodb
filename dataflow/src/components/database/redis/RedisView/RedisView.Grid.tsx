import { use } from 'react'
import {
  ArrowDownAZ,
  ArrowUpAZ,
  X,
} from 'lucide-react'
import { FindBarContext } from '@/components/database/shared/FindBar.Provider'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/useI18n'
import { isEditableColumn, isNewRowInputColumn } from './redis-view.utils'
import { useRedisView } from './RedisViewProvider'
import { TabularBrowser } from '@/components/database/shared/TabularBrowser'

export function RedisViewGrid() {
  const { t } = useI18n()
  const { state, actions } = useRedisView()
  const findBar = use(FindBarContext)
  const pendingNewRow = state.newRow

  return (
    <>
      {state.error && (
        <div className="px-4 py-2 text-sm text-destructive bg-destructive/10 border-b border-destructive/20 flex items-center justify-between">
          <span>{state.error}</span>
          <Button variant="ghost" size="icon-xs" onClick={actions.dismissError}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}

      <TabularBrowser.ScrollFrame>
        <table className="min-w-full border-collapse text-sm">
          <thead className="border-b border-border bg-background">
            <tr>
              <TabularBrowser.RowNumberHeaderCell />

              {state.columns.map((col, colIdx) => {
                const width = state.columnWidths[col] || 120
                return (
                  <TabularBrowser.SortHeaderCell
                    key={col}
                    column={col}
                    width={width}
                    isResized={state.resizedColumns.has(col)}
                    isResizing={state.resizingColumn === col}
                    menuOpen={state.activeColumnMenu === col}
                    onMenuOpenChange={(open) => actions.setActiveColumnMenu(open ? col : null)}
                    sortDirection={state.sortColumn === col ? state.sortDirection : null}
                    sortLabel={t('redis.detail.sortActions')}
                    sortAscLabel={t('redis.detail.sortAsc')}
                    sortDescLabel={t('redis.detail.sortDesc')}
                    clearSortLabel={t('redis.detail.clearSort')}
                    onSortAsc={() => actions.handleSort(col, 'asc')}
                    onSortDesc={() => actions.handleSort(col, 'desc')}
                    onClearSort={actions.clearSort}
                    onResizeStart={actions.handleResizeStart}
                    align={colIdx === 0 ? 'start' : 'end'}
                  >
                    <div className="flex items-center gap-1">
                      <span className="truncate" title={col}>{col}</span>
                      {state.sortColumn === col && (
                        <span className="text-primary shrink-0">
                          {state.sortDirection === 'asc' ? <ArrowUpAZ className="h-3 w-3" /> : <ArrowDownAZ className="h-3 w-3" />}
                        </span>
                      )}
                    </div>
                  </TabularBrowser.SortHeaderCell>
                )
              })}

              <th className="sticky top-0 z-40 border-b border-border/50 bg-background w-full" />
            </tr>
          </thead>

          <tbody className="bg-background">
            {state.rows.map((row, rowIdx) => {
              const isSelected = state.selectedRows.has(rowIdx)

              return (
                <tr key={rowIdx} className="group transition-colors hover:bg-muted/50">
                  <TabularBrowser.RowNumberCell
                    className={cn(
                      'text-xs font-medium',
                      isSelected && 'bg-primary/10',
                    )}
                    onClick={() => actions.toggleRowSelection(rowIdx)}
                  >
                    {(state.currentPage - 1) * state.pageSize + rowIdx + 1}
                  </TabularBrowser.RowNumberCell>

                  {state.columns.map((col) => {
                    const width = state.columnWidths[col] || 120
                    const isActive = state.activeCell?.rowIdx === rowIdx && state.activeCell.column === col
                    const editable = state.canEdit && isEditableColumn(col, state.keyType)
                    const highlight = findBar?.state.total
                      ? findBar.state.matches.findIndex((match) => match.rowIndex === rowIdx && match.columnKey === col) === findBar.state.currentMatchIndex
                        ? 'current'
                        : findBar.state.matches.some((match) => match.rowIndex === rowIdx && match.columnKey === col)
                          ? 'match'
                          : null
                      : null

                    return (
                      <TabularBrowser.DataCell
                        key={col}
                        column={col}
                        width={width}
                        isResized={state.resizedColumns.has(col)}
                        isResizing={state.resizingColumn === col}
                        highlight={highlight}
                        active={isActive}
                        interactive={editable}
                        className={cn(isSelected && 'bg-primary/10')}
                        onDoubleClick={() => { if (editable && !state.mutating) actions.activateCell(rowIdx, col) }}
                        onResizeStart={actions.handleResizeStart}
                      >
                        {isActive ? (
                          <input
                            autoFocus
                            type="text"
                            data-redis-editor="true"
                            value={state.activeDraftValue}
                            onChange={(event) => actions.setActiveDraftValue(event.target.value)}
                            onBlur={() => {
                              queueMicrotask(() => {
                                const activeElement = document.activeElement
                                if (activeElement instanceof HTMLInputElement && activeElement.dataset.redisEditor === 'true') return
                                void actions.commitCellEdit()
                              })
                            }}
                            onKeyDown={actions.handleCellKeyDown}
                            className="w-full min-h-[36px] bg-transparent px-6 py-2 text-sm focus:bg-background focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                          />
                        ) : (
                          <span className="block truncate" title={row[col] ?? ''}>
                            {row[col] ?? ''}
                          </span>
                        )}
                      </TabularBrowser.DataCell>
                    )
                  })}

                  <td className="border-b border-border/50 bg-background w-full" />
                </tr>
              )
            })}

            {pendingNewRow && (
              <tr className="bg-blue-50/30 dark:bg-blue-950/20">
                <td
                  className="sticky left-0 z-30 border-b border-r border-border/50 bg-blue-50/60 dark:bg-blue-950/40 px-2 py-2 text-center text-xs font-medium text-primary"
                  style={{ width: 64, minWidth: 64, maxWidth: 64 }}
                >
                  +
                </td>
                {state.columns.map((col) => {
                  const width = state.columnWidths[col] || 120
                  const isInput = isNewRowInputColumn(col)

                  return (
                    <td
                      key={col}
                      data-col={col}
                      className="border-b border-r border-border/50 p-0"
                      style={{ minWidth: `${width}px`, ...(state.resizedColumns.has(col) && { maxWidth: `${width}px` }) }}
                    >
                      {isInput ? (
                        <input
                          autoFocus={col === state.columns.find(isNewRowInputColumn)}
                          type={col === 'score' ? 'number' : 'text'}
                          placeholder={t('redis.detail.newRowPlaceholder')}
                          value={pendingNewRow[col] ?? ''}
                          onChange={(event) => actions.updateNewRowValue(col, event.target.value)}
                          onKeyDown={actions.handleNewRowKeyDown}
                          disabled={state.mutating}
                          className="w-full min-h-[36px] bg-transparent px-6 py-2 text-sm font-mono focus:bg-background focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary disabled:opacity-50"
                        />
                      ) : (
                        <span className="block px-6 py-2 text-sm italic text-muted-foreground">
                          {t('redis.detail.autoIndex')}
                        </span>
                      )}
                    </td>
                  )
                })}
                <td className="border-b border-border/50 w-full" />
              </tr>
            )}
          </tbody>
        </table>

        {state.rows.length === 0 && !pendingNewRow && (
          <div className="flex items-center justify-center py-12 text-muted-foreground text-sm">
            {t('redis.detail.empty')}
          </div>
        )}
      </TabularBrowser.ScrollFrame>
    </>
  )
}
