import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent 工作区 - OpenClaw 文档',
  description: 'OpenClaw Agent 工作区详解 - 一切皆文本的哲学核心',
}

export default function WorkspacePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">Agent 工作区</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Agent 工作区</h1>
          <p className="text-lg text-zinc-500">
            每个 Agent 在文件系统中有一个独立的工作区目录
          </p>
          <p className="text-zinc-600 mt-3">
            所有配置、记忆、技能都以纯文本文件的形式存在。这是 OpenClaw <strong>"一切皆文本"</strong> 哲学的核心体现。
          </p>
        </header>

        {/* 目录结构 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">目录结构</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">workspace/</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`workspace/
├── AGENTS.md           # Agent 定义（身份、行为规则）
├── SOUL.md             # 灵魂/人格指令（不可变内核）
├── USER.md             # 用户信息与偏好
├── MEMORY.md           # 长期记忆存储
├── HEARTBEAT.md        # 心跳配置（定时任务）
├── TOOLS.md            # 工具定义
├── IDENTITY.md         # 身份标识
├── BOOTSTRAP.md        # 引导配置
├── memory/             # 日志目录
│   └── YYYY-MM-DD.md   # 每日 append-only 日志
├── skills/             # 本地技能目录（优先级最高）
└── sessions.json       # 会话存储`}</code>
            </pre>
          </div>
        </section>

        {/* 核心文件说明 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">核心文件说明</h2>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">文件</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">用途</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">加载时机</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">AGENTS.md</td>
                  <td className="px-4 py-3 text-zinc-600">Agent 身份定义、行为边界、回复风格</td>
                  <td className="px-4 py-3 text-zinc-500">每次 Session 启动时</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">SOUL.md</td>
                  <td className="px-4 py-3 text-zinc-600">不可变的人格内核，定义 Agent「是谁」</td>
                  <td className="px-4 py-3 text-zinc-500">每次 Session 启动时</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">USER.md</td>
                  <td className="px-4 py-3 text-zinc-600">关于用户的结构化信息：称呼、偏好、关系</td>
                  <td className="px-4 py-3 text-zinc-500">Main session 启动时</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">MEMORY.md</td>
                  <td className="px-4 py-3 text-zinc-600">长期记忆，Agent 主动写入的持久化事实</td>
                  <td className="px-4 py-3 text-zinc-500">仅 main session</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">HEARTBEAT.md</td>
                  <td className="px-4 py-3 text-zinc-600">定时任务和主动行为配置</td>
                  <td className="px-4 py-3 text-zinc-500">Gateway 启动时</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">TOOLS.md</td>
                  <td className="px-4 py-3 text-zinc-600">工具定义和配置</td>
                  <td className="px-4 py-3 text-zinc-500">每次 Session 启动时</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">skills/</td>
                  <td className="px-4 py-3 text-zinc-600">工作区级技能，优先级最高</td>
                  <td className="px-4 py-3 text-zinc-500">Session 启动时扫描</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 会话类型过滤 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">会话类型过滤</h2>
          <p className="text-zinc-600 mb-4">根据会话类型，加载的文件会有所不同：</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h4 className="font-semibold text-emerald-800 mb-2">Main Session</h4>
              <p className="text-sm text-emerald-700">加载全部文件：AGENTS.md、SOUL.md、USER.md、MEMORY.md、TOOLS.md 等</p>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
              <h4 className="font-semibold text-amber-800 mb-2">Subagent / Cron</h4>
              <p className="text-sm text-amber-700">只加载核心文件：AGENTS.md、TOOLS.md、SOUL.md、IDENTITY.md、USER.md</p>
            </div>
          </div>
        </section>

        {/* Skills 技能加载 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Skills 技能加载</h2>
          <h3 className="text-lg font-semibold text-zinc-800 mb-4">技能目录优先级（从低到高）</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg">
              <span className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-600 text-xs font-bold">1</span>
              <span className="text-sm text-zinc-700">extraDirs - 通过配置指定的额外目录</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-zinc-100 rounded-lg">
              <span className="w-6 h-6 bg-zinc-300 rounded-full flex items-center justify-center text-zinc-600 text-xs font-bold">2</span>
              <span className="text-sm text-zinc-700">bundledSkills - OpenClaw 内置技能</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">3</span>
              <span className="text-sm text-zinc-700">managedSkills - 管理的技能目录 (~/.openclaw/skills)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-lg">
              <span className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 text-xs font-bold">4</span>
              <span className="text-sm text-zinc-700">personalAgentsSkills - ~/.agents/skills 个人技能</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
              <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xs font-bold">5</span>
              <span className="text-sm text-zinc-700">projectAgentsSkills - 工作区内的 .agents/skills</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-2 border-amber-300">
              <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold">6</span>
              <span className="text-sm text-zinc-700 font-medium">workspaceSkills - 工作区内的 skills/ 目录（最高优先级）</span>
            </div>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            <p className="font-medium text-amber-800 mb-2">优先级规则</p>
            <p className="text-sm text-amber-700">低优先级先加载，高优先级后加载覆盖。工作区内的 skills/ 目录拥有最高优先级。</p>
          </div>
        </section>

        {/* 设计原则 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">设计原则</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-violet-50 rounded-xl border border-violet-100">
              <h3 className="font-semibold text-violet-800 mb-1">一切皆文本</h3>
              <p className="text-sm text-violet-600">所有配置文件都是纯 Markdown 或 JSON，可直接用文本编辑器修改</p>
            </div>
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-1">边界安全</h3>
              <p className="text-sm text-blue-600">使用 boundary-safe 机制确保文件访问安全</p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 className="font-semibold text-emerald-800 mb-1">多级缓存</h3>
              <p className="text-sm text-emerald-600">文件内容缓存和会话缓存提升性能</p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
              <h3 className="font-semibold text-amber-800 mb-1">优先级系统</h3>
              <p className="text-sm text-amber-600">技能和配置文件都有明确的加载优先级</p>
            </div>
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/memory" className="text-zinc-500 hover:text-zinc-900 transition-colors">← 记忆系统</a>
            <a href="/docs/skills" className="text-zinc-500 hover:text-zinc-900 transition-colors">技能安装 →</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
