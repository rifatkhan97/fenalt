import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Compare Clothing Manufacturers: Decision Matrix",
  description:
    "Evaluate garment manufacturers using technical scorecards - comparing FOB unit cost, MOQs, sample lead times, social compliance, and fabric sourcing depth.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
  },
  openGraph: {
    title: "How to Compare Clothing Manufacturers: Decision Matrix",
    description:
      "Evaluate garment manufacturers using technical scorecards - comparing FOB unit cost, MOQs, sample lead times, social compliance, and fabric sourcing depth.",
    url: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
  },
};

export default function HowToCompareClothingManufacturersPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Compare Clothing Manufacturers: Decision Matrix",
    description:
      "A strategic decision matrix for fashion brand founders comparing prospective apparel manufacturing partners.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Compare Clothing Manufacturers", item: "https://fenalt.com/learn/how-to-compare-clothing-manufacturers" },
    ],
  };

  const criteria = [
    {
      title: "1. Minimum Order Quantities (MOQs) vs Long-Term Scalability",
      desc: "Compare initial low MOQ starting tiers (50–100 units for pilot drops) against the manufacturer's capacity to scale to 2,000+ units as your brand grows.",
    },
    {
      title: "2. Transparent Itemized FOB Price Costing",
      desc: "Ensure quotes itemize primary fabric consumption costs, trim prices, screen printing fees, cut-make-trim (CMT) labor, and export packaging - avoiding un-itemized lump sums.",
    },
    {
      title: "3. Technical Pattern Making & Sampling Competency",
      desc: "Evaluate physical prototype sample accuracy, pattern grading precision across sizes, and the factory's ability to execute complex construction details.",
    },
    {
      title: "4. Social Compliance & Environmental Certifications",
      desc: "Verify valid third-party factory audit certificates (BSCI, WRAP, SEDEX, OEKO-TEX Standard 100) to protect your brand against ethical supply chain risks.",
    },
    {
      title: "5. Quality Control Systems & AQL 2.5 Compliance",
      desc: "Compare factory QC protocols - checking for active in-line roving inspectors, calibrated conveyor needle detectors, and formal pre-shipment FRI audits.",
    },
    {
      title: "6. Communication Responsiveness & Tech Pack Fluency",
      desc: "Benchmark how quickly and accurately technical inquiries are answered during initial sampling, as sampling communication reflects future bulk performance.",
    },
  ];

  const comparisonScorecardMatrix = [
    { evaluationFactor: "MOQ Flexibility", weightShare: "20%", targetBenchmark: "50–100 units per style starting tier." },
    { evaluationFactor: "Itemized FOB Pricing", weightShare: "25%", targetBenchmark: "Transparent breakdown of fabric, CMT, and trims." },
    { evaluationFactor: "Sample Quality & Fit", weightShare: "25%", targetBenchmark: "POM measurements within ±1.0cm tech pack spec." },
    { evaluationFactor: "Quality Systems (AQL 2.5)", weightShare: "15%", targetBenchmark: "In-line Traffic Light QC + Needle Scanning." },
    { evaluationFactor: "Communication & Lead Time", weightShare: "15%", targetBenchmark: "10–14 day sampling / 4–6 week bulk turnaround." },
  ];

  const faqs = [
    {
      q: "Should I select the clothing manufacturer with the absolute lowest price quote?",
      a: "No! Exceptionally low price quotes almost always hide low-grade stock fabrics, poor thread tension, un-itemized hidden surcharges, or un-audited subcontractor shadow units. Focus on overall value and reliability.",
    },
    {
      q: "How many manufacturers should I compare before choosing a production partner?",
      a: "Request itemized quotes and sample evaluations from 3 to 5 vetted manufacturers. This provides a clear benchmark for market FOB pricing, sampling speed, and communication quality.",
    },
    {
      q: "What is the best way to score competing apparel manufacturers?",
      a: "Create a weighted scorecard evaluating 5 key areas: 1) Sample Fit & Stitch Quality (25%), 2) Itemized Price (25%), 3) MOQ Flexibility (20%), 4) Quality Systems & Needle Detection (15%), and 5) Communication Speed (15%).",
    },
    {
      q: "Why is sample turnaround time a crucial comparison factor?",
      a: "A manufacturer who takes 6 weeks to produce a basic t-shirt prototype will likely experience severe lead time delays during bulk manufacturing when managing hundreds of units.",
    },
    {
      q: "How do I compare domestic manufacturers vs overseas manufacturers in Bangladesh?",
      a: "Domestic manufacturers offer shorter freight transit times but charge 3x to 5x higher CMT labor rates. Overseas partners in Bangladesh offer superior price economics, custom fabric milling, and low MOQs when managed by an on-the-ground liaison.",
    },
    {
      q: "How does Fenalt help brands compare manufacturing options in Dhaka?",
      a: "Fenalt provides transparent price benchmarks, side-by-side micro-factory audits, itemized FOB quotes, and guaranteed AQL 2.5 quality control across all partner facilities in Dhaka.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Supplier Selection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Compare Clothing{" "}
            <span className="italic font-medium text-[#2D5016]">Manufacturers: Decision Matrix.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Evaluate garment manufacturers using a technical scorecard - comparing FOB unit costs, MOQs, sample lead times, social compliance, and fabric sourcing depth.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Weighted Evaluation</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Comparing manufacturers requires looking beyond the bottom-line unit cost to evaluate <strong className="font-medium">total technical reliability and quality systems</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Choosing between competing garment manufacturers requires a structured, multi-dimensional evaluation. By scoring prospective factories across MOQ flexibility, itemized FOB pricing, physical sample accuracy, social compliance, and AQL quality protocols, brand founders select partners aligned with long-term success.
          </p>
        </div>
      </section>

      {/* 6 Criteria */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Evaluation Pillars</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Criteria for Comparing Apparel Manufacturers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {criteria.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Decision Framework</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Apparel Manufacturer Evaluation Scorecard Template</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Evaluation Factor</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Scorecard Weight %</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Target Pass Benchmark</th>
                </tr>
              </thead>
              <tbody>
                {comparisonScorecardMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.evaluationFactor}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-bold">{row.weightShare}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.targetBenchmark}</td>
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
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturer" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/direct-manufacturer-vs-sourcing-agent", label: "Direct Manufacturer vs Sourcing Agent" },
              { href: "/apparel-production-management", label: "Fenalt Production Vetting Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Compare factory options with Fenalt</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides side-by-side production benchmarks, itemized FOB quotes, and on-the-ground management in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
