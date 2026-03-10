import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '安装指南 - OpenClaw 文档',
  description: '在您的系统上安装 OpenClaw AI Agent 网关',
}

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* 面包屑 */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">安装指南</span>
        </nav>

        {/* 标题区 */}
        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            安装指南
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            几分钟内完成 OpenClaw 的安装配置
          </p>
        </header>

        {/* 前提条件 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">前提条件</h2>

          <div className="bg-violet-50 border border-violet-100 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-violet-800 mb-1">Node.js 版本要求</p>
                <p className="text-violet-600">OpenClaw 需要 <strong>Node.js 22 或更高版本</strong></p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">检查 Node.js 版本</h3>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">terminal</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>node --version</code>
            </pre>
          </div>

          <p className="text-zinc-600 mb-6">如果版本低于 22，请先升级 Node.js。</p>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">安装 Node.js</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-zinc-200 rounded-xl p-5">
              <h4 className="font-medium text-zinc-800 mb-3 flex items-center gap-2">
                <span className="text-lg">🪟</span> Windows
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-zinc-600 text-sm">
                <li>从 <a href="https://nodejs.org/" target="_blank" rel="noopener" className="text-violet-600 hover:underline">nodejs.org</a> 下载</li>
                <li>选择 LTS 版本（包含 Node.js 22+）</li>
                <li>运行安装程序</li>
                <li>重启终端</li>
              </ol>
            </div>
            <div className="border border-zinc-200 rounded-xl p-5">
              <h4 className="font-medium text-zinc-800 mb-3 flex items-center gap-2">
                <span className="text-lg">🍎</span> macOS / Linux
              </h4>
              <div className="bg-zinc-900 rounded-lg p-3 text-sm font-mono text-zinc-300">
                <code>{`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* 安装 OpenClaw */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">安装 OpenClaw</h2>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">方法一：快速安装（推荐）</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-sm text-zinc-500 mb-2">macOS / Linux</p>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300">
                  <code>curl -fsSL https://openclaw.ai/install.sh | bash</code>
                </pre>
              </div>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-2">Windows (PowerShell)</p>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300">
                  <code>iwr -useb https://openclaw.ai/install.ps1 | iex</code>
                </pre>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">方法二：npm 安装</h3>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-8">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 使用 npm
npm install -g openclaw@latest

# 或使用 pnpm
pnpm add -g openclaw@latest`}</code>
            </pre>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">验证安装</h3>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`openclaw --version
openclaw --help`}</code>
            </pre>
          </div>
        </section>

        {/* 运行引导向导 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">运行引导向导</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 完整安装向导 + 安装系统服务
openclaw onboard --install-daemon

# 仅运行配置向导
openclaw onboard`}</code>
            </pre>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">向导步骤</h3>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { step: '1', title: '安全警告', desc: '确认你了解安全影响' },
                  { step: '2', title: '配置模式', desc: '初学者选择 QuickStart' },
                  { step: '3', title: '模型供应商', desc: '选择 AI 供应商（OpenAI、Anthropic、OpenRouter 等）' },
                  { step: '4', title: '消息平台', desc: '配置飞书、Discord、Slack 等' },
                  { step: '5', title: '技能', desc: '可选：启用托管技能' },
                ].map((item) => (
                  <tr key={item.step} className="border-b border-zinc-100 last:border-b-0">
                    <td className="px-4 py-3 w-12">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-violet-100 text-violet-700 rounded text-xs font-bold">
                        {item.step}
                      </span>
                    </td>
                    <td className="px-2 py-3 font-medium text-zinc-800">{item.title}</td>
                    <td className="px-4 py-3 text-zinc-500">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 系统要求 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">系统要求</h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">资源</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">最低</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">推荐</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="px-4 py-3 text-zinc-700">CPU</td>
                  <td className="px-4 py-3 text-zinc-500">1 核</td>
                  <td className="px-4 py-3 text-zinc-800 font-medium">2 核+</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="px-4 py-3 text-zinc-700">内存</td>
                  <td className="px-4 py-3 text-zinc-500">1GB</td>
                  <td className="px-4 py-3 text-zinc-800 font-medium">2GB+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-700">磁盘</td>
                  <td className="px-4 py-3 text-zinc-500">500MB</td>
                  <td className="px-4 py-3 text-zinc-800 font-medium">2GB+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 下一步 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">下一步</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <a href="/docs/quickstart" className="group p-5 border border-zinc-200 rounded-xl hover:border-violet-300 hover:shadow-lg transition-all">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-medium text-zinc-800 group-hover:text-violet-600">快速开始</h4>
              <p className="text-sm text-zinc-500">配置向导详解</p>
            </a>
            <a href="/docs/feishu" className="group p-5 border border-zinc-200 rounded-xl hover:border-violet-300 hover:shadow-lg transition-all">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-medium text-zinc-800 group-hover:text-violet-600">飞书集成</h4>
              <p className="text-sm text-zinc-500">配置飞书机器人</p>
            </a>
            <a href="/docs/components" className="group p-5 border border-zinc-200 rounded-xl hover:border-violet-300 hover:shadow-lg transition-all">
              <div className="text-2xl mb-2">🏗️</div>
              <h4 className="font-medium text-zinc-800 group-hover:text-violet-600">组件介绍</h4>
              <p className="text-sm text-zinc-500">了解各个组件</p>
            </a>
          </div>
        </section>

        {/* 导航 */}
        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-end">
            <a href="/docs/quickstart" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              快速开始 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
