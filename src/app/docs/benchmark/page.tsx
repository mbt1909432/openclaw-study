'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function BenchmarkPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'alfworld' | 'longmemeval' | 'skillnet'>('overview')

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
            onClick={() => setActiveTab('longmemeval')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'longmemeval'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-zinc-500 hover:text-zinc-700'
            }`}
          >
            LongMemEval
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

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎮</span>
                  <h4 className="text-lg font-semibold text-emerald-800">ALFWorld</h4>
                </div>
                <p className="text-sm text-emerald-700 mb-3">
                  用于评估 Agent 在交互式环境中的任务完成能力
                </p>
                <ul className="text-sm text-emerald-600 space-y-1">
                  <li>• 文本冒险游戏环境</li>
                  <li>• 多步骤任务规划</li>
                  <li>• 工具使用能力测试</li>
                </ul>
              </div>

              <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🧠</span>
                  <h4 className="text-lg font-semibold text-blue-800">LongMemEval</h4>
                </div>
                <p className="text-sm text-blue-700 mb-3">
                  用于评估 Agent 的长期记忆能力
                </p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• 跨会话记忆检索</li>
                  <li>• 长期信息保留</li>
                  <li>• 记忆更新与遗忘</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">相关论文</h3>

            <div className="border border-amber-200 bg-amber-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📚</span>
                <h4 className="text-lg font-semibold text-amber-800">SkillNet</h4>
              </div>
              <p className="text-sm text-amber-700 mb-3">
                <strong>SkillNet: Create, Evaluate, and Connect AI Skills</strong>
              </p>
              <p className="text-sm text-amber-600 mb-3">
                浙江大学、阿里巴巴、腾讯等联合发布的技能学习框架论文
              </p>
              <a
                href="https://arxiv.org/html/2603.04448v1"
                target="_blank"
                rel="noopener"
                className="text-sm text-amber-600 hover:text-amber-800 underline"
              >
                查看 arXiv 论文 →
              </a>
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

        {/* LongMemEval Tab */}
        {activeTab === 'longmemeval' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">LongMemEval Benchmark</h2>

            <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                <span className="text-zinc-400 text-sm">简介</span>
              </div>
              <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                <code>{`LongMemEval 是一个专门评估 LLM 长期记忆能力的基准测试。

测试 Agent 在长时间跨度内的信息保留、检索和更新能力。`}</code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">核心能力测试</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-medium text-zinc-800">跨会话记忆</h4>
                  <p className="text-sm text-zinc-600">测试 Agent 在多个独立会话之间保留和检索信息的能力</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-medium text-zinc-800">信息更新</h4>
                  <p className="text-sm text-zinc-600">测试 Agent 更新已存储信息的能力，处理信息变化</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-medium text-zinc-800">时间推理</h4>
                  <p className="text-sm text-zinc-600">测试 Agent 基于时间信息进行推理的能力</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-medium text-zinc-800">遗忘与优先级</h4>
                  <p className="text-sm text-zinc-600">测试 Agent 处理信息遗忘和优先级排序的能力</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5">
              <p className="font-medium text-blue-800 mb-2">为什么选择 LongMemEval？</p>
              <p className="text-sm text-blue-700">
                直接评估 Agent 的长期记忆能力，与 OpenClaw 的四层记忆架构高度相关。
              </p>
            </div>
          </section>
        )}

        {/* SkillNet Tab */}
        {activeTab === 'skillnet' && (
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">SkillNet 论文</h2>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 mb-8 text-white">
              <h3 className="text-xl font-bold mb-2">SkillNet: Create, Evaluate, and Connect AI Skills</h3>
              <p className="text-slate-300 text-sm mb-4">
                浙江大学、阿里巴巴、腾讯、蚂蚁集团等联合发布
              </p>
              <a
                href="https://arxiv.org/html/2603.04448v1"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-800 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
              >
                查看 arXiv 论文
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">论文摘要</h3>

            <div className="bg-zinc-50 rounded-xl p-6 mb-8">
              <p className="text-zinc-700 leading-relaxed">
                SkillNet 提出了一个统一的框架来创建、评估和连接 AI 技能。
                该框架支持技能的模块化组合，使得 Agent 能够通过组合现有技能来完成复杂任务，
                同时提供标准化的评估方法来衡量技能质量。
              </p>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">核心贡献</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="border border-violet-200 bg-violet-50 rounded-xl p-5">
                <h4 className="font-semibold text-violet-800 mb-2">技能创建</h4>
                <p className="text-sm text-violet-700">标准化的技能定义和创建流程</p>
              </div>
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
                <h4 className="font-semibold text-blue-800 mb-2">技能评估</h4>
                <p className="text-sm text-blue-700">统一的技能质量评估框架</p>
              </div>
              <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
                <h4 className="font-semibold text-emerald-800 mb-2">技能连接</h4>
                <p className="text-sm text-emerald-700">模块化技能组合机制</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-zinc-800 mb-4">与 OpenClaw 的关系</h3>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
              <p className="text-sm text-amber-700">
                SkillNet 的技能组合理念与 OpenClaw 的 Skills 系统高度契合。
                OpenClaw 的 workspace/skills/ 目录提供了工作区级别的技能定义能力，
                可以参考 SkillNet 的评估框架来衡量技能质量。
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
