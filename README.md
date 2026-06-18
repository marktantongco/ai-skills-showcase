<div align="center">

# AI Skills Showcase

### Interactive Visualization of AI Prompt Engineering Ecosystems

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**76+ Skills · 11 Categories · 8 User Types · 4 Agent Tiers · 9 MCP Stacks · 6 Proxy Types · 15 Pages**

[🚀 Live Demo (Vercel)](#-deployment) · [📖 Documentation](#-pages) · [🎨 Design Systems](#-3-design-approaches) · [🤝 Contributing](#-contributing)

</div>

---

## Overview

AI Skills Showcase is a comprehensive, interactive web application that visualizes the entire AI prompt engineering ecosystem. It provides a multi-perspective view of skills, user types, agent tiers, MCP server stacks, and proxy analysis through 15 distinct pages — each with rich animations, responsive design, and three radically different visual philosophies.

Built for **AI engineers, prompt architects, tool evaluators, and product teams** who need to understand, compare, and navigate the modern AI tooling landscape at a glance.

---

## Pages

| # | Page | Description |
|---|------|-------------|
| 1 | **Home** | Dashboard with stats, feature cards, and design approach previews |
| 2 | **Stack Tree** | Interactive hierarchy visualization of all research & architecture components |
| 3 | **Skills Library** | 76+ skills with search, category filtering, and detail panels |
| 4 | **User Types** | 8 persona profiles with complete stack recommendations & workflows |
| 5 | **Agent Tiers** | 4-tier progression from conversation → autonomy |
| 6 | **MCP Stacks** | 9 pre-built Model Context Protocol server configurations |
| 7 | **Proxy Topics** | Cross-field analysis connecting proxies to psychology, business & marketing |
| 8 | **Error Audit** | 5-perspective audit: Owl, Eagle, Beaver, Dolphin, Elephant patterns |
| 9 | **Design System** | Extraordinary web design framework with 7 architecture layers |
| 10 | **Agentic Tools** | Top 10 AI coding tools, 6 proxy stacks, orchestration frameworks |
| 11 | **Prompt OS + Defense** | 6-zone prompt engineering + OWL-AGENT v4.21 proxy defense stack |
| 12 | **PromptCos** | Cloned & integrated modern AI prompt engineering tool |
| 13 | **Soft Premium** | Luxury aesthetics, spring animations, serif typography |
| 14 | **Minimalist** | Notion/Linear editorial, warm monochrome, bento grids |
| 15 | **Neo-Brutalist** | Bold, raw, high contrast, saturated colors, Gen Z aesthetic |

---

## 3 Design Approaches

The showcase features the same underlying data rendered through three radically different visual philosophies:

### Soft Premium
> Luxury editorial aesthetics with serif typography (Playfair Display), spring-based Framer Motion animations, warm amber/neutral palette, and generous whitespace. Inspired by Vogue and Aesop digital experiences.

### Minimalist
> Notion/Linear-inspired editorial design with warm monochrome tones, bento grid layouts, clean sans-serif typography (Inter), and micro-interactions. Prioritizes readability and information density.

### Neo-Brutalist
> Raw, bold, high-contrast design with saturated colors, thick borders, heavy typography, offset shadows, and irreverent Gen Z energy. Inspired by Gumroad, MSCHF, and Figma's brutalist experiments.

---

## Architecture

```
src/
├── app/
│   ├── page.tsx              # Main SPA shell with navigation
│   ├── layout.tsx            # Root layout with fonts & providers
│   └── globals.css           # Tailwind CSS v4 + custom styles
├── components/
│   ├── pages/
│   │   ├── MainPages.tsx     # Stack Tree, Skills, User Types, Tiers, MCP, Proxy
│   │   ├── SoftPremiumPage.tsx
│   │   ├── MinimalistPage.tsx
│   │   ├── NeoBrutalistPage.tsx
│   │   ├── ErrorAuditPage.tsx
│   │   ├── DesignSystemPage.tsx
│   │   ├── AgenticToolsPage.tsx
│   │   ├── PromptOSPage.tsx
│   │   └── PromptCosPage.tsx
│   └── shared/
│       └── ErrorBoundary.tsx  # Beaver Dam error handler
├── lib/
│   ├── skills-data.ts        # Core data: skills, user types, tiers, MCP stacks
│   ├── promptcos-data.tsx    # PromptCos feature & footer data
│   ├── utils.ts              # Utility functions
│   └── db.ts                 # Database client
└── public/                    # Static assets
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Error Handling | Custom Beaver Dam Error Boundary |
| Deployment | Vercel + GitHub Pages |

### Key Patterns

- **SPA Architecture** — Client-side routing via React state with animated page transitions
- **Error Boundaries** — Multi-level error handling with retry, cooldown, and progressive escalation
- **Responsive Design** — Mobile-first with collapsible sidebar, adaptive grids, and touch-friendly targets
- **Staggered Animations** — Framer Motion spring physics with custom easing curves
- **Data-Driven Pages** — All content sourced from typed data modules, not hardcoded JSX

---

## Data Models

### Skills (76+)
Each skill contains: name, category, description, complexity tier, user type compatibility, and integration notes.

### User Types (8)
Complete persona profiles: AI Novice, Content Creator, Developer, Data Analyst, Business Strategist, Creative Professional, Enterprise Admin, AI Researcher.

### Agent Tiers (4)
Progressive autonomy levels: Conversation → Task → Workflow → Autonomous.

### MCP Stacks (9)
Pre-configured Model Context Protocol server combinations for different workflows.

### Proxy Types (6)
Cross-field proxy analysis connecting to psychology, business, and marketing domains.

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/marktantongco/ai-skills-showcase.git
cd ai-skills-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

### Vercel (Recommended)

The app is optimized for Vercel deployment with `output: "standalone"` in Next.js config.

1. Push to GitHub
2. Import repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy

### GitHub Pages

Static export compatible. The app can be deployed as a static site:

1. Configure `next.config.ts` with `basePath` for GitHub Pages
2. Build and export static files
3. Deploy via `gh-pages` branch or GitHub Actions

---

## Error Handling

The application implements the **Beaver Dam** error boundary pattern:

- **Root Level** — Catches catastrophic errors, shows full-page recovery UI
- **Page Level** — Isolates errors to individual pages, prevents cascade failures
- **Retry Logic** — Exponential backoff with configurable cooldown periods
- **Progressive Escalation** — Gentle retry → forced reload → error report

### Animal Pattern Analysis

The Error Audit page analyzes errors through five thinking patterns:

| Pattern | Philosophy |
|---------|-----------|
| 🦉 Owl | Observe patterns, see the big picture |
| 🦅 Eagle | Focus on critical details from above |
| 🦫 Beaver | Build defensive structures methodically |
| 🐬 Dolphin | Communicate errors clearly and playfully |
| 🐘 Elephant | Remember past errors, prevent recurrence |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- [Next.js](https://nextjs.org/) — React Framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) — UI Components
- [Framer Motion](https://www.framer.com/motion/) — Animation Library
- [Lucide](https://lucide.dev/) — Icon Library
- [PromptCos](https://promptcos.vercel.app/) — Integrated reference

---

<div align="center">

**Built with ❤️ for the AI engineering community**

[⬆ Back to Top](#ai-skills-showcase)

</div>
