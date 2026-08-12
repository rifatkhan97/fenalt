import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Embroidery for Clothing Brands: Technical Guide",
  description:
    "Master custom embroidery in apparel manufacturing - flat stitching, 3D puff embroidery, stitch count calculations, backing stabilizer types, and artwork digitizing.",
  alternates: {
    canonical: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
  },
  openGraph: {
    title: "Custom Embroidery for Clothing Brands: Technical Guide",
    description:
      "Master custom embroidery in apparel manufacturing - flat stitching, 3D puff embroidery, stitch count calculations, backing stabilizer types, and artwork digitizing.",
    url: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
  },
};

export default function CustomEmbroideryForClothingBrandsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Embroidery for Clothing Brands: Technical Guide",
    description:
      "A technical breakdown of industrial embroidery, DST file digitizing, 3D foam puff embroidery, and fabric stabilization.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
    mainEntityOfPage: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Custom Embroidery for Clothing Brands", item: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands" },
    ],
  };

  const steps = [
    { title: "1. Artwork Digitizing (DST / EMB File)", desc: "Converting 2D vector graphic files into machine-readable DST stitch paths defining needle direction, density, and jump stitches." },
    { title: "2. Flat Stitching vs 3D Foam Puff Embroidery", desc: "Flat embroidery stitches directly into fabric. 3D Puff places EVA foam beneath satin stitches for elevated 3D depth on caps and hoodies." },
    { title: "3. Backing Stabilizers (Tearaway vs Cutaway)", desc: "Cutaway non-woven backing provides permanent structural stability on knits; tearaway backing is used on stable wovens." },
    { title: "4. Stitch Count & Unit Pricing Math", desc: "Embroidery cost is determined by total needle stitch count (e.g. 8,000 stitches vs 25,000 stitches) rather than color count." },
  ];

  const faqs = [
    {
      q: "Why is small text difficult to embroider?",
      a: "Embroidery thread has physical thickness. Text smaller than 4mm high loses legibility and fills in fine letter openings.",
    },
    {
      q: "Can thin t-shirt fabric support heavy embroidery?",
      a: "Heavy embroidery on lightweight 160 GSM jersey causes fabric puckering. Heavy stitch counts require 240+ GSM cotton or cutaway stabilizer backing.",
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
            Custom Embroidery for Brands:{" "}
            <span className="italic font-medium text-[#2D5016]">Technical Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Embroidery communicates premium luxury and tactical durability. Learn how digitizing, stitch counts, and 3D foam puff elevate your collection.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Needle Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Industrial embroidery relies on <strong className="font-medium">vector digitizing, stitch count optimization, and proper backing stabilizers</strong> to prevent fabric puckering.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Pillars</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Steps in Custom Embroidery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
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
              { href: "/learn/embroidery-vs-screen-printing-apparel", label: "Embroidery vs Screen Printing in Apparel" },
              { href: "/custom-embroidery-apparel-manufacturing", label: "Fenalt Custom Embroidery Manufacturing" },
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/hoodie-manufacturing", label: "Custom Hoodie Manufacturing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Multi-head industrial embroidery</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt operates multi-head Tajima embroidery machines in Dhaka - producing flat stitching, 3D foam puff, and chenille patches.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
