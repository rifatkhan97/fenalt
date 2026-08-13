import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Build a Long-Term Relationship With a Manufacturer",
  description:
    "Learn how fashion brands build strong supplier partnerships - production forecasting, timely deposit payments, clear tech packs, and mutual loyalty benefits.",
  alternates: {
    canonical: "https://fenalt.com/learn/build-long-term-relationship-clothing-manufacturer",
  },
  openGraph: {
    title: "How to Build a Long-Term Relationship With a Manufacturer",
    description:
      "Learn how fashion brands build strong supplier partnerships - production forecasting, timely deposit payments, clear tech packs, and mutual loyalty benefits.",
    url: "https://fenalt.com/learn/build-long-term-relationship-clothing-manufacturer",
  },
};

export default function BuildLongTermRelationshipClothingManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Build a Long-Term Relationship With a Manufacturer",
    description:
      "A strategic guide for apparel brand owners on fostering long-term factory partnerships, securing priority line allocation, and unlocking lower MOQs.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/build-long-term-relationship-clothing-manufacturer",
    mainEntityOfPage: "https://fenalt.com/learn/build-long-term-relationship-clothing-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Build Long-Term Manufacturer Relationship", item: "https://fenalt.com/learn/build-long-term-relationship-clothing-manufacturer" },
    ],
  };

  const practices = [
    {
      title: "1. Provide 6-Month Rolling Production Forecasts",
      desc: "Sharing seasonal sales projections 90 to 120 days in advance allows partner factories in Dhaka to reserve dedicated sewing lines and lock in raw greige yarn allocations at lower prices.",
    },
    {
      title: "2. Adhere Strictly to Commercial Payment Milestones",
      desc: "Clearing 30% production deposits promptly upon PO signing and paying 70% balances immediately upon passed AQL 2.5 FRI inspection builds deep financial trust with factory management.",
    },
    {
      title: "3. Deliver Clean, Standardized Tech Packs & POM Sheets",
      desc: "Providing precise vector artwork, clear ISO stitch codes, and unambiguous Point of Measure (POM) tables eliminates factory confusion and speeds up initial sampling cycles.",
    },
    {
      title: "4. Consolidate Base Fabrications Across Capsule Styles",
      desc: "Re-using core heavy fleece or jersey fabrics across multiple garment styles increases total mill fabric order volume, unlocking mill dyeing discounts and lower MOQ flexibility.",
    },
    {
      title: "5. Treat Factory Partners as Collaborative Supply Extensions",
      desc: "Engaging factory technical merchandisers for pattern advice early in development creates mutual ownership, leading to better production problem-solving when unexpected delays occur.",
    },
    {
      title: "6. Conduct Regular Season Alignment & Post-Production Reviews",
      desc: "Holding post-drop review meetings to evaluate sample lead times, defect rates, and freight logistics fosters continuous operational improvement season over season.",
    },
  ];

  const relationshipBenefitsMatrix = [
    { relationshipStage: "Initial One-Off Order", factoryPriority: "Standard line priority / Full standard MOQ", commercialTerms: "100% standard deposit / standard pricing" },
    { relationshipStage: "Repeat Client (Year 1–2)", factoryPriority: "Priority line allocation during peak season", commercialTerms: "10%–15% lower MOQs / flexible sampling credits" },
    { relationshipStage: "Strategic Long-Term Partner (3+ Years)", factoryPriority: "Guaranteed reserved capacity / Greige fabric holding", commercialTerms: "Preferential volume FOB pricing / custom developments" },
  ];

  const faqs = [
    {
      q: "What commercial benefits do brands unlock through long-term factory relationships?",
      a: "Long-term client brands receive priority sewing line allocation during peak production season, lower MOQs for experimental capsule drops, custom fabric development support, and faster sample turnaround times.",
    },
    {
      q: "Should a growing brand stick with one core manufacturer or spread orders across many?",
      a: "For small-to-medium fashion labels, concentrating order volume with 1 or 2 core factory partners builds leverage, superior quality consistency, and better per-unit FOB pricing compared to fragmenting volume.",
    },
    {
      q: "How does production forecasting help clothing manufacturers?",
      a: "Factories operate on tight line scheduling. Providing a 6-month rolling forecast allows the factory to order yarn from textile mills in advance, preventing raw material bottlenecks when bulk POs are issued.",
    },
    {
      q: "What is the best way to handle quality disputes without ruining a factory relationship?",
      a: "Address defects objectively using documented AQL 2.5 inspection reports and signed Golden PP Samples. Professional manufacturers respect empirical QC evidence and will repair or re-screen non-conforming garments.",
    },
    {
      q: "Why does consolidating fabric types improve supplier relationships?",
      a: "Textile mills require minimum fabric dyeing quantities (e.g. 300 kg per colorway). By using the same 450 GSM French Terry across hoodies, sweatpants, and shorts, you satisfy mill MOQs easily while lowering per-unit costs.",
    },
    {
      q: "How does Fenalt foster long-term factory partnerships in Bangladesh?",
      a: "Fenalt manages long-term relationships with audited partner micro-factories in Dhaka - providing clients with rolling capacity reservations, pre-screened fabric mills, and dedicated technical oversight.",
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
            How to Build a Long-Term{" "}
            <span className="italic font-medium text-[#2D5016]">Relationship With a Manufacturer.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Learn how fashion brands build strong supplier partnerships - production forecasting, timely deposit payments, clear tech packs, and mutual loyalty benefits.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Handshake size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Strategic Partnership</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Long-term supplier relationships unlock <strong className="font-medium">priority capacity, lower MOQs, and superior bulk quality</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Garment manufacturing is fundamentally a human business built on trust and operational reliability. Treating your factory as a strategic partner - providing rolling forecasts, paying deposit milestones promptly, delivering clear technical documentation, and consolidating fabrications - transforms transactional vendor interactions into a loyal, scalable supply chain.
          </p>
        </div>
      </section>

      {/* 6 Practices */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Partnership Blueprint</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Practices for Strong Manufacturer Relationships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practices.map((p, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{p.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Partnership Milestones</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Benefits of Long-Term Apparel Manufacturer Partnerships</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Relationship Tier</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Factory Line Priority</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Commercial &amp; MOQ Terms</th>
                </tr>
              </thead>
              <tbody>
                {relationshipBenefitsMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.relationshipStage}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.factoryPriority}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.commercialTerms}</td>
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
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturer" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/what-makes-a-good-apparel-manufacturing-partner", label: "What Makes a Good Manufacturing Partner" },
              { href: "/apparel-production-management", label: "Fenalt Long-Term Production Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Build a long-term supply chain partner</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt connects fashion brands with audited partner micro-factories in Dhaka - managing capacity, quality, and scaling for long-term success.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
