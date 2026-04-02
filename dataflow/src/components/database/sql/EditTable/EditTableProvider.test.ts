import { resolveForeignKeyDropName } from './EditTableProvider'

describe('resolveForeignKeyDropName', () => {
  it('prefers the original constraint name when an existing FK is renamed in the UI', () => {
    const currentForeignKey = {
      id: 'fk_1',
      name: 'fk_users_account_v2',
      column: 'account_id',
      referencedTable: 'accounts',
      referencedColumn: 'id',
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
      isNew: false,
    }

    const originalForeignKeys = [
      {
        ...currentForeignKey,
        name: 'fk_users_account',
      },
    ]

    expect(resolveForeignKeyDropName(currentForeignKey, originalForeignKeys)).toBe('fk_users_account')
  })
})
