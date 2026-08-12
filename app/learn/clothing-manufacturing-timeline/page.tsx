import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "How Long Does Clothing Manufacturing Usually Take?",
  description:
    "A realistic guide to clothing manufacturing timelines — what each stage takes, what causes delays, and how to build a production schedule that actually works.",
  alternates: { canonical: "https://fenalt.com/learn/clothing-manufacturing-timeline" },
  openGraph: {
    title: "How Long Does Clothing Manufacturing Usually Take?",
    description: "A realistic guide to clothing manufacturing timelines — what each stage takes, what causes delays, and how to build a production schedule that actually works.",
    url: "https://fenalt.com/learn/clothing-manufacturing-timeline",
  },
};

export default function ClothingManufacturingTimelinePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Long Does Clothing Manufacturing Usually Take?",
    description: "Realistic guide to clothing manufacturing timelines — stage-by-stage breakdown and delay causes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/clothing-manufacturing-timeline",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Clothing Manufacturing Timeline", item: "https://fenalt.com/learn/clothing-manufacturing-timeline" },
    ],
  };

  const stages = [
    {
      stage: "Design Finalisation & Tech Pack",
      timeRange: "1–4 weeks",
      notes: "Varies widely depending on whether the brand has design documentation ready or is starting from scratch. Brands with complete tech packs can move immediately to the next stage. Brands beginning with a sketch may need 2 to 4 weeks to develop a complete tech pack.",
      variable: "High — brand's readiness is the primary factor",
    },
    {
      stage: "Manufacturer Selection & Brief Submission",
      timeRange: "1–3 weeks",
      notes: "Sending a brief, receiving responses, evaluating options, and confirming a manufacturer. This stage is often underestimated — manufacturers have intake queues and may not begin immediately on receipt.",
      variable: "Medium — depends on manufacturer availability",
    },
    {
      stage: "Fabric Sourcing & Material Procurement",
      timeRange: "2–5 weeks",
      notes: "The most frequently overlooked stage. Fabric mills often have minimum run quantities and their own production queues. Lab dip approval (dyeing a fabric swatch to your colour and waiting for sign-off) adds 1 to 2 weeks per colourway. This stage often runs in parallel with sampling but limits total timeline if fabrics are not sourced early.",
      variable: "High — mill lead times are outside brand and manufacturer control",
    },
    {
      stage: "First Fit Sample",
      timeRange: "1–3 weeks",
      notes: "The time to produce the first physical prototype after pattern approval. Fenalt's estimated turnaround for prototype fit samples is 10 to 14 days following tech pack and pattern approval, subject to material availability.",
      variable: "Low to Medium — depends on tech pack quality and material availability",
    },
    {
      stage: "Sample Revision Rounds",
      timeRange: "1–3 weeks per round",
      notes: "Each revision round requires the manufacturer to rework or re-sew the sample and return it. For international shipping, allow 5 to 10 business days per sample transit. Brands often require 2 to 4 revision rounds on a first collection with a new manufacturer.",
      variable: "High — number of rounds depends on tech pack completeness and feedback clarity",
    },
    {
      stage: "Pre-Production Sample (PP Sample)",
      timeRange: "1–2 weeks",
      notes: "After final fit approval, a PP sample is made from the actual production fabric by the production factory. This is reviewed and signed off before bulk begins.",
      variable: "Low",
    },
    {
      stage: "Bulk Production",
      timeRange: "4–8 weeks",
      notes: "Depends on order size, garment complexity, and factory scheduling. Fenalt estimates bulk production at 4 to 6 weeks following final fit approval, depending on order scale and material procurement. Complex constructions or high-embellishment garments may take longer.",
      variable: "Medium — larger orders and complex constructions add time",
    },
    {
      stage: "Pre-Shipment Quality Inspection",
      timeRange: "3–7 days",
      notes: "A pre-shipment inspection must be booked in advance. Allow 3 to 7 business days for inspection and report — and additional time for any rework if issues are found.",
      variable: "Low (unless rework is required)",
    },
    {
      stage: "Shipping & Customs Clearance",
      timeRange: "Sea: 20–40 days | Air: 5–10 days",
      notes: "Sea freight from Bangladesh to Europe, North America, or Australia typically takes 20 to 35 days by ocean. Air freight is 5 to 10 days but is significantly more expensive per kilogram. Customs clearance adds 2 to 5 business days after arrival depending on destination country.",
      variable: "Low (routing is predictable) — high only if customs delays occur",
    },
  ];

  const totalTimelines = [
    { scenario: "Best Case (Ready Tech Pack, Smooth Sampling)", weeks: "14–18 weeks", detail: "Tech pack ready on day 1, 1–2 sample rounds, no delays, sea freight." },
    { scenario: "Typical First Collection", weeks: "20–28 weeks", detail: "Tech pack development required, 2–4 sample rounds, standard timelines, sea freight." },
    { scenario: "Complex or Premium Collection", weeks: "28–36 weeks", detail: "Multiple colourways, extensive sampling, specialist fabrics, certification requirements." },
  ];

  const delayFactors = [
    "Incomplete or frequently changed tech pack requiring multiple revision rounds",
    "Fabric sourcing delays — mill lead times, lab dip re-approvals, minimum run quantities",
    "Unclear or late feedback on samples — adding days to revision cycles",
    "Factory scheduling conflicts — peak production seasons (pre-CNY, pre-Q4)",
    "Customs delays on import — particularly for first-time importers or new HS codes",
    "Public holidays in the manufacturing country (e.g. Eid in Bangladesh) — typically 1–2 week closure periods",
  ];

  const faqs = [
    {
      q: "What is the fastest possible manufacturing timeline?",
      a: "For a brand with a complete tech pack, working with an established manufacturer, using in-stock fabric, and accepting air freight — a first order can potentially be completed in 10 to 14 weeks from brief to delivery. However, this scenario requires everything to go smoothly and multiple stages to proceed without delays or revision rounds. It is not a reliable planning assumption for a first project.",
    },
    {
      q: "What are Fenalt's production timeline estimates?",
      a: "Fenalt estimates prototype fit sample turnaround at 10 to 14 days following tech pack and pattern approval. Bulk production runs are estimated at 4 to 6 weeks following final fit approval, depending on order scale and material procurement. These are estimates — actual timelines depend on garment complexity, fabric sourcing, and revision rounds.",
    },
    {
      q: "How much time buffer should a brand plan?",
      a: "Allow at minimum 4 weeks of buffer beyond your estimated timeline for any production project. For a first collection with a new manufacturer, plan for 6 to 8 weeks of buffer. Buffer absorbs the most common delay sources: sample revision rounds, fabric sourcing delays, and shipping irregularities.",
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
            How Long Does Clothing Manufacturing{" "}
            <span className="italic font-medium text-[#2D5016]">Usually Take?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            The most common planning mistake in fashion production is an underestimated timeline. This guide gives you a realistic, stage-by-stage breakdown — with the honest variables that most production guides skip over.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">Estimates based on general industry knowledge — Fenalt-specific estimates are qualified and verified</p>
        </div>
      </section>

      {/* Stage breakdown */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Stage-by-Stage Breakdown</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">9 Stages and Their Typical Durations</h2>
          <div className="space-y-4">
            {stages.map((stage, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <span className="font-display text-3xl font-light text-[#E5DDD3] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#1A1A1A]">{stage.stage}</h3>
                    <span className="inline-block mt-1 px-3 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">{stage.timeRange}</span>
                  </div>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed ml-10 mb-2">{stage.notes}</p>
                <p className="text-xs text-[#9B948E] ml-10"><span className="font-semibold">Variability:</span> {stage.variable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Total timeline scenarios */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Total Timeline Scenarios</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">What to Expect End-to-End</h2>
          <div className="space-y-4">
            {totalTimelines.map((t, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#2A2A2A] border border-[#3A3A3A]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{t.scenario}</h3>
                  <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider shrink-0">{t.weeks}</span>
                </div>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#9B948E]">Timeline estimates are general industry guidance. Actual timelines vary by garment complexity, fabric availability, revision rounds, and logistics. Plan with buffer — not best-case assumptions.</p>
        </div>
      </section>

      {/* Delay causes */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Most Common Causes of Delay</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">What Actually Pushes Timelines</h2>
          <div className="space-y-3">
            {delayFactors.map((factor, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#262626] border border-[#333333]">
                <span className="text-[#C8A882] mt-0.5 shrink-0 text-lg">⚠</span>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{factor}</p>
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

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for Their First Production Run" },
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample?" },
              { href: "/apparel-production-management", label: "Fenalt: Apparel Production Management" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Managed production with transparent timelines</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides realistic production timeline estimates from day one — with Dhaka-based oversight at every stage to keep projects on track.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
