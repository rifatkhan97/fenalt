import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is Pattern Making in Clothing Production?",
  description:
    "Explore pattern making in apparel manufacturing — translating 3D fashion designs into 2D flat paper or digital CAD cutting templates.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-is-pattern-making",
  },
  openGraph: {
    title: "What Is Pattern Making in Clothing Production?",
    description:
      "Explore pattern making in apparel manufacturing — translating 3D fashion designs into 2D flat paper or digital CAD cutting templates.",
    url: "https://fenalt.com/learn/what-is-pattern-making",
  },
};

export default function WhatIsPatternMakingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Pattern Making in Clothing Production?",
    description:
      "An introductory guide to apparel pattern drafting, flat pattern manipulation, draping, and digital CAD pattern engineering.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-is-pattern-making",
    mainEntityOfPage: "https://fenalt.com/learn/what-is-pattern-making",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is Pattern Making", item: "https://fenalt.com/learn/what-is-pattern-making" },
    ],
  };

  const methods = [
    {
      name: "1. Flat Pattern Drafting",
      desc: "Drafting 2D pattern templates on paper using geometric formulas, curves, and point-of-measure tables derived from a standard master sloper (block pattern).",
    },
    {
      name: "2. 3D Mannequin Draping",
      desc: "Manipulating muslin test fabric directly on a physical dress mannequin to capture complex folds, cowl necklines, or asymmetrical draping before flattening onto paper.",
    },
    {
      name: "3. Digital CAD Pattern Engineering",
      desc: "Drafting 2D vector pattern pieces in specialized apparel CAD software (Optitex, Lectra, Gerber), enabling instantaneous size grading, seam allowance adjustments, and marker optimization.",
    },
    {
      name: "4. Reverse Engineering / Deconstruction",
      desc: "Measuring and tracing an existing benchmark garment to replicate its fit geometry, seam lines, and panel proportions into a clean digital pattern template.",
    },
    {
      name: "5. 3D Virtual Prototyping & Simulation",
      desc: "Simulating digital 2D patterns on 3D virtual avatars using CLO3D or Style3D software to test fit drape and fabric tension virtually before cutting physical fabric.",
    },
  ];

  const manualVsCad = [
    {
      aspect: "Speed & Iteration",
      manual: "Paper patterns require manual re-tracing and hand scissors for every revision.",
      cad: "Digital CAD modifications take minutes, with instant electronic file sharing.",
    },
    {
      aspect: "Size Grading Efficiency",
      manual: "Grading paper patterns across 6 sizes requires hand-calculating every corner coordinate.",
      cad: "Grade rules apply automatically across all sizes (XS–3XL) in seconds.",
    },
    {
      aspect: "Fabric Marker Optimization",
      manual: "Physical paper markers are arranged manually on cutting tables.",
      cad: "CAD algorithms arrange nested panels to achieve up to 88%+ fabric utilization.",
    },
    {
      aspect: "Long-Term Archiving",
      manual: "Paper patterns degrade over time and require physical storage space.",
      cad: "Digital DXF/AAMA files store securely indefinitely in cloud pattern libraries.",
    },
  ];

  const faqs = [
    {
      q: "What is a master sloper or block pattern?",
      a: "A sloper (or block pattern) is a basic, un-styled 2D pattern template representing standard body proportions without design seam details or seam allowances. All new styles (hoodies, t-shirts, jackets) are built by modifying a master sloper.",
    },
    {
      q: "Why is pattern making considered a specialized technical skill?",
      a: "Pattern making requires translating 3D human body curves into flat 2D geometric shapes while accounting for fabric weight, yarn stretch, seam allowances, and sewing shrinkage dynamics.",
    },
    {
      q: "Does Fenalt create custom patterns from tech packs?",
      a: "Yes. Fenalt's Dhaka technical team converts brand tech packs and reference garments into digital CAD pattern files (DXF/AAMA format) for sampling and bulk micro-factory production.",
    },
    {
      q: "What is a seam allowance in pattern drafting?",
      a: "Seam allowance is the extra margin of fabric added outside the actual stitch line (typically 0.6cm for knit overlock seams to 1.2cm for woven seams) so panels can be sewn together without reducing finished garment measurements.",
    },
    {
      q: "What is grainline in pattern making?",
      a: "Grainline is an arrow line drawn on every pattern piece indicating how the pattern must be aligned relative to the fabric's warp or wale yarns to ensure garments drape straight without twisting.",
    },
    {
      q: "What is a notch mark on a sewing pattern?",
      a: "A notch is a small cut mark or T-symbol on the edge of a pattern piece that indicates where matching panels (like sleeve caps and armholes) must line up precisely during sewing.",
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
            What Is Pattern Making{" "}
            <span className="italic font-medium text-[#2D5016]">in Clothing Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Pattern making is the engineering bridge between fashion design and manufacturing — translating 3D creative vision into 2D flat paper or digital CAD cutting templates.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scissors size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Garment Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Pattern making</strong> converts design sketches and tech pack specs into precise 2D panel templates that fit human body geometry.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Even the most beautiful fashion sketch cannot be manufactured without a pattern. Pattern makers calculate dart placements, armhole curves, shoulder slopes, and seam allowances to ensure that fabric pieces sew together into comfortable, structurally sound garments.
          </p>
        </div>
      </section>

      {/* 5 Methods */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Methodology</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Methods of Garment Pattern Making</h2>
          <div className="space-y-6">
            {methods.map((method, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{method.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual vs CAD */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Evolution</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Manual vs Digital CAD Pattern Making</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Aspect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Manual Paper Patterns</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Digital CAD Patterns</th>
                </tr>
              </thead>
              <tbody>
                {manualVsCad.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.aspect}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.manual}</td>
                    <td className="p-4 text-sm text-[#1A1A1A] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.cad}</td>
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
              { href: "/learn/cad-pattern-making-explained", label: "CAD Pattern Making for Fashion Brands" },
              { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: Key Differences" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure (POM) in Garments?" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Making Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision pattern engineering</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt drafts digital CAD patterns and sews prototype samples from your design tech packs in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
