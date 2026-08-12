import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Questions to Ask an Apparel Manufacturer Before Working Together",
  description:
    "Before committing to a clothing manufacturer, ask these questions. A practical checklist covering capabilities, quality, timelines, pricing, and red-flag areas.",
  alternates: { canonical: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer" },
  openGraph: {
    title: "Questions to Ask an Apparel Manufacturer Before Working Together",
    description: "Before committing to a clothing manufacturer, ask these questions. A practical checklist covering capabilities, quality, timelines, pricing, and red-flag areas.",
    url: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer",
  },
};

export default function QuestionsToAskManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Questions to Ask an Apparel Manufacturer Before Working Together",
    description: "Checklist of questions to ask clothing manufacturers before committing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Questions to Ask a Manufacturer", item: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer" },
    ],
  };

  const questionCategories = [
    {
      category: "Production Capabilities",
      icon: "01",
      questions: [
        { q: "What garment types and categories do you specialise in?", why: "Establishes whether their expertise matches your product type." },
        { q: "What is your minimum order quantity per style?", why: "Critical for budget and first-production viability." },
        { q: "Can you produce our specific fabric types — and what weights do you work with?", why: "Some factories cannot sew very heavy fleece or technical fabrics without specialist equipment." },
        { q: "Do you own the production facility or work with partner factories?", why: "Affects your visibility and control over the actual manufacturing environment." },
      ],
    },
    {
      category: "Sampling & Development",
      icon: "02",
      questions: [
        { q: "What is your typical sample turnaround time?", why: "Sets realistic pre-production timeline expectations." },
        { q: "How do you handle sampling revisions — and what is the cost per revision round?", why: "Revision costs and policies vary widely across manufacturers." },
        { q: "Do you work from our tech pack, or do we need to use your templates?", why: "Manufacturer-imposed templates can constrain design specifications." },
        { q: "Can we see samples of garments you have produced for comparable brands?", why: "Physical samples reveal construction quality better than photographs." },
      ],
    },
    {
      category: "Quality Control",
      icon: "03",
      questions: [
        { q: "What is your quality inspection process during and after production?", why: "Distinguishes manufacturers with systematic QC from those doing end-of-line spot checks only." },
        { q: "What measurement tolerance do you work to?", why: "Establishes the precision standard — ±1.5cm is a common benchmark for fashion garments." },
        { q: "How are defective garments handled — rework, rejection, or credit?", why: "The answer reveals post-production accountability policy." },
        { q: "Do you conduct needle and metal detection on finished garments?", why: "Required for brands selling through major retailers." },
      ],
    },
    {
      category: "Timelines & Logistics",
      icon: "04",
      questions: [
        { q: "What is your bulk production lead time from sample sign-off?", why: "Must be qualified — 'it depends on fabric sourcing' is an honest answer; '2 weeks always' is a red flag." },
        { q: "What shipping terms do you offer — FOB, DDP, or other?", why: "Determines who is responsible for freight, insurance, and customs costs." },
        { q: "What happens if the production timeline slips?", why: "Reveals whether there is accountability and communication protocol for delays." },
      ],
    },
    {
      category: "Pricing & Payment",
      icon: "05",
      questions: [
        { q: "Can you provide a fully itemised quote — unit cost, sampling fees, packaging, freight?", why: "Lump-sum quotes make cost comparison and future dispute resolution impossible." },
        { q: "What are your payment terms?", why: "Standard practice is a deposit (30–50%) on bulk order placement and balance before shipment — be wary of 100% upfront." },
        { q: "How does per-unit pricing change across different MOQ tiers?", why: "Understanding the volume-price relationship helps plan future scaling." },
      ],
    },
    {
      category: "References & Accountability",
      icon: "06",
      questions: [
        { q: "Can you provide references from comparable brands you have worked with?", why: "Third-party validation is more reliable than self-reported claims." },
        { q: "What is your process if a bulk order has significant quality issues on arrival?", why: "How a manufacturer answers this reveals their accountability culture." },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing & Supplier Selection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Questions to Ask an Apparel Manufacturer{" "}
            <span className="italic font-medium text-[#2D5016]">Before Working Together.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            How a manufacturer answers these questions reveals far more than their marketing materials. Use this checklist to structure your evaluation — and pay close attention to what they avoid answering.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Questions by category */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {questionCategories.map((cat, ci) => (
              <div key={ci} className="bg-[#F2EFE9] border border-[#E5DDD3] overflow-hidden">
                <div className="flex items-center gap-4 p-6 lg:p-8 border-b border-[#E5DDD3] bg-[#1A1A1A]">
                  <span className="font-display text-3xl font-light text-[#C8A882]">{cat.icon}</span>
                  <h2 className="font-display text-2xl font-medium text-[#FAF9F6]">{cat.category}</h2>
                </div>
                <div className="divide-y divide-[#E5DDD3]">
                  {cat.questions.map((q, qi) => (
                    <div key={qi} className="p-6 lg:p-8">
                      <p className="font-display text-lg font-medium text-[#1A1A1A] mb-2">&ldquo;{q.q}&rdquo;</p>
                      <p className="text-sm text-[#6B6560] leading-relaxed"><span className="font-semibold text-[#C8A882]">Why ask:</span> {q.why}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to interpret answers */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">How to Read the Responses</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">Patterns That Distinguish Reliable Manufacturers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Honest Uncertainty", good: true, text: "A manufacturer who says 'our lead time is 4–6 weeks, depending on fabric sourcing' is more reliable than one who says '2 weeks, always.'" },
              { label: "Specific Process Answers", good: true, text: "Detailed explanations of QC process (not 'we do quality control') signal operational maturity." },
              { label: "Evasive on References", good: false, text: "Unwillingness to provide client references is a significant red flag, regardless of explanation." },
              { label: "Generic Capability Claims", good: false, text: "'We can make anything' is a warning sign. Specialists in your product category are more valuable than generalists." },
            ].map((item, i) => (
              <div key={i} className={`p-6 border ${item.good ? "bg-[#2A2A2A] border-[#2D5016]" : "bg-[#2A2A2A] border-[#C8A882]"}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${item.good ? "text-[#2D5016]" : "text-[#C8A882]"}`}>{item.good ? "✓ Good Sign" : "⚠ Warning Sign"}</span>
                  <span className="text-xs font-semibold text-[#FAF9F6]">{item.label}</span>
                </div>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturing Partner" },
              { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Have questions for Fenalt?</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Submit your project brief and our Dhaka operations team will respond with a detailed production overview — no vague answers.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
