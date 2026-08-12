import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "What Happens After a Sample Is Approved?",
  description:
    "Discover the next steps immediately following sample approval — from golden sample sealing and bulk fabric milling to PO issuance and cutting.",
  alternates: {
    canonical: "https://fenalt.com/learn/after-sample-approval-what-happens",
  },
  openGraph: {
    title: "What Happens After a Sample Is Approved?",
    description:
      "Discover the next steps immediately following sample approval — from golden sample sealing and bulk fabric milling to PO issuance and cutting.",
    url: "https://fenalt.com/learn/after-sample-approval-what-happens",
  },
};

export default function AfterSampleApprovalWhatHappensPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Happens After a Sample Is Approved?",
    description:
      "A operational walkthrough of the transition from sample sign-off to bulk production authorization.",
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
    { step: "1. Sealing the Golden Sample", desc: "The approved Pre-Production (PP) sample is physically signed, tagged, and sealed at the factory. It serves as the legal quality benchmark for bulk inspection." },
    { step: "2. Finalizing Graded Pattern Files & Markers", desc: "Pattern makers finalize digital CAD grading across all sizes (XS–3XL) and create optimal fabric cutting markers." },
    { step: "3. Issuing Purchase Order (PO) & Deposit", desc: "The brand issues a formal production PO detailing exact size ratios, delivery dates, and releases the production deposit." },
    { step: "4. Bulk Material Milling & Dyeing", desc: "The factory orders bulk yarns, mills greige fabric, and executes Pantone color dyeing." },
    { step: "5. Production Scheduling & Line Allocation", desc: "The factory reserves cutting tables and assigns dedicated sewing lines for bulk assembly." },
  ];

  const faqs = [
    {
      q: "Can I make design changes after approving the Pre-Production sample?",
      a: "Making design changes after PP sample approval will halt production, incur pattern re-grading fees, and delay bulk delivery. Any changes after PP sign-off require a formal Change Order.",
    },
    {
      q: "How long after sample approval does bulk sewing start?",
      a: "Bulk cutting and sewing typically begin 2 to 4 weeks after sample sign-off, depending on bulk fabric milling lead times.",
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
            Sample approval triggers the transition from prototype development to bulk manufacturing. Understand the administrative and factory milestones that follow sign-off.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CheckSquare size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Transition Protocol</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Sample approval converts technical specs into <strong className="font-medium">binding production commitments</strong> — authorizing material milling, cutting, and line allocation.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Post-Approval Steps</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Key Milestones to Bulk Cutting</h2>
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
              { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
              { href: "/learn/apparel-production-process-explained", label: "The Apparel Production Process Explained Step by Step" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
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
