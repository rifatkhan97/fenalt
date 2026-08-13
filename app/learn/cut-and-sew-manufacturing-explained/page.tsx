import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "Cut-and-Sew Manufacturing Explained for Fashion Brands",
  description:
    "Cut-and-sew manufacturing builds garments from raw fabric using custom patterns. Learn how the process works, when brands should use it, and how it differs from blank-based production.",
  alternates: {
    canonical: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
  },
  openGraph: {
    title: "Cut-and-Sew Manufacturing Explained for Fashion Brands",
    description:
      "Cut-and-sew manufacturing builds garments from raw fabric using custom patterns. Learn how the process works, when brands should use it, and how it differs from blank-based production.",
    url: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
  },
};

export default function CutAndSewManufacturingExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cut-and-Sew Manufacturing Explained for Fashion Brands",
    description:
      "A comprehensive guide to cut-and-sew garment manufacturing, pattern development, fabric spreading, cutting, and sewing workflows.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
    mainEntityOfPage: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Cut-and-Sew Manufacturing Explained", item: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained" },
    ],
  };

  const steps = [
    {
      title: "1. Tech Pack & Pattern Development",
      desc: "Everything begins with technical documentation. A complete tech pack — specifying measurements, fabric, construction methods, and trims — is reviewed by a pattern maker who converts the spec into physical or digital pattern pieces. These patterns are the exact templates that fabric will be cut to. Inaccurate pattern development at this stage propagates through every subsequent unit produced.",
    },
    {
      title: "2. Fabric Sourcing & Lab Dip Approval",
      desc: "Raw fabric is sourced from mills based on the tech pack's fibre specification, GSM target, and colourway. Dyeing labs produce small test swatches (lab dips) to match Pantone colour references. Brands must approve lab dips before bulk fabric is processed — a step often overlooked by first-time brands that delays production if managed poorly.",
    },
    {
      title: "3. Fabric Spreading & Marker Making",
      desc: "Rolls of approved fabric are laid out in flat, even layers on long industrial cutting tables. Computerised marker software arranges all pattern pieces across the fabric width to maximise yield and minimise waste. The efficiency of the marker directly affects per-unit fabric consumption and therefore manufacturing cost.",
    },
    {
      title: "4. Precision Cutting",
      desc: "Industrial straight-knife cutting machines or automated laser cutters slice through the fabric layers following the marker layout. Multiple plies are cut simultaneously for efficiency. Accurate grainline alignment during cutting is critical — off-grain cuts cause seams to twist during wear and washing.",
    },
    {
      title: "5. Bundling & Sub-Assembly Routing",
      desc: "Cut fabric panels (front body, back body, sleeves, pockets, collar, hood, etc.) are grouped into bundles by size and colourway and routed to sewing lines. Each bundle is tagged with the style number, size, and cut number to maintain traceability through the production floor.",
    },
    {
      title: "6. Garment Assembly & Sewing",
      desc: "Sewing technicians stitch panels together in a sequential line operation. Different stitch types are used for different seams — lockstitch for topstitching, overlock for raw edge finishing, coverstitch or flatlock for hemming and sportswear construction. Hardware (zippers, snaps, drawcords), labels, and trim attachments are integrated at designated sewing stations.",
    },
    {
      title: "7. Finishing, Washing & QC",
      desc: "Completed garments are thread-trimmed, steam-pressed, and subjected to any specified washing or treatment processes (enzyme wash, garment dye, silicon softener). Metal and needle detection is performed before packing — mandatory for export to most markets. Pre-shipment quality inspection checks finished units against the AQL standard and the approved golden sample.",
    },
    {
      title: "8. Packaging & Export",
      desc: "Approved garments are polybagged with the correct size sticker, folded to spec, and packed into export cartons. Cartons are labelled with shipping marks, country of origin, and HS code information for customs. The manufacturer prepares commercial invoices, packing lists, and certificates of origin for freight and customs clearance.",
    },
  ];

  const comparisonRows = [
    { aspect: "Starting material", cutSew: "Raw fabric (unfinished rolls from mill)", blank: "Pre-made blank garment (already fully constructed)" },
    { aspect: "Design freedom", cutSew: "Complete — custom silhouette, panels, seams, hardware", blank: "Limited — can only modify surface (print, embroidery)" },
    { aspect: "Fit control", cutSew: "Full — brand owns patterns and size specifications", blank: "None — fixed by the blank manufacturer's sizing" },
    { aspect: "Fabric choice", cutSew: "Any fibre, weight, finish the brand specifies", blank: "Restricted to what blank supplier offers" },
    { aspect: "Development cost", cutSew: "Higher — requires tech pack, pattern, and sampling", blank: "Lower — no pattern development needed" },
    { aspect: "MOQ", cutSew: "Higher — typically 50–300+ units per style minimum", blank: "Lower — some blank suppliers accept single-unit POD" },
    { aspect: "Lead time", cutSew: "Longer — sampling and pre-production phases add weeks", blank: "Shorter — production can often begin immediately" },
    { aspect: "Brand ownership", cutSew: "Complete — brand owns the design, pattern, and product", blank: "Partial — brand only owns the decoration layer" },
    { aspect: "Best for", cutSew: "Brands building a distinct product with custom aesthetics", blank: "Simple branded merchandise or rapid POD fulfilment" },
  ];

  const whenToUse = [
    { scenario: "Custom silhouette or proportions", detail: "If the garment shape, fit, or sizing does not match any commercially available blank, cut-and-sew is required." },
    { scenario: "Specific fabric weight or composition", detail: "When a brand needs a particular GSM, fibre blend, or fabric finish that blank suppliers do not offer." },
    { scenario: "Custom construction details", detail: "Panel seaming, specialised pockets, double-layer construction, unique collar shapes, or flatlock detailing that blanks cannot accommodate." },
    { scenario: "Private label with full ownership", detail: "Brands that want to own their patterns, trademarks, and product integrity long-term need cut-and-sew." },
    { scenario: "Premium positioning", detail: "Cut-and-sew allows for heavier fabric weights, superior construction, and attention to detail that blank-based products cannot replicate at equivalent cost." },
  ];

  const faqs = [
    {
      q: "What is the main difference between cut-and-sew and print-on-demand blanks?",
      a: "Print-on-demand uses pre-made off-the-shelf garments with fixed dimensions and a fixed construction. Cut-and-sew builds garments from raw fabric rolls, allowing complete control over silhouette, sizing, fabric weight, construction methods, and every physical attribute of the finished product. The surface decoration (print or embroidery) is just one element among many that cut-and-sew allows a brand to control.",
    },
    {
      q: "Is cut-and-sew manufacturing more expensive than blank printing?",
      a: "Initial development costs are higher for cut-and-sew: tech pack creation, pattern development, sample rounds, and material minimums all add cost before a single production unit is made. However, at meaningful production scales, per-unit costs for cut-and-sew are highly competitive — and the product itself is differentiated in ways that blank-based production cannot match. Brands building genuine product value rather than simply decorating a commodity item typically find cut-and-sew cost-justified.",
    },
    {
      q: "What does a brand need to provide before cut-and-sew production can begin?",
      a: "A complete tech pack is the essential starting document — covering garment measurements, fabric specifications (composition, weight, colourway), construction details (stitch types, seam allowances, pocket construction), trim and hardware specifications (zippers, drawcords, labels), and print or embroidery placement. Without a tech pack, manufacturers can provide only rough indicative quotes and cannot begin accurate pattern development.",
    },
    {
      q: "What is the typical minimum order quantity for cut-and-sew production?",
      a: "MOQ varies by manufacturer, product complexity, and fabric requirements. Many specialist manufacturers work with brands from 50 to 100 units per style for qualifying capsule projects. Standard small-batch production typically starts from 100 to 300 units per style. Higher-volume bulk production runs from 500 units and above. Fabric mill minimums often independently set the practical lower limit, particularly for custom dyed fabrics.",
    },
    {
      q: "How long does the cut-and-sew process take from start to finish?",
      a: "For a brand starting with a complete tech pack, the total timeline from brief to delivery typically ranges from 14 to 20 weeks. This includes: pattern development (1–2 weeks), prototype sampling (2–4 weeks), revision rounds (1–3 weeks per round), fabric sourcing and lab dip approval (running in parallel, 3–5 weeks), pre-production sample (1–2 weeks), bulk production (4–6 weeks), and sea freight (4–5 weeks to most destinations). Air freight can reduce shipping time but adds cost.",
    },
    {
      q: "Can cut-and-sew manufacturing include embroidery, printing, and other decoration?",
      a: "Yes. Cut-and-sew production and surface decoration are complementary, not mutually exclusive. Many cut-and-sew garments include screen printing, high-density puff printing, direct embroidery, woven patches, sublimation, or other treatments. The decoration method is specified in the tech pack and executed either in-factory or at a specialist decoration facility before garment completion. The advantage over blank decoration is that the base garment itself is also custom.",
    },
    {
      q: "Does cut-and-sew require a pattern maker?",
      a: "Yes. Converting garment measurements and construction specifications into precise 2D cut patterns requires a skilled pattern maker. Some manufacturers have in-house pattern development; others outsource to specialist pattern studios. Brands can also supply their own digital patterns (in standard industry formats like DXF) if they have been developed externally. Pattern accuracy directly determines how closely the final garment matches the tech pack specification.",
    },
    {
      q: "What are the main quality risks in cut-and-sew production?",
      a: "The most common quality risks include: off-grain fabric cutting causing twisted seams after washing; inconsistent fabric shade between dye lots if rolls are not properly banded; measurement deviations from the POM spec; stitch skipping or tension inconsistencies in sewing; and print or embroidery misalignment from placement coordinate errors. These risks are managed through pre-production sign-off, in-line quality auditing, and AQL pre-shipment inspection.",
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
            Cut-and-Sew Manufacturing{" "}
            <span className="italic font-medium text-[#2D5016]">Explained for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Cut-and-sew manufacturing gives apparel brands total creative control over fabric choice, silhouette proportions, and custom construction details. This guide explains how it works and when it makes sense.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scissors size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Definition</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Cut-and-sew manufacturing</strong> is the process of creating custom garments from scratch — sourcing raw fabric from mills, cutting flat pattern pieces from that fabric, and sewing them into finished garments according to a brand&apos;s technical specifications.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-5">
            <p>
              Unlike blank-based production — where a pre-made garment is purchased from a wholesale supplier and decorated with a print or embroidery — cut-and-sew manufacturing means the garment itself is built from the ground up. Every measurement, seam, panel, pocket, and trim is specified by the brand and executed by the manufacturer.
            </p>
            <p>
              This approach requires more upfront development work (tech pack, pattern making, sampling) and higher minimum order quantities, but it is the only method that gives a brand full ownership over their product&apos;s physical form, fabric, and construction quality.
            </p>
          </div>
        </div>
      </section>

      {/* 8-step workflow */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Stages</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Stages of Cut-and-Sew Production</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cut-and-sew vs blanks comparison */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-6">Cut-and-Sew vs Blank-Based Production</h2>
          <p className="text-base text-[#6B6560] leading-relaxed mb-10 max-w-2xl">
            Both approaches have legitimate applications. The right choice depends on your brand&apos;s product vision, target market, production volume, and timeline.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Aspect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Cut-and-Sew</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Blank-Based (POD / White Label)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.aspect}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.cutSew}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.blank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to use cut-and-sew */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Decision Guide</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">When Should a Brand Use Cut-and-Sew?</h2>
          <div className="space-y-4">
            {whenToUse.map((item, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-2">{item.scenario}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{item.detail}</p>
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
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works: From Design to Finished Garment" },
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-is-pattern-making", label: "What Is Pattern Making in Clothing Production?" },
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/cut-and-sew-clothing-manufacturer-bangladesh", label: "Fenalt Cut-and-Sew Manufacturing Bangladesh" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Development Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Build custom cut-and-sew collections</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt delivers full cut-and-sew production for independent brands — offering custom pattern making, high-GSM fabric sourcing, and low MOQs.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
