# Getting Started

## Prerequisites

- **Node.js** 22.x or later
- **pnpm** 10.x or later (`npm install -g pnpm`)
- An AI provider API key (Anthropic, OpenAI, or a local Ollama instance)
- Access to at least one supported database (MySQL, PostgreSQL, MongoDB, or Redis)

## Installation

```bash
# Clone the repository
git clone <repo-url>
cd dataflow-ai-analyst

# Install dependencies
pnpm install
```

## Environment Configuration

Create a `.env.local` file in the project root:

```bash
# ─── AI Provider Configuration ──────────────────────────────
# Choose one: openai | anthropic | ollama
AI_PROVIDER=anthropic

# Anthropic (default provider)
ANTHROPIC_AUTH_TOKEN=your-auth-token-here
ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
ANTHROPIC_BASE_URL=https://api.anthropic.com

# OpenAI (alternative)
OPENAI_API_KEY=your-openai-key
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_BASE_URL=https://api.openai.com/v1

# Ollama (local, no API key needed)
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3

# AI Parameters
AI_TEMPERATURE=0.1
AI_MAX_TOKENS=2048

# ─── Persistence Database (MySQL) ───────────────────────────
# Used to store conversations, dashboards, and saved connections
PERSIST_DB_HOST=your-mysql-host
PERSIST_DB_PORT=3306
PERSIST_DB_USER=root
PERSIST_DB_PASSWORD=your-password
PERSIST_DB_NAME=dataflow
```

### AI Provider Details

| Provider | Required Keys | Best For |
|----------|--------------|----------|
| **Anthropic** | `ANTHROPIC_AUTH_TOKEN` or `ANTHROPIC_API_KEY` | Best SQL generation quality |
| **OpenAI** | `OPENAI_API_KEY` | Good balance of speed and quality |
| **Ollama** | None (local) | Privacy, offline use, no API costs |

## Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Default Database Connections

The app ships with 4 pre-configured database connections (defined in `contexts/ConnectionContext.tsx`). These connect to demo Sealos cloud databases:

| Type | Host | Port | User |
|------|------|------|------|
| MySQL | dbconn.sealosbja.site | 43555 | root |
| PostgreSQL | dbconn.sealosbja.site | 40057 | postgres |
| MongoDB | dbconn.sealosbja.site | 43859 | root |
| Redis | dbconn.sealosbja.site | 49606 | default |

> **Note:** These are development/demo connections. Replace them with your own database credentials for production use. User-added connections are persisted to `localStorage`.

## First Steps After Setup

1. Start the dev server (`pnpm dev`)
2. The app opens with the **Connections** tab active
3. Expand a database connection in the sidebar to browse databases/tables
4. Click a table to view its data
5. Right-click items in the sidebar for context menu operations (create, delete, export, etc.)
6. Switch to the **AI Assistant** tab to ask natural language questions about your data
7. Switch to the **Analysis** tab to create dashboards

## Troubleshooting

### Common Issues

**"AI is not configured"** - Make sure you set the correct API key for your chosen `AI_PROVIDER` in `.env.local`.

**Database connection errors** - Verify the database host/port are reachable from your machine. Default connections require internet access to `dbconn.sealosbja.site`.

**Build errors with `monaco-editor`** - The Monaco Editor package can be large. If you experience memory issues during build, increase Node memory: `NODE_OPTIONS="--max-old-space-size=4096" pnpm build`.

**Port 3000 already in use** - Run `pnpm dev --port 3001` to use a different port.
