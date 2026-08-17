import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Factory, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Relocating Apparel Production to South Asia | Fenalt Guide",
  description:
    "Practical guide for relocating garment manufacturing to South Asia. Manage factory pattern transitions, physical sampling in 10–14 days, and Dhaka floor QC.",
  alternates: {
    canonical: "https://www.fenalt.com/relocating-apparel-production-south-asia",
  },
  openGraph: {
    title: "Relocating Apparel Production to South Asia | Fenalt Guide",
    description:
      "Practical guide for relocating garment manufacturing to South Asia. Manage factory pattern transitions, physical sampling in 10–14 days, and Dhaka floor QC.",
    url: "https://www.fenalt.com/relocating-apparel-production-south-asia",
  },
};

export default function RelocatingApparelProductionSouthAsiaPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Relocating Apparel Production to South Asia Sourcing Guide",
    "description":
      "A step-by-step roadmap for fashion brands transitioning garment manufacturing to South Asia - focusing on Dhaka, Bangladesh for cotton knits, fleece, and denim production.",
    "author": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Relocating Apparel Production South Asia",
        "item": "https://www.fenalt.com/relocating-apparel-production-south-asia",
      },
    ],
  };

  const faqs = [
    {
      q: "How does Fenalt manage pattern transfers during factory relocation?",
      a: "Our Dhaka pattern engineering team ingests your existing CAD patterns or physical sample garments, digitizing spec sheets to ensure seamless measurement continuity.",
    },
    {
      q: "How long does a production transition take with Fenalt?",
      a: "Physical sample development takes 10 to 14 days. Once sample fits are approved, bulk production takes 4 to 6 weeks followed by global DDP shipping.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Production Relocation
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Relocating Apparel Production to{" "}
            <span className="italic font-medium text-[#2D5016]">South Asia.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            A step-by-step roadmap for fashion brands transitioning garment manufacturing to Dhaka, Bangladesh. We handle tech pack digitization, fit sampling in 10–14 days, and Dhaka floor QC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Relocation Consultation <ArrowRight size={16} />
            </Link>
            <Link
              href="/clothing-manufacturer-bangladesh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Bangladesh Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Transition Management
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Ensuring Zero Quality Interruption During Transition
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Switching manufacturing facilities is often fraught with risk - lost pattern grading, altered size fits, fabric weight discrepancies, and delayed shipping windows.
              </p>
              <p>
                <strong>Fenalt eliminates transition friction:</strong> We reverse-engineer your proven bestseller fits, match fabrics in Dhaka, and audit physical floor assembly daily to guarantee identical garment quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Relocation Phases
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              The 4-Step Transition Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "1. Spec & Pattern Transfer",
                tag: "Phase 1",
                body: "Digitizing CAD spec sheets or physical sample garments to ensure exact fit continuity.",
              },
              {
                icon: MapPin,
                title: "2. 10–14 Day Fit Sampling",
                tag: "Phase 2",
                body: "Constructing physical prototype fit samples in Dhaka for your hands-on evaluation.",
              },
              {
                icon: Factory,
                title: "3. Managed Bulk Production",
                tag: "Phase 3",
                body: "Micro-factory sewing line setup, daily floor QC, and landed DDP freight delivery.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882] mb-8">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider mb-4">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-4">{item.title}</h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Assurance
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              On-Site Floor Audits in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically audit stitching, measurement accuracy, and label attachment on the factory floor before garments are approved for export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all garments." },
              { title: "Needle & Metal Detection", desc: "100% safety inspection of finished pieces." },
              { title: "ANSI/ASQ Z1.4 Audits", desc: "Enforcing international AQL 2.5 quality benchmarks." },
            ].map((qc, i) => (
              <div key={i} className="p-6 bg-[#2A2A2A] border border-[#3A3A3A]">
                <ShieldCheck size={20} className="text-[#C8A882] mb-4" />
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-2">{qc.title}</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Relocation FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
            Plan your apparel production transition
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your current tech pack specs for an all-inclusive landed quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Transition Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
