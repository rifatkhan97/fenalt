import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is AQL in Apparel Quality Control?",
  description:
    "AQL (Acceptable Quality Limit) is the standard statistical inspection method used in garment manufacturing. Learn what AQL 2.5 means and how it protects your brand.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/what-is-aql-in-apparel-quality-control",
  },
  openGraph: {
    title: "What Is AQL in Apparel Quality Control?",
    description:
      "AQL (Acceptable Quality Limit) is the standard statistical inspection method used in garment manufacturing. Learn what AQL 2.5 means and how it protects your brand.",
    url: "https://www.fenalt.com/learn/what-is-aql-in-apparel-quality-control",
  },
};

export default function WhatIsAqlPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is AQL in Apparel Quality Control?",
    description: "AQL methodology explained for fashion brands - what AQL 2.5 means, how inspection sampling works, and why it matters for bulk production.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/what-is-aql-in-apparel-quality-control",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is AQL", item: "https://www.fenalt.com/learn/what-is-aql-in-apparel-quality-control" },
    ],
  };

  const aqlLevels = [
    { level: "AQL 1.0", description: "Very tight - maximum 1 defect per 100 units. Used for luxury, medical, or high-precision technical garments.", use: "High-end luxury, safety-critical garments" },
    { level: "AQL 2.5", description: "Global industry standard for retail fashion and apparel. Balances quality rigor with practical production realities.", use: "Standard fashion, premium streetwear, branded apparel" },
    { level: "AQL 4.0", description: "More lenient. Used for lower-price-point promotional items, budget accessories, or non-critical workwear categories.", use: "Value retail, accessories, promotional items" },
  ];

  const defectTypes = [
    { type: "Critical Defect", description: "Renders the garment unsellable, hazardous, or illegal - e.g. a needle tip fragment left inside, sharp wire edge, missing care law label. Zero critical defects are tolerated in any shipment.", badge: "Zero Tolerance (0 Allowed)" },
    { type: "Major Defect", description: "Significantly affects garment function, fit, or retail appearance - e.g. wrong size label, open seam hole, broken zipper, off-spec measurement beyond tolerance. Governed strictly by AQL 2.5.", badge: "AQL 2.5 Governs (Max 7 per 125)" },
    { type: "Minor Defect", description: "Slight cosmetic deviation that does not affect wearability, structural integrity, or fit - e.g. slightly uneven topstitching, loose thread end longer than 1cm. Governed by AQL 4.0.", badge: "AQL 4.0 Governs (Max 10 per 125)" },
  ];

  const faqs = [
    {
      q: "What does AQL 2.5 mean exactly in garment inspection?",
      a: "AQL 2.5 means that the inspection is statistically designed to accept a production lot where the true defect rate is 2.5% or lower, with a high statistical probability (95%). It is a statistical sampling threshold defined in ANSI/ASQ Z1.4 tables.",
    },
    {
      q: "Does an AQL 2.5 pass guarantee that 100% of shipped garments are defect-free?",
      a: "No. AQL relies on random statistical sampling (inspecting e.g. 125 garments from a 3,000-unit lot). The objective is to detect lots with unacceptable defect rates before export, not to guarantee 100% perfection across every individual piece.",
    },
    {
      q: "Does Fenalt enforce AQL 2.5 inspections in Bangladesh?",
      a: "Yes. Fenalt's Dhaka quality engineering team enforces an ANSI/ASQ Z1.4 AQL 2.5 inspection framework across in-line floor audits and final pre-shipment carton inspections.",
    },
    {
      q: "Should my brand specify AQL standards in its purchase orders?",
      a: "Yes. Specifying 'AQL 2.5 Major / AQL 4.0 Minor / 0 Critical' in your purchase order or manufacturing agreement establishes a legally clear, objective quality benchmark for accepting or rejecting shipments.",
    },
    {
      q: "What happens if a production lot fails an AQL 2.5 pre-shipment audit?",
      a: "If defects exceed allowed acceptance limits, the auditor issues a 'REJECTED' report. The factory must re-screen 100% of packed cartons, repair or replace defective garments, and re-submit the lot for a second AQL inspection at the factory's expense.",
    },
    {
      q: "How many sample garments are inspected for a 1,000-unit production order?",
      a: "Under ANSI/ASQ Z1.4 General Inspection Level II, a 1,000-unit order requires inspecting a random sample size of 80 garments. For AQL 2.5, the lot passes if 5 or fewer major defects are found, and fails if 6 or more are found.",
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
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Quality Control</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Is AQL in Apparel{" "}
            <span className="italic font-medium text-[#2D5016]">Quality Control?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            AQL - Acceptable Quality Limit - is the statistical inspection standard used across the global garment industry. Learn what AQL 2.5 means and how it protects your brand.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16 lg:py-20 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1A1A1A] text-[#FAF9F6] p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Definition</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light leading-relaxed">
              AQL (Acceptable Quality Limit) is a statistical threshold defining the maximum percentage of defective units in a production lot that is considered acceptable. It determines how many units are inspected and how many defects trigger rejection of the full lot.
            </p>
            <p className="mt-4 text-sm text-[#9B948E]">Standard reference: ANSI/ASQ Z1.4 - Sampling Procedures and Tables for Inspection by Attributes.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">How It Works</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-8">Statistical Sampling, Not 100% Inspection</h2>
          <div className="space-y-5 text-base text-[#E5DDD3] leading-relaxed">
            <p>Rather than inspecting every single garment - which would be impractical for bulk orders - AQL uses statistical sampling. The inspector selects a random sample of garments from packed export cartons, inspects them against tech pack specs, and compares the number of defects found against the AQL acceptance table.</p>
            <p>If the number of defects found in the sample exceeds the acceptance threshold for the chosen AQL level, the entire lot is rejected for 100% factory re-screening. If defects remain within acceptable limits, the lot passes for export.</p>
            <p>The sample size and acceptance number are determined by total order quantity and inspection level, as defined in ANSI/ASQ Z1.4 tables.</p>
          </div>
        </div>
      </section>

      {/* AQL levels */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Levels</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Common AQL Levels in Apparel</h2>
          <div className="space-y-4">
            {aqlLevels.map((level, i) => (
              <div key={i} className={`p-6 lg:p-8 border border-[#E5DDD3] ${i === 1 ? "bg-[#2D5016] text-[#FAF9F6]" : "bg-[#F2EFE9]"}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <span className={`font-display text-2xl font-medium ${i === 1 ? "text-[#FAF9F6]" : "text-[#1A1A1A]"}`}>{level.level}</span>
                  {i === 1 && <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider">Industry Standard</span>}
                </div>
                <p className={`text-sm leading-relaxed mb-2 ${i === 1 ? "text-[#E5DDD3]" : "text-[#6B6560]"}`}>{level.description}</p>
                <p className={`text-xs font-semibold uppercase tracking-wider ${i === 1 ? "text-[#C8A882]" : "text-[#C8A882]"}`}>Typical Use: {level.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defect types */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Defect Classification</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">Critical, Major, and Minor Defects</h2>
          <div className="space-y-4">
            {defectTypes.map((d, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{d.type}</h3>
                  <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#C8A882] text-xs font-semibold uppercase tracking-wider">{d.badge}</span>
                </div>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{d.description}</p>
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
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
              { href: "/learn/what-to-check-during-clothing-production", label: "What to Check During Clothing Production" },
              { href: "/learn/final-inspection-finished-garments", label: "Final Inspection of Finished Garments" },
              { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Garments" },
              { href: "/learn/common-clothing-quality-problems", label: "Common Clothing Quality Problems & Solutions" },
              { href: "/garment-quality-control-services", label: "Fenalt Factory AQL Quality Control Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Production with documented AQL standards</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt enforces ANSI/ASQ Z1.4 AQL 2.5 across all in-line and final pre-shipment inspections in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
