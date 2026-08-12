import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "Cut-and-Sew Manufacturing Explained for Fashion Brands",
  description:
    "Learn what cut-and-sew manufacturing is, how it differs from white-label printing, and why custom pattern cutting offers complete design freedom.",
  alternates: {
    canonical: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
  },
  openGraph: {
    title: "Cut-and-Sew Manufacturing Explained for Fashion Brands",
    description:
      "Learn what cut-and-sew manufacturing is, how it differs from white-label printing, and why custom pattern cutting offers complete design freedom.",
    url: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
  },
};

export default function CutAndSewManufacturingExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cut-and-Sew Manufacturing Explained for Fashion Brands",
    description:
      "A comprehensive guide to cut-and-sew garment manufacturing, pattern development, fabric spreading, cutting, and sewing workflows.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
    mainEntityOfPage: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Cut-and-Sew Manufacturing Explained", item: "https://fenalt.com/learn/cut-and-sew-manufacturing-explained" },
    ],
  };

  const steps = [
    {
      title: "1. Fabric Spreading & Marker Making",
      desc: "Rolls of raw fabric are laid out in flat, even layers on long cutting tables. Computerized marker software arranges pattern pieces to minimize fabric waste.",
    },
    {
      title: "2. Precision Cutting",
      desc: "Industrial straight-knife cutting machines or automated laser cutters slice through fabric layers following the marker layout.",
    },
    {
      title: "3. Bundling & Sub-Assembly",
      desc: "Cut fabric panels (front, back, sleeves, collars, pockets) are grouped into bundles by size and colorway and routed to specialized sewing lines.",
    },
    {
      title: "4. Garment Assembly & Trimming",
      desc: "Sewing technicians stitch panels together using lockstitch, overlock, or flatlock machines, followed by hardware, label, and trim attachment.",
    },
  ];

  const faqs = [
    {
      q: "What is the main difference between cut-and-sew and print-on-demand blanks?",
      a: "Print-on-demand uses pre-made off-the-shelf garments with fixed dimensions. Cut-and-sew builds garments from raw fabric, allowing custom sizing, specialized stitching, unique necklines, and custom paneling.",
    },
    {
      q: "Is cut-and-sew manufacturing more expensive than blank printing?",
      a: "Initial development costs (tech pack, custom patterns, sample revisions) are higher for cut-and-sew. However, at scale, per-unit costs are highly competitive while providing total design ownership.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Manufacturing Fundamentals</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Cut-and-Sew Manufacturing{" "}
            <span className="italic font-medium text-[#2D5016]">Explained for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Cut-and-sew manufacturing gives apparel brands total creative control over fabric choice, silhouette proportions, and custom construction details.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scissors size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Definition</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Cut-and-Sew Manufacturing</strong> is the process of creating custom garments from scratch — unrolling raw fabric, cutting flat pattern panels, and sewing them into finished garments according to custom brand specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Stages</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">4 Key Cut-and-Sew Operations</h2>
          <div className="space-y-6">
            {steps.map((st, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{st.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{st.desc}</p>
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
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works: From Design to Finished Garment" },
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/cut-and-sew-clothing-manufacturer-bangladesh", label: "Fenalt Cut-and-Sew Manufacturing Bangladesh" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Development Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Build custom cut-and-sew collections</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt delivers full cut-and-sew production for independent brands — offering custom pattern making, high-GSM fabric sourcing, and low MOQs.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
