import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Scissors,
  Package,
  TruckIcon,
  CheckCircle,
  ArrowRight,
  Layers,
  Shirt,
  Wind,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Apparel Manufacturing & Sourcing Capabilities | Fenalt",
  description:
    "Discover Fenalt's end-to-end B2B garment manufacturing capabilities. We offer professional sample development, low-MOQ capsule runs, custom finishing, and scaling production with on-site quality control.",
  alternates: {
    canonical: "https://fenalt.com/capabilities",
    languages: {
      "en": "https://fenalt.com/capabilities",
      "de": "https://fenalt.com/de/bekleidungshersteller",
      "x-default": "https://fenalt.com/capabilities",
    },
  },
  openGraph: {
    title: "B2B Apparel Manufacturing & Sourcing Capabilities | Fenalt",
    description:
      "Discover Fenalt's end-to-end B2B garment manufacturing capabilities. We offer professional sample development, low-MOQ capsule runs, custom finishing, and scaling production with on-site quality control.",
    url: "https://fenalt.com/capabilities",
  },
};

const bookingOptions = [
  {
    icon: Scissors,
    title: "Sample Development",
    subtitle: "For brands with a vision.",
    description:
      "Includes pattern making, material sourcing, and physical prototypes. Understand exactly how your garment will perform before committing to production.",
    features: ["Pattern Making", "Material Sourcing", "Physical Prototypes", "Fit Review"],
    tag: "Exploration",
  },
  {
    icon: Package,
    title: "Low-MOQ Capsule",
    subtitle: "For limited drops of 100–300 units.",
    description:
      "Utilizing premium deadstock circular fabrics, our capsule booking is designed for brands launching seasonal collections without the burden of massive minimum orders.",
    features: ["100–300 Units", "Circular Deadstock", "QC Managed", "Branded Packaging"],
    tag: "Most Popular",
    highlight: true,
  },
  {
    icon: TruckIcon,
    title: "Scaling Production",
    subtitle: "For established brands at 500+ units.",
    description:
      "Includes continuous floor audits, dedicated factory liaison, and fully managed international freight for brands ready to scale with confidence.",
    features: ["500+ Units", "Floor Audits", "Managed Freight", "Priority Matching"],
    tag: "Scale",
  },
];

const textiles = [
  {
    icon: Layers,
    name: "Heavyweight Cottons",
    desc: "320gsm+ ring-spun and combed cotton. Durable, premium hand-feel, ideal for structured garments and outerwear.",
    color: "bg-[#D4C9B8]",
  },
  {
    icon: Wind,
    name: "Circular Knitwear",
    desc: "Regenerated cotton and recycled fibre knits. Buttery-soft and traceable from mill to micro-factory.",
    color: "bg-[#C8D8C0]",
  },
  {
    icon: Shirt,
    name: "Terry Cloth",
    desc: "Loop-pile terry and waffle textures in organic and conventional cotton for activewear and loungewear.",
    color: "bg-[#D8CEB8]",
  },
  {
    icon: Sparkles,
    name: "Deadstock Blends",
    desc: "Premium off-cut fabric blends rescued from mega-factory discard piles. Every metre tells a story.",
    color: "bg-[#C4C8D4]",
  },
];

const finishingItems = [
  {
    title: "Retail-Ready Finishing",
    desc: "Polybagging, barcode sticker application, and folding to your exact fulfillment center specifications.",
  },
  {
    title: "Custom Woven Labels",
    desc: "Brand labels, care labels, and size labels produced to your exact specs.",
  },
  {
    title: "Screen Printing",
    desc: "Water-based and plastisol printing with precise Pantone colour matching.",
  },
  {
    title: "Precision Embroidery",
    desc: "High-density embroidery with consistent stitch tension across every unit.",
  },
];

export default function CapabilitiesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "B2B Apparel Manufacturing & Sourcing",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com"
    },
    "serviceType": "Apparel Sourcing, Sample Development, Low-MOQ Capsule Production, Quality Control Management",
    "areaServed": ["United States", "United Kingdom", "European Union", "Australia", "Canada"],
    "description": "End-to-end B2B garment manufacturing capabilities including pattern making, sample development, low-MOQ capsule runs, custom finishing, on-site QC, and global freight."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* ─── Section 1: Header ───────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C8A882] blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            What We Offer
          </p>
          <h1 className="font-display text-5xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-4xl">
            Tailored B2B{" "}
            <span className="italic font-medium text-[#2D5016]">
              Garment Sourcing
            </span>{" "}
            &amp; Production.
          </h1>
          <p className="mt-8 text-lg text-[#6B6560] max-w-2xl leading-relaxed">
            From your first prototype to scaling runs of thousands - every
            capability at Fenalt is designed to remove friction, maintain
            quality, and protect your brand.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Booking Options ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Production Tiers
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Booking Options
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#E5DDD3]">
            {bookingOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <div
                  key={i}
                  className={`p-10 lg:p-12 relative flex flex-col ${
                    opt.highlight
                      ? "bg-[#1A1A1A] text-[#FAF9F6]"
                      : "bg-[#FAF9F6] text-[#1A1A1A]"
                  } ${i !== 0 ? "border-t lg:border-t-0 lg:border-l border-[#E5DDD3]" : ""}`}
                >
                  {opt.highlight && (
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
                        {opt.tag}
                      </span>
                    </div>
                  )}
                  {!opt.highlight && (
                    <span className="inline-block mb-6 px-2 py-0.5 border border-[#E5DDD3] text-[#6B6560] text-xs uppercase tracking-widest">
                      {opt.tag}
                    </span>
                  )}

                  <Icon
                    size={28}
                    className={`mb-8 ${opt.highlight ? "text-[#C8A882]" : "text-[#C8A882]"}`}
                    strokeWidth={1.5}
                  />
                  <h3
                    className={`font-display text-3xl font-medium mb-2 ${
                      opt.highlight ? "text-[#FAF9F6]" : "text-[#1A1A1A]"
                    }`}
                  >
                    {opt.title}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      opt.highlight ? "text-[#C8A882]" : "text-[#6B6560]"
                    }`}
                  >
                    {opt.subtitle}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mb-8 flex-1 ${
                      opt.highlight ? "text-[#E5DDD3]" : "text-[#6B6560]"
                    }`}
                  >
                    {opt.description}
                  </p>

                  <ul className="space-y-2 mb-10">
                    {opt.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-center gap-2 text-sm ${
                          opt.highlight ? "text-[#E5DDD3]" : "text-[#6B6560]"
                        }`}
                      >
                        <CheckCircle
                          size={14}
                          className={opt.highlight ? "text-[#C8A882]" : "text-[#2D5016]"}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/intake"
                    className={`inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                      opt.highlight
                        ? "bg-[#C8A882] text-[#1A1A1A] hover:bg-[#FAF9F6]"
                        : "border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6]"
                    }`}
                  >
                    Book This Tier <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Sourcing Library ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Our Materials
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Sourcing Library
            </h2>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Top row: large + small */}
            {textiles.map((textile, i) => {
              const Icon = textile.icon;
              return (
                <div
                  key={i}
                  className={`${i === 0 ? "sm:col-span-2" : ""} ${
                    i === 3 ? "sm:col-span-2 lg:col-span-1" : ""
                  } group relative overflow-hidden p-8 lg:p-10 min-h-[240px] flex flex-col justify-between cursor-default ${textile.color}`}
                >
                  <div>
                    <Icon
                      size={24}
                      className="text-[#1A1A1A]/40 mb-6 group-hover:text-[#2D5016] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-[#1A1A1A] mb-3">
                      {textile.name}
                    </h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">
                      {textile.desc}
                    </p>
                  </div>
                  <div className="h-px bg-[#1A1A1A]/20 mt-6" />
                </div>
              );
            })}
          </div>

          {/* Image accent */}
          <div className="mt-4 relative aspect-[21/6] overflow-hidden">
            <Image
              src="/images/fabric_swatches_grid.jpg"
              alt="Fabric swatches from our sourcing library"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F2EFE9]/80 to-transparent" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2">
              <p className="font-display text-3xl font-light text-[#1A1A1A] italic">
                Sourced with intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Finishing & Details ──────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
                The Final Touchpoints
              </p>
              <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-6">
                Finishing &amp; Details
              </h2>
              <p className="text-[#6B6560] leading-relaxed text-lg">
                We manage the final touchpoints that define how your customer
                experiences the product. Every detail is coordinated and
                quality-checked by our on-site team.
              </p>
            </div>

            <div className="space-y-0">
              {finishingItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-8 border-b border-[#E5DDD3] group"
                >
                  <span className="font-display text-3xl font-light text-[#C8A882]/50 min-w-[2rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#2D5016] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Portfolio Highlight ──────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Our Work
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Portfolio Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large feature image */}
            <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden group">
              <Image
                src="/images/garment_detail_seams.jpg"
                alt="Precision seam construction on premium cotton garment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent">
                <p className="text-[#FAF9F6] font-display text-xl font-light">
                  Seam Construction Detail
                </p>
              </div>
            </div>

            {/* Side image */}
            <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden group">
              <Image
                src="/images/finished_garment_collection.jpg"
                alt="Finished sustainable garment collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent">
                <p className="text-[#FAF9F6] font-display text-xl font-light">
                  Finished Collection
                </p>
              </div>
            </div>

            {/* Bottom left */}
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src="/images/deadstock_fabric_rolls.jpg"
                alt="Deadstock circular fabric rolls"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent">
                <p className="text-[#FAF9F6] font-display text-lg font-light">
                  Deadstock Materials
                </p>
              </div>
            </div>

            {/* Stat card */}
            <div className="bg-[#1A1A1A] p-10 flex flex-col justify-center">
              <p className="font-display text-6xl font-light text-[#C8A882] mb-3">
                98%
              </p>
              <p className="text-sm text-[#E5DDD3] leading-relaxed">
                Of our garments pass first-inspection QC on delivery.
              </p>
            </div>

            {/* Quote card */}
            <div className="bg-[#2D5016] p-10 flex flex-col justify-center">
              <p className="font-display text-2xl font-light text-[#FAF9F6] italic leading-snug">
                &ldquo;Every stitch, audited. Every piece, delivered.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Specialized Manufacturing Clusters ───────────── */}
      <section className="py-20 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
            Specialized Solutions
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">
            Production Tailored by Brand Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/boutique-clothing-manufacturer"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Boutique Manufacturing <ArrowRight size={16} />
              </h3>
              <p className="text-xs text-[#6B6560] mt-2">Custom apparel production for retail boutique stores.</p>
            </Link>
            <Link
              href="/small-batch-clothing-manufacturer"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Small Batch Production <ArrowRight size={16} />
              </h3>
              <p className="text-xs text-[#6B6560] mt-2">Controlled unit runs starting from 50 pieces.</p>
            </Link>
            <Link
              href="/private-label-clothing-manufacturer-small-brands"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Private Labeling <ArrowRight size={16} />
              </h3>
              <p className="text-xs text-[#6B6560] mt-2">Full custom neck labeling, hangtags, and packaging.</p>
            </Link>
            <Link
              href="/clothing-manufacturer-independent-brands"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Independent Labels <ArrowRight size={16} />
              </h3>
              <p className="text-xs text-[#6B6560] mt-2">Dedicated sourcing for founder-led apparel brands.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Pricing Transparency ────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="border-l-4 border-[#2D5016] pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              No Surprises
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-8">
              Pricing Transparency
            </h2>
            <div className="space-y-6 text-[#6B6560] leading-relaxed text-lg">
              <p>
                Every quote from Fenalt is a{" "}
                <strong className="text-[#1A1A1A] font-semibold">
                  fully landed price
                </strong>
                . This means the figure you approve is the figure you pay - encompassing
                production, in-line quality audits, packaging, and international
                freight to your door.
              </p>
              <p>
                There are{" "}
                <strong className="text-[#1A1A1A] font-semibold">
                  no hidden sampling fees
                </strong>
                , no surprise logistics surcharges added at the shipment stage,
                and no sudden upcharges if material prices fluctuate between
                order confirmation and delivery.
              </p>
              <p>
                We believe transparency is the foundation of a long-term
                partnership. If costs change, we tell you upfront - before
                commitments are made, not after.
              </p>
            </div>
            <Link
              href="/intake"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Request a Transparent Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
