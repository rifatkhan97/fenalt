import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Common Clothing Quality Problems and Their Causes",
  description:
    "Troubleshoot garment manufacturing defects — puckered seams, shade variation, fabric pilling, skipped stitches, print cracking, and crooked side seam spirality.",
  alternates: {
    canonical: "https://fenalt.com/learn/common-clothing-quality-problems",
  },
  openGraph: {
    title: "Common Clothing Quality Problems and Their Causes",
    description:
      "Troubleshoot garment manufacturing defects — puckered seams, shade variation, fabric pilling, skipped stitches, print cracking, and crooked side seam spirality.",
    url: "https://fenalt.com/learn/common-clothing-quality-problems",
  },
};

export default function CommonClothingQualityProblemsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Clothing Quality Problems and Their Causes",
    description:
      "A technical troubleshooting guide analyzing common apparel defects, root causes, and factory preventive measures.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/common-clothing-quality-problems",
    mainEntityOfPage: "https://fenalt.com/learn/common-clothing-quality-problems",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Common Clothing Quality Problems", item: "https://fenalt.com/learn/common-clothing-quality-problems" },
    ],
  };

  const defects = [
    {
      name: "1. Seam Puckering & Thread Tension Distortion",
      cause: "Excessive sewing machine thread tension, mismatched needle-to-fabric gauge, or using coarse needles on lightweight knit single jersey.",
      fix: "Lower machine top/bobbin thread tension, use core-spun polyester thread, and switch to fine ballpoint needles (70/10 gauge).",
    },
    {
      name: "2. Fabric Shade Band Variation Across Garments",
      cause: "Mixing different fabric dye lots during cutting marker spreading without segregating rolls into shade bands.",
      fix: "Group fabric rolls into strict shade bands (A/B/C) prior to cutting, and cut left/right garment panels from identical roll lots.",
    },
    {
      name: "3. Graphic Screen Print Cracking & Peeling",
      cause: "Under-curing plastisol or water-based inks inside the conveyor dryer tunnel or using incorrect ink additive ratios.",
      fix: "Calibrate conveyor dryer tunnel temperatures to 160°C (320°F) with 90-second dwell time, verifying with thermal test strips.",
    },
    {
      name: "4. Asymmetric Hem & Side Seam Spirality (Torquing)",
      cause: "Skewed fabric grainlines during cutting table spreading, or knitted loop torque relaxing post-wash.",
      fix: "Allow knitted fabric rolls to relax un-tensioned for 24 hours post-knitting; align grainlines perfectly flat before cutting.",
    },
    {
      name: "5. Skipped Stitches & Seam Thread Popping",
      cause: "Blunt or bent sewing needles, improper hook timing, or inadequate thread elasticity under seam extension.",
      fix: "Replace sewing needles every 8 hours, re-time looper hooks, and use high-stretch coverstitch machinery (Class 605) on stretchy seams.",
    },
    {
      name: "6. Surface Fabric Pilling & Micro-Fleece Fuzzing",
      cause: "Using short-staple carded cotton yarns with low fiber twist that fray and tangle into fuzzy pills under friction.",
      fix: "Source long-staple 100% combed ring-spun cotton yarns and apply enzyme bio-washing treatments during garment finishing.",
    },
  ];

  const defectTroubleshootingMatrix = [
    { defectName: "Seam Puckering", primaryCause: "High thread tension / coarse needle", correctiveAction: "Adjust tension discs + ballpoint needle." },
    { defectName: "Seam Spirality / Twisting", primaryCause: "Cutting off-grain / high loop torque", correctiveAction: "24-hr fabric relaxation + flat marker spreading." },
    { defectName: "Print Peeling / Cracking", primaryCause: "Under-cured ink in dryer tunnel", correctiveAction: "Tunnel heat calibration to 160°C." },
    { defectName: "Skipped Stitches", primaryCause: "Blunt needle tip / looper mis-timing", correctiveAction: "Daily needle changes + mechanic timing check." },
  ];

  const faqs = [
    {
      q: "Why do t-shirt side seams twist toward the front after home washing?",
      a: "Side seam twisting (spirality) occurs when circular knit fabric is cut off-grain under machine tension. When exposed to water and heat, the twisted cotton loops relax back to their natural torque, pulling the seam forward.",
    },
    {
      q: "How can brands enforce zero defect tolerance on critical flaws?",
      a: "By establishing binding ANSI/ASQ Z1.4 AQL 2.5 inspection criteria, requiring signed physical Golden PP Samples, and deploying dedicated in-line QC auditors to the factory floor.",
    },
    {
      q: "What causes small pinholes near garment seams after washing?",
      a: "Seam pinholes (needle cutting) occur when coarse or blunt sewing needles puncture and sever knitted fabric yarns instead of sliding between them. Switching to sharp ballpoint needles prevents yarn severing.",
    },
    {
      q: "What is fabric shade bar variation in bulk clothing?",
      a: "Shade bar variation occurs when panels from different dye lots are sewn into the same garment, making sleeves appear slightly darker or lighter than the body panel under natural light.",
    },
    {
      q: "How do I prevent fabric pilling on fleece hoodies?",
      a: "Prevent pilling by specifying 100% long-staple combed cotton yarns (rather than carded cotton) and requiring an industrial enzyme bio-wash during wet processing to digest loose surface fibers.",
    },
    {
      q: "How does Fenalt troubleshoot clothing quality problems in Dhaka?",
      a: "Fenalt's Dhaka quality engineers inspect raw fabric rolls under 4-point systems, audit in-line thread tension, verify conveyor print dryer temperatures, and conduct pre-shipment AQL 2.5 audits.",
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
            Common Clothing{" "}
            <span className="italic font-medium text-[#2D5016]">Quality Problems &amp; Causes.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical troubleshooting guide analyzing common apparel manufacturing defects — puckered seams, shade variation, fabric pilling, skipped stitches, print cracking, and twisted side seams.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Defect Troubleshooting</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Every garment defect has a specific <strong className="font-medium">root cause in machinery, materials, or operator handling</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Understanding why defects happen allows fashion brand managers and factory quality engineers to solve production issues before bulk shipments are affected. From calibrating sewing machine thread tension to prevent puckering to enforcing fabric shade banding and conveyor print curing, technical prevention guarantees clean retail quality.
          </p>
        </div>
      </section>

      {/* 6 Defects */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Root Cause Analysis</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Common Defects &amp; Corrective Fixes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {defects.map((d, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{d.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-3"><strong className="text-[#FAF9F6]">Cause:</strong> {d.cause}</p>
                <div className="flex items-start gap-2 text-xs font-semibold text-[#C8A882]">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                  <span>Fix: {d.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Quick Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Defect Troubleshooting &amp; Preventive Action Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Defect Name</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-5/12">Primary Root Cause</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Preventive Factory Action</th>
                </tr>
              </thead>
              <tbody>
                {defectTroubleshootingMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.defectName}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.primaryCause}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.correctiveAction}</td>
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
              { href: "/learn/how-to-reduce-defects-in-apparel-production", label: "How to Reduce Defects in Apparel Production" },
              { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Garments" },
              { href: "/learn/garment-shrinkage-in-apparel-manufacturing", label: "Understanding Garment Shrinkage Mechanics" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/apparel-quality-control-services", label: "Fenalt Defect Prevention & QC Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Prevent garment defects before shipment</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt inspects fabric rolls, audits in-line sewing, and enforces AQL 2.5 pre-shipment standards in Dhaka to eliminate defects.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
