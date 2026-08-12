import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Apparel Samples Sometimes Need Multiple Revisions",
  description:
    "Explore the top reasons garment samples require multiple revisions - fabric shrinkage variance, tech pack measurement errors, pattern grading shifts, and wash treatment effects.",
  alternates: {
    canonical: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
  },
  openGraph: {
    title: "Why Apparel Samples Sometimes Need Multiple Revisions",
    description:
      "Explore the top reasons garment samples require multiple revisions - fabric shrinkage variance, tech pack measurement errors, pattern grading shifts, and wash treatment effects.",
    url: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
  },
};

export default function WhySamplesNeedMultipleRevisionsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Apparel Samples Sometimes Need Multiple Revisions",
    description:
      "A technical explanation of why apparel sampling requires multiple iterations and how brands can reduce revision counts.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
    mainEntityOfPage: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Why Samples Need Multiple Revisions", item: "https://fenalt.com/learn/why-samples-need-multiple-revisions" },
    ],
  };

  const reasons = [
    { title: "1. Fabric Handfeel & Shrinkage Discrepancies", desc: "Sample fabric behavior changes post-wash. Heavy cottons and French Terry stretch or contract differently than flat paper pattern templates predict." },
    { title: "2. Vague or Contradictory Tech Pack Specs", desc: "Missing point-of-measure (POM) tolerances or incomplete seam construction notes force sample machinists to make educated guesses." },
    { title: "3. Subjective Drape & Proportion Adjustments", desc: "Seeing a 3D garment on a fit model often reveals aesthetic adjustments (e.g. dropping shoulders by 2 cm) that look perfect in 2D sketches but need physical refinement." },
    { title: "4. Wash Treatment & Dye Shrinkage Impact", desc: "Enzyme washes, acid washes, or silicone softeners alter fabric structure, requiring pattern compensations during cut-and-sew." },
  ];

  const faqs = [
    {
      q: "Does requesting a second sample revision mean the factory is incompetent?",
      a: "No. Multi-round sampling is standard industrial practice. The purpose of sampling is specifically to catch and refine pattern and fabric variables before bulk production.",
    },
    {
      q: "How can I reduce sample revision delays?",
      a: "Provide clear fit notes with high-resolution photos showing measuring tape alignments, send physical reference garments, and designate a single decision-maker for fit approvals.",
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
            Why Apparel Samples Sometimes{" "}
            <span className="italic font-medium text-[#2D5016]">Need Multiple Revisions.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sample revisions are not failures - they are the necessary engineering iterations that guarantee flawless bulk garment execution.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Iteration Rationale</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Sampling bridges abstract 2D designs and physical 3D garments. <strong className="font-medium">Fabric elasticity, wash treatments, and pattern geometry</strong> interact dynamically in prototype sewing.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Key Factors</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Drivers of Sample Revisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{r.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{r.desc}</p>
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

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/how-many-samples-before-production", label: "How Many Samples Should a Fashion Brand Expect Before Production?" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/apparel-sampling-services", label: "Fenalt Professional Sampling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision pattern engineering</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s pattern makers analyze sample revisions systematically - adjusting CAD templates to achieve perfect fit sign-off.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
