# AI Text-to-SQL 方案调研报告

## 概述

Text-to-SQL 是一种通过自然语言处理（NLP）和大语言模型（LLM）将用户的自然语言问题转换为 SQL 查询的技术。这项技术可以让非技术用户也能轻松查询数据库，极大地降低了数据分析的门槛。

---

## 一、主流 LLM 模型对比

| 模型 | 准确性 | 速度 | 成本 | 适用场景 |
|------|--------|------|------|----------|
| **GPT-4o** | ⭐⭐⭐⭐⭐ (最高) | 快 | 高 | 复杂查询、企业级应用 |
| **GPT-4 Turbo** | ⭐⭐⭐⭐ | 快 | 较高 | 通用场景 |
| **GPT-3.5 Turbo** | ⭐⭐⭐ | 非常快 | 低 | 简单查询、成本敏感场景 |
| **Claude 3.5 Sonnet** | ⭐⭐⭐⭐ | 快 | 中等 | 复杂推理、长文本 |
| **Llama 3 70B** | ⭐⭐⭐ | 中等 | 免费/低 | 自托管、隐私要求高 |
| **Mistral** | ⭐⭐⭐ | 快 | 低 | 开源替代方案 |

**推荐**：
- 追求**最高准确性**：GPT-4o 或 GPT-4 Turbo
- 追求**性价比**：GPT-3.5 Turbo 或 Claude 3.5 Sonnet
- 追求**数据隐私**：Llama 3 或 Mistral（可本地部署）

---

## 二、开源方案

### 1. LangChain SQL Agent
**GitHub**: https://github.com/langchain-ai/langchain

LangChain 是最流行的 LLM 应用开发框架，提供了强大的 SQL Agent 功能。

**核心特点**：
- 🔗 支持多种 LLM（OpenAI、Anthropic、本地模型等）
- 📊 动态表选择和智能 Schema 识别
- 💬 支持对话上下文记忆
- 🎯 Few-shot 学习提高准确性
- 🔧 高度可定制

**集成方式**：
```typescript
import { ChatOpenAI } from "@langchain/openai";
import { createSqlQueryChain } from "langchain/chains/sql_db";
import { SqlDatabase } from "langchain/sql_db";

const llm = new ChatOpenAI({ modelName: "gpt-4" });
const db = await SqlDatabase.fromDataSourceParams({ appDataSource });
const chain = await createSqlQueryChain({ llm, db, dialect: "mysql" });

const result = await chain.invoke({ question: "查询所有用户" });
```

---

### 2. Vanna.AI
**GitHub**: https://github.com/vanna-ai/vanna

专注于 Text-to-SQL 的开源框架，支持可视化输出。

**核心特点**：
- 🎨 自动生成可视化图表
- 🧠 RAG 增强的查询生成
- 🔌 支持 Snowflake、BigQuery、PostgreSQL、MySQL 等
- 🔒 可本地部署，保护数据隐私

**集成方式**：
```python
import vanna
from vanna.remote import VannaDefault

vn = VannaDefault(model='my-model', api_key='vanna-api-key')
vn.connect_to_postgres(host='localhost', dbname='mydb', user='user', password='pwd')

# 训练模型
vn.train(ddl="CREATE TABLE users (id INT, name VARCHAR(100))")
vn.train(question="查询所有用户", sql="SELECT * FROM users")

# 使用
sql = vn.generate_sql("显示最近10个订单")
```

---

### 3. SQL Chat
**GitHub**: https://github.com/sqlchat/sqlchat

基于聊天界面的 SQL 客户端，支持自然语言交互。

**核心特点**：
- 💬 聊天式界面
- 🌐 支持 MySQL、PostgreSQL、SQL Server
- 🔐 本地模式，数据不外传
- 🚀 可快速部署

---

### 4. Dataherald
**GitHub**: https://github.com/Dataherald/dataherald

企业级 Text-to-SQL 引擎。

**核心特点**：
- 🏢 专为企业设计
- 🔧 支持模型微调
- 🔗 LangChain Agent 集成
- 📈 适合大规模部署

---

## 三、商业方案

| 产品 | 价格 | 准确率 | 特点 |
|------|------|--------|------|
| **SQLAI.ai** | 免费/付费 | 高 | 多数据库支持、SQL 优化 |
| **AI2SQL** | $84/年起 | 高 | 自动 Schema 检测 |
| **Text2SQL.ai** | 按用量 | 中高 | 多语言支持 |
| **Querio** | $14,000/年 | 95%+ | 企业级、SOC2 认证 |
| **AskYourDatabase** | 按用量 | 高 | 自动理解 Schema |
| **DataGrip AI** | JetBrains 订阅 | 高 | IDE 集成 |

---

## 四、架构设计建议

### 推荐架构

```
┌─────────────────────────────────────────────────────────────┐
│                      用户界面 (AI Chat)                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Next.js API Route                         │
│                  /api/ai/text-to-sql                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     AI 服务层                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   OpenAI    │  │  Anthropic  │  │ 本地 Llama  │          │
│  │   GPT-4     │  │   Claude    │  │   Ollama    │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Schema 缓存层                              │
│         (Redis/内存缓存表结构、列信息、示例查询)               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      数据库执行层                             │
│            MySQL / PostgreSQL / 其他数据库                    │
└─────────────────────────────────────────────────────────────┘
```

### 关键实现步骤

#### 1. 配置管理
```typescript
// lib/ai-config.ts
export interface AIConfig {
  provider: 'openai' | 'anthropic' | 'ollama';
  model: string;
  apiKey?: string;
  baseUrl?: string;
  temperature?: number;
  maxTokens?: number;
}

export const defaultConfigs: Record<string, AIConfig> = {
  openai: {
    provider: 'openai',
    model: 'gpt-4-turbo',
    temperature: 0.1,
    maxTokens: 2048,
  },
  anthropic: {
    provider: 'anthropic',
    model: 'claude-3-5-sonnet-20241022',
    temperature: 0.1,
  },
  ollama: {
    provider: 'ollama',
    model: 'llama3',
    baseUrl: 'http://localhost:11434',
  },
};
```

#### 2. Prompt 模板
```typescript
// lib/prompts/sql-generation.ts
export const SQL_GENERATION_PROMPT = `
你是一个 SQL 专家助手。根据用户的自然语言问题生成正确的 SQL 查询。

数据库类型: {dbType}
数据库名称: {dbName}

可用的表结构:
{schema}

规则:
1. 只生成 SELECT 查询，不要生成 INSERT、UPDATE、DELETE 等修改数据的语句
2. 使用标准 SQL 语法，兼容 {dbType}
3. 如果问题不明确，生成最合理的查询
4. 只返回 SQL 语句，不要返回其他内容
5. SQL 语句不要包含 \`\`\` 代码块标记

用户问题: {question}

SQL 查询:
`;
```

#### 3. API 端点
```typescript
// app/api/ai/text-to-sql/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
  const { question, schema, dbType, config } = await req.json();
  
  const openai = new OpenAI({ apiKey: config.apiKey });
  
  const prompt = SQL_GENERATION_PROMPT
    .replace('{dbType}', dbType)
    .replace('{schema}', schema)
    .replace('{question}', question);
  
  const response = await openai.chat.completions.create({
    model: config.model,
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.1,
  });
  
  const sql = response.choices[0].message.content?.trim();
  
  return NextResponse.json({ success: true, sql });
}
```

---

## 五、建议实现方案

### 第一阶段：基础集成
1. **集成 OpenAI API** - 使用 GPT-3.5/4 作为默认模型
2. **Schema 自动提取** - 从数据库获取表结构信息
3. **基础 Prompt 工程** - 设计有效的 SQL 生成提示词
4. **配置界面** - 用户可配置 API Key 和模型选择

### 第二阶段：增强功能
1. **多模型支持** - 添加 Anthropic、Ollama 支持
2. **Few-shot 学习** - 存储成功的查询作为示例
3. **错误处理** - SQL 执行失败时自动修正
4. **查询解释** - 用自然语言解释生成的 SQL

### 第三阶段：高级功能
1. **对话上下文** - 支持多轮对话
2. **查询优化** - 自动优化生成的 SQL
3. **可视化建议** - 根据查询结果推荐图表类型
4. **历史学习** - 从用户历史查询中学习

---

## 六、技术选型建议

| 场景 | 推荐方案 | 理由 |
|------|----------|------|
| **快速上手** | OpenAI API + 自定义 Prompt | 最简单、效果好 |
| **成本敏感** | GPT-3.5 + 缓存 | 性价比高 |
| **隐私要求高** | Ollama + Llama 3 | 本地部署 |
| **企业级** | LangChain + GPT-4 | 功能完整、可扩展 |
| **需要可视化** | Vanna.AI | 内置图表生成 |

---

## 七、参考资源

- [LangChain SQL Documentation](https://python.langchain.com/docs/tutorials/sql_qa/)
- [Vanna.AI Documentation](https://vanna.ai/docs/)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Anthropic Claude API](https://docs.anthropic.com/claude/reference)
- [Ollama](https://ollama.ai/)
