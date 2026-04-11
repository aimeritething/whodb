import { use, useEffect, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Loader2, EyeOff } from 'lucide-react'
import { useI18n } from '@/i18n/useI18n'
import { cn } from '@/lib/utils'
import { useTableView } from './TableViewProvider'
import { TableViewColumnHeader } from './TableView.ColumnHeader'
import { FindBarContext } from '@/components/database/shared/FindBar.Provider'
import { TabularBrowser } from '@/components/database/shared/TabularBrowser'

/** Renders the SQL table data grid with row-number selection, cell editing, and pending-change states. */
export function TableViewDataGrid() {
  const { t } = useI18n()
  const { state, actions } = useTableView()
  const findBar = use(FindBarContext)

  const visibleColumns = state.data?.columns?.filter((col) => state.visibleColumns.includes(col)) ?? []
  const hiddenColumnCount = state.data?.columns
    ? state.data.columns.length - state.visibleColumns.length
    : 0

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z' && !isTypingTarget) {
        event.preventDefault()
        actions.undoLastChange()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [actions.undoLastChange])

  if (state.loading && !state.data) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  function isEditableCell(rowKey: string, column: string, isDeleted: boolean, isInserted: boolean) {
    if (!state.canEdit || isDeleted) return false
    if (isInserted) return true
    if (state.primaryKey && column === state.primaryKey) return false
    return true
  }

  function handleCellKeyDown(
    event: ReactKeyboardEvent<HTMLInputElement>,
    rowKey: string,
    column: string,
  ) {
    const isComposing = event.nativeEvent.isComposing || event.keyCode === 229

    if (event.key === 'Escape') {
      event.preventDefault()
      actions.deactivateCell()
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      actions.moveActiveCell(event.shiftKey ? 'left' : 'right')
      return
    }

    if (event.key === 'Enter') {
      if (isComposing) return
      event.preventDefault()
      actions.moveActiveCell(event.shiftKey ? 'up' : 'down')
      return
    }

    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z') {
      event.preventDefault()
      actions.deactivateCell()
      actions.undoLastChange()
      return
    }

    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's') {
      event.preventDefault()
      actions.deactivateCell()
      actions.setShowSubmitModal(true)
      return
    }

    if (state.activeCell?.rowKey !== rowKey || state.activeCell.column !== column) {
      actions.activateCell(rowKey, column)
    }
  }

  return (
    <TabularBrowser.ScrollFrame>
      <table className="min-w-full border-collapse text-sm">
        <thead className="border-b border-border bg-background">
          <tr>
            <TabularBrowser.RowNumberHeaderCell />
            {visibleColumns.map((col, idx) => (
              <TableViewColumnHeader key={col} column={col} index={idx} />
            ))}
            {hiddenColumnCount > 0 && (
              <th
                className="sticky top-0 z-40 border-b border-border/50 bg-background px-4 py-2 text-center text-xs font-medium text-muted-foreground"
                title={t('sql.table.hiddenColumnsTitle', { count: hiddenColumnCount })}
              >
                <div className="flex items-center justify-center gap-1">
                  <EyeOff className="h-3.5 w-3.5" />
                  <span>{hiddenColumnCount}</span>
                </div>
              </th>
            )}
            <th className="sticky top-0 z-40 border-b border-border/50 bg-background w-full" />
          </tr>
        </thead>
        <tbody className="bg-background">
          {state.renderedRows.map((row, rowIdx) => {
            const isSelected = state.selectedRowKeys.has(row.rowKey)

            return (
              <tr
                key={row.rowKey}
                className={cn(
                  'group transition-colors',
                  row.isInserted && 'bg-blue-100/20',
                  row.isDeleted && 'bg-red-100/20',
                  !row.isInserted && !row.isDeleted && 'hover:bg-muted/50',
                )}
              >
                <TabularBrowser.RowNumberCell
                  className={cn(
                    'text-sm font-normal',
                    row.isInserted && 'bg-blue-100/60',
                    row.isDeleted && 'bg-red-100/60 text-muted-foreground line-through',
                    isSelected && 'bg-primary/10',
                  )}
                  onClick={() => {
                    if (state.canEdit) actions.toggleRowSelection(row.rowKey)
                  }}
                >
                  {row.rowNumber ?? ''}
                </TabularBrowser.RowNumberCell>

                {visibleColumns.map((col) => {
                  const width = state.columnWidths[col] || 120
                  const isActiveCell =
                    state.activeCell?.rowKey === row.rowKey &&
                    state.activeCell.column === col
                  const editable = isEditableCell(row.rowKey, col, row.isDeleted, row.isInserted)
                  const changed =
                    row.changeType === 'update' &&
                    row.originalRow[col] !== row.values[col]
                  const highlight = findBar?.state.total
                    ? findBar.state.matches.findIndex((match) => match.rowIndex === rowIdx && match.columnKey === col) === findBar.state.currentMatchIndex
                      ? 'current'
                      : findBar.state.matches.some((match) => match.rowIndex === rowIdx && match.columnKey === col)
                        ? 'match'
                        : null
                    : null
                  const displayValue = row.values[col]

                  return (
                    <TabularBrowser.DataCell
                      key={col}
                      column={col}
                      width={width}
                      isResized={state.resizedColumns.has(col)}
                      isResizing={state.resizingColumn === col}
                      highlight={highlight}
                      active={isActiveCell}
                      interactive={editable}
                      className={cn(
                        row.isInserted && 'bg-blue-100/60',
                        row.isDeleted && 'bg-red-100/60 line-through text-muted-foreground',
                        changed && 'bg-green-100/60',
                        isSelected && !row.isInserted && !row.isDeleted && !changed && 'bg-primary/10',
                      )}
                      onDoubleClick={() => {
                        if (editable) actions.activateCell(row.rowKey, col)
                      }}
                      onResizeStart={actions.handleResizeStart}
                    >
                      {isActiveCell ? (
                        <input
                          autoFocus
                          type="text"
                          data-changeset-editor="true"
                          value={state.activeDraftValue}
                          onChange={(event) => actions.updateActiveCellValue(event.target.value)}
                          onBlur={() => {
                            queueMicrotask(() => {
                              const activeElement = document.activeElement
                              if (
                                activeElement instanceof HTMLInputElement &&
                                activeElement.dataset.changesetEditor === 'true'
                              ) {
                                return
                              }
                              actions.deactivateCell()
                            })
                          }}
                          onKeyDown={(event) => handleCellKeyDown(event, row.rowKey, col)}
                          className="w-full min-h-[36px] bg-transparent px-6 py-2 text-sm focus:bg-background focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        />
                      ) : (
                        <span className="block truncate" title={displayValue ?? 'NULL'}>
                          {displayValue == null ? (
                            <span className="italic text-muted-foreground">NULL</span>
                          ) : (
                            String(displayValue)
                          )}
                        </span>
                      )}
                    </TabularBrowser.DataCell>
                  )
                })}

                {hiddenColumnCount > 0 && <td className="border-b border-border/50 bg-background" />}
                <td className="border-b border-border/50 bg-background w-full" />
              </tr>
            )
          })}
        </tbody>
      </table>
    </TabularBrowser.ScrollFrame>
  )
}
