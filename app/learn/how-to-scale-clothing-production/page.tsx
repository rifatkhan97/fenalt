import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Scale Clothing Production After a Successful First Run",
  description:
    "Learn how to transition from small-batch initial orders to scaled bulk production - managing supply chain capacity, custom fabric knits, greige reserves, and working capital.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-scale-clothing-production",
  },
  openGraph: {
    title: "How to Scale Clothing Production After a Successful First Run",
    description:
      "Learn how to transition from small-batch initial orders to scaled bulk production - managing supply chain capacity, custom fabric knits, greige reserves, and working capital.",
    url: "https://fenalt.com/learn/how-to-scale-clothing-production",
  },
};

export default function HowToScaleClothingProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Scale Clothing Production After a Successful First Run",
    description:
      "A strategic operational roadmap for scaling apparel manufacturing from initial trial runs to multi-thousand unit production volumes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-scale-clothing-production",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-scale-clothing-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Scale Clothing Production", item: "https://fenalt.com/learn/how-to-scale-clothing-production" },
    ],
  };

  const pillars = [
    {
      title: "1. Upgrade from Stock Fabrics to Custom Mill Knitting & Dyeing",
      body: "Small-batch pilot runs rely on open-market stock fabrics. As you scale past 300 to 500 units per style, unlock custom mill knitting and Pantone lab-dip dyeing for brand-exclusive colorways and custom GSM weights.",
    },
    {
      title: "2. Lock In Raw Material Greige Fabric Reserves",
      body: "Fabric milling takes 3 to 4 weeks. Scaling brands maintain greige (knit undyed base fabric) reserves at the textile mill so reorders can be dyed and cut in half the standard turnaround time.",
    },
    {
      title: "3. Refine Size Ratio Curves from Real E-Commerce Sales Data",
      body: "Replace initial estimated size curves (e.g. 1:2:2:1) with real sales analytics from your debut drop, shifting production budget toward your highest-velocity sizes (e.g. Large and XL).",
    },
    {
      title: "4. Establish Formal AQL 2.5 Quality Inspection Standards",
      body: "As unit volumes increase, manual 100% individual inspection gives way to statistical ANSI/ASQ Z1.4 AQL 2.5 sampling audits conducted directly on the factory floor prior to packing.",
    },
    {
      title: "5. Transition Freight Logistics from Express Air to Ocean Freight",
      body: "Shipping small batches via express air freight (DHL/FedEx) costs $6.00 to $12.00 per kg. Scaling to ocean freight (FCL or LCL) slashes shipping costs to under $1.50 per kg, boosting gross profit margins.",
    },
    {
      title: "6. Secure Rolling Purchase Order Commitments with Factory Partners",
      body: "Establish seasonal production schedules with your factory partner 90 to 120 days in advance, reserving dedicated sewing lines and locking in preferential manufacturing rates.",
    },
  ];

  const scaleMatrix = [
    { stage: "Startup Pilot Phase (50–100 Units)", fabricSourcing: "Warehouse stock colors & knits", dyeingMethod: "Pre-dyed stock fabric rolls", freightMode: "Express Air Freight (3–5 days)", qualityControl: "100% manual sample check" },
    { stage: "Growth Phase (300–500 Units)", fabricSourcing: "Mill custom stock color runs", dyeingMethod: "Lab-dip shade matching", freightMode: "Air Cargo (7–10 days)", qualityControl: "In-line + Final QC check" },
    { stage: "Scaled Bulk Phase (1,000+ Units)", fabricSourcing: "Custom mill yarn knitting", dyeingMethod: "Custom Pantone vat dyeing", freightMode: "Ocean Freight (25–35 days)", qualityControl: "Formal AQL 2.5 statistical audit" },
  ];

  const faqs = [
    {
      q: "How far in advance should I plan scaled clothing restocks?",
      a: "Plan scaled production runs 90 to 120 days ahead of expected retail stockout. This accounts for custom fabric milling (3 weeks), bulk sewing and screen printing (4 weeks), ocean freight shipping (4 weeks), and customs clearance.",
    },
    {
      q: "Should I switch manufacturers when scaling up production volume?",
      a: "Not necessarily. If your current factory partner or production liaison in Dhaka has the capacity and consistently delivers quality, scaling with an existing partner is far safer than onboarding an unproven new factory.",
    },
    {
      q: "What is greige fabric, and how does it speed up production reorders?",
      a: "Greige fabric is raw knitted or woven fabric that has not yet been dyed or finished. By holding greige fabric in reserve at the mill, brands can skip the 3-week knitting process and move straight to Pantone dyeing when a reorder is placed.",
    },
    {
      q: "How much do per-unit manufacturing costs decrease when scaling from 100 to 1,000 units?",
      a: "Scaling volume typically reduces per-unit FOB manufacturing costs by 20% to 35%, driven by fabric mill volume discounts, optimized cutting marker efficiency, and lower per-piece screen printing setup fees.",
    },
    {
      q: "How do I finance larger inventory reorders as my brand scales?",
      a: "Scaling brands finance inventory through a combination of reinvested revenue, pre-order campaigns, purchase order (PO) financing, revenue-based inventory funding, or milestone payment terms with factory partners.",
    },
    {
      q: "How does Fenalt support scaling apparel brands in Bangladesh?",
      a: "Fenalt manages the entire scaling transition in Dhaka - from small-batch pilot runs (50–100 units) to custom mill fabric knitting, greige reserves, ocean freight logistics, and AQL 2.5 quality control for 1,000+ unit bulk orders.",
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
            How to Scale Clothing Production{" "}
            <span className="italic font-medium text-[#2D5016]">After a Successful Run.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sold out your first drop? Scaling from 100 units to 2,000 units requires shifting from small-batch stock sourcing to custom mill reserves, ocean freight, and AQL quality audits.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">The Scaling Evolution</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Scaling is not simply multiplying your order by ten - it requires <strong className="font-medium">custom fabric mill reservations, ocean freight, and statistical AQL quality control</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Transitioning a clothing brand from pilot drops to scalable volume requires operational evolution. Moving from stock fabric rolls to custom Pantone dyeing, building greige fabric reserves, refining size ratios based on sales data, and shifting freight modes significantly reduces per-unit costs while securing inventory flow.
          </p>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Operational Blueprint</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Pillars of Production Scaling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{p.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Supply Chain Progression</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Production Scaling Stage Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Production Stage</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Fabric Sourcing</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Dyeing &amp; Lab Dips</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Freight Method</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">QC Protocol</th>
                </tr>
              </thead>
              <tbody>
                {scaleMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.stage}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.fabricSourcing}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.dyeingMethod}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.freightMode}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.qualityControl}</td>
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
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Fashion Brand Produce?" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Impacts Manufacturing Cost" },
              { href: "/learn/reduce-risk-when-launching-clothing-collection", label: "How to Reduce Risk When Launching a Collection" },
              { href: "/apparel-production-management-services", label: "Fenalt Scaled Production Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Scale your manufacturing seamlessly</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt supports brands as they expand from initial low MOQ drops into high-volume bulk production runs in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Scale Your Brand <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
