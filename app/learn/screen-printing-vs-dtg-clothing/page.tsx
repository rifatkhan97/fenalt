import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Screen Printing vs DTG Printing for Clothing Brands",
  description:
    "Compare Plastisol and Water-Based Screen Printing against Direct-to-Garment (DTG) printing - analyzing ink opacity, wash durability, color accuracy, artwork detail, and volume cost efficiency.",
  alternates: {
    canonical: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
  },
  openGraph: {
    title: "Screen Printing vs DTG Printing for Clothing Brands",
    description:
      "Compare Plastisol and Water-Based Screen Printing against Direct-to-Garment (DTG) printing - analyzing ink opacity, wash durability, color accuracy, artwork detail, and volume cost efficiency.",
    url: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
  },
};

export default function ScreenPrintingVsDtgClothingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Screen Printing vs DTG Printing for Clothing Brands",
    description:
      "A technical comparison of industrial screen printing vs digital DTG printing for fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
    mainEntityOfPage: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Screen Printing vs DTG", item: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing" },
    ],
  };

  const comparisonPoints = [
    {
      factor: "Setup Costs & Screens",
      screen: "Requires physical film positives and individual mesh screens per color separation ($20–$40 per screen setup).",
      dtg: "Zero physical screen setup. Prints directly from digital vector or bitmap image files.",
    },
    {
      factor: "Bulk Volume Cost Scaling",
      screen: "Extremely cost-effective at scale. Per-unit print price drops significantly above 100 units per artwork.",
      dtg: "Flat print price per unit regardless of order volume; cost-prohibitive for bulk production runs above 50 units.",
    },
    {
      factor: "Color Opacity on Dark Fabrics",
      screen: "Provides 100% opaque, vivid color vibrancy on black heavyweight cotton using white underbase coats.",
      dtg: "Requires chemical pretreatment spraying on dark garments; colors can appear slightly muted or less opaque.",
    },
    {
      factor: "Photographic Detail & Gradients",
      screen: "Excels at solid spot colors and halftones; complex multi-color continuous gradients require fine mesh counts.",
      dtg: "Prints unlimited photo-realistic color gradients, drop shadows, and complex digital artwork effortlessly.",
    },
    {
      factor: "Wash Longevity & Fading",
      screen: "Exceptional wash durability (50+ wash cycles) when cured in industrial tunnel dryers.",
      dtg: "Good durability (25–35 washes), but ink layer can fade slightly faster over repeated laundering.",
    },
    {
      factor: "Ink Varieties & Special Effects",
      screen: "Supports special effects: High-density 3D puff print, metallic foil, glow-in-the-dark, discharge, and reflective ink.",
      dtg: "Restricted to standard CMYK water-based digital inks; zero special effects support.",
    },
    {
      factor: "Fabric Fiber Compatibility",
      screen: "Compatible with 100% cotton, polyester, nylon, canvas, and poly-cotton blends.",
      dtg: "Requires high-cotton content (minimum 80% cotton, ideally 100% combed cotton) for ink absorption.",
    },
    {
      factor: "Handfeel & Breathability",
      screen: "Plastisol ink has a physical ink layer feel; water-based discharge screen printing leaves a zero-handfeel finish.",
      dtg: "Soft handfeel on light garments; slightly stiff handfeel on dark garments due to white liquid pretreatment.",
    },
  ];

  const decisionFramework = [
    {
      scenario: "Streetwear Brand Bulk Drop (100+ units)",
      recommended: "Plastisol or Water-Based Screen Printing",
      rationale: "Lowest unit cost, maximum color vibrancy on dark heavyweight tees, high wash durability, and puff print compatibility.",
    },
    {
      scenario: "On-Demand Print / Sample Prototyping",
      recommended: "Direct-to-Garment (DTG)",
      rationale: "Zero screen setup fee makes single-piece prints cost-effective for testing graphics before bulk ordering.",
    },
    {
      scenario: "Photo-Realistic Full-Color Artwork",
      recommended: "Direct-to-Garment (DTG)",
      rationale: "Handles complex CMYK color gradients and fine photographic detail without needing 8+ screen setups.",
    },
    {
      scenario: "Special Effects (3D Puff, Metallic, Discharge)",
      recommended: "Custom Screen Printing",
      rationale: "Specialty inks require manual or automatic screen printing squeegee deposition.",
    },
  ];

  const faqs = [
    {
      q: "Which printing method lasts longer after multiple washes?",
      a: "Screen printing (both plastisol and water-based inks) has superior wash longevity compared to DTG. When cured in industrial conveyor dryers at 160°C, screen-printed graphics easily withstand 50+ commercial wash cycles without cracking or peeling.",
    },
    {
      q: "Why do luxury streetwear brands favor screen printing?",
      a: "Streetwear labels favor screen printing because it delivers intense color opacity on heavy 280 GSM black cotton tees, supports specialty inks (like high-density 3D puff print), and offers low per-unit pricing at 100+ piece volumes.",
    },
    {
      q: "Can DTG print on 100% polyester garments?",
      a: "No. DTG water-based inks bind chemically to natural cotton cellulose fibers. Printing DTG on 100% synthetic polyester yields dull colors, dye migration, and rapid ink wash-off.",
    },
    {
      q: "What is water-based discharge screen printing?",
      a: "Discharge printing uses a water-based ink containing a bleaching agent that neutralizes the cotton's original dye while replacing it with new color pigment. The result is a soft, zero-handfeel print that feels like part of the fabric itself.",
    },
    {
      q: "What artwork resolution is required for screen printing vs DTG?",
      a: "Both methods require high-resolution artwork: vector files (.AI, .EPS, .PDF) are ideal for screen printing spot colors; raster files (.PNG, .PSD) for DTG must be provided at 300 DPI at actual print size on a transparent background.",
    },
    {
      q: "How does Fenalt execute graphic printing in Dhaka?",
      a: "Fenalt operates automatic carousel screen printing machines and Kornit DTG printers in Dhaka, matching Pantone colors, verifying ink cure temperatures, and performing wash-fastness tests.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">
              Fenalt Learn
            </Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Screen Printing vs DTG{" "}
            <span className="italic font-medium text-[#2D5016]">for Clothing Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical breakdown of Plastisol &amp; Water-Based Screen Printing vs Direct-to-Garment (DTG) - comparing opacity, wash durability, setup costs, and unit economics.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Printer size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Printing Technology</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Choosing between Screen Printing and DTG depends on <strong className="font-medium">order volume, artwork complexity, and dark fabric opacity requirements</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Screen printing remains the undisputed king of bulk garment decoration, offering vibrant color opacity, specialized inks (such as 3D puff print and discharge), and low per-unit pricing above 100 units. Direct-to-Garment (DTG) excels for small print runs, sample prototyping, and photo-realistic digital artwork containing unlimited color gradients.
          </p>
        </div>
      </section>

      {/* 8 Comparison Points Table */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Breakdown</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-10">8 Factors: Screen Printing vs DTG</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A2A2A]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-1/4">Evaluation Factor</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Industrial Screen Printing</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Direct-to-Garment (DTG)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#262626]" : "bg-[#2A2A2A]"}>
                    <td className="p-4 text-sm font-semibold text-[#E5DDD3] border-t border-[#333333] align-top">{row.factor}</td>
                    <td className="p-4 text-sm text-[#E5DDD3] border-t border-[#333333] leading-relaxed align-top font-medium">{row.screen}</td>
                    <td className="p-4 text-sm text-[#9B948E] border-t border-[#333333] leading-relaxed align-top">{row.dtg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Strategic Selection</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">When to Choose Which Printing Method</h2>
          <div className="space-y-6">
            {decisionFramework.map((sc, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-medium text-[#1A1A1A]">{sc.scenario}</h3>
                  <span className="inline-block px-3 py-1 bg-[#2D5016] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">{sc.recommended}</span>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed">{sc.rationale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Standard Screen Print" },
              { href: "/learn/custom-embroidery-for-clothing-brands", label: "Custom Embroidery for Clothing Brands" },
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/learn/how-to-manufacture-t-shirts", label: "How to Manufacture Custom T-Shirts" },
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton" },
              { href: "/screen-printing-services-bangladesh", label: "Fenalt Screen Printing Services in Dhaka" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision graphic decoration</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt operates industrial screen printing carousels and DTG printing lines with Pantone color matching in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
