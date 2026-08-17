import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Scissors, ShieldCheck, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Hoodie & Sweatshirt Manufacturing | Fenalt",
  description:
    "Develop custom heavyweight hoodies, fleece sweatshirts, and zip-ups starting at low MOQs. Managed sample development, premium cotton French Terry, and on-site QC.",
  alternates: {
    canonical: "https://www.fenalt.com/hoodie-manufacturing",
  },
  openGraph: {
    title: "Custom Hoodie & Sweatshirt Manufacturing | Fenalt",
    description:
      "Develop custom heavyweight hoodies, fleece sweatshirts, and zip-ups starting at low MOQs. Managed sample development, premium cotton French Terry, and on-site QC.",
    url: "https://www.fenalt.com/hoodie-manufacturing",
  },
};

export default function HoodieManufacturingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Hoodie & Sweatshirt Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Hoodie Manufacturing, Custom Fleece Sourcing, Sweatshirt Sample Development",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Custom B2B hoodie and fleece garment manufacturing featuring 350gsm–480gsm French Terry, custom ribbing, physical sample development, and managed on-site QC.",
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
        "name": "Hoodie Manufacturing",
        "item": "https://www.fenalt.com/hoodie-manufacturing",
      },
    ],
  };

  const styles = [
    {
      icon: Layers,
      title: "Heavyweight Pullover Hoodies",
      specs: "380gsm – 480gsm French Terry",
      body: "Double-lined crossover hoods, 1x1 dense ribbing, flatlock seam construction, and custom eyelet hardware.",
    },
    {
      icon: Scissors,
      title: "Full-Zip & Half-Zip Hoodies",
      specs: "350gsm – 420gsm Brushed Fleece",
      body: "Equipped with YKK metal zippers, neck taping, custom pocket placement, and clean interior seam finishes.",
    },
    {
      icon: Ruler,
      title: "Crewneck Sweatshirts & Joggers",
      specs: "350gsm – 400gsm Ring-Spun Cotton",
      body: "Boxy or standard fit crewnecks and matching fleece sweatpants with deep welt pockets and elastic cuffs.",
    },
  ];

  const faqs = [
    {
      q: "How long does custom hoodie sampling take?",
      a: "Physical sample development (pattern making, material sourcing, and prototype construction) typically takes 10 to 14 days following tech pack approval.",
    },
    {
      q: "What is the minimum order quantity for custom hoodies?",
      a: "Fenalt supports hoodie production starting at 50–100 units per style for initial drops, allowing brands to test fits and heavyweight fabrics without massive inventory commitments.",
    },
    {
      q: "What fabric choices are available for hoodies?",
      a: "We offer 100% cotton French Terry, cotton-poly fleece blends, regenerated circular cotton knits, and premium deadstock fleece in weights ranging from 350gsm to 480gsm.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, breadcrumbsJsonLd]) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Custom Fleece &amp; Knitwear
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Custom Hoodie &amp; Sweatshirt{" "}
            <span className="italic font-medium text-[#2D5016]">Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Develop luxury-weight hoodies, zip-ups, and fleece garments with custom 350gsm–480gsm French Terry, physical sample approval, low MOQs, and managed on-site QC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Order Hoodie Samples <ArrowRight size={16} />
            </Link>
            <Link
              href="/streetwear-manufacturing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Streetwear Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Garment Engineering
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Precision Fleece Construction
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                A great hoodie relies on precise pattern balance: hood drop, shoulder drape, rib tension, and fabric stability after washing. Standard blanks often sag or lose shape over time.
              </p>
              <p>
                <strong>Fenalt engineers custom hoodie silhouettes:</strong> We develop physical prototypes in 10–14 days, test pre-wash shrinkages, and physically audit stitching on the factory floor so your hoodies arrive exactly as designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Silhouettes &amp; Specs
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Hoodie &amp; Fleece Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {styles.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882] mb-8">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider mb-4">
                      {item.specs}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QC & Sample Assurance */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Assurance
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              Sample Development to Bulk Production
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Before starting bulk production, we build physical sample prototypes for your fit approval. Our on-site Dhaka team audits hood crossovers, seam strength, and pocket alignments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Physical Fitting Prototypes", desc: "10–14 day sample development for pattern & fit review." },
              { title: "Ribbing & Hardware Matching", desc: "Custom dyed ribbing, eyelets, and metal drawcord tips." },
              { title: "Managed AQL QC Audits", desc: "Final carton inspections before sea or air freight export." },
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

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Hoodie Manufacturing FAQ
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
            Ready to manufacture custom hoodies?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your hoodie tech packs or sketches for a fast, no-obligation quote and sample development estimate.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Hoodie Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
