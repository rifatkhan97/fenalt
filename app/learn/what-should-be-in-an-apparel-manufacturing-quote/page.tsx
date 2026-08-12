import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "What Should Be Included in an Apparel Manufacturing Quote?",
  description:
    "Learn how to review garment manufacturing FOB quotes - itemized fabric yields, cut-and-sew labor, printing surcharges, packaging, shipping terms, and payment milestones.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
  },
  openGraph: {
    title: "What Should Be Included in an Apparel Manufacturing Quote?",
    description:
      "Learn how to review garment manufacturing FOB quotes - itemized fabric yields, cut-and-sew labor, printing surcharges, packaging, shipping terms, and payment milestones.",
    url: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
  },
};

export default function WhatShouldBeInAnApparelManufacturingQuotePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Should Be Included in an Apparel Manufacturing Quote?",
    description:
      "A technical guide for fashion brands on auditing manufacturer FOB price quotations and line-item cost structures.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
    mainEntityOfPage: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Manufacturing Quote Requirements", item: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote" },
    ],
  };

  const components = [
    { title: "1. Fabric & Material Cost Breakdown", desc: "Detailed breakdown of primary fabric cost, secondary lining cost, GSM weight assumptions, and estimated consumption yield per unit." },
    { title: "2. Trims, Labels & Packaging Surcharges", desc: "Itemized costs for woven neck labels, care tags, zippers, drawstrings, polybags, and export master carton packing." },
    { title: "3. Cut-Make-Trim (CMT) Labor & Decoration Fees", desc: "Line-sewing labor cost per garment, along with specific decoration costs (screen print screens, embroidery stitch counts)." },
    { title: "4. Incoterms Shipping Terms & Payment Terms", desc: "Explicit shipping terms (FOB Chittagong, EXW, DDP) and deposit milestones (e.g. 30% deposit / 70% post-FRI inspection balance)." },
  ];

  const faqs = [
    {
      q: "What does FOB stand for in clothing manufacturing quotes?",
      a: "FOB stands for Free On Board. It means the quoted price includes all fabric, manufacturing, packaging, and transport costs up until cargo is loaded onto the vessel at the export port.",
    },
    {
      q: "Why are un-itemized lump-sum quotes risky for brands?",
      a: "Lump-sum quotes hide material markups and make it impossible to negotiate or optimize costs when scaling production volumes.",
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
            What Should Be Included{" "}
            <span className="italic font-medium text-[#2D5016]">in an Apparel Quote?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A professional manufacturing quotation must be completely transparent. Learn the line-item components required to audit a factory FOB price quote.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Quote Audit</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A transparent quote itemizes <strong className="font-medium">fabric costs, trim surcharges, CMT labor, decoration fees, Incoterms, and payment terms</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Line Items</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Essential Quotation Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((c, i) => (
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
              { href: "/apparel-manufacturing-cost-considerations", label: "Apparel Manufacturing Cost Considerations Guide" },
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Affects Manufacturing Cost" },
              { href: "/learn/how-to-compare-clothing-manufacturers", label: "How to Compare Clothing Manufacturers" },
              { href: "/learn/bill-of-materials-apparel", label: "What Is a Bill of Materials (BOM) in Apparel?" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Request a transparent itemized quotation</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Submit your tech pack or reference photos to Fenalt for an itemized FOB cost breakdown and lead time schedule.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
