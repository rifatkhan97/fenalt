import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Low MOQ vs Bulk Manufacturing: What Changes?",
  description:
    "Compare low minimum order quantity (MOQ) production against high-volume bulk apparel manufacturing - analyzing unit economics, fabric sourcing options, lead times, and inventory risk.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/low-moq-vs-bulk-manufacturing",
  },
  openGraph: {
    title: "Low MOQ vs Bulk Manufacturing: What Changes?",
    description:
      "Compare low minimum order quantity (MOQ) production against high-volume bulk apparel manufacturing - analyzing unit economics, fabric sourcing options, lead times, and inventory risk.",
    url: "https://www.fenalt.com/learn/low-moq-vs-bulk-manufacturing",
  },
};

export default function LowMoqVsBulkManufacturingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Low MOQ vs Bulk Manufacturing: What Changes?",
    description:
      "A detailed comparison of small-batch vs bulk garment manufacturing across pricing, fabric choices, lead times, and risk management.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/low-moq-vs-bulk-manufacturing",
    mainEntityOfPage: "https://www.fenalt.com/learn/low-moq-vs-bulk-manufacturing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Low MOQ vs Bulk Manufacturing", item: "https://www.fenalt.com/learn/low-moq-vs-bulk-manufacturing" },
    ],
  };

  const comparisons = [
    { factor: "Per-Unit FOB Cost", lowMoq: "15% – 35% higher per unit due to unamortized setup costs and fabric yields.", bulk: "Lowest unit cost; maximum efficiency as fixed setup costs spread over 1,000+ units." },
    { factor: "Fabric Sourcing & Dyeing", lowMoq: "In-stock mill fabrics, standard mill colors, or small-batch custom surcharges.", bulk: "Custom lab dip Pantone dyeing, custom knit GSM, proprietary fabric blends." },
    { factor: "Upfront Capital Required", lowMoq: "Low capital investment ($2,000 – $8,000 per production drop).", bulk: "High capital commitment ($25,000 – $100,000+ per order run)." },
    { factor: "Inventory & Deadstock Risk", lowMoq: "Minimal deadstock exposure; rapid market demand testing.", bulk: "High capital tie-up; significant markdown risk if styles underperform." },
    { factor: "Production Lead Times", lowMoq: "Faster 4 to 6 week turnaround (utilizing available stock fabrics).", bulk: "Longer 8 to 12 week turnaround (requiring mill knitting and lab dips)." },
    { factor: "Custom Hardware & Packaging", lowMoq: "Standard hardware or stock-printed care labels & woven neck tags.", bulk: "Fully custom metal aglets, embossed buttons, custom polybags & boxes." },
  ];

  const faqs = [
    {
      q: "When should an emerging fashion brand transition from low MOQ to bulk production?",
      a: "Transition to bulk production when sell-through rates exceed 85% within 30 days of launch, when your cash flow can fund larger inventory commitments, and when projected demand consistently outpaces your current small-batch stock.",
    },
    {
      q: "Is garment quality lower in low MOQ production compared to bulk manufacturing?",
      a: "No. Small-batch micro-factories equipped with experienced sample sewers and flatlock machinery often achieve higher attention to detail per garment than automated high-speed bulk assembly lines. Quality depends on factory QC enforcement, not batch size.",
    },
    {
      q: "Can I get custom Pantone colors with a low MOQ order?",
      a: "Custom Pantone dyeing typically requires fabric mill dye-lot minimums of 300 to 500 meters. However, brands ordering low MOQs can either pay a mill dye surcharge or choose from rich curated stock color libraries.",
    },
    {
      q: "How does Fenalt support both low MOQ and bulk scaling in Bangladesh?",
      a: "Fenalt operates dedicated small-batch sampling and pilot sewing lines starting at 50 to 100 units per style in Dhaka, while seamlessly scaling high-performing styles into partner micro-factories producing 1,000+ unit bulk runs.",
    },
    {
      q: "Why do low MOQ orders have a higher price per garment?",
      a: "Low MOQ orders carry higher per-unit pricing because fixed production setup expenses - such as CAD pattern grading, marker making, cutting table setup, screen printing frame preparation, and machine thread changes - are distributed across fewer units.",
    },
    {
      q: "What is the safest strategy for launching an inaugural clothing collection?",
      a: "Launch with a tight 3 to 4 piece capsule collection produced in low MOQs (50 to 100 units per style). Validate customer fit feedback, build cash reserves, and reinvest profits into bulk reorders of proven hero items.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Low MOQ &amp; Startups</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Low MOQ vs Bulk{" "}
            <span className="italic font-medium text-[#2D5016]">Manufacturing: What Changes?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A comprehensive breakdown of small-batch vs bulk apparel manufacturing - comparing unit economics, fabric choices, lead times, and financial risk.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Strategic Comparison</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Low MOQ manufacturing trades higher per-unit costs for <strong className="font-medium">drastically reduced capital exposure and zero deadstock risk</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Choosing between small-batch low MOQ production (50 to 100 units per style) and high-volume bulk production (500 to 1,000+ units) is the most critical financial decision a fashion brand makes. While bulk manufacturing unlocks lower unit costs and custom fabric dyeing, low MOQ manufacturing protects emerging brands from over-investing in unproven inventory.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Direct Comparison</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Low MOQ vs Bulk Manufacturing Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Evaluation Criterion</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Low MOQ (50–100 Units)</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Bulk Production (500–1,000+ Units)</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.factor}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.lowMoq}</td>
                    <td className="p-4 text-sm text-[#1A1A1A] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.bulk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
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
              { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean in Clothing Manufacturing?" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Brand Produce?" },
              { href: "/learn/reduce-risk-when-launching-clothing-collection", label: "How to Reduce Risk When Launching a Collection" },
              { href: "/learn/how-to-scale-clothing-production", label: "How to Scale Clothing Production Efficiently" },
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Impacts Manufacturing Cost" },
              { href: "/low-moq-apparel-manufacturing", label: "Fenalt Low MOQ Production Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Start with low MOQs, scale into bulk</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manufactures small-batch pilot runs starting at 50 units per style, with seamless scaling into bulk production in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
