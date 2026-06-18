'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Monitor, Cpu } from 'lucide-react';
import { AGENTIC_TOOLS, PROXY_STACKS_RESEARCH, type AgenticTool } from '@/lib/skills-data';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const categoryColors: Record<string, string> = {
  IDE: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
  CLI: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  Both: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
};

const categoryIcons: Record<string, React.ReactNode> = {
  IDE: <Monitor className="w-4 h-4" />,
  CLI: <Terminal className="w-4 h-4" />,
  Both: <Cpu className="w-4 h-4" />,
};

export function AgenticToolsPage() {
  const [filter, setFilter] = useState<'all' | 'IDE' | 'CLI' | 'Both'>('all');
  const [activeTab, setActiveTab] = useState<'tools' | 'proxy-stacks'>('tools');

  const filtered = filter === 'all' ? AGENTIC_TOOLS : AGENTIC_TOOLS.filter(t => t.category === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Agentic Tools & Proxy Stacks</h1>
        <p className="text-muted-foreground mt-2">Top 10 agentic development tools and 6 proxy/wrapper combination stacks from the AI Agentic Tools Research report. Also includes OpenCode plugins and orchestration frameworks.</p>
      </div>

      <div className="flex border-b">
        {(['tools', 'proxy-stacks'] as const).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors capitalize ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>
            {tab === 'tools' ? 'Agentic Tools' : 'Proxy Stacks'}
          </button>
        ))}
      </div>

      {activeTab === 'tools' && (
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {(['all', 'IDE', 'CLI', 'Both'] as const).map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${filter === cat ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><div className="text-lg font-bold text-purple-600">{AGENTIC_TOOLS.filter(t => t.category === 'IDE').length}</div><div className="text-xs text-muted-foreground">IDE Tools</div></div>
              <div><div className="text-lg font-bold text-emerald-600">{AGENTIC_TOOLS.filter(t => t.category === 'CLI').length}</div><div className="text-xs text-muted-foreground">CLI Tools</div></div>
              <div><div className="text-lg font-bold text-amber-600">{AGENTIC_TOOLS.filter(t => t.category === 'Both').length}</div><div className="text-xs text-muted-foreground">Hybrid</div></div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">CLI dominance: 9 of 20 tools are CLI-first — developers increasingly prefer terminal-based agentic workflows. 8 tools are free with BYOK.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map((tool, i) => (
              <motion.div key={tool.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="border rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    {categoryIcons[tool.category]}
                    <h3 className="font-bold">{tool.name}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[tool.category]}`}>{tool.category}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-muted px-2 py-1 rounded-md">{tool.pricing}</span>
                  {tool.stars && <span className="text-xs text-muted-foreground">⭐ {tool.stars}</span>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-3">Recommended Combination Stacks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Free Max Stack', components: 'FreeLLMAPI → LiteLLM → OpenCode/Aider', use: 'Maximum free tokens (~1.7B/mo)' },
                { name: 'Self-Hosted Stack', components: 'New-API + LiteLLM + Ollama', use: 'Private with local + cloud models' },
                { name: 'Enterprise Stack', components: 'Portkey + LiteLLM + OpenRouter', use: 'Production observability + routing' },
                { name: 'Developer Stack', components: 'OpenRouter + g4f + LiteLLM', use: 'BYOK with free fallbacks' },
                { name: 'Edge Stack', components: 'OpenAI-API-Proxy + Cloudflare Workers', use: 'Zero-cost serverless proxy' },
              ].map(stack => (
                <div key={stack.name} className="bg-muted/50 rounded-lg p-3">
                  <h4 className="text-sm font-semibold">{stack.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{stack.components}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stack.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'proxy-stacks' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROXY_STACKS_RESEARCH.map((stack, i) => (
              <motion.div key={stack.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="border rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-1">{stack.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded">{stack.language}</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">{stack.pricing}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Providers: {stack.providers}</p>
                <p className="text-sm">{stack.keyFeature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
