import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "How International Clothing Production Is Coordinated",
  description:
    "Discover how global supply chain teams orchestrate overseas garment manufacturing - tech pack handoffs, lab-dip approvals, inline inspections, and freight booking.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
  },
  openGraph: {
    title: "How International Clothing Production Is Coordinated",
    description:
      "Discover how global supply chain teams orchestrate overseas garment manufacturing - tech pack handoffs, lab-dip approvals, inline inspections, and freight booking.",
    url: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
  },
};

export default function HowInternationalClothingProductionIsCoordinatedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How International Clothing Production Is Coordinated",
    description:
      "A technical supply chain operations guide explaining cross-border apparel manufacturing workflows.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
    mainEntityOfPage: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "International Production Coordination", item: "https://fenalt.com/learn/how-international-clothing-production-is-coordinated" },
    ],
  };

  const phases = [
    { title: "1. Digital Tech Pack & CAD Handoff", desc: "Design teams transmit vectorized tech pack artwork, digital measurement specs, and target pantone swatches to factory merchandisers." },
    { title: "2. Prototype & Golden Sample Sign-Off", desc: "Couriered fit samples and strike-off print strike-offs are reviewed, annotated with revisions, and officially sealed." },
    { title: "3. Bulk Mill Dyeing & Inline Sewing Audits", desc: "Overseas quality managers monitor bulk fabric yarn spinning, lab-dip color matching, cutting table markers, and sewing line assembly." },
    { title: "4. Final Inspection & Ocean/Air Freight Booking", desc: "Conducting AQL 2.5 FRI inspections, sealing export Master Cartons, and issuing Bills of Lading for shipping dispatch." },
  ];

  const faqs = [
    {
      q: "What role does a merchandising manager play in overseas coordination?",
      a: "The factory merchandiser acts as the single central hub - coordinating raw yarn mill purchases, printing house schedules, QC audits, and shipping document releases.",
    },
    {
      q: "How long does global supply chain coordination take for a bulk collection?",
      a: "Total timeline from tech pack submission to warehouse delivery ranges from 60 to 90 days depending on fabric custom dyeing and shipping distance.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Strategy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How International Production{" "}
            <span className="italic font-medium text-[#2D5016]">Is Coordinated.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Coordinating overseas garment production across multiple time zones requires rigorous project management, clear milestone gates, and dedicated merchandising.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Network size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Global Operations</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Global production coordination synchronizes <strong className="font-medium">tech pack handoffs, sample approvals, inline QC auditing, and export freight booking</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Coordination Timeline</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Milestones of Global Manufacturing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((ph, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{ph.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{ph.desc}</p>
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
              { href: "/overseas-production-management-apparel", label: "Overseas Production Management Apparel Guide" },
              { href: "/learn/what-happens-after-clothing-manufactured-overseas", label: "What Happens After Clothing Is Manufactured Overseas?" },
              { href: "/learn/clothing-manufacturing-timeline", label: "Apparel Manufacturing Lead Time Breakdown" },
              { href: "/apparel-production-management", label: "Fenalt Production Management Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">End-to-end global supply chain coordination</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages cross-border manufacturing end-to-end - overseeing mill sourcing, sampling, sewing, QC, and door-to-door freight.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
