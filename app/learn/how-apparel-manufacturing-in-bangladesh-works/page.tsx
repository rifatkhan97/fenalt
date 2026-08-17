import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Apparel Manufacturing in Bangladesh Works",
  description:
    "An insider's guide to Bangladesh's garment industry - understanding vertical mill integration, Dhaka infrastructure, Chittagong port logistics, duty-free trade benefits, and low MOQs.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
  },
  openGraph: {
    title: "How Apparel Manufacturing in Bangladesh Works",
    description:
      "An insider's guide to Bangladesh's garment industry - understanding vertical mill integration, Dhaka infrastructure, Chittagong port logistics, duty-free trade benefits, and low MOQs.",
    url: "https://www.fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
  },
};

export default function HowApparelManufacturingInBangladeshWorksPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Apparel Manufacturing in Bangladesh Works",
    description:
      "A comprehensive guide to Bangladesh's garment ecosystem, vertical knitting mills, cut-and-sew operations, and global export shipping.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
    mainEntityOfPage: "https://www.fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How Manufacturing in Bangladesh Works", item: "https://www.fenalt.com/learn/how-apparel-manufacturing-in-bangladesh-works" },
    ],
  };

  const pillars = [
    {
      title: "1. Vertical Cotton Knitting & Dyeing Infrastructure",
      desc: "Dhaka features world-class composite mills where raw cotton yarn is circular knitted, lab-dip dyed, and bio-washed under one roof - ensuring fast fabric turnaround and strict GSM weight control.",
    },
    {
      title: "2. Highly Skilled Specialized Cut-and-Sew Workforce",
      desc: "As the world's 2nd largest apparel exporter, Bangladesh boasts decades of specialized sewing expertise across heavyweight fleece hoodies, luxury streetwear t-shirts, and technical activewear.",
    },
    {
      title: "3. International RSC & Social Compliance Standards",
      desc: "Modern export factories in Dhaka strictly enforce RSC (RMG Sustainability Council) structural building safety, BSCI, SEDEX, and OEKO-TEX Standard 100 chemical safety compliance.",
    },
    {
      title: "4. Direct Ocean Logistics via Chittagong (Chattogram) Port",
      desc: "Finished export master cartons pass needle detection scanning in Dhaka, are sealed into FCL/LCL ocean containers, and trucked directly to Chittagong port for global dispatch.",
    },
    {
      title: "5. Duty-Free Trade Agreements & Tariff Advantages",
      desc: "Apparel manufactured in Bangladesh benefits from preferential duty-free or reduced tariff access under GSP+ and bilateral trade agreements in the UK, EU, Canada, and Australia.",
    },
    {
      title: "6. Micro-Factory Networks for Startup Low MOQs",
      desc: "Through production management partners like Fenalt, independent fashion brands access specialized micro-factories in Dhaka - unlocking trial production runs starting at 50 to 100 units.",
    },
  ];

  const bangladeshEcosystemMatrix = [
    { stage: "Yarn & Knitting", facilityType: "Dhaka Composite Knitting Mills", capability: "100% Combed Cotton, French Terry, Fleece, Ribbing" },
    { stage: "Dyeing & Finishing", facilityType: "Eco-Certified Dyeing Plants", capability: "Pantone reactive vat dyeing, enzyme bio-washing, pre-shrinking" },
    { stage: "Cut, Make, Trim (CMT)", facilityType: "Audited Dhaka Micro-Factories", capability: "Automated CAD cutting, 605 coverstitching, 100% POM checks" },
    { stage: "Export & Customs", facilityType: "Chittagong Port Terminal", capability: "FCL/LCL ocean freight, air cargo, DDP door delivery" },
  ];

  const faqs = [
    {
      q: "Why is Bangladesh the global leader in cotton knitwear manufacturing?",
      a: "Bangladesh possesses massive vertical knitting infrastructure, competitive FOB labor economics, skilled sewing craftsmanship, and direct access to premium combed ring-spun cotton yarns.",
    },
    {
      q: "Can small fashion startups manufacture custom apparel in Bangladesh?",
      a: "Yes! While traditional Bangladesh mega-factories require 5,000+ units, working with Fenalt provides direct access to audited Dhaka micro-factories accepting orders starting at 50 to 100 units per style.",
    },
    {
      q: "How long does shipping take from Bangladesh to the US or UK?",
      a: "Express Air Freight takes 4 to 7 days. Standard Ocean Freight from Chittagong port to the UK/EU takes 25 to 30 days, while ocean transit to US East Coast ports takes 30 to 35 days.",
    },
    {
      q: "Are apparel factories in Bangladesh safe and socially compliant?",
      a: "Modern export factories in Bangladesh are among the safest in the world, governed by the RMG Sustainability Council (RSC) and audited for BSCI, SEDEX, and WRAP workplace standards.",
    },
    {
      q: "What fabric types are manufactured in Bangladesh?",
      a: "Bangladesh excels in 100% combed cotton single jersey, heavy French terry, fleece, CVC blends, ribbing, twill, denim, and technical activewear synthetic knits.",
    },
    {
      q: "How does Fenalt coordinate apparel manufacturing in Dhaka?",
      a: "Fenalt operates as your on-the-ground technical liaison in Dhaka - managing fabric milling, sample development, inline Traffic Light QC, AQL 2.5 FRI audits, and export logistics.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Bangladesh &amp; International</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Apparel Manufacturing{" "}
            <span className="italic font-medium text-[#2D5016]">in Bangladesh Works.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            An insider&apos;s technical guide to Bangladesh&apos;s garment industry - understanding vertical mill integration, Dhaka infrastructure, Chittagong port logistics, and duty-free import benefits.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Globe2 size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Global Powerhouse</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Bangladesh is the world&apos;s leading capital for <strong className="font-medium">cotton knitwear, vertical milling, and high-precision garment assembly</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Understanding the Bangladesh garment ecosystem reveals why global fashion brands choose Dhaka for production. From composite knitting mills that spin and dye raw cotton yarn under one roof to certified micro-factories executing AQL 2.5 quality control, Bangladesh offers unmatched supply chain speed and cost efficiency.
          </p>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Industry Foundation</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Pillars of Bangladesh Garment Manufacturing</h2>
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

      {/* Ecosystem Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Infrastructure</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Bangladesh Garment Manufacturing Ecosystem Blueprint</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Supply Chain Stage</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Facility &amp; Hub Type</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[41.6%]">Technical Capabilities</th>
                </tr>
              </thead>
              <tbody>
                {bangladeshEcosystemMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.stage}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-medium">{row.facilityType}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.capability}</td>
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
              { href: "/learn/what-to-know-before-sourcing-from-bangladesh", label: "What to Know Before Sourcing From Bangladesh" },
              { href: "/learn/how-international-clothing-production-is-coordinated", label: "How International Production Is Coordinated" },
              { href: "/learn/what-happens-after-clothing-manufactured-overseas", label: "What Happens After Clothing Is Manufactured" },
              { href: "/learn/overseas-apparel-production-checklist", label: "Overseas Apparel Production Checklist" },
              { href: "/learn/how-to-communicate-with-overseas-suppliers", label: "How to Communicate With Overseas Suppliers" },
              { href: "/apparel-production-management", label: "Fenalt Dhaka Production Management Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture seamlessly in Dhaka</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt connects fashion brands directly to audited partner micro-factories and composite mills in Bangladesh with full QC management.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
