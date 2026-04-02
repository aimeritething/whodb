import { getTableMenuItems } from './contextMenuItems'

describe('getTableMenuItems', () => {
  const callbacks = {
    onAction: vi.fn(),
    t: (key: string) => key,
  }

  function getLabels(connectionType: 'CLICKHOUSE' | 'POSTGRES') {
    return getTableMenuItems(connectionType, callbacks)
      .flatMap((item) => ('label' in item && item.label ? [item.label] : []))
  }

  it('hides designTable for ClickHouse tables', () => {
    const labels = getLabels('CLICKHOUSE')

    expect(labels).not.toContain('sidebar.menu.designTable')
  })

  it('keeps designTable for Postgres tables', () => {
    const labels = getLabels('POSTGRES')

    expect(labels).toContain('sidebar.menu.designTable')
  })
})
