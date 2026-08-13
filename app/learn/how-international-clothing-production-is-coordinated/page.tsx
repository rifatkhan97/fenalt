import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "How International Clothing Production Is Coordinated",
  description:
    "Discover how global supply chain teams orchestrate overseas garment manufacturing — tech pack handoffs, lab-dip approvals, inline inspections, FRI audits, and freight booking.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
  },
  openGraph: {
    title: "How International Clothing Production Is Coordinated",
    description:
      "Discover how global supply chain teams orchestrate overseas garment manufacturing — tech pack handoffs, lab-dip approvals, inline inspections, FRI audits, and freight booking.",
    url: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
  },
};

export default function HowInternationalClothingProductionIsCoordinatedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How International Clothing Production Is Coordinated",
    description:
      "A technical supply chain operations guide explaining cross-border apparel manufacturing workflows.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
    mainEntityOfPage: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "International Production Coordination", item: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated" },
    ],
  };

  const phases = [
    {
      title: "1. Digital Tech Pack & CAD Pattern Handoff",
      desc: "Brand design teams transmit vectorized tech pack artwork, digital POM measurement spec tables, and Pantone swatches to factory merchandisers for initial BOM cost breakdown.",
    },
    {
      title: "2. Physical Prototype & Golden Sample Sign-Off",
      desc: "Couriered fit samples, fabric swatches, and screen print strike-offs are physically evaluated, annotated with revision comments, and sealed as the Golden PP Sample.",
    },
    {
      title: "3. Bulk Mill Knitting & Pantone Lab-Dip Dyeing",
      desc: "Textile mills spin raw cotton yarn, knit base fabrics, execute 3-dip Pantone shade matching under D65 light boxes, and complete industrial bio-wash pre-shrinking.",
    },
    {
      title: "4. Live Sewing Line Assembly & Inline QC Audits",
      desc: "Fabric bundles are spread on CAD cutting tables, fed onto sewing lines, and audited by roving IPQC inspectors using Traffic Light visual status cards.",
    },
    {
      title: "5. Final AQL 2.5 FRI Pre-Shipment Inspection",
      desc: "QC engineers perform random statistical sampling under ANSI/ASQ Z1.4 tables in the factory warehouse, auditing stitching, measurements, polybags, and needle detection.",
    },
    {
      title: "6. Freight Forwarding, Customs Clearance & Door Delivery",
      desc: "Export cartons are packed into FCL/LCL ocean containers at Chittagong port, cleared through export customs, and shipped via ocean or air freight to destination warehouses.",
    },
  ];

  const coordinationScheduleMatrix = [
    { productionStage: "1. Development & Tech Pack", durationBenchmark: "Days 1 – 7", responsibleParty: "Brand Technical Designer & Factory Merchandiser" },
    { productionStage: "2. Prototype & Fit Sampling", durationBenchmark: "Days 8 – 20", responsibleParty: "Pattern Maker & Sample Room Technicians" },
    { productionStage: "3. Mill Fabric Knitting & Dyeing", durationBenchmark: "Days 21 – 35", responsibleParty: "Textile Mill Dyeing Technologists" },
    { productionStage: "4. Bulk Sewing & Decoration", durationBenchmark: "Days 36 – 50", responsibleParty: "Sewing Line Supervisors & Inline QC Auditors" },
    { productionStage: "5. FRI Audit & Ocean Freight", durationBenchmark: "Days 51 – 75", responsibleParty: "Third-Party Inspector & Freight Forwarder" },
  ];

  const faqs = [
    {
      q: "What role does a factory merchandiser play in international clothing coordination?",
      a: "The factory merchandiser serves as the central operational bridge — coordinating raw yarn purchasing with textile mills, managing print house schedules, tracking sample revisions, and issuing shipping documentation.",
    },
    {
      q: "How long does global supply chain coordination take from tech pack to delivery?",
      a: "Total turnaround for custom international apparel production ranges from 60 to 90 days — including 2 weeks for sampling, 4 to 5 weeks for bulk manufacturing, and 4 weeks for ocean freight transit.",
    },
    {
      q: "What digital tools are used to coordinate overseas apparel production?",
      a: "Supply chain teams use PLM (Product Lifecycle Management) software, shared cloud tech pack repositories, digital Pantone color spectro-photometers, and daily Slack/WhatsApp video channels.",
    },
    {
      q: "How do brands prevent communication errors across time zones?",
      a: "By using standardized technical documentation — including ISO 4915 stitch numbers, 4-digit Pantone TCX color codes, flat POM measurement diagrams, and working with an on-the-ground liaison in Dhaka.",
    },
    {
      q: "What is a Critical Path Schedule in garment production?",
      a: "A Critical Path Schedule is a master timeline detailing non-negotiable deadline dates for fabric approval, lab-dip sign-off, PP sample sealing, cutting start, inline QC, and port vessel loading.",
    },
    {
      q: "How does Fenalt coordinate international apparel production in Dhaka?",
      a: "Fenalt provides end-to-end supply chain management in Bangladesh — operating as your local technical office to direct fabric mills, oversee sewing lines, enforce AQL 2.5 QC, and manage export logistics.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Bangladesh &amp; International</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How International Clothing Production{" "}
            <span className="italic font-medium text-[#2D5016]">Is Coordinated.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Discover how global supply chain teams orchestrate overseas garment manufacturing — tech pack handoffs, lab-dip approvals, inline inspections, FRI audits, and freight booking.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Network size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Supply Chain Operations</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Coordinating international production requires <strong className="font-medium">flawless technical handoffs between designers, mills, and sewing lines</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Managing an overseas supply chain is an exercise in operational synchronization. From initial PLM tech pack transmission and lab-dip color matching to inline factory audits, pre-shipment FRI inspections, and ocean container booking at Chittagong port, structured coordination guarantees on-time collection launches.
          </p>
        </div>
      </section>

      {/* 6 Phases */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Workflow Stages</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Stages of Cross-Border Production Coordination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((ph, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{ph.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{ph.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Critical Path</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">International Apparel Coordination Milestone Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Production Stage</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Standard Duration</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Responsible Operational Party</th>
                </tr>
              </thead>
              <tbody>
                {coordinationScheduleMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.productionStage}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-bold">{row.durationBenchmark}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.responsibleParty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
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
              { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", label: "How Apparel Manufacturing in Bangladesh Works" },
              { href: "/learn/what-to-know-before-sourcing-from-bangladesh", label: "What to Know Before Sourcing From Bangladesh" },
              { href: "/learn/what-happens-after-clothing-manufactured-overseas", label: "What Happens After Clothing Is Manufactured" },
              { href: "/learn/overseas-apparel-production-checklist", label: "Overseas Apparel Production Checklist" },
              { href: "/learn/how-to-communicate-with-overseas-suppliers", label: "How to Communicate With Overseas Suppliers" },
              { href: "/apparel-production-management-services", label: "Fenalt International Production Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Orchestrate seamless global manufacturing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt coordinates tech packs, fabric milling, inline QC, and export shipping in Dhaka for global apparel brands.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
