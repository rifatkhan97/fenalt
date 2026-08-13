import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Apparel Quality Control Explained: Complete Framework",
  description:
    "Understand the 6 stages of garment quality control - fabric 4-point inspection, pre-production meetings, inline DUPRO, metal detection, and final AQL 2.5 audits.",
  alternates: {
    canonical: "https://fenalt.com/learn/apparel-quality-control-explained",
  },
  openGraph: {
    title: "Apparel Quality Control Explained: Complete Framework",
    description:
      "Understand the 6 stages of garment quality control - fabric 4-point inspection, pre-production meetings, inline DUPRO, metal detection, and final AQL 2.5 audits.",
    url: "https://fenalt.com/learn/apparel-quality-control-explained",
  },
};

export default function ApparelQualityControlExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Apparel Quality Control Explained: Complete Framework",
    description:
      "A technical walkthrough of garment quality control systems, inspection stages, defect classifications, and factory audit practices.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/apparel-quality-control-explained",
    mainEntityOfPage: "https://fenalt.com/learn/apparel-quality-control-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Apparel Quality Control Explained", item: "https://fenalt.com/learn/apparel-quality-control-explained" },
    ],
  };

  const stages = [
    {
      stage: "Stage 1",
      title: "Incoming Raw Material Inspection (Fabric & Trims)",
      desc: "Fabric rolls are audited on a 4-Point System machine for holes, slubs, color shading, and GSM variance before any fabric is unrolled for bulk cutting.",
    },
    {
      stage: "Stage 2",
      title: "Pre-Production (PP) Meeting & Golden Sample Sign-Off",
      desc: "Merchandisers, pattern makers, and sewing line supervisors review the approved golden sample, tech pack specs, and critical construction points before bulk cutting.",
    },
    {
      stage: "Stage 3",
      title: "In-Line Quality Control (DUPRO Inspection)",
      desc: "Inspectors audit garments while being assembled on the sewing line - catching stitch tension flaws, seam puckering, or pocket misalignments at early assembly stations.",
    },
    {
      stage: "Stage 4",
      title: "End-of-Line 100% Visual & POM Measurement Audit",
      desc: "Every sewn garment undergoes 100% inspection for loose threads, missing bartacks, symmetrical balance, and flat table POM measurement verification.",
    },
    {
      stage: "Stage 5",
      title: "Conveyor Metal & Needle Detection Scanning",
      desc: "Packed garments pass through calibrated conveyor metal detectors to ensure zero broken sewing needle fragments or ferrous metal contaminants remain inside.",
    },
    {
      stage: "Stage 6",
      title: "Final Pre-Shipment Inspection (FRI AQL 2.5 Audit)",
      desc: "Independent auditors perform random statistical sampling under ANSI/ASQ Z1.4 (AQL 2.5) standards after 80%+ of the order is packed in export cartons.",
    },
  ];

  const defectMatrix = [
    { defectCategory: "Critical Defects", definition: "Safety hazard or legal violation (e.g. broken needle fragment, sharp wire, missing care law label).", allowedLimit: "0 Defects (Zero Tolerance)" },
    { defectCategory: "Major Defects", definition: "Functional flaw or noticeable aesthetic defect affecting retail saleability (e.g. open seam hole, wrong POM measurement, severe shading).", allowedLimit: "AQL 2.5 Standard (Max 7 defects per 125 sample units)" },
    { defectCategory: "Minor Defects", definition: "Slight cosmetic deviation not affecting wearability or fit (e.g. uncut thread longer than 1cm, minor polybag crinkle).", allowedLimit: "AQL 4.0 Standard (Max 10 defects per 125 sample units)" },
  ];

  const faqs = [
    {
      q: "What is the difference between Quality Assurance (QA) and Quality Control (QC)?",
      a: "Quality Assurance (QA) refers to the preventive processes, tech pack specs, and standard operating procedures established to prevent defects. Quality Control (QC) refers to the physical inspection actions taken to detect defects during and after production.",
    },
    {
      q: "What are the three main defect classifications in apparel inspection?",
      a: "Apparel defects are categorized into Critical (safety hazards like broken needle fragments), Major (functional or obvious aesthetic defects like holes, open seams, or off-spec measurements), and Minor (slight cosmetic flaws like loose threads).",
    },
    {
      q: "Why is needle detection scanning mandatory for garment exports?",
      a: "Needle detection scanning passes every packed garment through high-sensitivity magnetic coils. If a sewing needle breaks during manufacturing and a tip fragment remains embedded in a garment, it poses a severe safety hazard to consumers.",
    },
    {
      q: "What is a 4-Point System in fabric inspection?",
      a: "The ASTM D5430 4-Point System is an international standard for scoring raw fabric defects per 100 square yards. Penalty points (1 to 4) are assigned based on defect length. Rolls exceeding 40 points per 100 sq yards are rejected.",
    },
    {
      q: "How does AQL 2.5 statistical sampling work?",
      a: "Under ANSI/ASQ Z1.4, an inspector selects a random sample size (e.g. 125 garments from a 3,000-unit lot). The shipment passes if major defects equal 7 or fewer, but is rejected if major defects reach 8 or more.",
    },
    {
      q: "How does Fenalt execute quality control in Bangladesh?",
      a: "Fenalt's Dhaka technical team manages 4-point raw fabric checks, in-line DUPRO audits, 100% end-of-line measurements, needle scanning, and final AQL 2.5 pre-shipment inspections for international client brands.",
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
            Apparel Quality Control{" "}
            <span className="italic font-medium text-[#2D5016]">Explained: Complete Framework.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Quality control is not a single inspection at the end of production - it is a continuous 6-stage system that prevents defects before garments enter export cartons.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Systemic Protection</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Effective <strong className="font-medium">Apparel Quality Control (QC)</strong> catches flaws at the source - raw fabric, seam construction, and measurements - before garments ship to customers.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In apparel manufacturing, waiting until final packaging to inspect quality is a recipe for expensive re-work and customer returns. A professional factory QC system enforces rigorous inspection checkpoints at six critical stages - protecting brand reputation and ensuring compliance with international AQL 2.5 standards.
          </p>
        </div>
      </section>

      {/* 6 Stages */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Inspection Framework</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">The 6 Stages of Garment Inspection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider mb-3">{st.stage}</span>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defect Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Defect Classification</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Apparel Quality Defect Classifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Defect Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/2">Industry Definition &amp; Examples</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Allowed Acceptance Limit</th>
                </tr>
              </thead>
              <tbody>
                {defectMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.defectCategory}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.definition}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.allowedLimit}</td>
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
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality (4-Point System)" },
              { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Garments" },
              { href: "/learn/garment-measurement-checking-in-production", label: "How Garment Measurements Are Checked" },
              { href: "/learn/how-to-reduce-defects-in-apparel-production", label: "How to Reduce Defects in Apparel Production" },
              { href: "/apparel-quality-control-services", label: "Fenalt Factory Quality Control Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">On-the-ground factory quality control</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt inspects every production run in Dhaka using AQL 2.5 standards - providing full transparency and inspection reports before shipment.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
