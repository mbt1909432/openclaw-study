import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '命令参考 - OpenClaw 文档',
  description: 'OpenClaw 常用命令速查表',
}

export default function CommandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">命令参考</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">命令参考</h1>
          <p className="text-lg text-zinc-500">OpenClaw 常用命令速查表</p>
        </header>

        {/* 基础命令 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">基础命令</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`openclaw --help          # 查看帮助
openclaw --version       # 查看版本

# 配置向导
openclaw onboard --install-daemon   # 完整安装
openclaw onboard                    # 仅配置`}</code>
            </pre>
          </div>
        </section>

        {/* 服务管理 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">服务管理</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 启动
openclaw gateway start

# 停止
openclaw gateway stop

# 重启
openclaw gateway restart

# 安装为系统服务
openclaw gateway install --port 18789

# 卸载系统服务
openclaw gateway uninstall`}</code>
            </pre>
          </div>
        </section>

        {/* 多 Profile */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">多 Profile 操作</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 救援机器人（加 --profile rescue）
openclaw --profile rescue gateway start
openclaw --profile rescue gateway stop
openclaw --profile rescue gateway restart`}</code>
            </pre>
          </div>
        </section>

        {/* 状态查看 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">状态查看</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-4">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`openclaw status           # 快速状态
openclaw status --deep   # 深度检查
openclaw --profile rescue status   # 救援机器人状态`}</code>
            </pre>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">状态输出解读</h3>
          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-emerald-600">running</td>
                  <td className="px-4 py-3 text-zinc-600">正常运行</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-zinc-500">stopped</td>
                  <td className="px-4 py-3 text-zinc-600">已停止</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-red-600">unreachable</td>
                  <td className="px-4 py-3 text-zinc-600">无法连接</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-emerald-600">Channels: OK</td>
                  <td className="px-4 py-3 text-zinc-600">消息平台连接正常</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 日志查看 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">日志查看</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`openclaw logs --follow                    # 实时日志
openclaw logs --follow | grep feishu     # 过滤飞书日志
openclaw logs --follow | grep -i "ws"    # 过滤 WebSocket 日志`}</code>
            </pre>
          </div>
        </section>

        {/* TUI */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">TUI 终端界面</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-4">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`openclaw tui    # 启动终端界面
claw tui        # 简写`}</code>
            </pre>
          </div>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-zinc-700">Ctrl+C</td>
                  <td className="px-4 py-3 text-zinc-600">退出 TUI</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-zinc-700">Ctrl+C 两次</td>
                  <td className="px-4 py-3 text-zinc-600">强制退出</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 安全审计 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">安全审计</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`openclaw security audit          # 快速审计
openclaw security audit --deep   # 深度审计
openclaw security audit --fix    # 自动修复`}</code>
            </pre>
          </div>
        </section>

        {/* 远程访问 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">远程访问（SSH 端口转发）</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 转发主机器人端口
ssh -N -L 18789:127.0.0.1:18789 user@server-ip

# 转发救援机器人端口
ssh -N -L 19789:127.0.0.1:19789 user@server-ip

# 同时转发两个端口
ssh -N -L 18789:127.0.0.1:18789 -L 19789:127.0.0.1:19789 user@server-ip`}</code>
            </pre>
          </div>
          <p className="text-zinc-500 text-sm mt-3">然后在本地浏览器访问 http://localhost:18789/</p>
        </section>

        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/skills" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 技能安装
            </a>
            <a href="/docs/troubleshooting" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              故障排查 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
