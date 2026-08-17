import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Bangladesh Garment Rules of Origin Guide | Fenalt",
  description:
    "Informational guide explaining Bangladesh apparel Rules of Origin, GSP preferential tariffs, DCTS regulations, and Certificate of Origin compliance.",
  alternates: {
    canonical: "https://www.fenalt.com/bangladesh-garment-rules-of-origin",
  },
  openGraph: {
    title: "Bangladesh Garment Rules of Origin Guide | Fenalt",
    description:
      "Informational guide explaining Bangladesh apparel Rules of Origin, GSP preferential tariffs, DCTS regulations, and Certificate of Origin compliance.",
    url: "https://www.fenalt.com/bangladesh-garment-rules-of-origin",
  },
};

export default function RulesOfOriginPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bangladesh Garment Rules of Origin & Tariff Preference Guide",
    "description":
      "An educational resource outlining apparel Rules of Origin compliance, Generalized System of Preferences (GSP), UK Developing Countries Trading Scheme (DCTS), and Certificate of Origin documentation.",
    "author": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
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
        "item": "https://www.fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bangladesh Garment Rules of Origin",
        "item": "https://www.fenalt.com/bangladesh-garment-rules-of-origin",
      },
    ],
  };

  const faqs = [
    {
      q: "What are Rules of Origin in apparel international trade?",
      a: "Rules of Origin define the criteria required to determine the national origin of a product for custom tariff treatment - specifically verifying where fabrics are knitted/woven and where cutting and sewing occur.",
    },
    {
      q: "How does Fenalt ensure import documentation compliance?",
      a: "Fenalt manages export documentation through our Dhaka operational network - providing complete Certificates of Origin, commercial invoices, and packing lists to support preferential tariff claims.",
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
            Trade &amp; Customs Educational Guide
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Bangladesh Garment Rules of Origin:{" "}
            <span className="italic font-medium text-[#2D5016]">A Sourcing Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Understand how international trade preferences work. Learn how Rules of Origin compliance enables reduced or zero duty rates for Bangladesh apparel imports into key global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Consult Trade Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/uk-apparel-import-considerations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              UK Import Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Trade Compliance
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Navigating Tariff Preference Criteria
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                To qualify for duty-free or reduced tariff treatment under international trade schemes (such as the UK DCTS or EU GSP), imported garments must satisfy specific transformation requirements.
              </p>
              <p>
                <strong>How Fenalt manages documentation:</strong> We ensure all export shipments originating from our Dhaka partner micro-factories carry valid Certificates of Origin and accurate HS tariff classifications for smooth customs clearance.
              </p>
              <div className="p-4 bg-[#F2EFE9] border-l-2 border-[#C8A882] text-xs text-[#6B6560] leading-relaxed">
                <em>Disclaimer: Rules of Origin standards and GSP/DCTS eligibility criteria differ across destination countries and product classifications. Importers must confirm origin rules and documentation requirements with official customs authorities.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Key Requirements
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Rules of Origin Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Certificate of Origin (COO)",
                tag: "Export Doc",
                body: "Official documentation issued in Dhaka verifying Bangladesh manufacturing and transformation.",
              },
              {
                icon: Globe,
                title: "Double Transformation Rule",
                tag: "Knit & Cut",
                body: "Verifying fabric knitting/weaving and garment assembly performed within qualifying trade zones.",
              },
              {
                icon: CheckCircle2,
                title: "Accurate HTS Classification",
                tag: "Customs Clearance",
                body: "Assigning precise 6-digit to 10-digit Harmonized System codes for seamless customs entry.",
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
              Complete Export Compliance Management
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Our Dhaka logistics managers review commercial invoices, packing lists, and origin certificates before container loading.
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
              Rules of Origin FAQ
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
            Need trade and customs guidance?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your apparel production inquiry for an all-inclusive landed quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Sourcing Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
