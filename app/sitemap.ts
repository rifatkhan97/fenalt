import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fenalt.com";

  const routes: Array<{
    path: string;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
  }> = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/capabilities", changeFrequency: "weekly", priority: 0.9 },
    { path: "/operations", changeFrequency: "weekly", priority: 0.8 },
    { path: "/low-moq-apparel-manufacturing", changeFrequency: "weekly", priority: 0.9 },
    { path: "/streetwear-manufacturing", changeFrequency: "weekly", priority: 0.9 },
    { path: "/clothing-manufacturer-bangladesh", changeFrequency: "weekly", priority: 0.9 },
    { path: "/hoodie-manufacturing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/de/bekleidungshersteller", changeFrequency: "weekly", priority: 0.9 },
    { path: "/de/streetwear-hersteller", changeFrequency: "weekly", priority: 0.9 },
    { path: "/de/low-moq-bekleidungshersteller", changeFrequency: "weekly", priority: 0.9 },
    { path: "/boutique-clothing-manufacturer", changeFrequency: "weekly", priority: 0.9 },
    { path: "/small-batch-clothing-manufacturer", changeFrequency: "weekly", priority: 0.9 },
    { path: "/low-moq-clothing-manufacturer-for-boutiques", changeFrequency: "weekly", priority: 0.9 },
    { path: "/private-label-clothing-manufacturer-small-brands", changeFrequency: "weekly", priority: 0.9 },
    { path: "/clothing-manufacturer-independent-brands", changeFrequency: "weekly", priority: 0.9 },
    { path: "/mission", changeFrequency: "monthly", priority: 0.7 },
    { path: "/intake", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/sitemap", changeFrequency: "monthly", priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

