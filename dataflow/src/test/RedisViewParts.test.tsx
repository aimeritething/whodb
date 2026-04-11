import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { FindBar } from '@/components/database/shared/FindBar'
import { RedisViewDialogs } from '@/components/database/redis/RedisView/RedisView.Dialogs'
import { RedisViewGrid } from '@/components/database/redis/RedisView/RedisView.Grid'
import { RedisViewToolbar } from '@/components/database/redis/RedisView/RedisView.Toolbar'
import { renderWithI18n } from '@/test/renderWithI18n'
import { TooltipProvider } from '@/components/ui/tooltip'

const useRedisViewMock = vi.fn()

vi.mock('@/components/database/redis/RedisView/RedisViewProvider', () => ({
  useRedisView: () => useRedisViewMock(),
}))

function createRedisViewContext() {
  return {
    state: {
      loading: false,
      error: null,
      currentPage: 1,
      pageSize: 50,
      total: 0,
      totalPages: 1,
      rows: [] as Array<Record<string, string>>,
      columns: [] as string[],
      keyType: 'string' as const,
      canEdit: true,
      canAdd: false,
      sortColumn: null,
      sortDirection: null,
      activeColumnMenu: null,
      columnWidths: {},
      resizingColumn: null,
      resizedColumns: new Set<string>(),
      activeCell: null,
      activeDraftValue: '',
      selectedRows: new Set<number>(),
      newRow: null,
      mutating: false,
      showDeleteConfirm: false,
      showExport: false,
      isChartModalOpen: false,
    },
    actions: {
      refresh: vi.fn(),
      startNewRow: vi.fn(),
      setShowDeleteConfirm: vi.fn(),
      setShowExport: vi.fn(),
      setIsChartModalOpen: vi.fn(),
      handleSort: vi.fn(),
      clearSort: vi.fn(),
      setActiveColumnMenu: vi.fn(),
      handleResizeStart: vi.fn(),
      activateCell: vi.fn(),
      setActiveDraftValue: vi.fn(),
      commitCellEdit: vi.fn(),
      deactivateCell: vi.fn(),
      handleCellKeyDown: vi.fn(),
      toggleRowSelection: vi.fn(),
      setNewRow: vi.fn(),
      handleNewRowKeyDown: vi.fn(),
      handleDeleteSelected: vi.fn(),
      dismissError: vi.fn(),
    },
    meta: {
      connectionId: 'conn-1',
      databaseName: 'db-1',
      keyName: 'key-1',
      chartInitialData: undefined,
      openQuery: vi.fn(),
    },
  }
}

describe('Redis view surfaces', () => {
  beforeEach(() => {
    useRedisViewMock.mockReset()
  })

  it('wires export and query actions from the toolbar', () => {
    const context = createRedisViewContext()
    useRedisViewMock.mockReturnValue(context)

    renderWithI18n(
      <TooltipProvider>
        <RedisViewToolbar />
      </TooltipProvider>,
      'en',
    )

    fireEvent.click(screen.getByText('Export'))
    fireEvent.click(screen.getByText('Query'))

    expect(context.actions.setShowExport).toHaveBeenCalledWith(true)
    expect(context.meta.openQuery).toHaveBeenCalledTimes(1)
  })

  it('shows the redis empty state when there are no rows', () => {
    const context = createRedisViewContext()
    useRedisViewMock.mockReturnValue(context)

    renderWithI18n(
      <FindBar.Provider rows={[]} columns={[]}>
        <RedisViewGrid />
      </FindBar.Provider>,
      'en',
    )

    expect(screen.getByText('This key has no data.')).toBeInTheDocument()
  })

  it('renders delete confirmation through the dialogs surface', () => {
    const context = createRedisViewContext()
    context.state.showDeleteConfirm = true
    context.state.selectedRows = new Set([0, 2])
    useRedisViewMock.mockReturnValue(context)

    renderWithI18n(<RedisViewDialogs />, 'en')

    expect(screen.getByText('Delete Selected Entries')).toBeInTheDocument()
    expect(screen.getByText('Are you sure you want to delete 2 selected entries? This action cannot be undone.')).toBeInTheDocument()
  })
})
