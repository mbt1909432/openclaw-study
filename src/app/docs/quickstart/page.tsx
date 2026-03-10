import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '快速开始 - OpenClaw 文档',
  description: '使用配置向导快速上手 OpenClaw',
}

export default function QuickstartPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>快速开始</h1>

      <section>
        <h2>运行引导向导</h2>
        <pre><code>{`# 完整安装向导 + 安装系统服务
openclaw onboard --install-daemon

# 仅运行配置向导
openclaw onboard`}</code></pre>

        <h3>向导步骤</h3>
        <ol>
          <li><strong>安全警告</strong> - 确认你了解安全影响</li>
          <li><strong>配置模式</strong> - 初学者选择 QuickStart</li>
          <li><strong>模型供应商</strong> - 选择 AI 供应商（OpenAI、Anthropic、OpenRouter 等）</li>
          <li><strong>消息平台</strong> - 配置飞书、Discord、Slack 等</li>
          <li><strong>技能</strong> - 可选：启用托管技能</li>
          <li><strong>钩子</strong> - 可选：配置事件钩子</li>
        </ol>
      </section>

      <section>
        <h2>启动后操作</h2>

        <h3>启动 Gateway</h3>
        <pre><code>{`# 启动网关服务
openclaw gateway start

# 检查状态
openclaw status`}</code></pre>

        <h3>访问 Web 面板</h3>
        <p>在浏览器中打开：</p>
        <pre><code>http://127.0.0.1:18789/</code></pre>
      </section>

      <section>
        <h2>Web 面板功能</h2>
        <p>Web 面板提供了丰富的管理功能，信息显示更全面：</p>

        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">📊 实例</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              查看 Gateway 运行状态、系统资源使用情况
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">💬 会话</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              查看和管理对话会话，浏览历史记录
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">⏰ 定时任务</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              创建和管理自动化定时任务
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">🤖 Agent</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              编辑 AGENTS.md、SOUL.md、USER.md 等各种文件
            </p>
          </div>
        </div>

        <h3>Agent 文件管理</h3>
        <p>在「Agent」板块可以编辑以下文件：</p>
        <table>
          <thead>
            <tr>
              <th>文件</th>
              <th>用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>AGENTS.md</code></td>
              <td>Agent 行为规范和操作规则</td>
            </tr>
            <tr>
              <td><code>SOUL.md</code></td>
              <td>人格、语气、边界定义</td>
            </tr>
            <tr>
              <td><code>USER.md</code></td>
              <td>用户信息和偏好</td>
            </tr>
            <tr>
              <td><code>IDENTITY.md</code></td>
              <td>机器人名称和形象</td>
            </tr>
            <tr>
              <td><code>MEMORY.md</code></td>
              <td>长期记忆</td>
            </tr>
            <tr>
              <td><code>HEARTBEAT.md</code></td>
              <td>心跳检查任务清单</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>TUI 终端界面</h2>
        <pre><code>{`# 启动终端界面
openclaw tui

# 简写
claw tui`}</code></pre>
      </section>

      <section>
        <h2>示例对话</h2>
        <p>机器人连接成功后，试试这些对话：</p>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4">
          <ul className="mb-0">
            <li>"桌面有什么？" - 查看桌面文件</li>
            <li>"北京天气？" - 查询天气</li>
            <li>"帮我搜索一下..." - 网页搜索</li>
            <li>"总结一下这个链接的内容" - 抓取网页</li>
            <li>"帮我写一段代码..." - 代码生成</li>
            <li>"安装 find-skill" - 安装新技能</li>
          </ul>
        </div>

        <h3>查询组件信息</h3>
        <pre><code>{`# 询问 OpenClaw 组件
@机器人 openclaw 有哪些组件可以用？比如 gateway skill agent tool channel memory 等

# 询问工作位置
@机器人 你工作的位置`}</code></pre>
      </section>

      <section>
        <h2>下一步</h2>
        <ul>
          <li><a href="/docs/feishu">飞书集成</a> - 配置飞书机器人</li>
          <li><a href="/docs/components">组件介绍</a> - 了解各个组件</li>
          <li><a href="/docs/workspace">目录结构</a> - 了解文件存放位置</li>
          <li><a href="/docs/multi-gateway">多 Gateway</a> - 配置救援机器人</li>
        </ul>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-quickstart.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
