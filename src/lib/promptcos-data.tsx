// ── PromptCos Data ──
// Cloned from https://promptcos.vercel.app/
// Modern AI prompt engineering tool

import {
  FileText, GitBranch, FlaskConical, Users,
  Download, BarChart3, GitCompareArrows, Terminal,
  Globe, Moon, Heart
} from 'lucide-react';
import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const PROMPTCOS_FEATURES: Feature[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: '100+ Templates',
    description: 'Pre-built templates for common use cases',
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'Version Control',
    description: 'Track changes and roll back prompts',
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Test Suite',
    description: 'Run automated tests on your prompts',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaboration',
    description: 'Share and collaborate with your team',
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Export Options',
    description: 'Export to multiple formats',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analytics',
    description: 'Track prompt performance metrics',
  },
];

export const PROMPTCOS_DEV_FEATURES: Feature[] = [
  {
    icon: <GitCompareArrows className="w-6 h-6" />,
    title: 'Git-like Versioning',
    description: 'Every prompt change is tracked with diff',
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Built-in Testing',
    description: 'Test prompts against multiple LLMs',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'API Access',
    description: 'RESTful API for integration',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Collaboration',
    description: 'Real-time collaboration features',
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Dark Mode',
    description: 'Beautiful dark mode support',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Open Source',
    description: 'MIT licensed and open source',
  },
];

export const PROMPTCOS_FOOTER: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Templates', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'API Reference', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
];
