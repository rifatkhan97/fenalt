import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Factory, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Sourcing Agent Bangladesh | Fenalt",
  description:
    "Fenalt acts as your managed garment sourcing partner in Dhaka, Bangladesh. Micro-factory matching, physical quality control, fabric sourcing, and DDP freight handling.",
  alternates: {
    canonical: "https://fenalt.com/garment-sourcing-agent-bangladesh",
  },
  openGraph: {
    title: "Garment Sourcing Agent Bangladesh | Fenalt",
    description:
      "Fenalt acts as your managed garment sourcing partner in Dhaka, Bangladesh. Micro-factory matching, physical quality control, fabric sourcing, and DDP freight handling.",
    url: "https://fenalt.com/garment-sourcing-agent-bangladesh",
  },
};

export default function GarmentSourcingAgentBangladeshPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garment Sourcing Agent Bangladesh",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Bangladesh Apparel Sourcing, Garment Factory Management, Dhaka Quality Auditing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Managed apparel sourcing liaison in Dhaka, Bangladesh. Micro-factory matching, physical sample development in 10–14 days, floor quality control, and DDP freight.",
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
        "name": "Garment Sourcing Agent Bangladesh",
        "item": "https://fenalt.com/garment-sourcing-agent-bangladesh",
      },
    ],
  };

  const faqs = [
    {
      q: "How does Fenalt differ from traditional Bangladesh buying houses?",
      a: "Traditional buying houses focus on mega-volume orders (10,000+ units) and pass-through broker fees. Fenalt acts as an active operational liaison—managing small batch runs from 50 units with physical floor audits by our own Dhaka staff.",
    },
    {
      q: "Where is Fenalt's operational team located?",
      a: "Our operational and quality auditing team is physically stationed in Dhaka, Bangladesh, maintaining direct daily oversight across our vetted micro-factory network.",
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
            Dhaka Ground Operations
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Garment Sourcing Agent in{" "}
            <span className="italic font-medium text-[#2D5016]">Dhaka, Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Your on-the-ground manufacturing partner in Bangladesh. We pair your brand with vetted micro-factories, audit floor operations, source circular fabrics, and manage DDP export logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Bangladesh Sourcing <ArrowRight size={16} />
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
              Ground Management
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Why Overseas Brands Need On-Site Oversight
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Sourcing garments in Bangladesh directly from overseas without physical representation can lead to severe communication breakdowns, missed production deadlines, unverified stitching quality, and unexpected logistics delays.
              </p>
              <p>
                <strong>Fenalt provides direct operational liaison:</strong> Our Dhaka-based managers physically visit partner micro-factories daily to supervise pattern cutting, sewing line setup, measurement tolerances (±1.5cm), and carton packing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Sourcing Pillars
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Managed Sourcing Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Dhaka Floor Management",
                tag: "Ground Presence",
                body: "Physical daily oversight of factory floors by our local Dhaka production managers.",
              },
              {
                icon: Factory,
                title: "Micro-Factory Matching",
                tag: "50–300 Units",
                body: "Matching low MOQ order requirements with ethical independent specialized sewing units.",
              },
              {
                icon: Search,
                title: "Circular Fabric Sourcing",
                tag: "Jhoot Deadstock",
                body: "Sourcing premium leftover mill knits in Dhaka to lower fabric costs and minimums.",
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
              Audited Floor Supervision
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
              Sourcing Agent FAQ
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
            Partner with a trusted Dhaka sourcing team
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your production requirements for an all-inclusive landed quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Sourcing Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
