import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, RefreshCw, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainable Textile Sourcing | Fenalt",
  description:
    "Sustainable textile and fabric sourcing in Dhaka, Bangladesh. Access circular deadstock ('Jhoot') fabrics, organic cotton, and eco-certified knits without mill MOQs.",
  alternates: {
    canonical: "https://fenalt.com/sustainable-textile-sourcing",
  },
  openGraph: {
    title: "Sustainable Textile Sourcing | Fenalt",
    description:
      "Sustainable textile and fabric sourcing in Dhaka, Bangladesh. Access circular deadstock ('Jhoot') fabrics, organic cotton, and eco-certified knits without mill MOQs.",
    url: "https://fenalt.com/sustainable-textile-sourcing",
  },
};

export default function SustainableTextileSourcingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sustainable Textile Sourcing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Sustainable Fabric Procurement, Eco Textile Sourcing, Reclaimed Deadstock Fabrics in Dhaka",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Dhaka-based eco-conscious fabric procurement. Sourcing reclaimed export mill deadstock knits, organic cotton, low-impact dyes, and eco-textiles for fashion brands.",
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
        "name": "Sustainable Textile Sourcing",
        "item": "https://fenalt.com/sustainable-textile-sourcing",
      },
    ],
  };

  const faqs = [
    {
      q: "How does Fenalt procure sustainable fabrics in Dhaka?",
      a: "Our Dhaka sourcing team inspects export mill warehouses directly, securing surplus cotton knits ('Jhoot') and organic cotton rolls that meet strict GSM and hand-feel standards.",
    },
    {
      q: "Can small brands get fabric swatches before placing an order?",
      a: "Yes. We send physical fabric swatches to fashion founders to evaluate texture, weight, and stretch before pattern cutting begins.",
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
            Eco-Textile Procurement
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Sustainable Textile Sourcing in{" "}
            <span className="italic font-medium text-[#2D5016]">Dhaka, Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Procure low-impact textiles directly at the source. We connect fashion brands with circular deadstock cotton knits, organic yarns, and low-impact dye facilities without forcing high mill minimums.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Request Eco Swatches <ArrowRight size={16} />
            </Link>
            <Link
              href="/fabric-sourcing-bangladesh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Fabric Sourcing Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Dhaka Textile Sourcing
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Accessing Responsible Mill Overruns
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Sourcing sustainable textiles overseas is often complicated by high fabric minimums (1,000kg+ per dye lot) and opaque supply chain claims.
              </p>
              <p>
                <strong>Fenalt makes eco-textile sourcing accessible:</strong> Our Dhaka team inspects and reclaims export-quality deadstock knits, organic cottons, and recycled polyester blends - delivering physical swatches directly to your studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Textile Categories
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Sustainable Fabric Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RefreshCw,
                title: "Reclaimed Jhoot Deadstock",
                tag: "Circular Knits",
                body: "180gsm–300gsm combed cotton jersey and French Terry fleece reclaimed from export mill overruns.",
              },
              {
                icon: Leaf,
                title: "Combed Organic Cotton",
                tag: "Zero Pesticide",
                body: "Soft, chemical-free organic cotton single jersey and ribbing for t-shirts and loungewear.",
              },
              {
                icon: Search,
                title: "Recycled Synthetic Blends",
                tag: "Performance",
                body: "Recycled polyester-elastane knits for eco-activewear and technical outerwear shells.",
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
              Fabric Testing &amp; Inspection in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically test fabric weight, shrinkage stability, and color fastness before approving fabric for production cutting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "GSM Weight Testing", desc: "Verifying exact fabric density prior to pattern cutting." },
              { title: "Shrinkage Verification", desc: "Pre-wash testing to ensure measurement tolerance stability." },
              { title: "Color Fastness Audit", desc: "Testing dye stability against washing and crocking." },
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
              Textile Sourcing FAQ
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
            Source sustainable fabrics for your garments
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your fabric specifications for physical swatch recommendations within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Textile Sourcing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
