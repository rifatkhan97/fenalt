import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Sliders } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Customization Options Explained for Fashion Brands",
  description:
    "Explore full custom garment branding - woven neck labels, screen printing, custom dyeing, engraved buttons, custom zippers, hardware, and retail polybag packaging.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-customization-options-explained",
  },
  openGraph: {
    title: "Garment Customization Options Explained for Fashion Brands",
    description:
      "Explore full custom garment branding - woven neck labels, screen printing, custom dyeing, engraved buttons, custom zippers, hardware, and retail polybag packaging.",
    url: "https://fenalt.com/learn/garment-customization-options-explained",
  },
};

export default function GarmentCustomizationOptionsExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garment Customization Options Explained for Fashion Brands",
    description:
      "A complete guide to apparel customization techniques for independent fashion labels and premium streetwear brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/garment-customization-options-explained",
    mainEntityOfPage: "https://fenalt.com/learn/garment-customization-options-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Garment Customization Options", item: "https://fenalt.com/learn/garment-customization-options-explained" },
    ],
  };

  const options = [
    {
      title: "1. Brand Identity Labels & Hangtags",
      desc: "Custom high-definition woven damask neck labels, tagless heat-transfer neck prints, satin or woven side-seam flag labels, printed care/content tags, and thick custom-branded cardstock hangtags with string attachments.",
    },
    {
      title: "2. Decorative Graphics & Embellishments",
      desc: "Plastisol screen printing, water-based soft-hand print, high-density 3D puff print, direct-to-garment (DTG), 3D direct embroidery, chenille patches, and rubberized silicone badges.",
    },
    {
      title: "3. Custom Hardware & Metal Trims",
      desc: "Custom-engraved metal shank buttons, branded zipper pullers (YKK #5), engraved metal aglets on hood drawstrings, metal eyelets, and embossed leather jeans patches.",
    },
    {
      title: "4. Custom Dyeing & Industrial Wash Finishing",
      desc: "Custom Pantone (PMS) lab-dip fabric dyeing, pigment garment dyeing, acid washing, mineral stone washing, enzyme bio-softening, and vintage sun-bleach treatments.",
    },
    {
      title: "5. Custom Cut-and-Sew Silhouette Tailoring",
      desc: "Bespoke pattern drafting for drop-shoulder boxy fits, cropped hem silhouettes, custom sleeve paneling, contrast stitching, and specialized pocket placements.",
    },
    {
      title: "6. Custom Retail Packaging & Folding",
      desc: "Custom-printed frosted zippable polybags, branded tissue paper wrapping, barcode size sticker labeling, and retail-ready carton packing specifications.",
    },
  ];

  const customizationTierMatrix = [
    {
      tier: "Relabeled Blanks",
      scope: "Removing standard blank tags and sewing custom neck labels onto off-the-shelf blanks.",
      moq: "50 – 100 units",
      pros: "Fast turnaround (1–2 weeks), lowest initial cost.",
      cons: "Restricted to off-the-shelf blank fits, GSM weights, and stock colors.",
    },
    {
      tier: "Semi-Custom Manufacturing",
      scope: "Using factory stock fabrics but modifying pattern specs, necklines, graphics, and trims.",
      moq: "100 – 300 units",
      pros: "Custom fit and custom branding without high mill dye lot minimums.",
      cons: "Restricted to available mill warehouse stock fabric colors.",
    },
    {
      tier: "Full Cut-and-Sew Production",
      scope: "Bespoke pattern drafting, custom Pantone fabric dyeing, custom hardware, and custom packaging.",
      moq: "300+ units per style/color",
      pros: "100% unique brand differentiation, custom GSM fabric, full creative freedom.",
      cons: "Longer lead times (6–8 weeks including sample approval).",
    },
  ];

  const faqs = [
    {
      q: "Can I order custom woven labels for low MOQ orders?",
      a: "Yes! Woven labels have low minimum order quantities (typically 500 to 1,000 units, costing around $0.15 to $0.35 per label). Unused labels are held in safe inventory at Fenalt's Dhaka facility for your future reorders.",
    },
    {
      q: "What is the difference between private labeling and full cut-and-sew manufacturing?",
      a: "Private labeling adds your brand tags and prints onto pre-existing blank garments. Full cut-and-sew manufacturing creates garments from scratch - drafting custom CAD patterns, knitting/dyeing custom GSM fabric, and assembling custom hardware.",
    },
    {
      q: "What is the most durable print method for streetwear t-shirts?",
      a: "Screen printing with high-opacity plastisol or water-based discharge ink on 100% combed cotton is the industry standard for durability, resisting cracking and fading through 50+ wash cycles.",
    },
    {
      q: "How are custom metal zipper pulls and buttons manufactured?",
      a: "Custom hardware requires casting a steel mold with your brand logo or logotype. Once the mold is created, metal buttons or zipper sliders are die-cast in zinc alloy or brass and electroplated in antique nickel, matte black, or brushed gold finishes.",
    },
    {
      q: "Does custom garment packaging increase retail value?",
      a: "Yes. Custom frosted zip-lock polybags with printed brand logos and scannable barcode size stickers protect garments during shipping and deliver a premium unboxing experience that justifies higher retail pricing.",
    },
    {
      q: "How does Fenalt manage custom garment execution in Bangladesh?",
      a: "Fenalt's technical team in Dhaka coordinates custom pattern drafting, lab-dip dye matching, hardware mold production, screen printing, and final polybag packaging for international apparel brands.",
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
            Garment Customization{" "}
            <span className="italic font-medium text-[#2D5016]">Options Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A comprehensive guide to apparel branding - woven labels, screen printing, custom hardware, industrial wash finishes, bespoke fits, and retail packaging.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Sliders size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Brand Architecture</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Customization is what transforms basic commodity textiles into <strong className="font-medium">a distinct, high-margin retail fashion brand</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            From the tactile feel of a high-definition woven neck label to custom-engraved metal zipper pullers and custom boxy-fit pattern cuts, every customization detail reinforces your brand positioning. Understanding available options and their respective minimum order quantities (MOQs) allows fashion founders to build a high-impact collection strategy.
          </p>
        </div>
      </section>

      {/* 6 Customization Options */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Customization Spectrum</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Garment Customization Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((opt, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{opt.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Tier Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Level</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Customization Tier Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Customization Tier</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Scope of Work</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/6">Typical MOQ</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Key Advantage</th>
                </tr>
              </thead>
              <tbody>
                {customizationTierMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.tier}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.scope}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.moq}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.pros}</td>
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
              { href: "/learn/custom-hangtags-neck-labels-apparel", label: "Clothing Label Types and Placement Guide" },
              { href: "/learn/custom-hangtags-neck-labels-apparel", label: "Garment Trims and Hardware Sourcing Guide" },
              { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
              { href: "/learn/stitch-type-and-garment-quality", label: "Apparel Seam Types & Construction Explained" },
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Clothing Production?" },
              { href: "/clothing-manufacturer-bangladesh", label: "Fenalt Custom Apparel Manufacturing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Build fully custom clothing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt executes custom woven labels, screen printing, custom hardware, and bespoke cut-and-sew manufacturing in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
