import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '组件介绍 - OpenClaw 文档',
  description: '了解 OpenClaw 的各个组件：Gateway、Agent、Channels、Tools、Memory、Skills',
}

export default function ComponentsPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>组件介绍</h1>

      <p>
        OpenClaw 是一个模块化的 AI Agent 平台，由多个组件协同工作。了解这些组件有助于你更好地使用和配置系统。
      </p>

      <section>
        <h2>🏗️ 核心架构</h2>

        <h3>Gateway（网关守护进程）</h3>
        <p>核心服务进程，负责：</p>
        <ul>
          <li>管理所有消息渠道连接</li>
          <li>对外暴露 WebSocket API</li>
          <li>处理事件调度（heartbeat、cron、agent 等）</li>
          <li>协调各个子服务</li>
        </ul>

        <h3>Agent（智能体）</h3>
        <p>处理对话和执行任务的 AI 主体，特点：</p>
        <ul>
          <li>有自己的工作区（workspace）</li>
          <li>有独立的人格和记忆</li>
          <li>可以绑定到不同的消息渠道</li>
        </ul>

        <h3>Nodes（节点）</h3>
        <p>可选的设备扩展，提供额外能力：</p>
        <ul>
          <li>macOS/iOS/Android/无头设备</li>
          <li>提供摄像头、屏幕录制、位置等能力</li>
        </ul>
      </section>

      <section>
        <h2>💬 Channels（消息渠道）</h2>
        <p>OpenClaw 支持众多消息平台：</p>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <span>📱 Telegram</span>
            <span>💬 WhatsApp</span>
            <span>🎮 Discord</span>
            <span>🪽 飞书 Feishu</span>
            <span>💼 Slack</span>
            <span>🔐 Signal</span>
            <span>🍎 iMessage</span>
            <span>💬 WeChat</span>
            <span>📱 LINE</span>
            <span>🧩 Matrix</span>
            <span>💬 IRC</span>
            <span>📋 Mattermost</span>
            <span>👥 MS Teams</span>
            <span>📧 Google Chat</span>
            <span>🦋 Nostr</span>
            <span>📺 Twitch</span>
            <span>🇻🇳 Zalo</span>
            <span>🔵 BlueBubbles</span>
          </div>
        </div>
      </section>

      <section>
        <h2>🛠️ Tools（工具）</h2>
        <p>Agent 可以使用的内置工具：</p>
        <table>
          <thead>
            <tr>
              <th>工具</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>exec</code></td>
              <td>执行 shell 命令</td>
            </tr>
            <tr>
              <td><code>browser</code></td>
              <td>浏览器控制（含 Chrome 扩展 relay）</td>
            </tr>
            <tr>
              <td><code>web_search</code> / <code>web_fetch</code></td>
              <td>网页搜索/抓取</td>
            </tr>
            <tr>
              <td><code>canvas</code></td>
              <td>渲染 UI 画布</td>
            </tr>
            <tr>
              <td><code>nodes</code></td>
              <td>控制配对设备</td>
            </tr>
            <tr>
              <td><code>sessions_spawn</code> / <code>subagents</code></td>
              <td>多智能体编排</td>
            </tr>
            <tr>
              <td><code>tts</code></td>
              <td>语音合成</td>
            </tr>
            <tr>
              <td><code>feishu_*</code></td>
              <td>飞书文档/表格/知识库操作</td>
            </tr>
            <tr>
              <td><code>message</code></td>
              <td>发送消息</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>🧠 Memory（记忆）</h2>
        <p>OpenClaw 的记忆系统：</p>
        <table>
          <thead>
            <tr>
              <th>文件/工具</th>
              <th>用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>memory/YYYY-MM-DD.md</code></td>
              <td>每日日志（原始记录）</td>
            </tr>
            <tr>
              <td><code>MEMORY.md</code></td>
              <td>长期记忆（精华提炼，仅主 session 加载）</td>
            </tr>
            <tr>
              <td><code>HEARTBEAT.md</code></td>
              <td>心跳检查任务清单</td>
            </tr>
            <tr>
              <td><code>acontext_*</code> 工具</td>
              <td>跨 session 技能学习和历史查询</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>📦 Skills（技能）</h2>
        <p>可扩展的技能包系统，包含 50+ 内置技能：</p>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4">
          <p className="text-sm mb-2"><strong>常用技能：</strong></p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">weather</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">healthcheck</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">github</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">notion</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">obsidian</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">spotify</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">discord</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">slack</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">coding-agent</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">canvas</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">tts</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">browser</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">PDF 处理</span>
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">图像生成</span>
          </div>
        </div>

        <h3>安装新技能</h3>
        <p>从 ClawHub 技能市场安装：</p>
        <pre><code>{`# 在对话中让机器人安装
@机器人 安装 find-skill

# 或访问 ClawHub
# https://clawhub.ai/`}</code></pre>

        <h3>技能目录结构</h3>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4">
          <pre className="text-sm mb-0">{`~/.openclaw/workspace/skills/
└── find-skill/          ← 用户自安装的 skill
    ├── SKILL.md         ← skill 指令文件
    ├── _meta.json       ← 元数据（版本等）
    └── .clawhub/        ← clawhub 锁文件`}</pre>
        </div>
      </section>

      <section>
        <h2>⚙️ 其他组件</h2>
        <table>
          <thead>
            <tr>
              <th>组件</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Session</strong></td>
              <td>对话上下文管理，支持多 session 并行</td>
            </tr>
            <tr>
              <td><strong>Providers</strong></td>
              <td>AI 模型接入层（OpenAI、Anthropic、OpenRouter 等）</td>
            </tr>
            <tr>
              <td><strong>Plugins</strong></td>
              <td>渠道插件系统</td>
            </tr>
            <tr>
              <td><strong>Automation</strong></td>
              <td>自动化/定时任务（cron + heartbeat）</td>
            </tr>
            <tr>
              <td><strong>ClaWHub</strong></td>
              <td>技能市场 <a href="https://clawhub.ai" target="_blank" rel="noopener">clawhub.ai</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-components.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
