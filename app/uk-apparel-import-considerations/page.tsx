import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Apparel Import Considerations | Fenalt Guide",
  description:
    "Guide for UK fashion brands importing clothing from Bangladesh under the Developing Countries Trading Scheme (DCTS). Duty rates, customs clearance, and DDP shipping.",
  alternates: {
    canonical: "https://fenalt.com/uk-apparel-import-considerations",
  },
  openGraph: {
    title: "UK Apparel Import Considerations | Fenalt Guide",
    description:
      "Guide for UK fashion brands importing clothing from Bangladesh under the Developing Countries Trading Scheme (DCTS). Duty rates, customs clearance, and DDP shipping.",
    url: "https://fenalt.com/uk-apparel-import-considerations",
  },
};

export default function UKApparelImportPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "UK Apparel Import Considerations: Bangladesh Sourcing Guide",
    "description":
      "An educational guide for UK fashion brands importing clothing from Bangladesh under the UK Developing Countries Trading Scheme (DCTS)—covering duty preferences, VAT accounting, and DDP logistics.",
    "author": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
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
        "name": "UK Apparel Import Considerations",
        "item": "https://fenalt.com/uk-apparel-import-considerations",
      },
    ],
  };

  const faqs = [
    {
      q: "How does the UK DCTS scheme benefit UK apparel brands importing from Bangladesh?",
      a: "The Developing Countries Trading Scheme (DCTS) provides preferential tariff treatment for qualifying garments exported from Bangladesh to the UK, significantly lowering import duty costs.",
    },
    {
      q: "Does Fenalt handle UK customs clearance and DDP shipping?",
      a: "Yes. Fenalt provides complete DDP (Delivered Duty Paid) shipping to UK addresses—handling export declaration in Dhaka, international freight, UK customs entry, and door delivery.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            UK Market Trade Guide
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            UK Apparel Import Considerations:{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh Sourcing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            A comprehensive guide for UK fashion brands importing clothing from Bangladesh under DCTS trade preferences. Learn how landed DDP freight eliminates UK customs complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Get UK Landed Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/bangladesh-garment-rules-of-origin"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Rules of Origin
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              UK Trade Framework
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Navigating UK DCTS Tariff Preferences
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                UK clothing brands and streetwear labels importing from Bangladesh may take advantage of the Developing Countries Trading Scheme (DCTS), which provides preferential tariff rates for eligible apparel items meeting origin criteria.
              </p>
              <p>
                <strong>Fenalt simplifies UK import logistics:</strong> We facilitate export documentation in Dhaka and coordinate door-to-door DDP (Delivered Duty Paid) freight delivery to UK warehouse addresses.
              </p>
              <div className="p-4 bg-[#F2EFE9] border-l-2 border-[#C8A882] text-xs text-[#6B6560] leading-relaxed">
                <em>Disclaimer: Trade regulations, tariff rates, and HMRC customs rules vary by product category and fabric composition, and are subject to change. Importers should confirm specific duty classifications with a licensed UK customs broker or relevant trade authority.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Key Considerations
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Essential UK Sourcing Factors
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "UK DCTS Tariff Preference",
                tag: "Duty Efficiency",
                body: "Eligible garments exported from Bangladesh may qualify for reduced or preferential UK import duty rates under DCTS guidelines.",
              },
              {
                icon: FileText,
                title: "Certificate of Origin (COO)",
                tag: "Customs Entry",
                body: "Issued directly in Dhaka to validate manufacturing origin for HMRC customs inspection.",
              },
              {
                icon: CheckCircle2,
                title: "Door-to-Door DDP Freight",
                tag: "Landed Pricing",
                body: "Fenalt covers international freight, UK customs entry, import VAT processing, and door delivery.",
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
              UK Import FAQ
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
            Import custom apparel to the UK with confidence
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your apparel specs for an all-inclusive landed UK quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start UK Import Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
