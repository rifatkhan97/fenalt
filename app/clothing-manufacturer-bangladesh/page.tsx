import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Heart, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Ethical Clothing Manufacturer in Bangladesh | Fenalt",
  description:
    "Fenalt connects international fashion brands directly with ethical micro-factories in Bangladesh. Fully managed on-site quality control, low MOQs, and clear communication.",
  alternates: {
    canonical: "https://www.fenalt.com/clothing-manufacturer-bangladesh",
  },
  openGraph: {
    title: "Ethical Clothing Manufacturer in Bangladesh | Fenalt",
    description:
      "Fenalt connects international fashion brands directly with ethical micro-factories in Bangladesh. Fully managed on-site quality control, low MOQs, and clear communication.",
    url: "https://www.fenalt.com/clothing-manufacturer-bangladesh",
  },
};

export default function BangladeshManufacturerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Managed Clothing Manufacturing in Bangladesh",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Bangladesh Apparel Sourcing, Ethical Micro-Factory Production, On-Site Quality Audit",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Direct B2B garment sourcing and manufacturing in Dhaka, Bangladesh. Fully managed on-site quality control, tech pack translation, and low MOQ production for fashion brands.",
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
        "name": "Clothing Manufacturer Bangladesh",
        "item": "https://www.fenalt.com/clothing-manufacturer-bangladesh",
      },
    ],
  };

  const pillars = [
    {
      icon: MessageSquare,
      title: "Zero Language Barrier",
      body: "Our Dhaka-based engineering team translates Western tech packs into exact, actionable floor instructions for factory line operators.",
    },
    {
      icon: ShieldCheck,
      title: "Boots-on-the-Ground QC",
      body: "We physically audit stitching, measurement tolerances, and finishing on the factory floor - catching defects before garments leave Dhaka.",
    },
    {
      icon: Heart,
      title: "Ethical Micro-Factory Network",
      body: "We partner exclusively with independent micro-factories, ensuring fair margins and direct economic access for skilled operators.",
    },
  ];

  const faqs = [
    {
      q: "Why manufacture apparel in Bangladesh with Fenalt?",
      a: "Bangladesh is the world's leading center for circular knitwear and garment manufacturing. Fenalt combines this world-class textile ecosystem with physical on-site quality management, making it accessible for independent brands with low minimums.",
    },
    {
      q: "How does Fenalt ensure ethical working conditions?",
      a: "Our local operational team physically visits partner micro-factories regularly. We enforce fair pricing contracts that protect factory operator margins and ensure safe, compliant working environments.",
    },
    {
      q: "Can international clients visit the factories in Dhaka?",
      a: "Yes. We welcome and facilitate guided factory visits for our brand clients, giving you direct visibility into your supply chain and production team.",
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
            Dhaka Operational Presence
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Managed Clothing Manufacturing in{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Access the world&apos;s premier apparel manufacturing hub without the traditional risks. Fenalt matches your brand with ethical micro-factories in Dhaka and manages every floor step with physically embedded QC teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Match With Micro-Factories <ArrowRight size={16} />
            </Link>
            <Link
              href="/operations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Our Operations
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Supply Chain Bridge
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Direct Sourcing, Fully Managed on the Ground
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Sourcing garments directly from overseas factories often presents severe challenges: language barriers, time-zone delays, unverified working conditions, and lack of physical quality oversight.
              </p>
              <p>
                <strong>Fenalt functions as your operational team in Dhaka:</strong> Our headquarters in Dhaka Housing Road manages factory selection, tech pack translation, in-line stitching audits, and customs documentation. You get direct factory access with full Western operational standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Operational Advantage
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              The Fenalt Difference in Dhaka
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10"
                >
                  <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882] mb-8">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dhaka Presence Banner */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-[#C8A882] mb-3">
              <MapPin size={16} />
              <span className="text-xs font-semibold uppercase tracking-widest">Local Headquarters</span>
            </div>
            <h3 className="font-display text-3xl font-light">
              Dhaka Housing Main Road, Level 9, Dhaka - 1207
            </h3>
            <p className="text-sm text-[#E5DDD3] font-light mt-2">
              Physically embedded in Bangladesh&apos;s core garment manufacturing corridor.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2D5016] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#C8A882] hover:text-[#1A1A1A] transition-colors duration-300 flex-shrink-0"
          >
            Contact Dhaka Team <ArrowRight size={14} />
          </Link>
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
              Bangladesh Sourcing FAQ
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
            Start your Bangladesh manufacturing run
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Get matched with ethical micro-factories in Dhaka. Transparent pricing, low minimums, and on-site floor supervision.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
