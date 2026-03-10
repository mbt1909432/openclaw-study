import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Key 管理 - OpenClaw 文档',
  description: 'OpenClaw API Key 配置和管理',
}

export default function ApiKeysPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>API Key 管理</h1>

      <section>
        <h2>Key 存储在哪里？</h2>
        <p>
          OpenClaw 的 AI 模型 API Key <strong>不是</strong>存在配置文件的 <code>env</code> 或 <code>credentials</code> 中，而是存在：
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-mono text-blue-700 dark:text-blue-300 mb-0">
            ~/.openclaw/agents/main/agent/models.json
          </p>
        </div>

        <h3>多 Profile 时</h3>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4">
          <pre className="text-sm mb-0">{`# 默认 profile
~/.openclaw/agents/main/agent/models.json

# rescue profile
~/.openclaw-rescue/agents/main/agent/models.json`}</pre>
        </div>
      </section>

      <section>
        <h2>配置 API Key</h2>

        <h3>方法一：通过配置向导</h3>
        <p>运行 <code>openclaw onboard</code> 时会提示输入 API Key。</p>

        <h3>方法二：复制到新 Profile</h3>
        <p>如果你已经配置好主机器人，想把 Key 复制给救援机器人：</p>
        <pre><code>{`# 创建目录
mkdir -p ~/.openclaw-rescue/agents/main/agent/

# 复制 models.json
cp ~/.openclaw/agents/main/agent/models.json ~/.openclaw-rescue/agents/main/agent/models.json

# 重启服务
openclaw --profile rescue gateway restart`}</code></pre>
      </section>

      <section>
        <h2>切换模型</h2>

        <h3>支持的模型供应商</h3>
        <ul>
          <li><strong>Anthropic</strong> - Claude 系列</li>
          <li><strong>OpenAI</strong> - GPT 系列</li>
          <li><strong>OpenRouter</strong> - 多模型聚合</li>
          <li><strong>其他</strong> - 本地模型、自定义 API</li>
        </ul>

        <h3>修改模型配置</h3>
        <pre><code>{`# 编辑配置文件
nano ~/.openclaw/openclaw.json`}</code></pre>

        <p>找到 <code>agents.defaults.model</code> 部分：</p>
        <pre><code>{`{
  "agents": {
    "defaults": {
      "model": {
        "primary": "claude-sonnet-4-6",
        "models": [
          "claude-sonnet-4-6",
          "claude-opus-4-6",
          "claude-haiku-4-5-20251001"
        ]
      }
    }
  }
}`}</code></pre>

        <h3>配置项说明</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>primary</code></td>
              <td>默认使用的模型</td>
            </tr>
            <tr>
              <td><code>models</code></td>
              <td>允许使用的模型列表</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 my-4">
          <p className="text-amber-700 dark:text-amber-300 mb-0">
            <strong>💡 小白提示：</strong>修改模型后需要重启 Gateway 才能生效。
          </p>
        </div>

        <pre><code>openclaw gateway restart</code></pre>
      </section>

      <section>
        <h2>验证 Key 配置</h2>

        <h3>查看 Key 文件</h3>
        <pre><code>cat ~/.openclaw/agents/main/agent/models.json</code></pre>

        <h3>在 TUI 中验证</h3>
        <pre><code>{`# 启动 TUI
openclaw tui

# 问机器人
你现在用的是哪个模型供应商？key 存在哪里`}</code></pre>
      </section>

      <section>
        <h2>常见问题</h2>

        <h3>401 Missing Authentication</h3>
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-4 my-4">
          <p className="font-mono text-sm text-red-700 dark:text-red-300 mb-0">
            Error: 401 Missing Authentication header
          </p>
        </div>
        <p><strong>原因：</strong>API Key 没有正确配置</p>
        <p><strong>解决：</strong></p>
        <ol>
          <li>检查 <code>models.json</code> 是否存在</li>
          <li>检查 Key 格式是否正确</li>
          <li>重启 Gateway</li>
        </ol>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-api-keys.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
