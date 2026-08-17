import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scissors, Ruler, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Apparel Sampling Services for Startups | Fenalt",
  description:
    "Professional garment sampling and prototype development for startup fashion brands. Physical fit samples in 10–14 days with tech pack pattern development.",
  alternates: {
    canonical: "https://www.fenalt.com/apparel-sampling-services-startups",
  },
  openGraph: {
    title: "Apparel Sampling Services for Startups | Fenalt",
    description:
      "Professional garment sampling and prototype development for startup fashion brands. Physical fit samples in 10–14 days with tech pack pattern development.",
    url: "https://www.fenalt.com/apparel-sampling-services-startups",
  },
};

export default function StartupSamplingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Apparel Sampling Services for Startups",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Apparel Prototype Development, Garment Sampling, Fit Approval for Fashion Startups",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Rapid physical apparel sampling in 10–14 days for startup clothing labels. Pattern making, fabric sourcing, fit revisions, and pre-production approval.",
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
        "name": "Apparel Sampling Services for Startups",
        "item": "https://www.fenalt.com/apparel-sampling-services-startups",
      },
    ],
  };

  const faqs = [
    {
      q: "How long does physical sample development take for startups?",
      a: "Physical sample prototype development typically takes 10 to 14 days following tech pack and material approval.",
    },
    {
      q: "What if the first sample requires fit adjustments?",
      a: "Our Dhaka engineering team reviews sample fit feedback with you and provides pattern adjustments before authorizing bulk production.",
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
            Prototype Development
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Apparel Sampling Services for{" "}
            <span className="italic font-medium text-[#2D5016]">Startup Labels.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Turn your design sketches into physical fit samples in 10 to 14 days. Evaluate fabric drape, stitching quality, and sizing accuracy before committing to bulk production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Order Startup Samples <ArrowRight size={16} />
            </Link>
            <Link
              href="/clothing-manufacturer-for-startups"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Startup Production Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Sampling Importance
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Why Sampling Protects Startup Capital
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Bulk garment manufacturing without physical fit approval is a major risk for new fashion founders. Unchecked sizing errors or poor seam tension can ruin an entire production batch.
              </p>
              <p>
                <strong>Fenalt makes startup sampling seamless:</strong> Our Dhaka pattern engineers translate your tech packs, source matching fabrics, and build physical prototypes in 10–14 days for your hands-on review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Sampling Process
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              The Startup Sampling Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Tech Pack & Patterning",
                tag: "Step 1",
                body: "Translating flat vector sketches or spec sheets into accurate CAD production patterns.",
              },
              {
                icon: Ruler,
                title: "Material Sourcing & Cut",
                tag: "Step 2",
                body: "Matching circular knits or deadstock fabrics, followed by precision hand cutting.",
              },
              {
                icon: CheckCircle2,
                title: "10–14 Day Prototype Delivery",
                tag: "Step 3",
                body: "Delivering physical fit samples directly to your studio for evaluation and final approval.",
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
              On-Site Floor Audits Before Bulk Run
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Once you approve sample fits, our local Dhaka team oversees bulk production to ensure identical quality across every single piece.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control on every production run." },
              { title: "Needle & Metal Detection", desc: "100% safety inspection of finished pieces." },
              { title: "ANSI/ASQ Z1.4 Audits", desc: "AQL 2.5 international quality standards enforced." },
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
            Ready to sample your startup collection?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or design sketches for a fast sample development estimate.
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
