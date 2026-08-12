import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Sliders } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Customization Options Explained for Fashion Brands",
  description:
    "Explore full custom garment branding — woven neck labels, screen printing, custom dyeing, engraved buttons, custom zippers, and polybag packaging.",
  alternates: {
    canonical: "https://fenalt.com/learn/garment-customization-options-explained",
  },
  openGraph: {
    title: "Garment Customization Options Explained for Fashion Brands",
    description:
      "Explore full custom garment branding — woven neck labels, screen printing, custom dyeing, engraved buttons, custom zippers, and polybag packaging.",
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
    { title: "1. Brand Identity Labels & Tags", desc: "Custom woven damask neck labels, heat-transfer neck prints, printed care/content tags, and heavy cardstock hangtags." },
    { title: "2. Decorative Graphic Print & Embroidery", desc: "Plastisol screen print, high-density puff print, 3D direct embroidery, chenille patches, and appliques." },
    { title: "3. Custom Hardware & Fasteners", desc: "Custom-engraved metal buttons, branded zipper pullers, metal aglets on drawstrings, and branded eyelets." },
    { title: "4. Fabric Wash Treatments & Finishes", desc: "Enzyme bio-washing, acid wash, mineral wash, silicone softening, and garment dyeing to custom Pantone colors." },
  ];

  const faqs = [
    {
      q: "Can I add custom woven labels to low MOQ orders?",
      a: "Yes! Woven labels have low minimum order quantities (typically 500 to 1,000 units). Unused labels are safely stored at the factory for future production runs.",
    },
    {
      q: "What is the difference between private label and full custom manufacturing?",
      a: "Private label adds your brand tags to pre-made blank blanks. Full custom (cut-and-sew) crafts custom pattern fits, custom fabric GSM, and custom hardware from scratch.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Decoration &amp; Customization</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Garment Customization Options{" "}
            <span className="italic font-medium text-[#2D5016]">Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Customization turns standard garments into branded luxury products. Discover the full range of trim, hardware, and decorative options.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sliders size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Branding Flexibility</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Every detail — from <strong className="font-medium">custom metal drawstrings to woven neck labels and custom polybags</strong> — elevates brand perception and justifies retail pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Branding Categories</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Customization Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((o, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{o.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{o.desc}</p>
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
              { href: "/learn/custom-hangtags-neck-labels-apparel", label: "Custom Hangtags & Neck Labels in Apparel" },
              { href: "/learn/screen-printing-vs-dtg-clothing", label: "Screen Printing vs DTG Printing for Clothing" },
              { href: "/learn/custom-embroidery-for-clothing-brands", label: "Custom Embroidery for Clothing Brands" },
              { href: "/garment-packaging-custom-labeling-services", label: "Fenalt Packaging & Labeling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Complete custom trim &amp; hardware sourcing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manufactures custom woven labels, metal hardware, printed tags, and custom polybags for emerging brands.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
