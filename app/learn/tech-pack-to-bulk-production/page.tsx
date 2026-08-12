import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "What Happens Between a Tech Pack and Bulk Production?",
  description:
    "Explore the crucial intermediate steps between completing your apparel tech pack and launching bulk garment production — from prototype sampling to final sign-off.",
  alternates: {
    canonical: "https://fenalt.com/learn/tech-pack-to-bulk-production",
  },
  openGraph: {
    title: "What Happens Between a Tech Pack and Bulk Production?",
    description:
      "Explore the crucial intermediate steps between completing your apparel tech pack and launching bulk garment production — from prototype sampling to final sign-off.",
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
      body: "The factory analyzes the tech pack to evaluate feasibility, calculate yield (fabric consumption per garment), and issue a formal FOB or landed price quote along with estimated sampling timelines.",
    },
    {
      step: "02",
      title: "Pattern Making & Digital Grading",
      body: "Pattern makers translate your 2D measurement spec into physical or CAD master pattern pieces. The master pattern is then digitally graded across your target size run (S through XL).",
    },
    {
      step: "03",
      title: "Proto / First Sample Creation",
      body: "The factory sews the initial prototype using available sample fabric (or actual bulk fabric if on hand). The primary goal is validating overall silhouette, proportions, and basic construction feasibility.",
    },
    {
      step: "04",
      title: "Fit Evaluation & Revision Rounds",
      body: "The brand evaluates the prototype on a fit model or mannequin. Measurements are taken against the spec sheet, and required adjustments (e.g., shortening chest width by 1.5 cm) are communicated in fit notes.",
    },
    {
      step: "05",
      title: "Lab Dips & Material Approval",
      body: "Dyeing facilities produce small fabric swatches (lab dips) or print strike-offs to match your Pantone color specifications. The brand must formally approve color and handfeel before bulk fabric processing.",
    },
    {
      step: "06",
      title: "Pre-Production (PP) Sample Sign-Off",
      body: "Made with exact bulk fabric, trims, labels, and wash treatments. Once approved, this sample becomes the 'Golden Sample' — the binding quality standard for the entire production run.",
    },
  ];

  const faqs = [
    {
      q: "How long does the transition from tech pack to bulk production usually take?",
      a: "Depending on fabric availability, custom dyeing requirements, and the number of sample revision rounds, this product development phase typically takes 4 to 8 weeks before bulk cutting begins.",
    },
    {
      q: "Can I skip the prototype sample and go straight to PP sample?",
      a: "Skipping proto sampling is risky unless you are reordering a previously proven silhouette using standard stock fabrics. For new styles, skipping prototype fitting often leads to costly bulk production errors.",
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
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">The Development Bridge</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The period between submitting a tech pack and initiating bulk sewing is known as <strong className="font-medium">Product Development (Sampling & Pre-Production)</strong>. It is where design concepts are physically tested, refined, and validated.
            </p>
          </div>
          <p className="text-base lg:text-lg text-[#6B6560] leading-relaxed">
            Rushing through this stage to meet an arbitrary deadline is the number one cause of sizing defects, fabric shrinkage issues, and misaligned artwork in mass manufacturing.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Development Lifecycle</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">6 Critical Steps Before Bulk Cutting</h2>
          <div className="space-y-6">
            {stages.map((st, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-light text-[#C8A882] shrink-0 w-10">
                    {st.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{st.title}</h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">{st.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist box */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Milestone Verification</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-8">Essential Sign-Off Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Approved Golden (PP) Sample physically signed and tagged",
              "Confirmed shade band & approved lab dips for bulk dyeing",
              "Final graded spec sheet signed by technical designer",
              "Production purchase order (PO) issued with exact size ratio",
              "Custom trimmings (woven labels, care tags, packaging) verified",
              "Deposit payment cleared according to factory commercial terms",
            ].map((req, i) => (
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Navigating product development?</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages the complete sampling and development phase — ensuring your tech pack translates accurately into production-ready garments.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
