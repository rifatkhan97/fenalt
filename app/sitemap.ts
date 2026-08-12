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
    
    // Cluster A: Startups & Emerging Labels
    { path: "/clothing-manufacturer-for-startups", changeFrequency: "weekly", priority: 0.9 },
    { path: "/apparel-sampling-services-startups", changeFrequency: "weekly", priority: 0.8 },
    { path: "/clothing-production-for-instagram-brands", changeFrequency: "weekly", priority: 0.8 },
    { path: "/manufacturing-partner-new-designers", changeFrequency: "weekly", priority: 0.8 },
    { path: "/custom-clothing-manufacturer-small-businesses", changeFrequency: "weekly", priority: 0.9 },

    // Cluster B: Bangladesh Direct Sourcing & Ground Management
    { path: "/garment-sourcing-agent-bangladesh", changeFrequency: "weekly", priority: 0.9 },
    { path: "/fabric-sourcing-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/ethical-clothing-manufacturing-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/factory-quality-control-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/buying-sourcing-partner-bangladesh", changeFrequency: "weekly", priority: 0.9 },

    // Cluster C: Product-Specific Garment Manufacturing
    { path: "/puff-print-hoodie-manufacturer", changeFrequency: "weekly", priority: 0.8 },
    { path: "/heavyweight-cotton-t-shirt-manufacturer", changeFrequency: "weekly", priority: 0.8 },
    { path: "/denim-jeans-manufacturer-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/activewear-manufacturing-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/outerwear-manufacturing-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/knitwear-manufacturing-bangladesh", changeFrequency: "weekly", priority: 0.8 },

    // Cluster D: Production Services & Supply Chain Management
    { path: "/apparel-sampling-services", changeFrequency: "weekly", priority: 0.8 },
    { path: "/tech-pack-development-apparel", changeFrequency: "weekly", priority: 0.8 },
    { path: "/apparel-production-management", changeFrequency: "weekly", priority: 0.8 },
    { path: "/garment-quality-control-services", changeFrequency: "weekly", priority: 0.8 },
    { path: "/overseas-production-management-apparel", changeFrequency: "weekly", priority: 0.8 },

    // Cluster E: Sustainability & Circular Textile Solutions
    { path: "/sustainable-apparel-manufacturing-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/organic-cotton-clothing-manufacturing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/circular-fashion-manufacturing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/sustainable-textile-sourcing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/recycled-polyester-garment-sourcing", changeFrequency: "weekly", priority: 0.8 },

    // Cluster F: International Trade & Sourcing Comparisons
    { path: "/bangladesh-vs-china-garment-manufacturing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/bangladesh-vs-vietnam-garment-manufacturing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/sourcing-garments-outside-china", changeFrequency: "monthly", priority: 0.7 },
    { path: "/relocating-apparel-production-south-asia", changeFrequency: "monthly", priority: 0.7 },
    { path: "/why-manufacture-apparel-in-bangladesh", changeFrequency: "monthly", priority: 0.8 },

    // Cluster G: Trade, Tariff & Import Guides
    { path: "/bangladesh-garment-rules-of-origin", changeFrequency: "monthly", priority: 0.7 },
    { path: "/uk-apparel-import-considerations", changeFrequency: "monthly", priority: 0.7 },
    { path: "/usa-apparel-import-considerations", changeFrequency: "monthly", priority: 0.7 },
    { path: "/australia-canada-apparel-import-guide", changeFrequency: "monthly", priority: 0.7 },
    { path: "/apparel-manufacturing-cost-considerations", changeFrequency: "monthly", priority: 0.8 },

    // Resources Hub & Core Infrastructure
    { path: "/resources", changeFrequency: "weekly", priority: 0.8 },
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
