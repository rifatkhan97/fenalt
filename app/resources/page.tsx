import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Scale, FileText, Leaf, Factory } from "lucide-react";
import EducationalLibrarySection, { ArticleLink } from "./EducationalLibrarySection";

export const metadata: Metadata = {
  title: "Manufacturing & Sourcing Resources Hub | Fenalt",
  description:
    "Comprehensive directory of garment manufacturing guides, trade & tariff resources, Bangladesh sourcing insights, and eco-textile guides for apparel brand founders.",
  alternates: {
    canonical: "https://www.fenalt.com/resources",
  },
  openGraph: {
    title: "Manufacturing & Sourcing Resources Hub | Fenalt",
    description:
      "Comprehensive directory of garment manufacturing guides, trade & tariff resources, Bangladesh sourcing insights, and eco-textile guides for apparel brand founders.",
    url: "https://www.fenalt.com/resources",
  },
};

const ALL_EDUCATIONAL_ARTICLES: ArticleLink[] = [
  // Fundamentals & Process (19)
  { href: "/learn/how-clothing-manufacturing-works", title: "How Clothing Manufacturing Works: A Guide for Brands", category: "Fundamentals", catId: "fundamentals", desc: "Complete breakdown of the garment manufacturing lifecycle from tech packs to bulk shipping." },
  { href: "/learn/cut-and-sew-manufacturing-explained", title: "Cut-and-Sew Manufacturing Explained for Fashion Brands", category: "Fundamentals", catId: "fundamentals", desc: "Understand custom pattern cutting, grading, fabric laying, and line sewing." },
  { href: "/learn/what-does-an-apparel-manufacturer-do", title: "What Does an Apparel Manufacturer Actually Do?", category: "Fundamentals", catId: "fundamentals", desc: "Detailed breakdown of factory operations, merchandisers, pattern makers, and line managers." },
  { href: "/learn/apparel-production-process-explained", title: "The Apparel Production Process Explained Step by Step", category: "Fundamentals", catId: "fundamentals", desc: "Step-by-step walkthrough of garment assembly from raw roll spreading to final packaging." },
  { href: "/learn/clothing-manufacturing-timeline", title: "How Long Does Clothing Manufacturing Usually Take?", category: "Fundamentals", catId: "fundamentals", desc: "Timeline expectations for tech pack dev, sampling, fabric mill dyeing, and bulk sewing." },
  { href: "/learn/what-does-gsm-mean-in-clothing", title: "What Does GSM Mean in Clothing?", category: "Fundamentals", catId: "fundamentals", desc: "Grams per Square Meter (GSM) fabric weight guide for t-shirts, hoodies, and fleece." },
  { href: "/learn/what-does-low-moq-mean", title: "What Does Low MOQ Mean in Clothing Manufacturing?", category: "Fundamentals", catId: "fundamentals", desc: "Minimum Order Quantities (MOQ) explained for emerging clothing labels." },
  { href: "/learn/how-many-units-for-new-fashion-brand", title: "How Many Units Should a New Fashion Brand Produce?", category: "Fundamentals", catId: "fundamentals", desc: "Inventory volume strategies for startup clothing drops and pre-order launches." },
  { href: "/learn/low-moq-vs-bulk-manufacturing", title: "Low MOQ vs Bulk Manufacturing: What Changes?", category: "Fundamentals", catId: "fundamentals", desc: "Cost, lead time, and customization differences between small batch and mass production." },
  { href: "/learn/startups-prepare-for-first-production-run", title: "How Startups Can Prepare for Their First Production Run", category: "Fundamentals", catId: "fundamentals", desc: "Essential pre-flight checklist for fashion founders entering factory manufacturing." },
  { href: "/learn/reduce-risk-when-launching-clothing-collection", title: "How to Reduce Risk When Launching a Clothing Collection", category: "Fundamentals", catId: "fundamentals", desc: "Financial, inventory, and supply chain risk mitigation for new fashion releases." },
  { href: "/learn/how-to-scale-clothing-production", title: "How to Scale Clothing Production After a Successful Run", category: "Fundamentals", catId: "fundamentals", desc: "Scaling from initial 100-unit drops to 5,000+ bulk factory orders." },
  { href: "/learn/how-to-manufacture-a-streetwear-collection", title: "How to Manufacture a Streetwear Collection", category: "Fundamentals", catId: "fundamentals", desc: "Production strategies for boxy tees, heavy fleece hoodies, puff prints, and embroidery." },
  { href: "/learn/common-streetwear-manufacturing-mistakes", title: "Common Streetwear Manufacturing Mistakes to Avoid", category: "Fundamentals", catId: "fundamentals", desc: "Avoiding low GSM fabrics, bad collar ribbing, misaligned prints, and size errors." },
  { href: "/learn/streetwear-manufacturing-guide", title: "Streetwear Manufacturing Guide: Boxy Fits, Heavy Knits & Prints", category: "Fundamentals", catId: "fundamentals", desc: "Technical construction guide for heavy knit streetwear collections." },
  { href: "/learn/how-to-manufacture-t-shirts", title: "How to Manufacture T-Shirts: Complete Production Guide", category: "Fundamentals", catId: "fundamentals", desc: "Complete guide to yarn selection, neck ribbing, coverstitching, and printing." },
  { href: "/learn/how-to-manufacture-hoodies", title: "How to Manufacture Hoodies: Complete Technical Guide", category: "Fundamentals", catId: "fundamentals", desc: "Heavyweight fleece construction, double-layer hoods, kangaroo pockets, and ribbing." },
  { href: "/learn/activewear-manufacturing-guide", title: "Activewear Manufacturing Guide for Fitness Brands", category: "Fundamentals", catId: "fundamentals", desc: "Flatlock stitching, nylon-spandex blends, four-way stretch, and moisture wicking." },
  { href: "/learn/outerwear-jacket-manufacturing-guide", title: "Outerwear & Jacket Manufacturing Guide for Fashion Brands", category: "Fundamentals", catId: "fundamentals", desc: "Puffer jackets, windbreakers, seam taping, zippers, and insulation construction." },

  // Tech Packs & Patterns (12)
  { href: "/learn/what-is-a-tech-pack", title: "What Is a Tech Pack in Apparel Manufacturing?", category: "Tech Packs", catId: "tech-packs", desc: "Anatomy of a technical specification package for factory production." },
  { href: "/learn/tech-pack-mistakes", title: "Common Tech Pack Mistakes That Delay Production", category: "Tech Packs", catId: "tech-packs", desc: "Missing seams, un-graded specs, vague BOMs, and un-vectorized artwork errors." },
  { href: "/learn/tech-pack-to-bulk-production", title: "What Happens Between a Tech Pack and Bulk Production?", category: "Tech Packs", catId: "tech-packs", desc: "The transition from digital technical specs to physical Golden Pre-Production samples." },
  { href: "/learn/what-to-include-in-a-tech-pack", title: "What Should Be Included in a Clothing Tech Pack?", category: "Tech Packs", catId: "tech-packs", desc: "Flat sketches, POM spec tables, colorways, BOMs, and packaging instructions." },
  { href: "/learn/tech-pack-vs-sewing-pattern", title: "Tech Pack vs Sewing Pattern: What's the Difference?", category: "Tech Packs", catId: "tech-packs", desc: "Understanding the distinction between technical spec manuals and paper/CAD sewing templates." },
  { href: "/learn/tech-pack-measurements", title: "How to Create Measurements for a Clothing Tech Pack", category: "Tech Packs", catId: "tech-packs", desc: "Measuring flat prototype garments and building baseline measurement spec tables." },
  { href: "/learn/points-of-measure-garment", title: "What Are Points of Measure (POM) in Garment Manufacturing?", category: "Tech Packs", catId: "tech-packs", desc: "Standard POM codes and measurement anchor points for t-shirts, hoodies, and pants." },
  { href: "/learn/bill-of-materials-apparel", title: "What Is a Bill of Materials (BOM) in Apparel Production?", category: "Tech Packs", catId: "tech-packs", desc: "Listing raw fabrics, threads, zippers, woven labels, and polybags in your tech pack." },
  { href: "/learn/apparel-size-grading-explained", title: "How Apparel Size Grading Works Across Sizes", category: "Tech Packs", catId: "tech-packs", desc: "Grading incremental measurement jumps from XS to XXL across pattern sets." },
  { href: "/learn/what-is-pattern-making", title: "What Is Pattern Making in Clothing Production?", category: "Tech Packs", catId: "tech-packs", desc: "Converting 2D designer sketches into 3D physical fabric panel templates." },
  { href: "/learn/cad-pattern-making-explained", title: "CAD Pattern Making for Fashion Brands Explained", category: "Tech Packs", catId: "tech-packs", desc: "Digital CAD pattern drafting, marker efficiency, and automated cutting tables." },
  { href: "/learn/what-a-clothing-manufacturer-needs-from-a-brand", title: "What a Clothing Manufacturer Needs From a Brand", category: "Tech Packs", catId: "tech-packs", desc: "Essential deliverables required before a factory can issue an accurate quote." },

  // Sampling & Prototyping (9)
  { href: "/learn/what-is-a-clothing-sample", title: "What Is a Clothing Sample and Why Is It Important?", category: "Sampling", catId: "sampling", desc: "Understanding prototype samples and why they are vital prior to bulk production." },
  { href: "/learn/types-of-apparel-samples", title: "The Different Types of Apparel Samples Explained", category: "Sampling", catId: "sampling", desc: "Proto samples, Fit samples, Salesman samples, Pre-Production (PP) samples, and TOP samples." },
  { href: "/learn/how-many-samples-before-production", title: "How Many Samples Should a Fashion Brand Expect Before Production?", category: "Sampling", catId: "sampling", desc: "Sampling iteration rounds, fit approvals, and golden sample sign-offs." },
  { href: "/learn/how-to-prepare-for-first-clothing-sample", title: "How to Prepare for Your First Clothing Sample", category: "Sampling", catId: "sampling", desc: "Organizing tech packs, reference garments, and fabric swatches before requesting a sample." },
  { href: "/learn/sample-approval-checklist", title: "Sample Approval Checklist for Fashion Brands", category: "Sampling", catId: "sampling", desc: "Systematic checklist for evaluating fit, fabric weight, stitch quality, and trims." },
  { href: "/learn/fit-samples-vs-pre-production-samples", title: "Fit Samples vs Pre-Production Samples: Key Differences", category: "Sampling", catId: "sampling", desc: "Why fit samples evaluate silhouette while PP samples test bulk production readiness." },
  { href: "/learn/why-samples-need-multiple-revisions", title: "Why Apparel Samples Sometimes Need Multiple Revisions", category: "Sampling", catId: "sampling", desc: "Common causes of sample revisions: fabric drape changes, sizing adjustments, and print fixes." },
  { href: "/learn/how-to-give-sample-feedback", title: "How to Give Useful Feedback on a Clothing Sample", category: "Sampling", catId: "sampling", desc: "Annotated photography, measurement delta charts, and clear technical revision notes." },
  { href: "/learn/after-sample-approval-what-happens", title: "What Happens After a Sample Is Approved?", category: "Sampling", catId: "sampling", desc: "Sealing the Golden Sample, bulk fabric mill ordering, marker printing, and line setup." },

  // Fabrics & Customization (17)
  { href: "/learn/how-to-choose-fabric-for-clothing-brand", title: "How to Choose Fabric for a Clothing Brand", category: "Fabrics", catId: "fabrics", desc: "Fiber composition, GSM weight, weave structures, and hand-feel selection." },
  { href: "/learn/cotton-fabric-types-explained", title: "Cotton Fabric Types Explained for Fashion Brands", category: "Fabrics", catId: "fabrics", desc: "Single jersey, french terry, heavy fleece, pique, and interlock knits." },
  { href: "/learn/fabric-weight-and-garment-construction", title: "How Fabric Weight Affects Garment Construction", category: "Fabrics", catId: "fabrics", desc: "Matching needle gauges, thread tension, and seam types to GSM weights." },
  { href: "/learn/combed-cotton-vs-regular-cotton", title: "Combed Cotton vs Regular Cotton: Key Differences", category: "Fabrics", catId: "fabrics", desc: "Long-staple combed cotton vs carded raw cotton: softness, pilling, and printability." },
  { href: "/learn/organic-cotton-in-apparel-manufacturing", title: "Organic Cotton in Apparel Manufacturing: What Brands Should Know", category: "Fabrics", catId: "fabrics", desc: "GOTS certification, eco-friendly spinning mills, and sustainable sourcing." },
  { href: "/learn/recycled-polyester-in-clothing-production", title: "Recycled Polyester in Clothing Production: Brand Guide", category: "Fabrics", catId: "fabrics", desc: "rPET performance fabrics, GRS certification, and eco-activewear construction." },
  { href: "/learn/heavyweight-streetwear-fabrics-explained", title: "Heavyweight Streetwear Fabrics Explained", category: "Fabrics", catId: "fabrics", desc: "300+ GSM jersey tees, 450+ GSM fleece hoodies, and luxury streetwear hand-feels." },
  { href: "/learn/how-to-evaluate-fabric-quality", title: "How to Evaluate Fabric Quality Before Bulk Production", category: "Fabrics", catId: "fabrics", desc: "Testing GSM, pilling resistance, shrinkage, colorfastness, and torque skewing." },
  { href: "/learn/fabric-sourcing-guide-for-fashion-brands", title: "Fabric Sourcing Guide for Fashion Brands", category: "Fabrics", catId: "fabrics", desc: "Working with textile mills, fabric stockists, custom dyeing labs, and MOQs." },
  { href: "/learn/fabric-choice-and-manufacturing-cost", title: "How Fabric Choice Affects Apparel Manufacturing Cost", category: "Fabrics", catId: "fabrics", desc: "Understanding fabric consumption yield, GSM pricing, and raw yarn markets." },
  { href: "/learn/garment-customization-options-explained", title: "Garment Customization Options Explained for Fashion Brands", category: "Fabrics", catId: "fabrics", desc: "Screen printing, embroidery, acid washes, custom labels, and custom hardware." },
  { href: "/learn/custom-hangtags-neck-labels-apparel", title: "Custom Hangtags & Neck Labels in Apparel Manufacturing", category: "Fabrics", catId: "fabrics", desc: "Screen-printed care labels, woven neck labels, hangtag cardstocks, and safety pins." },
  { href: "/learn/screen-printing-vs-dtg-clothing", title: "Screen Printing vs DTG Printing for Clothing Brands", category: "Fabrics", catId: "fabrics", desc: "Plastisol vs water-based screen printing vs Direct-to-Garment (DTG) digital printing." },
  { href: "/learn/custom-embroidery-for-clothing-brands", title: "Custom Embroidery for Clothing Brands: Technical Guide", category: "Fabrics", catId: "fabrics", desc: "Digitizing artwork, stitch counts, 3D puff embroidery, and backing stabilisers." },
  { href: "/learn/embroidery-vs-screen-printing-apparel", title: "Embroidery vs Screen Printing for Clothing Brands", category: "Fabrics", catId: "fabrics", desc: "Comparing durability, unit cost, detail resolution, and fabric suitability." },
  { href: "/learn/puff-print-vs-screen-print-streetwear", title: "Puff Print vs Screen Print for Streetwear", category: "Fabrics", catId: "fabrics", desc: "3D raised puff additive printing vs traditional flat screen printing techniques." },
  { href: "/learn/garment-wash-treatments-explained", title: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing", category: "Fabrics", catId: "fabrics", desc: "Enzyme bio-washing, acid wash, mineral wash, stone washing, and silicone softening." },

  // Quality Control & Audits (14)
  { href: "/learn/apparel-quality-control-explained", title: "Apparel Quality Control Explained: Complete Framework", category: "Quality Control", catId: "quality", desc: "Comprehensive framework covering fabric inspection, inline QC, and final AQL audits." },
  { href: "/learn/what-is-aql-in-apparel-quality-control", title: "What Is AQL in Apparel Quality Control?", category: "Quality Control", catId: "quality", desc: "Acceptable Quality Limit (AQL 2.5 / 4.0) sampling tables and defect classification." },
  { href: "/learn/stitch-type-and-garment-quality", title: "How Stitch Type Affects Garment Quality", category: "Quality Control", catId: "quality", desc: "ISO 4915 stitch classes: Lockstitch 301, Overlock 504, Coverstitch 605, Chainstitch 401." },
  { href: "/learn/how-to-evaluate-stitch-quality", title: "How to Evaluate Stitch Quality in Finished Garments", category: "Quality Control", catId: "quality", desc: "Auditing Stitches Per Inch (SPI), seam tension, skipped stitches, and burst strength." },
  { href: "/learn/garment-measurement-checking-in-production", title: "How Garment Measurements Are Checked During Production", category: "Quality Control", catId: "quality", desc: "Factory measurement inspection tables, flat relaxing, and tolerance verification." },
  { href: "/learn/garment-shrinkage-in-apparel-manufacturing", title: "Understanding Shrinkage in Apparel Manufacturing", category: "Quality Control", catId: "quality", desc: "Fabric relaxation shrinkage, pattern scale-ups, and mill compacting treatments." },
  { href: "/learn/what-to-check-during-clothing-production", title: "What Should Be Checked During Clothing Production?", category: "Quality Control", catId: "quality", desc: "Critical inline checkpoints across cutting tables, sewing lines, and ironing stations." },
  { href: "/learn/pre-production-quality-checks", title: "Pre-Production Quality Checks for Fashion Brands", category: "Quality Control", catId: "quality", desc: "Pre-flight audit: golden sample sign-offs, lab-dips, fabric reports, and trim cards." },
  { href: "/learn/in-line-quality-control-garment-manufacturing", title: "In-Line Quality Control in Garment Manufacturing", category: "Quality Control", catId: "quality", desc: "In-Process Quality Control (IPQC), Traffic Light Systems, and roving auditors." },
  { href: "/learn/final-inspection-finished-garments", title: "Final Inspection for Finished Garments: AQL Protocol", category: "Quality Control", catId: "quality", desc: "Final Random Inspection (FRI) protocols, carton sampling, and release certificates." },
  { href: "/learn/common-clothing-quality-problems", title: "Common Clothing Quality Problems and Their Causes", category: "Quality Control", catId: "quality", desc: "Troubleshooting seam puckering, shade variation, print cracking, and crooked hems." },
  { href: "/learn/garment-quality-checklist-for-brands", title: "How Fashion Brands Can Create a Garment Quality Checklist", category: "Quality Control", catId: "quality", desc: "Drafting custom quality control inspection manuals and defect severity rules." },
  { href: "/learn/how-to-reduce-defects-in-apparel-production", title: "How to Reduce Defects in Apparel Production: Factory Guide", category: "Quality Control", catId: "quality", desc: "Poka-Yoke error proofing, machine maintenance, and operator quality retraining." },
  { href: "/learn/what-makes-high-quality-streetwear", title: "What Makes a High-Quality Streetwear Garment?", category: "Quality Control", catId: "quality", desc: "Anatomy of premium streetwear: combed yarns, tight ribbing, clean stitching, and prints." },

  // Sourcing & Logistics (20)
  { href: "/learn/clothing-manufacturer-vs-sourcing-agent", title: "Clothing Manufacturer vs Garment Sourcing Agent", category: "Sourcing", catId: "sourcing", desc: "Comparing direct factory contracting vs full-service sourcing management." },
  { href: "/learn/how-to-choose-a-clothing-manufacturer", title: "How to Choose a Clothing Manufacturer", category: "Sourcing", catId: "sourcing", desc: "Selecting factory partners based on product specialization, MOQs, and compliance." },
  { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", title: "How to Find a Reliable Clothing Manufacturer", category: "Sourcing", catId: "sourcing", desc: "Vetting factory credentials, past client work, trade audits, and sampling speed." },
  { href: "/learn/questions-to-ask-an-apparel-manufacturer", title: "Questions to Ask an Apparel Manufacturer", category: "Sourcing", catId: "sourcing", desc: "15 critical questions to ask before transferring deposits or releasing tech packs." },
  { href: "/learn/clothing-manufacturer-due-diligence-checklist", title: "Manufacturer Due Diligence Checklist", category: "Sourcing", catId: "sourcing", desc: "Verification checklist for social compliance, machinery lists, and financial health." },
  { href: "/learn/how-to-evaluate-an-overseas-clothing-manufacturer", title: "How to Evaluate an Overseas Clothing Manufacturer", category: "Sourcing", catId: "sourcing", desc: "Auditing overseas supplier facilities, English fluency, and communication response times." },
  { href: "/learn/what-makes-a-good-apparel-manufacturing-partner", title: "What Makes a Good Apparel Manufacturing Partner?", category: "Sourcing", catId: "sourcing", desc: "Qualities of top-tier factory partners: transparency, technical support, and reliability." },
  { href: "/learn/how-to-plan-small-batch-apparel-launch", title: "How to Plan a Small-Batch Apparel Launch", category: "Sourcing", catId: "sourcing", desc: "Roadmap for launching small-batch collections with low MOQs and stock fabrics." },
  { href: "/learn/how-to-inspect-garment-measurements", title: "How to Inspect Garment Measurements: Practical Guide", category: "Sourcing", catId: "sourcing", desc: "Practical guide to measuring flat garments against technical spec sheets." },
  { href: "/learn/how-to-compare-clothing-manufacturers", title: "How to Compare Clothing Manufacturers: Decision Matrix", category: "Sourcing", catId: "sourcing", desc: "Structured scorecard comparing FOB prices, MOQs, sampling lead times, and audits." },
  { href: "/learn/what-should-be-in-an-apparel-manufacturing-quote", title: "What Should Be Included in an Apparel Manufacturing Quote?", category: "Sourcing", catId: "sourcing", desc: "Itemized FOB quotes: fabric yield, CMT labor, decoration fees, and Incoterms." },
  { href: "/learn/direct-manufacturer-vs-sourcing-agent", title: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide", category: "Sourcing", catId: "sourcing", desc: "Deciding between direct factory relationships and full-service sourcing partners." },
  { href: "/learn/how-to-communicate-with-overseas-suppliers", title: "How to Communicate With Overseas Apparel Suppliers", category: "Sourcing", catId: "sourcing", desc: "Cross-border communication best practices, visual feedback PDFs, and time zones." },
  { href: "/learn/warning-signs-of-poor-apparel-manufacturer", title: "Warning Signs of a Poor Apparel Manufacturing Partner", category: "Sourcing", catId: "sourcing", desc: "Identifying red flags: lump-sum quotes, refusal of NDAs, and untraceable subcontracting." },
  { href: "/learn/build-long-term-relationship-clothing-manufacturer", title: "How to Build a Long-Term Relationship With a Manufacturer", category: "Sourcing", catId: "sourcing", desc: "Building factory loyalty through production forecasts, prompt payments, and fabric consolidation." },
  { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", title: "How Apparel Manufacturing in Bangladesh Works", category: "Sourcing", catId: "sourcing", desc: "Inside Bangladesh's vertical knitting ecosystem, compliance standards, and ports." },
  { href: "/learn/what-to-know-before-sourcing-from-bangladesh", title: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check", category: "Sourcing", catId: "sourcing", desc: "Essential pre-sourcing checklist: duty-free GSP, lead times, and certified compliance." },
  { href: "/learn/how-international-clothing-production-is-coordinated", title: "How International Clothing Production Is Coordinated", category: "Sourcing", catId: "sourcing", desc: "Orchestrating cross-border manufacturing from tech pack handoff to ocean dispatch." },
  { href: "/learn/what-happens-after-clothing-manufactured-overseas", title: "What Happens After Clothing Is Manufactured Overseas?", category: "Sourcing", catId: "sourcing", desc: "Post-production logistics: packing, FRI release, ocean freight, and 3PL warehouse intake." },
  { href: "/learn/overseas-apparel-production-checklist", title: "A Complete Checklist for Starting Overseas Production", category: "Sourcing", catId: "sourcing", desc: "Master pre-production checklist before wiring funds to overseas manufacturers." },
];

export default function ResourcesHubPage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fenalt.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources Hub",
        item: "https://www.fenalt.com/resources",
      },
    ],
  };

  const operationalSections = [
    {
      icon: Globe,
      title: "International Sourcing & China Alternatives",
      desc: "Comparative analysis of global manufacturing hubs, Bangladesh production benefits, and supply chain diversification.",
      links: [
        { href: "/bangladesh-vs-china-garment-manufacturing", label: "Bangladesh vs China Garment Manufacturing" },
        { href: "/bangladesh-vs-vietnam-garment-manufacturing", label: "Bangladesh vs Vietnam Garment Manufacturing" },
        { href: "/sourcing-garments-outside-china", label: "Sourcing Garments Outside China" },
        { href: "/relocating-apparel-production-south-asia", label: "Relocating Apparel Production to South Asia" },
        { href: "/why-manufacture-apparel-in-bangladesh", label: "Why Manufacture Apparel in Bangladesh" },
      ],
    },
    {
      icon: Scale,
      title: "Trade, Tariffs & Import Guides",
      desc: "Educational guides on Rules of Origin, UK DCTS, US CBP clearance, customs entry, and landed unit economics.",
      links: [
        { href: "/bangladesh-garment-rules-of-origin", label: "Bangladesh Garment Rules of Origin Guide" },
        { href: "/uk-apparel-import-considerations", label: "UK Apparel Import Considerations" },
        { href: "/usa-apparel-import-considerations", label: "USA Apparel Import Considerations" },
        { href: "/australia-canada-apparel-import-guide", label: "Australia & Canada Apparel Import Guide" },
        { href: "/eu-apparel-import-considerations", label: "EU Apparel Import Considerations" },
        { href: "/apparel-manufacturing-cost-considerations", label: "Apparel Manufacturing Cost Considerations" },
      ],
    },
    {
      icon: Leaf,
      title: "Sustainability & Circular Textiles",
      desc: "Insights on circular deadstock fabric utilization, organic cotton knits, and closed-loop supply chains.",
      links: [
        { href: "/sustainable-apparel-manufacturing-bangladesh", label: "Sustainable Apparel Manufacturing Bangladesh" },
        { href: "/organic-cotton-clothing-manufacturing", label: "Organic Cotton Clothing Manufacturing" },
        { href: "/circular-fashion-manufacturing", label: "Circular Fashion Manufacturing" },
        { href: "/sustainable-textile-sourcing", label: "Sustainable Textile Sourcing" },
        { href: "/recycled-polyester-garment-sourcing", label: "Recycled Polyester Garment Sourcing" },
        { href: "/sustainable-streetwear-manufacturing", label: "Sustainable Streetwear Manufacturing" },
      ],
    },
    {
      icon: Factory,
      title: "Bangladesh Sourcing & Ground Management",
      desc: "On-the-ground management in Dhaka, micro-factory allocation, fabric procurement, and quality control.",
      links: [
        { href: "/garment-sourcing-agent-bangladesh", label: "Garment Sourcing Agent Bangladesh" },
        { href: "/fabric-sourcing-bangladesh", label: "Fabric Sourcing Bangladesh" },
        { href: "/ethical-clothing-manufacturing-bangladesh", label: "Ethical Clothing Manufacturing Bangladesh" },
        { href: "/factory-quality-control-bangladesh", label: "Factory Quality Control Bangladesh" },
        { href: "/buying-sourcing-partner-bangladesh", label: "Buying & Sourcing Partner Bangladesh" },
        { href: "/custom-streetwear-manufacturer-bangladesh", label: "Custom Streetwear Manufacturer Bangladesh" },
        { href: "/sweatshirt-manufacturer-bangladesh", label: "Sweatshirt Manufacturer Bangladesh" },
        { href: "/cut-and-sew-clothing-manufacturer-bangladesh", label: "Cut & Sew Clothing Manufacturer Bangladesh" },
      ],
    },
    {
      icon: FileText,
      title: "Production Services & Technical Support",
      desc: "Professional guides covering prototype sampling, tech pack creation, and production oversight.",
      links: [
        { href: "/apparel-sampling-services", label: "Professional Apparel Sampling Services" },
        { href: "/tech-pack-development-apparel", label: "Tech Pack Development for Apparel" },
        { href: "/apparel-production-management", label: "Apparel Production Management Services" },
        { href: "/garment-quality-control-services", label: "Garment Quality Control Services" },
        { href: "/overseas-production-management-apparel", label: "Overseas Production Management for Apparel" },
        { href: "/apparel-pattern-making-services", label: "Apparel Pattern Making Services" },
        { href: "/custom-embroidery-apparel-manufacturing", label: "Custom Embroidery Apparel Manufacturing" },
        { href: "/garment-packaging-custom-labeling-services", label: "Garment Packaging & Custom Labeling Services" },
        { href: "/private-label-streetwear-manufacturer", label: "Private Label Streetwear Manufacturer" },
        { href: "/clothing-manufacturer-luxury-brands", label: "Clothing Manufacturer for Luxury Brands" },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#C8A882] mb-6">
            <BookOpen size={20} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">Sourcing Knowledge Base</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] max-w-4xl mb-6">
            Manufacturing &amp; Sourcing{" "}
            <span className="italic font-medium text-[#2D5016]">Resources Hub.</span>
          </h1>
          <p className="text-lg text-[#6B6560] leading-relaxed max-w-2xl">
            Explore our curated collection of apparel manufacturing guides, international trade resources, Bangladesh sourcing insights, and circular textile benchmarks.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {/* Interactive Embedded Educational Library Section */}
            <EducationalLibrarySection articles={ALL_EDUCATIONAL_ARTICLES} />

            {/* Other Operational & Trade Resource Sections */}
            {operationalSections.map((section, i) => {
              const Icon = section.icon;
              return (
                <div key={i} className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 border border-[#C8A882] flex items-center justify-center text-[#C8A882] bg-[#FAF9F6]">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h2 className="font-display text-3xl font-medium text-[#1A1A1A]">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-sm text-[#6B6560] mb-8 max-w-2xl">{section.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="group p-4 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016]">
                          {link.label}
                        </span>
                        <ArrowRight size={14} className="text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-4">
            Need custom manufacturing assistance?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-8 max-w-xl mx-auto">
            Submit your design sketches or tech pack for a fast, all-inclusive quote from our Dhaka operations team.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
