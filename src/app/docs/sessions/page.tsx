import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Session 与设计哲学 - OpenClaw 文档',
  description: 'OpenClaw Session 管理、用户识别与设计哲学详解',
}

export default function SessionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">Session 与设计哲学</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Session 与设计哲学</h1>
          <p className="text-lg text-zinc-500">
            OpenClaw 的会话管理、用户识别机制与核心设计理念
          </p>
        </header>

        {/* DM Pairing Policy */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">DM Pairing Policy 默认认证策略</h2>

          <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-6 mb-6 border border-violet-100">
            <p className="text-zinc-700 mb-4">
              当一个未知发送者通过任意渠道向 Agent 发送私聊消息时，触发配对码机制。
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">策略值</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">行为</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">pairing（默认）</td>
                  <td className="px-4 py-3 text-zinc-600">未知发送者需要配对码批准</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">allowlist</td>
                  <td className="px-4 py-3 text-zinc-600">仅允许白名单用户</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">open</td>
                  <td className="px-4 py-3 text-zinc-600">允许所有 DM（需要 allowFrom: ["*"]）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">disabled</td>
                  <td className="px-4 py-3 text-zinc-600">阻止所有 DM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 白名单机制 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">白名单机制 allowFrom</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">AGENTS.md 配置示例</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`allowFrom:
  - telegram:123456789      # Telegram 用户 ID
  - whatsapp:+8613800138000 # WhatsApp 号码
  - discord:user#1234       # Discord 用户`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-zinc-200 rounded-xl p-4">
              <h4 className="font-semibold text-zinc-800 mb-2 text-sm">allowFrom</h4>
              <p className="text-xs text-zinc-600">DM 白名单</p>
            </div>
            <div className="border border-zinc-200 rounded-xl p-4">
              <h4 className="font-semibold text-zinc-800 mb-2 text-sm">groupAllowFrom</h4>
              <p className="text-xs text-zinc-600">群组消息白名单</p>
            </div>
            <div className="border border-zinc-200 rounded-xl p-4">
              <h4 className="font-semibold text-zinc-800 mb-2 text-sm">storeAllowFrom</h4>
              <p className="text-xs text-zinc-600">从配对存储读取的白名单</p>
            </div>
          </div>
        </section>

        {/* 群组规则 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">群组规则 requireMention</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">群组配置</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`requireMention: true  # 只响应 @Agent 的消息
groupPolicy: "open"   # 群组策略`}</code>
            </pre>
          </div>

          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">groupPolicy</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">行为</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">open</td>
                  <td className="px-4 py-3 text-zinc-600">所有消息允许（仍受 requireMention 限制）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">allowlist</td>
                  <td className="px-4 py-3 text-zinc-600">仅允许白名单发送者</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">disabled</td>
                  <td className="px-4 py-3 text-zinc-600">阻止所有群组消息</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5">
            <p className="font-medium text-blue-800 mb-2">聊天命令</p>
            <code className="text-sm text-blue-700 bg-blue-100 px-2 py-1 rounded">/activation mention|always</code>
          </div>
        </section>

        {/* Session 隔离机制 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Session 隔离机制</h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">场景</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">Session 行为</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">MEMORY.md</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 text-zinc-700">私聊 (DM)</td>
                  <td className="px-4 py-3 text-zinc-600">根据 DmScope 配置决定</td>
                  <td className="px-4 py-3 text-zinc-500">按配置加载</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-700">群组</td>
                  <td className="px-4 py-3 text-zinc-600">每个群组默认独立 session</td>
                  <td className="px-4 py-3 text-zinc-500">不加载</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-700">跨渠道</td>
                  <td className="px-4 py-3 text-zinc-600">根据 session.scope 配置</td>
                  <td className="px-4 py-3 text-zinc-500">可配置共享/隔离</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">DmScope 配置</h3>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border border-violet-200 bg-violet-50 rounded-xl p-5">
              <h4 className="font-semibold text-violet-800 mb-2 font-mono text-sm">main</h4>
              <p className="text-sm text-violet-700">使用 main session（共享）</p>
            </div>
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
              <h4 className="font-semibold text-blue-800 mb-2 font-mono text-sm">per-peer</h4>
              <p className="text-sm text-blue-700">每个对端独立 session</p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h4 className="font-semibold text-emerald-800 mb-2 font-mono text-sm">per-channel-peer</h4>
              <p className="text-sm text-emerald-700">每个渠道+对端独立 session</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">Session Key 结构示例</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`agent:main:telegram:group:-1001234567890
agent:zu:telegram:group:-1001234567890:topic:3
agent:support:telegram:dm:42:thread:123`}</code>
            </pre>
          </div>
        </section>

        {/* Unix 哲学 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Unix 哲学</h2>

          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white mb-6">
            <blockquote className="text-xl italic mb-4">
              「CLI 才是智能体连接世界的终极接口。」
            </blockquote>
            <p className="text-slate-300">
              OpenClaw 通过 Bash 工具让 Agent 可以运行任意命令行程序，不需要为每个服务写集成。
            </p>
          </div>
        </section>

        {/* 核心工具 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">4 个核心工具</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-violet-200 bg-violet-50 rounded-xl p-5">
              <h4 className="font-semibold text-violet-800 mb-2 font-mono">Read</h4>
              <p className="text-sm text-violet-700">读取文件</p>
            </div>
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
              <h4 className="font-semibold text-blue-800 mb-2 font-mono">Write</h4>
              <p className="text-sm text-blue-700">写入文件</p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h4 className="font-semibold text-emerald-800 mb-2 font-mono">Edit</h4>
              <p className="text-sm text-emerald-700">编辑文件</p>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
              <h4 className="font-semibold text-amber-800 mb-2 font-mono">Bash</h4>
              <p className="text-sm text-amber-700">执行命令</p>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5">
            <p className="font-medium text-emerald-800 mb-2">设计意图</p>
            <p className="text-sm text-emerald-700">
              更少的工具 = 更短的 system prompt = 更少的 token 消耗 = 更快的响应
            </p>
          </div>
        </section>

        {/* MCP 支持 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">MCP 支持情况</h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-6">
            <p className="font-medium text-amber-800 mb-2">重要说明</p>
            <p className="text-sm text-amber-700">
              OpenClaw <strong>不支持 per-session MCP servers</strong>，但<strong>支持 gateway/agent 级别的 MCP 配置</strong>。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-rose-200 bg-rose-50 rounded-xl p-5">
              <h4 className="font-semibold text-rose-800 mb-2">不支持</h4>
              <p className="text-sm text-rose-700">Per-Session MCP</p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h4 className="font-semibold text-emerald-800 mb-2">支持</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• Gateway 级 MCP</li>
                <li>• Agent 级 MCP</li>
                <li>• mcporter 桥接</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 自我扩展能力 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">自我扩展能力</h2>

          <p className="text-zinc-600 mb-4">Agent 可以在运行时写、重载技能：</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-zinc-800">遇到不会的操作</h4>
                <p className="text-sm text-zinc-600">发现当前能力不足</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-zinc-800">写一个 skill</h4>
                <p className="text-sm text-zinc-600">创建新的技能文件</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-zinc-800">重载 skill</h4>
                <p className="text-sm text-zinc-600">动态加载新技能</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-zinc-800">迭代优化</h4>
                <p className="text-sm text-zinc-600">有 bug 则修改重载</p>
              </div>
            </div>
          </div>

          <div className="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-5">
            <p className="font-medium text-violet-800 mb-2">代价</p>
            <p className="text-sm text-violet-700">需要更强的模型能力（推荐 Claude Opus）</p>
          </div>
        </section>

        {/* 导航 */}
        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/workspace" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← Agent 工作区
            </a>
            <a href="/docs/feishu" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              飞书集成 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
