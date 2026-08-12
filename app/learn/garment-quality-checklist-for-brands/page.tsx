import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "How Fashion Brands Can Create a Garment Quality Checklist",
  description:
    "A step-by-step guide for fashion brands on drafting custom garment quality control checklists for factory inspectors.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-quality-checklist-for-brands",
  },
  openGraph: {
    title: "How Fashion Brands Can Create a Garment Quality Checklist",
    description:
      "A step-by-step guide for fashion brands on drafting custom garment quality control checklists for factory inspectors.",
    url: "https://fenalt.com/learn/garment-quality-checklist-for-brands",
  },
};

export default function GarmentQualityChecklistForBrandsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Fashion Brands Can Create a Garment Quality Checklist",
    description:
      "A practical guide for apparel founders on building customized quality control manuals and inspection checklists.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/garment-quality-checklist-for-brands",
    mainEntityOfPage: "https://fenalt.com/learn/garment-quality-checklist-for-brands",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Garment Quality Checklist for Brands", item: "https://fenalt.com/learn/garment-quality-checklist-for-brands" },
    ],
  };

  const steps = [
    { title: "1. Define Product Specification Criteria", desc: "List exact fabric GSM, fiber content, color Pantone codes, seam stitch types (ISO 4915), and trim part numbers." },
    { title: "2. Set Point of Measure (POM) Tolerances", desc: "Specify upper and lower measurement tolerance limits for every size (e.g. Chest Width ±1.0 cm, Sleeve Length ±0.75 cm)." },
    { title: "3. Classify Defect Severity (Critical / Major / Minor)", desc: "Categorize potential defects. Critical = sharp objects, missing legal care tags; Major = open seams, wrong color; Minor = loose thread tails." },
    { title: "4. Mandate AQL Sampling Levels & Testing Protocols", desc: "Specify ANSI/ASQ Z1.4 General Inspection Level II (AQL 2.5 Major / 4.0 Minor) along with wash test requirements." },
  ];

  const faqs = [
    {
      q: "Should I share my internal quality checklist with the factory?",
      a: "YES! Sharing your exact QC checklist before production ensures the factory understands your quality standards and aligns their internal line auditors accordingly.",
    },
    {
      q: "What is the difference between a QC Checklist and a Tech Pack?",
      a: "A tech pack defines how to build the garment. A QC checklist defines how inspectors audit and score the completed garment against specs.",
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
            How Brands Can Create a{" "}
            <span className="italic font-medium text-[#2D5016]">Garment Quality Checklist.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A brand-specific quality control checklist leaves zero room for factory interpretation. Learn how to draft actionable QC inspection manuals.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">QC Manual Design</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A comprehensive <strong className="font-medium">garment quality checklist</strong> defines product specs, POM tolerances, defect severity tiers, and binding AQL sampling limits.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Checklist Architecture</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of a QC Inspection Manual</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
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
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/garment-quality-control-services", label: "Fenalt Garment Quality Control Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Standardized quality control auditing</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides customized quality control manuals and executes standardized AQL audits for all client production orders.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
