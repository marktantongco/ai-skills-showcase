import type { NextConfig } from "next";

const isGitHubPages = process.env.NEXT_BASE_PATH === "/ai-skills-showcase";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  basePath: isGitHubPages ? "/ai-skills-showcase" : undefined,
  assetPrefix: isGitHubPages ? "/ai-skills-showcase/" : undefined,
  images: {
    unoptimized: isGitHubPages ? true : undefined,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
