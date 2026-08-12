import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Streetwear Manufacturing Guide: Boxy Fits, Heavy Knits & Prints",
  description:
    "A comprehensive guide to manufacturing luxury streetwear collections - oversized patterns, 240+ GSM t-shirts, 450+ GSM fleece, puff printing, and wash distress.",
  alternates: {
    canonical: "https://fenalt.com/learn/streetwear-manufacturing-guide",
  },
  openGraph: {
    title: "Streetwear Manufacturing Guide: Boxy Fits, Heavy Knits & Prints",
    description:
      "A comprehensive guide to manufacturing luxury streetwear collections - oversized patterns, 240+ GSM t-shirts, 450+ GSM fleece, puff printing, and wash distress.",
    url: "https://fenalt.com/learn/streetwear-manufacturing-guide",
  },
};

export default function StreetwearManufacturingGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Streetwear Manufacturing Guide: Boxy Fits, Heavy Knits & Prints",
    description:
      "A strategic manufacturing guide for independent streetwear brands - covering oversized pattern cuts, heavy cotton knits, puff screen prints, and vintage washes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/streetwear-manufacturing-guide",
    mainEntityOfPage: "https://fenalt.com/learn/streetwear-manufacturing-guide",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Streetwear Manufacturing Guide", item: "https://fenalt.com/learn/streetwear-manufacturing-guide" },
    ],
  };

  const pillars = [
    { title: "1. Heavyweight Fabric Specification", desc: "Using 240–300 GSM single jersey for t-shirts and 450–550 GSM French Terry or fleece for hoodies and sweatpants." },
    { title: "2. Boxy & Drop-Shoulder Pattern Geometry", desc: "Drafting wide chest dimensions, dropped shoulder seams, and relaxed armhole curves that hold structural shape without draping limply." },
    { title: "3. Specialized Graphics & Textured Prints", desc: "Executing high-density puff prints, cracked vintage screen prints, 3D embroidery, and custom rubberized chest patches." },
    { title: "4. Custom Vintage Wet Processing", desc: "Applying acid washes, mineral washes, stone distressing, and enzyme bio-softening to achieve authentic 90s vintage aesthetics." },
  ];

  const faqs = [
    {
      q: "How does streetwear manufacturing differ from standard fashion production?",
      a: "Streetwear emphasizes heavy fabric GSM weights, custom oversized/boxy pattern cuts, tactile print techniques (puff/3D), and custom vintage wash finishes.",
    },
    {
      q: "Can Fenalt manufacture small batch streetwear drops?",
      a: "Yes! Fenalt specializes in custom low MOQ cut-and-sew streetwear production starting at 50 to 100 units per style.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Apparel Categories</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Streetwear Manufacturing Guide:{" "}
            <span className="italic font-medium text-[#2D5016]">Fits, Fabrics &amp; Prints.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Streetwear has redefined modern luxury. Understand the technical pattern geometry, heavy GSM knits, and specialized print finishes that define top-tier streetwear.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Crown size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Streetwear Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Luxury streetwear manufacturing</strong> is defined by boxy drop-shoulder silhouettes, 240–500+ GSM combed cotton knits, and tactile print finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Core Principles</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of Streetwear Manufacturing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{p.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{p.desc}</p>
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
              { href: "/learn/how-to-manufacture-a-streetwear-collection", label: "How to Manufacture a Streetwear Collection" },
              { href: "/learn/common-streetwear-manufacturing-mistakes", label: "Common Streetwear Manufacturing Mistakes" },
              { href: "/learn/what-makes-high-quality-streetwear", label: "What Makes High-Quality Streetwear?" },
              { href: "/custom-streetwear-manufacturer-bangladesh", label: "Fenalt Custom Streetwear Manufacturing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture custom streetwear collections</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manufactures custom cut-and-sew streetwear for indie labels globally - featuring heavy cotton knits, puff printing, and vintage washes.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
