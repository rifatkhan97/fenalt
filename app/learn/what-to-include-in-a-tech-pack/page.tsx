import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "What Should Be Included in a Clothing Tech Pack?",
  description:
    "A comprehensive checklist of the essential pages, technical specs, callouts, and measurement tables required in a production-ready apparel tech pack.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-to-include-in-a-tech-pack",
  },
  openGraph: {
    title: "What Should Be Included in a Clothing Tech Pack?",
    description:
      "A comprehensive checklist of the essential pages, technical specs, callouts, and measurement tables required in a production-ready apparel tech pack.",
    url: "https://fenalt.com/learn/what-to-include-in-a-tech-pack",
  },
};

export default function WhatToIncludeInATechPackPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Should Be Included in a Clothing Tech Pack?",
    description:
      "A complete guide and itemized checklist for creating exhaustive, factory-ready tech packs for fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-to-include-in-a-tech-pack",
    mainEntityOfPage: "https://fenalt.com/learn/what-to-include-in-a-tech-pack",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What to Include in a Tech Pack", item: "https://fenalt.com/learn/what-to-include-in-a-tech-pack" },
    ],
  };

  const pagesList = [
    {
      title: "1. Cover Page & General Information",
      items: [
        "Style Name & Unique Style Number",
        "Brand Name, Season, and Release Category",
        "Target Gender & Garment Classification",
        "Creation Date & Current Revision Version Number",
        "High-level silhouette description and base sample size",
      ],
    },
    {
      title: "2. Flat Technical Vector Sketches (Front, Back & Detail Views)",
      items: [
        "Black-and-white 2D vector CAD drawings",
        "Strict 1:1 proportion representation",
        "Detailed callouts for seam placement, topstitching widths, and hem finishes",
        "Interior lining, pocket bags, and hood construction details if complex",
      ],
    },
    {
      title: "3. Bill of Materials (BOM)",
      items: ["Primary fabric specification (Fiber composition, GSM, Weave/Knit)", "Secondary/Lining fabric specs", "Thread type and color match", "Buttons, zippers, eyelets, cords, drawstrings", "Woven brand labels and care labels"],
    },
    {
      title: "4. Colorway Specification Sheet",
      items: [
        "Pantone (PMS TCX or C) codes for all primary and accent fabrics",
        "Matching thread and trim color specs",
        "Color placement callouts for multi-panel color-blocked garments",
      ],
    },
    {
      title: "5. Point of Measure (POM) Spec Sheet",
      items: [
        "Master list of POM codes and measurement descriptions",
        "Flat target dimensions for base sample size",
        "Acceptable industrial tolerance limits for each point of measure (±1.0cm to ±1.5cm)",
        "Graded size spec table (XS through 3XL)",
      ],
    },
    {
      title: "6. Graphic, Artwork & Packaging Specs",
      items: [
        "Print and embroidery vector files with placement coordinates",
        "Care label legal copy, fiber content, and wash symbols",
        "Polybag spec, hangtag placement, and export carton fold instructions",
      ],
    },
  ];

  const qualityChecklist = [
    {
      rule: "Eliminate Ambiguous Terminology",
      detail: "Avoid subjective terms like 'heavyweight' or 'normal fit'. Always provide exact metrics: 450 GSM, 2cm topstitch, 58cm chest width.",
    },
    {
      rule: "Cross-Check Vector Proportions Against POMs",
      detail: "Ensure visual CAD vector drawings logically reflect the numerical measurements stated in the POM spec sheet.",
    },
    {
      rule: "Specify All Stitch Types Explicitly",
      detail: "Indicate whether seams require lockstitch, 4-thread overlock, coverstitch, or flatlock construction to prevent factory substitution.",
    },
    {
      rule: "Lock Pantone References Before Submission",
      detail: "Never submit color names ('navy') without official Pantone PMS codes or physical lab dip swatch references.",
    },
  ];

  const faqs = [
    {
      q: "What is the most important page in a tech pack?",
      a: "The Point of Measure (POM) spec sheet and the Bill of Materials (BOM) are the two most critical components. The POM table controls physical sizing and CAD pattern grading, while the BOM controls material procurement and FOB unit cost.",
    },
    {
      q: "Can I use photographs instead of flat 2D vector sketches?",
      a: "Photographs of reference garments are helpful as supplementary material, but they cannot replace 2D flat vector sketches. Technical vector drawings depict seam lines, stitch types, and construction callouts clearly without visual clutter.",
    },
    {
      q: "Should I include size grading in my initial tech pack?",
      a: "Yes. While initial prototype sampling focuses on the base sample size (usually Medium), providing full graded size specs in your initial tech pack allows manufacturers to verify marker yield and confirm bulk pricing.",
    },
    {
      q: "How detailed should the Bill of Materials (BOM) be?",
      a: "Your BOM should account for every single physical component of the garment - including shell fabric, lining, ribbing, interlining, sewing thread, main label, care tag, size tag, hangtag, polybag, and zippers.",
    },
    {
      q: "What software is best for creating apparel tech packs?",
      a: "Industry professionals typically build vector sketches in Adobe Illustrator and assemble tech pack pages using specialized tech pack software (like Techpacker or Backbone) or structured Excel/Google Sheets templates.",
    },
    {
      q: "What happens if I need to update my tech pack during sampling?",
      a: "Always update the revision number and date on the cover page whenever specs change, and issue the updated PDF to your manufacturing partner immediately to ensure everyone references the latest version.",
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
            What Should Be Included{" "}
            <span className="italic font-medium text-[#2D5016]">in a Clothing Tech Pack?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            An itemized checklist of the essential pages, technical specs, callouts, and measurement tables required to build a factory-ready apparel tech pack.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Specification Architecture</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A production-ready tech pack must be <strong className="font-medium">complete, mathematically consistent, and unambiguous</strong>. Omitting specs forces factories to guess.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In garment manufacturing, incomplete tech packs are the leading cause of initial sampling failures, miscalculated fabric consumption, and delayed production starts. Including all essential pages ensures your supplier has the technical parameters needed to draft patterns, calculate pricing, and sew samples accurately.
          </p>
        </div>
      </section>

      {/* 6 Essential Categories */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Tech Pack Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Core Components of a Complete Tech Pack</h2>
          <div className="space-y-6">
            {pagesList.map((page, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-xl font-medium text-[#C8A882] mb-4">{page.title}</h3>
                <ul className="space-y-2">
                  {page.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#E5DDD3] leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Checklist */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Best Practices</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Tech Pack Preparation Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityChecklist.map((qc, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{qc.rule}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{qc.detail}</p>
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
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/bill-of-materials-apparel", label: "What Is a Bill of Materials (BOM) in Apparel?" },
              { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: Key Differences" },
              { href: "/learn/tech-pack-mistakes", label: "Common Tech Pack Mistakes to Avoid" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Build factory-ready tech packs</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt assists brands with technical design, POM table drafting, and BOM preparation to ensure seamless manufacturing execution.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
