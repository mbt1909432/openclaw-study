import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '文档目录 - OpenClaw',
  description: 'OpenClaw 完整文档目录',
}

const docSections = [
  {
    title: '入门指南',
    icon: '🚀',
    color: 'violet',
    items: [
      { href: '/docs/installation', title: '安装指南', desc: 'Node.js 要求、快速安装、npm 安装' },
      { href: '/docs/quickstart', title: '快速开始', desc: '配置向导、Web 面板、示例对话' },
    ]
  },
  {
    title: '配置指南',
    icon: '⚙️',
    color: 'blue',
    items: [
      { href: '/docs/feishu', title: '飞书集成', desc: '飞书开放平台配置、连接验证' },
      { href: '/docs/api-keys', title: 'API Key 管理', desc: 'Key 存储位置、模型切换' },
      { href: '/docs/multi-gateway', title: '多 Gateway 配置', desc: '救援机器人、完全隔离架构' },
    ]
  },
  {
    title: '组件与架构',
    icon: '🏗️',
    color: 'amber',
    items: [
      { href: '/docs/architecture', title: '整体架构', desc: 'Gateway-Node-Channel 三层架构' },
      { href: '/docs/components', title: '组件介绍', desc: 'Gateway、Agent、Channels、Tools、Memory、Skills' },
      { href: '/docs/memory', title: '记忆系统', desc: '四层架构、向量搜索、Pre-Compaction' },
      { href: '/docs/workspace', title: '目录结构', desc: 'Gateway 目录、工作区、多 Profile' },
    ]
  },
  {
    title: '技能扩展',
    icon: '📦',
    color: 'emerald',
    items: [
      { href: '/docs/skills', title: '技能安装与使用', desc: 'ClawHub、baoyu-skills、API Key 配置' },
    ]
  },
  {
    title: '参考文档',
    icon: '📚',
    color: 'rose',
    items: [
      { href: '/docs/commands', title: '命令参考', desc: '常用命令速查表' },
    ]
  },
  {
    title: '故障排查',
    icon: '🔧',
    color: 'slate',
    items: [
      { href: '/docs/troubleshooting', title: '常见问题', desc: '端口冲突、连接问题、认证失败' },
    ]
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'hover:border-violet-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'hover:border-blue-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'hover:border-amber-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'hover:border-emerald-200' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'hover:border-rose-200' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-600', border: 'hover:border-slate-300' },
}

export default function DocsIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-violet-200 group-hover:shadow-violet-300 transition-shadow">
              O
            </div>
            <span className="font-semibold text-slate-800 group-hover:text-violet-600 transition-colors">OpenClaw</span>
          </Link>
          <div className="flex items-center gap-8">
            <span className="text-sm text-violet-600 font-medium">文档</span>
            <a href="https://docs.openclaw.ai/" target="_blank" rel="noopener" className="text-sm text-slate-500 hover:text-violet-600 transition-colors">
              官方文档
            </a>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* 标题 */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">OpenClaw 文档</h1>
          <p className="text-slate-500">从安装到进阶配置，一站式学习 OpenClaw</p>
        </div>

        {/* 文档卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docSections.map((section) => {
            const colors = colorMap[section.color]
            return (
              <div
                key={section.title}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
              >
                <div className="p-5 border-b border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <span className="text-xl">{section.icon}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-slate-800">{section.title}</h2>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between p-3 rounded-xl ${colors.border} hover:bg-slate-50 transition-all group`}
                        >
                          <div>
                            <div className={`font-medium text-slate-700 group-hover:${colors.text} transition-colors`}>
                              {item.title}
                            </div>
                            <div className="text-sm text-slate-400 mt-0.5">{item.desc}</div>
                          </div>
                          <svg className="w-4 h-4 text-slate-300 group-hover:text-violet-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* LLM 索引卡片 */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🤖</span>
                  <h3 className="text-xl font-semibold text-white">LLM 友好索引</h3>
                </div>
                <p className="text-slate-400 mb-6 max-w-md">
                  供 AI 模型索引使用的纯文本格式文档，方便 Claude、GPT 等模型理解和使用 OpenClaw
                </p>
                <Link
                  href="/llms.txt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-800 rounded-xl font-medium hover:bg-violet-50 transition-colors"
                >
                  <span>查看 llms.txt</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 底部 */}
      <footer className="border-t border-slate-100 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>OpenClaw 文档</span>
            <div className="flex items-center gap-4">
              <a href="https://docs.openclaw.ai/" target="_blank" rel="noopener" className="hover:text-violet-600 transition-colors">官方文档</a>
              <a href="https://github.com/openclaw-ai/openclaw" target="_blank" rel="noopener" className="hover:text-violet-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
