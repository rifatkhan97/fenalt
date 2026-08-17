import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, PieChart } from "lucide-react";

export const metadata: Metadata = {
  title: "How Many Units Should a New Fashion Brand Produce?",
  description:
    "A realistic unit volume guide for emerging apparel labels - balancing minimum order quantities (MOQs), cash flow, inventory risk, and size ratio distribution.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/how-many-units-for-new-fashion-brand",
  },
  openGraph: {
    title: "How Many Units Should a New Fashion Brand Produce?",
    description:
      "A realistic unit volume guide for emerging apparel labels - balancing minimum order quantities (MOQs), cash flow, inventory risk, and size ratio distribution.",
    url: "https://www.fenalt.com/learn/how-many-units-for-new-fashion-brand",
  },
};

export default function HowManyUnitsForNewFashionBrandPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Many Units Should a New Fashion Brand Produce?",
    description:
      "A practical volume and size-ratio allocation guide for early-stage clothing brands planning their initial production runs.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/how-many-units-for-new-fashion-brand",
    mainEntityOfPage: "https://www.fenalt.com/learn/how-many-units-for-new-fashion-brand",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Initial Unit Production Volumes", item: "https://www.fenalt.com/learn/how-many-units-for-new-fashion-brand" },
    ],
  };

  const benchmarks = [
    { range: "50 – 100 Units / Style", label: "Micro-Batch Pilot Run (Low Risk)", bestFor: "Initial market validation, direct-to-consumer pre-orders, exclusive capsule drops. Minimizes deadstock risk." },
    { range: "150 – 300 Units / Style", label: "Standard Startup Launch", bestFor: "Established online audience, boutique wholesale distribution, balanced per-unit manufacturing costs." },
    { range: "500+ Units / Style", label: "Bulk Tier 1 Production", bestFor: "Proven historical sell-through rates, retail distribution contracts, maximum per-unit margin efficiency." },
  ];

  const sizeRatioMatrix = [
    { demographic: "Menswear Streetwear (Oversized)", ratioPattern: "1 : 2 : 3 : 2 : 1", sizeBreakdown100Units: "10 Small, 20 Medium, 30 Large, 20 XL, 10 2XL" },
    { demographic: "Unisex Everyday Casual", ratioPattern: "1 : 2 : 2 : 1", sizeBreakdown100Units: "15 Small, 35 Medium, 35 Large, 15 XL" },
    { demographic: "Womenswear Athleisure", ratioPattern: "2 : 3 : 3 : 1", sizeBreakdown100Units: "20 XS, 30 Small, 30 Medium, 20 Large" },
  ];

  const faqs = [
    {
      q: "What is a standard size ratio breakdown for a 100-unit t-shirt order?",
      a: "For unisex clothing, a standard 1:2:2:1 bell-curve size distribution across 100 units is: 15 Small, 35 Medium, 35 Large, and 15 XL. For oversized streetwear, skewing heavily toward Medium, Large, and XL (e.g. 10 S, 25 M, 35 L, 20 XL, 10 2XL) matches customer demand.",
    },
    {
      q: "Should I order a higher volume just to get a cheaper per-unit price?",
      a: "No. Saving $2.00 per garment by ordering 500 units is a net loss if 300 unsold units sit in a warehouse. Capital preservation, inventory liquidity, and fast sell-through far outweigh minor per-unit savings for early drops.",
    },
    {
      q: "How many total pieces should be in a brand's inaugural launch?",
      a: "A total volume of 150 to 300 total units spread across a tight 3 to 4 piece capsule collection (e.g. 1 hoodie style, 2 t-shirt styles, 1 sweatpant) is the sweet spot for new fashion brands.",
    },
    {
      q: "What happens if I sell out of Mediums while Small and XL remain in stock?",
      a: "Stockouts of core sizes (Medium/Large) while extreme sizes sit idle is called 'broken size curves'. Next order round, adjust your size ratio to increase M/L production percentage by 10% to 15%.",
    },
    {
      q: "What portion of my startup capital should go directly to inventory?",
      a: "Allocate no more than 40% to 50% of total launch capital to physical garment manufacturing. Reserve the remaining 50% to 60% for sampling, tech packs, e-commerce setup, shipping, and marketing/advertising.",
    },
    {
      q: "How does Fenalt support initial unit volume planning in Bangladesh?",
      a: "Fenalt's Dhaka team accepts initial small-batch orders starting at 50 to 100 units per style, assisting new brands with size ratio allocation and sample approval before bulk cutting.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Low MOQ &amp; Startups</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Many Units Should a{" "}
            <span className="italic font-medium text-[#2D5016]">New Fashion Brand Produce?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A practical volume and size-ratio allocation guide for early-stage clothing brands - balancing minimum order quantities (MOQs), cash flow, inventory risk, and bell-curve sizing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <PieChart size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Capital Preservation Rule</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              New brands fail from <strong className="font-medium">over-producing inventory before validating demand</strong>, tying up cash flow in deadstock.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            One of the most frequent mistakes made by first-time clothing founders is chasing lower per-unit factory prices by ordering 500+ units of unproven styles. Smart founders prioritize capital preservation, starting with 50 to 100 units per style to test market demand, refine sizing ratios, and build cash flow.
          </p>
        </div>
      </section>

      {/* Volume Benchmarks */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Volume Tiers</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Production Volume Benchmarks</h2>
          <div className="space-y-6">
            {benchmarks.map((b, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl font-medium text-[#FAF9F6]">{b.label}</h3>
                  <span className="inline-block px-3 py-1 bg-[#2D5016] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">{b.range}</span>
                </div>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{b.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Curve Ratio Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Sizing Allocation</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Size Curve Ratio Recommendations (Across 100 Units)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Demographic Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Ratio Pattern</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-5/12">Example 100-Unit Size Distribution</th>
                </tr>
              </thead>
              <tbody>
                {sizeRatioMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.demographic}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.ratioPattern}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.sizeBreakdown100Units}</td>
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
              { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean in Clothing Manufacturing?" },
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for First Production Run" },
              { href: "/learn/how-to-plan-small-batch-apparel-launch", label: "How to Plan a Small-Batch Apparel Launch" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/low-moq-apparel-manufacturing", label: "Fenalt Production Planning Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Right-size your initial production run</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt helps emerging fashion brands calculate optimal unit volumes and size curves for small-batch production in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
