import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '目录结构 - OpenClaw 文档',
  description: 'OpenClaw 完整目录结构说明',
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
          <span className="text-zinc-900">目录结构</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">目录结构</h1>
          <p className="text-lg text-zinc-500">了解 OpenClaw 的文件组织方式</p>
        </header>

        {/* Gateway 目录 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Gateway 数据目录</h2>
          <p className="text-zinc-600 mb-4">主配置和状态数据存放在 <code className="px-1.5 py-0.5 bg-zinc-100 rounded text-sm">~/.openclaw/</code>：</p>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`~/.openclaw/
├── openclaw.json          # 主配置文件
├── .env                   # 环境变量
│
├── identity/
│   ├── device.json        # 设备身份标识
│   └── device-auth.json   # 设备认证 token
│
├── credentials/           # 渠道认证凭据
│
├── agents/
│   └── main/              # agent 运行状态
│
├── workspace/             # Agent 工作区
│
├── skills/                # 用户级自定义技能
│
├── memory/
│   └── main.sqlite        # 消息历史数据库
│
├── cron/
│   └── jobs.json          # 定时任务配置
│
├── devices/
│   ├── paired.json        # 已配对的设备
│   └── pending.json       # 等待配对的设备
│
├── canvas/
│   └── index.html         # Web Canvas 页面
│
└── logs/                  # 审计日志`}</code>
            </pre>
          </div>
        </section>

        {/* Agent 工作区 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Agent 工作区</h2>
          <p className="text-zinc-600 mb-4">每个 Agent 都有独立的工作区（workspace），这是它的"家"：</p>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`workspace/
├── .git/                  # git 版本控制（自动提交）
├── .openclaw/             # workspace 级配置
│
├── AGENTS.md              # Agent 行为规范
├── SOUL.md                # 人格定义
├── IDENTITY.md            # 名字、形象、emoji
├── USER.md                # 用户信息
├── TOOLS.md               # 本地工具备注
├── HEARTBEAT.md           # 心跳检查清单
│
├── MEMORY.md              # 长期记忆
│
└── memory/
    ├── YYYY-MM-DD.md      # 每日原始日志
    └── heartbeat-state.json`}</code>
            </pre>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-4">引导文件说明</h3>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">文件</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">用途</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">加载时机</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {[
                  ['AGENTS.md', '操作规则、优先级', '每次对话'],
                  ['SOUL.md', '人格、语气、边界', '每次对话'],
                  ['USER.md', '用户是谁、怎么称呼', '每次对话'],
                  ['IDENTITY.md', '机器人名称、风格', '每次对话'],
                  ['MEMORY.md', '长期记忆', '主会话'],
                  ['HEARTBEAT.md', '心跳检查清单', '心跳任务'],
                  ['BOOTSTRAP.md', '首次运行仪式', '仅首次'],
                ].map(([file, usage, timing]) => (
                  <tr key={file}>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">{file}</td>
                    <td className="px-4 py-3 text-zinc-600">{usage}</td>
                    <td className="px-4 py-3 text-zinc-500 text-xs">{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 多 Profile */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">多 Profile 说明</h2>
          <p className="text-zinc-600 mb-4">使用 <code className="px-1.5 py-0.5 bg-zinc-100 rounded text-sm">--profile</code> 参数创建独立配置：</p>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">Profile</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">数据目录</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">工作区</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">默认</td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-600">~/.openclaw/</td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-600">~/.openclaw/workspace/</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">rescue</td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-600">~/.openclaw-rescue/</td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-600">~/.openclaw/workspace-rescue/</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-800">coding</td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-600">~/.openclaw/</td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-600">~/.openclaw/workspace-coding/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 编辑文件 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">如何编辑工作区文件</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 border border-zinc-200 rounded-xl">
              <h3 className="font-medium text-zinc-800 mb-3 flex items-center gap-2">
                <span className="text-lg">🌐</span>
                方法一：Web 面板
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-600">
                <li>打开 http://127.0.0.1:18789/</li>
                <li>点击「Agent」板块</li>
                <li>选择要编辑的文件</li>
                <li>修改后保存</li>
              </ol>
            </div>
            <div className="p-5 border border-zinc-200 rounded-xl">
              <h3 className="font-medium text-zinc-800 mb-3 flex items-center gap-2">
                <span className="text-lg">📝</span>
                方法二：直接编辑
              </h3>
              <div className="bg-zinc-900 rounded-lg p-3 text-sm font-mono text-zinc-300">
                <code>{`nano ~/.openclaw/workspace/SOUL.md
nano ~/.openclaw/workspace/USER.md`}</code>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/components" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 组件介绍
            </a>
            <a href="/docs/skills" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              技能安装 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
