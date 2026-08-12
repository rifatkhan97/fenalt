import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is Pattern Making in Clothing Production?",
  description:
    "Explore pattern making in apparel manufacturing — translating 3D fashion designs into 2D flat paper or digital CAD cutting templates.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-is-pattern-making",
  },
  openGraph: {
    title: "What Is Pattern Making in Clothing Production?",
    description:
      "Explore pattern making in apparel manufacturing — translating 3D fashion designs into 2D flat paper or digital CAD cutting templates.",
    url: "https://fenalt.com/learn/what-is-pattern-making",
  },
};

export default function WhatIsPatternMakingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Pattern Making in Clothing Production?",
    description:
      "An introductory guide to apparel pattern drafting, flat pattern manipulation, draping, and digital CAD pattern engineering.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-is-pattern-making",
    mainEntityOfPage: "https://fenalt.com/learn/what-is-pattern-making",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is Pattern Making", item: "https://fenalt.com/learn/what-is-pattern-making" },
    ],
  };

  const methods = [
    { name: "1. Flat Pattern Drafting", desc: "Using geometric formulas and measurement tables to draw pattern pieces on flat paper from a standard sloper/block." },
    { name: "2. 3D Draping", desc: "Manipulating muslin fabric directly on a physical dress mannequin to capture complex folds, gathers, and silhouettes." },
    { name: "3. Computer-Aided Design (CAD)", desc: "Drafting digital vector pattern files using specialized software (Lectra, Gerber, Optitex) for instant marker creation and size grading." },
  ];

  const faqs = [
    {
      q: "What is a master sloper or block pattern?",
      a: "A sloper (or block pattern) is a basic, un-styled 2D pattern template representing standard body proportions without design seam details. All new styles are built by modifying a sloper.",
    },
    {
      q: "Why is pattern making considered the hardest technical skill in fashion?",
      a: "Because pattern making requires translating fluid 3D human anatomy into flat 2D shapes while compensating for fabric stretch, seam allowances, and sewing shrinkage.",
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
            What Is Pattern Making{" "}
            <span className="italic font-medium text-[#2D5016]">in Clothing Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Pattern making is the bridge between artistic fashion design and technical manufacturing. It creates the 2D template panels that dictate garment fit.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Definition</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Pattern Making</strong> is the art and engineering of drafting flat 2D templates that, when stitched together, form a 3D garment fitting the human body.
            </p>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Drafting Methods</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">3 Pattern Making Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methods.map((m, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{m.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{m.desc}</p>
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
              { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: What's the Difference?" },
              { href: "/learn/cad-pattern-making-explained", label: "CAD Pattern Making for Fashion Brands Explained" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Custom master pattern development</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt drafts custom master paper and CAD patterns for emerging clothing labels — tailored to your exact brand fit vision.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
