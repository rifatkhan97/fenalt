import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Fabric Sourcing Guide for Fashion Brands: Step-by-Step",
  description:
    "Master fabric procurement — working with textile mills, understanding greige fabric stock, negotiating minimums (MOQs), and approving lab-dips.",
  alternates: {
    canonical: "https://fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
  },
  openGraph: {
    title: "Fabric Sourcing Guide for Fashion Brands: Step-by-Step",
    description:
      "Master fabric procurement — working with textile mills, understanding greige fabric stock, negotiating minimums (MOQs), and approving lab-dips.",
    url: "https://fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
  },
};

export default function FabricSourcingGuideForFashionBrandsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fabric Sourcing Guide for Fashion Brands: Step-by-Step",
    description:
      "A strategic guide for apparel founders on navigating textile mills, fabric agents, stock vs custom milling, and lead times.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
    mainEntityOfPage: "https://fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Fabric Sourcing Guide", item: "https://fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands" },
    ],
  };

  const steps = [
    { title: "1. Stock Mill Fabric Sourcing (Low MOQ)", desc: "Procuring pre-knitted or pre-dyed fabrics from mill warehouses. Ideal for small-batch launches (50–200 units) with 1 to 2 week lead times." },
    { title: "2. Custom Lab-Dip Dyeing (Mid Volume)", desc: "Ordering greige (undyed base fabric) and custom dyeing to match brand Pantone PMS colorways. Requires 300m to 500m mill minimums." },
    { title: "3. Custom Knitting & Weaving (High Volume)", desc: "Spinning custom yarn counts, fiber blends, and unique GSM weights directly at textile mills. Requires 1,000kg+ mill minimums." },
    { title: "4. Mill Lead Time Management", desc: "Factoring in 3 to 6 week fabric production cycles before cutting lines open on the factory floor." },
  ];

  const faqs = [
    {
      q: "What is greige fabric?",
      a: "Greige (or gray) fabric is un-dyed, raw knitted or woven textile straight from the loom or knitting machine. Mills dye greige fabric to specific Pantone colors upon order.",
    },
    {
      q: "How does Bangladesh fabric sourcing compare to China?",
      a: "Bangladesh is a global powerhouse for cotton knits (Single Jersey, French Terry, fleece). China offers broader synthetic and technical performance fabrics.",
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
            Fabric Sourcing Guide{" "}
            <span className="italic font-medium text-[#2D5016]">for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sourcing fabric is the first bottleneck in apparel production. Learn how to work with textile mills, manage lead times, and negotiate mill minimums.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Supply Chain Strategy</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Successful fabric sourcing balances <strong className="font-medium">mill minimum order quantities (MOQs), custom Pantone dyeing, and production lead times</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Procurement Options</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Mill Sourcing Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
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
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Bulk Production" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Direct Fabric Sourcing Bangladesh" },
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
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Direct mill network in Dhaka</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt negotiates low fabric minimums and manages custom Pantone lab-dip dyeing directly with top Bangladesh textile mills.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
