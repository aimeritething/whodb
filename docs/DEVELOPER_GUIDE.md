# WhoDB Developer Guide

A comprehensive guide for developers who want to understand, build, and contribute to WhoDB.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Backend Call Flow](#backend-call-flow)
- [Development Environment Setup](#development-environment-setup)
- [Project Structure](#project-structure)
- [Backend (Go)](#backend-go)
  - [Plugin Architecture](#plugin-architecture)
  - [Adding a New Database Plugin](#adding-a-new-database-plugin)
  - [GraphQL API](#graphql-api)
  - [Connection Lifecycle](#connection-lifecycle)
- [Frontend (TypeScript/React)](#frontend-typescriptreact)
  - [State Management](#state-management)
  - [GraphQL Integration](#graphql-integration)
  - [Localization](#localization)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
- [CLI](#cli)
- [Desktop App](#desktop-app)
- [Testing](#testing)
- [Common Development Tasks](#common-development-tasks)
- [Code Conventions](#code-conventions)
- [Troubleshooting](#troubleshooting)

---

## Architecture Overview

WhoDB is a full-stack database management tool built with **Go** (backend) and **React/TypeScript** (frontend). It follows a plugin-based architecture where each supported database implements a common interface.

```
┌─────────────────────────────────────────────────────────────┐
│                        Clients                              │
│  ┌──────────┐   ┌──────────────┐   ┌─────────────────────┐ │
│  │ Browser  │   │ Desktop App  │   │   CLI (TUI / MCP)   │ │
│  └────┬─────┘   └──────┬───────┘   └──────────┬──────────┘ │
└───────┼────────────────┼──────────────────────┼─────────────┘
        │                │                      │
        ▼                ▼                      │
┌────────────────────────────────────┐          │
│      Go HTTP Server (Chi)          │          │
│  ┌──────────────────────────────┐  │          │
│  │    GraphQL API (gqlgen)      │  │          │
│  └──────────┬───────────────────┘  │          │
│             │                      │          │
│  ┌──────────▼───────────────────┐  │          │
│  │         Engine               │  │          │
│  │  ┌───────────────────────┐   │  │          │
│  │  │   Plugin Interface    │◄──┼──┼──────────┘
│  │  └───────────┬───────────┘   │  │  (CLI calls plugins directly,
│  │              │               │  │   no GraphQL layer)
│  │  ┌───────────▼───────────┐   │  │
│  │  │  Database Plugins     │   │  │
│  │  │  ┌─────┐ ┌─────┐     │   │  │
│  │  │  │ PG  │ │MySQL│ ... │   │  │
│  │  │  └──┬──┘ └──┬──┘     │   │  │
│  │  └─────┼───────┼────────┘   │  │
│  └────────┼───────┼────────────┘  │
└───────────┼───────┼───────────────┘
            ▼       ▼
      ┌──────────────────┐
      │    Databases      │
      └──────────────────┘
```

**Key design decisions:**

- **GraphQL-first API** — All browser/desktop communication goes through GraphQL. No REST endpoints unless strictly necessary (e.g., file downloads).
- **Plugin architecture** — All database-specific logic lives in plugins. Shared code never switches on database type.
- **Dual edition** — Community Edition (CE) in `/core`, Enterprise Edition (EE) in `/ee` submodule. Build tags (`//go:build ee` / `//go:build !ee`) control which code compiles.

---

## Backend Call Flow

This section traces the full lifecycle of a request from the HTTP layer down to the database and back.

### High-Level Flow

```
                           Client (Browser / Desktop / CLI)
                                        │
                                        ▼
┌──────────────────────────────────────────────────────────────────────┐
│                        HTTP Server (:8080)                           │
│                         core/server.go                               │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                    Middleware Stack                             │  │
│  │                  core/src/router/router.go                     │  │
│  │                                                                │  │
│  │  1. Access Log ──► logs method, path, status, duration         │  │
│  │  2. Health Check ──► GET /health returns 200 (short-circuits)  │  │
│  │  3. Throttle ──► rate limit (100 req / 50ms window)            │  │
│  │  4. Request ID ──► generates trace ID                          │  │
│  │  5. Real IP ──► extracts client IP                             │  │
│  │  6. Timeout ──► 90s global timeout                             │  │
│  │  7. CORS ──► configurable allowed origins                      │  │
│  │  8. Context ──► injects response writer + analytics metadata   │  │
│  │  9. Auth ──► extracts credentials into context                 │  │
│  └───────────────────────────┬────────────────────────────────────┘  │
│                              │                                       │
│  ┌───────────────────────────▼────────────────────────────────────┐  │
│  │                       Chi Router                               │  │
│  │  POST /api/query  ──► GraphQL (gqlgen)                         │  │
│  │  GET/POST /api/*  ──► REST handlers (export, profiles, etc.)   │  │
│  │  GET /*           ──► Static frontend files                    │  │
│  └───────────────────────────┬────────────────────────────────────┘  │
└──────────────────────────────┼───────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────────┐
│                        GraphQL Layer                                 │
│                 core/graph/schema.resolvers.go                       │
│                                                                      │
│  queryResolver.Row()         mutationResolver.AddRow()               │
│  queryResolver.Schema()      mutationResolver.DeleteRow()            │
│  queryResolver.RawExecute()  mutationResolver.UpdateStorageUnit()    │
│  queryResolver.Columns()     mutationResolver.Login()                │
│                              ...                                     │
│                                                                      │
│  Each resolver calls:                                                │
│    plugin, config := GetPluginForContext(ctx)                        │
│    result, err := plugin.SomeMethod(config, ...)                    │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────────┐
│                     Plugin Selection                                 │
│              core/graph/resolver.go ──► GetPluginForContext()        │
│                                                                      │
│  1. auth.GetCredentials(ctx)  ──► extract credentials from context   │
│  2. engine.NewPluginConfig(creds)                                    │
│  3. MainEngine.Choose(dbType) ──► match registered plugin by type    │
│     └─ resolvePluginType()    ──► alias mapping:                     │
│         ElastiCache → Redis, DocumentDB → MongoDB                    │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
           ▼                   ▼                   ▼
┌──────────────────┐ ┌────────────────┐ ┌──────────────────┐
│   SQL Plugins    │ │  NoSQL Plugins │ │  KV/Search       │
│  (extend Gorm)   │ │  (custom impl) │ │  (custom impl)   │
│                  │ │                │ │                  │
│  Postgres        │ │  MongoDB       │ │  Redis           │
│  MySQL           │ │                │ │  Elasticsearch   │
│  MariaDB         │ │                │ │                  │
│  SQLite3         │ │                │ │                  │
│  ClickHouse      │ │                │ │                  │
└────────┬─────────┘ └───────┬────────┘ └────────┬─────────┘
         │                   │                   │
         ▼                   ▼                   ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    Connection Management                             │
│              core/src/plugins/connection_pool.go                     │
│              core/src/plugins/connection_cache.go                    │
│                                                                      │
│  plugins.WithConnection(config, createDB, operation):               │
│                                                                      │
│    ┌─ config.Transaction set? ──► use existing *gorm.DB transaction  │
│    │                                                                 │
│    ├─ config.MultiStatement?  ──► create fresh conn, close after     │
│    │                                                                 │
│    └─ normal ──► getOrCreateConnection()                             │
│                  │                                                    │
│                  ├─ cache lookup (SHA256 of credentials)              │
│                  ├─ if hit: SQL ping to validate                     │
│                  │   └─ alive? reuse. dead? evict, create new        │
│                  ├─ if miss: plugin.DB(config) creates connection    │
│                  ├─ store in cache (max 50, TTL 5min, LRU eviction)  │
│                  └─ ConfigureConnectionPool():                       │
│                       MaxOpenConns=10, MaxIdleConns=5                │
│                       ConnMaxLifetime=30m, ConnMaxIdleTime=5m        │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
                               ▼
                     ┌───────────────────┐
                     │     Database       │
                     │  (PG, MySQL, ...)  │
                     └───────────────────┘
```

### Request Trace: GetRows Query

A concrete example showing every layer for a `Row` query:

```
POST /api/query
body: { "query": "query { row(schema: \"public\", storageUnit: \"users\", ...) { ... } }" }

  ▼ Middleware stack (auth extracts credentials, adds to ctx)

  ▼ gqlgen dispatches to queryResolver.Row()
    │
    ├─ GetPluginForContext(ctx)
    │   ├─ creds := auth.GetCredentials(ctx)       // from ctx
    │   ├─ config := engine.NewPluginConfig(creds)
    │   └─ plugin := MainEngine.Choose("Postgres") // returns *Plugin
    │
    ├─ ValidateStorageUnit(plugin, config, "public", "users")
    │   └─ plugin.StorageUnitExists(...)            // prevents SQL injection
    │
    ├─ errgroup: run two operations in parallel
    │   ├─ plugin.GetRows(config, GetRowsRequest{Schema, StorageUnit, Where, Sort, Page})
    │   │   └─ WithConnection(config, p.DB, func(db *gorm.DB) {
    │   │       ├─ SQL builder: SELECT ... FROM "public"."users" WHERE ... ORDER BY ... LIMIT ... OFFSET ...
    │   │       ├─ db.Raw(sql, params...).Rows()    // parameterized query
    │   │       └─ ConvertRawToRows(rows)           // → GetRowsResult{Columns, Rows, TotalCount}
    │   │   })
    │   │
    │   └─ plugin.GetColumnsForTable(config, "public", "users")
    │       └─ returns []Column with type, nullable, PK, FK metadata
    │
    └─ return model.RowsResult{Columns, Rows, TotalCount, DisableUpdate}

  ▼ gqlgen serializes → JSON response → HTTP 200
```

### Auth Flow Detail

```
Incoming HTTP request
  │
  ▼
AuthMiddleware (core/src/auth/auth.go)
  │
  ├─ Is route public? (/health, /api/login, /api/profiles, introspection)
  │   └─ YES → pass through, no credentials needed
  │
  ├─ Extract token:
  │   ├─ 1st: Authorization header ("Bearer <base64>")
  │   └─ 2nd: "Token" cookie (fallback)
  │
  ├─ Decode: base64 → JSON → engine.Credentials
  │
  ├─ If token is ID-only (no type/hostname):
  │   ├─ Lookup in login profiles (env-configured)
  │   └─ Fallback to OS keyring (LoadCredentials)
  │
  ├─ Validate against API gateway token list (if enabled)
  │
  └─ context.WithValue(ctx, AuthKey_Credentials, credentials)
      │
      ▼
  Downstream resolvers call auth.GetCredentials(ctx)
```

### GormPlugin Inheritance

SQL plugins extend `GormPlugin` and only override what differs:

```
                     PluginFunctions (interface)
                            │
                            │ implements
                            ▼
                  GormPlugin (base class)
                  core/src/plugins/gorm/
                  │
                  │  Provides 40+ default methods:
                  │  GetRows, AddRow, DeleteRow, GetGraph,
                  │  RawExecute, ExportData, BulkAddRows, ...
                  │
                  │  Delegates DB-specific behavior to:
                  │  GormPluginFunctions (interface)
                  │
       ┌──────────┼──────────┬──────────────┬──────────────┐
       ▼          ▼          ▼              ▼              ▼
   Postgres     MySQL     MariaDB       SQLite3      ClickHouse
     │            │          │              │              │
     │ overrides: │          │              │              │
     ├─ DB()             (connection + driver DSN)
     ├─ GetAllSchemasQuery()     (schema listing SQL)
     ├─ GetTableInfoQuery()      (column metadata SQL)
     ├─ GetPlaceholder()         ($1 vs ? vs ?)
     ├─ GetDatabaseMetadata()    (types, operators, aliases)
     ├─ GetSupportedOperators()  (=, <>, LIKE, ILIKE, ...)
     └─ GetLastInsertID()        (RETURNING vs LAST_INSERT_ID)
```

### Key Files Reference

| Layer | File | Role |
|-------|------|------|
| Entry point | `core/server.go` | HTTP server, graceful shutdown |
| Router & middleware | `core/src/router/router.go` | Chi mux, middleware stack, GraphQL endpoint |
| Auth | `core/src/auth/auth.go` | Credential extraction, token decode, route protection |
| GraphQL resolvers | `core/graph/schema.resolvers.go` | Query/mutation implementations |
| Resolver helpers | `core/graph/resolver.go` | `GetPluginForContext()`, `ValidateStorageUnit()` |
| Engine | `core/src/engine/engine.go` | Plugin registry, `Choose()` dispatch |
| Plugin interface | `core/src/engine/plugin.go` | `PluginFunctions` contract (25+ methods) |
| Plugin registration | `core/src/src.go` | `InitializeEngine()`, registers all plugins |
| GormPlugin base | `core/src/plugins/gorm/plugin.go` | 40+ default SQL implementations |
| Connection pool | `core/src/plugins/connection_pool.go` | `WithConnection()`, pool config |
| Connection cache | `core/src/plugins/connection_cache.go` | SHA256-keyed cache, TTL 5min, max 50 |

---

## Development Environment Setup

### Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Go | 1.26+ | Backend, CLI, Desktop |
| Node.js | 16+ | Frontend |
| PNPM | Latest | Package manager (not npm) |
| Docker | Latest | For running test databases |
| Wails | 2.11.0 | Only needed for desktop development |

### First-Time Setup

```bash
# 1. Clone the repository
git clone https://github.com/clidey/whodb.git
cd whodb

# 2. Start the backend
cd core
go run .
# Server starts at http://localhost:8080

# 3. In a separate terminal, start the frontend
cd frontend
pnpm install
pnpm start
# Dev server starts at http://localhost:3000 (proxies API to :8080)
```

> **Note:** The first time you run the backend, you need a built frontend in `core/build/`. If it doesn't exist:
> ```bash
> cd frontend && pnpm install && pnpm run build:ce
> rm -rf ../core/build/ && cp -r ./build ../core/
> ```
> Go embeds this directory at compile time. After the initial setup, you can run the frontend dev server separately.

### Running Test Databases

WhoDB ships with a Docker Compose file that spins up all supported databases with sample data:

```bash
cd dev
docker compose up -d

# This starts:
# - PostgreSQL (port 5432)
# - MySQL (port 3306)
# - MariaDB (port 3307)
# - MongoDB (port 27017)
# - Redis (port 6379)
# - Elasticsearch (port 9200)
# - ClickHouse (port 9000/8123)
# - SQLite (file-based, auto-created)
```

Default credentials for all test databases are in `dev/docker-compose.yml`.

---

## Project Structure

```
whodb/
├── core/                       # Backend (Go)
│   ├── server.go               # Entry point — HTTP server, static files
│   ├── src/
│   │   ├── src.go              # Engine init, plugin registration
│   │   ├── engine/
│   │   │   └── plugin.go       # PluginFunctions interface (the contract)
│   │   ├── plugins/            # One package per database
│   │   │   ├── postgres/
│   │   │   ├── mysql/
│   │   │   ├── sqlite3/
│   │   │   ├── mongodb/
│   │   │   ├── redis/
│   │   │   ├── elasticsearch/
│   │   │   ├── clickhouse/
│   │   │   ├── gorm/           # Base class for SQL plugins
│   │   │   └── ssl/            # SSL/TLS handling
│   │   ├── router/             # Chi HTTP router, GraphQL endpoint
│   │   ├── env/                # Environment variable declarations
│   │   ├── envconfig/          # Config parsing (uses env + log)
│   │   ├── llm/                # AI provider integration
│   │   ├── auth/               # Session/auth management
│   │   ├── mockdata/           # Mock data generation
│   │   └── settings/           # User settings persistence
│   ├── graph/
│   │   ├── schema.graphqls     # GraphQL schema definition
│   │   └── *.resolvers.go      # Generated + custom resolvers
│   └── test/                   # Go tests
│
├── frontend/                   # Frontend (React/TypeScript)
│   ├── src/
│   │   ├── pages/              # Page components (auth, data grid, chat, etc.)
│   │   ├── components/         # Reusable components
│   │   ├── store/              # Redux Toolkit slices
│   │   ├── graphql/            # .graphql operation files
│   │   ├── generated/          # Auto-generated types (@graphql alias)
│   │   ├── locales/            # i18n YAML files
│   │   ├── hooks/              # Custom React hooks
│   │   └── utils/              # Utilities (shortcuts, i18n, etc.)
│   └── e2e/                    # Playwright E2E tests
│
├── cli/                        # CLI tool (Go + Bubble Tea)
│   ├── cmd/                    # Cobra commands
│   ├── internal/tui/           # Terminal UI views
│   └── pkg/mcp/               # MCP server for AI assistants
│
├── desktop-ce/                 # CE Desktop app (Wails)
├── desktop-common/             # Shared desktop code
├── ee-stub/                    # EE stubs for CE builds
├── dev/                        # Dev tooling (docker-compose, test scripts)
└── .github/workflows/          # CI/CD pipelines
```

---

## Backend (Go)

### Plugin Architecture

Every database in WhoDB is a **plugin** that implements the `PluginFunctions` interface defined in `core/src/engine/plugin.go`. This is the central contract:

```go
type PluginFunctions interface {
    // Connection & discovery
    GetDatabases(config *PluginConfig) ([]string, error)
    IsAvailable(ctx context.Context, config *PluginConfig) bool
    GetAllSchemas(config *PluginConfig) ([]string, error)
    GetStorageUnits(config *PluginConfig, schema string) ([]StorageUnit, error)

    // CRUD operations
    AddStorageUnit(config *PluginConfig, schema string, storageUnit string, fields []Record) (bool, error)
    AddRow(config *PluginConfig, schema string, storageUnit string, values []Record) (bool, error)
    DeleteRow(config *PluginConfig, schema string, storageUnit string, values map[string]string) (bool, error)
    GetRows(config *PluginConfig, req *GetRowsRequest) (*GetRowsResult, error)

    // Advanced features
    RawExecute(config *PluginConfig, query string, params ...any) (*GetRowsResult, error)
    Chat(config *PluginConfig, schema string, previousConversation string, query string) ([]*ChatMessage, error)
    GetGraph(config *PluginConfig, schema string) ([]GraphUnit, error)
    ExportData(config *PluginConfig, schema string, storageUnit string, writer func([]string) error, selectedRows []map[string]any) error

    // ... and more (mock data, transactions, metadata, SSL)
}
```

**SQL plugins** extend the `GormPlugin` base class (`core/src/plugins/gorm/plugin.go`), which provides default implementations for most methods using GORM. Each SQL plugin only needs to override database-specific behavior (connection creation, type mappings, special queries).

**NoSQL plugins** (MongoDB, Redis, Elasticsearch) implement the interface directly and return `ErrUnsupported` for SQL-specific operations.

#### Plugin Registration

Plugins are registered in `core/src/src.go` during engine initialization:

```go
func InitializeEngine() *engine.Engine {
    MainEngine = &engine.Engine{}
    MainEngine.RegistryPlugin(postgres.NewPostgresPlugin())
    MainEngine.RegistryPlugin(mysql.NewMySQLPlugin())
    // ... more plugins
    return MainEngine
}
```

#### The Golden Rule

**Never use `switch dbType` or `if dbType ==` in shared code.** All database-specific logic must live inside the plugin. The engine and resolvers call plugin methods polymorphically.

### Adding a New Database Plugin

Here's a step-by-step walkthrough for adding a new SQL database plugin:

#### Step 1: Create the plugin package

```
core/src/plugins/newdb/
├── db.go        # Connection creation
├── newdb.go     # Plugin struct, database-specific queries
└── types.go     # Type definitions, alias map, metadata
```

#### Step 2: Define the plugin struct

```go
// core/src/plugins/newdb/newdb.go
package newdb

import (
    "github.com/clidey/whodb/core/src/engine"
    gorm_plugin "github.com/clidey/whodb/core/src/plugins/gorm"
)

type NewDBPlugin struct {
    gorm_plugin.GormPlugin
}

func NewNewDBPlugin() *engine.Plugin {
    plugin := &NewDBPlugin{}
    plugin.Type = engine.DatabaseType_NewDB  // Add to engine/types.go
    plugin.PluginFunctions = plugin
    plugin.GormPluginFunctions = plugin
    return &plugin.Plugin
}
```

#### Step 3: Implement connection creation

```go
// core/src/plugins/newdb/db.go
func (p *NewDBPlugin) DB(config *engine.PluginConfig) (*gorm.DB, error) {
    // Build DSN from config.Credentials
    // Return gorm.Open(newdb_driver.Open(dsn), &gorm.Config{})
}
```

#### Step 4: Override database-specific methods

At minimum, implement these `GormPluginFunctions` methods:

```go
func (p *NewDBPlugin) GetAllSchemasQuery() string        // SQL to list schemas
func (p *NewDBPlugin) GetTableInfoQuery() string          // SQL to list tables with metadata
func (p *NewDBPlugin) GetTableNameAndAttributes(rows *sql.Rows) (string, []engine.Record)
func (p *NewDBPlugin) GetSupportedOperators() map[string]string
func (p *NewDBPlugin) GetPlaceholder(index int) string    // "$1" for PG, "?" for MySQL
```

#### Step 5: Define type metadata

```go
// core/src/plugins/newdb/types.go
func (p *NewDBPlugin) GetDatabaseMetadata() *engine.DatabaseMetadata {
    return &engine.DatabaseMetadata{
        DatabaseType:    string(engine.DatabaseType_NewDB),
        TypeDefinitions: []engine.TypeDefinition{...},
        Operators:       []string{"=", "!=", ">", "<", ...},
        AliasMap:        []engine.Record{...},
        Capabilities:    engine.Capabilities{...},
    }
}
```

#### Step 6: Register the plugin

1. Add the database type to `core/src/engine/types.go`
2. Add to `core/graph/schema.graphqls` (DatabaseType enum)
3. Register in `core/src/src.go`:
   ```go
   MainEngine.RegistryPlugin(newdb.NewNewDBPlugin())
   ```
4. Run `cd core && go generate ./...` to regenerate GraphQL code

### GraphQL API

WhoDB uses [gqlgen](https://gqlgen.com/) for GraphQL code generation.

**Schema** is defined in `core/graph/schema.graphqls`. It contains all types, queries, and mutations.

**Workflow for API changes:**

1. Edit `core/graph/schema.graphqls`
2. Run `cd core && go generate ./...`
3. gqlgen generates/updates model types and resolver stubs
4. Implement the resolver logic in `core/graph/*.resolvers.go`
5. On the frontend, create `.graphql` operation files, then run `cd frontend && pnpm run generate`
6. Import generated hooks from the `@graphql` alias

**Example resolver pattern:**

```go
func (r *queryResolver) Row(ctx context.Context, schema string, storageUnit string, ...) (*model.RowsResult, error) {
    plugin := GetPlugin(ctx)  // Retrieves the active plugin from session
    config := GetConfig(ctx)  // Retrieves credentials from session

    result, err := plugin.GetRows(config, &engine.GetRowsRequest{
        Schema:      schema,
        StorageUnit: storageUnit,
        // ...
    })
    if err != nil {
        return nil, err
    }
    return mapToGraphQL(result), nil
}
```

### Connection Lifecycle

All database operations use `plugins.WithConnection()`:

```go
func (p *PostgresPlugin) GetDatabases(config *engine.PluginConfig) ([]string, error) {
    return plugins.WithConnection(config, p.DB, func(db *gorm.DB) ([]string, error) {
        // Use db to query...
    })
}
```

`WithConnection` handles:
- Opening a connection using the plugin's `DB()` method
- Passing the connection to your callback
- Proper cleanup/closing

---

## Frontend (TypeScript/React)

### State Management

WhoDB uses **Redux Toolkit** for global state. Slices are in `frontend/src/store/`.

Key slices:
- **Auth** — Current connection/session
- **Database** — Schema, tables, active queries
- **Settings** — User preferences

### GraphQL Integration

The frontend uses **Apollo Client** with code generation:

1. Define operations in `.graphql` files under `frontend/src/graphql/` or `frontend/src/mutations/`
2. Run `pnpm run generate` (requires the backend running)
3. Import generated hooks from `@graphql`:
   ```typescript
   import { useRowQuery } from '@graphql';
   ```

**Never write inline `gql` strings.** Always use `.graphql` files and the generated hooks.

### Localization

All user-facing text uses the i18n system:

```yaml
# frontend/src/locales/pages/storage-unit.yaml
en:
  createTitle: "Create a {storageUnit}"
  deleteConfirm: "Are you sure you want to delete this row?"
```

```typescript
import { useTranslation } from '../hooks/use-translation';

function MyComponent() {
  const t = useTranslation('pages/storage-unit');
  return <h1>{t('createTitle', { storageUnit: 'table' })}</h1>;
}
```

**Rules:**
- Every user-visible string must use `t()` with a YAML key
- No hardcoded UI text
- No fallback strings — keys must exist in YAML
- Use `{placeholder}` for dynamic content

### Keyboard Shortcuts

All shortcuts are centralized in `frontend/src/utils/shortcuts.ts`:

```typescript
import { SHORTCUTS, matchesShortcut } from '../utils/shortcuts';

// In event handler
if (matchesShortcut(event, SHORTCUTS.save)) {
  handleSave();
}

// In UI display
<span>{SHORTCUTS.save.displayKeys}</span>
```

**Never hardcode shortcut keys inline.** Always use `SHORTCUTS.*` definitions.

---

## CLI

The CLI is a standalone Go application in `/cli` that provides:
- **Interactive TUI** built with [Bubble Tea](https://github.com/charmbracelet/bubbletea) (Elm architecture)
- **Direct commands** for connecting and querying
- **MCP server** for AI assistant integration

The CLI calls plugin functions **directly** — it does not go through the GraphQL API.

```bash
cd cli
go run .                    # Launch interactive TUI
go run . mcp serve          # Start MCP server
go run . query -t postgres  # Direct query mode
```

See `cli/ARCHITECTURE.md` for detailed CLI architecture documentation.

---

## Desktop App

The desktop app uses [Wails](https://wails.io/) to wrap the web frontend in a native window.

```bash
cd desktop-ce
make dev      # Development with hot reload
make build    # Build for current platform
```

Desktop-specific behavior is gated with:
```go
import "github.com/clidey/whodb/core/src/env"

if env.IsDesktopApp() {
    // Desktop-only logic
}
```

Keyboard shortcuts that need OS-level accelerators are configured in `desktop-common/app.go`.

---

## Testing

### Frontend E2E Tests (Playwright)

```bash
cd frontend

# Run all CE tests (headless)
pnpm e2e:ce:headless

# Run tests for a specific database
pnpm e2e:db postgres

# Run a specific feature test
pnpm e2e:feature crud

# Interactive mode (headed browser)
pnpm e2e:ce
```

Test files are in `frontend/e2e/tests/features/`. Database fixtures (connection configs) are in `frontend/e2e/fixtures/databases/`.

### Backend Tests (Go)

```bash
# All tests (unit + integration)
bash dev/run-backend-tests.sh all

# Unit tests only
bash dev/run-backend-tests.sh unit
```

### CLI Tests

```bash
bash dev/run-cli-tests.sh
```

### Test Databases

Start all databases with Docker before running integration/E2E tests:

```bash
cd dev && docker compose up -d
```

---

## Common Development Tasks

### Adding a new GraphQL query/mutation

1. Add the type/query/mutation to `core/graph/schema.graphqls`
2. `cd core && go generate ./...`
3. Implement the resolver in `core/graph/*.resolvers.go`
4. Create a `.graphql` file in `frontend/src/graphql/` or `frontend/src/mutations/`
5. Start the backend, then `cd frontend && pnpm run generate`
6. Import and use the generated hook in your component

### Adding a new frontend page

1. Create the page component in `frontend/src/pages/`
2. Add a route in the router configuration
3. Create a YAML file in `frontend/src/locales/pages/` for all user-facing strings
4. Use `useTranslation()` for all text

### Adding a new environment variable

- **Pure declaration** (no logging) — add to `core/src/env/`
- **Parsing with error reporting** — add to `core/src/envconfig/`

The `env` package must never import `log`. If you need to log errors during parsing, put that logic in `envconfig`.

### Managing dependencies

```bash
# Go (CE) — requires temporary module replacement
cd core
go mod edit -replace github.com/clidey/whodb/ee=../ee-stub
go mod tidy
go mod edit -dropreplace github.com/clidey/whodb/ee -droprequire github.com/clidey/whodb/ee

# Frontend
cd frontend && pnpm add <package>
```

### Verifying your changes

Before considering any task complete, run these checks:

```bash
# Frontend
cd frontend
pnpm run typecheck    # TypeScript type checking
pnpm run build:ce     # Production build succeeds

# Backend
cd core
go build ./...        # Compilation succeeds
go vet ./...          # Static analysis
```

---

## Code Conventions

### Go

- Use `any` instead of `interface{}` (Go 1.18+)
- Doc comments on all exported functions/types, starting with the name
- Use parameterized queries — never `fmt.Sprintf` with user input for SQL
- Use `plugins.WithConnection()` for all database operations
- Never log sensitive data (passwords, tokens, connection strings)

### TypeScript/React

- JSDoc on all exported functions/components
- Import GraphQL hooks from `@graphql`, never use inline `gql`
- Use `t()` for all user-facing strings
- Use `SHORTCUTS.*` for keyboard shortcuts
- Use PNPM, never npm

### General

- Prefer editing existing code over creating new files
- Only comment non-obvious "why", not obvious "what"
- Remove unused code — no commented-out leftovers
- No overengineering: build what is needed, nothing more

---

## Troubleshooting

### `core/build/` directory not found

The Go backend embeds the frontend build. Create it:
```bash
cd frontend && pnpm install && pnpm run build:ce
rm -rf ../core/build/ && cp -r ./build ../core/
```

### GraphQL codegen fails on frontend

The backend must be running for frontend codegen (it introspects the live schema):
```bash
# Terminal 1
cd core && go run .

# Terminal 2
cd frontend && pnpm run generate
```

### `go mod tidy` fails

Due to the dual-module architecture, you must use the replacement trick:
```bash
cd core
go mod edit -replace github.com/clidey/whodb/ee=../ee-stub
go mod tidy
go mod edit -dropreplace github.com/clidey/whodb/ee -droprequire github.com/clidey/whodb/ee
```

### Test databases won't start

Make sure Docker is running and no other services occupy the default ports:
```bash
cd dev && docker compose down && docker compose up -d
docker compose ps  # Check all containers are healthy
```

### Frontend hot reload not working

Ensure you're using the dev server (`pnpm start`), not serving from the embedded build. The dev server proxies API requests to the backend on port 8080.

---

## Further Reading

- [CONTRIBUTING.md](./CONTRIBUTING.md) — Contribution process and code of conduct
- [BUILD_AND_RUN.md](./BUILD_AND_RUN.md) — Build commands quick reference
- [cli/ARCHITECTURE.md](./cli/ARCHITECTURE.md) — CLI architecture deep dive
- [cli/README.md](./cli/README.md) — CLI installation and usage
- [Documentation](https://docs.whodb.com/) — Official user documentation
