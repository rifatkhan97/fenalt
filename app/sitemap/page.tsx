import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Map,
  ShieldCheck,
  Factory,
  Layers,
  Store,
  Globe,
  FileText,
  Leaf,
  Scissors,
  Users,
  Compass,
  TrendingUp,
  Languages,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Sitemap & Complete Website Directory | Fenalt",
  description:
    "Complete human-readable HTML sitemap and website directory for Fenalt. Explore all commercial apparel manufacturing services, boutique solutions, and trade guides.",
  alternates: {
    canonical: "https://fenalt.com/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap & Complete Website Directory | Fenalt",
    description:
      "Complete human-readable HTML sitemap and website directory for Fenalt. Explore all commercial apparel manufacturing services, boutique solutions, and trade guides.",
    url: "https://fenalt.com/sitemap",
  },
};

export default function HTMLSitemapPage() {
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
        "name": "Sitemap",
        "item": "https://fenalt.com/sitemap",
      },
    ],
  };

  const categories = [
    {
      icon: Factory,
      title: "Core Platform & Operations",
      links: [
        { href: "/", label: "Homepage | B2B Apparel Manufacturing Platform" },
        { href: "/capabilities", label: "Capabilities | End-to-End Production & Sourcing" },
        { href: "/operations", label: "Operations | Quality Control & Freight Logistics" },
        { href: "/resources", label: "Resources Hub | Sourcing Guides & Trade Base" },
        { href: "/mission", label: "Our Mission | Sustainable & Ethical Supply Chain" },
        { href: "/contact", label: "Contact Us | Dhaka Headquarters & Inquiries" },
        { href: "/intake", label: "Start a Project | Project Submission Form" },
      ],
    },
    {
      icon: Layers,
      title: "Commercial & Low MOQ Manufacturing",
      links: [
        { href: "/low-moq-apparel-manufacturing", label: "Low MOQ Apparel Manufacturing (From 50 Units)" },
        { href: "/streetwear-manufacturing", label: "Custom Streetwear Manufacturing (Heavyweight Fleece)" },
        { href: "/clothing-manufacturer-bangladesh", label: "Managed Clothing Manufacturing in Bangladesh" },
        { href: "/hoodie-manufacturing", label: "Custom Hoodie & Sweatshirt Manufacturing" },
        { href: "/cut-and-sew-clothing-manufacturer-bangladesh", label: "Cut & Sew Clothing Manufacturer Bangladesh" },
      ],
    },
    {
      icon: Store,
      title: "Boutique & Small Brand Solutions",
      links: [
        { href: "/boutique-clothing-manufacturer", label: "Boutique Clothing Manufacturer" },
        { href: "/small-batch-clothing-manufacturer", label: "Small Batch Clothing Manufacturer" },
        { href: "/low-moq-clothing-manufacturer-for-boutiques", label: "Low MOQ Clothing Manufacturer for Boutiques" },
        { href: "/private-label-clothing-manufacturer-small-brands", label: "Private Label Clothing Manufacturer for Small Brands" },
        { href: "/clothing-manufacturer-independent-brands", label: "Clothing Manufacturer for Independent Brands" },
      ],
    },
    {
      icon: Users,
      title: "Startups & Fashion Brand Personas",
      links: [
        { href: "/clothing-manufacturer-for-startups", label: "Clothing Manufacturer for Startups" },
        { href: "/apparel-sampling-services-startups", label: "Apparel Sampling Services for Startups" },
        { href: "/clothing-production-for-instagram-brands", label: "Clothing Production for Instagram Brands" },
        { href: "/manufacturing-partner-new-designers", label: "Manufacturing Partner for New Designers" },
        { href: "/custom-clothing-manufacturer-small-businesses", label: "Custom Clothing Manufacturer for Small Businesses" },
        { href: "/private-label-streetwear-manufacturer", label: "Private Label Streetwear Manufacturer" },
        { href: "/clothing-manufacturer-luxury-brands", label: "Clothing Manufacturer for Luxury Brands" },
      ],
    },
    {
      icon: Scissors,
      title: "Product Categories & Garment Specs",
      links: [
        { href: "/puff-print-hoodie-manufacturer", label: "Puff Print Hoodie Manufacturer" },
        { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Heavyweight Cotton T-Shirt Manufacturer" },
        { href: "/denim-jeans-manufacturer-bangladesh", label: "Denim Jeans Manufacturer Bangladesh" },
        { href: "/activewear-manufacturing-bangladesh", label: "Activewear Manufacturing Bangladesh" },
        { href: "/outerwear-manufacturing-bangladesh", label: "Outerwear Manufacturing Bangladesh" },
        { href: "/knitwear-manufacturing-bangladesh", label: "Knitwear Manufacturing Bangladesh" },
        { href: "/sweatshirt-manufacturer-bangladesh", label: "Sweatshirt Manufacturer Bangladesh" },
        { href: "/custom-streetwear-manufacturer-bangladesh", label: "Custom Streetwear Manufacturer Bangladesh" },
      ],
    },
    {
      icon: FileText,
      title: "Technical Production & Finishing Services",
      links: [
        { href: "/apparel-sampling-services", label: "Professional Apparel Sampling Services" },
        { href: "/tech-pack-development-apparel", label: "Tech Pack Development for Apparel" },
        { href: "/apparel-production-management", label: "Apparel Production Management Services" },
        { href: "/garment-quality-control-services", label: "Garment Quality Control Services" },
        { href: "/overseas-production-management-apparel", label: "Overseas Production Management for Apparel" },
        { href: "/apparel-pattern-making-services", label: "Apparel Pattern Making Services" },
        { href: "/custom-embroidery-apparel-manufacturing", label: "Custom Embroidery Apparel Manufacturing" },
        { href: "/garment-packaging-custom-labeling-services", label: "Garment Packaging & Custom Labeling Services" },
      ],
    },
    {
      icon: Compass,
      title: "Bangladesh Sourcing & Ground Operations",
      links: [
        { href: "/garment-sourcing-agent-bangladesh", label: "Garment Sourcing Agent Bangladesh" },
        { href: "/fabric-sourcing-bangladesh", label: "Fabric Sourcing Bangladesh" },
        { href: "/ethical-clothing-manufacturing-bangladesh", label: "Ethical Clothing Manufacturing Bangladesh" },
        { href: "/factory-quality-control-bangladesh", label: "Factory Quality Control Bangladesh" },
        { href: "/buying-sourcing-partner-bangladesh", label: "Buying & Sourcing Partner Bangladesh" },
      ],
    },
    {
      icon: Leaf,
      title: "Sustainability & Circular Textiles",
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
      icon: TrendingUp,
      title: "International Sourcing & Country Comparisons",
      links: [
        { href: "/bangladesh-vs-china-garment-manufacturing", label: "Bangladesh vs China Garment Manufacturing" },
        { href: "/bangladesh-vs-vietnam-garment-manufacturing", label: "Bangladesh vs Vietnam Garment Manufacturing" },
        { href: "/sourcing-garments-outside-china", label: "Sourcing Garments Outside China" },
        { href: "/relocating-apparel-production-south-asia", label: "Relocating Apparel Production to South Asia" },
        { href: "/why-manufacture-apparel-in-bangladesh", label: "Why Manufacture Apparel in Bangladesh" },
      ],
    },
    {
      icon: Globe,
      title: "Trade, Tariff & Import Guides",
      links: [
        { href: "/bangladesh-garment-rules-of-origin", label: "Bangladesh Garment Rules of Origin" },
        { href: "/uk-apparel-import-considerations", label: "UK Apparel Import Considerations" },
        { href: "/usa-apparel-import-considerations", label: "USA Apparel Import Considerations" },
        { href: "/australia-canada-apparel-import-guide", label: "Australia & Canada Apparel Import Guide" },
        { href: "/eu-apparel-import-considerations", label: "EU Apparel Import Considerations" },
        { href: "/apparel-manufacturing-cost-considerations", label: "Apparel Manufacturing Cost Considerations" },
      ],
    },
    {
      icon: Languages,
      title: "Deutsche Bekleidungsproduktion (DACH)",
      links: [
        { href: "/de/bekleidungshersteller", label: "Bekleidungshersteller für europäische Modemarken" },
        { href: "/de/streetwear-hersteller", label: "Streetwear Hersteller für Heavyweight Kollektionen" },
        { href: "/de/low-moq-bekleidungshersteller", label: "Low-MOQ Bekleidungsproduktion ab 50 Stück" },
      ],
    },
    {
      icon: ShieldCheck,
      title: "Legal & Compliance",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#C8A882] mb-6">
            <Map size={20} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">Page Directory</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] max-w-4xl mb-6">
            HTML Sitemap &amp;{" "}
            <span className="italic font-medium text-[#2D5016]">Website Directory.</span>
          </h1>
          <p className="text-lg text-[#6B6560] leading-relaxed max-w-2xl">
            Explore all public pages, commercial manufacturing services, specialized boutique solutions, technical guides, and localized European production routes across the Fenalt platform.
          </p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#E5DDD3]">
                      <div className="w-10 h-10 border border-[#C8A882] flex items-center justify-center text-[#C8A882]">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <h2 className="font-display text-2xl font-medium text-[#1A1A1A]">
                        {cat.title}
                      </h2>
                    </div>

                    <ul className="space-y-4">
                      {cat.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between text-sm font-medium text-[#1A1A1A] hover:text-[#2D5016] transition-colors py-1"
                          >
                            <span className="leading-snug">{link.label}</span>
                            <ArrowRight
                              size={14}
                              className="text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-4"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ShieldCheck size={28} className="text-[#C8A882] mx-auto mb-4" />
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-4">
            Need custom manufacturing assistance?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-8 max-w-xl mx-auto">
            Submit your design sketches or tech pack for a fast, all-inclusive quote from our Dhaka operations team.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
