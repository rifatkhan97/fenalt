import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Compare Clothing Manufacturers: Decision Matrix",
  description:
    "Evaluate garment manufacturers using a technical scorecards - comparing FOB unit cost, MOQs, sample lead times, social compliance, and fabric sourcing depth.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
  },
  openGraph: {
    title: "How to Compare Clothing Manufacturers: Decision Matrix",
    description:
      "Evaluate garment manufacturers using a technical scorecards - comparing FOB unit cost, MOQs, sample lead times, social compliance, and fabric sourcing depth.",
    url: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
  },
};

export default function HowToCompareClothingManufacturersPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Compare Clothing Manufacturers: Decision Matrix",
    description:
      "A strategic decision matrix for fashion brand founders comparing prospective apparel manufacturing partners.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Compare Clothing Manufacturers", item: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers" },
    ],
  };

  const criteria = [
    { title: "1. Minimum Order Quantities (MOQs) vs Scalability", desc: "Compare low MOQ willingness (50–100 units for initial drops) against the factory's capacity to scale to 5,000+ units as your label grows." },
    { title: "2. Transparent Itemized FOB Costing", desc: "Ensure quotes separate fabric weight cost, trim costs, screen printing fees, and cut-and-sew labor. Beware of un-itemized lump sums." },
    { title: "3. Technical Pattern & Sampling Competency", desc: "Evaluate prototype sample accuracy, pattern grading expertise, and in-house technical design support." },
    { title: "4. Social Compliance & Ethical Audits", desc: "Verify factory BSCI, SEDEX, or WRAP social compliance certificates to protect your brand against ethical supply chain risks." },
  ];

  const faqs = [
    {
      q: "Should I select the factory with the absolute lowest price?",
      a: "No. Exceptionally low quotes often indicate low-grade fabric, poor thread tension, un-itemized hidden surcharges, or un-audited subcontractor factories.",
    },
    {
      q: "How many manufacturers should I compare before choosing?",
      a: "Request quotes and sample evaluations from 3 to 5 vetted manufacturers to benchmark pricing, communication speed, and technical capabilities.",
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
            How to Compare Manufacturers:{" "}
            <span className="italic font-medium text-[#2D5016]">Decision Matrix.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Choosing a manufacturing partner defines product quality and margin profitability. Use this structured evaluation scorecard to compare factory options.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Evaluation Framework</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Comparing manufacturers requires looking beyond unit price - evaluating <strong className="font-medium">MOQs, sampling speed, itemized FOB transparency, and ethical compliance</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Scorecard Pillars</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Evaluation Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {criteria.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
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
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/what-makes-a-good-apparel-manufacturing-partner", label: "What Makes a Good Apparel Partner?" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask a Clothing Manufacturer" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Transparent, audited manufacturing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides itemized FOB costing, flexible low MOQs, and BSCI-audited factory production in Bangladesh.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
