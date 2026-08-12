import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Give Useful Feedback on a Clothing Sample",
  description:
    "Learn how to write actionable, precise sample fit feedback for your clothing manufacturer — using measuring tapes, reference photos, and clear POM delta callouts.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-give-sample-feedback",
  },
  openGraph: {
    title: "How to Give Useful Feedback on a Clothing Sample",
    description:
      "Learn how to write actionable, precise sample fit feedback for your clothing manufacturer — using measuring tapes, reference photos, and clear POM delta callouts.",
    url: "https://fenalt.com/learn/how-to-give-sample-feedback",
  },
};

export default function HowToGiveSampleFeedbackPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Give Useful Feedback on a Clothing Sample",
    description:
      "A technical guide for fashion brand founders on structuring clear, actionable sample fit comments and measurement revision requests.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-give-sample-feedback",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-give-sample-feedback",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Give Sample Feedback", item: "https://fenalt.com/learn/how-to-give-sample-feedback" },
    ],
  };

  const bestPractices = [
    { rule: "1. State Precise Numerical Deltas (+/- cm)", example: "Write 'Decrease chest width by 1.5 cm at POM-01' instead of vague comments like 'Make the chest tighter'." },
    { rule: "2. Provide Annotated Measurement Photos", example: "Include photographs showing the sample laid flat with measuring tape visibly positioned at the point of measure." },
    { rule: "3. Evaluate Sample on a Physical Model", example: "Photograph fit issues on a model in neutral standing positions (front, side, back) to highlight tension lines." },
    { rule: "4. Consolidate All Feedback in One Document", example: "Send a unified fit comment PDF or spreadsheet. Avoid scattering feedback across multiple email threads or chat messages." },
  ];

  const faqs = [
    {
      q: "What is the worst way to give sample feedback?",
      a: "Sending subjective, vague comments like 'It feels weird' or 'Make it look more like Brand X' without supplying numerical measurement changes or flat measurements.",
    },
    {
      q: "Should I cut or mark the sample garment physically?",
      a: "Yes! Pinning adjustments, drawing cut lines with chalk, or taping altered seam positions on the physical sample and shipping it back to the factory is highly effective.",
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
            How to Give Useful Feedback{" "}
            <span className="italic font-medium text-[#2D5016]">on a Clothing Sample.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Clear, technical sample feedback prevents misinterpretation and cuts revision cycles in half. Master the art of actionable fit notes.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Communication Quality</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Pattern makers need <strong className="font-medium">dimensions and delta measurements</strong>, not emotional descriptions. The clearer your data, the faster your next sample arrives.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Feedback Standards</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Rules for Actionable Sample Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestPractices.map((bp, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{bp.rule}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed"><strong className="text-[#C8A882]">Best Practice:</strong> {bp.example}</p>
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
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/why-samples-need-multiple-revisions", label: "Why Apparel Samples Sometimes Need Multiple Revisions" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure in Garment Manufacturing?" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Streamline your sample revisions</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides structured fit comment templates and pattern maker support to turn your sample feedback into exact pattern adjustments.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
