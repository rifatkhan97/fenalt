import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Heavyweight Streetwear Fabrics Explained",
  description:
    "A practical guide to the heavyweight fabrics used in premium streetwear — French Terry, loop-back fleece, combed cotton jersey — including GSM ranges, construction types, and what to specify.",
  alternates: { canonical: "https://fenalt.com/learn/heavyweight-streetwear-fabrics-explained" },
  openGraph: {
    title: "Heavyweight Streetwear Fabrics Explained",
    description: "A practical guide to heavyweight streetwear fabrics — French Terry, loop-back fleece, combed cotton jersey — including GSM ranges and what to specify.",
    url: "https://fenalt.com/learn/heavyweight-streetwear-fabrics-explained",
  },
};

export default function HeavyweightStreetwearFabricsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Heavyweight Streetwear Fabrics Explained",
    description: "Guide to heavyweight streetwear fabrics — types, GSM ranges, construction, and what to specify.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/heavyweight-streetwear-fabrics-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Heavyweight Streetwear Fabrics Explained", item: "https://fenalt.com/learn/heavyweight-streetwear-fabrics-explained" },
    ],
  };

  const fabrics = [
    {
      name: "French Terry",
      gsm: "280–480gsm",
      construction: "Single-faced knit with loops on the reverse (interior) side and a smooth flat face",
      feel: "Smooth exterior, looped interior — lighter-feeling than loop-back fleece for the same weight. Breathable due to loop structure.",
      bestFor: "Quality hoodies, sweatshirts, sweatpants, and any garment where a smooth exterior is desired",
      notes: "The most common base fabric for premium streetwear hoodies. Fenalt sources French Terry fleece in the 350–480gsm range.",
      specTip: "Specify GSM range, cotton content (100% or cotton-poly blend), and whether you want a brushed or unbrushed interior loop.",
    },
    {
      name: "Loop-Back Fleece (Heavy Fleece)",
      gsm: "300–500gsm",
      construction: "Three-thread construction — face yarn, loop yarn, and binding yarn. Loops are on the interior (reverse) side. May be brushed for a softer feel.",
      feel: "Very warm and structured. Heavier than French Terry at equivalent GSM due to denser loop construction.",
      bestFor: "Heavyweight hoodies and sweatshirts where maximum warmth and structure are priorities",
      notes: "Often used interchangeably with French Terry in casual conversation, but technically a different construction. Loop-back fleece at 400gsm+ produces the signature 'chunky' hand-feel of premium heavyweight streetwear.",
      specTip: "Request a brushed vs unbrushed specification — brushing the interior loops softens the hand-feel significantly.",
    },
    {
      name: "Combed Cotton Single Jersey",
      gsm: "180–300gsm",
      construction: "Single-faced plain knit. Combing removes short fibres before spinning, producing smoother, stronger yarn.",
      feel: "Smooth, soft, and drapey at lower weights. Structured and heavy at 260gsm+. Excellent for direct-to-skin wear.",
      bestFor: "Premium heavyweight t-shirts (220–300gsm), long-sleeve tees, and any garment requiring a smooth, premium surface",
      notes: "Combed cotton at 250–300gsm is the standard for heavyweight premium tees. Fenalt sources combed cotton single jersey in the 180–300gsm range.",
      specTip: "Always specify combed (not carded) cotton for premium positioning. Also specify yarn count — finer yarns produce a smoother fabric surface.",
    },
    {
      name: "Piqué (Waffle / Textured Knit)",
      gsm: "200–350gsm",
      construction: "Textured knit with a geometric raised pattern on the face. More structural than single jersey.",
      feel: "Breathable, structured, with a distinctive textured surface. Less stretchy than jersey.",
      bestFor: "Polo shirts, structured t-shirts, boxy-fit layering pieces, and garments where texture is a design element",
      notes: "Less common in core streetwear but popular in fashion-forward and luxury streetwear collections.",
      specTip: "Specify piqué type (waffle, honeycomb, birdeye) as each produces a different texture density.",
    },
    {
      name: "Polar Fleece",
      gsm: "200–450gsm",
      construction: "Synthetic (polyester) knit with a brushed surface on both sides. Very different from cotton French Terry.",
      feel: "Very warm, very soft. Lightweight for warmth due to polyester thermal efficiency.",
      bestFor: "Outerwear fleece layers, athletic warm-up pieces, and cold-weather streetwear",
      notes: "Polyester fleece is not typical for core streetwear aesthetics but is used in technical or outdoor-adjacent collections.",
      specTip: "Recycled polyester (rPET) options exist and are increasingly specified by sustainability-conscious brands.",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between French Terry and regular fleece?",
      a: "French Terry has a smooth flat face and looped interior — it is not brushed. Regular fleece (or loop-back fleece) is typically brushed on the interior for a softer, fuzzier feel. Both can be produced in similar GSM ranges but have different hand-feel characteristics. French Terry tends to feel lighter and more refined; brushed fleece feels warmer and softer.",
    },
    {
      q: "What fabric do most premium streetwear hoodies use?",
      a: "Most premium streetwear brands use French Terry or loop-back fleece, typically in the 380–460gsm range. Some ultra-heavyweight brands go above 460gsm. Cotton-polyester blends (80/20 or 70/30) are common for dimensional stability and shrinkage control, though 100% cotton is used by brands prioritising a pure-cotton positioning.",
    },
    {
      q: "What fabric does Fenalt source for streetwear?",
      a: "Fenalt sources combed cotton single jersey in the 180–300gsm range and French Terry fleece in the 350–480gsm range, as well as technical performance knits and other fabric types depending on the project requirements.",
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
            Heavyweight Streetwear Fabrics{" "}
            <span className="italic font-medium text-[#2D5016]">Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            The fabric is the first and most important decision in streetwear production. This guide covers the five main fabric types used in premium streetwear — with GSM ranges, construction details, and what to specify in your tech pack.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Fabric Guide</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">5 Heavyweight Streetwear Fabric Types</h2>
          <div className="space-y-6">
            {fabrics.map((fabric, i) => (
              <div key={i} className="p-6 lg:p-10 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h3 className="font-display text-2xl font-medium text-[#1A1A1A]">{fabric.name}</h3>
                  <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">{fabric.gsm}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-1">Construction</p>
                      <p className="text-[#6B6560] leading-relaxed">{fabric.construction}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-1">Hand-Feel</p>
                      <p className="text-[#6B6560] leading-relaxed">{fabric.feel}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-1">Best For</p>
                      <p className="text-[#6B6560] leading-relaxed">{fabric.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5016] mb-1">Spec Tip</p>
                      <p className="text-[#6B6560] leading-relaxed">{fabric.specTip}</p>
                    </div>
                  </div>
                </div>
                {fabric.notes && (
                  <p className="mt-4 text-xs text-[#9B948E] italic border-t border-[#E5DDD3] pt-4">{fabric.notes}</p>
                )}
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
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/what-makes-high-quality-streetwear", label: "What Makes High-Quality Streetwear?" },
              { href: "/hoodie-manufacturing", label: "Fenalt: Hoodie Manufacturing" },
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Screen Print for Streetwear" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Source heavyweight streetwear fabrics through Fenalt</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka procurement team manages raw fabric sourcing, lab dip approvals, and GSM testing for all streetwear projects.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
