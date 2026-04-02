import { render, screen } from '@testing-library/react'
import { EditTableColumnsTab } from './EditTable.ColumnsTab'
import { EditTableIndexesTab } from './EditTable.IndexesTab'
import { useEditTable } from './EditTableProvider'
import { TooltipProvider } from '@/components/ui/tooltip'

vi.mock('./EditTableProvider', () => ({
  useEditTable: vi.fn(),
}))

vi.mock('@/i18n/useI18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}))

const mockedUseEditTable = vi.mocked(useEditTable)

function renderWithProviders(ui: Parameters<typeof render>[0]) {
  return render(<TooltipProvider>{ui}</TooltipProvider>)
}

describe('EditTable hardening UI', () => {
  it('does not render PK or comment controls in the columns tab and keeps existing names read-only', () => {
    mockedUseEditTable.mockReturnValue({
      state: {
        columns: [
          {
            id: 'existing-id',
            name: 'id',
            type: 'INT',
            isPrimaryKey: true,
            isNullable: false,
            comment: '',
            isNew: false,
          },
          {
            id: 'new-name',
            name: 'draft_name',
            type: 'VARCHAR(255)',
            isPrimaryKey: false,
            isNullable: true,
            comment: '',
            isNew: true,
          },
        ],
        indexes: [],
        foreignKeys: [],
        activeTab: 'fields',
        isLoading: false,
        isExecuting: false,
        dialect: 'POSTGRES',
        columnNames: ['id', 'draft_name'],
      },
      actions: {
        setActiveTab: vi.fn(),
        addColumn: vi.fn(),
        removeColumn: vi.fn(),
        updateColumn: vi.fn(),
        saveColumn: vi.fn(),
        addIndex: vi.fn(),
        removeIndex: vi.fn(),
        updateIndex: vi.fn(),
        saveIndex: vi.fn(),
        addForeignKey: vi.fn(),
        removeForeignKey: vi.fn(),
        updateForeignKey: vi.fn(),
        saveForeignKey: vi.fn(),
      },
    } as any)

    renderWithProviders(<EditTableColumnsTab />)

    expect(screen.queryByText('sql.editTable.columns.pk')).not.toBeInTheDocument()
    expect(screen.queryByText('sql.editTable.columns.comment')).not.toBeInTheDocument()
    expect(screen.getByDisplayValue('id')).toHaveAttribute('readonly')
  })

  it('does not render unsupported type or comment controls in the indexes tab', () => {
    mockedUseEditTable.mockReturnValue({
      state: {
        columns: [],
        indexes: [
          {
            id: 'idx-1',
            name: 'idx_users_email',
            columns: ['email'],
            type: 'BTREE',
            isUnique: true,
            comment: '',
            isNew: false,
          },
        ],
        foreignKeys: [],
        activeTab: 'indexes',
        isLoading: false,
        isExecuting: false,
        dialect: 'POSTGRES',
        columnNames: ['email'],
      },
      actions: {
        setActiveTab: vi.fn(),
        addColumn: vi.fn(),
        removeColumn: vi.fn(),
        updateColumn: vi.fn(),
        saveColumn: vi.fn(),
        addIndex: vi.fn(),
        removeIndex: vi.fn(),
        updateIndex: vi.fn(),
        saveIndex: vi.fn(),
        addForeignKey: vi.fn(),
        removeForeignKey: vi.fn(),
        updateForeignKey: vi.fn(),
        saveForeignKey: vi.fn(),
      },
    } as any)

    renderWithProviders(<EditTableIndexesTab />)

    expect(screen.queryByText('sql.editTable.indexes.type')).not.toBeInTheDocument()
    expect(screen.queryByText('sql.editTable.indexes.comment')).not.toBeInTheDocument()
  })
})
