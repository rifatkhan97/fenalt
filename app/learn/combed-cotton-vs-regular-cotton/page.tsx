import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Combed Cotton vs Regular Cotton: Key Differences",
  description:
    "Compare combed cotton against regular carded cotton — understanding spinning processes, fiber length, soft handfeel, print surface quality, and wash durability.",
  alternates: {
    canonical: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
  },
  openGraph: {
    title: "Combed Cotton vs Regular Cotton: Key Differences",
    description:
      "Compare combed cotton against regular carded cotton — understanding spinning processes, fiber length, soft handfeel, print surface quality, and wash durability.",
    url: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
  },
};

export default function CombedCottonVsRegularCottonPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Combed Cotton vs Regular Cotton: Key Differences",
    description:
      "A technical comparison of combed ring-spun cotton vs carded open-end cotton for apparel manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
    mainEntityOfPage: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Combed Cotton vs Regular Cotton", item: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton" },
    ],
  };

  const points = [
    { factor: "Yarn Preparation", combed: "Passes through fine combs to remove short fibers and align long staple fibers.", regular: "Carded only; contains short fibers and raw cotton impurities." },
    { factor: "Fabric Handfeel", combed: "Ultra-soft, smooth, and refined against the skin.", regular: "Slightly rougher, fuzzier surface texture." },
    { factor: "Screen Print Quality", combed: "Flawless smooth print canvas allowing razor-sharp graphic detail.", regular: "Fuzzy stray fibers bleed through ink layers." },
    { factor: "Pilling & Longevity", combed: "Highly resistant to pilling and fabric thinning after laundering.", regular: "Prone to surface fuzzing and pilling after repeated washes." },
  ];

  const faqs = [
    {
      q: "Is combed cotton worth the extra manufacturing cost?",
      a: "Yes! For premium streetwear and boutique brands, the superior handfeel, print clarity, and wash durability of combed cotton justify the minor price premium.",
    },
    {
      q: "What is Ring-Spun Combed Cotton?",
      a: "Ring-spun combed cotton continuously twists and thins long cotton strands into an extremely tight, soft, and strong yarn structure.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Fabrics &amp; Materials</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Combed Cotton vs Regular Cotton:{" "}
            <span className="italic font-medium text-[#2D5016]">Key Differences.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Not all cotton is created equal. Combed cotton undergoes an extra mechanical refining stage to deliver unmatched softness and print clarity.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Fiber Refining</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Combed cotton</strong> removes short, weak fibers — leaving only long, straight cotton strands that create a smooth, pill-resistant fabric canvas.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Direct Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">Yarn Quality Differences</h2>
          <div className="space-y-6">
            {points.map((p, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-4">{p.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#2D5016] uppercase tracking-wider block mb-1">Combed Cotton</span>
                    <p className="text-xs text-[#6B6560] leading-relaxed">{p.combed}</p>
                  </div>
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Regular Carded Cotton</span>
                    <p className="text-xs text-[#6B6560] leading-relaxed">{p.regular}</p>
                  </div>
                </div>
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
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Fenalt Heavyweight T-Shirt Manufacturing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Source 100% combed cotton knits</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt utilizes 100% combed ring-spun cotton for all custom t-shirts, hoodies, and streetwear apparel manufactured in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
