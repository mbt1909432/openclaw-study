import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '技能安装 - OpenClaw 文档',
  description: '从 ClawHub 安装和使用 OpenClaw 技能',
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">技能安装</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">技能安装与使用</h1>
          <p className="text-lg text-zinc-500">扩展你的 AI 助手能力</p>
        </header>

        {/* 什么是技能 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">什么是技能（Skills）？</h2>
          <p className="text-zinc-600 leading-relaxed">
            技能是 OpenClaw 的扩展模块，可以让你的 AI 助手获得更多能力，比如生成图片、发布内容到社交平台、翻译文档等。
          </p>
        </section>

        {/* 安装方法 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">安装技能</h2>

          <div className="space-y-6">
            <div className="p-6 border border-zinc-200 rounded-xl">
              <h3 className="text-lg font-medium text-zinc-800 mb-4 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded font-normal">推荐</span>
                方法一：通过对话安装
              </h3>
              <p className="text-zinc-600 mb-3">直接告诉机器人你想安装什么技能：</p>
              <div className="bg-zinc-50 rounded-lg p-4 font-mono text-sm text-zinc-700">
                @机器人 安装 find-skill
              </div>
            </div>

            <div className="p-6 border border-zinc-200 rounded-xl">
              <h3 className="text-lg font-medium text-zinc-800 mb-4">方法二：从 ClawHub 安装</h3>
              <p className="text-zinc-600 mb-3">ClawHub 是 OpenClaw 的技能市场：</p>
              <div className="flex items-center gap-4 mb-4">
                <a href="https://clawhub.ai" target="_blank" rel="noopener" className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm hover:bg-violet-700 transition-colors">
                  访问 ClawHub
                </a>
              </div>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300">
                  <code>{`clawhub install find-skill
clawhub install baoyu-image-gen`}</code>
                </pre>
              </div>
            </div>

            <div className="p-6 border border-zinc-200 rounded-xl">
              <h3 className="text-lg font-medium text-zinc-800 mb-4">方法三：从 GitHub 安装</h3>
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <pre className="p-4 text-sm font-mono text-zinc-300">
                  <code>npx skills add jimliu/baoyu-skills</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 技能目录 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">技能目录结构</h2>
          <p className="text-zinc-600 mb-4">安装后的技能存放在：</p>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`~/.openclaw/workspace/skills/
└── find-skill/
    ├── SKILL.md         # skill 指令文件
    ├── _meta.json       # 元数据
    └── .clawhub/        # clawhub 锁文件`}</code>
            </pre>
          </div>
        </section>

        {/* baoyu-skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">推荐技能包：baoyu-skills</h2>
          <p className="text-zinc-600 mb-4">
            <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener" className="text-violet-600 hover:underline">
              baoyu-skills
            </a> 是一个功能丰富的技能包：
          </p>

          <h3 className="text-lg font-medium text-zinc-800 mb-4">内容生成技能</h3>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">技能</th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">功能</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {[
                  ['baoyu-xhs-images', '小红书风格图文生成'],
                  ['baoyu-infographic', '信息图生成（20 种布局）'],
                  ['baoyu-cover-image', '文章封面图生成'],
                  ['baoyu-slide-deck', 'PPT 幻灯片生成'],
                  ['baoyu-comic', '知识漫画创作'],
                  ['baoyu-article-illustrator', '文章插图生成'],
                ].map(([skill, desc]) => (
                  <tr key={skill}>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">{skill}</td>
                    <td className="px-4 py-3 text-zinc-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-4">发布技能</h3>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-100">
                {[
                  ['baoyu-post-to-x', '发布到 X (Twitter)'],
                  ['baoyu-post-to-wechat', '发布到微信公众号'],
                  ['baoyu-post-to-weibo', '发布到微博'],
                ].map(([skill, desc]) => (
                  <tr key={skill}>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">{skill}</td>
                    <td className="px-4 py-3 text-zinc-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-4">AI 生成技能</h3>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="px-4 py-3 font-mono text-violet-600 text-xs">baoyu-image-gen</td>
                  <td className="px-4 py-3 text-zinc-600">AI 图像生成（支持 OpenAI、Google、阿里云）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium text-zinc-800 mb-4">工具技能</h3>
          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-100">
                {[
                  ['baoyu-url-to-markdown', '网页转 Markdown'],
                  ['baoyu-translate', '文章翻译'],
                  ['baoyu-markdown-to-html', 'Markdown 转 HTML'],
                  ['baoyu-compress-image', '图片压缩'],
                  ['baoyu-format-markdown', 'Markdown 格式化'],
                ].map(([skill, desc]) => (
                  <tr key={skill}>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">{skill}</td>
                    <td className="px-4 py-3 text-zinc-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* API Key 配置 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">配置 API Key</h2>
          <p className="text-zinc-600 mb-4">某些技能需要 API Key，配置方法：</p>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <pre className="p-4 text-sm font-mono text-zinc-300">
              <code>{`# 用户级配置
mkdir -p ~/.baoyu-skills
cat > ~/.baoyu-skills/.env << 'EOF'
# OpenAI
OPENAI_API_KEY=sk-xxx

# Google
GOOGLE_API_KEY=xxx

# 阿里云通义万象
DASHSCOPE_API_KEY=sk-xxx

# 微信公众号
WECHAT_APP_ID=your_app_id
WECHAT_APP_SECRET=your_app_secret
EOF`}</code>
            </pre>
          </div>
        </section>

        {/* 重启生效 */}
        <section className="mb-12">
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            <p className="font-medium text-amber-800 mb-2">安装后需要重启</p>
            <p className="text-amber-700 text-sm mb-3">安装新技能后需要重启 Gateway 才能生效：</p>
            <div className="bg-amber-100 rounded-lg p-3 font-mono text-sm text-amber-800">
              openclaw gateway restart
            </div>
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/workspace" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 目录结构
            </a>
            <a href="/docs/commands" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              命令参考 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
