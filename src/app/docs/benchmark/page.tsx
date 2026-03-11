'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function BenchmarkPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'experiment' | 'alfworld' | 'scienceworld' | 'webshop' | 'skillnet' | 'code'>('overview')

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
