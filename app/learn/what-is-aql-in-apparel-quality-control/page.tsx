import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is AQL in Apparel Quality Control?",
  description:
    "AQL (Acceptable Quality Limit) is the standard statistical inspection method used in garment manufacturing. Learn what AQL 2.5 means and how it protects your brand.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-is-aql-in-apparel-quality-control",
  },
  openGraph: {
    title: "What Is AQL in Apparel Quality Control?",
    description:
      "AQL (Acceptable Quality Limit) is the standard statistical inspection method used in garment manufacturing. Learn what AQL 2.5 means and how it protects your brand.",
    url: "https://fenalt.com/learn/what-is-aql-in-apparel-quality-control",
  },
};

export default function WhatIsAqlPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is AQL in Apparel Quality Control?",
    description: "AQL methodology explained for fashion brands - what AQL 2.5 means, how inspection sampling works, and why it matters for bulk production.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-is-aql-in-apparel-quality-control",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is AQL", item: "https://fenalt.com/learn/what-is-aql-in-apparel-quality-control" },
    ],
  };

  const aqlLevels = [
    { level: "AQL 1.0", description: "Very tight - maximum 1 defect per 100 units. Used for luxury, medical, or very high-precision garments.", use: "High-end luxury, safety-critical garments" },
    { level: "AQL 2.5", description: "Industry standard for most fashion and apparel. Balances quality rigour with practical production realities.", use: "Standard fashion, premium streetwear, branded apparel" },
    { level: "AQL 4.0", description: "More lenient. Used for lower-price-point products or non-critical categories.", use: "Value retail, accessories, promotional items" },
  ];

  const defectTypes = [
    { type: "Critical Defect", description: "Renders the garment unsellable or unsafe - e.g. a needle left inside a garment, sharp metal trim, incorrect garment shipped. Zero critical defects are tolerated.", badge: "Zero Tolerance" },
    { type: "Major Defect", description: "Significantly affects the function or appearance of the garment - e.g. wrong size label, large visible stain, broken zipper, seam failure. AQL 2.5 typically governs major defects.", badge: "AQL 2.5 Governs" },
    { type: "Minor Defect", description: "Slight deviation from specification that does not significantly affect function or appearance - e.g. slightly uneven topstitching, minor thread end visible. Often inspected at AQL 4.0.", badge: "Less Critical" },
  ];

  const faqs = [
    {
      q: "What does AQL 2.5 mean exactly?",
      a: "AQL 2.5 means that the inspection is designed to accept a lot where the true defect rate is 2.5% or lower, with a high probability (typically 95%). It does not mean 2.5% of garments can be defective - it is a statistical threshold for the overall lot. The standard is defined in ANSI/ASQ Z1.4.",
    },
    {
      q: "Does AQL guarantee all garments are defect-free?",
      a: "No. AQL is a statistical sampling methodology - a percentage of units are inspected, not 100% of units. The goal is to detect lots with unacceptable defect rates with a high statistical probability, not to guarantee zero defects in the shipped lot.",
    },
    {
      q: "Does Fenalt use AQL inspections?",
      a: "Yes. Fenalt's Dhaka quality team enforces an ANSI/ASQ Z1.4 AQL 2.5 inspection framework across in-line floor audits and final pre-shipment carton inspections, with a standard ±1.5cm measurement tolerance.",
    },
    {
      q: "Should my brand specify AQL levels in its purchase orders?",
      a: "Yes. Specifying an AQL level in your purchase order or quality agreement with a manufacturer creates a clear, documented standard. Without it, quality expectations are ambiguous and harder to enforce.",
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
            AQL - Acceptable Quality Limit - is the statistical inspection standard used across the global garment industry. Understanding it helps brands specify meaningful quality standards with their manufacturers.
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
            <p>Rather than inspecting every single garment - which would be impractical for most bulk orders - AQL uses statistical sampling. The inspector selects a random sample of garments from the production lot, inspects them against the defined quality standard, and compares the number of defects found against the AQL acceptance number.</p>
            <p>If the number of defects found in the sample exceeds the acceptance number for the chosen AQL level, the lot is rejected for rework or re-inspection. If defects are within the acceptable range, the lot passes.</p>
            <p>The sample size and acceptance number are determined by the lot size and the inspection level chosen, as defined in ANSI/ASQ Z1.4 tables.</p>
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

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
              { href: "/learn/what-to-check-during-clothing-production", label: "What to Check During Clothing Production" },
              { href: "/garment-quality-control-services", label: "Fenalt: Garment Quality Control Services" },
              { href: "/learn/common-clothing-quality-problems", label: "Common Clothing Quality Problems" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Production with documented QC standards</h2>
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
