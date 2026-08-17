import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "What Makes a Good Apparel Manufacturing Partner?",
  description:
    "The qualities that separate a reliable clothing manufacturer from an unreliable one - covering communication, technical skill, quality control, MOQ flexibility, and ethical standards.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/what-makes-a-good-apparel-manufacturing-partner",
  },
  openGraph: {
    title: "What Makes a Good Apparel Manufacturing Partner?",
    description:
      "The qualities that separate a reliable clothing manufacturer from an unreliable one - covering communication, technical skill, quality control, MOQ flexibility, and ethical standards.",
    url: "https://www.fenalt.com/learn/what-makes-a-good-apparel-manufacturing-partner",
  },
};

export default function WhatMakesAGoodApparelManufacturingPartnerPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Makes a Good Apparel Manufacturing Partner?",
    description:
      "A strategic benchmark guide for fashion brand founders evaluating long-term apparel production partners.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/what-makes-a-good-apparel-manufacturing-partner",
    mainEntityOfPage: "https://www.fenalt.com/learn/what-makes-a-good-apparel-manufacturing-partner",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Makes a Good Partner", item: "https://www.fenalt.com/learn/what-makes-a-good-apparel-manufacturing-partner" },
    ],
  };

  const traits = [
    {
      title: "Proactive Communication & Transparency",
      desc: "A good manufacturing partner tells you what is happening before you have to ask. This includes prompt updates on fabric procurement status, alerts when timelines shift, and honest notification of any problems during production - not post-shipment surprises. Response times during sampling are one of the clearest predictors of how a manufacturer will behave during bulk production under pressure.",
    },
    {
      title: "Technical Fluency & Pattern Accuracy",
      desc: "A reliable partner can read a tech pack precisely, identify errors or ambiguities before starting, and produce samples that closely match your specification. They should be able to recommend appropriate fabric weights, construction methods, and trim options for your product category. A manufacturer who ignores your tech pack and defaults to their own templates, without explanation, is a risk.",
    },
    {
      title: "Documented Quality Control Systems",
      desc: "Good partners have formalized QC processes - not ad hoc end-of-line checks. This typically means inline floor audits at multiple production stages, a pre-shipment inspection against AQL sampling standards, measurement tolerance benchmarks matched to the tech pack POM sheet, and a golden sample retained at the factory as the bulk production reference. Ask directly what their process is; vague answers indicate weak systems.",
    },
    {
      title: "MOQ & Commercial Terms Alignment",
      desc: "A manufacturing partner whose minimum order quantities are incompatible with your current volume is the wrong partner for your current stage, regardless of quality. Good partners have transparent itemized quotes (per-unit cost, sampling fee, packaging, shipping terms), reasonable deposit structures, and flexibility to scale as your brand grows. Avoid partners who are evasive about cost breakdowns.",
    },
    {
      title: "Ethical & Labour Standards",
      desc: "A manufacturing partner's labour practices directly reflect on your brand. Minimum requirements include fair and legal wage payment, documented working hours, safe factory conditions, and no use of prohibited labour practices. Independent compliance audits (such as WRAP, BSCI, or similar) from partner facilities provide third-party verification - though buyers should always request and review documentation rather than accepting verbal claims.",
    },
    {
      title: "Sampling Accuracy & Revision Willingness",
      desc: "The sampling phase reveals how a manufacturer interprets instructions and handles feedback. A good partner produces first samples that are close to spec, responds to revision notes with precision rather than defensiveness, and tracks changes systematically across rounds. A poor partner produces consistently misaligned samples while attributing errors to your tech pack rather than their execution.",
    },
    {
      title: "Realistic Timeline Commitments",
      desc: "A reliable manufacturing partner gives you honest production timelines - including caveats about fabric sourcing, factory scheduling, and revision rounds. Manufacturers who consistently promise faster delivery than the production process allows are setting your brand up for disappointment. Timeline honesty is a marker of a professional, experienced partner who understands their own capacity.",
    },
    {
      title: "Scalability & Long-Term Commitment",
      desc: "The best manufacturing relationships grow with your brand. A good partner invests time in understanding your products, retains your approved patterns and golden samples between seasons, and offers continuity across production runs. Short-term transactional manufacturers may produce acceptable first orders but provide diminishing reliability as complexity and volume increase.",
    },
  ];

  const notToConfuseWith = [
    { point: "The cheapest quote", reason: "Low prices often indicate cost-cutting in fabric, labour, or quality control that becomes apparent after bulk delivery." },
    { point: "The fastest promised timeline", reason: "Unrealistic timelines are one of the clearest red flags in manufacturer evaluation. Accurate timelines demonstrate production expertise." },
    { point: "The most impressive website or showroom", reason: "Marketing materials and facility aesthetics do not correlate reliably with production quality or reliability." },
    { point: "Claimed certifications without documentation", reason: "Certifications should be verifiable. Request actual certification documents and check issuing body validity." },
  ];

  const faqs = [
    {
      q: "How can I test a manufacturer's reliability before placing a bulk order?",
      a: "Order a first-fit prototype sample. Evaluate their responsiveness during the tech pack review, the accuracy of the sample against your spec, and how they handle revision feedback. A manufacturer who communicates clearly, produces an accurate first sample, and addresses revisions professionally is demonstrating reliability in the most direct way possible.",
    },
    {
      q: "Is a direct factory better than a managed production partner?",
      a: "Direct factories give you lower per-unit cost and direct control - but require on-site presence or significant remote management expertise. Managed production partners provide local ground supervision, technical oversight, language capability, and quality assurance. For brands new to overseas production or without in-house sourcing expertise, a managed partner typically delivers better outcomes despite a slightly higher cost.",
    },
    {
      q: "How important is the manufacturer's experience in my specific product category?",
      a: "Very important. A factory specialising in knitwear (t-shirts, hoodies) has different equipment, skills, and supplier relationships than one specialising in woven denim or technical outerwear. A manufacturer outside their core category often struggles with construction accuracy and material sourcing. Always confirm category-specific experience with samples or portfolio evidence - not just stated capability.",
    },
    {
      q: "What should I ask about a manufacturer's quality control before committing?",
      a: "Ask specifically: Who conducts QC? At which production stages? What measurement tolerances do they apply? Do they retain a golden sample during bulk production? What is their pre-shipment inspection methodology - random sampling or 100% inspection? Specific answers indicate a real QC system. Vague answers like 'we ensure quality' indicate the absence of one.",
    },
    {
      q: "Does a good manufacturing partner need to be in a specific country?",
      a: "No. What matters is that the partner has demonstrated capability in your product category, accessible quality control oversight (whether through on-site staff or a trusted local management team), and transparent commercial practices. Bangladesh, Portugal, Turkey, and several other countries all host reliable manufacturers across different product categories and price points.",
    },
    {
      q: "What documentation should a reputable manufacturer be able to provide?",
      a: "A reputable manufacturing partner should be able to provide: itemized pricing quotes, sampling timelines, measurement spec sheets, in-line QC audit records, AQL inspection reports, and - if applicable - documentation of any facility compliance audits. Manufacturers who are evasive about documentation are a significant risk.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Manufacturing Fundamentals</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Makes a Good Apparel{" "}
            <span className="italic font-medium text-[#2D5016]">Manufacturing Partner?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A great manufacturing partner is an extension of your team - protecting your brand standards, operational timelines, and product quality. This guide identifies the eight traits that actually matter.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">The Benchmark</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Price per unit is only one variable. A reliable partner delivers <strong className="font-medium">consistency, technical accuracy, and proactive risk reduction</strong> across every production run.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-5">
            <p>
              Most brands evaluate manufacturers primarily on price and perceived speed. These are legitimate considerations, but they are not the most important predictors of whether a manufacturing relationship will succeed over multiple seasons.
            </p>
            <p>
              The characteristics that separate genuinely reliable manufacturing partners from unreliable ones are largely about process - how they communicate, how they handle problems, how they enforce quality, and how they behave when things go wrong. These attributes are observable during the sampling phase, before any bulk order is placed.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Traits */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Partner Qualities</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">8 Characteristics of a Reliable Manufacturing Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traits.map((t, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{t.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not to confuse with */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Common Mistakes</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">What a Good Partner Is Not</h2>
          <p className="text-base text-[#6B6560] leading-relaxed mb-8">
            Several common proxies brands use to evaluate manufacturers are unreliable indicators of actual quality or reliability:
          </p>
          <div className="space-y-4">
            {notToConfuseWith.map((item, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{item.point}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{item.reason}</p>
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
          <div className="space-y-5">
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
              { href: "/learn/warning-signs-of-poor-apparel-manufacturer", label: "Warning Signs of a Poor Apparel Manufacturer" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/clothing-manufacturer-due-diligence-checklist", label: "Clothing Manufacturer Due Diligence Checklist" },
              { href: "/learn/build-long-term-relationship-clothing-manufacturer", label: "How to Build a Long-Term Manufacturer Relationship" },
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

      {/* CTA */}
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Work with a pre-vetted manufacturing partner</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt connects independent labels with audited micro-factories in Dhaka - managing sampling, quality control, and export execution.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
