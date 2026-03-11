import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '故障排查 - OpenClaw 文档',
  description: 'OpenClaw 常见问题和解决方案',
}

export default function TroubleshootingPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>故障排查</h1>

      <section>
        <h2>通用排查步骤</h2>
        <ol>
          <li><strong>查看状态</strong>：<code>openclaw status</code></li>
          <li><strong>查看日志</strong>：<code>openclaw logs --follow</code></li>
          <li><strong>重启服务</strong>：<code>openclaw gateway restart</code></li>
        </ol>
      </section>

      <section>
        <h2>端口冲突</h2>

        <h3>症状</h3>
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-4 my-4">
          <pre className="text-sm text-red-700 dark:text-red-300 mb-0">{`gateway token mismatch (provide gateway auth token)
Gateway failed to start: another gateway instance is already listening on ws://127.0.0.1:18789`}</pre>
        </div>

        <h3>原因</h3>
        <p>另一个 Gateway 实例正在使用这个端口</p>

        <h3>解决方法</h3>
        <pre><code>{`# 1. 检查哪个进程在使用端口
netstat -tlnp | grep 18789

# 2. 停止旧服务
openclaw gateway stop

# 3. 如果是 rescue profile
openclaw --profile rescue gateway stop

# 4. 修改配置文件中的端口
nano ~/.openclaw-rescue/openclaw.json
# 把 "port": 18789 改成 "port": 19789

# 5. 重启
openclaw --profile rescue gateway restart`}</code></pre>
      </section>

      <section>
        <h2>Gateway 不可达</h2>

        <h3>症状</h3>
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-4 my-4">
          <p className="font-mono text-sm text-red-700 dark:text-red-300 mb-0">
            Gateway: unreachable (connect failed)
          </p>
        </div>

        <h3>排查步骤</h3>
        <pre><code>{`# 1. 检查服务状态
systemctl --user status openclaw-gateway

# 2. 检查端口
netstat -tlnp | grep 18789

# 3. 检查日志
openclaw logs --follow

# 4. 重启服务
openclaw gateway restart`}</code></pre>
      </section>

      <section>
        <h2>飞书连接问题</h2>

        <h3>症状：未检测到应用连接信息</h3>
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-4 my-4">
          <p className="text-red-700 dark:text-red-300 mb-0">
            飞书开放平台显示"未检测到应用连接信息"
          </p>
        </div>

        <h3>原因</h3>
        <p>App ID 或 App Secret 不匹配</p>

        <h3>解决方法</h3>
        <pre><code>{`# 1. 查看当前配置
grep -A 5 '"feishu"' ~/.openclaw/openclaw.json

# 2. 对比飞书开放平台显示的 App ID 是否一致

# 3. 编辑配置文件
nano ~/.openclaw/openclaw.json

# 4. 修改 app_id 和 app_secret

# 5. 重启 Gateway
openclaw gateway restart

# 6. 查看日志确认连接成功
openclaw logs --follow | grep -i "ws\\|feishu"`}</code></pre>

        <h3>成功的标志</h3>
        <pre><code>{`feishu[default]: bot open_id resolved: ou_xxxxx
feishu[default]: WebSocket client started
[ '[ws]', 'ws client ready' ]`}</code></pre>

        <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-4 my-4">
          <p className="text-green-700 dark:text-green-300 mb-0">
            <strong>重要顺序：</strong><br />
            1. OpenClaw 启动 → WebSocket 连接成功<br />
            2. 飞书后台检测到连接 → 显示"已检测到连接"<br />
            3. 点击保存事件订阅
          </p>
        </div>
      </section>

      <section>
        <h2>API Key 认证失败</h2>

        <h3>症状</h3>
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-4 my-4">
          <p className="font-mono text-sm text-red-700 dark:text-red-300 mb-0">
            Error: 401 Missing Authentication header
          </p>
        </div>

        <h3>解决方法</h3>
        <pre><code>{`# 1. 检查 Key 文件是否存在
cat ~/.openclaw/agents/main/agent/models.json

# 2. 如果不存在，重新运行配置向导
openclaw onboard

# 3. 重启服务
openclaw gateway restart`}</code></pre>
      </section>

      <section>
        <h2>多 Gateway 配置：Workspace 路径跑偏</h2>

        <h3>症状</h3>
        <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 my-4">
          <p className="text-amber-700 dark:text-amber-300 mb-0">
            配置在 <code>~/.openclaw-rescue/</code>，但 workspace 却在 <code>~/.openclaw/workspace-rescue</code>
          </p>
        </div>

        <h3>原因</h3>
        <p>
          <code>onboard</code> 创建 profile 时会自动加 <code>-rescue</code> 后缀，但 workspace 路径默认放在 <code>~/.openclaw/</code> 下，
          而不是 <code>~/.openclaw-rescue/</code> 里——这是文档没说清楚的一个坑。没有专门的命令，只能手动改 json。
        </p>

        <h3>解决方法</h3>
        <pre><code>{`# 1. 找配置文件，确认当前 workspace 路径
cat ~/.openclaw-rescue/openclaw.json | grep workspace

# 2. 迁移现有文件（别丢数据）
cp -r ~/.openclaw/workspace-rescue ~/.openclaw-rescue/workspace

# 3. 改 workspace 路径
nano ~/.openclaw-rescue/openclaw.json
# 找到这行：
#   "workspace": "/home/ec2-user/.openclaw/workspace-rescue"
# 改成：
#   "workspace": "/home/ec2-user/.openclaw-rescue/workspace"

# 4. 重启
openclaw --profile rescue gateway restart`}</code></pre>

        <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700 dark:text-blue-300 mb-0">
            <strong>提示：</strong>如果不是 rescue profile，先运行 <code>openclaw status</code> 看 Sessions 那行显示的是哪个 json 文件。
          </p>
        </div>
      </section>

      <section>
        <h2>插件重复警告</h2>

        <h3>症状</h3>
        <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 my-4">
          <p className="font-mono text-sm text-amber-700 dark:text-amber-300 mb-0">
            plugins.entries.feishu: plugin feishu: duplicate plugin id detected
          </p>
        </div>

        <h3>说明</h3>
        <p>这是<strong>警告</strong>，不是错误，可以忽略。两个 profile 的插件在各自目录中，不会实际冲突。</p>
      </section>

      <section>
        <h2>Windows 特定问题</h2>

        <h3>命令找不到</h3>
        <p>如果运行 <code>openclaw</code> 提示找不到命令：</p>
        <ol>
          <li>确认 Node.js 安装成功：<code>node --version</code></li>
          <li>确认 npm 全局路径在 PATH 中</li>
          <li>重启终端或重启电脑</li>
        </ol>

        <h3>权限问题</h3>
        <p>以管理员身份运行终端，然后重试。</p>
      </section>

      <section>
        <h2>获取帮助</h2>
        <ul>
          <li><a href="https://docs.openclaw.ai/troubleshooting" target="_blank" rel="noopener">官方故障排查文档</a></li>
          <li><a href="https://github.com/openclaw-ai/openclaw/issues" target="_blank" rel="noopener">GitHub Issues</a></li>
        </ul>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-troubleshooting.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
