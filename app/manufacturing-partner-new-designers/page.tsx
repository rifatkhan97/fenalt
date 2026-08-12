import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserCheck, Scissors, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Partner for New Designers | Fenalt",
  description:
    "Fenalt serves as the dedicated manufacturing partner for new fashion designers. Guide your brand from sketch to sample approval and small-batch production.",
  alternates: {
    canonical: "https://fenalt.com/manufacturing-partner-new-designers",
  },
  openGraph: {
    title: "Manufacturing Partner for New Designers | Fenalt",
    description:
      "Fenalt serves as the dedicated manufacturing partner for new fashion designers. Guide your brand from sketch to sample approval and small-batch production.",
    url: "https://fenalt.com/manufacturing-partner-new-designers",
  },
};

export default function NewDesignersPartnerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manufacturing Partner for New Designers",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Independent Designer Sourcing, Apparel Manufacturing Partnership, Prototype Development",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Dedicated apparel manufacturing partner for new designers. Guidance on tech packs, pattern grading, circular fabric sourcing, and low MOQ production from 50 units.",
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
        "name": "Manufacturing Partner for New Designers",
        "item": "https://fenalt.com/manufacturing-partner-new-designers",
      },
    ],
  };

  const faqs = [
    {
      q: "How does Fenalt guide new designers through their first manufacturing run?",
      a: "Our Dhaka pattern engineering team translates your flat sketches or reference garments into CAD patterns, assists with fabric selection, and builds physical samples in 10–14 days.",
    },
    {
      q: "What is the minimum quantity for a new designer's first collection?",
      a: "New designers can start with sample capsule drops from 50 units per style, avoiding the heavy capital burden of traditional factory minimums.",
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
            Designer Partnership
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Manufacturing Partner for{" "}
            <span className="italic font-medium text-[#2D5016]">New Designers.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Transform your design vision into physical retail reality. Fenalt acts as your operational liaison—managing pattern development, fabric sourcing, physical sampling, and small batch production from 50 units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Designer Project <ArrowRight size={16} />
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

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Collaborative Sourcing
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Guiding New Fashion Talent
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Emerging fashion designers often possess incredible creative vision but lack direct factory relationships or supply chain experience. High minimums and unmanaged overseas factories create friction and lost capital.
              </p>
              <p>
                <strong>Fenalt bridges design and production:</strong> We match new designers with vetted ethical micro-factories in Dhaka, translating sketches into production patterns and auditing every stitch on the floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Designer Support
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              How We Partner With You
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Pattern & Spec Translation",
                tag: "CAD Patterns",
                body: "Translating your sketches or tech specs into industry-standard production patterns.",
              },
              {
                icon: UserCheck,
                title: "10–14 Day Physical Sampling",
                tag: "Prototypes",
                body: "Creating physical fit samples for your review before committing to bulk production.",
              },
              {
                icon: MessageSquare,
                title: "Direct Floor Oversight",
                tag: "Dhaka Team",
                body: "Our local team in Dhaka manages factory communication and enforces AQL 2.5 quality control.",
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
              On-Site Quality Control in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Our Dhaka floor managers inspect every seam, measurement tolerance (±1.5cm), and trim before export.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Measurement Tolerance (±1.5cm)", desc: "Consistent sizing curves across all designer pieces." },
              { title: "Needle & Metal Detection", desc: "100% safety inspection before final packaging." },
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
              Designer Partnership FAQ
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
            Bring your designer collection to life
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your sketches or tech pack for a fast, no-obligation quote and sampling schedule.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Designer Partnership <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
