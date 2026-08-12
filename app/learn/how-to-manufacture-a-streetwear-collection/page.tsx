import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Manufacture a Streetwear Collection: Step-by-Step Guide",
  description:
    "A practical guide to manufacturing a streetwear collection — from heavyweight fabric sourcing and oversized pattern creation to drop strategy and small-batch planning.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-manufacture-a-streetwear-collection",
  },
  openGraph: {
    title: "How to Manufacture a Streetwear Collection: Step-by-Step Guide",
    description:
      "A practical guide to manufacturing a streetwear collection — from heavyweight fabric sourcing and oversized pattern creation to drop strategy and small-batch planning.",
    url: "https://fenalt.com/learn/how-to-manufacture-a-streetwear-collection",
  },
};

export default function HowToManufactureStreetwearCollectionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Manufacture a Streetwear Collection: Step-by-Step Guide",
    description:
      "A strategic manufacturing walkthrough for streetwear brands, covering fabric weights, graphic techniques, tech packs, and capsule collection planning.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-manufacture-a-streetwear-collection",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-manufacture-a-streetwear-collection",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Manufacture a Streetwear Collection", item: "https://fenalt.com/learn/how-to-manufacture-a-streetwear-collection" },
    ],
  };

  const steps = [
    {
      title: "1. Define Your Capsule Matrix & Core Silhouettes",
      body: "Avoid launching 20 styles at once. Build a tight capsule (e.g. 1 heavyweight hoodie, 2 graphic tees, 1 sweatpant, 1 accessory). Focus on signature fits like dropped shoulders and boxy cuts.",
    },
    {
      title: "2. Source High-GSM Streetwear Fabrics",
      body: "Streetwear quality is dictated by fabric handfeel and weight. Select 300+ GSM combed cotton for t-shirts and 450–500 GSM French Terry or fleece for hoodies.",
    },
    {
      title: "3. Develop Streetwear Tech Packs & Oversized Patterns",
      body: "Standard blanks sizing will not yield a streetwear silhouette. Develop custom tech packs detailing shoulder drop, neck rib width (e.g. 3cm 1x1 rib), and sleeve length.",
    },
    {
      title: "4. Select Specialty Graphic & Branding Techniques",
      body: "Choose appropriate decoration methods: high-density puff printing, direct-to-garment (DTG), vintage screen prints, or heavy embroidery.",
    },
    {
      title: "5. Sample & Stress Test Your Streetwear Blanks",
      body: "Sample every piece with final wash treatments (silicone wash, vintage wash, garment dye). Wash and dry sample garments repeatedly to check shrinkage and print durability.",
    },
    {
      title: "6. Small-Batch Production & Pre-Drop Planning",
      body: "Produce small-batch runs (e.g. 50–100 units per style) to maintain exclusivity, manage cash flow, and validate demand before scaling up.",
    },
  ];

  const faqs = [
    {
      q: "How many pieces should be in a first streetwear collection?",
      a: "A 3-to-5 style capsule collection is ideal for a launch. This allows you to invest in premium custom fabric weights rather than spreading your capital thin across many SKUs.",
    },
    {
      q: "What fabric GSM is standard for premium streetwear hoodies?",
      a: "Premium streetwear hoodies typically range from 400 GSM to 500+ GSM using 100% cotton French Terry or heavy fleece.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Streetwear</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Manufacture a{" "}
            <span className="italic font-medium text-[#2D5016]">Streetwear Collection.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Building a modern streetwear brand requires more than printing graphics on basic blanks. Here is a step-by-step roadmap to sourcing custom fabrics, developing boxy silhouettes, and manufacturing small-batch collections.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">The Streetwear Standard</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Successful streetwear relies on <strong className="font-medium">substance over hype</strong>: heavyweight cottons, structured fits, custom hardware, and flawless print execution.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Step-by-Step Process</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">Manufacturing Your Collection</h2>
          <div className="space-y-6">
            {steps.map((st, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{st.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{st.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merged Section #59 Focus: Building Small Collections */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider mb-4">Capsule Collection Blueprint</span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-6">How to Structure a Small 4-Piece Streetwear Drop</h2>
          <p className="text-sm text-[#E5DDD3] leading-relaxed mb-8">
            Starting small reduces financial risk and builds scarcity. Here is the recommended breakdown for an inaugural capsule drop:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">1. The Hero Hoodie (450+ GSM)</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">Boxy fit, double-lined hood without drawstrings, heavy 2x2 ribbing. Your flagship piece that establishes brand quality.</p>
            </div>
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">2. The Heavyweight Tee (280+ GSM)</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">High thick collar neck ribbing, dropped shoulders, screen printed graphic or subtle chest embroidery.</p>
            </div>
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">3. The Match Track/Sweatpant</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">Matching fabric and colorway to the hero hoodie, creating a high-ticket full tracksuit set option.</p>
            </div>
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">4. Signature Accessory</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">Woven headwear (beanie/cap) or tote bag — lower price point item to increase average order value.</p>
            </div>
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
              { href: "/learn/what-makes-high-quality-streetwear", label: "What Makes a High-Quality Streetwear Garment?" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Screen Print for Streetwear" },
              { href: "/streetwear-manufacturing", label: "Fenalt Custom Streetwear Manufacturing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Manufacture your custom streetwear line</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt specializes in heavy cotton knitwear, custom oversized patterns, puff printing, and low MOQ streetwear production.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
