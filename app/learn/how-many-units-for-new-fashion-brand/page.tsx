import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, PieChart } from "lucide-react";

export const metadata: Metadata = {
  title: "How Many Units Should a New Fashion Brand Produce?",
  description:
    "A realistic unit volume guide for emerging apparel labels — balancing minimum order quantities (MOQs), cash flow, inventory risk, and sizing breakdowns.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-many-units-for-new-fashion-brand",
  },
  openGraph: {
    title: "How Many Units Should a New Fashion Brand Produce?",
    description:
      "A realistic unit volume guide for emerging apparel labels — balancing minimum order quantities (MOQs), cash flow, inventory risk, and sizing breakdowns.",
    url: "https://fenalt.com/learn/how-many-units-for-new-fashion-brand",
  },
};

export default function HowManyUnitsForNewFashionBrandPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Many Units Should a New Fashion Brand Produce?",
    description:
      "A practical volume and size-ratio allocation guide for early-stage clothing brands planning their initial production runs.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-many-units-for-new-fashion-brand",
    mainEntityOfPage: "https://fenalt.com/learn/how-many-units-for-new-fashion-brand",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Initial Unit Production Volumes", item: "https://fenalt.com/learn/how-many-units-for-new-fashion-brand" },
    ],
  };

  const benchmarks = [
    { range: "50 – 100 Units / Style", label: "Micro-Batch (Low Risk)", bestFor: "Initial market validation, direct-to-consumer pre-orders, exclusive capsule drops." },
    { range: "150 – 300 Units / Style", label: "Standard Startup Run", bestFor: "Established online presence, boutique wholesale distribution, balanced per-unit pricing." },
    { range: "500+ Units / Style", label: "Bulk Tier 1 Production", bestFor: "Proven sell-through rates, retail distribution contracts, maximum per-unit cost efficiency." },
  ];

  const faqs = [
    {
      q: "What is a standard size ratio breakdown for a 100-unit t-shirt order?",
      a: "A common starting bell-curve ratio (1:2:2:1) for 100 units is: 15 Small, 35 Medium, 35 Large, 15 XL. Adjust based on your target demographic body profile.",
    },
    {
      q: "Should I order more inventory to get a cheaper per-unit price?",
      a: "No. Saving $2.00 per garment on 500 units is meaningless if 300 unsold units sit in boxes. Capital preservation and fast turnarounds outweigh minor per-unit savings for early drops.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">
              Fenalt Learn
            </Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Low MOQ & Startups</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Many Units Should a{" "}
            <span className="italic font-medium text-[#2D5016]">New Fashion Brand Produce?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Overordering inventory is the leading cause of early startup failure. Here is how to determine your initial production volume and allocate unit ratios responsibly.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <PieChart size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Inventory Strategy</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Your first production run is not meant to maximize profit margins — it is designed to <strong className="font-medium">validate product-market fit</strong> and establish operating velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Volume Tiers */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Tiers</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">Recommended Initial Volumes</h2>
          <div className="space-y-6">
            {benchmarks.map((bm, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5016] block mb-2">{bm.label}</span>
                <h3 className="font-display text-2xl font-light text-[#1A1A1A] mb-2">{bm.range}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed"><strong className="text-[#1A1A1A]">Best for:</strong> {bm.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean in Clothing Manufacturing?" },
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Can Prepare for Their First Production Run" },
              { href: "/low-moq-apparel-manufacturing", label: "Fenalt Low MOQ Manufacturing Services" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Start with flexible low MOQs</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt supports independent fashion startups with low minimum order quantities per style, enabling low-risk launches.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
