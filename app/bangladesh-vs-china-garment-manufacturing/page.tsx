import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Bangladesh vs China Garment Manufacturing | Fenalt Guide",
  description:
    "Comprehensive comparison of Bangladesh vs China apparel manufacturing. Evaluate FOB cost differences, cotton knits vs synthetics, MOQs, and lead times for fashion brands.",
  alternates: {
    canonical: "https://www.fenalt.com/bangladesh-vs-china-garment-manufacturing",
  },
  openGraph: {
    title: "Bangladesh vs China Garment Manufacturing | Fenalt Guide",
    description:
      "Comprehensive comparison of Bangladesh vs China apparel manufacturing. Evaluate FOB cost differences, cotton knits vs synthetics, MOQs, and lead times for fashion brands.",
    url: "https://www.fenalt.com/bangladesh-vs-china-garment-manufacturing",
  },
};

export default function BangladeshVsChinaPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bangladesh vs China Garment Manufacturing Comparison Guide",
    "description":
      "An analytical comparison of apparel manufacturing in Bangladesh and China - covering labor cost structures, cotton knits vs synthetics, tariff considerations, and low MOQ management.",
    "author": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
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
        "item": "https://www.fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bangladesh vs China Garment Manufacturing",
        "item": "https://www.fenalt.com/bangladesh-vs-china-garment-manufacturing",
      },
    ],
  };

  const faqs = [
    {
      q: "When should a fashion brand choose Bangladesh over China?",
      a: "Bangladesh is the ideal manufacturing hub for cotton knits (hoodies, t-shirts, sweatpants), denim, and woven garments where labor cost efficiency and duty preferences (e.g., UK DCTS) offer a major margin advantage.",
    },
    {
      q: "Does China still hold an advantage for certain garment categories?",
      a: "China remains highly competitive for complex synthetic activewear, specialized technical outerwear, and hardware components due to extensive domestic chemical textile infrastructure.",
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
            Global Sourcing Comparison
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Bangladesh vs China Garment Manufacturing:{" "}
            <span className="italic font-medium text-[#2D5016]">A Sourcing Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            An objective analysis for fashion brand founders and sourcing executives evaluating apparel production relocation, FOB costs, cotton knits vs synthetics, and tariff structures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Consult Sourcing Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/sourcing-garments-outside-china"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              China Alternatives
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Strategic Evaluation
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Comparing Two Apparel Superpowers
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Rising labor costs and tariff friction in China have compelled international apparel brands to re-evaluate their supply chain concentration. Bangladesh has emerged as the premier global alternative for cotton knits, denim, and woven garments.
              </p>
              <p>
                <strong>How Fenalt bridges the gap:</strong> We combine the cost advantages of Bangladesh manufacturing with Western project management - offering low 50-unit minimums, physical floor QC in Dhaka, and seamless DDP freight handling.
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
              Key Sourcing Drivers Compared
            </h2>
          </div>

          <div className="overflow-x-auto bg-[#FAF9F6] border border-[#E5DDD3] p-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5DDD3]">
                  <th className="py-4 px-6 font-display text-xl text-[#1A1A1A]">Sourcing Metric</th>
                  <th className="py-4 px-6 font-display text-xl text-[#2D5016]">Bangladesh (Fenalt Model)</th>
                  <th className="py-4 px-6 font-display text-xl text-[#1A1A1A]">China Sourcing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DDD3] text-sm text-[#6B6560]">
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">Labor Cost Structure</td>
                  <td className="py-4 px-6 text-[#2D5016]">Highly competitive; ideal for labor-intensive sewing &amp; washing</td>
                  <td className="py-4 px-6">Rising labor costs in coastal manufacturing hubs</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">Cotton Knit Specialization</td>
                  <td className="py-4 px-6 text-[#2D5016]">World-class 180gsm–480gsm cotton knits &amp; French Terry</td>
                  <td className="py-4 px-6">Strong, but shifting toward high-tech synthetic knits</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">Minimum Order Quantity</td>
                  <td className="py-4 px-6 text-[#2D5016]">Low MOQs starting at 50 units via Fenalt micro-factories</td>
                  <td className="py-4 px-6">Typically 300–500 units for custom fabric dye lots</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1A1A1A]">UK / EU Duty Preferences</td>
                  <td className="py-4 px-6 text-[#2D5016]">Favorable trade access (e.g., UK DCTS preferential tariffs)</td>
                  <td className="py-4 px-6">Standard MFN import duty rates apply</td>
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
              Managed QC in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Regardless of sourcing origin, rigorous physical quality control remains essential. Our local Dhaka team inspects every seam and measurement curve before export.
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
              Sourcing Comparison FAQ
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
            Evaluate Bangladesh manufacturing for your brand
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or tech specs for a comparative landed quote within 24–48 hours.
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
