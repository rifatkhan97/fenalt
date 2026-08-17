import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Cotton Fabric Types Explained for Fashion Brands",
  description:
    "A comprehensive guide to cotton fabric types in apparel manufacturing - Single Jersey, Interlock, French Terry, Fleece, Piqué, Ribbing, Canvas, and Twill.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/cotton-fabric-types-explained",
  },
  openGraph: {
    title: "Cotton Fabric Types Explained for Fashion Brands",
    description:
      "A comprehensive guide to cotton fabric types in apparel manufacturing - Single Jersey, Interlock, French Terry, Fleece, Piqué, Ribbing, Canvas, and Twill.",
    url: "https://www.fenalt.com/learn/cotton-fabric-types-explained",
  },
};

export default function CottonFabricTypesExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cotton Fabric Types Explained for Fashion Brands",
    description:
      "A technical walkthrough of cotton knit and woven fabric constructions used in t-shirts, hoodies, sweatpants, and trousers.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/cotton-fabric-types-explained",
    mainEntityOfPage: "https://www.fenalt.com/learn/cotton-fabric-types-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Cotton Fabric Types Explained", item: "https://www.fenalt.com/learn/cotton-fabric-types-explained" },
    ],
  };

  const fabricTypes = [
    {
      name: "1. Single Jersey (180 GSM – 300 GSM)",
      category: "Knit",
      bestFor: "Standard & heavyweight t-shirts, tank tops, jersey linings.",
      description: "Single knit construction with a smooth flat front face and characteristic V-shaped loop stitches on the reverse. Lightweight jersey (180 GSM) provides soft breathability; heavy jersey (240–300 GSM) holds structured streetwear silhouettes.",
    },
    {
      name: "2. French Terry (320 GSM – 480 GSM)",
      category: "Knit",
      bestFor: "Mid-to-heavyweight hoodies, crewneck sweatshirts, lounge pants.",
      description: "3-end knit fabric featuring a smooth exterior face and unbrushed soft yarn loops on the interior. Offers excellent moisture absorption, breathability, and mid-to-heavy thermal weight.",
    },
    {
      name: "3. Brushed Fleece (350 GSM – 500 GSM)",
      category: "Knit",
      bestFor: "Winter sweatshirts, plush hoodies, heavy tracksuits.",
      description: "Constructed similarly to French Terry, but the interior yarn loops undergo a wire-brushing process to create a dense, soft, plush fleece interior that traps body heat.",
    },
    {
      name: "4. Interlock Knit (220 GSM – 320 GSM)",
      category: "Knit",
      bestFor: "Luxury heavyweight t-shirts, double-face knitwear, babywear.",
      description: "Double-knit construction featuring a smooth, identical face on both front and back. Thicker, heavier, and less prone to curling at cut edges than single jersey.",
    },
    {
      name: "5. Cotton Piqué (200 GSM – 280 GSM)",
      category: "Knit",
      bestFor: "Polo shirts, sportswear, textured casual tops.",
      description: "Waffle-like or honeycomb textured knit with raised geometric patterns that enhance airflow and structural stability.",
    },
    {
      name: "6. 2x2 Cotton Ribbing (350 GSM – 450 GSM)",
      category: "Knit",
      bestFor: "Neck collars, sleeve cuffs, waistband trims for hoodies and sweatshirts.",
      description: "Alternating knit-and-purl rib construction with high elasticity and stretch recovery, usually blended with 5% spandex to prevent collar baconing.",
    },
    {
      name: "7. Cotton Twill (240 GSM – 400 GSM)",
      category: "Woven",
      bestFor: "Chino pants, cargo trousers, overshirts, dad hats, jackets.",
      description: "Woven fabric with a distinct diagonal parallel rib pattern (twill weave). Offers high tear resistance, structural body, and excellent garment wash compatibility.",
    },
    {
      name: "8. Cotton Canvas & Heavy Denim (300 GSM – 500+ GSM / 10oz – 14.5oz)",
      category: "Woven",
      bestFor: "Workwear jackets, heavy carpenter pants, tote bags.",
      description: "Durable plain or twill weave using coarse cotton yarns for maximum abrasion resistance and heavy utility garment construction.",
    },
  ];

  const knitVsWoven = [
    { aspect: "Stretching & Elasticity", knit: "Inherent 2-way or 4-way stretch due to looped yarn structure.", woven: "Rigid structure with minimal stretch unless elastane/spandex is added." },
    { aspect: "Wrinkle Resistance", knit: "Resists wrinkling naturally and recovers shape quickly.", woven: "Prone to creasing; requires pressing or heat setting." },
    { aspect: "Primary Garment Types", knit: "T-shirts, hoodies, sweatpants, activewear, socks.", woven: "Jeans, chinos, formal shirts, workwear jackets, tailored trousers." },
    { aspect: "Edge Fraying & Cutting", knit: "Edges curl when stretched but do not fray into loose threads.", woven: "Raw cut edges fray easily; requires overlocking or flat-felled seam finishes." },
  ];

  const faqs = [
    {
      q: "What is the difference between French Terry and Brushed Fleece?",
      a: "French Terry features unbrushed yarn loops on the interior for breathable, year-round comfort. Brushed Fleece takes those interior loops and wire-brushes them into a soft, fuzzy pile that provides maximum thermal insulation.",
    },
    {
      q: "Why is combed cotton superior to carded cotton?",
      a: "Combed cotton undergoes an extra refining step during spinning that removes short fibers and raw impurities. This leaves only long, straight fibers that produce smoother, stronger, softer, and more pilling-resistant fabric.",
    },
    {
      q: "Which cotton fabric is best for heavyweight streetwear t-shirts?",
      a: "100% combed cotton Single Jersey weighing between 240 GSM and 300 GSM is the industry benchmark for heavyweight streetwear t-shirts, offering clean structure and screen print clarity.",
    },
    {
      q: "What does yarn count mean (e.g., 20s vs 30s vs 40s)?",
      a: "Yarn count measures yarn fineness. Higher numbers indicate finer yarn: 20s yarn is thicker and heavier (used in rugged tees), while 30s or 40s combed yarn is finer, creating smoother, premium-touch fabrics.",
    },
    {
      q: "Does 100% cotton fabric shrink after washing?",
      a: "Yes. All 100% natural cotton fabrics experience natural shrinkage (typically 3% to 7%) during initial laundering unless the fabric undergoes industrial pre-shrinking, compacting, or silicone wash treatments prior to garment cutting.",
    },
    {
      q: "How does Fenalt inspect cotton fabrics in Bangladesh?",
      a: "Fenalt's Dhaka quality inspectors conduct 4-Point System raw fabric roll audits, verify GSM weight, perform lab-dip color matching, and check for fabric width consistency before pattern cutting begins.",
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
            Cotton Fabric Types{" "}
            <span className="italic font-medium text-[#2D5016]">Explained for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to cotton knits and wovens - Single Jersey, Interlock, French Terry, Fleece, Piqué, Ribbing, Twill, and Canvas.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Textile Anatomy</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Cotton is the world&apos;s most versatile apparel fibre, but its performance depends on <strong className="font-medium">knit or woven construction and GSM weight</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Understanding the difference between cotton knits (such as jersey, French Terry, and interlock) and cotton wovens (such as twill and canvas) allows fashion founders to specify exact fabric structures in their tech packs - ensuring garments drape, stretch, and perform as intended.
          </p>
        </div>
      </section>

      {/* 8 Fabric Types */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Master Fabric Catalog</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Essential Cotton Fabric Constructions</h2>
          <div className="space-y-6">
            {fabricTypes.map((ft, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{ft.name}</h3>
                  <span className="inline-block px-3 py-1 bg-[#2D5016] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">{ft.category}</span>
                </div>
                <p className="text-xs text-[#C8A882] font-semibold mb-3 uppercase tracking-wider">Best For: {ft.bestFor}</p>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{ft.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knits vs Wovens */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Structural Comparison</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Cotton Knits vs Cotton Wovens</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Aspect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Cotton Knits</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Cotton Wovens</th>
                </tr>
              </thead>
              <tbody>
                {knitVsWoven.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.aspect}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.knit}</td>
                    <td className="p-4 text-sm text-[#1A1A1A] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.woven}</td>
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
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton: Key Differences" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/organic-cotton-in-apparel-manufacturing", label: "Organic Cotton in Apparel Manufacturing" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Cotton Fabric Sourcing in Bangladesh" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Source high-quality cotton fabrics</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt sources combed cotton jersey, heavy French Terry, and custom twill fabrics directly from audited mills in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
