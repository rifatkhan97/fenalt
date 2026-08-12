import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "The Different Types of Apparel Samples Explained",
  description:
    "Understand the 7 major garment sample types — Proto, Fit, Salesperson, Pre-Production (PP), TOP, and Shipping samples — and when each is required.",
  alternates: {
    canonical: "https://fenalt.com/learn/types-of-apparel-samples",
  },
  openGraph: {
    title: "The Different Types of Apparel Samples Explained",
    description:
      "Understand the 7 major garment sample types — Proto, Fit, Salesperson, Pre-Production (PP), TOP, and Shipping samples — and when each is required.",
    url: "https://fenalt.com/learn/types-of-apparel-samples",
  },
};

export default function TypesOfApparelSamplesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Different Types of Apparel Samples Explained",
    description:
      "A technical guide detailing every sample stage in garment manufacturing, from initial proto sample to Top of Production (TOP).",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/types-of-apparel-samples",
    mainEntityOfPage: "https://fenalt.com/learn/types-of-apparel-samples",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Types of Apparel Samples", item: "https://fenalt.com/learn/types-of-apparel-samples" },
    ],
  };

  const sampleTypes = [
    { name: "1. Prototype (Proto) Sample", purpose: "Test general silhouette and design feasibility using available in-house fabric." },
    { name: "2. Fit Sample", purpose: "Evaluate anatomical drape and sizing accuracy on a physical fit model." },
    { name: "3. Size Set Samples", purpose: "Verify pattern grading across the complete size spectrum (e.g. S, M, L, XL)." },
    { name: "4. Salesperson Sample (SMS)", purpose: "Showcase finished garments in exact bulk fabrics for trade shows, lookbooks, and wholesale buyers." },
    { name: "5. Pre-Production (PP) Sample", purpose: "The 'Golden Sample' — constructed with actual bulk fabric, trims, labels, and wash treatments." },
    { name: "6. Top of Production (TOP) Sample", purpose: "Pulled directly from the first 10% of bulk sewing to audit line quality." },
    { name: "7. Shipping Sample", purpose: "Pulled from final packed export cartons to verify polybagging, hangtags, and carton ratio." },
  ];

  const faqs = [
    {
      q: "Do emerging brands need to make all 7 types of samples?",
      a: "No. Small DTC brands typically only require a Proto/Fit Sample and a Pre-Production (PP) Sample before starting bulk cutting.",
    },
    {
      q: "Who pays for sample development?",
      a: "The brand pays for sample development fees, which cover pattern drafting, sample machinist labor, and fabric swatches. Some factories credit sampling costs back upon bulk PO issuance.",
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
            The Different Types of Apparel{" "}
            <span className="italic font-medium text-[#2D5016]">Samples Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Not all apparel samples serve the same purpose. Understand the sampling hierarchy to streamline your product development timeline.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Sampling Taxonomy</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Each sample stage isolates specific variables — <strong className="font-medium">silhouette (proto), fit &amp; drape (fit sample), aesthetics (SMS), and final production standard (PP sample)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Types List */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Sampling Spectrum</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">7 Essential Garment Samples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleTypes.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.purpose}</p>
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
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Brands" },
              { href: "/apparel-sampling-services", label: "Fenalt Professional Sampling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Develop your prototype samples</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt offers fast-turnaround sampling services — developing precision proto, fit, and pre-production samples in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Sampling Request <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
