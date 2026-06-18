'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROMPT_OS_ZONES, PROMPT_OS_STATS, JA4JA_ENTROPY_LAYERS, PROXY_DEFENSE_COMPONENTS } from '@/lib/skills-data';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function PromptOSPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">promptc OS & Proxy Defense Stack</h1>
        <p className="text-muted-foreground mt-2">Integration of promptc OS (AI Prompt Engineering Operating System from promptcos.vercel.app) and the Enhanced Proxy Defense Stack v3.2 with JA4JA fingerprinting, QUIC, and Raft consensus.</p>
      </div>

      {/* promptc OS Section */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">⚡</span>
          <div>
            <h2 className="text-2xl font-bold">promptc OS {PROMPT_OS_STATS.version}</h2>
            <p className="text-white/70 text-sm">AI Prompt Engineering Operating System</p>
          </div>
        </div>
        <p className="text-white/90 mb-6">promptc OS is a 6-zone prompt engineering environment with specialized tools for activating, building, validating, packaging, monetizing, and systematizing AI prompts. It provides 47 modifiers, 20 templates, 7 animal perspectives, and 66 skills for comprehensive prompt engineering workflows.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Zones', value: PROMPT_OS_STATS.zones },
            { label: 'Modifiers', value: PROMPT_OS_STATS.modifiers },
            { label: 'Templates', value: PROMPT_OS_STATS.templates },
            { label: 'Skills', value: PROMPT_OS_STATS.skills },
          ].map(stat => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Zones */}
      <div>
        <h2 className="text-xl font-bold mb-4">6 Navigation Zones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROMPT_OS_ZONES.map((zone, i) => (
            <motion.div key={zone.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="border rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{zone.icon}</span>
                <h3 className="font-bold text-lg">{zone.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{zone.description}</p>
              <div className="space-y-1">
                {zone.tasks.map(task => (
                  <div key={task} className="text-xs bg-muted/50 rounded px-2 py-1">{task}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick-Start Task Prompts */}
      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Quick-Start Task Prompts</h2>
        <p className="text-sm text-muted-foreground mb-4">Copy a task prompt and paste into your AI chat for immediate results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '🎬', name: 'YouTube Growth', prompt: 'Act as a YouTube growth strategist with 10 years of experience. When I give you a topic, automatically identify the 3 best angles for that niche and generate scroll-stopping titles.' },
            { icon: '💻', name: 'Coding', prompt: 'You are a senior software engineer and architect. When I describe a feature, always write production-ready code, not demo code, and add comprehensive error handling.' },
            { icon: '📊', name: 'Business Strategy', prompt: 'Act as my COO and strategist. When I describe a problem, identify the fastest path to results (the 80/20 solution) and separate what I MUST do from what is optional.' },
            { icon: '🎨', name: 'UI/UX Design', prompt: 'You are a senior product designer. When I describe a screen, call out UX anti-patterns and accessibility failures immediately. Define the hierarchy of what the user sees first.' },
          ].map(task => (
            <div key={task.name} className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span>{task.icon}</span>
                <h4 className="font-semibold text-sm">{task.name}</h4>
              </div>
              <p className="text-xs text-muted-foreground">{task.prompt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proxy Defense Stack Section */}
      <div>
        <h2 className="text-xl font-bold mb-2">Enhanced Proxy Defense Stack v3.2</h2>
        <p className="text-sm text-muted-foreground mb-4">OWL-AGENT v4.21 — Full JA4JA + QUIC + BBRv3 + Raft + WebTransport implementation with 150-280+ effective entropy bits.</p>

        <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <h3 className="font-bold text-lg">JA4JA Entropy Metrics</h3>
              <p className="text-white/70 text-sm">150-280+ effective bits across the fingerprint suite</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="text-white/70">
                  <th className="text-left py-1 pr-4">Layer</th>
                  <th className="text-left py-1 pr-4">Entropy Bits</th>
                  <th className="text-left py-1 pr-4">Collision Resistance</th>
                </tr>
              </thead>
              <tbody>
                {JA4JA_ENTROPY_LAYERS.map(layer => (
                  <tr key={layer.id} className="border-t border-white/20">
                    <td className="py-1.5 pr-4 font-medium">{layer.name}</td>
                    <td className="py-1.5 pr-4 font-mono">{layer.entropyBits}</td>
                    <td className="py-1.5 pr-4">{layer.collisionResistance}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-white/40 font-bold">
                  <td className="py-1.5 pr-4">Total</td>
                  <td className="py-1.5 pr-4 font-mono">150-280+</td>
                  <td className="py-1.5 pr-4">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROXY_DEFENSE_COMPONENTS.map((comp, i) => (
            <motion.div key={comp.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{comp.icon}</span>
                <h3 className="font-semibold text-sm">{comp.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{comp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 bg-muted/50 rounded-lg p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">JA3 vs JA4JA Comparison</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-3">
              <p className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">JA3 (Legacy)</p>
              <p className="text-xs text-red-600 dark:text-red-400">MD5 hash — high collision risk, defeated by randomization. Obsolete for defense.</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-3">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-1">JA4JA (Modern)</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">150-280+ entropy bits, multi-layer aggregation, Rust core. Far superior collision resistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
