import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "What Happens Between a Tech Pack and Bulk Production?",
  description:
    "Explore the crucial intermediate steps between completing your apparel tech pack and launching bulk garment production — from prototype sampling to final pre-production sign-off.",
  alternates: {
    canonical: "https://fenalt.com/learn/tech-pack-to-bulk-production",
  },
  openGraph: {
    title: "What Happens Between a Tech Pack and Bulk Production?",
    description:
      "Explore the crucial intermediate steps between completing your apparel tech pack and launching bulk garment production — from prototype sampling to final pre-production sign-off.",
    url: "https://fenalt.com/learn/tech-pack-to-bulk-production",
  },
};

export default function TechPackToBulkProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Happens Between a Tech Pack and Bulk Production?",
    description:
      "A step-by-step guide to the product development phase that bridges technical specification documents and full-scale garment manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/tech-pack-to-bulk-production",
    mainEntityOfPage: "https://fenalt.com/learn/tech-pack-to-bulk-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Tech Pack to Bulk Production", item: "https://fenalt.com/learn/tech-pack-to-bulk-production" },
    ],
  };

  const stages = [
    {
      step: "01",
      title: "Initial Factory Review & Quoting",
      body: "Upon receiving the tech pack, the manufacturer reviews it for completeness and production feasibility. They evaluate material requirements, estimate fabric yield per garment (consumption), identify any technical challenges in the construction, and issue a formal FOB or landed price quote. This review often surfaces tech pack errors or ambiguities that must be resolved before sampling can begin — which is why a complete, clear tech pack dramatically shortens this stage.",
    },
    {
      step: "02",
      title: "Pattern Making & Digital Grading",
      body: "Pattern makers translate the 2D measurement spec into physical or CAD master pattern pieces for the base sample size. Each panel — front body, back body, sleeve, hood, pocket, waistband, collar — is drafted to the specified dimensions with correct seam allowances and grainlines. The master pattern is then digitally graded across the full size run (S through XL, or whatever the brand specifies), with incremental measurements applied at each grading point.",
    },
    {
      step: "03",
      title: "Fabric Sourcing & Lab Dip Approval (Parallel Process)",
      body: "While pattern development proceeds, fabric sourcing begins simultaneously. The manufacturer identifies fabric suppliers matching the tech pack specification — fibre composition, GSM, knit or weave structure. For custom-coloured fabrics, dyeing labs produce lab dips (small swatches dyed to the brand's Pantone reference). The brand must formally approve lab dips in writing before bulk fabric is processed. This stage often runs in parallel with sampling but is frequently the critical path item that delays total timeline.",
    },
    {
      step: "04",
      title: "Proto / First Sample Creation",
      body: "The factory sews the initial prototype using available sample fabric (or actual bulk fabric if already sourced). The primary goal of the proto sample is validating the overall silhouette, proportions, and basic construction feasibility — not achieving final perfection. At this stage, the brand measures the sample against the POM spec sheet and evaluates fit on a model or dress form, then compiles written fit notes documenting every required adjustment.",
    },
    {
      step: "05",
      title: "Fit Evaluation & Revision Rounds",
      body: "The brand evaluates the prototype and returns written fit comments to the factory. Common revision notes include adjustments to specific measurements (e.g. 'widen chest by 2cm', 'lengthen back body by 1.5cm'), construction corrections (e.g. 'raglan sleeve seam is puckering — reduce tension'), or aesthetic changes (e.g. 'hood opening needs to be wider'). The factory revises the pattern and re-sews the sample. Brands typically require two to four revision rounds before reaching sign-off, depending on tech pack quality and design complexity.",
    },
    {
      step: "06",
      title: "Lab Dips & Material Approval",
      body: "Dyeing facilities produce small fabric swatches or print strike-offs to match Pantone colour specifications. The brand must formally approve colour accuracy and hand-feel in writing. Lab dip rejection and resubmission is common — most colours require two to three lab dip rounds before an acceptable match is achieved, which is why this process should begin as early as possible in the development phase. Bulk fabric cannot be processed without written lab dip approval.",
    },
    {
      step: "07",
      title: "Pre-Production (PP) Sample Sign-Off",
      body: "Made from the exact bulk fabric, with all production trims, woven labels, and wash treatments applied — sewn at the production factory. The PP sample is the brand's final quality gate before mass cutting begins. Once the PP sample is signed off in writing, it becomes the Golden Sample, retained at the factory as the binding quality benchmark against which all bulk units are inspected throughout production. No bulk fabric should be cut until the PP sample is formally approved.",
    },
    {
      step: "08",
      title: "Purchase Order Issuance & Deposit Payment",
      body: "A formal Purchase Order is issued by the brand documenting the exact quantities per size per colourway, agreed unit price, delivery terms, and payment schedule. Standard commercial practice is an initial deposit (typically 30–50% of total order value) upon PO issuance and acceptance, with the balance payable before or upon shipment. The deposit triggers fabric procurement at bulk quantity. Without a PO and deposit, most factories will not commit production scheduling resources.",
    },
  ];

  const delaysInDev = [
    { cause: "Incomplete tech pack", impact: "Pattern maker must request clarification before starting — adds days or weeks before first sample is produced." },
    { cause: "Lab dip rejection cycles", impact: "Each rejected lab dip requires a new dye run and return shipment. Two to four rounds are common for custom colours, adding 2–4 weeks." },
    { cause: "Slow feedback from brand", impact: "Each day of delayed fit comment response adds a day to the overall timeline. Revision cycles compound quickly." },
    { cause: "Multiple revision rounds", impact: "Each revision round on a first-time style adds 1–3 weeks — more if samples are shipped internationally for in-person review." },
    { cause: "Fabric mill lead time", impact: "Custom fabric may not be available for 3–5 weeks from mill. If sourcing starts late, it delays the PP sample even after fit is approved." },
  ];

  const signOffRequirements = [
    "Approved Golden (PP) Sample physically signed and tagged",
    "Confirmed shade band & approved lab dips for bulk dyeing",
    "Final graded spec sheet signed by brand's technical representative",
    "Production purchase order (PO) issued with exact size ratio breakdown",
    "Custom trimmings (woven labels, care tags, hangtags, packaging) approved and ordered",
    "Deposit payment cleared according to agreed commercial terms",
  ];

  const faqs = [
    {
      q: "How long does the transition from tech pack to bulk production usually take?",
      a: "Depending on fabric availability, custom dyeing requirements, and the number of sample revision rounds, this product development phase typically takes 6 to 10 weeks before bulk cutting begins. Brands with complete, accurate tech packs and fast feedback cycles can sometimes complete development in 4 to 6 weeks. First-time projects with multiple revision rounds and custom dyeing often take 8 to 12 weeks.",
    },
    {
      q: "Can I skip the prototype sample and go straight to PP sample?",
      a: "Skipping the prototype phase is high risk unless you are reordering a previously proven silhouette from the same factory using the same fabric. For new styles, skipping prototype fitting frequently results in bulk production errors — incorrect measurements, poor proportions, or construction failures — that could have been identified and corrected at sample cost. The sampling phase is an investment that protects the bulk order.",
    },
    {
      q: "What is the difference between a fit sample and a PP sample?",
      a: "A fit sample (or proto sample) is made to test the pattern — usually from available sample fabric, not necessarily the production fabric. Its purpose is to validate silhouette, measurements, and construction feasibility. A PP (pre-production) sample is made from the actual bulk production fabric, at the actual production factory, with all final trims and labels in place. The PP sample becomes the Golden Sample — the binding quality standard for bulk production.",
    },
    {
      q: "What happens if the PP sample is not approved?",
      a: "If the PP sample fails to meet the approved standard — for example, the fabric weight is incorrect, a seam is constructed differently from the approved fit sample, or label placement is wrong — the brand should reject it in writing and specify exactly what corrections are required. The factory must revise and resubmit a corrected PP sample before bulk cutting begins. Never approve a PP sample under time pressure if it contains genuine quality failures.",
    },
    {
      q: "How many revision rounds are normal for a first collection?",
      a: "Two to four revision rounds is typical for a first collection with a new manufacturer working from a custom tech pack. One revision round may be sufficient if the tech pack is exceptionally detailed and the manufacturer has strong experience in the product category. More than four rounds usually indicates either a significant tech pack problem or a communication breakdown that warrants review of the manufacturer relationship.",
    },
    {
      q: "What should I do while waiting for a sample from the factory?",
      a: "Use the waiting period productively: finalise label and packaging artwork, confirm your size breakdown for the production manifest, complete any import compliance documentation required for your destination country, and coordinate with your freight forwarder on shipping logistics. Delays caused by incomplete packaging artwork are among the most common causes of post-production holds at the factory before dispatch.",
    },
    {
      q: "Does Fenalt manage the product development phase?",
      a: "Yes. Fenalt manages the complete development pipeline from tech pack review through pattern development, sampling, lab dip management, and PP sample approval. Brands submit their project to Fenalt who coordinates all stages with partner micro-factories in Dhaka and provides transparent progress communication throughout.",
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
            What Happens Between a Tech Pack{" "}
            <span className="italic font-medium text-[#2D5016]">and Bulk Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Completing a tech pack is a critical milestone, but it is not the start of bulk production. Here is the step-by-step product development journey that turns technical drawings into production-ready garments.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">The Development Bridge</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The period between submitting a tech pack and initiating bulk sewing is called <strong className="font-medium">Product Development</strong>. It is where design concepts are physically tested, refined, and validated — and where the quality of the final bulk order is determined.
            </p>
          </div>
          <p className="text-base lg:text-lg text-[#6B6560] leading-relaxed">
            Rushing through this stage to meet an arbitrary deadline is the single largest cause of sizing defects, fabric problems, and construction failures in garment bulk production. Every day saved in development is typically worth two to three days of rework cost on the other side.
          </p>
        </div>
      </section>

      {/* 8 Stages */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Development Lifecycle</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Critical Steps Before Bulk Cutting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-light text-[#C8A882] shrink-0 w-10">
                    {st.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common development delays */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">What Slows Development Down</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Common Causes of Development Delays</h2>
          <div className="space-y-4">
            {delaysInDev.map((d, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{d.cause}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{d.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist box */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Milestone Verification</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-8">Essential Sign-Off Requirements Before Bulk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {signOffRequirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
                <CheckCircle2 size={16} className="text-[#C8A882] mt-0.5 shrink-0" />
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{req}</p>
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

      {/* Related Links */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Usually Take?" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Can Prepare for Their First Production Run" },
              { href: "/learn/types-of-apparel-samples", label: "Types of Apparel Samples Explained" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Brands" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Navigating product development?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages the complete sampling and development phase — ensuring your tech pack translates accurately into production-ready garments.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
