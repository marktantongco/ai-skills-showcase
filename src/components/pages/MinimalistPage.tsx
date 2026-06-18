'use client';

import React from 'react';
import { SKILLS, USER_TYPES, AGENT_TIERS, PROXY_TYPES } from '@/lib/skills-data';

/**
 * Design Approach 2: MINIMALIST
 * Notion/Linear editorial style, warm monochrome, serif+sans contrast
 * Taste Skill: DESIGN_VARIANCE: 4, MOTION_INTENSITY: 2, VISUAL_DENSITY: 3
 */
export function MinimalistPage() {
  return (
    <div className="min-h-screen bg-[#f5f0eb] text-[#1a1a1a]" style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}>
      <div className="max-w-4xl mx-auto py-24 px-8">
        <p className="text-xs text-[#a09880] uppercase tracking-widest mb-4">Design Approach 02</p>
        <h1 className="text-5xl md:text-7xl leading-tight mb-2" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          Minimalist
        </h1>
        <p className="text-[#8a8070] text-sm mb-16">Notion/Linear editorial style with warm monochrome, serif contrast, and bento grids</p>

        <div className="grid grid-cols-2 gap-px bg-[#d4cfc9] mb-24">
          {SKILLS.slice(0, 8).map((skill) => (
            <div key={skill.id} className="bg-[#f5f0eb] p-8 hover:bg-[#eee9e3] transition-colors">
              <p className="text-xs text-[#a09880] uppercase tracking-widest mb-4">{skill.category}</p>
              <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "'Georgia', serif" }}>{skill.name}</h3>
              <p className="text-sm text-[#6b6355]">{skill.purpose}</p>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <p className="text-xs text-[#a09880] uppercase tracking-widest mb-8">User Types</p>
          <div className="space-y-0">
            {USER_TYPES.map((user) => (
              <div key={user.id} className="flex items-center justify-between py-4 border-b border-[#d4cfc9]">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{user.icon}</span>
                  <div>
                    <h3 className="font-medium" style={{ fontFamily: "'Georgia', serif" }}>{user.name}</h3>
                    <p className="text-xs text-[#8a8070]">{user.primaryAgentMode}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-[#6b6355]">{user.coreSkills.length} skills</span>
                  <p className="text-xs text-[#a09880]">{user.tokenBudget}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <p className="text-xs text-[#a09880] uppercase tracking-widest mb-8">Agent Tiers</p>
          <div className="grid grid-cols-2 gap-px bg-[#d4cfc9]">
            {AGENT_TIERS.map((tier) => (
              <div key={tier.id} className="bg-[#f5f0eb] p-8">
                <h3 className="text-lg font-medium mb-1" style={{ fontFamily: "'Georgia', serif" }}>{tier.name}</h3>
                <p className="text-xs text-[#a09880] font-mono mb-3">{tier.id} · {tier.tokenCost.toLocaleString()} tokens</p>
                <p className="text-sm text-[#6b6355]">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <p className="text-xs text-[#a09880] uppercase tracking-widest mb-8">Proxy Architecture</p>
          <div className="space-y-8">
            {PROXY_TYPES.map((proxy) => (
              <div key={proxy.id} className="border-b border-[#d4cfc9] pb-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-2xl font-medium" style={{ fontFamily: "'Georgia', serif" }}>{proxy.name}</h3>
                  <span className="text-xs text-[#a09880] uppercase tracking-widest">{proxy.category}</span>
                </div>
                <p className="text-sm text-[#6b6355] leading-relaxed max-w-2xl">{proxy.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-[#a09880] uppercase tracking-widest mb-2">Strategy</p>
                    <p className="text-sm text-[#6b6355]">{proxy.longTermStrategy}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#a09880] uppercase tracking-widest mb-2">Insight</p>
                    <p className="text-sm text-[#6b6355] italic">{proxy.creativeInsight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
