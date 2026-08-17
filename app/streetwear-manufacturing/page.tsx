import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shirt, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Streetwear Apparel Manufacturing | Fenalt",
  description:
    "Specialized B2B streetwear manufacturing for independent brands. Produce heavyweight hoodies, oversized tees, and custom fleece with low MOQs and managed quality control.",
  alternates: {
    canonical: "https://www.fenalt.com/streetwear-manufacturing",
    languages: {
      "en": "https://www.fenalt.com/streetwear-manufacturing",
      "de": "https://www.fenalt.com/de/streetwear-hersteller",
      "x-default": "https://www.fenalt.com/streetwear-manufacturing",
    },
  },
  openGraph: {
    title: "Custom Streetwear Apparel Manufacturing | Fenalt",
    description:
      "Specialized B2B streetwear manufacturing for independent brands. Produce heavyweight hoodies, oversized tees, and custom fleece with low MOQs and managed quality control.",
    url: "https://www.fenalt.com/streetwear-manufacturing",
  },
};

export default function StreetwearManufacturingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Streetwear Apparel Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Streetwear Manufacturing, Heavyweight Hoodie Production, Oversized T-Shirt Sourcing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Specialized B2B streetwear clothing production featuring 320gsm–450gsm heavyweight knits, custom drop-shoulder patterns, puff printing, embroidery, and low MOQ capsule runs.",
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
        "name": "Streetwear Manufacturing",
        "item": "https://www.fenalt.com/streetwear-manufacturing",
      },
    ],
  };

  const capabilities = [
    {
      icon: Layers,
      title: "Heavyweight Fleece & Hoodies",
      specs: "380gsm – 480gsm",
      body: "Constructed with premium 100% cotton French Terry or brushed fleece. Features double-lined structured hoods, dense rib cuffs, and reinforced kangaroo pockets.",
    },
    {
      icon: Shirt,
      title: "Oversized & Boxy Tees",
      specs: "240gsm – 300gsm",
      body: "Ring-spun combed cotton featuring drop-shoulder silhouettes, thick 1.25-inch collar ribbing, and pre-shrunk fabric treatments for an immaculate hand-feel.",
    },
    {
      icon: Sparkles,
      title: "Custom Finishing & Branding",
      specs: "Puff, Screen, Embroidery",
      body: "High-density embroidery, screen printing, high-build puff prints, woven neck labels, custom hangtags, and branded polybags tailored for modern streetwear drops.",
    },
  ];

  const faqs = [
    {
      q: "What fabric weights (GSM) do you offer for streetwear?",
      a: "We specialize in heavyweight knits ranging from 240gsm to 300gsm for t-shirts, and 350gsm to 480gsm French Terry or fleece for hoodies, sweatshirts, and sweatpants.",
    },
    {
      q: "Can I provide my own custom streetwear patterns or tech packs?",
      a: "Yes. Our Dhaka engineering team translates your tech packs, spec sheets, or physical sample garments into precise production patterns with custom drop-shoulder or boxy cuts.",
    },
    {
      q: "What is the minimum order quantity for a streetwear collection?",
      a: "Our capsule streetwear runs start at 50–100 units per style, making it easy for independent streetwear labels to drop limited-edition releases without holding excess stock.",
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
            Heavyweight Fabrics &amp; Custom Fits
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Custom Streetwear{" "}
            <span className="italic font-medium text-[#2D5016]">Apparel Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Build high-spec streetwear collections using 320gsm+ heavyweight cottons, French Terry fleece, custom drop-shoulder patterns, and specialized print/embroidery finishing - all backed by on-site QC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Streetwear Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Niche Expertise
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Engineered for Modern Streetwear Standards
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Streetwear garments demand different construction standards than mass-market blanks. Streetwear buyers expect substantial fabric weight, structured hood hangs, dense collar ribbing, and flawless print execution.
              </p>
              <p>
                <strong>Fenalt bridges high-spec streetwear design with ethical manufacturing:</strong> We source heavy-gsm circular textiles, match your drop with specialized knits micro-factories, and physically audit every seam, print, and stitch on the factory floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streetwear Product Capabilities */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Product Focus
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Streetwear Garment Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((item, i) => {
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

      {/* QC Assurance */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Protection
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              On-Site QC for Flawless Streetwear Drops
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              From checking fabric shrinkages on heavy fleece to verifying high-density puff print alignment, our Dhaka-based floor managers inspect every garment before packing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Fabric Shrinkage Checks", desc: "Pre-wash and GSM verifications to protect custom fits." },
              { title: "Print & Stitch Audits", desc: "Inspection of screen alignment, puff height, and flatlock seams." },
              { title: "Needle & Metal Detection", desc: "All finished streetwear passes metal detection before export." },
            ].map((qc, i) => (
              <div key={i} className="p-6 bg-[#2A2A2A] border border-[#3A3A3A]">
                <CheckCircle2 size={20} className="text-[#C8A882] mb-4" />
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
              Streetwear FAQ
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
            Build your next streetwear drop
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Send us your tech packs, sketches, or reference imagery. Receive an all-inclusive manufacturing quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Streetwear Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
