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
    description: "MOQ (minimum order quantity) explained - what it means, why factories set MOQs, and what low MOQ means for small fashion brands.",
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
    { label: "Sample / Prototype", range: "1–10 units", context: "For fit, fabric, and quality approval before production. Not priced for retail economics.", note: "A pre-production development stage, not a bulk run." },
    { label: "Low MOQ Production", range: "50–100 units per style", context: "Accessible for startups, capsule collections, and pilot runs. Minimizes dead inventory risk.", note: "Fenalt supports production starting at 50 to 100 units per style for qualifying projects in Dhaka." },
    { label: "Standard MOQ", range: "150–300 units per style", context: "Common threshold for mid-tier garment factories. Per-unit manufacturing costs drop noticeably.", note: "Unlocks standard mill stock colors and fabrics." },
    { label: "Bulk / Wholesale MOQ", range: "500–1,000+ units per style", context: "Unlocks maximum per-unit economics and custom mill fabric dyeing.", note: "Fabric mill minimums drive bulk tier pricing." },
  ];

  const faqs = [
    {
      q: "Why do clothing manufacturers enforce minimum order quantities (MOQs)?",
      a: "Garment manufacturing involves fixed setup costs - CAD pattern grading, marker making, fabric cutting table layout, screen printing frame preparation, and machine thread changeovers - that occur regardless of whether 50 or 500 units are produced. MOQs ensure those fixed setup costs are absorbed economically.",
    },
    {
      q: "Does low MOQ production mean lower garment quality?",
      a: "No. MOQ is a volume threshold, not a quality measurement. A dedicated small-batch production run audited under AQL 2.5 standards achieves identical stitch density, fabric weight, and construction quality as a 10,000-unit factory order.",
    },
    {
      q: "What is Fenalt's minimum order quantity in Bangladesh?",
      a: "Fenalt supports emerging fashion brands with low minimum order quantities starting at 50 to 100 units per style in Dhaka, depending on fabric availability and design complexity.",
    },
    {
      q: "How does low MOQ affect unit cost compared to bulk production?",
      a: "Producing 50 to 100 units per style carries a 15% to 30% higher per-unit FOB cost than producing 1,000 units, because fixed setup expenses are distributed across fewer garments. However, low MOQ drastically reduces total capital required and inventory risk.",
    },
    {
      q: "Can I split a low MOQ of 100 units across different sizes and colors?",
      a: "Size splitting across standard runs (e.g. S to XL) is standard within a 100-unit MOQ. However, splitting colors usually requires meeting minimum fabric dye-lot thresholds (typically 50 to 100 units per colorway).",
    },
    {
      q: "What is the difference between factory MOQ and fabric mill MOQ?",
      a: "Factory MOQ is the minimum number of garments a sewing line will assemble. Fabric mill MOQ is the minimum length of fabric a textile mill will dye or knit (often 300 to 500 meters). Utilizing factory stock fabrics allows brands to bypass mill MOQs.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Low MOQ &amp; Startups</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Does Low MOQ Mean{" "}
            <span className="italic font-medium text-[#2D5016]">in Clothing Manufacturing?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            MOQ stands for minimum order quantity. Learn what low MOQ means in garment production, why it matters for emerging brands, and how it affects cost, sampling, and inventory risk.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Economics */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider mb-4">Production Economics</span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-6">Why Factories Set Minimum Order Quantities</h2>
          <div className="space-y-4 text-base text-[#E5DDD3] leading-relaxed">
            <p>Every apparel production run carries fixed setup costs that do not change with volume: digital pattern grading, marker making, spreading cutting tables, screen printing frame alignment, and sewing line machine thread setup. A factory sewing 50 garments incurs nearly the same initial setup labor as one sewing 500.</p>
            <p>MOQs exist so factories can distribute fixed setup costs across sufficient unit volume, ensuring commercial viability for the manufacturer while keeping per-unit pricing reasonable for the fashion brand.</p>
            <p>Low-MOQ specialized supply chains restructure operations to absorb setup costs efficiently - through modular sewing lines, organized stock fabric libraries, and optimized multi-style batch scheduling.</p>
          </div>
        </div>
      </section>

      {/* MOQ ranges */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Reference Guide</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">MOQ Ranges in Garment Production</h2>
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

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Brand Produce?" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for First Production Run" },
              { href: "/learn/how-to-plan-small-batch-apparel-launch", label: "How to Plan a Small-Batch Apparel Launch" },
              { href: "/learn/reduce-risk-when-launching-clothing-collection", label: "How to Reduce Risk When Launching a Collection" },
              { href: "/low-moq-apparel-manufacturing", label: "Fenalt Low MOQ Manufacturing Services in Dhaka" },
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
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Production options from 50 units per style</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt supports startup and capsule collections with custom manufacturing starting at 50 to 100 units per style in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
