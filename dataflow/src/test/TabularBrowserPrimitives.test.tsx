import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { TabularBrowser } from '@/components/database/shared/TabularBrowser'

describe('TabularBrowser primitives', () => {
  it('invokes sort actions from the shared header cell', () => {
    const onSortAsc = vi.fn()
    const onSortDesc = vi.fn()
    const onClearSort = vi.fn()

    render(
      <table>
        <thead>
          <tr>
            <TabularBrowser.SortHeaderCell
              column="name"
              width={160}
              isResized={false}
              isResizing={false}
              menuOpen
              onMenuOpenChange={vi.fn()}
              sortDirection="asc"
              sortLabel="Sort"
              sortAscLabel="Ascending"
              sortDescLabel="Descending"
              clearSortLabel="Clear"
              onSortAsc={onSortAsc}
              onSortDesc={onSortDesc}
              onClearSort={onClearSort}
              onResizeStart={vi.fn()}
            >
              <span>Name</span>
            </TabularBrowser.SortHeaderCell>
          </tr>
        </thead>
      </table>,
    )

    fireEvent.click(screen.getByText('Ascending'))
    fireEvent.click(screen.getByText('Descending'))
    fireEvent.click(screen.getByText('Clear'))

    expect(onSortAsc).toHaveBeenCalledTimes(1)
    expect(onSortDesc).toHaveBeenCalledTimes(1)
    expect(onClearSort).toHaveBeenCalledTimes(1)
  })

  it('forwards mousedown through the shared resize handle', () => {
    const onResizeStart = vi.fn()

    render(
      <table>
        <thead>
          <tr>
            <TabularBrowser.SortHeaderCell
              column="name"
              width={160}
              isResized={false}
              isResizing={false}
              menuOpen={false}
              onMenuOpenChange={vi.fn()}
              sortDirection={null}
              sortLabel="Sort"
              sortAscLabel="Ascending"
              sortDescLabel="Descending"
              clearSortLabel="Clear"
              onSortAsc={vi.fn()}
              onSortDesc={vi.fn()}
              onClearSort={vi.fn()}
              onResizeStart={onResizeStart}
            >
              <span>Name</span>
            </TabularBrowser.SortHeaderCell>
          </tr>
        </thead>
      </table>,
    )

    const handle = document.querySelector('[data-resize-col="name"]')
    expect(handle).not.toBeNull()

    fireEvent.mouseDown(handle!)

    expect(onResizeStart).toHaveBeenCalledTimes(1)
  })

  it('applies current-match highlighting on the shared data cell', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TabularBrowser.DataCell
              column="name"
              width={160}
              isResized={false}
              isResizing={false}
              highlight="current"
              active={false}
              interactive
              onResizeStart={vi.fn()}
            >
              <span>Alice</span>
            </TabularBrowser.DataCell>
          </tr>
        </tbody>
      </table>,
    )

    const cell = screen.getByText('Alice').closest('td')
    expect(cell).toHaveAttribute('data-find-current', 'true')
    expect(cell).toHaveClass('bg-blue-200')
  })
})
