import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "What Are Points of Measure in Garment Manufacturing?",
  description:
    "Learn what Points of Measure (POM) are in apparel tech packs, how measurement codes work, and why POM tables are critical for CAD pattern grading and quality control.",
  alternates: {
    canonical: "https://fenalt.com/learn/points-of-measure-garment",
  },
  openGraph: {
    title: "What Are Points of Measure in Garment Manufacturing?",
    description:
      "Learn what Points of Measure (POM) are in apparel tech packs, how measurement codes work, and why POM tables are critical for CAD pattern grading and quality control.",
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
    { code: "Body Length (HPS)", desc: "High Point Shoulder (HPS) straight down to the bottom sweep edge. The foundational vertical length benchmark for tops." },
    { code: "Shoulder Width (Across Shoulder)", desc: "Measured from left shoulder seam join straight across the back to the opposite right shoulder seam join." },
    { code: "Sleeve Length (From CB or Shoulder)", desc: "Measured from center back (CB) neck seam or shoulder point seam down along the sleeve to the edge of the cuff." },
    { code: "Armhole Depth & Pitch", desc: "Measured straight or along the curve from the high shoulder point to the lowest point of the armhole seam." },
    { code: "Sweep / Bottom Opening", desc: "Measured flat across the bottom hem opening edge — specified as relaxed and fully stretched for ribbed hems." },
    { code: "Neck Opening & Drop", desc: "Seam-to-seam collar width and vertical drop distance measured from High Point Shoulder to front neck seam line." },
    { code: "Waist & Hip Width (Bottoms)", desc: "Measured flat across the top edge of the waistband (relaxed/stretched) and flat across the widest point of hips." },
  ];

  const pomCategoriesByGarment = [
    {
      type: "Tops, Hoodies & Jackets",
      keyPoms: ["Body Length (HPS)", "Chest Width (1\" below armhole)", "Across Shoulder", "Sleeve Length", "Armhole Straight/Curved", "Neck Opening Width", "Bottom Ribbing Sweep"],
    },
    {
      type: "Pants, Sweatpants & Shorts",
      keyPoms: ["Waist Width (Relaxed & Stretched)", "Hip Width (at widest point)", "Front Rise & Back Rise", "Inseam Length", "Outseam Length", "Thigh & Knee Width", "Leg Opening Hem"],
    },
  ];

  const faqs = [
    {
      q: "What does POM stand for in clothing manufacturing?",
      a: "POM stands for Point of Measure (or Points of Measurement). It refers to the standardized specific locations on a garment where measurements are taken flat to guide CAD pattern drafting and quality control inspection.",
    },
    {
      q: "What is a measurement tolerance in a POM table?",
      a: "Tolerance is the permissible numerical deviation (+/- cm or inches) allowed during bulk manufacturing. For knits and casual tops, standard commercial tolerance is typically ±1.0 cm to ±1.5 cm across major points of measure.",
    },
    {
      q: "Why are standardized POM codes important?",
      a: "Standardized codes (e.g. POM-01 for Chest Width, POM-02 for Body Length) ensure that designers, technical pattern makers, sample machinists, and QC auditors all measure garments from the exact same physical anchors.",
    },
    {
      q: "How many Points of Measure should be in a tech pack?",
      a: "A typical t-shirt tech pack requires 10 to 15 POM line items, while a complex jacket or technical pant tech pack may require 20 to 30 detailed POM callouts to ensure fit accuracy across all panel joins.",
    },
    {
      q: "What is the difference between measuring on a curve vs straight?",
      a: "Measuring straight takes the shortest linear distance between two points (e.g. straight across armhole). Measuring along the curve follows the contoured seamline (e.g. curved armhole seam). Tech pack POM descriptions must clarify straight vs curved.",
    },
    {
      q: "How does Fenalt use POM tables during quality inspection?",
      a: "Fenalt's Dhaka quality inspectors use your tech pack's POM table to conduct 100% flat measurement audits during pre-production sample evaluation and pre-shipment AQL 2.5 carton inspections.",
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
            What Are Points of Measure{" "}
            <span className="italic font-medium text-[#2D5016]">in Garment Manufacturing?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Points of Measure (POM) define the physical anchor locations where garments are measured flat. They align designers, pattern makers, and QC inspectors around unified sizing standards.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Measurement Standard</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">Point of Measure (POM)</strong> specifies the exact seam junction, edge anchor, and directional vector used to measure a garment.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Without explicit POM callouts, pattern makers and factory inspectors measure from different anchor points — leading to false quality rejections or inconsistent bulk fitting. Defining standardized POM codes (e.g. POM-01 for Chest Width) establishes a shared technical language across global apparel supply chains.
          </p>
        </div>
      </section>

      {/* 8 Common POMs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Master Reference</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Standard Points of Measure in Apparel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonPoms.map((pom, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{pom.code}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{pom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POMs by Garment Category */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Category Spec Breakdown</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Key POMs by Product Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pomCategoriesByGarment.map((cat, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-4">{cat.type}</h3>
                <ul className="space-y-2">
                  {cat.keyPoms.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#6B6560]">
                      <CheckCircle2 size={16} className="text-[#2D5016] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Grading Works Across Sizes" },
              { href: "/learn/how-to-inspect-garment-measurements", label: "How to Inspect Garment Measurements in QC" },
              { href: "/learn/garment-measurement-checking-in-production", label: "Garment Measurement Checking in Production" },
              { href: "/garment-quality-control-services", label: "Fenalt Garment Quality Control Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Standardize your garment measurements</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt drafts comprehensive POM spec tables and conducts 100% flat measurement audits for your apparel orders in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
