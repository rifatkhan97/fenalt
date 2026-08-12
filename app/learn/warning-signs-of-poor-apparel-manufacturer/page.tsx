import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, AlertOctagon } from "lucide-react";

export const metadata: Metadata = {
  title: "Warning Signs of a Poor Apparel Manufacturing Partner",
  description:
    "Spot red flags when vetting clothing factories - un-itemized quotes, reluctance to sign NDAs, vague sampling lead times, and missing social audit certificates.",
  alternates: {
    canonical: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
  },
  openGraph: {
    title: "Warning Signs of a Poor Apparel Manufacturing Partner",
    description:
      "Spot red flags when vetting clothing factories - un-itemized quotes, reluctance to sign NDAs, vague sampling lead times, and missing social audit certificates.",
    url: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
  },
};

export default function WarningSignsOfPoorApparelManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Warning Signs of a Poor Apparel Manufacturing Partner",
    description:
      "A risk-mitigation guide for fashion brands identifying major red flags during clothing factory vetting.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
    mainEntityOfPage: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Warning Signs of Poor Manufacturer", item: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer" },
    ],
  };

  const redFlags = [
    { title: "1. Unwillingness to Provide Itemized Costings", desc: "Factories that insist on vague lump-sum quotes without breaking down fabric yield, CMT labor, or trim costs." },
    { title: "2. Refusal to Sign NNN / NDA Agreements", desc: "Reluctance to protect your proprietary tech packs, vector artwork, or pattern files with legal non-disclosure agreements." },
    { title: "3. Untraceable Subcontracting & Missing Compliance", desc: "Passing production to un-audited third-party shadow factories without brand consent or valid BSCI/WRAP audit certificates." },
    { title: "4. Poor Sample Fidelity & Evasive Communication", desc: "Delivering prototype samples that ignore tech pack POM specs, accompanied by sudden communications blackouts." },
  ];

  const faqs = [
    {
      q: "What is an NNN agreement in overseas manufacturing?",
      a: "An NNN agreement protects Non-disclosure, Non-use, and Non-circumvention - legally preventing factories from stealing design IP or selling your designs directly.",
    },
    {
      q: "How can I check if a factory is illegally subcontracting my order?",
      a: "Require unannounced third-party inline QC audits (QIMA, SGS) during bulk sewing. Auditors verify production occurs at the designated certified address.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Strategy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Warning Signs of a Poor{" "}
            <span className="italic font-medium text-[#2D5016]">Apparel Manufacturer.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Spotting red flags early saves fashion brands thousands of dollars and months of lost production time. Protect your supply chain.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertOctagon size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Risk Identification</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Major supplier red flags include <strong className="font-medium">un-itemized lump sum quotes, unwillingness to sign IP non-disclosure agreements, and untraceable subcontracting</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Red Flags</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Major Factory Red Flags</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {redFlags.map((rf, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{rf.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{rf.desc}</p>
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
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-evaluate-an-overseas-clothing-manufacturer", label: "How to Evaluate an Overseas Clothing Manufacturer" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/ethical-clothing-manufacturing-bangladesh", label: "Fenalt Ethical Manufacturing Standards" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Vetted, compliant manufacturing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt operates fully audited, BSCI-compliant facilities with strict NDA protection and transparent itemized FOB pricing.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
