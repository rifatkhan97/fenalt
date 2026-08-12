import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "How Fabric Choice Affects Apparel Manufacturing Cost",
  description:
    "Analyze how fabric composition, GSM weight, mill MOQs, yield consumption, and custom dyeing choices impact total garment FOB pricing.",
  alternates: {
    canonical: "https://fenalt.com/learn/fabric-choice-and-manufacturing-cost",
  },
  openGraph: {
    title: "How Fabric Choice Affects Apparel Manufacturing Cost",
    description:
      "Analyze how fabric composition, GSM weight, mill MOQs, yield consumption, and custom dyeing choices impact total garment FOB pricing.",
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
      { "@type": "ListItem", position: 3, name: "Fabric Choice and Manufacturing Cost", item: "https://fenalt.com/learn/fabric-choice-and-manufacturing-cost" },
    ],
  };

  const drivers = [
    { title: "1. Raw Fiber & Yarn Cost (Cotton vs Organic vs Synthetic)", desc: "Combed organic cotton carries a 20%+ premium over standard carded cotton yarn; technical elastane or recycled polyester yarns add specialized milling costs." },
    { title: "2. Fabric Weight (GSM Yield Math)", desc: "Fabric is bought by weight (kg). A 500 GSM hoodie consumes 2.5x more cotton per garment by weight than a 180 GSM t-shirt, directly increasing unit material cost." },
    { title: "3. Marker Consumption & Cutting Yield Efficiency", desc: "Complex oversized pattern pieces require wider fabric widths; inefficient marker arrangements increase wasted fabric offcuts." },
    { title: "4. Custom Dyeing Surcharges & Mill MOQs", desc: "Dyeing below mill minimums (e.g. under 300kg per color) incurs small-batch mill surcharges, raising per-unit fabric cost." },
  ];

  const faqs = [
    {
      q: "What percentage of a garment's total FOB cost comes from fabric?",
      a: "Fabric typically represents 50% to 70% of the total FOB unit cost for basic and heavyweight apparel.",
    },
    {
      q: "How can I lower fabric costs without sacrificing quality?",
      a: "Optimize marker layout efficiency to increase fabric yield, use stock mill colors to avoid dyeing surcharges, and order standard roll widths compatible with your pattern markers.",
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
            How Fabric Choice Affects{" "}
            <span className="italic font-medium text-[#2D5016]">Manufacturing Cost.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Fabric is the single largest line item in garment manufacturing. Understand how fiber selection, GSM weight, and marker consumption drive your unit FOB price.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Financial Breakdown</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Fabric comprises <strong className="font-medium">50% to 70% of total garment production cost</strong>. Small changes in fabric weight (GSM) or cutting yield dramatically affect profit margins.
            </p>
          </div>
        </div>
      </section>

      {/* Drivers */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Cost Drivers</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">4 Fabric Cost Variables</h2>
          <div className="space-y-6">
            {drivers.map((d, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{d.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{d.desc}</p>
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
              { href: "/apparel-manufacturing-cost-considerations", label: "Apparel Manufacturing Cost Considerations Guide" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/fabric-sourcing-guide-for-fashion-brands", label: "Fabric Sourcing Guide for Fashion Brands" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Fabric Sourcing Bangladesh" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Itemized fabric costing &amp; optimization</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides transparent itemized fabric quotes and CAD marker optimization to maximize your production margins.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
