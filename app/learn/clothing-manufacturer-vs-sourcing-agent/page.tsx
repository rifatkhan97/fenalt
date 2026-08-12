import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Clothing Manufacturer vs Garment Sourcing Agent: What's the Difference?",
  description:
    "Understand the difference between working directly with a clothing manufacturer and using a garment sourcing agent — and when each makes more sense for your brand.",
  alternates: {
    canonical: "https://fenalt.com/learn/clothing-manufacturer-vs-sourcing-agent",
  },
  openGraph: {
    title: "Clothing Manufacturer vs Garment Sourcing Agent: What's the Difference?",
    description:
      "Understand the difference between working directly with a clothing manufacturer and using a garment sourcing agent — and when each makes more sense for your brand.",
    url: "https://fenalt.com/learn/clothing-manufacturer-vs-sourcing-agent",
  },
};

export default function ManufacturerVsSourcingAgentPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Clothing Manufacturer vs Garment Sourcing Agent: What's the Difference?",
    description: "A comparison of direct manufacturer relationships vs garment sourcing agents for fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/clothing-manufacturer-vs-sourcing-agent",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Manufacturer vs Sourcing Agent",
        item: "https://fenalt.com/learn/clothing-manufacturer-vs-sourcing-agent",
      },
    ],
  };

  const comparison = [
    {
      aspect: "Who They Are",
      manufacturer: "A factory or factory network that physically produces garments — cutting, sewing, and finishing.",
      agent: "An intermediary who connects brands with suitable factories and manages the production relationship on the brand's behalf.",
    },
    {
      aspect: "What They Provide",
      manufacturer: "Direct production capacity, factory-floor expertise, and (in some cases) sampling and QC services.",
      agent: "Factory access, translation between brand and factory, production oversight, and supply chain coordination.",
    },
    {
      aspect: "Communication",
      manufacturer: "You communicate directly with factory staff — often across language and time-zone barriers.",
      agent: "The agent acts as your local representative, handling day-to-day communications in the manufacturing country.",
    },
    {
      aspect: "Minimum Orders",
      manufacturer: "Factories set their own MOQs — often higher for direct relationships, especially for new brands.",
      agent: "A well-connected agent may be able to access lower-MOQ factories or negotiate better terms by aggregating orders.",
    },
    {
      aspect: "Quality Control",
      manufacturer: "Varies widely by factory. QC systems may or may not be robust, and brands have limited visibility.",
      agent: "A good agent provides on-the-ground QC oversight — inspecting samples and production floors — on the brand's behalf.",
    },
    {
      aspect: "Cost",
      manufacturer: "Lower cost per unit (no agent fee), but more management time and expertise required from the brand.",
      agent: "An agent's service fee (typically a percentage of order value or a flat management fee) offsets the value of oversight and local expertise.",
    },
    {
      aspect: "Risk",
      manufacturer: "Higher risk for brands new to overseas production. Factory problems become the brand's problem directly.",
      agent: "A reputable agent absorbs much of the risk-management function — at the cost of the service fee.",
    },
    {
      aspect: "Best For",
      manufacturer: "Established brands with experienced in-house sourcing teams, strong technical knowledge, and high-volume orders.",
      agent: "Startups, independent brands, and brands new to a particular manufacturing country who need local expertise.",
    },
  ];

  const faqs = [
    {
      q: "Is Fenalt a manufacturer or a sourcing agent?",
      a: "Fenalt operates as an on-the-ground operational liaison in Dhaka, Bangladesh — closer in function to a sourcing and production management partner than a factory directly. Fenalt coordinates manufacturing with audited independent micro-factories and provides full production oversight, sampling, quality control, and logistics coordination.",
    },
    {
      q: "Can I work directly with a factory without an agent?",
      a: "Yes. Direct factory relationships are common for high-volume established brands. However, without on-the-ground oversight, brands typically have limited visibility into actual production conditions, quality issues, or timeline slippage until problems have already occurred.",
    },
    {
      q: "What should I look for in a sourcing agent?",
      a: "Physical presence in the manufacturing country (not remote brokering), documented quality control processes, clear fee structure, references or portfolio from comparable brands, and transparent factory access rather than exclusivity over suppliers.",
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

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Manufacturing Fundamentals</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Clothing Manufacturer vs Garment Sourcing Agent:{" "}
            <span className="italic font-medium text-[#2D5016]">What&apos;s the Difference?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Two very different relationships — and choosing the wrong one for your brand&apos;s stage of development can cost significant time and money.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Side-by-Side</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">Direct Manufacturer vs Sourcing Agent</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Aspect</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Direct Manufacturer</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Sourcing Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.aspect}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.manufacturer}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to use which */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Decision Guide</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">When Does Each Make Sense?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
              <h3 className="font-display text-2xl font-medium text-[#FAF9F6] mb-4">Consider a Direct Manufacturer When:</h3>
              <ul className="space-y-3">
                {[
                  "Your brand has experienced in-house sourcing or production staff",
                  "You have existing relationships in the manufacturing country",
                  "Your order volumes are high enough to command factory attention",
                  "You can travel to inspect factories personally",
                  "You are fluent in factory technical communication",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#E5DDD3]">
                    <span className="text-[#C8A882] mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
              <h3 className="font-display text-2xl font-medium text-[#FAF9F6] mb-4">Consider a Sourcing Agent When:</h3>
              <ul className="space-y-3">
                {[
                  "You are launching a first or early collection",
                  "You have no existing contacts in Bangladesh or your target country",
                  "You need lower-MOQ access and factory flexibility",
                  "Consistent quality oversight is a priority",
                  "You want to reduce the communication and management burden",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#E5DDD3]">
                    <span className="text-[#C8A882] mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
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
              { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/garment-sourcing-agent-bangladesh", label: "Fenalt: Garment Sourcing Agent Bangladesh" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Work with Fenalt&apos;s Dhaka team</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides on-the-ground production management in Bangladesh — combining factory access, sampling, QC oversight, and export coordination.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
