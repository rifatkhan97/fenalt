import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Handshake, MapPin, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Buying & Sourcing Partner Bangladesh | Fenalt",
  description:
    "End-to-end apparel buying and sourcing partner in Dhaka, Bangladesh. We manage micro-factory matching, fabric procurement, on-site QC, and global DDP freight.",
  alternates: {
    canonical: "https://fenalt.com/buying-sourcing-partner-bangladesh",
  },
  openGraph: {
    title: "Buying & Sourcing Partner Bangladesh | Fenalt",
    description:
      "End-to-end apparel buying and sourcing partner in Dhaka, Bangladesh. We manage micro-factory matching, fabric procurement, on-site QC, and global DDP freight.",
    url: "https://fenalt.com/buying-sourcing-partner-bangladesh",
  },
};

export default function BuyingSourcingPartnerBangladeshPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Buying & Sourcing Partner Bangladesh",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Apparel Sourcing Partner, Garment Buying Liaison, Bangladesh Production Management",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Managed apparel buying and sourcing partner in Dhaka, Bangladesh. Micro-factory matching, physical fit sampling in 10–14 days, on-site floor supervision, and DDP global shipping.",
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
        "name": "Buying Sourcing Partner Bangladesh",
        "item": "https://fenalt.com/buying-sourcing-partner-bangladesh",
      },
    ],
  };

  const faqs = [
    {
      q: "What role does Fenalt serve as a sourcing partner?",
      a: "Fenalt manages the complete overseas operational loop—translating tech specs, sourcing fabrics in Dhaka, matching orders with vetted micro-factories, auditing floor assembly, and arranging landed freight.",
    },
    {
      q: "Can Fenalt handle small order volumes from 50 units?",
      a: "Yes. Unlike traditional buying houses requiring 10,000+ units, Fenalt specializes in low MOQ capsule runs starting at 50 units for growing brands and boutiques.",
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
            Complete Sourcing Liaison
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Buying &amp; Sourcing Partner in{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Your dedicated sourcing operations team on the ground in Dhaka. We streamline micro-factory matching, fabric procurement, physical fit sampling, and global DDP delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Sourcing Partnership <ArrowRight size={16} />
            </Link>
            <Link
              href="/garment-sourcing-agent-bangladesh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Sourcing Agent Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Partnership Model
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Seamless Overseas Production Oversight
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Managing overseas garment manufacturing from thousands of miles away often results in misaligned size charts, unverified fabric GSMs, delayed shipments, and hidden fees.
              </p>
              <p>
                <strong>Fenalt operates as your in-house sourcing team:</strong> Our Dhaka staff provides direct daily floor oversight, enforcing strict quality standards and delivering all-inclusive landed pricing with zero surprise surcharges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Service Ecosystem
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Sourcing Partner Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Micro-Factory Matching",
                tag: "50–300 Units",
                body: "Pairing your tech pack specs with audited specialized independent sewing facilities.",
              },
              {
                icon: MapPin,
                title: "Dhaka Floor Management",
                tag: "On-Site Audits",
                body: "Daily physical supervision by our local Dhaka managers during cut, sew, and trim phases.",
              },
              {
                icon: Package,
                title: "Landed DDP Freight",
                tag: "Door Delivery",
                body: "Handling customs clearance, export paperwork, and freight delivery straight to your warehouse.",
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
              On-Site Quality Oversight
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
              Sourcing Partner FAQ
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
            Ready to partner with Fenalt in Dhaka?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or design sketches for a transparent landed quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Sourcing Partnership <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
