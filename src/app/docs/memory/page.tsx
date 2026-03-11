import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '记忆系统 - OpenClaw 文档',
  description: 'OpenClaw 记忆系统详解 - 四层架构、向量搜索、Pre-Compaction 机制',
}

export default function MemoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">记忆系统</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">记忆系统</h1>
          <p className="text-lg text-zinc-500">
            记忆是 OpenClaw 区别于普通 Chatbot 的核心能力
          </p>
          <p className="text-zinc-600 mt-3">
            通过文件系统实现跨会话持久化，结合向量搜索和智能压缩，构建完整的上下文连续性。
          </p>
        </header>

        {/* 核心设计原则 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">核心设计原则</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-violet-50 rounded-xl border border-violet-100">
              <div className="text-2xl mb-2">📄</div>
              <h3 className="font-semibold text-violet-800 mb-1">纯文本存储</h3>
              <p className="text-sm text-violet-600">所有记忆都是 Markdown 文件，源文件即真相</p>
            </div>
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-blue-800 mb-1">分层持久化</h3>
              <p className="text-sm text-blue-600">从不可变身份到实时对话，四层架构</p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-semibold text-emerald-800 mb-1">智能索引</h3>
              <p className="text-sm text-emerald-600">向量 + 关键词混合搜索，支持语义回忆</p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-amber-800 mb-1">自动保护</h3>
              <p className="text-sm text-amber-600">Pre-Compaction 机制防止记忆丢失</p>
            </div>
          </div>
        </section>

        {/* 四层记忆架构 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">四层记忆架构</h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">层级</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">文件</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">生命周期</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">说明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-rose-100 text-rose-700 rounded font-mono text-xs">SOUL</span></td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">SOUL.md</td>
                  <td className="px-4 py-3 text-zinc-600">永久不可变</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">身份、价值观、核心定义</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-mono text-xs">USER</span></td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">MEMORY.md</td>
                  <td className="px-4 py-3 text-zinc-600">持久化</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">用户偏好、决策、长期事实</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-mono text-xs">DAILY</span></td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">memory/YYYY-MM-DD.md</td>
                  <td className="px-4 py-3 text-zinc-600">按日存储</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">每日交互记录，append-only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded font-mono text-xs">SESSION</span></td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">sessions.json</td>
                  <td className="px-4 py-3 text-zinc-600">会话级</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">当前对话的实时上下文</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 文件结构 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">文件结构</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">workspace/</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`workspace/
├── SOUL.md                    # 身份定义（不可变）
├── MEMORY.md                  # 长期记忆（可编辑）
├── AGENTS.md                  # Agent 行为指令
├── memory/                    # 日志目录
│   ├── 2026-03-10.md         # 每日日志
│   ├── 2026-03-11.md         # 每日日志
│   └── topics/               # 可选：主题记忆
│       └── project-alpha.md
└── .openclaw/
    └── agents/<agentId>/
        └── sessions/
            ├── sessions.json  # 会话索引
            └── <sessionId>.jsonl  # 会话转录`}</code>
            </pre>
          </div>
        </section>

        {/* 存储层详解 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">存储层详解</h2>

          <div className="space-y-6">
            {/* SOUL.md */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded font-mono text-xs">SOUL</span>
                <h3 className="text-lg font-semibold text-zinc-800">SOUL.md — 身份内核</h3>
              </div>
              <p className="text-zinc-600 mb-4 text-sm">创建后不应被修改，定义 Agent 的本质。</p>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                  <code>{`# Agent Identity

## Core Values
- Helpful, harmless, honest
- Respect user privacy
- Maintain context continuity

## Personality
- Professional but approachable
- Proactive in anticipating needs
- Clear communication style`}</code>
                </pre>
              </div>
            </div>

            {/* MEMORY.md */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-mono text-xs">USER</span>
                <h3 className="text-lg font-semibold text-zinc-800">MEMORY.md — 长期记忆</h3>
              </div>
              <p className="text-zinc-600 mb-4 text-sm">持久化存储，支持语义搜索，人类可直接编辑。</p>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                  <code>{`# Long-term Memory

## User Preferences
- Preferred language: Chinese
- Code style: TypeScript, strict mode
- Editor: VS Code with Vim keybindings

## Key Decisions
- 2026-03-01: Decided to use SQLite for local storage
- 2026-03-05: Adopted monorepo structure`}</code>
                </pre>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>重要规则：</strong>只在 main/private session 中加载（群组隔离），Agent 可主动写入，格式纯 Markdown，人类可直接编辑。
                </p>
              </div>
            </div>

            {/* Daily Logs */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-mono text-xs">DAILY</span>
                <h3 className="text-lg font-semibold text-zinc-800">Daily Logs — 每日日志</h3>
              </div>
              <p className="text-zinc-600 mb-4 text-sm">append-only，基于用户时区命名。</p>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                  <code>{`# memory/2026-03-11.md

## 10:23 - 天气查询
用户询问北京天气，回复晴转多云，15-22°C

## 14:05 - 代码审查
帮用户审查了 api/routes.ts，发现3个潜在问题：
1. SQL 注入风险在 line 45
2. 缺少错误处理
3. 性能问题：N+1 查询`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 索引与搜索 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">索引与搜索</h2>

          <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-zinc-800 mb-3">混合搜索架构</h3>
            <p className="text-zinc-600 text-sm mb-4">OpenClaw 使用<strong>向量 + 关键词混合搜索</strong>，结合两种检索策略的优势：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-violet-600 font-mono text-sm">Embedding</span>
                </div>
                <p className="text-xs text-zinc-500">文本转为向量，计算余弦相似度。擅长模糊搜索、语义关联。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 font-mono text-sm">BM25</span>
                </div>
                <p className="text-xs text-zinc-500">TF-IDF 加权关键词匹配。擅长精确匹配（文件名、命令、人名）。</p>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">搜索策略</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">原理</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">擅长场景</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-violet-600">Embedding 向量</td>
                  <td className="px-4 py-3 text-zinc-600">文本转为向量，计算余弦相似度</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">模糊搜索、语义关联（"之前讨论的部署问题"）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-600">BM25 关键词</td>
                  <td className="px-4 py-3 text-zinc-600">TF-IDF 加权关键词匹配</td>
                  <td className="px-4 py-3 text-zinc-500 text-xs">精确匹配（文件名、命令、人名）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            <p className="font-medium text-amber-800 mb-2">时间衰减 (Temporal Decay)</p>
            <p className="text-sm text-amber-700">旧记忆分数按指数衰减，确保新信息优先。半衰期默认 30 天。</p>
            <div className="mt-3 bg-amber-100 rounded-lg p-3 font-mono text-xs text-amber-800">
              Day 0: score × 1.00 (100%) → Day 30: score × 0.50 (50%) → Day 60: score × 0.25 (25%)
            </div>
          </div>
        </section>

        {/* Pre-Compaction */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-3">
            <span>🛡️</span>
            Pre-Compaction 机制
          </h2>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-6">
            <p className="font-medium text-red-800 mb-2">为什么需要？</p>
            <p className="text-sm text-red-700">
              当 Session 接近 token 限制时，LLM 会压缩或截断旧消息。如果没有保护机制，重要信息会随着上下文窗口滑动而丢失。
            </p>
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">执行流程</h3>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-zinc-800">检测阈值</h4>
                <p className="text-sm text-zinc-600">Session token 接近上限时触发</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-zinc-800">静默保存 (Silent Turn)</h4>
                <p className="text-sm text-zinc-600">Agent 在后台执行隐藏 turn，写入 memory/YYYY-MM-DD.md，返回 NO_REPLY（用户不可见）</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-zinc-800">上下文压缩</h4>
                <p className="text-sm text-zinc-600">旧消息被压缩或截断，释放 token 空间</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-zinc-800">会话继续</h4>
                <p className="text-sm text-zinc-600">重要记忆已持久化到磁盘，可通过 memory_search 检索</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">保护规则</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`1. 只追加写入：Daily Log 只能追加，不能覆盖
2. 只读保护：MEMORY.md、SOUL.md、AGENTS.md 在 flush 期间只读
3. 防重复：每个压缩周期只执行一次 flush`}</code>
            </pre>
          </div>
        </section>

        {/* 工具 API */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">工具 API</h2>

          <div className="space-y-6">
            {/* memory_search */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-800 mb-2 font-mono">memory_search</h3>
              <p className="text-zinc-600 mb-4 text-sm">语义搜索：搜索 MEMORY.md + memory/*.md</p>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                  <code>{`// 参数
{
  query: string,       // 搜索查询
  maxResults?: number, // 最大结果数（默认 6）
  minScore?: number    // 最低分数阈值
}

// 返回
{
  results: [{
    path: "memory/2026-03-10.md",
    snippet: "## 14:05 - 代码审查...",
    score: 0.85
  }]
}`}</code>
                </pre>
              </div>
            </div>

            {/* memory_get */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-800 mb-2 font-mono">memory_get</h3>
              <p className="text-zinc-600 mb-4 text-sm">精确读取：读取特定记忆文件的指定行</p>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                  <code>{`// 参数
{
  path: string,      // 文件路径
  from?: number,     // 起始行号
  lines?: number     // 读取行数
}

// 返回
{
  path: "MEMORY.md",
  text: "# Long-term Memory\\n\\n## User Preferences\\n..."
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 记忆写入流程 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">🔄 记忆写入流程</h2>

          <div className="bg-zinc-900 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center gap-2 text-center text-sm text-zinc-300 font-mono flex-wrap">
              <span className="bg-violet-600/30 px-3 py-1 rounded">用户对话</span>
              <span className="text-zinc-500">→</span>
              <span className="bg-blue-600/30 px-3 py-1 rounded">Token 累积</span>
              <span className="text-zinc-500">→</span>
              <span className="bg-amber-600/30 px-3 py-1 rounded">达到阈值</span>
              <span className="text-zinc-500">→</span>
              <span className="bg-rose-600/30 px-3 py-1 rounded">Pre-Compaction</span>
              <span className="text-zinc-500">→</span>
              <span className="bg-emerald-600/30 px-3 py-1 rounded">写入 memory/*.md</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">触发条件</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-600 font-bold">Token 触发</span>
                <span className="text-xs bg-amber-100 px-2 py-0.5 rounded">主要方式</span>
              </div>
              <p className="text-sm text-amber-700 mb-2">当剩余 token &lt; 4000 时触发</p>
              <div className="bg-amber-100 rounded-lg p-3 font-mono text-xs text-amber-800">
                flushThreshold = contextWindow - reserveFloor - softThreshold
              </div>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-rose-600 font-bold">字节触发</span>
                <span className="text-xs bg-rose-100 px-2 py-0.5 rounded">强制触发</span>
              </div>
              <p className="text-sm text-rose-700 mb-2">当会话转录 &gt; 2MB 时强制触发</p>
              <div className="bg-rose-100 rounded-lg p-3 font-mono text-xs text-rose-800">
                forceFlushTranscriptBytes = 2 * 1024 * 1024
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">Pre-Compaction 执行流程</h3>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-zinc-800">检测阈值</h4>
                <p className="text-sm text-zinc-600">Session token 接近上限时触发</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-zinc-800">解析提示词</h4>
                <p className="text-sm text-zinc-600">替换 YYYY-MM-DD 为当天日期</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-zinc-800">静默保存 (Silent Turn)</h4>
                <p className="text-sm text-zinc-600">AI 在后台执行隐藏 turn，写入 memory/YYYY-MM-DD.md，返回 NO_REPLY（用户不可见）</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-zinc-800">更新元数据</h4>
                <p className="text-sm text-zinc-600">记录 memoryFlushAt、compactionCount 等信息</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-sm flex-shrink-0">5</div>
              <div>
                <h4 className="font-medium text-zinc-800">上下文压缩</h4>
                <p className="text-sm text-zinc-600">旧消息被压缩或截断，释放 token 空间</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">6</div>
              <div>
                <h4 className="font-medium text-zinc-800">会话继续</h4>
                <p className="text-sm text-zinc-600">重要记忆已持久化到磁盘，可通过 memory_search 检索</p>
              </div>
            </div>
          </div>
        </section>

        {/* 记忆读取流程 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">📖 记忆读取流程</h2>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">新会话启动</h3>

          <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center gap-2 text-center text-sm font-mono flex-wrap">
              <span className="bg-white px-3 py-2 rounded-lg border">新会话启动</span>
              <span className="text-zinc-400">→</span>
              <span className="bg-white px-3 py-2 rounded-lg border">加载 MEMORY.md</span>
              <span className="text-zinc-400">→</span>
              <span className="bg-white px-3 py-2 rounded-lg border">加载 memory/*.md</span>
              <span className="text-zinc-400">→</span>
              <span className="bg-white px-3 py-2 rounded-lg border">建立索引</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">memory_search 执行流程</h3>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`// 1. 解析上下文
const ctx = resolveMemorySearchContext({ sessionKey, config });

// 2. 获取搜索管理器
const { manager } = await getMemorySearchManager({ cfg, agentId });

// 3. 执行混合搜索
const rawResults = await manager.search(query, {
  maxResults,
  minScore,
  sessionKey
});

// 4. 装饰引文和格式化
const decorated = decorateCitations(rawResults, includeCitations);`}</code>
            </pre>
          </div>

          <h3 className="text-lg font-semibold text-zinc-800 mb-4">混合搜索详细流程</h3>

          <div className="bg-zinc-50 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">用户查询</span>
                <span className="text-zinc-300">→</span>
                <span className="font-mono text-sm text-zinc-700">"之前讨论的部署问题"</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">并行执行</span>
                <span className="text-zinc-300">→</span>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded text-xs font-mono">向量化</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-mono">分词</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">向量搜索</span>
                <span className="text-zinc-300">→</span>
                <span className="text-sm text-zinc-600">sqlite-vec 计算余弦相似度</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">关键词搜索</span>
                <span className="text-zinc-300">→</span>
                <span className="text-sm text-zinc-600">FTS5 全文索引匹配</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">加权合并</span>
                <span className="text-zinc-300">→</span>
                <span className="font-mono text-sm text-zinc-700">70% × 向量分 + 30% × 关键词分</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">时间衰减</span>
                <span className="text-zinc-300">→</span>
                <span className="text-sm text-zinc-600">旧记忆分数 × e^(-λ×天数)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">MMR 去重</span>
                <span className="text-zinc-300">→</span>
                <span className="text-sm text-zinc-600">平衡相关性与多样性</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-right text-sm text-zinc-500">返回结果</span>
                <span className="text-zinc-300">→</span>
                <span className="font-mono text-sm text-emerald-600">Top-6 结果</span>
              </div>
            </div>
          </div>
        </section>

        {/* 完整工作流程 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">⚙️ 完整工作流程</h2>

          <div className="space-y-8">
            {/* 记录阶段 */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 text-xs">1</span>
                记录阶段
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 用户对话不断积累在 Session 中</li>
                <li>• 当接近上下文窗口时触发 Pre-Compaction</li>
                <li>• AI 提取重要记忆写入 memory/YYYY-MM-DD.md</li>
              </ul>
            </div>

            {/* 索引阶段 */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs">2</span>
                索引阶段
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 文件变化被监听器捕获（watch: true）</li>
                <li>• 内容被分割成 chunks（400 tokens，重叠 80）</li>
                <li>• 生成嵌入向量并存入 SQLite（sqlite-vec）</li>
                <li>• 建立全文搜索索引（FTS5）</li>
              </ul>
            </div>

            {/* 搜索阶段 */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xs">3</span>
                搜索阶段
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 用户提问时执行混合搜索</li>
                <li>• 向量搜索找到语义相似的内容</li>
                <li>• 关键词搜索找到精确匹配</li>
                <li>• 结果按权重融合、时间衰减、MMR 排序</li>
              </ul>
            </div>

            {/* 维护阶段 */}
            <div className="border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs">4</span>
                维护阶段
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 定期清理和优化索引</li>
                <li>• 管理会话生命周期</li>
                <li>• 更新技能快照</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 默认配置参数 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">⚙️ 默认配置参数</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`// Pre-Compaction 配置
softThresholdTokens: 4000,        // 软阈值（触发刷新）
forceFlushTranscriptBytes: 2MB,   // 强制刷新的字节阈值
reserveTokensFloor: 4000          // 保留 token 下限

// 搜索配置
maxResults: 6,                    // 最大结果数
minScore: 0.35,                   // 最低分数阈值
hybrid: {
  vectorWeight: 0.7,              // 向量搜索权重
  textWeight: 0.3,                // 关键词搜索权重
  mmr: { enabled: true, lambda: 0.7 },
  temporalDecay: { enabled: true, halfLifeDays: 30 }
}

// 分块配置
chunking: {
  tokens: 400,                    // 每块 token 数
  overlap: 80                     // 块重叠
}

// 同步配置
sync: {
  onSessionStart: true,           // 会话开始时同步
  onSearch: true,                 // 搜索时同步
  watch: true,                    // 监听文件变化
  watchDebounceMs: 1500           // 防抖时间
}`}</code>
            </pre>
          </div>
        </section>

        {/* CLI 命令 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">CLI 命令</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">terminal</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`# 搜索记忆
openclaw memory search "API 重构"

# 检查索引状态
openclaw memory --index

# 详细调试信息
openclaw memory --deep --json

# 强制重建索引
openclaw memory --rebuild`}</code>
            </pre>
          </div>
        </section>

        {/* 配置建议 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">配置建议</h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">场景</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">vectorWeight</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">textWeight</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">MMR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 text-zinc-700">代码搜索</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.5</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.5</td>
                  <td className="px-4 py-3 text-zinc-500">off</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-700">语义回忆</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.8</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.2</td>
                  <td className="px-4 py-3 text-zinc-500">on</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-700">精确查找</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.3</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.7</td>
                  <td className="px-4 py-3 text-zinc-500">off</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-700">日常对话</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.7</td>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">0.3</td>
                  <td className="px-4 py-3 text-zinc-500">on</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 总结 */}
        <section className="mb-14">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-100">
            <h3 className="font-semibold text-violet-800 mb-3">核心思想</h3>
            <p className="text-violet-700 text-lg mb-4">
              记忆应该持久化到磁盘，而不是留在 RAM 中
            </p>
            <p className="text-violet-600 text-sm">
              这使得记忆可以：在会话间保持、长期积累知识、支持语义检索、人类可读可编辑。
            </p>
            <p className="text-violet-600 text-sm mt-3">
              通过四层架构（SOUL → USER → DAILY → SESSION）和 Pre-Compaction 保护机制，OpenClaw 实现了真正的"记忆连续性"，这是区别于普通 Chatbot 的核心竞争力。
            </p>
          </div>
        </section>

        {/* 导航 */}
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
