import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scissors, Package, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Small Batch Clothing Manufacturer | Fenalt",
  description:
    "Fenalt enables fashion labels and boutique brands to produce small batch clothing collections starting at 50 units with physically managed on-site quality control.",
  alternates: {
    canonical: "https://fenalt.com/small-batch-clothing-manufacturer",
  },
  openGraph: {
    title: "Small Batch Clothing Manufacturer | Fenalt",
    description:
      "Fenalt enables fashion labels and boutique brands to produce small batch clothing collections starting at 50 units with physically managed on-site quality control.",
    url: "https://fenalt.com/small-batch-clothing-manufacturer",
  },
};

export default function SmallBatchClothingManufacturerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Small Batch Clothing Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Small Batch Clothing Production, Small Quantity Apparel Manufacturing, Capsule Run Production",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Small batch garment manufacturing starting at 50 units per style. Fully managed on-site quality control, rapid sampling in 10–14 days, and low inventory risk.",
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
        "name": "Small Batch Clothing Manufacturer",
        "item": "https://fenalt.com/small-batch-clothing-manufacturer",
      },
    ],
  };

  const faqs = [
    {
      q: "What defines a small batch clothing run at Fenalt?",
      a: "A small batch run at Fenalt starts at 50 to 99 units for capsule drops and initial market testing, scaling up to 100–300 units for standard small-series production.",
    },
    {
      q: "How does small batch manufacturing help reduce inventory risk?",
      a: "By ordering smaller quantities, fashion brands test design concepts and real customer demand before scaling production—avoiding tied-up capital and excess unsold inventory.",
    },
    {
      q: "Can I easily reorder a small batch if a style sells out?",
      a: "Yes. Once your patterns, tech packs, and fit specs are established during your initial run, repeat small-batch replenishment runs can be triggered quickly.",
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

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Small Batch &amp; Low-Risk Production
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Small Batch Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Agile Apparel Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Produce small-batch clothing collections starting at 50 units. Protect cash flow, test new product lines, and scale repeat orders with managed on-site quality control in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Small Batch Run <ArrowRight size={16} />
            </Link>
            <Link
              href="/boutique-clothing-manufacturer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Boutique Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Agile Supply Chain
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Eliminating High Minimums for Independent Labels
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Mass apparel manufacturing relies on high-volume runs (1,000+ pieces) to offset factory setup costs. For growing fashion brands, this creates massive inventory commitments and financial vulnerability.
              </p>
              <p>
                <strong>Fenalt makes small-batch clothing production seamless:</strong> By matching your order with specialized independent micro-factories in Dhaka and overseeing floor operations, we make small runs of 50–300 units cost-effective, precise, and dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Small Batch Features */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Production Benefits
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Why Choose Small Batch Production?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Rapid Fit Sampling",
                tag: "10–14 Days",
                subtitle: "Physical prototype development.",
                body: "Develop and refine physical sample prototypes in 10 to 14 days before starting bulk production.",
              },
              {
                icon: Package,
                title: "Capsule Runs ab 50 Units",
                tag: "50–300 Units",
                subtitle: "Low inventory exposure.",
                body: "Launch limited-edition drops and test new fits without tying up operating capital in deadstock.",
              },
              {
                icon: RefreshCw,
                title: "Seamless Replenishment",
                tag: "Repeat Orders",
                subtitle: "Quick reorders for winning styles.",
                body: "Reorder winning bestsellers swiftly once initial market demand is validated by your customer base.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882]">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A882] mb-4">{item.subtitle}</p>
                    <p className="text-sm text-[#6B6560] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* On-Site Quality Control */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Floor Supervision
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              Full Quality Oversight on Small Runs
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Small batch runs receive the exact same rigorous on-site inspection as large-scale productions. Our local Dhaka team inspects every seam, measurement, and trim.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Audit (±1.5cm)", desc: "Verifying size curves across every single batch unit." },
              { title: "Needle & Metal Detection", desc: "100% metal safety detection prior to export carton packing." },
              { title: "ANSI/ASQ Z1.4 Audits", desc: "AQL 2.5 international quality standards enforced on-site." },
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

      {/* Internal Linking Silo */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Related Manufacturing Services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/boutique-clothing-manufacturer"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Boutique Clothing Manufacturer <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Tailored apparel production for boutique retailers.</p>
            </Link>
            <Link
              href="/low-moq-apparel-manufacturing"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Low MOQ Manufacturing <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Circular deadstock fabrics and micro-factory matching.</p>
            </Link>
            <Link
              href="/streetwear-manufacturing"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Streetwear Manufacturing <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Heavyweight fleece and boxy t-shirt production.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Small Batch FAQ
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

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
            Ready to launch your small batch collection?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or design sketches for a transparent production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Small Batch Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
