# DataFlow 数据库架构技术审查报告（整合版）

**审查日期**: 2026-03-19
**审查范围**: 全部数据库相关代码（schema 定义、连接管理、查询逻辑、持久化层、客户端状态）
**来源**: 两份独立审查的交叉验证整合

---

## Executive Summary

本项目数据库架构存在 **系统性的安全和设计缺陷**。安全层面：凭证明文硬编码在源码和 git 历史中，export 路由存在可直接利用的 SQL 注入，密码明文存储且 API 无认证导致任意用户可获取全量数据（含其他用户的数据库密码）。架构层面：连接池代码形同虚设，全项目零事务管理，持久化层无迁移机制且硬绑定 MySQL，连接信息在 localStorage 和数据库间双重存储且不同步。整体判断：**核心安全漏洞需立即修复，架构层面需针对性重写（约 15-20% 代码量），不需要全面推翻**。

---

## 问题清单

### P0 — 致命（必须立即修复）


#### 2. SQL 注入漏洞 — export-data 路由

**影响范围**: 数据导出功能，可扩展至任意 SQL 执行

**`app/api/connections/export-data/route.ts:162-169`（MySQL）**:
```typescript
let query = 'SELECT * FROM `' + table + '`';
if (filter) {
    query += ' WHERE ' + filter;   // ← filter 直接拼接，零防护
}
if (rowCount) {
    query += ' LIMIT ' + rowCount; // ← rowCount 也未参数化
}
```

**同文件 `:204-210`（PostgreSQL 同样存在）**。攻击示例：`filter = "1=1; DROP TABLE users; --"`。

---

#### 3. 无多租户隔离 — 任意用户可获取全量数据

**影响范围**: 所有持久化数据，包括其他用户的数据库连接凭证

所有持久化表缺少 `user_id` 字段，所有查询无用户过滤。

**`app/api/persist/connections/route.ts:21-27`**:
```typescript
const rows = await query<any[]>(`
    SELECT id, name, type, host, port, user, password,
        database_name as \`database\`, is_default, created_at
    FROM db_connections
    ORDER BY is_default DESC, created_at DESC
`);
// ← 返回所有用户的连接，包括明文密码
```

**`app/api/persist/dashboards/route.ts:8-12`**、**`app/api/persist/conversations/route.ts:8-15`** 同样无 `WHERE user_id` 过滤。

**影响**: Alice 保存了生产数据库连接，Bob 调用 `GET /api/persist/connections` 即可拿到 Alice 的全部凭证。所有用户的对话记录（可能含敏感查询结果）对所有人可见。根因：项目无认证系统，不知道"请求来自谁"。

---

#### 4. 用户连接密码明文存储并原样返回

**影响范围**: 所有保存的数据库连接

**`app/api/persist/db.ts:43-57`**（明文存储）:
```sql
CREATE TABLE IF NOT EXISTS db_connections (
    ...
    password VARCHAR(255) NOT NULL,   -- 明文存储
    ...
)
```

**`app/api/persist/connections/route.ts:57-65`**（明文写入 + 明文返回）:
```typescript
await query(`INSERT INTO db_connections ... VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, name, type, host, port, user || '', password || '', database || '', is_default]);

return NextResponse.json({
    success: true,
    data: { id, name, type, host, port, user, password, database, is_default }
    //                                        ^^^^^^^^ 明文返回
});
```

**影响**: 结合问题 3（无租户隔离），任何用户通过 API 即可拿到所有人的数据库密码。

---

### P1 — 严重（需在下一迭代修复）

#### 5. update-table 通过 DROP + CREATE 实现，导致数据丢失

**影响范围**: 所有"编辑表结构"操作

**`app/api/connections/update-table/route.ts:88-91`**:
```typescript
await connection.query(`DROP TABLE IF EXISTS \`${params.tableName}\``);
await connection.query(`CREATE TABLE \`${params.tableName}\` (${columnDefinitions})`);
```

PostgreSQL 同理（`:109-111`）。两语句未包裹事务，CREATE 失败则表消失且不回滚。代码注释（41-66 行）承认了该问题但仍采用破坏性方案。

---

#### 6. 连接池代码形同虚设 — 每次请求新建连接

**影响范围**: 所有用户数据库查询的性能

**`lib/database/connections.ts:7-8`**（定义了空缓存）:
```typescript
const connectionPools: { [key: string]: any } = {};
```

**`:23-40`**（`getPostgresPool` 从未被调用）。实际每次都新建：

**`:148-158`**（PostgreSQL 每次 new PgPool 用完即销毁）:
```typescript
export async function executePostgresQuery(connection, query, database?) {
    const pool = new PgPool({ ... });  // ← 没用 getPostgresPool()
    // ...
    await pool.end();
}
```

**`:250`**（MySQL 同理）:
```typescript
mysqlConnection = await mysql.createConnection({ ... });  // ← 每次新建
```

**影响**: 一个 Dashboard 页面 6 个图表 = 6 次 TCP 握手 + 6 次认证 + 6 次关闭 = 12 次额外网络往返。高并发下会耗尽 `max_connections`。

---

#### 7. create-table / update-table 列定义未转义

**影响范围**: 建表和改表操作的安全性

表名做了 `/^[a-zA-Z0-9_]+$/` 校验，但 **列名和列类型零校验零转义**。

**`app/api/connections/create-table/route.ts:64-74`**:
```typescript
const columnDefinitions = params.columns.map(col => {
    let def = `${col.name} ${mappedType}`;   // ← col.name 未转义
    ...
}).join(', ');
```

**`update-table/route.ts:68-77`** 同样存在，且连表名校验都没有。攻击示例：`col.name = "id INT); DROP TABLE users; --"`。

---

#### 8. 持久化层无迁移机制

**影响范围**: 生产部署、多人协作、版本迭代

**`app/api/persist/db.ts:32-124`** — 5 张表的 schema 嵌入 `initializeDatabase()` 中：
```typescript
await connection.query(`CREATE TABLE IF NOT EXISTS db_connections (...)`);
await connection.query(`CREATE TABLE IF NOT EXISTS dashboards (...)`);
// ...
```

`IF NOT EXISTS` 意味着表一旦创建，后续列变更永远不会生效。无 schema 演进历史，无回滚能力，多环境可能不一致。

---

#### 9. 持久化表缺少索引

**影响范围**: 查询性能，随数据量增长恶化

5 张表除主键外零索引。受影响的查询：

| 查询 | 文件 | 缺失索引 |
|------|------|----------|
| `ORDER BY updated_at DESC` | `persist/dashboards/route.ts:11` | `dashboards.updated_at` |
| `WHERE dashboard_id = ?` | `persist/dashboards/[id]/route.ts:33` | `dashboard_components.dashboard_id` |
| `ORDER BY timestamp DESC` | `persist/conversations/route.ts:14` | `chat_conversations.timestamp` |
| `WHERE conversation_id = ?` | `persist/conversations/[id]/route.ts` | `chat_messages.conversation_id` |

---

#### 10. 连接信息双重存储，互不同步

**影响范围**: 跨浏览器/跨设备数据一致性

用户连接存在两个独立存储位置，无同步机制。

**客户端 — `contexts/ConnectionContext.tsx:103-131`**:
```typescript
// 读 localStorage
const stored = localStorage.getItem('dataflow_connections');
// 写 localStorage
localStorage.setItem('dataflow_connections', JSON.stringify(userConnections));
```

**服务端 — `app/api/persist/connections/route.ts:57-61`**:
```typescript
await query(`INSERT INTO db_connections (id, ...) VALUES (?, ...)`, [...]);
```

客户端用 `crypto.randomUUID()`（`:138`），服务端用 `uuidv4()`（`:55`），同一连接存两边 ID 也不同。浏览器 A 添加的连接，浏览器 B 看不到。

---

### P2 — 中等（计划修复）

#### 11. Dashboard 更新的竞态条件与 N+1

**影响范围**: Dashboard 保存的数据一致性和性能

**`app/api/persist/dashboards/[id]/route.ts:112-135`**:
```typescript
await query(`DELETE FROM dashboard_components WHERE dashboard_id = ?`, [id]);
for (const comp of components) {
    await query(`REPLACE INTO dashboard_components (...) VALUES (?, ?, ...)`, [...]);
}
```

**问题 1 — 竞态**：无事务。并发保存时序：
```
t1  请求A: DELETE all    →  t2  请求B: DELETE all  →  t3  请求A: INSERT 3个  →  t4  请求B: INSERT 5个
最终：8个组件混在一起，或A的组件被B的DELETE清掉
```

**问题 2 — N+1**：10 个组件 = 1 DELETE + 10 INSERT = 11 次数据库往返。`REPLACE INTO` 在 DELETE 之后毫无意义（注释说 "handle race conditions" 但并不能）。

---

#### 12. 全项目零事务管理

**影响范围**: 所有多步骤数据库操作

整个代码库无任何 `BEGIN`/`COMMIT`/`ROLLBACK`。

| 操作 | 文件 | 风险 |
|------|------|------|
| 编辑表（DROP+CREATE） | `update-table/route.ts:89-91` | DROP 成功 CREATE 失败 = 表消失 |
| Dashboard 保存（DELETE+INSERT 循环） | `dashboards/[id]/route.ts:114-135` | 部分 INSERT 失败 = 组件丢失 |
| 数据导入（批量 INSERT） | `import-data/route.ts` | 部分行失败无法回滚 |

---

#### 13. 零认证和零速率限制

**影响范围**: 全部 ~72 个 API 端点

以 `app/api/connections/delete-table/route.ts` 为例：
```typescript
export async function POST(request: NextRequest) {
    const params = await request.json();
    // 直接 DROP TABLE，无认证、无审计
```

任何能访问服务的客户端可执行 DROP TABLE、TRUNCATE、读取全量数据。

---

#### 14. Fire-and-Forget 无错误恢复

**影响范围**: 所有前端持久化操作

Zustand Store 对 API 调用静默吞掉错误，用户不会收到任何提示。

**`stores/useSqlBotStore.ts:30-43`**:
```typescript
async function createConversationAPI(conversation: Conversation): Promise<void> {
    try {
        await fetch('/api/persist/conversations', { method: 'POST', ... });
    } catch (error) {
        console.error('[SqlBotStore] Failed to create conversation:', error);
        // ← 错误被吞掉，不通知用户，不重试
    }
}
```

`:45-53`（deleteConversationAPI）、`:67-80`（addMessageAPI）同样模式。

**`stores/useAnalysisStore.ts:45-48`**：获取 Dashboard 失败返回空数组，用户以为自己没有 Dashboard。

**影响**: 用户创建 Dashboard 并添加组件，网络断开后所有 API 静默失败，刷新页面后数据全部丢失。

---

#### 15. 时间戳类型不一致

**影响范围**: 数据一致性、查询复杂度

**`app/api/persist/db.ts`** 中同一数据库混用 `TIMESTAMP` 和 `BIGINT`：

| 表 | 字段 | 类型 |
|----|------|------|
| `db_connections` | `created_at` / `updated_at` | `TIMESTAMP` |
| `dashboards` | `created_at` / `updated_at` | `BIGINT` |
| `chat_conversations` | `timestamp` | `BIGINT` |
| `chat_conversations` | `created_at` / `updated_at` | `TIMESTAMP` |

同一张表（chat_conversations）同时使用两种，跨表时间比较需类型转换。

---

#### 16. 持久化层硬绑定 MySQL

**影响范围**: 扩展性，无法切换到 PostgreSQL/SQLite

MySQL 专有语法散布在持久化层中：

| 语法 | 位置 | PostgreSQL/SQLite 替代 |
|------|------|----------------------|
| `ENUM(...)` | `db.ts:47, 111` | 需 `CREATE TYPE` / 不支持 |
| `ON UPDATE CURRENT_TIMESTAMP` | `db.ts:55` | 需触发器 / 不支持 |
| `REPLACE INTO` | `dashboards/[id]/route.ts:119` | `INSERT ... ON CONFLICT` |
| 反引号 `` ` `` 标识符 | `connections/route.ts:24` | 双引号 `"` |
| `JSON` 列类型 | `db.ts:83-84` | `JSONB` / `TEXT` |

---

### P3 — 低优先级

#### 17. MongoDB URI 未编码特殊字符

**`lib/database/connections.ts:336`**:
```typescript
const uri = `mongodb://${connection.user}:${connection.password}@${connection.host}:${connection.port}`;
```
密码含 `@`、`:` 时 URI 解析错误。应使用 `encodeURIComponent`。

#### 18. 错误消息泄露内部信息

所有路由将原始 `error.message` 返回客户端，可能暴露表结构、列名等。

---

## 评估维度总结

| 维度 | 评分 | 关键问题 |
|------|------|----------|
| **安全性** | ❌ 严重不及格 | 凭证硬编码、SQL 注入、明文密码、零认证、零租户隔离 |
| **数据模型** | ⚠️ 及格 | 表结构基本合理，但时间戳混乱、缺索引、双重存储 |
| **查询性能** | ❌ 不及格 | 每次新建连接、N+1 模式、零索引 |
| **连接管理与事务** | ❌ 不及格 | 连接池废弃、零事务、多步操作无原子性 |
| **扩展性与可维护性** | ❌ 不及格 | 无迁移机制、硬绑 MySQL、schema 嵌入代码 |
| **客户端健壮性** | ⚠️ 及格 | Fire-and-Forget 吞错误、双重存储不同步 |

---

## 重写 vs 调整：结论与建议

### 结论：**针对性重写**，不需要全面推翻

**保留的部分**:
- 5 张表的实体关系设计基本合理，无需重新建模
- 大多数 CRUD 路由的参数化查询写得正确（fetch-table-data、create-row、update-row、delete-row）
- 连接清理（finally 中的 end/close/disconnect）做得完整
- 前后端类型定义（Connection、Dashboard、Message）可复用

**必须重写的部分**:

| 组件 | 当前状态 | 目标状态 |
|------|----------|----------|
| `persist/db.ts` | 硬编码凭证 + 嵌入式 schema | 环境变量 + 迁移工具（Drizzle/Knex） |
| `persist/connections/route.ts` | 明文密码 + 无租户隔离 | AES 加密 + user_id 过滤 |
| `lib/database/connections.ts` | 废弃连接池 + 每次新建 | 基于 connection ID 的真正连接池 |
| `export-data/route.ts` | SQL 注入 | 参数化 filter 或白名单 |
| `update-table/route.ts` | DROP+CREATE | ALTER TABLE diff + 事务 |
| `create-table/route.ts` | 列名未转义 | 标识符校验 + 转义 |
| `dashboards/[id]/route.ts` | 无事务 DELETE+INSERT 循环 | 事务 + 批量 INSERT |
| `ConnectionContext.tsx` | 硬编码凭证 + localStorage 双写 | 环境变量 + 服务端单一数据源 |
| 全局中间件 | 不存在 | 认证 + 速率限制 + 审计 |
| Zustand stores | Fire-and-Forget | 错误通知 + 重试/回滚 |

**建议修复顺序**:

| 阶段 | 内容 |
|------|------|
| **第一步（立即）** | 移除所有硬编码凭证，修复 export-data SQL 注入，加密存储密码 |
| **第二步（本周）** | 引入认证系统 + user_id 隔离，修复 create-table/update-table 注入 |
| **第三步（下一迭代）** | 引入迁移工具 + 补索引，统一连接存储为服务端单一数据源，重构连接池 |
| **第四步（长期）** | 为多步操作加事务，前端错误恢复，解除 MySQL 硬绑定，速率限制 + 审计日志 |

**估计工作量**: 重写部分约占总代码量 15-20%，集中在持久化层和连接管理层。
