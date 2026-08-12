import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "Sample Approval Checklist for Fashion Brands",
  description:
    "A systematic sample evaluation checklist covering measurement verification, seam construction, fabric handfeel, wash testing, and artwork accuracy.",
  alternates: {
    canonical: "https://fenalt.com/learn/sample-approval-checklist",
  },
  openGraph: {
    title: "Sample Approval Checklist for Fashion Brands",
    description:
      "A systematic sample evaluation checklist covering measurement verification, seam construction, fabric handfeel, wash testing, and artwork accuracy.",
    url: "https://fenalt.com/learn/sample-approval-checklist",
  },
};

export default function SampleApprovalChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sample Approval Checklist for Fashion Brands",
    description:
      "An exhaustive sample inspection checklist for evaluating prototype and pre-production garments before authorizing bulk cutting.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/sample-approval-checklist",
    mainEntityOfPage: "https://fenalt.com/learn/sample-approval-checklist",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Sample Approval Checklist", item: "https://fenalt.com/learn/sample-approval-checklist" },
    ],
  };

  const categories = [
    {
      title: "1. Measurement & POM Audit",
      items: ["Measure every Point of Measure (POM) flat against the tech pack spec sheet", "Verify measurements fall within specified tolerance ranges (e.g. ±1.0 cm)", "Check symmetry across left and right sides (sleeve lengths, pocket heights)"],
    },
    {
      title: "2. Fit & Anatomical Drape",
      items: ["Evaluate sample on a physical fit model or professional mannequin", "Check shoulder seam position, armhole comfort, and neck collar opening", "Test range of motion (raising arms, bending)"],
    },
    {
      title: "3. Construction & Stitching Quality",
      items: ["Inspect stitch density (stitches per inch) and seam flatness", "Check for seam puckering, skipped stitches, or loose threads", "Inspect tension on hem ribbing and waistband joins"],
    },
    {
      title: "4. Artwork, Printing & Trims",
      items: ["Verify artwork position coordinates from reference seams", "Check print sharpness, opacity, and high-density puff elevation", "Confirm woven neck label attachment and care tag legal copy"],
    },
    {
      title: "5. Wash & Shrinkage Testing",
      items: ["Launder sample according to care tag instructions (wash 3x to 5x)", "Re-measure sample post-wash to calculate fabric shrinkage rate", "Inspect graphic prints for cracking or peeling post-wash"],
    },
  ];

  const faqs = [
    {
      q: "What should I do if a sample fails measurement tolerances?",
      a: "Document exact discrepancies with clear photos showing measuring tape alignment, compile clear fit notes, and request a revised sample prior to bulk sign-off.",
    },
    {
      q: "Should I sign off on a sample if only minor trims are incorrect?",
      a: "Yes — provided you issue a conditional approval specifying that the pre-production (PP) sample must incorporate the corrected trims.",
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
            Sample Approval Checklist{" "}
            <span className="italic font-medium text-[#2D5016]">for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Never approve a sample based on visual glance alone. Use this structured checklist to conduct a thorough technical evaluation before bulk authorization.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Audit Protocol</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Approving a sample establishes the <strong className="font-medium">binding quality benchmark for bulk production</strong>. Any defect overlooked in sampling will replicate across thousands of bulk units.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Evaluation Criteria</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Pillars of Sample Inspection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-4">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#C8A882] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#E5DDD3] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/garment-quality-control-services", label: "Fenalt Garment Quality Control Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Professional sample auditing</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt inspects every sample against your tech pack specifications — issuing clear measurement audit reports before shipping.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
