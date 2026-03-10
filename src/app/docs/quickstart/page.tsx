import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '快速开始 - OpenClaw 文档',
  description: '使用配置向导快速上手 OpenClaw',
}

export default function QuickstartPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">快速开始</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">快速开始</h1>
          <p className="text-lg text-zinc-500">完成安装后，运行配置向导开始使用</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">运行配置向导</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">terminal</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 完整安装向导 + 安装系统服务
openclaw onboard --install-daemon

# 仅运行配置向导
openclaw onboard`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">配置步骤</h2>

          <div className="space-y-4">
            {[
              { num: 1, title: '安全警告', desc: '确认你了解安全影响', cmd: '确认安全警告？Yes/No' },
              { num: 2, title: '配置模式', desc: '初学者选择 QuickStart', cmd: '选择模式：QuickStart / Advanced' },
              { num: 3, title: '模型供应商', desc: '选择 AI 供应商（OpenAI、Anthropic、OpenRouter 等）', items: ['Anthropic (Claude)', 'OpenAI (GPT)', 'OpenRouter (多模型)', '其他供应商...'] },
              { num: 4, title: '消息平台', desc: '配置你的渠道', items: ['飞书/Lark', 'Discord', 'Slack', 'Telegram'] },
              { num: 5, title: '技能', desc: '可选：启用托管技能', items: null },
              { num: 6, title: '钩子', desc: '可选：配置事件钩子', items: null },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-sm font-bold">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-zinc-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-zinc-500 mb-2">{step.desc}</p>
                  {step.items && (
                    <ul className="text-sm text-zinc-600 space-y-1">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">启动后操作</h2>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">启动 Gateway</h3>
          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 启动网关服务
openclaw gateway start

# 检查状态
openclaw status`}</code>
            </pre>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-3">访问 Web 面板</h3>
          <p className="text-zinc-600 mb-3">在浏览器中打开：</p>
          <div className="bg-zinc-100 rounded-lg px-4 py-3 font-mono text-sm text-zinc-700 inline-block">
            http://127.0.0.1:18789/
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Web 面板功能</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📊', title: '实例', desc: '查看 Gateway 运行状态、系统资源使用情况' },
              { icon: '💬', title: '会话', desc: '查看和管理对话会话，浏览历史记录' },
              { icon: '⏰', title: '定时任务', desc: '创建和管理自动化定时任务' },
              { icon: '🤖', title: 'Agent', desc: '编辑 AGENTS.md、SOUL.md、USER.md 等各种文件' },
            ].map((item) => (
              <div key={item.title} className="p-5 border border-zinc-200 rounded-xl">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-medium text-zinc-800 mb-1">{item.title}</h4>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">示例对话</h2>
          <p className="text-zinc-600 mb-4">机器人连接成功后，试试这些对话：</p>

          <div className="bg-zinc-50 rounded-xl p-5">
            <ul className="space-y-2 text-zinc-700">
              <li className="flex items-center gap-3">
                <span className="text-zinc-400">•</span>
                <code className="text-sm">"桌面有什么？"</code>
                <span className="text-sm text-zinc-500">— 查看桌面文件</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-zinc-400">•</span>
                <code className="text-sm">"北京天气？"</code>
                <span className="text-sm text-zinc-500">— 查询天气</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-zinc-400">•</span>
                <code className="text-sm">"帮我搜索一下..."</code>
                <span className="text-sm text-zinc-500">— 网页搜索</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-zinc-400">•</span>
                <code className="text-sm">"安装 find-skill"</code>
                <span className="text-sm text-zinc-500">— 安装新技能</span>
              </li>
            </ul>
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/installation" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 安装指南
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
