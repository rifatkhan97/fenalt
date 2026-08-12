import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Bangladesh vs Vietnam Garment Manufacturing | Fenalt Guide",
  description:
    "Analytical comparison of Bangladesh vs Vietnam apparel manufacturing. Compare cotton knits vs outerwear specialization, labor costs, MOQs, and lead times.",
  alternates: {
    canonical: "https://fenalt.com/bangladesh-vs-vietnam-garment-manufacturing",
  },
  openGraph: {
    title: "Bangladesh vs Vietnam Garment Manufacturing | Fenalt Guide",
    description:
      "Analytical comparison of Bangladesh vs Vietnam apparel manufacturing. Compare cotton knits vs outerwear specialization, labor costs, MOQs, and lead times.",
    url: "https://fenalt.com/bangladesh-vs-vietnam-garment-manufacturing",
  },
};

export default function BangladeshVsVietnamPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bangladesh vs Vietnam Garment Manufacturing Sourcing Guide",
    "description":
      "An analytical comparison of apparel manufacturing in Bangladesh and Vietnam—evaluating knitwear strength, outerwear capabilities, labor cost differentials, and low MOQ management.",
    "author": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bangladesh vs Vietnam Garment Manufacturing",
        "item": "https://fenalt.com/bangladesh-vs-vietnam-garment-manufacturing",
      },
    ],
  };

  const faqs = [
    {
      q: "Which country is better for cotton knits and streetwear hoodies?",
      a: "Bangladesh holds a clear global advantage in cotton knitwear (hoodies, t-shirts, sweatshirts) due to immense domestic spinning mill capacity and cost-effective labor.",
    },
    {
      q: "How does Fenalt help brands sourcing in Bangladesh?",
      a: "Fenalt removes traditional Bangladesh sourcing hurdles by matching brands with audited micro-factories, managing small batch drops from 50 units, and overseeing floor QC on the ground.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Southeast vs South Asia
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Bangladesh vs Vietnam Garment Manufacturing:{" "}
            <span className="italic font-medium text-[#2D5016]">A Sourcing Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            An objective guide comparing two leading apparel export hubs—analyzing cotton knitwear specialization, synthetic activewear, labor economics, and low MOQ management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Consult Sourcing Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/why-manufacture-apparel-in-bangladesh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Why Bangladesh
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Category Specialization
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Understanding Regional Manufacturing Strengths
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Both Bangladesh and Vietnam are premier apparel manufacturing destinations, but their technical strengths differ substantially by product category and fabric type.
              </p>
              <p>
                <strong>Bangladesh excels in cotton knits &amp; denim:</strong> With vast domestic spinning mills and specialized washing infrastructure, Bangladesh delivers unrivaled cost efficiency for t-shirts, fleece hoodies, and jeans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Comparison Table
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Bangladesh vs Vietnam Breakdown
            </h2>
          </div>

          <div className="overflow-x-auto bg-[#FAF9F6] border border-[#E5DDD3] p-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5DDD3]">
                  <th className="py-4 px-6 font-display text-xl text-[#1A1A1A]">Category / Metric</th>
                  <th className="py-4 px-6 font-display text-xl text-[#2D5016]">Bangladesh (Fenalt Model)</th>
                  <th className="py-4 px-6 font-display text-xl text-[#1A1A1A]">Vietnam Sourcing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DDD3] text-sm text-[#6B6560]">
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">Cotton Knits &amp; Fleece</td>
                  <td className="py-4 px-6 text-[#2D5016]">Dominant global strength; heavy 380gsm–480gsm fleece &amp; tees</td>
                  <td className="py-4 px-6">Moderate; higher fabric import dependency for heavy cottons</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">Woven Denim &amp; Jeans</td>
                  <td className="py-4 px-6 text-[#2D5016]">World-class industrial denim washing &amp; sewing infrastructure</td>
                  <td className="py-4 px-6">Growing denim capacity, but higher average unit costs</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">Low MOQ Management</td>
                  <td className="py-4 px-6 text-[#2D5016]">Fenalt micro-factory network enables 50-unit capsule drops</td>
                  <td className="py-4 px-6">Factories typically require 500–1,000 unit minimums</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Assurance
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              On-Site QC Oversight
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Our Dhaka floor managers inspect every seam, measurement tolerance (±1.5cm), and trim before export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all garments." },
              { title: "Needle & Metal Detection", desc: "100% safety inspection of finished pieces." },
              { title: "ANSI/ASQ Z1.4 Audits", desc: "Enforcing international AQL 2.5 quality benchmarks." },
            ].map((qc, i) => (
              <div key={i} className="p-6 bg-[#2A2A2A] border border-[#3A3A3A]">
                <ShieldCheck size={20} className="text-[#C8A882] mb-4" />
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-2">{qc.title}</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Sourcing FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
            Explore Bangladesh manufacturing options
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your garment specs for an all-inclusive landed quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Sourcing Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
