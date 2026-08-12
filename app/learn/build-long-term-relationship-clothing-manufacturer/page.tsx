import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Build a Long-Term Relationship With a Manufacturer",
  description:
    "Learn how fashion brands build strong supplier partnerships — production forecasting, timely deposit payments, clear tech packs, and mutual loyalty benefits.",
  alternates: {
    canonical: "https://fenalt.com/learn/build-long-term-relationship-clothing-manufacturer",
  },
  openGraph: {
    title: "How to Build a Long-Term Relationship With a Manufacturer",
    description:
      "Learn how fashion brands build strong supplier partnerships — production forecasting, timely deposit payments, clear tech packs, and mutual loyalty benefits.",
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
    { title: "1. Provide 6-Month Rolling Production Forecasts", desc: "Sharing projected order volumes early allows factories to reserve sewing line capacity and secure raw yarn allocations in advance." },
    { title: "2. Adhere Strictly to Payment Milestones", desc: "Paying 30% production deposits and 70% post-FRI balances promptly builds deep financial trust with factory owners." },
    { title: "3. Deliver Clean, Standardized Tech Packs", desc: "Clear CAD patterns and complete BOM spreadsheets reduce factory friction and minimize sample revision delays." },
    { title: "4. Consolidate Fabrications Across Styles", desc: "Re-using core fabrics across multiple garment styles increases your fabric order size, earning volume tier discounts." },
  ];

  const faqs = [
    {
      q: "What benefits do brands unlock through long-term factory relationships?",
      a: "Long-term client brands receive priority sewing line scheduling during peak season, lower MOQs for experimental styles, and preferential payment terms.",
    },
    {
      q: "Should a brand stick with one manufacturer or spread orders?",
      a: "For small-to-medium fashion labels, concentrating volume with 1 or 2 core factory partners builds leverage, superior quality consistency, and better FOB pricing.",
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
            How to Build a Long-Term{" "}
            <span className="italic font-medium text-[#2D5016]">Factory Partnership.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Treating your clothing manufacturer as a strategic growth partner unlocks priority line allocation, better unit pricing, and lower MOQs.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Handshake size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Strategic Partnership</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Long-term supplier relationships are earned through <strong className="font-medium">rolling production forecasts, prompt payments, and fabric consolidation</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Partnership Principles</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Ways to Build Factory Loyalty</h2>
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
              { href: "/learn/what-makes-a-good-apparel-manufacturing-partner", label: "What Makes a Good Apparel Manufacturing Partner?" },
              { href: "/learn/how-to-communicate-with-overseas-suppliers", label: "How to Communicate With Overseas Suppliers" },
              { href: "/learn/how-to-scale-clothing-production", label: "How to Scale Clothing Production After First Run" },
              { href: "/manufacturing-partner-new-designers", label: "Fenalt Manufacturing Partnerships for Designers" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Build a long-term manufacturing partnership</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt grows alongside our client brands — offering scaling line allocation and dedicated merchandising support in Bangladesh.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
