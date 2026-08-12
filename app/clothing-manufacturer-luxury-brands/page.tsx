import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Layers, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Clothing Manufacturer for Luxury Fashion Brands | Fenalt",
  description:
    "High-spec clothing manufacturing for premium & luxury fashion brands. Custom heavy GSM fabrics, fine stitching, AQL 2.5 floor audits, and small batch production in Dhaka.",
  alternates: {
    canonical: "https://fenalt.com/clothing-manufacturer-luxury-brands",
  },
  openGraph: {
    title: "Clothing Manufacturer for Luxury Fashion Brands | Fenalt",
    description:
      "High-spec clothing manufacturing for premium & luxury fashion brands. Custom heavy GSM fabrics, fine stitching, AQL 2.5 floor audits, and small batch production in Dhaka.",
    url: "https://fenalt.com/clothing-manufacturer-luxury-brands",
  },
};

export default function ClothingManufacturerLuxuryBrandsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clothing Manufacturer for Luxury Fashion Brands",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "High-Spec Apparel Manufacturing, Luxury Garment Production, Premium Sourcing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "High-spec apparel manufacturing for luxury fashion labels and premium designers in Dhaka, Bangladesh. Sourcing heavy combed cotton knits, luxury trims, AQL 2.5 floor audits, and low MOQ production.",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Clothing Manufacturer Luxury Brands",
        "item": "https://fenalt.com/clothing-manufacturer-luxury-brands",
      },
    ],
  };

  const faqs = [
    {
      q: "What quality control standards does Fenalt enforce for luxury garments?",
      a: "Our Dhaka quality engineers enforce an ANSI/ASQ Z1.4 AQL 2.5 inspection framework with a strict ±1.5cm measurement tolerance and 100% needle metal detection on finished garments.",
    },
    {
      q: "Can luxury fashion labels start with small capsule drops?",
      a: "Yes. Production options can start from 50 units per style for qualifying high-spec luxury drops, protecting exclusivity while testing demand.",
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
            High-Spec Manufacturing
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Luxury Fashion Labels.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Engineered for high-end retail presentation. Fenalt coordinates high-spec apparel manufacturing in Dhaka—pairing luxury cotton knits, precise seam stitching, and strict floor QC from 50 units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Luxury Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/boutique-clothing-manufacturer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Boutique Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Premium Craftsmanship
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Uncompromised Finishings for High-End Labels
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Luxury apparel buyers evaluate seam alignment, stitch density, fabric weight, and collar symmetry. Mass commercial manufacturing lines often fail to meet these stringent standards.
              </p>
              <p>
                <strong>Fenalt caters to high-spec luxury requirements:</strong> We match your order with specialized Dhaka micro-factories, sourcing heavy combed cotton textiles and supervising daily floor quality control before export.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Luxury Pillars
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Manufacturing Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Heavy Combed Cotton Knits",
                tag: "High Grade",
                body: "Available options include 240gsm–300gsm single jersey and 380gsm–480gsm French Terry fleece.",
              },
              {
                icon: Factory,
                title: "Specialized Micro-Factories",
                tag: "Dedicated Lines",
                body: "Pairing low MOQ order runs with audited independent sewing facilities in Dhaka.",
              },
              {
                icon: Layers,
                title: "Capsule Runs ab 50 Units",
                tag: "Exclusivity",
                body: "Production options start from 50 units per style for qualifying high-spec luxury drops.",
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
              Luxury Brand FAQ
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
            Manufacture high-spec garments for your luxury brand
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your luxury apparel tech packs for a comprehensive quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Luxury Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
