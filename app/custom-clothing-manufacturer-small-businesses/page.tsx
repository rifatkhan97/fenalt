import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Building2, Package, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Clothing Manufacturer for Small Businesses | Fenalt",
  description:
    "Fenalt provides low risk custom clothing manufacturing for small businesses and independent brands. Produce custom apparel starting from 50 units with managed QC.",
  alternates: {
    canonical: "https://fenalt.com/custom-clothing-manufacturer-small-businesses",
  },
  openGraph: {
    title: "Custom Clothing Manufacturer for Small Businesses | Fenalt",
    description:
      "Fenalt provides low risk custom clothing manufacturing for small businesses and independent brands. Produce custom apparel starting from 50 units with managed QC.",
    url: "https://fenalt.com/custom-clothing-manufacturer-small-businesses",
  },
};

export default function SmallBusinessClothingManufacturerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Clothing Manufacturing for Small Businesses",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Small Business Apparel Manufacturing, Custom Brand Clothing Sourcing, Low MOQ Production",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Custom apparel manufacturing for small businesses and commercial brands. Low MOQs starting at 50 units, pattern making, circular fabric options, and managed quality control in Dhaka.",
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
        "name": "Custom Clothing Manufacturer for Small Businesses",
        "item": "https://fenalt.com/custom-clothing-manufacturer-small-businesses",
      },
    ],
  };

  const faqs = [
    {
      q: "What makes Fenalt suitable for small business apparel sourcing?",
      a: "We structure production around small business needs - low MOQs from 50 units, transparent all-inclusive landed pricing, physical sample development, and DDP freight handling.",
    },
    {
      q: "Can small businesses produce fully custom garments with private branding?",
      a: "Yes. Fenalt provides complete private-label finishing including custom woven neck labels, care tags, custom paper hangtags, and branded polybag packaging.",
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
            Small Business Sourcing
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Custom Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Small Businesses.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Low-risk apparel manufacturing tailored for small business owners. Produce custom-branded clothing starting at 50 units with physically managed on-site quality control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Small Business Run <ArrowRight size={16} />
            </Link>
            <Link
              href="/small-batch-clothing-manufacturer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Small Batch Options
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Controlled Sourcing
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Protecting Small Business Inventory Risk
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Small fashion businesses and commercial brands cannot afford capital tie-ups caused by mega-factory minimum order quantities (1,000+ units). Unsold stock threatens cash flow and growth.
              </p>
              <p>
                <strong>Fenalt makes custom small business manufacturing accessible:</strong> We manage small production runs starting at 50 units, providing direct Dhaka floor supervision, circular fabric options, and complete landed freight delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Small Business Solutions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Manufacturing Advantages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "50-Unit Capsule Runs",
                tag: "Low MOQs",
                body: "Produce small initial orders to test sales performance before placing repeat replenishment runs.",
              },
              {
                icon: Package,
                title: "Full Private Labeling",
                tag: "Custom Trims",
                body: "Custom main neck labels, care tags, hangtags, and custom polybags for a complete retail presentation.",
              },
              {
                icon: Layers,
                title: "DDP Global Logistics",
                tag: "Landed Freight",
                body: "Full export documentation, customs clearance, and door-to-door freight delivery to your facility.",
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
              On-Site Floor Audits in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Our Dhaka floor managers inspect every seam, measurement, and label before export - ensuring your small business order arrives in unblemished retail condition.
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
              Small Business FAQ
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
            Ready to manufacture for your small business?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or design sketches for a transparent quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Small Business Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
