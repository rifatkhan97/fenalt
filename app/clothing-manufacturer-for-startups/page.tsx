import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Rocket, Layers, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "Clothing Manufacturer for Startups | Fenalt",
  description:
    "Fenalt provides low MOQ clothing manufacturing for startup fashion brands. Launch collections starting at 50 units with physically managed on-site quality control.",
  alternates: {
    canonical: "https://www.fenalt.com/clothing-manufacturer-for-startups",
  },
  openGraph: {
    title: "Clothing Manufacturer for Startups | Fenalt",
    description:
      "Fenalt provides low MOQ clothing manufacturing for startup fashion brands. Launch collections starting at 50 units with physically managed on-site quality control.",
    url: "https://www.fenalt.com/clothing-manufacturer-for-startups",
  },
};

export default function StartupClothingManufacturerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clothing Manufacturing for Startups",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Startup Apparel Manufacturing, Low MOQ Clothing Production, Fashion Brand Prototype Sourcing",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Startup-friendly B2B apparel production starting at 50 units. Pattern making, sample development in 10–14 days, circular fabric sourcing, and physically audited quality control in Dhaka.",
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
        "name": "Clothing Manufacturer for Startups",
        "item": "https://www.fenalt.com/clothing-manufacturer-for-startups",
      },
    ],
  };

  const faqs = [
    {
      q: "What makes Fenalt ideal for startup apparel brands?",
      a: "Fenalt lowers traditional factory barriers for startups - offering capsule order minimums from 50 units, direct English-speaking communication, tech pack guidance, and physical floor supervision in Dhaka.",
    },
    {
      q: "How much upfront capital is required to start a production run?",
      a: "By utilizing low MOQs and circular deadstock fabrics ('Jhoot'), startups can launch sample capsule drops without committing tens of thousands of dollars to high factory minimums.",
    },
    {
      q: "How long does it take to move from sample approval to bulk delivery?",
      a: "Physical sample development takes 10 to 14 days. Once sample fits are approved, bulk production takes 4 to 6 weeks followed by global DDP or FOB shipping.",
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
            Startup Apparel Sourcing
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Startup Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Eliminate traditional factory barriers. Launch custom clothing lines starting at 50 units with managed sampling, circular fabrics, and physical quality control on the ground in Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Startup Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/apparel-sampling-services-startups"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Startup Sampling
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Startup Friendly
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Why Emerging Labels Struggle with Overseas Factories
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                First-time fashion founders face steep obstacles when approaching overseas factories: high minimum order quantities (1,000+ pieces), complex manufacturing terminology, delayed communication, and unverified stitching quality.
              </p>
              <p>
                <strong>Fenalt functions as your startup operational liaison:</strong> We guide emerging designers through tech pack translation, pattern development, sample approvals, and micro-factory matching - making 50–300 unit runs safe, transparent, and manageable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Benefits */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Key Pillars
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Manufacturing Built for Startups
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "50-Unit Initial Drops",
                tag: "Low MOQs",
                subtitle: "Test product-market fit with minimal risk.",
                body: "Launch limited capsule collections without locking up operating capital in unsold inventory.",
              },
              {
                icon: Scissors,
                title: "10–14 Day Fit Sampling",
                tag: "Prototypes",
                subtitle: "Physical sample approval before bulk.",
                body: "Inspect pattern fit, fabric drape, and seam tension on physical prototypes prior to bulk commitment.",
              },
              {
                icon: Layers,
                title: "Circular Fabric Access",
                tag: "Jhoot Deadstock",
                subtitle: "Premium fabrics without mill minimums.",
                body: "Access high-grade leftover cotton knits to avoid expensive fabric mill minimum order requirements.",
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
              Quality Protection
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              On-Site QC Management in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Startup production runs receive full on-site inspection by our local Dhaka team - protecting your brand reputation from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Strict Tolerance (±1.5cm)", desc: "Consistent sizing curves across every startup garment." },
              { title: "Needle & Metal Detection", desc: "100% safety inspection of all finished pieces before shipping." },
              { title: "ANSI/ASQ Z1.4 Audits", desc: "Enforcing international AQL 2.5 final quality benchmarks." },
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
            Related Startup Solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/apparel-sampling-services-startups"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Sampling for Startups <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Physical prototype development &amp; tech pack guidance.</p>
            </Link>
            <Link
              href="/clothing-production-for-instagram-brands"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Instagram Brand Production <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Small batch drops for social fashion brands.</p>
            </Link>
            <Link
              href="/small-batch-clothing-manufacturer"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Small Batch Manufacturing <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Controlled production runs from 50 units.</p>
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
              Startup FAQ
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
            Ready to launch your startup apparel line?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your sketches or tech pack for a fast, no-obligation production quote within 24–48 hours.
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
