import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '命令参考 - OpenClaw 文档',
  description: 'OpenClaw 常用命令速查表',
}

export default function CommandsPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>命令参考</h1>

      <section>
        <h2>基础命令</h2>

        <h3>查看帮助</h3>
        <pre><code>{`openclaw --help
openclaw --version`}</code></pre>

        <h3>配置向导</h3>
        <pre><code>{`# 首次配置（推荐）
openclaw onboard --install-daemon

# 使用指定 profile 配置
openclaw --profile rescue onboard`}</code></pre>
      </section>

      <section>
        <h2>服务管理</h2>

        <h3>启动/停止/重启</h3>
        <pre><code>{`# 启动服务
openclaw gateway start

# 停止服务
openclaw gateway stop

# 重启服务
openclaw gateway restart

# 安装为系统服务
openclaw gateway install --port 18789

# 卸载系统服务
openclaw gateway uninstall`}</code></pre>

        <h3>多 Profile 操作</h3>
        <pre><code>{`# 救援机器人操作（加 --profile rescue）
openclaw --profile rescue gateway start
openclaw --profile rescue gateway stop
openclaw --profile rescue gateway restart`}</code></pre>
      </section>

      <section>
        <h2>状态查看</h2>

        <pre><code>{`# 快速状态
openclaw status

# 深度检查
openclaw status --deep

# 救援机器人状态
openclaw --profile rescue status`}</code></pre>

        <h3>状态输出解读</h3>
        <table>
          <thead>
            <tr>
              <th>状态</th>
              <th>含义</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>running</code></td>
              <td>正常运行</td>
            </tr>
            <tr>
              <td><code>stopped</code></td>
              <td>已停止</td>
            </tr>
            <tr>
              <td><code>unreachable</code></td>
              <td>无法连接（检查服务是否启动）</td>
            </tr>
            <tr>
              <td><code>Channels: OK</code></td>
              <td>消息平台连接正常</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>日志查看</h2>

        <pre><code>{`# 实时日志
openclaw logs --follow

# 过滤飞书日志
openclaw logs --follow | grep feishu

# 过滤 WebSocket 日志
openclaw logs --follow | grep -i "ws"`}</code></pre>
      </section>

      <section>
        <h2>TUI 终端界面</h2>

        <pre><code>{`# 启动终端界面
openclaw tui

# 简写
claw tui`}</code></pre>

        <h3>快捷键</h3>
        <table>
          <thead>
            <tr>
              <th>快捷键</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Ctrl+C</code></td>
              <td>退出 TUI</td>
            </tr>
            <tr>
              <td><code>Ctrl+C</code> 两次</td>
              <td>强制退出</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>配置操作</h2>

        <pre><code>{`# 设置工具模式
openclaw config set tools.profile "full"

# 查看配置
openclaw config list`}</code></pre>
      </section>

      <section>
        <h2>安全审计</h2>

        <pre><code>{`# 快速审计
openclaw security audit

# 深度审计
openclaw security audit --deep

# 自动修复
openclaw security audit --fix`}</code></pre>
      </section>

      <section>
        <h2>远程访问（SSH 端口转发）</h2>

        <pre><code>{`# 转发主机器人端口
ssh -N -L 18789:127.0.0.1:18789 user@server-ip

# 转发救援机器人端口
ssh -N -L 19789:127.0.0.1:19789 user@server-ip

# 同时转发两个端口
ssh -N -L 18789:127.0.0.1:18789 -L 19789:127.0.0.1:19789 user@server-ip`}</code></pre>

        <p>然后在本地浏览器访问：</p>
        <ul>
          <li>主机器人: <code>http://localhost:18789/</code></li>
          <li>救援机器人: <code>http://localhost:19789/</code></li>
        </ul>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-commands.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
