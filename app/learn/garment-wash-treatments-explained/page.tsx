import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing",
  description:
    "Explore apparel wet processing treatments - Acid Wash, Mineral Wash, Stonewashing, Enzyme Bio-washing, Silicone Softening, Pigment Garment Dyeing, and Vintage Fading.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-wash-treatments-explained",
  },
  openGraph: {
    title: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing",
    description:
      "Explore apparel wet processing treatments - Acid Wash, Mineral Wash, Stonewashing, Enzyme Bio-washing, Silicone Softening, Pigment Garment Dyeing, and Vintage Fading.",
    url: "https://fenalt.com/learn/garment-wash-treatments-explained",
  },
};

export default function GarmentWashTreatmentsExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garment Wash Treatments Explained: Vintage, Acid & Bio-Washing",
    description:
      "A technical walkthrough of industrial garment washing, vintage distress effects, enzyme bio-softening, and garment dye processes.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/garment-wash-treatments-explained",
    mainEntityOfPage: "https://fenalt.com/learn/garment-wash-treatments-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Garment Wash Treatments", item: "https://fenalt.com/learn/garment-wash-treatments-explained" },
    ],
  };

  const washes = [
    {
      name: "1. Enzyme Bio-Wash",
      effect: "Natural cellulase enzymes digest protruding surface micro-fibers, eliminating pilling and producing an ultra-smooth, silky handfeel without weakening yarn structure.",
    },
    {
      name: "2. Acid & Mineral Wash",
      effect: "Pumice stones soaked in oxidizing bleaching agents tumble dry with pre-dyed garments, producing marbled 90s vintage contrast highlights across seams and panels.",
    },
    {
      name: "3. Industrial Stonewashing (Denim & Canvas)",
      effect: "Pumice stone tumbling physically abrades seam edges and pocket rims, softening stiff 14oz denim or heavy cotton canvas for a authentic worn-in aesthetic.",
    },
    {
      name: "4. Garment Dyeing & Pigment Washing",
      effect: "Sewing raw white cotton garments first, then piece-dyeing completed garments in pigment dye vats to create soft, sun-faded colorways and lighter contrast along stitch lines.",
    },
    {
      name: "5. Silicone Softening & Carbon Brushing (Peach-Fuzz)",
      effect: "Applying silicone emulsions or passing fabric across abrasive carbon wire rollers to create a velvet-soft peach-fuzz surface micro-pile on t-shirts and hoodies.",
    },
    {
      name: "6. Vintage Sun-Bleach & Hand Distressing",
      effect: "Applying controlled potassium permanganate spraying or manual sanding to create realistic sun-bleached shoulders, distressed collar edges, and worn sleeve cuffs.",
    },
  ];

  const washMatrix = [
    {
      treatment: "Enzyme Bio-Wash",
      visualEffect: "Clean, vibrant solid color; zero surface fuzzing.",
      handfeel: "Silky, smooth, luxurious, pilling-resistant.",
      bestFor: "Luxury streetwear t-shirts, hoodies, and activewear knits.",
    },
    {
      treatment: "Pigment Garment Dye",
      visualEffect: "Soft washed color with lighter contrast highlights along seams.",
      handfeel: "Soft, broken-in vintage handfeel.",
      bestFor: "Vintage-aesthetic streetwear t-shirts, fleece crewnecks, and shorts.",
    },
    {
      treatment: "Acid / Mineral Wash",
      visualEffect: "High-contrast marbled pattern across body and seams.",
      handfeel: "Textured, vintage 90s feel.",
      bestFor: "Statement streetwear tees, heavy fleece hoodies, and denim.",
    },
    {
      treatment: "Stonewash + Ozone Fade",
      visualEffect: "Natural seam abrasion, soft indigo fading, zero chemical residue.",
      handfeel: "Softened, flexible, broken-in denim.",
      bestFor: "Heavy denim jackets, jeans, and canvas workwear outerwear.",
    },
  ];

  const faqs = [
    {
      q: "Does industrial garment washing cause fabric shrinkage?",
      a: "Yes. Garment washing fully pre-shrinks fabric. Pattern engineers measure wash shrinkage during sampling and enlarge the 2D CAD cutting pattern (adding shrinkage allowances) so the garment shrinks down to exact tech pack specs after washing.",
    },
    {
      q: "What is the difference between Fabric Piece Dyeing and Garment Dyeing?",
      a: "Fabric piece dyeing colors raw fabric rolls at the mill prior to cutting (yielding perfectly uniform color throughout). Garment dyeing sews ready-to-dye white garments first, then dyes completed garments - creating signature faded seam highlights and vintage tones.",
    },
    {
      q: "Why is enzyme bio-washing recommended for luxury streetwear?",
      a: "Enzyme bio-washing uses natural proteins to digest loose surface cotton fibers. It creates an ultra-smooth print surface, enhances handfeel softness, and prevents fabric pilling after home laundering.",
    },
    {
      q: "Can printed graphics survive acid or mineral washing?",
      a: "If graphics are applied using plastisol screen printing, they can withstand light washing. However, for heavily abraded washes (acid wash, stone wash), printing is typically performed on pre-washed cut panels or finished washed garments.",
    },
    {
      q: "Does pigment garment dyeing require special care labels?",
      a: "Yes. Pigment dyes intentionally fade over time with laundering. Care labels should include warnings: 'Color may bleed or transfer when new; wash separately in cold water with like colors.'",
    },
    {
      q: "How does Fenalt manage garment wash processing in Bangladesh?",
      a: "Fenalt's Dhaka team operates specialized wet processing units - executing enzyme bio-washing, pigment garment dyeing, acid washing, and silicone softening with eco-friendly wastewater treatment.",
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
            Garment Wash Treatments{" "}
            <span className="italic font-medium text-[#2D5016]">Explained: Vintage &amp; Bio-Wash.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A guide to industrial apparel wet processing - Enzyme Bio-washing, Acid Wash, Mineral Wash, Pigment Garment Dyeing, Silicone Softening, and Stonewashing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Industrial Finishing</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Garment washing transforms raw cotton into <strong className="font-medium">soft, pre-shrunk apparel with signature vintage textures</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Wet processing treatments are an essential finishing step in modern streetwear and lifestyle apparel manufacturing. Industrial washing relaxes rigid cotton fibers, eliminates residual wash shrinkage, enhances surface handfeel, and creates sought-after vintage aesthetics - from subtle enzyme bio-softening to dramatic marbled acid washes.
          </p>
        </div>
      </section>

      {/* 6 Washes */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Wet Processing Catalog</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Industrial Garment Wash Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {washes.map((w, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{w.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{w.effect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wash Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Process Comparison</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Garment Wash Process Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Wash Treatment</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Visual Appearance</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Tactile Handfeel</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Best Garment Style</th>
                </tr>
              </thead>
              <tbody>
                {washMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.treatment}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.visualEffect}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.handfeel}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.bestFor}</td>
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
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/garment-shrinkage-in-apparel-manufacturing", label: "Understanding Shrinkage in Apparel Manufacturing" },
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton" },
              { href: "/learn/how-to-manufacture-a-streetwear-collection", label: "How to Manufacture a Streetwear Collection" },
              { href: "/learn/how-to-manufacture-hoodies", label: "How to Manufacture Custom Hoodies" },
              { href: "/garment-washing-services-bangladesh", label: "Fenalt Garment Washing Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Custom garment wash treatments</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt executes industrial enzyme bio-washing, pigment garment dyeing, acid washing, and silicone softening in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
