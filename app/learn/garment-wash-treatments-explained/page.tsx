import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing",
  description:
    "Explore apparel wet processing treatments - Acid Wash, Mineral Wash, Stonewashing, Enzyme Bio-washing, Silicone Softening, and Garment Dyeing.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-wash-treatments-explained",
  },
  openGraph: {
    title: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing",
    description:
      "Explore apparel wet processing treatments - Acid Wash, Mineral Wash, Stonewashing, Enzyme Bio-washing, Silicone Softening, and Garment Dyeing.",
    url: "https://fenalt.com/learn/garment-wash-treatments-explained",
  },
};

export default function GarmentWashTreatmentsExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing",
    description:
      "A technical walkthrough of industrial garment washing, vintage distress effects, enzyme bio-softening, and garment dye processes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/garment-wash-treatments-explained",
    mainEntityOfPage: "https://fenalt.com/learn/garment-wash-treatments-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Garment Wash Treatments", item: "https://fenalt.com/learn/garment-wash-treatments-explained" },
    ],
  };

  const washes = [
    { name: "1. Enzyme Bio-Wash", effect: "Organic cellulase enzymes digest protruding surface micro-fibers, creating a silky soft, pilling-resistant fabric surface." },
    { name: "2. Acid & Mineral Wash", effect: "Pumice stones soaked in bleaching agents tumble with dyed garments, producing marbled 90s vintage contrast textures." },
    { name: "3. Stonewashing (Denim & Canvas)", effect: "Physical pumice stone tumbling abrades garment edges, softening heavy cotton canvas and creating authentic worn-in denim fades." },
    { name: "4. Garment Dyeing & Pigment Washing", effect: "Stitching raw white cotton garments first, then piece-dyeing in pigment baths for faded seam highlights and vintage washed tones." },
  ];

  const faqs = [
    {
      q: "Does garment washing cause fabric shrinkage?",
      a: "Yes. Garment washing causes initial fabric contraction. Pattern makers compensate by enlarging raw patterns (adding shrinkage allowances) before cutting.",
    },
    {
      q: "What is the difference between Piece Dyeing and Garment Dyeing?",
      a: "Piece dyeing colors raw fabric rolls prior to cutting. Garment dyeing colors fully sewn white garments, creating characteristic faded seam contrast.",
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
            Garment Wash Treatments{" "}
            <span className="italic font-medium text-[#2D5016]">Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Industrial washing transforms rigid raw cotton into soft, luxurious vintage streetwear. Master the technical wash processes used in modern apparel.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Wet Processing</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Garment washing</strong> provides vintage aesthetic distress, pre-shrinks fabric, and achieves buttery soft handfeel.
            </p>
          </div>
        </div>
      </section>

      {/* Washes */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Wash Techniques</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Industrial Wash Processes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {washes.map((w, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{w.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{w.effect}</p>
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
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/learn/what-makes-high-quality-streetwear", label: "What Makes High-Quality Streetwear?" },
              { href: "/denim-jeans-manufacturer-bangladesh", label: "Denim & Wash Manufacturing Services" },
              { href: "/custom-streetwear-manufacturer-bangladesh", label: "Custom Streetwear Manufacturing Bangladesh" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Industrial washing &amp; garment dyeing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt operates state-of-the-art washing &amp; dyeing facilities in Dhaka - executing enzyme bio-washes, acid washes, and pigment dyes.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
