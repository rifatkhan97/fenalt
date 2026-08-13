import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "What Information Does a Clothing Manufacturer Need From a Brand?",
  description:
    "Before a clothing manufacturer can quote, sample, or produce your garments, they need specific information from you. This guide covers exactly what to prepare at each production stage.",
  alternates: { canonical: "https://fenalt.com/learn/what-a-clothing-manufacturer-needs-from-a-brand" },
  openGraph: {
    title: "What Information Does a Clothing Manufacturer Need From a Brand?",
    description: "Before a clothing manufacturer can quote, sample, or produce your garments, they need specific information from you. This guide covers exactly what to prepare at each production stage.",
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
    { item: "Garment type and silhouette description", detail: "Hoodie, t-shirt, sweatpant, denim jacket, etc. Include a sketch or reference image if available. The more specific you can be about construction features (raglan vs set-in sleeve, kangaroo pocket vs patch pockets) the more accurate the quote." },
    { item: "Target fabric", detail: "Composition (100% cotton, poly-cotton blend, French Terry, etc.) and target weight (GSM range if known). If you have a reference fabric or brand you want to match in hand-feel, mention it." },
    { item: "Approximate order quantity", detail: "Per style, and total. Even a rough range (e.g. '100–200 units per style, 3 styles') allows the manufacturer to assess MOQ fit and quote appropriately. Quantity significantly affects per-unit cost." },
    { item: "Target delivery date or season", detail: "Allows the manufacturer to assess timeline feasibility against their current production schedule and flag any constraints immediately — before you have committed to their services." },
    { item: "Destination country", detail: "Affects shipping terms, care label requirements (language, symbols), import compliance, and HS code classification. Mandatory for accurate freight cost estimation." },
    { item: "Special requirements", detail: "Any printing, embroidery, specialty washes, unique hardware, or packaging specifications should be mentioned at enquiry stage even if not fully specified yet — they affect both cost and manufacturing partner fit." },
  ];

  const forSampling = [
    { item: "Complete tech pack", detail: "Measurements by point of measure (POM), construction details, fabric specification, colourway references, BOM (bill of materials), print placement guides, and label specifications. The tech pack is the working contract between brand and manufacturer." },
    { item: "Pantone or lab-dip colour references", detail: "Not colour names alone — specific Pantone C or TCX codes, or physical reference swatches. Colour names like 'dark forest green' are not actionable. Manufacturers need a specific target to match dye lots against." },
    { item: "Fabric swatch or fabric reference", detail: "Physical swatch or specific mill/fabric reference where possible — especially for unusual materials, unusual GSM targets, or technical performance knits. Describing a fabric verbally rarely captures hand-feel accurately." },
    { item: "Size run to be sampled", detail: "Which sizes the initial sample should be made in. Typically a mid-size (M or L for mens/unisex, 10 or 12 for womens) for first-fit evaluation. Sampling every size in the first round is unnecessary and expensive." },
    { item: "Sampling notes and priorities", detail: "Specific areas of construction or fit to pay particular attention to in the first round. For example: 'the ribbing neckline must sit flat without rolling' or 'the side seam pocket opening must be at least 16cm for a hand to pass through comfortably.'" },
  ];

  const forProduction = [
    { item: "Signed-off golden / pre-production sample", detail: "The approved physical reference standard for bulk production. The factory retains this throughout the production run and inspectors compare bulk units against it at every stage." },
    { item: "Confirmed fabric and trim selections", detail: "Approved dye lots, confirmed zipper specifications (brand, size, colour), approved thread colours, and all trim specifications locked and documented in the final BOM." },
    { item: "Label and packaging artwork", detail: "Final print-ready artwork for all woven labels, care labels, hangtags, polybag printing, barcode stickers, and export carton markings. Incomplete label artwork is one of the most common causes of pre-shipment holds." },
    { item: "Final size breakdown", detail: "Units per size per colourway — the production manifest. This determines how fabric is allocated and how production batches are sequenced." },
    { item: "Destination warehouse address", detail: "For shipment planning, carton marking, and freight forwarder coordination. Required before shipping marks can be applied to export cartons." },
    { item: "Purchase order (PO)", detail: "A formal PO creates a binding production agreement and establishes commercial terms — quantity, unit price, total value, delivery terms (FOB/DDP), and payment schedule. Do not allow bulk cutting to start without a signed PO in place." },
  ];

  const faqs = [
    {
      q: "Can I get a quote without a tech pack?",
      a: "Yes — most manufacturers will provide a rough indicative quote based on garment type, fabric direction, and order quantity. However, an accurate quote with a reliable pricing commitment requires a complete tech pack. Significant discrepancies between indicative and final quotes are common without one — sometimes 20 to 40% variance in per-unit cost is found when a full spec is presented.",
    },
    {
      q: "What if I don't have a tech pack yet?",
      a: "Start by compiling what you do have — design sketches, reference garments, fabric preferences, and size requirements. Some manufacturers and production management partners (including Fenalt) offer tech pack development services to help brands create the necessary documentation from their design concepts. This adds time and cost upfront but prevents substantially larger costs from inaccurate sampling later.",
    },
    {
      q: "What is the most common thing brands forget to provide?",
      a: "Pantone or specific colour references. Brands frequently specify colour using names (e.g. 'sage green', 'off-white cream') which are highly subjective and not actionable for dye matching. Without a specific Pantone code or physical reference swatch, the manufacturer will make an interpretation that may or may not match your intent — and correcting colour post-dyeing at bulk scale is extremely expensive.",
    },
    {
      q: "Do I need to send physical samples or swatches to the manufacturer?",
      a: "Not always required, but highly recommended for fabric referencing. A physical swatch communicates hand-feel, drape, opacity, and texture in a way that written specifications cannot. For colour referencing, a physical Pantone fan deck swatch is the industry standard. For reference garments, sending an actual garment for the pattern maker to reference during development is common practice for first-time collaborations.",
    },
    {
      q: "Is a purchase order legally binding?",
      a: "A purchase order creates a binding commercial agreement when accepted by the manufacturer. It specifies quantity, price, delivery terms, and commercial conditions — and is the document against which payment and delivery disputes are resolved. Always use formal POs rather than verbal agreements or informal email confirmations for production orders. Include clear payment terms (typically a deposit on PO acceptance and balance before or on shipment).",
    },
    {
      q: "What should I provide if I want to reorder a previous production?",
      a: "For a reorder of a proven style, the essential documents are: the existing tech pack with confirmed measurements, the approved golden sample reference (or confirmation that the previous PP sample is still at the factory), the new size breakdown and quantity, any changes to fabric or trims (if any), and the updated purchase order. If no changes are being made to the product, the sample round may be reduced to a fit confirmation sample rather than a full re-sampling cycle.",
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
            The most common reason a production project stalls is not the manufacturer — it is the brand being unprepared. Here is exactly what you need to provide at each stage of the process.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Three stages */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-16">

          {/* For quoting */}
          <div>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#E5DDD3]">
              <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">Stage 1</span>
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A]">What You Need to Get a Quote</h2>
            </div>
            <p className="text-sm text-[#6B6560] leading-relaxed mb-6">
              A manufacturer can provide an indicative price range from basic project information. The more detail you provide, the more accurate the quote.
            </p>
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
            <p className="text-sm text-[#6B6560] leading-relaxed mb-6">
              Sampling requires precise technical documentation. Incomplete sampling briefs are the primary cause of inaccurate first samples.
            </p>
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
            <p className="text-sm text-[#6B6560] leading-relaxed mb-6">
              Before a single bolt of bulk fabric is cut, every element below must be approved, confirmed, and in the manufacturer&apos;s hands.
            </p>
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

          {/* Startup focus */}
          <div className="p-8 bg-[#1A1A1A] text-[#FAF9F6] border border-[#2A2A2A]">
            <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider mb-4">Startup Focus</span>
            <h2 className="font-display text-2xl lg:text-3xl font-light mb-4">What Startups Specifically Need to Prepare</h2>
            <p className="text-sm text-[#E5DDD3] leading-relaxed mb-6">
              New brands often assume manufacturers expect complete industrial fluency. In reality, reliable partners understand that early-stage startups have knowledge gaps. However, to work together effectively, startups must provide three non-negotiables:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">1. Realistic Expectations</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">Understanding realistic lead times (typically 12–20 weeks from sampling to delivery for a first collection) and accepting standard fabric minimums.</p>
              </div>
              <div className="p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">2. Single Point of Contact</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">Designating one decision-maker for approvals to prevent conflicting feedback during sampling and production. Multiple stakeholders with differing opinions are a common cause of delays.</p>
              </div>
              <div className="p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">3. Defined Budget Range</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">Sharing your target cost per unit (FOB or landed) so the factory can recommend viable fabrics and construction methods within budget — rather than speccing a product that does not fit your economics.</p>
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
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
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
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What to Include in a Tech Pack" },
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for Their First Production Run" },
              { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Take?" },
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample?" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Ready to submit your project?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s intake form walks you through exactly what we need — making the first step as clear as possible.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
