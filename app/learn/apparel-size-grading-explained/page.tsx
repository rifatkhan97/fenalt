import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Maximize2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Apparel Size Grading Works Across Sizes",
  description:
    "Understand pattern size grading — how base size patterns (Medium) scale proportionally to XS, Small, Large, and 3XL using grade rules.",
  alternates: {
    canonical: "https://fenalt.com/learn/apparel-size-grading-explained",
  },
  openGraph: {
    title: "How Apparel Size Grading Works Across Sizes",
    description:
      "Understand pattern size grading — how base size patterns (Medium) scale proportionally to XS, Small, Large, and 3XL using grade rules.",
    url: "https://fenalt.com/learn/apparel-size-grading-explained",
  },
};

export default function ApparelSizeGradingExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Apparel Size Grading Works Across Sizes",
    description:
      "A technical explanation of garment pattern size grading, grade rules, CAD software scaling, and size ratio specs.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/apparel-size-grading-explained",
    mainEntityOfPage: "https://fenalt.com/learn/apparel-size-grading-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Apparel Size Grading Explained", item: "https://fenalt.com/learn/apparel-size-grading-explained" },
    ],
  };

  const concepts = [
    { title: "1. Base Sample Size (Medium/Large)", desc: "Pattern makers create and perfect a single master size (usually M). Once approved, all other sizes are calculated from this master base." },
    { title: "2. Grade Rules (Increment Values)", desc: "A grade rule specifies how much a specific point of measure increases or decreases per size step (e.g. +4 cm per size for chest width)." },
    { title: "3. Non-Proportional Grading Shifts", desc: "Collar openings, pocket sizes, and cuff lengths do not scale 1:1 with chest expansion — grade rules hold specific static benchmarks." },
    { title: "4. CAD Computerized Vector Grading", desc: "Modern pattern makers apply digital grade rule tables in CAD software (Optitex, Lectra, Gerber) to generate all nest sizes instantaneously." },
  ];

  const faqs = [
    {
      q: "Can I just enlarge a Medium tech pack by 10% to make a Large?",
      a: "No! Uniform 10% scaling causes neck openings, armhole curves, and pocket positions to become distorted on larger sizes. Proper technical grade rules must be applied.",
    },
    {
      q: "What is Alpha vs Numeric size grading?",
      a: "Alpha grading uses letter sizes (XS, S, M, L, XL, 2XL). Numeric grading uses precise inch or cm chest/waist measurements (30, 32, 34, 36).",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Pattern Making</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Apparel Size Grading{" "}
            <span className="italic font-medium text-[#2D5016]">Works Across Sizes.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Pattern size grading turns a single approved sample pattern into an entire graded size range — maintaining proportional fit across all body types.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Maximize2 size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Grading Principles</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Size grading</strong> is the technical process of scaling pattern pieces up or down according to a systematic table of grade rules.
            </p>
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Core Methodology</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Key Elements of Pattern Grading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concepts.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.desc}</p>
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
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure in Garment Manufacturing?" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Clothing Tech Pack" },
              { href: "/learn/cad-pattern-making-explained", label: "CAD Pattern Making for Fashion Brands Explained" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Making Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Precision pattern size grading</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s CAD technical team provides accurate pattern grading across full size runs — ensuring consistent fit from XS to 3XL.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
