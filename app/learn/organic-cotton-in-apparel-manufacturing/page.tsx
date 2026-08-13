import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Organic Cotton in Apparel Manufacturing: What Brands Should Know",
  description:
    "A guide to organic cotton in clothing manufacturing — certification standards (GOTS, OCS), water reduction, fabric sourcing, transaction certificates, and realistic mill MOQs.",
  alternates: {
    canonical: "https://fenalt.com/learn/organic-cotton-in-apparel-manufacturing",
  },
  openGraph: {
    title: "Organic Cotton in Apparel Manufacturing: What Brands Should Know",
    description:
      "A guide to organic cotton in clothing manufacturing — certification standards (GOTS, OCS), water reduction, fabric sourcing, transaction certificates, and realistic mill MOQs.",
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
    {
      title: "1. Zero Synthetic Pesticides & Non-GMO Seeds",
      desc: "Organic cotton is grown using natural non-genetically modified (non-GMO) seeds, without synthetic pesticides, toxic insecticides, or synthetic nitrogen fertilizers — protecting farm soil health and groundwater quality.",
    },
    {
      title: "2. Independent Certification (GOTS & OCS)",
      desc: "Textile Exchange's Organic Content Standard (OCS) and the Global Organic Textile Standard (GOTS) audit the supply chain to verify organic fiber percentages and environmental compliance from farm to mill.",
    },
    {
      title: "3. Low Water Impact & Rain-Fed Agriculture",
      desc: "Organic farming practices build healthy, organic-rich soil that retains moisture effectively, allowing a majority of organic cotton crops to rely primarily on natural rainfall rather than intensive artificial irrigation.",
    },
    {
      title: "4. Transaction Certificate (TC) Chain-of-Custody",
      desc: "To legally back up consumer-facing organic claims, brands must ensure their supplier provides official Transaction Certificates (TCs) issued by accredited certification bodies for each fabric lot.",
    },
    {
      title: "5. Fabric Price Premium & Mill Minimums",
      desc: "Organic cotton yarn carries a 15% to 30% price premium over conventional cotton. Dyeing custom organic fabric lots requires mill minimums (typically 300kg to 500kg), though stock organic fabrics enable lower MOQs.",
    },
    {
      title: "6. Low-Impact Eco-Dyeing & Finishing Compatibility",
      desc: "Pairing organic cotton fabric with GOTS-approved low-impact reactive dyes and OEKO-TEX-certified softeners ensures the entire garment meets holistic ecological standards.",
    },
  ];

  const standardsComparison = [
    {
      standard: "GOTS (Global Organic Textile Standard)",
      scope: "Full supply chain standard covering environmental, chemical, and social criteria.",
      requirement: "Minimum 70% organic fibers for 'made with organic' label; 95% for 'organic' label. Strict bans on toxic dyes and heavy metals; includes social compliance checks.",
    },
    {
      standard: "OCS (Organic Content Standard)",
      scope: "Chain-of-custody standard tracking organic fiber content only.",
      requirement: "Verifies the presence and percentage of organic material in a final product (from 5% to 100%). Focuses purely on fiber traceability without chemical or social auditing.",
    },
  ];

  const faqs = [
    {
      q: "Does organic cotton cost more than conventional cotton?",
      a: "Yes. Organic raw cotton yarn typically carries a 15% to 30% price premium. This reflects lower crop yields per acre, natural weed management labor, and strict third-party certification auditing fees.",
    },
    {
      q: "Is organic cotton softer than regular cotton?",
      a: "Fabric softness depends primarily on fiber length and yarn spinning techniques (such as combed ring-spinning). However, because organic cotton is not subjected to harsh chemical bleaching during farming, its natural fibers remain unblemished, yielding natural softness.",
    },
    {
      q: "What is a Transaction Certificate (TC) in organic apparel?",
      a: "A Transaction Certificate (TC) is an official document issued by an accredited certification body (such as Control Union or Ecocert) that verifies a specific shipment of fabric contains certified organic fiber transferred from a certified mill.",
    },
    {
      q: "Can brands market garments as 'GOTS Certified' if only the fabric is certified?",
      a: "To use the official GOTS logo on finished retail garments, the entire manufacturing chain — including the garment sewing factory and printing facility — must hold independent GOTS facility certification. If only the fabric mill is certified, brands state 'made with GOTS-certified organic cotton fabric'.",
    },
    {
      q: "Is organic cotton available for low MOQ production runs?",
      a: "Yes. Sourcing stock-dyed organic cotton fabrics from certified supplier warehouses allows brands to produce capsule drops from 100 units per style. Custom-knitted or custom-dyed organic fabrics require mill minimums of 300kg per colorway.",
    },
    {
      q: "How does Fenalt support organic cotton apparel sourcing?",
      a: "Fenalt pairs fashion labels with certified organic cotton fabric mills in Bangladesh, providing lab-dip color matching, TC documentation, and audited micro-factory production oversight in Dhaka.",
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
            Organic Cotton{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A brand guide to organic cotton fiber sourcing — understanding GOTS and OCS certification standards, chain-of-custody documentation, and manufacturing cost realities.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Sustainable Sourcing</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Organic cotton</strong> eliminates toxic synthetic agricultural inputs, but requires verifiable Transaction Certificate (TC) documentation to back up retail marketing claims.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            As consumer demand for sustainable fashion grows, organic cotton has become a key material choice for eco-conscious clothing brands. Sourcing organic cotton requires understanding the difference between raw fiber claims and audited chain-of-custody standards (GOTS and OCS) that verify environmental integrity from farm to finished garment.
          </p>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Manufacturing Fundamentals</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Essentials of Organic Cotton Production</h2>
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

      {/* Standards Comparison */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Certification Framework</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">GOTS vs OCS: Certification Differences</h2>
          <div className="space-y-6">
            {standardsComparison.map((st, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{st.standard}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-3">{st.scope}</p>
                <p className="text-sm text-[#6B6560] leading-relaxed">{st.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
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
              { href: "/learn/recycled-polyester-in-clothing-production", label: "Recycled Polyester in Clothing Production" },
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/organic-cotton-clothing-manufacturing", label: "Fenalt Organic Cotton Sourcing in Bangladesh" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Source organic cotton fabrics in Bangladesh</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt pairs brands with audited organic cotton fabric mills in Dhaka, managing lab-dip approvals and TC chain-of-custody documentation.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
