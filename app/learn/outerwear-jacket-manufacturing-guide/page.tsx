import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Outerwear & Jacket Manufacturing Guide for Fashion Brands",
  description:
    "Explore outerwear jacket production — waterproof DWR coatings, seam-taping technology, down/synthetic insulation, and heavy YKK zipper assembly.",
  alternates: {
    canonical: "https://fenalt.com/learn/outerwear-jacket-manufacturing-guide",
  },
  openGraph: {
    title: "Outerwear & Jacket Manufacturing Guide for Fashion Brands",
    description:
      "Explore outerwear jacket production — waterproof DWR coatings, seam-taping technology, down/synthetic insulation, and heavy YKK zipper assembly.",
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
    { title: "1. Shell Fabric & DWR Waterproof Membranes", desc: "Selecting high-tenacity nylon/polyester shells treated with Durable Water Repellent (DWR) and breathable polyurethane (PU) laminated backings." },
    { title: "2. Hot-Air Seam-Taping Technology", desc: "Applying heat-sealed waterproof seam tape over needle stitch lines to prevent rain penetration through needle holes." },
    { title: "3. Synthetic Insulation & Baffle Chamber Sewing", desc: "Filling quilted baffle chambers with 3M Thinsulate or recycled synthetic down for maximum thermal loft." },
    { title: "4. Heavy-Duty Hardware & Weather-Proof Zippers", desc: "Installing heavy YKK metal or rubberized waterproof reverse-coil zippers, storm flaps, and elastic cord adjusters." },
  ];

  const faqs = [
    {
      q: "What is hydrostatic head rating in waterproof jackets?",
      a: "Hydrostatic head (measured in mm) tests waterproof resistance. A 10,000mm rating resists heavy rain and pressure; 20,000mm rating offers extreme alpine weather protection.",
    },
    {
      q: "Why does jacket manufacturing carry higher minimum order quantities?",
      a: "Outerwear involves multiple specialized components (shells, linings, insulation, seam tape, specialized zippers), requiring higher mill material minimums.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Apparel Categories</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Outerwear &amp; Jacket Manufacturing:{" "}
            <span className="italic font-medium text-[#2D5016]">Brand Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Outerwear is the highest retail-ticket category in fashion. Master technical shell fabrics, thermal insulation, and waterproof seam sealing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Weatherproof Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Jacket production combines <strong className="font-medium">DWR nylon shells, heat-sealed seam tape, synthetic thermal insulation, and heavy YKK zippers</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Elements */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Construction Elements</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of Outerwear Manufacturing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {elements.map((el, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{el.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{el.desc}</p>
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
              { href: "/outerwear-manufacturing-bangladesh", label: "Fenalt Outerwear Manufacturing Bangladesh" },
              { href: "/learn/recycled-polyester-in-clothing-production", label: "Recycled Shell Fabrics Guide" },
              { href: "/operations", label: "Fenalt Factory Technical Operations" },
              { href: "/intake", label: "Submit Outerwear Project" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Manufacture custom jackets &amp; coats</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manufactures windbreakers, puffer jackets, parkas, and technical outerwear with heat-sealed seam taping in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
