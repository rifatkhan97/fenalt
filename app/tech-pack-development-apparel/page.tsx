import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, Scissors, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Pack Development for Apparel | Fenalt",
  description:
    "Professional tech pack development and garment spec sheet creation. Translate design sketches into factory-ready production tech packs with full size grading.",
  alternates: {
    canonical: "https://fenalt.com/tech-pack-development-apparel",
  },
  openGraph: {
    title: "Tech Pack Development for Apparel | Fenalt",
    description:
      "Professional tech pack development and garment spec sheet creation. Translate design sketches into factory-ready production tech packs with full size grading.",
    url: "https://fenalt.com/tech-pack-development-apparel",
  },
};

export default function TechPackDevelopmentApparelPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tech Pack Development for Apparel",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Apparel Tech Pack Creation, Garment Specification Sheets, CAD Pattern Engineering",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Professional tech pack creation for fashion brands. Translating vector sketches into factory-ready spec sheets, Bill of Materials (BOM), measurement tables, and grading curves in Dhaka.",
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
        "name": "Tech Pack Development Apparel",
        "item": "https://fenalt.com/tech-pack-development-apparel",
      },
    ],
  };

  const faqs = [
    {
      q: "What components are included in a complete apparel tech pack?",
      a: "A complete tech pack includes vector flat sketches (front/back), Bill of Materials (BOM), fabric GSM/composition specs, measurement spec tables (±1.5cm tolerances), sizing grading curves, label/trim placement, and stitch callouts.",
    },
    {
      q: "Can Fenalt build tech packs from physical reference garments?",
      a: "Yes. If you send us a physical sample garment, our Dhaka engineering team will reverse-engineer its measurements, stitch types, and pattern curves into a digital tech pack.",
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
            Technical Documentation
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Tech Pack Development for{" "}
            <span className="italic font-medium text-[#2D5016]">Apparel Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Eliminate factory misunderstandings. We translate flat design sketches or physical sample garments into complete, factory-ready tech packs with precise measurement tables and BOM specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Develop Tech Pack <ArrowRight size={16} />
            </Link>
            <Link
              href="/apparel-sampling-services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Apparel Sampling
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Factory Blueprint
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              The Universal Language of Apparel Manufacturing
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Sending vague photos or rough sketches to overseas factories inevitably leads to wrong seam placements, inaccurate sizing curves, and wasted sample iterations.
              </p>
              <p>
                <strong>Fenalt creates precise tech packs:</strong> Our pattern engineers in Dhaka construct standardized technical specification packages—defining stitch density, measurement tolerances (±1.5cm), trim details, and fabric compositions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Tech Pack Structure
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Essential Tech Pack Components
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Vector Flats & Callouts",
                tag: "Visual Spec",
                body: "Front, back, and detail CAD line drawings with arrow callouts for pocket, zipper, and seam placements.",
              },
              {
                icon: Layers,
                title: "Bill of Materials (BOM)",
                tag: "Materials",
                body: "Complete component manifest specifying shell fabric GSM, lining, thread type, buttons, and woven labels.",
              },
              {
                icon: Scissors,
                title: "Graded Spec Sheet",
                tag: "Sizing Table",
                body: "Point-of-measure (POM) tables specifying exact dimensions and ±1.5cm tolerances across XS–3XL.",
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
              Enforcing Spec Precision on the Floor
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Our Dhaka quality auditors use your approved tech pack measurement tables during in-line and pre-shipment inspections.
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
              Tech Pack FAQ
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
            Turn your design vision into factory tech packs
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your sketches or physical sample for a tech pack creation estimate.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Tech Pack Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
