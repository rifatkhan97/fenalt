import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Embroidery vs Screen Printing for Clothing Brands",
  description:
    "Compare custom embroidery against screen printing - evaluating aesthetic appeal, fabric weight requirements, longevity, pricing structures, and best garment use-cases.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/embroidery-vs-screen-printing-apparel",
  },
  openGraph: {
    title: "Embroidery vs Screen Printing for Clothing Brands",
    description:
      "Compare custom embroidery against screen printing - evaluating aesthetic appeal, fabric weight requirements, longevity, pricing structures, and best garment use-cases.",
    url: "https://www.fenalt.com/learn/embroidery-vs-screen-printing-apparel",
  },
};

export default function EmbroideryVsScreenPrintingApparelPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Embroidery vs Screen Printing for Clothing Brands",
    description:
      "A technical comparison of custom embroidery vs screen printing in apparel manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/embroidery-vs-screen-printing-apparel",
    mainEntityOfPage: "https://www.fenalt.com/learn/embroidery-vs-screen-printing-apparel",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Embroidery vs Screen Printing", item: "https://www.fenalt.com/learn/embroidery-vs-screen-printing-apparel" },
    ],
  };

  const points = [
    { factor: "Aesthetic & Texture", emb: "3D textured, lustrous thread elevation; classic luxury feel.", print: "Flat, smooth plastisol or soft-hand water-based ink finish." },
    { factor: "Pricing Structure", emb: "Priced by total stitch count (regardless of color count).", print: "Priced by color count and print location." },
    { factor: "Best Garment Types", emb: "Heavy hoodies, caps, polo chest logos, jackets, beanies.", print: "Large back graphic t-shirts, oversized hoodies, all-over prints." },
    { factor: "Wash Durability", emb: "Thread stitching lasts as long as the base garment fabric.", print: "High quality plastisol lasts 50+ washes; can crack if improperly cured." },
  ];

  const faqs = [
    {
      q: "Can I combine embroidery and screen printing on the same garment?",
      a: "Yes! A popular streetwear combination is a small embroidered chest logo paired with a large screen-printed back graphic.",
    },
    {
      q: "Which method is better for complex multi-color logos?",
      a: "Screen printing is better for multi-color logos with fine lines. Embroidery requires simplifying fine details to accommodate thread thickness.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Decoration &amp; Customization</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Embroidery vs Screen Printing:{" "}
            <span className="italic font-medium text-[#2D5016]">Key Differences.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Deciding between embroidery and screen printing shapes your garment aesthetics, unit production costs, and brand positioning.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Decoration Comparison</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Embroidery delivers premium 3D tactile luxury</strong> for chest logos and headwear; <strong className="font-medium">screen printing excels for bold, large-scale graphic artwork</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Direct Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Methodology Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{p.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Custom Embroidery</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{p.emb}</p>
                  </div>
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Screen Printing</span>
                    <p className="text-xs text-[#E5DDD3] leading-relaxed">{p.print}</p>
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
              { href: "/learn/custom-embroidery-for-clothing-brands", label: "Custom Embroidery for Clothing Brands Technical Guide" },
              { href: "/learn/screen-printing-vs-dtg-clothing", label: "Screen Printing vs DTG Printing for Clothing" },
              { href: "/custom-embroidery-apparel-manufacturing", label: "Fenalt Custom Embroidery Services" },
              { href: "/puff-print-hoodie-manufacturer", label: "Fenalt Screen Printing & Puff Print Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Expert embroidery &amp; printing services</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt offers in-house embroidery, screen printing, and hybrid multi-technique decoration for luxury streetwear.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
