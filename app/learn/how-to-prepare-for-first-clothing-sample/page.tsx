import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Prepare for Your First Clothing Sample",
  description:
    "A preparation checklist for fashion brands ordering their first prototype garment sample — from tech pack validation to physical reference swatches.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
  },
  openGraph: {
    title: "How to Prepare for Your First Clothing Sample",
    description:
      "A preparation checklist for fashion brands ordering their first prototype garment sample — from tech pack validation to physical reference swatches.",
    url: "https://fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
  },
};

export default function HowToPrepareForFirstClothingSamplePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Prepare for Your First Clothing Sample",
    description:
      "A step-by-step guide for fashion brands preparing documentation, physical swatches, and design specs for initial garment sampling.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Prepare for First Sample", item: "https://fenalt.com/learn/how-to-prepare-for-first-clothing-sample" },
    ],
  };

  const prepItems = [
    { step: "1. Finalize Flat 2D Vector Tech Pack", desc: "Ensure front and back sketches have clear stitch callouts and point-of-measure measurement tables." },
    { step: "2. Specify Target Fabric Fiber & GSM", desc: "Define fabric composition (e.g. 100% Cotton, 450 GSM French Terry) and target handfeel." },
    { step: "3. Provide Physical Reference Garment or Swatches", desc: "Sending a reference hoodie or swatch helps the sample machinist match fit, collar ribbing, and handfeel instantly." },
    { step: "4. Clarify Sample Size Choice", desc: "Specify which size to sample (typically Medium or Large) to serve as your base fit evaluation size." },
    { step: "5. Define Printing / Embroidery Vector Files", desc: "Supply vector graphics (AI/EPS/PDF) along with exact placement coordinates from reference seams." },
  ];

  const faqs = [
    {
      q: "Can I sample without sending a physical reference garment?",
      a: "Yes. As long as your tech pack contains comprehensive measurement specs and fabric weight details, a physical reference garment is optional (though helpful).",
    },
    {
      q: "How much does a first prototype sample cost?",
      a: "Sampling fees are typically 2x to 3x the projected bulk FOB unit price, reflecting single-piece pattern setup and custom sample machinist labor.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling &amp; Product Dev</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Prepare for Your{" "}
            <span className="italic font-medium text-[#2D5016]">First Clothing Sample.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Thorough preparation before submitting a sample order reduces revision rounds, saves money, and ensures fast sample delivery.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Preparation Protocol</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The quality of your sample reflects the <strong className="font-medium">completeness of your initial submission package</strong>. Ambiguity leads to factory guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Prep Checklist */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Preparation Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">5 Essential Steps Before Sampling</h2>
          <div className="space-y-6">
            {prepItems.map((item, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{item.step}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{item.desc}</p>
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
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/what-a-clothing-manufacturer-needs-from-a-brand", label: "What a Clothing Manufacturer Needs From a Brand" },
              { href: "/learn/types-of-apparel-samples", label: "The Different Types of Apparel Samples Explained" },
              { href: "/apparel-sampling-services", label: "Fenalt Apparel Sampling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Ready to order your first sample?</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Submit your sketches or tech pack to Fenalt for a detailed sampling consultation and quote.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Sampling Request <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
