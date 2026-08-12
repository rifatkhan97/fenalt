import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pre-Production Quality Checks for Fashion Brands",
  description:
    "Master Pre-Production (PP) quality audits — verifying lab-dip colors, approved golden samples, fabric shrinkage reports, trim approvals, and cutting markers.",
  alternates: {
    canonical: "https://fenalt.com/learn/pre-production-quality-checks",
  },
  openGraph: {
    title: "Pre-Production Quality Checks for Fashion Brands",
    description:
      "Master Pre-Production (PP) quality audits — verifying lab-dip colors, approved golden samples, fabric shrinkage reports, trim approvals, and cutting markers.",
    url: "https://fenalt.com/learn/pre-production-quality-checks",
  },
};

export default function PreProductionQualityChecksPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pre-Production Quality Checks for Fashion Brands",
    description:
      "An essential pre-flight quality audit guide for fashion brands prior to authorizing bulk fabric cutting.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/pre-production-quality-checks",
    mainEntityOfPage: "https://fenalt.com/learn/pre-production-quality-checks",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Pre-Production Quality Checks", item: "https://fenalt.com/learn/pre-production-quality-checks" },
    ],
  };

  const checks = [
    { title: "1. Sealed Golden Pre-Production (PP) Sample Sign-off", desc: "Ensure a physically tagged and signed PP sample is present at the factory cutting table as the legal standard." },
    { title: "2. Bulk Fabric Test Reports (GSM, Color, Shrinkage)", desc: "Review mill lab reports verifying exact fabric GSM weight, color crocking scores, and length/width shrinkage %." },
    { title: "3. Complete Trim & Hardware Card Approval", desc: "Audit approved trim cards showing exact zippers, threads, woven labels, care tags, and polybag prints." },
    { title: "4. Graded CAD Pattern Marker Audit", desc: "Verify digital marker efficiency and confirm pattern size ratios match the brand's production Purchase Order (PO)." },
  ];

  const faqs = [
    {
      q: "What is a Pre-Production (PP) Meeting?",
      a: "A formal meeting between factory line managers, merchandisers, and QC inspectors where every detail of the tech pack, PP sample, and potential construction risks are reviewed before cutting begins.",
    },
    {
      q: "Why is a signed Golden Sample critical for quality control?",
      a: "The sealed Golden Sample is the contractually binding physical benchmark. In the event of quality disputes, inspectors compare bulk garments against the Golden Sample.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction &amp; Quality</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Pre-Production Quality Checks{" "}
            <span className="italic font-medium text-[#2D5016]">for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            The Pre-Production (PP) phase is your last line of defense before bulk fabric cutting begins. Learn how to conduct a thorough pre-flight audit.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Pre-Flight Audit</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Pre-Production quality checks</strong> verify golden samples, fabric lab reports, trim cards, and marker ratios before bulk cutting is authorized.
            </p>
          </div>
        </div>
      </section>

      {/* Checks */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Verification Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Critical PP Audit Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checks.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
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
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/what-to-check-during-clothing-production", label: "What Should Be Checked During Production?" },
              { href: "/factory-quality-control-bangladesh", label: "Fenalt Pre-Production Audit Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Rigorous pre-production sign-off</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt conducts comprehensive PP meetings and seals Golden Samples to ensure zero ambiguity before bulk cutting.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
