import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Ruler, CheckCircle2, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Quality Control Services | Fenalt",
  description:
    "Comprehensive apparel quality control and inspection services in Dhaka, Bangladesh. In-line stitching audits, measurement tolerance checks (±1.5cm), needle detection, and AQL 2.5.",
  alternates: {
    canonical: "https://fenalt.com/garment-quality-control-services",
  },
  openGraph: {
    title: "Garment Quality Control Services | Fenalt",
    description:
      "Comprehensive apparel quality control and inspection services in Dhaka, Bangladesh. In-line stitching audits, measurement tolerance checks (±1.5cm), needle detection, and AQL 2.5.",
    url: "https://fenalt.com/garment-quality-control-services",
  },
};

export default function GarmentQualityControlServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garment Quality Control Services",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Apparel Quality Inspection, In-Line Factory Auditing, AQL 2.5 Quality Assurance",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Professional apparel quality control and auditing services in Dhaka, Bangladesh. Measurement tolerance verification (±1.5cm), needle metal detection, and ANSI/ASQ Z1.4 AQL 2.5 audits.",
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
        "name": "Garment Quality Control Services",
        "item": "https://fenalt.com/garment-quality-control-services",
      },
    ],
  };

  const faqs = [
    {
      q: "What international quality benchmarks does Fenalt follow?",
      a: "We follow ANSI/ASQ Z1.4 international sampling standards, enforcing AQL 2.5 acceptable quality limits across major defect categories.",
    },
    {
      q: "What measurement tolerances are acceptable during inspection?",
      a: "Our Dhaka inspectors enforce strict ±1.5cm measurement tolerance limits against approved tech pack sizing tables.",
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
            Physical Inspection
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Garment Quality Control Services in{" "}
            <span className="italic font-medium text-[#2D5016]">Bangladesh.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Protect your fashion brand reputation. Our Dhaka quality engineering team conducts in-line stitching audits, measurement curve checks (±1.5cm), needle metal detection, and final AQL 2.5 pre-shipment inspections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Managed QC <ArrowRight size={16} />
            </Link>
            <Link
              href="/factory-quality-control-bangladesh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Dhaka Floor QC Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Defect Prevention
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Preventing Manufacturing Defect Escalation
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Catching errors after bulk garments arrive in overseas distribution centers is devastatingly expensive. Defective seams, missing care labels, or crooked print alignment erode customer trust.
              </p>
              <p>
                <strong>Fenalt catches defects on the sewing line:</strong> Our on-the-ground auditors in Dhaka physically audit in-line sewing stations, verifying stitch density, seam tension, and point-of-measure specs before carton sealing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              QC Service Pillars
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Inspection Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Pre-Production Material Audit",
                tag: "Fabrics & Trims",
                body: "Verifying fabric GSM, color shade consistency, and trim specs prior to pattern cutting.",
              },
              {
                icon: Ruler,
                title: "In-Line Stitching Audit",
                tag: "Floor Inspection",
                body: "Auditing seam construction, thread tension, and ±1.5cm sizing curve adherence during assembly.",
              },
              {
                icon: CheckCircle2,
                title: "Final AQL 2.5 Carton Audit",
                tag: "Pre-Shipment",
                body: "ANSI/ASQ Z1.4 statistical carton sampling, needle safety detection, and polybag label verification.",
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
              Enforcing Physical Floor Standards
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Every production run undergoes strict on-site inspection before export authorization is granted.
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
              Garment QC FAQ
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
            Ensure flawless quality control on your next run
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your apparel specs for an all-inclusive quality-managed production quote within 24–48 hours.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Managed QC Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
