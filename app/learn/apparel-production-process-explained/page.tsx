import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "The Apparel Production Process Explained Step by Step",
  description:
    "A complete end-to-end breakdown of the apparel production workflow — from design concept through tech pack, sampling, fabric sourcing, bulk cutting, sewing, quality control, and export.",
  alternates: {
    canonical: "https://fenalt.com/learn/apparel-production-process-explained",
  },
  openGraph: {
    title: "The Apparel Production Process Explained Step by Step",
    description:
      "A complete end-to-end breakdown of the apparel production workflow — from design concept through tech pack, sampling, fabric sourcing, bulk cutting, sewing, quality control, and export.",
    url: "https://fenalt.com/learn/apparel-production-process-explained",
  },
};

export default function ApparelProductionProcessExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Apparel Production Process Explained Step by Step",
    description:
      "A step-by-step master guide covering every phase of garment manufacturing and product development for fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/apparel-production-process-explained",
    mainEntityOfPage: "https://fenalt.com/learn/apparel-production-process-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Apparel Production Process Explained", item: "https://fenalt.com/learn/apparel-production-process-explained" },
    ],
  };

  const phases = [
    {
      num: "01",
      title: "Design Concept & Tech Pack Creation",
      body: "The process begins with a design concept — a sketch, mood board, or reference garment that establishes the silhouette, fabric direction, colourway, and construction intent. This creative direction must be translated into a precise technical document called a tech pack, which specifies every measurement, fabric specification, trim detail, seam type, print placement, and packaging instruction. Without a complete tech pack, manufacturers cannot produce consistent garments or accurate quotes. Vague briefs are the single most common cause of costly sampling delays.",
      brandRole: "Brand creates or commissions tech pack; reviews and approves before submission.",
      riskIfSkipped: "Inaccurate samples, multiple unnecessary revision rounds, higher costs.",
    },
    {
      num: "02",
      title: "Pattern Making & Size Grading",
      body: "A pattern maker converts the tech pack measurements and construction instructions into physical or digital 2D pattern pieces — the precise templates from which fabric will be cut. The master pattern (usually in the base sample size) is then graded into the full size run, ensuring each size scales correctly from the original. CAD pattern software is now standard at most professional facilities, offering greater precision and the ability to digitally store and retrieve patterns between seasons.",
      brandRole: "Brand reviews pattern and confirms sample size for first prototype.",
      riskIfSkipped: "Cannot progress to sampling without approved patterns.",
    },
    {
      num: "03",
      title: "Material Sourcing & Lab Dip Approval",
      body: "Fabric is sourced from mills based on the tech pack specification — fibre composition, weight in GSM, knit or weave structure, and finish. For coloured fabrics, dyeing labs produce small test swatches (lab dips) matched to the brand's Pantone references. Brands must review and approve lab dips before bulk fabric is dyed or processed. This stage also covers sourcing all trims — zippers, buttons, snaps, drawcords, labels, and threads. Fabric lead times are frequently underestimated; this stage often determines the overall production timeline.",
      brandRole: "Brand approves lab dips and trim samples; may supply preferred Pantone references.",
      riskIfSkipped: "Wrong fabric weight, colour, or composition delivered in bulk — very costly to correct.",
    },
    {
      num: "04",
      title: "Prototype / First Fit Sampling",
      body: "The first physical garment — called a proto sample or first fit sample — is sewn to test how the pattern translates into a real garment. It checks overall silhouette, panel proportions, seam construction, and fit on a body or dress form. The brand evaluates the sample against the tech pack POM (points of measure) sheet, provides written fit notes, and requests specific adjustments. Multiple sample rounds may follow until the design is correct. Sampling is the most important quality gate in the entire process.",
      brandRole: "Brand evaluates sample on fit model or dress form; provides written revision feedback.",
      riskIfSkipped: "Bulk production proceeds with uncorrected fit or construction errors — resulting in wearable defects across the entire order.",
    },
    {
      num: "05",
      title: "Pre-Production (PP) Sample Sign-Off",
      body: "Once the design is approved in sampling, a pre-production sample is made using the exact bulk production fabric, by the exact factory that will produce the bulk order, with all production trims and labels in place. This PP sample is the brand's final opportunity to approve the product before mass production begins. The signed-off PP sample becomes the Golden Sample — stored at the factory as the binding quality benchmark against which all bulk production units are compared.",
      brandRole: "Brand signs off PP sample physically or provides written approval. No bulk cutting before sign-off.",
      riskIfSkipped: "No binding quality standard exists for bulk production — QC inspectors have nothing to inspect against.",
    },
    {
      num: "06",
      title: "Bulk Fabric Spreading & Cutting",
      body: "With PP approval given, bulk fabric rolls are laid out in precise, even layers on industrial cutting tables. A computerised marker — an optimised layout of all pattern pieces — maximises fabric yield and minimises waste. Fabric layers are cut simultaneously using industrial straight-knife cutters or automated cutting systems. Grainline alignment during spreading is critical: distorted or off-grain fabric causes twisted seams that emerge after washing, even if garments look correct at the time of cutting.",
      brandRole: "No direct brand action required at this stage — managed by manufacturer with QC oversight.",
      riskIfSkipped: "N/A — cannot produce garments without cutting.",
    },
    {
      num: "07",
      title: "Assembly-Line Sewing",
      body: "Cut fabric panels are bundled by size and colour and routed through specialised sewing stations. Each station operates a specific stitch type — lockstitch for structural seams, overlock for raw edge finishing, flatlock or coverstitch for sportswear and hem construction. Hardware attachment (zippers, buttons, snaps), pocket construction, collar and cuff assembly, and label sewing are completed at designated stations in production sequence. In-line quality checks at regular intervals catch stitch failures or measurement deviations before they compound across the production run.",
      brandRole: "Brand may request in-line QC audit reports from on-ground production manager.",
      riskIfSkipped: "N/A — sewing is the core manufacturing operation.",
    },
    {
      num: "08",
      title: "Finishing, Washing & Quality Inspection",
      body: "Completed garments are thread-trimmed and pressed. Wash treatments specified in the tech pack — enzyme wash, silicon softener, garment dye, or others — are applied at this stage. All garments pass through metal and needle detection equipment before packing (mandatory for most export markets). A pre-shipment quality inspection using AQL sampling methodology checks a statistically representative sample of the order against the golden sample and the POM spec sheet. Garments failing the inspection are reworked or rejected before packing.",
      brandRole: "Brand may conduct or commission an independent third-party pre-shipment inspection.",
      riskIfSkipped: "Defective garments reach destination and must be remediated at the brand's cost.",
    },
    {
      num: "09",
      title: "Packaging & Export Logistics",
      body: "Approved garments are individually polybagged (with the correct size sticker and fold method), packed into export cartons in the approved size ratio, and carton-marked with shipping labels, country of origin, HS code, and customs reference information. The manufacturer prepares shipping documents: commercial invoice, packing list, certificate of origin, and any applicable textile or compliance declarations. Goods are dispatched by sea freight (typically 20–35 days to Europe or North America from Bangladesh) or air freight (5–10 days) depending on the brand's timeline and budget.",
      brandRole: "Brand coordinates with freight forwarder; provides import documentation requirements for destination country.",
      riskIfSkipped: "N/A — export is the final delivery stage.",
    },
  ];

  const faqs = [
    {
      q: "How long does the entire apparel production process take from start to finish?",
      a: "For new styles, the complete cycle — tech pack to delivery — typically ranges from 14 to 28 weeks depending on garment complexity, fabric sourcing requirements, and number of sample revision rounds. A brand starting with a complete tech pack, requiring one or two sample rounds, using in-stock or quickly sourced fabric, and shipping by sea can expect 14 to 18 weeks. A first collection requiring tech pack development and multiple revision rounds is more typically 20 to 28 weeks.",
    },
    {
      q: "What is the most critical stage in the garment production workflow?",
      a: "The pre-production (PP) sample approval stage. Once bulk fabric cutting begins (Phase 06), pattern or measurement errors cannot be corrected across the production run. A correction at the PP stage costs one revised sample and a few days. The same correction discovered after bulk cutting costs time, fabric, and potentially the entire production run. Thorough PP sample review is the highest-leverage quality decision a brand makes.",
    },
    {
      q: "What should a brand prepare before submitting their project to a manufacturer?",
      a: "At minimum: a complete tech pack with measurements, fabric specifications, construction details, and colourway references; an approximate order quantity and size breakdown; and a target delivery window. The more complete the brief, the more accurate the quote and the faster the sampling process can begin. Brands without a tech pack can often engage a production partner who offers tech pack development as part of the managed production service.",
    },
    {
      q: "Can any stage of the production process be shortened?",
      a: "Some stages have flexibility. Fabric sourcing time can be reduced by using in-stock fabrics rather than custom-dyed. Sampling rounds can be minimised with a highly detailed and accurate tech pack. Shipping time can be reduced with air freight. However, core manufacturing stages — pattern development, sample rounds, and bulk production — have genuine minimum durations that cannot be compressed without quality risk.",
    },
    {
      q: "What happens if a quality problem is found during bulk production?",
      a: "Problems discovered during in-line auditing can be corrected before they affect the full run — this is why in-line QC during sewing is more valuable than end-of-line inspection. Problems found at pre-shipment inspection require rework before dispatch. Problems discovered after the goods have shipped are much more expensive: the brand must absorb the cost of remediation, replacement, or customer claims.",
    },
    {
      q: "Does Fenalt manage the complete production process?",
      a: "Fenalt operates as an on-the-ground operational liaison in Dhaka, Bangladesh, coordinating production across audited independent partner micro-factories. This covers fabric sourcing and lab dip management, pattern development, sampling, in-line quality auditing, pre-shipment inspection, and export logistics — the complete production workflow from tech pack submission to delivery.",
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
            The Apparel Production Process{" "}
            <span className="italic font-medium text-[#2D5016]">Explained Step by Step.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A comprehensive master guide to the 9 phases of clothing production — what happens at each stage, what the brand&apos;s role is, and what can go wrong if a phase is rushed or skipped.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Workflow size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Workflow Architecture</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Successful clothing production relies on a strict, sequential pipeline. Each phase depends on the completion and approval of the phase before it. Skipping or rushing pre-production stages guarantees costly bulk manufacturing errors.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-5">
            <p>
              Fashion brands frequently underestimate the complexity of apparel production because the finished product — a well-made garment — looks deceptively simple. The production process that creates it is not. Multiple specialists, suppliers, and approval gates must sequence correctly for a production run to deliver quality, on time.
            </p>
            <p>
              Understanding each phase — and specifically understanding the brand&apos;s role at each stage — is essential for managing a manufacturing relationship effectively, setting realistic timelines, and protecting your product quality.
            </p>
          </div>
        </div>
      </section>

      {/* 9 Phases */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Lifecycle</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">The 9 Production Phases</h2>
          <div className="space-y-6">
            {phases.map((p, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-3xl font-light text-[#C8A882] shrink-0 w-12">{p.num}</span>
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6] mt-1">{p.title}</h3>
                </div>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-4 pl-16">{p.body}</p>
                <div className="pl-16 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#2A2A2A] border border-[#3A3A3A]">
                    <p className="text-xs font-semibold text-[#C8A882] mb-1">Brand Role</p>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{p.brandRole}</p>
                  </div>
                  <div className="p-3 bg-[#2A2A2A] border border-[#3A3A3A]">
                    <p className="text-xs font-semibold text-[#C8A882] mb-1">Risk If Rushed</p>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{p.riskIfSkipped}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Dev Checklist (Merged #20) */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider mb-4">Pre-Production Gate</span>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-6">4 Non-Negotiables Before Bulk Cutting Begins</h2>
          <p className="text-base text-[#6B6560] leading-relaxed mb-8">
            Before a factory begins cutting bulk fabric (Phase 06), these four deliverables must be locked in. Missing any one of them introduces significant production risk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
              <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">1. Locked Tech Pack</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">No remaining TBDs in fabric specs, Pantone codes, or POM measurement tables. Every field confirmed.</p>
            </div>
            <div className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
              <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">2. Approved Fit Notes</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">All fit sample adjustments fully documented, communicated, and incorporated into master graded patterns.</p>
            </div>
            <div className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
              <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">3. Signed PP Sample</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">Physical pre-production reference sample signed off by brand and retained at the production factory.</p>
            </div>
            <div className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
              <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">4. Verified BOM & Packaging</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">Exact care label copy, woven neck tags, zippers, hangtags, polybag spec, and carton labelling confirmed and approved.</p>
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

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works: From Design to Finished Garment" },
              { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
              { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Usually Take?" },
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
              { href: "/operations", label: "Fenalt Operations Workflow in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Streamline your production process</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages every step of the apparel production process — ensuring clear communication and high-quality output at each phase.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
