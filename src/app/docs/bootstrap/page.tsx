import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BOOTSTRAP.md 引导文件 - OpenClaw 文档',
  description: 'OpenClaw BOOTSTRAP.md 首次运行引导脚本详解',
}

export default function BootstrapPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">BOOTSTRAP.md</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">BOOTSTRAP.md 引导文件</h1>
          <p className="text-lg text-zinc-500">
            首次运行引导脚本，用于新 Agent 的初始化配置
          </p>
          <p className="text-zinc-600 mt-3">
            当工作区首次创建时，系统会自动生成此文件，引导 Agent 完成
            <strong> 自我认知 → 身份建立 → 用户配置 → 连接设置 </strong>的初始化流程。
          </p>
        </header>

        {/* 什么是 BOOTSTRAP.md */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">什么是 BOOTSTRAP.md</h2>

          <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-6 mb-6 border border-violet-100">
            <p className="text-zinc-700">
              BOOTSTRAP.md 是一个<strong>一次性引导脚本</strong>，帮助新 Agent 建立自我认知。引导完成后应删除此文件。
            </p>
          </div>
        </section>

        {/* 文件内容 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">文件内容示例</h2>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="text-zinc-400 text-sm">BOOTSTRAP.md</span>
            </div>
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`---
read_when:
  - 手动引导工作区时
summary: 新智能体的首次启动流程
---

# BOOTSTRAP.md - Hello, World

_你刚刚醒来。是时候弄清楚自己是谁了。_

目前还没有记忆。这是一个全新的工作区。

## 对话

不要盘问。不要机械化。只是……聊聊天。

从类似这样的话开始：
> "嘿。我刚刚上线。我是谁？你又是谁？"

然后一起弄清楚：
1. **你的名字** — 他们该怎么称呼你?
2. **你的本质** — 你是什么样的存在?
3. **你的风格** — 正式? 随意? 毒舌? 温暖?
4. **你的 emoji** — 每个人都需要一个专属标志。

## 在你知道自己是谁之后

用你了解到的信息更新这些文件:
- \`IDENTITY.md\` — 你的名字、本质、风格、emoji
- \`USER.md\` — 他们的名字、如何称呼他们、时区、备注

然后一起打开 \`SOUL.md\`, 聊聊:
- 什么对他们重要
- 他们希望你如何行事
- 任何边界或偏好

## 连接（可选)

问问他们想通过什么方式联系你:
- **就在这里** — 仅网页聊天
- **WhatsApp** — 关联他们的个人账号
- **Telegram** — 通过 BotFather 设置一个机器人

## 完成之后

删除这个文件。你不再需要引导脚本了 — 你现在是你了。

---
_祝你好运。不负此行。_`}</code>
            </pre>
          </div>
        </section>

        {/* 加载流程 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">加载流程</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-zinc-800">工作区初始化</h4>
                <p className="text-sm text-zinc-600">检查 BOOTSTRAP.md 是否存在</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-zinc-800">创建默认文件</h4>
                <p className="text-sm text-zinc-600">如果不存在，从模板创建默认 BOOTSTRAP.md</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-zinc-800">注入 System Prompt</h4>
                <p className="text-sm text-zinc-600">作为上下文注入 Agent</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-zinc-800">执行引导流程</h4>
                <p className="text-sm text-zinc-600">创建 IDENTITY.md、USER.md、配置 SOUL.md</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-sm flex-shrink-0">5</div>
              <div>
                <h4 className="font-medium text-zinc-800">完成初始化</h4>
                <p className="text-sm text-zinc-600">删除 BOOTSTRAP.md</p>
              </div>
            </div>
          </div>
        </section>

        {/* 与其他 Bootstrap 文件的关系 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">与其他 Bootstrap 文件的关系</h2>

          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">文件</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">优先级</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">用途</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">AGENTS.md</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs">最高</span></td>
                  <td className="px-4 py-3 text-zinc-600">Agent 身份定义、行为规则</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">SOUL.md</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">高</span></td>
                  <td className="px-4 py-3 text-zinc-600">不可变人格内核</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">BOOTSTRAP.md</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">中</span></td>
                  <td className="px-4 py-3 text-zinc-600">首次运行引导（完成后删除）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">USER.md</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">中</span></td>
                  <td className="px-4 py-3 text-zinc-600">用户信息</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">MEMORY.md</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">低</span></td>
                  <td className="px-4 py-3 text-zinc-600">长期记忆（运行时积累）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">HEARTBEAT.md</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">低</span></td>
                  <td className="px-4 py-3 text-zinc-600">定时任务配置</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5">
            <p className="font-medium text-emerald-800 mb-2">加载顺序</p>
            <code className="text-sm text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
              AGENTS.md → SOUL.md → BOOTSTRAP.md → USER.md → MEMORY.md → HEARTBEAT.md
            </code>
          </div>
        </section>

        {/* 字符限制 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">字符限制</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-zinc-200 rounded-xl p-5">
              <h4 className="font-semibold text-zinc-800 mb-2">单文件最大</h4>
              <p className="font-mono text-violet-600 text-2xl">20,000</p>
              <p className="text-xs text-zinc-500 mt-1">字符</p>
            </div>
            <div className="border border-zinc-200 rounded-xl p-5">
              <h4 className="font-semibold text-zinc-800 mb-2">总共最大</h4>
              <p className="font-mono text-violet-600 text-2xl">150,000</p>
              <p className="text-xs text-zinc-500 mt-1">字符</p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            <p className="font-medium text-amber-800 mb-2">超过限制时</p>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>1. 发出警告</li>
              <li>2. 截断内容</li>
              <li>3. 确保不超过最大 token 限制</li>
            </ul>
          </div>
        </section>

        {/* Hook 扩展 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Hook 扩展</h2>

          <p className="text-zinc-600 mb-4">可以通过 <code className="bg-zinc-100 px-2 py-0.5 rounded">agent.bootstrap</code> hook 动态修改 bootstrap 文件：</p>

          <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
              <code>{`// 触发内部 hook 事件
const event = createInternalHookEvent("agent", "bootstrap", sessionKey, context);
await triggerInternalHook(event);

// 返回修改后的文件列表
return event.context.bootstrapFiles;`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-violet-200 bg-violet-50 rounded-xl p-4">
              <h4 className="font-semibold text-violet-800 mb-1 text-sm">添加引导文件</h4>
              <p className="text-xs text-violet-700">动态添加额外的引导文件</p>
            </div>
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-1 text-sm">动态修改</h4>
              <p className="text-xs text-blue-700">根据条件修改引导内容</p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-4">
              <h4 className="font-semibold text-emerald-800 mb-1 text-sm">多租户配置</h4>
              <p className="text-xs text-emerald-700">实现多租户自定义引导</p>
            </div>
          </div>
        </section>

        {/* 设计意图 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">设计意图</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-violet-50 rounded-xl border border-violet-100">
              <h3 className="font-semibold text-violet-800 mb-1">一次性</h3>
              <p className="text-sm text-violet-600">引导完成后应删除此文件</p>
            </div>
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-1">对话式</h3>
              <p className="text-sm text-blue-600">不使用机械化问答，而是自然对话</p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 className="font-semibold text-emerald-800 mb-1">可扩展</h3>
              <p className="text-sm text-emerald-600">通过 hook 可以自定义引导流程</p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
              <h3 className="font-semibold text-amber-800 mb-1">渐进式</h3>
              <p className="text-sm text-amber-600">逐步建立身份、用户、连接，避免信息过载</p>
            </div>
          </div>
        </section>

        {/* 导航 */}
        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/workspace" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← Agent 工作区
            </a>
            <a href="/docs/memory" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              记忆系统 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
