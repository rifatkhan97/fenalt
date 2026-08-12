import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Cotton Fabric Types Explained for Fashion Brands",
  description:
    "A guide to cotton fabrics in apparel manufacturing — Single Jersey, Interlock, French Terry, Fleece, Piqué, Canvas, and Twill.",
  alternates: {
    canonical: "https://fenalt.com/learn/cotton-fabric-types-explained",
  },
  openGraph: {
    title: "Cotton Fabric Types Explained for Fashion Brands",
    description:
      "A guide to cotton fabrics in apparel manufacturing — Single Jersey, Interlock, French Terry, Fleece, Piqué, Canvas, and Twill.",
    url: "https://fenalt.com/learn/cotton-fabric-types-explained",
  },
};

export default function CottonFabricTypesExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cotton Fabric Types Explained for Fashion Brands",
    description:
      "A technical walkthrough of cotton knit and woven fabric constructions used in t-shirts, hoodies, sweatpants, and trousers.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/cotton-fabric-types-explained",
    mainEntityOfPage: "https://fenalt.com/learn/cotton-fabric-types-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Cotton Fabric Types Explained", item: "https://fenalt.com/learn/cotton-fabric-types-explained" },
    ],
  };

  const fabricTypes = [
    { name: "Single Jersey (180–300 GSM)", category: "Knit", bestFor: "Standard & heavyweight t-shirts. Flat front face with v-loops on reverse." },
    { name: "French Terry (320–480 GSM)", category: "Knit", bestFor: "Mid-to-heavy hoodies & sweatpants. Unbrushed soft loops on interior side." },
    { name: "Brushed Fleece (350–500 GSM)", category: "Knit", bestFor: "Winter sweatshirts & heavy hoodies. Interior loops are brushed into plush fleece insulation." },
    { name: "Interlock (220–320 GSM)", category: "Knit", bestFor: "Luxury tees & active layers. Double-knit construction with smooth face on both sides." },
    { name: "Cotton Twill (240–400 GSM)", category: "Woven", bestFor: "Chinos, jackets, caps, and cargo pants. Diagonal parallel rib weave." },
    { name: "Cotton Canvas (300–500 GSM)", category: "Woven", bestFor: "Heavy workwear jackets, overshirts, and tote bags. Durable plain weave." },
  ];

  const faqs = [
    {
      q: "What is the difference between French Terry and Fleece?",
      a: "French Terry has unbrushed loops on the inside for breathability. Fleece has those loops brushed into a fuzzy, plush interior for high thermal insulation.",
    },
    {
      q: "Why is combed cotton better than carded cotton?",
      a: "Combed cotton removes short fibers and impurities during spinning, resulting in a smoother, stronger, and longer-lasting yarn that resists pilling.",
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
            Cotton Fabric Types{" "}
            <span className="italic font-medium text-[#2D5016]">Explained for Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Cotton is the foundational fiber of streetwear and apparel manufacturing. Understand the differences between Single Jersey, French Terry, Fleece, and Twill.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Fabric Taxonomy</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Matching the <strong className="font-medium">right cotton knit or weave to your garment category</strong> defines drape, breathability, and warmth.
            </p>
          </div>
        </div>
      </section>

      {/* Fabric Types */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Cotton Constructions</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Common Cotton Fabrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fabricTypes.map((ft, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{ft.name}</h3>
                  <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider">{ft.category}</span>
                </div>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{ft.bestFor}</p>
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
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Fenalt Heavyweight Cotton Manufacturing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Source premium cotton knits</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt sources 100% combed cotton jersey, French Terry, and heavy fleece directly from top-tier mills in Bangladesh.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
