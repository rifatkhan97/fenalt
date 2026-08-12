import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Scale, FileText, Leaf, Factory, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing & Sourcing Resources Hub | Fenalt",
  description:
    "Comprehensive directory of garment manufacturing guides, trade & tariff resources, Bangladesh sourcing insights, and eco-textile guides for apparel brand founders.",
  alternates: {
    canonical: "https://fenalt.com/resources",
  },
  openGraph: {
    title: "Manufacturing & Sourcing Resources Hub | Fenalt",
    description:
      "Comprehensive directory of garment manufacturing guides, trade & tariff resources, Bangladesh sourcing insights, and eco-textile guides for apparel brand founders.",
    url: "https://fenalt.com/resources",
  },
};

export default function ResourcesHubPage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources Hub",
        "item": "https://fenalt.com/resources",
      },
    ],
  };

  const sections = [
    {
      icon: GraduationCap,
      title: "Educational Library — Manufacturing, Sampling & Sourcing Guides",
      desc: "Plain-language guides to help clothing brands, startups, and sourcing managers understand every stage of apparel manufacturing — from first design to finished garment.",
      links: [
        { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works" },
        { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
        { href: "/learn/tech-pack-mistakes", label: "Common Tech Pack Mistakes That Delay Production" },
        { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
        { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Usually Take?" },
        { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
        { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean in Clothing Manufacturing?" },
        { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
        { href: "/learn/clothing-manufacturer-vs-sourcing-agent", label: "Clothing Manufacturer vs Garment Sourcing Agent" },
        { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
        { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
        { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
        { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
        { href: "/learn/how-to-evaluate-an-overseas-clothing-manufacturer", label: "How to Evaluate an Overseas Clothing Manufacturer" },
        { href: "/learn/what-a-clothing-manufacturer-needs-from-a-brand", label: "What a Clothing Manufacturer Needs From a Brand" },
        { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Can Prepare for Their First Production Run" },
        // Phase 2 Batch 1 Articles
        { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
        { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Clothing Tech Pack?" },
        { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure in Garment Manufacturing?" },
        { href: "/learn/how-to-manufacture-a-streetwear-collection", label: "How to Manufacture a Streetwear Collection" },
        { href: "/learn/common-streetwear-manufacturing-mistakes", label: "Common Streetwear Manufacturing Mistakes to Avoid" },
        { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Fashion Brand Produce?" },
        { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
        { href: "/learn/reduce-risk-when-launching-clothing-collection", label: "How to Reduce Risk When Launching a Clothing Collection" },
        { href: "/learn/how-to-scale-clothing-production", label: "How to Scale Clothing Production After a Successful Run" },
        { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained: Complete Framework" },
        // Phase 2 Batch 2 Articles
        { href: "/learn/cut-and-sew-manufacturing-explained", label: "Cut-and-Sew Manufacturing Explained for Fashion Brands" },
        { href: "/learn/what-does-an-apparel-manufacturer-do", label: "What Does an Apparel Manufacturer Actually Do?" },
        { href: "/learn/apparel-production-process-explained", label: "The Apparel Production Process Explained Step by Step" },
        { href: "/learn/what-makes-a-good-apparel-manufacturing-partner", label: "What Makes a Good Apparel Manufacturing Partner?" },
        { href: "/learn/types-of-apparel-samples", label: "The Different Types of Apparel Samples Explained" },
        { href: "/learn/how-many-samples-before-production", label: "How Many Samples Should a Fashion Brand Expect Before Production?" },
        { href: "/learn/how-to-prepare-for-first-clothing-sample", label: "How to Prepare for Your First Clothing Sample" },
        { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
        { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples: Key Differences" },
        { href: "/learn/why-samples-need-multiple-revisions", label: "Why Apparel Samples Sometimes Need Multiple Revisions" },
        { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
        { href: "/learn/after-sample-approval-what-happens", label: "What Happens After a Sample Is Approved?" },
        // Phase 2 Batch 3 Articles
        { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: What's the Difference?" },
        { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Clothing Tech Pack" },
        { href: "/learn/bill-of-materials-apparel", label: "What Is a Bill of Materials (BOM) in Apparel Production?" },
        { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
        { href: "/learn/what-is-pattern-making", label: "What Is Pattern Making in Clothing Production?" },
        { href: "/learn/cad-pattern-making-explained", label: "CAD Pattern Making for Fashion Brands Explained" },
        { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
        { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
        { href: "/learn/fabric-weight-and-garment-construction", label: "How Fabric Weight Affects Garment Construction" },
        { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton: Key Differences" },
        { href: "/learn/organic-cotton-in-apparel-manufacturing", label: "Organic Cotton in Apparel Manufacturing: What Brands Should Know" },
        { href: "/learn/recycled-polyester-in-clothing-production", label: "Recycled Polyester in Clothing Production: Brand Guide" },
        { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Bulk Production" },
        { href: "/learn/fabric-sourcing-guide-for-fashion-brands", label: "Fabric Sourcing Guide for Fashion Brands" },
        { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Affects Apparel Manufacturing Cost" },
        // Phase 2 Batch 4 Articles
        { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained for Fashion Brands" },
        { href: "/learn/custom-hangtags-neck-labels-apparel", label: "Custom Hangtags & Neck Labels in Apparel Manufacturing" },
        { href: "/learn/screen-printing-vs-dtg-clothing", label: "Screen Printing vs DTG Printing for Clothing Brands" },
        { href: "/learn/custom-embroidery-for-clothing-brands", label: "Custom Embroidery for Clothing Brands: Technical Guide" },
        { href: "/learn/embroidery-vs-screen-printing-apparel", label: "Embroidery vs Screen Printing for Clothing Brands" },
        { href: "/learn/garment-wash-treatments-explained", label: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing" },
        { href: "/learn/how-to-manufacture-t-shirts", label: "How to Manufacture T-Shirts: Complete Production Guide" },
        { href: "/learn/how-to-manufacture-hoodies", label: "How to Manufacture Hoodies: Complete Technical Guide" },
        { href: "/learn/activewear-manufacturing-guide", label: "Activewear Manufacturing Guide for Fitness Brands" },
        { href: "/learn/outerwear-jacket-manufacturing-guide", label: "Outerwear & Jacket Manufacturing Guide for Fashion Brands" },
        { href: "/learn/streetwear-manufacturing-guide", label: "Streetwear Manufacturing Guide: Boxy Fits, Heavy Knits & Prints" },
        // Phase 2 Batch 5 Articles
        { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
        { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Finished Garments" },
        { href: "/learn/garment-measurement-checking-in-production", label: "How Garment Measurements Are Checked During Production" },
        { href: "/learn/garment-shrinkage-in-apparel-manufacturing", label: "Understanding Shrinkage in Apparel Manufacturing" },
        { href: "/learn/what-to-check-during-clothing-production", label: "What Should Be Checked During Clothing Production?" },
        { href: "/learn/pre-production-quality-checks", label: "Pre-Production Quality Checks for Fashion Brands" },
        { href: "/learn/in-line-quality-control-garment-manufacturing", label: "In-Line Quality Control in Garment Manufacturing" },
        { href: "/learn/final-inspection-finished-garments", label: "Final Inspection for Finished Garments: AQL Protocol" },
        { href: "/learn/common-clothing-quality-problems", label: "Common Clothing Quality Problems and Their Causes" },
        { href: "/learn/garment-quality-checklist-for-brands", label: "How Fashion Brands Can Create a Garment Quality Checklist" },
        { href: "/learn/how-to-reduce-defects-in-apparel-production", label: "How to Reduce Defects in Apparel Production: Factory Guide" },
        // Phase 2 Batch 6 Articles
        { href: "/learn/how-to-plan-small-batch-apparel-launch", label: "How to Plan a Small-Batch Apparel Launch" },
        { href: "/learn/how-to-inspect-garment-measurements", label: "How to Inspect Garment Measurements: Practical Guide" },
        { href: "/learn/how-to-compare-clothing-manufacturers", label: "How to Compare Clothing Manufacturers: Decision Matrix" },
        { href: "/learn/what-should-be-in-an-apparel-manufacturing-quote", label: "What Should Be Included in an Apparel Manufacturing Quote?" },
        { href: "/learn/direct-manufacturer-vs-sourcing-agent", label: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide" },
        { href: "/learn/how-to-communicate-with-overseas-suppliers", label: "How to Communicate With Overseas Apparel Suppliers" },
        { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Apparel Manufacturing Partner" },
        { href: "/learn/build-long-term-relationship-clothing-manufacturer", label: "How to Build a Long-Term Relationship With a Manufacturer" },
        { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", label: "How Apparel Manufacturing in Bangladesh Works" },
        { href: "/learn/what-to-know-before-sourcing-from-bangladesh", label: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check" },
        { href: "/learn/how-international-clothing-production-is-coordinated", label: "How International Clothing Production Is Coordinated" },
        { href: "/learn/what-happens-after-clothing-manufactured-overseas", label: "What Happens After Clothing Is Manufactured Overseas?" },
      ],
    },
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
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <div key={i} className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 border border-[#C8A882] flex items-center justify-center text-[#C8A882]">
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
