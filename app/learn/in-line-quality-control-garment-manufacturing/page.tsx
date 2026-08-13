import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "In-Line Quality Control in Garment Manufacturing",
  description:
    "Explore In-Line Quality Control (IPQC) during garment assembly - Traffic Light Systems, roving inspectors, critical station checkpoints, and real-time defect prevention.",
  alternates: {
    canonical: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
  },
  openGraph: {
    title: "In-Line Quality Control in Garment Manufacturing",
    description:
      "Explore In-Line Quality Control (IPQC) during garment assembly - Traffic Light Systems, roving inspectors, critical station checkpoints, and real-time defect prevention.",
    url: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
  },
};

export default function InLineQualityControlGarmentManufacturingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "In-Line Quality Control in Garment Manufacturing",
    description:
      "A technical operational guide to In-Process Quality Control (IPQC) and real-time sewing line defect management.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
    mainEntityOfPage: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "In-Line Quality Control", item: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing" },
    ],
  };

  const systems = [
    {
      title: "1. Roving In-Line Quality Auditors (IPQC)",
      desc: "Roving inspectors continuously audit 5 to 7 garments per operator station during active sewing, catching thread tension flaws or fabric handling errors before bundle processing.",
    },
    {
      title: "2. The Traffic Light Visual System (Green / Yellow / Red)",
      desc: "Operator workstations display visual status cards. Green = 0 defects; Yellow = 1 minor defect detected; Red = 2+ defects, halting the station for supervisor re-calibration.",
    },
    {
      title: "3. Critical Assembly Station Checkpoints",
      desc: "Stationing dedicated QC auditors at high-risk assembly gates: collar rib attachment, sleeve setting, zipper placket insertion, and kangaroo pocket bartacking.",
    },
    {
      title: "4. Real-Time Digital Defect Log Tracking",
      desc: "QC inspectors log defect types (e.g. skipped stitches, seam puckering, uneven gathers) into tablet terminals to identify mechanical machine flaws instantly.",
    },
    {
      title: "5. Operator Self-Inspection & Bundle Check",
      desc: "Sewing machine operators perform 100% visual checks on the preceding operation before performing their assigned stitch, stopping defective panels from moving down the line.",
    },
    {
      title: "6. Thread Tension & Needle Gauge Calibration",
      desc: "Line supervisors perform hourly checks on sewing machine needle sharpness, thread tension meters, and folder alignment to prevent needle cutting or fabric tearing.",
    },
  ];

  const inlineMatrix = [
    { evaluationAspect: "Inspection Timing", inlineQC: "Active sewing line assembly (Work-in-Progress)", endOfLineQC: "100% completed post-sewing garments" },
    { evaluationAspect: "Primary Goal", inlineQC: "Prevent defect replication & catch machine errors", endOfLineQC: "Filter out defective finished items" },
    { evaluationAspect: "Cost of Correction", inlineQC: "Minimal (instant unpick & re-sew at station)", endOfLineQC: "High (requires dismantling finished clothing)" },
    { evaluationAspect: "Sampling Frequency", inlineQC: "Continuous hourly roving station audits", endOfLineQC: "100% visual inspection of batch" },
  ];

  const faqs = [
    {
      q: "What is the difference between In-Line QC (IPQC) and End-of-Line QC?",
      a: "In-Line QC (In-Process Quality Control) inspects work-in-progress components while garments are actively being assembled on the sewing line. End-of-Line QC inspects fully assembled, completed garments before ironing, washing, or polybag packaging.",
    },
    {
      q: "Why is In-Line QC far more effective than relying on final inspection alone?",
      a: "In-Line QC prevents defect replication. Catching a misaligned sleeve machine folder on sewing station 4 after 5 garments saves 500 garments from being sewn incorrectly, avoiding massive unpicking labor.",
    },
    {
      q: "How does the Traffic Light System work on garment sewing lines?",
      a: "The Traffic Light System uses color-coded cards at each operator station. A Green card indicates zero defects. A Yellow card signals a minor defect warning. A Red card triggers an immediate line stop for mechanic re-calibration.",
    },
    {
      q: "What are the most common defects caught during In-Line QC?",
      a: "Common in-line defects include skipped stitches (due to blunt needles), seam puckering (due to tight thread tension), uneven hem gathers, misaligned collar joins, and oil stains from sewing machine heads.",
    },
    {
      q: "How many roving QC inspectors are needed on a 30-operator sewing line?",
      a: "Standard garment factory engineering assigns 1 roving IPQC auditor for every 10 to 15 sewing operators, plus dedicated stationary QC inspectors at critical assembly junctions (e.g. sleeve setting).",
    },
    {
      q: "How does Fenalt execute in-line quality control in Bangladesh?",
      a: "Fenalt's technical team in Dhaka deploys dedicated roving QC auditors to partner sewing lines - enforcing real-time Traffic Light monitoring and POM measurement checks across every batch.",
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
            In-Line Quality Control{" "}
            <span className="italic font-medium text-[#2D5016]">in Garment Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to In-Process Quality Control (IPQC) - roving station auditors, Traffic Light Systems, critical operation gates, and real-time defect prevention.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Activity size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Real-Time Prevention</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              In-Line QC catches defects <strong className="font-medium">while garments are on the needle</strong> - saving hundreds of units from systemic rework.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In-Process Quality Control (IPQC) is the active operational engine of garment factory quality. By placing roving auditors and stationary QC gates directly along live sewing lines, factories identify machine tension errors, needle damage, and operator handling flaws immediately - stopping bad garments from moving down the line.
          </p>
        </div>
      </section>

      {/* 6 Systems */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Operational Mechanics</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Mechanisms of In-Line Quality Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((s, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{s.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Comparison Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Inspection Methodology</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">In-Line QC vs End-of-Line Inspection</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Evaluation Aspect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">In-Line QC (IPQC Roving)</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">End-of-Line Inspection</th>
                </tr>
              </thead>
              <tbody>
                {inlineMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.evaluationAspect}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.inlineQC}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.endOfLineQC}</td>
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
              { href: "/learn/pre-production-quality-checks", label: "Pre-Production Quality Checks for Fashion Brands" },
              { href: "/learn/final-inspection-finished-garments", label: "Final Inspection of Finished Garments" },
              { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Garments" },
              { href: "/learn/how-to-reduce-defects-in-apparel-production", label: "How to Reduce Defects in Apparel Production" },
              { href: "/apparel-quality-control-services", label: "Fenalt In-Line Inspection Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Real-time in-line quality assurance</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt deploys dedicated in-line QC auditors to partner sewing lines in Dhaka to catch defects at the station level.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
