import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RefreshCw, Leaf, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainable Streetwear Manufacturing | Fenalt",
  description:
    "Eco-conscious streetwear manufacturing in Dhaka, Bangladesh. Reclaim heavy circular deadstock fleece ('Jhoot'), organic cotton, and low MOQs from 50 units.",
  alternates: {
    canonical: "https://www.fenalt.com/sustainable-streetwear-manufacturing",
  },
  openGraph: {
    title: "Sustainable Streetwear Manufacturing | Fenalt",
    description:
      "Eco-conscious streetwear manufacturing in Dhaka, Bangladesh. Reclaim heavy circular deadstock fleece ('Jhoot'), organic cotton, and low MOQs from 50 units.",
    url: "https://www.fenalt.com/sustainable-streetwear-manufacturing",
  },
};

export default function SustainableStreetwearManufacturingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sustainable Streetwear Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Sustainable Streetwear Apparel Manufacturing, Circular Deadstock Sourcing, Eco-Friendly Streetwear Drops",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Eco-conscious streetwear apparel manufacturing in Dhaka, Bangladesh. Reclaiming surplus export mill deadstock fleece ('Jhoot'), organic cotton knits, low-impact dyes, and low MOQ capsule drops.",
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
        "name": "Sustainable Streetwear Manufacturing",
        "item": "https://www.fenalt.com/sustainable-streetwear-manufacturing",
      },
    ],
  };

  const faqs = [
    {
      q: "How does Fenalt enable eco-friendly streetwear production in Bangladesh?",
      a: "We source reclaimed circular deadstock ('Jhoot') cotton knits and heavy fleece rolls in Dhaka, allowing streetwear labels to create heavyweight capsule lines without consuming virgin mill resources.",
    },
    {
      q: "Are small batch eco-streetwear drops available starting from 50 units?",
      a: "Yes. Production options can start from 50 units per style for qualifying sustainable streetwear projects.",
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
            Circular Streetwear Sourcing
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Sustainable Streetwear Manufacturing in{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Heavyweight streetwear silhouettes built on circular principles. Reclaim surplus export mill deadstock fleece in Dhaka, utilize organic cotton, and manufacture small batch drops starting at 50 units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Eco Streetwear Drop <ArrowRight size={16} />
            </Link>
            <Link
              href="/sustainable-apparel-manufacturing-bangladesh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Sustainable Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Circular Textiles
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Rethinking Heavyweight Fleece Waste
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Streetwear consumers demand thick 380gsm–480gsm French Terry fleece hoodies, but virgin cotton cultivation requires extensive water and energy resources.
              </p>
              <p>
                <strong>Fenalt redirects high-grade mill deadstock:</strong> Our Dhaka sourcing team reclaims surplus export fleece rolls (&lsquo;Jhoot&rsquo;), producing limited-edition, heavy-drape streetwear lines without virgin material depletion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Eco Features
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Sustainable Streetwear Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RefreshCw,
                title: "Reclaimed Jhoot Deadstock",
                tag: "Circular Textiles",
                body: "Rescuing 350gsm–480gsm export fleece rolls in Dhaka before landfill disposal.",
              },
              {
                icon: Leaf,
                title: "Combed Organic Cotton",
                tag: "Eco-Yarns",
                body: "Soft, chemical-free 100% organic cotton single jersey for luxury streetwear tees.",
              },
              {
                icon: Sparkles,
                title: "Lean 50-Unit Drops",
                tag: "Zero Overstock",
                body: "Production options start from 50 units per style to prevent excess inventory waste.",
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
              Sustainable Streetwear FAQ
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
            Launch a sustainable streetwear drop
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your streetwear specs for a circular deadstock production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Sustainable Order <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
