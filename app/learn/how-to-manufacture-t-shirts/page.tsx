import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shirt } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Manufacture T-Shirts: Complete Production Guide",
  description:
    "A step-by-step manufacturing guide for custom t-shirts - fabric GSM selection (180–300 GSM), pattern fits, collar ribbing, screen printing, and line sewing.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
  },
  openGraph: {
    title: "How to Manufacture T-Shirts: Complete Production Guide",
    description:
      "A step-by-step manufacturing guide for custom t-shirts - fabric GSM selection (180–300 GSM), pattern fits, collar ribbing, screen printing, and line sewing.",
    url: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
  },
};

export default function HowToManufactureTShirtsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Manufacture T-Shirts: Complete Production Guide",
    description:
      "A complete technical guide on custom t-shirt production - fabric sourcing, pattern drafting, collar rib attachment, printing, and quality control.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Manufacture T-Shirts", item: "https://fenalt.com/learn/how-to-manufacture-t-shirts" },
    ],
  };

  const steps = [
    { title: "1. Cotton Single Jersey Sourcing (180–300 GSM)", desc: "Select fiber weight and yarn spinning. Standard retail tees use 180 GSM; heavyweight streetwear tees use 240–300 GSM combed cotton." },
    { title: "2. Pattern Fit Engineering (Boxy vs Slim vs Drop Shoulder)", desc: "Draft flat 2D pattern panels specifying armhole drop, chest width, shoulder slope, and sleeve length." },
    { title: "3. Collar Ribbing Construction & Twin-Needle Stitching", desc: "Select 1x1 or 2x2 cotton ribbing for the collar neckband. Enforce twin-needle shoulder-to-shoulder neck taping for structural durability." },
    { title: "4. Graphic Screen Printing & Finishing", desc: "Execute automatic carousel screen printing on cut fabric panels prior to final assembly, followed by bio-wash softening." },
  ];

  const faqs = [
    {
      q: "What is shoulder-to-shoulder neck taping on a t-shirt?",
      a: "A narrow jersey bias tape stitched across the interior neck seam and shoulders, preventing collar stretching and seam irritation.",
    },
    {
      q: "What is the minimum order quantity (MOQ) for custom t-shirts?",
      a: "Fenalt manufactures custom cut-and-sew t-shirts with flexible low minimum order quantities starting at 50 to 100 units per colorway.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Apparel Categories</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Manufacture T-Shirts:{" "}
            <span className="italic font-medium text-[#2D5016]">Production Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            T-shirts are the anchor of any apparel brand. Learn how fabric weight, collar construction, and shoulder taping dictate garment quality.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shirt size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Category Architecture</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Manufacturing a premium t-shirt requires <strong className="font-medium">100% combed cotton jersey, heavy collar ribbing, and reinforced shoulder taping</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Manufacturing Steps</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of T-Shirt Production</h2>
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
              { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Fenalt Heavyweight T-Shirt Manufacturing" },
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton" },
              { href: "/learn/screen-printing-vs-dtg-clothing", label: "Screen Printing vs DTG Printing for T-Shirts" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture custom t-shirts in Bangladesh</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt specializes in custom heavyweight t-shirt production - offering 240–300 GSM combed cotton jersey and custom screen printing.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
