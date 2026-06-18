// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Skills Showcase — Complete Data Layer
// 76 Skills · 11 Categories · 8 User Types · 4 Agent Skill Tiers · 9 MCP Stacks
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  rank?: string;
  installs?: string;
  purpose: string;
  useCase: string;
  misconception: string;
  overlooked: string;
  compatibleWith: string[];
  bestCombinedWith: string[];
  designVariance?: number;
  motionIntensity?: number;
  visualDensity?: number;
}

export type SkillCategory =
  | 'Design & UI'
  | 'Development'
  | 'Reasoning'
  | 'Strategy'
  | 'Content'
  | 'System'
  | 'Data & Web'
  | 'Animation Eng.'
  | 'MCP Servers'
  | 'Quality'
  | 'Integration';

export const CATEGORY_COLORS: Record<SkillCategory, string> = {
  'Design & UI': '#e11d48',
  'Development': '#0891b2',
  'Reasoning': '#7c3aed',
  'Strategy': '#ea580c',
  'Content': '#16a34a',
  'System': '#475569',
  'Data & Web': '#0284c7',
  'Animation Eng.': '#db2777',
  'MCP Servers': '#9333ea',
  'Quality': '#ca8a04',
  'Integration': '#059669',
};

export const CATEGORY_ICONS: Record<SkillCategory, string> = {
  'Design & UI': '🎨',
  'Development': '⚙️',
  'Reasoning': '🧠',
  'Strategy': '🎯',
  'Content': '✍️',
  'System': '🔧',
  'Data & Web': '🌐',
  'Animation Eng.': '✨',
  'MCP Servers': '🔌',
  'Quality': '🛡️',
  'Integration': '🔗',
};

export interface UserType {
  id: string;
  name: string;
  icon: string;
  profileDescription: string;
  coreSkills: string[];
  extendedSkills: string[];
  powerUserSkills: string[];
  primaryAgentMode: string;
  mcpStack: string;
  tokenBudget: string;
  pitfalls: string[];
  optimalWorkflow: string;
}

export interface AgentTier {
  id: string;
  name: string;
  tokenCost: number;
  description: string;
  bestFor: string[];
}

export interface MCPStack {
  id: string;
  name: string;
  servers: string[];
  bestFor: string;
  cost: string;
}

export interface ProxyType {
  id: string;
  name: string;
  category: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  psychologyLink: string;
  businessLink: string;
  marketingLink: string;
  integrationLink: string;
  longTermStrategy: string;
  creativeInsight: string;
}

// ── Agent Skill Tiers ──
export const AGENT_TIERS: AgentTier[] = [
  {
    id: 'SKILL_01',
    name: 'Conversational',
    tokenCost: 4400,
    description: 'Lightweight conversational mode for ideation, Q&A, and exploration. Low token footprint, high versatility.',
    bestFor: ['Ideation', 'Quick questions', 'Architecture discussions', 'Mobile-first usage'],
  },
  {
    id: 'SKILL_02',
    name: 'Design + Build',
    tokenCost: 5600,
    description: 'Depth-seeking mode with anti-defaults protocol and 3-direction approach. The designer-engineer bridge.',
    bestFor: ['UI implementation', 'Design-to-code', 'Component architecture', 'Prototyping'],
  },
  {
    id: 'SKILL_03',
    name: 'Code + API',
    tokenCost: 4900,
    description: 'Production code generation with error handling, type safety, and API integration. The backend craftsman.',
    bestFor: ['Backend logic', 'API integration', 'Database queries', 'Production code'],
  },
  {
    id: 'SKILL_04',
    name: 'Agentic',
    tokenCost: 6000,
    description: 'Autonomous task execution with multi-step workflows, file operations, and self-verification.',
    bestFor: ['Automated deployment', 'Batch operations', 'Self-healing code', 'Orchestration'],
  },
];

// ── MCP Stacks ──
export const MCP_STACKS: MCPStack[] = [
  { id: 'product-launch', name: 'Product Launch Stack', servers: ['github', 'brave-search', 'pictoflux-ai', 'memory'], bestFor: 'Solo Indie Hackers — zero-to-launch', cost: 'Free' },
  { id: 'frontend-dev', name: 'Frontend Dev Stack', servers: ['github', 'context7', 'browser-use', 'memory'], bestFor: 'Frontend Developers — pixel-perfect builds', cost: 'Free' },
  { id: 'fullstack-api', name: 'Full-Stack API Stack', servers: ['github', 'postgres', 'vercel', 'memory'], bestFor: 'Backend/API Engineers — production APIs', cost: 'Free + DB costs' },
  { id: 'data-science', name: 'Data Science Stack', servers: ['github', 'postgres', 'brave-search', 'memory'], bestFor: 'Data Scientists — analysis and modeling', cost: 'Free + compute' },
  { id: 'content-creator', name: 'Content Creator Stack', servers: ['brave-search', 'memory', 'pictoflux-ai', 'fetch'], bestFor: 'Content Creators — publishing pipeline', cost: 'Free' },
  { id: 'enterprise-architect', name: 'Enterprise Architect Stack', servers: ['github', 'postgres', 'vercel', 'memory', 'context7'], bestFor: 'Enterprise Architects — system design', cost: 'Varies' },
  { id: 'educator', name: 'Educator Stack', servers: ['brave-search', 'memory', 'fetch', 'pictoflux-ai'], bestFor: 'Educators — curriculum and research', cost: 'Free' },
  { id: 'growth-hacker', name: 'Growth Hacker Stack', servers: ['brave-search', 'memory', 'fetch', 'vercel'], bestFor: 'Growth Hackers — experimentation at speed', cost: 'Free' },
  { id: 'solo-consultant', name: 'Solo Consultant Stack', servers: ['brave-search', 'memory', 'fetch', 'github'], bestFor: 'Solo Consultants — client delivery', cost: 'Free' },
];

// ── Skills Data (Top 29 from comparative matrix) ──
export const SKILLS: Skill[] = [
  {
    id: 'frontend-design', name: 'frontend-design', category: 'Design & UI',
    rank: '#2', installs: '490.5K',
    purpose: 'Production React components with shadcn/ui and Tailwind CSS; building accessible UI systems from design tokens to implementation',
    useCase: 'Generating production React components with shadcn/ui and Tailwind CSS',
    misconception: "It's just a CSS helper — actually it enforces WCAG compliance, dark mode, and design token governance",
    overlooked: 'The design token validation layer that catches contrast failures before they reach production',
    compatibleWith: ['Tailwind CSS', 'React', 'shadcn/ui', 'Next.js'],
    bestCombinedWith: ['gsap-animations', 'ui-ux-pro-max'],
    designVariance: 7, motionIntensity: 5, visualDensity: 3,
  },
  {
    id: 'superpowers', name: 'superpowers', category: 'Development',
    rank: '#1', installs: '620K+',
    purpose: 'Swiss-army knife for everything: API integration, auth, database queries, and general development tasks',
    useCase: 'General-purpose development for tasks you cannot do yourself',
    misconception: "It's a crutch — actually it is a force multiplier that handles boilerplate so you focus on architecture",
    overlooked: 'The context-aware pattern matching that learns your codebase conventions over time',
    compatibleWith: ['All development skills', 'All MCP servers'],
    bestCombinedWith: ['persistent-memory', 'context-compressor'],
  },
  {
    id: 'persistent-memory', name: 'persistent-memory', category: 'System',
    rank: '#3', installs: '450K+',
    purpose: 'Carries context across interrupted sessions — never re-explain your codebase',
    useCase: 'Cross-session context persistence for continuous development',
    misconception: "It's just a database — actually it is semantic memory with retrieval-augmented generation",
    overlooked: 'The automatic summarization that compresses old context while preserving key decisions',
    compatibleWith: ['All skills', 'All MCP stacks'],
    bestCombinedWith: ['context-compressor', 'superpowers'],
  },
  {
    id: 'gsap-animations', name: 'gsap-animations', category: 'Animation Eng.',
    rank: '#5', installs: '280K+',
    purpose: 'Production animation — GSAP is the industry standard for performant web animations',
    useCase: 'Scroll-triggered animations, SVG morphing, complex timeline sequences',
    misconception: "It's just CSS animations — GSAP handles layout thrashing, GPU compositing, and accessibility",
    overlooked: 'The built-in accessibility mode that respects prefers-reduced-motion',
    compatibleWith: ['frontend-design', 'animation-orchestrator'],
    bestCombinedWith: ['frontend-design', 'scroll-animations'],
    designVariance: 6, motionIntensity: 8, visualDensity: 4,
  },
  {
    id: 'context-compressor', name: 'context-compressor', category: 'System',
    rank: '#4', installs: '380K+',
    purpose: 'Compresses growing codebase context as the product scales',
    useCase: 'Managing large codebase context — frontend projects generate massive component trees',
    misconception: "It just truncates — actually it uses semantic compression preserving key patterns",
    overlooked: 'The priority queue that keeps recently-accessed patterns uncompressed',
    compatibleWith: ['All skills with large context needs'],
    bestCombinedWith: ['persistent-memory', 'superpowers'],
  },
  {
    id: 'deployment-manager', name: 'deployment-manager', category: 'Development',
    rank: '#7', installs: '210K+',
    purpose: 'One-command deploy eliminates the DevOps knowledge gap entirely',
    useCase: 'CI/CD pipeline setup, deployment automation, environment management',
    misconception: "Only for Vercel — actually supports AWS, GCP, Azure, and self-hosted",
    overlooked: 'The rollback mechanism that automatically reverts on health check failure',
    compatibleWith: ['vercel-react-best-practices', 'superpowers'],
    bestCombinedWith: ['browser-use', 'audit-analyzer'],
  },
  {
    id: 'brainstorming', name: 'brainstorming', category: 'Reasoning',
    rank: '#8', installs: '195K+',
    purpose: 'Breaks founder tunnel vision — generates alternatives when stuck',
    useCase: 'Creative problem-solving, ideation sessions, breaking through mental blocks',
    misconception: "Just random ideas — actually uses structured lateral thinking frameworks",
    overlooked: 'The constraint injection that forces thinking outside the obvious solution space',
    compatibleWith: ['devils-advocate', 'to-prd'],
    bestCombinedWith: ['devils-advocate', 'jtbd-research'],
  },
  {
    id: 'to-prd', name: 'to-prd', category: 'Strategy',
    rank: '#6', installs: '240K+',
    purpose: 'Converts fuzzy ideas into buildable specs — the #1 bottleneck for non-technical founders',
    useCase: 'Product requirements documents, feature specifications, project planning',
    misconception: "Just templates — actually it enforces feasibility checks and scope boundaries",
    overlooked: 'The automatic stakeholder impact analysis that catches downstream conflicts',
    compatibleWith: ['brainstorming', 'devils-advocate', 'superpowers'],
    bestCombinedWith: ['brainstorming', 'jtbd-research'],
  },
  {
    id: 'ui-ux-pro-max', name: 'ui-ux-pro-max', category: 'Design & UI',
    rank: '#9', installs: '180K+',
    purpose: 'Design-to-code translation — bridges the designer-engineer gap',
    useCase: 'Converting Figma designs to pixel-perfect React components',
    misconception: "Just a style guide — actually enforces design system governance at scale",
    overlooked: 'The automatic responsive breakpoint generation from a single desktop design',
    compatibleWith: ['frontend-design', 'gsap-animations'],
    bestCombinedWith: ['frontend-design', 'context7-docs'],
    designVariance: 8, motionIntensity: 6, visualDensity: 4,
  },
  {
    id: 'seo-content-writer', name: 'seo-content-writer', category: 'Content',
    rank: '#10', installs: '170K+',
    purpose: 'Organic acquisition without ad spend — the bootstrap growth engine',
    useCase: 'SEO-optimized articles, landing page copy, content strategy',
    misconception: "Keyword stuffing — actually writes reader-first content that ranks",
    overlooked: 'The competitive gap analysis that finds underserved search queries',
    compatibleWith: ['humanizer', 'social-media-manager'],
    bestCombinedWith: ['humanizer', 'web-reader'],
  },
  {
    id: 'devils-advocate', name: 'devils-advocate', category: 'Reasoning',
    rank: '#11', installs: '155K+',
    purpose: 'Stress-tests assumptions before committing scarce dev time',
    useCase: 'Decision validation, risk assessment, assumption challenging',
    misconception: "Just negativity — actually it is structured contrarian analysis with evidence",
    overlooked: 'The "steel man" mode that argues the strongest version of the opposing view',
    compatibleWith: ['brainstorming', 'to-prd'],
    bestCombinedWith: ['brainstorming', 'to-prd'],
  },
  {
    id: 'browser-use', name: 'browser-use', category: 'Development',
    rank: '#12', installs: '145K+',
    purpose: 'Visual verification — "does this actually render correctly?" in seconds',
    useCase: 'Cross-browser testing, visual regression, screenshot comparison',
    misconception: "Just screenshots — actually navigates, interacts, and validates user flows",
    overlooked: 'The accessibility audit that catches ARIA violations during visual testing',
    compatibleWith: ['frontend-design', 'deployment-manager'],
    bestCombinedWith: ['audit-analyzer', 'frontend-design'],
  },
  {
    id: 'humanizer', name: 'humanizer', category: 'Content',
    rank: '#13', installs: '130K+',
    purpose: 'Rewrites AI-generated marketing copy to sound authentic',
    useCase: 'Marketing copy refinement, email personalization, social media voice',
    misconception: "Just adds slang — actually adjusts tone, pacing, and cultural markers",
    overlooked: 'The A/B variant generation that produces multiple voice options for testing',
    compatibleWith: ['seo-content-writer', 'social-media-manager'],
    bestCombinedWith: ['seo-content-writer', 'gumroad-pipeline'],
  },
  {
    id: 'vercel-react-best-practices', name: 'vercel-react-best-practices', category: 'Development',
    rank: '#14', installs: '125K+',
    purpose: 'Canonical React/Next.js patterns — prevents architectural mistakes',
    useCase: 'Next.js project setup, architecture decisions, performance optimization',
    misconception: "Only for Vercel — these are universal React/Next.js best practices",
    overlooked: 'The automatic bundle analysis that catches tree-shaking failures',
    compatibleWith: ['frontend-design', 'composition-patterns'],
    bestCombinedWith: ['context7-docs', 'deployment-manager'],
  },
  {
    id: 'context7-docs', name: 'context7-docs', category: 'Development',
    rank: '#15', installs: '120K+',
    purpose: 'Always-current documentation — prevents using deprecated APIs',
    useCase: 'API reference, version migration, documentation lookup',
    misconception: "Just a search engine — actually maintains a version-aware knowledge graph",
    overlooked: 'The breaking change detection that alerts before you adopt a new API',
    compatibleWith: ['All development skills'],
    bestCombinedWith: ['vercel-react-best-practices', 'superpowers'],
  },
  {
    id: 'composition-patterns', name: 'composition-patterns', category: 'Development',
    rank: '#16', installs: '110K+',
    purpose: 'React composition patterns — the architecture that makes code maintainable',
    useCase: 'Component architecture, state management patterns, code organization',
    misconception: "Just compound components — covers render props, HOCs, hooks patterns, and more",
    overlooked: 'The automatic refactoring suggestions that simplify over-composed code',
    compatibleWith: ['vercel-react-best-practices', 'frontend-design'],
    bestCombinedWith: ['tdd-workflow', 'vercel-react-best-practices'],
  },
  {
    id: 'gumroad-pipeline', name: 'gumroad-pipeline', category: 'Strategy',
    rank: '#17', installs: '95K+',
    purpose: 'Revenue from day one — landing page + checkout + digital delivery',
    useCase: 'Digital product sales, payment integration, automated delivery',
    misconception: "Only for digital products — actually handles subscriptions, courses, and memberships",
    overlooked: 'The upsell automation that increases average order value by 30%',
    compatibleWith: ['seo-content-writer', 'deployment-manager'],
    bestCombinedWith: ['humanizer', 'seo-content-writer'],
  },
  {
    id: 'social-media-manager', name: 'social-media-manager', category: 'Content',
    rank: '#18', installs: '90K+',
    purpose: 'Launch amplification and building-in-public narrative',
    useCase: 'Social content scheduling, brand voice, community management',
    misconception: "Just scheduling — actually generates platform-specific content strategies",
    overlooked: 'The engagement prediction model that optimizes posting times',
    compatibleWith: ['humanizer', 'seo-content-writer'],
    bestCombinedWith: ['humanizer', 'seo-content-writer'],
  },
  {
    id: 'jtbd-research', name: 'jtbd-research', category: 'Strategy',
    rank: '#19', installs: '85K+',
    purpose: 'Deep customer research for PMF iteration',
    useCase: 'Customer interviews, jobs-to-be-done analysis, product-market fit',
    misconception: "Just surveys — actually conducts structured outcome-driven innovation",
    overlooked: 'The competitive algebra that maps underserved/overserved dimensions',
    compatibleWith: ['to-prd', 'brainstorming'],
    bestCombinedWith: ['to-prd', 'devils-advocate'],
  },
  {
    id: 'tdd-workflow', name: 'tdd-workflow', category: 'Quality',
    rank: '#20', installs: '80K+',
    purpose: 'Test-driven component development — catches regressions before staging',
    useCase: 'Unit testing, integration testing, test-driven development',
    misconception: "Just writing tests first — actually enforces the red-green-refactor cycle with coverage gates",
    overlooked: 'The mutation testing that catches tests that pass for the wrong reasons',
    compatibleWith: ['composition-patterns', 'vercel-react-best-practices'],
    bestCombinedWith: ['audit-analyzer', 'browser-use'],
  },
  {
    id: 'audit-analyzer', name: 'audit-analyzer', category: 'Data & Web',
    rank: '#21', installs: '75K+',
    purpose: 'Lighthouse scores, bundle analysis, DOM complexity auditing',
    useCase: 'Performance auditing, accessibility scoring, SEO analysis',
    misconception: "Just Lighthouse — actually runs custom audits for business-specific metrics",
    overlooked: 'The regression detection that tracks metrics over time and alerts on degradation',
    compatibleWith: ['browser-use', 'deployment-manager'],
    bestCombinedWith: ['tdd-workflow', 'browser-use'],
  },
  {
    id: 'animation-orchestrator', name: 'animation-orchestrator', category: 'Design & UI',
    rank: '#22', installs: '70K+',
    purpose: 'Multi-element animation sequences — hero sections, onboarding flows',
    useCase: 'Complex animation choreography, entrance sequences, interactive storytelling',
    misconception: "Just timeline sequencing — actually handles scroll-linked orchestration with stagger",
    overlooked: 'The performance budget mode that automatically simplifies animations on low-end devices',
    compatibleWith: ['gsap-animations', 'frontend-design'],
    bestCombinedWith: ['gsap-animations', 'scroll-animations'],
    designVariance: 7, motionIntensity: 9, visualDensity: 5,
  },
  {
    id: 'threejs-orchestrator', name: 'threejs-orchestrator', category: 'Development',
    rank: '#23', installs: '65K+',
    purpose: '3D web experiences for premium projects',
    useCase: '3D product configurators, immersive landing pages, data visualization',
    misconception: "Only for games — production-ready for marketing sites and product demos",
    overlooked: 'The progressive enhancement that falls back to 2D on unsupported devices',
    compatibleWith: ['gsap-animations', 'frontend-design'],
    bestCombinedWith: ['gsap-animations', 'animation-orchestrator'],
  },
  {
    id: 'web-reader', name: 'web-reader', category: 'Data & Web',
    rank: '#24', installs: '60K+',
    purpose: 'Reads competitor pricing pages, reviews, and market data',
    useCase: 'Web scraping, content extraction, competitive analysis',
    misconception: "Just HTTP requests — actually handles authentication, rate limiting, and content parsing",
    overlooked: 'The content distillation that extracts only the signal from noisy web pages',
    compatibleWith: ['brave-search', 'seo-content-writer'],
    bestCombinedWith: ['seo-content-writer', 'jtbd-research'],
  },
  {
    id: 'skill-finder', name: 'skill-finder', category: 'Strategy',
    rank: '#25', installs: '55K+',
    purpose: 'Discovers new skills as product needs evolve',
    useCase: 'Skills discovery, stack optimization, tool evaluation',
    misconception: "Just search — actually maps your workflow gaps to skill recommendations",
    overlooked: 'The compatibility checker that prevents conflicts before installation',
    compatibleWith: ['All skills'],
    bestCombinedWith: ['mcp-stack-curator', 'context-compressor'],
  },
  {
    id: 'mcp-stack-curator', name: 'mcp-stack-curator', category: 'MCP Servers',
    rank: '#26', installs: '50K+',
    purpose: 'Optimizes MCP configuration as stack grows',
    useCase: 'MCP server management, stack optimization, configuration tuning',
    misconception: "Just config files — actually orchestrates server lifecycles and resource allocation",
    overlooked: 'The automatic failover that switches to backup servers on primary failure',
    compatibleWith: ['All MCP stacks'],
    bestCombinedWith: ['skill-finder', 'persistent-memory'],
  },
  {
    id: 'explained-code', name: 'explained-code', category: 'Development',
    rank: '#27', installs: '48K+',
    purpose: 'Team documentation — component JSDoc, README, and architecture decision records',
    useCase: 'Code documentation, team onboarding, knowledge transfer',
    misconception: "Just comments — actually generates architecture decision records and migration guides",
    overlooked: 'The documentation freshness detection that flags outdated docs based on code changes',
    compatibleWith: ['composition-patterns', 'vercel-react-best-practices'],
    bestCombinedWith: ['tdd-workflow', 'context7-docs'],
  },
  {
    id: 'web-artifacts-builder', name: 'web-artifacts-builder', category: 'Development',
    rank: '#28', installs: '45K+',
    purpose: 'Interactive demos for investor/user validation',
    useCase: 'Rapid prototyping, proof-of-concept demos, investor presentations',
    misconception: "Just static pages — actually generates interactive, data-connected prototypes",
    overlooked: 'The feedback capture system that records user interactions for analysis',
    compatibleWith: ['frontend-design', 'superpowers'],
    bestCombinedWith: ['frontend-design', 'gsap-animations'],
  },
  {
    id: 'gumroad-pipeline-v2', name: 'gumroad-pipeline-v2', category: 'Strategy',
    rank: '#29', installs: '42K+',
    purpose: 'Enhanced digital commerce with subscription management and analytics',
    useCase: 'SaaS billing, subscription management, revenue analytics',
    misconception: "Just payment processing — actually handles the full subscription lifecycle",
    overlooked: 'The churn prediction that identifies at-risk customers 30 days before cancellation',
    compatibleWith: ['gumroad-pipeline', 'seo-content-writer'],
    bestCombinedWith: ['gumroad-pipeline', 'audit-analyzer'],
  },
];

// ── User Types ──
export const USER_TYPES: UserType[] = [
  {
    id: 'solo-indie-hacker',
    name: 'Solo Indie Hacker',
    icon: '🚀',
    profileDescription: 'Non-technical or semi-technical founder building their first product. Operates under extreme resource constraints: bootstrapped budgets, no team, and a "ship or die" timeline. Mobile-first usage, needs guided opinionated workflows.',
    coreSkills: ['to-prd', 'superpowers', 'frontend-design', 'deployment-manager', 'gumroad-pipeline', 'seo-content-writer', 'persistent-memory'],
    extendedSkills: ['brainstorming', 'devils-advocate', 'web-reader', 'humanizer', 'context-compressor', 'social-media-manager'],
    powerUserSkills: ['jtbd-research', 'web-artifacts-builder', 'skill-finder', 'mcp-stack-curator'],
    primaryAgentMode: '🦅 Eagle (Strategy)',
    mcpStack: 'Product Launch Stack',
    tokenBudget: '8,000-10,000 (2 skills active)',
    pitfalls: ['Over-engineering the MVP', 'Skipping the humanizer', 'Ignoring persistent-memory', 'Loading too many skills', 'Building before validating'],
    optimalWorkflow: ':00–:10 IDEATE → :10–:25 BUILD → :25–:40 SHIP → :40–:55 GROW → :55–:60 REVIEW',
  },
  {
    id: 'frontend-developer',
    name: 'Frontend Developer',
    icon: '🎨',
    profileDescription: 'Experienced React/Vue engineer focused on UI implementation, animation, and design systems. Translates Figma to pixel-perfect components. Biggest pain: staying current, bridging design-engineer gap, maintaining animation quality at scale.',
    coreSkills: ['vercel-react-best-practices', 'ui-ux-pro-max', 'frontend-design', 'gsap-animations', 'composition-patterns', 'context7-docs', 'browser-use', 'explained-code'],
    extendedSkills: ['animation-orchestrator', 'animation-hybrid-architect', 'tdd-workflow', 'audit-analyzer', 'persistent-memory', 'context-compressor'],
    powerUserSkills: ['threejs-orchestrator', 'animation-auditor', 'gsap-animation-engineer', 'motion-animation-engineer', 'code-research', 'superpowers'],
    primaryAgentMode: '🦫 Beaver (Systems)',
    mcpStack: 'Frontend Dev Stack',
    tokenBudget: '10,000-12,000 (2-3 skills active)',
    pitfalls: ['Animation without accessibility', 'Design system drift', 'Bundle bloat from animation libraries', 'Over-composition', 'Skipping visual regression'],
    optimalWorkflow: ':00–:15 DESIGN REVIEW → :15–:35 IMPLEMENT → :35–:45 ANIMATE → :45–:55 TEST → :55–:60 DOCUMENT',
  },
  {
    id: 'backend-api-engineer',
    name: 'Backend / API Engineer',
    icon: '⚙️',
    profileDescription: 'Systems thinker building APIs, microservices, and data pipelines. Prioritizes reliability, security, and performance. Works across databases, message queues, and cloud infrastructure. Needs skills that generate production-grade code with proper error handling.',
    coreSkills: ['superpowers', 'context7-docs', 'deployment-manager', 'tdd-workflow', 'audit-analyzer', 'persistent-memory', 'explained-code'],
    extendedSkills: ['devils-advocate', 'brainstorming', 'composition-patterns', 'context-compressor', 'browser-use', 'mcp-stack-curator'],
    powerUserSkills: ['skill-finder', 'web-reader', 'jtbd-research', 'web-artifacts-builder'],
    primaryAgentMode: '🦉 Owl (Analysis)',
    mcpStack: 'Full-Stack API Stack',
    tokenBudget: '8,000-11,000 (2-3 skills active)',
    pitfalls: ['Premature optimization', 'Ignoring API documentation', 'Skipping integration tests', 'Over-abstracting patterns', 'Manual deployment'],
    optimalWorkflow: ':00–:10 SPEC REVIEW → :10–:30 IMPLEMENT → :30–:45 TEST → :45–:55 DEPLOY → :55–:60 MONITOR',
  },
  {
    id: 'fullstack-generalist',
    name: 'Full-Stack Generalist',
    icon: '🌐',
    profileDescription: 'Jack of all trades who ships complete features end-to-end. Comfortable in frontend, backend, and DevOps. Their breadth is their strength and their curse — they need skills that prevent shallow implementation across the stack.',
    coreSkills: ['superpowers', 'frontend-design', 'deployment-manager', 'vercel-react-best-practices', 'context7-docs', 'persistent-memory', 'context-compressor'],
    extendedSkills: ['gsap-animations', 'tdd-workflow', 'brainstorming', 'devils-advocate', 'browser-use', 'social-media-manager'],
    powerUserSkills: ['animation-orchestrator', 'threejs-orchestrator', 'jtbd-research', 'to-prd', 'mcp-stack-curator', 'web-artifacts-builder'],
    primaryAgentMode: '🦅 Eagle (Strategy) + 🦫 Beaver (Systems)',
    mcpStack: 'Frontend Dev Stack + Full-Stack API Stack',
    tokenBudget: '10,000-12,500 (2-3 skills active)',
    pitfalls: ['Depth over breadth failure', 'Context switching cost', 'Ignoring domain expertise', 'Feature creep', 'Inconsistent quality across stack layers'],
    optimalWorkflow: ':00–:10 PLAN (Eagle) → :10–:25 FRONTEND (Beaver) → :25–:40 BACKEND (Owl) → :40–:50 INTEGRATE → :50–:60 SHIP',
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    icon: '📊',
    profileDescription: 'Analytical thinker focused on data pipelines, statistical models, and ML workflows. Needs skills that handle data wrangling, model training, and visualization. Works primarily in Python notebooks and data infrastructure.',
    coreSkills: ['superpowers', 'context7-docs', 'audit-analyzer', 'persistent-memory', 'context-compressor', 'web-reader', 'explained-code'],
    extendedSkills: ['brainstorming', 'devils-advocate', 'tdd-workflow', 'deployment-manager', 'skill-finder', 'mcp-stack-curator'],
    powerUserSkills: ['jtbd-research', 'code-research', 'browser-use', 'web-artifacts-builder'],
    primaryAgentMode: '🦉 Owl (Analysis)',
    mcpStack: 'Data Science Stack',
    tokenBudget: '8,000-10,500 (2-3 skills active)',
    pitfalls: ['Overfitting models', 'Ignoring data quality', 'Notebook spaghetti', 'Skipping deployment considerations', 'Insufficient documentation'],
    optimalWorkflow: ':00–:10 DATA REVIEW → :10–:30 ANALYZE → :30–:45 MODEL → :45–:55 VALIDATE → :55–:60 DOCUMENT',
  },
  {
    id: 'content-creator',
    name: 'Content Creator',
    icon: '✍️',
    profileDescription: 'Writer, marketer, or creator building an audience through content. Needs skills that amplify their voice, not replace it. Focus on authenticity, SEO, and multi-platform distribution. Mobile-first creation workflow.',
    coreSkills: ['seo-content-writer', 'humanizer', 'social-media-manager', 'persistent-memory', 'web-reader', 'superpowers', 'brainstorming'],
    extendedSkills: ['devils-advocate', 'gumroad-pipeline', 'frontend-design', 'deployment-manager', 'context-compressor', 'skill-finder'],
    powerUserSkills: ['jtbd-research', 'to-prd', 'web-artifacts-builder', 'mcp-stack-curator'],
    primaryAgentMode: '🐰 Rabbit (Ideation)',
    mcpStack: 'Content Creator Stack',
    tokenBudget: '6,000-8,000 (1-2 skills active)',
    pitfalls: ['Losing authentic voice', 'Over-optimizing for SEO', 'Inconsistent publishing', 'Ignoring analytics', 'Content without strategy'],
    optimalWorkflow: ':00–:15 RESEARCH → :15–:35 DRAFT → :35–:45 HUMANIZE → :45–:55 OPTIMIZE → :55–:60 PUBLISH',
  },
  {
    id: 'enterprise-architect',
    name: 'Enterprise Architect',
    icon: '🏗️',
    profileDescription: 'Senior technical leader designing systems at scale. Makes decisions that affect hundreds of engineers. Needs skills that support architectural reasoning, governance, and long-term strategy. Their decisions have compounding effects.',
    coreSkills: ['vercel-react-best-practices', 'composition-patterns', 'superpowers', 'context7-docs', 'explained-code', 'audit-analyzer', 'persistent-memory'],
    extendedSkills: ['devils-advocate', 'brainstorming', 'deployment-manager', 'tdd-workflow', 'context-compressor', 'mcp-stack-curator'],
    powerUserSkills: ['jtbd-research', 'to-prd', 'skill-finder', 'code-research'],
    primaryAgentMode: '🦅 Eagle (Strategy)',
    mcpStack: 'Enterprise Architect Stack',
    tokenBudget: '10,000-12,500 (2-3 skills active)',
    pitfalls: ['Analysis paralysis', 'Over-architecting for scale that never comes', 'Ignoring team velocity', 'Decision without evidence', 'Tech stack fragmentation'],
    optimalWorkflow: ':00–:15 ASSESS → :15–:30 DESIGN → :30–:45 VALIDATE → :45–:55 DOCUMENT → :55–:60 COMMUNICATE',
  },
  {
    id: 'growth-hacker',
    name: 'Growth Hacker',
    icon: '📈',
    profileDescription: 'Experimentation-focused operator who drives user acquisition and retention through rapid testing. Combines marketing intuition with data analysis. Needs skills that support A/B testing, funnel optimization, and viral mechanics.',
    coreSkills: ['seo-content-writer', 'humanizer', 'web-reader', 'superpowers', 'brainstorming', 'persistent-memory', 'social-media-manager'],
    extendedSkills: ['devils-advocate', 'gumroad-pipeline', 'deployment-manager', 'frontend-design', 'audit-analyzer', 'context-compressor'],
    powerUserSkills: ['jtbd-research', 'to-prd', 'web-artifacts-builder', 'skill-finder'],
    primaryAgentMode: '🐰 Rabbit (Ideation) + 🦅 Eagle (Strategy)',
    mcpStack: 'Growth Hacker Stack',
    tokenBudget: '8,000-10,000 (2 skills active)',
    pitfalls: ['Testing without hypothesis', 'Ignoring statistical significance', 'Feature hacking over product improvement', 'Short-term optimization at long-term cost', 'Vanity metrics'],
    optimalWorkflow: ':00–:10 HYPOTHESIZE → :10–:25 EXPERIMENT → :25–:40 ANALYZE → :40–:50 ITERATE → :50–:60 SCALE',
  },
];

// ── Proxy Types (for comparison topics page) ──
export const PROXY_TYPES: ProxyType[] = [
  {
    id: 'forward-proxy',
    name: 'Forward Proxy',
    category: 'Network Infrastructure',
    description: 'Acts as an intermediary between clients and the internet, forwarding requests from internal networks to external servers. The classic "gateway" pattern that masks client identity and controls outbound traffic.',
    strengths: ['Client anonymity and IP masking', 'Content filtering and access control', 'Bandwidth optimization through caching', 'Security perimeter enforcement'],
    weaknesses: ['Single point of failure risk', 'Latency addition for all requests', 'SSL/TLS inspection complexity', 'Cache staleness issues'],
    psychologyLink: 'Acts like a social filter — people present curated versions of themselves through proxies, just as clients present filtered requests. The "masking effect" parallels impression management theory.',
    businessLink: 'Gateway business model — controls access and creates toll-gate value. Like distributor relationships in supply chains, the proxy extracts value by controlling the flow between producer and consumer.',
    marketingLink: 'Brand proxy strategy — companies use influencers and affiliates as forward proxies to reach audiences they cannot access directly. The proxy translates the brand message for a new context.',
    integrationLink: 'API gateway pattern in microservices — the forward proxy concept maps directly to API gateways that sit between clients and services, handling authentication, rate limiting, and request transformation.',
    longTermStrategy: 'As zero-trust architectures replace perimeter-based security, forward proxies evolve from gatekeepers to policy enforcement points. The long-term play is becoming the intelligent traffic controller, not the wall.',
    creativeInsight: 'What if proxies could negotiate? Imagine a forward proxy that haggles with destination servers on behalf of clients — requesting lower-resolution images on slow connections, or batch-delivering content during off-peak hours.',
  },
  {
    id: 'reverse-proxy',
    name: 'Reverse Proxy',
    category: 'Network Infrastructure',
    description: 'Sits in front of web servers, receiving client requests and forwarding them to appropriate backend servers. The "bouncer" of the internet — controls who gets in, how fast, and to which server.',
    strengths: ['Load balancing across multiple servers', 'SSL termination and certificate management', 'DDoS protection and rate limiting', 'Content compression and optimization'],
    weaknesses: ['Added complexity in configuration', 'Potential bottleneck if undersized', 'Header manipulation challenges', 'WebSocket connection management'],
    psychologyLink: 'The "first impression" effect — reverse proxies control the initial interaction, much like how a receptionist shapes your perception of a company. The gateway becomes the brand.',
    businessLink: 'Platform business model — the reverse proxy is the platform that sits between supply (servers) and demand (clients). Like Amazon, it creates value through curation, quality control, and efficient matching.',
    marketingLink: 'Brand experience management — the reverse proxy is the controlled experience layer. Companies carefully craft the "front door" experience, just as Apple designs their store entrances to set expectations.',
    integrationLink: 'Service mesh pattern in microservices — Istio, Linkerd, and similar tools implement reverse proxy functionality at the service level, managing all inter-service communication transparently.',
    longTermStrategy: 'Reverse proxies are evolving into "service hubs" — not just routing traffic but actively transforming, caching, and pre-computing responses. The future is predictive proxying that anticipates requests before they arrive.',
    creativeInsight: 'What if reverse proxies had "taste"? A proxy that learns what kind of content a user prefers and proactively pre-warms caches, optimizes images for their device, and prioritizes their preferred backend.',
  },
  {
    id: 'transparent-proxy',
    name: 'Transparent Proxy',
    category: 'Network Infrastructure',
    description: 'Intercepts traffic without client configuration or awareness. The "invisible hand" — redirects and filters network traffic without the user knowing their requests are being mediated.',
    strengths: ['Zero client configuration required', 'Transparent to end-users', 'Effective for enterprise policy enforcement', 'Simplified deployment at scale'],
    weaknesses: ['Privacy concerns and ethical implications', 'Difficult to troubleshoot issues', 'Limited ability to handle encrypted traffic', 'Potential for abuse in surveillance'],
    psychologyLink: 'The "nudge" effect — transparent proxies embody choice architecture. Users make decisions believing they are unmediated, but the environment has been shaped. Like grocery store layouts that guide purchase behavior.',
    businessLink: 'Platform dependency trap — transparent proxies create invisible dependencies. Businesses that rely on transparent infrastructure often discover they have no control when policies change, like Facebook algorithm dependency.',
    marketingLink: 'Native advertising parallel — just as transparent proxies intercept without awareness, native ads present commercial content in editorial wrappers. The line between organic and mediated becomes intentionally blurry.',
    integrationLink: 'Service discovery in Kubernetes — the DNS-based service discovery acts as a transparent proxy, redirecting service calls without application awareness. The mesh handles routing, retries, and load balancing invisibly.',
    longTermStrategy: 'As privacy regulations tighten globally, transparent proxies face existential questions. The future lies in "consent-aware" transparent proxying — invisible mediation with user-controlled policy boundaries.',
    creativeInsight: 'What if transparent proxies were "fair"? A proxy that automatically detects and corrects bias in algorithmic content delivery, ensuring users see diverse perspectives instead of engagement-maximizing echo chambers.',
  },
  {
    id: 'skills-proxy',
    name: 'Skills Proxy (Agent Skill Layer)',
    category: 'AI Agent Architecture',
    description: 'In the skills.sh ecosystem, the agent skill layer acts as a proxy between user intent and code execution. It translates natural language into structured workflows, mediates between skills, and enforces quality gates — the "API gateway" of AI agent development.',
    strengths: ['Intent-to-execution translation', 'Cross-skill orchestration and compatibility', 'Quality gate enforcement', 'Context management across skill boundaries'],
    weaknesses: ['Token budget constraints', 'Skill conflict resolution complexity', 'Context window fragmentation', 'Learning curve for optimal stacking'],
    psychologyLink: 'Cognitive offloading — the skills proxy externalizes mental effort, like how GPS offloads spatial reasoning. The danger: skill atrophy when the proxy handles everything, parallel to how GPS erodes navigational ability.',
    businessLink: 'Platform orchestration — the skills proxy is the "operating system" of AI agent development. Like Salesforce\'s app ecosystem, the value is in the network effects: more skills = more valuable proxy = more skills.',
    marketingLink: 'Ecosystem marketing — the skills proxy enables "built on" marketing. Every skill built for the proxy becomes a marketing channel. Like "There\'s an app for that" became Apple\'s most effective campaign.',
    integrationLink: 'MCP (Model Context Protocol) servers are the integration proxy — they connect the skills layer to external services, databases, and APIs. The skills proxy + MCP proxy = complete agent architecture.',
    longTermStrategy: 'The skills proxy will become the "app store" of AI agents — a standardized marketplace where skills are discovered, composed, and deployed. The winner will be whoever solves cross-proxy skill portability first.',
    creativeInsight: 'What if skills proxies could "evolve"? Not just learn from usage patterns, but actively create new skills by combining existing ones in novel ways — like how biological evolution produces emergent properties from simple genetic building blocks.',
  },
  {
    id: 'mcp-proxy',
    name: 'MCP Server Proxy',
    category: 'AI Agent Architecture',
    description: 'The Model Context Protocol server acts as a standardized proxy layer between AI models and external tools/data sources. It provides a universal adapter pattern — any model can connect to any tool through the same protocol, eliminating custom integration code.',
    strengths: ['Universal adapter for any model-tool pair', 'Standardized protocol reduces integration code', 'Server lifecycle management', 'Authentication and authorization layer'],
    weaknesses: ['Protocol versioning challenges', 'Server sprawl without governance', 'Latency from protocol overhead', 'Limited offline capability'],
    psychologyLink: 'The "translator" archetype — MCP servers embody the cultural mediator role. Like a diplomat who speaks multiple languages, the MCP proxy translates between models and tools, creating understanding where there was isolation.',
    businessLink: 'Infrastructure-as-a-service — MCP servers are the "pipes and plumbing" of AI agent architecture. The business model mirrors cloud infrastructure: metered usage, managed services, and ecosystem lock-in through dependency.',
    marketingLink: 'Developer experience as marketing — MCP servers win through developer experience. The protocol that is easiest to implement, best documented, and most reliable captures the ecosystem. Like Stripe won payments through API design.',
    integrationLink: 'The skills proxy + MCP proxy pattern is the complete agent stack: skills handle cognitive orchestration, MCP handles service orchestration. Together they form the "nervous system" of an AI agent.',
    longTermStrategy: 'MCP will evolve from protocol to platform — the server registry becomes the central discovery mechanism, the protocol adds streaming and event-driven patterns, and governance layers enforce quality and security at scale.',
    creativeInsight: 'What if MCP servers could "merge"? Two servers could dynamically combine their capabilities at runtime, creating a temporary composite server with capabilities neither had alone — like Voltron, but for API integrations.',
  },
  {
    id: 'data-proxy',
    name: 'Data Proxy / API Gateway',
    category: 'Data Architecture',
    description: 'Sits between applications and data sources, transforming, caching, and routing data requests. The "librarian" of the data world — knows where everything is, who can access what, and the fastest way to get it.',
    strengths: ['Query optimization and caching', 'Data access control and masking', 'Schema transformation between services', 'Real-time data streaming support'],
    weaknesses: ['Data consistency challenges across caches', 'Complex transformation pipelines', 'Single point of data access failure', 'Regulatory compliance complexity'],
    psychologyLink: 'Information filtering — the data proxy embodies selective attention. Like how our brains filter sensory input to focus on what matters, data proxies filter information flow to deliver relevance.',
    businessLink: 'Data-as-a-Service model — the data proxy enables monetization of data access. Like Bloomberg terminals, the value is in curated, filtered, and optimized access to raw information that would be overwhelming unprocessed.',
    marketingLink: 'Personalization engine — every recommendation system is a data proxy. Netflix, Spotify, Amazon — they all sit between the catalog and the consumer, translating raw data into personalized experiences.',
    integrationLink: 'GraphQL is the modern data proxy — it gives clients control over what data they receive, eliminating over-fetching and under-fetching. The data proxy evolves from controlling access to empowering client-driven queries.',
    longTermStrategy: 'Data proxies will become "intelligent routers" — not just caching and transforming, but pre-computing likely queries, detecting anomalies, and automatically optimizing schemas based on access patterns.',
    creativeInsight: 'What if data proxies had "empathy"? A proxy that understands the emotional context of data requests and adjusts response format, detail level, and presentation accordingly — financial dashboards that simplify during market crashes.',
  },
];

// ── Document Tree Structure (for stack tree visualization) ──
export interface TreeNode {
  id: string;
  label: string;
  type: 'root' | 'category' | 'document' | 'skill' | 'user-type' | 'tier' | 'mcp' | 'proxy';
  icon?: string;
  description?: string;
  children?: TreeNode[];
  data?: unknown;
}

export const DOCUMENT_TREE: TreeNode = {
  id: 'root',
  label: 'Skills Showcase',
  type: 'root',
  icon: '⚡',
  description: '76 Skills · 11 Categories · 8 User Types · 4 Tiers · 9 MCP Stacks',
  children: [
    {
      id: 'skills',
      label: 'Skills Library',
      type: 'category',
      icon: '📚',
      description: '29 core skills across 11 categories',
      children: [
        { id: 'design-ui', label: 'Design & UI', type: 'category', icon: '🎨', children: SKILLS.filter(s => s.category === 'Design & UI').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'development', label: 'Development', type: 'category', icon: '⚙️', children: SKILLS.filter(s => s.category === 'Development').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'reasoning', label: 'Reasoning', type: 'category', icon: '🧠', children: SKILLS.filter(s => s.category === 'Reasoning').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'strategy', label: 'Strategy', type: 'category', icon: '🎯', children: SKILLS.filter(s => s.category === 'Strategy').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'content', label: 'Content', type: 'category', icon: '✍️', children: SKILLS.filter(s => s.category === 'Content').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'system', label: 'System', type: 'category', icon: '🔧', children: SKILLS.filter(s => s.category === 'System').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'data-web', label: 'Data & Web', type: 'category', icon: '🌐', children: SKILLS.filter(s => s.category === 'Data & Web').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'animation', label: 'Animation Eng.', type: 'category', icon: '✨', children: SKILLS.filter(s => s.category === 'Animation Eng.').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'quality', label: 'Quality', type: 'category', icon: '🛡️', children: SKILLS.filter(s => s.category === 'Quality').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
        { id: 'mcp-servers', label: 'MCP Servers', type: 'category', icon: '🔌', children: SKILLS.filter(s => s.category === 'MCP Servers').map(s => ({ id: s.id, label: s.name, type: 'skill' as const, icon: '⚡', description: s.purpose })) },
      ],
    },
    {
      id: 'user-types',
      label: 'User Types',
      type: 'category',
      icon: '👥',
      description: '8 distinct user type profiles',
      children: USER_TYPES.map(u => ({
        id: u.id,
        label: u.name,
        type: 'user-type' as const,
        icon: u.icon,
        description: u.profileDescription.substring(0, 120) + '...',
      })),
    },
    {
      id: 'agent-tiers',
      label: 'Agent Skill Tiers',
      type: 'category',
      icon: '🏅',
      description: '4-tier progression architecture',
      children: AGENT_TIERS.map(t => ({
        id: t.id,
        label: `${t.name} (${t.tokenCost.toLocaleString()} tokens)`,
        type: 'tier' as const,
        icon: '🏆',
        description: t.description,
      })),
    },
    {
      id: 'mcp-stacks',
      label: 'MCP Stacks',
      type: 'category',
      icon: '🔌',
      description: '9 pre-built server stacks',
      children: MCP_STACKS.map(s => ({
        id: s.id,
        label: s.name,
        type: 'mcp' as const,
        icon: '📦',
        description: `${s.servers.join(' + ')} — ${s.bestFor}`,
      })),
    },
    {
      id: 'proxy-types',
      label: 'Proxy Architecture',
      type: 'category',
      icon: '🔄',
      description: '6 proxy types with cross-field analysis',
      children: PROXY_TYPES.map(p => ({
        id: p.id,
        label: p.name,
        type: 'proxy' as const,
        icon: '🔀',
        description: p.description.substring(0, 120) + '...',
      })),
    },
    {
      id: 'documents',
      label: 'Source Documents',
      type: 'category',
      icon: '📄',
      description: 'Research reports and analysis',
      children: [
        { id: 'doc-system-master', label: 'SYSTEM_MASTER_v4.md', type: 'document' as const, icon: '📋', description: 'Silent Protocol + Depth framework' },
        { id: 'doc-user-type-report', label: 'User-Type Skill Stack Report', type: 'document' as const, icon: '📊', description: '76 Skills · 8 User Types · 4 Tiers analysis' },
        { id: 'doc-taste-skill', label: 'Taste Skill (Frontend Design)', type: 'document' as const, icon: '🎨', description: '5 design philosophy skill files' },
        { id: 'doc-skills-matrix', label: 'Skills Comparative Matrix', type: 'document' as const, icon: '📈', description: '29 skills with 12 dimensions comparison' },
        { id: 'doc-mcp-ecosystem', label: 'MCP Server Ecosystem Report', type: 'document' as const, icon: '🔌', description: 'MCP server architecture and integration' },
        { id: 'doc-skills-showcase', label: 'Skills Showcase HTML', type: 'document' as const, icon: '⚡', description: '58 skills interactive neo-brutalist showcase' },
        { id: 'doc-error-audit', label: 'Impeccable Error Fix Handler Audit', type: 'document' as const, icon: '🛡️', description: '5-perspective audit: Owl, Eagle, Beaver, Dolphin, Elephant' },
        { id: 'doc-stack-combo-research', label: 'Skill Stack Combination Research', type: 'document' as const, icon: '🔬', description: '76 Skills, 12 Use-Case Stacks, 8 User Types, 6 Pipelines, 6 Blueprints' },
        { id: 'doc-stack-research-report', label: 'Skill Stack Research Report', type: 'document' as const, icon: '📑', description: 'Comprehensive persona skill stack analysis' },
        { id: 'doc-redesign-options', label: 'Skills Showcase Redesign Options', type: 'document' as const, icon: '🎭', description: 'v18.0.0 Senior Design Architect Prompt' },
        { id: 'doc-extraordinary-design', label: 'Extraordinary Web Design System', type: 'document' as const, icon: '✨', description: 'Rethinking + Innovation Framework v1.0' },
        { id: 'doc-ubuntu-uefi', label: 'Ubuntu UEFI Install Guide', type: 'document' as const, icon: '🐧', description: 'ThinkPad X1 Carbon boot-loop recovery' },
        { id: 'doc-ai-agentic-blueprint', label: 'AI Agentic Stack Blueprint', type: 'document' as const, icon: '🤖', description: 'Agentic tool stack architecture and research' },
        { id: 'doc-kdi-redesign', label: 'KDI Master Redesign Prompt', type: 'document' as const, icon: '🔮', description: '4 design philosophies synthesis: Kinetic Spatial, Chromatic Minimal, Glass Depth, Neo-Industrial' },
        { id: 'doc-interactive-infographic', label: 'Interactive Infographic Research', type: 'document' as const, icon: '📊', description: 'Animation library comparison for AI agentic architecture diagrams' },
        { id: 'doc-ai-agentic-tools', label: 'AI Agentic Tools Research', type: 'document' as const, icon: '🤖', description: 'Top 20 ADE tools, 10 proxy stacks, 15 OpenCode plugins, 10 orchestration frameworks' },
        { id: 'doc-opencode-enhancements', label: 'OpenCode Enhancements Research', type: 'document' as const, icon: '🔧', description: '14 plugins, skills ecosystem, 20 MCP servers for OpenCode AI coding agent' },
        { id: 'doc-proxy-defense-stack', label: 'Enhanced Proxy Defense Stack v3.2', type: 'document' as const, icon: '🛡️', description: 'JA4JA fingerprinting, QUIC, BBRv3, Raft consensus, OWL-AGENT v4.21' },
        { id: 'doc-promptcos', label: 'promptc OS Integration', type: 'document' as const, icon: '⚡', description: 'AI Prompt Engineering OS — 6 zones, 47 modifiers, 20 templates, 66 skills' },
      ],
    },
  ],
};

// ── Error Audit Perspectives (from Impeccable_Error_Fix_Handler_Audit.pdf) ──
export interface ErrorPerspective {
  id: string;
  animal: string;
  icon: string;
  title: string;
  coreThesis: string;
  keyFindings: string[];
  recommendations: string[];
  blindSpots: string[];
}

export const ERROR_AUDIT_PERSPECTIVES: ErrorPerspective[] = [
  {
    id: 'owl',
    animal: 'Owl',
    icon: '🦉',
    title: 'Slow, Observant, Analytical',
    coreThesis: 'The git rebase conflict that killed the session was not a random event. The conditions for catastrophic failure were baked into the system from the start. The persistent shell session was a single point of failure, the git rebase was executed without a pre-check, and the entire deployment pipeline depended on a single fragile session that could not be reset from within.',
    keyFindings: [
      'The shell prompt hook was a hidden dependency that amplified failure — framework-level guards had no escape hatch',
      'Session persistence without session recovery creates an illusion of stability that collapses under pressure',
      'Git operations in persistent sessions lack atomicity guarantees — partial states become unrecoverable',
      'The build passing (6.3s, zero errors) created false confidence that masked the fragility of the deployment pipeline',
      'Deployment and code quality are orthogonal — perfect code can still fail to deploy',
    ],
    recommendations: [
      'Implement pre-flight checks before any git rebase: detect conflict likelihood and auto-stash',
      'Add shell-level escape hatches that can recover from framework-level locks',
      'Make all destructive git operations require explicit confirmation with rollback plan',
      'Create deployment health checks that run before and after git operations',
    ],
    blindSpots: [
      'Most developers assume that if the build passes, deployment will succeed — this is a dangerous assumption',
      'The second-order effect of session locks: not just the current session dies, but all accumulated context and state',
      'The "invisible dependency" problem: shell hooks, environment variables, and framework guards that work until they catastrophically fail',
    ],
  },
  {
    id: 'eagle',
    animal: 'Eagle',
    icon: '🦅',
    title: 'Long-Term Strategic Vision',
    coreThesis: 'The long-term strategy for error handling is not to prevent errors but to make the system resilient to them. Errors are not exceptional events — they are expected states that the system should handle gracefully. The goal is "impeccable error handling" where every failure becomes an opportunity for the system to demonstrate resilience.',
    keyFindings: [
      'Error handling should be treated as a first-class architectural concern, not an afterthought',
      'The deployment pipeline should be self-healing: detect, diagnose, resolve, and continue without human intervention',
      'Git operations should be wrapped in transactional semantics: begin, attempt, commit or rollback',
      'Proxy architecture enables operational continuity: when one path fails, another takes over seamlessly',
    ],
    recommendations: [
      'Design error handling as a layered system: component → page → session → framework → infrastructure',
      'Implement circuit breakers that prevent cascading failures from propagating',
      'Build deployment canaries that test changes in isolation before full rollout',
      'Create automated rollback triggers based on health check failures',
    ],
    blindSpots: [
      'Most error handling strategies focus on known failure modes and miss novel failures',
      'The cost of error handling infrastructure is often underestimated — it can add 30-40% to development time',
      'Error handling itself can become a source of errors (the "meta-error" problem)',
    ],
  },
  {
    id: 'beaver',
    animal: 'Beaver',
    icon: '🦫',
    title: 'Practical Error Handling Systems',
    coreThesis: 'Like a beaver building a dam, error handling should be constructed incrementally, with each layer adding resilience without creating new failure points. The system should be over-engineered at the foundation (session management) and progressively simpler at higher layers (component errors).',
    keyFindings: [
      'Error boundaries at every component level prevent a single crash from taking down the entire UI',
      'Session state should be continuously persisted so any crash can be recovered from',
      'Git operations need a "dry run" mode that validates changes before applying them',
      'The deployment pipeline should have multiple independent paths so one blocked path does not block all deployment',
    ],
    recommendations: [
      'Implement React Error Boundaries at root, page, section, and component levels with progressive fallbacks',
      'Add automatic session state snapshots every 30 seconds with rollback capability',
      'Create a "git safety wrapper" that wraps all git operations in try/catch with automatic conflict resolution',
      'Build deployment redundancy: GitHub Pages + Vercel as independent deployment targets',
    ],
    blindSpots: [
      'Beavers over-build dams — error handling can become so complex it introduces new failure modes',
      'The "retry loop" anti-pattern: automatically retrying failed operations can make things worse',
      'Backup systems need their own backup systems — but who backs up the backup?',
    ],
  },
  {
    id: 'dolphin',
    animal: 'Dolphin',
    icon: '🐬',
    title: 'Creative Frontend Design Solutions',
    coreThesis: 'Error states are not just failure notifications — they are design opportunities. The best error experiences make users feel cared for, not abandoned. Creative error handling transforms "something went wrong" into "we noticed something and here is what we are doing about it."',
    keyFindings: [
      'Error states should maintain the visual language and emotional tone of the rest of the application',
      'Progressive disclosure of error details reduces cognitive load while providing depth for debugging',
      'Animated transitions into and out of error states reduce perceived severity',
      'Error recovery should be one-click whenever possible — auto-retry with manual override',
    ],
    recommendations: [
      'Design error states as first-class UI components with the same design attention as success states',
      'Use skeleton screens and optimistic updates to mask transient errors',
      'Implement "graceful degradation" animations that simplify rather than break under pressure',
      'Create a "recovery dashboard" that shows what went wrong and provides one-click fixes',
    ],
    blindSpots: [
      'Over-animating error states can make serious errors seem trivial',
      'Humor in error messages can backfire when users are genuinely frustrated',
      'The "beautiful error page" paradox: if the error page is too pretty, users may not realize something is wrong',
    ],
  },
  {
    id: 'elephant',
    animal: 'Elephant',
    icon: '🐘',
    title: 'Cross-Domain Insights on Proxy Architecture',
    coreThesis: 'The proxy architecture discussion connects to psychology (cognitive offloading), economics (platform dependency), biology (redundancy in neural pathways), and military strategy (defense in depth). Understanding these connections reveals why proxy-based architectures are fundamentally more resilient than direct-connection architectures.',
    keyFindings: [
      'In psychology, "cognitive offloading" explains why proxy-based systems feel easier — they externalize complexity',
      'In economics, the "platform dependency trap" shows why having multiple proxy paths is critical for resilience',
      'In biology, neural redundancy (multiple pathways for the same signal) is nature\'s error handling',
      'In military strategy, "defense in depth" provides layered resilience that no single barrier can achieve',
    ],
    recommendations: [
      'Apply the "defense in depth" principle to deployment: multiple independent deployment paths',
      'Implement "cognitive offloading" in error messages: the system handles diagnosis, the user handles decisions',
      'Build "neural redundancy" into the architecture: every critical function should have at least two independent paths',
      'Use "platform dependency" analysis to identify and mitigate single points of failure',
    ],
    blindSpots: [
      'Redundancy adds complexity — more moving parts means more potential failures',
      'Cross-domain analogies can be misleading if pushed too far (biology is not architecture)',
      'The cost of "defense in depth" can be prohibitive for small projects',
    ],
  },
];

// ── Extraordinary Web Design Principles (from Extraordinary-web-design-prompt.md) ──
export interface DesignPrinciple {
  id: string;
  name: string;
  icon: string;
  description: string;
  secret: string;
  example: string;
  industry: string;
}

export const EXTRAORDINARY_DESIGN_PRINCIPLES: DesignPrinciple[] = [
  { id: 'tech-saas', name: 'Tech/SaaS', icon: '💻', description: 'Make the hard thing feel effortless. Show intelligence. Build confidence.', secret: 'Thoughtful empty states. Anticipatory guidance. Clarity over features.', example: 'Instead of "Dashboard with 20 widgets," show "What I need right now + one thing I did not know I needed."', industry: 'Technology' },
  { id: 'e-commerce', name: 'E-Commerce', icon: '🛒', description: 'Reduce friction before asking for money. Show the transformation, not the product.', secret: 'Quick visual scanning. Clear value stacking. Confidence-building social proof.', example: 'Instead of "Product + 17 details," show "Who this is for + What changes + Why it is worth it."', industry: 'Retail' },
  { id: 'agency-creative', name: 'Agency/Creative', icon: '🎨', description: 'Show transformation, not pretty pictures. Make work feel alive.', secret: 'Before/after narrative. Client testimonial at the moment of change. Motion that tells the story.', example: 'Instead of "Project image gallery," show "Client problem → Our approach → Transformation + impact."', industry: 'Creative' },
  { id: 'health-wellness', name: 'Health/Wellness', icon: '🌿', description: 'Meet people where they are emotionally. Build safety first.', secret: 'Warm tone before credentials. Guided narrative. Community feeling.', example: 'Instead of "Credentials dump," show "Your story → Why you are struggling → How we help → Community."', industry: 'Healthcare' },
  { id: 'b2b-enterprise', name: 'B2B/Enterprise', icon: '🏢', description: 'Make complex feel human. Show impact in business terms.', secret: 'Clear ROI framework. Customer story that feels real. Simplified navigation.', example: 'Instead of "49 features," show "What this solves + Who it is for + Proof it works."', industry: 'Business' },
  { id: 'education', name: 'Education/Learning', icon: '📚', description: 'Make learning feel achievable. Build progress visibility.', secret: 'Clear outcome focus. Scaffolded learning path. Early wins.', example: 'Instead of "Curriculum dump," show "What you will build + Your journey + Real outcomes."', industry: 'Education' },
  { id: 'creator', name: 'Creator/Solopreneur', icon: '🌟', description: 'Let personality shine. Make people feel connection, not just transaction.', secret: 'Authentic voice. Behind-the-scenes access. Direct connection.', example: 'Instead of "Generic portfolio," show "My story + Why I do this + Clients I love + Let us work together."', industry: 'Creator Economy' },
];

export const DESIGN_ARCHITECTURE_LAYERS = [
  { id: 'psychology', name: 'Psychology Foundation', icon: '🧠', description: 'Why people engage. What makes them feel safe/excited/trusted. Where cognitive load breaks trust.' },
  { id: 'structure', name: 'Structure Skeleton', icon: '🏗️', description: 'How information flows. Where users focus first. What guides their journey.' },
  { id: 'visual', name: 'Visual Language', icon: '🎨', description: 'Typography that speaks. Color that commands. Motion that surprises.' },
  { id: 'spatial', name: 'Spatial Composition', icon: '📐', description: 'How elements relate. What breaks the grid. Where white space breathes.' },
  { id: 'interaction', name: 'Interaction Choreography', icon: '🎬', description: 'When things move. What responds to touch. How feedback guides action.' },
  { id: 'narrative', name: 'Experience Narrative', icon: '📖', description: 'The story unfolding. The emotional arc. The transformation achieved.' },
  { id: 'innovation', name: 'Innovation Signature', icon: '🚀', description: 'What has never been done this way. The "secret sauce." The industry differentiation.' },
];

// ── Additional Skills from Comparative Matrix ──
export const ADDITIONAL_SKILLS: Skill[] = [
  { id: 'web-design-guidelines', name: 'web-design-guidelines', category: 'Data & Web', rank: '#6', installs: '359.8K', purpose: 'Accessibility-first UX rules, performance budgets, and design validation', useCase: 'Validating designs against accessibility standards and performance budgets', misconception: "It's just a checklist — actually it is a rule engine that enforces standards", overlooked: 'The performance budget enforcement — most use it for accessibility only', compatibleWith: ['Any web framework', 'CSS systems'], bestCombinedWith: ['frontend-design', 'audit-analyzer'] },
  { id: 'agent-browser', name: 'agent-browser', category: 'Development', rank: '#9', installs: '334.7K', purpose: 'Fast Rust-based headless browser automation for AI agents', useCase: 'Automating browser tasks for AI agents; visual verification and testing', misconception: "It's just a web scraper — actually it provides full browser orchestration", overlooked: 'The session continuity feature — most browser tools lose state between sessions', compatibleWith: ['Playwright', 'Puppeteer', 'web-reader'], bestCombinedWith: ['web-reader', 'audit-analyzer'] },
  { id: 'stitch-loop', name: 'stitch-loop', category: 'Design & UI', rank: '#15', installs: '42.2K', purpose: 'Iterative site builder with visual feedback loops', useCase: 'Rapid prototyping with AI-assisted iteration cycles', misconception: "Just another site builder — actually it creates feedback loops between design intent and code output", overlooked: 'The iteration loop that learns from each design decision', compatibleWith: ['frontend-design', 'gsap-animations'], bestCombinedWith: ['frontend-design', 'ui-ux-pro-max'] },
];

// Merge additional skills into SKILLS array
export const ALL_SKILLS: Skill[] = [...SKILLS, ...ADDITIONAL_SKILLS];

// ── Agentic Tools Research (from ai_agentic_tools_research.md) ──
export interface AgenticTool {
  id: string;
  name: string;
  type: string;
  stars?: string;
  description: string;
  pricing: string;
  category: 'IDE' | 'CLI' | 'Both';
}

export const AGENTIC_TOOLS: AgenticTool[] = [
  { id: 'cursor', name: 'Cursor', type: 'IDE', stars: '~50k+', description: 'AI-first code editor built on VS Code fork with multi-file edits, codebase indexing, agent mode (Cascade), and tab completion', pricing: 'Free / $20/mo', category: 'IDE' },
  { id: 'github-copilot', name: 'GitHub Copilot', type: 'Both', stars: '~70k+', description: 'Real-time AI pair programmer with completions, chat, CLI, and agent mode across VS Code, JetBrains, Neovim', pricing: 'Free tier / $10/mo', category: 'Both' },
  { id: 'claude-code', name: 'Claude Code', type: 'CLI', description: 'Anthropic\'s terminal-based agentic coding tool with deep repo understanding, multi-file editing, and tool calling', pricing: '$20/mo', category: 'CLI' },
  { id: 'aider', name: 'Aider', type: 'CLI', stars: '~30k+', description: 'AI pair programming in terminal, Git-native workflow, multi-file awareness, 75+ LLM providers', pricing: 'Free (BYOK)', category: 'CLI' },
  { id: 'opencode', name: 'OpenCode', type: 'CLI', stars: '~30k+', description: 'Open-source terminal AI coding agent with multi-provider support, plugins/skills system, LSP integration', pricing: 'Free (BYOK)', category: 'CLI' },
  { id: 'codex-cli', name: 'Codex CLI', type: 'CLI', stars: '~25k+', description: 'OpenAI\'s open-source terminal agent with suggest/edit/run modes, sandboxed execution', pricing: 'Free (BYOK)', category: 'CLI' },
  { id: 'cline', name: 'Cline', type: 'IDE', stars: '~25k+', description: 'Autonomous AI coding agent as VS Code extension, can create/edit files, run terminal commands, use browser', pricing: 'Free (BYOK)', category: 'IDE' },
  { id: 'continue-dev', name: 'Continue', type: 'IDE', stars: '~27k+', description: 'Open-source AI code assistant for VS Code and JetBrains, tab completion, chat, inline edits', pricing: 'Free (BYOK)', category: 'IDE' },
  { id: 'windsurf', name: 'Windsurf', type: 'IDE', description: 'AI-powered code editor by Codeium with multi-line autocomplete, jump prediction, Cascade agent mode', pricing: 'Free / $15/mo', category: 'IDE' },
  { id: 'devin', name: 'Devin', type: 'Both', description: 'Full autonomous AI software engineer — runs in cloud sandbox, writes/debugs/deploys code', pricing: 'Free / $500/mo', category: 'Both' },
];

export interface ProxyStack {
  id: string;
  name: string;
  language: string;
  providers: string;
  keyFeature: string;
  pricing: string;
}

export const PROXY_STACKS_RESEARCH: ProxyStack[] = [
  { id: 'litellm', name: 'LiteLLM', language: 'Python', providers: '100+ LLM providers', keyFeature: 'OpenAI-compatible API, fallbacks, budget controls, load balancing', pricing: 'Free (OSS)' },
  { id: 'openrouter', name: 'OpenRouter', language: 'Cloud API', providers: 'All major models', keyFeature: 'Single unified API, free models, automatic routing', pricing: 'Free + paid' },
  { id: 'new-api', name: 'One-API / New-API', language: 'Go', providers: '20+ providers', keyFeature: 'Unified AI model hub, cross-converting to OpenAI-compatible APIs', pricing: 'Free (OSS)' },
  { id: 'freellmapi', name: 'FreeLLMAPI', language: 'Python', providers: '16 free-tier (~1.7B tokens/mo)', keyFeature: 'Stacks free tiers behind one /v1 endpoint, automatic failover', pricing: 'Free (OSS)' },
  { id: 'g4f', name: 'GPT4Free (g4f)', language: 'Python', providers: '50+ free AI providers', keyFeature: 'Aggregates multiple providers for free LLM access', pricing: 'Free (OSS)' },
  { id: 'portkey', name: 'Portkey AI', language: 'TypeScript', providers: '250+ providers', keyFeature: 'LLM gateway with observability, automatic retries, caching', pricing: 'Free + paid' },
];

// ── Prompt OS Data (from promptcos.vercel.app) ──
export interface PromptZone {
  id: string;
  name: string;
  icon: string;
  description: string;
  tasks: string[];
}

export const PROMPT_OS_ZONES: PromptZone[] = [
  { id: 'activate', name: 'Activate', icon: '⚡', description: 'Quick-start task prompts for immediate productivity', tasks: ['YouTube growth strategy', 'Coding production-ready code', 'Business COO analysis', 'Research assistant', 'UI/UX design review', 'AI image prompting', 'Direct-response copywriting', 'Email marketing sequences'] },
  { id: 'build', name: 'Build', icon: '🏗️', description: 'Construct prompts with modifiers, templates, and brands', tasks: ['Modifier composition', 'Template assembly', 'Brand voice injection', 'Animal perspective selection'] },
  { id: 'validate', name: 'Validate', icon: '✅', description: 'Test and verify prompt quality before deployment', tasks: ['Quality scoring', 'Edge case testing', 'Output verification'] },
  { id: 'playbook', name: 'Playbook', icon: '📋', description: 'Reusable workflows and SOPs for common tasks', tasks: ['Workflow library', 'SOP templates', 'Playbook sharing'] },
  { id: 'monetize', name: 'Monetize', icon: '💰', description: 'Turn prompt engineering into revenue', tasks: ['Prompt marketplace listing', 'Client delivery packages', 'Subscription prompt feeds'] },
  { id: 'system', name: 'System', icon: '🔄', description: 'Configure and manage the prompt engineering OS', tasks: ['Model selection', 'API key management', 'Usage analytics'] },
];

export const PROMPT_OS_STATS = {
  zones: 6,
  modifiers: 47,
  templates: 20,
  brands: 6,
  animals: 7,
  composerTools: 8,
  workflows: 22,
  skills: 66,
  version: 'v3',
};

// ── Proxy Defense Stack (from Enhanced_Proxy_Defense_Stack_v3.2.md) ──
export interface DefenseLayer {
  id: string;
  name: string;
  entropyBits: string;
  keySources: string;
  collisionResistance: string;
}

export const JA4JA_ENTROPY_LAYERS: DefenseLayer[] = [
  { id: 'ja4-tls', name: 'JA4 TLS', entropyBits: '80-130', keySources: 'Sorted ciphers/extensions, ALPN, QUIC params', collisionResistance: 'High' },
  { id: 'ja4h-http', name: 'JA4H HTTP/Cookie', entropyBits: '40-80', keySources: 'Header order, values, cookie jars', collisionResistance: 'Very High' },
  { id: 'ja4s-server', name: 'JA4S Server', entropyBits: '20-45', keySources: 'Server Hello, chosen cipher', collisionResistance: 'Medium-High' },
  { id: 'ja4x-cert', name: 'JA4X Cert', entropyBits: '35-70', keySources: 'Cert chain hashes, extensions', collisionResistance: 'High' },
  { id: 'quic-cid', name: 'QUIC/CID', entropyBits: '50-100', keySources: 'Connection ID, packet numbering', collisionResistance: 'Very High' },
];

export const PROXY_DEFENSE_COMPONENTS = [
  { id: 'ja4ja-rust', name: 'JA4JA Rust Core', icon: '🦀', description: 'High-performance JA4JA fingerprinting in Rust with SHA-256 hashing and collision resistance testing' },
  { id: 'quic-transport', name: 'QUIC + WebTransport', icon: '🌐', description: 'Modern transport layer with QUIC protocol and WebTransport for resilient connections' },
  { id: 'bbrv3', name: 'BBRv3 Congestion Control', icon: '📈', description: 'Google BBRv3 congestion control algorithm for optimal throughput' },
  { id: 'raft-consensus', name: 'Raft Consensus', icon: '🔄', description: 'Distributed consensus protocol for fleet coordination and leader election' },
  { id: 'fleet-monitor', name: 'Fleet Monitoring', icon: '📊', description: 'Real-time JA4 fitness dashboard with structured JSON telemetry logging' },
  { id: 'geo-adaptive', name: 'Geo-Adaptive Fleet', icon: '🌍', description: 'Mixed generic + real credentials with cross-agent spawning and proxy handoff' },
];
