import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Recycled Polyester in Clothing Production: Brand Guide",
  description:
    "Learn how recycled polyester (rPET) is produced, GRS certification requirements, fiber performance in activewear, poly-cotton blends, and environmental considerations.",
  alternates: {
    canonical: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
  },
  openGraph: {
    title: "Recycled Polyester in Clothing Production: Brand Guide",
    description:
      "Learn how recycled polyester (rPET) is produced, GRS certification requirements, fiber performance in activewear, poly-cotton blends, and environmental considerations.",
    url: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
  },
};

export default function RecycledPolyesterInClothingProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Recycled Polyester in Clothing Production: Brand Guide",
    description:
      "A technical guide to recycled polyester (rPET) fiber sourcing, Global Recycled Standard (GRS) compliance, and synthetic fabric performance.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
    mainEntityOfPage: "https://fenalt.com/learn/recycled-polyester-in-clothing-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Recycled Polyester in Production", item: "https://fenalt.com/learn/recycled-polyester-in-clothing-production" },
    ],
  };

  const facts = [
    {
      title: "1. Post-Consumer PET Bottle Upcycling Process",
      desc: "Recycled polyester (rPET) is manufactured by collecting, washing, and shredding post-consumer plastic PET water bottles into clear flakes. These flakes are melted and extruded through spinnerets to form continuous polyester filament yarn.",
    },
    {
      title: "2. Technical Performance Parity with Virgin Polyester",
      desc: "Chemically and physically, rPET fiber delivers identical tensile strength, abrasion resistance, moisture-wicking quick-dry performance, and colorfastness as virgin petroleum-derived polyester.",
    },
    {
      title: "3. Global Recycled Standard (GRS) Certification",
      desc: "Textile Exchange's Global Recycled Standard (GRS) tracks recycled material percentages across the production chain, verifying that at least 50% recycled content is present for GRS logo labeling while enforcing chemical and social standards.",
    },
    {
      title: "4. Carbon Footprint & Energy Reduction",
      desc: "Manufacturing rPET consumes up to 50% less energy and generates up to 30% fewer greenhouse gas emissions compared to synthesizing new virgin polyester from crude oil feedstocks.",
    },
    {
      title: "5. Blending rPET with Combed Cotton & Spandex",
      desc: "rPET is frequently blended with combed cotton (e.g. 60/40 CVC fleece) for heavy hoodies to improve fabric durability and reduce wash shrinkage, or blended with spandex for high-performance activewear tights.",
    },
    {
      title: "6. Transaction Certificate (TC) Verification",
      desc: "To legally validate consumer-facing recycled marketing claims, apparel brands must obtain official GRS Transaction Certificates (TCs) issued by accredited certification bodies for each fabric shipment.",
    },
  ];

  const rpetApplications = [
    {
      garmentType: "Performance Activewear & Gymwear",
      blend: "80% rPET / 20% Spandex Interlock",
      benefit: "Provides high 4-way stretch, squat-proof opacity, moisture-wicking speed, and muscle compression.",
    },
    {
      garmentType: "Outerwear Shells & Windbreakers",
      blend: "100% rPET Ripstop or Taffeta with DWR",
      benefit: "Delivers windproof and water-resistant performance while diverting plastic waste from landfills.",
    },
    {
      garmentType: "CVC Hoodies & Sweatpants",
      blend: "60% Combed Cotton / 40% rPET Fleece",
      benefit: "Combines soft cotton handfeel on the outer print face with rPET durability, thermal warmth, and reduced wash shrinkage.",
    },
    {
      garmentType: "Sustainable Linings & Trims",
      blend: "100% rPET Satin or Mesh Lining",
      benefit: "Replaces virgin petroleum polyester jacket linings, pocketing, and woven brand labels.",
    },
  ];

  const faqs = [
    {
      q: "Is recycled polyester (rPET) as strong as virgin polyester?",
      a: "Yes. Mechanically recycled rPET filament yarn possesses virtually identical tensile strength, abrasion resistance, and colorfastness to virgin polyester, making it ideal for activewear, outerwear, and streetwear blends.",
    },
    {
      q: "What is GRS certification in apparel manufacturing?",
      a: "The Global Recycled Standard (GRS) is an international voluntary product standard that certifies the chain of custody for recycled content (minimum 20% recycled fiber for GRS claims, 50% for GRS logo labeling) alongside strict social, environmental, and chemical handling audits.",
    },
    {
      q: "Can rPET be blended with natural cotton?",
      a: "Yes. CVC (Chief Value Cotton) knits — such as 60% combed cotton / 40% rPET — are widely used in hoodies and sweatshirts. The cotton outer face provides a soft handfeel and screen print surface, while the rPET interior adds warmth, strength, and shrinkage resistance.",
    },
    {
      q: "Does rPET require different sewing machinery than virgin polyester?",
      a: "No. Sewing machine setups, needle point selection (ballpoint for knits, sharp for wovens), thread Tex gauges, and presser foot tension for rPET are identical to standard virgin polyester fabric processing.",
    },
    {
      q: "How many plastic bottles are used in an rPET jacket?",
      a: "Depending on fabric GSM and garment size, an rPET outerwear jacket typically upcycles approximately 25 to 40 post-consumer 500ml plastic water bottles.",
    },
    {
      q: "How does Fenalt manage rPET fabric sourcing in Bangladesh?",
      a: "Fenalt's Dhaka team pairs fashion labels with certified synthetic fabric mills in Bangladesh, verifying GRS Transaction Certificates (TCs), conducting lab-dip color matching, and auditing pre-shipment fabric weight.",
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
            Recycled Polyester{" "}
            <span className="italic font-medium text-[#2D5016]">in Clothing Production.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical brand guide to recycled polyester (rPET) — understanding post-consumer bottle upcycling, GRS certification standards, activewear performance, and fabric blends.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Circular Synthetics</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">Recycled polyester (rPET)</strong> upcycles post-consumer plastic bottles into high-performance synthetic yarn with performance parity to virgin polyester.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            For activewear, outerwear, and blended fleece garments, polyester remains an essential performance fiber due to its moisture-wicking speed, high tensile strength, and colorfastness. Replacing virgin petroleum-based polyester with GRS-certified recycled polyester (rPET) enables apparel brands to maintain technical fabric performance while reducing dependence on crude oil feedstocks.
          </p>
        </div>
      </section>

      {/* 6 Technical Facts */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Material Science</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Facts About Recycled Polyester (rPET)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facts.map((item, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{item.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* rPET Applications Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Product Integration</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">rPET Applications by Garment Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Garment Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Typical Blend</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-5/12">Performance Benefit</th>
                </tr>
              </thead>
              <tbody>
                {rpetApplications.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.garmentType}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.blend}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.benefit}</td>
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
              { href: "/learn/organic-cotton-in-apparel-manufacturing", label: "Organic Cotton in Apparel Manufacturing" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/activewear-manufacturing-guide", label: "Cut-and-Sew Activewear Manufacturing Guide" },
              { href: "/learn/outerwear-jacket-manufacturing-guide", label: "Outerwear & Jacket Manufacturing Guide" },
              { href: "/learn/how-to-evaluate-fabric-quality", label: "How to Evaluate Fabric Quality Before Production" },
              { href: "/recycled-polyester-garment-sourcing", label: "Fenalt Recycled Polyester Garment Sourcing" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Source GRS-certified rPET fabrics</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt pairs activewear and outerwear brands with GRS-certified recycled synthetic mills in Dhaka, managing TC documentation and quality auditing.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
