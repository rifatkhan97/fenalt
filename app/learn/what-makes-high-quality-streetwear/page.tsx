import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "What Makes a High-Quality Streetwear Garment?",
  description:
    "A practical guide to the construction, fabric, and finishing characteristics that distinguish a high-quality streetwear garment from an average one.",
  alternates: { canonical: "https://fenalt.com/learn/what-makes-high-quality-streetwear" },
  openGraph: {
    title: "What Makes a High-Quality Streetwear Garment?",
    description: "A practical guide to the construction, fabric, and finishing characteristics that distinguish a high-quality streetwear garment from an average one.",
    url: "https://fenalt.com/learn/what-makes-high-quality-streetwear",
  },
};

export default function WhatMakesHighQualityStreetwearPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Makes a High-Quality Streetwear Garment?",
    description: "Fabric, construction, and finishing standards that define premium streetwear quality.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-makes-high-quality-streetwear",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Makes High Quality Streetwear", item: "https://fenalt.com/learn/what-makes-high-quality-streetwear" },
    ],
  };

  const qualityFactors = [
    {
      area: "Fabric Weight & Composition",
      indicators: [
        "Heavyweight cotton — typically 280gsm and above for t-shirts, 380gsm+ for hoodies — provides the structured, substantial hand-feel associated with premium streetwear",
        "Combed cotton (vs standard carded cotton) produces a smoother surface with fewer loose fibres, better pill resistance, and more consistent dyeing",
        "French Terry fleece (looped back, flat face) is the industry standard for quality hoodies — not low-pile fleece or brushed poly",
        "Fabric weight is consistent across the garment — not thinner in the body vs panels",
      ],
    },
    {
      area: "Stitch Quality & Density",
      indicators: [
        "Higher stitch density (more stitches per inch) produces stronger seams with less chance of thread popping under tension",
        "Consistent stitch tension across the garment — no loose or tight sections",
        "Topstitching is even and parallel to seams across the entire garment",
        "No loose thread ends at seam starts or ends — these should be properly secured or trimmed",
      ],
    },
    {
      area: "Seam Construction",
      indicators: [
        "Flatlock seaming on curved seams (shoulder, underarm) reduces bulk and minimises irritation in direct-to-skin garments",
        "Sleeve and shoulder seams align precisely — misalignment is a common quality indicator",
        "Side seams are straight and not twisted when garment is laid flat",
        "Double-needle stitching on hems provides clean finish and durability",
      ],
    },
    {
      area: "Hardware & Trims",
      indicators: [
        "Metal hardware (zip pulls, rivets, eyelets) feels substantial — light/thin hardware indicates cost-cutting",
        "Drawcords are the correct weight for the fabric — fine cords on heavyweight hoodies look cheap and break easily",
        "Zip teeth are smooth and consistent — no snagging in the first sample is a good sign",
        "Kangaroo pockets and cargo pockets are reinforced at stress points (corners, zipper ends)",
      ],
    },
    {
      area: "Finishing & Labelling",
      indicators: [
        "Woven neck labels (vs printed) signal premium positioning — printing fades and can irritate",
        "Label placement is consistent across the size run — centred and at the correct distance from the collar seam",
        "Hem is even all around — not wavy or pulled",
        "Garment retains shape after washing — pre-shrunk fabric and proper construction are required for this",
      ],
    },
    {
      area: "Print & Embroidery Execution",
      indicators: [
        "Screen print or puff print coverage is complete — no ink gaps or spotty application",
        "Print placement is consistent across units — measured from reference seams, not applied by eye",
        "Embroidery thread density is sufficient — backing fabric should not be visible through the design",
        "Print does not crack or peel after a standard wash test",
      ],
    },
  ];

  const faqs = [
    {
      q: "What GSM weight do most premium streetwear brands use for hoodies?",
      a: "Most premium streetwear hoodies use French Terry or loop-back fleece in the 380–460gsm range. Some ultra-premium brands go above 460gsm. Fenalt sources French Terry fleece in the 350–480gsm range. These are general industry observations — specific brand fabrics vary.",
    },
    {
      q: "Is heavyweight fabric always more expensive to manufacture?",
      a: "Yes, generally. Heavier fabric costs more per kilogram or per metre, and adds weight to the finished garment which increases freight cost. However, premium fabric weight is a primary driver of perceived garment quality — and brands positioning at a premium price point typically accept this cost.",
    },
    {
      q: "Does Fenalt produce heavyweight streetwear garments?",
      a: "Yes. Fenalt specialises in heavyweight streetwear knits including hoodies, sweatshirts, and t-shirts using combed cotton single jersey (180–300gsm) and French Terry fleece (350–480gsm) sourced through its Dhaka procurement network.",
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
            Premium streetwear is a construction and material standard, not just a price point. This guide breaks down the six areas where quality is either built in — or compromised.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Quality Indicators</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">6 Areas That Define Streetwear Quality</h2>
          <div className="space-y-8">
            {qualityFactors.map((factor, i) => (
              <div key={i} className="p-6 lg:p-10 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-6">{factor.area}</h3>
                <ul className="space-y-3">
                  {factor.indicators.map((ind, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <span className="text-[#2D5016] mt-1 shrink-0">—</span>
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
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Screen Print for Streetwear" },
              { href: "/streetwear-manufacturing", label: "Fenalt: Streetwear Manufacturing" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
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
            Fenalt specialises in heavyweight streetwear manufacturing — hoodies, crewnecks, and tees — with on-the-ground QC in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
