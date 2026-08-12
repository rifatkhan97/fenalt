import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "What Should Be Checked During Clothing Production?",
  description:
    "A guide for fashion brands on inline quality control checkpoints — checking cutting markers, bundle labeling, initial sewing line setup, and ironing finish.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-to-check-during-clothing-production",
  },
  openGraph: {
    title: "What Should Be Checked During Clothing Production?",
    description:
      "A guide for fashion brands on inline quality control checkpoints — checking cutting markers, bundle labeling, initial sewing line setup, and ironing finish.",
    url: "https://fenalt.com/learn/what-to-check-during-clothing-production",
  },
};

export default function WhatToCheckDuringClothingProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Should Be Checked During Clothing Production?",
    description:
      "An inline factory audit guide for fashion brands detailing critical quality checkpoints across cutting, sewing, and finishing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-to-check-during-clothing-production",
    mainEntityOfPage: "https://fenalt.com/learn/what-to-check-during-clothing-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What to Check During Production", item: "https://fenalt.com/learn/what-to-check-during-clothing-production" },
    ],
  };

  const checkpoints = [
    { stage: "1. Raw Fabric & Shade Band Check", desc: "Verify fabric roll GSM, shade band consistency across dye lots, and check raw rolls for knitting slubs or holes using the 4-Point System." },
    { stage: "2. Spreading & Cutting Table Accuracy", desc: "Audit fabric ply tension during spreading, notch depth alignment, bundle numbering, and pattern piece symmetry." },
    { stage: "3. First-Off Line Sewing Inspection", desc: "Inspect the very first garment coming off the assembly line against the approved Golden Pre-Production Sample for stitch density (SPI) and seam tension." },
    { stage: "4. In-Line QC & Traffic Light System", desc: "Station roving QC auditors at critical sewing operations (collar join, sleeve attachment) to catch systemic operator errors instantly." },
  ];

  const faqs = [
    {
      q: "Why is a shade band check important for bulk production?",
      a: "Dyeing bulk fabric rolls creates subtle shade variations between dye lots. A shade band groups compatible rolls to ensure front and back panels match perfectly.",
    },
    {
      q: "What is a 'First-Off' sample in sewing lines?",
      a: "The first garment completed when a bulk sewing line opens. It is immediately audited against the signed Pre-Production sample before mass line sewing continues.",
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
            What Should Be Checked{" "}
            <span className="italic font-medium text-[#2D5016]">During Clothing Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Waiting until final packing to check quality is a recipe for disaster. Discover the critical inline quality checkpoints across cutting, sewing, and finishing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Inline Quality Control</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Quality is built on the factory floor. <strong className="font-medium">Auditing fabric shade bands, cutting accuracy, and first-off line sewing prevents mass production defects.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Checkpoints */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Quality Stages</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Essential Production Checkpoints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checkpoints.map((cp, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{cp.stage}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{cp.desc}</p>
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
              { href: "/learn/pre-production-quality-checks", label: "Pre-Production Quality Checks for Fashion Brands" },
              { href: "/learn/in-line-quality-control-garment-manufacturing", label: "In-Line Quality Control in Garment Manufacturing" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
              { href: "/factory-quality-control-bangladesh", label: "Fenalt Factory Quality Control Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Dedicated inline production oversight</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt station full-time quality inspectors inside partner factories in Dhaka — conducting inline audits across every stage of sewing.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
