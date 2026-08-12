import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Organic Cotton Clothing Manufacturing | Fenalt",
  description:
    "Custom organic cotton clothing manufacturing for eco-conscious apparel brands. Produce 180gsm–300gsm combed organic cotton t-shirts and fleece starting from 50 units.",
  alternates: {
    canonical: "https://fenalt.com/organic-cotton-clothing-manufacturing",
  },
  openGraph: {
    title: "Organic Cotton Clothing Manufacturing | Fenalt",
    description:
      "Custom organic cotton clothing manufacturing for eco-conscious apparel brands. Produce 180gsm–300gsm combed organic cotton t-shirts and fleece starting from 50 units.",
    url: "https://fenalt.com/organic-cotton-clothing-manufacturing",
  },
};

export default function OrganicCottonClothingManufacturingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Organic Cotton Clothing Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Organic Cotton Garment Production, Eco-Friendly Knitwear Sourcing, Organic Apparel Manufacturing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Organic cotton clothing manufacturing for fashion brands. 100% combed organic cotton jersey and French Terry fleece, reactive non-toxic dyes, and managed quality control in Dhaka.",
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
        "name": "Organic Cotton Clothing Manufacturing",
        "item": "https://fenalt.com/organic-cotton-clothing-manufacturing",
      },
    ],
  };

  const faqs = [
    {
      q: "What organic cotton fabrics can Fenalt produce?",
      a: "We source 100% combed organic cotton single jersey (180gsm–240gsm), 1x1 ribbing, and organic cotton French Terry fleece (380gsm–450gsm).",
    },
    {
      q: "What dyes are used for organic cotton apparel runs?",
      a: "We utilize low-impact reactive dyes and eco-certified pigment dyes in Dhaka, providing excellent color fastness while protecting fabric hand-feel.",
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
            Eco-Knit Production
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Organic Cotton Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Eco Fashion Labels.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Engineered for pure hand-feel and skin comfort. Produce 180gsm–300gsm combed organic cotton t-shirts, fleece hoodies, and loungewear starting at 50 units with managed quality control in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Organic Order <ArrowRight size={16} />
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
              Organic Yarn Integrity
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Soft, Chemical-Free Knit Textiles
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Conventional cotton cultivation relies heavily on synthetic pesticides and harsh chemical processing that degrade fiber strength and leave toxic residues in finished clothing.
              </p>
              <p>
                <strong>Fenalt sources premium combed organic cotton:</strong> We knit 100% organic cotton single jersey and fleece in Dhaka, pairing soft tactile feel with non-toxic reactive dyes and physical floor quality supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Textile Features
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Organic Cotton Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Combed Organic Cotton",
                tag: "Pure Fiber",
                body: "Chemical-pesticide free long-staple cotton yarns offering superior hand-feel and durability.",
              },
              {
                icon: Layers,
                title: "Reactive Low-Impact Dyes",
                tag: "Safe Coloring",
                body: "Eco-conscious dye baths achieving rich Pantone shades without harsh heavy metal salts.",
              },
              {
                icon: Sparkles,
                title: "50-Unit Capsule Minimums",
                tag: "Low Risk",
                body: "Manufacture small organic garment drops without committing to massive mill yarn volumes.",
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
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all organic cotton garments." },
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
              Organic Cotton FAQ
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
            Ready to manufacture organic cotton garments?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or garment specs for an organic production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Organic Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
