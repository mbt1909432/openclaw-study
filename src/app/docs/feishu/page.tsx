import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '飞书集成 - OpenClaw 文档',
  description: '配置 OpenClaw 与飞书的集成',
}

export default function FeishuPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1>飞书集成配置</h1>

      <section>
        <h2>飞书开放平台配置</h2>

        <h3>1. 创建飞书应用</h3>
        <ol>
          <li>访问 <a href="https://open.feishu.cn/" target="_blank" rel="noopener">飞书开放平台</a></li>
          <li>创建企业自建应用</li>
          <li>记录 App ID 和 App Secret</li>
        </ol>

        <h3>2. 配置应用权限</h3>
        <p>在「权限管理」中添加以下权限：</p>
        <ul>
          <li>获取与更新群组信息</li>
          <li>接收群聊消息</li>
          <li>发送群聊消息</li>
          <li>获取用户信息</li>
        </ul>

        <h3>3. 配置事件订阅</h3>
        <p>在「事件订阅」中：</p>
        <ul>
          <li>请求网址：留空（稍后配置）</li>
          <li>添加事件：消息相关事件</li>
        </ul>
      </section>

      <section>
        <h2>OpenClaw 配置</h2>

        <h3>配置参数</h3>
        <p>在 OpenClaw 配置文件中设置飞书参数：</p>

        <pre><code>{`# 编辑配置文件
nano ~/.openclaw/openclaw.json`}</code></pre>

        <p>飞书配置示例：</p>
        <pre><code>{`{
  "plugins": {
    "entries": {
      "feishu": {
        "app_id": "cli_xxxxxxxxxxxx",
        "app_secret": "xxxxxxxxxxxxxxxxxx"
      }
    }
  }
}`}</code></pre>

        <h3>配置项说明</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>来源</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>app_id</td>
              <td>飞书应用 ID</td>
              <td>飞书开放平台 → 凭证与基础信息</td>
            </tr>
            <tr>
              <td>app_secret</td>
              <td>飞书应用密钥</td>
              <td>飞书开放平台 → 凭证与基础信息</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>启动并验证连接</h2>

        <h3>启动 Gateway</h3>
        <pre><code>{`# 重启 Gateway
openclaw gateway restart`}</code></pre>

        <h3>检查连接状态</h3>
        <pre><code>{`# 查看状态
openclaw status

# 查看日志
openclaw logs --follow | grep -i "ws\\|feishu"`}</code></pre>

        <h3>连接成功的标志</h3>
        <pre><code>{`feishu[default]: bot open_id resolved: ou_xxxxx
feishu[default]: WebSocket client started
[ '[ws]', 'ws client ready' ]`}</code></pre>

        <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-4 my-4">
          <p className="font-semibold text-green-800 dark:text-green-200 mb-0">
            重要顺序
          </p>
          <ol className="text-green-700 dark:text-green-300 mb-0 mt-2">
            <li>OpenClaw 启动 → WebSocket 连接成功</li>
            <li>飞书后台检测到连接 → 显示"已检测到连接"</li>
            <li>点击保存事件订阅</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>常见问题</h2>

        <h3>"未检测到应用连接信息"</h3>
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-4 my-4">
          <p className="font-semibold text-red-800 dark:text-red-200 mb-0">
            原因
          </p>
          <p className="text-red-700 dark:text-red-300 mb-0">
            App ID 或 App Secret 不匹配
          </p>
        </div>

        <p><strong>排查步骤：</strong></p>
        <pre><code>{`# 1. 查看当前配置的 App ID
grep -A 5 '"feishu"' ~/.openclaw/openclaw.json

# 2. 对比飞书开放平台显示的 App ID 是否一致`}</code></pre>

        <p><strong>解决方法：</strong></p>
        <pre><code>{`# 1. 编辑配置文件，确保 App ID 和 Secret 正确
nano ~/.openclaw/openclaw.json

# 2. 重启 Gateway 触发重新连接
openclaw gateway restart

# 3. 查看日志确认连接成功
openclaw logs --follow | grep -i "ws\\|feishu"`}</code></pre>

        <h3>更新飞书 Secret</h3>
        <p>如果需要更换飞书 Secret：</p>
        <pre><code>{`# 1. 编辑配置文件
nano ~/.openclaw/openclaw.json

# 2. 修改 app_secret 字段

# 3. 重启 Gateway
openclaw gateway restart`}</code></pre>
      </section>

      <section>
        <h2>测试机器人</h2>
        <ol>
          <li>将机器人添加到飞书群</li>
          <li>在群里 @机器人 发送消息</li>
          <li>查看日志确认收到消息</li>
        </ol>

        <pre><code>{`# 查看飞书消息日志
openclaw logs --follow | grep feishu`}</code></pre>

        <p>成功时应该看到：</p>
        <pre><code>{`feishu[default]: message in group oc_xxx
feishu[default]: dispatching to agent`}</code></pre>
      </section>

      <footer className="border-t pt-4 mt-8 text-sm text-neutral-500">
        <a href="/docs/llms-feishu.txt" className="text-blue-600 dark:text-blue-400">
          查看 LLM 友好版本
        </a>
      </footer>
    </article>
  )
}
