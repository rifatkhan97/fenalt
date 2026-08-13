import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose Fabric for a Clothing Brand: Complete Guide",
  description:
    "Learn how to select the right fabric for your apparel line - evaluating fiber content, weight (GSM), drape, stretch, shrinkage, mill MOQs, and manufacturing cost.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-choose-fabric-for-clothing-brand",
  },
  openGraph: {
    title: "How to Choose Fabric for a Clothing Brand: Complete Guide",
    description:
      "Learn how to select the right fabric for your apparel line - evaluating fiber content, weight (GSM), drape, stretch, shrinkage, mill MOQs, and manufacturing cost.",
    url: "https://fenalt.com/learn/how-to-choose-fabric-for-clothing-brand",
  },
};

export default function HowToChooseFabricForClothingBrandPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Choose Fabric for a Clothing Brand: Complete Guide",
    description:
      "A strategic decision guide for fashion brand founders on selecting knitted and woven fabrics based on category, GSM weight, and garment performance.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-choose-fabric-for-clothing-brand",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-choose-fabric-for-clothing-brand",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Choose Fabric", item: "https://fenalt.com/learn/how-to-choose-fabric-for-clothing-brand" },
    ],
  };

  const factors = [
    {
      title: "1. Fibre Composition & Origin",
      desc: "Natural fibres (combed cotton, organic cotton, linen) offer superior breathability and soft handfeel. Synthetics (polyester, nylon, spandex) deliver moisture-wicking and elastic recovery. Blends balance durability, softness, and cost.",
    },
    {
      title: "2. Fabric Construction (Knit vs Woven)",
      desc: "Knitted fabrics (single jersey, French Terry, fleece, piqué, 2x2 rib) loop yarns together for natural stretch and drape. Woven fabrics (denim, twill, canvas, poplin) interlace warp and weft yarns for structural rigidity.",
    },
    {
      title: "3. Fabric Weight (GSM / Ounces)",
      desc: "Grams per Square Metre (GSM) measures fabric thickness. T-shirts range from 180 GSM (lightweight) to 300 GSM (heavyweight streetwear). Hoodies range from 350 GSM to 480+ GSM French Terry.",
    },
    {
      title: "4. Fabric Drape, Stretch & Elastic Recovery",
      desc: "Assess how the fabric hangs on the body. Knits with 3% to 5% spandex provide 4-way stretch for activewear, whereas 100% rigid cotton French Terry holds boxy streetwear silhouettes.",
    },
    {
      title: "5. Dyeing, Washing & Print Receptivity",
      desc: "Determine how the fabric accepts embellishments. 100% combed cotton yields bright screen print and DTG ink clarity; polyester requires disperse dyes; pigment garment washes produce vintage faded aesthetics.",
    },
    {
      title: "6. Mill Minimums (MOQs) & Sourcing Availability",
      desc: "Stock mill fabrics allow low MOQ purchasing (50 to 100 metres); custom-milled, custom-knitted, or custom-dyed fabrics require mill minimums of 300kg to 500kg per dye lot.",
    },
  ];

  const categoryMatrix = [
    {
      category: "Heavyweight Streetwear Tees",
      recommendedFabric: "100% Combed Cotton Single Jersey",
      targetWeight: "240 GSM – 300 GSM",
      keyTrait: "Substantial handfeel, tight knit density, minimal show-through, structured boxy fit.",
    },
    {
      category: "Luxury Hoodies & Sweatpants",
      recommendedFabric: "100% Cotton French Terry or Brushed Fleece",
      targetWeight: "400 GSM – 480 GSM",
      keyTrait: "Unbrushed loopback interior for structure, or brushed fleece for plush warmth; paired with 400 GSM 2x2 ribbing.",
    },
    {
      category: "Performance Activewear",
      recommendedFabric: "Nylon-Spandex or Polyester-Spandex Interlock",
      targetWeight: "220 GSM – 280 GSM",
      keyTrait: "4-way stretch, moisture-wicking finish, squat-proof opacity, flatlock seam compatibility.",
    },
    {
      category: "Boutique Shirts & Outerwear",
      recommendedFabric: "Cotton Twill, Linen Blends, or Rigid Denim",
      targetWeight: "180 GSM – 400 GSM (6oz – 14oz)",
      keyTrait: "Clean woven structure, high tensile strength, garment wash compatibility.",
    },
  ];

  const faqs = [
    {
      q: "What is the best fabric for luxury streetwear hoodies?",
      a: "100% combed cotton French Terry or heavy fleece weighing between 400 GSM and 480+ GSM, paired with heavy 400 GSM 2x2 cotton/spandex ribbing at cuffs and waistband, is the industry standard for luxury streetwear hoodies.",
    },
    {
      q: "How can I test fabric quality before ordering bulk?",
      a: "Request physical swatch headers or sample yardage cuts. Conduct a 3x laundering test to measure dimensional shrinkage, inspect for pilling after friction rubbing, and verify colorfastness against washing.",
    },
    {
      q: "What is the difference between single jersey and French Terry?",
      a: "Single jersey is a flat, lightweight knit fabric with a smooth front and back, used primarily for t-shirts. French Terry is a heavier knit fabric with a smooth exterior face and unbrushed thread loops on the interior, used for premium sweatshirts and hoodies.",
    },
    {
      q: "Why do custom fabric colors require high MOQs?",
      a: "Custom fabric colors require dyeing full industrial dye vats (typically 300kg to 500kg of fabric per dye lot). For lower order quantities, brands use stock-dyed mill colors to avoid high minimum run surcharges.",
    },
    {
      q: "How does fabric GSM affect per-unit manufacturing cost?",
      a: "Heavier GSM fabrics require more raw cotton yarn by weight and incur higher freight charges per unit. Fabric typically accounts for 60% to 70% of a garment's FOB manufacturing price.",
    },
    {
      q: "How does Fenalt handle raw fabric sourcing in Bangladesh?",
      a: "Fenalt's Dhaka sourcing team inspects raw fabric rolls, conducts lab-dip color matching against Pantone references, verifies GSM weight, and manages textile procurement with audited Bangladesh mills.",
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
            How to Choose Fabric{" "}
            <span className="italic font-medium text-[#2D5016]">for a Clothing Brand.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Fabric selection determines your garment&apos;s drape, handfeel, retail durability, and unit cost. Learn how to evaluate fibers, GSM weights, and mill sourcing parameters.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Material Foundation</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Fabric accounts for <strong className="font-medium">60% to 70% of a garment&apos;s FOB production cost</strong> and defines retail quality perception at first touch.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Choosing the wrong fabric is one of the costliest errors a fashion brand can make. A design drafted for a rigid 450 GSM French Terry will sag if sewn in a lightweight 240 GSM jersey. Evaluating fiber composition, fabric weight, drape, and mill minimums before sampling ensures your apparel line meets aesthetic and financial targets.
          </p>
        </div>
      </section>

      {/* 6 Selection Factors */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Evaluation Criteria</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Factors When Choosing Apparel Fabrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {factors.map((f, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{f.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Category Matrix */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Category Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Fabric Selection Matrix by Product Category</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Recommended Fabric</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/6">Target Weight</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Key Characteristics</th>
                </tr>
              </thead>
              <tbody>
                {categoryMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.category}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.recommendedFabric}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.targetWeight}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.keyTrait}</td>
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
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Affects Apparel Cost" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Raw Fabric Sourcing Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Source premium fabrics in Bangladesh</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt inspects raw fabric rolls, conducts lab dip dyeing, and manages mill procurement for international apparel brands in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
