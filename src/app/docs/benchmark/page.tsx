'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function BenchmarkPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'experiment' | 'alfworld' | 'scienceworld' | 'webshop' | 'skillnet' | 'code' | 'faq'>('overview')

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">首页</a>
          <span>/</span>
          <a href="/docs" className="hover:text-zinc-900">文档</a>
          <span>/</span>
          <span className="text-zinc-900">Benchmark 研究</span>
        </nav>

        <header className="pb-8 border-b border-zinc-100 mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Benchmark 研究</h1>
          <p className="text-lg text-zinc-500">
            Agent 技能学习与记忆能力的评测基准研究
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-zinc-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            概览
          </button>
          <button
            onClick={() => setActiveTab('experiment')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'experiment'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            实验设计
          </button>
          <button
            onClick={() => setActiveTab('experiment')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'experiment'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            实验设计详解
          </button>
          <button
            onClick={() => setActiveTab('alfworld')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'alfworld'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            ALFWorld
          </button>
          <button
            onClick={() => setActiveTab('scienceworld')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'scienceworld'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            ScienceWorld
          </button>
          <button
            onClick={() => setActiveTab('webshop')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'webshop'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            WebShop
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            代码示例
          </button>
          <button
            onClick={() => setActiveTab('skillnet')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'skillnet'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            SkillNet
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'faq'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            常见问题
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">研究目标</h2>

            <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-6 mb-8 border border-violet-100">
              <p className="text-zinc-700 mb-4">
                研究类似 Acontext 的 skill learning 工作，了解业界使用的 benchmark，并选定展示 Agent 工作能力的评测基准。
              </p>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">选定的 Benchmark</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎮</span>
                  <h4 className="font-semibold text-emerald-800">ALFWorld</h4>
                </div>
                <p className="text-xs text-emerald-700">家庭任务交互环境</p>
              </div>

              <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔬</span>
                  <h4 className="font-semibold text-blue-800">ScienceWorld</h4>
                </div>
                <p className="text-xs text-blue-700">科学实验推理环境</p>
              </div>

              <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🛒</span>
                  <h4 className="font-semibold text-amber-800">WebShop</h4>
                </div>
                <p className="text-xs text-amber-700">电商购物决策环境</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">SkillNet 评测框架</h3>

            <div className="border border-violet-200 bg-violet-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📚</span>
                <h4 className="text-lg font-semibold text-violet-800">SkillNet: Create, Evaluate, and Connect AI Skills</h4>
              </div>
              <p className="text-sm text-violet-700 mb-3">
                浙江大学、阿里巴巴、腾讯、蚂蚁集团等联合发布的技能学习框架
              </p>
              <div className="flex gap-3">
                <a
                  href="https://arxiv.org/abs/2603.04448"
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-violet-600 hover:text-violet-800 underline"
                >
                  arXiv 论文 →
                </a>
                <a
                  href="https://github.com/zjunlp/SkillNet"
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-violet-600 hover:text-violet-800 underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Experiment Design Tab */}
        {activeTab === 'experiment' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">实验设计详解</h2>

            <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-6 mb-8 border border-violet-100">
              <p className="text-zinc-700">
                本节详细解释 Benchmark 实验的设计思路，包括环境、Agent、评估指标等核心概念。
              </p>
            </div>

            {/* 整体框架 */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">整体框架</h3>

            <div className="bg-zinc-900 rounded-xl p-6 mb-8 overflow-x-auto">
              <pre className="text-sm font-mono text-zinc-300">
{`┌─────────────────────────────────────────────────────────────┐
│                      实验框架                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐      ┌─────────────┐      ┌───────────┐ │
│   │  环境       │ ◀─── │  Agent      │ ───▶ │  评估指标 │ │
│   │ (世界模拟)  │ 反馈 │  (决策者)   │ 动作 │  (打分)   │ │
│   └─────────────┘      └─────────────┘      └───────────┘ │
│         │                    │                    │        │
│         ▼                    ▼                    ▼        │
│   SimulatedWorld       DumbAgent           - 步数         │
│                         SmartAgent          - 成功率      │
│                                             - 奖励        │
│                                                             │
└─────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>

            {/* 环境 */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">环境 (SimulatedWorld)</h3>

            <div className="bg-zinc-50 rounded-xl p-6 mb-6">
              <p className="text-zinc-700 mb-4">
                环境 = <strong>虚拟世界</strong>，模拟一个简单的家庭场景。
              </p>

              <div className="bg-white rounded-lg p-4 mb-4">
                <pre className="text-sm font-mono text-zinc-600">
{`class SimulatedWorld:
    def __init__(self):
        self.location = "客厅"      # Agent 当前位置
        self.inventory = []          # Agent 手里拿着什么
        self.fridge_open = False     # 冰箱是否打开
        self.task_complete = False   # 任务是否完成`}
                </pre>
              </div>

              <h4 className="font-semibold text-zinc-800 mb-2">环境地图</h4>
              <pre className="text-sm font-mono text-zinc-600 bg-white rounded-lg p-4">
{`          ┌─────────┐
          │  卧室   │
          │ 床,衣柜 │
          └────┬────┘
               │
               ▼
┌─────────┐       ┌─────────┐
│  客厅   │ ◀───▶ │  厨房   │
│苹果,遥控│       │冰箱,水槽│
└─────────┘       └─────────┘
   (起点)`}
              </pre>
            </div>

            {/* Agent 动作 */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">Agent 可执行动作</h3>

            <div className="border border-zinc-200 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">动作</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">格式</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">效果</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">环顾四周</td>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">look</td>
                    <td className="px-4 py-3 text-zinc-600">查看当前地点有什么</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">查看背包</td>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">inventory</td>
                    <td className="px-4 py-3 text-zinc-600">查看自己拿着什么</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">移动</td>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">go to &lt;地点&gt;</td>
                    <td className="px-4 py-3 text-zinc-600">走到另一个地点</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">拿起</td>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">take &lt;物品&gt;</td>
                    <td className="px-4 py-3 text-zinc-600">把物品放进背包</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">打开</td>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">open fridge</td>
                    <td className="px-4 py-3 text-zinc-600">打开冰箱</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-zinc-700">放置</td>
                    <td className="px-4 py-3 font-mono text-violet-600 text-xs">put &lt;物品&gt; in fridge</td>
                    <td className="px-4 py-3 text-zinc-600">把物品放进冰箱</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 笨 Agent */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">笨 Agent (DumbAgent)</h3>

            <div className="border border-rose-200 bg-rose-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-rose-800 mb-2">笨在哪里？</h4>
              <p className="text-sm text-rose-700 mb-4">完全没有策略，随机乱试。</p>

              <div className="bg-white rounded-lg p-4">
                <pre className="text-sm font-mono text-zinc-600">
{`class DumbAgent:
    def act(self, observation):
        # 不管看到了什么，随机选一个动作
        return random.choice(self.all_actions)`}
                </pre>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 mb-8 overflow-x-auto">
              <h4 className="text-zinc-300 text-sm mb-3">执行过程示例</h4>
              <pre className="text-sm font-mono text-zinc-400">
{`任务: 把苹果放进冰箱

Step 1: random.choice() → "go to 卧室"
        结果: "你来到了卧室。" (没用)

Step 2: random.choice() → "inventory"
        结果: "你两手空空。" (没用)

Step 3: random.choice() → "take 苹果"
        结果: "找不到苹果。" (因为在卧室，苹果在客厅)

...

Step 9: random.choice() → "put 苹果 in fridge"
        结果: "你把苹果放进冰箱。" 任务完成！

总计: 9 步 (运气好的情况)`}
              </pre>
            </div>

            {/* 聪明 Agent */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">聪明 Agent (SmartAgent)</h3>

            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-800 mb-2">聪明在哪里？</h4>
              <p className="text-sm text-emerald-700 mb-4">有明确的状态机，按步骤执行。</p>

              <div className="bg-white rounded-lg p-4">
                <pre className="text-sm font-mono text-zinc-600">
{`class SmartAgent:
    def __init__(self):
        self.state = "find_apple"  # 当前处于哪个阶段

    def act(self, observation):
        if self.state == "find_apple":
            # 阶段1: 找苹果
            ...
        elif self.state == "take_apple":
            # 阶段2: 拿苹果
            ...
        # ... 以此类推`}
                </pre>
              </div>
            </div>

            {/* 状态机图 */}
            <div className="bg-zinc-900 rounded-xl p-6 mb-8 overflow-x-auto">
              <h4 className="text-zinc-300 text-sm mb-3">状态机设计</h4>
              <pre className="text-sm font-mono text-zinc-300">
{`┌───────────┐      ┌───────────┐      ┌───────────┐
│find_apple │ ───▶ │take_apple │ ───▶ │go_kitchen │
│ 找苹果    │      │ 拿苹果    │      │ 去厨房    │
└───────────┘      └───────────┘      └───────────┘
                                          │
                                          ▼
┌───────────┐      ┌───────────┐      ┌───────────┐
│   done    │ ◀─── │ put_apple │ ◀─── │open_fridge│
│  完成     │      │ 放苹果    │      │ 开冰箱    │
└───────────┘      └───────────┘      └───────────┘`}
              </pre>
            </div>

            {/* 评估指标 */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">评估指标</h3>

            <div className="border border-zinc-200 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">指标</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">定义</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">意义</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-violet-100 text-violet-700 rounded text-xs font-medium">步数</span></td>
                    <td className="px-4 py-3 text-zinc-600">完成任务用了多少步</td>
                    <td className="px-4 py-3 text-zinc-500">越少越好</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">成功率</span></td>
                    <td className="px-4 py-3 text-zinc-600">任务完成 / 总任务数</td>
                    <td className="px-4 py-3 text-zinc-500">越高越好</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">奖励</span></td>
                    <td className="px-4 py-3 text-zinc-600">环境给的分数</td>
                    <td className="px-4 py-3 text-zinc-500">完成任务=1，否则=0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Skill Memory 关系 */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">与 Skill Memory 的关系</h3>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <pre className="text-sm font-mono text-amber-800 mb-4">
{`无 Skill Memory: DumbAgent → 永远随机 → 表现不变
有 Skill Memory: DumbAgent → 学习经验 → 变成SmartAgent → 表现提升`}
              </pre>
              <p className="text-sm text-amber-700">
                <strong>Benchmark 要证明的核心假设：</strong>
                有 Skill Memory 的 Agent，多轮后表现提升；无 Memory 的 Agent，表现始终不变。
              </p>
            </div>
          </section>
        )}

        {/* ALFWorld Tab */}
        {activeTab === 'alfworld' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">ALFWorld Benchmark</h2>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">简介</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`ALFWorld (ALFRED World) 是一个交互式文本环境，
用于评估 Agent 在家庭任务中的规划和执行能力。

基于 ALFRED 数据集构建，将视觉任务转换为文本交互形式。`}</code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">任务类型</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">Pick & Place</h4>
                <p className="text-sm text-zinc-600">拾取物体并放置到指定位置</p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">Heat & Cool</h4>
                <p className="text-sm text-zinc-600">加热或冷却物体</p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">Clean & Slice</h4>
                <p className="text-sm text-zinc-600">清洁或切片物体</p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">Stack & Toggle</h4>
                <p className="text-sm text-zinc-600">堆叠物体或切换设备状态</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">评估指标</h3>

            <div className="border border-zinc-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">指标</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Success Rate</td>
                    <td className="px-4 py-3 text-zinc-600">任务完成成功率</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Steps</td>
                    <td className="px-4 py-3 text-zinc-600">完成任务所需步数</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Goal Progress</td>
                    <td className="px-4 py-3 text-zinc-600">子目标完成进度</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5">
              <p className="font-medium text-emerald-800 mb-2">为什么选择 ALFWorld？</p>
              <p className="text-sm text-emerald-700">
                纯文本交互形式适合评估 LLM Agent 的规划和工具使用能力，无需处理视觉输入。
              </p>
            </div>
          </section>
        )}

        {/* ScienceWorld Tab */}
        {activeTab === 'scienceworld' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">ScienceWorld Benchmark</h2>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">简介</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`ScienceWorld 是一个科学实验推理环境，
用于评估 Agent 在科学领域中的探索和推理能力。

基于中小学科学课程构建，涵盖物理、化学、生物等多个领域。`}</code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">任务类型</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">🔬 物理实验</h4>
                <p className="text-sm text-zinc-600">电路、力学、光学等实验</p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">🧪 化学实验</h4>
                <p className="text-sm text-zinc-600">物质变化、化学反应等</p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">🧬 生物实验</h4>
                <p className="text-sm text-zinc-600">生命科学、生态环境等</p>
              </div>
              <div className="border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-800 mb-2">🌍 地球科学</h4>
                <p className="text-sm text-zinc-600">地理、气象、天文等</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">评估指标</h3>

            <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">指标</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Task Completion</td>
                    <td className="px-4 py-3 text-zinc-600">任务完成率</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Reasoning Steps</td>
                    <td className="px-4 py-3 text-zinc-600">推理步数</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Knowledge Application</td>
                    <td className="px-4 py-3 text-zinc-600">知识应用准确性</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5">
              <p className="font-medium text-blue-800 mb-2">为什么选择 ScienceWorld？</p>
              <p className="text-sm text-blue-700">
                评估 Agent 的科学推理能力，需要多步骤实验设计和知识应用。
              </p>
            </div>
          </section>
        )}

        {/* WebShop Tab */}
        {activeTab === 'webshop' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">WebShop Benchmark</h2>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">简介</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`WebShop 是一个电商购物决策环境，
用于评估 Agent 在真实购物场景中的决策能力。

模拟亚马逊等电商平台的购物流程。`}</code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">任务流程</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-medium text-zinc-800">理解需求</h4>
                  <p className="text-sm text-zinc-600">解析用户的购物指令和偏好</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-medium text-zinc-800">搜索商品</h4>
                  <p className="text-sm text-zinc-600">使用关键词搜索相关商品</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-medium text-zinc-800">比较选项</h4>
                  <p className="text-sm text-zinc-600">比较价格、评分、属性等</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-medium text-zinc-800">做出决策</h4>
                  <p className="text-sm text-zinc-600">选择最符合需求的商品</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">评估指标</h3>

            <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">指标</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Task Success Rate</td>
                    <td className="px-4 py-3 text-zinc-600">任务成功率</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Reward Score</td>
                    <td className="px-4 py-3 text-zinc-600">奖励分数（基于选择质量）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-violet-600">Step Efficiency</td>
                    <td className="px-4 py-3 text-zinc-600">步骤效率</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
              <p className="font-medium text-amber-800 mb-2">为什么选择 WebShop？</p>
              <p className="text-sm text-amber-700">
                评估 Agent 在真实世界任务中的决策能力，需要信息检索、比较和决策。
              </p>
            </div>
          </section>
        )}

        {/* SkillNet Tab */}
        {activeTab === 'skillnet' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">SkillNet 框架</h2>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 mb-8 text-white">
              <h3 className="text-xl font-bold mb-2">SkillNet: Create, Evaluate, and Connect AI Skills</h3>
              <p className="text-slate-300 text-sm mb-4">
                浙江大学、阿里巴巴、腾讯、蚂蚁集团等联合发布
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://arxiv.org/abs/2603.04448"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-800 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
                >
                  arXiv 论文
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://github.com/zjunlp/SkillNet"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="http://skillnet.openkg.cn/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors"
                >
                  官网
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">核心功能</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-violet-200 bg-violet-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🔍</span>
                  <h4 className="font-semibold text-violet-800">Search</h4>
                </div>
                <p className="text-sm text-violet-700">通过关键词或语义搜索查找 500+ 技能</p>
              </div>
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📦</span>
                  <h4 className="font-semibold text-blue-800">Install</h4>
                </div>
                <p className="text-sm text-blue-700">一行命令从 GitHub 安装技能</p>
              </div>
              <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✨</span>
                  <h4 className="font-semibold text-emerald-800">Create</h4>
                </div>
                <p className="text-sm text-emerald-700">从代码库、文档、对话日志自动创建技能</p>
              </div>
              <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📊</span>
                  <h4 className="font-semibold text-amber-800">Evaluate</h4>
                </div>
                <p className="text-sm text-amber-700">5 维度评估：安全、完整、可执行、可维护、成本</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">5 维度评估框架</h3>

            <div className="border border-zinc-200 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">维度</th>
                    <th className="text-left px-4 py-3 font-medium text-zinc-700 border-b border-zinc-200">评估内容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs font-medium">Safety</span></td>
                    <td className="px-4 py-3 text-zinc-600">安全性检查</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Completeness</span></td>
                    <td className="px-4 py-3 text-zinc-600">完整性评估</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">Executability</span></td>
                    <td className="px-4 py-3 text-zinc-600">可执行性测试</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">Maintainability</span></td>
                    <td className="px-4 py-3 text-zinc-600">可维护性分析</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-violet-100 text-violet-700 rounded text-xs font-medium">Cost-Awareness</span></td>
                    <td className="px-4 py-3 text-zinc-600">成本意识评估</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">OpenClaw 集成</h3>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">安装命令</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`# 通过 ClawHub 安装
npm i -g clawhub
clawhub install skillnet --workdir ~/.openclaw/workspace

# 或在 OpenClaw 聊天中直接请求
"Install the skillnet skill from ClawHub"`}</code>
              </pre>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5">
              <p className="font-medium text-emerald-800 mb-2">与 OpenClaw 的关系</p>
              <p className="text-sm text-emerald-700">
                SkillNet 已作为 OpenClaw 的内置技能集成。Agent 可自动搜索、下载、创建和评估技能。
              </p>
            </div>
          </section>
        )}

        {/* Code Example Tab */}
        {activeTab === 'code' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">代码示例</h2>

            <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-6 mb-8 border border-violet-100">
              <p className="text-zinc-700">
                以下是一个完整的 Python 示例，演示如何实现 DumbAgent 和 SmartAgent 的对比实验。
              </p>
            </div>

            {/* SimulatedWorld */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">1. 环境定义 (SimulatedWorld)</h3>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">simulated_world.py</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`class SimulatedWorld:
    """模拟一个简单的家务环境"""

    def __init__(self):
        self.location = "客厅"
        self.inventory = []
        self.fridge_open = False
        self.apple_taken = False
        self.task_complete = False

        # 环境状态
        self.locations = {
            "客厅": {"物品": ["苹果", "遥控器"], "连接": ["厨房", "卧室"]},
            "厨房": {"物品": ["冰箱", "水槽"], "连接": ["客厅"]},
            "卧室": {"物品": ["床", "衣柜"], "连接": ["客厅"]}
        }

    def step(self, action):
        """执行动作，返回观察和奖励"""
        action = action.lower().strip()
        reward = 0
        observation = ""

        if action == "look":
            loc = self.locations[self.location]
            observation = f"你在{self.location}。物品: {loc['物品']}"

        elif action.startswith("go to "):
            dest = action.replace("go to ", "")
            if dest in self.locations[self.location]["连接"]:
                self.location = dest
                observation = f"你来到了{dest}。"

        elif action.startswith("take "):
            item = action.replace("take ", "")
            if item in self.locations[self.location]["物品"]:
                self.inventory.append(item)
                observation = f"你拿起了{item}。"

        elif action == "open fridge":
            if self.location == "厨房":
                self.fridge_open = True
                observation = "你打开了冰箱。"

        elif action.startswith("put ") and " in fridge" in action:
            item = action.replace("put ", "").replace(" in fridge", "")
            if item in self.inventory and self.fridge_open:
                observation = f"你把{item}放进冰箱。"
                if item == "苹果":
                    self.task_complete = True
                    reward = 1.0

        return observation, reward, self.task_complete`}</code>
              </pre>
            </div>

            {/* DumbAgent */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">2. 笨 Agent (DumbAgent)</h3>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">dumb_agent.py</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`import random

class DumbAgent:
    """笨 Agent：随机乱试"""

    def __init__(self):
        self.all_actions = [
            "look", "inventory",
            "go to 厨房", "go to 客厅", "go to 卧室",
            "take 苹果", "take 遥控器",
            "open fridge",
            "put 苹果 in fridge", "put 遥控器 in fridge"
        ]
        self.steps = 0

    def act(self, observation):
        """随机选一个动作"""
        self.steps += 1
        return random.choice(self.all_actions)`}</code>
              </pre>
            </div>

            {/* SmartAgent */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">3. 聪明 Agent (SmartAgent)</h3>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">smart_agent.py</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`class SmartAgent:
    """聪明 Agent：有策略地执行"""

    def __init__(self):
        self.state = "find_apple"  # 状态机
        self.steps = 0

    def act(self, observation):
        """根据当前状态选择动作"""
        self.steps += 1

        if self.state == "find_apple":
            if "苹果" in observation:
                self.state = "take_apple"
                return "take 苹果"
            return "go to 客厅"

        elif self.state == "take_apple":
            self.state = "go_kitchen"
            return "take 苹果"

        elif self.state == "go_kitchen":
            self.state = "open_fridge"
            return "go to 厨房"

        elif self.state == "open_fridge":
            self.state = "put_apple"
            return "open fridge"

        elif self.state == "put_apple":
            self.state = "done"
            return "put 苹果 in fridge"

        return "look"`}</code>
              </pre>
            </div>

            {/* 运行实验 */}
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">4. 运行实验</h3>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">run_experiment.py</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`def run_episode(agent_class, agent_name, max_steps=50):
    """运行一个任务"""
    env = SimulatedWorld()
    agent = agent_class()

    observation = "你在客厅。这里有一个苹果和遥控器。"
    total_reward = 0

    for step in range(max_steps):
        action = agent.act(observation)
        observation, reward, done = env.step(action)
        total_reward += reward

        if done:
            break

    return agent.steps, total_reward

# 运行多次实验取平均
num_episodes = 5
dumb_steps_list = []
smart_steps_list = []

for i in range(num_episodes):
    dumb_steps, _ = run_episode(DumbAgent, "笨Agent")
    smart_steps, _ = run_episode(SmartAgent, "聪明Agent")
    dumb_steps_list.append(dumb_steps)
    smart_steps_list.append(smart_steps)

# 计算提升百分比
avg_dumb = sum(dumb_steps_list) / len(dumb_steps_list)
avg_smart = sum(smart_steps_list) / len(smart_steps_list)
improvement = (avg_dumb - avg_smart) / avg_dumb * 100

print(f"笨Agent平均步数: {avg_dumb:.1f}")
print(f"聪明Agent平均步数: {avg_smart:.1f}")
print(f"效率提升: {improvement:.1f}%")`}</code>
              </pre>
            </div>

            {/* 完整代码链接 */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
              <p className="font-medium text-amber-800 mb-2">完整代码</p>
              <p className="text-sm text-amber-700">
                完整的可运行代码请参考：
                <code className="bg-amber-100 px-2 py-0.5 rounded text-xs">C:\\claude_agent_sdk_lab\\skill-benchmark\\03_simple_agent.py</code>
              </p>
            </div>
          </section>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Benchmark 常见问题</h2>
            <p className="text-zinc-600 mb-8">记录学习 Benchmark 过程中的疑惑和解答</p>

            {/* Q1: ALFWorld 是 Benchmark 测试框架吗？ */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q1: ALFWorld 是 Benchmark 测试框架吗？</h3>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-4">
                <p className="font-semibold text-red-800">不是。</p>
                <p className="text-red-700 mt-2">ALFWorld 是<strong>环境/测试基准</strong>，不是测试框架。</p>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">概念</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">是什么</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">类比</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">ALFWorld</td><td className="px-4 py-3 text-sm text-zinc-600">环境，提供任务场景</td><td className="px-4 py-3 text-sm text-zinc-500">试卷（题目本身）</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Agent</td><td className="px-4 py-3 text-sm text-zinc-600">执行任务的程序</td><td className="px-4 py-3 text-sm text-zinc-500">考生</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Benchmark 框架</td><td className="px-4 py-3 text-sm text-zinc-600">组织测试、收集数据、生成报告</td><td className="px-4 py-3 text-sm text-zinc-500">考试系统</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Memory 系统</td><td className="px-4 py-3 text-sm text-zinc-600">帮助 Agent 记忆和提高</td><td className="px-4 py-3 text-sm text-zinc-500">考生的笔记本</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 rounded-xl p-5">
                  <p className="font-medium text-green-800 mb-2">✅ ALFWorld 提供</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 虚拟环境（家庭场景）</li>
                    <li>• 预定义任务（把苹果放冰箱等）</li>
                    <li>• 标准接口（step, reset, observation）</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-5">
                  <p className="font-medium text-red-800 mb-2">❌ ALFWorld 不提供</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Agent 实现（你要自己写）</li>
                    <li>• 评估框架（你要自己写）</li>
                    <li>• 对比实验工具（你要自己写）</li>
                    <li>• 结果分析（你要自己写）</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Q2: 笨Agent vs 聪明Agent */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q2: "笨 Agent" 和 "聪明 Agent" 是怎么来的？</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-orange-50 rounded-xl p-5">
                  <p className="font-semibold text-orange-800 mb-3">笨 Agent (DumbAgent)</p>
                  <p className="text-sm text-orange-700 mb-3">完全没有策略，随机乱试</p>
                  <div className="bg-orange-100 rounded-lg p-3">
                    <code className="text-xs text-orange-800">
                      def act(self, observation):<br/>
                      &nbsp;&nbsp;return random.choice(所有可能的动作)
                    </code>
                  </div>
                  <p className="text-sm text-orange-600 mt-3">就像：一个人闭着眼睛，随机按键</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5">
                  <p className="font-semibold text-blue-800 mb-3">聪明 Agent (SmartAgent)</p>
                  <p className="text-sm text-blue-700 mb-3">有明确的状态机，按步骤执行</p>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <code className="text-xs text-blue-800">
                      if 当前阶段 == "找苹果": 去客厅<br/>
                      elif 当前阶段 == "拿苹果": 拿起苹果
                    </code>
                  </div>
                  <p className="text-sm text-blue-600 mt-3">就像：一个人拿着清单，一步一步执行</p>
                </div>
              </div>

              <div className="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-5">
                <p className="font-medium text-violet-800 mb-2">Benchmark 要证明</p>
                <p className="text-sm text-violet-700">有了 Memory，笨 Agent 可以变成聪明 Agent</p>
                <div className="mt-3 font-mono text-xs text-violet-600">
                  无 Memory: 笨 Agent → 永远笨 → 表现不变<br/>
                  有 Memory: 笨 Agent → 学习经验 → 变聪明 → 表现提升
                </div>
              </div>
            </div>

            {/* Q3: React、Expel、SkillNet */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q3: React、Expel、SkillNet 分别是什么？</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <p className="font-semibold text-zinc-800 mb-2">React (2022) = Reasoning + Acting</p>
                  <p className="text-sm text-zinc-600 mb-3">边想边做，但<strong>没有记忆</strong>，每次都是从零开始</p>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="bg-zinc-200 px-2 py-1 rounded">思考 Thought</span>
                    <span>→</span>
                    <span className="bg-zinc-200 px-2 py-1 rounded">行动 Action</span>
                    <span>→</span>
                    <span className="bg-zinc-200 px-2 py-1 rounded">观察 Observation</span>
                    <span>→ 循环</span>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-xl p-5">
                  <p className="font-semibold text-zinc-800 mb-2">Expel (2023) = Experience Learning</p>
                  <p className="text-sm text-zinc-600 mb-3">会从过去的经验中学习，但经验是<strong>"隐式"的</strong>，不是结构化的技能文件</p>
                  <div className="text-xs text-zinc-500">
                    第1次任务 → 提取经验 → 第2次任务参考经验 → 表现更好
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-5">
                  <p className="font-semibold text-emerald-800 mb-2">SkillNet = 技能网络</p>
                  <p className="text-sm text-emerald-700 mb-3">把经验变成<strong>结构化的"技能"</strong>（SKILL.md 文件）</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-emerald-600">
                    <span>✓ 可被评估（五维度）</span>
                    <span>✓ 可被检索（相似任务）</span>
                    <span>✓ 可被组合（和其他技能）</span>
                    <span>✓ 可被共享（给别人用）</span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">对比</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">React</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">Expel</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">SkillNet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">记忆</td><td className="px-4 py-3 text-sm text-red-600">❌ 无</td><td className="px-4 py-3 text-sm text-yellow-600">✅ 有（隐式）</td><td className="px-4 py-3 text-sm text-green-600">✅ 有（显式技能）</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">经验形式</td><td className="px-4 py-3 text-sm text-zinc-500">无</td><td className="px-4 py-3 text-sm text-zinc-500">上下文中的文字</td><td className="px-4 py-3 text-sm text-zinc-500">结构化的 SKILL.md</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">可复用</td><td className="px-4 py-3 text-sm text-zinc-500">-</td><td className="px-4 py-3 text-sm text-zinc-500">有限</td><td className="px-4 py-3 text-sm text-green-600">✅ 高度可复用</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">可评估</td><td className="px-4 py-3 text-sm text-zinc-500">-</td><td className="px-4 py-3 text-sm text-red-600">❌</td><td className="px-4 py-3 text-sm text-green-600">✅ 五维度评估</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Q4: SkillNet 的 Agent 来源 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q4: SkillNet 的 Agent 和测试框架是自己写的吗？</h3>
              <p className="text-zinc-600 mb-4">部分是，部分不是。</p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">方法</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">来源</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">说明</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">React</td><td className="px-4 py-3 text-sm text-zinc-500">别人的论文 (2022)</td><td className="px-4 py-3 text-sm text-zinc-500">基础的 ReAct 推理方法</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Expel</td><td className="px-4 py-3 text-sm text-zinc-500">别人的论文 (2023)</td><td className="px-4 py-3 text-sm text-zinc-500">经验学习的方法</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">+ SkillNet</td><td className="px-4 py-3 text-sm text-emerald-600">他们写的</td><td className="px-4 py-3 text-sm text-zinc-500">把 SkillNet 技能库接入上面两个</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
                <p className="font-medium text-amber-800 mb-2">SkillNet 的真正贡献</p>
                <p className="text-sm text-amber-700">不是写了一个全新的 Agent，而是提供了一个"技能库"，可以接入任何 Agent</p>
                <div className="mt-3 text-sm text-amber-600 font-mono">
                  React/Expel = 发动机 (别人的)<br/>
                  SkillNet = 涡轮增压器 (他们的)<br/>
                  React + SkillNet = 给发动机加装涡轮，性能提升
                </div>
              </div>
            </div>

            {/* Q5: 三者关系 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q5: SkillNet、Acontext、Benchmark 三者是什么关系？</h3>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-4">
                <p className="font-medium text-blue-800 mb-2">首先搞清楚：SkillNet 和 Acontext 是两个独立的东西</p>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">系统</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">定位</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">核心功能</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">SkillNet</td><td className="px-4 py-3 text-sm text-zinc-600">技能管理平台</td><td className="px-4 py-3 text-sm text-zinc-500">200k 技能库 + 评估框架 + 关系图谱</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Acontext</td><td className="px-4 py-3 text-sm text-zinc-600">技能记忆层</td><td className="px-4 py-3 text-sm text-zinc-500">让 Agent 记住和复用经验</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Benchmark</td><td className="px-4 py-3 text-sm text-zinc-600">测试验证</td><td className="px-4 py-3 text-sm text-zinc-500">证明 Memory 系统是否有效</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Q6: 用 SkillNet 评估 Acontext */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q6: 可以用 SkillNet 给 Acontext 做评估吗？</h3>
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-5 mb-4">
                <p className="font-semibold text-green-800">可以！有两种方式：</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <p className="font-semibold text-zinc-800 mb-3">方式 1: 评估技能质量</p>
                  <p className="text-sm text-zinc-600 mb-3">用 SkillNet 五维度评估框架评估 Acontext 生成的技能</p>
                  <ul className="text-sm text-zinc-500 space-y-1">
                    <li>• Safety - 是否有危险操作？</li>
                    <li>• Completeness - 是否包含所有步骤？</li>
                    <li>• Executability - 能否实际执行？</li>
                    <li>• Maintainability - 是否易于维护？</li>
                    <li>• Cost-awareness - 执行成本多少？</li>
                  </ul>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <p className="font-semibold text-zinc-800 mb-3">方式 2: 跑对比实验</p>
                  <p className="text-sm text-zinc-600 mb-3">用 SkillNet 的 Benchmark 环境测试 Acontext 的效果</p>
                  <div className="text-sm text-zinc-500">
                    无 Acontext (对照组) VS 有 Acontext (实验组)<br/>
                    在相同环境 (ALFWorld/WebShop) 运行<br/>
                    对比成功率、步数等指标
                  </div>
                </div>
              </div>
            </div>

            {/* Q7: 评估指标 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q7: 评估指标有哪些？怎么选？</h3>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">指标</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">说明</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">计算方式</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">任务成功率</td><td className="px-4 py-3 text-sm text-zinc-500">完成了多少任务</td><td className="px-4 py-3 text-sm text-zinc-500 font-mono text-xs">成功数 / 总任务数</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">平均步数</td><td className="px-4 py-3 text-sm text-zinc-500">完成任务用了多少步</td><td className="px-4 py-3 text-sm text-zinc-500 font-mono text-xs">总步数 / 成功数</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">学习曲线</td><td className="px-4 py-3 text-sm text-zinc-500">多轮后表现提升</td><td className="px-4 py-3 text-sm text-zinc-500 font-mono text-xs">后N轮 - 前N轮</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">记忆利用率</td><td className="px-4 py-3 text-sm text-zinc-500">复用了多少已存经验</td><td className="px-4 py-3 text-sm text-zinc-500 font-mono text-xs">复用次数 / 总动作数</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">泛化能力</td><td className="px-4 py-3 text-sm text-zinc-500">能否处理新任务</td><td className="px-4 py-3 text-sm text-zinc-500 font-mono text-xs">新任务成功率</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-violet-50 rounded-xl p-5">
                <p className="font-medium text-violet-800 mb-2">怎么选？</p>
                <ul className="text-sm text-violet-700 space-y-1">
                  <li>• <strong>基础实验</strong>：成功率 + 平均步数</li>
                  <li>• <strong>学习效果</strong>：学习曲线</li>
                  <li>• <strong>深入分析</strong>：记忆利用率 + 泛化能力</li>
                </ul>
              </div>
            </div>

            {/* Q8: 实验设计 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q8: Benchmark 实验怎么设计？</h3>

              <div className="bg-zinc-50 rounded-xl p-5 mb-6">
                <p className="font-semibold text-zinc-800 mb-3">基本原则</p>
                <ol className="text-sm text-zinc-600 space-y-2">
                  <li>1. <strong>有对照组</strong>：无 Memory vs 有 Memory</li>
                  <li>2. <strong>控制变量</strong>：相同环境、相同任务、相同 Agent 架构</li>
                  <li>3. <strong>多次实验</strong>：取平均，减少随机性</li>
                  <li>4. <strong>明确指标</strong>：知道要测量什么</li>
                </ol>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 mb-6">
                <p className="font-semibold text-blue-800 mb-3">实验流程</p>
                <div className="text-sm text-blue-700 font-mono space-y-1">
                  <p>1. 准备环境 (ALFWorld 或模拟环境)</p>
                  <p>2. 实现 Agent (对照组: 无Memory / 实验组: 有Memory)</p>
                  <p>3. 运行多轮实验 (如 5 轮 × 10 个任务)</p>
                  <p>4. 收集数据 (成功率、步数、学习曲线)</p>
                  <p>5. 分析结果 (对比两组表现)</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">结果</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">说明</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">下一步</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-green-600 font-medium">实验组 &gt; 对照组</td><td className="px-4 py-3 text-sm text-zinc-500">✅ Memory 有效</td><td className="px-4 py-3 text-sm text-zinc-500">可以发表/发布</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-yellow-600 font-medium">实验组 ≈ 对照组</td><td className="px-4 py-3 text-sm text-zinc-500">❌ Memory 没用</td><td className="px-4 py-3 text-sm text-zinc-500">检查实现是否有问题</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-red-600 font-medium">实验组 &lt; 对照组</td><td className="px-4 py-3 text-sm text-zinc-500">❌ Memory 有害</td><td className="px-4 py-3 text-sm text-zinc-500">检查是否记忆了错误内容</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Q9: 论文对比实验 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q9: 论文的对比实验是怎么做的？</h3>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">方法</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">Agent 架构</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">记忆</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">技能来源</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">React</td><td className="px-4 py-3 text-sm text-zinc-500">T-A-O 循环</td><td className="px-4 py-3 text-sm text-red-600">❌ 无</td><td className="px-4 py-3 text-sm text-zinc-400">-</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Expel</td><td className="px-4 py-3 text-sm text-zinc-500">React + 经验学习</td><td className="px-4 py-3 text-sm text-yellow-600">✅ 隐式</td><td className="px-4 py-3 text-sm text-zinc-500">上下文示例</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">+ SkillNet</td><td className="px-4 py-3 text-sm text-zinc-500">同上</td><td className="px-4 py-3 text-sm text-green-600">✅ 显式</td><td className="px-4 py-3 text-sm text-zinc-500">结构化技能库</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5 mb-4">
                <p className="font-medium text-emerald-800 mb-2">核心结论</p>
                <p className="text-sm text-emerald-700">结构化的技能库比隐式记忆更有效</p>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm text-emerald-600">
                  <div>React → + SkillNet: <strong>+40%</strong> 奖励</div>
                  <div>Expel → + SkillNet: <strong>+30%</strong> 奖励</div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-xl p-5">
                <p className="font-medium text-zinc-800 mb-3">代码仓库</p>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li>• <strong>React</strong>: <a href="https://github.com/ysymyth/ReAct" className="text-blue-600 hover:underline" target="_blank" rel="noopener">github.com/ysymyth/ReAct</a></li>
                  <li>• <strong>Expel</strong>: <a href="https://github.com/LeapLabTHU/ExpeL" className="text-blue-600 hover:underline" target="_blank" rel="noopener">github.com/LeapLabTHU/ExpeL</a></li>
                  <li>• <strong>ALFWorld</strong>: <a href="https://github.com/alfworld/alfworld" className="text-blue-600 hover:underline" target="_blank" rel="noopener">github.com/alfworld/alfworld</a></li>
                </ul>
              </div>
            </div>

            {/* Q10: 下一步 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q10: 下一步该做什么？</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <p className="font-semibold text-green-800 mb-2">A. 继续了解概念</p>
                  <p className="text-sm text-green-600">读文档，理解理论</p>
                  <p className="text-xs text-green-500 mt-2">难度：简单</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5">
                  <p className="font-semibold text-blue-800 mb-2">B. 写模拟 Benchmark</p>
                  <p className="text-sm text-blue-600">用模拟环境写框架，不依赖 ALFWorld</p>
                  <p className="text-xs text-blue-500 mt-2">难度：中等</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5">
                  <p className="font-semibold text-orange-800 mb-2">C. 跑真实环境</p>
                  <p className="text-sm text-orange-600">配置 ALFWorld，跑真实实验</p>
                  <p className="text-xs text-orange-500 mt-2">难度：较难</p>
                </div>
              </div>

              <div className="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-5">
                <p className="font-medium text-violet-800 mb-2">建议：先做 B</p>
                <p className="text-sm text-violet-700">用模拟环境把 Benchmark 框架写出来</p>
                <ul className="text-sm text-violet-600 mt-3 space-y-1">
                  <li>• 实现通用的 Benchmark 框架</li>
                  <li>• 支持: 无 Memory vs 有 Memory 对比</li>
                  <li>• 产出: 评估报告 (成功率、步数、学习曲线)</li>
                  <li>• 之后可以接入 ALFWorld 或其他环境</li>
                </ul>
              </div>
            </div>

            {/* Q11: 术语表 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Q11: 术语表</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">术语</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-zinc-700 border-b">含义</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Benchmark</td><td className="px-4 py-3 text-sm text-zinc-500">基准测试，标准化的评估方法</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Environment</td><td className="px-4 py-3 text-sm text-zinc-500">环境，Agent 执行任务的虚拟世界</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Agent</td><td className="px-4 py-3 text-sm text-zinc-500">智能体，执行任务的程序</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Episode</td><td className="px-4 py-3 text-sm text-zinc-500">一次完整的任务执行</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Trajectory</td><td className="px-4 py-3 text-sm text-zinc-500">执行轨迹，动作序列</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Skill</td><td className="px-4 py-3 text-sm text-zinc-500">技能，可复用的能力单元</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Memory</td><td className="px-4 py-3 text-sm text-zinc-500">记忆系统，存储和检索经验</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Skill Memory</td><td className="px-4 py-3 text-sm text-zinc-500">技能型记忆，把经验存成技能</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Baseline</td><td className="px-4 py-3 text-sm text-zinc-500">基线，对照组</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-zinc-600 font-medium">Ablation</td><td className="px-4 py-3 text-sm text-zinc-500">消融实验，去掉某功能看效果</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

          </section>
        )}

        {/* 导航 */}
        <footer className="pt-8 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <a href="/docs/skills" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              ← 技能安装
            </a>
            <a href="/docs" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              文档目录 →
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
