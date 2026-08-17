import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, DollarSign, Scale, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Apparel Manufacturing Cost Considerations | Fenalt Guide",
  description:
    "Comprehensive guide breaking down garment manufacturing costs. Evaluate FOB vs DDP pricing, fabric GSM impacts, sampling fees, and low MOQ unit economics.",
  alternates: {
    canonical: "https://www.fenalt.com/apparel-manufacturing-cost-considerations",
  },
  openGraph: {
    title: "Apparel Manufacturing Cost Considerations | Fenalt Guide",
    description:
      "Comprehensive guide breaking down garment manufacturing costs. Evaluate FOB vs DDP pricing, fabric GSM impacts, sampling fees, and low MOQ unit economics.",
    url: "https://www.fenalt.com/apparel-manufacturing-cost-considerations",
  },
};

export default function CostConsiderationsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Apparel Manufacturing Cost Breakdown: FOB vs DDP Guide",
    "description":
      "An educational resource for fashion brand founders breaking down garment production cost components - fabric GSM impact, tech pack pattern fees, sampling costs, and landed DDP freight.",
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
        "name": "Apparel Manufacturing Cost Considerations",
        "item": "https://www.fenalt.com/apparel-manufacturing-cost-considerations",
      },
    ],
  };

  const faqs = [
    {
      q: "What is the difference between FOB and DDP pricing in clothing manufacturing?",
      a: "FOB (Free on Board) covers production until garments are loaded on a ship/plane in Dhaka. DDP (Delivered Duty Paid) includes production, export duties, international ocean/air freight, customs entry, and door delivery to your warehouse.",
    },
    {
      q: "Why does Fenalt provide all-inclusive landed pricing?",
      a: "All-inclusive landed pricing eliminates surprise freight surcharges, import duty spikes, and hidden handling fees - giving brand founders exact unit margin clarity before order approval.",
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
            Unit Economics Guide
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Apparel Manufacturing Cost Considerations:{" "}
            <span className="italic font-medium text-[#2D5016]">FOB vs DDP.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Understand the financial anatomy of garment production. Learn how fabric GSM selection, order volume, pattern engineering, and freight incoterms dictate your true landed margin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Get All-Inclusive Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Pricing Transparency
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Cost Breakdown
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Deconstructing Garment Unit Costs
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                First-time fashion brand founders often focus exclusively on the per-unit sewing cost, overlooking critical expense components such as fabric weight (GSM), trim customization, customs duty, and international freight.
              </p>
              <p>
                <strong>Fenalt delivers total pricing transparency:</strong> Every quote we issue is a fully landed price - covering raw materials, pattern grading, physical sampling, in-line floor QC, customs entry, and door-to-door freight.
              </p>
              <div className="p-4 bg-[#F2EFE9] border-l-2 border-[#C8A882] text-xs text-[#6B6560] leading-relaxed">
                <em>Disclaimer: Total landed unit cost varies based on product design, order quantity, fabric weight (GSM), customization techniques, freight mode, and destination country tariffs. Final quotes are confirmed during project intake.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Cost Drivers
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Primary Cost Elements Explained
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "1. Fabric Consumption & GSM",
                tag: "55% – 65% Cost",
                body: "Raw material cost is governed by fabric weight (e.g. 180gsm vs 480gsm fleece) and yield per garment.",
              },
              {
                icon: Scale,
                title: "2. Order Volume & Scale",
                tag: "50 vs 500 Units",
                body: "Fixed factory setup costs spread across larger unit volumes lower individual per-piece sewing expenses.",
              },
              {
                icon: DollarSign,
                title: "3. Freight & Customs Incoterms",
                tag: "FOB vs DDP",
                body: "DDP pricing absorbs ocean/air freight, customs entry brokerage, and import duties into one predictable figure.",
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
              No Hidden Fees Guarantee
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
              Cost Breakdown FAQ
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
            Request an all-inclusive landed quote
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your apparel tech packs or design sketches for a transparent quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Quote Request <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
