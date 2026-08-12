import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Low MOQ vs Bulk Manufacturing: What Changes?",
  description:
    "Compare low minimum order quantity (MOQ) production against high-volume bulk apparel manufacturing - analyzing unit economics, fabric sourcing options, and turnarounds.",
  alternates: {
    canonical: "https://fenalt.com/learn/low-moq-vs-bulk-manufacturing",
  },
  openGraph: {
    title: "Low MOQ vs Bulk Manufacturing: What Changes?",
    description:
      "Compare low minimum order quantity (MOQ) production against high-volume bulk apparel manufacturing - analyzing unit economics, fabric sourcing options, and turnarounds.",
    url: "https://fenalt.com/learn/low-moq-vs-bulk-manufacturing",
  },
};

export default function LowMoqVsBulkManufacturingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Low MOQ vs Bulk Manufacturing: What Changes?",
    description:
      "A detailed comparison of small-batch vs bulk garment manufacturing across pricing, fabric choices, lead times, and risk management.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/low-moq-vs-bulk-manufacturing",
    mainEntityOfPage: "https://fenalt.com/learn/low-moq-vs-bulk-manufacturing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Low MOQ vs Bulk Manufacturing", item: "https://fenalt.com/learn/low-moq-vs-bulk-manufacturing" },
    ],
  };

  const comparisons = [
    { factor: "Per-Unit Cost", lowMoq: "Higher per unit due to lower fabric yield efficiency and setup costs.", bulk: "Lowest per unit as fixed setup costs spread over thousands of items." },
    { factor: "Fabric Sourcing Options", lowMoq: "Stock fabrics, ready-dyed mill colors, or mill minimum surcharges.", bulk: "Custom knit/weave, custom PMS Pantone dyeing, proprietary fabric blends." },
    { factor: "Upfront Capital Required", lowMoq: "Low ($1,500 – $5,000 range per production run).", bulk: "High ($20,000+ per production run)." },
    { factor: "Inventory & Liquidity Risk", lowMoq: "Minimal unsold stock risk; fast pivot potential.", bulk: "High capital tie-up; deadstock risk if sales slow." },
    { factor: "Lead Times & Flexibility", lowMoq: "Faster development and cutting cycles.", bulk: "Longer mill weaving and line allocation queues." },
  ];

  const faqs = [
    {
      q: "When should a brand transition from low MOQ to bulk production?",
      a: "Transition when sell-through rate exceeds 85% within 30 days of launch, and when projected demand consistently outpaces your current stock inventory.",
    },
    {
      q: "Is quality lower in low MOQ production compared to bulk?",
      a: "Not when working with micro-factories equipped with specialized single-needle and flatlock machinery. Craftsmanship in small batches is often equal or superior to high-speed automation.",
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
            Low MOQ vs Bulk Manufacturing:{" "}
            <span className="italic font-medium text-[#2D5016]">What Changes?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Choosing between low minimum order quantity production and traditional high-volume manufacturing is a trade-off between margin efficiency and cash-flow agility.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Trade-Off Evaluation</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Low MOQ manufacturing prioritizes <strong className="font-medium">risk reduction and capital agility</strong>, while bulk manufacturing prioritizes <strong className="font-medium">maximum margin per unit sold</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Direct Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Key Operational Differences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{c.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Low MOQ (50–300 units)</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{c.lowMoq}</p>
                  </div>
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Bulk (1,000+ units)</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{c.bulk}</p>
                  </div>
                </div>
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
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Fashion Brand Produce?" },
              { href: "/learn/how-to-scale-clothing-production", label: "How to Scale Clothing Production After a Successful First Run" },
              { href: "/small-batch-clothing-manufacturer", label: "Fenalt Small-Batch Garment Sourcing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Flexible manufacturing solutions</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt bridges small-batch flexibility and bulk production scalability for growing fashion brands.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
