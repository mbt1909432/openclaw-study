import Link from 'next/link'

export default function DocsIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">OpenClaw 文档</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 入门指南 */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            入门指南
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/docs/installation" className="text-blue-600 dark:text-blue-400 hover:underline">
                安装指南
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">Node.js 要求、快速安装、npm 安装</p>
            </li>
            <li>
              <Link href="/docs/quickstart" className="text-blue-600 dark:text-blue-400 hover:underline">
                快速开始
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">配置向导、Web 面板、示例对话</p>
            </li>
          </ul>
        </section>

        {/* 配置指南 */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            配置指南
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/docs/feishu" className="text-blue-600 dark:text-blue-400 hover:underline">
                飞书集成
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">飞书开放平台配置、连接验证</p>
            </li>
            <li>
              <Link href="/docs/api-keys" className="text-blue-600 dark:text-blue-400 hover:underline">
                API Key 管理
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">Key 存储位置、模型切换</p>
            </li>
            <li>
              <Link href="/docs/multi-gateway" className="text-blue-600 dark:text-blue-400 hover:underline">
                多 Gateway 配置
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">救援机器人、完全隔离架构</p>
            </li>
          </ul>
        </section>

        {/* 组件与架构 */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🏗️</span>
            组件与架构
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/docs/components" className="text-blue-600 dark:text-blue-400 hover:underline">
                组件介绍
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gateway、Agent、Channels、Tools、Memory、Skills</p>
            </li>
            <li>
              <Link href="/docs/workspace" className="text-blue-600 dark:text-blue-400 hover:underline">
                目录结构
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gateway 目录、工作区、多 Profile</p>
            </li>
          </ul>
        </section>

        {/* 技能扩展 */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📦</span>
            技能扩展
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/docs/skills" className="text-blue-600 dark:text-blue-400 hover:underline">
                技能安装与使用
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">ClawHub、baoyu-skills、API Key 配置</p>
            </li>
          </ul>
        </section>

        {/* 参考文档 */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📚</span>
            参考文档
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/docs/commands" className="text-blue-600 dark:text-blue-400 hover:underline">
                命令参考
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">常用命令速查表</p>
            </li>
          </ul>
        </section>

        {/* 故障排查 */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🔧</span>
            故障排查
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/docs/troubleshooting" className="text-blue-600 dark:text-blue-400 hover:underline">
                常见问题
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">端口冲突、连接问题、认证失败</p>
            </li>
          </ul>
        </section>
      </div>

      {/* LLM 索引 */}
      <section className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-2">🤖 LLM 友好索引</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          供 AI 模型索引使用的纯文本格式文档
        </p>
        <Link
          href="/llms.txt"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          查看 llms.txt
        </Link>
      </section>
    </div>
  )
}
