# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DataFlow — a database management and analysis platform. Frontend built with Next.js, backend to be powered by [WhoDB](https://github.com/clidey/whodb) core. Currently in transition: backend has been stripped out, frontend shells remain for database views and dashboard builder.

## Commands

```bash
pnpm dev      # Dev server at localhost:3000
pnpm build    # Production build (standalone output)
pnpm start    # Start production server
pnpm lint     # ESLint (next core-web-vitals + typescript)
```

No test framework is configured.

## Architecture

**Next.js 16 App Router** with React 19, TypeScript, Tailwind CSS 4.

### Current State (Post-Cleanup)

- **No backend API routes** — `app/api/` has been removed entirely
- **No AI layer** — `lib/ai/` has been removed
- **No database drivers** — `mongodb`, `mysql2`, `pg`, `redis` packages removed
- **No persistence layer** — conversations, dashboards, connections are not persisted
- **Frontend components remain** — database views, editor, dashboard builder exist but have non-functional API calls (pending WhoDB integration)

### Client State

- **React Context** (`contexts/`): `ConnectionContext` (connection list in localStorage, stub API functions), `TabContext` (open tabs, active tab)
- **Zustand stores** (`stores/`): `useAnalysisStore` (dashboards, components, layout — in-memory only)

### Component Organization

- `components/layout/` — MainLayout, ActivityBar (sidebar nav), Sidebar (tree browser), TabBar, TabContent
- `components/database/` — table/collection/Redis views and CRUD modals (~28 files, API calls pending WhoDB wiring)
- `components/analysis/` — dashboard builder with draggable grid widgets (react-grid-layout)
- `components/editor/` — SQL editor with Monaco (query execution pending WhoDB wiring)
- `components/ui/` — shared primitives (Button, Input, Badge, Modal, ContextMenu)

### Key Libraries

- **Monaco Editor** for SQL editing
- **ECharts** for data visualization
- **react-grid-layout** for dashboard widget positioning
- **xlsx** for Excel/CSV export

### Next Step: WhoDB Integration

WhoDB core (Go) will serve as the backend via GraphQL API. The frontend components' `fetch()` calls need to be rewired to WhoDB's GraphQL endpoints for:
- Database connection management (WhoDB Login Profiles)
- Schema browsing (`GetDatabases`, `GetAllSchemas`, `GetStorageUnits`)
- Data CRUD (`GetRows`, `AddRow`, `DeleteRow`, etc.)
- Query execution (`RawExecute`)
- Dashboard persistence (via WhoDB's SQLite plugin)

## Conventions

- Path alias: `@/*` maps to the project root
- Styling: `cn()` utility from `lib/utils.ts` (clsx + tailwind-merge). CSS variables defined in `app/globals.css` (Nebula Pro Palette).
- Connection types are uppercase enums: `'MYSQL' | 'POSTGRES' | 'MONGODB' | 'REDIS'`
- Standalone output mode (`next.config.ts`) for containerized deployment
- Fonts: Inter (sans) + JetBrains Mono (monospace), loaded via `next/font`
