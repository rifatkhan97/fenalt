import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Tag, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Label Clothing Manufacturer for Small Brands | Fenalt",
  description:
    "Fenalt provides end-to-end private label clothing manufacturing for small fashion brands. Produce custom garments with your own neck labels, hangtags, and custom fits from 50 units.",
  alternates: {
    canonical: "https://www.fenalt.com/private-label-clothing-manufacturer-small-brands",
  },
  openGraph: {
    title: "Private Label Clothing Manufacturer for Small Brands | Fenalt",
    description:
      "Fenalt provides end-to-end private label clothing manufacturing for small fashion brands. Produce custom garments with your own neck labels, hangtags, and custom fits from 50 units.",
    url: "https://www.fenalt.com/private-label-clothing-manufacturer-small-brands",
  },
};

export default function PrivateLabelSmallBrandsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Label Clothing Manufacturing for Small Brands",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Private Label Apparel Manufacturing, Custom Brand Clothing Production, Small Batch Private Labeling",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Full-service private label clothing production for small fashion brands. Custom patterns, tech pack translation, custom neck labels, hangtags, and physical on-site quality control.",
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
        "name": "Private Label Clothing Manufacturer for Small Brands",
        "item": "https://www.fenalt.com/private-label-clothing-manufacturer-small-brands",
      },
    ],
  };

  const faqs = [
    {
      q: "What does private label manufacturing include at Fenalt?",
      a: "Our private label service covers pattern development, physical fit sampling, custom woven main neck labels, care tags, paper hangtags, custom packaging, and managed bulk production.",
    },
    {
      q: "Can I provide my own tech packs or design sketches?",
      a: "Yes. Our Dhaka engineering team translates your tech packs, vector flat sketches, or physical garment samples into precise factory production patterns.",
    },
    {
      q: "What is the minimum order quantity for private label apparel?",
      a: "We support private label capsule runs starting at 50 units per style, making custom brand production accessible for small fashion labels and emerging designers.",
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
            Custom Brand Production
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Private Label Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Small Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Turn your fashion concept into a fully branded clothing line. Fenalt handles custom pattern making, custom labels, sampling, and managed small-batch production from 50 units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Private Label Run <ArrowRight size={16} />
            </Link>
            <Link
              href="/clothing-manufacturer-independent-brands"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Independent Brand Services
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Private Label Overview
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Empowering Small Fashion Labels to Own Their Brand
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Launching a private-label clothing brand requires more than basic garment sewing. Small fashion brands need exact pattern translation, consistent sizing curves, custom main neck labels, and retail-ready packaging.
              </p>
              <p>
                <strong>Fenalt delivers managed private-label manufacturing:</strong> We handle the complete operational workflow in Dhaka - translating your tech pack, matching your garments with ethical micro-factories, applying custom trims, and inspecting every finished piece before global delivery.
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
              Service Pillars
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Private Label Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Tech Pack & Patterning",
                tag: "10–14 Day Sampling",
                subtitle: "Translating your design vision.",
                body: "Our Dhaka engineers convert your tech packs into precise production patterns and physical fit approval samples.",
              },
              {
                icon: Tag,
                title: "Custom Brand Trims",
                tag: "Woven Labels & Hangtags",
                subtitle: "Full brand personalization.",
                body: "Woven neck labels, printed care instructions, paper hangtags, and custom polybags attached during line assembly.",
              },
              {
                icon: Sparkles,
                title: "Small-Batch Production",
                tag: "From 50 Units",
                subtitle: "Scalable series runs.",
                body: "Produce initial capsule drops starting at 50 units, scaling seamlessly into 100–300 unit reorders as your label grows.",
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

      {/* QC Section */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Assurance
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              On-Site QC for Private Label Success
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically audit stitching, measurement accuracy, and label attachment on the factory floor before garments are approved for export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Consistent sizing curves across every private label style." },
              { title: "Metal & Needle Detection", desc: "100% safety inspection of all finished garments." },
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
              href="/clothing-manufacturer-independent-brands"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Independent Brand Production <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Tailored manufacturing for founder-led apparel brands.</p>
            </Link>
            <Link
              href="/boutique-clothing-manufacturer"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Boutique Clothing Manufacturer <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Curated small batch production for boutique retailers.</p>
            </Link>
            <Link
              href="/low-moq-apparel-manufacturing"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Low MOQ Manufacturing Overview <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Circular deadstock fabrics and micro-factory matching.</p>
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
              Private Label FAQ
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
            Build your private label apparel brand
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech packs or design sketches. Get an all-inclusive private label production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Private Label Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
