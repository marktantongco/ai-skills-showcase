'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, Search, Layout, Sparkles, Zap, Eye,
  Users, Award, Server, GitBranch, Menu, TreePine, Compass,
  Shield, Palette, Cpu, Command, Star
} from 'lucide-react';

import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { StackTreePage, SkillsLibraryPage, UserTypesPage, AgentTiersPage, MCPStacksPage, ProxyTopicsPage } from '@/components/pages/MainPages';
import { SoftPremiumPage } from '@/components/pages/SoftPremiumPage';
import { MinimalistPage } from '@/components/pages/MinimalistPage';
import { NeoBrutalistPage } from '@/components/pages/NeoBrutalistPage';
import { ErrorAuditPage } from '@/components/pages/ErrorAuditPage';
import { DesignSystemPage } from '@/components/pages/DesignSystemPage';
import { AgenticToolsPage } from '@/components/pages/AgenticToolsPage';
import { PromptOSPage } from '@/components/pages/PromptOSPage';
import { PromptCosPage } from '@/components/pages/PromptCosPage';

// ── Navigation ──

type PageId = 'home' | 'stack-tree' | 'skills' | 'user-types' | 'tiers' | 'mcp-stacks' | 'proxy-topics' | 'soft-premium' | 'minimalist' | 'neo-brutalist' | 'error-audit' | 'design-system' | 'agentic-tools' | 'prompt-os' | 'promptcos';

interface NavItem {
  id: PageId;
  label: string;
  icon: React.ReactNode;
  group?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
  { id: 'stack-tree', label: 'Stack Tree', icon: <TreePine className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills Library', icon: <Zap className="w-4 h-4" /> },
  { id: 'user-types', label: 'User Types', icon: <Users className="w-4 h-4" /> },
  { id: 'tiers', label: 'Agent Tiers', icon: <Award className="w-4 h-4" /> },
  { id: 'mcp-stacks', label: 'MCP Stacks', icon: <Server className="w-4 h-4" /> },
  { id: 'proxy-topics', label: 'Proxy Topics', icon: <GitBranch className="w-4 h-4" /> },
  { id: 'error-audit', label: 'Error Audit', icon: <Shield className="w-4 h-4" /> },
  { id: 'design-system', label: 'Design System', icon: <Palette className="w-4 h-4" /> },
  { id: 'agentic-tools', label: 'Agentic Tools', icon: <Cpu className="w-4 h-4" /> },
  { id: 'prompt-os', label: 'Prompt OS + Defense', icon: <Command className="w-4 h-4" /> },
  { id: 'promptcos', label: 'PromptCos', icon: <Star className="w-4 h-4" /> },
  { id: 'soft-premium', label: 'Soft Premium', icon: <Sparkles className="w-4 h-4" />, group: 'Design Approaches' },
  { id: 'minimalist', label: 'Minimalist', icon: <Layout className="w-4 h-4" />, group: 'Design Approaches' },
  { id: 'neo-brutalist', label: 'Neo-Brutalist', icon: <Layout className="w-4 h-4" />, group: 'Design Approaches' },
];

// ── Page transition variants ──

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ── Home Page ──

function HomePage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const features = [
    { page: 'stack-tree' as PageId, icon: <TreePine className="w-6 h-6" />, title: 'Stack Tree', desc: 'Interactive hierarchy visualization of all research and architecture components', color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300' },
    { page: 'skills' as PageId, icon: <Zap className="w-6 h-6" />, title: 'Skills Library', desc: '29 skills with search, category filtering, and detailed analysis panels', color: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300' },
    { page: 'user-types' as PageId, icon: <Users className="w-6 h-6" />, title: 'User Types', desc: '8 profiles with complete stack recommendations and workflows', color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300' },
    { page: 'tiers' as PageId, icon: <Award className="w-6 h-6" />, title: 'Agent Tiers', desc: '4-tier progression architecture from conversation to autonomy', color: 'bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300' },
    { page: 'mcp-stacks' as PageId, icon: <Server className="w-6 h-6" />, title: 'MCP Stacks', desc: '9 pre-built server stacks for different workflows', color: 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300' },
    { page: 'proxy-topics' as PageId, icon: <GitBranch className="w-6 h-6" />, title: 'Proxy Topics', desc: 'Cross-field analysis connecting proxies to psychology, business, marketing', color: 'bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300' },
    { page: 'error-audit' as PageId, icon: <Shield className="w-6 h-6" />, title: 'Error Audit', desc: '5-perspective audit: Owl, Eagle, Beaver, Dolphin, Elephant error handling', color: 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300' },
    { page: 'design-system' as PageId, icon: <Palette className="w-6 h-6" />, title: 'Design System', desc: 'Extraordinary web design framework with industry secret sauce and 7 architecture layers', color: 'bg-fuchsia-50 dark:bg-fuchsia-950/30 text-fuchsia-700 dark:text-fuchsia-300' },
    { page: 'agentic-tools' as PageId, icon: <Cpu className="w-6 h-6" />, title: 'Agentic Tools', desc: 'Top 10 AI coding tools, 6 proxy stacks, OpenCode plugins, orchestration frameworks', color: 'bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300' },
    { page: 'prompt-os' as PageId, icon: <Command className="w-6 h-6" />, title: 'Prompt OS + Defense', desc: 'promptc OS 6-zone prompt engineering + OWL-AGENT v4.21 proxy defense stack', color: 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300' },
    { page: 'promptcos' as PageId, icon: <Star className="w-6 h-6" />, title: 'PromptCos', desc: 'Modern AI prompt engineering tool — cloned and integrated from promptcos.vercel.app', color: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300' },
  ];

  const designs = [
    { page: 'soft-premium' as PageId, title: 'Soft Premium', desc: 'Luxury aesthetics, spring animations, serif typography', gradient: 'from-amber-900 to-neutral-900' },
    { page: 'minimalist' as PageId, title: 'Minimalist', desc: 'Notion/Linear editorial, warm monochrome, bento grids', gradient: 'from-stone-200 to-stone-400' },
    { page: 'neo-brutalist' as PageId, title: 'Neo-Brutalist', desc: 'Bold, raw, high contrast, saturated colors, Gen Z', gradient: 'from-purple-900 to-indigo-900' },
  ];

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Skills Showcase
          <span className="text-muted-foreground text-lg ml-3">v4</span>
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
          Interactive visualization of research and documentation — 76 Skills, 11 Categories, 8 User Types, 4 Agent Tiers, 9 MCP Stacks, 6 Proxy Types, and 14 Source Documents.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {[
          { label: 'Skills', value: '32+', color: 'text-cyan-600 dark:text-cyan-400' },
          { label: 'Categories', value: '11', color: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'User Types', value: '8', color: 'text-purple-600 dark:text-purple-400' },
          { label: 'Agent Tiers', value: '4', color: 'text-orange-600 dark:text-orange-400' },
          { label: 'MCP Stacks', value: '9', color: 'text-rose-600 dark:text-rose-400' },
          { label: 'Docs', value: '20', color: 'text-teal-600 dark:text-teal-400' },
        ].map(stat => (
          <div key={stat.label} className="text-center p-3 border rounded-xl">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <div>
        <h2 className="text-xl font-bold mb-4">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.button key={feature.page} custom={i} variants={cardVariants} initial="hidden" animate="visible" onClick={() => onNavigate(feature.page)} className="text-left border rounded-xl p-5 hover:shadow-md transition-all group">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${feature.color}`}>{feature.icon}</div>
              <h3 className="font-bold group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">3 Design Approaches</h2>
        <p className="text-sm text-muted-foreground mb-4">Same content, wildly different implementations. Each subpage renders the full skills, user types, and proxy data with a unique visual philosophy.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {designs.map((design, i) => (
            <motion.button key={design.page} custom={i} variants={cardVariants} initial="hidden" animate="visible" onClick={() => onNavigate(design.page)} className="text-left rounded-xl overflow-hidden group">
              <div className={`h-32 bg-gradient-to-br ${design.gradient} p-5 flex flex-col justify-end text-white`}>
                <h3 className="text-xl font-bold">{design.title}</h3>
              </div>
              <div className="bg-card border border-t-0 rounded-b-xl p-4">
                <p className="text-sm text-muted-foreground">{design.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="border rounded-xl p-6 bg-gradient-to-r from-muted/50 to-muted/30">
        <div className="flex items-center gap-3 mb-3">
          <Eye className="w-5 h-5 text-primary" />
          <h3 className="font-bold">Silent Protocol Active</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          This application follows the System Master v4 protocol: Zero fluff, working code, alignment over execution, advocacy, quality gated, show reasoning, depth before speed. Every component is production-ready with error boundaries and responsive design.
        </p>
      </div>
    </div>
  );
}

// ── Main App Shell ──

export default function SkillsShowcaseApp() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigateTo} />;
      case 'stack-tree': return <StackTreePage />;
      case 'skills': return <SkillsLibraryPage />;
      case 'user-types': return <UserTypesPage />;
      case 'tiers': return <AgentTiersPage />;
      case 'mcp-stacks': return <MCPStacksPage />;
      case 'proxy-topics': return <ProxyTopicsPage />;
      case 'soft-premium': return <SoftPremiumPage />;
      case 'minimalist': return <MinimalistPage />;
      case 'neo-brutalist': return <NeoBrutalistPage />;
      case 'error-audit': return <ErrorAuditPage />;
      case 'design-system': return <DesignSystemPage />;
      case 'agentic-tools': return <AgenticToolsPage />;
      case 'prompt-os': return <PromptOSPage />;
      case 'promptcos': return <PromptCosPage />;
      default: return <HomePage onNavigate={navigateTo} />;
    }
  };

  const isDesignPage = ['soft-premium', 'minimalist', 'neo-brutalist', 'promptcos'].includes(currentPage);

  return (
    <ErrorBoundary name="Root">
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
          <div className="flex items-center gap-3 px-4 py-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-muted rounded-lg transition-colors md:hidden">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">Skills Showcase</span>
              <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">v4</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button onClick={() => navigateTo('home')} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> Home
              </button>
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <nav className={`fixed inset-y-0 left-0 z-40 w-64 border-r bg-background transform transition-transform md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:block`}>
            <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-60px)]">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <span className="font-bold">Navigation</span>
                <button onClick={() => setSidebarOpen(false)} className="p-1 hover:bg-muted rounded"><ChevronLeft className="w-4 h-4" /></button>
              </div>
              {NAV_ITEMS.map((item) => (
                <div key={item.id}>
                  {item.group && <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-4 mb-2 px-3">{item.group}</div>}
                  <button onClick={() => navigateTo(item.id)} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${currentPage === item.id ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted text-muted-foreground'}`}>
                    {item.icon} {item.label}
                  </button>
                </div>
              ))}
            </div>
          </nav>

          {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />}

          <main className="flex-1 overflow-y-auto">
            <ErrorBoundary name={`Page:${currentPage}`}>
              <AnimatePresence mode="wait">
                <motion.div key={currentPage} variants={pageVariants} initial="initial" animate="animate" exit="exit" className={isDesignPage ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}>
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </ErrorBoundary>
          </main>
        </div>

        <footer className="border-t bg-muted/30 px-4 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            Skills Showcase v4 — System Master Protocol · 76 Skills · 11 Categories · 8 User Types · 4 Tiers · 9 MCP Stacks · 6 Proxy Types · 14 Docs
          </p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
