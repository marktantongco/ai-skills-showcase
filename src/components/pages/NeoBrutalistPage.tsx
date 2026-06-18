'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, USER_TYPES, PROXY_TYPES } from '@/lib/skills-data';

const brutalColors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A855F7', '#FF8C42', '#45B7D1', '#96CEB4', '#FFEAA7'];

/**
 * Design Approach 3: NEO-BRUTALIST
 * Bold, high contrast, thick borders, saturated colors, Gen Z aesthetic
 * Taste Skill: DESIGN_VARIANCE: 9, MOTION_INTENSITY: 4, VISUAL_DENSITY: 7
 */
export function NeoBrutalistPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white" style={{ fontFamily: "'Courier New', 'Consolas', monospace" }}>
      <div className="p-8 md:p-16">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="border-4 border-[#FFE66D] bg-[#16213e] p-8 md:p-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#FF6B6B] text-white text-xs font-bold px-3 py-1">APPROACH 03</span>
            <span className="text-[#FFE66D] text-xs">{'///'}</span>
            <span className="text-[#4ECDC4] text-xs">NEO-BRUTALIST</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tighter mb-4" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            NEO<br/>BRUTAL
          </h1>
          <p className="text-[#4ECDC4] text-lg max-w-lg">Bold. Raw. Unfiltered. High contrast with thick borders, saturated colors, and zero subtlety.</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.slice(0, 9).map((skill, i) => (
            <motion.div key={skill.id} initial={{ opacity: 0, rotateX: -10 }} animate={{ opacity: 1, rotateX: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }} className="border-4 bg-[#16213e] p-4 hover:translate-x-1 hover:-translate-y-1 transition-transform" style={{ borderColor: brutalColors[i % brutalColors.length] }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2 py-0.5" style={{ backgroundColor: brutalColors[i % brutalColors.length], color: '#1a1a2e' }}>{skill.category.toUpperCase()}</span>
                {skill.rank && <span className="text-[#FFE66D] text-xs font-bold">{skill.rank}</span>}
              </div>
              <h3 className="text-lg font-black mb-1" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>{skill.name.toUpperCase()}</h3>
              <p className="text-xs text-[#4ECDC4] leading-relaxed">{skill.purpose}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            <span className="text-[#FF6B6B]">{'//'}</span> USER TYPES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {USER_TYPES.map((user, i) => (
              <motion.div key={user.id} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="border-4 border-white/20 bg-[#16213e] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{user.icon}</span>
                  <h3 className="text-xl font-black" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>{user.name.toUpperCase()}</h3>
                </div>
                <p className="text-xs text-[#4ECDC4] mb-2">{user.primaryAgentMode}</p>
                <div className="flex flex-wrap gap-1">
                  {user.coreSkills.slice(0, 4).map(s => (
                    <span key={s} className="text-[10px] bg-white/10 text-white px-2 py-0.5">{s}</span>
                  ))}
                  <span className="text-[10px] text-[#FFE66D]">+{user.coreSkills.length - 4}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            <span className="text-[#A855F7]">{'//'}</span> PROXY ARCH
          </h2>
          <div className="space-y-4">
            {PROXY_TYPES.map((proxy, i) => (
              <motion.div key={proxy.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.1 }} className="border-4 bg-[#16213e] p-4" style={{ borderLeftColor: brutalColors[i % brutalColors.length], borderLeftWidth: '8px' }}>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-black" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>{proxy.name.toUpperCase()}</h3>
                  <span className="text-[10px] bg-white/10 text-white px-2 py-0.5">{proxy.category}</span>
                </div>
                <p className="text-xs text-[#4ECDC4] leading-relaxed">{proxy.description}</p>
                <p className="text-xs text-[#FFE66D] mt-2 italic">→ {proxy.creativeInsight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
