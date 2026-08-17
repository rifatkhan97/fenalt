import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "What Makes a High-Quality Streetwear Garment?",
  description:
    "A practical guide to the construction, fabric, and finishing characteristics that distinguish a high-quality streetwear garment from an average one.",
  alternates: { canonical: "https://www.fenalt.com/learn/what-makes-high-quality-streetwear" },
  openGraph: {
    title: "What Makes a High-Quality Streetwear Garment?",
    description: "A practical guide to the construction, fabric, and finishing characteristics that distinguish a high-quality streetwear garment from an average one.",
    url: "https://www.fenalt.com/learn/what-makes-high-quality-streetwear",
  },
};

export default function WhatMakesHighQualityStreetwearPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Makes a High-Quality Streetwear Garment?",
    description: "Fabric, construction, and finishing standards that define premium streetwear quality.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/what-makes-high-quality-streetwear",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Makes High Quality Streetwear", item: "https://www.fenalt.com/learn/what-makes-high-quality-streetwear" },
    ],
  };

  const qualityFactors = [
    {
      area: "Fabric Weight & Composition",
      indicators: [
        "Heavyweight cotton - typically 240–300gsm for t-shirts, 400–480gsm+ for hoodies - provides the structured, substantial hand-feel associated with premium streetwear",
        "Combed ring-spun cotton (vs standard carded cotton) produces a smooth print canvas with fewer loose fibres, better pill resistance, and consistent dyeing",
        "French Terry fleece (looped back, flat face) is the industry standard for quality hoodies - not low-pile fleece or brushed poly",
        "Fabric weight is consistent across the garment - not thinner in the body vs sleeve panels",
      ],
    },
    {
      area: "Stitch Quality & Density",
      indicators: [
        "Higher stitch density (10–12 stitches per inch) produces stronger seams with less chance of thread popping under tension",
        "Consistent stitch tension across the garment - no loose loops or wavy gather puckering",
        "Topstitching is even and parallel to seams across the entire garment",
        "No loose thread ends at seam starts or ends - properly secured with bartacks or thread locks",
      ],
    },
    {
      area: "Seam Construction & Neck Taping",
      indicators: [
        "Twin-needle coverstitching on sleeve and bottom hems provides high elasticity without seam thread popping",
        "Shoulder-to-shoulder internal neck taping covers raw collar seam allowances, preventing collar stretching and skin chafing",
        "Double-layered self-fabric hoods ensure the hood stands upright without collapsing flat",
        "Heavy 400gsm 2x2 cotton/spandex ribbing on cuffs and waistband retains elasticity post-wash",
      ],
    },
    {
      area: "Print & Embroidery Execution",
      indicators: [
        "Screen print or 3D puff print coverage is complete - no ink gaps, pinholes, or spotty application",
        "Print placement is consistent across units - measured strictly from reference seams",
        "Embroidery thread density is sufficient - backing fabric does not show through design stitches",
        "Prints remain intact without cracking or peeling after 50+ commercial wash tests",
      ],
    },
  ];

  const faqs = [
    {
      q: "What GSM weight do most premium streetwear brands use for hoodies?",
      a: "Most premium streetwear hoodies use French Terry or loop-back fleece in the 400–480gsm range. Some ultra-premium brands go above 500gsm. Fenalt sources French Terry fleece in the 350–480gsm range directly from audited mills in Dhaka.",
    },
    {
      q: "Is heavyweight fabric always more expensive to manufacture?",
      a: "Yes, generally. Heavier fabric costs more per kilogram, requiring more raw cotton yarn by weight and increasing international freight costs. However, heavy fabric weight is the primary driver of perceived retail quality.",
    },
    {
      q: "Does Fenalt produce heavyweight streetwear garments?",
      a: "Yes. Fenalt specialises in heavyweight streetwear knits including hoodies, sweatshirts, and t-shirts using combed cotton single jersey (180–300gsm) and French Terry fleece (350–480gsm) in Dhaka.",
    },
    {
      q: "Why is collar ribbing construction critical in luxury streetwear tees?",
      a: "Streetwear t-shirts feature thick, high-density collar ribbing (2.5cm to 3.0cm width). Blending 5% spandex into 1x1 or 2x2 cotton ribbing ensures the collar snaps back into shape after washing.",
    },
    {
      q: "What is the difference between custom cut-and-sew and standard blank printing?",
      a: "Standard blanks restrict brands to stock boxy cuts, limited colorways, and basic fabric weights. Custom cut-and-sew allows full control over CAD pattern fit, fabric GSM, Pantone dyeing, custom hardware, and retail packaging.",
    },
    {
      q: "How can I test if my streetwear sample is high quality?",
      a: "Perform a 3x laundering test: measure length/width shrinkage %, verify collar rib recovery, inspect for seam twisting (spirality), check screen print ink adhesion, and pull seams horizontally to test stitch lock strength.",
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
            What Makes a{" "}
            <span className="italic font-medium text-[#2D5016]">High-Quality Streetwear Garment?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Premium streetwear is a construction and material standard, not just a price point. This guide breaks down the areas where quality is either built in - or compromised.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Quality Indicators</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">4 Areas That Define Streetwear Quality</h2>
          <div className="space-y-8">
            {qualityFactors.map((factor, i) => (
              <div key={i} className="p-6 lg:p-10 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-6">{factor.area}</h3>
                <ul className="space-y-3">
                  {factor.indicators.map((ind, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <span className="text-[#2D5016] mt-1 shrink-0"> • </span>
                      <p className="text-sm text-[#6B6560] leading-relaxed">{ind}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
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
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/how-to-manufacture-a-streetwear-collection", label: "How to Manufacture a Streetwear Collection" },
              { href: "/learn/how-to-manufacture-hoodies", label: "How to Manufacture Custom Hoodies" },
              { href: "/learn/how-to-manufacture-t-shirts", label: "How to Manufacture Custom T-Shirts" },
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Screen Print for Streetwear" },
              { href: "/streetwear-manufacturing", label: "Fenalt Custom Streetwear Manufacturing Services" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture premium streetwear with Fenalt</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt specialises in heavyweight streetwear manufacturing - hoodies, crewnecks, and tees - with on-the-ground QC in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
