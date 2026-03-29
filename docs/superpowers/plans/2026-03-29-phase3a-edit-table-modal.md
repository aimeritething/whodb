# Phase 3a — EditTableModal Decomposition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Decompose the 1001-line EditTableModal into a Provider + focused subcomponents using the Vercel Composition Pattern, and extract the inline MultiSelect into a reusable UI primitive.

**Architecture:** EditTableModal uses `ModalForm.Provider` for header/meta and inline alert only (no single submit action — each row has per-row save/delete that executes DDL immediately). A per-modal `EditTableContext` owns all state (columns, indexes, foreign keys, original snapshots, schema fetch, DDL execution). Three tab subcomponents consume the context for their respective UI. The blocking result modal is replaced by an inline `ModalForm.Alert` banner. The custom `MultiSelect` with `createPortal` + manual positioning is replaced by a reusable Popover-based component in `ui/`.

**Tech Stack:** React 19, TypeScript, Radix Dialog + Popover (via shadcn), ModalForm compound components (Phase 0), GraphQL (`useRawExecuteLazyQuery`, `useExecuteConfirmedSqlMutation`), `ddl-sql` utility.

**Spec:** `docs/superpowers/specs/2026-03-27-dataflow-composition-refactoring-design.md` (Phase 3a section)

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `dataflow/src/components/ui/MultiSelect.tsx` | Reusable multi-select dropdown using Popover + Checkbox |
| Create | `dataflow/src/components/database/modals/EditTable/types.ts` | Shared interfaces: `ColumnDefinition`, `IndexDefinition`, `ForeignKeyDefinition`, `EditTableContextValue` |
| Create | `dataflow/src/components/database/modals/EditTable/EditTableProvider.tsx` | Provider: schema fetch (3 GraphQL queries), DDL execution, all CRUD handlers, context |
| Create | `dataflow/src/components/database/modals/EditTable/EditTable.ColumnsTab.tsx` | Column list table with per-row save/delete |
| Create | `dataflow/src/components/database/modals/EditTable/EditTable.IndexesTab.tsx` | Index list table with per-row save/delete, uses MultiSelect for columns |
| Create | `dataflow/src/components/database/modals/EditTable/EditTable.ForeignKeysTab.tsx` | Foreign key list table with per-row save/delete |
| Create | `dataflow/src/components/database/modals/EditTable/EditTableModal.tsx` | Dialog wrapper + tab composition using ModalForm |
| Modify | `dataflow/src/components/layout/Sidebar.tsx:14,500-516` | Update import path + props (`isOpen`/`onClose` → `open`/`onOpenChange`) |
| Delete | `dataflow/src/components/database/sql/EditTableModal.tsx` | Old monolithic file |

## Bugs Fixed

**Spec-identified:**
- P2 (`JSON.parse(JSON.stringify())` for snapshots) — replaced with `structuredClone`
- P4 (nested result modal) — replaced with inline `ModalForm.Alert` banner
- P5 (custom `fixed inset-0` overlay) — replaced with Radix Dialog

**Audit findings (beyond P1-P12):**
- F15: `Math.random().toString(36).substr(2, 9)` — deprecated `substr` replaced with `substring`
- F16: Hardcoded colors (`text-emerald-500`, `bg-emerald-50/50`, `text-emerald-600`, `text-red-500`, `bg-red-50`) — replaced with semantic tokens (`text-primary`, `bg-primary/5`, `text-success`, `text-destructive`)
- F17: Native HTML `<input>` and `<button>` — replaced with shadcn `Input` and `Button`
- F18: `console.error` on fetch failure — replaced with inline alert
- F19: Unused `React` import — removed (React 19 JSX transform)
- F20: MultiSelect uses single `document.getElementById('multiselect-dropdown')` — breaks with multiple instances. Replaced by Popover-based component
- F21: MultiSelect manual scroll/resize position tracking — eliminated by Radix Popover auto-positioning

## Pattern Reference

EditTableModal differs from Phase 1-2 modals: there is no single `submit` action. Instead, each row (column/index/FK) has its own Save and Delete buttons that execute DDL immediately. The pattern is:

```
Dialog (open/onOpenChange)
└─ DialogContent
   └─ EditTableProvider (EditTableContext + ModalForm.Provider)
      ├─ ModalForm.Header (reads meta: "Edit Table: {tableName}")
      ├─ Tabs
      │  ├─ EditTable.ColumnsTab (reads/writes EditTableContext)
      │  ├─ EditTable.IndexesTab (reads/writes EditTableContext)
      │  └─ EditTable.ForeignKeysTab (reads/writes EditTableContext)
      ├─ ModalForm.Alert (shows per-operation results inline)
      └─ DialogFooter with Close button (no submit)
```

Provider assembly:
```tsx
const { state: modalState, actions: baseActions } = useModalState()
// submit is a no-op — per-row actions use setAlert/setSubmitting directly
const modalActions = { ...baseActions, submit: async () => {} }
return (
  <EditTableCtx value={{ state, actions }}>
    <ModalForm.Provider state={modalState} actions={modalActions} meta={meta}>
      {children}
    </ModalForm.Provider>
  </EditTableCtx>
)
```

Per-row operations call `baseActions.setAlert(...)` to show results inline.

---

## Tasks

### Task 1: MultiSelect UI Component

**Files:**
- Create: `dataflow/src/components/ui/MultiSelect.tsx`

Extracts the custom MultiSelect from EditTableModal into a reusable Popover-based component. Replaces manual `createPortal` + position tracking + click-outside detection with Radix Popover primitives.

- [ ] **Step 1: Create MultiSelect.tsx**

```tsx
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface MultiSelectProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

/** Multi-select dropdown using Popover + Checkbox list. */
export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = 'Select...',
  disabled,
  className,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false)

  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(s => s !== option))
    } else {
      onChange([...selected, option])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button
          type="button"
          className={cn(
            'flex w-full items-center justify-between rounded border border-transparent bg-transparent px-2 py-1 text-xs hover:border-border min-h-[26px]',
            disabled && 'pointer-events-none opacity-50',
            className,
          )}
        >
          <span className="truncate">
            {selected.length === 0
              ? <span className="text-muted-foreground">{placeholder}</span>
              : selected.join(', ')}
          </span>
          <ChevronDown className="ml-1 h-3 w-3 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] min-w-[200px] p-2">
        {options.length === 0 ? (
          <div className="p-2 text-center text-xs text-muted-foreground">No options available</div>
        ) : (
          <div className="max-h-48 overflow-y-auto">
            {options.map(opt => (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-2 rounded p-1.5 text-xs hover:bg-muted"
              >
                <Checkbox
                  className="h-3.5 w-3.5"
                  checked={selected.includes(opt)}
                  onCheckedChange={() => toggle(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `cd dataflow && pnpm typecheck`
Expected: PASS (no consumers yet, file just needs to compile)

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/ui/MultiSelect.tsx
git commit -m "feat(dataflow): add reusable MultiSelect component using Radix Popover"
```

---

### Task 2: EditTable Types

**Files:**
- Create: `dataflow/src/components/database/modals/EditTable/types.ts`

Shared interfaces extracted from EditTableModal, used by Provider and all tab components.

- [ ] **Step 1: Create types.ts**

```tsx
import type { SqlDialect } from '@/utils/ddl-sql'

/** Column definition for the Edit Table columns tab. */
export interface ColumnDefinition {
  id: string
  name: string
  type: string
  isPrimaryKey: boolean
  isNullable: boolean
  comment: string
  isNew?: boolean
}

/** Index definition for the Edit Table indexes tab. */
export interface IndexDefinition {
  id: string
  name: string
  columns: string[]
  type: string
  isUnique: boolean
  comment: string
  isNew?: boolean
}

/** Foreign key definition for the Edit Table foreign keys tab. */
export interface ForeignKeyDefinition {
  id: string
  name: string
  column: string
  referencedTable: string
  referencedColumn: string
  onDelete: string
  onUpdate: string
  isNew?: boolean
}

export type EditTableTab = 'fields' | 'indexes' | 'foreignKeys'

/** State exposed by EditTableProvider. */
export interface EditTableState {
  columns: ColumnDefinition[]
  indexes: IndexDefinition[]
  foreignKeys: ForeignKeyDefinition[]
  activeTab: EditTableTab
  isLoading: boolean
  isExecuting: boolean
  dialect: SqlDialect
  /** Column names derived from current columns, used by index column selectors and FK column selectors. */
  columnNames: string[]
}

/** Actions exposed by EditTableProvider. */
export interface EditTableActions {
  setActiveTab: (tab: EditTableTab) => void
  // Column operations
  addColumn: () => void
  removeColumn: (col: ColumnDefinition) => Promise<void>
  updateColumn: (id: string, field: keyof ColumnDefinition, value: string | boolean) => void
  saveColumn: (col: ColumnDefinition) => Promise<void>
  // Index operations
  addIndex: () => void
  removeIndex: (idx: IndexDefinition) => Promise<void>
  updateIndex: (id: string, field: keyof IndexDefinition, value: string | boolean | string[]) => void
  saveIndex: (idx: IndexDefinition) => Promise<void>
  // Foreign key operations
  addForeignKey: () => void
  removeForeignKey: (fk: ForeignKeyDefinition) => Promise<void>
  updateForeignKey: (id: string, field: keyof ForeignKeyDefinition, value: string) => void
  saveForeignKey: (fk: ForeignKeyDefinition) => Promise<void>
}

/** Combined context value for EditTable. */
export interface EditTableContextValue {
  state: EditTableState
  actions: EditTableActions
}
```

- [ ] **Step 2: Verify typecheck**

Run: `cd dataflow && pnpm typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/database/modals/EditTable/types.ts
git commit -m "feat(dataflow): add EditTable shared types"
```

---

### Task 3: EditTableProvider

**Files:**
- Create: `dataflow/src/components/database/modals/EditTable/EditTableProvider.tsx`

This is the core of the decomposition. Owns all state, schema fetching, DDL execution, and per-row CRUD handlers.

- [ ] **Step 1: Create EditTableProvider.tsx**

Key implementation details:

**Context + hook:**
```tsx
import { createContext, use } from 'react'
import type { EditTableContextValue } from './types'

const EditTableCtx = createContext<EditTableContextValue | null>(null)

/** Hook to access EditTable domain context. Throws outside provider. */
export function useEditTable(): EditTableContextValue {
  const ctx = use(EditTableCtx)
  if (!ctx) throw new Error('useEditTable must be used within EditTableProvider')
  return ctx
}
```

**Provider props:**
```tsx
interface EditTableProviderProps {
  connectionId: string
  databaseName: string
  tableName: string
  schema?: string
  children: ReactNode
}
```

**State declarations (same as current, but using `structuredClone` for snapshots):**
- `columns`, `originalColumns` — `useState<ColumnDefinition[]>([])`
- `indexes`, `originalIndexes` — `useState<IndexDefinition[]>([])`
- `foreignKeys`, `originalForeignKeys` — `useState<ForeignKeyDefinition[]>([])`
- `activeTab` — `useState<EditTableTab>('fields')`
- `isLoading`, `isExecuting` — `useState<boolean>`
- `const { state: modalState, actions: baseActions } = useModalState()`

**Schema fetch (`fetchTableSchema`):**
- Runs on mount via `useEffect(() => { fetchTableSchema() }, [])` — no `isOpen` check needed since Dialog remounts on open
- Uses `useRawExecuteLazyQuery` with `fetchPolicy: 'no-cache'`
- Three queries: `columnsQuery(dialect, ...)`, `indexesQuery(dialect, ...)`, `foreignKeysQuery(dialect, ...)`
- Parsing logic identical to current code (column-name-based lookup with `get()` helper)
- **P2 fix:** `setOriginalColumns(structuredClone(cols))` instead of `JSON.parse(JSON.stringify(cols))`
- **F18 fix:** `catch` block calls `baseActions.setAlert({ type: 'error', title: 'Failed to load schema', message: String(error) })` instead of `console.error`

**DDL execution helper (`executeOperation`):**
- Same logic as current: splits on `;\n`, executes each statement via `useExecuteConfirmedSqlMutation`
- Returns `{ success: boolean, message: string, executedSql?: string }`

**Per-row handlers** — each handler calls `baseActions.setAlert(...)` after operation instead of showing result modal:
- `saveColumn`, `removeColumn` — same logic as current `handleSaveColumn`, `handleRemoveColumn`
- `saveIndex`, `removeIndex` — same logic as current `handleSaveIndex`, `handleRemoveIndex`
- `saveForeignKey`, `removeForeignKey` — same logic as current `handleSaveForeignKey`, `handleRemoveForeignKey`
- `addColumn`, `addIndex`, `addForeignKey` — same logic with **F15 fix:** `substring(2, 11)` instead of `substr(2, 9)`

**Alert display after per-row operations:**
```tsx
// After each executeOperation call:
if (result.success) {
  baseActions.setAlert({
    type: 'success',
    title: 'Operation completed',
    message: result.executedSql ?? '',
  })
} else {
  baseActions.setAlert({
    type: 'error',
    title: 'Operation failed',
    message: result.message + (result.executedSql ? `\n\nSQL: ${result.executedSql}` : ''),
  })
}
```

**Derived state:**
```tsx
const columnNames = useMemo(
  () => columns.filter(c => c.name.trim()).map(c => c.name),
  [columns],
)
```

**ModalForm integration:**
```tsx
const modalActions = { ...baseActions, submit: async () => {} }
const meta = { title: `Edit Table: ${tableName}`, icon: Table }

return (
  <EditTableCtx value={{ state: { columns, indexes, foreignKeys, activeTab, isLoading, isExecuting, dialect, columnNames }, actions }}>
    <ModalForm.Provider state={modalState} actions={modalActions} meta={meta}>
      {children}
    </ModalForm.Provider>
  </EditTableCtx>
)
```

- [ ] **Step 2: Verify typecheck**

Run: `cd dataflow && pnpm typecheck`
Expected: PASS (provider compiles, not yet consumed)

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/database/modals/EditTable/EditTableProvider.tsx
git commit -m "feat(dataflow): add EditTableProvider with schema fetch and DDL execution"
```

---

### Task 4: EditTable.ColumnsTab

**Files:**
- Create: `dataflow/src/components/database/modals/EditTable/EditTable.ColumnsTab.tsx`

Column list table UI. Consumes `useEditTable()` for state and actions.

- [ ] **Step 1: Create EditTable.ColumnsTab.tsx**

Key implementation details:

- Imports: `useEditTable`, `Input`, `Button`, `Select`/`SelectTrigger`/`SelectValue`/`SelectContent`/`SelectItem`, `Checkbox`, `Plus`, `Save`, `Trash2`, `Loader2`, `cn`
- `COLUMN_TYPES` constant — same array as current code
- Renders the same table structure as current Fields tab (lines 513-598)
- **F16 fix:** Replace `bg-emerald-50/50` with `bg-primary/5`, `text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50` with `text-primary hover:text-primary/80 hover:bg-primary/5`
- **F16 fix:** Replace `text-muted-foreground hover:text-red-500 hover:bg-red-50` with `text-muted-foreground hover:text-destructive hover:bg-destructive/5`
- **F17 fix:** Replace native `<input>` with shadcn `Input` (for column name and comment fields)
- **F17 fix:** Replace native `<button>` with shadcn `Button` (for save/delete actions and Add Field)

```tsx
/** Columns tab for EditTableModal — per-row save/delete for column definitions. */
export function EditTableColumnsTab() {
  const { state, actions } = useEditTable()
  // renders column table consuming state.columns, state.isExecuting
  // calls actions.addColumn, actions.saveColumn, actions.removeColumn, actions.updateColumn
}
```

- [ ] **Step 2: Verify typecheck**

Run: `cd dataflow && pnpm typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/database/modals/EditTable/EditTable.ColumnsTab.tsx
git commit -m "feat(dataflow): add EditTable.ColumnsTab subcomponent"
```

---

### Task 5: EditTable.IndexesTab

**Files:**
- Create: `dataflow/src/components/database/modals/EditTable/EditTable.IndexesTab.tsx`

Index list table UI. Uses the new `MultiSelect` component from `ui/`.

- [ ] **Step 1: Create EditTable.IndexesTab.tsx**

Key implementation details:

- Imports: `useEditTable`, `MultiSelect` (from `@/components/ui/MultiSelect`), `Input`, `Button`, `Select`/..., `Checkbox`, icons, `cn`
- `INDEX_TYPES` constant — same array as current code: `["BTREE", "HASH", "FULLTEXT", "SPATIAL"]`
- Same table structure as current Indexes tab (lines 601-701)
- MultiSelect consumes `state.columnNames` for options, `idx.columns` for selected
- `onChange` calls `actions.updateIndex(idx.id, 'columns', newCols)`
- Same F16/F17 fixes as ColumnsTab

```tsx
/** Indexes tab for EditTableModal — per-row save/delete for index definitions. */
export function EditTableIndexesTab() {
  const { state, actions } = useEditTable()
  // renders index table consuming state.indexes, state.columnNames, state.isExecuting
  // calls actions.addIndex, actions.saveIndex, actions.removeIndex, actions.updateIndex
}
```

- [ ] **Step 2: Verify typecheck**

Run: `cd dataflow && pnpm typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/database/modals/EditTable/EditTable.IndexesTab.tsx
git commit -m "feat(dataflow): add EditTable.IndexesTab subcomponent"
```

---

### Task 6: EditTable.ForeignKeysTab

**Files:**
- Create: `dataflow/src/components/database/modals/EditTable/EditTable.ForeignKeysTab.tsx`

Foreign key list table UI.

- [ ] **Step 1: Create EditTable.ForeignKeysTab.tsx**

Key implementation details:

- Imports: `useEditTable`, `Input`, `Button`, `Select`/..., icons, `cn`
- `FK_ACTIONS` constant — same array as current code: `["RESTRICT", "CASCADE", "SET NULL", "NO ACTION", "SET DEFAULT"]`
- Same table structure as current Foreign Keys tab (lines 703-822)
- FK column selector uses `Select` (single-select) with `state.columnNames` as options
- Referenced table and column are free-text `Input` fields (same as current)
- Same F16/F17 fixes

```tsx
/** Foreign keys tab for EditTableModal — per-row save/delete for FK definitions. */
export function EditTableForeignKeysTab() {
  const { state, actions } = useEditTable()
  // renders FK table consuming state.foreignKeys, state.columnNames, state.isExecuting
  // calls actions.addForeignKey, actions.saveForeignKey, actions.removeForeignKey, actions.updateForeignKey
}
```

- [ ] **Step 2: Verify typecheck**

Run: `cd dataflow && pnpm typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/database/modals/EditTable/EditTable.ForeignKeysTab.tsx
git commit -m "feat(dataflow): add EditTable.ForeignKeysTab subcomponent"
```

---

### Task 7: EditTableModal (Dialog Wrapper + Composition)

**Files:**
- Create: `dataflow/src/components/database/modals/EditTable/EditTableModal.tsx`

Composes all subcomponents into the final modal using Dialog + ModalForm.

- [ ] **Step 1: Create EditTableModal.tsx**

```tsx
import { Table, Key, Link as LinkIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ModalForm } from '@/components/database/modals/ModalForm'
import { EditTableProvider, useEditTable } from './EditTableProvider'
import { EditTableColumnsTab } from './EditTable.ColumnsTab'
import { EditTableIndexesTab } from './EditTable.IndexesTab'
import { EditTableForeignKeysTab } from './EditTable.ForeignKeysTab'
import type { EditTableTab } from './types'

interface EditTableModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  connectionId: string
  databaseName: string
  tableName: string
  schema?: string
  onSuccess?: () => void
}

/** Inner content that consumes EditTable context for tab counts and active tab. */
function EditTableContent() {
  const { state, actions } = useEditTable()

  return (
    <Tabs
      value={state.activeTab}
      onValueChange={(v) => actions.setActiveTab(v as EditTableTab)}
      className="flex flex-1 flex-col overflow-hidden"
    >
      <TabsList variant="line" className="w-full shrink-0 justify-start px-6 pt-4">
        <TabsTrigger value="fields" className="gap-2">
          <Table className="h-4 w-4" />
          Fields ({state.columns.length})
        </TabsTrigger>
        <TabsTrigger value="indexes" className="gap-2">
          <Key className="h-4 w-4" />
          Indexes ({state.indexes.length})
        </TabsTrigger>
        <TabsTrigger value="foreignKeys" className="gap-2">
          <LinkIcon className="h-4 w-4" />
          Foreign Keys ({state.foreignKeys.length})
        </TabsTrigger>
      </TabsList>

      <div className="flex-1 overflow-y-auto p-6">
        {state.isLoading ? (
          /* Loader2 spinner centered */
        ) : (
          <>
            <TabsContent value="fields"><EditTableColumnsTab /></TabsContent>
            <TabsContent value="indexes"><EditTableIndexesTab /></TabsContent>
            <TabsContent value="foreignKeys"><EditTableForeignKeysTab /></TabsContent>
          </>
        )}
      </div>
    </Tabs>
  )
}

/** Modal for editing an existing SQL table's columns, indexes, and foreign keys. */
export function EditTableModal({
  open,
  onOpenChange,
  connectionId,
  databaseName,
  tableName,
  schema,
  onSuccess,
}: EditTableModalProps) {
  const handleClose = (isOpen: boolean) => {
    if (!isOpen) onSuccess?.()
    onOpenChange(isOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] flex flex-col p-0">
        <EditTableProvider
          connectionId={connectionId}
          databaseName={databaseName}
          tableName={tableName}
          schema={schema}
        >
          <div className="shrink-0 px-6 pt-6">
            <ModalForm.Header />
          </div>
          <EditTableContent />
          <div className="shrink-0 px-6 pb-4">
            <ModalForm.Alert />
          </div>
          <DialogFooter className="shrink-0 border-t bg-muted/5 px-6 py-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </DialogFooter>
        </EditTableProvider>
      </DialogContent>
    </Dialog>
  )
}
```

Note on `onSuccess`: The current modal calls `onSuccess` from Sidebar to trigger `refreshSchemaOrDb`. Since EditTableModal performs DDL operations that modify the table structure, `onSuccess` should fire when the modal closes (any DDL operation may have changed the schema). This is wired via `handleClose` which calls `onSuccess` on close.

- [ ] **Step 2: Verify typecheck**

Run: `cd dataflow && pnpm typecheck`
Expected: PASS (full modal compiles end-to-end)

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/database/modals/EditTable/EditTableModal.tsx
git commit -m "feat(dataflow): add EditTableModal dialog wrapper with tab composition"
```

---

### Task 8: Update Sidebar + Delete Old File

**Files:**
- Modify: `dataflow/src/components/layout/Sidebar.tsx:14,500-516`
- Delete: `dataflow/src/components/database/sql/EditTableModal.tsx`

- [ ] **Step 1: Update Sidebar import**

Change line 14:
```tsx
// Before:
import { EditTableModal } from "../database/sql/EditTableModal";
// After:
import { EditTableModal } from "../database/modals/EditTable/EditTableModal";
```

- [ ] **Step 2: Update Sidebar modal render block**

Change the edit_table IIFE block (lines 500-516):
```tsx
// Before:
{activeModal?.type === "edit_table" && (() => {
  const p = activeModal.params;
  return (
    <EditTableModal
      isOpen
      onClose={closeModal}
      connectionId={p.connectionId}
      databaseName={p.databaseName}
      tableName={p.tableName}
      schema={p.schema}
      onSuccess={() => {
        refreshSchemaOrDb(p.connectionId, p.databaseName, p.schema);
      }}
    />
  );
})()}

// After:
{activeModal?.type === "edit_table" && (() => {
  const p = activeModal.params;
  return (
    <EditTableModal
      open
      onOpenChange={(open) => { if (!open) closeModal(); }}
      connectionId={p.connectionId}
      databaseName={p.databaseName}
      tableName={p.tableName}
      schema={p.schema}
      onSuccess={() => {
        refreshSchemaOrDb(p.connectionId, p.databaseName, p.schema);
      }}
    />
  );
})()}
```

- [ ] **Step 3: Delete old EditTableModal.tsx**

```bash
rm dataflow/src/components/database/sql/EditTableModal.tsx
```

- [ ] **Step 4: Verify no remaining imports of old path**

Search for any remaining references to the old import path:
```bash
cd dataflow && grep -r "database/sql/EditTableModal" src/
```
Expected: No results

- [ ] **Step 5: Verify typecheck + build**

Run: `cd dataflow && pnpm typecheck && pnpm build`
Expected: Both PASS

- [ ] **Step 6: Commit**

```bash
git add dataflow/src/components/layout/Sidebar.tsx
git rm dataflow/src/components/database/sql/EditTableModal.tsx
git commit -m "feat(dataflow): migrate EditTableModal to composition pattern"
```

---

## Verification Checklist

After all tasks are complete:

- [ ] `cd dataflow && pnpm typecheck` — passes
- [ ] `cd dataflow && pnpm build` — passes
- [ ] No references to old `database/sql/EditTableModal` path remain
- [ ] No `JSON.parse(JSON.stringify` in new code
- [ ] No `substr(` in new code
- [ ] No hardcoded color classes (`emerald-`, `red-50`, etc.) in new code
- [ ] No `console.error` in new code
- [ ] No unused imports (check `React` import specifically)
- [ ] All new exported functions/types/components have JSDoc comments
