import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "What Are Points of Measure in Garment Manufacturing?",
  description:
    "Learn what Points of Measure (POM) are, how garment measurement codes work, and why POM tables are critical for pattern grading and quality control.",
  alternates: {
    canonical: "https://fenalt.com/learn/points-of-measure-garment",
  },
  openGraph: {
    title: "What Are Points of Measure in Garment Manufacturing?",
    description:
      "Learn what Points of Measure (POM) are, how garment measurement codes work, and why POM tables are critical for pattern grading and quality control.",
    url: "https://fenalt.com/learn/points-of-measure-garment",
  },
};

export default function PointsOfMeasureGarmentPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Are Points of Measure in Garment Manufacturing?",
    description:
      "An explanatory guide to Points of Measure (POM) in clothing tech packs and quality control inspection.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/points-of-measure-garment",
    mainEntityOfPage: "https://fenalt.com/learn/points-of-measure-garment",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Points of Measure", item: "https://fenalt.com/learn/points-of-measure-garment" },
    ],
  };

  const commonPoms = [
    { code: "Chest Width (1\" below armhole)", desc: "Measured flat straight across the front chest, 2.5 cm (1 inch) directly below the armhole seam join." },
    { code: "Body Length (HPS)", desc: "High Point Shoulder (HPS) to the bottom sweep edge. The foundational vertical length benchmark." },
    { code: "Shoulder Width (Across Shoulder)", desc: "Measured from shoulder point seam join straight across the back to opposite shoulder point." },
    { code: "Sleeve Length (From Center Back)", desc: "From center back neck seam along shoulder curve to the edge of sleeve cuff." },
    { code: "Sweep / Bottom Opening", desc: "Measured flat across the bottom hem opening edge (relaxed or stretched for ribbing)." },
    { code: "Neck Width / Drop", desc: "Seam-to-seam collar width and vertical drop from HPS to front neck seam line." },
  ];

  const faqs = [
    {
      q: "What is a measurement tolerance in a POM table?",
      a: "Tolerance is the permissible deviation (+/- cm or inches) allowed during bulk production. For tops, standard commercial tolerance is typically ±1.0 cm to ±1.5 cm depending on fabric elasticity.",
    },
    {
      q: "Why are standardized POM codes important?",
      a: "Standardized codes (e.g. POM-01 for Chest Width) ensure that pattern makers, sample machinists, and QC inspectors all measure garments from the exact same anatomical anchor points.",
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
            What Are Points of Measure{" "}
            <span className="italic font-medium text-[#2D5016]">(POM) in Apparel?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Points of Measure form the technical backbone of sizing, pattern grading, and quality control. Understand how POMs are defined, measured, and inspected.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Ruler size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Definition</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">Point of Measure (POM)</strong> is a designated location on a garment where a specific measurement is taken - complete with a precise instruction on how to lay flat and measure.
            </p>
          </div>
        </div>
      </section>

      {/* Common POMs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Core Measurements</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Standard Tops Points of Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonPoms.map((pom, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#C8A882] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-1">{pom.code}</h3>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{pom.desc}</p>
                  </div>
                </div>
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
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Clothing Tech Pack?" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Making Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision pattern grading & specs</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt builds exact POM spec sheets and carries out comprehensive quality control measurement audits during production.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
