import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Find a Reliable Clothing Manufacturer",
  description:
    "A practical guide to finding a reliable clothing manufacturer - where to look, how to evaluate options, and what distinguishes a trustworthy manufacturing partner.",
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
    mainEntityOfPage: "https://fenalt.com/learn/how-to-find-a-reliable-clothing-manufacturer",
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
      method: "1. On-the-Ground Production Liaison & Sourcing Managers",
      description: "A dedicated production management firm with an active team in a major manufacturing hub (such as Dhaka, Bangladesh) provides direct access to pre-vetted micro-factories - eliminating unverified online supplier risks.",
      pros: ["Pre-vetted audited factory networks", "On-the-ground QC inspection oversight", "Native language communication & local bargaining", "Protects brand against subcontractor ghosting"],
      cons: ["Service fee integrated into quote", "Requires relying on liaison's vetting protocol"],
    },
    {
      method: "2. Industry Apparel Trade Shows & Sourcing Expos",
      description: "Major international trade expos (Magic Las Vegas, Texworld Apparel Sourcing, Première Vision, Bangladesh Denim Expo) allow brand founders to meet factory representatives in person and inspect physical sample racks.",
      pros: ["Face-to-face founder & factory owner contact", "Large collection of suppliers in one venue", "Physical garment sample quality evaluation"],
      cons: ["High travel and admission costs", "Exhibition booth quality does not guarantee production quality"],
    },
    {
      method: "3. Curated B2B Manufacturing Directories",
      description: "Online directories list manufacturers by category and geography. Use directories for initial discovery, but never issue purchase orders without independent physical sample evaluation and third-party audits.",
      pros: ["Searchable global factory databases", "No initial travel required"],
      cons: ["Unverified self-reported directory listings", "High risk of middleman brokers claiming direct factory ownership"],
    },
    {
      method: "4. Peer Brand Referrals & Industry Networks",
      description: "Non-competing fashion brand founders operating at similar scale provide the most trustworthy factory recommendations. Industry incubator groups and founder Slack communities facilitate these introductions.",
      pros: ["Real-world operational track record", "Transparent feedback on lead times and communication"],
      cons: ["Factories may be at capacity and reject small orders", "Founders may protect competitive manufacturing secrets"],
    },
    {
      method: "5. Targeted LinkedIn Sourcing & Direct Outreach",
      description: "Searching for verified Merchandising Directors, Factory Owners, and Garment Technologists on LinkedIn enables direct inquiry. However, all direct leads require rigorous third-party due diligence.",
      pros: ["Access to factories not listed on public directories", "Direct founder-to-executive communication"],
      cons: ["Zero pre-vetting or credential verification", "Time-intensive due diligence process"],
    },
  ];

  const evaluationSteps = [
    "Request physical benchmark sample garments of past production before discussing custom tech packs",
    "Verify MOQ tiers, sampling lead times, and FOB unit pricing in writing under formal signed quotation terms",
    "Ask detailed technical questions about their in-house QC process, needle detection, and AQL standards",
    "Confirm physical factory location and verify whether production occurs in-house or via subcontractors",
    "Request client references from comparable fashion brands and follow up directly",
    "Evaluate communication response speed and technical detail during initial sampling inquiries",
    "Execute a paid pre-production sample run before issuing bulk fabric deposit payments",
  ];

  const faqs = [
    {
      q: "How do I verify if a clothing manufacturer is legitimate?",
      a: "Legitimate apparel manufacturers provide physical sample swatches, verifiable physical factory addresses, third-party audit certificates (BSCI, WRAP, OEKO-TEX), client references, and written itemized FOB quotes.",
    },
    {
      q: "Should a new fashion brand visit overseas factories in person?",
      a: "In-person factory visits are beneficial for high-volume orders. However, for initial trial drops, partnering with a Dhaka-based liaison team with on-the-ground QC engineers provides identical operational protection without travel costs.",
    },
    {
      q: "What is the biggest mistake brands make when searching for manufacturers?",
      a: "Choosing a factory solely based on the lowest quoted unit price. Suspiciously cheap quotes usually hide poor-quality stock fabrics, un-checked measurements, and delayed shipping lead times.",
    },
    {
      q: "How many manufacturers should I contact before choosing one?",
      a: "Evaluate 3 to 5 manufacturers or sourcing partners. Compare their sampling lead times, MOQ flexibility, physical sample finishing, communication clarity, and payment milestone terms.",
    },
    {
      q: "What credentials should a reliable apparel manufacturer possess?",
      a: "Look for factories with ISO 9001 quality management systems, ANSI/ASQ Z1.4 AQL 2.5 inspection compliance, conveyor needle detection equipment, and social compliance certifications (BSCI, SEDEX, WRAP).",
    },
    {
      q: "How does Fenalt simplify finding a reliable manufacturer in Bangladesh?",
      a: "Fenalt operates as your on-the-ground production management partner in Dhaka - providing instant access to audited partner micro-factories, pre-screened fabric mills, and transparent AQL 2.5 quality control.",
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
            How to Find a Reliable{" "}
            <span className="italic font-medium text-[#2D5016]">Clothing Manufacturer.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Finding a reliable manufacturing partner involves knowing where to look and how to evaluate what you find. This guide covers five real methods - with honest pros and cons for each.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Search size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Strategic Discovery</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Finding a reliable factory requires <strong className="font-medium">rigorous evaluation beyond online marketing claims</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            The global garment manufacturing landscape offers thousands of options, but quality, lead time reliability, and communication vary drastically. Establishing a dependable supply chain requires leveraging structured sourcing channels, executing multi-step factory due diligence, and establishing clear technical expectations prior to issuing deposits.
          </p>
        </div>
      </section>

      {/* 5 Methods */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Where to Look</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Methods for Finding Manufacturers</h2>
          <div className="space-y-8">
            {sources.map((source, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-2xl font-medium text-[#FAF9F6] mb-3">{source.method}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-5">{source.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] p-4 border border-[#333333]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-2">Advantages</p>
                    <ul className="space-y-1.5">
                      {source.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-[#E5DDD3]">
                          <span className="text-[#2D5016] font-bold shrink-0">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 border border-[#333333]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9B948E] mb-2">Limitations</p>
                    <ul className="space-y-1.5">
                      {source.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-[#E5DDD3]">
                          <span className="text-[#C8A882] shrink-0">•</span> {con}
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

      {/* 7 Evaluation Steps */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Verification Protocol</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">7 Steps to Evaluate a Manufacturer</h2>
          <div className="space-y-4">
            {evaluationSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#F2EFE9] border border-[#E5DDD3]">
                <span className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                <p className="text-sm text-[#1A1A1A] leading-relaxed pt-1 font-medium">{step}</p>
              </div>
            ))}
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
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturer" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
              { href: "/learn/direct-manufacturer-vs-sourcing-agent", label: "Direct Manufacturer vs Sourcing Agent" },
              { href: "/apparel-production-management", label: "Fenalt Production Sourcing Services in Dhaka" },
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
