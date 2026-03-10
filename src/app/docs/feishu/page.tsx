import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '飞书集成 - OpenClaw 文档',
  description: '配置 OpenClaw 与飞书的集成',
}

export default function FeishuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 侧边导航占位 */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* 面包屑 */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">飞书集成</span>
        </nav>

        {/* 标题区 */}
        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            飞书集成配置
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            将 OpenClaw 接入飞书，让 AI 助手在你的飞书群中工作
          </p>
        </header>

        {/* 步骤一 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-8 h-8 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-sm font-bold">
              1
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900">创建飞书应用</h2>
          </div>

          <div className="bg-zinc-50 rounded-xl p-6 mb-6">
            <ol className="list-decimal list-inside space-y-3 text-zinc-700">
              <li className="leading-relaxed">
                访问 <a href="https://open.feishu.cn/" target="_blank" rel="noopener" className="text-violet-600 hover:text-violet-700 underline underline-offset-2">飞书开放平台</a>
              </li>
              <li className="leading-relaxed">创建企业自建应用</li>
              <li className="leading-relaxed">记录 <code className="px-1.5 py-0.5 bg-zinc-200 rounded text-sm font-mono text-zinc-800">App ID</code> 和 <code className="px-1.5 py-0.5 bg-zinc-200 rounded text-sm font-mono text-zinc-800">App Secret</code></li>
            </ol>
          </div>
        </section>

        {/* 步骤二 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-8 h-8 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-sm font-bold">
              2
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900">配置应用权限</h2>
          </div>

          <p className="text-zinc-600 mb-4">在「权限管理」中添加以下权限：</p>

          <div className="bg-zinc-50 rounded-xl p-5">
            <ul className="space-y-2">
              {['获取与更新群组信息', '接收群聊消息', '发送群聊消息', '获取用户信息'].map((perm) => (
                <li key={perm} className="flex items-center gap-2 text-zinc-700">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {perm}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 步骤三 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-8 h-8 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-sm font-bold">
              3
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900">配置事件订阅</h2>
          </div>

          <p className="text-zinc-600 mb-4">在「事件订阅」中：</p>

          <div className="bg-zinc-50 rounded-xl p-5 space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-zinc-400">•</span>
              <p className="text-zinc-700"><strong>请求网址：</strong>留空（稍后配置）</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-zinc-400">•</span>
              <p className="text-zinc-700"><strong>添加事件：</strong>消息相关事件</p>
            </div>
          </div>
        </section>

        {/* OpenClaw 配置 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-8 h-8 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-sm font-bold">
              4
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900">配置 OpenClaw</h2>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">编辑配置文件</h3>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-zinc-400 text-sm">terminal</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>nano ~/.openclaw/openclaw.json</code>
            </pre>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">飞书配置示例</h3>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">openclaw.json</span>
            </div>
            <pre className="p-4 text-sm font-mono overflow-x-auto">
              <code className="text-zinc-300">{`{
  "plugins": {
    "entries": {
      "feishu": {
        "app_id": "cli_xxxxxxxxxxxx",
        "app_secret": "xxxxxxxxxxxxxxxxxx"
      }
    }
  }
}`}</code>
            </pre>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-4">配置项说明</h3>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">参数</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">说明</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">来源</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">app_id</td>
                  <td className="px-4 py-3 text-zinc-600">飞书应用 ID</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">凭证与基础信息</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">app_secret</td>
                  <td className="px-4 py-3 text-zinc-600">飞书应用密钥</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">凭证与基础信息</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 验证连接 */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900">验证连接</h2>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">terminal</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`# 重启 Gateway
openclaw gateway restart

# 查看日志
openclaw logs --follow | grep -i "ws\\|feishu"`}</code>
            </pre>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5 mb-6">
            <p className="font-medium text-emerald-800 mb-2">连接成功的标志</p>
            <pre className="text-sm font-mono text-emerald-700 bg-emerald-100 rounded-lg p-3 overflow-x-auto">
              <code>{`feishu[default]: bot open_id resolved: ou_xxxxx
feishu[default]: WebSocket client started
[ '[ws]', 'ws client ready' ]`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            <p className="font-medium text-amber-800 mb-2">重要顺序</p>
            <ol className="list-decimal list-inside text-amber-700 space-y-1">
              <li>OpenClaw 启动 → WebSocket 连接成功</li>
              <li>飞书后台检测到连接 → 显示"已检测到连接"</li>
              <li>点击保存事件订阅</li>
            </ol>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">常见问题</h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
              <div className="bg-red-50 px-5 py-4 border-b border-zinc-200">
                <p className="font-medium text-red-800">"未检测到应用连接信息"</p>
              </div>
              <div className="p-5">
                <p className="text-zinc-600 mb-4">
                  <strong className="text-zinc-800">原因：</strong>App ID 或 App Secret 不匹配
                </p>
                <p className="text-zinc-600 mb-4">
                  <strong className="text-zinc-800">解决：</strong>
                </p>
                <div className="bg-zinc-900 rounded-xl overflow-hidden">
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{`# 查看当前配置
grep -A 5 '"feishu"' ~/.openclaw/openclaw.json

# 修改配置后重启
nano ~/.openclaw/openclaw.json
openclaw gateway restart`}</code>
                  </pre>
                </div>
              </div>
            </div>
        </section>

        {/* 导航 */}
        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/quickstart" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 快速开始
            </a>
            <a href="/docs/components" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              组件介绍 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
