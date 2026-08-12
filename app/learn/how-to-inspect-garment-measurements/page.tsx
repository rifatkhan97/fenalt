import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Inspect Garment Measurements: Practical Guide",
  description:
    "A practical guide for brand QC managers on measuring flat garments — checking chest width, HPS length, shoulder slope, sleeve inseams, and leg openings against tech pack spec sheets.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
  },
  openGraph: {
    title: "How to Inspect Garment Measurements: Practical Guide",
    description:
      "A practical guide for brand QC managers on measuring flat garments — checking chest width, HPS length, shoulder slope, sleeve inseams, and leg openings against tech pack spec sheets.",
    url: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
  },
};

export default function HowToInspectGarmentMeasurementsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Inspect Garment Measurements: Practical Guide",
    description:
      "A step-by-step measurement inspection guide for auditing garment sample and bulk production dimensions.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-inspect-garment-measurements",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Inspect Garment Measurements", item: "https://fenalt.com/learn/how-to-inspect-garment-measurements" },
    ],
  };

  const techniques = [
    { title: "1. High Point Shoulder (HPS) Length Anchor", desc: "Position measuring tape at the highest point of the neck shoulder seam join and extend straight down parallel to center front." },
    { title: "2. Chest Width (1\" Below Armhole)", desc: "Measure flat across the chest from armhole seam join to armhole seam join exactly 1 inch (2.5 cm) below armpit fold." },
    { title: "3. Shoulder Slope & Cross-Shoulder Span", desc: "Measure straight across from shoulder tip seam to shoulder tip seam along back shoulder line." },
    { title: "4. Sleeve Length & Cuff Opening Width", desc: "Measure from shoulder tip seam down the outer edge to sleeve cuff hem." },
  ];

  const faqs = [
    {
      q: "Should I pull fabric taut when measuring garments flat?",
      a: "No! Garments must be smoothed flat without pulling or stretching fabric. Pulling knits taut distorts measurements and causes false out-of-spec readings.",
    },
    {
      q: "What is an acceptable measurement tolerance for hoodies?",
      a: "Standard tolerance for heavy fleece hoodies is ±1.0 cm for chest and length, and ±0.5 cm for collar neck openings.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Strategy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Inspect Garment Measurements:{" "}
            <span className="italic font-medium text-[#2D5016]">Practical Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Measurement auditing requires precise anchor points and tape placement. Master the physical techniques used to verify flat garment dimensions.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Ruler size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Audit Technique</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Correct <strong className="font-medium">flat tape placement and un-stretched fabric positioning</strong> prevent false measurement readings during sample and bulk inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Measuring Anchors</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Essential Measuring Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techniques.map((t, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{t.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{t.desc}</p>
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
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure in Garment Manufacturing?" },
              { href: "/learn/garment-measurement-checking-in-production", label: "How Garment Measurements Are Checked in Production" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/garment-quality-control-services", label: "Fenalt Quality Control Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Standardized measurement inspection</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt inspects every sample and bulk production batch using standardized flat table measurement techniques in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
