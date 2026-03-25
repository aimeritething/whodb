# DataFlow 持久化层架构审查报告

> 审查范围：`app/api/persist/` 全部路由、`stores/`、`contexts/ConnectionContext.tsx`
> 审查日期：2026-03-19

---

## 问题 1：无多租户隔离（严重）

### 问题描述

所有数据表缺少 `user_id` 字段，所有查询不加用户过滤条件。任何用户访问 API 都会获取全量数据，包括其他用户的 Dashboard、对话记录和数据库连接凭证。

### 代码证据

**表结构没有 `user_id`**（`app/api/persist/db.ts:43-57`）：

```sql
CREATE TABLE IF NOT EXISTS db_connections (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type ENUM('MYSQL', 'POSTGRES', 'MONGODB', 'REDIS') NOT NULL,
    host VARCHAR(255) NOT NULL,
    port VARCHAR(10) NOT NULL,
    user VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,    -- 明文密码
    database_name VARCHAR(100),
    is_default BOOLEAN DEFAULT FALSE,
    -- ❌ 没有 user_id 字段
)
```

`dashboards`、`chat_conversations`、`chat_messages` 三张表同样没有 `user_id`。

**查询返回全量数据**（`app/api/persist/dashboards/route.ts:8-12`）：

```ts
const rows = await query<any[]>(`
    SELECT id, name, description, thumbnail, created_at, updated_at
    FROM dashboards
    ORDER BY updated_at DESC
`);
// ❌ 没有 WHERE user_id = ?
```

**对话记录同样无过滤**（`app/api/persist/conversations/route.ts:8-15`）：

```ts
const rows = await query<any[]>(`
    SELECT id, title, timestamp, chart_count,
        datasource_id, datasource_name, datasource_type, datasource_database,
        created_at, updated_at
    FROM chat_conversations
    ORDER BY timestamp DESC
`);
// ❌ 返回所有用户的对话
```

**数据库连接凭证全量暴露**（`app/api/persist/connections/route.ts:21-27`）：

```ts
const rows = await query<any[]>(`
    SELECT id, name, type, host, port, user, password,
        database_name as \`database\`, is_default, created_at
    FROM db_connections
    ORDER BY is_default DESC, created_at DESC
`);
// ❌ 返回所有用户的数据库连接，包括明文密码
```

### 实际影响

假设 Alice 保存了生产数据库连接（host=prod.company.com, password=P@ssw0rd!），Bob 只需调用 `GET /api/persist/connections` 就能拿到 Alice 的全部凭证。同样，所有用户的 AI 对话记录（可能包含敏感查询结果）对所有人可见。

### 根因

项目没有认证系统，不知道"请求来自谁"，因此也无法在数据层做隔离。

---

## 问题 2：连接信息双重存储（混乱）

### 问题描述

用户的数据库连接存在两个互相独立的存储位置：浏览器 `localStorage` 和服务端 `db_connections` 表。两边各自读写，没有同步机制，数据会漂移不一致。

### 代码证据

**客户端：从 localStorage 读取**（`contexts/ConnectionContext.tsx:103-122`）：

```ts
useEffect(() => {
    const stored = localStorage.getItem('dataflow_connections');
    let userConnections: Connection[] = [];

    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            userConnections = parsed.filter((c: Connection) =>
                !['default-mysql', 'default-pg', 'default-mongo', 'default-redis'].includes(c.id)
            );
        } catch (error) {
            console.error('Failed to parse stored connections:', error);
        }
    }

    setConnections([...defaultConnections, ...userConnections]);
}, []);
```

**客户端：写入 localStorage**（`contexts/ConnectionContext.tsx:125-133`）：

```ts
useEffect(() => {
    if (isLoaded) {
        const userConnections = connections.filter(c =>
            !['default-mysql', 'default-pg', 'default-mongo', 'default-redis'].includes(c.id)
        );
        localStorage.setItem('dataflow_connections', JSON.stringify(userConnections));
    }
}, [connections, isLoaded]);
```

**服务端：独立的 `db_connections` 表**（`app/api/persist/connections/route.ts:57-61`）：

```ts
await query(`
    INSERT INTO db_connections
    (id, name, type, host, port, user, password, database_name, is_default)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [id, name, type, host, port, user || '', password || '', database || '', is_default]);
```

### 实际影响

- 用户在浏览器 A 添加连接 → 存到 localStorage → 服务端 `db_connections` 不知道
- 用户在浏览器 B 打开 DataFlow → localStorage 是空的 → 看不到之前的连接
- 两个存储的 ID 生成方式不同：客户端用 `crypto.randomUUID()`（第138行），服务端用 `uuidv4()`（第55行），即使同一个连接存了两边，ID 也对不上

### 根因

没有确定连接信息的权威数据源。localStorage 是遗留的早期实现，`db_connections` 表后来加的，但没有替换掉前者。

---

## 问题 3：明文存储数据库密码（严重）

### 问题描述

用户保存的外部数据库密码以明文形式存入 `db_connections` 表，查询时也以明文返回给前端。

### 代码证据

**写入时：明文直接 INSERT**（`app/api/persist/connections/route.ts:57-61`）：

```ts
await query(`
    INSERT INTO db_connections
    (id, name, type, host, port, user, password, database_name, is_default)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [id, name, type, host, port, user || '', password || '', database || '', is_default]);
//                                         ^^^^^^^^ 明文
```

**读取时：明文返回 password 字段**（`app/api/persist/connections/route.ts:21-27`）：

```ts
const rows = await query<any[]>(`
    SELECT id, name, type, host, port, user, password, ...
    FROM db_connections
`);
// password 字段原样返回给前端
```

**返回响应也包含明文密码**（`app/api/persist/connections/route.ts:63-66`）：

```ts
return NextResponse.json({
    success: true,
    data: { id, name, type, host, port, user, password, database, is_default }
    //                                        ^^^^^^^^ 明文返回
});
```

**客户端硬编码的默认连接也是明文**（`contexts/ConnectionContext.tsx:55-99`）：

```ts
const defaultConnections: Connection[] = [
    {
        id: 'default-mysql',
        name: 'mysql',
        host: 'dbconn.sealosbja.site',
        port: '43555',
        user: 'root',
        password: 'jm8bwh44',     // ❌ 硬编码在前端源码
    },
    // ... 其他三个连接同样硬编码了密码
];
```

### 实际影响

任何能访问数据库的人（DBA、泄露的备份、SQL 注入）都能直接读到所有用户的数据库密码。结合问题 1（无租户隔离），任何用户都能通过 API 拿到所有人的密码。

---

## 问题 4：Fire-and-Forget 无错误恢复（中等）

### 问题描述

Zustand Store 对持久化 API 的调用采用"发射后不管"模式 — UI 立即更新状态，API 调用失败时静默吞掉错误，用户不会收到任何提示。

### 代码证据

**对话创建：catch 只打日志**（`stores/useSqlBotStore.ts:30-43`）：

```ts
async function createConversationAPI(conversation: Conversation): Promise<void> {
    try {
        await fetch('/api/persist/conversations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: conversation.title,
                dataSource: conversation.dataSource
            })
        });
    } catch (error) {
        console.error('[SqlBotStore] Failed to create conversation:', error);
        // ❌ 错误被吞掉，不通知用户，不重试
    }
}
```

**对话删除：同样静默失败**（`stores/useSqlBotStore.ts:45-53`）：

```ts
async function deleteConversationAPI(id: string): Promise<void> {
    try {
        await fetch(`/api/persist/conversations/${id}`, { method: 'DELETE' });
    } catch (error) {
        console.error('[SqlBotStore] Failed to delete conversation:', error);
        // ❌ UI 上对话已经消失，但服务端可能没删成功
    }
}
```

**消息持久化：同样静默失败**（`stores/useSqlBotStore.ts:67-80`）：

```ts
async function addMessageAPI(conversationId: string, message: Message): Promise<void> {
    try {
        await fetch(`/api/persist/conversations/${conversationId}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role: message.role, content: message.content, chart: message.chart })
        });
    } catch (error) {
        console.error('[SqlBotStore] Failed to add message:', error);
        // ❌ 用户和 AI 的对话记录可能丢失
    }
}
```

**Dashboard 获取：失败时返回空数组**（`stores/useAnalysisStore.ts:33-49`）：

```ts
async function fetchDashboardsFromAPI(): Promise<Dashboard[]> {
    try {
        const response = await fetch('/api/persist/dashboards');
        const data = await response.json();
        if (data.success) {
            return data.data.map((d: any) => ({ ... }));
        }
    } catch (error) {
        console.error('[AnalysisStore] Failed to fetch dashboards:', error);
    }
    return [];
    // ❌ 网络失败时返回空数组，用户以为自己没有 dashboard
}
```

### 实际影响

用户创建了一个 Dashboard 并添加了 6 个图表组件，网络临时断开，所有 API 调用静默失败。UI 显示一切正常。用户刷新页面后，Dashboard 消失了——数据从未持久化。用户不会知道发生了什么。

---

## 问题 5：Dashboard 更新的竞态条件（中等）

### 问题描述

Dashboard 更新采用"删除全部组件 → 重新插入"的策略，没有事务保护。并发保存会导致数据覆盖或丢失。

### 代码证据

**PUT 请求：先删后插**（`app/api/persist/dashboards/[id]/route.ts:112-136`）：

```ts
if (components && Array.isArray(components)) {
    // 第一步：删除所有现有组件
    await query(`DELETE FROM dashboard_components WHERE dashboard_id = ?`, [id]);

    // 第二步：逐个插入新组件
    for (const comp of components) {
        await query(`
            REPLACE INTO dashboard_components
            (id, dashboard_id, type, title, description, layout_x, layout_y, layout_w, layout_h, data, config)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            comp.id, id, comp.type, comp.title || '', comp.description || '',
            comp.layout?.x || 0, comp.layout?.y || 0, comp.layout?.w || 6, comp.layout?.h || 6,
            comp.data ? JSON.stringify(comp.data) : null,
            comp.config ? JSON.stringify(comp.config) : null
        ]);
    }
}
```

注意：代码注释写的是 `REPLACE INTO to handle any race conditions`，但 `REPLACE INTO` 并不能解决竞态问题——它只是 MySQL 的 `DELETE + INSERT` 语法糖。真正的竞态发生在两个请求交错执行 DELETE 和 INSERT 之间。

### 竞态时序

```
时间线  请求 A (保存 3 个组件)          请求 B (保存 5 个组件)
  t1    DELETE all components
  t2                                    DELETE all components （A 的插入还没开始）
  t3    INSERT comp1
  t4    INSERT comp2
  t5                                    INSERT comp1'
  t6    INSERT comp3
  t7                                    INSERT comp2' ... comp5'

最终结果：表里有 comp1, comp2, comp3, comp1', comp2'...comp5'（8个组件混在一起）
或者更糟：如果 t2 发生在 t3 之后，A 的 comp1 被 B 的 DELETE 删掉
```

### 实际影响

用户快速操作 Dashboard（拖拽布局、删除组件），每次操作触发 PUT 保存。由于 fire-and-forget 模式，多个 PUT 请求可能同时到达服务端，导致组件丢失或重复。

---

## 问题 6：用户数据库连接无复用（性能）

### 问题描述

每个 API 请求都创建新的数据库连接，执行查询后立即销毁。没有连接池复用机制。

### 代码证据

**MySQL 连接：每次请求新建**（`app/api/connections/fetch-table-data/route.ts:1-3` 引入，实际使用处同文件）：

```ts
import mysql from 'mysql2/promise';
import { Client as PgClient } from 'pg';
import { MongoClient } from 'mongodb';

// 在每个请求处理函数中：
const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
    database,
});
// 执行查询...
await connection.end();  // 用完即销毁
```

**PostgreSQL 连接：同样每次新建**（`app/api/ai-chat/text-to-sql/route.ts` 中的 `getSchema` 函数）：

```ts
const pool = new Pool({
    host, port, user, password, database,
});
// 执行查询...
await pool.end();  // 用完即销毁——虽然变量名叫 pool，但实际上是一次性使用
```

**测试连接：同样模式**（`app/api/connections/test/route.ts:34-45`）：

```ts
const connection = await mysql.createConnection({
    host: params.host,
    port: parseInt(params.port),
    user: params.user,
    password: params.password,
    database: params.database || undefined,
    connectTimeout: 10000,
});
await connection.ping();
await connection.end();
```

### 实际影响

一个 Dashboard 页面有 6 个图表组件，每个组件需要从用户数据库查询数据。当前架构需要：6 次 TCP 握手 + 6 次数据库认证 + 6 次查询 + 6 次连接关闭 = 12 次网络往返的额外开销。如果使用连接池，只需要 1 次握手 + 1 次认证，后续 5 次查询直接复用。

---

## 问题 7：持久化层硬绑定 MySQL（扩展性）

### 问题描述

持久化层的建表语句、查询语法、数据类型都是 MySQL 特有的。无法切换到 PostgreSQL（生产）或 SQLite（本地开发）而不重写全部 SQL。

### 代码证据

**MySQL ENUM 类型**（`app/api/persist/db.ts:47, 111`）：

```sql
type ENUM('MYSQL', 'POSTGRES', 'MONGODB', 'REDIS') NOT NULL,
```
```sql
role ENUM('user', 'assistant') NOT NULL,
```

PostgreSQL 的 ENUM 需要先 `CREATE TYPE ... AS ENUM`，SQLite 完全不支持 ENUM。

**MySQL ON UPDATE CURRENT_TIMESTAMP**（`app/api/persist/db.ts:55`）：

```sql
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
```

这是 MySQL 独有语法。PostgreSQL 需要用触发器实现，SQLite 不支持。

**MySQL REPLACE INTO**（`app/api/persist/dashboards/[id]/route.ts:119`）：

```sql
REPLACE INTO dashboard_components
(id, dashboard_id, type, title, description, layout_x, layout_y, layout_w, layout_h, data, config)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
```

`REPLACE INTO` 是 MySQL 特有语法。PostgreSQL 使用 `INSERT ... ON CONFLICT ... DO UPDATE`，SQLite 使用 `INSERT OR REPLACE`。

**MySQL 反引号转义**（`app/api/persist/connections/route.ts:24`）：

```sql
database_name as `database`
```

反引号是 MySQL 的标识符引用方式。PostgreSQL 和 SQLite 使用双引号 `"database"`。

**JSON 列类型**（`app/api/persist/db.ts:83-84`）：

```sql
data JSON,
config JSON,
```

MySQL 5.7+ 支持原生 JSON。SQLite 没有 JSON 类型（存为 TEXT），PostgreSQL 推荐用 `JSONB`。

### 实际影响

如果想在本地开发时使用 SQLite（零配置、无需安装 MySQL），或生产环境迁移到 PostgreSQL（更好的性能和功能），需要重写 `db.ts` 的全部建表语句和所有路由文件中的查询。使用 Prisma 或 Drizzle 这样的 ORM，只需改一行 `provider` 配置即可切换数据库。

---

## 总结

| # | 问题 | 严重程度 | 关键代码位置 |
|---|------|---------|-------------|
| 1 | 无多租户隔离 | 严重 | `persist/dashboards/route.ts:8`、`persist/conversations/route.ts:8`、`persist/connections/route.ts:21` — 全部 `SELECT` 无 `WHERE user_id` |
| 2 | 连接双重存储 | 中等 | `ConnectionContext.tsx:104` (localStorage) vs `persist/connections/route.ts:57` (MySQL) |
| 3 | 明文密码存储 | 严重 | `persist/connections/route.ts:57`（INSERT 明文）、`ConnectionContext.tsx:55-99`（前端硬编码） |
| 4 | 静默丢失数据 | 中等 | `useSqlBotStore.ts:30-43`、`useAnalysisStore.ts:33-49` — catch 只 console.error |
| 5 | Dashboard 竞态 | 中等 | `persist/dashboards/[id]/route.ts:114`（DELETE ALL）+ `119`（循环 INSERT）无事务 |
| 6 | 连接无复用 | 性能 | `connections/fetch-table-data/route.ts`、`ai-chat/text-to-sql/route.ts` — 每请求 createConnection |
| 7 | 硬绑定 MySQL | 扩展性 | `persist/db.ts:47`（ENUM）、`:55`（ON UPDATE）、`dashboards/[id]/route.ts:119`（REPLACE INTO） |
