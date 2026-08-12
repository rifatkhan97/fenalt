import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import LearnLibraryClient, { ArticleItem } from "./LearnLibraryClient";

export const metadata: Metadata = {
  title: "Apparel Manufacturing Educational Library | 88 Guides",
  description:
    "Explore 88 comprehensive, plain-language technical guides covering garment manufacturing, tech packs, pattern making, sampling, fabrics, quality control, and overseas sourcing.",
  alternates: {
    canonical: "https://fenalt.com/learn",
  },
  openGraph: {
    title: "Apparel Manufacturing Educational Library | Fenalt",
    description:
      "Explore 88 comprehensive, plain-language technical guides covering garment manufacturing, tech packs, pattern making, sampling, fabrics, quality control, and overseas sourcing.",
    url: "https://fenalt.com/learn",
  },
};

const ALL_ARTICLES: ArticleItem[] = [
  // Fundamentals & Process
  { slug: "how-clothing-manufacturing-works", title: "How Clothing Manufacturing Works: A Guide for Brands", category: "fundamentals", desc: "Complete breakdown of the garment manufacturing lifecycle from tech packs to bulk shipping." },
  { slug: "cut-and-sew-manufacturing-explained", title: "Cut-and-Sew Manufacturing Explained for Fashion Brands", category: "fundamentals", desc: "Understand custom pattern cutting, grading, fabric laying, and line sewing." },
  { slug: "what-does-an-apparel-manufacturer-do", title: "What Does an Apparel Manufacturer Actually Do?", category: "fundamentals", desc: "Detailed breakdown of factory operations, merchandisers, pattern makers, and line managers." },
  { slug: "apparel-production-process-explained", title: "The Apparel Production Process Explained Step by Step", category: "fundamentals", desc: "Step-by-step walkthrough of garment assembly from raw roll spreading to final packaging." },
  { slug: "clothing-manufacturing-timeline", title: "How Long Does Clothing Manufacturing Usually Take?", category: "fundamentals", desc: "Timeline expectations for tech pack dev, sampling, fabric mill dyeing, and bulk sewing." },
  { slug: "what-does-gsm-mean-in-clothing", title: "What Does GSM Mean in Clothing?", category: "fundamentals", desc: "Grams per Square Meter (GSM) fabric weight guide for t-shirts, hoodies, and fleece." },
  { slug: "what-does-low-moq-mean", title: "What Does Low MOQ Mean in Clothing Manufacturing?", category: "fundamentals", desc: "Minimum Order Quantities (MOQ) explained for emerging clothing labels." },
  { slug: "how-many-units-for-new-fashion-brand", title: "How Many Units Should a New Fashion Brand Produce?", category: "fundamentals", desc: "Inventory volume strategies for startup clothing drops and pre-order launches." },
  { slug: "low-moq-vs-bulk-manufacturing", title: "Low MOQ vs Bulk Manufacturing: What Changes?", category: "fundamentals", desc: "Cost, lead time, and customization differences between small batch and mass production." },
  { slug: "startups-prepare-for-first-production-run", title: "How Startups Can Prepare for Their First Production Run", category: "fundamentals", desc: "Essential pre-flight checklist for fashion founders entering factory manufacturing." },
  { slug: "reduce-risk-when-launching-clothing-collection", title: "How to Reduce Risk When Launching a Clothing Collection", category: "fundamentals", desc: "Financial, inventory, and supply chain risk mitigation for new fashion releases." },
  { slug: "how-to-scale-clothing-production", title: "How to Scale Clothing Production After a Successful Run", category: "fundamentals", desc: "Scaling from initial 100-unit drops to 5,000+ bulk factory orders." },
  { slug: "how-to-manufacture-a-streetwear-collection", title: "How to Manufacture a Streetwear Collection", category: "fundamentals", desc: "Production strategies for boxy tees, heavy fleece hoodies, puff prints, and embroidery." },
  { slug: "common-streetwear-manufacturing-mistakes", title: "Common Streetwear Manufacturing Mistakes to Avoid", category: "fundamentals", desc: "Avoiding low GSM fabrics, bad collar ribbing, misaligned prints, and size errors." },
  { slug: "streetwear-manufacturing-guide", title: "Streetwear Manufacturing Guide: Boxy Fits, Heavy Knits & Prints", category: "fundamentals", desc: "Technical construction guide for heavy knit streetwear collections." },
  { slug: "how-to-manufacture-t-shirts", title: "How to Manufacture T-Shirts: Complete Production Guide", category: "fundamentals", desc: "Complete guide to yarn selection, neck ribbing, coverstitching, and printing." },
  { slug: "how-to-manufacture-hoodies", title: "How to Manufacture Hoodies: Complete Technical Guide", category: "fundamentals", desc: "Heavyweight fleece construction, double-layer hoods, kangaroo pockets, and ribbing." },
  { slug: "activewear-manufacturing-guide", title: "Activewear Manufacturing Guide for Fitness Brands", category: "fundamentals", desc: "Flatlock stitching, nylon-spandex blends, four-way stretch, and moisture wicking." },
  { slug: "outerwear-jacket-manufacturing-guide", title: "Outerwear & Jacket Manufacturing Guide for Fashion Brands", category: "fundamentals", desc: "Puffer jackets, windbreakers, seam taping, zippers, and insulation construction." },

  // Tech Packs & Patterns
  { slug: "what-is-a-tech-pack", title: "What Is a Tech Pack in Apparel Manufacturing?", category: "tech-packs", desc: "Anatomy of a technical specification package for factory production." },
  { slug: "tech-pack-mistakes", title: "Common Tech Pack Mistakes That Delay Production", category: "tech-packs", desc: "Missing seams, un-graded specs, vague BOMs, and un-vectorized artwork errors." },
  { slug: "tech-pack-to-bulk-production", title: "What Happens Between a Tech Pack and Bulk Production?", category: "tech-packs", desc: "The transition from digital technical specs to physical Golden Pre-Production samples." },
  { slug: "what-to-include-in-a-tech-pack", title: "What Should Be Included in a Clothing Tech Pack?", category: "tech-packs", desc: "Flat sketches, POM spec tables, colorways, BOMs, and packaging instructions." },
  { slug: "tech-pack-vs-sewing-pattern", title: "Tech Pack vs Sewing Pattern: What's the Difference?", category: "tech-packs", desc: "Understanding the distinction between technical spec manuals and paper/CAD sewing templates." },
  { slug: "tech-pack-measurements", title: "How to Create Measurements for a Clothing Tech Pack", category: "tech-packs", desc: "Measuring flat prototype garments and building baseline measurement spec tables." },
  { slug: "points-of-measure-garment", title: "What Are Points of Measure (POM) in Garment Manufacturing?", category: "tech-packs", desc: "Standard POM codes and measurement anchor points for t-shirts, hoodies, and pants." },
  { slug: "bill-of-materials-apparel", title: "What Is a Bill of Materials (BOM) in Apparel Production?", category: "tech-packs", desc: "Listing raw fabrics, threads, zippers, woven labels, and polybags in your tech pack." },
  { slug: "apparel-size-grading-explained", title: "How Apparel Size Grading Works Across Sizes", category: "tech-packs", desc: "Grading incremental measurement jumps from XS to XXL across pattern sets." },
  { slug: "what-is-pattern-making", title: "What Is Pattern Making in Clothing Production?", category: "tech-packs", desc: "Converting 2D designer sketches into 3D physical fabric panel templates." },
  { slug: "cad-pattern-making-explained", title: "CAD Pattern Making for Fashion Brands Explained", category: "tech-packs", desc: "Digital CAD pattern drafting, marker efficiency, and automated cutting tables." },
  { slug: "what-a-clothing-manufacturer-needs-from-a-brand", title: "What a Clothing Manufacturer Needs From a Brand", category: "tech-packs", desc: "Essential deliverables required before a factory can issue an accurate quote." },

  // Sampling & Prototyping
  { slug: "what-is-a-clothing-sample", title: "What Is a Clothing Sample and Why Is It Important?", category: "sampling", desc: "Understanding prototype samples and why they are vital prior to bulk production." },
  { slug: "types-of-apparel-samples", title: "The Different Types of Apparel Samples Explained", category: "sampling", desc: "Proto samples, Fit samples, Salesman samples, Pre-Production (PP) samples, and TOP samples." },
  { slug: "how-many-samples-before-production", title: "How Many Samples Should a Fashion Brand Expect Before Production?", category: "sampling", desc: "Sampling iteration rounds, fit approvals, and golden sample sign-offs." },
  { slug: "how-to-prepare-for-first-clothing-sample", title: "How to Prepare for Your First Clothing Sample", category: "sampling", desc: "Organizing tech packs, reference garments, and fabric swatches before requesting a sample." },
  { slug: "sample-approval-checklist", title: "Sample Approval Checklist for Fashion Brands", category: "sampling", desc: "Systematic checklist for evaluating fit, fabric weight, stitch quality, and trims." },
  { slug: "fit-samples-vs-pre-production-samples", title: "Fit Samples vs Pre-Production Samples: Key Differences", category: "sampling", desc: "Why fit samples evaluate silhouette while PP samples test bulk production readiness." },
  { slug: "why-samples-need-multiple-revisions", title: "Why Apparel Samples Sometimes Need Multiple Revisions", category: "sampling", desc: "Common causes of sample revisions: fabric drape changes, sizing adjustments, and print fixes." },
  { slug: "how-to-give-sample-feedback", title: "How to Give Useful Feedback on a Clothing Sample", category: "sampling", desc: "Annotated photography, measurement delta charts, and clear technical revision notes." },
  { slug: "after-sample-approval-what-happens", title: "What Happens After a Sample Is Approved?", category: "sampling", desc: "Sealing the Golden Sample, bulk fabric mill ordering, marker printing, and line setup." },

  // Fabrics & Customization
  { slug: "how-to-choose-fabric-for-clothing-brand", title: "How to Choose Fabric for a Clothing Brand", category: "fabrics", desc: "Fiber composition, GSM weight, weave structures, and hand-feel selection." },
  { slug: "cotton-fabric-types-explained", title: "Cotton Fabric Types Explained for Fashion Brands", category: "fabrics", desc: "Single jersey, french terry, heavy fleece, pique, and interlock knits." },
  { slug: "fabric-weight-and-garment-construction", title: "How Fabric Weight Affects Garment Construction", category: "fabrics", desc: "Matching needle gauges, thread tension, and seam types to GSM weights." },
  { slug: "combed-cotton-vs-regular-cotton", title: "Combed Cotton vs Regular Cotton: Key Differences", category: "fabrics", desc: "Long-staple combed cotton vs carded raw cotton: softness, pilling, and printability." },
  { slug: "organic-cotton-in-apparel-manufacturing", title: "Organic Cotton in Apparel Manufacturing: What Brands Should Know", category: "fabrics", desc: "GOTS certification, eco-friendly spinning mills, and sustainable sourcing." },
  { slug: "recycled-polyester-in-clothing-production", title: "Recycled Polyester in Clothing Production: Brand Guide", category: "fabrics", desc: "rPET performance fabrics, GRS certification, and eco-activewear construction." },
  { slug: "heavyweight-streetwear-fabrics-explained", title: "Heavyweight Streetwear Fabrics Explained", category: "fabrics", desc: "300+ GSM jersey tees, 450+ GSM fleece hoodies, and luxury streetwear hand-feels." },
  { slug: "how-to-evaluate-fabric-quality", title: "How to Evaluate Fabric Quality Before Bulk Production", category: "fabrics", desc: "Testing GSM, pilling resistance, shrinkage, colorfastness, and torque skewing." },
  { slug: "fabric-sourcing-guide-for-fashion-brands", title: "Fabric Sourcing Guide for Fashion Brands", category: "fabrics", desc: "Working with textile mills, fabric stockists, custom dyeing labs, and MOQs." },
  { slug: "fabric-choice-and-manufacturing-cost", title: "How Fabric Choice Affects Apparel Manufacturing Cost", category: "fabrics", desc: "Understanding fabric consumption yield, GSM pricing, and raw yarn markets." },
  { slug: "garment-customization-options-explained", title: "Garment Customization Options Explained for Fashion Brands", category: "fabrics", desc: "Screen printing, embroidery, acid washes, custom labels, and custom hardware." },
  { slug: "custom-hangtags-neck-labels-apparel", title: "Custom Hangtags & Neck Labels in Apparel Manufacturing", category: "fabrics", desc: "Screen-printed care labels, woven neck labels, hangtag cardstocks, and safety pins." },
  { slug: "screen-printing-vs-dtg-clothing", title: "Screen Printing vs DTG Printing for Clothing Brands", category: "fabrics", desc: "Plastisol vs water-based screen printing vs Direct-to-Garment (DTG) digital printing." },
  { slug: "custom-embroidery-for-clothing-brands", title: "Custom Embroidery for Clothing Brands: Technical Guide", category: "fabrics", desc: "Digitizing artwork, stitch counts, 3D puff embroidery, and backing stabilisers." },
  { slug: "embroidery-vs-screen-printing-apparel", title: "Embroidery vs Screen Printing for Clothing Brands", category: "fabrics", desc: "Comparing durability, unit cost, detail resolution, and fabric suitability." },
  { slug: "puff-print-vs-screen-print-streetwear", title: "Puff Print vs Screen Print for Streetwear", category: "fabrics", desc: "3D raised puff additive printing vs traditional flat screen printing techniques." },
  { slug: "garment-wash-treatments-explained", title: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing", category: "fabrics", desc: "Enzyme bio-washing, acid wash, mineral wash, stone washing, and silicone softening." },

  // Quality Control & Audits
  { slug: "apparel-quality-control-explained", title: "Apparel Quality Control Explained: Complete Framework", category: "quality", desc: "Comprehensive framework covering fabric inspection, inline QC, and final AQL audits." },
  { slug: "what-is-aql-in-apparel-quality-control", title: "What Is AQL in Apparel Quality Control?", category: "quality", desc: "Acceptable Quality Limit (AQL 2.5 / 4.0) sampling tables and defect classification." },
  { slug: "stitch-type-and-garment-quality", title: "How Stitch Type Affects Garment Quality", category: "quality", desc: "ISO 4915 stitch classes: Lockstitch 301, Overlock 504, Coverstitch 605, Chainstitch 401." },
  { slug: "how-to-evaluate-stitch-quality", title: "How to Evaluate Stitch Quality in Finished Garments", category: "quality", desc: "Auditing Stitches Per Inch (SPI), seam tension, skipped stitches, and burst strength." },
  { slug: "garment-measurement-checking-in-production", title: "How Garment Measurements Are Checked During Production", category: "quality", desc: "Factory measurement inspection tables, flat relaxing, and tolerance verification." },
  { slug: "garment-shrinkage-in-apparel-manufacturing", title: "Understanding Shrinkage in Apparel Manufacturing", category: "quality", desc: "Fabric relaxation shrinkage, pattern scale-ups, and mill compacting treatments." },
  { slug: "what-to-check-during-clothing-production", title: "What Should Be Checked During Clothing Production?", category: "quality", desc: "Critical inline checkpoints across cutting tables, sewing lines, and ironing stations." },
  { slug: "pre-production-quality-checks", title: "Pre-Production Quality Checks for Fashion Brands", category: "quality", desc: "Pre-flight audit: golden sample sign-offs, lab-dips, fabric reports, and trim cards." },
  { slug: "in-line-quality-control-garment-manufacturing", title: "In-Line Quality Control in Garment Manufacturing", category: "quality", desc: "In-Process Quality Control (IPQC), Traffic Light Systems, and roving auditors." },
  { slug: "final-inspection-finished-garments", title: "Final Inspection for Finished Garments: AQL Protocol", category: "quality", desc: "Final Random Inspection (FRI) protocols, carton sampling, and release certificates." },
  { slug: "common-clothing-quality-problems", title: "Common Clothing Quality Problems and Their Causes", category: "quality", desc: "Troubleshooting seam puckering, shade variation, print cracking, and crooked hems." },
  { slug: "garment-quality-checklist-for-brands", title: "How Fashion Brands Can Create a Garment Quality Checklist", category: "quality", desc: "Drafting custom quality control inspection manuals and defect severity rules." },
  { slug: "how-to-reduce-defects-in-apparel-production", title: "How to Reduce Defects in Apparel Production: Factory Guide", category: "quality", desc: "Poka-Yoke error proofing, machine maintenance, and operator quality retraining." },
  { slug: "what-makes-high-quality-streetwear", title: "What Makes a High-Quality Streetwear Garment?", category: "quality", desc: "Anatomy of premium streetwear: combed yarns, tight ribbing, clean stitching, and prints." },

  // Sourcing & Logistics
  { slug: "clothing-manufacturer-vs-sourcing-agent", title: "Clothing Manufacturer vs Garment Sourcing Agent", category: "sourcing", desc: "Comparing direct factory contracting vs full-service sourcing management." },
  { slug: "how-to-choose-a-clothing-manufacturer", title: "How to Choose a Clothing Manufacturer", category: "sourcing", desc: "Selecting factory partners based on product specialization, MOQs, and compliance." },
  { slug: "how-to-find-a-reliable-clothing-manufacturer", title: "How to Find a Reliable Clothing Manufacturer", category: "sourcing", desc: "Vetting factory credentials, past client work, trade audits, and sampling speed." },
  { slug: "questions-to-ask-an-apparel-manufacturer", title: "Questions to Ask an Apparel Manufacturer", category: "sourcing", desc: "15 critical questions to ask before transferring deposits or releasing tech packs." },
  { slug: "clothing-manufacturer-due-diligence-checklist", title: "Manufacturer Due Diligence Checklist", category: "sourcing", desc: "Verification checklist for social compliance, machinery lists, and financial health." },
  { slug: "how-to-evaluate-an-overseas-clothing-manufacturer", title: "How to Evaluate an Overseas Clothing Manufacturer", category: "sourcing", desc: "Auditing overseas supplier facilities, English fluency, and communication response times." },
  { slug: "what-makes-a-good-apparel-manufacturing-partner", title: "What Makes a Good Apparel Manufacturing Partner?", category: "sourcing", desc: "Qualities of top-tier factory partners: transparency, technical support, and reliability." },
  { slug: "how-to-plan-small-batch-apparel-launch", title: "How to Plan a Small-Batch Apparel Launch", category: "sourcing", desc: "Roadmap for launching small-batch collections with low MOQs and stock fabrics." },
  { slug: "how-to-inspect-garment-measurements", title: "How to Inspect Garment Measurements: Practical Guide", category: "sourcing", desc: "Practical guide to measuring flat garments against technical spec sheets." },
  { slug: "how-to-compare-clothing-manufacturers", title: "How to Compare Clothing Manufacturers: Decision Matrix", category: "sourcing", desc: "Structured scorecard comparing FOB prices, MOQs, sampling lead times, and audits." },
  { slug: "what-should-be-in-an-apparel-manufacturing-quote", title: "What Should Be Included in an Apparel Manufacturing Quote?", category: "sourcing", desc: "Itemized FOB quotes: fabric yield, CMT labor, decoration fees, and Incoterms." },
  { slug: "direct-manufacturer-vs-sourcing-agent", title: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide", category: "sourcing", desc: "Deciding between direct factory relationships and full-service sourcing partners." },
  { slug: "how-to-communicate-with-overseas-suppliers", title: "How to Communicate With Overseas Apparel Suppliers", category: "sourcing", desc: "Cross-border communication best practices, visual feedback PDFs, and time zones." },
  { slug: "warning-signs-of-poor-apparel-manufacturer", title: "Warning Signs of a Poor Apparel Manufacturing Partner", category: "sourcing", desc: "Identifying red flags: lump-sum quotes, refusal of NDAs, and untraceable subcontracting." },
  { slug: "build-long-term-relationship-clothing-manufacturer", title: "How to Build a Long-Term Relationship With a Manufacturer", category: "sourcing", desc: "Building factory loyalty through production forecasts, prompt payments, and fabric consolidation." },
  { slug: "how-apparel-manufacturing-in-bangladesh-works", title: "How Apparel Manufacturing in Bangladesh Works", category: "sourcing", desc: "Inside Bangladesh's vertical knitting ecosystem, compliance standards, and ports." },
  { slug: "what-to-know-before-sourcing-from-bangladesh", title: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check", category: "sourcing", desc: "Essential pre-sourcing checklist: duty-free GSP, lead times, and certified compliance." },
  { slug: "how-international-clothing-production-is-coordinated", title: "How International Clothing Production Is Coordinated", category: "sourcing", desc: "Orchestrating cross-border manufacturing from tech pack handoff to ocean dispatch." },
  { slug: "what-happens-after-clothing-manufactured-overseas", title: "What Happens After Clothing Is Manufactured Overseas?", category: "sourcing", desc: "Post-production logistics: packing, FRI release, ocean freight, and 3PL warehouse intake." },
  { slug: "overseas-apparel-production-checklist", title: "A Complete Checklist for Starting Overseas Production", category: "sourcing", desc: "Master pre-production checklist before wiring funds to overseas manufacturers." },
];

export default function LearnLibraryPage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Educational Library", item: "https://fenalt.com/learn" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9] border-b border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#C8A882] mb-6">
            <GraduationCap size={22} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">
              Resources Hub
            </Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Educational Library</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] max-w-4xl mb-6">
            Apparel Manufacturing &amp; Sourcing{" "}
            <span className="italic font-medium text-[#2D5016]">Educational Library.</span>
          </h1>
          <p className="text-lg text-[#6B6560] leading-relaxed max-w-3xl">
            Explore 88 technical, plain-language guides created for fashion brand founders, apparel startups, and sourcing managers. Search by keyword or filter by topic.
          </p>
        </div>
      </section>

      {/* Interactive Library Client */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <LearnLibraryClient articles={ALL_ARTICLES} />
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="py-20 bg-[#1A1A1A] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">
            Ready to apply this to your production?
          </h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt translates technical manufacturing expertise into reliable production runs in Dhaka — starting at 50 units per style.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300"
          >
            Submit Your Tech Pack <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
