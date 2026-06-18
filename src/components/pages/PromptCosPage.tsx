'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import {
  PROMPTCOS_FEATURES,
  PROMPTCOS_DEV_FEATURES,
  PROMPTCOS_FOOTER,
} from '@/lib/promptcos-data';

// ── Animation variants ──

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

// ── PromptCos Page ──

export function PromptCosPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">PromptCos</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" /> GitHub
            </a>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg transition-colors">
              Start Free
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div variants={heroVariant} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Modern AI prompt engineering, simplified.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Modern AI prompt
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                engineering, simplified.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Create, optimize, and manage AI prompts with built-in version control, testing, and collaboration features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3.5 rounded-xl text-base font-medium transition-colors flex items-center gap-2">
                Start Free <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-xl text-base font-medium transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> View on GitHub
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Powerful Features Grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Powerful prompt features
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Everything you need to build, test, and deploy AI prompts at scale
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROMPTCOS_FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group bg-[#16161a] border border-white/[0.06] hover:border-indigo-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Built for Developers Grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for developers
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Everything you need to build production AI prompts
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROMPTCOS_DEV_FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group bg-[#16161a] border border-white/[0.06] hover:border-indigo-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-6 py-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Start building today
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Ready to supercharge your prompt engineering workflow?
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-medium transition-colors inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-bold">PromptCos</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Modern AI prompt engineering, simplified.
              </p>
            </div>

            {/* Link columns */}
            {PROMPTCOS_FOOTER.map((column) => (
              <div key={column.title}>
                <h4 className="font-semibold text-sm mb-4 text-neutral-300">{column.title}</h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.06] pt-6">
            <p className="text-neutral-600 text-xs text-center">
              &copy; 2024 PromptCos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
