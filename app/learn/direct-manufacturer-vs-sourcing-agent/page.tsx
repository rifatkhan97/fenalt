import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide",
  description:
    "Evaluate whether to work directly with a clothing factory or partner with a sourcing agent — comparing communication overhead, MOQ flexibility, and quality control.",
  alternates: {
    canonical: "https://fenalt.com/learn/direct-manufacturer-vs-sourcing-agent",
  },
  openGraph: {
    title: "Direct Manufacturer vs Sourcing Agent: Channel Choice Guide",
    description:
      "Evaluate whether to work directly with a clothing factory or partner with a sourcing agent — comparing communication overhead, MOQ flexibility, and quality control.",
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
    { factor: "Communication Bridge", direct: "Direct contact with factory merchandiser. Requires technical apparel knowledge from the brand.", agent: "Bilingual account manager manages tech pack translation, factory negotiations, and daily updates." },
    { factor: "MOQ Access & Flexibility", direct: "High factory MOQs (often 500–1,000 units per colorway for direct mill lines).", agent: "Leverages multi-brand volume to secure lower factory MOQs (50–100 units)." },
    { factor: "Quality Control Oversight", direct: "Brand must hire independent third-party QC auditors for inline and final inspections.", agent: "In-house QC inspectors manage pattern checking, inline audits, and FRI inspections." },
    { factor: "Pricing Structure", direct: "Lowest per-unit FOB cost; requires higher volume commitment.", agent: "Modest management margin included; saves brand time and travel costs." },
  ];

  const faqs = [
    {
      q: "Which option is best for a first-time fashion brand founder?",
      a: "A full-service sourcing partner or hybrid manufacturing agent is ideal for first-time founders, providing technical design guidance and low MOQ factory access.",
    },
    {
      q: "Can a sourcing partner handle customs clearance and freight?",
      a: "Yes! Full-service sourcing partners manage end-to-end logistics, shipping FOB, CIF, or DDP directly to your warehouse.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Strategy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Direct Manufacturer vs Sourcing Agent:{" "}
            <span className="italic font-medium text-[#2D5016]">Channel Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Deciding whether to manage direct factory relationships or work through a dedicated sourcing partner dictates your supply chain workload and execution speed.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Supply Chain Channel</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Direct factory management</strong> provides raw FOB pricing at high volume; <strong className="font-medium">sourcing partners eliminate language barriers, manage QC, and unlock low MOQs</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Channel Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Operational Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{c.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Direct Factory</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{c.direct}</p>
                  </div>
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Sourcing Agent / Partner</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{c.agent}</p>
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
              { href: "/learn/clothing-manufacturer-vs-sourcing-agent", label: "Clothing Manufacturer vs Sourcing Agent" },
              { href: "/garment-sourcing-agent-bangladesh", label: "Fenalt Sourcing Agent Services Bangladesh" },
              { href: "/buying-sourcing-partner-bangladesh", label: "Buying & Sourcing Partner Bangladesh" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Hybrid manufacturing partner in Dhaka</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt combines direct manufacturing ownership with full-service sourcing management — providing low MOQs and dedicated English support.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
