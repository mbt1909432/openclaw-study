import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '目录结构 - OpenClaw 文档',
  description: 'OpenClaw 完整目录结构说明',
}

export default function WorkspacePage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>目录结构</h1>

      <section>
        <h2>Gateway 数据目录</h2>
        <p>主配置和状态数据存放在 <code>~/.openclaw/</code>：</p>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4 overflow-x-auto">
          <pre className="text-sm mb-0">{`~/.openclaw/
├── openclaw.json          # 主配置文件（channels、providers、agents 等）
├── .env                   # 环境变量（API Keys 等）
│
├── identity/
│   ├── device.json        # 设备身份标识
│   └── device-auth.json   # 设备认证 token
│
├── credentials/           # 渠道认证凭据（如 feishu pairing）
│
├── agents/
│   └── main/              # agent 运行状态
│
├── workspace/             # 默认 agent 工作区（见下）
│
├── skills/                # 用户级自定义技能
│
├── extensions/            # 已安装扩展（如 feishu、acontext）
│
├── memory/
│   └── main.sqlite        # Gateway 层消息历史数据库
│
├── cron/
│   └── jobs.json          # 定时任务配置
│
├── devices/
│   ├── paired.json        # 已配对的节点设备
│   └── pending.json       # 等待配对的设备
│
├── canvas/
│   └── index.html         # Web Canvas 页面
│
├── feishu/                # 飞书消息去重缓存
├── delivery-queue/        # 消息投递队列
└── logs/                  # 审计日志`}</pre>
        </div>
      </section>

      <section>
        <h2>Agent 工作区</h2>
        <p>每个 Agent 都有独立的工作区（workspace），这是它的"家"：</p>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg my-4 overflow-x-auto">
          <pre className="text-sm mb-0">{`workspace/
├── .git/                  # git 版本控制（自动提交）
├── .openclaw/             # workspace 级配置
│
├── AGENTS.md              # Agent 行为规范（必读）
├── SOUL.md                # Agent 人格定义
├── IDENTITY.md            # 名字、形象、emoji
├── USER.md                # 关于用户的信息
├── TOOLS.md               # 本地工具备注（摄像头名/SSH 等）
├── HEARTBEAT.md           # 心跳检查任务清单
│
├── MEMORY.md              # 长期记忆（精华提炼，仅主 session 加载）
│
└── memory/
    ├── YYYY-MM-DD.md      # 每日原始日志
    └── heartbeat-state.json  # 上次检查各项目的时间戳`}</pre>
        </div>

        <h3>引导文件说明</h3>
        <p>这些文件会在每次对话开始时自动加载：</p>
        <table>
          <thead>
            <tr>
              <th>文件</th>
              <th>用途</th>
              <th>加载时机</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>AGENTS.md</code></td>
              <td>操作规则、优先级</td>
              <td>每次对话</td>
            </tr>
            <tr>
              <td><code>SOUL.md</code></td>
              <td>人格、语气、边界</td>
              <td>每次对话</td>
            </tr>
            <tr>
              <td><code>USER.md</code></td>
              <td>用户是谁、怎么称呼</td>
              <td>每次对话</td>
            </tr>
            <tr>
              <td><code>IDENTITY.md</code></td>
              <td>机器人名称、风格</td>
              <td>每次对话</td>
            </tr>
            <tr>
              <td><code>TOOLS.md</code></td>
              <td>本地工具说明</td>
              <td>每次对话</td>
            </tr>
            <tr>
              <td><code>HEARTBEAT.md</code></td>
              <td>心跳检查清单</td>
              <td>心跳任务</td>
            </tr>
            <tr>
              <td><code>BOOTSTRAP.md</code></td>
              <td>首次运行仪式</td>
              <td>仅首次，完成后删除</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>多 Profile 说明</h2>
        <p>使用 <code>--profile</code> 参数可以创建独立的配置实例：</p>
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>数据目录</th>
              <th>工作区</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>默认</td>
              <td><code>~/.openclaw/</code></td>
              <td><code>~/.openclaw/workspace/</code></td>
            </tr>
            <tr>
              <td>rescue</td>
              <td><code>~/.openclaw-rescue/</code></td>
              <td><code>~/.openclaw/workspace-rescue/</code></td>
            </tr>
            <tr>
              <td>coding</td>
              <td><code>~/.openclaw/</code></td>
              <td><code>~/.openclaw/workspace-coding/</code></td>
            </tr>
          </tbody>
        </table>
        <p>多个 Profile 之间完全隔离，互不干扰。</p>
      </section>

      <section>
        <h2>系统级技能目录</h2>
        <p>内置技能存放在系统目录：</p>
        <pre><code>/usr/lib/node_modules/openclaw/skills/</code></pre>
        <p>包含 50+ 个内置技能：weather、healthcheck、github、notion、obsidian、discord、slack、canvas、coding-agent、tts、browser、feishu 等。</p>
      </section>

      <section>
        <h2>如何编辑工作区文件？</h2>
        <h3>方法一：通过 Web 面板</h3>
        <ol>
          <li>打开 http://127.0.0.1:18789/</li>
          <li>点击「Agent」板块</li>
          <li>选择要编辑的文件</li>
          <li>修改后保存</li>
        </ol>

        <h3>方法二：直接编辑</h3>
        <pre><code>{`# 编辑人格文件
nano ~/.openclaw/workspace/SOUL.md

# 编辑用户信息
nano ~/.openclaw/workspace/USER.md`}</code></pre>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-workspace.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
