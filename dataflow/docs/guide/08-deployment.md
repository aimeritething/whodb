# Deployment

## Build

```bash
# Production build
pnpm build

# Start production server
pnpm start
```

The app builds with `output: 'standalone'` (configured in `next.config.ts`), which creates a self-contained deployment bundle at `.next/standalone/`.

## Standalone Deployment

The standalone output includes everything needed to run without `node_modules`:

```bash
# After building
cd .next/standalone
node server.js
```

The server listens on port 3000 by default. Set `PORT` environment variable to change.

### Static Assets

Standalone output doesn't include static files. Copy them:

```bash
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
```

## Docker

### Dockerfile Example

```dockerfile
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest-10 --activate

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env.local
    depends_on:
      - persistence-db

  persistence-db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: your-password
      MYSQL_DATABASE: dataflow
    volumes:
      - mysql-data:/var/lib/mysql
    ports:
      - "3306:3306"

volumes:
  mysql-data:
```

## Environment Variables for Production

All environment variables are read server-side in API routes. Set them in your deployment platform:

### Required

```bash
# AI Provider (choose one)
AI_PROVIDER=anthropic
ANTHROPIC_AUTH_TOKEN=sk-ant-...

# Persistence Database
PERSIST_DB_HOST=your-mysql-host
PERSIST_DB_PORT=3306
PERSIST_DB_USER=root
PERSIST_DB_PASSWORD=your-password
PERSIST_DB_NAME=dataflow
```

### Optional

```bash
# AI tuning
AI_TEMPERATURE=0.1
AI_MAX_TOKENS=2048
ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
ANTHROPIC_BASE_URL=https://api.anthropic.com

# Alternative providers
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4
OLLAMA_BASE_URL=http://ollama:11434
OLLAMA_MODEL=llama3
```

## Persistence Database Setup

The app automatically creates its tables on first use via `/api/persist/init`. You only need to create the database:

```sql
CREATE DATABASE dataflow CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Or let the Docker Compose `MYSQL_DATABASE` environment variable handle it.

## Platform-Specific Notes

### Vercel

Next.js standalone output works on Vercel. Set environment variables in the Vercel dashboard. Note: the persistence database must be externally accessible (not localhost).

### Sealos Cloud

The project was originally developed for Sealos Cloud deployment with managed database instances. Database connection URLs use the `dbconn.sealosbja.site` hostname.

### Railway / Render / Fly.io

1. Connect your Git repository
2. Set build command: `pnpm build`
3. Set start command: `node .next/standalone/server.js`
4. Configure environment variables
5. Add a MySQL service for persistence

## Health Checks

No built-in health check endpoint exists. You can add one at `app/api/health/route.ts`:

```typescript
export async function GET() {
  return Response.json({ status: 'ok', timestamp: Date.now() });
}
```

## Security Considerations

### Current State

- **Database credentials are passed in request bodies** - This is by design for the current architecture, but means credentials travel over the network with every API call.
- **Default connections are hardcoded** - Remove or change the default connections in `ConnectionContext.tsx` for production.
- **No authentication** - The app has no user login system. Anyone with access to the URL can use all features.
- **Persistence DB credentials are hardcoded** - The persistence database connection is configured in API routes. Use environment variables for production.

### Recommendations for Production

1. Add authentication (NextAuth.js, Clerk, or custom)
2. Store database connections server-side instead of passing credentials per-request
3. Use HTTPS in production
4. Remove default demo database connections
5. Set restrictive CORS headers
6. Encrypt stored database passwords
7. Rate-limit AI API calls
8. Add input validation for SQL injection prevention on non-parameterized queries
