import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, FileCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Pack vs Sewing Pattern: What's the Difference?",
  description:
    "Understand the core differences between a tech pack (blueprint specification document) and a sewing pattern (physical/digital cutting template).",
  alternates: {
    canonical: "https://fenalt.com/learn/tech-pack-vs-sewing-pattern",
  },
  openGraph: {
    title: "Tech Pack vs Sewing Pattern: What's the Difference?",
    description:
      "Understand the core differences between a tech pack (blueprint specification document) and a sewing pattern (physical/digital cutting template).",
    url: "https://fenalt.com/learn/tech-pack-vs-sewing-pattern",
  },
};

export default function TechPackVsSewingPatternPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tech Pack vs Sewing Pattern: What's the Difference?",
    description:
      "A technical comparison defining the distinct roles of tech packs and sewing patterns in clothing manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/tech-pack-vs-sewing-pattern",
    mainEntityOfPage: "https://fenalt.com/learn/tech-pack-vs-sewing-pattern",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Tech Pack vs Sewing Pattern", item: "https://fenalt.com/learn/tech-pack-vs-sewing-pattern" },
    ],
  };

  const comparisons = [
    { factor: "Primary Format", techPack: "Multi-page PDF or spreadsheet specification document.", pattern: "CAD DXF/AAMA digital file or physical paper cutting templates." },
    { factor: "Target Audience", techPack: "Sourcing managers, fabric suppliers, merchandisers, and QC inspectors.", pattern: "Pattern makers, cutting table technicians, and sample machinists." },
    { factor: "Contains", techPack: "BOM, colors, stitch callouts, print placements, POM tables, packaging rules.", pattern: "Exact 2D seam-to-seam garment panel outlines with seam allowances and notch marks." },
    { factor: "Dependency", techPack: "Serves as the master instruction guide from which patterns are drafted.", pattern: "Direct physical tool used to cut fabric layers prior to sewing." },
  ];

  const faqs = [
    {
      q: "Can a factory make a sewing pattern if I only provide a tech pack?",
      a: "Yes! Professional garment manufacturers employ technical pattern makers who translate tech pack measurement spec tables into production CAD patterns.",
    },
    {
      q: "Do I own my sewing patterns?",
      a: "When you pay for custom pattern development, you own the CAD pattern files. Ensure your contract specifies delivery of DXF/AAMA pattern exports.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Pattern Making</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Tech Pack vs Sewing Pattern:{" "}
            <span className="italic font-medium text-[#2D5016]">What&apos;s the Difference?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A tech pack defines what to build and out of what materials; a sewing pattern defines how to physically cut fabric panels to sew it.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileCode size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Technical Clarification</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">tech pack is the blueprint document</strong>; a <strong className="font-medium">sewing pattern is the physical cutting template</strong>. Both are required for manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Direct Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Core Operational Differences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{c.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Tech Pack</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{c.techPack}</p>
                  </div>
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Sewing Pattern</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{c.pattern}</p>
                  </div>
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
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-is-pattern-making", label: "What Is Pattern Making in Clothing Production?" },
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Clothing Tech Pack?" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Development Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Complete tech pack &amp; pattern solutions</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides end-to-end technical support — drafting tech packs and CAD sewing patterns for independent brands.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
