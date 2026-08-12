import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Clothing Manufacturer Due Diligence Checklist",
  description:
    "A structured due diligence checklist for evaluating clothing manufacturers - covering capabilities, quality systems, compliance, references, and financial terms.",
  alternates: { canonical: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist" },
  openGraph: {
    title: "Clothing Manufacturer Due Diligence Checklist",
    description: "A structured due diligence checklist for evaluating clothing manufacturers - covering capabilities, quality systems, compliance, references, and financial terms.",
    url: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist",
  },
};

export default function ManufacturerDueDiligenceChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Clothing Manufacturer Due Diligence Checklist",
    description: "Structured due diligence checklist for evaluating and vetting clothing manufacturers.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist",
  };

  const checklistSections = [
    {
      section: "Business Identity & Legitimacy",
      items: [
        "Verified physical business address in the manufacturing country",
        "Registered business entity (company registration or trade licence viewable)",
        "Identifiable, named point of contact - not an anonymous inbox",
        "Online presence consistent with claimed history and scale",
        "No pattern of brand name changes or relocated business identity",
      ],
    },
    {
      section: "Production Capabilities",
      items: [
        "Confirmed experience with your specific garment category (not just a 'can make anything' claim)",
        "MOQ is compatible with your planned order volume",
        "Physical samples of existing products available for inspection",
        "Confirmed fabric weight and construction capability for your specifications",
        "Clarity on whether production is in-house or subcontracted",
      ],
    },
    {
      section: "Sampling & Development Process",
      items: [
        "Confirmed ability to work from your tech pack",
        "Clear sample pricing and revision policy communicated in writing",
        "Realistic sample turnaround time provided with qualifications",
        "Revision feedback process explained clearly",
        "Pre-production sample approval process documented",
      ],
    },
    {
      section: "Quality Control Systems",
      items: [
        "In-line inspection process described specifically (not just 'we do QC')",
        "Pre-shipment inspection process confirmed",
        "Measurement tolerance standard communicated (e.g. ±1.5cm)",
        "Defect classification policy (critical, major, minor) understood",
        "Post-delivery defect dispute process explained",
        "Needle and metal detection conducted if required for your market",
      ],
    },
    {
      section: "Timelines & Logistics",
      items: [
        "Bulk production lead time provided with honest qualifications",
        "Fabric sourcing lead time incorporated into timeline estimate",
        "Shipping terms (FOB, DDP, or other) confirmed and understood",
        "Communication protocol during production delays established",
        "Holiday and shutdown calendar for their manufacturing country obtained",
      ],
    },
    {
      section: "Pricing & Payment Terms",
      items: [
        "Itemised quote received (unit cost, sampling, packaging, freight separately)",
        "Payment terms confirmed in writing",
        "Payment schedule (deposit structure) reasonable and standard",
        "Cost implications of order volume changes understood",
        "Currency and payment method confirmed",
      ],
    },
    {
      section: "References & Track Record",
      items: [
        "At least one client reference provided and followed up",
        "Reference describes comparable product type and order volume",
        "No significant pattern of negative reviews across industry forums",
        "Portfolio includes brands of comparable scale and product type",
      ],
    },
    {
      section: "Ethical & Compliance Considerations",
      items: [
        "No unsubstantiated third-party certification claims (GOTS, OEKO-TEX, WRAP, etc.) - documentation requested where claimed",
        "Labour practices inquiry conducted - particularly for brands with explicit ethical sourcing commitments",
        "Applicable import compliance requirements for your destination market understood",
        "Any factory audit documentation requested (if available from partner facility)",
      ],
    },
  ];

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Due Diligence Checklist", item: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing & Supplier Selection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Clothing Manufacturer{" "}
            <span className="italic font-medium text-[#2D5016]">Due Diligence Checklist.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Use this checklist before committing to a manufacturing relationship. It covers eight areas - from basic legitimacy through to ethical compliance - to help brands make informed decisions.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">8 Areas to Verify Before Committing</h2>
          <div className="space-y-6">
            {checklistSections.map((sec, si) => (
              <div key={si} className="bg-[#F2EFE9] border border-[#E5DDD3] overflow-hidden">
                <div className="flex items-center gap-4 px-6 lg:px-8 py-4 bg-[#1A1A1A]">
                  <span className="font-display text-2xl font-light text-[#C8A882]">{String(si + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{sec.section}</h3>
                </div>
                <ul className="divide-y divide-[#E5DDD3]">
                  {sec.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3 px-6 lg:px-8 py-4">
                      <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#6B6560] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#9B948E] italic">This checklist provides general guidance. Specific due diligence requirements vary by brand size, product category, destination market, and ethical sourcing policy.</p>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturing Partner" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Work with a pre-vetted production partner</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt conducts manufacturer vetting on your behalf - connecting brands with audited independent micro-factories in Dhaka, Bangladesh.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
