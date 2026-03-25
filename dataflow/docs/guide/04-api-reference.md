# API Reference

All API routes are under `app/api/` using Next.js App Router conventions. Each route is a `route.ts` file exporting HTTP method handlers (`GET`, `POST`, `PUT`, `DELETE`).

## Common Request Pattern

Most database operation endpoints expect connection details in the request body:

```typescript
{
  type: "mysql" | "postgres" | "mongodb" | "redis",
  host: string,
  port: string,
  user: string,
  password: string,
  database?: string,
  // ... operation-specific fields
}
```

## AI Chat (`/api/ai-chat/`)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/ai-chat/text-to-sql` | POST | Convert natural language to SQL |
| `/api/ai-chat/config` | GET | Get AI provider configuration status |
| `/api/ai-chat/generate-schema` | POST | Extract schema metadata from a database |
| `/api/ai-chat/analyze-schema` | POST | Deep schema analysis with AI-generated suggestions |
| `/api/ai-chat/quick-analyze` | POST | Quick schema analysis (lightweight suggestions) |
| `/api/ai-chat/execute-suggestion` | POST | Execute an AI-suggested query |

### POST `/api/ai-chat/text-to-sql`

Converts a natural language question into a SQL query.

**Request:**
```json
{
  "question": "Show me the top 10 customers by total orders",
  "type": "mysql",
  "host": "localhost",
  "port": "3306",
  "user": "root",
  "password": "pass",
  "database": "mydb"
}
```

**Response:**
```json
{
  "success": true,
  "sql": "SELECT customer_name, COUNT(*) as total_orders FROM orders GROUP BY customer_name ORDER BY total_orders DESC LIMIT 10",
  "explanation": "..."
}
```

### GET `/api/ai-chat/config`

Returns AI provider configuration status (without sensitive keys).

**Response:**
```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4-5-20250929",
  "isConfigured": true
}
```

### POST `/api/ai-chat/analyze-schema`

Deep analysis of database schema. Generates smart question suggestions based on actual data patterns.

**Request:**
```json
{
  "type": "mysql",
  "host": "...",
  "port": "...",
  "user": "...",
  "password": "...",
  "database": "mydb"
}
```

**Response:**
```json
{
  "success": true,
  "schema": { "tables": [...], "summary": {...} },
  "suggestions": [
    {
      "id": "...",
      "text": "What are the monthly sales trends?",
      "query": "SELECT ...",
      "chartType": "line",
      "description": "...",
      "category": "trend_analysis",
      "priority": 1
    }
  ]
}
```

---

## Database Connections (`/api/connections/`)

### Database Operations

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/fetch-databases` | POST | List all databases |
| `/api/connections/create-database` | POST | Create a new database |
| `/api/connections/update-database` | POST | Rename a database |
| `/api/connections/delete-database` | POST | Drop a database |
| `/api/connections/import-database` | POST | Import SQL dump |
| `/api/connections/export-database` | POST | Export database as SQL |
| `/api/connections/list-databases` | POST | List databases (alternative) |

### Schema Operations (PostgreSQL)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/fetch-schemas` | POST | List schemas in a database |
| `/api/connections/list-schemas` | POST | List schemas (alternative) |

### Table Operations

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/fetch-tables` | POST | List tables in a database |
| `/api/connections/list-tables` | POST | List tables (alternative) |
| `/api/connections/fetch-table-schema` | POST | Get table column definitions |
| `/api/connections/fetch-table-data` | POST | Get table rows (paginated) |
| `/api/connections/create-table` | POST | Create a new table with columns |
| `/api/connections/update-table` | POST | Add/modify table columns |
| `/api/connections/update-table-schema` | POST | Alter table schema |
| `/api/connections/delete-table` | POST | Drop a table |
| `/api/connections/empty-table` | POST | Delete all rows |
| `/api/connections/truncate-table` | POST | Truncate table |
| `/api/connections/copy-table` | POST | Duplicate a table |

### Row Operations

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/create-row` | POST | Insert a new row |
| `/api/connections/update-row` | POST | Update an existing row |
| `/api/connections/delete-row` | POST | Delete a row |

### Data Import/Export

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/import-data` | POST | Import CSV/Excel data into table |
| `/api/connections/export-data` | POST | Export table data (CSV/Excel/JSON) |

### MongoDB Collection Operations

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/fetch-collections` | POST | List collections |
| `/api/connections/fetch-collection-data` | POST | Get documents (paginated) |
| `/api/connections/fetch-collection-schema` | POST | Infer collection schema |
| `/api/connections/drop-collection` | POST | Drop a collection |
| `/api/connections/create-document` | POST | Insert a document |
| `/api/connections/update-document` | POST | Update a document |
| `/api/connections/delete-document` | POST | Delete a document |
| `/api/connections/import-collection` | POST | Import JSON documents |
| `/api/connections/export-collection` | POST | Export collection as JSON |

### Redis Operations

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/fetch-keys` | POST | List Redis keys |
| `/api/connections/fetch-redis-keys` | POST | List keys with filtering |
| `/api/connections/fetch-key-value` | POST | Get key value |
| `/api/connections/fetch-redis-key-detail` | POST | Get key value with type info |
| `/api/connections/redis/key/create` | POST | Create a key |
| `/api/connections/redis/key/update` | POST | Update a key's value |
| `/api/connections/redis/key/delete` | POST | Delete a key |
| `/api/connections/redis/export` | POST | Export keys |

### Utilities

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/connections/test` | POST | Test database connection |
| `/api/connections/parse` | POST | Parse connection string |
| `/api/connections/generate-test-data` | POST | Generate test data using AI |

---

## Info Endpoints (`/api/info/`)

Return metadata for sidebar detail panels. All use dynamic route segments.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/info/connection/[id]` | GET | Connection details |
| `/api/info/database/[id]/[database]` | GET | Database info (size, tables, charset) |
| `/api/info/schema/[id]/[database]/[schema]` | GET | Schema info (PostgreSQL) |
| `/api/info/table/[...path]` | GET | Table info (columns, row count, indexes) |
| `/api/info/collection/[id]/[database]/[collection]` | GET | Collection info (MongoDB) |
| `/api/info/key/[id]/[database]/[key]` | GET | Redis key info (type, TTL, value) |

---

## Persistence (`/api/persist/`)

Manages app data in the persistence MySQL database.

### Database Initialization

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/persist/init` | POST | Create persistence tables if not exist |

### Saved Connections

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/persist/connections` | GET | List saved connections |
| `/api/persist/connections` | POST | Save a connection |
| `/api/persist/connections/[id]` | DELETE | Delete a saved connection |

### Conversations

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/persist/conversations` | GET | List all conversations |
| `/api/persist/conversations` | POST | Create a conversation |
| `/api/persist/conversations/[id]` | GET | Get conversation with messages |
| `/api/persist/conversations/[id]` | PUT | Update conversation (title, datasource) |
| `/api/persist/conversations/[id]` | DELETE | Delete conversation and its messages |
| `/api/persist/conversations/[id]/messages` | POST | Add a message to conversation |

### Dashboards

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/persist/dashboards` | GET | List all dashboards |
| `/api/persist/dashboards` | POST | Create a dashboard |
| `/api/persist/dashboards/[id]` | GET | Get dashboard with components |
| `/api/persist/dashboards/[id]` | PUT | Update dashboard and components |
| `/api/persist/dashboards/[id]` | DELETE | Delete dashboard and components |
| `/api/persist/dashboards/[id]/components` | GET | List components for a dashboard |
| `/api/persist/dashboards/components/[id]` | PUT | Update a single component |

---

## Query Execution (`/api/query/`)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/query/execute` | POST | Execute SQL/command against a connection |
| `/api/query/format` | POST | Format/beautify SQL |
| `/api/query/save` | POST | Save a query |
| `/api/query/stop` | POST | Cancel a running query |

### POST `/api/query/execute`

Executes SQL against the specified database. Supports multi-statement execution with partial results on failure.

**Request:**
```json
{
  "type": "mysql",
  "host": "localhost",
  "port": "3306",
  "user": "root",
  "password": "pass",
  "database": "mydb",
  "query": "SELECT * FROM users LIMIT 10"
}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "sql": "SELECT * FROM users LIMIT 10",
      "columns": ["id", "name", "email"],
      "rows": [...]
    }
  ]
}
```

---

## Schema Metadata (`/api/schema/`)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/schema/metadata` | POST | Get full database schema for AI context |
