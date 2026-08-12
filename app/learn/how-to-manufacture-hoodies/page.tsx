import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Manufacture Hoodies: Complete Technical Guide",
  description:
    "Learn how luxury hoodies are manufactured — selecting 400–500+ GSM fleece/French Terry, double-layered hood construction, kangaroo pocket attachment, and heavy ribbing.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-manufacture-hoodies",
  },
  openGraph: {
    title: "How to Manufacture Hoodies: Complete Technical Guide",
    description:
      "Learn how luxury hoodies are manufactured — selecting 400–500+ GSM fleece/French Terry, double-layered hood construction, kangaroo pocket attachment, and heavy ribbing.",
    url: "https://fenalt.com/learn/how-to-manufacture-hoodies",
  },
};

export default function HowToManufactureHoodiesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Manufacture Hoodies: Complete Technical Guide",
    description:
      "A technical manufacturing guide for heavy luxury streetwear hoodies — covering fleece GSM weights, double-layer hoods, flatlock stitching, and pocket construction.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-manufacture-hoodies",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-manufacture-hoodies",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Manufacture Hoodies", item: "https://fenalt.com/learn/how-to-manufacture-hoodies" },
    ],
  };

  const features = [
    { title: "1. Heavyweight Cotton Fleece / French Terry (400–550 GSM)", desc: "Luxury streetwear hoodies demand 100% combed cotton heavy fleece or 450 GSM French Terry for structured drape and warmth." },
    { title: "2. Double-Layered Hood Construction", desc: "Crafting double-shell hoods (self-fabric lined) ensures the hood stands erect without collapsing flat against the back." },
    { title: "3. Heavy 2x2 Cotton Ribbing & Flatlock Seams", desc: "Matching body fleece with 380 GSM 2x2 elastane-reinforced ribbing on cuffs and hem to prevent stretching." },
    { title: "4. Reinforced Kangaroo Pocket Stitching", desc: "Bar-tacking top stress corners of kangaroo pockets to prevent tearing during wear." },
  ];

  const faqs = [
    {
      q: "What makes a hoodie feel heavy and premium?",
      a: "A combination of high GSM fabric (400+ GSM), 100% combed cotton fiber, double-layered self-lined hoods, and heavy 2x2 ribbing.",
    },
    {
      q: "What printing methods work best on fleece hoodies?",
      a: "Plastisol screen print, high-density puff print, and 3D direct embroidery work exceptionally well on heavy cotton fleece.",
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
            How to Manufacture Hoodies:{" "}
            <span className="italic font-medium text-[#2D5016]">Production Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            The heavyweight hoodie is the flagship piece of modern streetwear. Master the technical manufacturing specs required to produce luxury-grade hoodies.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Flame size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Category Flagship</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Luxury hoodies require <strong className="font-medium">400–500+ GSM cotton fleece, self-lined double hoods, bar-tacked stress points, and heavy elastane ribbing</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Construction Pillars</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of Heavyweight Hoodie Production</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{f.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{f.desc}</p>
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
              { href: "/hoodie-manufacturing", label: "Fenalt Custom Hoodie Manufacturing Services" },
              { href: "/puff-print-hoodie-manufacturer", label: "Puff Print Hoodie Manufacturing" },
              { href: "/sweatshirt-manufacturer-bangladesh", label: "Sweatshirt Manufacturing Bangladesh" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Manufacture custom luxury hoodies</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manufactures custom 450–500 GSM French Terry and heavy fleece hoodies for international streetwear labels.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
