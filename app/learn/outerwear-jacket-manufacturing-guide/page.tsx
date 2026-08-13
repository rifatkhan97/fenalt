import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Outerwear & Jacket Manufacturing Guide for Fashion Brands",
  description:
    "Explore outerwear jacket production — waterproof DWR coatings, hot-air seam-taping technology, down/synthetic insulation, baffle construction, and heavy YKK hardware assembly.",
  alternates: {
    canonical: "https://fenalt.com/learn/outerwear-jacket-manufacturing-guide",
  },
  openGraph: {
    title: "Outerwear & Jacket Manufacturing Guide for Fashion Brands",
    description:
      "Explore outerwear jacket production — waterproof DWR coatings, hot-air seam-taping technology, down/synthetic insulation, baffle construction, and heavy YKK hardware assembly.",
    url: "https://fenalt.com/learn/outerwear-jacket-manufacturing-guide",
  },
};

export default function OuterwearJacketManufacturingGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Outerwear & Jacket Manufacturing Guide for Fashion Brands",
    description:
      "A technical manufacturing guide for windbreakers, puffer jackets, parkas, and technical outerwear.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/outerwear-jacket-manufacturing-guide",
    mainEntityOfPage: "https://fenalt.com/learn/outerwear-jacket-manufacturing-guide",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Outerwear Jacket Manufacturing", item: "https://fenalt.com/learn/outerwear-jacket-manufacturing-guide" },
    ],
  };

  const elements = [
    {
      title: "1. Technical Shell Fabrics & DWR Waterproof Membranes",
      desc: "Sourcing high-tenacity nylon ripstop, polyester taslan, or canvas treated with Durable Water Repellent (DWR) C0 coatings and laminated microporous polyurethane (PU) membranes (10,000mm+ waterproof rating).",
    },
    {
      title: "2. Hot-Air Seam-Taping Waterproofing Technology",
      desc: "Applying heat-sealed waterproof TPU seam tape over needle stitch holes on interior shell seams using hot-air sealing machines, preventing water leakage through needle perforations.",
    },
    {
      title: "3. Synthetic Insulation & Baffle Chamber Sewing",
      desc: "Filling quilted baffle chambers with 3M Thinsulate, PrimaLoft, or GRS-certified recycled synthetic down, calculating fill weight (grams) per chamber for balanced thermal warmth.",
    },
    {
      title: "4. Heavy-Duty Hardware & Weather-Proof Zippers",
      desc: "Installing heavy YKK metal or rubberized waterproof reverse-coil zippers (#5 or #8 size), internal storm flaps, chin guards, metal press studs, and elastic hem drawcord toggles.",
    },
    {
      title: "5. Internal Linings & Functional Pocketing",
      desc: "Constructing internal anti-static rPET taffeta linings, zippered internal security pockets, fleece-lined handwarmer pockets, and storm cuffs to trap body heat.",
    },
    {
      title: "6. Multi-Panel Assembly & Hydrostatic Pressure Testing",
      desc: "Assembling complex multi-panel outerwear cuts (often requiring 40+ individual pattern pieces) and testing completed garments under hydrostatic water head pressure equipment.",
    },
  ];

  const jacketMatrix = [
    {
      jacketStyle: "Technical Lightweight Windbreaker",
      shellFabric: "100% Nylon Ripstop + DWR",
      waterproofRating: "5,000mm – 10,000mm",
      insulation: "Unlined or Breathable Mesh",
      keyFeature: "Packable design, taped critical seams, elastic cuffs.",
    },
    {
      jacketStyle: "Streetwear Puffer Jacket",
      shellFabric: "High-Density Polyester Taffeta",
      waterproofRating: "5,000mm Water Resistant",
      insulation: "Recycled Synthetic Down (300g Fill)",
      keyFeature: "Horizontal baffle chambers, double-lined hood, heavy YKK #8 zipper.",
    },
    {
      jacketStyle: "Heavy Winter Alpine Parka",
      shellFabric: "3-Layer Nylon Canvas + PU Membrane",
      waterproofRating: "15,000mm – 20,000mm",
      insulation: "3M Thinsulate (400g Heavy Fill)",
      keyFeature: "Fully seam-sealed, fleece-lined pockets, storm flap closure.",
    },
  ];

  const faqs = [
    {
      q: "What is hydrostatic head rating in waterproof jacket manufacturing?",
      a: "Hydrostatic head rating (measured in millimetres) tests how much water pressure a fabric can withstand before leaking. A 5,000mm rating handles light rain; 10,000mm handles moderate rainfall; 20,000mm offers extreme heavy rain and alpine storm protection.",
    },
    {
      q: "Why does outerwear jacket manufacturing carry higher minimum order quantities?",
      a: "Outerwear jackets involve complex multi-component Bill of Materials (BOM) — including technical shell fabrics, linings, insulation, seam tape, storm flaps, and specialized waterproof zippers — requiring higher mill material minimums than simple t-shirts.",
    },
    {
      q: "What is the difference between fully seam-sealed and critically seam-sealed?",
      a: "Fully seam-sealed jackets apply waterproof heat-seal tape to 100% of all stitched seams. Critically seam-sealed jackets apply waterproof tape only to high-exposure seams (hood, shoulders, neck, armholes), lowering manufacturing costs while retaining splash protection.",
    },
    {
      q: "What insulation type is best for streetwear puffer jackets?",
      a: "Recycled synthetic down (100% rPET microfiber fill) is the industry standard for streetwear puffer jackets. It provides lightweight warmth, maintains loft when damp, is animal-cruelty-free, and lowers raw material costs compared to natural goose down.",
    },
    {
      q: "How do I prevent synthetic insulation from leaking out of puffer seams?",
      a: "Insulation leakage (down bleeding) is prevented by using high-density down-proof shell fabrics, calendared interior linings, and inserting non-woven fiber-proof interlining bags inside each quilted baffle chamber.",
    },
    {
      q: "How does Fenalt execute outerwear jacket manufacturing in Bangladesh?",
      a: "Fenalt's Dhaka team coordinates technical shell fabric sourcing, hot-air seam taping, quilted baffle filling, YKK zipper assembly, and hydrostatic pressure testing for international outerwear labels.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Streetwear &amp; Product Types</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Outerwear &amp; Jacket{" "}
            <span className="italic font-medium text-[#2D5016]">Manufacturing Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to manufacturing outerwear — waterproof DWR membranes, hot-air seam taping, synthetic down insulation, quilted baffles, and heavy YKK zippers.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Technical Assembly</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Outerwear manufacturing is the most complex discipline in apparel production — combining <strong className="font-medium">multi-panel technical shells, insulation, and waterproof seam sealing</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            From technical windbreakers and streetwear puffer jackets to heavy winter parkas, outerwear demands precise material coordination and specialized machinery. Selecting DWR-treated shell fabrics, applying hot-air waterproof seam tape over stitch lines, calculating baffle insulation fill weights, and assembling heavy-duty hardware ensure weather-proof performance.
          </p>
        </div>
      </section>

      {/* 6 Technical Elements */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Standards</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Elements of Technical Outerwear Manufacturing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {elements.map((e, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{e.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jacket Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Product Specifications</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Outerwear Technical Specification Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Jacket Style</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Shell Fabric</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Waterproof Rating</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Insulation Type</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Key Construction</th>
                </tr>
              </thead>
              <tbody>
                {jacketMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.jacketStyle}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.shellFabric}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.waterproofRating}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.insulation}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.keyFeature}</td>
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
              { href: "/learn/recycled-polyester-in-clothing-production", label: "Recycled Polyester in Clothing Production" },
              { href: "/learn/how-to-manufacture-hoodies", label: "How to Manufacture Custom Hoodies" },
              { href: "/learn/garment-trims-and-hardware-guide", label: "Garment Trims and Hardware Sourcing Guide" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/outerwear-jacket-manufacturing-services", label: "Fenalt Outerwear Manufacturing Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture technical outerwear</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt executes technical outerwear production in Dhaka — managing DWR shell sourcing, seam taping, baffle filling, and hydrostatic testing.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
