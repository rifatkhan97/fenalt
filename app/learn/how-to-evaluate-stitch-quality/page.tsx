import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Evaluate Stitch Quality in Finished Garments",
  description:
    "Learn how to audit garment sewing quality — checking SPI density, seam tension, skipped stitches, puckering, raw edge overlock coverage, and seam pull strength testing.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
  },
  openGraph: {
    title: "How to Evaluate Stitch Quality in Finished Garments",
    description:
      "Learn how to audit garment sewing quality — checking SPI density, seam tension, skipped stitches, puckering, raw edge overlock coverage, and seam pull strength testing.",
    url: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
  },
};

export default function HowToEvaluateStitchQualityPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Evaluate Stitch Quality in Finished Garments",
    description:
      "An inspection guide for fashion brand QC managers on auditing sewing stitch quality, tension, and seam integrity.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Evaluate Stitch Quality", item: "https://fenalt.com/learn/how-to-evaluate-stitch-quality" },
    ],
  };

  const checks = [
    {
      title: "1. Stitches Per Inch (SPI) Density Measurement",
      desc: "Count individual needle penetrations across an exact 1-inch span using a sewing gauge ruler. Premium t-shirts and hoodies demand 10 to 12 SPI; cheap fast-fashion garments cut costs by using under 8 SPI, leading to seam popping.",
    },
    {
      title: "2. Seam Tension & Puckering Audit",
      desc: "Inspect flat seams under bright light for wavy gather puckering (needle or bobbin tension too tight) or loose thread loops on the reverse side (tension too loose). Balanced tension yields flat, smooth seam lines.",
    },
    {
      title: "3. Skipped Stitches & Broken Thread Inspection",
      desc: "Scan long continuous seam lines (side seams, inseams, sleeve joins) for missing needle penetrations caused by dull needles, improper hook timing, or thread friction fraying.",
    },
    {
      title: "4. Physical Seam Extension & Pull Test",
      desc: "Vigorously stretch knit garment seams horizontally by hand. Coverstitch and overlock seams must stretch smoothly alongside the fabric without thread cracking, snapping, or exposing raw fabric edges.",
    },
    {
      title: "5. Raw Edge Overlock Binding & Trimming Coverage",
      desc: "Turn garments inside out and inspect internal seam allowances. Overlock looper threads must completely wrap raw cut fabric edges without leaving un-cut stray threads or unravelling corners.",
    },
    {
      title: "6. Stress-Point Bartack & Reinforcement Check",
      desc: "Verify that high-stress points — such as kangaroo pocket corners, belt loops, side slits, and fly openings — feature dense multi-stitch bartacks to prevent fabric tearing under load.",
    },
  ];

  const defectsMatrix = [
    { defect: "Skipped Stitches", rootCause: "Dull/bent needle, incorrect needle gauge for GSM, or misaligned machine hook timing.", resolution: "Replace sewing needle, recalibrate hook-to-needle clearance." },
    { defect: "Seam Puckering", rootCause: "Thread tension too high, machine foot pressure excessive, or fabric feed mismatch.", resolution: "Loosen top/bottom thread tension, lower presser foot pressure." },
    { defect: "Popped Hem Threads", rootCause: "Inflexible lockstitch used on knit fabric instead of elastic coverstitch.", resolution: "Switch machine to 2-needle coverstitch (Class 605) with looper thread." },
    { defect: "Seam Slippage / Open Seams", rootCause: "Insufficent seam allowance (under 0.6cm) or low SPI density under 8 SPI.", resolution: "Increase seam allowance width and set SPI to 10–12." },
  ];

  const faqs = [
    {
      q: "What is an acceptable SPI (Stitches Per Inch) for t-shirts and hoodies?",
      a: "For high-end retail t-shirts, sweatshirts, and hoodies, the industry standard is 10 to 12 SPI on overlock and coverstitch seams. Heavy outerwear or denim inseams use 8 to 10 SPI with heavy Tex 40+ thread.",
    },
    {
      q: "What causes skipped stitches during garment sewing?",
      a: "Skipped stitches occur when the sewing machine needle fails to form a thread loop for the hook or looper to catch. Primary causes include dull or bent needles, incorrect needle size for fabric GSM, or improper machine hook timing.",
    },
    {
      q: "How can brands prevent seam puckering on lightweight fabrics?",
      a: "Seam puckering is prevented by using fine ballpoint needles (size 70/10 or 75/11), reducing presser foot pressure, using high-tenacity core-spun polyester thread, and balancing top and bobbin thread tension.",
    },
    {
      q: "What is seam grin in apparel quality inspection?",
      a: "Seam grin (or seam opening) occurs when a seam is pulled sideways and loose threads become visible between the joined fabric panels. It indicates loose thread tension or inadequate SPI density.",
    },
    {
      q: "Why is a physical seam pull test mandatory during AQL inspections?",
      a: "A visual inspection cannot reveal if thread will pop under real-world wear. QC inspectors perform a manual pull test by stretching seams to 80%+ of total fabric elasticity to verify thread lock integrity.",
    },
    {
      q: "How does Fenalt audit sewing quality in Bangladesh micro-factories?",
      a: "Fenalt's inline QC inspectors in Dhaka conduct daily SPI checks, seam pull tests, and 100% finished garment inspections using ANSI/ASQ Z1.4 AQL 2.5 quality standards.",
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
            How to Evaluate{" "}
            <span className="italic font-medium text-[#2D5016]">Stitch Quality in Garments.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A practical QC guide to auditing garment sewing — measuring SPI density, evaluating seam tension, detecting skipped stitches, and performing seam pull tests.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Search size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Quality Audit Gate</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Flawless sewing quality is what separates <strong className="font-medium">premium retail apparel from disposable fast fashion</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Seam integrity is the ultimate test of garment craftsmanship. Even if a brand uses high-grade combed cotton fabric, poor sewing execution — such as low SPI density, skipped stitches, or tight thread tension — will cause seams to pop, pucker, or un-ravel after a few wears. Auditing stitch quality ensures your product meets retail standards.
          </p>
        </div>
      </section>

      {/* 6 Inspection Checks */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Inspection Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Steps to Audit Sewing Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checks.map((ch, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{ch.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defects Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Troubleshooting</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Common Sewing Defects &amp; Solutions</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Sewing Defect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-5/12">Root Cause</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Factory Resolution</th>
                </tr>
              </thead>
              <tbody>
                {defectsMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.defect}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.rootCause}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.resolution}</td>
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
              { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
              { href: "/learn/apparel-seam-types-explained", label: "Apparel Seam Types & Construction Explained" },
              { href: "/learn/garment-quality-checklist-for-brands", label: "Garment Quality Checklist for Brands" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Process Explained" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/apparel-quality-control-services", label: "Fenalt Apparel Inspection Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Strict sewing quality inspection</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt performs inline SPI checks, seam pull tests, and ANSI AQL 2.5 quality control across partner micro-factories in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
