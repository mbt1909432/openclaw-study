import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '技能安装 - OpenClaw 文档',
  description: '从 ClawHub 安装和使用 OpenClaw 技能',
}

export default function SkillsPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>技能安装与使用</h1>

      <section>
        <h2>什么是技能（Skills）？</h2>
        <p>
          技能是 OpenClaw 的扩展模块，可以让你的 AI 助手获得更多能力，比如生成图片、发布内容到社交平台、翻译文档等。
        </p>
      </section>

      <section>
        <h2>安装技能</h2>

        <h3>方法一：通过对话安装（推荐）</h3>
        <p>直接告诉机器人你想安装什么技能：</p>
        <pre><code>{`@机器人 安装 find-skill
@机器人 安装 baoyu-image-gen`}</code></pre>

        <h3>方法二：从 ClawHub 安装</h3>
        <p>ClawHub 是 OpenClaw 的技能市场：</p>
        <pre><code>{`# 访问技能市场
https://clawhub.ai/

# 命令行安装
clawhub install find-skill
clawhub install baoyu-image-gen`}</code></pre>

        <h3>方法三：从 GitHub 安装</h3>
        <pre><code>{`# 快速安装技能包
npx skills add jimliu/baoyu-skills`}</code></pre>
      </section>

      <section>
        <h2>技能目录结构</h2>
        <p>安装后的技能存放在：</p>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4">
          <pre className="text-sm mb-0">{`~/.openclaw/workspace/skills/
└── find-skill/          ← 用户自安装的 skill
    ├── SKILL.md         ← skill 指令文件
    ├── _meta.json       ← 元数据（版本等）
    └── .clawhub/        ← clawhub 锁文件`}</pre>
        </div>
        <p>
          内置技能存放在系统目录：<code>/usr/lib/node_modules/openclaw/skills/</code>
        </p>
      </section>

      <section>
        <h2>推荐技能包：baoyu-skills</h2>
        <p>
          <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">baoyu-skills</a> 是一个功能丰富的技能包，包含：
        </p>

        <h3>内容生成技能</h3>
        <table>
          <thead>
            <tr>
              <th>技能</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>baoyu-xhs-images</code></td>
              <td>小红书风格图文生成</td>
            </tr>
            <tr>
              <td><code>baoyu-infographic</code></td>
              <td>信息图生成（20 种布局）</td>
            </tr>
            <tr>
              <td><code>baoyu-cover-image</code></td>
              <td>文章封面图生成</td>
            </tr>
            <tr>
              <td><code>baoyu-slide-deck</code></td>
              <td>PPT 幻灯片生成</td>
            </tr>
            <tr>
              <td><code>baoyu-comic</code></td>
              <td>知识漫画创作</td>
            </tr>
            <tr>
              <td><code>baoyu-article-illustrator</code></td>
              <td>文章插图生成</td>
            </tr>
          </tbody>
        </table>

        <h3>发布技能</h3>
        <table>
          <thead>
            <tr>
              <th>技能</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>baoyu-post-to-x</code></td>
              <td>发布到 X (Twitter)</td>
            </tr>
            <tr>
              <td><code>baoyu-post-to-wechat</code></td>
              <td>发布到微信公众号</td>
            </tr>
            <tr>
              <td><code>baoyu-post-to-weibo</code></td>
              <td>发布到微博</td>
            </tr>
          </tbody>
        </table>

        <h3>AI 生成技能</h3>
        <table>
          <thead>
            <tr>
              <th>技能</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>baoyu-image-gen</code></td>
              <td>AI 图像生成（支持 OpenAI、Google、阿里云）</td>
            </tr>
          </tbody>
        </table>

        <h3>工具技能</h3>
        <table>
          <thead>
            <tr>
              <th>技能</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>baoyu-url-to-markdown</code></td>
              <td>网页转 Markdown</td>
            </tr>
            <tr>
              <td><code>baoyu-translate</code></td>
              <td>文章翻译</td>
            </tr>
            <tr>
              <td><code>baoyu-markdown-to-html</code></td>
              <td>Markdown 转 HTML</td>
            </tr>
            <tr>
              <td><code>baoyu-compress-image</code></td>
              <td>图片压缩</td>
            </tr>
            <tr>
              <td><code>baoyu-format-markdown</code></td>
              <td>Markdown 格式化</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>配置 API Key</h2>
        <p>某些技能需要 API Key，配置方法：</p>

        <h3>创建配置文件</h3>
        <pre><code>{`# 用户级配置
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
EOF`}</code></pre>

        <h3>配置优先级</h3>
        <ol>
          <li>CLI 环境变量（最高优先级）</li>
          <li>系统环境变量</li>
          <li>项目级配置：<code>.baoyu-skills/.env</code></li>
          <li>用户级配置：<code>~/.baoyu-skills/.env</code></li>
        </ol>
      </section>

      <section>
        <h2>使用示例</h2>

        <h3>生成图片</h3>
        <pre><code>{`# 使用 AI 生成图片
@机器人 /baoyu-image-gen --prompt "一只可爱的猫" --image cat.png

# 指定供应商
@机器人 /baoyu-image-gen --prompt "风景画" --image landscape.png --provider openai`}</code></pre>

        <h3>生成小红书图文</h3>
        <pre><code>{`# 从文章生成小红书风格图文
@机器人 /baoyu-xhs-images posts/article.md --style cute --layout dense`}</code></pre>

        <h3>翻译文章</h3>
        <pre><code>{`# 翻译文章
@机器人 /translate article.md --to zh-CN

# 指定翻译风格
@机器人 /translate article.md --to zh-CN --style storytelling`}</code></pre>

        <h3>网页转 Markdown</h3>
        <pre><code>{`# 抓取网页内容
@机器人 /baoyu-url-to-markdown https://example.com/article`}</code></pre>
      </section>

      <section>
        <h2>重启生效</h2>
        <p>安装新技能后需要重启 Gateway：</p>
        <pre><code>openclaw gateway restart</code></pre>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-skills.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
