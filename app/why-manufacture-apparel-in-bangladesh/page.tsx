import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Globe, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Manufacture Apparel in Bangladesh | Fenalt Guide",
  description:
    "Comprehensive guide explaining why global apparel brands manufacture in Bangladesh. Scale, vertical textile integration, cost efficiency, and low MOQ management.",
  alternates: {
    canonical: "https://www.fenalt.com/why-manufacture-apparel-in-bangladesh",
  },
  openGraph: {
    title: "Why Manufacture Apparel in Bangladesh | Fenalt Guide",
    description:
      "Comprehensive guide explaining why global apparel brands manufacture in Bangladesh. Scale, vertical textile integration, cost efficiency, and low MOQ management.",
    url: "https://www.fenalt.com/why-manufacture-apparel-in-bangladesh",
  },
};

export default function WhyManufactureInBangladeshPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Manufacture Apparel in Bangladesh: Sourcing Overview",
    "description":
      "An in-depth analysis of Bangladesh's garment industry - the world's 2nd largest apparel exporter, vertical spinning mill integration, labor efficiency, and small batch micro-factory sourcing.",
    "author": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Why Manufacture Apparel in Bangladesh",
        "item": "https://www.fenalt.com/why-manufacture-apparel-in-bangladesh",
      },
    ],
  };

  const faqs = [
    {
      q: "Why is Bangladesh the preferred country for knitwear and denim?",
      a: "Bangladesh is the 2nd largest apparel exporter globally, boasting deep vertical spinning mill integration, advanced denim washing laundries, and highly skilled garment craftspeople.",
    },
    {
      q: "Can small brands access Bangladesh manufacturing without huge volumes?",
      a: "Yes. Fenalt bridges independent brands with micro-factories in Dhaka, structuring 50–300 unit capsule drops with full physical floor QC and landed freight.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Global Apparel Hub
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Why Manufacture Apparel in{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Discover why global fashion brands choose Bangladesh. Explore vertical spinning mill integration, labor efficiency, duty preferences, and small-batch micro-factory access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Bangladesh Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/clothing-manufacturer-bangladesh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Bangladesh Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Industry Powerhouse
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              The 2nd Largest Apparel Exporter Worldwide
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Bangladesh&apos;s Ready-Made Garment (RMG) sector accounts for over 80% of national export earnings, backed by decades of specialized industrial investment in spinning mills, fabric dyeing, and sewing technology.
              </p>
              <p>
                <strong>Fenalt makes Bangladesh accessible to growing brands:</strong> We eliminate traditional mega-factory barriers by managing small-batch orders (50–300 units) through vetted Dhaka micro-factories under strict physical QC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Core Drivers
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Why Bangladesh Commands Global Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Vertical Spinning & Dyeing",
                tag: "Mill Scale",
                body: "Localized fabric production in Dhaka ensuring rapid access to combed cotton knits and heavy fleece.",
              },
              {
                icon: DollarSign,
                title: "Unrivaled Unit Economics",
                tag: "Cost Margin",
                body: "Highly competitive labor structures delivering maximum gross margin potential for fashion labels.",
              },
              {
                icon: Globe,
                title: "Favorable Trade Access",
                tag: "Tariff Savings",
                body: "Duty-free and preferential tariff access to key Western markets (e.g. UK DCTS).",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882] mb-8">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider mb-4">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-4">{item.title}</h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Assurance
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              On-Site Quality Oversight in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically audit stitching, measurement accuracy, and label attachment on the factory floor before garments are approved for export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all garments." },
              { title: "Needle & Metal Detection", desc: "100% safety inspection of finished pieces." },
              { title: "ANSI/ASQ Z1.4 Audits", desc: "Enforcing international AQL 2.5 quality benchmarks." },
            ].map((qc, i) => (
              <div key={i} className="p-6 bg-[#2A2A2A] border border-[#3A3A3A]">
                <ShieldCheck size={20} className="text-[#C8A882] mb-4" />
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-2">{qc.title}</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Bangladesh Manufacturing FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
            Start manufacturing your clothing in Bangladesh
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your apparel designs for an all-inclusive landed quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Bangladesh Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
