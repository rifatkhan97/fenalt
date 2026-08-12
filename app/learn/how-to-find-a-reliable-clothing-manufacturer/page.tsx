import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Find a Reliable Clothing Manufacturer",
  description:
    "A practical guide to finding a reliable clothing manufacturer - where to look, how to evaluate options, and what distinguishes a trustworthy manufacturing partner from an unreliable one.",
  alternates: { canonical: "https://fenalt.com/learn/how-to-find-a-reliable-clothing-manufacturer" },
  openGraph: {
    title: "How to Find a Reliable Clothing Manufacturer",
    description: "A practical guide to finding a reliable clothing manufacturer - where to look, how to evaluate options, and what distinguishes a trustworthy partner.",
    url: "https://fenalt.com/learn/how-to-find-a-reliable-clothing-manufacturer",
  },
};

export default function HowToFindAReliableManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Find a Reliable Clothing Manufacturer",
    description: "Where and how to find reliable clothing manufacturers for fashion brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-find-a-reliable-clothing-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Find a Reliable Clothing Manufacturer", item: "https://fenalt.com/learn/how-to-find-a-reliable-clothing-manufacturer" },
    ],
  };

  const sources = [
    {
      method: "Production Management Partners & Sourcing Agents",
      description: "A production management firm or sourcing agent with physical presence in a manufacturing hub (such as Dhaka) provides access to pre-vetted, audited factory networks - removing the need to independently identify and evaluate factories from scratch. This is the most practical route for brands new to overseas production.",
      pros: ["Pre-vetted factory access", "On-the-ground QC oversight", "Local expertise and communication", "Reduces independent due diligence burden"],
      cons: ["Service fees apply", "Requires trusting the agent's vetting process"],
    },
    {
      method: "Industry Trade Shows",
      description: "Major apparel industry trade shows (e.g. Magic Las Vegas, Texworld, Première Vision, Bangladesh Denim Expo) host manufacturers and sourcing agents who are actively seeking brand clients. Face-to-face contact provides initial credibility assessment.",
      pros: ["Direct contact and initial assessment", "Large pool of manufacturers in one place", "Physical samples often available"],
      cons: ["Requires travel and attendance cost", "Presentation quality ≠ production quality"],
    },
    {
      method: "Industry B2B Directories",
      description: "Online directories (such as Maker's Row for US manufacturing, or Kompass) list manufacturers by product category and geography. Use these as a starting point for discovery - not as a substitute for independent verification.",
      pros: ["Large database, searchable", "No travel required"],
      cons: ["Listings are self-reported - no quality vetting", "Significant variation in reliability"],
    },
    {
      method: "Brand Referrals",
      description: "Other fashion brands - particularly those producing comparable products at similar volumes - are often the most reliable source of manufacturer referrals. Industry communities, brand founder networks, and fashion incubators can facilitate these introductions.",
      pros: ["First-hand experience from a comparable brand", "High reliability of recommendation"],
      cons: ["Manufacturers may not accept new brands if at capacity", "May not be willing to share competitive supplier information"],
    },
    {
      method: "LinkedIn & Direct Outreach",
      description: "Sourcing managers, production directors, and factory owners are findable on LinkedIn. Direct outreach is possible, but requires careful vetting - any response should be followed by the same due diligence process as any other lead.",
      pros: ["Access to contacts not on directories", "Direct communication"],
      cons: ["No prior vetting", "High volume of non-credible leads possible"],
    },
  ];

  const evaluationSteps = [
    "Request physical samples of existing products before discussing your own project",
    "Verify MOQ, lead times, and pricing in writing - not just verbally",
    "Ask specifically about their QC process and request documentation",
    "Ask who actually produces the garments - owned facility or subcontractor",
    "Request references from comparable brands and follow them up",
    "Review their response quality during enquiry - it predicts future communication",
    "Start with a small test order or sampling project before committing to bulk",
  ];

  const faqs = [
    {
      q: "How do I know if a manufacturer is legitimate?",
      a: "Legitimate manufacturers can provide physical samples, a verifiable business address, references from existing clients, and documented QC processes. Be cautious of manufacturers who operate purely online with no verifiable physical presence, offer suspiciously low pricing, or are unwilling to provide references.",
    },
    {
      q: "Should I visit a factory in person?",
      a: "In-person factory visits are valuable for high-volume or long-term relationships. For first engagements or smaller volumes, a production management partner with on-the-ground presence in the manufacturing country serves a similar function - providing physical oversight without requiring brand travel.",
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

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing & Supplier Selection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Find a Reliable{" "}
            <span className="italic font-medium text-[#2D5016]">Clothing Manufacturer.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Finding a reliable manufacturing partner involves knowing where to look and how to evaluate what you find. This guide covers five real methods - with honest pros and cons for each.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* 5 methods */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Where to Look</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">5 Methods for Finding Manufacturers</h2>
          <div className="space-y-8">
            {sources.map((source, i) => (
              <div key={i} className="p-6 lg:p-10 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-3xl font-light text-[#E5DDD3] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mt-1">{source.method}</h3>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-5 ml-10">{source.description}</p>
                <div className="ml-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5016] mb-2">Advantages</p>
                    <ul className="space-y-1.5">
                      {source.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#6B6560]">
                          <span className="text-[#2D5016] mt-0.5 shrink-0">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-2">Limitations</p>
                    <ul className="space-y-1.5">
                      {source.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#6B6560]">
                          <span className="text-[#C8A882] mt-0.5 shrink-0"> - </span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation steps */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Once You Have a Lead</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">7 Steps to Evaluate a Manufacturer</h2>
          <div className="space-y-3">
            {evaluationSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-[#2A2A2A] border border-[#3A3A3A]">
                <span className="font-display text-2xl font-light text-[#C8A882] shrink-0 w-6">{i + 1}</span>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/clothing-manufacturer-vs-sourcing-agent", label: "Manufacturer vs Sourcing Agent" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Skip the search. Work with Fenalt.</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt connects brands with audited partner micro-factories in Dhaka, Bangladesh - with full production oversight from sampling to export.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
