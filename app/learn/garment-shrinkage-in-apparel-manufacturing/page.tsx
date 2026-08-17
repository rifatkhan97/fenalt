import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding Shrinkage in Apparel Manufacturing",
  description:
    "Explore fabric and garment shrinkage - understanding length vs width shrinkage rates, CAD pattern scale-up compensation, mill compacting, Sanforizing, and bio-washing treatments.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
  },
  openGraph: {
    title: "Understanding Shrinkage in Apparel Manufacturing",
    description:
      "Explore fabric and garment shrinkage - understanding length vs width shrinkage rates, CAD pattern scale-up compensation, mill compacting, Sanforizing, and bio-washing treatments.",
    url: "https://www.fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
  },
};

export default function GarmentShrinkageInApparelManufacturingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Understanding Shrinkage in Apparel Manufacturing",
    description:
      "A technical guide to managing fabric shrinkage in clothing production, pattern shrinkage allowances, and pre-shrinking mill processes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
    mainEntityOfPage: "https://www.fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Understanding Shrinkage in Manufacturing", item: "https://www.fenalt.com/learn/garment-shrinkage-in-apparel-manufacturing" },
    ],
  };

  const mechanisms = [
    {
      title: "1. Fiber Relaxation Shrinkage Mechanics",
      desc: "Mechanical tension applied to cotton yarns during knitting or weaving stretches the fibers. When exposed to water and heat in home laundering, the fibers relax and contract back to their natural un-tensioned state.",
    },
    {
      title: "2. Lengthwise (Warp) vs Widthwise (Weft) Differential",
      desc: "Knitted fabrics shrink asymmetrical across dimensions. For example, an uncompacted 100% cotton single jersey may shrink -5% to -7% in length but only -2% in width during initial laundering.",
    },
    {
      title: "3. CAD Pattern Scale-Up Shrinkage Compensation",
      desc: "Pattern engineers test raw fabric swatches prior to cutting, measuring exact length and width shrinkage %. The 2D CAD pattern is then digitally scaled up (e.g. +4% length, +2% width) so the finished garment shrinks to exact spec post-wash.",
    },
    {
      title: "4. Mill Compacting & Rubber-Belt Sanforizing",
      desc: "Passing raw fabric rolls through stenter frames and steam rubber-belt compactors mechanically forces cotton loops together before cutting, reducing post-purchase customer wash shrinkage to under 3%.",
    },
    {
      title: "5. Pre-Garment Wash Treatments & Bio-Enzyme Washing",
      desc: "Garment-dyed or vintage washed styles undergo industrial laundering (enzyme washing, silicone softening) at the factory stage, fully pre-shrinking finished garments before bulk packing.",
    },
    {
      title: "6. Fiber Blending for Dimensional Stability",
      desc: "Blending natural cotton with synthetic fibers (such as 80% combed cotton / 20% recycled polyester) significantly improves dimensional stability, resisting shrinkage and neck ribbing distortion.",
    },
  ];

  const shrinkageBenchmarks = [
    { fabricType: "Raw Uncompacted 100% Cotton Jersey", typicalLengthShrinkage: "- 5% to - 8%", typicalWidthShrinkage: "- 2% to - 4%", mitigationStrategy: "Industrial mill compacting + CAD pattern scale-up." },
    { fabricType: "Pre-Shrunk / Compacted Cotton Jersey", typicalLengthShrinkage: "- 2% to - 3%", typicalWidthShrinkage: "- 1% to - 2%", mitigationStrategy: "Standard production pattern cut; negligible consumer change." },
    { fabricType: "100% Cotton Heavy French Terry (400 GSM)", typicalLengthShrinkage: "- 4% to - 6%", typicalWidthShrinkage: "- 2% to - 3%", mitigationStrategy: "Pre-washing or length pattern scale-up allowance." },
    { fabricType: "Poly-Cotton Fleece Blend (60/40)", typicalLengthShrinkage: "- 1% to - 2%", typicalWidthShrinkage: "- 1% to - 2%", mitigationStrategy: "Polyester fibers lock cotton structure, preventing shrinkage." },
  ];

  const faqs = [
    {
      q: "What does 'pre-shrunk cotton' actually mean?",
      a: "Pre-shrunk cotton has undergone mechanical compacting or industrial washing at the textile mill or garment factory. This process pre-relaxes the cotton fibers, reducing future post-purchase customer wash shrinkage to under 3%.",
    },
    {
      q: "Why do heavy hoodies shrink predominantly in length after tumble drying?",
      a: "Knitting machine tension pulls cotton yarns lengthwise during fabric roll production. Heat in tumble dryers relaxes these elongated vertical loops, causing heavy fleece hoodies to contract noticeably in body length if uncompacted.",
    },
    {
      q: "How do pattern makers compensate for fabric shrinkage?",
      a: "Pattern makers perform a laboratory wash test on raw fabric rolls, measuring exact length and width shrinkage %. They then enlarge the 2D CAD pattern by that exact percentage so the garment shrinks down to target tech pack specs after washing.",
    },
    {
      q: "What is fabric spirality (seam twisting) after washing?",
      a: "Spirality occurs when circular knit fabric loops torque diagonally post-wash, causing side seams on t-shirts or hoodies to twist toward the front of the body. Proper fabric compacting and heat setting prevent spirality.",
    },
    {
      q: "How does garment washing affect final sizing?",
      a: "Garment washing (like pigment dyeing or acid washing) pre-shrinks clothing completely before retail delivery. Factories cut garments using enlarged 'wash patterns' so the post-washed product matches tech pack dimensions.",
    },
    {
      q: "How does Fenalt manage fabric shrinkage in Bangladesh?",
      a: "Fenalt's Dhaka technical team tests raw fabric roll shrinkage for every dye lot, applies digital CAD pattern scale-ups, and specifies mill compacting to guarantee dimensional stability.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Garment Shrinkage{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to managing fabric shrinkage - understanding length vs width contraction, CAD pattern scale-up compensation, mill compacting, and bio-washing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Dimensional Stability</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Uncontrolled fabric shrinkage is a major cause of fit distortion. Professional manufacturers <strong className="font-medium">engineer pattern scale-ups to control shrinkage before cutting</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            All natural cotton fibers undergo relaxation shrinkage when exposed to water and heat. If a factory cuts garments without testing fabric shrinkage or applying CAD pattern scale-up compensation, completed clothing will shrink out of size spec after the customer&apos;s first home wash cycle. Managing shrinkage at the mill and pattern stage protects brand reputation.
          </p>
        </div>
      </section>

      {/* 6 Mechanisms */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Mechanics</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Fundamentals of Fabric Shrinkage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mechanisms.map((m, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{m.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shrinkage Benchmarks Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Fabric Benchmarks</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Shrinkage Rates by Fabric Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Fabric Type</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Length Shrinkage</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Width Shrinkage</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-4/12">Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                {shrinkageBenchmarks.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.fabricType}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.typicalLengthShrinkage}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.typicalWidthShrinkage}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.mitigationStrategy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { href: "/learn/garment-measurement-checking-in-production", label: "Garment Measurement Checking in Production" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/apparel-production-management", label: "Fenalt Production Engineering Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Controlled fabric shrinkage management</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt tests raw fabric shrinkage, engineers CAD pattern scale-ups, and specifies mill compacting in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
