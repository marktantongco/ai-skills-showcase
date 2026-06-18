'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXTRAORDINARY_DESIGN_PRINCIPLES, DESIGN_ARCHITECTURE_LAYERS } from '@/lib/skills-data';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function DesignSystemPage() {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Extraordinary Web Design System</h1>
        <p className="text-muted-foreground mt-2">Rethinking + Innovation Framework v1.0 — Designing websites that do not just work, they transform. From the Extraordinary-web-design-prompt.md document.</p>
      </div>

      {/* Core Mandate */}
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-3">Core Mandate</h2>
        <p className="text-lg text-white/90 mb-4">Not &quot;pretty sites.&quot; Not &quot;usable sites.&quot; <strong>Extraordinary sites that make people feel something and take action.</strong></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {['Rethink category conventions', 'Find the "secret sauce" competitors miss', 'Create spatial + psychological + emotional alignment', 'Make every pixel earn its existence'].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm">{item}</div>
          ))}
        </div>
      </div>

      {/* 7 Design Architecture Layers */}
      <div>
        <h2 className="text-xl font-bold mb-4">7 Design Architecture Layers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {DESIGN_ARCHITECTURE_LAYERS.map((layer, i) => (
            <motion.div key={layer.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">{layer.icon}</div>
              <h3 className="font-bold text-sm mb-1">{layer.name}</h3>
              <p className="text-xs text-muted-foreground">{layer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Three Design Diagnostic Questions */}
      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Three Design Diagnostic Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What is the TRUE human need being solved?', hint: 'Not what they asked to build — what they actually came to accomplish' },
            { q: 'What does the competitor miss?', hint: 'The industry blind spot — the moment where people get confused or bored' },
            { q: 'What is the simplest extraordinary truth?', hint: 'Not the most complex innovation — the one insight that changes everything' },
          ].map((item, i) => (
            <div key={i} className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">{i + 1}. {item.q}</h3>
              <p className="text-xs text-muted-foreground">{item.hint}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Secret Sauce */}
      <div>
        <h2 className="text-xl font-bold mb-4">Industry Secret Sauce</h2>
        <p className="text-sm text-muted-foreground mb-4">What competitors miss in each industry — and the design secret that wins.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTRAORDINARY_DESIGN_PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setExpandedIndustry(expandedIndustry === principle.id ? null : principle.id)}
              className="cursor-pointer border rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{principle.icon}</span>
                  <div>
                    <h3 className="font-bold">{principle.name}</h3>
                    <span className="text-xs text-muted-foreground">{principle.industry}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
                <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                  <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300 mb-1">Secret Sauce</p>
                  <p className="text-xs text-emerald-900 dark:text-emerald-200">{principle.secret}</p>
                </div>
              </div>
              {expandedIndustry === principle.id && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-muted/50 p-4 border-t">
                  <p className="text-xs font-medium mb-1">Example</p>
                  <p className="text-xs text-muted-foreground">{principle.example}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Psychological Journey */}
      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">The Psychological Journey</h2>
        <p className="text-sm text-muted-foreground mb-4">People do not consume websites linearly. Structure for this journey, not against it.</p>
        <div className="space-y-3">
          {[
            { time: '0-3 seconds', phase: 'Skepticism', action: 'Immediate clarity — what is this, is it for me, what is the ask?', color: 'bg-red-100 dark:bg-red-950/30 text-red-800 dark:text-red-200' },
            { time: '3-10 seconds', phase: 'Scanning for Relief', action: 'Emotional safety — who made this, who uses it, why should I trust?', color: 'bg-orange-100 dark:bg-orange-950/30 text-orange-800 dark:text-orange-200' },
            { time: '10-30 seconds', phase: 'Looking for Proof', action: 'Evidence — how it works, real examples, social proof', color: 'bg-amber-100 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200' },
            { time: '30-60 seconds', phase: 'Deciding Trust', action: 'Confidence building — does this solve my problem?', color: 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200' },
            { time: '1-5 minutes', phase: 'Taking Action', action: 'Conversion — clear CTA, easy next step, confidence in choice', color: 'bg-teal-100 dark:bg-teal-950/30 text-teal-800 dark:text-teal-200' },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted-foreground w-24 flex-shrink-0">{step.time}</span>
              <span className={`${step.color} px-3 py-1.5 rounded-lg text-sm font-medium`}>{step.phase}</span>
              <span className="text-sm text-muted-foreground">{step.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Innovation Formula */}
      <div className="bg-gradient-to-r from-amber-50 to-rose-50 dark:from-amber-950/20 dark:to-rose-950/20 border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">Innovation Secret Sauce Formula</h2>
        <div className="space-y-2 text-sm">
          <p>Find the universal frustration in the industry</p>
          <p className="pl-4 text-muted-foreground">+ Find the moment where everyone defaults to same solution</p>
          <p className="pl-8 text-muted-foreground">+ Design something that solves it radically differently</p>
          <p className="pl-12 text-muted-foreground">+ Execute it with precision</p>
          <p className="pl-16 font-bold">= Unforgettable</p>
        </div>
      </div>
    </div>
  );
}
