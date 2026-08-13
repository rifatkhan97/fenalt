import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Give Useful Feedback on a Clothing Sample",
  description:
    "Learn how to write actionable, precise sample fit feedback for your clothing manufacturer — using measuring tapes, flat-lay reference photos, and clear POM delta callouts.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-give-sample-feedback",
  },
  openGraph: {
    title: "How to Give Useful Feedback on a Clothing Sample",
    description:
      "Learn how to write actionable, precise sample fit feedback for your clothing manufacturer — using measuring tapes, flat-lay reference photos, and clear POM delta callouts.",
    url: "https://fenalt.com/learn/how-to-give-sample-feedback",
  },
};

export default function HowToGiveSampleFeedbackPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Give Useful Feedback on a Clothing Sample",
    description:
      "A technical guide for fashion brand founders on structuring clear, actionable sample fit comments and measurement revision requests.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-give-sample-feedback",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-give-sample-feedback",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Give Sample Feedback", item: "https://fenalt.com/learn/how-to-give-sample-feedback" },
    ],
  };

  const bestPractices = [
    {
      rule: "1. State Precise Numerical Deltas (+/- cm per POM)",
      explanation: "Pattern makers require exact mathematical instructions. Instead of writing 'Make the chest tighter', specify 'Decrease chest 2.5cm below armhole (POM-01) by -2.0 cm (from 58 cm to 56 cm)'. Refer explicitly to line items in your tech pack spec sheet.",
    },
    {
      rule: "2. Supply Annotated Flat-Lay Photos with Tape Measure Alignment",
      explanation: "Lay the garment flat on a smooth surface and position a flexible measuring tape directly along the seam being measured. Take high-resolution photos showing tape alignment against key point-of-measure callouts.",
    },
    {
      rule: "3. Photograph Fit Model Testing in Neutral & Dynamic Angles",
      explanation: "Photograph the fit sample on a live model in standard standing posture (front, profile, back) without posing. Circle tension lines, fabric bunching, or collar gaping directly on the digital photos using annotation tools.",
    },
    {
      rule: "4. Separate Technical Corrections from Aesthetic Requests",
      ruleType: "Workflow Structure",
      explanation: "Group feedback into clear categories: Mandatory Technical Revisions (e.g. measurement shifts, seam puckering) versus Optional Aesthetic Preferences (e.g. logo placement tweak). This helps the sample room prioritise CAD pattern edits.",
    },
    {
      rule: "5. Consolidate All Notes into One Master Revision Sheet",
      explanation: "Avoid scattering feedback across multiple emails, direct messages, or voice notes. Submit a single unified fit comment PDF or spreadsheet that incorporates measurement tables, photos, and clear sign-off instructions.",
    },
    {
      rule: "6. Physically Mark, Pin, or Alter the Sample Garment if Returning",
      explanation: "If returning the physical sample to the factory or sampling liaison, use safety pins, tailor's chalk, or masking tape directly on the garment to physically indicate seam shifts, pocket repositioning, or length trims.",
    },
  ];

  const feedbackMistakes = [
    {
      mistake: "Vague, Subjective Impressions",
      example: "Writing 'It looks weird' or 'Make it feel more like Brand X' gives pattern makers no actionable measurement guidance.",
    },
    {
      mistake: "Fragmented Communication Across Channels",
      example: "Sending chest feedback via email, sleeve notes via WhatsApp, and logo changes in a late slide deck causes pattern room confusion.",
    },
    {
      mistake: "Measuring Unwashed vs Washed Garments Inconsistently",
      example: "Comparing unwashed sample measurements directly against post-wash targets without accounting for natural fabric relaxation or shrinkage.",
    },
    {
      mistake: "Evaluating Fit on Non-Standard Body Types",
      example: "Testing base sample sizes on models whose measurements deviate significantly from the tech pack's target base size specs.",
    },
  ];

  const faqs = [
    {
      q: "What is the most effective format for sending sample feedback?",
      a: "The most effective format is a structured PDF or spreadsheet fit comment worksheet. It should include: a measurement table showing target specs, actual sample measurements, and requested numerical deltas (+/- cm); annotated flat-lay photos with measuring tapes visible; and annotated on-body fit photos.",
    },
    {
      q: "Should I cut or mark the physical sample garment?",
      a: "Yes! Physically pinning seam adjustments, drawing cut lines with tailor's chalk, or taping altered pocket positions directly onto the sample garment — and returning it to the factory — is one of the clearest ways to communicate pattern revisions.",
    },
    {
      q: "How long should a brand take to issue sample feedback?",
      a: "Issue consolidated sample feedback within 3 to 5 business days of receiving the sample. Prompt feedback keeps your project active in the factory pattern room's schedule and prevents development delays.",
    },
    {
      q: "What should I do if the sample measurements match the tech pack but the fit still looks wrong?",
      a: "If measurements are technically correct according to the spec sheet but the garment drapes poorly, the issue lies in pattern line geometry (such as armhole curvature, shoulder slope, or neck opening shape) or fabric selection rather than basic width/length dimensions. Provide on-body photos showing tension lines to help the pattern maker adjust seam curves.",
    },
    {
      q: "How do I specify pattern adjustments for ribbing and stretch bands?",
      a: "Specify both the flat relaxed measurement and the stretched measurement requirement for ribbing (neckband, cuffs, hem band). State whether ribbing tension needs to be increased (tighter recovery) or reduced (looser fit).",
    },
    {
      q: "Can Fenalt assist with reviewing sample measurements in Dhaka?",
      a: "Yes. Fenalt's on-the-ground technical team in Dhaka conducts initial point-of-measure (POM) audits, flat-lay checking, and preliminary inspection before shipping samples to brand teams, ensuring obvious technical discrepancies are caught locally.",
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
            How to Give Useful Feedback{" "}
            <span className="italic font-medium text-[#2D5016]">on a Clothing Sample.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Clear, actionable sample feedback dramatically shortens revision cycles. Learn how to communicate measurement deltas, annotate fit photos, and guide pattern makers accurately.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Communication Standard</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Pattern makers work from <strong className="font-medium">measurements, CAD line adjustments, and visual evidence</strong> — not vague adjectives. Objective feedback drives accurate revisions.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            The way a fashion brand communicates fit revisions determines how quickly a prototype reaches bulk sign-off. Vague, subjective comments force sample machinists to guess, often resulting in additional unnecessary revision rounds. Structuring feedback around numerical deltas and annotated photography streamlines sample development.
          </p>
        </div>
      </section>

      {/* Best Practices List */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Feedback Protocol</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Rules for Structuring Useful Fit Notes</h2>
          <div className="space-y-6">
            {bestPractices.map((bp, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{bp.rule}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{bp.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Feedback Mistakes */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Common Anti-Patterns</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">4 Feedback Mistakes That Cause Delays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feedbackMistakes.map((item, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{item.mistake}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{item.example}</p>
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
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/why-samples-need-multiple-revisions", label: "Why Apparel Samples Sometimes Need Multiple Revisions" },
              { href: "/learn/how-many-samples-before-production", label: "How Many Samples Should a Brand Expect?" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Fast-track sample revision sign-offs</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka technical managers review sample feedback worksheets directly with factory pattern makers for fast, accurate pattern execution.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Sampling Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
