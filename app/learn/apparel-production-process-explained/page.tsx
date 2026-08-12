import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "The Apparel Production Process Explained Step by Step",
  description:
    "A complete end-to-end breakdown of the apparel production and product development workflow - from design concept to final export packaging.",
  alternates: {
    canonical: "https://fenalt.com/learn/apparel-production-process-explained",
  },
  openGraph: {
    title: "The Apparel Production Process Explained Step by Step",
    description:
      "A complete end-to-end breakdown of the apparel production and product development workflow - from design concept to final export packaging.",
    url: "https://fenalt.com/learn/apparel-production-process-explained",
  },
};

export default function ApparelProductionProcessExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Apparel Production Process Explained Step by Step",
    description:
      "A step-by-step master guide covering every phase of garment manufacturing and product development for fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/apparel-production-process-explained",
    mainEntityOfPage: "https://fenalt.com/learn/apparel-production-process-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Apparel Production Process Explained", item: "https://fenalt.com/learn/apparel-production-process-explained" },
    ],
  };

  const phases = [
    {
      num: "01",
      title: "Design Concept & Tech Pack Creation",
      desc: "Translating brand design ideas into technical specifications, flat sketches, bill of materials (BOM), and measurement spec sheets.",
    },
    {
      num: "02",
      title: "Pattern Making & Sample Development",
      desc: "Creating 2D master patterns, sewing initial prototype samples, and conducting fit evaluations on models.",
    },
    {
      num: "03",
      title: "Material Sourcing & Lab Dips",
      desc: "Procuring bulk fabrics, dyeing lab dips to match Pantone codes, and sourcing custom hardware, zippers, and labels.",
    },
    {
      num: "04",
      title: "Pre-Production Sign-Off (Golden Sample)",
      desc: "Evaluating the final pre-production sample (made with actual bulk fabrics and trims) to lock in the binding quality benchmark.",
    },
    {
      num: "05",
      title: "Bulk Spreading & Cutting",
      desc: "Unrolling fabric bolts onto industrial cutting tables, laying markers, and precision-cutting garment panels.",
    },
    {
      num: "06",
      title: "Line Assembly & Sewing",
      desc: "Routing cut fabric bundles through specialized sewing lines (lockstitch, overlock, flatlock) for full assembly.",
    },
    {
      num: "07",
      title: "Finishing, Washing & Ironing",
      desc: "Applying soft washes, trimming loose threads, steam pressing, metal/needle detection, and quality control audits.",
    },
    {
      num: "08",
      title: "Packaging & Export Logistics",
      desc: "Polybagging, carton packing according to ratio, customs documentation, and freight dispatch.",
    },
  ];

  const faqs = [
    {
      q: "How long does the entire apparel production process take from start to finish?",
      a: "For new styles, the complete cycle (sampling + fabric procurement + bulk manufacturing + shipping) typically ranges from 10 to 14 weeks depending on order complexity.",
    },
    {
      q: "What is the most critical stage in the garment production workflow?",
      a: "The Pre-Production (PP) sample approval stage. Once bulk cutting begins (Phase 5), pattern or measurement mistakes cannot be corrected.",
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
            The Apparel Production Process{" "}
            <span className="italic font-medium text-[#2D5016]">Explained Step by Step.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A comprehensive master guide to the 8 phases of clothing production - bridging early product development and bulk manufacturing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Workflow size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Workflow Architecture</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Successful clothing production relies on a strict, sequential pipeline. Skipping phases or rushing pre-production guarantees costly bulk manufacturing errors.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Phases */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Lifecycle</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">The 8 Production Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((p, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-light text-[#C8A882] shrink-0 w-10">{p.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{p.title}</h3>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merged Content #20: Beginner's Product Development Focus */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-[#C8A882] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider mb-4">Product Development Guide</span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-6">Beginner&apos;s Checklist for Phases 1–4</h2>
          <p className="text-sm text-[#E5DDD3] leading-relaxed mb-8">
            Before entering bulk production (Phases 5–8), ensure your brand has locked in these four critical product development deliverables:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">1. Locked Tech Pack</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">No remaining TBDs in fabric specs, Pantone codes, or POM measurement tables.</p>
            </div>
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">2. Approved Fit Model Notes</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">All fit sample adjustments documented and updated in master graded patterns.</p>
            </div>
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">3. Signed Golden Sample</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">Physical reference garment signed off by brand and stored at origin factory.</p>
            </div>
            <div className="p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
              <h3 className="font-display text-lg font-medium text-[#C8A882] mb-2">4. Verified BOM & Trims</h3>
              <p className="text-xs text-[#E5DDD3] leading-relaxed">Exact care label copy, woven neck tags, zippers, and polybag specifications approved.</p>
            </div>
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
              { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
              { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Usually Take?" },
              { href: "/operations", label: "Fenalt Operations Workflow in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Streamline your production process</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages every step of the apparel production process - ensuring clear communication and high-quality output.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
