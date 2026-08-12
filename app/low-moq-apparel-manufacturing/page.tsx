import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Leaf, Scissors, Package, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Low-MOQ Apparel Manufacturing for Independent Brands | Fenalt",
  description:
    "Launch clothing collections with minimum order quantities starting from 50 units. Fenalt provides fully managed B2B manufacturing, circular fabrics, and on-site quality control.",
  alternates: {
    canonical: "https://fenalt.com/low-moq-apparel-manufacturing",
    languages: {
      "en": "https://fenalt.com/low-moq-apparel-manufacturing",
      "de": "https://fenalt.com/de/low-moq-bekleidungshersteller",
      "x-default": "https://fenalt.com/low-moq-apparel-manufacturing",
    },
  },
  openGraph: {
    title: "Low-MOQ Apparel Manufacturing for Independent Brands | Fenalt",
    description:
      "Launch clothing collections with minimum order quantities starting from 50 units. Fenalt provides fully managed B2B manufacturing, circular fabrics, and on-site quality control.",
    url: "https://fenalt.com/low-moq-apparel-manufacturing",
  },
};

export default function LowMOQPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Low-MOQ Apparel Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Low MOQ Clothing Manufacturing, Small Batch Production, Sample Development",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "Small-batch B2B clothing manufacturing starting at 50 units with fully managed on-site quality control, deadstock fabric sourcing, and global freight.",
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
        "name": "Low-MOQ Apparel Manufacturing",
        "item": "https://fenalt.com/low-moq-apparel-manufacturing",
      },
    ],
  };

  const tiers = [
    {
      icon: Scissors,
      title: "Sample & Prototype Run",
      tag: "From 50 Units",
      subtitle: "For early-stage designers testing initial product-market fit.",
      body: "Develop physical prototypes, test pattern accuracy, and produce limited capsule drops without tying up capital in excessive inventory.",
      features: ["Pattern & Sample Development", "Material Sourcing", "Physical Fit Approval", "50–99 Unit Capsule Batch"],
    },
    {
      icon: Package,
      title: "Standard Capsule Production",
      tag: "100–300 Units",
      subtitle: "Our most popular tier for growing DTC apparel brands.",
      body: "Produce seasonal drops using high-grade deadstock or custom knits with full on-site quality control supervision and branded packaging.",
      features: ["100–300 Units per Style", "Circular Deadstock Access", "On-Site Floor QC Audits", "Custom Trims & Labels"],
    },
    {
      icon: Layers,
      title: "Scaling Batch Production",
      tag: "500+ Units",
      subtitle: "For established labels expanding inventory runs with confidence.",
      body: "Transition from small batches to repeat production runs with dedicated factory liaisons, continuous AQL floor audits, and sea-freight logistics.",
      features: ["500+ Unit Orders", "Dedicated Floor Supervisor", "Flexible Incoterms (DDP/FOB)", "Priority Micro-Factory Matching"],
    },
  ];

  const faqs = [
    {
      q: "What is Fenalt's minimum order quantity (MOQ)?",
      a: "Fenalt supports capsule production runs starting at 50 units per style for sample drops, with standard production tiers at 100–300 units and scaling batches at 500+ units.",
    },
    {
      q: "Can I split a low-MOQ order across multiple sizes?",
      a: "Yes. In a 50 or 100 unit production run, units can be ratio-split across standard sizing (e.g., S, M, L, XL) according to your brand's size curve specifications.",
    },
    {
      q: "How does low-MOQ manufacturing remain cost-effective?",
      a: "By partnering with highly efficient independent micro-factories in Dhaka and utilizing premium circular deadstock fabrics ('Jhoot'), we eliminate traditional mega-factory overhead while maintaining accessible minimums.",
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
            Small Batch &amp; Capsule Manufacturing
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Low-MOQ Apparel Manufacturing for{" "}
            <span className="italic font-medium text-[#2D5016]">Emerging Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Eliminate traditional mega-factory minimums. Produce high-quality clothing collections starting from 50 units with zero communication friction, circular fabrics, and physically managed on-site quality control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Low-MOQ Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First / Overview Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Overview
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Why Low-MOQ Production Matters
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Traditional garment manufacturing forces independent designers and growing DTC brands into massive minimum order quantities (often 1,000+ units per style). This ties up working capital, creates inventory risk, and forces brands to compromise on design agility.
              </p>
              <p>
                <strong>Fenalt rewires small-batch apparel sourcing:</strong> By connecting your brand directly with vetted ethical micro-factories and managing every floor step, we make 50–300 unit runs commercially viable, transparent, and quality-guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Tiers */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Flexible Quantities
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Low-MOQ Production Tiers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882]">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider">
                        {tier.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-2">
                      {tier.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A882] mb-4">
                      {tier.subtitle}
                    </p>
                    <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                      {tier.body}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-6 border-t border-[#E5DDD3]">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-[#1A1A1A]">
                        <CheckCircle2 size={14} className="text-[#2D5016] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Fabrics Accent */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
                Circular Materials
              </p>
              <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8 leading-tight">
                Lower Minimums through Deadstock Fabrics
              </h2>
              <div className="space-y-6 text-[#E5DDD3] text-base leading-relaxed font-light">
                <p>
                  One of the biggest hurdles to low MOQs in conventional manufacturing is fabric minimum order quantities imposed by textile mills. Custom dye lots often require thousands of meters.
                </p>
                <p>
                  Fenalt solves this by sourcing high-grade <strong className="text-[#C8A882] font-medium">Jhoot deadstock textiles</strong> - premium cottons and knits leftover from major production runs. This enables low-unit drops using luxury-weight fabrics without incurring custom mill minimums.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8A882] hover:text-[#FAF9F6] transition-colors"
                >
                  Learn about our circular mission <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Leaf,
                  title: "Zero Waste Utilization",
                  desc: "Rerouting unused premium textiles from landfill directly into independent capsule collections.",
                },
                {
                  icon: Shield,
                  title: "Pre-Cut Quality Testing",
                  desc: "Every roll of deadstock undergoes strict weave, GSM, and defect inspection before cutting.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-8 bg-[#2A2A2A] border border-[#3A3A3A]">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon size={20} className="text-[#C8A882]" />
                      <h3 className="font-display text-xl font-medium text-[#FAF9F6]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Common Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Low-MOQ FAQ
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

          <div className="mt-16 text-center">
            <Link
              href="/operations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D5016] hover:gap-4 transition-all duration-300"
            >
              See our full operational &amp; QC process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
            Ready to start your capsule run?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your tech pack or design sketches. Get an all-inclusive quote within 24–48 hours for minimums as low as 50 units.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Low-MOQ Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
