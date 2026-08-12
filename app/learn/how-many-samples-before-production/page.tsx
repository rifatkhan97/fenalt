import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "How Many Samples Should a Fashion Brand Expect Before Production?",
  description:
    "Learn how many sampling rounds (typically 2 to 4) a clothing brand should expect prior to bulk manufacturing, and how to minimize sampling revisions.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-many-samples-before-production",
  },
  openGraph: {
    title: "How Many Samples Should a Fashion Brand Expect Before Production?",
    description:
      "Learn how many sampling rounds (typically 2 to 4) a clothing brand should expect prior to bulk manufacturing, and how to minimize sampling revisions.",
    url: "https://fenalt.com/learn/how-many-samples-before-production",
  },
};

export default function HowManySamplesBeforeProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Many Samples Should a Fashion Brand Expect Before Production?",
    description:
      "A realistic breakdown of sampling rounds, iteration expectations, and sample costs for clothing brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-many-samples-before-production",
    mainEntityOfPage: "https://fenalt.com/learn/how-many-samples-before-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How Many Samples Before Production", item: "https://fenalt.com/learn/how-many-samples-before-production" },
    ],
  };

  const samplingRounds = [
    { round: "Round 1: Proto Sample", focus: "Proportions, basic silhouette, pattern line accuracy. Expect minor measurement or drape adjustments." },
    { round: "Round 2: Revised Fit Sample", focus: "Incorporates Round 1 fit notes. Evaluates graded measurement accuracy and collar/pocket placements." },
    { round: "Round 3: Pre-Production (PP) Sample", focus: "Constructed with final bulk fabric, trims, labels, and wash. Final sign-off required." },
  ];

  const faqs = [
    {
      q: "Is it normal to need 3 or 4 sample revisions for a complex hoodie?",
      a: "Yes. Complex garments with specialized washes, puff printing, or custom hardware frequently require 3 sampling rounds to achieve perfection.",
    },
    {
      q: "How can I avoid excessive sampling rounds?",
      a: "Provide a detailed, complete tech pack with exact measurement specs, point-of-measure tolerances, and physical reference garments.",
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
            How Many Samples Should a Brand{" "}
            <span className="italic font-medium text-[#2D5016]">Expect Before Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Expecting a first sample to be 100% bulk-ready is a common misconception. Most garments require 2 to 3 revision rounds to refine fit and details.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Repeat size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Iteration Standard</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Standard commercial product development incorporates <strong className="font-medium">2 to 3 sampling iterations</strong> prior to bulk cutting.
            </p>
          </div>
        </div>
      </section>

      {/* Rounds */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Typical Timeline</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Standard Sampling Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {samplingRounds.map((sr, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{sr.round}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{sr.focus}</p>
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
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/why-samples-need-multiple-revisions", label: "Why Apparel Samples Sometimes Need Multiple Revisions" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/apparel-sampling-services", label: "Fenalt Apparel Sampling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Fast-track your sample approvals</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s pattern makers assist with tech pack optimization to reduce revision cycles and speed up pre-production sign-off.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
