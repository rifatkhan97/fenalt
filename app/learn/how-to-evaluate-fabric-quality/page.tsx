import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Evaluate Fabric Quality Before Bulk Production",
  description:
    "Learn how to audit fabric quality prior to bulk sewing — evaluating GSM weight accuracy, shrinkage, colorfastness, pilling resistance, and 4-Point System inspection.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
  },
  openGraph: {
    title: "How to Evaluate Fabric Quality Before Bulk Production",
    description:
      "Learn how to audit fabric quality prior to bulk sewing — evaluating GSM weight accuracy, shrinkage, colorfastness, pilling resistance, and 4-Point System inspection.",
    url: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
  },
};

export default function HowToEvaluateFabricQualityPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Evaluate Fabric Quality Before Bulk Production",
    description:
      "A technical fabric testing guide covering GSM verification, lab-dip color matching, skewing/bowing, and lab wash audits.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Evaluate Fabric Quality", item: "https://fenalt.com/learn/how-to-evaluate-fabric-quality" },
    ],
  };

  const tests = [
    { name: "1. GSM Circular Cutter & Weighing Scale", desc: "Cut a 100 cm² fabric sample circle and weigh it on a digital GSM scale to verify specified weight per square meter." },
    { name: "2. Dimensional Stability & Shrinkage Test", desc: "Mark a 50cm x 50cm square on raw fabric swatches, perform 3 commercial laundering cycles, and calculate length and width shrinkage %." },
    { name: "3. Colorfastness to Washing & Rubbing (Crocking)", desc: "Rub dry and wet white cotton test cloths against dyed fabric to ensure color does not transfer to skin or underlying garments." },
    { name: "4. Martindale Abrasion & Pilling Resistance", desc: "Rub fabric swatches under controlled mechanical friction to evaluate surface fuzzing and pill formation over 5,000+ cycles." },
  ];

  const faqs = [
    {
      q: "What is an acceptable fabric shrinkage rate for 100% cotton knits?",
      a: "Commercial standard for unwashed 100% cotton jersey is typically ±5%. Pre-shrunk or bio-washed cotton knits achieve under ±3% dimensional stability.",
    },
    {
      q: "What is the 4-Point System in fabric roll inspection?",
      a: "The ASTM D5430 4-Point System assigns penalty points (1 to 4) based on defect size (slubs, holes, shading) per 100 square yards of fabric. Rolls exceeding 40 points per 100 sq yds are rejected.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Fabrics &amp; Materials</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Evaluate Fabric Quality{" "}
            <span className="italic font-medium text-[#2D5016]">Before Bulk Production.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Detecting fabric flaws before cutting protects your brand. Learn the physical and laboratory tests required to audit raw textiles.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Testing Standards</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Never cut bulk fabric without verifying <strong className="font-medium">GSM weight, shrinkage rates, colorfastness, and roll defect points</strong> on a sample swatch.
            </p>
          </div>
        </div>
      </section>

      {/* Tests */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Fabric Audits</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Essential Fabric Quality Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((t, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{t.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{t.desc}</p>
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
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/fabric-sourcing-guide-for-fashion-brands", label: "Fabric Sourcing Guide for Fashion Brands" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Mill Fabric Inspection Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">On-site fabric inspection in Dhaka</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt performs 4-Point System inspections on raw fabric rolls before cutting — ensuring zero defective fabric enters sewing lines.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
