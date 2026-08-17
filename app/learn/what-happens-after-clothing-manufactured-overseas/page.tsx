import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "What Happens After Clothing Is Manufactured Overseas?",
  description:
    "Explore post-production clothing logistics - polybagging, FRI inspection sign-off, container stuffing, ocean vs air freight, customs clearance, and 3PL warehouse intake.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
  },
  openGraph: {
    title: "What Happens After Clothing Is Manufactured Overseas?",
    description:
      "Explore post-production clothing logistics - polybagging, FRI inspection sign-off, container stuffing, ocean vs air freight, customs clearance, and 3PL warehouse intake.",
    url: "https://www.fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
  },
};

export default function WhatHappensAfterClothingManufacturedOverseasPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Happens After Clothing Is Manufactured Overseas?",
    description:
      "A complete guide to post-production apparel shipping, customs clearance, ocean freight transit, and 3PL warehouse distribution.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
    mainEntityOfPage: "https://www.fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Happens After Manufacturing", item: "https://www.fenalt.com/learn/what-happens-after-clothing-manufactured-overseas" },
    ],
  };

  const steps = [
    {
      title: "1. Polybagging & Export Master Carton Packing",
      desc: "Finished garments are steam-ironed, folded with tissue paper, sealed in suffocation warning polybags, and packed into heavy 5-ply corrugated Master Cartons with ratio stickers.",
    },
    {
      title: "2. Final Random Inspection (FRI) & Release Sign-Off",
      desc: "QC auditors perform ANSI/ASQ Z1.4 sampling, verify needle detection scans, and issue a Passed Inspection Certificate, authorizing cargo release to the freight forwarder.",
    },
    {
      title: "3. Factory Port Trucking & Container Stuffing (Chittagong)",
      desc: "Cartons are trucked from Dhaka warehouses to Chittagong port, stuffed into 20ft or 40ft ocean containers (FCL) or consolidated as LCL pallet cargo.",
    },
    {
      title: "4. Cross-Border Freight Transit (Ocean vs Air Cargo)",
      desc: "Cargo is dispatched via sea freight (25–35 days) or express air cargo (4–7 days). Bill of Lading (B/L) and tracking documentation are transmitted digitally to the brand.",
    },
    {
      title: "5. Import Customs Clearance & Tariff Duty Filing",
      desc: "Licensed customs brokers clear import documentation (Commercial Invoice, Packing List, Certificate of Origin GSP/CO) and pay applicable import duties.",
    },
    {
      title: "6. Destination Port Drayage & 3PL Warehouse Intake",
      desc: "Drayage trucks transport ocean containers from arrival ports directly to your brand's 3PL fulfillment warehouse for barcode scanning and e-commerce inventory listing.",
    },
  ];

  const logisticsRoadmapMatrix = [
    { milestoneStage: "Factory Warehouse", keyActivity: "FRI Inspection + Needle Scan", documentationRequired: "Inspection Certificate + Inspection Report" },
    { milestoneStage: "Chittagong Port", keyActivity: "Container Loading & Port Export Clearance", documentationRequired: "Master Bill of Lading (B/L) + Packing List" },
    { milestoneStage: "Import Port", keyActivity: "Customs Entry & Duty Settlement", documentationRequired: "Commercial Invoice + Certificate of Origin" },
    { milestoneStage: "3PL Warehouse", keyActivity: "Pallet Unloading & Barcode Inventory Scan", documentationRequired: "Warehouse Receiving Log + Inventory Sign-Off" },
  ];

  const faqs = [
    {
      q: "What commercial documents are required to clear apparel imports through customs?",
      a: "Key import documents include: 1) Commercial Invoice, 2) Packing List, 3) Master Bill of Lading (B/L), 4) Certificate of Origin (Form GSP/CO), and 5) ISF 10+2 Filing (for US ports).",
    },
    {
      q: "What is the difference between FCL and LCL ocean freight shipping?",
      a: "FCL (Full Container Load) reserves a private 20ft or 40ft ocean container for your brand. LCL (Less than Container Load) consolidates your palletized cartons with other cargo in a shared container.",
    },
    {
      q: "What does DDP (Delivered Duty Paid) mean for fashion brand logistics?",
      a: "DDP means the manufacturer or sourcing partner handles 100% of sea freight, export clearance, import customs clearance, duty payments, and final truck delivery directly to your 3PL warehouse.",
    },
    {
      q: "How are garments protected against moisture and mold during 30-day sea transit?",
      a: "Garments are thoroughly dried post-ironing (moisture content under 12%), packed with silica gel desiccant packs in sealed polybags, and shipped in moisture-barrier master cartons.",
    },
    {
      q: "What is a Bill of Lading (B/L) in international shipping?",
      a: "A Bill of Lading is the official legal document issued by the ocean carrier. It acts as a contract of carriage, cargo receipt, and title document required to claim goods at the destination port.",
    },
    {
      q: "How does Fenalt manage post-production logistics from Bangladesh?",
      a: "Fenalt manages the entire post-production pipeline in Dhaka - conducting FRI audits, booking ocean/air freight, managing export customs clearance, and organizing DDP delivery to your 3PL warehouse.",
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
            What Happens After Clothing{" "}
            <span className="italic font-medium text-[#2D5016]">Is Manufactured Overseas?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A comprehensive guide to post-production clothing logistics - polybagging, FRI inspection sign-off, container stuffing, ocean vs air freight, customs clearance, and 3PL warehouse intake.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Truck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Post-Production Pipeline</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Manufacturing completion is only halfway - <strong className="font-medium">post-production logistics deliver garments safely to retail shelves</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            The post-production journey transforms sewn clothing into sellable inventory. Passing final pre-shipment FRI audits, applying polybag suffocation warnings, stuffing ocean containers at Chittagong port, clearing import customs, and receiving stock at 3PL fulfillment warehouses require meticulous supply chain management.
          </p>
        </div>
      </section>

      {/* 6 Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Logistics Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Stages of Post-Production Logistics</h2>
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

      {/* Logistics Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Documentation Matrix</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Post-Production Logistics &amp; Documentation Roadmap</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Logistics Milestone</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Key Operational Activity</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Mandatory Cargo Documentation</th>
                </tr>
              </thead>
              <tbody>
                {logisticsRoadmapMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.milestoneStage}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.keyActivity}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.documentationRequired}</td>
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
              { href: "/learn/how-international-clothing-production-is-coordinated", label: "How International Production Is Coordinated" },
              { href: "/learn/overseas-apparel-production-checklist", label: "Overseas Apparel Production Checklist" },
              { href: "/learn/final-inspection-finished-garments", label: "Final Inspection of Finished Garments" },
              { href: "/apparel-production-management", label: "Fenalt Export Logistics Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Complete post-production export management</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt handles pre-shipment FRI inspections, needle scanning, ocean container booking, and DDP freight clearance in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
