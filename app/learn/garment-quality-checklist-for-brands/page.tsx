import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "How Fashion Brands Can Create a Garment Quality Checklist",
  description:
    "A step-by-step guide for fashion brands on drafting custom garment quality control checklists, defect classification manuals, and factory inspection protocols.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-quality-checklist-for-brands",
  },
  openGraph: {
    title: "How Fashion Brands Can Create a Garment Quality Checklist",
    description:
      "A step-by-step guide for fashion brands on drafting custom garment quality control checklists, defect classification manuals, and factory inspection protocols.",
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
    {
      title: "1. Define Product Specification & Material Criteria",
      desc: "List exact fabric GSM weight, fiber composition, Pantone dye codes, stitch types (ISO 4915), thread colors, and specific trim part numbers.",
    },
    {
      title: "2. Set Point of Measure (POM) Tolerance Limits",
      desc: "Detail upper and lower measurement tolerance limits for every size across all key POMs (e.g. Chest Width ±1.0 cm, Body Length ±1.2 cm, Collar Opening ±0.5 cm).",
    },
    {
      title: "3. Classify Defect Severity Categories (Critical / Major / Minor)",
      desc: "Categorize potential flaws: Critical = needle fragments or legal lab defects; Major = open seams, wrong color, off-spec size; Minor = loose thread tails.",
    },
    {
      title: "4. Mandate AQL Sampling Levels & On-Site Testing Protocols",
      desc: "Specify ANSI/ASQ Z1.4 General Inspection Level II (AQL 2.5 Major / 4.0 Minor) along with mandatory crocking, wash shrinkage, and needle detection tests.",
    },
    {
      title: "5. Detail Packaging, Polybag & Barcode Audit Requirements",
      desc: "Define inner polybag warning copy, ratio sticker placement, master carton gross weight limits, and barcode scannability verification standards.",
    },
    {
      title: "6. Distribute Signed QC Manual to Factory Line Managers",
      desc: "Translate and share your finalized QC checklist with factory line supervisors and third-party inspectors prior to pre-production meetings.",
    },
  ];

  const checklistTemplateMatrix = [
    { inspectionSection: "1. Fabric & Material Audit", checkpoints: "GSM weight, color match under D65 light box, zero shading across panels, zero holes or slubs." },
    { inspectionSection: "2. Construction & Stitching", checkpoints: "10-12 SPI density, twin-needle coverstitching on hems, bartacks on pockets, zero skipped stitches." },
    { inspectionSection: "3. Measurement Spec Audit", checkpoints: "All POMs within allowed tolerance limits (±1.0cm); bilateral symmetry between left/right sides." },
    { inspectionSection: "4. Packaging & Labeling", checkpoints: "Correct size tags, legal fiber content care labels, scannable EAN barcodes, suffocation warning polybags." },
  ];

  const faqs = [
    {
      q: "Should I share my internal quality control checklist with the manufacturer?",
      a: "YES! Sharing your exact QC checklist before production begins ensures factory line supervisors and inline auditors understand your quality expectations and train operators accordingly.",
    },
    {
      q: "What is the difference between a Tech Pack and a QC Checklist?",
      a: "A tech pack defines how to build the garment (specifying measurements, materials, and stitch types). A QC checklist defines how inspectors audit and score the finished garment against those specs.",
    },
    {
      q: "How many items should be included in a brand's QC checklist?",
      a: "A comprehensive garment QC checklist typically covers 20 to 30 specific checkpoints across 5 main categories: Materials, Construction, Measurements, Packaging/Labeling, and On-Site Testing.",
    },
    {
      q: "What on-site physical tests should be included in a QC checklist?",
      a: "Key on-site tests include: 1) Zipper pull test, 2) Button/snap pull test (90N force), 3) Seam stretch recovery test, 4) Barcode scannability check, and 5) Conveyor needle detection scanning.",
    },
    {
      q: "What happens if a factory refuses to sign my quality control checklist?",
      a: "A manufacturer's refusal to sign a reasonable AQL 2.5 quality checklist is a major red flag indicating they will not take financial responsibility for production defects. Do not place bulk orders without signed QC standards.",
    },
    {
      q: "How does Fenalt help brands build garment quality checklists in Bangladesh?",
      a: "Fenalt's technical team in Dhaka helps clients customize brand QC manuals, enforcing checklist auditing across 4-point fabric inspections, in-line sewing, and final AQL 2.5 pre-shipment audits.",
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
            How Fashion Brands Can Create a{" "}
            <span className="italic font-medium text-[#2D5016]">Garment Quality Checklist.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A step-by-step guide for fashion brands on drafting custom garment quality control checklists, defect classification manuals, and factory inspection protocols.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">QC Documentation</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A customized quality checklist gives factory inspectors a <strong className="font-medium">clear, objective standard for accepting or rejecting bulk production</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Vague instructions lead to production errors. Building a formal garment quality control checklist ensures that factory floor supervisors, inline auditors, and third-party inspectors inspect your clothing against identical technical parameters - from fabric weight and POM tolerances to defect classifications and master carton packaging.
          </p>
        </div>
      </section>

      {/* 6 Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Checklist Blueprint</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Steps to Build Your Quality Control Manual</h2>
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

      {/* Checklist Template Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Checklist Structure</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Master Garment Quality Inspection Checklist Template</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Inspection Section</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-2/3">Mandatory Factory Checkpoints</th>
                </tr>
              </thead>
              <tbody>
                {checklistTemplateMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.inspectionSection}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.checkpoints}</td>
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
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/learn/what-to-check-during-clothing-production", label: "What to Check During Clothing Production" },
              { href: "/learn/how-to-inspect-garment-measurements", label: "How to Inspect Garment Measurements" },
              { href: "/learn/pre-production-quality-checks", label: "Pre-Production Quality Checks for Brands" },
              { href: "/apparel-quality-control-services", label: "Fenalt Factory QC Audit Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Build your brand quality control manual</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt helps fashion brands draft technical QC checklists and enforces on-site auditing in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
