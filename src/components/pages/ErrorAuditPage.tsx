'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Eye, Lightbulb } from 'lucide-react';
import { ERROR_AUDIT_PERSPECTIVES, type ErrorPerspective } from '@/lib/skills-data';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const animalColors: Record<string, { bg: string; border: string; text: string; light: string }> = {
  owl: { bg: 'bg-indigo-600', border: 'border-indigo-300 dark:border-indigo-700', text: 'text-indigo-700 dark:text-indigo-300', light: 'bg-indigo-50 dark:bg-indigo-950/30' },
  eagle: { bg: 'bg-amber-600', border: 'border-amber-300 dark:border-amber-700', text: 'text-amber-700 dark:text-amber-300', light: 'bg-amber-50 dark:bg-amber-950/30' },
  beaver: { bg: 'bg-emerald-600', border: 'border-emerald-300 dark:border-emerald-700', text: 'text-emerald-700 dark:text-emerald-300', light: 'bg-emerald-50 dark:bg-emerald-950/30' },
  dolphin: { bg: 'bg-cyan-600', border: 'border-cyan-300 dark:border-cyan-700', text: 'text-cyan-700 dark:text-cyan-300', light: 'bg-cyan-50 dark:bg-cyan-950/30' },
  elephant: { bg: 'bg-rose-600', border: 'border-rose-300 dark:border-rose-700', text: 'text-rose-700 dark:text-rose-300', light: 'bg-rose-50 dark:bg-rose-950/30' },
};

function PerspectiveCard({ perspective, isSelected, onClick }: { perspective: ErrorPerspective; isSelected: boolean; onClick: () => void }) {
  const colors = animalColors[perspective.id] || animalColors.owl;
  return (
    <motion.button
      custom={0}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onClick={onClick}
      className={`text-left border rounded-xl p-5 transition-all hover:shadow-md ${isSelected ? `ring-2 ring-offset-2 ${colors.border}` : ''}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{perspective.icon}</span>
        <div>
          <h3 className="font-bold text-lg">{perspective.animal}</h3>
          <p className={`text-xs font-medium ${colors.text}`}>{perspective.title}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-3">{perspective.coreThesis}</p>
    </motion.button>
  );
}

function PerspectiveDetail({ perspective }: { perspective: ErrorPerspective }) {
  const colors = animalColors[perspective.id] || animalColors.owl;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      <div className={`${colors.bg} text-white rounded-xl p-6`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{perspective.icon}</span>
          <div>
            <h2 className="text-2xl font-bold">The {perspective.animal} Perspective</h2>
            <p className="text-white/80 text-sm">{perspective.title}</p>
          </div>
        </div>
        <p className="text-white/90 leading-relaxed">{perspective.coreThesis}</p>
      </div>

      <div>
        <h3 className="flex items-center gap-2 font-semibold mb-3"><Eye className="w-4 h-4" /> Key Findings</h3>
        <div className="space-y-2">
          {perspective.keyFindings.map((finding, i) => (
            <div key={i} className={`${colors.light} rounded-lg p-3`}>
              <p className="text-sm">{finding}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex items-center gap-2 font-semibold mb-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Recommendations</h3>
        <div className="space-y-2">
          {perspective.recommendations.map((rec, i) => (
            <div key={i} className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-3 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex items-center gap-2 font-semibold mb-3"><AlertTriangle className="w-4 h-4 text-amber-500" /> Blind Spots</h3>
        <div className="space-y-2">
          {perspective.blindSpots.map((spot, i) => (
            <div key={i} className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm">{spot}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ErrorAuditPage() {
  const [selected, setSelected] = useState<string>('owl');
  const selectedPerspective = ERROR_AUDIT_PERSPECTIVES.find(p => p.id === selected) || ERROR_AUDIT_PERSPECTIVES[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Impeccable Error Fix Handler Audit</h1>
        <p className="text-muted-foreground mt-2">5-perspective audit examining error handling architecture, frontend resilience, proxy strategy, and system sustainability through Owl, Eagle, Beaver, Dolphin, and Elephant lenses.</p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20 border rounded-xl p-5">
        <h3 className="font-bold mb-2">Core Thesis</h3>
        <p className="text-sm leading-relaxed">The git rebase conflict that killed a deployment session was not a bug — it was a <strong>design failure</strong>. An impeccable error fix handler would have detected the conflict, auto-aborted the rebase, restored the working tree, and continued deployment without missing a beat. <em>Every error is an opportunity for the system to demonstrate resilience.</em></p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {ERROR_AUDIT_PERSPECTIVES.map((p) => (
          <PerspectiveCard
            key={p.id}
            perspective={p}
            isSelected={selected === p.id}
            onClick={() => setSelected(p.id)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <PerspectiveDetail key={selected} perspective={selectedPerspective} />
      </AnimatePresence>
    </div>
  );
}
