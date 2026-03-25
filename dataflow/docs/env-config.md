# 环境变量配置指南

将以下内容复制到项目根目录的 `.env.local` 文件中：

```bash
# AI Model Configuration
# 默认 AI Provider: openai | anthropic | ollama
AI_PROVIDER=anthropic

# Anthropic Configuration (默认)
ANTHROPIC_AUTH_TOKEN=your-auth-token-here
ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
ANTHROPIC_BASE_URL=https://api.anthropic.com

# OpenAI Configuration (可选)
OPENAI_API_KEY=
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_BASE_URL=https://api.openai.com/v1

# Ollama Configuration (本地部署，可选)
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3

# AI Parameters
AI_TEMPERATURE=0.1
AI_MAX_TOKENS=2048
```

## 配置说明

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `AI_PROVIDER` | AI 提供商 | `anthropic` |
| `ANTHROPIC_AUTH_TOKEN` | Anthropic 认证令牌 | - |
| `ANTHROPIC_MODEL` | Anthropic 模型 | `claude-sonnet-4-5-20250929` |
| `ANTHROPIC_BASE_URL` | Anthropic API 地址 | `https://api.anthropic.com` |
| `OPENAI_API_KEY` | OpenAI API 密钥 | - |
| `OLLAMA_BASE_URL` | Ollama 服务地址 | `http://localhost:11434` |
