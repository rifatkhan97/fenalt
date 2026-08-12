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
    { path: "/learn", changeFrequency: "weekly", priority: 0.8 },
    { path: "/mission", changeFrequency: "monthly", priority: 0.7 },
    { path: "/intake", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/sitemap", changeFrequency: "monthly", priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },

    // Educational Library - Phase 1 (20 Articles)
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

    // Educational Library - Phase 2 Batch 1 (10 Articles)
    { path: "/learn/tech-pack-to-bulk-production", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-to-include-in-a-tech-pack", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/points-of-measure-garment", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-manufacture-a-streetwear-collection", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/common-streetwear-manufacturing-mistakes", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-many-units-for-new-fashion-brand", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/low-moq-vs-bulk-manufacturing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/reduce-risk-when-launching-clothing-collection", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-scale-clothing-production", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/apparel-quality-control-explained", changeFrequency: "monthly", priority: 0.7 },

    // Educational Library - Phase 2 Batch 2 (12 Articles)
    { path: "/learn/cut-and-sew-manufacturing-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-does-an-apparel-manufacturer-do", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/apparel-production-process-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-makes-a-good-apparel-manufacturing-partner", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/types-of-apparel-samples", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-many-samples-before-production", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-prepare-for-first-clothing-sample", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/sample-approval-checklist", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/fit-samples-vs-pre-production-samples", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/why-samples-need-multiple-revisions", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-give-sample-feedback", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/after-sample-approval-what-happens", changeFrequency: "monthly", priority: 0.7 },

    // Educational Library - Phase 2 Batch 3 (15 Articles)
    { path: "/learn/tech-pack-vs-sewing-pattern", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/tech-pack-measurements", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/bill-of-materials-apparel", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/apparel-size-grading-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-is-pattern-making", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/cad-pattern-making-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-choose-fabric-for-clothing-brand", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/cotton-fabric-types-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/fabric-weight-and-garment-construction", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/combed-cotton-vs-regular-cotton", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/organic-cotton-in-apparel-manufacturing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/recycled-polyester-in-clothing-production", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-evaluate-fabric-quality", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/fabric-sourcing-guide-for-fashion-brands", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/fabric-choice-and-manufacturing-cost", changeFrequency: "monthly", priority: 0.7 },

    // Educational Library - Phase 2 Batch 4 (11 Articles)
    { path: "/learn/garment-customization-options-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/custom-hangtags-neck-labels-apparel", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/screen-printing-vs-dtg-clothing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/custom-embroidery-for-clothing-brands", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/embroidery-vs-screen-printing-apparel", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/garment-wash-treatments-explained", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-manufacture-t-shirts", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-manufacture-hoodies", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/activewear-manufacturing-guide", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/outerwear-jacket-manufacturing-guide", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/streetwear-manufacturing-guide", changeFrequency: "monthly", priority: 0.7 },

    // Educational Library - Phase 2 Batch 5 (11 Articles)
    { path: "/learn/stitch-type-and-garment-quality", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-evaluate-stitch-quality", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/garment-measurement-checking-in-production", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/garment-shrinkage-in-apparel-manufacturing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-to-check-during-clothing-production", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/pre-production-quality-checks", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/in-line-quality-control-garment-manufacturing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/final-inspection-finished-garments", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/common-clothing-quality-problems", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/garment-quality-checklist-for-brands", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-reduce-defects-in-apparel-production", changeFrequency: "monthly", priority: 0.7 },

    // Educational Library - Phase 2 Batch 6 (12 Articles)
    { path: "/learn/how-to-plan-small-batch-apparel-launch", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-inspect-garment-measurements", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-compare-clothing-manufacturers", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-should-be-in-an-apparel-manufacturing-quote", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/direct-manufacturer-vs-sourcing-agent", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-to-communicate-with-overseas-suppliers", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/warning-signs-of-poor-apparel-manufacturer", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/build-long-term-relationship-clothing-manufacturer", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-apparel-manufacturing-in-bangladesh-works", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-to-know-before-sourcing-from-bangladesh", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/how-international-clothing-production-is-coordinated", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/what-happens-after-clothing-manufactured-overseas", changeFrequency: "monthly", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
