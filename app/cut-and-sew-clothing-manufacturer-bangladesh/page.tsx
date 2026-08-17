import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scissors, Layers, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Cut and Sew Clothing Manufacturer Bangladesh | Fenalt",
  description:
    "Cut and sew apparel manufacturing in Dhaka, Bangladesh. Custom pattern making, size grading, prototype fit sampling, and low MOQ production from 50 units.",
  alternates: {
    canonical: "https://www.fenalt.com/cut-and-sew-clothing-manufacturer-bangladesh",
  },
  openGraph: {
    title: "Cut and Sew Clothing Manufacturer Bangladesh | Fenalt",
    description:
      "Cut and sew apparel manufacturing in Dhaka, Bangladesh. Custom pattern making, size grading, prototype fit sampling, and low MOQ production from 50 units.",
    url: "https://www.fenalt.com/cut-and-sew-clothing-manufacturer-bangladesh",
  },
};

export default function CutAndSewClothingManufacturerBangladeshPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cut and Sew Clothing Manufacturer Bangladesh",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Cut and Sew Apparel Manufacturing, Custom Pattern Grading, Prototype Fit Sampling",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Bespoke cut-and-sew apparel manufacturing in Dhaka, Bangladesh. Translating tech pack line drawings into custom CAD patterns, size grading curves, physical fit sampling, and small batch production.",
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
        "name": "Cut and Sew Clothing Manufacturer Bangladesh",
        "item": "https://www.fenalt.com/cut-and-sew-clothing-manufacturer-bangladesh",
      },
    ],
  };

  const faqs = [
    {
      q: "What is the difference between cut-and-sew manufacturing and blank garment printing?",
      a: "Cut-and-sew manufacturing creates garments completely from raw fabric rolls based on your unique CAD patterns, custom measurements, and specified ribbing - unlike printing graphics onto pre-made wholesale blanks.",
    },
    {
      q: "Can Fenalt create digital CAD patterns from physical sample garments?",
      a: "Yes. Our Dhaka pattern engineering team can reverse-engineer your physical sample garment, digitizing its points of measure into a complete CAD pattern file with graded sizing tables.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Bespoke Pattern Construction
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Cut &amp; Sew Clothing Manufacturer in{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Move beyond standard wholesale blanks. Fenalt manufactures custom apparel built from your exact CAD patterns, bespoke measurements, and curated fabric rolls in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Cut &amp; Sew Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/apparel-sampling-services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Sampling Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              True Custom Garments
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Full Pattern &amp; Fabric Customization
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Wholesale blanks constrain your fashion brand to standard off-the-shelf fits and limited GSM weights. True brand identity requires bespoke collar proportions, custom sleeve lengths, and unique fabric blends.
              </p>
              <p>
                <strong>Fenalt delivers true cut-and-sew manufacturing:</strong> Our Dhaka team manages pattern creation, fabric roll inspection, precision cutting, and sewing assembly under physical floor supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Cut &amp; Sew Process
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Manufacturing Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "CAD Pattern & Size Grading",
                tag: "Engineering",
                body: "Translating vector flat sketches into digital CAD marker patterns across XS–3XL size curves.",
              },
              {
                icon: Scissors,
                title: "Precision Roll Cutting",
                tag: "Assembly",
                body: "Cutting raw fabric rolls to exact pattern dimensions before sewing line assembly in Dhaka.",
              },
              {
                icon: Layers,
                title: "Small Batch Capsule Runs",
                tag: "Low MOQ",
                body: "Production options start from 50 units per style for qualifying cut-and-sew projects.",
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
              On-Site Quality Oversight in Dhaka
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
              Cut &amp; Sew FAQ
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
            Ready to manufacture custom cut and sew apparel?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack specs for a comprehensive production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Cut &amp; Sew Order <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
