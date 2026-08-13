import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Activewear Manufacturing Guide for Fitness Brands",
  description:
    "Learn how activewear is manufactured - technical polyester/spandex & nylon blends, 4-needle 6-thread flatlock stitching, moisture wicking, squat-proof opacity, and stretch testing.",
  alternates: {
    canonical: "https://fenalt.com/learn/activewear-manufacturing-guide",
  },
  openGraph: {
    title: "Activewear Manufacturing Guide for Fitness Brands",
    description:
      "Learn how activewear is manufactured - technical polyester/spandex & nylon blends, 4-needle 6-thread flatlock stitching, moisture wicking, squat-proof opacity, and stretch testing.",
    url: "https://fenalt.com/learn/activewear-manufacturing-guide",
  },
};

export default function ActivewearManufacturingGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Activewear Manufacturing Guide for Fitness Brands",
    description:
      "A technical manufacturing guide for athletic wear, leggings, sports bras, and technical activewear.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/activewear-manufacturing-guide",
    mainEntityOfPage: "https://fenalt.com/learn/activewear-manufacturing-guide",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Activewear Manufacturing Guide", item: "https://fenalt.com/learn/activewear-manufacturing-guide" },
    ],
  };

  const pillars = [
    {
      title: "1. Technical Nylon/Spandex & rPET Active Fabrics",
      desc: "Sourcing 4-way stretch circular knits (75% Micro-Nylon / 25% Elastane or 80% rPET / 20% Spandex interlock) offering high 240–300 GSM muscular support and squat-proof non-translucency.",
    },
    {
      title: "2. 4-Needle 6-Thread Flatlock Seam Assembly (Class 607)",
      desc: "Flatlock stitching butt-joins fabric edges without internal seam allowances, creating a completely flat, non-chafing seam with 100% stretch recovery for high-impact workouts.",
    },
    {
      title: "3. Moisture-Wicking & Anti-Odor Chemical Finishes",
      desc: "Applying hydrophobic quick-dry capillary moisture-wicking and silver-ion antimicrobial treatments to speed up sweat evaporation and prevent bacterial odor retention.",
    },
    {
      title: "4. Modulus Elasticity & 98%+ Stretch Recovery Audits",
      desc: "Testing fabric stretch percentage under tension and verifying 98%+ elastane shape recovery after repeated 100% elongation cycles to prevent sagging knees or loose waistbands.",
    },
    {
      title: "5. Double-Knit Interlock Squat-Proof Opacity",
      desc: "Utilizing double-knit Interlock machinery (where both sides feature a smooth face) to eliminate see-through sheen when fabric is stretched over hips during squats.",
    },
    {
      title: "6. Heat-Transfer Silicone Logos & Reflective Accents",
      desc: "Applying high-stretch liquid silicone heat-transfer logos and 3M night-reflective trims that expand with the fabric without cracking or peeling off.",
    },
  ];

  const activewearMatrix = [
    {
      garmentType: "Performance Compression Leggings",
      fabricBlend: "75% Nylon / 25% Spandex Interlock",
      targetGSM: "260 GSM – 300 GSM",
      seamType: "4-Needle 6-Thread Flatlock (Class 607)",
      keyTrait: "Squat-proof opacity, high waistband compression, zero skin chafing.",
    },
    {
      garmentType: "High-Impact Sports Bra",
      fabricBlend: "80% Polyester / 20% Elastane Double-Knit",
      targetGSM: "280 GSM – 320 GSM",
      seamType: "Coverstitch + Bound Elastic Edges",
      keyTrait: "Removable molded pads, high bust support, moisture-wicking lining.",
    },
    {
      garmentType: "Lightweight Gym Training Tee",
      fabricBlend: "88% rPET / 12% Spandex Single Jersey",
      targetGSM: "160 GSM – 190 GSM",
      seamType: "Overlock + Reinforced Shoulder Taping",
      keyTrait: "Ultra-lightweight, rapid dry time, micro-mesh ventilation panels.",
    },
  ];

  const faqs = [
    {
      q: "What makes activewear leggings 100% squat-proof?",
      a: "Squat-proof leggings require three technical factors: 1) Double-knit Interlock fabric construction, 2) High fabric weight (260+ GSM), and 3) High spandex/elastane content (20%+). Single jersey fabrics or light GSM weights become translucent when stretched.",
    },
    {
      q: "Why is flatlock stitching mandatory for high-performance activewear?",
      a: "Standard overlock seams leave protruding internal fabric ridges that rub and chafe skin during repetitive athletic movement. 4-needle 6-thread flatlock stitching (Class 607) joins fabric edges flat with no interior ridge.",
    },
    {
      q: "What is the difference between Nylon and Polyester activewear fabrics?",
      a: "Nylon (Polyamide) is softer, cooler to the touch, more abrasion-resistant, and offers a luxurious handfeel (ideal for premium leggings). Polyester is more colorfast, hydrophobic (dries faster), and cost-effective (ideal for gym tees and shorts).",
    },
    {
      q: "How are logos applied to stretch activewear without cracking?",
      a: "Activewear logos require specialized high-stretch liquid silicone heat transfers or stretch polyurethane films that expand and contract up to 200% alongside the elastane fabric.",
    },
    {
      q: "What is the minimum order quantity (MOQ) for activewear manufacturing?",
      a: "Fenalt manufactures custom athletic wear starting at flexible low minimum order quantities of 100 to 200 units per style in Dhaka.",
    },
    {
      q: "How does Fenalt execute activewear production in Bangladesh?",
      a: "Fenalt operates specialized flatlock sewing lines, stretch fabric inspection tables, and moisture-wicking testing labs in Dhaka for international athletic and athleisure brands.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Streetwear &amp; Product Types</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Activewear Manufacturing{" "}
            <span className="italic font-medium text-[#2D5016]">Guide for Fitness Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to manufacturing athletic wear - nylon/spandex blends, 4-needle 6-thread flatlock stitching, moisture wicking, squat-proof opacity, and stretch testing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Activity size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Performance Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Activewear manufacturing requires specialized <strong className="font-medium">flatlock machinery, technical elastane fabrics, and rigorous stretch testing</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Athletic wear demands a completely different manufacturing setup than casual lifestyle clothing. From selecting 4-way stretch nylon/spandex interlock knits to executing non-chafing 4-needle 6-thread flatlock seams and verifying 98%+ elastane recovery, activewear manufacturing prioritizes functional movement and long-term durability.
          </p>
        </div>
      </section>

      {/* 6 Technical Pillars */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Standards</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Pillars of Activewear Manufacturing</h2>
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

      {/* Activewear Specification Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Product Specs</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Activewear Category Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Product Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Recommended Blend</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/6">Target GSM</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Seam Assembly</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Performance Goal</th>
                </tr>
              </thead>
              <tbody>
                {activewearMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.garmentType}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.fabricBlend}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.targetGSM}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.seamType}</td>
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
              { href: "/learn/recycled-polyester-in-clothing-production", label: "Recycled Polyester in Clothing Production" },
              { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/learn/how-to-evaluate-stitch-quality", label: "How to Evaluate Stitch Quality in Garments" },
              { href: "/activewear-manufacturing-services", label: "Fenalt Activewear Manufacturing Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture custom activewear lines</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt operates 4-needle flatlock sewing lines and technical stretch fabric testing in Dhaka for athletic brands.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
