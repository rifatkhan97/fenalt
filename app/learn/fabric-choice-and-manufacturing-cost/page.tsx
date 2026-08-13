import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "How Fabric Choice Affects Apparel Manufacturing Cost",
  description:
    "Analyze how fabric composition, GSM weight, mill MOQs, yield consumption, marker efficiency, and custom dyeing choices impact total garment FOB pricing.",
  alternates: {
    canonical: "https://fenalt.com/learn/fabric-choice-and-manufacturing-cost",
  },
  openGraph: {
    title: "How Fabric Choice Affects Apparel Manufacturing Cost",
    description:
      "Analyze how fabric composition, GSM weight, mill MOQs, yield consumption, marker efficiency, and custom dyeing choices impact total garment FOB pricing.",
    url: "https://fenalt.com/learn/fabric-choice-and-manufacturing-cost",
  },
};

export default function FabricChoiceAndManufacturingCostPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Fabric Choice Affects Apparel Manufacturing Cost",
    description:
      "A financial and technical breakdown of fabric costs in clothing manufacturing, yield consumption math, and raw material pricing drivers.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/fabric-choice-and-manufacturing-cost",
    mainEntityOfPage: "https://fenalt.com/learn/fabric-choice-and-manufacturing-cost",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Fabric Choice and Cost", item: "https://fenalt.com/learn/fabric-choice-and-manufacturing-cost" },
    ],
  };

  const drivers = [
    {
      title: "1. Raw Fiber & Yarn Grade (Carded vs Combed vs Organic)",
      desc: "Raw fiber selection sets the baseline material price. Carded cotton yarn is the cheapest; 100% combed ring-spun cotton carries a 10% to 15% premium; certified organic cotton or specialized technical synthetic yarns add 20% to 35% higher yarn cost.",
    },
    {
      title: "2. Fabric Weight & Consumption Yield Math (GSM)",
      desc: "Raw knit fabric is sold by weight (kg). A 450 GSM luxury hoodie consumes nearly 2.5 times more raw cotton yarn by weight than a 180 GSM t-shirt, directly multiplying per-unit fabric cost.",
    },
    {
      title: "3. CAD Marker Efficiency & Cutting Wastage Percentage",
      desc: "Garment patterns with oversized panels or complex raglan cuts consume more fabric width, lowering marker efficiency. Optimizing CAD marker layouts from 80% to 88% yield reduces fabric waste and unit cost.",
    },
    {
      title: "4. Custom Dyeing Surcharges & Mill Dye Lot MOQs",
      desc: "Custom Pantone color dyeing requires filling full industrial dye vats (typically 300kg per colorway). Dyeing below mill minimums incurs small-batch surcharges that increase per-unit fabric costs.",
    },
    {
      title: "5. Textile Finishes & Garment Washing Treatments",
      desc: "Enzyme washing, carbon-brushing, silicone softeners, water-repellent (DWR) coatings, or vintage pigment garment washing add $0.40 to $1.50+ per unit in chemical and labor processing.",
    },
    {
      title: "6. International Freight & Import Tariff Structure",
      desc: "Raw fabric weight directly impacts international shipping costs. Sourcing fabric locally within major apparel manufacturing hubs (such as Bangladesh) eliminates fabric import tariffs and reduces freight overhead.",
    },
  ];

  const costBreakdownMatrix = [
    {
      garmentType: "Standard T-Shirt (180 GSM)",
      avgFabricConsumption: "0.22 kg / unit",
      fabricCostShare: "50% – 55% of FOB",
      keyCostDriver: "Yarn fineness (30s combed) & screen printing.",
    },
    {
      garmentType: "Heavy Streetwear Tee (280 GSM)",
      avgFabricConsumption: "0.34 kg / unit",
      fabricCostShare: "60% – 65% of FOB",
      keyCostDriver: "Raw cotton yarn weight & heavy ribbing.",
    },
    {
      garmentType: "Heavy Luxury Hoodie (450 GSM)",
      avgFabricConsumption: "0.85 kg / unit",
      fabricCostShare: "65% – 70% of FOB",
      keyCostDriver: "Heavy French Terry yarn weight & 400 GSM 2x2 rib trim.",
    },
    {
      garmentType: "Technical Activewear Leggings",
      avgFabricConsumption: "0.28 kg / unit",
      fabricCostShare: "55% – 60% of FOB",
      keyCostDriver: "High elastane/spandex percentage & moisture-wicking finishes.",
    },
  ];

  const faqs = [
    {
      q: "What percentage of a garment's total FOB manufacturing cost comes from fabric?",
      a: "Fabric typically represents 50% to 70% of the total FOB (Free on Board) unit cost for basic and heavyweight knit apparel — making raw material choice the single largest factor in your manufacturing budget.",
    },
    {
      q: "How can brands lower fabric costs without sacrificing retail quality?",
      a: "Brands can optimize CAD pattern marker placement to improve fabric yield, use mill stock colors for initial drops to avoid custom dye lot surcharges, and order standard fabric roll widths compatible with their pattern pieces.",
    },
    {
      q: "How does fabric weight (GSM) calculate into garment unit price?",
      a: "Mills price raw knit fabric per kilogram. Unit fabric cost = (Garment Pattern Area in m² × Fabric GSM in kg/m²) × Mill Price per kg. A heavier GSM directly increases the weight of fabric purchased per garment.",
    },
    {
      q: "Why are custom-dyed fabrics more expensive for small orders?",
      a: "Industrial textile dye vats hold 300kg to 500kg of fabric. When a brand orders a custom color below the vat capacity, the mill must charge a small-batch dye surcharge to cover fixed water, steam, and chemical costs.",
    },
    {
      q: "Does fabric roll width affect manufacturing cost?",
      a: "Yes. Pattern markers are laid out across the usable width of a fabric roll (e.g. 185cm open width). If pattern pieces do not fit neatly across the roll width, unusable edge gaps are created, increasing fabric waste.",
    },
    {
      q: "How does Fenalt help brands optimize fabric costs in Bangladesh?",
      a: "Fenalt's Dhaka team calculates exact marker yield consumption, negotiates mill-direct fabric pricing, and recommends stock or custom dye lot options to optimize unit economics for your production run.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Fabrics &amp; Materials</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Fabric Choice &amp;{" "}
            <span className="italic font-medium text-[#2D5016]">Apparel Manufacturing Cost.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A financial and technical breakdown of fabric cost drivers — evaluating fiber selection, GSM yield math, marker efficiency, dye lot minimums, and unit FOB economics.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Financial Economics</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Fabric represents <strong className="font-medium">50% to 70% of total garment FOB costs</strong>. Small changes in fabric selection dramatically impact unit economics.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            When budgeting apparel production, raw material selection is the single largest cost variable. Understanding how raw yarn selection, GSM weight calculations, CAD marker nesting efficiency, and mill dye lot minimums impact per-unit costs enables fashion founders to balance high-end retail quality with healthy gross profit margins.
          </p>
        </div>
      </section>

      {/* 6 Cost Drivers */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Cost Drivers</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Financial Drivers of Fabric Cost</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drivers.map((d, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{d.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garment Cost Breakdown Matrix */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Unit Economics</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Fabric Cost Share by Garment Category</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Garment Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Avg Consumption</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Fabric % of FOB</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-4/12">Primary Cost Driver</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdownMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.garmentType}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.avgFabricConsumption}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.fabricCostShare}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.keyCostDriver}</td>
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
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/fabric-sourcing-guide-for-fashion-brands", label: "Fabric Sourcing Guide for Fashion Brands" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/learn/clothing-manufacturing-cost-breakdown", label: "Clothing Manufacturing Cost Breakdown" },
              { href: "/apparel-production-management", label: "Fenalt Production Pricing & Sourcing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Optimize your garment production cost</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt calculates exact fabric consumption, negotiates mill-direct pricing, and provides transparent FOB costing in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
