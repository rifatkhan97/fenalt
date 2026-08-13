import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Inspect Garment Measurements: Practical Guide",
  description:
    "A practical guide for brand QC managers on measuring flat garments - checking chest width, HPS length, shoulder slope, sleeve inseams, and leg openings against tech pack spec sheets.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
  },
  openGraph: {
    title: "How to Inspect Garment Measurements: Practical Guide",
    description:
      "A practical guide for brand QC managers on measuring flat garments - checking chest width, HPS length, shoulder slope, sleeve inseams, and leg openings against tech pack spec sheets.",
    url: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
  },
};

export default function HowToInspectGarmentMeasurementsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Inspect Garment Measurements: Practical Guide",
    description:
      "A step-by-step measurement inspection guide for auditing garment sample and bulk production dimensions.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Inspect Garment Measurements", item: "https://fenalt.com/learn/how-to-inspect-garment-measurements" },
    ],
  };

  const techniques = [
    {
      title: "1. High Point Shoulder (HPS) Length Anchor",
      desc: "Position the steel measuring tape at the neck-shoulder seam intersection (HPS) and extend straight down parallel to center front to the bottom hem, without pulling the body fabric.",
    },
    {
      title: "2. Chest Width (1 Inch Below Armhole Join)",
      desc: "Measure flat across the chest from armhole seam join to armhole seam join exactly 1 inch (2.5 cm) below the armpit fold line, ensuring front and back panels lay flush.",
    },
    {
      title: "3. Cross-Shoulder Span & Shoulder Slope",
      desc: "Lay garment back facing up and measure straight across from left shoulder armhole seam to right shoulder armhole seam along the highest shoulder line.",
    },
    {
      title: "4. Overarm Sleeve Length & Cuff Opening Width",
      desc: "Measure from the shoulder seam join down along the outer sleeve edge to the edge of the cuff ribbing. Measure cuff opening flat from edge to edge.",
    },
    {
      title: "5. Bottom Hem Sweep & Ribbing Tension Audit",
      desc: "Measure flat bottom hem width seam to seam. For ribbed waistbands, measure relaxed flat, then gently stretch to audit rib recovery elasticity.",
    },
    {
      title: "6. Waistband & Inseam Measurements (Bottoms)",
      desc: "For pants/sweatpants, lay waistband flat relaxed (and stretched for elastic waistbands), then measure inseam from crotch seam join along the inner leg to the bottom cuff hem.",
    },
  ];

  const measurementGuideMatrix = [
    { pomName: "Chest / Bust Width (Flat)", measuringPoint: "1\" below armhole join, armpit to armpit", typicalTolerance: "± 1.0 cm" },
    { pomName: "Total Length (HPS)", measuringPoint: "Highest point of shoulder to bottom hem edge", typicalTolerance: "± 1.2 cm" },
    { pomName: "Shoulder Width", measuringPoint: "Shoulder seam tip to shoulder seam tip", typicalTolerance: "± 0.8 cm" },
    { pomName: "Sleeve Length", measuringPoint: "Shoulder seam join to cuff hem edge", typicalTolerance: "± 0.8 cm" },
    { pomName: "Neck Collar Opening", measuringPoint: "Seam to seam across flat collar opening", typicalTolerance: "± 0.5 cm" },
  ];

  const faqs = [
    {
      q: "Should I pull fabric taut when measuring flat garments?",
      a: "No! Garments must be smoothed flat on a hard inspection table without pulling or stretching the fabric. Pulling knitted fabrics taut distorts natural dimensions and produces false out-of-spec readings.",
    },
    {
      q: "What is an acceptable measurement tolerance for heavy streetwear hoodies?",
      a: "Standard acceptable tolerance for heavy fleece hoodies is ±1.0 cm for chest width and body length, ±0.8 cm for sleeve length, and ±0.5 cm for collar openings.",
    },
    {
      q: "Why do factory measurements differ from measurements taken at home?",
      a: "Factory measurement checking takes place on perfectly flat, hard-surface inspection tables using non-stretch steel measuring tapes after a 2-hour fabric conditioning period. Home beds or soft measuring tapes create discrepancies.",
    },
    {
      q: "What is HPS in garment measurement spec sheets?",
      a: "HPS stands for High Point Shoulder. It is the standardized anchor point where the shoulder seam intersects the neck collar seam, serving as the starting reference for total body length measurements.",
    },
    {
      q: "How many garments should be measured during a bulk QC audit?",
      a: "Under ANSI/ASQ Z1.4 sampling standards, QC auditors measure a statistically valid sample size (e.g. 32 to 125 units per batch depending on total order lot size) across every size in the production run.",
    },
    {
      q: "How does Fenalt inspect garment measurements in Bangladesh?",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Quality Control</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Inspect Garment{" "}
            <span className="italic font-medium text-[#2D5016]">Measurements: Practical Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A practical guide for brand QC managers on measuring flat garments - checking chest width, HPS length, shoulder slope, sleeve inseams, and leg openings against tech pack spec sheets.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Precision POM Auditing</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Standardized measurement checking prevents <strong className="font-medium">costly e-commerce sizing returns and fit inconsistencies</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Garment measurement auditing requires strict adherence to standardized Point of Measure (POM) definitions. Laying garments flat on smooth inspection tables, using zero-tension steel measuring tapes, and verifying dimensions against tech pack tolerance allowances ensure consistent sizing across production runs.
          </p>
        </div>
      </section>

      {/* 6 Techniques */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Inspection Techniques</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Steps of Garment Measurement Auditing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techniques.map((t, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{t.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">POM Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Standard Point of Measure (POM) Reference Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Point of Measure (POM)</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/2">Standard Measurement Method</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Allowed Spec Tolerance</th>
                </tr>
              </thead>
              <tbody>
                {measurementGuideMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.pomName}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.measuringPoint}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.typicalTolerance}</td>
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
              { href: "/learn/garment-measurement-checking-in-production", label: "Garment Measurement Checking in Production" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure (POM) in Garments?" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/apparel-quality-control-services", label: "Fenalt Measurement Inspection Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Rigorous measurement inspection</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt performs flat-table POM measurement audits across every size run in Dhaka, enforcing strict tech pack tolerances.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
