<p align="center">
  <img src="docs/logo/logo.png" alt="WhoDB" width="100" />
</p>

<h1 align="center">WhoDB</h1>

<p align="center">
  A lightweight, modern database management tool for exploring, querying, and visualizing your data.
</p>

<p align="center">
  <a href="https://github.com/clidey/whodb/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License" /></a>
</p>

---

## What is WhoDB?

WhoDB is an open-source database management tool that provides a unified, browser-based interface for working with multiple database types. It combines schema exploration, data management, query execution, and graph visualization in a single lightweight application.

### Supported Databases

| SQL | NoSQL / Key-Value | Analytics |
|-----|-------------------|-----------|
| PostgreSQL | MongoDB | ClickHouse |
| MySQL | Redis | Elasticsearch |
| MariaDB | | |
| SQLite | | |

### Key Features

- **Schema Explorer** - Browse databases, schemas, and tables in an organized tree view
- **Data Grid** - View, add, edit, and delete records in a spreadsheet-like interface with sorting, filtering, and pagination
- **Scratchpad** - SQL editor with syntax highlighting, multi-cell support, and query history
- **Graph Visualization** - Interactive schema diagrams showing table relationships and foreign keys
- **Import/Export** - Import from CSV and Excel; export to CSV, Excel, JSON, and SQL
- **Mock Data Generation** - Generate realistic test data with foreign key awareness
- **AI Chat** - Query databases using natural language with configurable LLM providers (OpenAI, Anthropic, Ollama, or any OpenAI-compatible endpoint)
- **AWS Integration** - Auto-discover RDS, ElastiCache, and DocumentDB instances
- **Connection Profiles** - Pre-configure database connections via environment variables
- **Keyboard Shortcuts** - Full keyboard-driven workflow

## Quick Start

### Docker (Recommended)

```bash
docker pull clidey/whodb:latest
docker run -d --name whodb -p 8080:8080 clidey/whodb:latest
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Docker Compose

```yaml
version: '3.8'
services:
  whodb:
    image: clidey/whodb:latest
    ports:
      - "8080:8080"
    restart: unless-stopped
    volumes:
      - whodb-data:/data
volumes:
  whodb-data:
```

```bash
docker-compose up -d
```

### Binary Download

Pre-compiled binaries are available on the [Releases](https://github.com/clidey/whodb/releases/latest) page for Linux, macOS, and Windows.

```bash
# Linux
curl -L https://github.com/clidey/whodb/releases/latest/download/whodb-linux-amd64 -o whodb
chmod +x whodb && ./whodb

# macOS
curl -L https://github.com/clidey/whodb/releases/latest/download/whodb-darwin-amd64 -o whodb
chmod +x whodb && ./whodb
```

### Build from Source

**Prerequisites:** Go 1.21+, Node.js 18+, pnpm

```bash
git clone https://github.com/clidey/whodb.git
cd whodb

# Build frontend
cd dataflow && pnpm install && pnpm run build && cd ..

# Build backend (embeds DataFlow assets)
cd core && go build -o whodb . && ./whodb
```

### Development Mode

Run the backend and frontend separately with hot-reload:

```bash
# Terminal 1 - Backend
cd core && go run .

# Terminal 2 - DataFlow
cd dataflow && pnpm dev
```

The DataFlow dev server runs at `http://localhost:5173` and proxies API requests to the backend.

## Configuration

WhoDB is configured via environment variables.

### Server

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | TCP port | `8080` |
| `WHODB_LOG_LEVEL` | `debug`, `info`, `warn`, `error`, `none` | `info` |
| `WHODB_LOG_FORMAT` | `json` or `text` | `text` |
| `WHODB_TOKENS` | Comma-separated static tokens to restrict access | unset |
| `WHODB_ALLOWED_ORIGINS` | Comma-separated CORS origins | unset (all) |
| `WHODB_MAX_PAGE_SIZE` | Max rows per page | `10000` |

### Database Connection Profiles

Pre-configure connections so they appear on the login page:

```bash
export WHODB_POSTGRES='[
  {"alias":"prod","host":"db.example.com","user":"postgres","password":"secret","database":"mydb","port":"5432"}
]'
```

Supported prefixes: `WHODB_POSTGRES`, `WHODB_MYSQL`, `WHODB_MARIADB`, `WHODB_SQLITE3`, `WHODB_MONGODB`, `WHODB_REDIS`, `WHODB_CLICKHOUSE`, `WHODB_ELASTICSEARCH`

Each prefix also supports numbered variants (`WHODB_POSTGRES_1`, `WHODB_POSTGRES_2`, etc.).

### AI Providers

| Variable | Description |
|----------|-------------|
| `WHODB_OPENAI_API_KEY` | OpenAI API key |
| `WHODB_ANTHROPIC_API_KEY` | Anthropic API key |
| `WHODB_OLLAMA_HOST` / `WHODB_OLLAMA_PORT` | Ollama server (`localhost:11434` by default) |
| `WHODB_AI_GENERIC_<ID>_BASE_URL` | Any OpenAI-compatible endpoint |
| `WHODB_AI_GENERIC_<ID>_API_KEY` | API key for generic provider |
| `WHODB_AI_GENERIC_<ID>_MODELS` | Comma-separated model list |

### AWS Cloud Provider

```bash
WHODB_ENABLE_AWS_PROVIDER=true
```

See the [full documentation](https://docs.whodb.com) for all configuration options.

## Project Structure

```
core/                   # Go backend
  server.go             # Entry point
  src/plugins/          # Database connectors (PostgreSQL, MySQL, MongoDB, etc.)
  graph/schema.graphqls # GraphQL schema
  graph/*.resolvers.go  # GraphQL resolvers
  Dockerfile            # Multi-stage production build

dataflow/               # React/TypeScript frontend
  src/main.tsx          # Entry point
  src/stores/           # Zustand state management
  src/components/       # Database, editor, analysis, and layout UI

dev/                    # Docker Compose for test databases, E2E scripts
docs/                   # Documentation and assets
```

## Tech Stack

**Backend:** Go, GraphQL (gqlgen), Chi router, GORM

**Frontend:** React 19, TypeScript, Zustand, Apollo Client, Vite, Tailwind CSS 4, Monaco Editor, ECharts, react-grid-layout

## Documentation

Full documentation is available at [docs.whodb.com](https://docs.whodb.com).

## License

WhoDB is licensed under the [Apache License 2.0](LICENSE).

Copyright Clidey, Inc.
