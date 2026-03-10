import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '多 Gateway 配置 - OpenClaw 文档',
  description: '在同一台服务器上运行多个 OpenClaw 实例',
}

export default function MultiGatewayPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>多 Gateway 配置指南</h1>

      <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 my-4">
        <p className="text-blue-700 dark:text-blue-300 mb-0">
          <strong>💡 小白提示：</strong>大多数情况下，你只需要一个 Gateway。只有当你需要完全隔离的多个机器人时，才需要这个配置。
        </p>
      </div>

      <section>
        <h2>什么是 Gateway？</h2>
        <p>
          Gateway 是 OpenClaw 的<strong>核心服务进程</strong>，就像一个"大管家"：
        </p>
        <ul>
          <li>接收来自飞书、Discord 等平台的消息</li>
          <li>管理 AI 机器人的运行</li>
          <li>协调浏览器、画布等服务</li>
        </ul>

        <h3>一个 Gateway 能做什么？</h3>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4">
          <pre className="text-sm mb-0">{`单个 Gateway 可以同时处理：
├── 飞书机器人 A
├── Discord 机器人 B
├── Telegram 机器人 C
└── 多个用户的对话`}</pre>
        </div>
        <p>
          <strong>所以通常不需要多个 Gateway！</strong>
        </p>
      </section>

      <section>
        <h2>什么时候需要多个 Gateway？</h2>
        <table>
          <thead>
            <tr>
              <th>场景</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🚨 救援机器人</td>
              <td>主机器人坏了，用独立的机器人来调试</td>
            </tr>
            <tr>
              <td>🏢 团队隔离</td>
              <td>不同团队需要独立的配置和工作空间</td>
            </tr>
            <tr>
              <td>🔐 安全隔离</td>
              <td>敏感操作和普通操作分开</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>配置双 Gateway 步骤</h2>

        <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 my-4">
          <p className="text-amber-700 dark:text-amber-300 mb-0">
            <strong>⚠️ 前提：</strong>你已经安装并配置好了主机器人（默认 profile）
          </p>
        </div>

        <h3>第一步：创建救援机器人</h3>
        <p>打开终端，运行：</p>
        <pre><code>openclaw --profile rescue onboard</code></pre>

        <p>按照提示完成配置（和第一次配置一样）。</p>

        <h3>第二步：修改端口（重要！）</h3>
        <p>两个机器人不能用同一个端口，需要修改：</p>
        <pre><code>{`# 编辑救援机器人配置
nano ~/.openclaw-rescue/openclaw.json`}</code></pre>

        <p>找到 <code>&quot;port&quot;: 18789</code> 改成 <code>&quot;port&quot;: 19789</code></p>

        <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-4 my-4">
          <p className="text-green-700 dark:text-green-300 mb-0">
            <strong>端口分配：</strong><br />
            主机器人：18789<br />
            救援机器人：19789
          </p>
        </div>

        <h3>第三步：复制 API Key</h3>
        <p>把主机器人的 AI 模型 Key 复制给救援机器人：</p>
        <pre><code>{`# 创建目录
mkdir -p ~/.openclaw-rescue/agents/main/agent/

# 复制 Key 文件
cp ~/.openclaw/agents/main/agent/models.json ~/.openclaw-rescue/agents/main/agent/models.json`}</code></pre>

        <h3>第四步：启动救援机器人</h3>
        <pre><code>{`# 安装服务（指定端口）
openclaw --profile rescue gateway install --port 19789

# 启动
openclaw --profile rescue gateway start`}</code></pre>

        <h3>第五步：验证</h3>
        <pre><code>{`# 查看主机器人状态
openclaw status

# 查看救援机器人状态
openclaw --profile rescue status`}</code></pre>
      </section>

      <section>
        <h2>常用命令速查</h2>

        <h3>状态查看</h3>
        <pre><code>{`# 主机器人
openclaw status

# 救援机器人
openclaw --profile rescue status`}</code></pre>

        <h3>日志查看</h3>
        <pre><code>{`# 主机器人日志
openclaw logs --follow

# 救援机器人日志
openclaw --profile rescue logs --follow`}</code></pre>

        <h3>服务管理</h3>
        <pre><code>{`# 启动
openclaw gateway start
openclaw --profile rescue gateway start

# 停止
openclaw gateway stop
openclaw --profile rescue gateway stop

# 重启
openclaw gateway restart
openclaw --profile rescue gateway restart`}</code></pre>
      </section>

      <section>
        <h2>文件位置对照表</h2>
        <table>
          <thead>
            <tr>
              <th>项目</th>
              <th>主机器人</th>
              <th>救援机器人</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>配置文件</td>
              <td><code>~/.openclaw/openclaw.json</code></td>
              <td><code>~/.openclaw-rescue/openclaw.json</code></td>
            </tr>
            <tr>
              <td>工作空间</td>
              <td><code>~/.openclaw/workspace/</code></td>
              <td><code>~/.openclaw/workspace-rescue/</code></td>
            </tr>
            <tr>
              <td>端口</td>
              <td>18789</td>
              <td>19789</td>
            </tr>
            <tr>
              <td>Web 面板</td>
              <td>http://127.0.0.1:18789/</td>
              <td>http://127.0.0.1:19789/</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>常见问题</h2>

        <h3>端口冲突</h3>
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-4 my-4">
          <p className="font-mono text-sm text-red-700 dark:text-red-300 mb-0">
            Gateway failed to start: another gateway instance is already listening on ws://127.0.0.1:18789
          </p>
        </div>
        <p><strong>解决方法：</strong>检查配置文件中的端口是否已修改</p>
        <pre><code>{`# 检查配置
grep "port" ~/.openclaw-rescue/openclaw.json`}</code></pre>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-multi-gateway.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
