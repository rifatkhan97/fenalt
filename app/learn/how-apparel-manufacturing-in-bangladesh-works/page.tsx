import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Apparel Manufacturing in Bangladesh Works",
  description:
    "An insider's guide to Bangladesh's garment industry — understanding vertical mill integration, Dhaka infrastructure, Chittagong port logistics, and duty-free import benefits.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
  },
  openGraph: {
    title: "How Apparel Manufacturing in Bangladesh Works",
    description:
      "An insider's guide to Bangladesh's garment industry — understanding vertical mill integration, Dhaka infrastructure, Chittagong port logistics, and duty-free import benefits.",
    url: "https://fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
  },
};

export default function HowApparelManufacturingInBangladeshWorksPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Apparel Manufacturing in Bangladesh Works",
    description:
      "A comprehensive guide to Bangladesh's garment ecosystem, vertical knitting mills, cut-and-sew operations, and global export shipping.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
    mainEntityOfPage: "https://fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How Manufacturing in Bangladesh Works", item: "https://fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works" },
    ],
  };

  const pillars = [
    { title: "1. Vertical Knitting & Dyeing Infrastructure", desc: "Dhaka features world-class composite knitting mills where raw cotton yarn is spun, knitted, bio-washed, and dyed under one roof." },
    { title: "2. Skilled Cut-and-Sew Workforce", desc: "Bangladesh is the world's 2nd largest apparel exporter, boasting highly skilled sewing line operators for complex streetwear and activewear." },
    { title: "3. Rigorous International Compliance Standards", desc: "Modern export factories adhere strictly to Accord / RSC structural safety protocols, BSCI, SEDEX, and OEKO-TEX 100 textile standards." },
    { title: "4. Direct Ocean Port Access via Chittagong (Chattogram)", desc: "Finished export cartons are trucked directly to Chittagong port for ocean freight dispatch to Europe, UK, USA, and Australia." },
  ];

  const faqs = [
    {
      q: "Why is Bangladesh the leading global destination for cotton knitwear?",
      a: "Bangladesh possesses massive vertical knitting infrastructure, competitive FOB labor pricing, and access to premium Indian and US virgin cotton spinning mills.",
    },
    {
      q: "Can small brands source custom apparel from Bangladesh?",
      a: "Yes! Modern sourcing partners like Fenalt bridge small-batch orders (low MOQs) with Bangladesh's world-class factory infrastructure.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Strategy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Apparel Manufacturing{" "}
            <span className="italic font-medium text-[#2D5016]">in Bangladesh Works.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Bangladesh produces apparel for the world's premier fashion houses. Understand the vertical mill ecosystem, compliance standards, and export logistics.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe2 size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Global Ecosystem</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Bangladesh's garment power lies in <strong className="font-medium">vertical composite knitting mills, OEKO-TEX certified dyehouses, and skilled cut-and-sew assembly</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Industry Ecosystem</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">4 Pillars of Bangladesh Manufacturing</h2>
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{p.desc}</p>
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
              { href: "/clothing-manufacturer-bangladesh", label: "Clothing Manufacturer Bangladesh Overview" },
              { href: "/why-manufacture-apparel-in-bangladesh", label: "Why Manufacture Apparel in Bangladesh?" },
              { href: "/bangladesh-vs-china-garment-manufacturing", label: "Bangladesh vs China Garment Manufacturing" },
              { href: "/bangladesh-garment-rules-of-origin", label: "Bangladesh Garment Rules of Origin Guide" },
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Direct factory access in Dhaka</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides global clothing brands with direct access to Dhaka's finest vertical composite mills and certified sewing lines.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
