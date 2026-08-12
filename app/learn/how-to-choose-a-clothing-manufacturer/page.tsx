import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose a Clothing Manufacturer for a New Fashion Brand",
  description:
    "A practical decision guide for fashion brands evaluating clothing manufacturers — the criteria that matter, the questions to ask, and the warning signs to avoid.",
  alternates: { canonical: "https://fenalt.com/learn/how-to-choose-a-clothing-manufacturer" },
  openGraph: {
    title: "How to Choose a Clothing Manufacturer for a New Fashion Brand",
    description: "A practical decision guide for fashion brands evaluating clothing manufacturers — the criteria that matter, the questions to ask, and the warning signs to avoid.",
    url: "https://fenalt.com/learn/how-to-choose-a-clothing-manufacturer",
  },
};

export default function HowToChooseAClothingManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Choose a Clothing Manufacturer for a New Fashion Brand",
    description: "Decision guide for evaluating and selecting a clothing manufacturer.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-choose-a-clothing-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Choose a Clothing Manufacturer", item: "https://fenalt.com/learn/how-to-choose-a-clothing-manufacturer" },
    ],
  };

  const criteria = [
    {
      title: "Product Category Match",
      body: "Manufacturers typically specialise. A factory excellent at heavyweight fleece hoodies may have limited capability for woven denim or technical activewear. Verify the manufacturer has genuine experience with your specific product type — not just a claim on their website.",
      importance: "Essential",
    },
    {
      title: "MOQ Compatibility",
      body: "A manufacturer whose minimum order quantity is 1,000 units per style is not a suitable partner for a 100-unit capsule launch. Confirm that the manufacturer's MOQ structure is compatible with your current production volume — not just your aspirational future volume.",
      importance: "Essential",
    },
    {
      title: "Sample Quality & Communication",
      body: "Request a first sample before committing to bulk production. How the manufacturer communicates during sampling — response time, attention to tech pack detail, willingness to address revisions — is a strong predictor of how they will perform during bulk production.",
      importance: "Essential",
    },
    {
      title: "Quality Control Process",
      body: "Ask specifically: what is the QC process? Who conducts inspections, and at which production stages? A manufacturer with documented in-line and pre-shipment inspection procedures is meaningfully different from one that relies on end-of-line spot checks.",
      importance: "High",
    },
    {
      title: "Production Timeline Honesty",
      body: "Ask for realistic lead times — including sampling rounds, fabric procurement, and production. Be cautious of manufacturers who promise unusually short timelines without qualification. An honest manufacturer gives you a realistic window; an unreliable one tells you what they think you want to hear.",
      importance: "High",
    },
    {
      title: "Transparency on Subcontracting",
      body: "Some manufacturers accept orders and then subcontract production to third-party factories without your knowledge. Ask directly whether they own or operate the production facility, or coordinate with partner factories. This affects quality control and ethical accountability.",
      importance: "High",
    },
    {
      title: "References or Verifiable Client Portfolio",
      body: "A reputable manufacturer will have worked with comparable brands and be able to provide verifiable references or examples of their work. Be cautious of manufacturers who refuse to provide references or show work.",
      importance: "Medium",
    },
    {
      title: "Pricing Clarity",
      body: "A quote should be detailed: per-unit cost at your MOQ, sampling fee, packaging cost, freight terms (FOB or DDP). Vague lump-sum quotes that don't break down components make cost comparison impossible and create disputes later.",
      importance: "Medium",
    },
  ];

  const redFlags = [
    "Promises an unrealistically fast timeline without conditions",
    "Cannot or will not show previous work or provide references",
    "Claims certifications (GOTS, WRAP, OEKO-TEX, etc.) without documentation",
    "Requires full payment upfront before any sample is produced",
    "Refuses to work from your tech pack — insists on their own templates without clear reason",
    "Communication is delayed, vague, or evasive during the enquiry stage",
    "Cannot explain their quality control process in specific terms",
    "Offers per-unit pricing that appears implausibly low for the product type",
  ];

  const faqs = [
    {
      q: "Should I use the cheapest manufacturer I can find?",
      a: "Price is one factor, not the only factor. A manufacturer with a slightly higher per-unit cost but documented QC, clear communication, and realistic timelines typically delivers better value than the cheapest option. Rework costs, shipping delays, and bulk production defects are all more expensive than a modest per-unit premium.",
    },
    {
      q: "How do I find clothing manufacturers to evaluate?",
      a: "Sourcing agents and production management partners (like Fenalt) provide access to pre-vetted factories without requiring brands to independently identify and audit manufacturing facilities. Trade shows, industry directories, and referrals from other brands are also common sources.",
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
            How to Choose a Clothing Manufacturer{" "}
            <span className="italic font-medium text-[#2D5016]">for a New Fashion Brand.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Choosing the right manufacturing partner is one of the highest-stakes decisions a fashion brand makes. This guide covers the eight criteria that matter, the red flags to watch for, and how to evaluate options effectively.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* 8 criteria */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Evaluation Framework</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">8 Criteria for Evaluating a Clothing Manufacturer</h2>
          <div className="space-y-5">
            {criteria.map((c, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                  <span className="font-display text-3xl font-light text-[#E5DDD3] shrink-0 leading-none mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="font-display text-xl font-medium text-[#1A1A1A]">{c.title}</h3>
                      <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider ${c.importance === "Essential" ? "bg-[#1A1A1A] text-[#FAF9F6]" : c.importance === "High" ? "bg-[#2D5016] text-[#FAF9F6]" : "bg-[#E5DDD3] text-[#6B6560]"}`}>{c.importance}</span>
                    </div>
                    <p className="text-sm text-[#6B6560] leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Warning Signs</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">Red Flags to Watch For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {redFlags.map((flag, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
                <span className="text-[#C8A882] mt-0.5 shrink-0 text-lg">⚠</span>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{flag}</p>
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

      {/* Checklist callout */}
      <section className="py-16 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="p-8 lg:p-10 bg-[#FAF9F6] border border-[#E5DDD3]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-3">Free Resource</p>
            <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-3">Get the Due Diligence Checklist</h3>
            <p className="text-sm text-[#6B6560] leading-relaxed mb-6">A structured checklist of questions to ask and criteria to verify before committing to a manufacturing partner.</p>
            <Link href="/learn/clothing-manufacturer-due-diligence-checklist" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D5016] hover:text-[#1A1A1A] transition-colors">
              View Due Diligence Checklist <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturing Partner" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
              { href: "/learn/how-to-find-a-reliable-clothing-manufacturer", label: "How to Find a Reliable Clothing Manufacturer" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Work with a pre-vetted manufacturing partner</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt connects brands with audited independent micro-factories in Dhaka — with transparent production oversight from day one.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
