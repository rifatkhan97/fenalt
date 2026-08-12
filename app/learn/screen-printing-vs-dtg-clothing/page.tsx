import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Screen Printing vs DTG Printing for Clothing Brands",
  description:
    "Compare Plastisol Screen Printing against Direct-to-Garment (DTG) printing — analyzing print opacity, wash durability, color accuracy, and volume cost efficiency.",
  alternates: {
    canonical: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
  },
  openGraph: {
    title: "Screen Printing vs DTG Printing for Clothing Brands",
    description:
      "Compare Plastisol Screen Printing against Direct-to-Garment (DTG) printing — analyzing print opacity, wash durability, color accuracy, and volume cost efficiency.",
    url: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
  },
};

export default function ScreenPrintingVsDtgClothingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Screen Printing vs DTG Printing for Clothing Brands",
    description:
      "A technical comparison of industrial screen printing vs digital DTG printing for fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
    mainEntityOfPage: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Screen Printing vs DTG", item: "https://fenalt.com/learn/screen-printing-vs-dtg-clothing" },
    ],
  };

  const comparisonPoints = [
    { factor: "Setup Costs & Screens", screen: "Requires film positive output and physical mesh screens per colorway.", dtg: "Zero physical screen setup; prints directly from digital image file." },
    { factor: "Volume Cost Scaling", screen: "Extremely cheap per unit at bulk volumes (100+ units per design).", dtg: "Flat cost per print; expensive for bulk orders above 50 units." },
    { factor: "Color Opacity on Dark Fabrics", screen: "100% opaque, vivid color vibrancy on black heavyweight cotton.", dtg: "Requires white pretreatment layer; can appear muted on dark fabrics." },
    { factor: "Detail & Gradient Handling", screen: "Solid vector colors and halftone dots.", dtg: "Unlimited photo-realistic color gradients and continuous tone artwork." },
  ];

  const faqs = [
    {
      q: "Which printing method lasts longer after washing?",
      a: "Plastisol and water-based screen printing have superior wash longevity, lasting 50+ wash cycles without fading when properly heat-cured.",
    },
    {
      q: "Why do streetwear brands prefer screen printing?",
      a: "Screen printing provides high-density ink deposition, intense color opacity, heavy handfeel, and cost efficiency for bulk drops.",
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
            Screen Printing vs DTG:{" "}
            <span className="italic font-medium text-[#2D5016]">Key Differences.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Choosing between industrial screen printing and Direct-to-Garment (DTG) printing determines print opacity, unit cost, and wash durability.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Printer size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Print Methodology</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Screen printing is the bulk industrial gold standard</strong> for vibrant, opaque graphics; <strong className="font-medium">DTG excels for multi-color photo-realistic micro-batches</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Direct Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">Print Technology Breakdown</h2>
          <div className="space-y-6">
            {comparisonPoints.map((cp, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-4">{cp.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#2D5016] uppercase tracking-wider block mb-1">Screen Printing</span>
                    <p className="text-xs text-[#6B6560] leading-relaxed">{cp.screen}</p>
                  </div>
                  <div className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <span className="text-xs font-semibold text-[#C8A882] uppercase tracking-wider block mb-1">Direct-to-Garment (DTG)</span>
                    <p className="text-xs text-[#6B6560] leading-relaxed">{cp.dtg}</p>
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
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Flat Screen Print for Streetwear" },
              { href: "/learn/embroidery-vs-screen-printing-apparel", label: "Embroidery vs Screen Printing in Apparel" },
              { href: "/puff-print-hoodie-manufacturer", label: "Fenalt Puff Print & Screen Printing Services" },
              { href: "/custom-streetwear-manufacturer-bangladesh", label: "Custom Streetwear Manufacturing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Industrial screen printing facilities</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt operates multi-color automatic carousel screen printing presses in Dhaka — producing high-density plastisol and discharge prints.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
