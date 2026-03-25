# Architecture Overview

## Tech Stack

```
┌─────────────────────────────────────────────────────┐
│                    Frontend                          │
│  Next.js 16 (App Router) · React 19 · TypeScript 5  │
│  Tailwind CSS 4 · ECharts 6 · Monaco Editor          │
│  Zustand 5 · React Grid Layout · Lucide Icons        │
├─────────────────────────────────────────────────────┤
│                   API Layer                          │
│  Next.js API Routes (app/api/*)                      │
│  Server-side database drivers                        │
│  AI provider integrations                            │
├─────────────────────────────────────────────────────┤
│              External Services                       │
│  MySQL · PostgreSQL · MongoDB · Redis                │
│  OpenAI · Anthropic · Ollama                         │
└─────────────────────────────────────────────────────┘
```

## Project Structure

```
dataflow-ai-analyst/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, ConnectionProvider)
│   ├── page.tsx                  # Entry point → renders MainLayout
│   ├── globals.css               # CSS variables, Tailwind base styles
│   └── api/                      # Backend API routes
│       ├── ai-chat/              # AI assistant endpoints (6 routes)
│       ├── connections/          # Database operations (47 routes)
│       ├── info/                 # Metadata endpoints (6 routes)
│       ├── persist/              # Data persistence (10 routes)
│       ├── query/                # Query execution (4 routes)
│       └── schema/               # Schema metadata (1 route)
│
├── components/                   # React components (~65 files)
│   ├── ui/                       # Primitives: Button, Input, Badge, Modals
│   ├── layout/                   # App shell: MainLayout, Sidebar, TabBar, ActivityBar
│   ├── database/                 # DB operation modals and detail views (~28 files)
│   ├── ai/                       # AI chat interface (sqlbot subdir)
│   ├── analysis/                 # Dashboard system (~10 files)
│   ├── connection/               # Connection add/edit/delete modals
│   ├── editor/                   # Monaco SQL editor components
│   └── data/                     # Data display (ResultGrid, TableDetail)
│
├── contexts/                     # React Context providers
│   ├── ConnectionContext.tsx      # Database connections + operations
│   └── TabContext.tsx             # Open tab management
│
├── stores/                       # Zustand state stores
│   ├── useSqlBotStore.ts         # AI chat conversations & suggestions
│   └── useAnalysisStore.ts       # Dashboards & components
│
├── lib/                          # Shared utilities
│   ├── database/
│   │   └── connections.ts        # DB drivers, connection pooling, query execution
│   ├── ai/
│   │   ├── config.ts             # AI provider configuration
│   │   ├── sql-agent.ts          # Text-to-SQL core logic
│   │   ├── prompts.ts            # Prompt templates
│   │   ├── suggestions.ts        # Smart question generation
│   │   ├── data-profiler.ts      # Data analysis for insights
│   │   └── data-generator.ts     # Test data generation
│   └── utils.ts                  # cn() utility for class names
│
├── types/
│   └── sqlbot.ts                 # TypeScript interfaces for AI chat
│
├── data/
│   └── saved-queries.json        # Saved SQL queries
│
├── docs/                         # Documentation
├── public/                       # Static assets
├── scripts/                      # Build scripts
│
├── package.json
├── next.config.ts                # Next.js config (standalone output)
├── tailwind.config.ts            # Tailwind theme customization
├── tsconfig.json                 # TypeScript config (@ path alias)
└── postcss.config.mjs
```

## Application Flow

```
                    ┌──────────────┐
                    │  layout.tsx   │
                    │ (fonts, ctx)  │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │   page.tsx    │
                    │ → MainLayout │
                    └──────┬───────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
     ┌──────┴──────┐ ┌────┴─────┐ ┌─────┴──────┐
     │ Connections  │ │    AI    │ │  Analysis   │
     │   (default)  │ │ Assistant│ │ (Dashboard) │
     └──────┬──────┘ └────┬─────┘ └─────┬──────┘
            │              │              │
     ┌──────┴──────┐ ┌────┴─────┐ ┌─────┴──────┐
     │  Sidebar    │ │ ChatWindow│ │ Dashboard   │
     │  TabBar     │ │ InputArea │ │ Editor      │
     │  TabContent │ │ ChartView │ │ Widgets     │
     └─────────────┘ └──────────┘ └────────────┘
```

### Activity Tabs

The app has 4 main views, controlled by the `ActivityBar`:

| Tab | Component | Description |
|-----|-----------|-------------|
| `connections` | `Sidebar` + `TabBar` + `TabContent` | Database browser with tree view |
| `ai-assistant` | `AIAssistantView` | Natural language SQL chat |
| `analysis` | `AnalysisView` | Dashboard builder |
| `settings` | Settings panel | App configuration |

## State Management

The app uses a hybrid approach:

### React Context (component tree-scoped)

| Context | File | Scope |
|---------|------|-------|
| `ConnectionContext` | `contexts/ConnectionContext.tsx` | Database connections, CRUD operations, tree data fetching |
| `TabContext` | `contexts/TabContext.tsx` | Open tabs, active tab, tab lifecycle |

### Zustand Stores (global singleton)

| Store | File | Scope |
|-------|------|-------|
| `useSqlBotStore` | `stores/useSqlBotStore.ts` | AI conversations, messages, suggestions, schema analysis |
| `useAnalysisStore` | `stores/useAnalysisStore.ts` | Dashboards, components, layout, editor mode |

### Data Flow Pattern

```
User Action → Component → Context/Store → API Call → DB/AI → Response → State Update → Re-render
```

Both stores follow an **optimistic update** pattern: local state is updated immediately, then synced to the persistence API in the background.

## Key Design Decisions

1. **No ORM** - Direct database driver calls (`pg`, `mysql2`, `mongodb`, `redis`) for maximum flexibility across 4 different database types.

2. **Connection details passed per-request** - API routes receive connection credentials in the request body rather than looking them up server-side. The `ConnectionContext` on the client holds all connection info.

3. **Separate persistence DB** - App metadata (conversations, dashboards) is stored in a dedicated MySQL database, separate from user-connected databases.

4. **Multi-statement SQL support** - The `splitSQLStatements()` function in `lib/database/connections.ts` handles semicolons within strings, comments, and PostgreSQL dollar-quoting.

5. **AI provider abstraction** - The `lib/ai/` module abstracts away provider differences. Switching providers requires only changing environment variables.

6. **Standalone output** - `next.config.ts` uses `output: 'standalone'` for containerized deployments.
