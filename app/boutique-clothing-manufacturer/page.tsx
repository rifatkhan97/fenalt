import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Store, Package, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique Clothing Manufacturer | Fenalt",
  description:
    "Fenalt provides managed boutique clothing manufacturing for retail store owners and boutique fashion labels. Small batch production starting at 50 units with on-site quality control.",
  alternates: {
    canonical: "https://fenalt.com/boutique-clothing-manufacturer",
  },
  openGraph: {
    title: "Boutique Clothing Manufacturer | Fenalt",
    description:
      "Fenalt provides managed boutique clothing manufacturing for retail store owners and boutique fashion labels. Small batch production starting at 50 units with on-site quality control.",
    url: "https://fenalt.com/boutique-clothing-manufacturer",
  },
};

export default function BoutiqueClothingManufacturerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Boutique Clothing Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Boutique Apparel Manufacturing, Small Batch Retail Sourcing, Private Label Clothing Production",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description":
      "B2B apparel production for boutique stores and independent fashion buyers. Produce custom capsule runs starting at 50 units with on-site quality control and global DDP freight.",
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
        "name": "Boutique Clothing Manufacturer",
        "item": "https://fenalt.com/boutique-clothing-manufacturer",
      },
    ],
  };

  const faqs = [
    {
      q: "What is the minimum order quantity for boutique garment runs?",
      a: "Fenalt supports boutique capsule runs starting at 50 units per style, allowing retail store owners and boutique buyers to test new collections without incurring large inventory risk.",
    },
    {
      q: "Can I sell these garments under my own boutique brand name?",
      a: "Yes. All production through Fenalt is fully private-label ready. We handle custom woven neck labels, care tags, custom hangtags, and branded polybag packaging according to your store's exact branding.",
    },
    {
      q: "How does Fenalt ensure the quality matches boutique standards?",
      a: "Our Dhaka-based operational team physically audits every step on the factory floor—verifying fabric GSM, seam strength, measurement tolerances (±1.5cm), and conducting final AQL carton inspections before shipment.",
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Small-Batch Retail Production
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Boutique Clothing Manufacturer for{" "}
            <span className="italic font-medium text-[#2D5016]">Curated Fashion Labels.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Build custom apparel lines tailored for boutique retail. Fenalt pairs your store with vetted micro-factories in Dhaka, managing production from 50 units with physical on-site quality control and complete private-label finishing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Boutique Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/small-batch-clothing-manufacturer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Small Batch Options
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Boutique Focus
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Why Boutique Retailers Need Managed Sourcing
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Boutique fashion buyers face a unique dilemma: off-the-shelf wholesale lines often lack exclusivity, while traditional mega-factories mandate 1,000+ unit minimums that tie up retail capital and cause inventory overstock.
              </p>
              <p>
                <strong>Fenalt solves small-scale boutique apparel manufacturing:</strong> We enable boutique owners to produce custom-designed capsule collections starting at 50 units. With our Dhaka-based floor managers supervising cut, sew, and trim steps, your retail racks feature exclusive, luxury-quality garments with zero communication delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Sourcing Capabilities */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Tailored Services
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Built for Independent Retailers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Store,
                title: "Exclusivity & Small Drops",
                tag: "50–99 Units",
                subtitle: "Maintain retail exclusivity without massive inventory.",
                body: "Produce limited-edition seasonal drops that keep your boutique catalog fresh without committing capital to slow-moving inventory.",
              },
              {
                icon: Sparkles,
                title: "Complete Private Labeling",
                tag: "Custom Finishing",
                subtitle: "Your store brand on every garment.",
                body: "Custom woven neck labels, care tags, paper hangtags, and branded polybag packaging applied directly on the factory floor.",
              },
              {
                icon: Package,
                title: "Managed Global Shipping",
                tag: "DDP / FOB Freight",
                subtitle: "Hassle-free customs and door delivery.",
                body: "We handle export documentation, customs clearance, and DDP (Delivered Duty Paid) shipping straight to your boutique storefront.",
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

      {/* QC Assurance */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Quality Assurance
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              Boutique Quality Delivered Every Time
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Boutique customers expect flawless stitching, accurate sizing, and soft fabric hand-feel. Our Dhaka operational team inspects every production run before carton packing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Strict Tolerance (±1.5cm)", desc: "Consistent measurement curves across all sizing runs." },
              { title: "Metal & Needle Detection", desc: "100% safety inspection of all finished garments." },
              { title: "AQL 2.5 Carton Audits", desc: "International ANSI/ASQ Z1.4 quality standards enforced." },
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

      {/* Internal Link Cluster */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Related Manufacturing Services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/small-batch-clothing-manufacturer"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Small Batch Manufacturing <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Controlled production runs to minimize inventory risk.</p>
            </Link>
            <Link
              href="/low-moq-clothing-manufacturer-for-boutiques"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Low MOQ for Boutiques <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Low minimum quantities tailored for retail stores.</p>
            </Link>
            <Link
              href="/low-moq-apparel-manufacturing"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Low MOQ Manufacturing Overview <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Circular deadstock fabrics and micro-factory matching.</p>
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
              Boutique Manufacturing FAQ
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
            Ready to manufacture for your boutique?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Submit your design sketches or tech pack. Get an all-inclusive production quote within 24–48 hours for minimums as low as 50 units.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Start Your Boutique Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
