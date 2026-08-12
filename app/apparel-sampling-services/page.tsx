import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scissors, Ruler, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Apparel Sampling Services | Fenalt",
  description:
    "End-to-end garment sampling and prototype development services. Pattern making, fit sample creation in 10–14 days, fabric matching, and pre-production approvals.",
  alternates: {
    canonical: "https://fenalt.com/apparel-sampling-services",
  },
  openGraph: {
    title: "Professional Apparel Sampling Services | Fenalt",
    description:
      "End-to-end garment sampling and prototype development services. Pattern making, fit sample creation in 10–14 days, fabric matching, and pre-production approvals.",
    url: "https://fenalt.com/apparel-sampling-services",
  },
};

export default function ProfessionalApparelSamplingServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Apparel Sampling Services",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Apparel Prototype Sampling, Fit Sample Development, Pattern Making Services",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Professional apparel sampling and prototype development for fashion brands. Pattern engineering, physical sample creation in 10–14 days, fabric matching, and fit review in Dhaka.",
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
        "name": "Apparel Sampling Services",
        "item": "https://fenalt.com/apparel-sampling-services",
      },
    ],
  };

  const faqs = [
    {
      q: "What does Fenalt's professional apparel sampling service include?",
      a: "Our sampling service covers CAD pattern generation, fabric/trim sourcing in Dhaka, physical prototype construction in 10–14 days, and physical fit revisions before bulk production.",
    },
    {
      q: "Can I order samples without placing a bulk order immediately?",
      a: "Yes. Brands can request physical prototype fit samples to evaluate garment quality, fabric hand-feel, and sizing curves prior to issuing bulk production contracts.",
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
            Prototype Engineering
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Professional Apparel Sampling Services for{" "}
            <span className="italic font-medium text-[#2D5016]">Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Validate fit, drape, and stitching before bulk manufacturing. Our Dhaka sample room builds physical prototypes in 10 to 14 days with precise CAD pattern engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Order Prototype Sample <ArrowRight size={16} />
            </Link>
            <Link
              href="/tech-pack-development-apparel"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Tech Pack Support
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Pre-Production Rigor
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Why Physical Sampling Is Non-Negotiable
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Digital 3D renders cannot replicate real fabric drape, seam stretch under tension, or physical hand-feel. Skipping physical sampling leads to costly bulk production defects.
              </p>
              <p>
                <strong>Fenalt delivers physical sample precision:</strong> Our Dhaka sample technicians construct first-fit prototypes in 10–14 days, verifying grading specs (±1.5cm tolerance) and seam construction before factory floor handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Sampling Workflow
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Our Sampling Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "CAD Pattern Generation",
                tag: "Digital Grading",
                body: "Creating precise production patterns and grading across full size curves (XS to 3XL).",
              },
              {
                icon: Ruler,
                title: "Physical Fit Prototypes",
                tag: "10–14 Days",
                body: "Sewing physical samples using target fabrics to evaluate drape, collar placement, and sleeve fit.",
              },
              {
                icon: CheckCircle2,
                title: "Pre-Production (PP) Approval",
                tag: "Green Light",
                body: "Final Golden Sample sign-off serving as the binding quality standard for bulk assembly.",
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
              Dhaka Floor Supervision Standards
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically audit stitching, measurement accuracy, and label attachment on the factory floor before garments are approved for export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all sample garments." },
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
              Sampling FAQ
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
            Ready to build physical garment samples?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your design sketches or tech pack for a fast sampling timeline and cost breakdown.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Sampling Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
