import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Reduce Risk When Launching a Clothing Collection",
  description:
    "A risk management framework for new apparel brands — covering pre-order models, fabric testing, milestone payments, and low MOQ trial runs.",
  alternates: {
    canonical: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
  },
  openGraph: {
    title: "How to Reduce Risk When Launching a Clothing Collection",
    description:
      "A risk management framework for new apparel brands — covering pre-order models, fabric testing, milestone payments, and low MOQ trial runs.",
    url: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
  },
};

export default function ReduceRiskWhenLaunchingClothingCollectionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Reduce Risk When Launching a Clothing Collection",
    description:
      "A strategic guide for clothing brand founders to mitigate financial, quality, and supply chain risks prior to collection launches.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
    mainEntityOfPage: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Reduce Risk When Launching", item: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection" },
    ],
  };

  const strategies = [
    {
      title: "1. Conduct Prototype Wear & Wash Testing",
      desc: "Do not approve a sample based purely on visual appearance on arrival. Put prototype samples through 10 commercial wash cycles and wear them for a week to catch fabric shrinkage, seam twisting, or dye fading before ordering bulk.",
    },
    {
      title: "2. Limit Initial SKU & Colorway Variations",
      desc: "Producing 3 styles in 4 colorways creates 12 distinct manufacturing pipelines. Stick to 1 or 2 core colorways (e.g. Black and Off-White) per style to maximize fabric yield efficiency and simplify inventory management.",
    },
    {
      title: "3. Implement Milestone-Based Factory Payments",
      desc: "Never pay 100% upfront for bulk production. Utilize industry-standard payment structures (e.g. 30%–50% deposit upon PO issuance, and remaining balance upon passed pre-shipment inspection).",
    },
    {
      title: "4. Mandate Pre-Shipment Quality Inspections",
      desc: "Incorporate third-party or dedicated in-factory AQL (Acceptable Quality Limit) inspections before goods leave the factory floor. Fixing defects at the origin factory is fast; handling returns in your home country is catastrophic.",
    },
  ];

  const faqs = [
    {
      q: "Is a pre-order model a good way to reduce inventory risk?",
      a: "Yes — provided your manufacturing timeline is guaranteed and clearly communicated to customers. Pre-orders allow you to finance bulk production directly from consumer sales.",
    },
    {
      q: "What is the single biggest financial risk for a new brand?",
      a: "Holding deadstock (unsold inventory) tied up in unpopular sizes or unproven styles, which drains working capital needed for marketing and subsequent releases.",
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
            How to Reduce Risk When{" "}
            <span className="italic font-medium text-[#2D5016]">Launching a Collection.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Launching a fashion collection involves financial, operational, and brand reputation risks. Protect your capital and brand with these proven risk-mitigation strategies.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Risk Management</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Risk reduction is about <strong className="font-medium">controlling variables before capital is committed</strong> — verifying fit, testing fabric stability, and staging payment terms.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Core Principles</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of Launch Risk Reduction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
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
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for Their First Production Run" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Fashion Brand Produce?" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/apparel-production-management", label: "Fenalt Production Management Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">De-risk your next collection drop</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt acts as your on-the-ground production partner — conducting rigorous sample testing and in-factory quality control to safeguard your capital.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
