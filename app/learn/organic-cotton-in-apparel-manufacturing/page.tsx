import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Organic Cotton in Apparel Manufacturing: What Brands Should Know",
  description:
    "A guide to organic cotton in clothing manufacturing — certification standards (GOTS, OCS), water reduction, fabric sourcing, and realistic mill MOQs.",
  alternates: {
    canonical: "https://fenalt.com/learn/organic-cotton-in-apparel-manufacturing",
  },
  openGraph: {
    title: "Organic Cotton in Apparel Manufacturing: What Brands Should Know",
    description:
      "A guide to organic cotton in clothing manufacturing — certification standards (GOTS, OCS), water reduction, fabric sourcing, and realistic mill MOQs.",
    url: "https://fenalt.com/learn/organic-cotton-in-apparel-manufacturing",
  },
};

export default function OrganicCottonInApparelManufacturingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Organic Cotton in Apparel Manufacturing: What Brands Should Know",
    description:
      "An educational guide on organic cotton fiber sourcing, certification documentation (GOTS/OCS), environmental benefits, and apparel manufacturing considerations.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/organic-cotton-in-apparel-manufacturing",
    mainEntityOfPage: "https://fenalt.com/learn/organic-cotton-in-apparel-manufacturing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Organic Cotton in Apparel Manufacturing", item: "https://fenalt.com/learn/organic-cotton-in-apparel-manufacturing" },
    ],
  };

  const pillars = [
    { title: "1. Zero Synthetic Pesticides & Non-GMO Seeds", desc: "Organic cotton is grown without toxic synthetic chemicals, heavy metals, or genetically modified seeds, protecting soil health and farmer safety." },
    { title: "2. GOTS & OCS Certification Standards", desc: "Global Organic Textile Standard (GOTS) and Organic Content Standard (OCS) track fiber custody from organic farms through spinning and dyeing." },
    { title: "3. Low Water Impact & Soil Conservation", desc: "Organic soil management increases organic matter in dirt, allowing farms to rely predominantly on natural rainfall rather than heavy irrigation." },
    { title: "4. Sourcing Requirements for Brands", desc: "Brands marketing organic cotton garments must obtain Transaction Certificates (TCs) from certified textile mills to back up retail claims." },
  ];

  const faqs = [
    {
      q: "Does organic cotton cost more than conventional cotton?",
      a: "Yes. Organic raw fiber typically carries a 15% to 30% price premium due to lower crop yields and strict organic farming certification costs.",
    },
    {
      q: "Is organic cotton softer than regular cotton?",
      a: "Softness depends on fiber length and yarn spinning (e.g. combed ring-spun cotton). However, organic cotton fibers are unblemished by harsh chemical treatments, offering natural softness.",
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
            Organic Cotton in Apparel:{" "}
            <span className="italic font-medium text-[#2D5016]">What Brands Should Know.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sourcing organic cotton requires understanding chain-of-custody documentation, mill minimums, and environmental certification standards.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Eco Sourcing</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Organic cotton sourcing</strong> requires verifiable Transaction Certificates (TCs) to ensure that eco claims are backed by audited chain-of-custody documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Organic Principles</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of Organic Cotton</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{p.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{p.desc}</p>
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
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton" },
              { href: "/organic-cotton-clothing-manufacturing", label: "Fenalt Organic Cotton Manufacturing Services" },
              { href: "/sustainable-apparel-manufacturing-bangladesh", label: "Sustainable Apparel Manufacturing Bangladesh" },
              { href: "/sustainable-textile-sourcing", label: "Sustainable Textile Sourcing Guide" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Source certified organic cotton knits</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt partners with GOTS and OCS-certified spinning mills in Bangladesh to provide traceable organic cotton knits for sustainable labels.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
