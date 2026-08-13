import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Clothing Sample and Why Is It Important?",
  description:
    "A clothing sample is a physical prototype garment made before bulk production. Learn what samples are, the types, why they exist, and why skipping them is one of the most costly mistakes a brand can make.",
  alternates: { canonical: "https://fenalt.com/learn/what-is-a-clothing-sample" },
  openGraph: {
    title: "What Is a Clothing Sample and Why Is It Important?",
    description: "A clothing sample is a physical prototype garment made before bulk production. Learn what samples are, the types, why they exist, and why skipping them is one of the most costly mistakes a brand can make.",
    url: "https://fenalt.com/learn/what-is-a-clothing-sample",
  },
};

export default function WhatIsAClothingSamplePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Clothing Sample and Why Is It Important?",
    description: "Clothing samples explained — types, purpose, and why they are essential before bulk production.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-is-a-clothing-sample",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is a Clothing Sample", item: "https://fenalt.com/learn/what-is-a-clothing-sample" },
    ],
  };

  const sampleTypes = [
    {
      name: "Proto Sample (Prototype)",
      purpose: "The first physical garment sewn from the pattern. Used to check overall silhouette, proportions, and construction concept.",
      material: "Often in substitute fabric — exact target fabric may not be sourced yet.",
      stage: "Very Early",
      whyItMatters: "Catches fundamental design flaws — wrong proportions, non-functional construction — before investing in final materials. Issues identified here cost one sample to fix; the same issue identified at bulk costs the entire production run.",
    },
    {
      name: "Fit Sample (First Fit)",
      purpose: "Sewn with closer-to-final fabric to assess how the garment fits on a body or dress form. Measurements are checked against the tech pack POM sheet.",
      material: "Target or similar fabric.",
      stage: "Development",
      whyItMatters: "The primary technical quality gate for measurement accuracy. Ensures the graded pattern fits correctly before advancing to production-grade materials.",
    },
    {
      name: "Pre-Production Sample (PP Sample)",
      purpose: "Made from the actual production fabric, by the actual production factory. This is the critical approval gate before bulk production begins.",
      material: "Exact production fabric, trims, and labels.",
      stage: "Pre-Production",
      whyItMatters: "The PP sample becomes the Golden Sample — the binding contractual quality standard. Every bulk production unit is compared against it. No bulk cutting should begin without PP approval in writing.",
    },
    {
      name: "Golden Sample / Salesperson Sample (SMS)",
      purpose: "The final approved sample that serves as the binding quality standard for the bulk production run. QC inspectors check bulk production against this sample.",
      material: "Production-grade in all respects.",
      stage: "Production Reference",
      whyItMatters: "Retained at the factory throughout the bulk run. Without a Golden Sample, QC inspectors have no fixed physical standard to compare production against — making meaningful inspection impossible.",
    },
    {
      name: "Counter Sample",
      purpose: "A sample sent by the manufacturer to confirm they have understood revisions or new instructions. Brands review and approve before continuing.",
      material: "Varies by stage.",
      stage: "Revision Confirmation",
      whyItMatters: "Prevents miscommunication. Before acting on a verbal or written correction, the factory proves their interpretation is correct with a physical counter sample.",
    },
  ];

  const whySamplingMatters = [
    { reason: "Fit cannot be reliably verified from a spec sheet alone", detail: "Pattern dimensions on paper do not fully predict how a garment sits, drapes, and behaves on a moving body. Physical sampling bridges the gap between 2D documentation and real-world wearability." },
    { reason: "Fabric behaviour is unpredictable without testing", detail: "Knit fabrics grow and relax differently depending on GSM, yarn composition, and finishing. Only a physical sample can confirm that the fabric behaves as required — particularly after washing." },
    { reason: "Corrections are exponentially cheaper pre-bulk", detail: "A measurement error discovered in a single sample costs the price of one revised sample. The same error discovered in 500 completed bulk units costs rework fees, delay, and potentially the entire production run." },
    { reason: "The PP sample creates a binding quality contract", detail: "Without an approved PP sample, QC inspectors at the factory have no fixed standard to inspect against. The result is subjective quality assessment — inconsistent and unenforceable." },
    { reason: "Sampling reveals manufacturer capability", detail: "How a manufacturer handles the first sample — the accuracy, the construction quality, the communication — is the clearest predictor of how they will behave during a high-pressure bulk run." },
  ];

  const faqs = [
    {
      q: "How many rounds of sampling should a brand expect?",
      a: "For a first-time production run with a new manufacturer, 2 to 4 sample rounds is common before reaching PP sample sign-off. Simple garments with detailed tech packs can sometimes achieve approval in 1 to 2 rounds. Complex garments with multiple panels, special materials, or intricate construction can require more. Each revision round adds 1 to 3 weeks to the pre-production timeline.",
    },
    {
      q: "Do I need to pay for samples?",
      a: "Yes. Samples cost more per unit than bulk production because they are made individually — requiring dedicated pattern engineering, small-quantity fabric sourcing, and skilled construction outside the efficiency of a normal production line. Sampling fees vary widely by garment complexity, from $30 for a simple knit to several hundred dollars for a complex woven structure. Some manufacturers credit sampling fees against the bulk order value on PO placement.",
    },
    {
      q: "Does Fenalt create physical samples?",
      a: "Yes. Fenalt's Dhaka sample room builds physical prototype fit samples with an estimated turnaround of 10 to 14 days following tech pack and pattern approval. This covers first-fit prototypes, revision rounds, and pre-production sample sign-off — all managed by Fenalt's on-the-ground team.",
    },
    {
      q: "Can I evaluate samples remotely instead of in person?",
      a: "Remote sample evaluation is possible and common for brands in different countries. High-resolution photography (flat lay and on-body), measurement verification photos against a tape measure, and video walkthroughs can support remote review. However, remote evaluation cannot replicate the hand-feel, drape, or three-dimensional proportions that in-person evaluation provides. For first-round evaluation of a new style, in-person or physical receipt review provides more reliable sign-off.",
    },
    {
      q: "What is the difference between a sample and a prototype?",
      a: "In common usage, prototype and sample are often used interchangeably for the first physical garment. More technically, 'prototype' typically refers to the very first test construction (usually in substitute fabric) and 'sample' refers to subsequent iterations made in progressively more accurate materials. A pre-production sample specifically refers to the final-material, production-standard garment made before bulk cutting.",
    },
    {
      q: "What should I check when evaluating a clothing sample?",
      a: "Measure every point of measure on your spec sheet and compare against targets within tolerance. Evaluate fit on a live model or standard dress form in the sample size. Check: does the silhouette match the design intent? Do pockets function? Does the fabric drape as intended? Is the stitching even and secure? Are prints or embroidery correctly placed? Document all observations in writing with specific measurements, not general impressions.",
    },
    {
      q: "What happens to the sample after bulk production is approved?",
      a: "The approved PP sample becomes the Golden Sample and is physically tagged and retained at the production factory throughout the bulk run. It serves as the reference standard for in-line and pre-shipment quality inspections. After the production run is complete, the Golden Sample may be returned to the brand, retained by the factory for future reorders, or archived. Most brands request its return for their own records.",
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

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling & Product Dev</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Is a Clothing Sample{" "}
            <span className="italic font-medium text-[#2D5016]">and Why Is It Important?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A clothing sample is a physical prototype garment produced before bulk manufacturing to test fit, construction, and quality. This guide explains the sample types, the sampling process, and why skipping it is one of the costliest decisions a brand can make.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition box */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4 block">Definition</span>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">clothing sample</strong> is a single physical garment produced before bulk manufacturing — used to test that the design, measurements, construction, fabric, and overall quality meet the brand&apos;s standard before committing to a full production run.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-4">
            <p>
              Samples are not optional extras for cautious brands — they are the mechanism that protects a brand&apos;s investment in bulk production. A bulk production run of 500 units made without sampling is 500 units manufactured to an unverified standard. If the fit is wrong, the construction is incorrect, or the fabric behaves differently than expected, every unit has the same problem — with no practical remedy after the fact.
            </p>
            <p>
              Sampling introduces a structured approval process that separates design development from mass production. Each stage isolates a specific category of variable, creating a verifiable quality gate before advancing to the next phase.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Sample Types */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Sample Types</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Types of Clothing Samples</h2>
          <div className="space-y-5">
            {sampleTypes.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{st.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#2D5016] text-[#FAF9F6] ml-4 shrink-0">{st.stage}</span>
                </div>
                <p className="text-xs text-[#C8A882] mb-3 font-semibold">{st.purpose}</p>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-3">{st.whyItMatters}</p>
                <p className="text-xs text-[#9B948E]"><span className="font-semibold text-[#E5DDD3]">Material:</span> {st.material}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why sampling matters */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Why It Matters</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">5 Reasons Sampling Cannot Be Skipped</h2>
          <div className="space-y-4">
            {whySamplingMatters.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <CheckCircle2 size={18} className="text-[#2D5016] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{item.reason}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{item.detail}</p>
                </div>
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

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/types-of-apparel-samples", label: "The 7 Types of Apparel Samples Explained" },
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/learn/how-many-samples-before-production", label: "How Many Samples Should a Brand Expect?" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Sample" },
              { href: "/apparel-sampling-services", label: "Fenalt Sampling Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Commission a prototype sample</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt develops precision prototype fit samples and pre-production samples from your tech pack — with Dhaka-based turnaround and expert oversight.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Sampling Request <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
