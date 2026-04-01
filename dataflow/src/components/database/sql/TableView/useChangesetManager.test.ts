import { describe, expect, it } from 'vitest'
import {
  buildExistingRowKey,
  changesetReducer,
  createInitialChangesetState,
} from './useChangesetManager'
import type { ChangesetAction, ChangesetCellValue } from './types'

function reduceActions(actions: ChangesetAction[]) {
  return actions.reduce(changesetReducer, createInitialChangesetState())
}

describe('buildExistingRowKey', () => {
  it('uses page offset plus source row index for existing rows', () => {
    expect(buildExistingRowKey(100, 4)).toBe('existing-104')
  })
})

describe('changesetReducer', () => {
  it('drops an update when the edited value returns to the original value', () => {
    const originalRow: Record<string, ChangesetCellValue> = { id: '1', name: 'alice' }
    let state = createInitialChangesetState()

    state = changesetReducer(state, {
      type: 'commit-active-cell',
      rowKey: 'existing-0',
      column: 'name',
      originalRow,
      previousValue: 'alice',
      value: 'bob',
    })

    state = changesetReducer(state, {
      type: 'commit-active-cell',
      rowKey: 'existing-0',
      column: 'name',
      originalRow,
      previousValue: 'bob',
      value: 'alice',
    })

    expect(state.changes.size).toBe(0)
  })

  it('undoes a synthetic insert by removing the row from order and changes', () => {
    const state = reduceActions([
      {
        type: 'add-row',
        rowKey: 'new-1',
        initialValues: { id: null, name: null },
      },
      { type: 'undo' },
    ])

    expect(state.newRowOrder).toEqual([])
    expect(state.changes.size).toBe(0)
  })

  it('increments the new row counter when rows are added', () => {
    const state = reduceActions([
      {
        type: 'add-row',
        rowKey: 'new-1',
        initialValues: { id: null, name: null },
      },
      {
        type: 'add-row',
        rowKey: 'new-2',
        initialValues: { id: null, name: null },
      },
    ])

    expect(state.newRowCounter).toBe(2)
  })

  it('replaces pending updates with delete markers for selected existing rows', () => {
    const originalRow: Record<string, ChangesetCellValue> = { id: '1', name: 'alice' }
    const state = reduceActions([
      {
        type: 'commit-active-cell',
        rowKey: 'existing-0',
        column: 'name',
        originalRow,
        previousValue: 'alice',
        value: 'bob',
      },
      { type: 'toggle-selection', rowKey: 'existing-0' },
      {
        type: 'delete-selected',
        rows: [{ rowKey: 'existing-0', originalRow }],
      },
    ])

    expect(state.changes.get('existing-0')?.type).toBe('delete')
  })
})
