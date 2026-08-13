import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "How Garment Measurements Are Checked During Production",
  description:
    "Discover how factory QC teams audit flat garment measurements on the production line - using measurement spec sheets, POM templates, steel measuring tapes, and tolerance allowances.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-measurement-checking-in-production",
  },
  openGraph: {
    title: "How Garment Measurements Are Checked During Production",
    description:
      "Discover how factory QC teams audit flat garment measurements on the production line - using measurement spec sheets, POM templates, steel measuring tapes, and tolerance allowances.",
    url: "https://fenalt.com/learn/garment-measurement-checking-in-production",
  },
};

export default function GarmentMeasurementCheckingInProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Garment Measurements Are Checked During Production",
    description:
      "A technical walkthrough of factory measurement inspection procedures, POM auditing, and spec sheet verification.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/garment-measurement-checking-in-production",
    mainEntityOfPage: "https://fenalt.com/learn/garment-measurement-checking-in-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Garment Measurement Checking", item: "https://fenalt.com/learn/garment-measurement-checking-in-production" },
    ],
  };

  const steps = [
    {
      title: "1. Garment Conditioning & Relaxation Period",
      desc: "Garments are laid completely flat on smooth inspection tables in a temperature-controlled room. Knitted garments are allowed to relax un-tensioned for 2 to 4 hours post-ironing before measurement to eliminate heat contraction distortions.",
    },
    {
      title: "2. Point of Measure (POM) Alignment & Positioning",
      desc: "QC inspectors align garments according to official POM diagram definitions (e.g. chest width measured 1 inch below armhole join, laid flat seam-to-seam without stretching ribbing).",
    },
    {
      title: "3. Flexible Steel Measuring Tape Calibration",
      desc: "Inspectors use non-stretch flexible steel measuring tapes or fiberglass rules placed flat along seam paths, applying zero tension to prevent artificial fabric stretching during measuring.",
    },
    {
      title: "4. Tech Pack Spec Sheet & Tolerance Verification",
      desc: "Every measured dimension is logged directly against the approved tech pack size spec table. Dimensions must fall strictly within defined tolerance boundaries (e.g. ±1.0 cm for chest, ±1.5 cm for total length).",
    },
    {
      title: "5. Left-to-Right Bilateral Symmetry Audit",
      desc: "Inspectors check left-to-right symmetry - verifying that left sleeve length matches right sleeve length, shoulder seam slopes are balanced, and chest pockets line up evenly across the center placket.",
    },
    {
      title: "6. Pre-Wash vs Post-Wash Dimensional Shrinkage Audit",
      desc: "Sample garments from each sewing batch undergo 3x laundering trials to verify that post-wash shrinkage remains within approved tolerance limits before bulk packing.",
    },
  ];

  const toleranceMatrix = [
    { garmentCategory: "T-Shirts (Single Jersey)", chestWidth: "± 1.0 cm", bodyLength: "± 1.5 cm", sleeveLength: "± 0.8 cm", shoulderWidth: "± 0.8 cm" },
    { garmentCategory: "Hoodies & Sweatshirts", chestWidth: "± 1.2 cm", bodyLength: "± 1.5 cm", sleeveLength: "± 1.0 cm", hoodHeight: "± 1.0 cm" },
    { garmentCategory: "Trousers & Chinos (Woven)", waistFlat: "± 1.0 cm", inseamLength: "± 1.2 cm", thighWidth: "± 0.8 cm", legOpening: "± 0.6 cm" },
  ];

  const faqs = [
    {
      q: "What happens when a garment falls outside measurement tolerance during QC?",
      a: "Out-of-spec garments are tagged with red defect stickers and quarantined from bulk packing. The QC supervisor determines whether the issue is fixable via steam re-shaping or if the sewing operator must adjust machine guide gauges.",
    },
    {
      q: "Why do home measurements often differ from factory QC measurement sheets?",
      a: "Factory measurement checking takes place on perfectly flat, hard-surface inspection tables using zero-tension steel tapes after a 2-hour fabric relaxation period. Measuring garments on soft beds or pulling knitted seams by hand creates measurement discrepancies.",
    },
    {
      q: "What is the difference between a critical POM and a non-critical POM?",
      a: "Critical POMs directly affect fit and comfort (e.g. chest width, waist circumference, total body length) and carry strict tolerances (±0.8cm to ±1.2cm). Non-critical POMs cover minor aesthetic details (e.g. neck tape width) with wider tolerances.",
    },
    {
      q: "How many garments are measured during an inline production check?",
      a: "Under ANSI/ASQ Z1.4 sampling standards, QC inspectors measure a statistically representative sample size (e.g. 32 to 125 units per batch depending on lot size) across all size runs (XS to 3XL).",
    },
    {
      q: "How does fabric stretch affect measurement checking?",
      a: "Knitted fabrics with high spandex/elastane content contract naturally when laid on a table. Inspectors must lay stretch garments completely relaxed without smoothing or pulling the fabric outwards.",
    },
    {
      q: "How does Fenalt conduct measurement inspections in Bangladesh?",
      a: "Fenalt's inline QC inspectors in Dhaka use calibrated measurement spec boards, auditing garment dimensions at 3 key stages: cutting panel check, pre-wash assembly check, and final post-ironing pre-shipment audit.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Garment Measurements{" "}
            <span className="italic font-medium text-[#2D5016]">Are Checked in Production.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to factory measurement audits - flat table conditioning, POM alignment, steel tape tension control, tolerance verification, and symmetry checks.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Ruler size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Precision QC Gate</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Consistent sizing across production runs depends on <strong className="font-medium">standardized, zero-tension flat table measurement audits</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Measurement variations are one of the leading causes of e-commerce returns in the fashion industry. During apparel manufacturing, factory QC teams use systematic Point of Measure (POM) protocols to verify that every cut panel and finished garment matches tech pack size specifications within strict allowable tolerance limits.
          </p>
        </div>
      </section>

      {/* 6 Inspection Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Factory Protocol</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Steps of Factory Measurement Auditing</h2>
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

      {/* Tolerance Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Industry Benchmarks</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Standard Measurement Tolerances</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Garment Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Chest / Waist</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Total Length</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Sleeve / Inseam</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Shoulder / Thigh</th>
                </tr>
              </thead>
              <tbody>
                {toleranceMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.garmentCategory}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.chestWidth}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.bodyLength}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.sleeveLength}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.shoulderWidth}</td>
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
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure (POM) in Garments?" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Garments" },
              { href: "/learn/garment-shrinkage-in-apparel-manufacturing", label: "Garment Shrinkage in Apparel Manufacturing" },
              { href: "/garment-quality-control-services", label: "Fenalt Production Measurement Inspection Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision sizing enforcement</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt performs flat-table POM measurement audits across every size run in Bangladesh, enforcing strict tech pack tolerances.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
