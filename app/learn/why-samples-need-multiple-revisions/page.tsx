import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Apparel Samples Sometimes Need Multiple Revisions",
  description:
    "Explore the top technical reasons garment samples require multiple revisions - fabric shrinkage, tech pack ambiguities, pattern drafting shifts, wash treatments, and trim calibration.",
  alternates: {
    canonical: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
  },
  openGraph: {
    title: "Why Apparel Samples Sometimes Need Multiple Revisions",
    description:
      "Explore the top technical reasons garment samples require multiple revisions - fabric shrinkage, tech pack ambiguities, pattern drafting shifts, wash treatments, and trim calibration.",
    url: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
  },
};

export default function WhySamplesNeedMultipleRevisionsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Apparel Samples Sometimes Need Multiple Revisions",
    description:
      "A technical explanation of why apparel sampling requires multiple iterations and how brands can reduce revision counts.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
    mainEntityOfPage: "https://fenalt.com/learn/why-samples-need-multiple-revisions",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Why Samples Need Multiple Revisions", item: "https://fenalt.com/learn/why-samples-need-multiple-revisions" },
    ],
  };

  const technicalReasons = [
    {
      title: "1. Fabric Handfeel & Shrinkage Discrepancies",
      desc: "Raw fabric behaves differently in physical construction than on paper. Heavy knits like 450 GSM French Terry or 300 GSM combed cotton stretch, contract, or drape differently under tension than 2D CAD pattern templates anticipate, requiring pattern adjustments.",
    },
    {
      title: "2. Tech Pack Ambiguities & Missing POM Tolerances",
      desc: "When initial tech packs lack detailed point-of-measure (POM) specs, seam allowances, or clear stitch construction notes, sample machinists must interpret design intent. Misinterpretations require revision rounds to re-align with brand expectations.",
    },
    {
      title: "3. 2D Sketch to 3D Fit Model Translation",
      desc: "Evaluating a prototype on a live fit model or calibrated dress form often reveals ergonomic and drape adjustments - such as dropping a shoulder slope by 1.5 cm or widening an armhole - that were not apparent in flat vector drawings.",
    },
    {
      title: "4. Wash Treatments, Garment Dyeing & Softening",
      desc: "Enzyme washes, acid washes, pigment dyeing, and silicone softeners modify yarn structure and cause non-linear fabric shrinkage. Pattern makers must apply empirical wash-shrinkage allowances to cut patterns.",
    },
    {
      title: "5. Custom Trim, Hardware & Ribbing Tension Calibration",
      desc: "Custom heavy-duty zippers, metal eyelets, embroidered patch backings, and ribbing elasticity at cuffs or waistbands interact with body fabric tension, requiring fine-tuning across early sample rounds.",
    },
    {
      title: "6. Calibrating Fit Standards for New Factory Partnerships",
      desc: "When working with a manufacturer for the first time, initial sample rounds establish mutual technical understanding. The factory uses early feedback to calibrate its pattern drafting to your brand's unique fit aesthetic.",
    },
  ];

  const reductionStrategies = [
    {
      title: "Provide Annotated Measurement Worksheets",
      detail: "Always issue feedback with explicit numerical deltas (+/- cm) and flat-lay photos showing tape measure alignment on disputed points of measure.",
    },
    {
      title: "Send Physical Benchmark Reference Garments",
      detail: "Supplying an existing garment that exemplifies your target fit, collar ribbing, or fabric handfeel gives the sample room a tangible standard to replicate.",
    },
    {
      title: "Designate a Single Approval Decision-Maker",
      detail: "Avoid gathering contradictory feedback from multiple internal team members. Consolidate fit notes through one technical lead before submitting revisions.",
    },
    {
      title: "Use Substitute Fabrics for Early Proto Iterations",
      detail: "Validate basic pattern lines and silhouette proportions on quick-turnaround substitute sample fabric before executing final pre-production samples in custom-dyed bulk goods.",
    },
  ];

  const faqs = [
    {
      q: "Does requesting a second sample revision mean the manufacturer is incompetent?",
      a: "No. Requiring 2 to 3 sample revisions for a new custom silhouette is standard industrial practice in apparel manufacturing. Sampling exists specifically to test, refine, and lock in pattern line and fabric performance variables before committing to bulk cutting.",
    },
    {
      q: "How many sample revisions are considered normal for a custom hoodie?",
      a: "Complex streetwear styles - such as heavyweight French Terry hoodies with custom washes, puff printing, or raglan seaming - typically require 2 to 3 revision rounds (Proto, Revised Fit, and Pre-Production Sample) before final sign-off.",
    },
    {
      q: "How can brands minimise sampling revision turnaround times?",
      a: "Submit comprehensive tech packs with complete POM measurement tables, respond to sample deliveries with consolidated written fit notes within 3 to 5 business days, and supply physical reference garments whenever possible.",
    },
    {
      q: "Who pays for extra sample revision rounds?",
      a: "If a revision is caused by a brand design change or spec update, the brand pays the standard sampling fee for the revised unit. If a sample strays significantly from a verified, unambiguous tech pack spec, reputable manufacturers typically re-sample without additional charge.",
    },
    {
      q: "What is the difference between a fit sample revision and a pre-production sample?",
      a: "A fit sample revision tests pattern modifications and fit ergonomics, often using available in-house fabric. A pre-production (PP) sample is the final pre-bulk gate, sewn using exact bulk-dyed production fabric, trims, labels, and wash treatments at the bulk production factory.",
    },
    {
      q: "When should a brand stop revising samples and move to bulk production?",
      a: "You should approve the sample once measurements fall within specified tolerance ranges (±1.0cm to ±1.5cm), fit drape meets your design standard, and fabric performance post-washing is verified. Striving for unattainable mathematical perfection beyond standard industrial tolerances adds delay without enhancing retail quality.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling &amp; Product Dev</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Why Apparel Samples{" "}
            <span className="italic font-medium text-[#2D5016]">Need Multiple Revisions.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Sample iteration is an essential industrial quality gate. Understand the technical variables that drive sample revisions and how to streamline your development cycles.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Technical Reality</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Multiple sample rounds are not a sign of manufacturing failure - they are <strong className="font-medium">the standard mechanism for refining pattern dimensions and fabric behaviour</strong> before bulk cutting.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            First-time apparel founders often expect a first prototype to match their creative vision perfectly on day one. In technical garment manufacturing, translating a 2D digital tech pack into a 3D physical garment involves complex material physics, pattern geometry, and laundry treatment dynamics that naturally require iterative calibration.
          </p>
        </div>
      </section>

      {/* Technical Reasons */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Root Causes</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Technical Reasons Samples Need Revision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalReasons.map((reason, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{reason.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reduction Strategies */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Efficiency Optimization</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">How Brands Can Reduce Revision Cycles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reductionStrategies.map((strat, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{strat.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{strat.detail}</p>
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
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/how-many-samples-before-production", label: "How Many Samples Should a Brand Expect?" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/apparel-sampling-services", label: "Fenalt Professional Sampling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Streamline your sampling revisions</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka pattern room works directly from your tech packs to refine sample revisions quickly and accurately.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Sampling Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
