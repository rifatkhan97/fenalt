import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pre-Production Quality Checks for Fashion Brands",
  description:
    "Master Pre-Production (PP) quality audits - verifying lab-dip colors, approved golden samples, fabric shrinkage reports, trim cards, and CAD cutting markers.",
  alternates: {
    canonical: "https://fenalt.com/learn/pre-production-quality-checks",
  },
  openGraph: {
    title: "Pre-Production Quality Checks for Fashion Brands",
    description:
      "Master Pre-Production (PP) quality audits - verifying lab-dip colors, approved golden samples, fabric shrinkage reports, trim cards, and CAD cutting markers.",
    url: "https://fenalt.com/learn/pre-production-quality-checks",
  },
};

export default function PreProductionQualityChecksPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pre-Production Quality Checks for Fashion Brands",
    description:
      "An essential pre-flight quality audit guide for fashion brands prior to authorizing bulk fabric cutting.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/pre-production-quality-checks",
    mainEntityOfPage: "https://fenalt.com/learn/pre-production-quality-checks",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Pre-Production Quality Checks", item: "https://fenalt.com/learn/pre-production-quality-checks" },
    ],
  };

  const checks = [
    {
      title: "1. Sealed Golden Pre-Production (PP) Sample Sign-off",
      desc: "Verify that a physically tagged, dated, and signed Golden PP sample is present on the factory floor as the contractually binding construction and fit benchmark.",
    },
    {
      title: "2. Bulk Fabric Roll 4-Point & Shrinkage Test Reports",
      desc: "Review mill lab reports verifying exact fabric GSM weight, 4-Point System defect scores, color shade continuity across rolls, and length/width wash shrinkage %.",
    },
    {
      title: "3. Complete Approved Trim & Hardware Card Inspection",
      desc: "Audit sealed trim cards showing exact woven neck labels, care tags, thread color matches, zippers, drawstrings, aglets, and polybags before assembly.",
    },
    {
      title: "4. Graded CAD Pattern Marker & Size Ratio Audit",
      desc: "Verify digital cutting marker layouts, ensuring pattern scale-up shrinkage allowances match fabric test data and size ratio curves align with the PO.",
    },
    {
      title: "5. Screen Print & Embroidery Strike-Off Verification",
      desc: "Inspect physical print strike-offs or embroidery swatches under D65 standard light boxes for exact Pantone color match, ink opacity, and registration sharpness.",
    },
    {
      title: "6. Sewing Machine Folder & Gauge Calibration",
      desc: "Ensure sewing machines, seam folders, needle gauges, and thread tension settings are calibrated for the specific fabric weight before loading the line.",
    },
  ];

  const ppChecklistMatrix = [
    { auditItem: "Golden PP Sample", verificationMethod: "Physical tag inspection against tech pack", passCriteria: "100% matched fit, seam types, and construction." },
    { auditItem: "Fabric Rolls (4-Point)", description: "Visual inspection on rolling table", passCriteria: "Under 40 penalty points per 100 sq yards." },
    { auditItem: "Fabric Shrinkage %", description: "3x laboratory laundering test", passCriteria: "Length/width shrinkage within ±3% allowance." },
    { auditItem: "Pantone Color Match", description: "D65 Light Box visual audit against Swatch", passCriteria: "Grade 4.0 or higher on Grey Scale." },
  ];

  const faqs = [
    {
      q: "What is a Pre-Production (PP) Meeting?",
      a: "A Pre-Production Meeting is a formal pre-flight review held between factory line managers, merchandisers, pattern makers, and QC inspectors. They walk through the tech pack, sealed Golden Sample, and potential assembly risks before bulk fabric cutting is authorized.",
    },
    {
      q: "Why is a signed Golden Sample critical for pre-production quality control?",
      a: "The sealed Golden Sample serves as the legal and physical benchmark for the entire production run. In the event of quality disputes, third-party auditors compare bulk garments directly against the Golden Sample.",
    },
    {
      q: "What happens if raw fabric rolls fail pre-production 4-point inspection?",
      a: "If fabric rolls exceed allowed 4-Point System defect limits (e.g. 40 points per 100 sq yards) or exhibit severe color shading across rolls, the fabric is quarantined and rejected back to the textile mill for replacement.",
    },
    {
      q: "What is a Trim Card in apparel manufacturing?",
      a: "A Trim Card is a physical board displaying approved samples of every non-fabric component - including thread colors, care labels, brand tags, zippers, buttons, aglets, and polybags - signed off by the brand prior to assembly.",
    },
    {
      q: "How does fabric shrinkage testing impact pre-production pattern cutting?",
      a: "If raw fabric tests reveal a 4% length shrinkage, CAD pattern makers enlarge the digital cutting patterns by 4% so the finished garment shrinks to exact tech pack specifications after washing.",
    },
    {
      q: "How does Fenalt conduct pre-production quality checks in Bangladesh?",
      a: "Fenalt's technical team in Dhaka leads PP meetings, audits mill fabric test reports, verifies sealed trim cards, and approves CAD cutting markers before any bulk fabric is cut in partner factories.",
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
            Pre-Production Quality Checks{" "}
            <span className="italic font-medium text-[#2D5016]">for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A comprehensive pre-flight quality audit guide - verifying lab-dip colors, approved golden samples, fabric shrinkage reports, trim cards, and CAD cutting markers before bulk cutting.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Pre-Flight Audit</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The cheapest time to fix a manufacturing flaw is <strong className="font-medium">before the fabric is cut</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Pre-Production (PP) quality checks represent the critical gateway between development and mass manufacturing. Verifying raw fabric 4-point reports, sealing approved Golden PP samples, approving physical trim cards, and validating CAD cutting markers prevent costly systemic defects across the entire bulk production run.
          </p>
        </div>
      </section>

      {/* 6 Checks */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Pre-Cutting Protocol</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Mandatory Pre-Production Quality Checks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checks.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PP Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Verification Standards</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Pre-Production Audit Criteria</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Audit Component</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Verification Method</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-5/12">Pass / Approval Criteria</th>
                </tr>
              </thead>
              <tbody>
                {ppChecklistMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.auditItem}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.verificationMethod || row.description}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.passCriteria}</td>
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
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality (4-Point System)" },
              { href: "/learn/in-line-quality-control-garment-manufacturing", label: "In-Line Quality Control in Garment Manufacturing" },
              { href: "/learn/garment-quality-checklist-for-brands", label: "Garment Quality Checklist for Brands" },
              { href: "/garment-quality-control-services", label: "Fenalt Pre-Production Audit Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Pre-flight quality assurance for bulk drops</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt leads pre-production meetings, fabric 4-point checks, and trim approvals in Dhaka before cutting begins.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
