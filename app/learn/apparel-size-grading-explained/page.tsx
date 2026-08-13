import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Maximize2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Apparel Size Grading Works Across Sizes",
  description:
    "Understand pattern size grading - how base size patterns (Medium) scale proportionally to XS, Small, Large, and 3XL using technical grade rules.",
  alternates: {
    canonical: "https://fenalt.com/learn/apparel-size-grading-explained",
  },
  openGraph: {
    title: "How Apparel Size Grading Works Across Sizes",
    description:
      "Understand pattern size grading - how base size patterns (Medium) scale proportionally to XS, Small, Large, and 3XL using technical grade rules.",
    url: "https://fenalt.com/learn/apparel-size-grading-explained",
  },
};

export default function ApparelSizeGradingExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Apparel Size Grading Works Across Sizes",
    description:
      "A technical explanation of garment pattern size grading, grade rules, CAD software scaling, and size ratio specs.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/apparel-size-grading-explained",
    mainEntityOfPage: "https://fenalt.com/learn/apparel-size-grading-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Apparel Size Grading Explained", item: "https://fenalt.com/learn/apparel-size-grading-explained" },
    ],
  };

  const concepts = [
    {
      title: "1. Base Sample Size Calibration (Medium/Large)",
      desc: "Pattern makers create and physically test a single master base size pattern (typically Medium for unisex/menswear). Once the base fit is signed off, all smaller and larger sizes are derived from this approved master.",
    },
    {
      title: "2. Grade Rules (Differential Increments)",
      desc: "A grade rule specifies the precise numerical increase or decrease (+/- cm or inches) applied to each point of measure per size step (for example, +4.0cm circumference increase per size for chest width).",
    },
    {
      title: "3. Non-Proportional & Selective Scaling",
      desc: "Anatomical scaling is non-linear. Collar openings, pocket dimensions, zipper lengths, and ribbing heights do not scale 1:1 with chest expansion. Grade rules hold specific details semi-static to prevent distortion.",
    },
    {
      title: "4. CAD Computerized Vector Grading & Nesting",
      desc: "Modern pattern makers enter grade rule tables into garment CAD software (Lectra, Optitex, Gerber), generating a nested size stack (XS through 3XL) with perfect CAD seam alignment.",
    },
    {
      title: "5. Size Set Sample Validation",
      desc: "For full-collection launches, brands request size set samples (e.g. Small, Large, 2XL) to verify that graded patterns fit real bodies comfortably at the extremes of the size range.",
    },
    {
      title: "6. Alpha vs Numeric Size System Mapping",
      desc: "Grading accounts for sizing systems: Alpha grading uses letter ranges (XS, S, M, L, XL, 2XL), while Numeric grading uses exact inch/cm waist or chest dimensions (30, 32, 34, 36, 38).",
    },
  ];

  const gradeIncrementsTable = [
    { POM: "Chest / Bust Circumference", increment: "+4.0 cm to +5.0 cm per size step", note: "Primary volume expansion driver." },
    { POM: "Total Body Length (HPS)", increment: "+1.5 cm to +2.0 cm per size step", note: "Vertical length scales slower than chest width." },
    { POM: "Across Shoulder Width", increment: "+1.5 cm to +2.0 cm per size step", note: "Shoulder slope requires proportional armhole pitch adjustments." },
    { POM: "Sleeve Length (From CB)", increment: "+1.5 cm to +2.0 cm per size step", note: "Accounts for arm length and shoulder seam widening." },
    { POM: "Neck Opening Width", increment: "+0.5 cm to +0.8 cm per size step", note: "Neck opening increases strictly controlled to prevent collar gaping." },
  ];

  const faqs = [
    {
      q: "Can I just enlarge a Medium tech pack by 10% to create a Large size?",
      a: "No! Uniform percentage scaling causes serious fit distortions. A 10% enlargement increases neck openings, pocket sizes, and zipper lengths excessively. Proper technical size grading applies selective differential increments (e.g. +4cm chest, but only +0.5cm neck opening).",
    },
    {
      q: "What is a nested pattern in apparel CAD?",
      a: "A nested pattern is a visual digital display in garment CAD software showing all size patterns (XS through 3XL) stacked on top of one another aligned by a central reference point (like High Point Shoulder), allowing pattern makers to inspect smooth grading transitions.",
    },
    {
      q: "What is a Size Set Sample?",
      a: "A Size Set Sample involves producing physical samples across the entire size run (e.g. Small, Large, 2XL) to test graded patterns on live models before authorising full bulk cutting.",
    },
    {
      q: "What happens if size grading is done incorrectly?",
      a: "Incorrect size grading leads to fitting failures in outer sizes - such as Small garments with oversized collars or 2XL hoodies with tight armholes. Verifying grade rules in your tech pack prevents customer return issues.",
    },
    {
      q: "What is the standard base size for streetwear collections?",
      a: "Streetwear collections typically use Medium (or Large for oversized streetwear fits) as the base fitting size. All pattern revisions are perfected on the base size before applying CAD size grading.",
    },
    {
      q: "Does Fenalt provide pattern size grading services?",
      a: "Yes. Fenalt's technical pattern team in Dhaka handles complete CAD pattern grading from base size spec sheets, generating DXF files and marker layouts for micro-factory production.",
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
            How Apparel Size Grading{" "}
            <span className="italic font-medium text-[#2D5016]">Works Across Sizes.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Pattern size grading scales a base size pattern (typically Medium) proportionally up to 3XL and down to XS using precise technical grade rules.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Maximize2 size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Pattern Scaling</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Size grading is <strong className="font-medium">selective differential mathematical scaling</strong> - expanding circumference and length while preserving collar and sleeve ergonomics.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In industrial clothing production, factories do not draft brand-new patterns from scratch for every individual size. Instead, pattern makers perfect a single base size pattern and apply technical grade rules in CAD software to generate the full size run. Understanding how grade rules function ensures consistent brand fit across all retail sizes.
          </p>
        </div>
      </section>

      {/* 6 Core Concepts */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Grading Architecture</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Principles of Apparel Size Grading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concepts.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Increments Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Industrial Benchmarks</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Typical Grade Rule Increments for Tops</h2>
          <div className="space-y-4">
            {gradeIncrementsTable.map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-[#F2EFE9] border border-[#E5DDD3] gap-2">
                <div>
                  <h3 className="font-display text-lg font-medium text-[#1A1A1A]">{row.POM}</h3>
                  <p className="text-xs text-[#6B6560]">{row.note}</p>
                </div>
                <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider shrink-0">{row.increment}</span>
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
              { href: "/learn/what-is-pattern-making", label: "What Is Pattern Making in Clothing Production?" },
              { href: "/learn/cad-pattern-making-explained", label: "CAD Pattern Making for Fashion Brands" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure (POM) in Garments?" },
              { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: Key Differences" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Making & Size Grading Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision pattern size grading</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka CAD pattern team executes technical size grading from your base specs for seamless bulk production.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
