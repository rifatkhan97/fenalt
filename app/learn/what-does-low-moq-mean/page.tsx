import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "What Does Low MOQ Mean in Clothing Manufacturing?",
  description:
    "MOQ stands for minimum order quantity. Learn what low MOQ means in garment production, why it matters for small brands, and how it affects cost, sampling, and production.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-does-low-moq-mean",
  },
  openGraph: {
    title: "What Does Low MOQ Mean in Clothing Manufacturing?",
    description:
      "MOQ stands for minimum order quantity. Learn what low MOQ means in garment production, why it matters for small brands, and how it affects cost, sampling, and production.",
    url: "https://fenalt.com/learn/what-does-low-moq-mean",
  },
};

export default function WhatDoesLowMoqMeanPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Does Low MOQ Mean in Clothing Manufacturing?",
    description: "MOQ (minimum order quantity) explained — what it means, why factories set MOQs, and what low MOQ means for small fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-does-low-moq-mean",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Does Low MOQ Mean", item: "https://fenalt.com/learn/what-does-low-moq-mean" },
    ],
  };

  const moqRanges = [
    { label: "Sample / Prototype", range: "1–10 units", context: "For fit and quality approval before production. Not priced for retail economics.", note: "Not a production MOQ — a development stage." },
    { label: "Low MOQ Production", range: "50–150 units per style", context: "Accessible for startups, capsule collections, and pilot runs. Typically involves a premium per-unit cost vs bulk.", note: "Fenalt supports production from 50 units per style for qualifying projects, depending on design complexity and fabric." },
    { label: "Standard MOQ", range: "150–300 units per style", context: "Common threshold for most mid-tier factories. Per-unit cost begins to improve meaningfully.", note: "Most flexible in terms of factory options and fabric access." },
    { label: "Bulk / Wholesale MOQ", range: "300–1,000+ units per style", context: "Unlocks significantly better per-unit economics. Preferred by established brands placing repeat orders.", note: "Fabric minimums at mill level often drive this threshold." },
  ];

  const faqs = [
    {
      q: "Why do clothing manufacturers have minimum order quantities?",
      a: "MOQs exist because garment production has substantial fixed costs that do not scale linearly — pattern making, sampling, factory setup, and machine changeover all happen regardless of whether 50 or 500 units are produced. A minimum order ensures the factory can operate economically.",
    },
    {
      q: "Does low MOQ mean lower quality?",
      a: "Not necessarily. MOQ is a volume threshold, not a quality standard. A well-managed small-batch production run with proper QC can produce the same quality as a large bulk order. However, some high-quality specialty fabrics require mill minimums that make very small orders impractical.",
    },
    {
      q: "What is Fenalt's minimum order quantity?",
      a: "Fenalt supports production options starting from 50 units per style for qualifying capsule or pilot projects, depending on fabric type and design complexity. Standard tier production typically starts at 100–300 units per style, with bulk runs at 500+ units.",
    },
    {
      q: "How does MOQ affect unit cost?",
      a: "Smaller orders have higher per-unit costs because fixed production costs (setup, pattern making, sampling, fabric handling) are spread across fewer units. As order volume increases, per-unit cost decreases. The cost curve typically flattens significantly above 300–500 units.",
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

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Low MOQ & Startups</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Does Low MOQ Mean{" "}
            <span className="italic font-medium text-[#2D5016]">in Clothing Manufacturing?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            MOQ — minimum order quantity — is one of the first terms every new fashion brand encounters. Understanding what it means, why it exists, and how it affects cost is fundamental to planning a production project.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1A1A1A] text-[#FAF9F6] p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Definition</p>
            <p className="font-display text-2xl lg:text-3xl font-light leading-relaxed">
              MOQ (Minimum Order Quantity) is the smallest number of units a manufacturer is willing to produce in a single production run. &ldquo;Low MOQ&rdquo; refers to manufacturers that accept smaller production runs — typically under 300 units per style — making them accessible to startups and emerging brands.
            </p>
          </div>
        </div>
      </section>

      {/* Why MOQs exist */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Reason</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-6">Why Do Factories Set MOQs?</h2>
          <div className="space-y-4 text-base text-[#E5DDD3] leading-relaxed">
            <p>Every production run has fixed costs that don&apos;t scale with volume: pattern making, sampling, machine setup and changeover, fabric dye-lot minimums at the mill level, and factory floor scheduling. A factory producing 50 garments must bear almost the same setup costs as one producing 500.</p>
            <p>MOQs exist to ensure those fixed costs can be spread across enough units for production to be economically viable for the factory — and for per-unit pricing to remain competitive for the brand.</p>
            <p>Low-MOQ factories have typically structured their operations to absorb these setup costs differently — often through premium per-unit pricing, smaller-scale equipment, or aggregated orders across multiple brands.</p>
          </div>
        </div>
      </section>

      {/* MOQ ranges */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Reference Guide</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">MOQ Ranges in Practice</h2>
          <div className="space-y-4">
            {moqRanges.map((range, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <span className="font-display text-xl font-medium text-[#1A1A1A]">{range.label}</span>
                  <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">{range.range}</span>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-2">{range.context}</p>
                <p className="text-xs text-[#9B948E] italic">{range.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Fashion Brand Produce?" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Can Prepare for Their First Production Run" },
              { href: "/low-moq-apparel-manufacturing", label: "Fenalt: Low MOQ Apparel Manufacturing" },
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Production options from 50 units per style</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt supports qualifying capsule and pilot projects with production starting from 50 units per style, depending on fabric and design complexity.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
