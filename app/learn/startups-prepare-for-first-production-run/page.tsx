import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Startups Can Prepare for Their First Production Run",
  description:
    "A step-by-step preparation guide for fashion startups approaching their first clothing production run — what to have ready, what to expect, and how to reduce risk.",
  alternates: { canonical: "https://fenalt.com/learn/startups-prepare-for-first-production-run" },
  openGraph: {
    title: "How Startups Can Prepare for Their First Production Run",
    description: "A step-by-step preparation guide for fashion startups approaching their first clothing production run — what to have ready, what to expect, and how to reduce risk.",
    url: "https://fenalt.com/learn/startups-prepare-for-first-production-run",
  },
};

export default function StartupsPrepareForFirstProductionRunPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Startups Can Prepare for Their First Production Run",
    description: "Step-by-step preparation guide for fashion startups approaching their first clothing production run.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/startups-prepare-for-first-production-run",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Startups Prepare for First Production Run", item: "https://fenalt.com/learn/startups-prepare-for-first-production-run" },
    ],
  };

  const steps = [
    {
      num: "01",
      title: "Finalise Your Designs Before Contacting Manufacturers",
      body: "The most expensive thing a brand can do is involve a manufacturer before designs are settled. Every design change after sampling begins costs time and money. Have a clear, finalised design direction — even if not yet in full tech pack format — before making manufacturer contact.",
    },
    {
      num: "02",
      title: "Create or Commission a Tech Pack",
      body: "A tech pack is the document manufacturers work from. Without one, you cannot get an accurate quote, a consistent sample, or a reliable production outcome. If you cannot create one yourself, commission a technical designer or use a manufacturer who offers tech pack development support.",
    },
    {
      num: "03",
      title: "Determine a Realistic Order Quantity",
      body: "Your first production order quantity should be informed by realistic demand forecasting — not wishful thinking. Overproducing a first run is a common and costly mistake. Consider starting with a smaller pilot batch to validate market response before scaling.",
    },
    {
      num: "04",
      title: "Research and Verify Your Manufacturer",
      body: "Do not select a manufacturer based on price alone or on an attractive website. Request samples of their existing work, check references, understand their MOQ and QC process, and confirm they have genuine experience with your specific product type.",
    },
    {
      num: "05",
      title: "Build a Realistic Timeline",
      body: "Most first-time brands underestimate the full timeline. From initial manufacturer contact to goods in your warehouse, a realistic minimum for a first custom production run is 16 to 24 weeks — accounting for design finalisation, tech pack creation, fabric sourcing, 2 to 3 sample rounds, bulk production, and freight.",
    },
    {
      num: "06",
      title: "Prepare Your Budget Including All Costs",
      body: "Production cost is only part of the total. Also budget for: sampling fees, shipping and freight, import duties and customs entry, label and packaging production, inspection costs, and a contingency for revision rounds or timeline slippage.",
    },
    {
      num: "07",
      title: "Understand the Sampling Process Before It Starts",
      body: "Expect multiple sample rounds. Know what you are checking in each sample — fit, fabric, construction, label placement — and be prepared to provide specific, written feedback rather than general impressions. Unclear feedback prolongs revision cycles.",
    },
    {
      num: "08",
      title: "Do Not Rush Sample Sign-Off",
      body: "The approved pre-production sample becomes the quality standard for your entire bulk order. Sign off only when you are genuinely satisfied — every issue you overlook in sampling will be replicated across your entire run.",
    },
    {
      num: "09",
      title: "Plan for Quality Inspection Before Shipment",
      body: "Arrange for a pre-shipment quality inspection before your bulk order ships. This is your last opportunity to identify and resolve quality issues before goods leave the factory. Once goods ship, rectification options are significantly more limited and expensive.",
    },
    {
      num: "10",
      title: "Understand Your Import Requirements",
      body: "Before goods arrive, confirm: import duty rates for your garment categories and country of origin; customs entry requirements and your import broker's role; and any labelling or fibre content requirements mandated in your destination market.",
    },
  ];

  const commonMistakes = [
    "Committing to bulk production before approving a sample",
    "Underestimating the total timeline — especially fabric sourcing lead times",
    "Providing vague or verbal instructions instead of a tech pack",
    "Overproducing on a first run without market validation",
    "Ignoring import duty and freight cost in the total unit economics calculation",
    "Choosing a manufacturer primarily on price without verifying capability",
  ];

  const faqs = [
    {
      q: "How long does a first production run realistically take?",
      a: "For a brand new to a manufacturer with custom cut-and-sew garments, allow a minimum of 16 to 20 weeks from initial brief to goods received. This includes: 2 to 4 weeks for design and tech pack finalisation, 4 to 6 weeks for sampling and approval, 4 to 6 weeks for bulk production, and 3 to 5 weeks for sea freight. Air freight reduces shipping time but significantly increases cost.",
    },
    {
      q: "Can Fenalt help with a brand's first production run?",
      a: "Yes. Fenalt specialises in supporting independent brands, emerging designers, and startups through their first production projects in Bangladesh — including sampling, production oversight, QC, and export coordination.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Low MOQ & Startups</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Startups Can Prepare{" "}
            <span className="italic font-medium text-[#2D5016]">for Their First Production Run.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            The gap between a design idea and finished garments in a warehouse is larger than most first-time brand founders anticipate. This guide walks through the ten things to prepare — so you don&apos;t learn them the expensive way.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Step-by-Step Guide</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">10 Steps to Prepare for Your First Production Run</h2>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 border-b border-[#E5DDD3] py-8 last:border-b-0">
                <div className="font-display text-4xl font-light text-[#E5DDD3] shrink-0 w-12 mt-1">{step.num}</div>
                <div>
                  <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Avoid These</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">Common Mistakes on a First Production Run</h2>
          <div className="space-y-3">
            {commonMistakes.map((mistake, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <span className="text-[#C8A882] mt-0.5 shrink-0 text-lg">⚠</span>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack?" },
              { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean?" },
              { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Take?" },
              { href: "/clothing-manufacturer-for-startups", label: "Fenalt: Manufacturing Partner for Startups" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Ready to start your first production run?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt guides brands through every stage of their first production project — from sampling to export — with a dedicated Dhaka operations team.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
