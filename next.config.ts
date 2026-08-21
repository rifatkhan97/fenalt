import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      // Max upload: 20MB raw → ~26.7MB Base64. Add headroom for multipart overhead.
      bodySizeLimit: "27mb",
    },
  },
};

export default withSentryConfig(nextConfig, {
  org: "fenalt",
  project: "nextjs",
  silent: !process.env.CI,
});
