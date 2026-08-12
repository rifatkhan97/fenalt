import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Recycled Polyester in Clothing Production: Brand Guide",
  description:
    "Learn how recycled polyester (rPET) is produced, GRS certification requirements, fabric performance in activewear, and environmental considerations.",
  alternates: {
    canonical: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
  },
  openGraph: {
    title: "Recycled Polyester in Clothing Production: Brand Guide",
    description:
      "Learn how recycled polyester (rPET) is produced, GRS certification requirements, fabric performance in activewear, and environmental considerations.",
    url: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
  },
};

export default function RecycledPolyesterInClothingProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Recycled Polyester in Clothing Production: Brand Guide",
    description:
      "A technical guide to recycled polyester (rPET) fiber sourcing, Global Recycled Standard (GRS) compliance, and synthetic fabric performance.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
    mainEntityOfPage: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Recycled Polyester in Production", item: "https://fenalt.com/learn/recycled-polyester-in-clothing-production" },
    ],
  };

  const facts = [
    { title: "1. Post-Consumer PET Bottle Upcycling", desc: "Recycled polyester (rPET) is produced by melting post-consumer plastic bottles into polymer chips and re-spinning them into synthetic yarn." },
    { title: "2. Identical Tensile & Moisture Wicking", desc: "rPET delivers identical durability, moisture-wicking performance, and colorfastness as virgin petroleum polyester." },
    { title: "3. Global Recycled Standard (GRS) Compliance", desc: "GRS certification tracks recycled content percentages and enforces chemical management and social labor criteria across mills." },
    { title: "4. Carbon Footprint Reduction", desc: "Producing rPET consumes up to 50% less energy and generates lower carbon emissions compared to virgin polyester synthesis." },
  ];

  const faqs = [
    {
      q: "Can rPET be blended with cotton for streetwear fleece?",
      a: "Yes. Poly-cotton fleece blends (e.g. 60% combed cotton / 40% rPET) combine natural cotton handfeel on the outer face with synthetic warmth and shape retention.",
    },
    {
      q: "Does rPET require special sewing techniques?",
      a: "No. Sewing machine settings, thread tension, and needle ballpoints for rPET are identical to standard virgin polyester knits and wovens.",
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
            Recycled Polyester in Clothing:{" "}
            <span className="italic font-medium text-[#2D5016]">Brand Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Recycled polyester (rPET) diverts plastic waste from landfills while providing high-performance moisture management for activewear and outerwear.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Synthetic Circularity</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">rPET fabric</strong> delivers virgin polyester performance with a significantly lower carbon and energy footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Material Fundamentals</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">4 Pillars of Recycled Polyester</h2>
          <div className="space-y-6">
            {facts.map((f, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{f.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{f.desc}</p>
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
              { href: "/recycled-polyester-garment-sourcing", label: "Fenalt Recycled Polyester Sourcing Services" },
              { href: "/circular-fashion-manufacturing", label: "Circular Fashion Manufacturing Solutions" },
              { href: "/activewear-manufacturing-bangladesh", label: "Activewear Manufacturing in Bangladesh" },
              { href: "/sustainable-textile-sourcing", label: "Sustainable Textile Sourcing Guide" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Source GRS-certified rPET fabrics</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt procures GRS-certified recycled polyester knits and wovens for activewear, linings, and shell jackets.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
