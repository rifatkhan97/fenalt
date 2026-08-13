import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "A Complete Checklist for Starting Overseas Apparel Production",
  description:
    "Everything a fashion brand needs to check before starting an overseas clothing production project — from tech pack handoff through sampling, QC, and customs clearance.",
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
    mainEntityOfPage: "https://fenalt.com/learn/overseas-apparel-production-checklist",
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
      phase: "Phase 1: Design & Technical Documentation",
      color: "bg-[#1A1A1A] text-[#FAF9F6]",
      items: [
        "Finalized garment designs with zero pending silhouette revisions",
        "Complete tech packs for every style — POM measurement table, BOM, fabric GSM specs",
        "Pantone 4-digit TCX color codes or physical lab-dip color swatches",
        "Vector artwork files prepared for screen printing, embroidery, or puff print",
        "Woven label artwork, care label copy, size tags, and barcode formats defined",
        "Target fabric construction defined (GSM weight, composition, fleece vs jersey)",
      ],
    },
    {
      phase: "Phase 2: Manufacturer & Supply Partner Vetting",
      color: "bg-[#2D5016] text-[#FAF9F6]",
      items: [
        "Partner factory in Dhaka vetted for capability in your specific garment category",
        "MOQ tiers confirmed compatible with your initial capsule launch (50–100 units)",
        "Physical benchmark samples of past factory production requested and audited",
        "Documented quality control procedures (in-line Traffic Light + FRI AQL 2.5) verified",
        "Signed NNN (Non-disclosure, Non-use, Non-circumvention) IP protection agreement",
        "Itemized FOB price quote breaking down fabric, CMT labor, and trims received",
      ],
    },
    {
      phase: "Phase 3: Sampling, Fit & Technical Approval",
      color: "bg-[#C8A882] text-[#1A1A1A]",
      items: [
        "Tech pack submitted to factory merchandiser with sample deadline",
        "First prototype fit sample received and measured flat on inspection table",
        "Written sample feedback log submitted with photo annotations",
        "Revised pre-production sample (PP sample) created from actual bulk fabric",
        "PP sample physically approved and signed off as the Golden Sample reference",
      ],
    },
    {
      phase: "Phase 4: Bulk Production & Inline Quality Control",
      color: "bg-[#262626] text-[#FAF9F6]",
      items: [
        "Purchase Order (PO) issued with detailed size breakdown and Incoterms shipping",
        "Raw fabric rolls audited under ASTM 4-Point System and shade banded",
        "Roving IPQC inspectors monitoring live sewing line assembly",
        "100% finished garments passed through conveyor needle detection scanning",
        "Final Random Inspection (FRI) conducted under ANSI/ASQ Z1.4 AQL 2.5 standards",
      ],
    },
    {
      phase: "Phase 5: Export Shipping, Customs & Warehouse Intake",
      color: "bg-[#F2EFE9] text-[#1A1A1A] border border-[#E5DDD3]",
      items: [
        "Shipping terms (FOB Chittagong, EXW, or DDP) confirmed with forwarder",
        "Export commercial invoice, packing list, and Bill of Lading (B/L) issued",
        "GSP / DCTS tariff preference Certificate of Origin filed for 0% duty",
        "Customs import clearance executed by licensed entry broker",
        "Palletized Master Cartons delivered to 3PL warehouse for barcode receiving",
      ],
    },
  ];

  const faqs = [
    {
      q: "How far in advance should I start this 5-phase overseas production checklist?",
      a: "Begin Phase 1 at least 90 to 120 days before your target retail launch date. This accounts for technical tech pack design (2 weeks), sampling (2 weeks), fabric milling & bulk sewing (6 weeks), and ocean transit (4 weeks).",
    },
    {
      q: "What is the single most critical checkpoint in Phase 3 (Sampling)?",
      a: "Sealing the Golden PP Sample. The Golden Sample is the contractually binding physical benchmark. In the event of bulk production disputes, inspectors compare bulk output directly against the signed Golden Sample.",
    },
    {
      q: "Why is a 4-point fabric inspection necessary in Phase 4 (Production)?",
      a: "Fabric represents 50% of garment costs. Auditing raw fabric rolls for holes, slubs, or shade variation before cutting prevents defective panels from being sewn into finished garments.",
    },
    {
      q: "What documents are required for smooth customs clearance in Phase 5?",
      a: "You need the Commercial Invoice, Packing List, Master Bill of Lading (B/L), Certificate of Origin (GSP Form), and ISF 10+2 entry filing (for US destination ports).",
    },
    {
      q: "Can a startup skip sampling and go straight to bulk production?",
      a: "NEVER! Going straight to bulk production without approving a physical pre-production sample made from bulk fabric is the #1 cause of catastrophic fit and construction failures.",
    },
    {
      q: "How does Fenalt execute this master checklist for client brands in Bangladesh?",
      a: "Fenalt manages all 5 phases in Dhaka — providing pattern development, pre-vetted micro-factories, lab-dips, inline Traffic Light QC, AQL 2.5 FRI inspections, and DDP export shipping.",
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

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Bangladesh &amp; International</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            A Complete Checklist for Starting{" "}
            <span className="italic font-medium text-[#2D5016]">Overseas Apparel Production.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Five phases, 30 essential checkpoints. Use this master operational roadmap for executing secure, high-quality overseas clothing production runs.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Master Operational Blueprint</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Organizing overseas production into 5 clear phases ensures <strong className="font-medium">zero missed details from tech pack handoff to warehouse delivery</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Executing cross-border apparel manufacturing requires systematic discipline. By following a 5-phase production checklist — spanning technical design, factory vetting, Golden Sample sign-off, AQL 2.5 inline quality control, and customs logistics — fashion brands eliminate supply chain surprises and protect collection launches.
          </p>
        </div>
      </section>

      {/* 5-Phase Checklist */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Master Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5-Phase Overseas Production Roadmap</h2>
          <div className="space-y-8">
            {phases.map((phase, pi) => (
              <div key={pi} className="overflow-hidden border border-[#333333]">
                <div className={`px-6 lg:px-8 py-4 ${phase.color}`}>
                  <h3 className="font-display text-xl font-medium">{phase.phase}</h3>
                </div>
                <ul className="divide-y divide-[#333333] bg-[#262626]">
                  {phase.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3 px-6 lg:px-8 py-4">
                      <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#E5DDD3] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
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
              { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", label: "How Apparel Manufacturing in Bangladesh Works" },
              { href: "/learn/what-to-know-before-sourcing-from-bangladesh", label: "What to Know Before Sourcing From Bangladesh" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-evaluate-an-overseas-clothing-manufacturer", label: "How to Evaluate an Overseas Manufacturer" },
              { href: "/learn/what-happens-after-clothing-manufactured-overseas", label: "What Happens After Clothing Is Manufactured" },
              { href: "/apparel-production-management-services", label: "Fenalt Production Management Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Start your overseas production project with Fenalt</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages overseas apparel production from Dhaka, Bangladesh — covering sampling, production oversight, quality control, and DDP export coordination.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
