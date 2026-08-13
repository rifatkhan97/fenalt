import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Reduce Risk When Launching a Clothing Collection",
  description:
    "A risk management framework for new apparel brands - covering pre-order models, sample wash testing, milestone payments, AQL 2.5 quality control, and low MOQ trial runs.",
  alternates: {
    canonical: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
  },
  openGraph: {
    title: "How to Reduce Risk When Launching a Clothing Collection",
    description:
      "A risk management framework for new apparel brands - covering pre-order models, sample wash testing, milestone payments, AQL 2.5 quality control, and low MOQ trial runs.",
    url: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
  },
};

export default function ReduceRiskWhenLaunchingClothingCollectionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Reduce Risk When Launching a Clothing Collection",
    description:
      "A strategic guide for clothing brand founders to mitigate financial, quality, and supply chain risks prior to collection launches.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
    mainEntityOfPage: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Reduce Risk When Launching", item: "https://fenalt.com/learn/reduce-risk-when-launching-clothing-collection" },
    ],
  };

  const strategies = [
    {
      title: "1. Conduct Prototype Wear & 5x Wash Fastness Testing",
      desc: "Never approve a sample based purely on visual arrival look. Put pre-production samples through 5 commercial wash/dry cycles and wear-test them to catch fabric shrinkage, seam spirality, collar warping, or dye bleeding before bulk cutting.",
    },
    {
      title: "2. Limit Initial SKU & Colorway Variations",
      desc: "Producing 5 styles in 4 colorways creates 20 distinct manufacturing lines, diluting your capital. Focus on 2 to 3 core styles in 2 neutral colorways (e.g. Black and Off-White) to maximize fabric roll yield efficiency.",
    },
    {
      title: "3. Implement Milestone-Based Factory Payment Terms",
      desc: "Never pay 100% upfront for bulk garment production. Enforce standard commercial terms: 30% to 50% deposit upon PO issuance, with the remaining balance paid strictly upon a passed AQL 2.5 pre-shipment inspection.",
    },
    {
      title: "4. Mandate On-Site AQL 2.5 Pre-Shipment QC Inspections",
      desc: "Require formal AQL 2.5 quality control inspection reports on the factory floor before final shipment release. Correcting sewing defects at origin in Dhaka is fast; handling returns in your home country destroys margins.",
    },
    {
      title: "5. Source High-Grade Mill Stock Fabrics",
      desc: "Bypass custom mill dyeing minimums (300+ meters per custom color) by utilizing high-grade warehouse stock cotton jersey and French Terry fleece in proven retail colors.",
    },
    {
      title: "6. Lock in Signed Pre-Production Golden Samples",
      desc: "Physical sign-off on a 'Golden Sample' acts as the binding contractual benchmark for garment construction, seam density, POM measurement tolerances, and print quality across the entire bulk run.",
    },
  ];

  const riskMatrix = [
    {
      riskFactor: "Unsold Deadstock Inventory",
      impact: "High capital tie-up; margin loss from forced clearance markdowns.",
      mitigationAction: "Launch with small-batch low MOQs (50–100 units/style) or run pre-orders.",
    },
    {
      riskFactor: "Sizing & Fit Discrepancies",
      impact: "High customer return rates; damaged brand reputation.",
      mitigationAction: "Develop detailed 2D CAD tech packs with POM measurement tables + 3D grading.",
    },
    {
      riskFactor: "Fabric Shrinkage & Distortion",
      impact: "Garments shrink out of size spec after initial customer wash.",
      mitigationAction: "Perform lab wash tests on raw fabric rolls + enforce factory compacting.",
    },
    {
      riskFactor: "Sub-Standard Bulk Sewing Quality",
      impact: "Loose threads, uneven hems, popping seams upon customer receipt.",
      mitigationAction: "Enforce AQL 2.5 pre-shipment quality inspection before releasing final payment.",
    },
  ];

  const faqs = [
    {
      q: "Is a pre-order model a good way to reduce initial inventory risk?",
      a: "Yes - provided your pre-production golden sample is approved and factory lead times are secured. Pre-orders fund bulk manufacturing directly from consumer sales and provide accurate real-time data on size curve distribution.",
    },
    {
      q: "What is the single biggest financial risk for a new fashion brand?",
      a: "Holding deadstock (unsold inventory) tied up in unpopular sizes or unproven styles. Deadstock drains cash flow needed for marketing, sampling, and subsequent seasonal drops.",
    },
    {
      q: "How can I protect my brand against factory production delays?",
      a: "Build a 3-week buffer into your public marketing launch date beyond the factory's estimated delivery date. Additionally, include strict completion milestone dates in your factory purchase order.",
    },
    {
      q: "What is an AQL 2.5 inspection, and why does it reduce risk?",
      a: "ANSI/ASQ Z1.4 AQL 2.5 is an international quality control standard where an independent inspector samples a statistically valid batch of finished garments, auditing measurements, stitching, and trims before export.",
    },
    {
      q: "Should I buy product liability insurance for my clothing brand?",
      a: "Yes. General business liability insurance protecting against garment safety issues (such as drawstring safety, zipper pinches, or allergic dye reactions) is essential when selling apparel commercially.",
    },
    {
      q: "How does Fenalt de-risk apparel production for brands in Dhaka?",
      a: "Fenalt's Dhaka team acts as your on-the-ground technical liaison - managing tech pack validation, raw fabric shrinkage testing, low MOQ pilot runs (50–100 units), and AQL 2.5 pre-shipment audits.",
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
            How to Reduce Risk When{" "}
            <span className="italic font-medium text-[#2D5016]">Launching a Clothing Collection.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Launching a fashion collection involves financial, operational, and brand reputation risks. Protect your capital and brand with these proven risk-mitigation strategies.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Risk Management</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Risk reduction is about <strong className="font-medium">controlling variables before capital is committed</strong> - verifying fit, testing fabric stability, and staging payment terms.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Successful apparel brand founders treat manufacturing as a disciplined risk-mitigation process. From testing prototype sample wash fastness to limiting initial SKU variations, structuring milestone payment terms, and enforcing pre-shipment AQL 2.5 quality control, establishing clear technical gates protects your brand from financial loss.
          </p>
        </div>
      </section>

      {/* 6 Strategies */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Core Principles</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Pillars of Launch Risk Reduction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Risk Framework</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Apparel Launch Risk Mitigation Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Risk Factor</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Potential Business Impact</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Mitigation Action</th>
                </tr>
              </thead>
              <tbody>
                {riskMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.riskFactor}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.impact}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.mitigationAction}</td>
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
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for Their First Production Run" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Brand Produce?" },
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean in Clothing Manufacturing?" },
              { href: "/learn/how-to-plan-small-batch-apparel-launch", label: "How to Plan a Small-Batch Apparel Launch" },
              { href: "/garment-quality-control-services", label: "Fenalt Production Risk Management & QC Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">De-risk your next collection drop</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt acts as your on-the-ground production partner - conducting sample testing and in-factory quality control in Dhaka to safeguard your capital.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
