import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Skills Showcase — Interactive AI Prompt Engineering Ecosystem Visualization",
  description: "Comprehensive interactive visualization of 76+ AI skills, 8 user types, 4 agent tiers, 9 MCP stacks, and 6 proxy types. Built with Next.js 16, Tailwind CSS, and Framer Motion. Three design approaches: Soft Premium, Minimalist, and Neo-Brutalist.",
  keywords: [
    "AI skills", "prompt engineering", "AI tools visualization", "MCP stacks",
    "agent tiers", "AI user types", "skills showcase", "AI ecosystem",
    "Next.js showcase", "Framer Motion", "Tailwind CSS", "shadcn/ui",
    "AI prompt tools", "AI coding tools", "interactive visualization",
    "AI skills matrix", "prompt engineering tools", "AI agent architecture",
  ],
  authors: [{ name: "Mark Tantongco", url: "https://github.com/marktantongco" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "AI Skills Showcase — 76+ Skills, 8 User Types, 4 Tiers, 9 MCP Stacks",
    description: "Interactive visualization of the AI prompt engineering ecosystem. Explore skills, user types, agent tiers, MCP stacks, and proxy analysis through 15 pages with 3 design approaches.",
    url: "https://marktantongco.github.io/ai-skills-showcase",
    siteName: "AI Skills Showcase",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Skills Showcase — Interactive AI Ecosystem Visualization",
    description: "76+ skills, 8 user types, 4 agent tiers, 9 MCP stacks. Three design approaches: Soft Premium, Minimalist, Neo-Brutalist.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
