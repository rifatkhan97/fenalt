import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "What Does GSM Mean in Clothing?",
  description:
    "GSM stands for grams per square metre — the standard measure of fabric weight. Learn what different GSM ranges mean for t-shirts, hoodies, and other garments.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-does-gsm-mean-in-clothing",
  },
  openGraph: {
    title: "What Does GSM Mean in Clothing?",
    description:
      "GSM stands for grams per square metre — the standard measure of fabric weight. Learn what different GSM ranges mean for t-shirts, hoodies, and other garments.",
    url: "https://fenalt.com/learn/what-does-gsm-mean-in-clothing",
  },
};

export default function WhatDoesGsmMeanPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Does GSM Mean in Clothing?",
    description: "GSM (grams per square metre) is the standard measure of fabric weight. This guide explains what it means and why it matters for brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-does-gsm-mean-in-clothing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Does GSM Mean", item: "https://fenalt.com/learn/what-does-gsm-mean-in-clothing" },
    ],
  };

  const ranges = [
    {
      gsm: "100–160 gsm",
      type: "Lightweight",
      garments: "Summer t-shirts, jersey linings, mesh activewear",
      feel: "Very light, breathable, drapes easily. Can appear slightly translucent in white.",
      notes: "Common in fast-fashion basics. Not ideal for heavyweight or premium streetwear positioning.",
    },
    {
      gsm: "160–220 gsm",
      type: "Standard",
      garments: "Everyday t-shirts, basic fleece, casual shirts",
      feel: "Mid-weight with good opacity. The most common weight range for everyday cotton tees.",
      notes: "180–200gsm is the most common weight for branded streetwear t-shirts.",
    },
    {
      gsm: "220–280 gsm",
      type: "Medium-Heavyweight",
      garments: "Premium t-shirts, lightweight sweatshirts, casual fleece",
      feel: "Noticeably substantial. Good structure, holds shape well after washing.",
      notes: "Popular with mid-range and premium streetwear brands seeking a premium hand-feel.",
    },
    {
      gsm: "280–350 gsm",
      type: "Heavyweight",
      garments: "Heavyweight t-shirts, casual hoodies, mid-weight French Terry",
      feel: "Thick, substantial. Often associated with a premium or luxury feel.",
      notes: "Fenalt sources combed cotton single jersey in this range (up to 300gsm). Increasingly popular in premium streetwear.",
    },
    {
      gsm: "350–480 gsm",
      type: "Heavy Fleece",
      garments: "Hoodies, sweatshirts, sweatpants, heavyweight outerwear linings",
      feel: "Very thick and warm. Significant weight when worn.",
      notes: "French Terry and loop-back fleece in this range is standard for quality hoodies. Fenalt sources French Terry fleece in the 350–480gsm range.",
    },
    {
      gsm: "480 gsm+",
      type: "Ultra-Heavyweight",
      garments: "Specialist heavyweight hoodies, military-style fleece, blanket-weight pieces",
      feel: "Extremely heavy and structured. A statement weight.",
      notes: "Niche use. Not all factories can sew very heavy fleece efficiently; machine capacity and needle requirements change at this weight.",
    },
  ];

  const faqs = [
    {
      q: "Does higher GSM always mean better quality?",
      a: "No. GSM is a measure of weight, not quality. A 300gsm poorly spun cotton fabric is lower quality than a 180gsm well-combed, tightly knit jersey. GSM is a useful specification for communicating weight intent, but it works alongside fibre quality, yarn count, and knit construction to determine the overall fabric quality.",
    },
    {
      q: "What GSM do most premium streetwear brands use for hoodies?",
      a: "Most premium streetwear hoodies use French Terry or loop-back fleece in the 380–460gsm range. Brands positioning at ultra-premium often go 460gsm and above. These are general industry observations — specific brand fabrics vary.",
    },
    {
      q: "How do I specify GSM in a tech pack?",
      a: "State the fabric composition, construction type (e.g. single jersey, French Terry, fleece), and target GSM range (e.g. 350–400gsm). Include tolerance — a ±20gsm tolerance is common — and request lab testing confirmation from the mill before sampling.",
    },
    {
      q: "What fabric weights does Fenalt work with?",
      a: "Fenalt sources combed cotton single jersey in the 180–300gsm range and French Terry fleece in the 350–480gsm range, as well as technical performance knits and other fabric types depending on the production requirement.",
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

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Fabrics & Materials</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Does GSM Mean{" "}
            <span className="italic font-medium text-[#2D5016]">in Clothing?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            GSM stands for <strong>grams per square metre</strong> — the universal standard measurement for fabric weight. Every fabric spec sheet lists it, every manufacturer asks for it, and understanding it helps brands choose the right fabric for the right garment.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition callout */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1A1A1A] text-[#FAF9F6] p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Simple Definition</p>
            <p className="font-display text-2xl lg:text-3xl font-light leading-relaxed">
              GSM tells you how much one square metre of a fabric weighs, in grams. A 200gsm fabric is lighter than a 400gsm fabric of the same type. Higher GSM generally means thicker, heavier fabric — though this relationship depends on the fibre and knit construction.
            </p>
          </div>
        </div>
      </section>

      {/* GSM ranges table */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Reference Guide</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">GSM Ranges and What They Mean</h2>
          <div className="space-y-4">
            {ranges.map((range, i) => (
              <div key={i} className="bg-[#262626] border border-[#333333] p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <span className="font-display text-2xl font-medium text-[#1A1A1A]">{range.gsm}</span>
                  <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#C8A882] text-xs font-semibold uppercase tracking-wider">
                    {range.type}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-1">Common Garments</p>
                    <p className="text-[#E5DDD3] leading-relaxed">{range.garments}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-1">Hand-Feel</p>
                    <p className="text-[#E5DDD3] leading-relaxed">{range.feel}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-1">Notes</p>
                    <p className="text-[#E5DDD3] leading-relaxed">{range.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#9B948E]">
            Note: GSM ranges are general industry guides. Actual fabric weights vary by mill, yarn count, and knit construction. Always request a physical swatch and lab-tested GSM confirmation before committing to bulk fabric.
          </p>
        </div>
      </section>

      {/* GSM vs quality */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Important Distinction</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-6">GSM ≠ Quality</h2>
          <div className="space-y-4 text-base text-[#6B6560] leading-relaxed">
            <p>GSM measures weight only. A heavier fabric is not automatically a higher-quality fabric. Fabric quality is also determined by:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Fibre quality — combed cotton is finer and more consistent than carded cotton",
                "Yarn count — finer yarns produce smoother, more durable fabric",
                "Knit construction — tightly knit fabric resists pilling and distortion better",
                "Finishing — pre-shrinking, mercerising, and softening treatments affect hand-feel",
                "Dye quality — affects colorfastness and vibrancy over time",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C8A882] mt-1.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Specify GSM as part of a complete fabric specification — not as a shorthand for quality on its own.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
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

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Fenalt: Heavyweight Cotton T-Shirt Manufacturing" },
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Ready to source fabric for your collection?</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka team manages raw fabric procurement, lab dip approvals, and GSM testing before any stitch is sewn.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
