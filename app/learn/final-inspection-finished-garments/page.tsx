import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Final Inspection for Finished Garments: AQL Protocol",
  description:
    "Learn how Final Random Inspection (FRI) works — applying ANSI/ASQ Z1.4 AQL sampling tables, visual defect classification (Critical/Major/Minor), and carton audits.",
  alternates: {
    canonical: "https://fenalt.com/learn/final-inspection-finished-garments",
  },
  openGraph: {
    title: "Final Inspection for Finished Garments: AQL Protocol",
    description:
      "Learn how Final Random Inspection (FRI) works — applying ANSI/ASQ Z1.4 AQL sampling tables, visual defect classification (Critical/Major/Minor), and carton audits.",
    url: "https://fenalt.com/learn/final-inspection-finished-garments",
  },
};

export default function FinalInspectionFinishedGarmentsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Final Inspection for Finished Garments: AQL Protocol",
    description:
      "A technical walkthrough of Final Random Inspection (FRI), AQL sampling procedures, and carton export audits.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/final-inspection-finished-garments",
    mainEntityOfPage: "https://fenalt.com/learn/final-inspection-finished-garments",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Final Inspection Finished Garments", item: "https://fenalt.com/learn/final-inspection-finished-garments" },
    ],
  };

  const steps = [
    { title: "1. 100% Packed Goods Verification", desc: "FRI occurs only when at least 80% of the bulk order is packed into final export cartons and 100% is finished." },
    { title: "2. Random Carton Sampling (ANSI/ASQ Z1.4)", desc: "Selecting random sample cartons from the top, middle, and bottom of warehouse pallets according to statistical AQL tables." },
    { title: "3. Defect Categorization (Critical, Major, Minor)", desc: "Auditing samples against standard AQL limits: 0 Critical (safety), 2.5 Major (aesthetic/functional), 4.0 Minor (workmanship)." },
    { title: "4. Carton Packaging & Barcode Scans", desc: "Verifying polybag warning copy, ratio sticker accuracy, Master Carton gross weight, and barcode scannability." },
  ];

  const faqs = [
    {
      q: "What happens if a final random inspection (FRI) fails?",
      a: "If defect counts exceed allowed AQL thresholds, the factory receives a Failed Inspection Report, halting shipment until 100% of cartons are unpacked, re-audited, and repaired.",
    },
    {
      q: "Who performs the Final Random Inspection?",
      a: "Independent third-party QC auditors (SGS, QIMA) or Fenalt's dedicated quality engineering team perform unbiased final inspections.",
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
            Final Inspection for Finished Garments:{" "}
            <span className="italic font-medium text-[#2D5016]">AQL Protocol.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Final Random Inspection (FRI) is the decisive gatekeeping audit before garments are released for ocean or air shipping.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Gatekeeper Audit</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Final Random Inspection (FRI)</strong> uses statistical AQL sampling to verify finished garment construction, measurement accuracy, and carton labeling.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">FRI Protocol</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Milestones of Final Inspection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
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
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/learn/in-line-quality-control-garment-manufacturing", label: "In-Line Quality Control in Garment Manufacturing" },
              { href: "/learn/common-clothing-quality-problems", label: "Common Clothing Quality Problems & Causes" },
              { href: "/garment-quality-control-services", label: "Fenalt Garment Inspection Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Independent final random inspection</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt issues formal AQL 2.5 FRI reports with high-res defect photography before authorizing shipment release.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
