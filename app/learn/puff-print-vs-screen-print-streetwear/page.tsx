import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Puff Print vs Screen Print for Streetwear",
  description:
    "A practical comparison of puff print and screen print for streetwear garments — how each technique works, the visual and tactile differences, and when to use which.",
  alternates: { canonical: "https://fenalt.com/learn/puff-print-vs-screen-print-streetwear" },
  openGraph: {
    title: "Puff Print vs Screen Print for Streetwear",
    description: "A practical comparison of puff print and screen print for streetwear — how each technique works, differences, and when to use which.",
    url: "https://fenalt.com/learn/puff-print-vs-screen-print-streetwear",
  },
};

export default function PuffPrintVsScreenPrintPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Puff Print vs Screen Print for Streetwear",
    description: "Comparison of puff print and screen print techniques for streetwear garments.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/puff-print-vs-screen-print-streetwear",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Puff Print vs Screen Print", item: "https://fenalt.com/learn/puff-print-vs-screen-print-streetwear" },
    ],
  };

  const comparison = [
    { aspect: "How It Works", puff: "Screen printing with a puff (foaming) additive mixed into the ink. When heat-cured, the additive expands and raises the ink above the fabric surface, creating a three-dimensional, embossed effect.", screen: "Ink is pushed through a mesh screen onto the fabric surface. No additive — ink sits flat on the fabric or penetrates slightly into the fibres depending on ink type." },
    { aspect: "Visual Effect", puff: "Raised, three-dimensional. The design literally stands proud of the fabric surface — visible and palpable depth.", screen: "Flat. Clean, sharp edges. The full visual impact comes from colour density and opacity rather than texture." },
    { aspect: "Tactile Feel", puff: "Soft, raised texture — satisfying to touch. The dimensional effect is a significant part of the garment's premium feel.", screen: "Flat and smooth on the fabric. Plastisol (standard) inks can feel slightly rubbery; water-based inks integrate more with the fabric." },
    { aspect: "Design Suitability", puff: "Works best with bold, simple designs — logos, block text, simple graphic shapes. Fine detail and thin lines are less suitable as puff expansion can blur edges slightly.", screen: "Very versatile — handles fine detail, gradients (with halftones), multi-colour designs, and large coverage areas." },
    { aspect: "Colour Range", puff: "Typically one or two colours — puff printing multicolour designs requires precise registration and adds complexity.", screen: "Each colour is a separate screen and print pass. Complex multi-colour designs are achievable but cost increases per colour." },
    { aspect: "Durability", puff: "Good durability when properly cured. The raised elements can break down over many wash cycles, especially with aggressive washing.", screen: "Excellent durability when using quality inks and proper curing. Plastisol screen prints are among the most durable print methods on fabric." },
    { aspect: "Cost", puff: "Generally slightly more expensive than standard screen printing due to the additive and the additional curing control required.", screen: "Cost depends on number of colours and setup. Simple one or two-colour screen prints are among the most cost-effective print methods at volume." },
    { aspect: "Premium Positioning", puff: "The three-dimensional effect is strongly associated with premium streetwear — particularly on hoodies and heavyweight tees. It is a deliberate premium signal.", screen: "Can be positioned at any tier. Premium positioning comes from design quality and ink quality rather than the technique itself." },
  ];

  const whenToUse = [
    { technique: "Choose Puff Print When", points: ["Your design is a bold logo, block lettering, or simple graphic shape", "You want a tactile, three-dimensional premium quality signal", "The garment is a heavyweight hoodie or tee positioned at a premium price point", "You are printing in one or two colours only"] },
    { technique: "Choose Screen Print When", points: ["Your design has fine detail, gradients, or multiple colours", "You need large coverage areas or all-over prints", "You want maximum colour versatility and precision", "Per-unit cost optimisation is a higher priority than textural effect"] },
  ];

  const faqs = [
    {
      q: "Can puff print and screen print be combined on the same garment?",
      a: "Yes. Many streetwear pieces use puff print for a central logo or headline graphic and flat screen print for secondary details or text. This is a common technique for adding visual hierarchy to a print design.",
    },
    {
      q: "Does Fenalt offer puff print manufacturing?",
      a: "Yes. Fenalt specialises in puff print hoodie and streetwear manufacturing through its partner micro-factory network in Dhaka, Bangladesh.",
    },
    {
      q: "What are the alternatives to puff print for a raised effect?",
      a: "Embroidery achieves a raised, premium effect with greater durability than puff print. High-density screen print (using multiple ink passes) creates a flatter but still raised effect. Each technique has different suitability depending on design complexity and garment type.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Streetwear</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Puff Print vs Screen Print{" "}
            <span className="italic font-medium text-[#2D5016]">for Streetwear.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Both are widely used in streetwear — but they produce very different results. Understanding the difference helps you make the right call for your garment, your design, and your positioning.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Head-to-Head</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">Puff Print vs Screen Print Compared</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Aspect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Puff Print</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Screen Print</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.aspect}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.puff}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.screen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Decision Guide</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">When to Use Each Technique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whenToUse.map((item, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{item.technique}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#E5DDD3]">
                      <span className="text-[#C8A882] mt-0.5">✓</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-makes-high-quality-streetwear", label: "What Makes High-Quality Streetwear?" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/puff-print-hoodie-manufacturer", label: "Fenalt: Puff Print Hoodie Manufacturing" },
              { href: "/custom-embroidery-apparel-manufacturing", label: "Fenalt: Custom Embroidery Manufacturing" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Produce puff print or screen print garments with Fenalt</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt specialises in puff print and screen print streetwear manufacturing through its partner micro-factory network in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
