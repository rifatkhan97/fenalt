import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check",
  description:
    "Essential pre-sourcing guidance for fashion brands entering Bangladesh - understanding MOQs, lead times, GSP trade preferences, compliance certifications, and payment methods.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
  },
  openGraph: {
    title: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check",
    description:
      "Essential pre-sourcing guidance for fashion brands entering Bangladesh - understanding MOQs, lead times, GSP trade preferences, compliance certifications, and payment methods.",
    url: "https://fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
  },
};

export default function WhatToKnowBeforeSourcingFromBangladeshPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Know Before Sourcing From Bangladesh: Brand Pre-Check",
    description:
      "A strategic pre-sourcing checklist for international clothing brands planning production in Bangladesh.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
    mainEntityOfPage: "https://fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What to Know Before Sourcing Bangladesh", item: "https://fenalt.com/learn/what-to-know-before-sourcing-from-bangladesh" },
    ],
  };

  const insights = [
    { title: "1. Duty-Free Trade Preferences (GSP / Everything But Arms)", desc: "UK, European Union, Canadian, and Australian brands enjoy duty-free import status under trade preference frameworks." },
    { title: "2. Sample vs Bulk Lead Time Expectations", desc: "Prototype sampling takes 10 to 14 days; bulk knitwear production requires 45 to 60 days from deposit and PP sample sign-off." },
    { title: "3. Factory Compliance Certification Standards", desc: "Ensure your production factory holds active BSCI, SEDEX 4-Pillar, or WRAP certifications before placing deposit funds." },
    { title: "4. Standard International Payment Terms", desc: "Overseas transactions are conducted via Telegraphic Transfer (T/T 30% deposit / 70% post-FRI balance) or Letter of Credit (L/C)." },
  ];

  const faqs = [
    {
      q: "Do UK and EU brands pay import tariffs on Bangladesh clothing?",
      a: "No! UK and EU importers benefit from 0% duty tariffs under GSP and Developing Countries Trading Scheme (DCTS) rules of origin.",
    },
    {
      q: "What is the minimum lead time for shipping cargo from Bangladesh to the US East Coast?",
      a: "Ocean shipping from Chittagong port to US East Coast ports (NY/NJ, Savannah) typically takes 28 to 35 transit days.",
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
            What to Know Before Sourcing{" "}
            <span className="italic font-medium text-[#2D5016]">From Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sourcing garments from Bangladesh offers unbeatable value and quality. Review the essential pre-flight requirements regarding duty, lead times, and compliance.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Pre-Sourcing Checklist</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Before placing orders in Bangladesh, understand <strong className="font-medium">duty-free GSP benefits, 45-60 day production lead times, and certified factory compliance</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Core Knowledge</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Key Factors Before Sourcing</h2>
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
              { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", label: "How Apparel Manufacturing in Bangladesh Works" },
              { href: "/uk-apparel-import-considerations", label: "UK Apparel Import Considerations" },
              { href: "/usa-apparel-import-considerations", label: "USA Apparel Import Considerations" },
              { href: "/learn/overseas-apparel-production-checklist", label: "Overseas Apparel Production Checklist" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Seamless overseas garment production</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt guides international clothing brands through every step of Bangladesh apparel sourcing - from tech pack development to customs clearance.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
