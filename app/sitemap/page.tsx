import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Map, ShieldCheck, Factory, Layers, Store, Globe, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Sitemap & Page Directory | Fenalt",
  description:
    "Complete human-readable sitemap and page directory for Fenalt. Explore our apparel manufacturing capabilities, low MOQ services, and global operations.",
  alternates: {
    canonical: "https://fenalt.com/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap & Page Directory | Fenalt",
    description:
      "Complete human-readable sitemap and page directory for Fenalt. Explore our apparel manufacturing capabilities, low MOQ services, and global operations.",
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
        { href: "/", label: "Homepage — B2B Apparel Manufacturing Platform" },
        { href: "/capabilities", label: "Capabilities — End-to-End Production & Sourcing" },
        { href: "/operations", label: "Operations — Quality Control & Freight Logistics" },
        { href: "/resources", label: "Resources Hub — Sourcing Guides & Trade Base" },
        { href: "/mission", label: "Our Mission — Sustainable & Ethical Supply Chain" },
        { href: "/contact", label: "Contact Us — Dhaka Headquarters & Inquiries" },
        { href: "/intake", label: "Start a Project — Project Submission Form" },
      ],
    },
    {
      icon: Layers,
      title: "Commercial Manufacturing Services",
      links: [
        { href: "/low-moq-apparel-manufacturing", label: "Low MOQ Apparel Manufacturing (From 50 Units)" },
        { href: "/streetwear-manufacturing", label: "Custom Streetwear Manufacturing (Heavyweight Fleece)" },
        { href: "/clothing-manufacturer-bangladesh", label: "Managed Clothing Manufacturing in Bangladesh" },
        { href: "/hoodie-manufacturing", label: "Custom Hoodie & Sweatshirt Manufacturing" },
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
      icon: Globe,
      title: "Deutsche Bekleidungsproduktion (DACH)",
      links: [
        { href: "/de/bekleidungshersteller", label: "Bekleidungshersteller für europäische Modemarken" },
        { href: "/de/streetwear-hersteller", label: "Streetwear Hersteller für Heavyweight Kollektionen" },
        { href: "/de/low-moq-bekleidungshersteller", label: "Low-MOQ Bekleidungsproduktion ab 50 Stück" },
      ],
    },
    {
      icon: FileText,
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
            Explore all public pages, commercial manufacturing services, specialized boutique solutions, and localized European production routes across the Fenalt platform.
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
