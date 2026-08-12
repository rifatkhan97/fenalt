import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Evaluate Stitch Quality in Finished Garments",
  description:
    "Learn how to audit garment sewing quality — checking SPI density, seam tension, skipped stitches, puckering, raw edge overhangs, and seam strength testing.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
  },
  openGraph: {
    title: "How to Evaluate Stitch Quality in Finished Garments",
    description:
      "Learn how to audit garment sewing quality — checking SPI density, seam tension, skipped stitches, puckering, raw edge overhangs, and seam strength testing.",
    url: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
  },
};

export default function HowToEvaluateStitchQualityPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Evaluate Stitch Quality in Finished Garments",
    description:
      "An inspection guide for fashion brand QC managers on auditing sewing stitch quality, tension, and seam integrity.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-evaluate-stitch-quality",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Evaluate Stitch Quality", item: "https://fenalt.com/learn/how-to-evaluate-stitch-quality" },
    ],
  };

  const checks = [
    { title: "1. Stitches Per Inch (SPI) Measurement", desc: "Count stitches using a seam gauge ruler across a 1-inch span. Premium t-shirts demand 10 to 12 SPI; low-cost work uses under 8 SPI." },
    { title: "2. Seam Tension & Puckering Audit", desc: "Inspect seams for wavy puckering (tension too tight) or loose loops on reverse side (tension too loose)." },
    { title: "3. Skipped Stitches & Broken Threads", desc: "Scan long seam lines for missing needle penetrations caused by dull needles or incorrect timing." },
    { title: "4. Physical Seam Pull & Bursting Test", desc: "Vigorously stretch seams horizontally. Seams must extend without popping thread locks or exposing raw fabric edges." },
  ];

  const faqs = [
    {
      q: "What causes skipped stitches during sewing?",
      a: "Skipped stitches occur when sewing machine needles are bent/dull, needle thread tension is misaligned, or needle gauge is incorrect for fabric weight.",
    },
    {
      q: "How can I prevent seam puckering on fine fabrics?",
      a: "Use fine ballpoint needles (70/10), reduce presser foot pressure, use core-spun polyester thread, and adjust bobbin tension.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction &amp; Quality</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Evaluate Stitch Quality{" "}
            <span className="italic font-medium text-[#2D5016]">in Finished Garments.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Stitch quality is the truest indicator of factory craftsmanship. Learn how to inspect SPI density, seam tension, and structural durability.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Search size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Inspection Protocol</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Evaluating <strong className="font-medium">SPI density, thread tension, and seam burst strength</strong> ensures finished garments withstand commercial wear and washing.
            </p>
          </div>
        </div>
      </section>

      {/* Checks */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Inspection Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of Stitch Quality Audit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checks.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/garment-quality-control-services", label: "Fenalt Garment Quality Control Services" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Quality control audit services</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt performs inline and end-of-line AQL quality inspections in Dhaka — auditing stitch density and seam strength on every order.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
