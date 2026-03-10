import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '组件介绍 - OpenClaw 文档',
  description: '了解 OpenClaw 的各个组件',
}

const channelIcons: Record<string, string> = {
  'Telegram': '📱',
  'WhatsApp': '💬',
  'Discord': '🎮',
  '飞书': '🪽',
  'Slack': '💼',
  'Signal': '🔐',
  'iMessage': '🍎',
  'WeChat': '💬',
  'LINE': '📱',
  'Matrix': '🧩',
}

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">组件介绍</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">组件介绍</h1>
          <p className="text-lg text-zinc-500">OpenClaw 是模块化架构，了解各组件的作用</p>
        </header>

        {/* 核心架构 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">🏗️</span>
            核心架构
          </h2>

          <div className="space-y-4">
            <div className="p-6 border border-zinc-200 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🏠
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">Gateway（网关守护进程）</h3>
                  <p className="text-zinc-600 mb-3">核心服务进程，是整个系统的大管家：</p>
                  <ul className="text-sm text-zinc-500 space-y-1">
                    <li>• 管理所有消息渠道连接</li>
                    <li>• 对外暴露 WebSocket API</li>
                    <li>• 处理事件调度（heartbeat、cron、agent 等）</li>
                    <li>• 协调各个子服务</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-zinc-200 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🤖
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">Agent（智能体）</h3>
                  <p className="text-zinc-600 mb-3">处理对话和执行任务的 AI 主体：</p>
                  <ul className="text-sm text-zinc-500 space-y-1">
                    <li>• 有自己的工作区（workspace）</li>
                    <li>• 有独立的人格和记忆</li>
                    <li>• 可以绑定到不同的消息渠道</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-zinc-200 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📱
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">Nodes（节点）</h3>
                  <p className="text-zinc-600">可选的设备扩展，提供额外能力：macOS/iOS/Android/无头设备，可提供摄像头、屏幕录制、位置等功能。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">💬</span>
            Channels（消息渠道）
          </h2>

          <p className="text-zinc-600 mb-4">OpenClaw 支持众多消息平台：</p>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Object.entries(channelIcons).map(([name, icon]) => (
              <div key={name} className="p-3 bg-zinc-50 rounded-lg text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <div className="text-sm text-zinc-600">{name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">🛠️</span>
            Tools（工具）
          </h2>

          <p className="text-zinc-600 mb-4">Agent 可以使用的内置工具：</p>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">工具</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">功能</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {[
                  ['exec', '执行 shell 命令'],
                  ['browser', '浏览器控制'],
                  ['web_search / web_fetch', '网页搜索/抓取'],
                  ['canvas', '渲染 UI 画布'],
                  ['tts', '语音合成'],
                  ['feishu_*', '飞书文档/表格操作'],
                  ['message', '发送消息'],
                ].map(([tool, desc]) => (
                  <tr key={tool}>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">{tool}</td>
                    <td className="px-4 py-3 text-zinc-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Memory */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">🧠</span>
            Memory（记忆）
          </h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">文件/工具</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">用途</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">memory/YYYY-MM-DD.md</td>
                  <td className="px-4 py-3 text-zinc-600">每日日志（原始记录）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">MEMORY.md</td>
                  <td className="px-4 py-3 text-zinc-600">长期记忆（精华提炼）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">HEARTBEAT.md</td>
                  <td className="px-4 py-3 text-zinc-600">心跳检查任务清单</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">📦</span>
            Skills（技能）
          </h2>

          <p className="text-zinc-600 mb-4">可扩展的技能包系统，包含 50+ 内置技能：</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {['weather', 'healthcheck', 'github', 'notion', 'obsidian', 'spotify', 'discord', 'slack', 'coding-agent', 'canvas', 'tts', 'browser'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          <a href="/docs/skills" className="text-violet-600 hover:text-violet-700 text-sm font-medium">
            了解如何安装技能 →
          </a>
        </section>

        {/* 其他组件 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            其他组件
          </h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">Session</td>
                  <td className="px-4 py-3 text-zinc-600">对话上下文管理，支持多 session 并行</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">Providers</td>
                  <td className="px-4 py-3 text-zinc-600">AI 模型接入层（OpenAI、Anthropic、OpenRouter 等）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">Plugins</td>
                  <td className="px-4 py-3 text-zinc-600">渠道插件系统</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">Automation</td>
                  <td className="px-4 py-3 text-zinc-600">自动化/定时任务（cron + heartbeat）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">ClaWHub</td>
                  <td className="px-4 py-3 text-zinc-600">
                    技能市场 <a href="https://clawhub.ai" target="_blank" rel="noopener" className="text-violet-600 hover:underline">clawhub.ai</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/quickstart" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 快速开始
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
