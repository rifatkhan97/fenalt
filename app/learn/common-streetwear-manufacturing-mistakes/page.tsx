import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Common Streetwear Manufacturing Mistakes to Avoid",
  description:
    "Discover the most frequent technical, fabric, pattern, and decoration pitfalls that emerging streetwear brands encounter during bulk manufacturing.",
  alternates: {
    canonical: "https://fenalt.com/learn/common-streetwear-manufacturing-mistakes",
  },
  openGraph: {
    title: "Common Streetwear Manufacturing Mistakes to Avoid",
    description:
      "Discover the most frequent technical, fabric, pattern, and decoration pitfalls that emerging streetwear brands encounter during bulk manufacturing.",
    url: "https://fenalt.com/learn/common-streetwear-manufacturing-mistakes",
  },
};

export default function CommonStreetwearManufacturingMistakesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Streetwear Manufacturing Mistakes to Avoid",
    description:
      "A technical breakdown of common garment manufacturing errors made by new streetwear labels and how to avoid them.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/common-streetwear-manufacturing-mistakes",
    mainEntityOfPage: "https://fenalt.com/learn/common-streetwear-manufacturing-mistakes",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Common Streetwear Mistakes", item: "https://fenalt.com/learn/common-streetwear-manufacturing-mistakes" },
    ],
  };

  const mistakes = [
    {
      title: "1. Relying on Standard Catalog Blanks for Oversized Fits",
      impact: "Off-the-shelf blanks scale up width without adjusting neck ribbing or armhole depth, leading to sloppy rather than structured boxy silhouettes.",
      solution: "Develop custom tech packs with dedicated oversized pattern grading.",
    },
    {
      title: "2. Underestimating Shrinkage on Heavy Cottons",
      impact: "Heavy 450+ GSM unwashed cotton fleece can shrink 5%–8% after customer laundering if not preshrunk, causing severe sizing complaints.",
      solution: "Require pre-shrunk fabric testing or pre-wash wash treatments prior to bulk cutting.",
    },
    {
      title: "3. Oversizing Graphics Across All Garment Sizes",
      impact: "Using a single print screen size for XS through 3XL causes graphics to cover the entire chest on XS but appear tiny on 3XL.",
      solution: "Specify two print screen sizes for orders spanning wide size runs.",
    },
    {
      title: "4. Choosing Light Ribbing for Heavy Fleece Hoodies",
      impact: "Combining a heavy 500 GSM body fleece with a flimsy 200 GSM rib causes cuffs and waistbands to sag and bacon-curl after two washes.",
      solution: "Match body fabric weight with heavy 2x2 cotton/spandex ribbing (350+ GSM).",
    },
    {
      title: "5. Ignoring Neck Seam Construction & Taping",
      impact: "Untaped neck seams scratch the wearer's neck and cause collar distortion after repeated wear.",
      solution: "Specify self-fabric or herringbone neck taping across all t-shirts and fleece tops.",
    },
  ];

  const faqs = [
    {
      q: "Why do my puff prints crack after washing?",
      a: "Puff print cracking occurs when curing temperatures are incorrect or when the print base layer is too thick for flexible fabric movement. Proper curing tests must be conducted during sampling.",
    },
    {
      q: "Should I pre-wash my garments during factory production?",
      a: "Yes. Garment washing (silicone soft wash, bio-wash, or enzyme wash) eliminates residual shrinkage, sets the handfeel, and stabilizes colors before retail packaging.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Streetwear</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Common Streetwear{" "}
            <span className="italic font-medium text-[#2D5016]">Manufacturing Mistakes.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Streetwear garments look deceptively simple, but heavy fabrics and specialty decorations demand precise technical execution. Avoid these five major production traps.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Quality Protection</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Streetwear customers pay a premium for handfeel, weight, and fit. A single production flaw - like a distorted collar or peeling puff print - destroys brand credibility instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Mistakes List */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Pitfalls</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Major Mistakes & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mistakes.map((m, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{m.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-3"><strong className="text-[#1A1A1A]">Impact:</strong> {m.impact}</p>
                <div className="flex items-start gap-2 text-xs font-semibold text-[#C8A882]">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                  <span>Solution: {m.solution}</span>
                </div>
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
              { href: "/learn/how-to-manufacture-a-streetwear-collection", label: "How to Manufacture a Streetwear Collection" },
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Screen Print for Streetwear" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/streetwear-manufacturing", label: "Fenalt Custom Streetwear Manufacturing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Eliminate manufacturing errors</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt oversees every stage of streetwear production - enforcing rigid fabric shrinkage testing and screen print curing standards.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
