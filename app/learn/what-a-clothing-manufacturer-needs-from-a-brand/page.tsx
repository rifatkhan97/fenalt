import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "What Information Does a Clothing Manufacturer Need From a Brand?",
  description:
    "Before a clothing manufacturer can quote, sample, or produce your garments, they need specific information from you. This guide covers exactly what to prepare.",
  alternates: { canonical: "https://fenalt.com/learn/what-a-clothing-manufacturer-needs-from-a-brand" },
  openGraph: {
    title: "What Information Does a Clothing Manufacturer Need From a Brand?",
    description: "Before a clothing manufacturer can quote, sample, or produce your garments, they need specific information from you. This guide covers exactly what to prepare.",
    url: "https://fenalt.com/learn/what-a-clothing-manufacturer-needs-from-a-brand",
  },
};

export default function WhatManufacturerNeedsFromBrandPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Information Does a Clothing Manufacturer Need From a Brand?",
    description: "A guide to what information brands must provide to clothing manufacturers before production can begin.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-a-clothing-manufacturer-needs-from-a-brand",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What a Manufacturer Needs From a Brand", item: "https://fenalt.com/learn/what-a-clothing-manufacturer-needs-from-a-brand" },
    ],
  };

  const forQuoting = [
    { item: "Garment type and silhouette description", detail: "Hoodie, t-shirt, sweatpant, denim jacket, etc. Include a sketch or reference image if available." },
    { item: "Target fabric", detail: "Composition (cotton, poly-cotton, French Terry, etc.) and target weight (GSM range if known)." },
    { item: "Approximate order quantity", detail: "Per style, and total. Even a rough range allows the manufacturer to assess MOQ fit and quote appropriately." },
    { item: "Target delivery date or season", detail: "Allows the manufacturer to assess timeline feasibility from their current production schedule." },
    { item: "Destination country", detail: "Affects shipping terms, labelling requirements, and import compliance." },
    { item: "Special requirements", detail: "Any printing, embroidery, washes, special hardware, or packaging specifications at enquiry stage." },
  ];

  const forSampling = [
    { item: "Complete tech pack", detail: "Measurements, construction details, fabric spec, colourway, BOM, print placement, and label specifications." },
    { item: "Pantone or lab-dip colour references", detail: "Not colour names alone — specific Pantone codes or reference swatches for accurate colour matching." },
    { item: "Fabric swatch or fabric reference", detail: "Physical swatch or specific mill/fabric reference where possible, especially for unusual materials." },
    { item: "Size run to be sampled", detail: "Which sizes the initial sample should be made in — typically a mid-size (M or L) for first-fit evaluation." },
    { item: "Sampling notes or priorities", detail: "Any specific areas of construction or fit to pay particular attention to in the first round." },
  ];

  const forProduction = [
    { item: "Signed-off golden/pre-production sample", detail: "The approved reference standard for bulk production." },
    { item: "Confirmed fabric and trim selections", detail: "Approved dye lots, confirmed trim specifications, and label copy." },
    { item: "Label and packaging artwork", detail: "Final print-ready artwork for all labels, hangtags, polybag printing, and carton markings." },
    { item: "Final size breakdown", detail: "Units per size per colourway — the production manifest." },
    { item: "Destination warehouse and address", detail: "For shipment planning and carton marking." },
    { item: "Purchase order", detail: "A formal PO creates a binding production agreement and establishes commercial terms." },
  ];

  const faqs = [
    {
      q: "Can I get a quote without a tech pack?",
      a: "Yes — most manufacturers will provide a rough indicative quote based on garment type, fabric direction, and order quantity. However, an accurate quote with a reliable pricing commitment requires a complete tech pack. Significant discrepancies between indicative and final quotes are common without one.",
    },
    {
      q: "What if I don't have a tech pack yet?",
      a: "Start by compiling what you do have — design sketches, reference garments, fabric preferences, and size requirements. Some manufacturers and production management partners (including Fenalt) offer tech pack development services to help brands create the necessary documentation.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Manufacturing Fundamentals</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Information Does a Clothing Manufacturer{" "}
            <span className="italic font-medium text-[#2D5016]">Need From a Brand?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            The most common reason a production project stalls is not the manufacturer — it is the brand being unprepared. Here is exactly what you need to provide at each stage.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Three stages */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">

          {/* For quoting */}
          <div>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#E5DDD3]">
              <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">Stage 1</span>
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A]">What You Need to Get a Quote</h2>
            </div>
            <div className="space-y-4">
              {forQuoting.map((item, i) => (
                <div key={i} className="p-5 bg-[#F2EFE9] border border-[#E5DDD3]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.item}</p>
                      <p className="text-xs text-[#6B6560] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For sampling */}
          <div>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#E5DDD3]">
              <span className="inline-block px-3 py-1 bg-[#2D5016] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">Stage 2</span>
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A]">What You Need to Start Sampling</h2>
            </div>
            <div className="space-y-4">
              {forSampling.map((item, i) => (
                <div key={i} className="p-5 bg-[#F2EFE9] border border-[#E5DDD3]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.item}</p>
                      <p className="text-xs text-[#6B6560] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For production */}
          <div>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#E5DDD3]">
              <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider">Stage 3</span>
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A]">What You Need to Start Bulk Production</h2>
            </div>
            <div className="space-y-4">
              {forProduction.map((item, i) => (
                <div key={i} className="p-5 bg-[#F2EFE9] border border-[#E5DDD3]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.item}</p>
                      <p className="text-xs text-[#6B6560] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For startups (Merged topic #69) */}
          <div className="p-8 bg-[#1A1A1A] text-[#FAF9F6] border border-[#2A2A2A]">
            <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider mb-4">Startup Focus</span>
            <h2 className="font-display text-2xl lg:text-3xl font-light mb-4">What Startups Specifically Need to Prepare</h2>
            <p className="text-sm text-[#E5DDD3] leading-relaxed mb-6">
              New brands often assume manufacturers expect complete industrial fluency. In reality, reliable partners understand that early-stage startups have knowledge gaps. However, to work together effectively, startups must provide three non-negotiables:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">1. Realistic Expectations</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">Understanding realistic lead times (typically 8–12 weeks from sampling to delivery) and accepting standard fabric minimums.</p>
              </div>
              <div className="p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">2. Single Point of Contact</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">Designating one decision-maker for approvals to prevent conflicting feedback during sampling and production.</p>
              </div>
              <div className="p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">3. Defined Budget Range</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">Sharing your target cost per unit (FOB or landed) so the factory can recommend viable fabrics and construction methods within budget.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
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
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack?" },
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works" },
              { href: "/intake", label: "Submit Your Project to Fenalt" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for Their First Production Run" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Ready to submit your project?</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s intake form walks you through exactly what we need — making the first step as clear as possible.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
