import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Measurements for a Clothing Tech Pack",
  description:
    "A practical guide to drafting accurate garment measurements, defining base size spec tables, establishing POM codes, and setting industrial tolerances for apparel tech packs.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/tech-pack-measurements",
  },
  openGraph: {
    title: "How to Create Measurements for a Clothing Tech Pack",
    description:
      "A practical guide to drafting accurate garment measurements, defining base size spec tables, establishing POM codes, and setting industrial tolerances for apparel tech packs.",
    url: "https://www.fenalt.com/learn/tech-pack-measurements",
  },
};

export default function TechPackMeasurementsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Create Measurements for a Clothing Tech Pack",
    description:
      "A step-by-step technical walkthrough on measuring reference garments and building measurement spec sheets for apparel tech packs.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/tech-pack-measurements",
    mainEntityOfPage: "https://www.fenalt.com/learn/tech-pack-measurements",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Tech Pack Measurements", item: "https://www.fenalt.com/learn/tech-pack-measurements" },
    ],
  };

  const steps = [
    {
      title: "1. Measure a Physical Benchmark Garment Flat",
      desc: "Lay your target reference garment flat on a smooth inspection table. Smooth out natural folds without stretching the fabric. Use a non-stretch flexible garment measuring tape.",
    },
    {
      title: "2. Establish Standard Points of Measure (POM) Codes",
      desc: "Assign standardized sequential codes to every measurement point (e.g. POM-01 Total Body Length HPS, POM-02 Chest Width 2.5cm below armhole seam, POM-03 Shoulder Width seam to seam).",
    },
    {
      title: "3. Define Unambiguous Anchor & Measuring Directions",
      desc: "Describe exact measuring start and end points for each line item (for example, 'High Point Shoulder straight to bottom hem edge' or 'Armhole opening measured straight along curve').",
    },
    {
      title: "4. Build the Central Base Size Specification Table",
      desc: "Compile all flat measurements into a master table for your designated base size (typically Medium). Ensure all dimensions use consistent units (centimetres or inches).",
    },
    {
      title: "5. Set Commercial Measurement Tolerance Limits",
      desc: "Define acceptable variance ranges for factory QC inspections (e.g. ±1.0cm for body length and chest width, ±0.5cm for collar height or cuff opening).",
    },
    {
      title: "6. Account for Fabric Wash Shrinkage & Relaxation",
      desc: "Specify whether target table dimensions represent pre-wash cut specs or final post-wash retail specs, allowing pattern makers to calculate shrinkage allowances.",
    },
  ];

  const measurementErrors = [
    {
      error: "Measuring Body Dimensions Instead of Flat Garment Specs",
      detail: "Measuring human body circumferences directly and entering them into a flat spec table confuses pattern makers. Always state flat garment dimensions.",
    },
    {
      error: "Omitting Measurement Anchor Callouts",
      detail: "Listing 'Chest = 58cm' without specifying whether it is measured 2.5cm below armhole seam or at armhole level leads to pattern room discrepancies.",
    },
    {
      error: "Failing to Specify Relaxed vs Stretched Ribbing Dimensions",
      detail: "For stretch elements (neck ribbing, waistbands, leg cuffs), state both flat relaxed width and required stretched recovery specs.",
    },
    {
      error: "Inconsistent Measurement Units Across Pages",
      detail: "Mixing inches on sketch callouts and centimetres on POM spec sheets creates calculation errors during CAD pattern drafting.",
    },
  ];

  const faqs = [
    {
      q: "Should tech pack measurements be in inches or centimetres?",
      a: "Centimetres (cm) are the standard unit used by international garment factories in Bangladesh, Europe, and Asia. Providing measurements in centimetres (or providing a dual-column cm/inch table) prevents rounding and conversion errors during CAD pattern drafting.",
    },
    {
      q: "How do I measure a garment if I don't have a reference sample?",
      a: "You can purchase a retail garment with your ideal fit, measure it flat, and make incremental adjustment callouts (+/- cm). Alternatively, work with a technical designer or Fenalt's team to draft spec tables from target body sizing charts.",
    },
    {
      q: "What is High Point Shoulder (HPS)?",
      a: "High Point Shoulder (HPS) is the highest point of the shoulder seam where it intersects the neck collar seam. It is the universal vertical reference anchor for measuring total garment body length, chest drop, and pocket placement.",
    },
    {
      q: "What does tolerance mean in a tech pack measurement sheet?",
      a: "Tolerance is the acceptable numerical variance (+/- cm) allowed between the tech pack spec and the finished physical garment. Industrial tolerances reflect natural sewing and laundering variations (typically ±1.0cm for knits).",
    },
    {
      q: "What is the difference between flat measurements and circumference?",
      a: "Flat measurements measure the garment laying flat from side seam to side seam (e.g. flat chest = 58cm). Circumference represents the full 360-degree measurement around the garment (e.g. 58cm × 2 = 116cm circumference). Tech packs should explicitly clarify flat vs circumference.",
    },
    {
      q: "Do I need to include size grading increments in my tech pack?",
      a: "Yes. While prototype sampling starts with the base size (e.g. Medium), providing grade rules (e.g. +2cm chest per size) enables CAD pattern makers to scale patterns accurately from XS to 3XL.",
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
            How to Create Measurements{" "}
            <span className="italic font-medium text-[#2D5016]">for a Clothing Tech Pack.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Drafting accurate, unambiguous garment measurement tables is the cornerstone of technical apparel design. Learn how to measure reference garments and define POM specs.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Ruler size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Precision Drafting</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Measurement spec sheets provide the <strong className="font-medium">mathematical framework for CAD pattern drafting</strong>. Clear anchor callouts eliminate pattern room guesswork.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In industrial clothing manufacturing, pattern makers build digital CAD cutting templates directly from the Point of Measure (POM) table provided in your tech pack. Creating clear, standardized measurement tables ensures that prototype samples and bulk production runs match your target fit vision.
          </p>
        </div>
      </section>

      {/* 6 Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Drafting Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Steps to Building a Measurement Spec Sheet</h2>
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

      {/* Common Errors */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Common Pitfalls</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">4 Measurement Errors to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {measurementErrors.map((err, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{err.error}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{err.detail}</p>
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
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure (POM) in Garments?" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Tech Pack?" },
              { href: "/learn/how-to-inspect-garment-measurements", label: "How to Inspect Garment Measurements in QC" },
              { href: "/tech-pack-development-apparel", label: "Fenalt Tech Pack & Measurement Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Need help drafting measurement spec sheets?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka technical team measures benchmark garments and drafts comprehensive POM tables for your apparel collections.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
