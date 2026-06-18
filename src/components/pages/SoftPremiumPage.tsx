'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, USER_TYPES, PROXY_TYPES } from '@/lib/skills-data';

const springTransition = { type: 'spring' as const, stiffness: 60, damping: 20 };

/**
 * Design Approach 1: SOFT PREMIUM
 * Luxury aesthetics, spring physics animations, serif typography, massive whitespace
 * Taste Skill: DESIGN_VARIANCE: 8, MOTION_INTENSITY: 6, VISUAL_DENSITY: 2
 */
export function SoftPremiumPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springTransition, delay: 0.2 }} className="py-24 px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6" style={{ fontFamily: 'system-ui' }}>Design Approach 01</p>
        <h1 className="text-6xl md:text-8xl font-light leading-none tracking-tight mb-8" style={{ fontFamily: "'Georgia', serif" }}>
          Soft<br />Premium
        </h1>
        <p className="text-neutral-400 max-w-xl mx-auto text-lg" style={{ fontFamily: 'system-ui' }}>
          Luxury aesthetics with spring physics animations, serif typography contrast, and depth through layering.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.slice(0, 9).map((skill, i) => (
            <motion.div key={skill.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springTransition, delay: 0.1 + i * 0.08 }} className="group relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-all duration-500" whileHover={{ y: -4, transition: springTransition }}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <span className="text-xs uppercase tracking-widest text-neutral-500" style={{ fontFamily: 'system-ui' }}>{skill.category}</span>
                <h3 className="text-xl font-light mt-2 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{skill.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed" style={{ fontFamily: 'system-ui' }}>{skill.purpose}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500" style={{ fontFamily: 'system-ui' }}>
                  {skill.rank && <span>{skill.rank}</span>}
                  {skill.installs && <span>· {skill.installs}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6" style={{ fontFamily: 'system-ui' }}>User Profiles</p>
          <div className="space-y-4">
            {USER_TYPES.map((user, i) => (
              <motion.div key={user.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 1.1 + i * 0.1 }} className="flex items-center gap-6 p-6 border border-neutral-800 rounded-xl hover:bg-neutral-900/50 transition-colors">
                <span className="text-4xl">{user.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-light" style={{ fontFamily: "'Georgia', serif" }}>{user.name}</h3>
                  <p className="text-sm text-neutral-400 mt-1" style={{ fontFamily: 'system-ui' }}>{user.primaryAgentMode} · {user.tokenBudget}</p>
                </div>
                <div className="flex gap-2">
                  {user.coreSkills.slice(0, 3).map(s => (
                    <span key={s} className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full" style={{ fontFamily: 'system-ui' }}>{s}</span>
                  ))}
                  <span className="text-xs text-neutral-500" style={{ fontFamily: 'system-ui' }}>+{user.coreSkills.length - 3}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6" style={{ fontFamily: 'system-ui' }}>Proxy Architecture</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROXY_TYPES.map((proxy, i) => (
              <motion.div key={proxy.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springTransition, delay: 2.1 + i * 0.15 }} className="border border-neutral-800 rounded-xl p-8">
                <h3 className="text-2xl font-light mb-2" style={{ fontFamily: "'Georgia', serif" }}>{proxy.name}</h3>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4" style={{ fontFamily: 'system-ui' }}>{proxy.category}</p>
                <p className="text-sm text-neutral-400 leading-relaxed" style={{ fontFamily: 'system-ui' }}>{proxy.description}</p>
                <div className="mt-4 p-4 bg-neutral-900/50 rounded-lg">
                  <p className="text-xs text-neutral-500 italic" style={{ fontFamily: "'Georgia', serif" }}>&ldquo;{proxy.creativeInsight}&rdquo;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
