import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      // Vercel hard cap is 4.5MB for all plans — keep Next.js limit below that
      // so Next.js rejects oversized requests with a clean error before Vercel does.
      bodySizeLimit: "4mb",
    },
  },
};

export default withSentryConfig(nextConfig, {
  org: "fenalt",
  project: "nextjs",
  silent: !process.env.CI,
});
