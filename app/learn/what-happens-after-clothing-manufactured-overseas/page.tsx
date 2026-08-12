import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "What Happens After Clothing Is Manufactured Overseas?",
  description:
    "Explore post-production clothing logistics — final packing, FRI inspection sign-off, container stuffing, ocean vs air freight, customs clearance, and 3PL warehouse intake.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
  },
  openGraph: {
    title: "What Happens After Clothing Is Manufactured Overseas?",
    description:
      "Explore post-production clothing logistics — final packing, FRI inspection sign-off, container stuffing, ocean vs air freight, customs clearance, and 3PL warehouse intake.",
    url: "https://fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
  },
};

export default function WhatHappensAfterClothingManufacturedOverseasPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Happens After Clothing Is Manufactured Overseas?",
    description:
      "A complete guide to post-production apparel shipping, customs clearance, ocean freight transit, and 3PL warehouse distribution.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
    mainEntityOfPage: "https://fenalt.com/learn/what-happens-after-clothing-manufactured-overseas",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Happens After Manufacturing", item: "https://fenalt.com/learn/what-happens-after-clothing-manufactured-overseas" },
    ],
  };

  const steps = [
    { title: "1. Polybagging & Master Carton Packing", desc: "Garments are folded with tissue paper, bagged in printed warning polybags, and packed into heavy 5-ply corrugated Master Cartons with ratio stickers." },
    { title: "2. Final Random Inspection (FRI) & Release", desc: "Auditors issue a Passed Inspection Certificate, allowing the factory to release cargo to the freight forwarder." },
    { title: "3. Export Port Trucking & Container Loading", desc: "Cartons are trucked to Chittagong port and stuffed into 20ft or 40ft ocean containers (FCL) or consolidated as LCL cargo." },
    { title: "4. Import Customs Clearance & 3PL Intake", desc: "Licensed customs brokers clear duty documents upon port arrival, trucking cargo directly to your brand's 3PL fulfillment warehouse." },
  ];

  const faqs = [
    {
      q: "What documents are required for clearing garment imports at customs?",
      a: "Key import documents include the Commercial Invoice, Packing List, Bill of Lading (B/L), Certificate of Origin (Form GSP/CO), and ISF filing (for US ports).",
    },
    {
      q: "What is the difference between FCL and LCL ocean shipping?",
      a: "FCL (Full Container Load) reserves a private 20ft or 40ft container for your brand. LCL (Less than Container Load) consolidates your pallets with other cargo in a shared container.",
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
            What Happens After Clothing{" "}
            <span className="italic font-medium text-[#2D5016]">Is Manufactured Overseas?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            When bulk sewing finishes, the post-production shipping journey begins. Master the steps from Master Carton packing to 3PL warehouse delivery.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Truck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Post-Production Logistics</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Post-production logistics involves <strong className="font-medium">Master Carton packaging, FRI release sign-off, ocean/air freight dispatch, and 3PL warehouse intake</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Post-Production Journey</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Post-Production Milestones</h2>
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
              { href: "/learn/how-international-clothing-production-is-coordinated", label: "How International Production Is Coordinated" },
              { href: "/learn/final-inspection-finished-garments", label: "Final Inspection for Finished Garments: AQL Protocol" },
              { href: "/garment-packaging-custom-labeling-services", label: "Garment Packaging & Labeling Services" },
              { href: "/overseas-production-management-apparel", label: "Fenalt Overseas Logistics Management" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Door-to-door garment logistics</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages export carton packing, FRI release certificates, and door-to-door DDP freight delivery directly to your door.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
