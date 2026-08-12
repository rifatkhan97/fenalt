import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Scale Clothing Production After a Successful First Run",
  description:
    "Learn how to transition from small-batch initial orders to scaled bulk production — managing supply chain capacity, custom fabric knits, and working capital.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-scale-clothing-production",
  },
  openGraph: {
    title: "How to Scale Clothing Production After a Successful First Run",
    description:
      "Learn how to transition from small-batch initial orders to scaled bulk production — managing supply chain capacity, custom fabric knits, and working capital.",
    url: "https://fenalt.com/learn/how-to-scale-clothing-production",
  },
};

export default function HowToScaleClothingProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Scale Clothing Production After a Successful First Run",
    description:
      "A strategic operational roadmap for scaling apparel manufacturing from initial trial runs to multi-thousand unit production volumes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-scale-clothing-production",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-scale-clothing-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Scale Clothing Production", item: "https://fenalt.com/learn/how-to-scale-clothing-production" },
    ],
  };

  const pillars = [
    {
      title: "1. Upgrade from Stock Fabric to Custom Mill Knitting/Dyeing",
      body: "Small runs rely on open-market stock fabrics. As you scale past 500–1,000 units per style, unlock custom mill knitting and Pantone lab-dip dyeing for unique handfeel and brand-exclusive colorways.",
    },
    {
      title: "2. Lock In Raw Material Lead Times & Greige Fabric Reserves",
      body: "Fabric milling takes 3–4 weeks. Scaling brands maintain greige (undyed base fabric) reserves at the mill so that re-orders can be dyed and cut in half the standard turnaround time.",
    },
    {
      title: "3. Refine Size Ratios from Actual Sell-Through Data",
      body: "Replace initial estimated size curves (e.g. 1:2:2:1) with real sales analytics from your inaugural launch, shifting production budget toward your highest-velocity sizes.",
    },
    {
      title: "4. Establish Formal Quality Control Tolerance Standards",
      body: "As unit volumes increase, manual individual inspection gives way to statistical AQL (Acceptable Quality Limit) sampling audits and pre-shipment sign-offs.",
    },
  ];

  const faqs = [
    {
      q: "How far in advance should I plan scaled restocks?",
      a: "Plan scaled production runs 90 to 120 days ahead of expected retail stockout to account for fabric milling, bulk sewing, sea freight, and customs clearance.",
    },
    {
      q: "Should I switch factories when scaling up volume?",
      a: "Not necessarily. If your current micro-factory network or manufacturing partner has capacity and consistently delivers quality, scaling with an existing partner is safer than onboarding a new factory.",
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
            How to Scale Clothing Production{" "}
            <span className="italic font-medium text-[#2D5016]">After a Successful Run.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sold out your first drop? Congratulations. Scaling from 100 units to 2,000 units requires shifting from reactive sourcing to structured supply chain planning.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">The Scaling Challenge</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Scaling is not simply multiplying your order quantity by ten. It requires <strong className="font-medium">custom material mill reservations, formal AQL inspection standards, and optimized freight logistics</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Operational Evolution</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of Production Scaling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{p.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{p.body}</p>
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
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Fashion Brand Produce?" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/apparel-production-management", label: "Fenalt Scaled Production Management" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Scale your manufacturing seamlessly</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt supports brands as they expand from initial low MOQ drops into high-volume bulk production runs across audited micro-factories in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Scale Your Brand <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
