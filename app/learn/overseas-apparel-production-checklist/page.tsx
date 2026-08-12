import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "A Complete Checklist for Starting Overseas Apparel Production",
  description:
    "Everything a fashion brand needs to check before starting an overseas clothing production project — from manufacturer selection through to import planning.",
  alternates: { canonical: "https://fenalt.com/learn/overseas-apparel-production-checklist" },
  openGraph: {
    title: "A Complete Checklist for Starting Overseas Apparel Production",
    description: "Everything a fashion brand needs to check before starting an overseas clothing production project.",
    url: "https://fenalt.com/learn/overseas-apparel-production-checklist",
  },
};

export default function OverseasApparelProductionChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A Complete Checklist for Starting Overseas Apparel Production",
    description: "Comprehensive checklist for brands starting overseas clothing production.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/overseas-apparel-production-checklist",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Overseas Production Checklist", item: "https://fenalt.com/learn/overseas-apparel-production-checklist" },
    ],
  };

  const phases = [
    {
      phase: "Phase 1: Design & Documentation",
      color: "bg-[#1A1A1A] text-[#FAF9F6]",
      items: [
        "Designs finalised and not subject to further significant revision",
        "Tech pack created for each style — measurements, BOM, fabric spec, construction details",
        "Pantone or lab-dip colour references prepared for all colourways",
        "Print or embroidery artwork prepared in vector format",
        "Label content drafted — care/content labels, country of origin, size labels",
        "Target fabric direction identified (composition, GSM range)",
      ],
    },
    {
      phase: "Phase 2: Manufacturer Selection",
      color: "bg-[#2D5016] text-[#FAF9F6]",
      items: [
        "Manufacturer identified with verified capability for your garment type",
        "MOQ confirmed as compatible with planned order volume",
        "Sample of manufacturer's existing work requested and reviewed",
        "Quality control process understood and documented",
        "Payment terms and pricing confirmed in writing",
        "Production timeline discussed and realistic lead times agreed",
        "Due diligence checklist completed (see Manufacturer Due Diligence Checklist)",
      ],
    },
    {
      phase: "Phase 3: Sampling & Approval",
      color: "bg-[#C8A882] text-[#1A1A1A]",
      items: [
        "Tech pack submitted to manufacturer",
        "First fit sample requested and reviewed against spec",
        "Written feedback provided for all required revisions",
        "Sample revision rounds completed until approved",
        "Pre-production sample (PP sample) requested from production facility",
        "PP sample approved in writing before production begins",
        "Golden sample retained as production quality reference",
      ],
    },
    {
      phase: "Phase 4: Production",
      color: "bg-[#FAF9F6] text-[#1A1A1A] border border-[#E5DDD3]",
      items: [
        "Purchase order issued with full size breakdown and delivery terms",
        "Production start date and completion date confirmed",
        "Fabric and trim confirmation obtained before cutting",
        "In-line inspection arranged or confirmed as conducted by manufacturer",
        "Pre-shipment quality inspection arranged (third-party or manufacturer QC)",
        "AQL level and tolerance standard specified in purchase order",
        "Communication plan for progress updates established",
      ],
    },
    {
      phase: "Phase 5: Shipping & Import",
      color: "bg-[#F2EFE9] text-[#1A1A1A] border border-[#E5DDD3]",
      items: [
        "Shipping terms (FOB or DDP) confirmed and understood",
        "Freight forwarder or courier arranged for the shipment",
        "Import duty rates for your garment HS codes and country of origin researched",
        "Customs entry documentation requirements understood for destination country",
        "Importer of record role confirmed (brand or freight forwarder)",
        "Delivery address and warehouse receiving requirements confirmed",
        "Commercial invoice, packing list, and bill of lading documentation confirmed with manufacturer",
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Bangladesh & International Sourcing</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            A Complete Checklist for Starting{" "}
            <span className="italic font-medium text-[#2D5016]">Overseas Apparel Production.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Five phases, 35 checkpoints. Use this as a master reference for your first — or any — overseas clothing production project.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Master Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">5-Phase Production Checklist</h2>
          <div className="space-y-8">
            {phases.map((phase, pi) => (
              <div key={pi} className="overflow-hidden border border-[#E5DDD3]">
                <div className={`px-6 lg:px-8 py-4 ${phase.color}`}>
                  <h3 className="font-display text-xl font-medium">{phase.phase}</h3>
                </div>
                <ul className="divide-y divide-[#E5DDD3] bg-[#F2EFE9]">
                  {phase.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3 px-6 lg:px-8 py-4">
                      <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#6B6560] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
            <p className="text-xs text-[#9B948E] leading-relaxed">This checklist provides general guidance for overseas apparel production. Specific requirements vary by country of manufacture, destination market, garment type, and individual brand circumstances. Import duty and customs requirements should be verified with an import specialist or freight forwarder for your specific situation.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for Their First Production Run" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-evaluate-an-overseas-clothing-manufacturer", label: "How to Evaluate an Overseas Manufacturer" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Start your overseas production project with Fenalt</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages overseas apparel production from Dhaka, Bangladesh — covering sampling, production oversight, quality control, and DDP or FOB export coordination.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
