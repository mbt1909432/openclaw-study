import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '安装指南 - OpenClaw 文档',
  description: '在您的系统上安装 OpenClaw AI Agent 网关',
}

export default function InstallationPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>安装指南</h1>

      <section>
        <h2>前提条件</h2>
        <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 my-4">
          <p className="font-semibold text-amber-800 dark:text-amber-200 mb-0">
            Node.js 版本要求
          </p>
          <p className="text-amber-700 dark:text-amber-300 mb-0">
            OpenClaw 需要 <strong>Node.js 22 或更高版本</strong>。
          </p>
        </div>

        <h3>检查 Node.js 版本</h3>
        <pre><code>node --version</code></pre>
        <p>如果版本低于 22，请先升级 Node.js。</p>

        <h3>安装 Node.js</h3>

        <h4>Windows 系统</h4>
        <ol>
          <li>从 <a href="https://nodejs.org/" target="_blank" rel="noopener">nodejs.org</a> 下载</li>
          <li>选择 LTS 版本（包含 Node.js 22+）</li>
          <li>运行安装程序并按提示操作</li>
          <li>安装完成后重启终端</li>
        </ol>

        <h4>Linux/macOS（使用 nvm）</h4>
        <pre><code>{`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22`}</code></pre>

        <h4>Linux（使用 apt）</h4>
        <pre><code>{`curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs`}</code></pre>
      </section>

      <section>
        <h2>安装 OpenClaw</h2>

        <h3>快速安装（推荐）</h3>

        <h4>macOS / Linux</h4>
        <pre><code>curl -fsSL https://openclaw.ai/install.sh | bash</code></pre>

        <h4>Windows (PowerShell)</h4>
        <pre><code>iwr -useb https://openclaw.ai/install.ps1 | iex</code></pre>

        <h3>npm 安装</h3>
        <pre><code>{`# 使用 npm
npm install -g openclaw@latest

# 或使用 pnpm
pnpm add -g openclaw@latest`}</code></pre>

        <h3>验证安装</h3>
        <pre><code>{`openclaw --version
openclaw --help`}</code></pre>
      </section>

      <section>
        <h2>运行引导向导</h2>
        <pre><code>{`# 完整安装向导 + 安装系统服务
openclaw onboard --install-daemon

# 仅运行配置向导
openclaw onboard`}</code></pre>

        <h3>向导步骤</h3>
        <ol>
          <li><strong>安全警告</strong> - 确认你了解安全影响</li>
          <li><strong>配置模式</strong> - 初学者选择 QuickStart</li>
          <li><strong>模型供应商</strong> - 选择 AI 供应商（OpenAI、Anthropic、OpenRouter 等）</li>
          <li><strong>消息平台</strong> - 配置飞书、Discord、Slack 等</li>
          <li><strong>技能</strong> - 可选：启用托管技能</li>
          <li><strong>钩子</strong> - 可选：配置事件钩子</li>
        </ol>
      </section>

      <section>
        <h2>系统要求</h2>
        <table>
          <thead>
            <tr>
              <th>资源</th>
              <th>最低</th>
              <th>推荐</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CPU</td>
              <td>1 核</td>
              <td>2 核+</td>
            </tr>
            <tr>
              <td>内存</td>
              <td>1GB</td>
              <td>2GB+</td>
            </tr>
            <tr>
              <td>磁盘</td>
              <td>500MB</td>
              <td>2GB+</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>下一步</h2>
        <ul>
          <li><a href="/docs/quickstart">快速开始</a> - 配置向导详解</li>
          <li><a href="/docs/feishu">飞书集成</a> - 配置飞书机器人</li>
          <li><a href="/docs/components">组件介绍</a> - 了解 OpenClaw 的各个组件</li>
        </ul>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-installation.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
