# Database Guide

## Overview

DataFlow AI Analyst connects to **user databases** (the databases you want to analyze) and uses a **persistence database** (MySQL) to store app metadata. These are separate concerns.

```
┌─────────────────────────────┐     ┌─────────────────────────────┐
│      User Databases          │     │    Persistence Database      │
│                              │     │         (MySQL)              │
│  MySQL · PostgreSQL          │     │                              │
│  MongoDB · Redis             │     │  conversations, messages,    │
│                              │     │  dashboards, components,     │
│  (Your data to analyze)      │     │  saved connections           │
└─────────────────────────────┘     └─────────────────────────────┘
```

## Supported Database Types

| Database | Driver | Version | Port (default) |
|----------|--------|---------|----------------|
| MySQL | `mysql2` | 3.15.3 | 3306 |
| PostgreSQL | `pg` | 8.16.3 | 5432 |
| MongoDB | `mongodb` | 7.0.0 | 27017 |
| Redis | `redis` | 5.10.0 | 6379 |

## Connection Management

### Connection Interface

```typescript
// contexts/ConnectionContext.tsx
interface Connection {
  id: string;
  name: string;
  type: 'MYSQL' | 'POSTGRES' | 'MONGODB' | 'REDIS';
  host: string;
  port: string;
  user: string;
  password: string;
  database: string;
  createdAt: string;
}
```

### How Connections Work

1. **Default connections** (4 demo databases) are hardcoded in `ConnectionContext.tsx`
2. **User connections** added via the UI are saved to `localStorage`
3. On page load, both are merged into the `connections` state
4. Connection credentials are passed to API routes in every request body (not stored server-side)

### Connection Data Flow

```
ConnectionContext.connections
  ↓ (user selects item)
ConnectionContext.selectedItem
  ↓ (component makes API call)
fetch('/api/connections/...', {
  body: { type, host, port, user, password, database, ... }
})
  ↓ (API route creates driver connection)
lib/database/connections.ts → executes query
  ↓ (returns results)
Component state update
```

## Database Drivers (`lib/database/connections.ts`)

### Query Execution Functions

| Function | Database | Description |
|----------|----------|-------------|
| `executePostgresQuery()` | PostgreSQL | Multi-statement with `search_path` auto-config |
| `executeMySQLQuery()` | MySQL | Multi-statement with `mysql2/promise` |
| `executeMongoDBQuery()` | MongoDB | JSON-based find/command execution |
| `executeRedisCommand()` | Redis | Raw command execution |

### Multi-Statement SQL

The `splitSQLStatements()` function safely splits SQL by semicolons while handling:
- Single and double quoted strings
- Line comments (`--`)
- Block comments (`/* */`)
- PostgreSQL dollar-quoting (`$$...$$`)

```typescript
// Example: this splits into 2 statements correctly
const sql = "SELECT 'hello;world'; SELECT 1;";
const stmts = splitSQLStatements(sql);
// → ["SELECT 'hello;world'", "SELECT 1"]
```

### Partial Results on Error

When executing multiple statements, if one fails:
- All previously successful statements' results are returned
- The failing statement's error is included
- Execution stops (no further statements run)

```typescript
// Return type for multi-statement execution
{
  success: false,
  error: "Statement 3 failed: ...",
  data: [
    { sql: "stmt1", columns: [...], rows: [...] },     // succeeded
    { sql: "stmt2", columns: [...], rows: [...] },     // succeeded
    { sql: "stmt3", error: "...", isError: true },      // failed
  ]
}
```

### PostgreSQL Search Path

For PostgreSQL, queries automatically set `search_path` to include all non-system schemas:

```sql
SET search_path TO "public", "custom_schema1", "custom_schema2"
```

This means queries don't need schema-qualified table names.

### Connection Pooling

PostgreSQL uses `pg.Pool` with:
- `max: 10` connections
- `idleTimeoutMillis: 30000` (30s idle timeout)
- `connectionTimeoutMillis: 5000` (5s connect timeout)

MySQL creates a new connection per query (no pooling).

MongoDB and Redis create and close connections per request.

## Persistence Database Schema

The app's own data is stored in a MySQL database (configured via environment variables). Tables are auto-created by `/api/persist/init`.

### `db_connections`

Stores user-saved database connections (server-side persistence).

```sql
CREATE TABLE db_connections (
  id          VARCHAR(36) PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  type        VARCHAR(20) NOT NULL,   -- mysql, postgres, mongodb, redis
  host        VARCHAR(255) NOT NULL,
  port        INT NOT NULL,
  username    VARCHAR(255),
  password    VARCHAR(255),
  database_name VARCHAR(255),
  is_default  BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### `dashboards`

Dashboard metadata.

```sql
CREATE TABLE dashboards (
  id          VARCHAR(36) PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail   TEXT,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### `dashboard_components`

Individual widgets within dashboards.

```sql
CREATE TABLE dashboard_components (
  id           VARCHAR(36) PRIMARY KEY,
  dashboard_id VARCHAR(36) NOT NULL,
  type         VARCHAR(50) NOT NULL,    -- chart, text, image, stats, filter, table
  title        VARCHAR(255),
  layout_x     INT DEFAULT 0,
  layout_y     INT DEFAULT 0,
  layout_w     INT DEFAULT 4,
  layout_h     INT DEFAULT 6,
  data         JSON,                    -- Widget data payload
  config       JSON,                    -- Widget configuration
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (dashboard_id) REFERENCES dashboards(id) ON DELETE CASCADE
);
```

### `chat_conversations`

AI chat conversation metadata.

```sql
CREATE TABLE chat_conversations (
  id           VARCHAR(36) PRIMARY KEY,
  title        VARCHAR(255) NOT NULL,
  timestamp    BIGINT NOT NULL,
  chart_count  INT DEFAULT 0,
  datasource_id   VARCHAR(255),
  datasource_name VARCHAR(255),
  datasource_type VARCHAR(50),
  datasource_database VARCHAR(255),
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### `chat_messages`

Individual messages within conversations.

```sql
CREATE TABLE chat_messages (
  id              VARCHAR(36) PRIMARY KEY,
  conversation_id VARCHAR(36) NOT NULL,
  role            VARCHAR(20) NOT NULL,   -- user, assistant
  content         TEXT NOT NULL,
  timestamp       BIGINT NOT NULL,
  chart_data      JSON,                   -- ChartData if message has chart
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (conversation_id) REFERENCES chat_conversations(id) ON DELETE CASCADE
);
```

## Database-Specific Features

### MySQL
- Database creation with charset and collation options
- `SHOW TABLES`, `DESCRIBE`, `SHOW CREATE TABLE` support
- SQL dump import/export

### PostgreSQL
- Schema-aware browsing (public, custom schemas)
- Automatic `search_path` configuration
- Dollar-quoting support in SQL parsing

### MongoDB
- Collection browsing with document CRUD
- JSON query format: `{ collection: "name", filter: {}, limit: 100 }`
- Schema inference from sample documents
- JSON import/export

### Redis
- Database selection (0-15)
- Key browsing with pattern filtering
- Support for all key types (string, list, set, sorted set, hash)
- Key creation, update, delete with TTL
- Key export
