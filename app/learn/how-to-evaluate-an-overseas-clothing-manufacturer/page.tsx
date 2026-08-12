import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Evaluate an Overseas Clothing Manufacturer",
  description:
    "A due diligence guide for evaluating overseas clothing manufacturers - what to verify, how to assess quality and reliability from a distance, and what red flags to look for.",
  alternates: { canonical: "https://fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer" },
  openGraph: {
    title: "How to Evaluate an Overseas Clothing Manufacturer",
    description: "A due diligence guide for evaluating overseas clothing manufacturers - what to verify, how to assess quality and reliability from a distance.",
    url: "https://fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer",
  },
};

export default function HowToEvaluateOverseasManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Evaluate an Overseas Clothing Manufacturer",
    description: "Guide to evaluating overseas clothing manufacturers - verification, quality assessment, and red flags.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Evaluate an Overseas Manufacturer", item: "https://fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer" },
    ],
  };

  const evaluationMethods = [
    {
      title: "Request Physical Samples of Existing Work | Not Your Own Designs",
      body: "Ask to see samples of garments the manufacturer has produced for other clients. Evaluate stitching consistency, seam quality, label attachment, measurement accuracy, and overall construction finish. This reveals actual production capability independent of your project.",
      difficulty: "Essential",
    },
    {
      title: "Verify Business Legitimacy",
      body: "Confirm the manufacturer has a verifiable physical address, identifiable named contacts, and a registered business entity. Ask for their company registration number or trade licence reference. Legitimate manufacturers operating at scale are registered businesses with verifiable identities.",
      difficulty: "Essential",
    },
    {
      title: "Start With a Sampling Project | Not a Bulk Order",
      body: "Your first engagement with an overseas manufacturer should be a sampling project. This tests their communication, responsiveness, tech pack comprehension, sample quality, and revision turnaround - all before you commit to bulk production. The cost of a sample round is far less than the cost of a failed bulk order.",
      difficulty: "Essential",
    },
    {
      title: "Test Their Communication Quality During Enquiry",
      body: "How a manufacturer responds during the initial enquiry stage is a reliable predictor of how they will behave during production. Evaluate: response speed, specificity of answers, willingness to answer detailed questions, and whether they ask relevant clarifying questions about your project.",
      difficulty: "High Value",
    },
    {
      title: "Request and Follow Up References",
      body: "A reputable manufacturer will provide client references. Contact those references - a short call or message asking about on-time delivery, communication quality, and how problems were handled provides far more information than any marketing material.",
      difficulty: "High Value",
    },
    {
      title: "Understand Their Subcontracting Policy",
      body: "Ask whether production is conducted in-house or whether they use subcontractor factories. Subcontracting itself is not a red flag - it is common across the industry - but undisclosed subcontracting creates accountability gaps. Know who is actually producing your garments.",
      difficulty: "High Value",
    },
    {
      title: "Assess Their QC Process in Specific Terms",
      body: "Ask: What is your in-line QC process? What sampling methodology do you use for final inspection? What happens when defects are found? A manufacturer with a systematic QC process can explain it specifically. Vague answers ('we check everything') indicate the absence of a systematic process.",
      difficulty: "High Value",
    },
    {
      title: "Use a Production Management Partner for On-the-Ground Verification",
      body: "For brands that cannot visit overseas factories, a production management firm with physical presence in the manufacturing country provides the most reliable form of ongoing oversight. This replaces the information asymmetry of remote evaluation with direct, on-the-ground visibility.",
      difficulty: "Recommended for Remote Brands",
    },
  ];

  const challenges = [
    { challenge: "Distance", response: "Time zone differences, language barriers, and the inability to physically inspect production require systematic processes rather than trust-based relationships." },
    { challenge: "Information Asymmetry", response: "A manufacturer knows far more about their own capabilities and limitations than a brand conducting remote evaluation. Third-party oversight or production management partners reduce this gap." },
    { challenge: "Verification Difficulty", response: "Claims about certifications, capacity, and capability are difficult to verify remotely. Physical samples and client references are the most reliable verification tools available without a factory visit." },
    { challenge: "Communication Barriers", response: "Technical garment language requires precision. Misunderstandings - through language differences or imprecise communication - are more costly in production than in other industries." },
  ];

  const faqs = [
    {
      q: "Should I visit a factory before placing an order?",
      a: "Factory visits are valuable, particularly for high-volume or long-term relationships. For initial or smaller orders, the sampling process provides substantial evaluation data without requiring travel. A production management partner with on-the-ground presence in Bangladesh or your target country can conduct factory verification on your behalf.",
    },
    {
      q: "How does Fenalt verify partner factories?",
      a: "Fenalt's Dhaka-based operations team has physical presence in Bangladesh - enabling direct factory floor access, sample review, in-line inspection, and pre-shipment quality auditing that remote brand evaluation cannot replicate.",
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
            How to Evaluate an Overseas{" "}
            <span className="italic font-medium text-[#2D5016]">Clothing Manufacturer.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Evaluating a manufacturer you cannot visit requires more rigour, not less. This guide covers the eight evaluation methods that work from a distance - and the four unique challenges of overseas sourcing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Challenges</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Why Overseas Evaluation Is Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{c.challenge}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{c.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 methods */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Evaluation Methods</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Ways to Evaluate an Overseas Manufacturer</h2>
          <div className="space-y-5">
            {evaluationMethods.map((method, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-display text-3xl font-light text-[#E5DDD3] shrink-0 w-8 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="font-display text-lg font-medium text-[#FAF9F6]">{method.title}</h3>
                      <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider shrink-0 ${method.difficulty === "Essential" ? "bg-[#1A1A1A] text-[#FAF9F6]" : method.difficulty === "High Value" ? "bg-[#2D5016] text-[#FAF9F6]" : "bg-[#C8A882] text-[#1A1A1A]"}`}>{method.difficulty}</span>
                    </div>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">{method.body}</p>
                  </div>
                </div>
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
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Manufacturer Due Diligence Checklist" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/overseas-production-management-apparel", label: "Fenalt: Overseas Production Management" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Get on-the-ground oversight in Bangladesh</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka operations team provides the physical factory oversight that remote evaluation cannot replicate.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
