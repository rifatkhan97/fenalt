import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Hangtags & Neck Labels in Apparel Manufacturing",
  description:
    "Explore brand labeling options - woven damask neck labels, tagless heat-transfer neck prints, legal care/content labels, custom hangtags, and retail barcode stickers.",
  alternates: {
    canonical: "https://fenalt.com/learn/custom-hangtags-neck-labels-apparel",
  },
  openGraph: {
    title: "Custom Hangtags & Neck Labels in Apparel Manufacturing",
    description:
      "Explore brand labeling options - woven damask neck labels, tagless heat-transfer neck prints, legal care/content labels, custom hangtags, and retail barcode stickers.",
    url: "https://fenalt.com/learn/custom-hangtags-neck-labels-apparel",
  },
};

export default function CustomHangtagsNeckLabelsApparelPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Hangtags & Neck Labels in Apparel Manufacturing",
    description:
      "A technical guide to woven damask labels, heat-seal neck prints, care label legal requirements, and hangtag design.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/custom-hangtags-neck-labels-apparel",
    mainEntityOfPage: "https://fenalt.com/learn/custom-hangtags-neck-labels-apparel",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Custom Hangtags and Neck Labels", item: "https://fenalt.com/learn/custom-hangtags-neck-labels-apparel" },
    ],
  };

  const types = [
    {
      title: "1. High-Density Woven Damask Neck Labels",
      desc: "Woven using fine 50-denier polyester yarns to render razor-sharp logo detail with soft, non-scratch ultrasonic cut edges. Available in center-fold, end-fold, or mitre-fold formats for collar seam insertion.",
    },
    {
      title: "2. Tagless Heat-Transfer Neck Prints",
      desc: "Screen-printed ink or silicone transfer applied directly to interior neck fabric using a heat press. Eliminates physical label friction for tag-free comfort in activewear, t-shirts, and underwear.",
    },
    {
      title: "3. Mandatory Care & Fiber Content Side-Seam Labels",
      desc: "Soft satin or printed Tyvek/polyester labels sewn into interior side seams, containing legally required fiber composition percentages, country of origin, washing symbols, and manufacturer RN numbers.",
    },
    {
      title: "4. Heavyweight Cardstock Custom Hangtags",
      desc: "Heavy 400–600 GSM paperboard hangtags featuring premium finishing touches: soft-touch matte lamination, foil stamping, raised UV spot gloss, custom die-cut shapes, and metal eyelet reinforced holes.",
    },
    {
      title: "5. Woven Outer Flag & Hem Labels",
      desc: "Small folded woven damask labels attached to sleeve cuffs, bottom hems, or hood edges to serve as subtle exterior brand signatures on premium streetwear and outerwear.",
    },
    {
      title: "6. Barcode & Retail Price Sticker Labels",
      desc: "Scannable adhesive UPC/EAN barcode stickers applied to hangtags or polybags, facilitating inventory tracking and warehouse fulfillment for retail stockists.",
    },
  ];

  const legalMatrix = [
    { region: "United States (FTC)", requirement: "Fiber composition %, Country of Origin ('Made in...'), Manufacturer RN # or company name, Care instructions (ASTM/ISO symbols)." },
    { region: "European Union (EU)", requirement: "Fiber content in official EU destination language, Country of Origin, Textile manufacturer address, ISO 3758 care symbols." },
    { region: "United Kingdom (UK)", requirement: "Fiber composition %, Country of Origin, Manufacturer/Importer UK contact address, Care instructions in English." },
    { region: "Australia / New Zealand", requirement: "Mandatory Care Labeling Standard (AS/NZS 1957), Fiber content %, Country of Origin ('Made in...')." },
  ];

  const faqs = [
    {
      q: "What legal information must be included on an apparel care label?",
      a: "Apparel regulations (FTC in the US, EU directives) mandate four key items: 1) Fiber composition percentages (e.g. 100% Combed Cotton), 2) Country of Origin (e.g. Made in Bangladesh), 3) Manufacturer ID or RN number, and 4) ISO/ASTM wash care symbols or written instructions.",
    },
    {
      q: "Are woven damask neck labels uncomfortable or scratchy?",
      a: "Modern damask woven labels use fine 50-denier polyester threads and ultrasonic laser cutting to ensure smooth, soft edges. However, for sensitive items like activewear or babywear, tagless heat-transfer neck prints eliminate all physical friction.",
    },
    {
      q: "What is an RN number on clothing labels?",
      a: "An RN (Registered Identification Number) is a 5-digit or 6-digit number issued by the US Federal Trade Commission (FTC) to US-based apparel businesses. International brands without an RN number state their full legal company name and business address on care labels.",
    },
    {
      q: "How are hangtags attached to garments during manufacturing?",
      a: "Hangtags can be attached using standard plastic kimble tag pins (applied with an tagging gun through interior seam allowances) or using luxury braided cotton strings with custom embossed wax or plastic safety-pin locks.",
    },
    {
      q: "What is the typical minimum order quantity (MOQ) for custom woven labels?",
      a: "Custom woven labels have low MOQs (typically 500 to 1,000 units, costing $0.15 to $0.35 per label). Fenalt stores excess label inventory in Dhaka for seamless inclusion in your future reorder runs.",
    },
    {
      q: "How does Fenalt handle brand labeling and packaging in Bangladesh?",
      a: "Fenalt's Dhaka team coordinates custom woven label production, heat-seal neck printing, legal care label verification, hangtag attachment, and final barcoded polybag packing.",
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
            Custom Hangtags &amp; Neck Labels{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A guide to brand labeling - woven damask neck tags, tagless heat-transfer prints, legal care labels, heavy cardstock hangtags, and barcode compliance.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Tag size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Brand Identity &amp; Compliance</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Custom labeling establishes <strong className="font-medium">retail brand authenticity while ensuring international legal compliance</strong> in destination markets.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Labels and hangtags serve a dual purpose in clothing manufacturing: they convey your brand identity at first glance and communicate legally mandated fiber content and care instructions to consumers. Whether selecting high-definition damask woven labels or tagless heat-transfer prints, understanding label construction and legal requirements is essential for commercial distribution.
          </p>
        </div>
      </section>

      {/* 6 Types */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Label Catalog</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Types of Apparel Branding &amp; Labels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types.map((t, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{t.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Legal Compliance</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Global Care Label Legal Requirements</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Target Market</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-8/12">Mandatory Care Label Information</th>
                </tr>
              </thead>
              <tbody>
                {legalMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.region}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.requirement}</td>
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
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/learn/garment-trims-and-hardware-guide", label: "Garment Trims and Hardware Sourcing Guide" },
              { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Tech Pack?" },
              { href: "/learn/how-to-manufacture-t-shirts", label: "How to Manufacture Custom T-Shirts" },
              { href: "/custom-apparel-manufacturing-services", label: "Fenalt Custom Branding Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Complete brand labeling &amp; packaging</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manufactures custom woven labels, tagless neck transfers, legal care tags, and heavy hangtags in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
