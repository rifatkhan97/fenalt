import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, FileCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Pack vs Sewing Pattern: What's the Difference?",
  description:
    "Understand the core differences between a tech pack (blueprint specification document) and a sewing pattern (physical or CAD cutting template) in garment manufacturing.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/tech-pack-vs-sewing-pattern",
  },
  openGraph: {
    title: "Tech Pack vs Sewing Pattern: What's the Difference?",
    description:
      "Understand the core differences between a tech pack (blueprint specification document) and a sewing pattern (physical or CAD cutting template) in garment manufacturing.",
    url: "https://www.fenalt.com/learn/tech-pack-vs-sewing-pattern",
  },
};

export default function TechPackVsSewingPatternPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tech Pack vs Sewing Pattern: What's the Difference?",
    description:
      "A technical comparison defining the distinct roles of tech packs and sewing patterns in clothing manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/tech-pack-vs-sewing-pattern",
    mainEntityOfPage: "https://www.fenalt.com/learn/tech-pack-vs-sewing-pattern",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Tech Pack vs Sewing Pattern", item: "https://www.fenalt.com/learn/tech-pack-vs-sewing-pattern" },
    ],
  };

  const comparisons = [
    {
      factor: "Primary Format",
      techPack: "Multi-page specification document (PDF or Excel spreadsheet) with vector drawings and tables.",
      pattern: "Digital CAD vector cutting files (DXF/AAMA) or physical paper pattern piece templates.",
    },
    {
      factor: "Primary Purpose",
      techPack: "Communicates complete design intent, fabric specs, BOM, tolerances, and quality guidelines to suppliers.",
      pattern: "Serves as the physical layout template used directly by cutting technicians to cut fabric layers.",
    },
    {
      factor: "Target Audience",
      techPack: "Sourcing managers, fabric suppliers, merchandisers, pattern makers, and QC auditors.",
      pattern: "CAD pattern engineers, cutting table operators, and sample room machinists.",
    },
    {
      factor: "Key Contents",
      techPack: "BOM, Pantone colorways, stitch callouts, print placement coordinates, POM spec tables, packaging rules.",
      pattern: "2D 1:1 scale panel outlines (front, back, sleeve, hood, pocket) with seam allowances, grainlines, and notch marks.",
    },
    {
      factor: "Created By",
      techPack: "Fashion designers or technical designers during early product development.",
      pattern: "Professional CAD pattern makers or sample machinists prior to sample sewing.",
    },
    {
      factor: "Workflow Sequence",
      techPack: "Created first - acts as the master reference from which sewing patterns are drafted.",
      pattern: "Drafted second - uses tech pack POM tables and flat sketches as mathematical targets.",
    },
    {
      factor: "Standard File Extensions",
      techPack: ".PDF, .XLSX, .AI, .PNG",
      pattern: ".DXF (AAMA/ASTM), .PLT, .RUL, .MDL",
    },
    {
      factor: "Ownership & Rights",
      techPack: "Created and owned directly by the brand as intellectual property.",
      pattern: "Drafted by the factory or pattern studio; brand must explicitly contract for CAD file ownership.",
    },
  ];

  const productionWorkflow = [
    {
      step: "1. Brand Creates & Issues Master Tech Pack",
      detail: "The brand compiles design vector sketches, POM measurement specs, and BOM fabric callouts into a finalized tech pack PDF.",
    },
    {
      step: "2. Factory Pattern Maker Drafts CAD Master Pattern",
      detail: "Using specialised CAD software (Gerber, Lectra, Optitex), the pattern maker converts flat tech pack specs into a 1:1 scale 2D digital master pattern.",
    },
    {
      step: "3. Sample Machinist Sews Fit Prototype",
      detail: "Fabric is cut using the CAD pattern pieces and assembled to test pattern line accuracy against tech pack POM dimensions.",
    },
    {
      step: "4. CAD Pattern Is Graded for Bulk Production",
      detail: "Once fit is signed off, the pattern maker applies CAD size grading across the full size run (XS–3XL) and generates optimized cutting markers.",
    },
  ];

  const faqs = [
    {
      q: "Can a clothing factory make a sewing pattern if I only provide a tech pack?",
      a: "Yes! Professional apparel manufacturers employ technical CAD pattern makers who translate tech pack POM measurement tables, flat vector drawings, and construction notes into 1:1 digital sewing patterns.",
    },
    {
      q: "Can I start sampling if I only have a sewing pattern but no tech pack?",
      a: "No. A sewing pattern only provides fabric cutting shapes - it does not specify fabric composition, GSM weight, thread types, Pantone colours, label placement, stitch callouts, or quality control tolerances. Both are required for accurate manufacturing.",
    },
    {
      q: "Do brands own the CAD sewing patterns created by a factory?",
      a: "Brands own the digital pattern files if pattern development fees were paid as part of the sampling agreement. Brands should explicitly confirm in their contract that exported DXF/AAMA CAD pattern files will be delivered upon request.",
    },
    {
      q: "What is DXF/AAMA format in CAD pattern making?",
      a: "DXF (Drawing Exchange Format) with AAMA/ASTM extensions is the universal open standard for digital garment patterns, allowing patterns created in one CAD system (such as Lectra or Gerber) to be opened in any other system worldwide.",
    },
    {
      q: "What is seam allowance in pattern making?",
      a: "Seam allowance is the extra width of fabric added outside the actual seamline (typically 0.6cm to 1.2cm) to allow panels to be sewn together securely without altering final garment dimensions specified in the tech pack.",
    },
    {
      q: "How does Fenalt handle pattern development?",
      a: "Fenalt's Dhaka technical team converts brand tech packs into precise digital CAD patterns, conducts fit sampling, and manages CAD size grading for bulk production.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Patterns</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Tech Pack vs Sewing Pattern:{" "}
            <span className="italic font-medium text-[#2D5016]">What&apos;s the Difference?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            While both documents are essential for clothing production, a tech pack is a comprehensive specification blueprint while a sewing pattern is the physical or CAD cutting template.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileCode size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Core Distinction</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">tech pack</strong> answers: <em>&ldquo;What materials, measurements, colours, and construction rules build this garment?&rdquo;</em> A <strong className="font-medium">sewing pattern</strong> answers: <em>&ldquo;What exact 2D panel shapes must be cut from fabric to sew it?&rdquo;</em>
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Understanding the distinction between tech packs and sewing patterns prevents costly miscommunications when commissioning clothing production. Brands supply tech packs as master instructions; pattern makers translate those specs into physical cutting templates.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Detailed Matrix</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-10">8-Point Comparison: Tech Pack vs Sewing Pattern</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A2A2A]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-1/4">Criteria</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Tech Pack</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Sewing Pattern</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#262626]" : "bg-[#2A2A2A]"}>
                    <td className="p-4 text-sm font-semibold text-[#E5DDD3] border-t border-[#333333] align-top">{row.factor}</td>
                    <td className="p-4 text-sm text-[#9B948E] border-t border-[#333333] leading-relaxed align-top">{row.techPack}</td>
                    <td className="p-4 text-sm text-[#E5DDD3] border-t border-[#333333] leading-relaxed align-top font-medium">{row.pattern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Synergy</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">How Tech Packs &amp; Patterns Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionWorkflow.map((item, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{item.step}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{item.detail}</p>
              </div>
            ))}
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
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-is-pattern-making", label: "What Is Pattern Making in Clothing Production?" },
              { href: "/learn/cad-pattern-making-explained", label: "CAD Pattern Making for Fashion Brands" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Grading Works Across Sizes" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Making & CAD Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Turn your tech packs into precision patterns</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt translates your tech pack specifications into production CAD patterns and prototype samples in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
