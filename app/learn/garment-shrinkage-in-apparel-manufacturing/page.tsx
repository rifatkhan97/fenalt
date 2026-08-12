import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding Shrinkage in Apparel Manufacturing",
  description:
    "Explore fabric and garment shrinkage — understanding length vs width shrinkage rates, pattern compensation factors, compacting, and bio-washing treatments.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
  },
  openGraph: {
    title: "Understanding Shrinkage in Apparel Manufacturing",
    description:
      "Explore fabric and garment shrinkage — understanding length vs width shrinkage rates, pattern compensation factors, compacting, and bio-washing treatments.",
    url: "https://fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
  },
};

export default function GarmentShrinkageInApparelManufacturingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Understanding Shrinkage in Apparel Manufacturing",
    description:
      "A technical guide to managing fabric shrinkage in clothing production, pattern shrinkage allowances, and pre-shrinking mill processes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
    mainEntityOfPage: "https://fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Understanding Shrinkage in Manufacturing", item: "https://fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing" },
    ],
  };

  const mechanisms = [
    { title: "1. Fiber Relaxation Shrinkage", desc: "Tension applied to cotton yarns during knitting or weaving releases when fabric is wet-laundered, causing natural fiber contraction." },
    { title: "2. Length (Warp/Lengthwise) vs Width (Weft/Crosswise) Differential", desc: "Knitted fabrics shrink differently in length than width. A typical 100% cotton jersey may shrink -5% in length but only -2% in width." },
    { title: "3. Pattern Shrinkage Compensation (Scale Ups)", desc: "Pattern makers enlarge raw paper CAD patterns by the exact test shrinkage percentage so the garment fits specs after first washing." },
    { title: "4. Mill Compacting & Pre-Shrinking Treatments", desc: "Passing raw fabric rolls through stenter frames and rubber-belt compactors mechanically pre-shrinks fabric before cutting." },
  ];

  const faqs = [
    {
      q: "What is pre-shrunk cotton?",
      a: "Pre-shrunk cotton has undergone mechanical compacting or industrial garment washing at the mill level, reducing post-purchase customer wash shrinkage to under 3%.",
    },
    {
      q: "Why do hoodies shrink unevenly in length after tumble drying?",
      a: "Heat in tumble dryers causes cotton fibers to contract back to their unstretched state. Uncompacted heavy fleece shrinks predominantly in length.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction &amp; Quality</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Understanding Shrinkage{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Uncontrolled shrinkage ruins garment sizing post-wash. Learn how textile mills and pattern makers calculate and control fabric shrinkage.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Shrinkage Control</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Managing shrinkage requires <strong className="font-medium">lab wash testing, pattern scaling allowances, and mill compacting</strong> prior to bulk cutting.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanisms */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Shrinkage Factors</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Key Aspects of Fabric Shrinkage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mechanisms.map((m, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{m.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{m.desc}</p>
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
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Bulk Production" },
              { href: "/learn/garment-wash-treatments-explained", label: "Garment Wash Treatments Explained" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure in Garments?" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Mill Fabric Compacting Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Precision shrinkage testing &amp; compacting</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt performs lab wash tests on every fabric batch — compacting raw rolls to deliver under 3% post-wash garment shrinkage.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
