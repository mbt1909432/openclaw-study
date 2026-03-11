'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function BenchmarkPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'alfworld' | 'scienceworld' | 'webshop' | 'skillnet'>('overview')

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
