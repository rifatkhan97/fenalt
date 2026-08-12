import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RefreshCw, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Circular Fashion Manufacturing | Fenalt",
  description:
    "Circular apparel manufacturing and deadstock fabric utilization. Reclaim surplus cotton knits in Dhaka, reduce textile waste, and launch low MOQ collections from 50 units.",
  alternates: {
    canonical: "https://fenalt.com/circular-fashion-manufacturing",
  },
  openGraph: {
    title: "Circular Fashion Manufacturing | Fenalt",
    description:
      "Circular apparel manufacturing and deadstock fabric utilization. Reclaim surplus cotton knits in Dhaka, reduce textile waste, and launch low MOQ collections from 50 units.",
    url: "https://fenalt.com/circular-fashion-manufacturing",
  },
};

export default function CircularFashionManufacturingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Circular Fashion Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Circular Apparel Production, Reclaimed Fabric Sourcing, Zero Waste Garment Sourcing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Circular fashion manufacturing powered by reclaimed mill deadstock in Dhaka, Bangladesh. Zero virgin fabric waste, small batch capsule runs from 50 units, and on-site QC.",
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
        "name": "Circular Fashion Manufacturing",
        "item": "https://fenalt.com/circular-fashion-manufacturing",
      },
    ],
  };

  const faqs = [
    {
      q: "What defines circular fashion manufacturing at Fenalt?",
      a: "Circular fashion manufacturing replaces linear virgin fabric production by reclaiming high-grade surplus fabric rolls ('Jhoot') from export mill overruns in Dhaka.",
    },
    {
      q: "Does circular deadstock fabric compromise garment quality?",
      a: "No. Reclaimed deadstock consists of unused, export-grade textiles produced by major mills. Our Dhaka team tests fabric GSM, shrinkage, and color fastness before cutting.",
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
            Closed-Loop Production
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Circular Fashion Manufacturing for{" "}
            <span className="italic font-medium text-[#2D5016]">Forward Labels.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Transform textile waste into luxury apparel. Fenalt reclaims high-grade surplus fabric rolls in Dhaka, enabling circular small-batch production from 50 units with managed quality control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Circular Order <ArrowRight size={16} />
            </Link>
            <Link
              href="/sustainable-textile-sourcing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Textile Sourcing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Circular Economy
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Rethinking Apparel Waste Stream
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Millions of meters of pristine export fabric are discarded annually as mill overruns or cancelled order rolls. This linear model wastes water, energy, and raw cotton.
              </p>
              <p>
                <strong>Fenalt redirects surplus fabrics into new collections:</strong> Our Dhaka sourcing team audits and reclaims high-grade cotton deadstock rolls, creating circular capsule lines without virgin fabric resource depletion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Circular Features
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Circular Manufacturing Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RefreshCw,
                title: "Reclaimed Jhoot Deadstock",
                tag: "Zero Waste",
                body: "Rescuing export-quality fabric rolls from Dhaka mills before landfill disposal.",
              },
              {
                icon: Layers,
                title: "Combed Cotton & Fleece",
                tag: "High Grade",
                body: "Reclaiming 180gsm–300gsm cotton single jersey and 400gsm French Terry fleece.",
              },
              {
                icon: Sparkles,
                title: "50-Unit Capsule Production",
                tag: "Low Risk",
                body: "Structuring small runs to ensure garments sell through cleanly without inventory excess.",
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
              Floor Supervision in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically audit stitching, measurement accuracy, and label attachment on the factory floor before garments are approved for export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all circular pieces." },
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
              Circular Fashion FAQ
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
            Launch a circular fashion collection
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your apparel designs for a circular deadstock production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Circular Order <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
