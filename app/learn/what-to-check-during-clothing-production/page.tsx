import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "What Should Be Checked During Clothing Production?",
  description:
    "A guide for fashion brands on inline quality control checkpoints - checking cutting markers, bundle labeling, initial sewing line setup, ironing finish, and needle detection.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/what-to-check-during-clothing-production",
  },
  openGraph: {
    title: "What Should Be Checked During Clothing Production?",
    description:
      "A guide for fashion brands on inline quality control checkpoints - checking cutting markers, bundle labeling, initial sewing line setup, ironing finish, and needle detection.",
    url: "https://www.fenalt.com/learn/what-to-check-during-clothing-production",
  },
};

export default function WhatToCheckDuringClothingProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Should Be Checked During Clothing Production?",
    description:
      "An inline factory audit guide for fashion brands detailing critical quality checkpoints across cutting, sewing, and finishing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/what-to-check-during-clothing-production",
    mainEntityOfPage: "https://www.fenalt.com/learn/what-to-check-during-clothing-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What to Check During Production", item: "https://www.fenalt.com/learn/what-to-check-during-clothing-production" },
    ],
  };

  const checkpoints = [
    {
      stage: "Stage 1: Raw Fabric & Shade Band Audit",
      desc: "Audit fabric rolls using ASTM D5430 4-point systems for GSM weight, knitting slubs, holes, and group rolls into strict shade bands (A/B/C) to prevent panel shading.",
    },
    {
      stage: "Stage 2: Spreading & Cutting Table Accuracy",
      desc: "Audit fabric ply tension during spreading, notch depth alignment, bundle numbering, and pattern piece symmetry before cut bundles move to sewing lines.",
    },
    {
      stage: "Stage 3: First-Off Assembly Line Sample Audit",
      desc: "Inspect the very first completed garment off the assembly line against the signed Golden Pre-Production Sample for stitch density (SPI), seam tension, and POM measurements.",
    },
    {
      stage: "Stage 4: In-Line QC Roving Station Audits",
      desc: "Deploy roving QC auditors to check 5 to 7 garments per workstation hourly, enforcing Traffic Light visual cards and catching machine tension errors instantly.",
    },
    {
      stage: "Stage 5: Ironing, Pressing & Moisture Content Audit",
      desc: "Verify steam pressing temperature, ensure zero iron shine on dark fabrics, and measure fabric moisture content (below 12%) to prevent mold during ocean shipping.",
    },
    {
      stage: "Stage 6: Conveyor Needle Detection & Export Packaging",
      desc: "Pass 100% of packed garments through calibrated conveyor needle detectors, verifying polybag warning prints, size ratio stickers, and master carton barcodes.",
    },
  ];

  const productionChecklistMatrix = [
    { productionStage: "1. Fabric & Cutting", criticalCheck: "4-Point System score + Shade Banding", passStandard: "Under 40 points/100 sq yds; zero panel shading." },
    { productionStage: "2. First-Off Sample", criticalCheck: "Full POM measurement + Stitch Density (SPI)", passStandard: "100% match with Golden PP Sample." },
    { productionStage: "3. Live Sewing Line", criticalCheck: "Inline DUPRO station audits + Traffic Light", passStandard: "Under 2% station defect rate." },
    { productionStage: "4. Finishing & Packing", criticalCheck: "Needle detection scanning + Carton barcodes", passStandard: "Zero metal detection; 100% scannable barcodes." },
  ];

  const faqs = [
    {
      q: "Why is a fabric shade band check essential during bulk production?",
      a: "Dyeing bulk fabric rolls produces subtle color variations between dye lots. Shade band grouping segregates compatible rolls to ensure front, back, and sleeve panels are cut from identical roll shades.",
    },
    {
      q: "What is a 'First-Off' sample in garment sewing lines?",
      a: "A 'First-Off' sample is the very first garment completed when a bulk sewing line opens. It is immediately audited against the signed Golden Pre-Production Sample before mass line sewing is authorized.",
    },
    {
      q: "Why should fabric moisture content be tested after steam ironing?",
      a: "High-pressure steam ironing leaves moisture trapped inside heavy cotton fleece. If garments are packed into polybags with moisture content exceeding 12%, mildew and mold will develop inside export cartons during ocean transit.",
    },
    {
      q: "What is DUPRO in clothing production checking?",
      a: "DUPRO stands for During Production Inspection. It takes place when 20% to 50% of an order has been sewn, verifying that initial bulk quality matches the pre-production sample.",
    },
    {
      q: "How often should sewing machine needle detection be calibrated?",
      a: "Conveyor needle detection machines must be calibrated at least 3 times daily using a 1.0mm or 1.2mm ferrous test calibration block to guarantee zero broken needle fragments escape inspection.",
    },
    {
      q: "How does Fenalt execute production checks in Bangladesh?",
      a: "Fenalt's Dhaka technical team manages on-site checks across cutting tables, first-off sample sign-offs, in-line DUPRO auditing, moisture testing, and final AQL 2.5 FRI pre-shipment inspections.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Quality Control</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Should Be Checked{" "}
            <span className="italic font-medium text-[#2D5016]">During Clothing Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            An inline factory audit guide for fashion brands detailing critical quality checkpoints across raw fabric, cutting markers, sewing assembly, pressing, and export packaging.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Production Checkpoints</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Monitoring clothing production requires auditing <strong className="font-medium">every stage from cutting tables to needle detection scanners</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Active quality management requires inspecting production as it happens. By enforcing structured checkpoints - including raw fabric 4-point audits, first-off sample sign-offs, inline DUPRO station checks, pressing moisture testing, and conveyor needle scanning - brands prevent minor technical defects from compounding into major bulk failures.
          </p>
        </div>
      </section>

      {/* 6 Checkpoints */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Factory Checkpoints</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Critical Inline Production Checkpoints</h2>
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

      {/* Checkpoint Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Verification Matrix</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Factory Floor Checkpoint &amp; Verification Standard Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Production Stage</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Critical Inspection Checkpoint</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Target Pass Standard</th>
                </tr>
              </thead>
              <tbody>
                {productionChecklistMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.productionStage}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.criticalCheck}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.passStandard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
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
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/learn/in-line-quality-control-garment-manufacturing", label: "In-Line Quality Control in Garment Manufacturing" },
              { href: "/learn/pre-production-quality-checks", label: "Pre-Production Quality Checks for Brands" },
              { href: "/learn/final-inspection-finished-garments", label: "Final Inspection of Finished Garments" },
              { href: "/learn/garment-quality-checklist-for-brands", label: "Garment Quality Checklist for Brands" },
              { href: "/garment-quality-control-services", label: "Fenalt Factory Inspection Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Comprehensive production monitoring</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt inspects fabric rolls, first-off samples, inline sewing, moisture levels, and needle scanning in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
