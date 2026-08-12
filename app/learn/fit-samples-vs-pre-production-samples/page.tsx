import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Fit Samples vs Pre-Production Samples: Key Differences",
  description:
    "Compare Fit Samples against Pre-Production (PP) Samples — understanding their distinct purposes, fabric requirements, and role in bulk sign-off.",
  alternates: {
    canonical: "https://fenalt.com/learn/fit-samples-vs-pre-production-samples",
  },
  openGraph: {
    title: "Fit Samples vs Pre-Production Samples: Key Differences",
    description:
      "Compare Fit Samples against Pre-Production (PP) Samples — understanding their distinct purposes, fabric requirements, and role in bulk sign-off.",
    url: "https://fenalt.com/learn/fit-samples-vs-pre-production-samples",
  },
};

export default function FitSamplesVsPreProductionSamplesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fit Samples vs Pre-Production Samples: Key Differences",
    description:
      "A technical comparison of fit samples versus pre-production (PP) samples in clothing manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/fit-samples-vs-pre-production-samples",
    mainEntityOfPage: "https://fenalt.com/learn/fit-samples-vs-pre-production-samples",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Fit Samples vs Pre-Production Samples", item: "https://fenalt.com/learn/fit-samples-vs-pre-production-samples" },
    ],
  };

  const comparisonPoints = [
    { factor: "Primary Objective", fit: "Validate pattern dimensions, drape, and sizing ergonomics on a fit model.", pp: "Lock in final production standard (Golden Sample) for bulk sewing." },
    { factor: "Fabric & Material Used", fit: "Substitute/available in-house fabric of similar GSM and stretch.", pp: "Exact bulk production fabric, dyed colorway, and approved trims." },
    { factor: "Trims & Labels", fit: "Generic stock zippers/threads; labels often omitted.", pp: "Exact brand woven labels, care tags, custom zippers, and hangtags." },
    { factor: "Timing in Lifecycle", fit: "Early product development phase (Phase 2).", pp: "Immediately preceding bulk cutting (Phase 4)." },
  ];

  const faqs = [
    {
      q: "Can I use the Fit Sample as my Pre-Production (PP) Sample?",
      a: "Only if the fit sample was produced using the exact final bulk fabric, dye lot, and custom trims. In most cases, a separate PP sample is required for formal sign-off.",
    },
    {
      q: "What happens after the Pre-Production (PP) Sample is approved?",
      a: "The PP sample is signed, physically tagged, and sealed at the factory. Bulk cutting and line sewing begin immediately according to the approved PP sample standard.",
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
            Fit Samples vs Pre-Production Samples:{" "}
            <span className="italic font-medium text-[#2D5016]">Key Differences.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Fit samples test pattern geometry, while Pre-Production (PP) samples establish the binding contract standard for bulk manufacturing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Comparative Breakdown</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Confusing a Fit Sample for a PP Sample is a common mistake. <strong className="font-medium">Fit samples test cut &amp; proportion; PP samples test bulk execution readiness.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Direct Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Operational Differences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonPoints.map((cp, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{cp.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Fit Sample</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{cp.fit}</p>
                  </div>
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Pre-Production (PP) Sample</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{cp.pp}</p>
                  </div>
                </div>
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
              { href: "/learn/types-of-apparel-samples", label: "The Different Types of Apparel Samples Explained" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Precision sampling for growing labels</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt guides brands through every sampling phase — delivering exact fit samples and sealed pre-production golden samples.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
