import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Combed Cotton vs Regular Cotton: Key Differences",
  description:
    "Compare combed ring-spun cotton against regular carded cotton — understanding spinning processes, fiber length, soft handfeel, print surface quality, and wash durability.",
  alternates: {
    canonical: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
  },
  openGraph: {
    title: "Combed Cotton vs Regular Cotton: Key Differences",
    description:
      "Compare combed ring-spun cotton against regular carded cotton — understanding spinning processes, fiber length, soft handfeel, print surface quality, and wash durability.",
    url: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
  },
};

export default function CombedCottonVsRegularCottonPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Combed Cotton vs Regular Cotton: Key Differences",
    description:
      "A technical comparison of combed ring-spun cotton vs carded open-end cotton for apparel manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
    mainEntityOfPage: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Combed Cotton vs Regular Cotton", item: "https://fenalt.com/learn/combed-cotton-vs-regular-cotton" },
    ],
  };

  const points = [
    {
      factor: "Yarn Spinning Process",
      combed: "Passes through fine mechanical combs that remove short fibers and align long staple fibers parallel before spinning.",
      regular: "Carded only; contains short stubby fibers, uneven strands, and natural raw cotton plant impurities.",
    },
    {
      factor: "Fiber Length & Alignment",
      combed: "Retains only long, uniform staple fibers (30mm+), producing a smooth, tightly twisted continuous yarn.",
      regular: "Contains a mix of short and medium staple fibers, resulting in stray fiber ends along the yarn body.",
    },
    {
      factor: "Tactile Handfeel & Softness",
      combed: "Exceptionally soft, silky, and smooth against the skin without synthetic chemical softeners.",
      regular: "Slightly scratchy or stiff texture initially; prone to feeling rough after laundering.",
    },
    {
      factor: "Screen Print & DTG Print Quality",
      combed: "Provides a ultra-smooth flat print canvas, resulting in razor-sharp print detail, bright color opacity, and smooth DTG ink absorption.",
      regular: "Stray surface fibers protrude through print ink layers, causing fibrillated print surfaces and dulled print clarity.",
    },
    {
      factor: "Pilling & Surface Fuzzing",
      combed: "Highly resistant to pilling because long fibers remain locked inside the twisted yarn bundle.",
      regular: "Prone to surface fuzzing and unsightly fabric pilling after 3 to 5 home laundering cycles.",
    },
    {
      factor: "Tensile Strength & Shrinkage",
      combed: "Higher yarn tensile strength resists seam tearing and holds dimensional shape after repeated washing.",
      regular: "Lower yarn strength; more susceptible to seam distortion, spirality twist, and irregular shrinkage.",
    },
    {
      factor: "Cost & Fabric Yield",
      combed: "Slightly higher raw material cost (10% to 15% premium) due to extra combing processes and fiber waste removal.",
      regular: "Cheapest raw cotton yarn option; widely used in mass-market souvenir or promotional blank t-shirts.",
    },
    {
      factor: "Target Brand Positioning",
      combed: "Essential standard for boutique fashion labels, luxury streetwear brands, and premium merch.",
      regular: "Used for high-volume promotional giveaways, event tees, and budget workwear where price overrides quality.",
    },
  ];

  const brandBenefits = [
    {
      benefit: "Flawless Direct-to-Garment (DTG) Printing",
      detail: "Combed cotton's ultra-flat surface prevents ink fibrillation, allowing water-based DTG inks to cure with maximum vibrancy and fine line detail.",
    },
    {
      benefit: "Enhanced Retail Handfeel Perception",
      detail: "Customers instantly evaluate clothing quality by handfeel. Combed cotton communicates premium retail positioning at first physical touch.",
    },
    {
      benefit: "Long-Term Wash Durability & Customer Retention",
      detail: "Garments made from combed cotton retain their original shape, color vibrancy, and soft texture after dozens of wash cycles, reducing customer returns.",
    },
    {
      benefit: "Reduced Fabric Shrinkage & Distortion",
      detail: "Longer staple combed cotton fibers twist tighter during ring-spinning, minimizing seam twisting (spirality) and fabric distortion after drying.",
    },
  ];

  const faqs = [
    {
      q: "Is combed cotton worth the extra manufacturing cost?",
      a: "Yes. For independent fashion brands, boutique labels, and streetwear lines, the minor price premium (typically $0.30 to $0.80 per tee) is fully justified by the superior handfeel, print clarity, and wash durability that customers expect.",
    },
    {
      q: "What is 30s Combed Ring-Spun Cotton?",
      a: "The '30s' refers to yarn fineness (yarn count). A 30s combed ring-spun cotton uses fine, combed long-staple cotton yarns continuously twisted on a ring frame to create lightweight to midweight (160–200 GSM) ultra-soft t-shirt fabrics.",
    },
    {
      q: "What is 20s Combed Ring-Spun Cotton?",
      a: "20s yarn is thicker than 30s yarn. 20s combed ring-spun cotton is used to knit heavier, more structured single jersey t-shirt fabrics (220–280 GSM) favored in modern streetwear collections.",
    },
    {
      q: "Can you tell the difference between combed and regular cotton by touching it?",
      a: "Yes. Regular carded cotton feels slightly rough, fuzzy, and stiff to the touch. Combed cotton feels noticeably smoother, softer, and more fluid.",
    },
    {
      q: "What is Carded Open-End Cotton?",
      a: "Carded open-end cotton is the lowest-cost cotton yarn spinning method. It uses short cotton fibers spun by air turbine without combing, producing coarse, rigid fabric common in cheap promotional t-shirts.",
    },
    {
      q: "Does Fenalt use combed cotton for custom garments?",
      a: "Yes. Fenalt defaults to 100% combed ring-spun cotton for all custom t-shirt, hoodie, and sweatshirt production runs in Bangladesh to ensure premium retail quality.",
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
            Combed Cotton vs Regular Cotton:{" "}
            <span className="italic font-medium text-[#2D5016]">Key Differences.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Not all cotton is created equal. Learn why combed ring-spun cotton delivers superior softness, print clarity, and wash longevity compared to regular carded cotton.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Fibre Quality Standard</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Combed cotton</strong> removes short staple fibers and raw impurities before spinning — producing a smoother, stronger yarn that eliminates fabric pilling.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            When sourcing custom t-shirts or hoodies, specifying &ldquo;100% Cotton&rdquo; is not enough. Regular carded cotton contains short fibers that stick out from the yarn body, causing a rough handfeel and fuzzy print surfaces. Combed ring-spun cotton refines the raw fiber, creating the soft, durable canvas required for premium apparel brands.
          </p>
        </div>
      </section>

      {/* 8 Comparison Points */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Comparison Matrix</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-10">8 Differences: Combed vs Regular Cotton</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A2A2A]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-1/4">Factor</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Combed Ring-Spun Cotton</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Regular Carded Cotton</th>
                </tr>
              </thead>
              <tbody>
                {points.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#262626]" : "bg-[#2A2A2A]"}>
                    <td className="p-4 text-sm font-semibold text-[#E5DDD3] border-t border-[#333333] align-top">{row.factor}</td>
                    <td className="p-4 text-sm text-[#E5DDD3] border-t border-[#333333] leading-relaxed align-top font-medium">{row.combed}</td>
                    <td className="p-4 text-sm text-[#9B948E] border-t border-[#333333] leading-relaxed align-top">{row.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brand Benefits */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Retail Value</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Why Brands Choose Combed Ring-Spun Cotton</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandBenefits.map((b, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{b.benefit}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{b.detail}</p>
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
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/learn/organic-cotton-in-apparel-manufacturing", label: "Organic Cotton in Apparel Manufacturing" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Fenalt Combed Cotton T-Shirt Manufacturing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture with 100% combed cotton</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt sources premium combed ring-spun cotton jersey and French Terry directly from audited mills in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
