import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Clothing Sample and Why Is It Important?",
  description:
    "A clothing sample is a physical prototype garment made before bulk production. Learn what samples are, the different types, and why skipping them is one of the most costly mistakes a brand can make.",
  alternates: { canonical: "https://fenalt.com/learn/what-is-a-clothing-sample" },
  openGraph: {
    title: "What Is a Clothing Sample and Why Is It Important?",
    description: "A clothing sample is a physical prototype garment made before bulk production. Learn what samples are, the different types, and why skipping them is one of the most costly mistakes a brand can make.",
    url: "https://fenalt.com/learn/what-is-a-clothing-sample",
  },
};

export default function WhatIsAClothingSamplePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Clothing Sample and Why Is It Important?",
    description: "Clothing samples explained — types, purpose, and why they are essential before bulk production.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-is-a-clothing-sample",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is a Clothing Sample", item: "https://fenalt.com/learn/what-is-a-clothing-sample" },
    ],
  };

  const sampleTypes = [
    { name: "Proto Sample (Prototype)", purpose: "The first physical garment sewn from the pattern. Used to check overall silhouette, proportions, and construction concept.", material: "Often in substitute fabric — exact target fabric may not be sourced yet.", stage: "Very Early" },
    { name: "Fit Sample (First Fit)", purpose: "Sewn with closer-to-final fabric to assess how the garment fits on a body or dress form. Measurements are checked against the tech pack POM sheet.", material: "Target or similar fabric.", stage: "Development" },
    { name: "Pre-Production Sample (PP Sample)", purpose: "Made from the actual production fabric, by the actual production factory. This is the critical approval gate before bulk production begins.", material: "Exact production fabric, trims, and labels.", stage: "Pre-Production" },
    { name: "Golden Sample / SMS (Salesman&apos;s Sample)", purpose: "The final approved sample that serves as the binding quality standard for the bulk production run. QC inspectors check bulk production against this sample.", material: "Production-grade in all respects.", stage: "Production Reference" },
    { name: "Counter Sample", purpose: "A sample sent by the manufacturer to confirm they have understood revisions or new instructions. Brands review and approve before continuing.", material: "Varies by stage.", stage: "Revision Confirmation" },
  ];

  const faqs = [
    {
      q: "How many rounds of sampling should a brand expect?",
      a: "For a first-time production run with a new manufacturer, 2 to 4 sample rounds is common. Simple garments with clear tech packs can sometimes achieve approval in 1 to 2 rounds. Complex garments with multiple panels, special materials, or intricate construction can require more. Each revision round adds 1 to 3 weeks to the pre-production timeline.",
    },
    {
      q: "Do I need to pay for samples?",
      a: "Yes. Samples cost more per unit than bulk production because they are made individually and require pattern engineering, fabric sourcing, and skilled construction outside a normal production line. Sample costs vary widely by garment complexity. Some manufacturers deduct sampling fees from bulk orders once placed.",
    },
    {
      q: "Does Fenalt create physical samples?",
      a: "Yes. Fenalt's Dhaka sample room builds physical prototype fit samples with an estimated turnaround of 10 to 14 days following tech pack and pattern approval. This covers first-fit prototypes, revision rounds, and pre-production sample sign-off.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling & Product Development</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Is a Clothing Sample{" "}
            <span className="italic font-medium text-[#2D5016]">and Why Is It Important?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A clothing sample is a physical garment made before bulk production — the step that determines whether your design translates correctly from a technical document into a real, wearable garment.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1A1A1A] text-[#FAF9F6] p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Core Principle</p>
            <p className="font-display text-2xl lg:text-3xl font-light leading-relaxed">
              No digital render or 3D visualisation can fully replicate how a real fabric drapes, how a seam behaves under tension, or how a collar sits on a real body. Sampling bridges the gap between design intent and production reality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Sample Types</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">The 5 Main Types of Clothing Samples</h2>
          <div className="space-y-5">
            {sampleTypes.map((s, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <h3 className="font-display text-xl font-medium text-[#1A1A1A]">{s.name}</h3>
                  <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider">{s.stage}</span>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-2">{s.purpose}</p>
                <p className="text-xs text-[#9B948E]"><strong>Fabric:</strong> {s.material}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Why It Matters</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">The Cost of Skipping Sampling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Bulk production defects discovered post-shipment are extremely expensive to remediate or rework",
              "Sizing errors discovered in 500 garments may require full re-cuts or write-offs",
              "Wrong fabric weight or composition may only be apparent in a physical garment under wear conditions",
              "Customer returns and brand reputation damage from poor fit or quality cannot be reversed",
              "Manufacturers without a signed-off golden sample have no binding quality reference",
              "Construction errors replicated across 1,000 units multiply into significant cost",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#F2EFE9] border border-[#E5DDD3]">
                <span className="text-[#C8A882] mt-0.5 shrink-0">—</span>
                <p className="text-sm text-[#6B6560] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/types-of-apparel-samples", label: "The Different Types of Apparel Samples Explained" },
              { href: "/learn/how-to-prepare-for-first-clothing-sample", label: "How to Prepare for Your First Clothing Sample" },
              { href: "/apparel-sampling-services", label: "Fenalt: Professional Apparel Sampling Services" },
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack?" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Start with a physical prototype sample</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt builds first-fit prototype samples in Dhaka in an estimated 10 to 14 days following pattern approval.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
