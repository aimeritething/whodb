# Codebase Cleanup — Remove Backend & AI Layer

**Date:** 2026-03-25
**Goal:** Strip all backend API routes, database connection logic, AI layer, and persistence layer. Keep frontend shells for database views (to be rewired to WhoDB later) and dashboard components.

## Scope

### Delete Entirely

| Path | Reason |
|------|--------|
| `lib/ai/` | AI layer (text-to-SQL, suggestions, prompts, data-profiler, config) |
| `lib/database/` | Database connection pool & query execution |
| `app/api/ai-chat/` | 6 AI API routes |
| `app/api/connections/` | ~43 database operation routes |
| `app/api/query/` | 4 query execution routes |
| `app/api/schema/` | 1 schema metadata route |
| `app/api/info/` | 6 metadata routes |
| `app/api/persist/` | Persistence DB (conversations, dashboards, connections) |
| `components/ai/` | AI chat UI (AIPanel, ChatWindow, ChatSidebar, etc.) |
| `stores/useSqlBotStore.ts` | AI conversation Zustand store |

### Modify

| File | Change |
|------|--------|
| `components/layout/MainLayout.tsx` | Remove AI panel/routing |
| `components/layout/ActivityBar.tsx` | Remove AI nav item |
| `components/layout/Sidebar.tsx` | Remove calls to deleted APIs |
| `contexts/ConnectionContext.tsx` | Remove API fetch calls (keep type definitions, local state) |
| `stores/useAnalysisStore.ts` | Remove persist API calls (keep local state) |
| `components/database/*.tsx` | Remove/stub API calls to `/api/connections/` |
| `components/editor/SQLEditorView.tsx` | Remove API calls to `/api/query/`, `/api/schema/` |
| `package.json` | Remove AI-related dependencies |
| `.env.local` / `.env.example` | Remove AI env vars |
| `CLAUDE.md` | Update to reflect new architecture |

### Keep As-Is

| Path | Reason |
|------|--------|
| `components/analysis/` | Dashboard UI (local state only after cleanup) |
| `components/ui/` | Shared UI primitives |
| `components/layout/TabBar.tsx` | Generic tab management |
| `components/layout/TabContent.tsx` | Tab routing |
| `contexts/TabContext.tsx` | Tab state (no API dependency) |
| `lib/utils.ts` | CSS utility |

## Dependencies to Remove

AI-related packages to uninstall:
- `@anthropic-ai/sdk`
- `openai`
- Any Ollama client if present

Database driver packages (will be re-evaluated when WhoDB is integrated):
- `mysql2`
- `pg` / `@types/pg`
- `mongodb`
- `redis` / `ioredis`

## Execution Order

1. Delete backend directories (`lib/ai/`, `lib/database/`, `app/api/`)
2. Delete AI frontend (`components/ai/`, `stores/useSqlBotStore.ts`)
3. Modify layout components (remove AI references)
4. Modify ConnectionContext (remove API calls, keep types/local state)
5. Modify useAnalysisStore (remove persist calls)
6. Modify database components (stub out API calls)
7. Remove npm dependencies
8. Update CLAUDE.md
9. Verify build passes

## Out of Scope

- WhoDB integration (separate phase)
- Dashboard persistence solution
- New API layer design
