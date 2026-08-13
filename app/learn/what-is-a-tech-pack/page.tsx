import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Tech Pack in Apparel Manufacturing?",
  description:
    "Understand what an apparel tech pack is, why every clothing manufacturer requires one, and the essential pages needed to get accurate samples, pricing, and production.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-is-a-tech-pack",
  },
  openGraph: {
    title: "What Is a Tech Pack in Apparel Manufacturing?",
    description:
      "Understand what an apparel tech pack is, why every clothing manufacturer requires one, and the essential pages needed to get accurate samples, pricing, and production.",
    url: "https://fenalt.com/learn/what-is-a-tech-pack",
  },
};

export default function WhatIsATechPackPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Tech Pack in Apparel Manufacturing?",
    description:
      "A complete guide to tech packs — what they are, what sections they contain, and why they are essential for clothing production.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-is-a-tech-pack",
    mainEntityOfPage: "https://fenalt.com/learn/what-is-a-tech-pack",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is a Tech Pack", item: "https://fenalt.com/learn/what-is-a-tech-pack" },
    ],
  };

  const sections = [
    {
      title: "1. Cover Page & Style Summary",
      body: "Establishes style identity. Contains 2D vector sketches (front/back), style name, style number, season, date of creation, revision history, and target garment category.",
    },
    {
      title: "2. Flat Technical Sketches & Construction Callouts",
      body: "Black-and-white 2D CAD vector drawings detailing seam placement, pocket openings, topstitching widths, collar construction, hem finishes, and hardware attachment instructions.",
    },
    {
      title: "3. Fabric & Material Specifications",
      body: "Specifies primary shell fabric, lining, ribbing, interlinings, and pocketing — including fibre composition, yarn count, weight in GSM, and finish requirements.",
    },
    {
      title: "4. Colorway Specification Sheet",
      body: "Lists Pantone (PMS TCX or C) codes for every fabric, thread, print, and trim element to eliminate subjective dye lot discrepancies.",
    },
    {
      title: "5. Bill of Materials (BOM)",
      body: "An itemised master table listing every component required to manufacture the garment — fabrics, threads, zippers, buttons, woven labels, care tags, hangtags, and polybags.",
    },
    {
      title: "6. Point of Measure (POM) Table & Tolerances",
      body: "Lists flat dimensions for every key measurement point (chest width, body length, shoulder slope, sleeve length) along with acceptable industrial tolerances (±1.0cm to ±1.5cm).",
    },
    {
      title: "7. Graphic, Artwork & Embellishment Specs",
      body: "Details print or embroidery coordinates, artwork scale (cm), print type (screen print, DTG, puff print), embroidery thread colours, and backing specifications.",
    },
    {
      title: "8. Packaging & Fold Specifications",
      body: "Defines folding methods, polybag dimensions, barcode placement, hangtag attachment methods, and export carton packaging ratios.",
    },
  ];

  const risksWithoutTechPack = [
    {
      risk: "Inaccurate Quotes & Price Surprises",
      detail: "Without exact fabric GSM, seam details, and BOM specifications, factories can only offer rough indicative quotes that increase once production details are clarified.",
    },
    {
      risk: "Multiple Failed Sample Iterations",
      detail: "Sample machinists force-interpret ambiguous sketches, resulting in misaligned sample revisions and wasted sampling fees.",
    },
    {
      risk: "Unenforceable Quality Control",
      detail: "QC inspectors need written POM tables and spec sheets to check measurements. Without a tech pack, quality assessments remain purely subjective.",
    },
    {
      risk: "Supplier Disputes Over Defective Runs",
      detail: "If bulk goods arrive with incorrect collar width or missing care tags, manufacturers are legally and commercially accountable only for specs documented in writing.",
    },
  ];

  const faqs = [
    {
      q: "What is a tech pack in garment manufacturing?",
      a: "A tech pack (technical package) is a comprehensive blueprint document created by designers or technical designers to communicate a garment's exact physical, dimensional, and material specifications to clothing manufacturers.",
    },
    {
      q: "Who creates a tech pack?",
      a: "Tech packs are typically created by technical designers, apparel freelancers, or design studios. Managed production partners like Fenalt also provide technical design services to help emerging brand founders convert design sketches into factory-ready tech packs.",
    },
    {
      q: "Can I get an accurate manufacturing quote without a tech pack?",
      a: "No. Manufacturers can only provide rough estimates without a tech pack. Accurate unit pricing depends on fabric consumption, GSM weight, sewing complexity, trim specs, and size grading — all of which are defined inside a tech pack.",
    },
    {
      q: "What file format should a tech pack be in?",
      a: "Tech packs are typically formatted as multi-page PDF documents or structured spreadsheets (Excel/Google Sheets) with embedded vector graphics (AI/EPS/PDF format) for flat sketches and artwork.",
    },
    {
      q: "Is a tech pack the same as a sewing pattern?",
      a: "No. A tech pack is a specification document containing measurements, fabrics, trims, and construction rules. A sewing pattern consists of physical or CAD digital 2D templates used directly on the cutting table to cut fabric pieces.",
    },
    {
      q: "How long does it take to create a tech pack?",
      a: "Creating a complete tech pack for a standard garment (such as a hoodie or t-shirt) usually takes 2 to 5 business days for an experienced technical designer, assuming design specs and measurements are finalized.",
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
            What Is a Tech Pack{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Manufacturing?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A tech pack is the central contract and blueprint of clothing production. It translates creative fashion ideas into precise industrial manufacturing specifications.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Master Blueprint</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">tech pack</strong> is an exhaustive instruction document containing flat vector sketches, measurement tables, bill of materials, colour references, and construction callouts.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In global clothing production, manufacturers build garments based strictly on technical specifications. Without a tech pack, pattern makers and sample machinists must interpret design intent, leading to inaccurate prototypes, extra revision costs, and production delays. A complete tech pack serves as the master contract between brand and manufacturer.
          </p>
        </div>
      </section>

      {/* 8 Sections */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Document Structure</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Essential Pages Inside a Professional Tech Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((sec, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{sec.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks without Tech Pack */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Risk Analysis</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">What Happens Without a Tech Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {risksWithoutTechPack.map((r, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{r.risk}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{r.detail}</p>
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
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Tech Pack?" },
              { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: Key Differences" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/tech-pack-mistakes", label: "Common Tech Pack Mistakes to Avoid" },
              { href: "/learn/bill-of-materials-apparel", label: "What Is a Bill of Materials (BOM) in Apparel?" },
              { href: "/tech-pack-development-apparel", label: "Fenalt Tech Pack Development Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Need help developing your tech pack?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s technical design team converts sketches and reference garments into factory-ready apparel tech packs in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
