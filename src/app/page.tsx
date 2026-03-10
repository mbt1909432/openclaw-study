import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦁</span>
            <span className="font-bold text-xl">OpenClaw 文档</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/docs" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              文档
            </Link>
            <a
              href="https://docs.openclaw.ai/"
              target="_blank"
              rel="noopener"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              官方文档
            </a>
            <a
              href="https://github.com/openclaw-ai/openclaw"
              target="_blank"
              rel="noopener"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            OpenClaw 使用指南
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            从零开始，手把手教你安装和配置 OpenClaw AI Agent 网关平台
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/docs/installation"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              开始安装
            </Link>
            <Link
              href="/docs"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              查看文档
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">面向小白</h3>
            <p className="text-gray-600 dark:text-gray-400">
              详细的步骤说明，即使没有技术背景也能跟着操作
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">🔌</div>
            <h3 className="text-lg font-semibold mb-2">飞书集成</h3>
            <p className="text-gray-600 dark:text-gray-400">
              完整的飞书配置教程，快速搭建企业 AI 助手
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-semibold mb-2">LLM 友好</h3>
            <p className="text-gray-600 dark:text-gray-400">
              提供 llms.txt 格式，方便 AI 模型索引和理解
            </p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">快速开始</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h4 className="font-medium mb-2">安装 Node.js</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                下载 Node.js 22+ 并安装
              </p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h4 className="font-medium mb-2">安装 OpenClaw</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                npm install -g openclaw
              </p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h4 className="font-medium mb-2">运行配置向导</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                openclaw onboard --install-daemon
              </p>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">文档目录</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/docs/installation" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <h4 className="font-medium mb-1">安装指南</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Node.js 要求、安装方法</p>
            </Link>
            <Link href="/docs/quickstart" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <h4 className="font-medium mb-1">快速开始</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">配置向导、Web 面板</p>
            </Link>
            <Link href="/docs/feishu" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <h4 className="font-medium mb-1">飞书集成</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">开放平台配置、连接验证</p>
            </Link>
            <Link href="/docs/troubleshooting" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <h4 className="font-medium mb-1">故障排查</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">常见问题与解决方案</p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p className="mb-2">
            OpenClaw 是一个开源的 AI Agent 网关平台
          </p>
          <p>
            <a href="https://docs.openclaw.ai/" className="text-blue-600 dark:text-blue-400 hover:underline">官方文档</a>
            {' · '}
            <a href="https://github.com/openclaw-ai/openclaw" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
            {' · '}
            <a href="https://www.npmjs.com/package/openclaw" className="text-blue-600 dark:text-blue-400 hover:underline">npm</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
