import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "What Does GSM Mean in Clothing?",
  description:
    "GSM stands for grams per square metre - the standard measure of fabric weight. Learn what different GSM ranges mean for t-shirts, hoodies, and streetwear garments.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-does-gsm-mean-in-clothing",
  },
  openGraph: {
    title: "What Does GSM Mean in Clothing?",
    description:
      "GSM stands for grams per square metre - the standard measure of fabric weight. Learn what different GSM ranges mean for t-shirts, hoodies, and streetwear garments.",
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
      notes: "Popular for premium independent t-shirt brands wanting a luxury hand-feel.",
    },
    {
      gsm: "280–350 gsm",
      type: "Heavyweight",
      garments: "Heavy streetwear t-shirts, lightweight hoodies, sweatpants",
      feel: "Very substantial. Heavy drape, excellent opacity, warm and durable.",
      notes: "280–300gsm single jersey is used for luxury boxy-fit streetwear tees.",
    },
    {
      gsm: "350–450 gsm",
      type: "Super-Heavyweight",
      garments: "Mid-to-heavy hoodies, crewneck sweatshirts, heavy sweatpants",
      feel: "Thick, warm, highly structured. Standard weight for premium loopback French Terry hoodies.",
      notes: "400–450gsm French Terry is the standard for high-end streetwear hoodies.",
    },
    {
      gsm: "450–600+ gsm",
      type: "Ultra-Heavyweight",
      garments: "Luxury heavy hoodies, heavy winter fleece, outerwear linings",
      feel: "Extremely thick, heavy, rigid structure. Very warm. Requires heavy-duty sewing equipment.",
      notes: "Popular for luxury streetwear brands positioning on extreme fabric weight.",
    },
  ];

  const faqs = [
    {
      q: "What does GSM stand for in textile manufacturing?",
      a: "GSM stands for Grams per Square Metre (g/m²). It is the metric measurement used globally in textile manufacturing to define the physical weight and density of knitted or woven fabric.",
    },
    {
      q: "Is higher GSM fabric always better quality?",
      a: "No. GSM measures weight only, not fiber quality. A 400 GSM fabric made from low-grade carded cotton will feel rough and pill quickly, whereas a 200 GSM fabric made from long-staple combed organic cotton will feel luxurious, soft, and durable. Specify yarn quality alongside GSM.",
    },
    {
      q: "What GSM is best for luxury streetwear t-shirts?",
      a: "For luxury, boxy-fit streetwear t-shirts, 240 GSM to 300 GSM 100% combed cotton single jersey is the ideal weight range - providing substantial structure, crisp drape, and high opacity.",
    },
    {
      q: "What GSM is best for streetwear hoodies?",
      a: "For premium streetwear hoodies, 400 GSM to 480 GSM 100% cotton French Terry or heavy fleece is recommended, paired with matching 400 GSM 2x2 cotton ribbing.",
    },
    {
      q: "How do manufacturers test and verify fabric GSM?",
      a: "Factories use a circular GSM swatch cutter (which cuts an exact 100cm² fabric sample) and weigh it on a digital precision scale, multiplying by 100 to get the exact GSM value.",
    },
    {
      q: "How does fabric GSM affect shipping and landed costs?",
      a: "Heavier GSM garments weigh more per unit, which increases international air or sea freight charges per garment. Freight calculations should account for total collection weight.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Fabrics &amp; Materials</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Does GSM Mean{" "}
            <span className="italic font-medium text-[#2D5016]">in Clothing?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            GSM (Grams per Square Metre) is the global standard for measuring fabric weight. Learn how GSM affects t-shirts, hoodies, drape, and manufacturing specs.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition callout */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1A1A1A] text-[#FAF9F6] p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Simple Definition</p>
            <p className="font-display text-2xl lg:text-3xl font-light leading-relaxed">
              GSM tells you how much one square metre of a fabric weighs, in grams. A 200gsm fabric is lighter than a 400gsm fabric of the same type. Higher GSM generally means thicker, heavier fabric - though this relationship depends on the fibre and knit construction.
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
                  <span className="font-display text-2xl font-medium text-[#FAF9F6]">{range.gsm}</span>
                  <span className="inline-block px-3 py-1 bg-[#2D5016] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">
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
                "Fibre quality - combed cotton is finer and more consistent than carded cotton",
                "Yarn count - finer yarns produce smoother, more durable fabric",
                "Knit construction - tightly knit fabric resists pilling and distortion better",
                "Finishing - pre-shrinking, mercerising, and softening treatments affect hand-feel",
                "Dye quality - affects colorfastness and vibrancy over time",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C8A882] mt-1.5"> • </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Specify GSM as part of a complete fabric specification - not as a shorthand for quality on its own.</p>
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
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/fabric-weight-and-garment-construction", label: "How Fabric Weight Affects Garment Construction" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Affects Apparel Cost" },
              { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Fenalt Heavyweight Cotton T-Shirt Manufacturing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Ready to source fabric for your collection?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka team manages raw fabric procurement, lab dip approvals, and GSM testing before any stitch is sewn.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
