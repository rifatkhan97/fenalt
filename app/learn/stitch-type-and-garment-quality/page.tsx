import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "How Stitch Type Affects Garment Quality",
  description:
    "Learn how industrial sewing stitch classes (ISO 4915 / ASTM D6193) — Lockstitch 301, Overlock 504, Coverstitch 605, and Chainstitch 401 — dictate seam strength and flexibility.",
  alternates: {
    canonical: "https://fenalt.com/learn/stitch-type-and-garment-quality",
  },
  openGraph: {
    title: "How Stitch Type Affects Garment Quality",
    description:
      "Learn how industrial sewing stitch classes (ISO 4915 / ASTM D6193) — Lockstitch 301, Overlock 504, Coverstitch 605, and Chainstitch 401 — dictate seam strength and flexibility.",
    url: "https://fenalt.com/learn/stitch-type-and-garment-quality",
  },
};

export default function StitchTypeAndGarmentQualityPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Stitch Type Affects Garment Quality",
    description:
      "A technical guide to ISO 4915 sewing stitch classifications, SPI density, and seam elasticity in clothing manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/stitch-type-and-garment-quality",
    mainEntityOfPage: "https://fenalt.com/learn/stitch-type-and-garment-quality",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Stitch Type and Garment Quality", item: "https://fenalt.com/learn/stitch-type-and-garment-quality" },
    ],
  };

  const stitches = [
    { name: "Lockstitch (Class 301)", bestFor: "Woven shirts, denim pocket joins, and zippers. Strong, non-stretch, identical top and bottom appearance." },
    { name: "Overlock / Safety Stitch (Class 504/516)", bestFor: "Side seam assembly on knits and t-shirts. Trims fabric edge while binding raw edges to prevent fraying." },
    { name: "Coverstitch (Class 605)", bestFor: "T-shirt sleeve hems, bottom hems, and collar neck taping. High elasticity allowing seam extension without popping." },
    { name: "Chainstitch (Class 401)", bestFor: "Waistbands and inseams on heavy denim and workwear. Highly durable linear locking under heavy stress." },
  ];

  const faqs = [
    {
      q: "What is SPI in garment manufacturing?",
      a: "SPI stands for Stitches Per Inch. High quality knits specify 10–12 SPI. Lower SPI (under 8) results in weak seams that pop under tension.",
    },
    {
      q: "Why do t-shirt hem threads pop when pulled?",
      a: "Hem threads pop when an inflexible lockstitch is incorrectly used instead of an elastic coverstitch on stretchable jersey fabric.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction &amp; Quality</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Stitch Type Affects{" "}
            <span className="italic font-medium text-[#2D5016]">Garment Quality.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Stitch selection dictates seam elasticity, tensile strength, and wash durability. Understand how lockstitch, overlock, and coverstitch differ.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scissors size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Seam Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Matching <strong className="font-medium">stitch classification to fabric elasticity and seam stress</strong> prevents seam popping and raw edge fraying.
            </p>
          </div>
        </div>
      </section>

      {/* Stitches */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Industrial Stitch Classes</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Major Industrial Stitch Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stitches.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.bestFor}</p>
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
              { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Finished Garments" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
              { href: "/operations", label: "Fenalt Factory Operations & Sewing Lines" },
              { href: "/cut-and-sew-clothing-manufacturer-bangladesh", label: "Cut & Sew Garment Manufacturing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Precision sewing line configuration</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt configures dedicated Juki sewing machines and SPI densities specifically matched to your fabric weight and garment design.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
