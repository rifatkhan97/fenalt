import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Activity, Layers, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "Activewear Manufacturing Bangladesh | Fenalt",
  description:
    "Performance activewear and athletic clothing manufacturing in Dhaka, Bangladesh. Custom leggings, sports bras, moisture-wicking tops, and seamless flatlock stitching.",
  alternates: {
    canonical: "https://www.fenalt.com/activewear-manufacturing-bangladesh",
  },
  openGraph: {
    title: "Activewear Manufacturing Bangladesh | Fenalt",
    description:
      "Performance activewear and athletic clothing manufacturing in Dhaka, Bangladesh. Custom leggings, sports bras, moisture-wicking tops, and seamless flatlock stitching.",
    url: "https://www.fenalt.com/activewear-manufacturing-bangladesh",
  },
};

export default function ActivewearManufacturingBangladeshPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Activewear Manufacturing Bangladesh",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Athletic Clothing Production, Performance Activewear Manufacturing, Flatlock Seam Sourcing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Custom activewear and athletic wear manufacturing in Dhaka, Bangladesh. Moisture-wicking poly-spandex knits, 4-way stretch, flatlock seam construction, and managed quality control.",
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
        "name": "Activewear Manufacturing Bangladesh",
        "item": "https://www.fenalt.com/activewear-manufacturing-bangladesh",
      },
    ],
  };

  const faqs = [
    {
      q: "What technical fabrics does Fenalt source for activewear?",
      a: "We source high-stretch polyester-elastane, nylon-spandex interlock, recycled performance polyester, and moisture-wicking dry-fit meshes.",
    },
    {
      q: "Does Fenalt support flatlock seam stitching for activewear?",
      a: "Yes. Our Dhaka partner facilities utilize 4-needle 6-thread flatlock machinery for chafe-free, durable seams across leggings, sports bras, and compression tops.",
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
            Performance Athletic Wear
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Activewear Manufacturing in{" "}
            <span className="italic font-medium text-[#2D5016]">Dhaka, Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Engineered for movement and recovery. We produce 4-way stretch nylon-spandex leggings, compression tops, and sports bras featuring flatlock seam construction and managed floor QC in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Activewear Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Capabilities Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Technical Performance
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Chafe-Free Athletic Construction
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Activewear manufacturing demands specialized flatlock stitching, high-elasticity thread, and moisture-wicking textile treatments to prevent seam popping during high-intensity training.
              </p>
              <p>
                <strong>Fenalt delivers technical activewear manufacturing:</strong> We pair activewear brands with specialized Dhaka knit units equipped with 4-needle 6-thread flatlock machinery - managing stretch recovery and seam strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Technical Features
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Activewear Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "4-Way Stretch Performance",
                tag: "Nylon & Poly-Spandex",
                body: "220gsm–320gsm high-compression interlock knits for shape retention and squat-proof opacity.",
              },
              {
                icon: Scissors,
                title: "Flatlock Seam Stitching",
                tag: "4-Needle 6-Thread",
                body: "Smooth, lie-flat seam construction preventing skin chafing during intense workouts.",
              },
              {
                icon: Layers,
                title: "Moisture-Wicking Finish",
                tag: "Quick Dry",
                body: "Hydrophilic fabric treatments facilitating fast moisture evaporation and breathability.",
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
              Stretch &amp; Seam Tension Testing
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              We physically test seam stretch recovery, waistband elasticity, and fabric opacity before approving shipments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Strict sizing curve control across all activewear sizes." },
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
              Activewear Manufacturing FAQ
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
            Ready to manufacture performance activewear?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or activewear sketches for a transparent quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Activewear Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
