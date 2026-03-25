# AI Integration

## Overview

The AI system converts natural language questions into SQL queries, executes them, and generates chart visualizations from the results. It supports three AI providers.

```
User Question
  ↓
Schema Extraction (fetch table/column metadata)
  ↓
Prompt Construction (question + schema + DB type)
  ↓
AI Provider (OpenAI / Anthropic / Ollama)
  ↓
SQL Response Cleaning
  ↓
Query Execution
  ↓
Result Analysis → Chart Generation
```

## AI Module (`lib/ai/`)

### File Structure

| File | Purpose |
|------|---------|
| `config.ts` | Provider configuration from env vars |
| `sql-agent.ts` | Core text-to-SQL conversion |
| `prompts.ts` | Prompt templates for SQL generation |
| `suggestions.ts` | Smart question generation from schema |
| `data-profiler.ts` | Analyze data for patterns and insights |
| `data-generator.ts` | Generate test data using AI |
| `index.ts` | Module exports |

## Provider Configuration (`config.ts`)

### Supported Providers

| Provider | Auth | Default Model | Base URL |
|----------|------|---------------|----------|
| **Anthropic** | `ANTHROPIC_AUTH_TOKEN` or `ANTHROPIC_API_KEY` | `claude-sonnet-4-5-20250929` | `https://api.anthropic.com` |
| **OpenAI** | `OPENAI_API_KEY` | `gpt-3.5-turbo` | `https://api.openai.com/v1` |
| **Ollama** | None (local) | `llama3` | `http://localhost:11434` |

### Configuration Interface

```typescript
interface AIConfig {
  provider: 'openai' | 'anthropic' | 'ollama';
  apiKey?: string;
  authToken?: string;
  model: string;
  baseUrl?: string;
  temperature: number;   // default: 0.1 (low for deterministic SQL)
  maxTokens: number;     // default: 2048
}
```

### Key Functions

```typescript
getAIConfig(): AIConfig           // Read config from env vars
getAIConfigStatus(): AIConfigStatus  // Safe status (no secrets)
validateAIConfig(config): { valid, error? }  // Check if configured
```

## Text-to-SQL Engine (`sql-agent.ts`)

### Core Flow

```typescript
// 1. Get AI config
const config = getAIConfig();

// 2. Validate
const validation = validateAIConfig(config);

// 3. Build prompt with schema context
const prompt = buildSqlGenerationPrompt({
  question: "Show top customers",
  schema: formatSchemaForPrompt(tableSchemas),
  dbType: "mysql",
  dbName: "sales_db",
});

// 4. Call AI provider
const response = await callAI(config, prompt);

// 5. Clean response (strip markdown, extract SQL)
const sql = cleanSqlResponse(response);
```

### Provider API Calls

Each provider has its own function:

- `callOpenAI()` - Uses `/chat/completions` endpoint
- `callAnthropic()` - Uses `/v1/messages` endpoint with `x-api-key` header
- `callOllama()` - Uses `/api/generate` endpoint (no auth)

### SQL Response Cleaning (`cleanSqlResponse`)

AI responses often include markdown or explanatory text. The cleaner:

1. Strips `` ```sql `` code blocks
2. Matches SQL patterns (`SELECT`, `SHOW`, `DESCRIBE`, etc.)
3. Handles multi-line SELECT statements
4. Stops at explanatory text (including Chinese characters)
5. Falls back to first-line extraction

### SQL Refinement

When a generated SQL query fails execution, the system can auto-retry:

```typescript
const refined = await refineSql({
  question: originalQuestion,
  schema: tableSchemas,
  dbType: "mysql",
  dbName: "mydb",
  previousSql: failedSql,
  error: executionError,
});
```

This sends both the failed SQL and the error message to the AI for correction.

## Prompt Templates (`prompts.ts`)

Prompts are written in **Chinese** (the original development language) and include:

### SQL Generation Prompt

```
你是一个 SQL 专家。根据用户问题生成 SQL 查询。

**重要：你必须只返回 SQL 语句本身...**

## 数据库信息
- 数据库类型: {dbType}
- 数据库名称: {dbName}

## 可用的表结构
{schema}

## 用户问题
{question}
```

### Refinement Prompt

Includes the failed SQL and error message for the AI to fix.

### Helper Functions

```typescript
buildSqlGenerationPrompt(params) → string
buildRefinementPrompt(params) → string
formatSchemaForPrompt(schemas: TableSchema[]) → string
```

`formatSchemaForPrompt` converts table schemas to a readable text format:

```
Table: users
  - id (INT, PRIMARY KEY)
  - name (VARCHAR(255), NOT NULL)
  - email (VARCHAR(255))
  - created_at (TIMESTAMP)
Row count: 1,234
```

## Smart Suggestions (`suggestions.ts`)

Generates relevant questions a user might want to ask about their data.

### How It Works

1. Fetch database schema (tables, columns, types)
2. Identify patterns:
   - Date/time columns → suggest trend analysis
   - Numeric columns → suggest aggregations
   - Categorical columns → suggest distributions
   - Foreign keys → suggest join-based queries
3. Generate question suggestions with:
   - Natural language text
   - Pre-built SQL query
   - Recommended chart type
   - Category and priority

### Suggestion Caching

Suggestions are cached in-memory with a 5-minute TTL:

```typescript
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Cache key format: "connectionId:database"
const suggestionCache = new Map<string, CachedSuggestions>();
```

The `prefetchSuggestions()` function is called when a user expands a database in the sidebar, so suggestions are ready by the time they open the AI chat.

## Data Profiler (`data-profiler.ts`)

Performs deeper analysis of actual data values:

- Sample rows to understand data patterns
- Identify value distributions
- Detect date ranges for time-series
- Find numeric column statistics (min, max, avg)
- Generate more targeted suggestions based on actual data

## Data Generator (`data-generator.ts`)

Uses AI to generate realistic test data for tables:

1. Reads table schema (columns, types, constraints)
2. Asks AI to generate sample data matching the schema
3. Inserts generated rows into the table

Accessible via the "Generate Test Data" context menu on tables.

## Chart Data Types

When AI generates chart-ready results, they follow the `ChartData` interface:

```typescript
interface ChartData {
  title: string;
  type: 'bar' | 'line' | 'pie' | 'table' | 'area' | 'scatter';
  xAxis: string[];
  xAxisName?: string;
  series: { name: string; data: number[] }[];
  columns?: string[];      // For table display
  rows?: any[];            // For table display
  sql?: string;            // The generated SQL
  direction?: 'horizontal' | 'vertical';
  displayType?: 'single_value' | 'simple_list' | 'table_only' | 'chart' | 'text_only';
  singleValue?: string | number;
}
```

### Display Type Classification

The system classifies results to pick the best visualization:

| Type | When | Display |
|------|------|---------|
| `single_value` | 1 row, 1 column | Large number/text |
| `simple_list` | Few rows, 1-2 columns | Simple list |
| `table_only` | Many columns, no clear chart mapping | Data table |
| `chart` | Clear x/y axis mapping | ECharts visualization |
| `text_only` | Descriptive/error response | Plain text |

## API Endpoints for AI

| Endpoint | Purpose |
|----------|---------|
| `POST /api/ai-chat/text-to-sql` | Main text-to-SQL conversion |
| `GET /api/ai-chat/config` | Check AI configuration status |
| `POST /api/ai-chat/generate-schema` | Extract schema for a database |
| `POST /api/ai-chat/analyze-schema` | Deep analysis with suggestions |
| `POST /api/ai-chat/quick-analyze` | Fast analysis for prefetching |
| `POST /api/ai-chat/execute-suggestion` | Run a suggested query |

## Adding a New AI Provider

To add a new provider:

1. Add the provider type to `AIProvider` in `config.ts`
2. Add a new `case` in `getAIConfig()` for env var mapping
3. Create a `callNewProvider()` function in `sql-agent.ts`
4. Add it to the `callAI()` switch statement
5. Update `validateAIConfig()` with validation logic
6. Add env vars to `.env.local`
