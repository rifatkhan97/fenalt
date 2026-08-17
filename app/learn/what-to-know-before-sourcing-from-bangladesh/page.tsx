import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check",
  description:
    "Essential pre-sourcing guidance for fashion brands entering Bangladesh - understanding MOQs, lead times, GSP duty-free trade rules, compliance certificates, and deposit payment terms.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
  },
  openGraph: {
    title: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check",
    description:
      "Essential pre-sourcing guidance for fashion brands entering Bangladesh - understanding MOQs, lead times, GSP duty-free trade rules, compliance certificates, and deposit payment terms.",
    url: "https://www.fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
  },
};

export default function WhatToKnowBeforeSourcingFromBangladeshPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check",
    description:
      "A strategic pre-sourcing checklist for international clothing brands planning production in Bangladesh.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
    mainEntityOfPage: "https://www.fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What to Know Before Sourcing Bangladesh", item: "https://www.fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh" },
    ],
  };

  const insights = [
    {
      title: "1. Duty-Free Trade Preferences (GSP / DCTS / Everything But Arms)",
      desc: "UK, European Union, Canadian, and Australian fashion brands enjoy 0% import duty status under preferential trade frameworks when importing garments manufactured in Bangladesh.",
    },
    {
      title: "2. Sample vs Bulk Production Lead Time Realities",
      desc: "Prototype sampling takes 10 to 14 days; custom fabric milling and bulk cut-and-sew production require 30 to 45 days post-deposit and PP sample sign-off.",
    },
    {
      title: "3. Factory Compliance Certification Standards (RSC / BSCI)",
      desc: "Ensure your production factory holds active RMG Sustainability Council (RSC) structural safety compliance, along with BSCI, SEDEX, or WRAP social audit credentials.",
    },
    {
      title: "4. Standard International Commercial Payment Terms",
      desc: "Overseas transactions operate via Telegraphic Transfer (T/T 30% deposit / 70% post-FRI passed inspection balance) or Letter of Credit (L/C) for large container orders.",
    },
    {
      title: "5. Yarn Sourcing & Vertical Fabric Milling Depth",
      desc: "Bangladesh offers direct access to premium combed ring-spun cotton from Indian and US spinning mills, providing superior fabric hand-feel and low pilling.",
    },
    {
      title: "6. On-the-Ground Local Technical Liaison Advantage",
      desc: "Partnering with a Dhaka-based liaison team (like Fenalt) bridges time zones and language gaps - enforcing AQL 2.5 quality control directly on the factory floor.",
    },
  ];

  const preCheckMatrix = [
    { category: "Import Duty Rates", globalStandard: "12% – 32% tariff in US/EU", bangladeshAdvantage: "0% Duty for UK, EU, Canada, & Australia (GSP/DCTS)" },
    { category: "Fabric Availability", globalStandard: "Open-market stock rolls", bangladeshAdvantage: "Custom Pantone vat dyeing & custom GSM knitting" },
    { category: "Sampling Lead Time", globalStandard: "3 to 4 weeks", bangladeshAdvantage: "10 to 14 days with Dhaka liaison team" },
    { category: "QC Protocol", globalStandard: "End-of-line visual check", bangladeshAdvantage: "ANSI/ASQ Z1.4 AQL 2.5 FRI audit + Needle Detection" },
  ];

  const faqs = [
    {
      q: "Do UK and EU fashion brands pay import tariffs on clothing from Bangladesh?",
      a: "No! UK and EU fashion brands benefit from 0% import tariff rates under the Developing Countries Trading Scheme (DCTS) and GSP rules of origin.",
    },
    {
      q: "What is the typical ocean shipping transit time from Bangladesh to the US or Europe?",
      a: "Ocean shipping from Chittagong port to European ports (Rotterdam, Hamburg, Felixstowe) takes 25 to 30 days. Ocean shipping to US East Coast ports takes 30 to 35 days.",
    },
    {
      q: "Can small fashion brands access low MOQs in Bangladesh?",
      a: "Yes! Modern sourcing partners like Fenalt connect independent labels to audited partner micro-factories in Dhaka, enabling trial production runs starting at 50 to 100 units.",
    },
    {
      q: "What is the RSC in Bangladesh apparel manufacturing?",
      a: "RSC stands for RMG Sustainability Council. It is the national safety organization that inspects and enforces structural, electrical, and fire safety across export garment factories in Bangladesh.",
    },
    {
      q: "What currency is used for invoicing garment production in Bangladesh?",
      a: "All international export transactions and quotes in Bangladesh are conducted in US Dollars (USD).",
    },
    {
      q: "How does Fenalt help international brands source from Bangladesh?",
      a: "Fenalt operates as your on-the-ground technical team in Dhaka - managing fabric development, lab-dips, sample approvals, inline Traffic Light QC, and AQL 2.5 export inspections.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Bangladesh &amp; International</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What to Know Before{" "}
            <span className="italic font-medium text-[#2D5016]">Sourcing From Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Essential pre-sourcing guidance for fashion brands entering Bangladesh - understanding MOQs, lead times, GSP duty-free trade rules, compliance certificates, and deposit payment terms.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Sourcing Pre-Flight</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Proper preparation unlocks <strong className="font-medium">duty-free trade savings, premium cotton quality, and fast shipping turnaround</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Sourcing apparel from Bangladesh offers significant commercial advantages for fashion brands. Understanding duty-free trade agreements (GSP/DCTS), realistic fabric milling lead times, international compliance certificates (RSC/BSCI), and standard deposit milestones ensures a smooth, risk-free manufacturing rollout.
          </p>
        </div>
      </section>

      {/* 6 Insights */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Pre-Sourcing Guide</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Mandatory Facts to Know Before Sourcing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((ins, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{ins.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{ins.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Check Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Trade Advantage</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Bangladesh Sourcing Pre-Check Benchmark Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Evaluation Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Global Industry Standard</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Bangladesh Competitive Advantage</th>
                </tr>
              </thead>
              <tbody>
                {preCheckMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.category}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.globalStandard}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-semibold">{row.bangladeshAdvantage}</td>
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
              { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", label: "How Apparel Manufacturing in Bangladesh Works" },
              { href: "/learn/how-international-clothing-production-is-coordinated", label: "How International Production Is Coordinated" },
              { href: "/learn/what-happens-after-clothing-manufactured-overseas", label: "What Happens After Clothing Is Manufactured" },
              { href: "/learn/overseas-apparel-production-checklist", label: "Overseas Apparel Production Checklist" },
              { href: "/learn/how-to-communicate-with-overseas-suppliers", label: "How to Communicate With Overseas Suppliers" },
              { href: "/apparel-production-management", label: "Fenalt Bangladesh Sourcing Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Start your Bangladesh sourcing journey</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt guides brands through duty-free tariffs, lab-dips, sampling, and AQL 2.5 production in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
