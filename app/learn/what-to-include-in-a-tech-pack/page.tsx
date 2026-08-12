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
      items: ["Style Name & Style Number", "Brand Name & Designer Name", "Season / Release Name", "Target Gender & Category", "Date of Creation & Current Revision Number", "High-level silhouette description"],
    },
    {
      title: "2. Flat Technical Sketches (Front & Back)",
      items: ["Black-and-white 2D vector drawings", "Strict 1:1 proportion representation", "Callouts for seams, pockets, stitching, and hardware", "Side and interior details if complex"],
    },
    {
      title: "3. Bill of Materials (BOM)",
      items: ["Primary fabric specification (Fiber, GSM, Weave/Knit)", "Secondary/Lining fabric specs", "Thread type and color match", "Buttons, zippers, eyelets, cords, drawstrings", "Woven brand labels and care labels"],
    },
    {
      title: "4. Colorway Specification Sheet",
      items: ["Pantone (PMS) codes for all fabrics", "Trim color matching requirements", "Color placement callouts for multi-paneled garments"],
    },
    {
      title: "5. Points of Measure (POM) & Size Specs",
      items: ["Sample size measurement table (base size)", "Graded size specification across full size run", "Tolerances per measurement point (e.g. ±1.0 cm)"],
    },
    {
      title: "6. Construction & Sewing Callouts",
      items: ["Stitch type (e.g., 301 lockstitch, 504 overlock)", "Stitches per inch (SPI)", "Hem widths and seam allowances", "Reinforcements (bar-tacks, rivets, interlining)"],
    },
    {
      title: "7. Artwork & Placement Specs",
      items: ["Vector graphics / print artwork file references", "Exact positioning coordinates from key seams", "Printing method (screen print, puff print, DTG)", "Embroidery stitch counts & thread colors"],
    },
    {
      title: "8. Packaging & Labeling Instructions",
      items: ["Main label placement & attachment method", "Care & content label placement & legal copy", "Folding instructions & polybag dimensions", "Carton packing ratios & shipping mark specs"],
    },
  ];

  const faqs = [
    {
      q: "What software should I use to build a tech pack?",
      a: "Adobe Illustrator and Excel/Google Sheets remain industry standards. Modern specialized cloud applications like Techpacker or Canopy are also widely used by technical designers.",
    },
    {
      q: "What is the single most common oversight in tech packs?",
      a: "Failing to specify measurement tolerances (acceptable variances in bulk sewing) and omitting exact artwork placement coordinates from reference seams.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs & Pattern Making</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Should Be Included{" "}
            <span className="italic font-medium text-[#2D5016]">in a Clothing Tech Pack?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A tech pack must contain zero ambiguity. Omitting even minor specifications leads to factory guesswork and sampling delays. Use this full checklist to build production-ready technical documents.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Anatomy of a Tech Pack</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Think of a tech pack as an <strong className="font-medium">architectural blueprint for clothing</strong>. If a detail is missing from the page, the factory floor will improvise — and their interpretation may not match your brand vision.
            </p>
          </div>
        </div>
      </section>

      {/* Pages List */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Page-by-Page Requirements</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">The 8 Essential Sections</h2>
          <div className="space-y-8">
            {pagesList.map((pg, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{pg.title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pg.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#C8A882] mt-0.5 shrink-0" />
                      <span className="text-xs text-[#E5DDD3] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
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
              { href: "/learn/tech-pack-mistakes", label: "Common Tech Pack Mistakes That Delay Production" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure in Garment Manufacturing?" },
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Want professional tech pack development?</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt works alongside independent fashion labels to build exhaustive, factory-ready tech packs from simple sketches or sample garments.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Get Technical Support <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
