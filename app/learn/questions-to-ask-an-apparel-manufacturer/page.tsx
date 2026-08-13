import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Questions to Ask an Apparel Manufacturer Before Working Together",
  description:
    "Before committing to a clothing manufacturer, ask these technical questions. A practical checklist covering capabilities, quality control, lead times, pricing, and accountability.",
  alternates: { canonical: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer" },
  openGraph: {
    title: "Questions to Ask an Apparel Manufacturer Before Working Together",
    description: "Before committing to a clothing manufacturer, ask these technical questions. A practical checklist covering capabilities, quality control, lead times, pricing, and accountability.",
    url: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer",
  },
};

export default function QuestionsToAskManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Questions to Ask an Apparel Manufacturer Before Working Together",
    description: "Checklist of questions to ask clothing manufacturers before committing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer",
    mainEntityOfPage: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Questions to Ask a Manufacturer", item: "https://fenalt.com/learn/questions-to-ask-an-apparel-manufacturer" },
    ],
  };

  const questionCategories = [
    {
      category: "1. Production Capabilities & Fabrics",
      icon: "01",
      questions: [
        { q: "What garment categories do you specialize in, and can we see physical benchmark samples?", why: "Establishes whether their true operational expertise matches your specific product category." },
        { q: "What is your minimum order quantity (MOQ) per style and per colorway?", why: "Critical for validating first-collection viability against startup production budgets." },
        { q: "What custom GSM weights and fabric knits can you source or custom mill?", why: "Uncovers whether they rely on open-market stock fabrics or offer custom mill dyeing." },
        { q: "Do you manufacture in-house or subcontract out to partner micro-factories?", why: "Reveals visibility and control over the actual sewing line environment." },
      ],
    },
    {
      category: "2. Sampling & Technical Development",
      icon: "02",
      questions: [
        { q: "What is your sample turnaround lead time from tech pack receipt to sample dispatch?", why: "Establishes realistic sampling schedules (typically 10 to 14 days)." },
        { q: "How do you handle sample fit revisions and what is the fee per revision round?", why: "Clarifies whether sample revisions are included or incur extra surcharges." },
        { q: "Do you work strictly from brand tech packs, or do you assist with CAD pattern making?", why: "Determines whether technical pattern development support is available." },
      ],
    },
    {
      category: "3. Quality Control & AQL Standards",
      icon: "03",
      questions: [
        { q: "What is your quality inspection process during and after production?", why: "Distinguishes systematic inline QC from casual end-of-line spot checks." },
        { q: "What statistical AQL sampling standard and POM measurement tolerances do you enforce?", why: "Establishes standard compliance (ANSI/ASQ Z1.4 AQL 2.5 with ±1.0cm tolerances)." },
        { q: "Do you pass 100% of finished packed garments through conveyor needle detection?", why: "Mandatory safety verification to ensure zero metal needle fragments remain." },
      ],
    },
    {
      category: "4. Production Lead Times & Logistics",
      icon: "04",
      questions: [
        { q: "What is your bulk production turnaround time after Golden Sample approval?", why: "Must be qualified based on fabric milling - 4 to 6 weeks is standard for custom knits." },
        { q: "What Incoterms shipping terms do you quote (FOB Chittagong, EXW, or DDP)?", why: "Defines exactly who manages export customs, freight, and door delivery." },
      ],
    },
    {
      category: "5. Pricing, Quoting & Payment Terms",
      icon: "05",
      questions: [
        { q: "Do you provide fully itemized FOB quotes breaking down fabric yield, CMT labor, and trims?", why: "Un-itemized lump-sum quotes prevent price auditing and cost optimization." },
        { q: "What are your commercial payment milestones for deposit and balance clearance?", why: "Standard terms: 30–50% deposit upon PO / balance upon passed AQL 2.5 FRI inspection." },
      ],
    },
  ];

  const faqs = [
    {
      q: "What is the single most important question to ask a new clothing manufacturer?",
      a: "Ask: 'Can you provide physical samples of recent production in my exact product category and provide two brand references I can speak to directly?' Real samples and peer references reveal true capability.",
    },
    {
      q: "What does it mean if a manufacturer gives vague answers about their factory location?",
      a: "Vague location details usually indicate a middleman broker or trading company who does not own production facilities and subcontracts work out to un-audited third-party sewing units.",
    },
    {
      q: "Should I ask about fabric shrinkage and color fastness testing upfront?",
      a: "Yes. Inquire whether the manufacturer performs 4-point raw fabric inspection, lab-dip crocking tests, and wash shrinkage testing before bulk fabric cutting begins.",
    },
    {
      q: "How can I tell if a manufacturer's quoted lead time is realistic?",
      a: "A manufacturer who quotes '2 weeks for 1,000 custom-dyed hoodies' is lying or using stock blanks. Realistic custom production requires 3 weeks for fabric milling/dyeing and 3 weeks for cut-and-sew assembly.",
    },
    {
      q: "Why should I ask if sample fees are credited back against bulk orders?",
      a: "Reputable manufacturers typically charge initial sample fees to cover pattern making and short fabric runs, but credit these fees back to the brand once a bulk PO meeting MOQ thresholds is placed.",
    },
    {
      q: "How does Fenalt answer these due diligence questions for brands in Dhaka?",
      a: "Fenalt provides total operational transparency in Bangladesh - providing itemized FOB quotes, 10–14 day sample lead times, 4–6 week bulk turnarounds, and documented ANSI/ASQ Z1.4 AQL 2.5 quality control.",
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
            Questions to Ask an{" "}
            <span className="italic font-medium text-[#2D5016]">Apparel Manufacturer Before Working Together.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            How a manufacturer answers these technical questions reveals far more than their website marketing. Use this structured checklist to evaluate potential partners before signing purchase orders.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Due Diligence Checklist</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Asking specific technical questions <strong className="font-medium">exposes unvetted brokers and protects brand capital</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Evaluating a clothing manufacturer requires probing into specific operational procedures. By asking structured questions about fabric yields, sample revision costs, in-line AQL quality control, needle detection scanning, and commercial payment milestones, fashion founders eliminate risks before issuing deposits.
          </p>
        </div>
      </section>

      {/* Questions by category */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Question Categories</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Essential Manufacturer Interview Questions</h2>
          <div className="space-y-8">
            {questionCategories.map((cat, ci) => (
              <div key={ci} className="bg-[#262626] border border-[#333333] p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#333333]">
                  <span className="font-display text-3xl font-light text-[#C8A882]">{cat.icon}</span>
                  <h3 className="font-display text-2xl font-medium text-[#FAF9F6]">{cat.category}</h3>
                </div>
                <div className="space-y-6">
                  {cat.questions.map((q, qi) => (
                    <div key={qi} className="p-4 bg-[#1A1A1A] border border-[#333333]">
                      <p className="font-display text-lg font-medium text-[#FAF9F6] mb-2">&ldquo;{q.q}&rdquo;</p>
                      <p className="text-sm text-[#E5DDD3] leading-relaxed"><strong className="text-[#C8A882]">Why Ask:</strong> {q.why}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to interpret responses */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">How to Read Responses</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Patterns That Distinguish Reliable Manufacturers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Transparent Lead Times", good: true, text: "A manufacturer who states 'lead time is 4–6 weeks depending on mill fabric dyeing' is far more honest than one claiming '2 weeks for custom work'." },
              { label: "Specific Quality Protocols", good: true, text: "Detailed descriptions of ANSI/ASQ Z1.4 AQL 2.5 inspections signal high operational maturity compared to vague 'we check quality' statements." },
              { label: "Refusal to Share References", good: false, text: "Unwillingness to provide client references or show physical production samples is a major red flag indicating unverified capability." },
              { label: "Over-Promising Capabilities", good: false, text: "Claims like 'we can make any garment in the world at any price' indicate trading brokers rather than specialized micro-factories." },
            ].map((item, i) => (
              <div key={i} className={`p-6 border ${item.good ? "bg-[#F2EFE9] border-[#2D5016]" : "bg-[#F2EFE9] border-[#C8A882]"}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${item.good ? "text-[#2D5016]" : "text-[#C8A882]"}`}>{item.good ? "✓ Reliable Indicator" : "⚠ Red Flag Warning"}</span>
                </div>
                <h4 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{item.label}</h4>
                <p className="text-sm text-[#6B6560] leading-relaxed">{item.text}</p>
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
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturer" },
              { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
              { href: "/learn/direct-manufacturer-vs-sourcing-agent", label: "Direct Manufacturer vs Sourcing Agent" },
              { href: "/apparel-production-management", label: "Fenalt Production Management Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Have questions for Fenalt?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Submit your project brief and our Dhaka operations team will respond with a detailed, itemized production proposal.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
