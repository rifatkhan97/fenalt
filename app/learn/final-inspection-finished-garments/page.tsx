import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Final Inspection for Finished Garments: AQL Protocol",
  description:
    "Learn how Final Random Inspection (FRI) works - applying ANSI/ASQ Z1.4 AQL sampling tables, visual defect classification (Critical/Major/Minor), POM audits, and export packaging checks.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/final-inspection-finished-garments",
  },
  openGraph: {
    title: "Final Inspection for Finished Garments: AQL Protocol",
    description:
      "Learn how Final Random Inspection (FRI) works - applying ANSI/ASQ Z1.4 AQL sampling tables, visual defect classification (Critical/Major/Minor), POM audits, and export packaging checks.",
    url: "https://www.fenalt.com/learn/final-inspection-finished-garments",
  },
};

export default function FinalInspectionFinishedGarmentsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Final Inspection for Finished Garments: AQL Protocol",
    description:
      "A technical walkthrough of Final Random Inspection (FRI), AQL sampling procedures, and carton export audits.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/final-inspection-finished-garments",
    mainEntityOfPage: "https://www.fenalt.com/learn/final-inspection-finished-garments",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Final Inspection Finished Garments", item: "https://www.fenalt.com/learn/final-inspection-finished-garments" },
    ],
  };

  const steps = [
    {
      title: "1. 100% Production Completion & 80%+ Packed Warehouse Audit",
      desc: "Final Random Inspection (FRI) takes place in the factory warehouse only when 100% of the bulk order is finished and at least 80% is packed into final master export cartons.",
    },
    {
      title: "2. Random Statistical Carton Sampling (ANSI/ASQ Z1.4)",
      desc: "Auditors pull sample cartons randomly from the top, middle, and bottom of warehouse pallets across all sizes according to statistical AQL tables (e.g. 125 units sampled for a 3,000-unit lot).",
    },
    {
      title: "3. Flat Table POM Measurement & Symmetry Audit",
      desc: "Auditors measure sample garments flat on smooth inspection tables, logging key POM dimensions against the approved tech pack size spec table under defined tolerance limits (±1.0cm).",
    },
    {
      title: "4. Visual Workmanship Defect Classification",
      desc: "Auditing samples for Critical (safety hazards like broken needles), Major (functional defects like open seams or holes), and Minor (cosmetic flaws like loose threads) defect limits.",
    },
    {
      title: "5. Conveyor Needle & Ferrous Metal Detection Check",
      desc: "Verifying that 100% of packed polybags pass through calibrated needle detection scanning machines to ensure zero metal contamination.",
    },
    {
      title: "6. Master Carton Packaging & Barcode Verification",
      desc: "Inspecting master carton gross weight, polybag suffocation warning prints, size ratio stickers, shipping marks, and EAN/UPC barcode scannability.",
    },
  ];

  const friMatrix = [
    { lotSize: "500 – 1,200 Units", sampleSize: "80 Garments", maxMajorDefects: "5 (Pass) / 6 (Fail)", maxMinorDefects: "7 (Pass) / 8 (Fail)" },
    { lotSize: "1,201 – 3,200 Units", sampleSize: "125 Garments", maxMajorDefects: "7 (Pass) / 8 (Fail)", maxMinorDefects: "10 (Pass) / 11 (Fail)" },
    { lotSize: "3,201 – 10,000 Units", sampleSize: "200 Garments", maxMajorDefects: "10 (Pass) / 11 (Fail)", maxMinorDefects: "14 (Pass) / 15 (Fail)" },
  ];

  const faqs = [
    {
      q: "What happens if a Final Random Inspection (FRI) fails?",
      a: "If major or critical defect counts exceed allowed AQL thresholds, the auditor issues a 'REJECTED' inspection report. The factory must unpack 100% of export cartons, re-screen and repair defective garments, and re-submit the lot for a second FRI audit at factory expense.",
    },
    {
      q: "Who performs the Final Random Inspection prior to export?",
      a: "FRIs are performed by independent third-party QC inspection agencies (such as SGS, QIMA, or Bureau Veritas) or by Fenalt's dedicated quality engineering team in Dhaka.",
    },
    {
      q: "Why must 80% of garments be packed before an FRI can begin?",
      a: "Inspecting packed cartons ensures auditors can evaluate export packaging, master carton labeling, polybag warning copy, and barcode scannability alongside physical garment quality.",
    },
    {
      q: "What is an inspection Certificate of Conformance (CoC)?",
      a: "A Certificate of Conformance is the official document issued after a shipment passes FRI audit under AQL 2.5 standards, authorizing the freight forwarder to release cargo for export shipping.",
    },
    {
      q: "How long does a typical Final Random Inspection take?",
      a: "A standard FRI audit sampling 125 to 200 garments takes 1 full working day for a qualified QC auditor, including measurement logging, visual auditing, and report generation.",
    },
    {
      q: "How does Fenalt execute final inspections in Bangladesh?",
      a: "Fenalt's Dhaka quality engineers conduct on-site FRI audits under ANSI/ASQ Z1.4 AQL 2.5 standards - issuing detailed photo inspection reports before releasing shipping authorization.",
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
            Final Inspection for Finished Garments:{" "}
            <span className="italic font-medium text-[#2D5016]">AQL Protocol.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to Final Random Inspection (FRI) - applying ANSI/ASQ Z1.4 AQL sampling tables, visual defect classifications, POM measurement audits, and packaging checks.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Pre-Shipment Gate</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Final Random Inspection is the <strong className="font-medium">last line of defense before apparel leaves the factory warehouse</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Final Random Inspection (FRI) protects fashion brands from receiving defective shipments. Conducted in the factory warehouse when at least 80% of an order is packed in master cartons, FRI applies international ANSI/ASQ Z1.4 statistical sampling to verify fit, stitching, trim accuracy, needle detection, and barcode labeling.
          </p>
        </div>
      </section>

      {/* 6 FRI Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Audit Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Stages of Final Pre-Shipment Inspection</h2>
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

      {/* FRI Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">AQL Sampling Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">ANSI/ASQ Z1.4 AQL 2.5 Sampling Pass/Fail Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Order Lot Size</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">AQL Sample Size</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Major Defects (AQL 2.5)</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Minor Defects (AQL 4.0)</th>
                </tr>
              </thead>
              <tbody>
                {friMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.lotSize}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.sampleSize}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.maxMajorDefects}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.maxMinorDefects}</td>
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
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
              { href: "/learn/garment-measurement-checking-in-production", label: "Garment Measurement Checking in Production" },
              { href: "/learn/in-line-quality-control-garment-manufacturing", label: "In-Line Quality Control in Garment Manufacturing" },
              { href: "/learn/common-clothing-quality-problems", label: "Common Clothing Quality Problems & Solutions" },
              { href: "/garment-quality-control-services", label: "Fenalt Final Inspection (FRI) Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Independent final pre-shipment inspections</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt performs Final Random Inspections (FRI) under AQL 2.5 in Dhaka before releasing shipping authorization.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
