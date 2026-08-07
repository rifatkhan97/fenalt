import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: "fenalt",
  project: "nextjs",
  silent: !process.env.CI,
});
