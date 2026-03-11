import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '整体架构 - OpenClaw 文档',
  description: 'OpenClaw Gateway-Node-Channel 三层架构详解',
}

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">整体架构</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">整体架构</h1>
          <p className="text-lg text-zinc-500">OpenClaw 采用 Gateway-Node-Channel 三层架构</p>
        </header>

        {/* 架构图 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Architecture Overview</h2>

          <div className="bg-zinc-900 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              {/* Channel */}
              <div className="bg-blue-600 rounded-xl p-6 w-full md:w-auto">
                <div className="text-3xl mb-2">💬</div>
                <div className="text-white font-semibold text-lg">Channel</div>
                <div className="text-blue-200 text-sm mt-1">20+ 消息渠道</div>
                <div className="text-blue-300 text-xs mt-2">WhatsApp · Telegram · 飞书</div>
              </div>

              {/* Arrow */}
              <div className="text-zinc-500 text-2xl hidden md:block">→</div>
              <div className="text-zinc-500 text-2xl md:hidden">↓</div>

              {/* Gateway */}
              <div className="bg-violet-600 rounded-xl p-6 w-full md:w-auto">
                <div className="text-3xl mb-2">🏠</div>
                <div className="text-white font-semibold text-lg">Gateway</div>
                <div className="text-violet-200 text-sm mt-1">中央控制平面</div>
                <div className="text-violet-300 text-xs mt-2">ws://127.0.0.1:18789</div>
              </div>

              {/* Arrow */}
              <div className="text-zinc-500 text-2xl hidden md:block">→</div>
              <div className="text-zinc-500 text-2xl md:hidden">↓</div>

              {/* Node */}
              <div className="bg-emerald-600 rounded-xl p-6 w-full md:w-auto">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-white font-semibold text-lg">Node</div>
                <div className="text-emerald-200 text-sm mt-1">设备端执行</div>
                <div className="text-emerald-300 text-xs mt-2">camera · screen · run</div>
              </div>
            </div>
            <div className="text-center text-zinc-500 text-sm mt-6">
              以 WebSocket 为通信总线，将控制平面、设备执行与消息渠道解耦
            </div>
          </div>
        </section>

        {/* 三层架构 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">三层架构详解</h2>

          <div className="space-y-6">
            {/* Gateway */}
            <div className="border border-zinc-200 rounded-xl p-6 hover:border-violet-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🏠
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">Gateway（网关）</h3>
                  <p className="text-zinc-600 mb-3">中央控制平面，维护 WebSocket 服务、管理 Session、调度 Agent</p>
                  <div className="bg-zinc-50 rounded-lg p-3">
                    <code className="text-sm text-violet-600">默认绑定 ws://127.0.0.1:18789</code>
                    <span className="text-zinc-500 text-sm ml-2">每台主机一个实例</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Node */}
            <div className="border border-zinc-200 rounded-xl p-6 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📱
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">Node（节点）</h3>
                  <p className="text-zinc-600 mb-3">设备端执行节点，负责本地操作</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">camera（摄像头）</span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">screen recording（录屏）</span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">system.run（系统命令）</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Channel */}
            <div className="border border-zinc-200 rounded-xl p-6 hover:border-blue-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  💬
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">Channel（渠道）</h3>
                  <p className="text-zinc-600 mb-3">消息渠道接入层，连接 20+ 即时通讯平台</p>
                  <div className="flex flex-wrap gap-2">
                    {['WhatsApp', 'Telegram', 'Discord', 'Slack', '飞书', '钉钉', '企业微信', '微信'].map((ch) => (
                      <span key={ch} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">{ch}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 安全设计 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span>🔒</span>
            Loopback-First 设计（Security by Default）
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-6">
            <p className="font-medium text-amber-800 mb-3">Gateway 默认只绑定 localhost（127.0.0.1），所有流量在本地回环</p>
            <ul className="text-amber-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">✓</span>
                <span>不开放任何外网端口，天然安全</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">✓</span>
                <span>同一台机器上的 Node 直接通过 WebSocket 连接 Gateway</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">✓</span>
                <span>需要远程访问时，通过 Tailscale Serve/Funnel 暴露，不直接暴露端口</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">核心建议</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 每台主机只运行一个 Gateway 实例
# 原因：WhatsApp Web 等渠道需要独占会话
# 多实例会导致登录冲突`}</code>
            </pre>
          </div>
        </section>

        {/* 通信流程 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">通信流程</h2>

          <p className="text-zinc-600 mb-6">一条消息从用户发出到 Agent 回复，完整路径如下：</p>

          <div className="bg-zinc-50 rounded-xl p-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
              <div className="bg-white border border-zinc-200 rounded-lg px-4 py-2">
                <div className="text-2xl mb-1">👤</div>
                <div className="text-sm text-zinc-600">用户发消息</div>
              </div>
              <span className="text-zinc-400">→</span>
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                <div className="text-2xl mb-1">💬</div>
                <div className="text-sm text-blue-600">Channel 接收</div>
              </div>
              <span className="text-zinc-400">→</span>
              <div className="bg-violet-50 border border-violet-200 rounded-lg px-4 py-2">
                <div className="text-2xl mb-1">🏠</div>
                <div className="text-sm text-violet-600">Gateway 路由</div>
              </div>
              <span className="text-zinc-400">→</span>
              <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-2">
                <div className="text-2xl mb-1">🤖</div>
                <div className="text-sm text-purple-600">Agent 处理</div>
              </div>
              <span className="text-zinc-400">→</span>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2">
                <div className="text-2xl mb-1">📱</div>
                <div className="text-sm text-emerald-600">Node 执行</div>
              </div>
              <span className="text-zinc-400">→</span>
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                <div className="text-2xl mb-1">📝</div>
                <div className="text-sm text-amber-600">回复用户</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-violet-50 rounded-xl">
            <p className="text-violet-800 text-sm">
              <strong>Gateway 作为 24/7 运行的 daemon</strong>，持续监听所有已连接的 Channel。
              它不像 CLI Agent 那样会话结束就丢失上下文，而是长驻运行，积累记忆。
            </p>
          </div>
        </section>

        {/* 层级职责表 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">层级职责</h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">层级</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">职责</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">关键细节</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-6 h-6 bg-violet-100 rounded flex items-center justify-center text-sm">🏠</span>
                      <span className="font-medium text-violet-700">Gateway</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-600">中央控制平面</td>
                  <td className="px-4 py-4 text-zinc-500 text-xs">WebSocket 服务、Session 管理、Agent 调度</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center text-sm">📱</span>
                      <span className="font-medium text-emerald-700">Node</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-600">设备端执行节点</td>
                  <td className="px-4 py-4 text-zinc-500 text-xs">camera、screen recording、system.run</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-sm">💬</span>
                      <span className="font-medium text-blue-700">Channel</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-600">消息渠道接入层</td>
                  <td className="px-4 py-4 text-zinc-500 text-xs">WhatsApp、Telegram、Discord、Slack、飞书、钉钉</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 导航 */}
        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/components" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 组件介绍
            </a>
            <a href="/docs/workspace" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              目录结构 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
