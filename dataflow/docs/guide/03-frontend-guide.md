# Frontend Guide

## Component Architecture

Components are organized by feature domain:

```
components/
├── ui/          # Reusable primitives (design system)
├── layout/      # App shell and navigation
├── database/    # Database operation modals & detail views
├── ai/          # AI chat interface
├── analysis/    # Dashboard system
├── connection/  # Connection management modals
├── editor/      # SQL code editor
└── data/        # Data display components
```

## UI Components (`components/ui/`)

These are the base building blocks, inspired by shadcn/ui patterns:

| Component | File | Description |
|-----------|------|-------------|
| `Button` | `Button.tsx` | Variants: default, destructive, outline, secondary, ghost, link. Sizes: sm, default, lg, icon |
| `Input` | `Input.tsx` | Styled text input |
| `Badge` | `Badge.tsx` | Status indicators with color variants |
| `ConfirmationModal` | `ConfirmationModal.tsx` | Yes/No confirmation dialog |
| `AlertModal` | `AlertModal.tsx` | Information alert dialog |
| `ContextMenu` | `ContextMenu.tsx` | Right-click context menus |
| `SafeECharts` | `SafeECharts.tsx` | Error-boundary wrapped ECharts |
| `NativeECharts` | `NativeECharts.tsx` | Direct ECharts integration |

### Styling Utilities

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

The `cn()` function merges Tailwind classes safely. Use it everywhere:

```tsx
<div className={cn("base-class", condition && "conditional-class", className)} />
```

## Layout Components (`components/layout/`)

### MainLayout (`MainLayout.tsx`)

The root layout component. Manages the overall app structure:

```
┌──────┬─────────┬────────────────────────────┐
│      │         │  TabBar                     │
│  A   │  Side   ├────────────────────────────┤
│  c   │  bar    │                            │
│  t   │         │  TabContent                │
│  i   │ (tree   │  (or AIAssistantView       │
│  v   │  view)  │   or AnalysisView)         │
│  i   │         │                            │
│  t   │         │                            │
│  y   │         │                            │
│  B   │         │                            │
│  a   │         │                            │
│  r   │         │                            │
└──────┴─────────┴────────────────────────────┘
```

Key state:
- `activeTab` - Which activity tab is selected (`connections` | `ai-assistant` | `analysis` | `settings`)
- `isAIPanelOpen` - AI slide-over panel toggle
- `collectionRefreshTrigger` - Counter to trigger collection data refresh

### ActivityBar (`ActivityBar.tsx`)

Vertical icon bar on the far left. Tabs:
- Database (connections browser)
- AI Assistant (chat interface)
- Analysis (dashboard builder)
- Settings

### Sidebar (`Sidebar.tsx`)

Tree-view navigation for database connections. Shows hierarchy:
```
Connection (MySQL/PG/Mongo/Redis)
  └── Database
       └── Schema (PostgreSQL only)
            └── Table / Collection / Key
```

Features:
- Expand/collapse nodes
- Right-click context menus for operations
- Loading states per node
- Prefetch AI suggestions on database expand

### TabBar & TabContent

Manages multiple open items as browser-like tabs:

```typescript
// Tab types
type TabType = 'query' | 'table' | 'collection' | 'redis_keys_list';
```

## Database Components (`components/database/`)

Modal dialogs for database operations. Pattern: each operation has its own modal component.

### CRUD Modals

| Component | Operations |
|-----------|-----------|
| `CreateDatabaseModal` | Create new database with charset/collation |
| `EditDatabaseModal` | Rename database |
| `DeleteDatabaseModal` | Drop database |
| `CreateTableModal` | Create table with column definitions |
| `EditTableModal` | Modify table structure |
| `DeleteTableModal` | Drop table |
| `EmptyTableModal` | Truncate table |
| `TruncateTableModal` | Truncate table (alternative) |
| `CopyTableModal` | Duplicate table structure/data |

### Data Import/Export

| Component | Operations |
|-----------|-----------|
| `ImportDataModal` | Import CSV/Excel into table |
| `ExportDataModal` | Export table data to CSV/Excel/JSON |
| `ImportDatabaseModal` | Import SQL dump |
| `ExportDatabaseModal` | Export database as SQL |
| `ImportCollectionModal` | Import JSON into MongoDB collection |
| `ExportCollectionModal` | Export MongoDB collection |
| `ExportRedisModal` | Export Redis keys |

### Detail Views

| Component | Description |
|-----------|-------------|
| `TableDetailView` | View and edit relational table data |
| `CollectionDetailView` | View and edit MongoDB documents |
| `RedisDetailView` | Browse Redis keys by database |
| `KeyDetailView` | View/edit individual Redis key values |
| `DetailViewContainer` | Wrapper that picks the right detail view |

### Other

| Component | Description |
|-----------|-------------|
| `FilterTableModal` | Add WHERE clause filters to table view |
| `FilterCollectionModal` | MongoDB query filter |
| `RedisFilterModal` | Filter Redis keys by pattern |
| `RedisKeyModal` | Create/edit Redis keys |
| `GenerateTestDataModal` | AI-powered test data generation |

## AI Components (`components/ai/`)

### AIAssistantView (`AIAssistantView.tsx`)

Full-page AI chat interface. Contains the `SqlBot` chat components.

### SqlBot Components (`components/ai/sqlbot/`)

| Component | Description |
|-----------|-------------|
| `ChatSidebar` | Conversation list with create/delete/rename |
| `ChatWindow` | Message list with auto-scroll |
| `MessageBubble` | Individual message (user or assistant) with chart rendering |
| `InputArea` | Text input with send button, suggestion chips |
| `DataSourceSelector` | Pick which database connection/db to query |
| `ChartRenderer` | Renders ECharts from AI-generated chart data |
| `RenameModal` | Rename conversation dialog |

### AI Chat Flow

```
User types question
  → InputArea sends to ChatWindow
  → POST /api/ai-chat/text-to-sql (generates SQL)
  → POST /api/query/execute (runs SQL)
  → AI analyzes results → generates chart config
  → MessageBubble renders chart via ChartRenderer
```

## Analysis Components (`components/analysis/`)

| Component | Description |
|-----------|-------------|
| `AnalysisView` | Root view for dashboard feature |
| `DashboardList` | Grid of dashboard cards with create/delete |
| `DashboardEditor` | Active dashboard with toolbar |
| `EditorCanvas` | React Grid Layout canvas for widgets |
| `DashboardWidget` | Individual widget renderer |
| `DashboardSidebar` | Widget property editor |
| `ComponentPanel` | Widget type selector panel |
| `ChartSelectorModal` | Chart type picker for new widgets |
| `ComponentSettingsModal` | Widget data/config editor |
| `MaximizeChartModal` | Full-screen chart view |

## Editor Components (`components/editor/`)

| Component | Description |
|-----------|-------------|
| `SQLEditor` | Full SQL editor with run button and results pane |
| `SQLEditorView` | Wrapper connecting editor to tab context |
| `MonacoEditorWrapper` | Monaco Editor integration with SQL language support |

## State Management in Detail

### ConnectionContext

```typescript
interface ConnectionContextType {
  connections: Connection[];           // All database connections
  selectedItem: SelectedItem | null;   // Currently selected tree node
  addConnection: (conn) => void;       // Add new connection
  removeConnection: (id) => void;      // Remove connection
  updateConnection: (id, updates) => void;
  createDatabase: (connId, name, charset, collation) => Promise<boolean>;
  updateDatabase: (connId, name, newName) => Promise<boolean>;
  deleteDatabase: (connId, name) => Promise<boolean>;
  createTable: (connId, db, table, columns) => Promise<boolean>;
  updateTable: (connId, db, table, columns) => Promise<boolean>;
  deleteTable: (connId, db, table) => Promise<boolean>;
  selectItem: (item) => void;         // Select tree node
  fetchDatabases: (connId) => Promise<string[]>;
  fetchSchemas: (connId, db) => Promise<string[]>;
  fetchTables: (connId, db, schema?) => Promise<string[]>;
}
```

Connection persistence:
- **Default connections** (4 demo DBs) are hardcoded and always present
- **User connections** are saved to `localStorage` under key `dataflow_connections`

### TabContext

```typescript
interface TabContextType {
  tabs: Tab[];
  activeTabId: string | null;
  openTab: (tab) => string;           // Opens tab, returns ID. Reuses existing for non-query tabs
  closeTab: (tabId) => void;          // Close tab, switch to adjacent
  setActiveTab: (tabId) => void;
  updateTab: (tabId, updates) => void;
  getTab: (tabId) => Tab | undefined;
  findExistingTab: (type, connId, identifier, dbName?) => Tab | undefined;
  closeOtherTabs: (tabId) => void;
  closeAllTabs: () => void;
}
```

### useSqlBotStore (Zustand)

Manages AI chat state with API persistence:

```typescript
interface ExtendedSqlBotState {
  conversations: Conversation[];
  currentConversationId: string | null;
  isSidebarOpen: boolean;
  isInitialized: boolean;

  initializeFromAPI: () => Promise<void>;     // Load from persistence DB
  loadConversationMessages: (id) => Promise<void>;
  createConversation: (dataSource?) => void;   // Optimistic + API sync
  selectConversation: (id) => void;
  deleteConversation: (id) => void;
  addMessage: (convId, message) => void;       // Optimistic + API sync

  // Suggestion caching (5-min TTL)
  getCachedSuggestions: (connId, db) => CachedSuggestions | null;
  setCachedSuggestions: (connId, db, suggestions, isDeep) => void;
  prefetchSuggestions: (connectionParams) => void;
}
```

### useAnalysisStore (Zustand)

Manages dashboard state with API persistence:

```typescript
interface AnalysisState {
  dashboards: Dashboard[];
  activeDashboardId: string | null;
  selectedComponentId: string | null;
  isEditorMode: boolean;

  initializeFromAPI: () => Promise<void>;
  createDashboard: (name, description?) => void;
  deleteDashboard: (id) => void;
  openDashboard: (id) => void;
  closeDashboard: () => void;

  addComponent: (type, config?) => void;      // Auto-positions in grid
  removeComponent: (id) => void;
  updateComponent: (id, updates) => void;
  updateLayout: (layout) => void;             // From react-grid-layout
  selectComponent: (id) => void;
  toggleEditorMode: () => void;
}
```

## Styling

### Theme System

Colors are defined as CSS variables in `globals.css` with light/dark mode support. Tailwind maps to these variables via `tailwind.config.ts`:

```css
/* Key CSS variables */
--background, --foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--destructive, --destructive-foreground
--success, --success-foreground
--warning, --warning-foreground
--border, --input, --ring
--radius
```

### Fonts

- **Inter** (`--font-inter`) - UI text (sans-serif)
- **JetBrains Mono** (`--font-jetbrains-mono`) - Code/SQL editor (monospace)

Both loaded via `next/font/google` in `app/layout.tsx`.

### Custom Shadows

```css
nebula-card   /* Subtle card elevation */
nebula-float  /* Floating panels */
nebula-modal  /* Modal overlays */
```

### Dark Mode

Configured via `darkMode: "class"` in Tailwind. The `.dark` class on `<html>` toggles dark mode. CSS variables swap values between light and dark themes.
