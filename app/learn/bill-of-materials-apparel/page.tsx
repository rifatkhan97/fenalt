import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Bill of Materials (BOM) in Apparel Production?",
  description:
    "Learn what a Bill of Materials (BOM) is in garment manufacturing - including fabric specs, trims, threads, labels, hardware, and yield calculations.",
  alternates: {
    canonical: "https://fenalt.com/learn/bill-of-materials-apparel",
  },
  openGraph: {
    title: "What Is a Bill of Materials (BOM) in Apparel Production?",
    description:
      "Learn what a Bill of Materials (BOM) is in garment manufacturing - including fabric specs, trims, threads, labels, hardware, and yield calculations.",
    url: "https://fenalt.com/learn/bill-of-materials-apparel",
  },
};

export default function BillOfMaterialsApparelPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Bill of Materials (BOM) in Apparel Production?",
    description:
      "A technical guide to the Bill of Materials (BOM) in apparel tech packs, costings, and inventory procurement.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/bill-of-materials-apparel",
    mainEntityOfPage: "https://fenalt.com/learn/bill-of-materials-apparel",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Bill of Materials Apparel", item: "https://fenalt.com/learn/bill-of-materials-apparel" },
    ],
  };

  const components = [
    { name: "Primary & Secondary Fabrics", detail: "Shell fabric composition, GSM weight, weave/knit type, finish, colorway code, and consumption yield per garment." },
    { name: "Sewing Threads & Seam Tapes", detail: "Thread type (core-spun cotton/poly), thread tex/weight, color match code, and seam taping specs." },
    { name: "Hardware & Fasteners", detail: "Zippers (YKK gauge, tape length, slider finish), snaps, buttons, eyelets, cord locks, and rivets." },
    { name: "Labels & Hangtags", detail: "Woven neck labels, printed care/content tags, size flags, hangtags, and attachment strings." },
    { name: "Packaging Supplies", detail: "Polybag thickness/dimensions, folding cardboard inserts, silica gel packs, and export carton marking specs." },
  ];

  const faqs = [
    {
      q: "Who creates the Bill of Materials (BOM)?",
      a: "The brand's technical designer or product developer compiles the initial BOM inside the tech pack. The manufacturer updates it with exact material consumption yields and unit costs.",
    },
    {
      q: "Why is an accurate BOM essential for costings?",
      a: "The BOM is the foundation of FOB costing. Omitted trims (like specialized drawstrings or custom woven tags) lead to unexpected cost surcharges during bulk production.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Pattern Making</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Is a Bill of Materials{" "}
            <span className="italic font-medium text-[#2D5016]">(BOM) in Apparel?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A Bill of Materials (BOM) is an exhaustive itemized ingredient list for every physical component required to manufacture a single garment.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileSpreadsheet size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Definition</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The <strong className="font-medium">Bill of Materials (BOM)</strong> ensures that every button, thread, label, and fabric panel is specified, costed, and ordered without omissions.
            </p>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">BOM Structure</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Essential BOM Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((c, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{c.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{c.detail}</p>
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
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Clothing Tech Pack?" },
              { href: "/learn/apparel-manufacturing-cost-considerations", label: "Apparel Manufacturing Cost Considerations" },
              { href: "/tech-pack-development-apparel", label: "Fenalt Tech Pack Development Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Itemized procurement &amp; BOM costing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt builds itemized BOMs and manages all trim and fabric procurement directly with audited mills in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
