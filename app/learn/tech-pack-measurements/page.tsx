import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Measurements for a Clothing Tech Pack",
  description:
    "A practical guide to drafting accurate garment measurements, defining base size spec tables, establishing POM codes, and setting tolerances.",
  alternates: {
    canonical: "https://fenalt.com/learn/tech-pack-measurements",
  },
  openGraph: {
    title: "How to Create Measurements for a Clothing Tech Pack",
    description:
      "A practical guide to drafting accurate garment measurements, defining base size spec tables, establishing POM codes, and setting tolerances.",
    url: "https://fenalt.com/learn/tech-pack-measurements",
  },
};

export default function TechPackMeasurementsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Create Measurements for a Clothing Tech Pack",
    description:
      "A step-by-step technical walkthrough on measuring reference garments and building measurement spec sheets for apparel tech packs.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/tech-pack-measurements",
    mainEntityOfPage: "https://fenalt.com/learn/tech-pack-measurements",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Tech Pack Measurements", item: "https://fenalt.com/learn/tech-pack-measurements" },
    ],
  };

  const steps = [
    { title: "1. Measure a Physical Benchmark Garment Flat", desc: "Lay your favorite fitting reference garment completely flat on a smooth table. Smooth out wrinkles without stretching fabric." },
    { title: "2. Define Points of Measure (POM) Codes", desc: "Assign clear measurement codes (e.g. POM-01 Body Length HPS, POM-02 Chest Width 1\" below armhole)." },
    { title: "3. Document Exact Measuring Instructions", desc: "Specify measurement anchors (e.g. 'Measure from high point shoulder straight down to bottom hem')." },
    { title: "4. Establish Commercial Tolerance Ranges", desc: "Assign acceptable variance limits (e.g. ±1.0 cm for chest width, ±0.5 cm for neck collar height)." },
  ];

  const faqs = [
    {
      q: "Should I measure in inches or centimeters?",
      a: "Centimeters (cm) are preferred for international production in Bangladesh, Europe, and Asia. However, providing both cm and inches in your spec sheet prevents conversion errors.",
    },
    {
      q: "What if I don't have exact measurements for all sizes?",
      a: "Define your base size (typically Medium). Professional pattern makers use standard grade rules to scale measurements automatically across XS through 3XL.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Pattern Making</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Create Measurements{" "}
            <span className="italic font-medium text-[#2D5016]">for a Tech Pack.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Building a tech pack spec sheet starts with flat garment measurements. Learn how to record dimensions accurately and define factory tolerances.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Measurement Precision</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Garment spec sheets rely on <strong className="font-medium">flat 2D measurements</strong> taken from anatomical anchor points. Clear instructions prevent factory misinterpretation.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Measurement Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Steps to Build a Spec Sheet</h2>
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
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Clothing Tech Pack?" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Professional spec sheet development</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Send Fenalt a sample garment or sketch, and our technical designers will build exact graded measurement spec sheets for your collection.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
