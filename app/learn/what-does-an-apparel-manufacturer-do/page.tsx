import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "What Does an Apparel Manufacturer Actually Do?",
  description:
    "Discover the exact responsibilities of a garment manufacturer - from material sourcing and pattern development to sewing, quality control, and export packing.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-does-an-apparel-manufacturer-do",
  },
  openGraph: {
    title: "What Does an Apparel Manufacturer Actually Do?",
    description:
      "Discover the exact responsibilities of a garment manufacturer - from material sourcing and pattern development to sewing, quality control, and export packing.",
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
    {
      title: "Raw Material Sourcing",
      desc: "Apparel manufacturers procure yarn, knitted or woven fabrics, dyeing services, zippers, buttons, threads, woven labels, and custom trims based on tech pack specifications. This involves managing supplier relationships with mills and trim vendors, reviewing fabric quality (GSM, composition, colorfastness), and approving dyed swatches (lab dips) before bulk fabric is produced. Fabric sourcing happens before a single garment can be cut.",
    },
    {
      title: "Pattern Making & Grading",
      desc: "Once a tech pack is received, a pattern maker converts the measurement spec sheet and construction details into 2D cut patterns - the templates used to cut fabric pieces. These master patterns are then graded across the full size run (for example, XS through 3XL), ensuring each size scales proportionally from the base pattern. Most modern manufacturers use CAD pattern software to improve consistency and reduce marker waste.",
    },
    {
      title: "Sampling & Prototype Building",
      desc: "Before bulk production begins, the manufacturer sews prototype samples to test fit, construction, fabric behaviour, and visual aesthetics. A typical sampling cycle includes a first-fit prototype (to check silhouette and proportions), one or more revision rounds (to address measurement or construction corrections), and a pre-production sample (sewn with actual bulk fabric as the final approval gate before mass production). Sampling is one of the most technically demanding and time-sensitive phases of the production cycle.",
    },
    {
      title: "Bulk Fabric Cutting",
      desc: "Once sampling is approved, bulk fabric is laid out in layers on industrial cutting tables. A software-generated marker (an optimised arrangement of all pattern pieces) is placed on top and the fabric is cut using straight-knife industrial cutters or automated cutting systems. Accurate cutting is critical - off-grain cuts cause twisted seams and measurement failures that cannot be corrected during sewing.",
    },
    {
      title: "Assembly-Line Sewing",
      desc: "Cut fabric panels are sorted into bundles and routed through dedicated sewing stations, where operators specialise in specific operations - attaching collars, setting sleeves, closing side seams, attaching pockets. Different stitch types (lockstitch, overlock/serger, coverstitch, flatlock) are used for different seams depending on the garment type and construction requirements. Sewing line management is where production speed and quality intersect most critically.",
    },
    {
      title: "Quality Assurance & In-Line Inspection",
      desc: "Quality control happens at multiple stages - not just at the end of production. In-line QC involves checking measurements, stitch quality, and construction at regular intervals during sewing, allowing defects to be caught and corrected before they multiply across the entire production run. Good manufacturers also conduct pre-shipment inspections against the AQL sampling methodology, comparing finished garments to the approved golden sample.",
    },
    {
      title: "Finishing & Washing",
      desc: "After sewing, garments go through finishing operations: loose thread trimming, steam pressing, washing or treatment processes (if specified - garment washes, enzyme washes, silicon wash for softening), metal and needle detection (mandatory for export compliance), and final visual inspection. Finishing significantly affects how a garment feels, looks, and presents to the consumer.",
    },
    {
      title: "Packaging & Export Logistics",
      desc: "Finished garments are individually polybagged, folded to the specified fold, and packed into export cartons with the correct size ratio. Cartons are marked with barcode labels, country of origin, care content information, and shipping marks. The manufacturer prepares shipping documentation including packing lists, commercial invoices, and certificates of origin required for customs clearance in the destination country.",
    },
  ];

  const manufacturerTypes = [
    { type: "CMT (Cut, Make, Trim)", desc: "The brand supplies all materials and trims. The factory only provides the cutting, sewing, and trimming labour. Brands have maximum control over material sourcing but must manage the full supply chain.", suitable: "Experienced brands with established fabric supplier relationships." },
    { type: "FOB (Free on Board)", desc: "The manufacturer procures all fabrics and trims, manages production, and delivers finished goods to the origin port. The brand has less sourcing control but lower coordination burden.", suitable: "Brands that want a more managed production experience." },
    { type: "Full-Package / Full-Service", desc: "The manufacturer or production partner handles everything from tech pack review and sampling through production, QC, and export - often including customs documentation. Closest to a turn-key solution.", suitable: "Early-stage brands and brands without in-house production expertise." },
  ];

  const faqs = [
    {
      q: "Does an apparel manufacturer design clothes for my brand?",
      a: "Generally no. Traditional manufacturers execute your design specifications as communicated through a tech pack. However, full-service production partners can assist with technical pattern development, material selection, and construction advice based on your creative concepts - particularly for brands that have a design direction but lack the technical documentation to communicate it precisely.",
    },
    {
      q: "What is the difference between CMT and FOB manufacturing?",
      a: "CMT (Cut, Make, Trim) means the brand supplies the fabric and all trims; the factory only provides the labour to cut, sew, and finish. FOB (Free on Board) means the manufacturer procures all fabrics and trims, manages production, and delivers packaged goods to the port of origin. FOB is more common for brands working internationally because it reduces the coordination burden on the brand.",
    },
    {
      q: "Can a clothing manufacturer help me develop my first product?",
      a: "Many full-service manufacturers and production management partners offer development assistance - including tech pack review, pattern development input, and fabric and trim recommendations. The extent of this support varies significantly by manufacturer. Some will only proceed with a complete tech pack, while others can work with a detailed brief and reference garment. Always confirm what the manufacturer's intake requirements are before submitting your project.",
    },
    {
      q: "What does a manufacturer need from a brand before starting production?",
      a: "At minimum, a manufacturer needs a complete tech pack (measurements, materials, construction details, colourways), an approximate order quantity and size breakdown, and a target delivery date. For sampling specifically, they also need Pantone colour references or lab-dip approvals and confirmation of which size to sample first. For bulk production, they need a signed-off golden sample, a formal purchase order, and confirmed label and packaging artwork.",
    },
    {
      q: "Is a clothing manufacturer the same as a garment factory?",
      a: "The terms are often used interchangeably, but there is a distinction. A garment factory is the physical facility where cutting and sewing happens. A clothing manufacturer may be the factory itself, or it may be an entity that coordinates production across one or more factories (sometimes called a CMC - Contract Manufacturing Coordinator). Full-service manufacturers typically combine factory operations with additional services like sampling, QC, and export logistics.",
    },
    {
      q: "How do I know if a manufacturer specialises in my product type?",
      a: "Ask directly and request samples or portfolio evidence. A manufacturer who specialises in heavyweight cotton knitwear (hoodies, sweatshirts, t-shirts) has different equipment, needle types, and fabric sourcing relationships than one specialising in woven denim, technical outerwear, or stretch activewear. Mismatched category experience is one of the most common causes of sampling quality problems.",
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
            A garment manufacturer is far more than a sewing workshop. They manage a complex industrial supply chain to convert design documentation into retail-ready apparel. This guide explains every stage.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
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
              An apparel manufacturer handles <strong className="font-medium">material procurement, technical engineering, production management, quality control, and export preparation</strong> - acting as the physical engine of your fashion brand.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-5">
            <p>
              Many fashion brands significantly underestimate the scope of what a competent apparel manufacturer manages. The visible output - a finished garment - is the result of a multi-week industrial workflow involving sourcing, engineering, scheduling, sewing, and logistics operations that are invisible to the final consumer but critical to production success.
            </p>
            <p>
              Understanding what a manufacturer actually does helps brands communicate more effectively, set realistic timelines, and evaluate whether a potential partner has the operational depth their project requires.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Responsibilities */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Factory Services</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Core Responsibilities of a Garment Manufacturer</h2>
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

      {/* Manufacturer types */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Service Models</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Types of Apparel Manufacturing Arrangements</h2>
          <p className="text-base text-[#6B6560] leading-relaxed mb-8">
            Manufacturers operate under different commercial and service models that affect how much the brand manages vs. how much the manufacturer handles.
          </p>
          <div className="space-y-5">
            {manufacturerTypes.map((mt, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{mt.type}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-3">{mt.desc}</p>
                <p className="text-xs text-[#9B948E]"><span className="font-semibold text-[#6B6560]">Best suited for:</span> {mt.suitable}</p>
              </div>
            ))}
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
              { href: "/learn/clothing-manufacturer-vs-sourcing-agent", label: "Clothing Manufacturer vs Garment Sourcing Agent" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/what-a-clothing-manufacturer-needs-from-a-brand", label: "What a Manufacturer Needs From a Brand" },
              { href: "/learn/apparel-production-process-explained", label: "The Apparel Production Process Step by Step" },
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
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Partner with a dedicated manufacturer</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt handles complete FOB garment manufacturing - managing fabric sourcing, technical development, quality control, and global shipping.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
