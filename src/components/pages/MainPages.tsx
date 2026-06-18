'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronRight, ChevronDown, Zap, Star, Search, AlertTriangle, ArrowRight } from 'lucide-react';
import { SKILLS, CATEGORY_COLORS, CATEGORY_ICONS, DOCUMENT_TREE, type Skill, type TreeNode } from '@/lib/skills-data';

const treeItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.03, duration: 0.3 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function StackTreeItem({ node, depth = 0, index = 0 }: { node: TreeNode; depth?: number; index?: number }) {
  const [expanded, setExpanded] = useState(depth < 1);
  const hasChildren = node.children && node.children.length > 0;
  const prefersReducedMotion = useReducedMotion();

  const getNodeColor = (type: TreeNode['type']) => {
    const map: Record<string, string> = {
      root: 'text-amber-600 dark:text-amber-400',
      category: 'text-emerald-600 dark:text-emerald-400',
      skill: 'text-cyan-600 dark:text-cyan-400',
      'user-type': 'text-purple-600 dark:text-purple-400',
      tier: 'text-orange-600 dark:text-orange-400',
      mcp: 'text-rose-600 dark:text-rose-400',
      proxy: 'text-teal-600 dark:text-teal-400',
      document: 'text-blue-600 dark:text-blue-400',
    };
    return map[type] || 'text-gray-600 dark:text-gray-400';
  };

  const getNodeBg = (type: TreeNode['type']) => {
    const map: Record<string, string> = {
      root: 'hover:bg-amber-50 dark:hover:bg-amber-950/30',
      category: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/30',
      skill: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/30',
      'user-type': 'hover:bg-purple-50 dark:hover:bg-purple-950/30',
      tier: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
      mcp: 'hover:bg-rose-50 dark:hover:bg-rose-950/30',
      proxy: 'hover:bg-teal-50 dark:hover:bg-teal-950/30',
      document: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
    };
    return map[type] || 'hover:bg-gray-50 dark:hover:bg-gray-950/30';
  };

  return (
    <motion.div custom={index} variants={treeItemVariants} initial="hidden" animate="visible" style={{ paddingLeft: depth * 20 }}>
      <button
        onClick={() => hasChildren && setExpanded(!expanded)}
        className={`w-full flex items-center gap-2 py-1.5 px-3 rounded-lg text-left transition-colors ${getNodeBg(node.type)} group`}
      >
        {hasChildren ? (
          expanded ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
        ) : (
          <span className="w-3.5 flex-shrink-0" />
        )}
        <span className="flex-shrink-0 text-sm">{node.icon}</span>
        <span className={`text-sm font-medium truncate ${getNodeColor(node.type)}`}>{node.label}</span>
        {node.children && <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">{node.children.length}</span>}
      </button>
      <AnimatePresence>
        {expanded && hasChildren && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {node.children!.map((child, i) => (
              <StackTreeItem key={child.id} node={child} depth={depth + 1} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function StackTreePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Stack Tree Visualization</h1>
        <p className="text-muted-foreground mt-2">Interactive hierarchy of all research documents, skills, user types, and architecture components.</p>
      </div>
      <div className="border rounded-xl p-4 bg-card max-h-[70vh] overflow-y-auto">
        <StackTreeItem node={DOCUMENT_TREE} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Skills', count: SKILLS.length, color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200' },
          { label: 'User Types', count: 8, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200' },
          { label: 'Agent Tiers', count: 4, color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200' },
          { label: 'MCP Stacks', count: 9, color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200' },
        ].map((stat) => (
          <div key={stat.label} className={`${stat.color} rounded-lg p-3 text-center`}>
            <div className="text-2xl font-bold">{stat.count}</div>
            <div className="text-xs font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [query, setQuery] = useState('');

  const categories = useMemo(() => [...new Set(SKILLS.map(s => s.category))], []);
  const filtered = useMemo(() => {
    let result = SKILLS;
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(s => s.name.toLowerCase().includes(q) || s.purpose.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
    }
    if (selectedCategory) result = result.filter(s => s.category === selectedCategory);
    return result;
  }, [query, selectedCategory]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Skills Library</h1>
        <p className="text-muted-foreground mt-2">29 core skills across 11 categories. Search, filter, and click any skill for detailed analysis.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search skills..." className="w-full pl-10 pr-4 py-2.5 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setSelectedCategory(null)} className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${!selectedCategory ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>All</button>
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)} className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${selectedCategory === cat ? 'text-white' : 'hover:bg-muted'}`} style={selectedCategory === cat ? { backgroundColor: CATEGORY_COLORS[cat as keyof typeof CATEGORY_COLORS] } : {}}>
              {CATEGORY_ICONS[cat as keyof typeof CATEGORY_ICONS]} {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.map((skill, i) => (
              <motion.div key={skill.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" onClick={() => setSelectedSkill(skill)} className={`cursor-pointer border rounded-xl p-4 transition-all hover:shadow-md ${selectedSkill?.id === skill.id ? 'ring-2 ring-primary' : ''}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{CATEGORY_ICONS[skill.category as keyof typeof CATEGORY_ICONS]}</span>
                      <h3 className="font-semibold text-sm">{skill.name}</h3>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block" style={{ backgroundColor: CATEGORY_COLORS[skill.category as keyof typeof CATEGORY_COLORS] + '20', color: CATEGORY_COLORS[skill.category as keyof typeof CATEGORY_COLORS] }}>{skill.category}</span>
                  </div>
                  {skill.rank && <span className="text-xs font-mono bg-muted px-2 py-1 rounded-md">{skill.rank}</span>}
                </div>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{skill.purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          {selectedSkill ? (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="border rounded-xl p-5 sticky top-4 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg">{selectedSkill.name}</h2>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[selectedSkill.category as keyof typeof CATEGORY_COLORS] + '20', color: CATEGORY_COLORS[selectedSkill.category as keyof typeof CATEGORY_COLORS] }}>{selectedSkill.category}</span>
              </div>
              {selectedSkill.rank && <div className="flex items-center gap-4 text-sm"><span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-500" /> Rank: {selectedSkill.rank}</span>{selectedSkill.installs && <span className="text-muted-foreground">{selectedSkill.installs} installs</span>}</div>}
              <div><h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Purpose</h4><p className="text-sm">{selectedSkill.purpose}</p></div>
              <div><h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Use Case</h4><p className="text-sm">{selectedSkill.useCase}</p></div>
              <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3"><h4 className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">Misconception</h4><p className="text-sm text-amber-900 dark:text-amber-200">{selectedSkill.misconception}</p></div>
              <div className="bg-teal-50 dark:bg-teal-950/30 rounded-lg p-3"><h4 className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-1">Overlooked</h4><p className="text-sm text-teal-900 dark:text-teal-200">{selectedSkill.overlooked}</p></div>
              <div><h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Best Combined With</h4><div className="flex flex-wrap gap-1">{selectedSkill.bestCombinedWith.map(s => (<span key={s} className="text-xs bg-muted px-2 py-1 rounded-md">{s}</span>))}</div></div>
            </motion.div>
          ) : (
            <div className="border rounded-xl p-8 text-center text-muted-foreground"><Zap className="w-8 h-8 mx-auto mb-3 opacity-50" /><p className="text-sm">Click any skill for detailed analysis</p></div>
          )}
        </div>
      </div>
    </div>
  );
}

export function UserTypesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedUser = useMemo(() => USER_TYPES.find(u => u.id === selected), [selected]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Types</h1>
        <p className="text-muted-foreground mt-2">8 distinct user type profiles with complete stack recommendations and optimal workflows.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {USER_TYPES.map((user, i) => (
          <motion.div key={user.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" onClick={() => setSelected(selected === user.id ? null : user.id)} className={`cursor-pointer border rounded-xl p-4 transition-all hover:shadow-md ${selected === user.id ? 'ring-2 ring-primary' : ''}`}>
            <div className="text-3xl mb-2">{user.icon}</div>
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-3">{user.profileDescription}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><span>{user.coreSkills.length} core</span><span>·</span><span>{user.extendedSkills.length} ext</span><span>·</span><span>{user.powerUserSkills.length} power</span></div>
          </motion.div>
        ))}
      </div>

      {selectedUser && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border rounded-xl p-6 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{selectedUser.icon}</span>
            <div><h2 className="text-2xl font-bold">{selectedUser.name}</h2><p className="text-sm text-muted-foreground">{selectedUser.primaryAgentMode} · {selectedUser.mcpStack} · {selectedUser.tokenBudget}</p></div>
          </div>
          <p className="text-sm leading-relaxed">{selectedUser.profileDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2"><h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Core ({selectedUser.coreSkills.length})</h4>{selectedUser.coreSkills.map(s => (<div key={s} className="flex items-center gap-2 text-sm p-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg"><Zap className="w-3 h-3 text-emerald-500" />{s}</div>))}</div>
            <div className="space-y-2"><h4 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Extended ({selectedUser.extendedSkills.length})</h4>{selectedUser.extendedSkills.map(s => (<div key={s} className="flex items-center gap-2 text-sm p-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg"><ArrowRight className="w-3 h-3 text-amber-500" />{s}</div>))}</div>
            <div className="space-y-2"><h4 className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">Power-User ({selectedUser.powerUserSkills.length})</h4>{selectedUser.powerUserSkills.map(s => (<div key={s} className="flex items-center gap-2 text-sm p-2 bg-purple-50 dark:bg-purple-950/30 rounded-lg"><Star className="w-3 h-3 text-purple-500" />{s}</div>))}</div>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4"><h4 className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">Common Pitfalls</h4><ul className="space-y-1">{selectedUser.pitfalls.map((p, i) => (<li key={i} className="text-sm text-red-800 dark:text-red-200 flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />{p}</li>))}</ul></div>
          <div className="bg-muted rounded-lg p-4"><h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Optimal 1-Hour Workflow</h4><p className="text-sm font-mono">{selectedUser.optimalWorkflow}</p></div>
        </motion.div>
      )}
    </div>
  );
}

import { USER_TYPES, AGENT_TIERS, MCP_STACKS, PROXY_TYPES } from '@/lib/skills-data';

export function AgentTiersPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Agent Skill Tiers</h1><p className="text-muted-foreground mt-2">4-tier progression from conversational exploration to autonomous orchestration.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AGENT_TIERS.map((tier, i) => (
          <motion.div key={tier.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="border rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3"><div className="text-3xl">🏆</div><div><h3 className="font-bold text-lg">{tier.name}</h3><p className="text-xs text-muted-foreground font-mono">{tier.id}</p></div></div>
              <div className="text-right"><div className="text-2xl font-bold">{tier.tokenCost.toLocaleString()}</div><div className="text-xs text-muted-foreground">tokens</div></div>
            </div>
            <p className="text-sm">{tier.description}</p>
            <div><h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Best For</h4><div className="flex flex-wrap gap-2">{tier.bestFor.map(b => (<span key={b} className="text-xs bg-muted px-2 py-1 rounded-md">{b}</span>))}</div></div>
            <div className="w-full bg-muted rounded-full h-2"><div className="h-2 rounded-full transition-all" style={{ width: `${(tier.tokenCost / 6000) * 100}%`, background: `linear-gradient(90deg, hsl(${i * 90 + 30}, 70%, 55%), hsl(${i * 90 + 60}, 70%, 45%))` }} /></div>
          </motion.div>
        ))}
      </div>
      <div className="border rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4">Token Budget Strategy</h3>
        <p className="text-sm text-muted-foreground mb-4">Most users need 2 active skills (~10,000 tokens). Loading all 4 simultaneously wastes 22,100 tokens. The CONTINUITY protocol ensures no context is lost between switches.</p>
      </div>
    </div>
  );
}

export function MCPStacksPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">MCP Server Stacks</h1><p className="text-muted-foreground mt-2">9 pre-built Model Context Protocol server stacks for different workflows.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MCP_STACKS.map((stack, i) => (
          <motion.div key={stack.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="border rounded-xl p-5 space-y-3 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between"><h3 className="font-bold">{stack.name}</h3><span className="text-xs bg-muted px-2 py-1 rounded-md">{stack.cost}</span></div>
            <p className="text-xs text-muted-foreground">{stack.bestFor}</p>
            <div className="flex flex-wrap gap-1.5">{stack.servers.map(server => (<span key={server} className="text-xs bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 px-2 py-1 rounded-md border border-rose-200 dark:border-rose-800">{server}</span>))}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProxyTopicsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'psychology' | 'business' | 'marketing' | 'integration'>('psychology');
  const selectedProxy = useMemo(() => PROXY_TYPES.find(p => p.id === selected), [selected]);

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Proxy Architecture &amp; Cross-Field Analysis</h1><p className="text-muted-foreground mt-2">How proxy types connect to psychology, business, marketing, and integration — with long-term strategy and creative insights.</p></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PROXY_TYPES.map((proxy, i) => (
          <motion.div key={proxy.id} custom={i} variants={cardVariants} initial="hidden" animate="visible" onClick={() => setSelected(selected === proxy.id ? null : proxy.id)} className={`cursor-pointer border rounded-xl p-4 transition-all hover:shadow-md ${selected === proxy.id ? 'ring-2 ring-primary' : ''}`}>
            <h3 className="font-bold">{proxy.name}</h3>
            <span className="text-xs bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full">{proxy.category}</span>
            <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{proxy.description}</p>
          </motion.div>
        ))}
      </div>

      {selectedProxy && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-5 text-white">
            <h2 className="text-2xl font-bold">{selectedProxy.name}</h2>
            <p className="text-teal-100 text-sm mt-1">{selectedProxy.category}</p>
          </div>
          <div className="p-5 space-y-5">
            <p className="text-sm leading-relaxed">{selectedProxy.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4"><h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">Strengths</h4><ul className="space-y-1">{selectedProxy.strengths.map((s, i) => <li key={i} className="text-sm flex items-start gap-2"><span className="text-emerald-500">+</span>{s}</li>)}</ul></div>
              <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4"><h4 className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">Weaknesses</h4><ul className="space-y-1">{selectedProxy.weaknesses.map((w, i) => <li key={i} className="text-sm flex items-start gap-2"><span className="text-red-500">-</span>{w}</li>)}</ul></div>
            </div>
            <div>
              <div className="flex border-b">
                {(['psychology', 'business', 'marketing', 'integration'] as const).map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors capitalize ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>{tab}</button>
                ))}
              </div>
              <div className="pt-4"><p className="text-sm leading-relaxed">{activeTab === 'psychology' && selectedProxy.psychologyLink}{activeTab === 'business' && selectedProxy.businessLink}{activeTab === 'marketing' && selectedProxy.marketingLink}{activeTab === 'integration' && selectedProxy.integrationLink}</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4"><h4 className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">Eagle Eye — Long-Term Strategy</h4><p className="text-sm text-purple-900 dark:text-purple-200">{selectedProxy.longTermStrategy}</p></div>
              <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4"><h4 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">Dolphin — Creative Insight</h4><p className="text-sm text-amber-900 dark:text-amber-200">{selectedProxy.creativeInsight}</p></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
