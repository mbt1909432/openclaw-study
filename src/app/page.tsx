import Link from 'next/link'

export default function Home() {
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
            <Link href="/docs" className="text-sm text-slate-500 hover:text-violet-600 transition-colors">
              文档
            </Link>
            <a href="https://docs.openclaw.ai/" target="_blank" rel="noopener" className="text-sm text-slate-500 hover:text-violet-600 transition-colors">
              官方文档
            </a>
            <a href="https://github.com/openclaw-ai/openclaw" target="_blank" rel="noopener" className="text-sm px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-violet-600 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 text-violet-600 text-sm font-medium rounded-full mb-6">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
              面向小白的 OpenClaw 使用指南
            </div>
            <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
              从零开始<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">配置你的 AI 助手</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
              OpenClaw 是一个开源的 AI Agent 网关平台。本指南将手把手教你安装、配置和使用，即使没有技术背景也能轻松上手。
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/docs/installation"
                className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-violet-600 transition-all hover:shadow-lg hover:shadow-violet-200 active:scale-95"
              >
                开始安装
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 bg-white text-slate-700 rounded-xl font-medium border border-slate-200 hover:border-violet-300 hover:text-violet-600 transition-all"
              >
                浏览文档
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 特性卡片 */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">零基础友好</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                  每个步骤都有详细说明，配合截图和命令示例，跟着做就能成功
              </p>
            </div>
            <div className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">飞书集成</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                  完整的飞书配置教程，快速搭建企业专属的 AI 助手
              </p>
            </div>
            <div className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">LLM 友好</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                  提供 llms.txt 格式文档，方便 AI 模型索引和理解内容
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 快速开始 */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-8">三步开始使用</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative">
                  <div className="text-6xl font-bold text-white/10 absolute -top-3 -left-1">01</div>
                  <div className="relative pt-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-violet-400">⬇</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">安装 Node.js</h4>
                    <p className="text-slate-400 text-sm">下载并安装 Node.js 22 或更高版本</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-6xl font-bold text-white/10 absolute -top-3 -left-1">02</div>
                  <div className="relative pt-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-violet-400">⚡</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">安装 OpenClaw</h4>
                    <code className="text-violet-400 text-sm bg-white/5 px-2 py-1 rounded">npm install -g openclaw</code>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-6xl font-bold text-white/10 absolute -top-3 -left-1">03</div>
                  <div className="relative pt-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-violet-400">🚀</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">运行配置向导</h4>
                    <code className="text-violet-400 text-sm bg-white/5 px-2 py-1 rounded">openclaw onboard</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 小红书关注 */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-rose-100">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <div className="bg-white p-5 rounded-2xl shadow-xl shadow-rose-200/50">
                  <img
                    src="/xiaohongshu-qr.jpg"
                    alt="小红书二维码"
                    className="w-56 h-56 rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 text-sm font-medium rounded-full mb-5">
                  <span>📕</span>
                  <span>扫码关注小红书</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  获取更多 AI 实用技巧
                </h3>
                <p className="text-lg text-slate-600 mb-6 max-w-lg">
                  扫码关注我的小红书账号，分享 OpenClaw 使用技巧、AI 工具推荐、效率提升方法等干货内容。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white text-slate-700 text-sm rounded-full border border-rose-100 shadow-sm">
                    🤖 AI 工具教程
                  </span>
                  <span className="px-4 py-2 bg-white text-slate-700 text-sm rounded-full border border-rose-100 shadow-sm">
                    💡 效率提升
                  </span>
                  <span className="px-4 py-2 bg-white text-slate-700 text-sm rounded-full border border-rose-100 shadow-sm">
                    🎯 实战案例
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 文档卡片 */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">文档目录</h2>
            <Link href="/docs" className="text-sm text-violet-600 hover:text-violet-700 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/docs/installation" className="group p-5 bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 transition-all">
              <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-violet-100 transition-colors">
                  <span>📦</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">安装指南</h4>
              <p className="text-slate-400 text-sm">环境要求与安装方法</p>
            </Link>
            <Link href="/docs/quickstart" className="group p-5 bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 transition-all">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  <span>🚀</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">快速开始</h4>
              <p className="text-slate-400 text-sm">配置向导与示例对话</p>
            </Link>
            <Link href="/docs/feishu" className="group p-5 bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 transition-all">
              <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-cyan-100 transition-colors">
                  <span>💬</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">飞书集成</h4>
              <p className="text-slate-400 text-sm">飞书配置与连接验证</p>
            </Link>
            <Link href="/docs/components" className="group p-5 bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 transition-all">
              <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
                  <span>🏗️</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">组件介绍</h4>
              <p className="text-slate-400 text-sm">Gateway、Agent、Skills</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 底部 */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  O
              </div>
              <span className="text-slate-500 text-sm">OpenClaw 文档</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="https://docs.openclaw.ai/" target="_blank" rel="noopener" className="hover:text-violet-600 transition-colors">官方文档</a>
              <a href="https://github.com/openclaw-ai/openclaw" target="_blank" rel="noopener" className="hover:text-violet-600 transition-colors">GitHub</a>
              <a href="https://clawhub.ai/" target="_blank" rel="noopener" className="hover:text-violet-600 transition-colors">ClawHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
