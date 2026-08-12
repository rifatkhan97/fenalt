import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "How Fabric Weight Affects Garment Construction",
  description:
    "Explore how fabric weight (GSM) impacts sewing needle selection, seam thread tension, ribbing choices, and pattern seam allowance engineering.",
  alternates: {
    canonical: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
  },
  openGraph: {
    title: "How Fabric Weight Affects Garment Construction",
    description:
      "Explore how fabric weight (GSM) impacts sewing needle selection, seam thread tension, ribbing choices, and pattern seam allowance engineering.",
    url: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
  },
};

export default function FabricWeightAndGarmentConstructionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Fabric Weight Affects Garment Construction",
    description:
      "A technical analysis of how fabric GSM dictates sewing machine needle gauges, thread tension, seam reinforcement, and pattern grading.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
    mainEntityOfPage: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Fabric Weight and Construction", item: "https://fenalt.com/learn/fabric-weight-and-garment-construction" },
    ],
  };

  const structuralImpacts = [
    { title: "1. Sewing Machine Needle Size & Type", desc: "Lightweight 150 GSM jersey uses fine 75/11 ballpoint needles; heavy 500 GSM fleece requires 100/16 heavy ballpoint needles to penetrate bulk without cutting yarns." },
    { title: "2. Thread Tex & Seam Tension", desc: "Heavyweight fabrics demand higher-strength core-spun threads (Tex 40+) and adjusted machine tension to prevent seam popping under stress." },
    { title: "3. Neck & Cuff Ribbing Weight Matching", desc: "Failing to match a heavy 450 GSM fleece body with a heavy 350 GSM 2x2 rib causes collar puckering and cuff distortion." },
    { title: "4. Pattern Seam Allowance & Ease", desc: "Heavy, thick fabrics consume more internal volume at seam joins, requiring larger pattern ease allowances than lightweight knits." },
  ];

  const faqs = [
    {
      q: "Can the same pattern be used for 180 GSM and 350 GSM fabrics?",
      a: "Not ideally. Heavy 350 GSM cotton has less natural stretch and thicker seam bulk than 180 GSM jersey, requiring pattern ease adjustments.",
    },
    {
      q: "Why do heavy hoodies pucker at the pocket seams?",
      a: "Puckering occurs when sewing machine foot pressure is too high or needle gauge is too thick, pushing fabric layers unevenly during stitching.",
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
            How Fabric Weight Affects{" "}
            <span className="italic font-medium text-[#2D5016]">Garment Construction.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Fabric weight (GSM) dictates every technical variable on the factory floor — from needle size and thread tex to pattern ease and seam allowances.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Technical Interdependence</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Heavyweight fabrics are not stitched like lightweight materials. <strong className="font-medium">Fabric GSM dictates needle gauge, thread strength, machine foot pressure, and pattern seam allowances.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Impacts */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Construction Variables</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Technical Construction Impacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {structuralImpacts.map((imp, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{imp.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{imp.desc}</p>
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
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/operations", label: "Fenalt Factory Technical Operations" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Flawless heavyweight construction</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt configures specialized machinery and needle gauges tailored specifically to heavy cotton knitwear and streetwear fleece.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
