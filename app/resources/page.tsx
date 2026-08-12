import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Scale, FileText, Leaf, Factory, GraduationCap, Sparkles, Layers, Scissors, CheckCircle2 } from "lucide-react";

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
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fenalt.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources Hub",
        item: "https://fenalt.com/resources",
      },
    ],
  };

  const featuredGuides = [
    { href: "/learn/how-clothing-manufacturing-works", category: "Fundamentals", label: "How Clothing Manufacturing Works", desc: "Complete breakdown of the garment manufacturing lifecycle from tech packs to bulk shipping." },
    { href: "/learn/what-is-a-tech-pack", category: "Tech Packs", label: "What Is a Tech Pack in Apparel Manufacturing?", desc: "Anatomy of a technical specification package for factory production." },
    { href: "/learn/apparel-production-process-explained", category: "Fundamentals", label: "The Apparel Production Process Step by Step", desc: "Step-by-step walkthrough of garment assembly from raw roll spreading to final packaging." },
    { href: "/learn/types-of-apparel-samples", category: "Sampling", label: "The Different Types of Apparel Samples Explained", desc: "Proto samples, Fit samples, Salesman samples, Pre-Production (PP) samples, and TOP samples." },
    { href: "/learn/how-to-choose-fabric-for-clothing-brand", category: "Fabrics", label: "How to Choose Fabric for a Clothing Brand", desc: "Fiber composition, GSM weight, weave structures, and hand-feel selection." },
    { href: "/learn/apparel-quality-control-explained", category: "Quality Control", label: "Apparel Quality Control Explained: Framework", desc: "Comprehensive framework covering fabric inspection, inline QC, and final AQL audits." },
    { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", category: "Sourcing", label: "How to Find a Reliable Clothing Manufacturer", desc: "Vetting factory credentials, past client work, trade audits, and sampling speed." },
    { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", category: "Logistics", label: "How Manufacturing in Bangladesh Works", desc: "Inside Bangladesh's vertical knitting ecosystem, compliance standards, and ports." },
  ];

  const educationalCategories = [
    { id: "fundamentals", label: "Fundamentals & Process", count: 19, icon: Layers },
    { id: "tech-packs", label: "Tech Packs & Patterns", count: 12, icon: FileText },
    { id: "sampling", label: "Sampling & Prototyping", count: 9, icon: Scissors },
    { id: "fabrics", label: "Fabrics & Customization", count: 17, icon: Sparkles },
    { id: "quality", label: "Quality Control & Audits", count: 14, icon: CheckCircle2 },
    { id: "sourcing", label: "Sourcing & Logistics", count: 20, icon: Globe },
  ];

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
            {/* Main Featured Educational Library Section */}
            <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#E5DDD3]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 border border-[#C8A882] flex items-center justify-center text-[#C8A882] bg-[#FAF9F6]">
                      <GraduationCap size={20} strokeWidth={1.5} />
                    </div>
                    <h2 className="font-display text-3xl font-medium text-[#1A1A1A]">
                      Educational Library
                    </h2>
                    <span className="px-2.5 py-1 bg-[#2D5016] text-[#FAF9F6] text-[11px] font-semibold tracking-wider uppercase">
                      88 Articles
                    </span>
                  </div>
                  <p className="text-sm text-[#6B6560] max-w-2xl">
                    Plain-language guides helping fashion brands understand every stage of apparel manufacturing — from tech packs to final AQL inspection.
                  </p>
                </div>

                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider hover:bg-[#2D5016] transition-colors shrink-0"
                >
                  <span>Explore All 88 Guides</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Sub-Category Shortcut Pills */}
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Browse by Category</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {educationalCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.id}
                        href={`/learn#${cat.id}`}
                        className="group flex flex-col items-center text-center p-4 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-all hover:shadow-sm"
                      >
                        <Icon size={18} className="text-[#C8A882] group-hover:text-[#2D5016] mb-2 transition-colors" />
                        <span className="text-xs font-medium text-[#1A1A1A] group-hover:text-[#2D5016] mb-1 line-clamp-1">
                          {cat.label}
                        </span>
                        <span className="text-[10px] text-[#6B6560] font-semibold">
                          {cat.count} Guides
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Featured Articles 2x4 Grid */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Featured Reading</p>
                  <Link href="/learn" className="text-xs font-semibold uppercase tracking-wider text-[#2D5016] hover:underline flex items-center gap-1">
                    View Full Library <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {featuredGuides.map((fg, idx) => (
                    <Link
                      key={idx}
                      href={fg.href}
                      className="group flex flex-col justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-all"
                    >
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A882] block mb-2">
                          {fg.category}
                        </span>
                        <h3 className="font-display text-base font-medium text-[#1A1A1A] group-hover:text-[#2D5016] transition-colors leading-snug mb-2">
                          {fg.label}
                        </h3>
                        <p className="text-xs text-[#6B6560] leading-relaxed line-clamp-2 mb-4">
                          {fg.desc}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pt-3 border-t border-[#E5DDD3]">
                        <span>Read</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
