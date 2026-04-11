import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react'
import type { TableData } from '@/utils/graphql-transforms'

export type RedisKeyType = 'string' | 'hash' | 'list' | 'set' | 'zset'

export interface RedisChartInitialData {
  connectionId: string
  databaseName: string
  query: string
  columns: string[]
  rows: Record<string, string>[]
}

export interface RedisViewState {
  data: TableData | null
  hasLoadedData: boolean
  loading: boolean
  error: string | null
  columns: string[]
  rows: Record<string, string>[]
  total: number
  currentPage: number
  pageSize: number
  totalPages: number
  keyType: RedisKeyType
  canEdit: boolean
  canAdd: boolean
  sortColumn: string | null
  sortDirection: 'asc' | 'desc' | null
  activeColumnMenu: string | null
  columnWidths: Record<string, number>
  resizingColumn: string | null
  resizedColumns: Set<string>
  activeCell: { rowIdx: number; column: string } | null
  activeDraftValue: string
  selectedRows: Set<number>
  newRow: Record<string, string> | null
  mutating: boolean
  showDeleteConfirm: boolean
  showExport: boolean
  isChartModalOpen: boolean
}

export interface RedisViewActions {
  refresh: () => void
  handleSort: (column: string, direction: 'asc' | 'desc') => void
  clearSort: () => void
  setActiveColumnMenu: (column: string | null) => void
  handlePageChange: (page: number) => void
  handlePageSizeChange: (size: number) => void
  handleResizeStart: (event: ReactMouseEvent, column: string) => void
  activateCell: (rowIdx: number, column: string) => void
  deactivateCell: () => void
  setActiveDraftValue: (value: string) => void
  commitCellEdit: () => Promise<void>
  handleCellKeyDown: (event: ReactKeyboardEvent<HTMLInputElement>) => void
  toggleRowSelection: (rowIdx: number) => void
  startNewRow: () => void
  cancelNewRow: () => void
  confirmNewRow: () => Promise<void>
  updateNewRowValue: (column: string, value: string) => void
  handleNewRowKeyDown: (event: ReactKeyboardEvent<HTMLInputElement>) => void
  setShowDeleteConfirm: (open: boolean) => void
  handleDeleteSelected: () => Promise<void>
  setShowExport: (open: boolean) => void
  setIsChartModalOpen: (open: boolean) => void
  dismissError: () => void
}

export interface RedisViewMeta {
  connectionId: string
  databaseName: string
  keyName: string
  openQuery: () => void
  chartInitialData?: RedisChartInitialData
}

export interface RedisViewContextValue {
  state: RedisViewState
  actions: RedisViewActions
  meta: RedisViewMeta
}
