import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Clothing Manufacturer Due Diligence Checklist",
  description:
    "A structured due diligence checklist for evaluating clothing manufacturers — covering capabilities, quality systems, compliance, references, and financial terms.",
  alternates: { canonical: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist" },
  openGraph: {
    title: "Clothing Manufacturer Due Diligence Checklist",
    description: "A structured due diligence checklist for evaluating clothing manufacturers — covering capabilities, quality systems, compliance, references, and financial terms.",
    url: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist",
  },
};

export default function ManufacturerDueDiligenceChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Clothing Manufacturer Due Diligence Checklist",
    description: "Structured due diligence checklist for evaluating and vetting clothing manufacturers.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist",
    mainEntityOfPage: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Due Diligence Checklist", item: "https://fenalt.com/learn/clothing-manufacturer-due-diligence-checklist" },
    ],
  };

  const checklistSections = [
    {
      section: "1. Business Identity & Legal Legitimacy",
      items: [
        "Verified physical business address in the manufacturing country (Dhaka, Bangladesh)",
        "Registered business trade license & export registration certificates viewable",
        "Named operational technical contacts — not anonymous contact forms or brokers",
        "Verifiable company history consistent with claimed factory capacity and machinery",
        "Enforceable Non-disclosure, Non-use, Non-circumvention (NNN) IP agreement signed",
      ],
    },
    {
      section: "2. Technical Production Capabilities",
      items: [
        "Proven experience with your specific garment category (heavy fleece, jersey, outerwear)",
        "MOQ tiers compatible with your brand launch volume (e.g. 50–100 unit starting tiers)",
        "Physical benchmark sample garments available for hand-feel and stitching review",
        "Custom fabric knitting, Pantone lab-dip dyeing, and GSM weight capabilities confirmed",
        "Clarity on whether sewing occurs in-house or via audited partner micro-factories",
      ],
    },
    {
      section: "3. Sampling & Development Protocols",
      items: [
        "Confirmed ability to construct samples directly from brand tech pack specifications",
        "Transparent sample pricing and revision cost policies documented in writing",
        "Realistic sampling turnarounds (10–14 days) with qualified fabric availability",
        "Formal sample feedback tracking and Golden PP Sample sealing process",
      ],
    },
    {
      section: "4. Quality Control & Inspection Systems",
      items: [
        "Documented 4-Point System fabric roll inspection upon mill delivery",
        "Active In-Line QC (IPQC) roving auditors and Traffic Light visual monitoring",
        "ANSI/ASQ Z1.4 AQL 2.5 Final Random Inspection (FRI) pre-shipment standard",
        "Conveyor needle detection scanning mandatory for 100% of export cartons",
      ],
    },
    {
      section: "5. Production Timelines & Freight Logistics",
      items: [
        "Realistic bulk production turnaround time (4–6 weeks post-PP sample sign-off)",
        "Fabric milling lead times incorporated into master production calendar",
        "Explicit Incoterms shipping definitions (FOB Chittagong, EXW, or DDP destination)",
        "Communication protocols for production delays and holiday shutdowns established",
      ],
    },
    {
      section: "6. Commercial Pricing & Payment Terms",
      items: [
        "Fully itemized FOB price quote (fabric yield, CMT labor, trims, packaging, freight)",
        "Standard deposit structure (30% deposit upon PO / 70% post-FRI passed inspection)",
        "Clear pricing validity window (30-day price validity due to yarn cost shifts)",
        "No hidden setup surcharges or un-negotiated trim fees",
      ],
    },
    {
      section: "7. Client References & Proven Track Record",
      items: [
        "At least two client references from comparable fashion brands provided and verified",
        "References confirm on-time delivery, POM measurement accuracy, and defect rates",
        "Portfolio exhibits production quality for brands of comparable scale",
      ],
    },
    {
      section: "8. Social Compliance & Environmental Standards",
      items: [
        "Valid social compliance audit certificates (BSCI, WRAP, SEDEX) for partner facilities",
        "Eco-friendly fabric certifications (OEKO-TEX Standard 100, GOTS organic cotton)",
        "Safe workplace practices, fair wage compliance, and zero child labor policies",
      ],
    },
  ];

  const faqs = [
    {
      q: "Why is a manufacturer due diligence checklist essential for fashion startups?",
      a: "A structured checklist prevents founders from rushing into agreements based on polished website photos. Verifying business licenses, sampling procedures, AQL 2.5 QC systems, and deposit terms protects your financial capital.",
    },
    {
      q: "What is the most critical item to verify on a factory due diligence checklist?",
      a: "Verifying physical factory existence and confirming whether production takes place in-house or via un-audited third-party subcontractors. Subcontracting without brand consent is the #1 cause of quality failures.",
    },
    {
      q: "How long should a thorough manufacturer due diligence process take?",
      a: "A complete due diligence process takes 1 to 2 weeks — including reviewing company credentials, requesting physical benchmark samples, checking client references, and evaluating technical responsiveness.",
    },
    {
      q: "What credentials prove an apparel manufacturer is socially compliant?",
      a: "Recognized third-party audit credentials include BSCI (Business Social Compliance Initiative), WRAP (Worldwide Responsible Accredited Production), SEDEX SMETA, and OEKO-TEX Standard 100 chemical safety certificates.",
    },
    {
      q: "How does Fenalt execute manufacturer due diligence in Bangladesh?",
      a: "Fenalt's Dhaka team conducts rigorous physical factory audits — inspecting partner micro-factories for machinery, working conditions, AQL 2.5 compliance, and needle detection capabilities before onboarding.",
    },
    {
      q: "Can I use this due diligence checklist when hiring a production liaison firm?",
      a: "YES. A reputable production management firm (like Fenalt) will welcome your due diligence questions and provide immediate, verifiable documentation covering all 8 checklist areas.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Supplier Selection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Clothing Manufacturer{" "}
            <span className="italic font-medium text-[#2D5016]">Due Diligence Checklist.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Use this comprehensive checklist before committing to a manufacturing relationship. It covers eight critical operational areas — from legal legitimacy to AQL quality control and ethical compliance.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Risk Reduction</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Systematic due diligence <strong className="font-medium">eliminates manufacturing surprises before deposits are wired</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Vetting an apparel supplier requires checking concrete evidence rather than trusting verbal promises. This 8-point due diligence framework helps brand founders systematically evaluate factory identity, sample fidelity, in-line quality control, payment milestones, and social compliance before issuing purchase orders.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Master Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Essential Areas to Verify</h2>
          <div className="space-y-6">
            {checklistSections.map((sec, si) => (
              <div key={si} className="bg-[#262626] border border-[#333333]">
                <div className="flex items-center gap-4 px-6 lg:px-8 py-4 bg-[#1A1A1A] border-b border-[#333333]">
                  <span className="font-display text-2xl font-light text-[#C8A882]">{String(si + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{sec.section}</h3>
                </div>
                <ul className="divide-y divide-[#333333]">
                  {sec.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3 px-6 lg:px-8 py-4">
                      <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#E5DDD3] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
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
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturer" },
              { href: "/learn/how-to-evaluate-an-overseas-clothing-manufacturer", label: "How to Evaluate an Overseas Manufacturer" },
              { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
              { href: "/apparel-production-management-services", label: "Fenalt Factory Vetting Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Work with a pre-vetted production partner</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt conducts full manufacturer vetting on your behalf — connecting brands with audited micro-factories in Dhaka, Bangladesh.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
