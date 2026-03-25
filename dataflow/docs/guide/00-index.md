# DataFlow AI Analyst - Development Guide

Welcome to the DataFlow AI Analyst development guide. This documentation covers everything you need to understand, run, and contribute to the project.

## What is DataFlow AI Analyst?

DataFlow AI Analyst is an **AI-powered database management and analysis platform** built with Next.js. It allows users to:

- Connect to and manage multiple databases (MySQL, PostgreSQL, MongoDB, Redis)
- Use natural language to query databases via AI-powered text-to-SQL
- Visualize query results with auto-generated charts
- Build custom dashboards with draggable widgets
- Import/export data in multiple formats (CSV, Excel, JSON)

## Documentation Index

Read these documents in order if you're new to the project:

| # | Document | Description |
|---|----------|-------------|
| 1 | [Getting Started](./01-getting-started.md) | Installation, environment setup, and running the app |
| 2 | [Architecture Overview](./02-architecture.md) | System design, tech stack, project structure |
| 3 | [Frontend Guide](./03-frontend-guide.md) | Components, state management, UI patterns |
| 4 | [API Reference](./04-api-reference.md) | All backend API routes and their usage |
| 5 | [Database Guide](./05-database-guide.md) | Database connections, drivers, persistence schema |
| 6 | [AI Integration](./06-ai-integration.md) | AI providers, text-to-SQL, smart suggestions |
| 7 | [Dashboard System](./07-dashboard-system.md) | Dashboard creation, widgets, layout engine |
| 8 | [Deployment](./08-deployment.md) | Build, deploy, and production configuration |

## Quick Reference

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **State:** React Context + Zustand
- **Charts:** ECharts 6
- **Editor:** Monaco Editor
- **Databases:** MySQL, PostgreSQL, MongoDB, Redis

## Existing Documentation (Chinese)

The `docs/` folder also contains original design documents in Chinese:

- `AI-Chat提示词.md` - AI chat prompt design
- `仪表盘提示词.md` - Dashboard prompt design
- `UI重构.md` - UI refactoring notes
- `competitive-analysis.md` - Competitive analysis
- `AI-SQL-Solutions-Research.md` - SQL AI research
- `todo.md` - Development task list
- `env-config.md` - Environment configuration (Chinese)
