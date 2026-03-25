# SQLBot 智能问数前端开发提示词

请帮我开发一个类似SQLBot的智能数据问答平台前端界面，放在“AI Assistant”的侧边栏中，需要实现以下核心功能：

## 1. 界面布局要求
- **左侧边栏（30%宽度）**：历史对话管理
  - 搜索框：支持搜索历史对话
  - 对话列表：显示对话标题、时间、包含的图表数量
  - 新建对话按钮
  - 每个对话项支持：重命名、删除、点击进入

- **右侧主区域（70%宽度）**：对话和图表展示
  - 顶部：当前对话标题和设置按钮
  - **智能推荐区域**：横向滚动的"猜你想问"标签
  - **聊天界面**：
    - 用户消息气泡（右侧）
    - AI回复气泡（左侧，包含图表和说明）
    - 底部输入框（支持Enter发送，Shift+Enter换行）

## 2. 核心组件开发

### 2.1 智能输入组件
```typescript
// 需要实现的交互特性
- 支持自然语言输入
- 提供输入建议和自动补全
- 历史问题快速选择
- 支持多行输入（Shift+Enter）
- 发送按钮和Loading状态
```

### 2.2 图表展示组件
```typescript
// 需要支持的图表类型'bar' | 'line' | 'pie' | 'table' | 'area' | 'scatter'

// 功能要求：
- 图表类型切换器（柱状图、折线图、表格等，支持切换图表类型）
- 全屏查看功能
- 图表导出为PNG/SVG
- SQL查询语句展示（可复制）
- 数据明细查看和导出
- 添加到仪表板按钮
```



## 4. 关键功能实现点

### 4.1 图表自适应切换
```
// 根据数据类型和用户意图自动选择图表

```

### 4.2 流式响应处理
```typescript
// 支持AI回复的流式显示
  // 实现打字机效果和实时图表渲染

```

### 4.3 响应式设计
- 支持桌面端（1200px+）
- 适配平板端（768px-1199px）
- 移动端友好（<768px）

## 5. UI/UX设计要点
- **配色方案**：使用现代化的渐变色和阴影效果
- **加载状态**：图表和数据加载时的骨架屏
- **错误处理**：友好的错误提示和重试机制
- **无障碍访问**：支持键盘导航和屏幕阅读器

## 6. 性能优化要求
- 图表懒加载和虚拟化
- 对话历史的虚拟滚动
- 图片和组件的代码分割
- API请求的缓存和防抖

## 7. 安全考虑
- XSS防护：对用户输入进行严格过滤
- SQL注入防护：所有查询参数化处理
- 敏感信息脱敏：在界面上隐藏敏感数据

请按照以上要求，用next.js实现前端代码，包括所有组件、样式和交互逻辑，后端部分不实现，只保留对应接口供后端调用。


1.
所有图表支持放大查看：查看高清图表；
用next.js实现，只实现前端界面，后端部分不实现，只保留对应接口供后端调用

2.
点击图表右上方的数据导出，并支持导出为 Excel 文件，便于离线分析或共享。
用next.js实现，只实现前端界面，后端部分不实现，只保留对应接口供后端调用

3.
点击图表中的“SQL”可查看、复制 SQL，
用next.js实现，只实现前端界面，后端部分不实现，只保留对应接口供后端调用

4.
点击图表下方的【数据分析】按钮，系统将基于当前图表数据，调用大模型自动进行趋势分析与业务解读。系统向大模型发送分析请求，模型返回详细的分析过程与结论，包括关键趋势描述、变化原因推测、可能的业务含义等。
用next.js实现，只实现前端界面，后端部分不实现，只保留对应接口供后端调用

5.
在“AI Assistant”的“新建对话”的按钮，会出现如图的弹窗（文字一样，UI风格要优化成跟现在风格一致），用next.js实现，只实现前端界面，后端部分不实现，只保留对应接口供后端调用

6.
在“AI Assistant”的对话界面中，“猜你想问”要常置于顶部，用next.js实现，只实现前端界面，后端部分不实现，只保留对应接口供后端调用


7.
在“AI Assistant”的对话界面中，对话输入框中要显示出当前对话的数据源，如图所示，用next.js实现，只实现前端界面，后端部分不实现，只保留对应接口供后端调用

8.
左侧活动栏（Activity Bar）的第三个图标（机器人图标）中的对话界面的内容大小要跟界面比例保持一致，现在的对话界面内容比例太小了，用next.js实现

9.
侧边栏的“数据分析”中，仪表盘详情界面中每个仪表的右上角有一个“....”（竖着）的操作，鼠标悬浮以后，出现“删除”、“编辑”、“放大”的按钮。点击删除后，需要用户确认后再删除仪表；点击编辑后，出现一个弹窗，用户可以编辑仪表的名字和描述；点击放大后，用户支持放大查看图表，用next.js实现，后端部分不实现，只保留对应接口供后端调用



后端逻辑todo
1.
在“AI Chat”侧边栏中，点击新建对话按钮后，打开的弹窗中显示的是“数据库连接”中的信息，用next.js实现,前端代码已经实现，只需要实现后端代码即可，并与对应的前端代码整合起来

2.
在“AI Chat”侧边栏的中，新建AI Chat对话后，就要主动获取当前选择的数据库连接的结构信息，并做详细分析，得出一些结论（例如，统计当前排名前10的总分），并放在前端的“猜你想问”中呈现给用户，让用户点击卡片就可以直接获取数据库连接中的一些统计信息，用next.js实现,前端代码已经实现，只需要实现后端代码即可，并与对应的前端代码整合起来

3.
在“AI Chat”侧边栏的中，新建AI Chat对话后，就要主动获取当前选择的数据库连接的结构信息，并做详细分析,目前是从哪些方面去做的分析从而得出“猜你想问”

4.
在“AI Chat”的AI Chat对话中，“猜你想问”的卡片UI被改了，改回去，用next.js实现

5.
在“AI Chat”侧边栏中，点击新建对话按钮后，加载出的数据库连接信息中的database和table数量不对

6.
在“AI Chat”的对话中，用户下拉重新选择database，当切换database以后，“猜你想问”也要切换成当前database下的，用next.js实现后端代码，并与前端代码整合起来

7.
现在想在AI Chat的聊天框中引入AI的功能（AI大模型可配置），调研市场上常见的AI SQL方案并进行总结作参考

8.



# SQLBot 智能问数后端开发提示词

请帮我开发一个类似SQLBot的智能数据问答平台后端服务，需要实现以下核心功能：

## 1. 系统架构要求
- **微服务架构**：用户管理、对话管理、SQL生成、数据查询独立服务
- **数据库**：PostgreSQL（业务数据）+ Redis（缓存）
- **消息队列**：RabbitMQ 或 Kafka
- **API网关**：统一入口和鉴权
- **监控**：Prometheus + Grafana

## 2. 核心服务模块

### 2.1 自然语言处理服务（NLP Service）
```python
# 主要功能：理解用户自然语言查询
class NLPService:
    def __init__(self):
        self.llm_model = "gpt-4"  # 或其他大模型
        self.intent_classifier = IntentClassifier()
        self.entity_extractor = EntityExtractor()

    async def parse_query(self, user_input: str, context: dict) -> QueryIntent:
        """
        解析用户查询，提取意图和实体
        返回：{
            "intent": "query/analysis/comparison",
            "entities": {"table": "users", "fields": ["name", "age"], "conditions": [...]},
            "chart_type": "bar/line/pie/table",
            "time_range": {...}
        }
        """
        pass

    async def recommend_questions(self, user_id: str) -> List[str]:
        """基于用户历史行为推荐可能的问题"""
        pass
```

### 2.2 SQL生成服务（SQL Generation Service）
```python
# 核心功能：根据自然语言生成SQL
class SQLGenerationService:
    def __init__(self):
        self.schema_cache = SchemaCache()
        self.sql_validator = SQLValidator()
        self.safety_checker = SafetyChecker()

    async def generate_sql(self, query_intent: QueryIntent) -> GeneratedSQL:
        """
        生成安全的SQL查询
        返回：{
            "sql": "SELECT ... FROM ... WHERE ...",
            "parameters": {...},
            "explanation": "此查询将...",
            "estimated_rows": 1000
        }
        """
        pass

    async def validate_sql(self, sql: str) -> ValidationResult:
        """验证SQL的安全性和正确性"""
        # 检查SQL注入风险
        # 检查查询复杂度
        # 检查权限
        pass
```

### 2.3 数据查询服务（Query Service）
```python
# 执行SQL查询并返回结果
class QueryService:
    def __init__(self):
        self.connection_pool = ConnectionPool()
        self.query_cache = QueryCache()
        self.result_limiter = ResultLimiter(max_rows=10000)

    async def execute_query(self, sql: str, parameters: dict) -> QueryResult:
        """
        安全执行SQL查询
        返回：{
            "data": [...],
            "columns": [...],
            "row_count": 500,
            "execution_time": 0.5,
            "chart_recommendations": [...]
        }
        """
        pass

    async def export_data(self, query_id: str, format: str) -> bytes:
        """导出查询结果为CSV/Excel"""
        pass
```

### 2.4 对话管理服务（Conversation Service）
```python
# 管理用户对话历史和上下文
class ConversationService:
    def __init__(self):
        self.db = Database()
        self.context_manager = ContextManager()

    async def create_conversation(self, user_id: str) -> Conversation:
        """创建新的对话"""
        pass

    async def add_message(self, conversation_id: str, message: Message) -> None:
        """添加消息到对话"""
        pass

    async def get_context(self, conversation_id: str) -> ConversationContext:
        """获取对话上下文，用于多轮对话理解"""
        pass
```

## 3. 数据库设计

### 3.1 核心表结构
```sql
-- 用户表
CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 对话表
CREATE TABLE conversations (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    title VARCHAR(200),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 消息表
CREATE TABLE messages (
    id UUID PRIMARY KEY,
    conversation_id UUID REFERENCES conversations(id),
    role VARCHAR(20) NOT NULL, -- 'user' or 'assistant'
    content TEXT NOT NULL,
    metadata JSONB, -- 存储图表信息、SQL等
    created_at TIMESTAMP DEFAULT NOW()
);

-- 数据源表
CREATE TABLE data_sources (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'mysql', 'postgresql', 'clickhouse'
    connection_config JSONB NOT NULL, -- 加密存储
    schema_cache JSONB, -- 缓存的表结构
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 查询历史表
CREATE TABLE query_history (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    conversation_id UUID REFERENCES conversations(id),
    natural_language TEXT NOT NULL,
    generated_sql TEXT NOT NULL,
    execution_time REAL,
    row_count INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 4. API接口设计

### 4.1 RESTful API
```python
# FastAPI 实现
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel

app = FastAPI()

# 对话相关接口
@app.post("/api/v1/conversations")
async def create_conversation(user_id: str) -> Conversation:
    pass

@app.get("/api/v1/conversations/{conversation_id}")
async def get_conversation(conversation_id: str) -> Conversation:
    pass

@app.post("/api/v1/conversations/{conversation_id}/messages")
async def send_message(
    conversation_id: str,
    message: MessageCreate
) -> MessageResponse:
    """发送消息并获取AI回复"""
    pass

# 智能推荐接口
@app.get("/api/v1/recommendations/questions/{user_id}")
async def get_recommended_questions(user_id: str) -> List[str]:
    pass

# 数据导出接口
@app.post("/api/v1/exports/{query_id}")
async def export_query_result(
    query_id: str,
    format: str = "csv"
) -> FileResponse:
    pass
```

### 4.2 WebSocket API（实时对话）
```python
@app.websocket("/ws/conversations/{conversation_id}")
async def websocket_endpoint(websocket: WebSocket, conversation_id: str):
    await websocket.accept()
    while True:
        # 接收用户消息
        data = await websocket.receive_json()

        # 流式返回AI响应
        async for chunk in process_message_stream(data):
            await websocket.send_json({
                "type": "chunk",
                "content": chunk
            })
```

## 5. 核心算法实现

### 5.1 自然语言转SQL（NL2SQL）
```python
class NL2SQLConverter:
    def __init__(self):
        self.schema_understanding = SchemaUnderstanding()
        self.template_matcher = TemplateMatcher()
        self.llm_service = LLMService()

    async def convert(self, question: str, schema: DatabaseSchema) -> SQLQuery:
        # 1. 实体识别和链接
        entities = await self.extract_entities(question, schema)

        # 2. 意图识别
        intent = await self.classify_intent(question)

        # 3. 模板匹配或LLM生成
        if template := self.template_matcher.match(intent, entities):
            sql = template.fill(entities)
        else:
            sql = await self.llm_service.generate_sql(question, schema)

        # 4. SQL验证和优化
        return self.validate_and_optimize(sql, schema)
```

### 5.2 图表推荐算法
```python
class ChartRecommendationEngine:
    def __init__(self):
        self.rules = {
            "time_series": ["line", "area"],
            "comparison": ["bar", "column"],
            "proportion": ["pie", "donut"],
            "correlation": ["scatter"],
            "distribution": ["histogram"],
            "many_values": ["table"]
        }

    def recommend(self, data: QueryResult, user_intent: str) -> List[ChartType]:
        # 基于数据特征和用户意图推荐合适的图表
        data_characteristics = self.analyze_data(data)
        recommendations = []

        for rule, chart_types in self.rules.items():
            if self.matches_rule(data_characteristics, rule, user_intent):
                recommendations.extend(chart_types)

        return self.rank_recommendations(recommendations, data)
```

## 6. 安全实现

### 6.1 SQL注入防护
```python
class SQLSafetyChecker:
    def __init__(self):
        self.dangerous_keywords = [
            'DROP', 'DELETE', 'UPDATE', 'INSERT', 'ALTER',
            'CREATE', 'TRUNCATE', 'EXEC', 'EXECUTE'
        ]

    def check_sql_safety(self, sql: str) -> SafetyResult:
        # 1. 关键词检查
        if any(keyword in sql.upper() for keyword in self.dangerous_keywords):
            return SafetyResult(safe=False, reason="Contains dangerous keywords")

        # 2. SQL注入模式检查
        if self.detect_injection_patterns(sql):
            return SafetyResult(safe=False, reason="Possible SQL injection")

        # 3. 查询复杂度检查
        if self.calculate_complexity(sql) > MAX_COMPLEXITY:
            return SafetyResult(safe=False, reason="Query too complex")

        return SafetyResult(safe=True)
```

### 6.2 权限控制
```python
class PermissionManager:
    async def check_table_access(self, user_id: str, table_name: str, action: str) -> bool:
        """检查用户对表的访问权限"""
        user_roles = await self.get_user_roles(user_id)
        table_permissions = await self.get_table_permissions(table_name)

        return any(role in table_permissions[action] for role in user_roles)

    async def filter_sensitive_data(self, data: List[dict], user_id: str) -> List[dict]:
        """根据用户权限过滤敏感数据"""
        sensitive_fields = await self.get_sensitive_fields(user_id)

        for row in data:
            for field in sensitive_fields:
                if field in row:
                    row[field] = self.mask_value(row[field])

        return data
```

## 7. 性能优化

### 7.1 查询缓存
```python
class QueryCache:
    def __init__(self, redis_client):
        self.redis = redis_client
        self.cache_ttl = 3600  # 1小时

    async def get_cached_result(self, sql_hash: str) -> Optional[QueryResult]:
        cached = await self.redis.get(f"query:{sql_hash}")
        if cached:
            return QueryResult.parse_raw(cached)
        return None

    async def cache_result(self, sql_hash: str, result: QueryResult):
        await self.redis.setex(
            f"query:{sql_hash}",
            self.cache_ttl,
            result.json()
        )
```

### 7.2 连接池管理
```python
class DatabaseConnectionPool:
    def __init__(self, config: DatabaseConfig):
        self.pool = sqlalchemy.create_engine(
            config.url,
            pool_size=config.pool_size,
            max_overflow=config.max_overflow,
            pool_pre_ping=True,
            pool_recycle=3600
        )

    async def execute_query(self, sql: str, params: dict = None):
        with self.pool.connect() as conn:
            result = conn.execute(text(sql), params or {})
            return result.fetchall()
```

## 8. 监控和日志

### 8.1 性能监控
```python
# 使用Prometheus监控
from prometheus_client import Counter, Histogram, Gauge

query_counter = Counter('sqlbot_queries_total', 'Total queries processed')
query_duration = Histogram('sqlbot_query_duration_seconds', 'Query processing time')
active_users = Gauge('sqlbot_active_users', 'Number of active users')

@query_duration.time()
async def process_query(query: str):
    query_counter.inc()
    # 处理查询逻辑
    pass
```

### 8.2 审计日志
```python
class AuditLogger:
    async def log_query(self, user_id: str, query: str, sql: str, result: dict):
        await self.db.execute(
            """
            INSERT INTO audit_log
            (user_id, natural_query, generated_sql, result_summary, timestamp)
            VALUES (?, ?, ?, ?, NOW())
            """,
            (user_id, query, sql, json.dumps(result))
        )
```

请按照以上架构和实现要求，开发完整的后端服务，确保系统的安全性、可扩展性和高性能。


# SQLBot 智能问数系统完整开发指南

## 项目概述
开发一个类似SQLBot的智能数据问答平台，支持自然语言查询、自动图表生成、多轮对话和历史管理等功能。

## 技术栈选型

### 前端技术栈
- **框架**: Next.js 14 + React 18 + TypeScript
- **UI组件库**: Ant Design 5.x
- **图表库**: Apache ECharts
- **状态管理**: Zustand
- **样式**: Tailwind CSS + Styled-components
- **HTTP客户端**: SWR (数据获取) + Axios

### 后端技术栈
- **主框架**: Python FastAPI
- **数据库**: PostgreSQL (主数据库) + Redis (缓存)
- **ORM**: SQLAlchemy + Alembic
- **消息队列**: RabbitMQ
- **大模型集成**: OpenAI API / 自部署模型
- **认证**: JWT + OAuth2
- **监控**: Prometheus + Grafana

## 项目结构

```
sqlbot/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat/          # 聊天界面组件
│   │   │   ├── Charts/        # 图表组件
│   │   │   ├── Sidebar/       # 侧边栏
│   │   │   └── Common/        # 通用组件
│   │   ├── pages/
│   │   ├── hooks/             # 自定义hooks
│   │   ├── stores/            # Zustand stores
│   │   ├── services/          # API服务
│   │   ├── utils/             # 工具函数
│   │   └── types/             # TypeScript类型定义
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── endpoints/
│   │   │   │   └── dependencies.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   ├── security.py
│   │   │   └── database.py
│   │   ├── services/
│   │   │   ├── nlp_service.py
│   │   │   ├── sql_service.py
│   │   │   ├── query_service.py
│   │   │   └── conversation_service.py
│   │   ├── models/
│   │   ├── schemas/
│   │   └── utils/
│   ├── alembic/
│   └── requirements.txt
│
├── docker-compose.yml
└── README.md
```

## 核心功能实现指南

### 1. 自然语言处理流程

```mermaid
graph TD
    A[用户输入自然语言] --> B[意图识别]
    B --> C[实体抽取]
    C --> D[Schema理解]
    D --> E{是否匹配模板}
    E -->|是| F[模板填充生成SQL]
    E -->|否| G[LLM生成SQL]
    F --> H[SQL验证和优化]
    G --> H
    H --> I[执行查询]
    I --> J[结果分析]
    J --> K[图表推荐]
    K --> L[返回结果]
```

### 2. 关键代码模板

#### 前端 - 主界面组件
```typescript
// src/pages/index.tsx
import { useState, useCallback } from 'react'
import { Layout, Input, Button, message } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { useConversation } from '@/hooks/useConversation'
import { ChatMessage } from '@/components/Chat/ChatMessage'
import { ChatSidebar } from '@/components/Sidebar/ChatSidebar'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const {
    conversations,
    currentConversation,
    sendMessage,
    createConversation,
    recommendQuestions
  } = useConversation()

  const handleSend = useCallback(async () => {
    if (!inputValue.trim()) return

    try {
      await sendMessage(inputValue)
      setInputValue('')
    } catch (error) {
      message.error('发送消息失败')
    }
  }, [inputValue, sendMessage])

  return (
    <Layout className="h-screen">
      <ChatSidebar
        conversations={conversations}
        onCreateConversation={createConversation}
      />
      <Layout className="flex flex-col">
        <div className="flex-1 overflow-auto p-4">
          {/* 推荐问题 */}
          {recommendQuestions.length > 0 && (
            <div className="mb-4">
              <div className="text-gray-500 mb-2">猜你想问：</div>
              <div className="flex gap-2 flex-wrap">
                {recommendQuestions.map((q, i) => (
                  <Button
                    key={i}
                    size="small"
                    onClick={() => setInputValue(q)}
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* 聊天消息 */}
          {currentConversation?.messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </div>

        {/* 输入框 */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input.TextArea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="输入您的问题..."
              autoSize={{ minRows: 1, maxRows: 4 }}
              onPressEnter={(e) => {
                if (!e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSend}
              loading={false}
            >
              发送
            </Button>
          </div>
        </div>
      </Layout>
    </Layout>
  )
}
```

#### 后端 - NL2SQL核心服务
```python
# app/services/nlp_service.py
from typing import Dict, List, Optional
import openai
from app.core.config import settings
from app.models.database import DatabaseSchema

class NLPService:
    def __init__(self):
        self.client = openai.AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
        self.intent_patterns = self._load_intent_patterns()

    async def parse_natural_query(
        self,
        query: str,
        schema: DatabaseSchema,
        context: Optional[Dict] = None
    ) -> Dict:
        """解析自然语言查询"""

        # 1. 实体识别
        entities = await self._extract_entities(query, schema)

        # 2. 意图分类
        intent = await self._classify_intent(query, context)

        # 3. 时间范围识别
        time_range = await self._extract_time_range(query)

        # 4. 聚合方式识别
        aggregation = await self._identify_aggregation(query)

        # 5. 图表类型推荐
        chart_type = await self._recommend_chart_type(
            intent, entities, schema
        )

        return {
            "intent": intent,
            "entities": entities,
            "time_range": time_range,
            "aggregation": aggregation,
            "chart_type": chart_type
        }

    async def generate_sql(
        self,
        parsed_query: Dict,
        schema: DatabaseSchema
    ) -> str:
        """生成SQL查询语句"""

        prompt = self._build_sql_generation_prompt(
            parsed_query, schema
        )

        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "你是一个SQL专家，请根据自然语言描述生成准确的SQL查询语句。"
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.1,
            max_tokens=1000
        )

        return response.choices[0].message.content.strip()

    def _build_sql_generation_prompt(
        self,
        parsed_query: Dict,
        schema: DatabaseSchema
    ) -> str:
        """构建SQL生成提示词"""

        return f"""
        请根据以下信息生成SQL查询语句：

        用户意图：{parsed_query['intent']}
        识别的实体：{parsed_query['entities']}
        时间范围：{parsed_query['time_range']}
        聚合方式：{parsed_query['aggregation']}

        数据库Schema：
        {schema.to_prompt_format()}

        请生成一个安全的SQL查询语句，只使用SELECT操作。
        """

    async def _extract_entities(
        self,
        query: str,
        schema: DatabaseSchema
    ) -> List[Dict]:
        """提取查询中的实体（表名、字段名等）"""
        # 实现实体抽取逻辑
        pass

    async def _classify_intent(
        self,
        query: str,
        context: Optional[Dict]
    ) -> str:
        """分类用户查询意图"""
        intents = ['query', 'analysis', 'comparison', 'trend', 'ranking']

        # 使用模式匹配或ML模型分类
        for pattern, intent in self.intent_patterns.items():
            if pattern in query.lower():
                return intent

        # 默认返回query
        return 'query'
```

### 3. 部署配置

#### Docker Compose配置
```yaml
# docker-compose.yml
version: '3.8'

services:
  # 前端服务
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:8000
    depends_on:
      - backend

  # 后端服务
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/sqlbot
      - REDIS_URL=redis://redis:6379
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on:
      - postgres
      - redis

  # PostgreSQL数据库
  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=sqlbot
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  # Redis缓存
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # RabbitMQ消息队列
  rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "5672:5672"
      - "15672:15672"
    environment:
      - RABBITMQ_DEFAULT_USER=admin
      - RABBITMQ_DEFAULT_PASS=admin

volumes:
  postgres_data:
```

### 4. 开发步骤建议

#### 阶段1：基础框架搭建（1-2周）
1. 项目初始化和环境配置
2. 数据库设计和迁移
3. 基础API框架搭建
4. 前端基础布局和路由

#### 阶段2：核心功能开发（3-4周）
1. 用户认证和权限系统
2. NL2SQL核心功能实现
3. 基础图表渲染功能
4. WebSocket实时通信

#### 阶段3：高级功能开发（2-3周）
1. 多轮对话上下文管理
2. 智能推荐系统
3. 图表导出和仪表板功能
4. 性能优化和缓存

#### 阶段4：完善和上线（1-2周）
1. 单元测试和集成测试
2. 性能测试和优化
3. 安全加固和审计
4. 部署和监控配置

### 5. 关键技术难点和解决方案

#### 5.1 SQL安全性
- 使用参数化查询防止SQL注入
- 实现SQL白名单，限制可查询的表和字段
- 查询执行时间限制和结果集大小限制
- 敏感数据自动脱敏

#### 5.2 性能优化
- Redis缓存常用查询结果
- 数据库连接池管理
- 查询结果的分页和虚拟滚动
- 大数据集的流式处理

#### 5.3 用户体验优化
- 打字机效果的流式响应
- 骨架屏加载状态
- 错误友好的提示和重试机制
- 离线状态下的部分功能支持

### 6. 测试策略

#### 6.1 单元测试
```python
# tests/test_nl2sql.py
import pytest
from app.services.nlp_service import NLPService

@pytest.mark.asyncio
async def test_simple_query_parsing():
    nlp_service = NLPService()
    result = await nlp_service.parse_natural_query(
        "显示所有用户数量",
        test_schema
    )
    assert result['intent'] == 'query'
    assert 'users' in [e['table'] for e in result['entities']]
```

#### 6.2 集成测试
```typescript
// frontend/tests/components/Chat.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import ChatComponent from '@/components/Chat/ChatComponent'

test('should send message and display response', async () => {
  render(<ChatComponent />)

  const input = screen.getByPlaceholderText('输入您的问题')
  const sendButton = screen.getByRole('button', { name: '发送' })

  fireEvent.change(input, { target: { value: '测试查询' } })
  fireEvent.click(sendButton)

  // 验证响应
  expect(await screen.findByText('查询结果')).toBeInTheDocument()
})
```

### 7. 上线后的运营和维护

#### 7.1 监控指标
- API响应时间和成功率
- SQL查询执行时间
- 用户活跃度和留存率
- 查询准确率（通过用户反馈收集）

#### 7.2 数据分析
- 用户查询行为分析
- 热门查询统计
- 错误查询分析
- 性能瓶颈识别

请按照以上指南逐步实现，确保每个阶段的质量后再进入下一阶段。