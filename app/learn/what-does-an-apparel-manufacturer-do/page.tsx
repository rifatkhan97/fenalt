import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "What Does an Apparel Manufacturer Actually Do?",
  description:
    "Discover the exact responsibilities of a garment manufacturer — from material sourcing and pattern development to sewing, quality control, and export packing.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-does-an-apparel-manufacturer-do",
  },
  openGraph: {
    title: "What Does an Apparel Manufacturer Actually Do?",
    description:
      "Discover the exact responsibilities of a garment manufacturer — from material sourcing and pattern development to sewing, quality control, and export packing.",
    url: "https://fenalt.com/learn/what-does-an-apparel-manufacturer-do",
  },
};

export default function WhatDoesAnApparelManufacturerDoPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Does an Apparel Manufacturer Actually Do?",
    description:
      "A breakdown of the core services, technical operations, and responsibilities provided by clothing manufacturers.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-does-an-apparel-manufacturer-do",
    mainEntityOfPage: "https://fenalt.com/learn/what-does-an-apparel-manufacturer-do",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Does a Manufacturer Do", item: "https://fenalt.com/learn/what-does-an-apparel-manufacturer-do" },
    ],
  };

  const responsibilities = [
    { title: "Raw Material Sourcing", desc: "Procuring yarn, knitted or woven fabrics, dyeing services, zippers, buttons, threads, and custom trims based on tech pack specifications." },
    { title: "Pattern Making & Grading", desc: "Converting 2D designer sketches or measurement tables into industrial production patterns and size ratio grading." },
    { title: "Sampling & Prototype Building", desc: "Sewing initial prototypes and pre-production samples for brand fit, construction, and aesthetic sign-off." },
    { title: "Bulk Cutting & Sewing", desc: "Executing high-volume precision fabric cutting and managing assembly-line sewing operations." },
    { title: "Quality Assurance & Finishing", desc: "Performing in-line inspection, garment washing, thread trimming, steam pressing, and metal detection." },
    { title: "Packaging & Export Logistics", desc: "Folding, polybagging, carton packing with barcode labeling, and preparing shipping documentation for customs clearance." },
  ];

  const faqs = [
    {
      q: "Does an apparel manufacturer design clothes for my brand?",
      a: "Generally no. Traditional manufacturers execute your design specifications (tech pack). However, full-service partners (CMT/FOB suppliers like Fenalt) assist with technical pattern development based on your creative concepts.",
    },
    {
      q: "What is the difference between CMT and FOB manufacturing?",
      a: "CMT (Cut, Make, Trim) means the brand supplies the fabric and trims; the factory only sews. FOB (Free on Board) means the manufacturer procures all fabrics and trims, manages production, and delivers packaged goods to the port.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Manufacturing Fundamentals</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Does an Apparel Manufacturer{" "}
            <span className="italic font-medium text-[#2D5016]">Actually Do?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A garment manufacturer is far more than a sewing workshop. They manage a complex industrial supply chain to convert design documentation into retail-ready apparel.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Factory size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Core Operational Scope</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              An apparel manufacturer handles <strong className="font-medium">material procurement, technical engineering, production management, and quality control</strong> — acting as the physical engine of your fashion brand.
            </p>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Factory Services</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Primary Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((r, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{r.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{r.desc}</p>
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
              { href: "/learn/clothing-manufacturer-vs-sourcing-agent", label: "Clothing Manufacturer vs Garment Sourcing Agent" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/capabilities", label: "Fenalt Full-Package Manufacturing Capabilities" },
              { href: "/operations", label: "Our On-the-Ground Factory Network in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Partner with a dedicated manufacturer</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt handles complete FOB garment manufacturing — managing fabric sourcing, technical development, quality control, and global shipping.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
