import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Hangtags & Neck Labels in Apparel Manufacturing",
  description:
    "Explore brand labeling options — woven damask neck labels, heat-transfer neck prints, legal care labels, and custom hangtags with safety pin locks.",
  alternates: {
    canonical: "https://fenalt.com/learn/custom-hangtags-neck-labels-apparel",
  },
  openGraph: {
    title: "Custom Hangtags & Neck Labels in Apparel Manufacturing",
    description:
      "Explore brand labeling options — woven damask neck labels, heat-transfer neck prints, legal care labels, and custom hangtags with safety pin locks.",
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
    { title: "1. High-Density Woven Damask Neck Labels", desc: "Woven polyester/satin threads creating crisp, durable brand logos sewn into the collar seam (end-fold or loop-fold)." },
    { title: "2. Tagless Heat-Transfer Screen Print", desc: "Screen-printed logo and size info directly onto interior neck fabric. Ideal for tag-free comfort in t-shirts and activewear." },
    { title: "3. Legal Care & Fiber Content Side-Seam Labels", desc: "Satin or printed polyester labels containing legally mandated fiber composition (e.g. 100% Cotton), country of origin, and care symbols." },
    { title: "4. Premium Heavyweight Hangtags", desc: "Heavy 400–600 GSM cardstock hangtags featuring spot UV, foil stamping, textured embossing, and custom cord/pin fasteners." },
  ];

  const faqs = [
    {
      q: "What legal information must be included on an apparel care label?",
      a: "US (FTC) and EU regulations mandate fiber content percentages, country of origin (e.g. Made in Bangladesh), manufacturer RN number (or company ID), and care symbols/instructions.",
    },
    {
      q: "Are woven labels uncomfortable against the skin?",
      a: "Damask woven labels with ultrasonic cut edges are soft and smooth. For sensitive garments, tagless heat-transfer neck prints eliminate all friction.",
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
            Custom Hangtags &amp; Neck Labels{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Labels and hangtags are the signature touchpoints of your physical brand. Master the technical choices between woven tags, tagless prints, and care labels.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Tag size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Label Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Woven damask neck labels and custom hangtags</strong> communicate luxury craftsmanship while fulfilling mandatory international care labeling laws.
            </p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Label Formats</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">4 Label &amp; Tag Categories</h2>
          <div className="space-y-6">
            {types.map((t, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{t.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{t.desc}</p>
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
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/garment-packaging-custom-labeling-services", label: "Fenalt Custom Labeling & Packaging Services" },
              { href: "/learn/bill-of-materials-apparel", label: "What Is a Bill of Materials (BOM) in Apparel?" },
              { href: "/intake", label: "Start Your Custom Production" },
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Custom woven tags &amp; hangtags</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manufactures custom damask woven neck tags, care labels, and heavy hangtags for complete brand presentation.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
