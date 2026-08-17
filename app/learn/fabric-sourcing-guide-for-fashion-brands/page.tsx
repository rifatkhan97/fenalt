import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Fabric Sourcing Guide for Fashion Brands: Step-by-Step",
  description:
    "Master fabric procurement - working with textile mills, understanding greige fabric stock, negotiating minimums (MOQs), approving lab-dips, and managing lead times.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
  },
  openGraph: {
    title: "Fabric Sourcing Guide for Fashion Brands: Step-by-Step",
    description:
      "Master fabric procurement - working with textile mills, understanding greige fabric stock, negotiating minimums (MOQs), approving lab-dips, and managing lead times.",
    url: "https://www.fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
  },
};

export default function FabricSourcingGuideForFashionBrandsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fabric Sourcing Guide for Fashion Brands: Step-by-Step",
    description:
      "A strategic guide for apparel founders on navigating textile mills, fabric agents, stock vs custom milling, and lead times.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
    mainEntityOfPage: "https://www.fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Fabric Sourcing Guide", item: "https://www.fenalt.com/learn/fabric-sourcing-guide-for-fashion-brands" },
    ],
  };

  const steps = [
    {
      title: "1. Fabric Specification & Swatch Sourcing",
      desc: "Define fiber composition, GSM weight, and knit/weave structure in your tech pack. Order physical swatch headers or sample yardage cuts from mills to evaluate handfeel and drape before ordering bulk.",
    },
    {
      title: "2. Stock Fabric Procurement (Low MOQ)",
      desc: "Sourcing pre-knitted or pre-dyed fabrics from mill stock warehouses. Ideal for small-batch launches (50 to 200 units) with fast 1 to 2 week lead times and low minimum purchase requirements.",
    },
    {
      title: "3. Greige Fabric & Custom Pantone Lab-Dip Dyeing",
      desc: "Ordering undyed base fabric (greige) and executing custom dye runs to match exact Pantone (PMS) color references. Requires lab-dip swatch approval and 300kg to 500kg mill minimums per dye lot.",
    },
    {
      title: "4. Custom Knitting & Yarn Spinning (High Volume)",
      desc: "Spinning custom yarn counts, fiber blends (e.g. 80/20 organic cotton/rPET), and unique GSM weights directly at textile mills. Requires 1,000kg+ mill minimums and 4 to 6 week milling lead times.",
    },
    {
      title: "5. Bulk Fabric Roll Quality Auditing (ASTM D5430)",
      desc: "Conducting 4-Point System inspections on raw fabric rolls upon delivery to detect holes, slubs, horizontal bar shading, or GSM weight variations before fabric is laid on cutting tables.",
    },
    {
      title: "6. Managing Mill Production Timelines & Logistics",
      desc: "Factoring fabric milling and lab-dip approval lead times (typically 3 to 6 weeks) into your master production calendar to ensure raw materials arrive before sewing line allocation.",
    },
  ];

  const stockVsCustom = [
    { aspect: "Minimum Order Quantity (MOQ)", stock: "Low (50 – 100 meters per colorway).", custom: "High (300kg – 500kg per dye lot)." },
    { aspect: "Color Customization", stock: "Restricted to available mill warehouse color cards.", custom: "Exact Pantone (PMS TCX/C) color matching." },
    { aspect: "Procurement Lead Time", stock: "Fast (1 to 2 weeks from warehouse stock).", custom: "Longer (3 to 6 weeks for milling & dyeing)." },
    { aspect: "Per-Meter Fabric Cost", stock: "Slightly higher per-meter price for small quantities.", custom: "Lower per-meter price at high bulk volumes." },
  ];

  const faqs = [
    {
      q: "What is greige fabric in textile manufacturing?",
      a: "Greige (pronounced 'gray') fabric is raw, undyed knitted or woven textile straight from the loom or knitting machine. Mills maintain greige fabric rolls in stock and dye them to specific Pantone colors upon client order.",
    },
    {
      q: "How does Bangladesh fabric sourcing compare to China?",
      a: "Bangladesh is a global manufacturing hub for high-quality cotton knits (Single Jersey, French Terry, fleece, piqué) with competitive bulk pricing and preferential tariff access to markets like the UK, EU, Australia, and Canada. China offers broader synthetic, technical, and performance fabric options.",
    },
    {
      q: "What is a lab dip in fabric sourcing?",
      a: "A lab dip is a small fabric swatch dyed by the mill to match a specific Pantone color code. The brand team inspects the lab dip under standard light box illumination and approves the shade band before bulk fabric dyeing begins.",
    },
    {
      q: "How much extra fabric should I order for bulk production waste?",
      a: "Order an extra 3% to 5% fabric allowance (cutting waste allowance) above calculated net garment consumption to account for end-of-roll scrap, seam trimming, and potential factory re-cuts.",
    },
    {
      q: "What is the difference between a fabric mill and a fabric converter?",
      a: "A fabric mill physically knits, weaves, or dyes raw textiles in its own facility. A fabric converter buys greige fabric from mills, contracts external dyeing or printing, and resells finished fabric to brands.",
    },
    {
      q: "How does Fenalt assist with fabric sourcing in Dhaka?",
      a: "Fenalt's Dhaka sourcing team acts as your local liaison with audited textile mills in Bangladesh - negotiating fabric prices, managing lab-dip approvals, verifying GSM weight, and conducting raw roll QC inspections.",
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
            A step-by-step guide to textile procurement - working with mills, choosing stock vs custom dyeing, approving lab-dips, and managing lead times.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Supply Chain Strategy</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Fabric procurement controls <strong className="font-medium">60% to 70% of garment costs and 50% of your production timeline</strong>. Managing mill relationships effectively ensures on-time delivery.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Navigating raw fabric procurement is a critical milestone for growing clothing brands. Whether sourcing low-MOQ stock fabrics from supplier warehouses or commissioning custom Pantone dye runs at major textile mills, understanding mill minimums, lab-dip workflows, and quality auditing prevents costly production delays.
          </p>
        </div>
      </section>

      {/* 6 Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Procurement Roadmap</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Stages of Fabric Sourcing</h2>
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

      {/* Stock vs Custom Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Sourcing Decision</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Stock Fabric vs Custom Dyeing</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Aspect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Stock Warehouse Fabric</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Custom Dye Lot / Milling</th>
                </tr>
              </thead>
              <tbody>
                {stockVsCustom.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.aspect}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.stock}</td>
                    <td className="p-4 text-sm text-[#1A1A1A] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.custom}</td>
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
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Affects Apparel Cost" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Fabric Sourcing Services in Bangladesh" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Direct fabric sourcing in Dhaka</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt inspects raw fabric rolls, manages lab-dip approvals, and sources mill-direct fabrics in Bangladesh.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
