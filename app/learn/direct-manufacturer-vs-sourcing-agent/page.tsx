import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide",
  description:
    "Evaluate whether to work directly with a clothing factory or partner with a sourcing agent — comparing communication overhead, MOQ flexibility, quality control, and unit economics.",
  alternates: {
    canonical: "https://fenalt.com/learn/direct-manufacturer-vs-sourcing-agent",
  },
  openGraph: {
    title: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide",
    description:
      "Evaluate whether to work directly with a clothing factory or partner with a sourcing agent — comparing communication overhead, MOQ flexibility, quality control, and unit economics.",
    url: "https://fenalt.com/learn/direct-manufacturer-vs-sourcing-agent",
  },
};

export default function DirectManufacturerVsSourcingAgentPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide",
    description:
      "A strategic comparison for apparel founders on choosing between direct factory partnerships and full-service sourcing agents.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/direct-manufacturer-vs-sourcing-agent",
    mainEntityOfPage: "https://fenalt.com/learn/direct-manufacturer-vs-sourcing-agent",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Direct Manufacturer vs Sourcing Agent", item: "https://fenalt.com/learn/direct-manufacturer-vs-sourcing-agent" },
    ],
  };

  const comparisons = [
    {
      factor: "1. Communication & Technical Translation Overhead",
      direct: "Requires direct communication with overseas factory merchandisers across time zones. Demands deep internal technical garment knowledge from the brand.",
      agent: "Bilingual technical account managers manage tech pack translation, factory floor negotiations, daily photo updates, and pattern revisions.",
    },
    {
      factor: "2. MOQ Access & Production Flexibility",
      direct: "High factory MOQs (typically 500 to 1,000 units per colorway for direct mill lines), limiting startup collection breadth.",
      agent: "Leverages multi-brand aggregated volume to secure lower factory MOQs (50 to 100 units starting tiers per style).",
    },
    {
      factor: "3. Quality Control (QC) & Inspection Oversight",
      direct: "Brand must hire independent third-party QC auditors (SGS, QIMA) for inline and pre-shipment inspections, or risk un-inspected shipments.",
      agent: "In-house technical inspectors manage pattern checks, fabric 4-point tests, inline Traffic Light audits, and FRI inspections.",
    },
    {
      factor: "4. Unit Cost vs Total Cost of Ownership",
      direct: "Lowest initial FOB per-unit factory cost, but carries higher travel, third-party audit, and travel risk costs.",
      agent: "Modest service fee integrated into unit price, but eliminates audit costs, travel expenses, and re-work loss risks.",
    },
    {
      factor: "5. Risk Management & Defect Liability",
      direct: "Brand absorbs financial loss if bulk production arrives defective or delayed, with limited legal recourse against overseas factories.",
      agent: "Sourcing partner acts as legal counterparty, absorbing rework costs or providing credit guarantees for failed AQL inspections.",
    },
    {
      factor: "6. End-to-End Shipping & Freight Logistics",
      direct: "Brand manages export clearance, customs documentation, ocean/air freight booking, and duty payments independently.",
      agent: "Manages full supply chain logistics, delivering finished goods FOB, CIF, or DDP directly to destination warehouses.",
    },
  ];

  const channelMatrix = [
    { brandStage: "Early-Stage Startup (50–300 Units)", recommendedChannel: "Full-Service Sourcing Partner", keyReason: "Low MOQ access, zero tech pack errors, local QC." },
    { brandStage: "Scaling Growth Brand (500–2,000 Units)", recommendedChannel: "Hybrid Production Liaison (Fenalt)", keyReason: "Custom mill fabrics, transparent FOB, AQL 2.5." },
    { brandStage: "Established Enterprise (10,000+ Units)", recommendedChannel: "Direct Factory Contract", keyReason: "Dedicated sewing lines, maximum volume margin discount." },
  ];

  const faqs = [
    {
      q: "Which option is best for a first-time fashion brand founder?",
      a: "A full-service sourcing partner or hybrid production liaison is ideal for first-time founders — providing technical design guidance, low MOQ factory access, and local QC oversight without overseas travel.",
    },
    {
      q: "Can a sourcing agent handle customs clearance and ocean freight?",
      a: "Yes! Full-service sourcing partners manage end-to-end logistics — handling export customs clearance in Dhaka and arranging DDP delivery directly to your destination warehouse.",
    },
    {
      q: "Does working with a sourcing agent cost more than going direct?",
      a: "While direct FOB factory prices appear 10% to 15% lower on paper, going direct requires paying separately for third-party QC audits, travel, freight brokers, and absorbing 100% of defect risks.",
    },
    {
      q: "How do I know if a sourcing agent is a legitimate partner or just a middleman broker?",
      a: "A legitimate sourcing partner has dedicated technical staff and QC inspectors physically stationed on factory floors in manufacturing hubs like Dhaka — providing daily photo reports and transparent itemized pricing.",
    },
    {
      q: "Can I transition from a sourcing agent to direct factory contracts as I scale?",
      a: "Yes. Many growing brands start with a sourcing partner to establish tech packs and initial drops (50–500 units), then scale into dedicated direct factory sewing lines once volumes reach 2,000+ units.",
    },
    {
      q: "How does Fenalt combine direct factory pricing with sourcing oversight in Bangladesh?",
      a: "Fenalt operates as a hybrid production management partner in Dhaka — giving brands direct access to audited partner micro-factories, transparent itemized quotes, low MOQs, and full AQL 2.5 quality control.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Supplier Selection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Direct Manufacturer vs{" "}
            <span className="italic font-medium text-[#2D5016]">Sourcing Agent: Channel Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Evaluate whether to work directly with an overseas clothing factory or partner with a sourcing agent — comparing communication overhead, MOQ flexibility, quality control, and unit economics.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Users size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Sourcing Model Comparison</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Choosing between direct factories and sourcing partners depends on your <strong className="font-medium">order volume, technical apparel expertise, and risk tolerance</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Selecting the right supply chain route is one of the most impactful decisions for a fashion brand. Working directly with factories offers maximum volume margin, but requires extensive technical knowledge and independent QC audits. Partnering with a production management liaison provides low MOQs, bilingual communication, and on-the-ground quality control.
          </p>
        </div>
      </section>

      {/* 6 Comparisons */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Channel Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Differences: Direct Factory vs Sourcing Partner</h2>
          <div className="space-y-6">
            {comparisons.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{c.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] p-4 border border-[#333333]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-2">Direct Factory Contract</p>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.direct}</p>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 border border-[#333333]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5016] mb-2">Sourcing Partner / Liaison</p>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.agent}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Choice Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Decision Framework</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Sourcing Channel Selection Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Brand Growth Stage</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Recommended Sourcing Channel</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Key Strategic Rationale</th>
                </tr>
              </thead>
              <tbody>
                {channelMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.brandStage}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.recommendedChannel}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.keyReason}</td>
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
              { href: "/learn/clothing-manufacturer-vs-sourcing-agent", label: "Clothing Manufacturer vs Sourcing Agent" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/apparel-production-management-services", label: "Fenalt Production Management Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Streamline your overseas sourcing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt acts as your local technical team in Dhaka — managing partner micro-factories, sampling, and AQL 2.5 quality control.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
