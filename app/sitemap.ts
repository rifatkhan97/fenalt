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

    // Expansion Phase 2 Routes (10 Approved Pages)
    { path: "/custom-streetwear-manufacturer-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/sweatshirt-manufacturer-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/cut-and-sew-clothing-manufacturer-bangladesh", changeFrequency: "weekly", priority: 0.8 },
    { path: "/private-label-streetwear-manufacturer", changeFrequency: "weekly", priority: 0.8 },
    { path: "/sustainable-streetwear-manufacturing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/apparel-pattern-making-services", changeFrequency: "weekly", priority: 0.8 },
    { path: "/clothing-manufacturer-luxury-brands", changeFrequency: "weekly", priority: 0.8 },
    { path: "/custom-embroidery-apparel-manufacturing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/eu-apparel-import-considerations", changeFrequency: "monthly", priority: 0.7 },
    { path: "/garment-packaging-custom-labeling-services", changeFrequency: "weekly", priority: 0.8 },

    // Resources Hub & Core Infrastructure
    { path: "/resources", changeFrequency: "weekly", priority: 0.8 },
    { path: "/mission", changeFrequency: "monthly", priority: 0.7 },
    { path: "/intake", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/sitemap", changeFrequency: "monthly", priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },

    // Educational Library — Phase 1 (20 Articles)
    // Cluster A: Manufacturing Fundamentals
    { path: "/learn/how-clothing-manufacturing-works", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/clothing-manufacturer-vs-sourcing-agent", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-a-clothing-manufacturer-needs-from-a-brand", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/clothing-manufacturing-timeline", changeFrequency: "monthly", priority: 0.7 },
    // Cluster B: Sampling
    { path: "/learn/what-is-a-clothing-sample", changeFrequency: "monthly", priority: 0.7 },
    // Cluster C: Tech Packs
    { path: "/learn/what-is-a-tech-pack", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/tech-pack-mistakes", changeFrequency: "monthly", priority: 0.7 },
    // Cluster D: Fabrics
    { path: "/learn/what-does-gsm-mean-in-clothing", changeFrequency: "monthly", priority: 0.7 },
    // Cluster F: Streetwear
    { path: "/learn/what-makes-high-quality-streetwear", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/heavyweight-streetwear-fabrics-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/puff-print-vs-screen-print-streetwear", changeFrequency: "monthly", priority: 0.7 },
    // Cluster G: Low MOQ & Startups
    { path: "/learn/what-does-low-moq-mean", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/startups-prepare-for-first-production-run", changeFrequency: "monthly", priority: 0.7 },
    // Cluster H: Quality Control
    { path: "/learn/what-is-aql-in-apparel-quality-control", changeFrequency: "monthly", priority: 0.7 },
    // Cluster I: Sourcing & Supplier Selection
    { path: "/learn/how-to-choose-a-clothing-manufacturer", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-find-a-reliable-clothing-manufacturer", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/questions-to-ask-an-apparel-manufacturer", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/clothing-manufacturer-due-diligence-checklist", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-evaluate-an-overseas-clothing-manufacturer", changeFrequency: "monthly", priority: 0.7 },
    // Cluster J: Bangladesh & International Sourcing
    { path: "/learn/overseas-apparel-production-checklist", changeFrequency: "monthly", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
