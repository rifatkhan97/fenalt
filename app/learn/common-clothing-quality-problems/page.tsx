import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Common Clothing Quality Problems and Their Causes",
  description:
    "Troubleshoot garment manufacturing defects — puckered seams, shade variation, fabric pilling, skipped stitches, print cracking, and crooked hems.",
  alternates: {
    canonical: "https://fenalt.com/learn/common-clothing-quality-problems",
  },
  openGraph: {
    title: "Common Clothing Quality Problems and Their Causes",
    description:
      "Troubleshoot garment manufacturing defects — puckered seams, shade variation, fabric pilling, skipped stitches, print cracking, and crooked hems.",
    url: "https://fenalt.com/learn/common-clothing-quality-problems",
  },
};

export default function CommonClothingQualityProblemsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Clothing Quality Problems and Their Causes",
    description:
      "A technical troubleshooting guide analyzing common apparel defects, root causes, and factory preventive measures.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/common-clothing-quality-problems",
    mainEntityOfPage: "https://fenalt.com/learn/common-clothing-quality-problems",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Common Clothing Quality Problems", item: "https://fenalt.com/learn/common-clothing-quality-problems" },
    ],
  };

  const defects = [
    { name: "1. Seam Puckering", cause: "Excessive thread tension or using thick needles on lightweight knit fabric.", fix: "Lower machine tension and switch to fine ballpoint needles (70/10)." },
    { name: "2. Fabric Shade Variation", cause: "Mixing different dye lots during cutting without shade band separation.", fix: "Group fabric rolls into strict shade bands prior to marker spreading." },
    { name: "3. Graphic Print Cracking / Peeling", cause: "Under-curing plastisol ink in the dryer tunnel or incorrect ink additive ratio.", fix: "Calibrate conveyor dryer tunnel temp to 160°C (320°F) with forced hot air." },
    { name: "4. Asymmetric Hem / Torquing Seams", cause: "Skewed fabric grainlines during cutting spreading.", fix: "Relax fabric plies on cutting tables and align grainlines flat." },
  ];

  const faqs = [
    {
      q: "Why do t-shirt side seams twist after washing?",
      a: "Seam twisting (torquing) happens when knitted fabric is cut off-grain. Tension in distorted loops relaxes during laundering, pulling the seam forward.",
    },
    {
      q: "How can brands enforce zero defect tolerance?",
      a: "By establishing binding AQL 2.5 FRI inspection criteria, approving physical Golden Samples, and placing inline QC auditors inside the factory.",
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
            Common Clothing Quality Problems{" "}
            <span className="italic font-medium text-[#2D5016]">and Their Causes.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Understanding the root causes of apparel defects allows brand founders to specify preventive technical measures before production begins.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Defect Troubleshooting</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Most garment defects trace back to <strong className="font-medium">improper machine settings, off-grain fabric spreading, or uncalibrated dryer curing</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Defects */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Top Garment Defects</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Major Apparel Defects &amp; Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {defects.map((d, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{d.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-2"><strong className="text-[#C8A882]">Root Cause:</strong> {d.cause}</p>
                <p className="text-sm text-[#6B6560] leading-relaxed"><strong className="text-[#C8A882]">Preventive Fix:</strong> {d.fix}</p>
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
              { href: "/learn/how-to-reduce-defects-in-apparel-production", label: "How to Reduce Defects in Apparel Production" },
              { href: "/learn/final-inspection-finished-garments", label: "Final Inspection for Finished Garments" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/garment-quality-control-services", label: "Fenalt Quality Control Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Eliminate manufacturing defects</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt enforces strict inline auditing and technical machine calibrations to prevent common defects before garments reach final inspection.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
