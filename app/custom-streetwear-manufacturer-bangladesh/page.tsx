import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scissors, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Streetwear Manufacturer Bangladesh | Fenalt",
  description:
    "Custom streetwear apparel manufacturing in Dhaka, Bangladesh. Produce 320gsm–480gsm French Terry hoodies, boxy tees, and cargo pants from 50 units with on-site QC.",
  alternates: {
    canonical: "https://www.fenalt.com/custom-streetwear-manufacturer-bangladesh",
  },
  openGraph: {
    title: "Custom Streetwear Manufacturer Bangladesh | Fenalt",
    description:
      "Custom streetwear apparel manufacturing in Dhaka, Bangladesh. Produce 320gsm–480gsm French Terry hoodies, boxy tees, and cargo pants from 50 units with on-site QC.",
    url: "https://www.fenalt.com/custom-streetwear-manufacturer-bangladesh",
  },
};

export default function CustomStreetwearManufacturerBangladeshPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Streetwear Manufacturer Bangladesh",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Streetwear Apparel Manufacturing, Cut and Sew Streetwear Production, Heavyweight Fleece Sourcing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Custom cut-and-sew streetwear apparel manufacturing in Dhaka, Bangladesh. Heavyweight cotton knits, drop-shoulder silhouettes, puff printing, embroidery, and low MOQ capsule drops.",
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
        "name": "Custom Streetwear Manufacturer Bangladesh",
        "item": "https://www.fenalt.com/custom-streetwear-manufacturer-bangladesh",
      },
    ],
  };

  const faqs = [
    {
      q: "What fabric options are available for custom streetwear production?",
      a: "Available options include 350gsm to 480gsm combed cotton French Terry fleece for hoodies, 240gsm to 300gsm single jersey for boxy tees, and durable cotton twill or ripstop for cargo pants.",
    },
    {
      q: "What is the minimum order quantity for custom streetwear drops?",
      a: "Production options can start from 50 units per style for qualifying capsule drops, depending on fabric selection and construction complexity.",
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
            Bespoke Cut &amp; Sew Streetwear
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Custom Streetwear Manufacturer in{" "}
            <span className="italic font-medium text-[#2D5016]">Dhaka, Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Build high-spec streetwear collections with heavy drape textiles, custom drop-shoulder patterns, and 3D puff graphics - backed by physically managed quality control in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Streetwear Drop <ArrowRight size={16} />
            </Link>
            <Link
              href="/streetwear-manufacturing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Streetwear Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Bespoke Streetwear Engineering
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              High-Spec Cut &amp; Sew Construction
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Modern streetwear brands require custom silhouettes - oversized boxy cuts, double-layered hoods, thick 1x1 ribbing, and substantial textile weights that retain structure after washing.
              </p>
              <p>
                <strong>Fenalt bridges design vision with Dhaka manufacturing:</strong> Our pattern team in Dhaka translates tech pack line drawings into graded CAD patterns, pairing your capsule drop with specialized micro-factories under strict AQL 2.5 floor supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Streetwear Features
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Manufacturing Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Heavyweight Knit Textiles",
                tag: "350gsm–480gsm",
                body: "Available options include 100% combed cotton French Terry fleece and dense single jersey knits.",
              },
              {
                icon: Sparkles,
                title: "3D Graphics & Branding",
                tag: "Finishing",
                body: "High-density plastisol foam puff printing, direct embroidery, screen printing, and custom woven neck labels.",
              },
              {
                icon: Scissors,
                title: "Low MOQ Capsule Runs",
                tag: "From 50 Units",
                body: "Production options start from 50 units per style for qualifying streetwear capsule drops.",
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
              Dhaka On-Site Floor Supervision
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Our Dhaka team physically audits sewing line assembly, print registration, and measurement accuracy before garments are approved for export.
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
              Streetwear FAQ
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
            Build your custom streetwear collection
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your streetwear tech pack or design sketches for a comprehensive quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Streetwear Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
