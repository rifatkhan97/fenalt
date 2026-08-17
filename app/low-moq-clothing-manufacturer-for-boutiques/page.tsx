import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Store, Tag, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Low MOQ Clothing Manufacturer for Boutiques | Fenalt",
  description:
    "Specialized low MOQ clothing manufacturing specifically tailored for fashion boutiques. Order small batch apparel drops starting at 50 units with complete private labeling.",
  alternates: {
    canonical: "https://www.fenalt.com/low-moq-clothing-manufacturer-for-boutiques",
  },
  openGraph: {
    title: "Low MOQ Clothing Manufacturer for Boutiques | Fenalt",
    description:
      "Specialized low MOQ clothing manufacturing specifically tailored for fashion boutiques. Order small batch apparel drops starting at 50 units with complete private labeling.",
    url: "https://www.fenalt.com/low-moq-clothing-manufacturer-for-boutiques",
  },
};

export default function LowMOQBoutiquesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Low MOQ Clothing Manufacturing for Boutiques",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Boutique Low MOQ Apparel Manufacturing, Small Batch Retail Sourcing, Private Label Boutique Drops",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Boutique-focused low MOQ clothing production starting at 50 units. Complete custom private labeling, deadstock fabric options, and physically audited quality control in Dhaka.",
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
        "name": "Low MOQ Clothing Manufacturer for Boutiques",
        "item": "https://www.fenalt.com/low-moq-clothing-manufacturer-for-boutiques",
      },
    ],
  };

  const faqs = [
    {
      q: "How does Fenalt customize low MOQ production for boutique retail buyers?",
      a: "We structure production around retail store economics - offering low 50-unit minimums, custom neck labels, hangtag attachment, and size ratio splits to keep boutique inventory lean and profitable.",
    },
    {
      q: "Can boutique stores supply their own fabrics or rely on deadstock?",
      a: "Yes. Boutique clients can either specify exact fabric requirements or access our Dhaka network's premium circular deadstock ('Jhoot') fabrics to lower minimums and material costs.",
    },
    {
      q: "What is the typical shipping lead time for boutique orders?",
      a: "Following sample approval, bulk production takes 4 to 6 weeks. We manage full export documentation and air or sea DDP shipping directly to your boutique store address.",
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
            Boutique Retail Economics
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Low MOQ Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Fashion Boutiques.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Designed specifically for boutique store owners. Order exclusive small-quantity drops starting at 50 units with full private-label finishing and physically managed on-site QC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Get Boutique Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/boutique-clothing-manufacturer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Boutique Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Boutique Sourcing
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Protecting Retail Cash Flow with Low Minimums
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Boutique retailers thrive on offering unique, curated collections that shoppers cannot find in mass department stores. However, traditional apparel sourcing forces boutiques to buy massive quantities that saturate local inventory.
              </p>
              <p>
                <strong>Fenalt tailors low MOQs for boutique retail:</strong> By offering small capsule batches starting at 50 units, we allow boutique buyers to launch frequent, exclusive collections that sell out quickly without leaving dead stock behind.
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
              Boutique Advantages
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Low MOQ Manufacturing Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Store,
                title: "50-Unit Capsule Drops",
                tag: "From 50 Units",
                subtitle: "Controlled capital exposure.",
                body: "Test new trends and customer responses with low unit runs, preserving your boutique's working capital.",
              },
              {
                icon: Tag,
                title: "Private Label Customization",
                tag: "Custom Trims",
                subtitle: "Branded neck labels & tags.",
                body: "Woven main labels, care labels, custom hangtags, and barcode polybagging attached directly during factory finishing.",
              },
              {
                icon: Package,
                title: "Flexible Size Ratios",
                tag: "Custom Ratio",
                subtitle: "Tailored to your store demographic.",
                body: "Split 50 or 100 unit orders across standard sizing curves (S, M, L, XL) based on your boutique customer demand.",
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
              Quality Assurance
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              On-Site QC Management in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Every boutique garment undergoes strict floor inspection by our local Dhaka team to ensure perfect stitching, measurement accuracy, and flawless retail presentation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Audit (±1.5cm)", desc: "Strict tolerance enforcement across all boutique sizes." },
              { title: "Metal & Needle Detection", desc: "100% safety inspection of every finished piece before export." },
              { title: "AQL 2.5 Carton Audits", desc: "International ANSI/ASQ Z1.4 final quality standards." },
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
              href="/low-moq-apparel-manufacturing"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Low MOQ Apparel Overview <ArrowRight size={16} />
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
              Boutique Low MOQ FAQ
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
            Order low MOQ drops for your boutique
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Send us your sketches or tech pack for an all-inclusive production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Boutique Run <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
