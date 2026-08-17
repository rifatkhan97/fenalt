import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Evaluate an Overseas Clothing Manufacturer",
  description:
    "A due diligence guide for evaluating overseas clothing manufacturers - what to verify, how to assess quality and reliability from a distance, and what red flags to look for.",
  alternates: { canonical: "https://www.fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer" },
  openGraph: {
    title: "How to Evaluate an Overseas Clothing Manufacturer",
    description: "A due diligence guide for evaluating overseas clothing manufacturers - what to verify, how to assess quality and reliability from a distance.",
    url: "https://www.fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer",
  },
};

export default function HowToEvaluateOverseasManufacturerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Evaluate an Overseas Clothing Manufacturer",
    description: "Guide to evaluating overseas clothing manufacturers - verification, quality assessment, and red flags.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer",
    mainEntityOfPage: "https://www.fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Evaluate an Overseas Manufacturer", item: "https://www.fenalt.com/learn/how-to-evaluate-an-overseas-clothing-manufacturer" },
    ],
  };

  const evaluationMethods = [
    {
      title: "1. Request Physical Benchmark Samples of Existing Client Work",
      body: "Ask to see physical sample garments produced for comparable fashion brands. Audit stitching density (SPI), seam elasticity, label attachment, and fabric hand-feel. Physical sample evaluation reveals true operational capability independent of website photos.",
      difficulty: "Essential",
    },
    {
      title: "2. Verify Business Identity & Factory License Credentials",
      body: "Confirm the manufacturer operates a registered business entity with a physical factory address in a major apparel hub (e.g. Dhaka). Request company trade licenses, tax IDs, and physical factory floor video walkthroughs.",
      difficulty: "Essential",
    },
    {
      title: "3. Execute a Paid Pre-Production Sampling Project First",
      body: "Never issue a bulk deposit without first completing a paid sampling project. Sampling tests their communication speed, tech pack comprehension, pattern making accuracy, and revision turnaround under real conditions.",
      difficulty: "Essential",
    },
    {
      title: "4. Test Communication Speed & Technical Responsiveness",
      body: "Evaluate how the factory responds during initial inquiries. Prompt responses, specific technical answers, and asking intelligent clarifying questions about your tech pack indicate strong operational maturity.",
      difficulty: "High Value",
    },
    {
      title: "5. Request Verifiable Client References from Comparable Brands",
      body: "Ask for references from existing brand clients operating at similar order volumes. Contact these founders directly to ask about on-time delivery, defect rates, and communication during production delays.",
      difficulty: "High Value",
    },
    {
      title: "6. Audit Quality Control Systems & AQL Compliance",
      body: "Inquire about their internal QC protocols. Ask specifically about raw fabric 4-point checks, in-line Traffic Light inspections, pre-shipment ANSI/ASQ Z1.4 AQL 2.5 FRI audits, and conveyor needle scanning.",
      difficulty: "High Value",
    },
    {
      title: "7. Audit Commercial Deposit Structure & Incoterms Shipping",
      body: "Ensure quotes specify standard deposit structures (30% upon PO / 70% post-passed FRI inspection) and explicit Incoterms (FOB Chittagong or DDP), avoiding 100% upfront wire payment demands.",
      difficulty: "High Value",
    },
    {
      title: "8. Partner with an On-the-Ground Local Technical Liaison",
      body: "Engage an on-the-ground production management partner in Dhaka (like Fenalt) to conduct physical factory audits, manage line-side QC, and verify needle detection scanning in person.",
    },
  ];

  const challenges = [
    { challenge: "Geographic Distance & Time-Zones", response: "Time-zone gaps require structured digital communication tools and daily photo logs rather than casual phone calls." },
    { challenge: "Information Asymmetry", response: "Factories know far more about their internal capacity than remote brand founders. Local liaison teams bridge this knowledge gap." },
    { challenge: "Unverified Marketing Claims", response: "Website photos can easily be copied. Physical sample swatches, video factory tours, and third-party audit reports provide concrete proof." },
    { challenge: "Technical Apparel Translation", response: "Technical garment terms must be precise. Using standardized POM spec tables and ISO 4915 stitch codes avoids language confusion." },
  ];

  const faqs = [
    {
      q: "Should I visit an overseas clothing factory before placing a bulk order?",
      a: "Factory visits are valuable for high-volume orders (5,000+ units). For initial drops or startup collections, working with an on-the-ground liaison team in Dhaka provides full physical factory oversight without travel expenses.",
    },
    {
      q: "How does Fenalt evaluate partner micro-factories in Bangladesh?",
      a: "Fenalt's Dhaka technical team conducts on-site factory audits - verifying machinery, working conditions, BSCI/WRAP compliance, needle detection equipment, and AQL 2.5 quality control standards.",
    },
    {
      q: "What is the biggest risk when sourcing clothing overseas?",
      a: "Unverified third-party subcontracting. If a factory accepts an order and secretly passes it to an un-audited shadow facility, quality plummets and delivery lead times collapse.",
    },
    {
      q: "How can I evaluate fabric quality from an overseas manufacturer?",
      a: "Request physical fabric swatch cards and lab-dip color strike-offs before sampling. Ask for mill lab test reports covering GSM weight, fiber composition, and wash shrinkage %.",
    },
    {
      q: "What payment method is safest for overseas apparel production?",
      a: "International wire transfers (T/T) under standard 30% deposit / 70% post-FRI passed inspection terms, or irrevocable Letter of Credit (L/C) for large bulk orders.",
    },
    {
      q: "How do I ensure an overseas factory respects my intellectual property?",
      a: "Require the manufacturer to sign an enforceable NNN (Non-disclosure, Non-use, Non-circumvention) agreement governed by the manufacturing country's legal jurisdiction before sharing tech packs.",
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
            How to Evaluate an Overseas{" "}
            <span className="italic font-medium text-[#2D5016]">Clothing Manufacturer.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Evaluating a manufacturer you cannot visit requires more rigor, not less. This guide covers eight evaluation methods that work from a distance - and the four unique challenges of overseas sourcing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Remote Due Diligence</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Evaluating overseas suppliers requires <strong className="font-medium">verifying physical evidence rather than trusting marketing websites</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Managing overseas production from a distance presents unique operational challenges. By requesting physical benchmark samples, verifying trade licenses, executing small sampling runs, and deploying on-the-ground quality control oversight in Dhaka, fashion brands build secure, transparent global supply chains.
          </p>
        </div>
      </section>

      {/* 4 Challenges */}
      <section className="py-16 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Challenges</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Why Overseas Evaluation Is Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <div key={i} className="p-6 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{c.challenge}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{c.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Methods */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Evaluation Methods</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Ways to Evaluate an Overseas Manufacturer</h2>
          <div className="space-y-6">
            {evaluationMethods.map((method, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center text-xs font-bold shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{method.title}</h3>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">{method.body}</p>
                  </div>
                </div>
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
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Manufacturer" },
              { href: "/learn/direct-manufacturer-vs-sourcing-agent", label: "Direct Manufacturer vs Sourcing Agent" },
              { href: "/apparel-production-management", label: "Fenalt Overseas Production Management in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Get on-the-ground oversight in Bangladesh</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka operations team provides the physical factory oversight and quality control that remote evaluation cannot replicate.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
