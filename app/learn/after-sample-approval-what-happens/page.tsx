import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "What Happens After a Sample Is Approved?",
  description:
    "Discover the operational and administrative milestones immediately following sample approval — from golden sample sealing and CAD pattern grading to fabric milling, PO release, and bulk sewing.",
  alternates: {
    canonical: "https://fenalt.com/learn/after-sample-approval-what-happens",
  },
  openGraph: {
    title: "What Happens After a Sample Is Approved?",
    description:
      "Discover the operational and administrative milestones immediately following sample approval — from golden sample sealing and CAD pattern grading to fabric milling, PO release, and bulk sewing.",
    url: "https://fenalt.com/learn/after-sample-approval-what-happens",
  },
};

export default function AfterSampleApprovalWhatHappensPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Happens After a Sample Is Approved?",
    description:
      "An operational walkthrough of the transition from sample sign-off to bulk production authorization.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/after-sample-approval-what-happens",
    mainEntityOfPage: "https://fenalt.com/learn/after-sample-approval-what-happens",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "After Sample Approval", item: "https://fenalt.com/learn/after-sample-approval-what-happens" },
    ],
  };

  const steps = [
    {
      step: "1. Sealing the Golden Sample",
      desc: "The approved Pre-Production (PP) sample is physically signed, tagged, and sealed at the factory. One unit is retained on the production floor as the binding quality benchmark, while a duplicate signed unit is held by the brand team.",
    },
    {
      step: "2. Finalising Graded Pattern Files & CAD Markers",
      desc: "Pattern makers convert the approved base-size pattern into complete CAD size grading (e.g. XS through 3XL). Software marker making optimizes pattern layout across bulk fabric widths to maximize material yield and reduce waste.",
    },
    {
      step: "3. Issuing Commercial Purchase Order (PO) & Deposit",
      desc: "The brand issues a binding production PO detailing final order quantities per size and colourway, agreed unit prices, delivery terms (FOB or DDP), and releases the initial commercial production deposit.",
    },
    {
      step: "4. Bulk Material Milling, Dyeing & Lab Dip Matching",
      desc: "The factory orders bulk yarn, mills greige fabric, and executes Pantone-matched dyeing or fabric finishing according to the approved lab dip shade band.",
    },
    {
      step: "5. Procuring Custom Trims, Labels & Packaging",
      desc: "Custom woven neck labels, care tags, size clips, YKK zippers, custom drawcords, hangtags, and printed polybags are manufactured and delivered to the garment factory prior to bulk cutting.",
    },
    {
      step: "6. Production Line Allocation & Sewing Scheduling",
      desc: "Factory management reserves cutting tables, sets up specialised sewing lines (allocating lockstitch, overlock, and coverstitch stations), and assigns qualified machinists for bulk assembly.",
    },
    {
      step: "7. Setting Up Quality Inspection Checkpoints",
      desc: "Quality assurance teams establish in-line inspection points, define AQL 2.5 defect thresholds, and prepare needle detection equipment for pre-shipment auditing.",
    },
  ];

  const preCuttingGates = [
    {
      gate: "Approved Golden Sample",
      requirement: "Signed PP sample physically present at the production factory prior to fabric laying.",
    },
    {
      gate: "Fabric Inspection & Shade Matching",
      requirement: "Bulk fabric rolls inspected for weight (GSM), colour shade consistency, and width uniformity.",
    },
    {
      gate: "Complete BOM Trim Arrival",
      requirement: "100% of zippers, threads, care labels, and neck tags delivered and verified against tech pack specs.",
    },
    {
      gate: "Approved Graded Size Specs",
      requirement: "Graded measurement tables confirmed across all sizes with locked CAD pattern markers.",
    },
  ];

  const faqs = [
    {
      q: "Can I make design or fit changes after approving a sample?",
      a: "Making design changes after Pre-Production (PP) sample sign-off halts the production pipeline, incurs pattern re-grading and fabric scrap fees, and delays bulk delivery. Any changes requested post-approval require a formal commercial Change Order.",
    },
    {
      q: "How long after sample approval does bulk sewing actually start?",
      a: "Bulk cutting and sewing typically begin 2 to 4 weeks after PP sample sign-off. This lead time is required for bulk yarn milling, Pantone fabric dyeing, trim procurement, and CAD cutting marker preparation.",
    },
    {
      q: "Why is a duplicate Golden Sample kept by both the brand and factory?",
      a: "Retaining duplicate Golden Samples ensures both parties reference the exact physical standard. During in-line production and pre-shipment AQL inspections, auditors check live production garments directly against the factory's sealed Golden Sample.",
    },
    {
      q: "What happens if bulk fabric dyeing doesn't match the approved lab dip?",
      a: "The factory issues a shade band swatch showing acceptable color variance. If the bulk dye lot falls outside the approved shade band, the mill must re-dye or finish the fabric to match the signed lab dip reference before bulk cutting begins.",
    },
    {
      q: "What is the typical commercial deposit percentage required post-sample approval?",
      a: "Standard commercial production terms usually require a 30% to 50% deposit upon PO issuance, with the remaining balance payable against Bill of Lading (B/L) documents or prior to shipment release.",
    },
    {
      q: "How does Fenalt manage the transition from sample sign-off to bulk cutting?",
      a: "Fenalt's Dhaka operations team verifies that the Golden Sample is sealed on-site, inspects incoming bulk fabric rolls, monitors trim delivery against the BOM, and oversees line allocation in our partner micro-factories.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling &amp; Product Dev</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Happens After a Sample{" "}
            <span className="italic font-medium text-[#2D5016]">Is Approved?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sample sign-off triggers the transition from product development to mass manufacturing. Understand the operational, financial, and factory milestones that take place before bulk cutting.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <CheckSquare size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Transition Protocol</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Pre-Production sample sign-off converts design prototypes into <strong className="font-medium">binding production commitments</strong> — authorising bulk fabric milling, CAD marker cutting, and line allocation.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Approving a sample is the definitive bridge between product development and bulk manufacturing. Once sign-off is given in writing, the factory seals the physical Golden Sample and activates material procurement and line scheduling. Understanding what happens during this transitional period helps brands manage launch timelines accurately.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Post-Approval Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">7 Key Milestones to Bulk Cutting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.step}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Cutting Gates Section */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Safety</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">4 Non-Negotiable Gates Before Bulk Cutting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preCuttingGates.map((gate, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-[#2D5016]" />
                  <h3 className="font-display text-lg font-medium text-[#1A1A1A]">{gate.gate}</h3>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed">{gate.requirement}</p>
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
              { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
              { href: "/learn/apparel-production-process-explained", label: "The Apparel Production Process Explained Step by Step" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Usually Take?" },
              { href: "/apparel-production-management", label: "Fenalt Production Management Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Seamless transition to bulk production</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt seals your golden sample, manages bulk fabric procurement, and oversees line sewing to ensure exact sample fidelity.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Start Production <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
