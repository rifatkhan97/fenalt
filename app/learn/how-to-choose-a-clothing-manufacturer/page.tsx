import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose a Clothing Manufacturer for a New Fashion Brand",
  description:
    "A practical decision guide for fashion brands evaluating clothing manufacturers - the criteria that matter, the questions to ask, the red flags to avoid, and how to make the right choice.",
  alternates: { canonical: "https://fenalt.com/learn/how-to-choose-a-clothing-manufacturer" },
  openGraph: {
    title: "How to Choose a Clothing Manufacturer for a New Fashion Brand",
    description: "A practical decision guide for fashion brands evaluating clothing manufacturers - the criteria that matter, the questions to ask, the red flags to avoid, and how to make the right choice.",
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
      body: "Manufacturers typically specialise. A factory excellent at heavyweight fleece hoodies may have limited capability for woven denim or technical activewear. Verify the manufacturer has genuine experience with your specific product type - not just a claim on their website. Request samples or portfolio evidence from comparable product categories. Category mismatch is one of the most common causes of unexpected quality problems.",
      importance: "Essential",
    },
    {
      title: "MOQ Compatibility",
      body: "A manufacturer whose minimum order quantity is 1,000 units per style is not a suitable partner for a 100-unit capsule launch, regardless of quality. Confirm that the manufacturer's MOQ structure is compatible with your current production volume - not your aspirational future volume. Some factories have lower MOQs for returning clients or when combining multiple styles, so always clarify whether per-style or total MOQ thresholds apply.",
      importance: "Essential",
    },
    {
      title: "Sample Quality & Communication During Sampling",
      body: "Request a first sample before committing to bulk production. The sampling phase reveals how a manufacturer interprets technical documentation, handles feedback, and manages revisions. Response time, attention to tech pack detail, and willingness to address revision notes are strong predictors of how the manufacturer will perform during bulk production. A manufacturer who is difficult to work with during sampling will be more difficult during bulk.",
      importance: "Essential",
    },
    {
      title: "Quality Control Process",
      body: "Ask specifically: what is the QC process and who conducts inspections? At which production stages do checks occur? A manufacturer with documented in-line and pre-shipment inspection procedures is meaningfully different from one that relies on end-of-line spot checks. Ask whether they retain a golden sample during bulk production, and what happens if a defect rate fails the AQL threshold. Specific answers indicate real systems.",
      importance: "High",
    },
    {
      title: "Production Timeline Honesty",
      body: "Ask for realistic lead times - including sampling rounds, fabric procurement, and bulk production. Be cautious of manufacturers who promise unusually short timelines without qualification. An honest manufacturer gives you a realistic window with caveats; an unreliable one tells you what they think you want to hear. Timeline honesty is one of the strongest predictors of how a manufacturing partner behaves under pressure.",
      importance: "High",
    },
    {
      title: "Transparency on Subcontracting",
      body: "Some manufacturers accept orders and then subcontract production to third-party factories without your knowledge. Ask directly whether they own or operate the production facility, or coordinate with partner factories. Subcontracting is not inherently problematic - but it should be disclosed, and the subcontracted facility should be verifiable. Undisclosed subcontracting affects quality oversight and ethical accountability.",
      importance: "High",
    },
    {
      title: "References or Verifiable Client Portfolio",
      body: "A reputable manufacturer will have worked with comparable brands and be able to provide verifiable references or examples of their work in your product category. Ask for two or three brand references and follow up. A manufacturer who refuses to provide references or show work samples has either very limited experience or concerns about what references might reveal.",
      importance: "Medium",
    },
    {
      title: "Pricing Clarity",
      body: "A quote should be detailed: per-unit cost at your MOQ, sampling fee, packaging cost, shipping terms (FOB or DDP), and what additional services are included. Vague lump-sum quotes that don't break down components make cost comparison impossible and create disputes later. Always ask what is included in the quoted price - and what will be invoiced separately.",
      importance: "Medium",
    },
  ];

  const redFlags = [
    "Promises an unrealistically fast timeline without qualification or caveats",
    "Cannot or will not show previous work or provide client references",
    "Claims certifications (GOTS, WRAP, OEKO-TEX, etc.) without being able to provide documentation",
    "Requires full payment upfront before any sample is produced",
    "Refuses to work from your tech pack - insists on their own templates without explanation",
    "Communication is delayed, vague, or evasive during the initial enquiry stage",
    "Cannot explain their quality control process in specific, concrete terms",
    "Offers per-unit pricing that appears implausibly low for the product type at your stated MOQ",
    "Will not disclose whether work is subcontracted to third-party facilities",
    "Pushes urgently for an order commitment before sampling has begun",
  ];

  const questionsToAsk = [
    "What is your experience manufacturing [your specific product category]? Can you show examples?",
    "What is your minimum order quantity per style, and does that change for returning clients or multi-style orders?",
    "What is your sampling process and typical timeline from tech pack receipt to first sample?",
    "What is your quality control process? Who conducts inspections, and at which stages?",
    "Do you own your production facility or coordinate with partner factories? If partner factories, are you willing to disclose them?",
    "What is your process for handling defects found at pre-shipment inspection?",
    "Can you provide two or three brand references from comparable product categories?",
  ];

  const faqs = [
    {
      q: "Should I use the cheapest manufacturer I can find?",
      a: "Price is one factor, not the only factor. A manufacturer with a slightly higher per-unit cost but documented QC, clear communication, and realistic timelines typically delivers better value than the cheapest option. Rework costs, shipping delays, and bulk production defects are all more expensive than a modest per-unit premium at sampling stage. Optimise for value and reliability, not for lowest initial cost.",
    },
    {
      q: "How do I find clothing manufacturers to evaluate?",
      a: "Sourcing agents and production management partners (like Fenalt) provide access to pre-vetted factories without requiring brands to independently identify and audit manufacturing facilities. Trade shows (Première Vision, Magic, Bangladesh garment industry events), industry directories (Maker's Row, Sewport), and referrals from other brands are also common sources. Always verify any manufacturer independently before committing.",
    },
    {
      q: "How many manufacturers should I approach before choosing one?",
      a: "For a first collection, it is generally useful to brief two or three manufacturers and compare their responses, quotes, and communication quality. Briefing more than five without a strong reason adds complexity without proportionally better outcomes. Focus on depth of evaluation - how thoroughly you assess each candidate - rather than breadth of options.",
    },
    {
      q: "Is it better to choose a manufacturer in a specific country?",
      a: "Country selection should follow product category, quality requirements, and volume. Bangladesh is one of the world's leading producers for knitted cotton apparel (t-shirts, hoodies, sweatshirts) and woven garments, with strong price competitiveness at mid to high quality tiers. Portugal, Turkey, and Eastern Europe offer European production with shorter freight lead times and REACH compliance advantages for EU-market brands. The right country depends on your specific product.",
    },
    {
      q: "How do I evaluate a manufacturer I can't visit in person?",
      a: "Request a video call from the factory floor. Ask for high-resolution photos of the facility, machinery, and sample room. Order a sample before any bulk commitment. Request references from other brands who have worked with them. If possible, engage a local QC agent or production management partner (with physical presence in the manufacturing country) to conduct a factory audit on your behalf.",
    },
    {
      q: "When is it appropriate to place a bulk order with a new manufacturer?",
      a: "Place a bulk order only after completing a full sampling cycle - including at least one revised fit sample and a pre-production sample approved in writing. Never commit to bulk before seeing a sample made from the actual production fabric, by the actual production facility. Even if the manufacturer has strong references, the PP sample sign-off is the non-negotiable prerequisite to bulk commitment.",
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
            Choosing the right manufacturing partner is one of the highest-stakes decisions a fashion brand makes. This guide covers the eight criteria that matter, the ten red flags to watch for, and the seven questions to ask.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
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

      {/* Questions to ask */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Due Diligence</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">7 Questions to Ask Every Manufacturer</h2>
          <div className="space-y-3">
            {questionsToAsk.map((q, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#F2EFE9] border border-[#E5DDD3]">
                <span className="font-display text-xl font-light text-[#C8A882] shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Warning Signs</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">10 Red Flags to Watch For</h2>
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

      {/* Due diligence checklist callout */}
      <section className="py-16 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="p-8 lg:p-10 bg-[#FAF9F6] border border-[#E5DDD3]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-3">Related Resource</p>
            <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-3">Get the Full Due Diligence Checklist</h3>
            <p className="text-sm text-[#6B6560] leading-relaxed mb-6">A structured checklist of criteria to verify and questions to ask before committing to a manufacturing partner.</p>
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
              { href: "/learn/what-makes-a-good-apparel-manufacturing-partner", label: "What Makes a Good Manufacturing Partner?" },
              { href: "/learn/build-long-term-relationship-clothing-manufacturer", label: "Build a Long-Term Manufacturer Relationship" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Work with a pre-vetted manufacturing partner</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt connects brands with audited independent micro-factories in Dhaka - with transparent production oversight from day one.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
