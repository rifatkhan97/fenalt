import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Shield, Layers, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Outerwear Manufacturing Bangladesh | Fenalt",
  description:
    "Technical outerwear and jacket manufacturing in Dhaka, Bangladesh. Windbreakers, padded jackets, rainwear, and lined outerwear with managed quality control.",
  alternates: {
    canonical: "https://fenalt.com/outerwear-manufacturing-bangladesh",
  },
  openGraph: {
    title: "Technical Outerwear Manufacturing Bangladesh | Fenalt",
    description:
      "Technical outerwear and jacket manufacturing in Dhaka, Bangladesh. Windbreakers, padded jackets, rainwear, and lined outerwear with managed quality control.",
    url: "https://fenalt.com/outerwear-manufacturing-bangladesh",
  },
};

export default function OuterwearManufacturingBangladeshPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Technical Outerwear Manufacturing Bangladesh",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Outerwear Jacket Production, Technical Apparel Manufacturing, Water-Resistant Garment Sourcing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Custom technical outerwear and jacket manufacturing in Dhaka, Bangladesh. Nylon ripstop, water-resistant DWR coatings, quilted lining, taped seams, and managed QC.",
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
        "name": "Outerwear Manufacturing Bangladesh",
        "item": "https://fenalt.com/outerwear-manufacturing-bangladesh",
      },
    ],
  };

  const faqs = [
    {
      q: "What shell fabrics can Fenalt source for technical outerwear?",
      a: "We source 100% nylon ripstop, water-repellent polyester taslan, softshell bonded fabrics, and recycled synthetic shells with DWR coatings.",
    },
    {
      q: "What is the minimum order quantity for custom jackets?",
      a: "Outerwear jacket production starts at 100 units per style, accommodating small batch outerwear drops for independent fashion labels.",
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
            Technical Jacket Production
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Technical Outerwear Manufacturing in{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Engineered for weather protection and utility design. We produce nylon ripstop windbreakers, padded puffers, and lined jackets featuring water-repellent coatings and on-site QC in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Outerwear Order <ArrowRight size={16} />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Capabilities Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Jacket Engineering
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Multi-Layer Outerwear Assembly
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Technical jacket manufacturing requires precise pattern grading across multiple layers—shell fabrics, synthetic insulation, interior linings, waterproof zippers, and storm flaps.
              </p>
              <p>
                <strong>Fenalt manages technical outerwear complexity:</strong> Our Dhaka operational team oversees assembly line setup, seam sealing, zipper alignment, and physical water-resistance testing prior to shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Outerwear Pillars
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Manufacturing Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Water-Repellent DWR Shells",
                tag: "Weatherproof",
                body: "Durable water-repellent (DWR) coated nylon ripstop, polyester taslan, and softshell laminates.",
              },
              {
                icon: Layers,
                title: "Synthetic Insulation & Linings",
                tag: "Puffers & Parkas",
                body: "Quilted polyester insulation, fleece linings, and breathable mesh interiors.",
              },
              {
                icon: Scissors,
                title: "Custom Zippers & Hardware",
                tag: "Weather Zips",
                body: "Waterproof YKK zippers, custom snap buttons, adjustable drawstring toggles, and storm cuffs.",
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
              Water Resistance &amp; Seam Inspection
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically audit zipper operation, seam tape adhesion, insulation distribution, and sizing accuracy before export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all outerwear sizes." },
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
              Outerwear Manufacturing FAQ
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
            Manufacture technical outerwear jackets
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your jacket tech pack for a transparent, all-inclusive quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Outerwear Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
