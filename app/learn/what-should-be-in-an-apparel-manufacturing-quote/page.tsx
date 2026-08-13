import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "What Should Be Included in an Apparel Manufacturing Quote?",
  description:
    "Learn how to review garment manufacturing FOB quotes - itemized fabric yields, cut-and-sew labor, printing surcharges, packaging, Incoterms shipping terms, and payment milestones.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
  },
  openGraph: {
    title: "What Should Be Included in an Apparel Manufacturing Quote?",
    description:
      "Learn how to review garment manufacturing FOB quotes - itemized fabric yields, cut-and-sew labor, printing surcharges, packaging, Incoterms shipping terms, and payment milestones.",
    url: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
  },
};

export default function WhatShouldBeInAnApparelManufacturingQuotePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Should Be Included in an Apparel Manufacturing Quote?",
    description:
      "A technical guide for fashion brands on auditing manufacturer FOB price quotations and line-item cost structures.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
    mainEntityOfPage: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Manufacturing Quote Requirements", item: "https://fenalt.com/learn/what-should-be-in-an-apparel-manufacturing-quote" },
    ],
  };

  const components = [
    {
      title: "1. Fabric Consumption & Yield Breakdown",
      desc: "Detailed line-item pricing showing primary fabric cost per meter/kg, secondary lining fabric, GSM weight assumptions, and estimated fabric consumption yield per garment.",
    },
    {
      title: "2. Trims, Labels & Packaging Itemization",
      desc: "Itemized costs for woven neck labels, care tags, custom zippers, hood drawstrings, metal aglets, individual polybags, and export master shipping cartons.",
    },
    {
      title: "3. Cut-Make-Trim (CMT) Labor & Decoration Fees",
      desc: "Separated line-sewing assembly labor costs, plus specific decoration charges (screen printing setup fees per color, 3D puff print surcharges, or embroidery stitch counts).",
    },
    {
      title: "4. Pre-Production Sampling & Screen Setup Fees",
      desc: "Transparent sampling fees (proto samples, fit revisions, photo samples) and screen preparation fees, detailing which fees are refundable against bulk production orders.",
    },
    {
      title: "5. Incoterms Shipping Terms & Delivery Port",
      desc: "Explicit Incoterms definition (e.g. FOB Chittagong, EXW Factory, or DDP Destination Warehouse) defining exact transport responsibility boundaries.",
    },
    {
      title: "6. Payment Milestones & Commercial Validity Window",
      desc: "Clear commercial payment terms (e.g. 30% deposit upon PO / 70% balance upon passed AQL 2.5 FRI inspection) and quote price validity expiration windows (30 days).",
    },
  ];

  const quoteMatrix = [
    { lineItem: "Primary Shell Fabric", description: "100% Combed Cotton 450 GSM French Terry", unitPricing: "$8.50 / kg", costShare: "40% – 50% of FOB" },
    { lineItem: "Cut-Make-Trim (CMT)", description: "Cutting, line sewing assembly, quality control trimming", unitPricing: "$3.00 – $5.00 / garment", costShare: "25% – 35% of FOB" },
    { lineItem: "Decoration (Screen Print)", description: "3-color back screen print + 1-color chest print", unitPricing: "$1.20 – $2.00 / garment", costShare: "10% – 15% of FOB" },
    { lineItem: "Trims & Packaging", description: "Woven label, care tag, polybag, master carton", unitPricing: "$0.60 – $1.20 / garment", costShare: "5% – 10% of FOB" },
  ];

  const faqs = [
    {
      q: "What does FOB stand for in apparel manufacturing quotations?",
      a: "FOB stands for Free On Board. A price quoted 'FOB Chittagong' includes all raw fabric, manufacturing labor, trims, inner packaging, and local truck transport up until cargo is loaded onto the vessel at the export port.",
    },
    {
      q: "Why are un-itemized lump-sum quotes dangerous for fashion brands?",
      a: "Lump-sum single-number quotes obscure raw fabric costs and factory labor margins. Without itemization, brands cannot negotiate fabric yields, optimize trim specs, or audit cost improvements when scaling order volume.",
    },
    {
      q: "What is the difference between FOB, EXW, and DDP shipping terms?",
      a: "EXW (Ex-Works) means the brand pays for all transport from the factory gate onward. FOB includes transport and port clearance to the export vessel. DDP (Delivered Duty Paid) means the manufacturer handles 100% of sea freight, customs clearance, duties, and door delivery.",
    },
    {
      q: "Are sampling fees usually included in the bulk production quote?",
      a: "Sampling fees are typically invoiced upfront separately. However, reputable manufacturers often credit pre-production sample fees back to the brand once bulk purchase orders meeting MOQ thresholds are placed.",
    },
    {
      q: "Why do apparel quotes specify a 30-day price validity window?",
      a: "Raw cotton yarn prices, dye chemicals, and international freight rates fluctuate globally. Manufacturers specify 30-day quotation validity to protect against raw material price increases before purchase orders are signed.",
    },
    {
      q: "How does Fenalt structure apparel quotes for client brands in Bangladesh?",
      a: "Fenalt provides transparent, itemized FOB price quotations in Dhaka - breaking down fabric yields, CMT labor, trims, screen printing, and AQL 2.5 inspection milestones with no hidden surcharges.",
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
            What Should Be Included in an{" "}
            <span className="italic font-medium text-[#2D5016]">Apparel Manufacturing Quote?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to reviewing garment FOB quotes - auditing fabric yields, CMT labor, decoration surcharges, packaging, Incoterms, and payment milestones.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Commercial Transparency</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A professional apparel quote must be <strong className="font-medium">fully itemized down to fabric yield, CMT labor, and shipping terms</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Evaluating factory pricing requires looking beyond the bottom-line unit cost. A comprehensive manufacturer quote transparently itemizes primary fabric consumption, trims, decoration setups, cut-make-trim labor, export packaging, and Incoterms shipping conditions - empowering brand founders to make informed financial decisions.
          </p>
        </div>
      </section>

      {/* 6 Quote Components */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Quote Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Mandatory Components of a Manufacturing Quote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Cost Breakdown</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Anatomy of an Itemized FOB Garment Quote</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Cost Element</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Detailed Specification</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Typical Rate Benchmark</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">FOB Share %</th>
                </tr>
              </thead>
              <tbody>
                {quoteMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.lineItem}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.description}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.unitPricing}</td>
                    <td className="p-4 text-sm text-[#1A1A1A] border-t border-[#E5DDD3] align-top font-medium">{row.costShare}</td>
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
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Impacts Manufacturing Cost" },
              { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean in Clothing Manufacturing?" },
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Brand Produce?" },
              { href: "/learn/bill-of-materials-apparel", label: "How to Create an Apparel Bill of Materials (BOM)" },
              { href: "/apparel-production-management-services", label: "Fenalt Transparent Production Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Request a transparent manufacturing quote</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides itemized FOB price quotes for custom clothing production in Dhaka with zero hidden fees.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
