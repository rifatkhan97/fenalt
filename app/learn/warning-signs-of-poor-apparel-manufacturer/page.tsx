import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, AlertOctagon } from "lucide-react";

export const metadata: Metadata = {
  title: "Warning Signs of a Poor Apparel Manufacturing Partner",
  description:
    "Spot red flags when vetting clothing factories - un-itemized quotes, reluctance to sign NDAs, untraceable subcontracting, upfront payment demands, and missing AQL QC protocols.",
  alternates: {
    canonical: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
  },
  openGraph: {
    title: "Warning Signs of a Poor Apparel Manufacturing Partner",
    description:
      "Spot red flags when vetting clothing factories - un-itemized quotes, reluctance to sign NDAs, untraceable subcontracting, upfront payment demands, and missing AQL QC protocols.",
    url: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
  },
};

export default function WarningSignsOfPoorApparelManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Warning Signs of a Poor Apparel Manufacturing Partner",
    description:
      "A risk-mitigation guide for fashion brands identifying major red flags during clothing factory vetting.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
    mainEntityOfPage: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Warning Signs of Poor Manufacturer", item: "https://fenalt.com/learn/warning-signs-of-poor-apparel-manufacturer" },
    ],
  };

  const redFlags = [
    {
      title: "1. Unwillingness to Provide Itemized Price Costings",
      desc: "Factories or brokers that insist on single lump-sum quotes without breaking down fabric consumption, cut-make-trim (CMT) labor, print setups, or export packaging fees.",
    },
    {
      title: "2. Refusal to Sign NNN / NDA IP Agreements",
      desc: "Reluctance to sign enforceable Non-disclosure, Non-use, Non-circumvention (NNN) agreements protecting your proprietary patterns, tech packs, and brand artwork.",
    },
    {
      title: "3. Untraceable Subcontracting to Shadow Sewing Units",
      desc: "Passing bulk production to un-audited third-party shadow factories without brand knowledge, bypassing social compliance (BSCI/WRAP) and quality standards.",
    },
    {
      title: "4. Poor Sample Tech Pack Fidelity & Evasive Communication",
      desc: "Delivering initial prototype samples that ignore tech pack POM specs, accompanied by long delays or defensive communication when revision feedback is submitted.",
    },
    {
      title: "5. Demanding 100% Upfront Deposit Wire Payments",
      desc: "Refusing standard commercial milestone payment terms (e.g. 30% deposit / 70% post-FRI inspection) and demanding 100% upfront wire payment before sampling.",
    },
    {
      title: "6. Absence of Documented AQL Quality Control & Needle Scanners",
      desc: "Operating without formal in-line inspection logs, lacking calibrated conveyor needle detectors, or rejecting third-party pre-shipment FRI audits.",
    },
  ];

  const redFlagMatrix = [
    { redFlag: "Un-Itemized Lump-Sum Quote", operationalRisk: "Hidden material markups, inability to audit fabric yields", verificationFix: "Insist on itemized BOM + CMT pricing breakdown." },
    { redFlag: "Demanding 100% Upfront Payment", operationalRisk: "Zero leverage if bulk production arrives defective", verificationFix: "Enforce 30% deposit / 70% post-FRI balance terms." },
    { redFlag: "Refusal of Third-Party FRI Audit", operationalRisk: "Covering up bulk sewing defects or off-spec sizes", verificationFix: "Mandate ANSI/ASQ Z1.4 AQL 2.5 FRI inspection in PO." },
    { redFlag: "Unverified Subcontracting", operationalRisk: "Child labor, sweatshop conditions, missing needle safety", verificationFix: "Require physical factory audit address verification." },
  ];

  const faqs = [
    {
      q: "What is an NNN agreement in overseas apparel manufacturing?",
      a: "An NNN agreement protects Non-disclosure, Non-use, and Non-circumvention. Unlike standard Western NDAs, an NNN legally prevents overseas factories from using your patterns, bypassing your brand, or selling surplus stock directly to consumers.",
    },
    {
      q: "How can I verify if a factory is illegally subcontracting my production order?",
      a: "Mandate third-party in-line QC audits (QIMA, SGS) or utilize an on-the-ground liaison team in Dhaka. Inspectors physically verify that sewing and cutting occur at the exact audited factory address specified in your contract.",
    },
    {
      q: "Is a manufacturer refusing client references a guaranteed red flag?",
      a: "Yes. Reputable clothing manufacturers proudly share verifiable references from current brand clients or show physical samples of completed production runs in comparable product categories.",
    },
    {
      q: "What commercial payment terms protect a fashion brand from supplier fraud?",
      a: "Standard safe payment terms are a 30% to 50% deposit upon PO issuance, with the remaining 50% to 70% balance paid only after an independent AQL 2.5 Final Random Inspection (FRI) is passed.",
    },
    {
      q: "Why is a lack of conveyor needle detection scanning dangerous?",
      a: "If a sewing machine needle breaks during high-speed sewing and a metal fragment remains embedded inside a garment, it poses a severe safety hazard to consumers and violates retailer compliance laws.",
    },
    {
      q: "How does Fenalt protect brands against poor factory practices in Bangladesh?",
      a: "Fenalt operates as your local technical team in Dhaka - vetting partner micro-factories, enforcing NNN protection, providing itemized FOB quotes, and conducting mandatory AQL 2.5 QC audits.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Supplier Selection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Warning Signs of a Poor{" "}
            <span className="italic font-medium text-[#2D5016]">Apparel Manufacturing Partner.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical risk-mitigation guide for fashion founders - spotting major red flags during supplier vetting, un-itemized quotes, NNN refusals, subcontracting risks, and payment traps.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertOctagon size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Risk Identification</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Identifying factory red flags during initial vetting <strong className="font-medium">prevents catastrophic capital loss and defective inventory</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Selecting a garment manufacturer requires looking past polished sales decks. Un-itemized price quotes, unwillingness to sign NNN intellectual property agreements, unverified third-party subcontracting, and demanding 100% upfront wire transfers signal high operational risk. Structured due diligence ensures brand safety.
          </p>
        </div>
      </section>

      {/* 6 Red Flags */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Warning Indicators</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Critical Factory Red Flags</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {redFlags.map((rf, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#C8A882] text-[#1A1A1A] flex items-center justify-center mb-4 text-xs font-bold">⚠</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{rf.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{rf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flag Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Risk Assessment</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Factory Red Flag Risk &amp; Verification Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Warning Red Flag</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-5/12">Associated Operational Risk</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Mandatory Verification Fix</th>
                </tr>
              </thead>
              <tbody>
                {redFlagMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.redFlag}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.operationalRisk}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.verificationFix}</td>
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
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
              { href: "/learn/direct-manufacturer-vs-sourcing-agent", label: "Direct Manufacturer vs Sourcing Agent" },
              { href: "/apparel-production-management-services", label: "Fenalt Audited Sourcing Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Eliminate manufacturing risks</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt provides transparent NNN agreements, itemized FOB quotes, and on-the-ground QC management in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
