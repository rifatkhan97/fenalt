import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserCheck, MessageSquare, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Clothing Manufacturer for Independent Brands | Fenalt",
  description:
    "Fenalt connects independent fashion designers and founder-led apparel labels with managed micro-factories. Launch capsule collections starting at 50 units with physically audited quality control.",
  alternates: {
    canonical: "https://www.fenalt.com/clothing-manufacturer-independent-brands",
  },
  openGraph: {
    title: "Clothing Manufacturer for Independent Brands | Fenalt",
    description:
      "Fenalt connects independent fashion designers and founder-led apparel labels with managed micro-factories. Launch capsule collections starting at 50 units with physically audited quality control.",
    url: "https://www.fenalt.com/clothing-manufacturer-independent-brands",
  },
};

export default function IndependentBrandsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clothing Manufacturing for Independent Brands",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Independent Brand Apparel Manufacturing, Emerging Designer Sourcing, Small Batch Clothing Production",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Managed apparel production specifically designed for independent designers and founder-led fashion labels. Low MOQs starting at 50 units, transparent communication, and physically audited QC in Dhaka.",
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
        "name": "Clothing Manufacturer Independent Brands",
        "item": "https://www.fenalt.com/clothing-manufacturer-independent-brands",
      },
    ],
  };

  const faqs = [
    {
      q: "How does Fenalt support independent fashion founders with limited manufacturing experience?",
      a: "Our Dhaka-based engineering team guides independent founders through tech pack review, pattern grading, fabric selection, and fit sample approvals - eliminating supply chain jargon and communication friction.",
    },
    {
      q: "What is the minimum quantity needed to start a production run?",
      a: "Independent brands can start with sample capsule runs from 50 units per style, making it possible to launch new designs without massive upfront capital.",
    },
    {
      q: "How does Fenalt handle quality control for independent designer collections?",
      a: "Our local operational team physically audits in-line sewing, seam strength, measurement tolerances (±1.5cm), and conducts final AQL carton inspections before shipment.",
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
            Founder-Led Fashion Production
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Independent Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Built for independent designers and emerging fashion founders. Produce custom apparel starting from 50 units with direct Dhaka floor management, transparent pricing, and physical quality control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Independent Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/small-batch-clothing-manufacturer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Small Batch Options
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Founder Focus
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              A Direct Bridge to Ethical Manufacturing
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Independent fashion founders often struggle to find manufacturing partners who take small orders seriously. Overseas suppliers frequently ignore low-volume inquiries or deliver substandard stitching without recourse.
              </p>
              <p>
                <strong>Fenalt acts as your operational production team:</strong> We connect independent designers with ethical micro-factories in Dhaka, handling tech pack translation, physical fit sampling, floor quality audits, and DDP shipping straight to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Core Benefits
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Designed for Independent Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Dedicated Project Manager",
                tag: "Zero Barrier",
                subtitle: "Direct English communication.",
                body: "Our Dhaka-based team translates tech specifications into exact factory instructions, providing regular updates throughout production.",
              },
              {
                icon: Layers,
                title: "Capsule Runs ab 50 Units",
                tag: "Low MOQs",
                subtitle: "Protect early-stage cash flow.",
                body: "Launch initial design concepts with 50 to 99 units per style before expanding into larger repeat batches.",
              },
              {
                icon: MessageSquare,
                title: "Sample Approval in 10–14 Days",
                tag: "Fit Approval",
                subtitle: "Physical prototype evaluation.",
                body: "Receive physical fit samples to inspect fabric drape, stitching quality, and measurement curves prior to bulk production.",
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

      {/* QC Oversight */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Protection
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              Physically Audited Floor Operations
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically audit stitching, measurement accuracy, and label attachment on the factory floor before garments are approved for export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Consistent sizing curves across every garment style." },
              { title: "Metal & Needle Detection", desc: "100% safety inspection of all finished pieces." },
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

      {/* Internal Links */}
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
              href="/small-batch-clothing-manufacturer"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Small Batch Manufacturing <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Controlled production runs to minimize inventory risk.</p>
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
              Independent Brand FAQ
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
            Ready to manufacture your independent collection?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or design sketches for a transparent production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Independent Run <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
