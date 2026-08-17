import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Prepare for Your First Clothing Sample",
  description:
    "A comprehensive preparation checklist for fashion brands ordering their first prototype garment sample - from tech pack validation and GSM specifications to physical reference garments.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
  },
  openGraph: {
    title: "How to Prepare for Your First Clothing Sample",
    description:
      "A comprehensive preparation checklist for fashion brands ordering their first prototype garment sample - from tech pack validation and GSM specifications to physical reference garments.",
    url: "https://www.fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
  },
};

export default function HowToPrepareForFirstClothingSamplePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Prepare for Your First Clothing Sample",
    description:
      "A step-by-step guide for fashion brands preparing documentation, physical swatches, and design specs for initial garment sampling.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
    mainEntityOfPage: "https://www.fenalt.com/learn/how-to-prepare-for-first-clothing-sample",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Prepare for First Sample", item: "https://www.fenalt.com/learn/how-to-prepare-for-first-clothing-sample" },
    ],
  };

  const prepItems = [
    {
      step: "1. Finalise a 2D Flat Technical Vector Pack",
      desc: "Provide front, back, and detail vector sketches with explicit seam callouts, stitch construction details, and an initial points of measure (POM) table. Ambiguous artwork or 3D renderings without flat measurements force sample machinists to guess silhouette proportions.",
    },
    {
      step: "2. Define Target Fabric Fibre, Weave & GSM",
      desc: "Specify exact material targets - for example, 100% combed cotton, 450 GSM French Terry, or 95/5 cotton-spandex jersey. Indicating a specific yarn count or handfeel expectation gives the sample room clear parameters for selecting or sourcing suitable sample yardage.",
    },
    {
      step: "3. Supply Physical Reference Garments or Fabric Swatches",
      desc: "Sending a physical benchmark garment to the factory or sampling liaison is one of the most effective ways to communicate fit, collar ribbing tension, shoulder slope, and tactile fabric weight. Physical swatches remove subjective misinterpretations of fabric softness and drape.",
    },
    {
      step: "4. Establish Base Sample Size & Target Fitting Standard",
      desc: "Designate the exact size to sample - typically a Medium for menswear/unisex or a Small/Medium for womenswear. Specify whether fitting will take place on a live fit model or a calibrated dress form, and confirm base model body measurements.",
    },
    {
      step: "5. Prepare Vector Print & Embroidery Files with Placement Coordinates",
      desc: "Supply production-ready vector graphic files (AI, EPS, or vector PDF) with Pantone TCX/C colour references. Include exact placement coordinates (for example, 'center chest 8cm below high point shoulder seam') to prevent graphic misalignment.",
    },
    {
      step: "6. Clarify Trims, Labels & Hardware Specifications",
      desc: "Document zipper types (e.g. #5 YKK metal vs nylon coil), drawcord tip finishes, eyelet materials, woven neck label dimensions, and care instruction copy. Even if stock trims are used for early fit samples, specifying target hardware prevents design surprises.",
    },
    {
      step: "7. Agree on Sampling Timelines & Feedback Responsibilities",
      desc: "Align with your manufacturing partner on expected sample development lead times (typically 10 to 14 days following pattern approval) and designate a single brand stakeholder who will review the physical sample and issue written fit notes.",
    },
  ];

  const factoryExpectations = [
    {
      title: "Clean, Single-Document Submissions",
      detail: "Factories process sampling requests fastest when all specs, sketches, and BOM tables are consolidated in one master tech pack document rather than scattered across email chains and chat attachments.",
    },
    {
      title: "Realistic Tolerance Recognition",
      detail: "Understanding that prototype fit samples are handmade individual garments with standard industrial measurement tolerances (±1.0cm to ±1.5cm) helps brands evaluate functional fit rather than rejecting minor raw sampling variations.",
    },
    {
      title: "Prompt, Specific Revision Turnaround",
      detail: "Issuing consolidated numerical measurement deltas (+/- cm) within 3 to 5 business days of receiving the sample keeps your development slot active in the factory's pattern room schedule.",
    },
  ];

  const faqs = [
    {
      q: "Can I order a sample without sending a physical reference garment?",
      a: "Yes. As long as your tech pack contains complete measurement tables, point-of-measure (POM) callouts, construction details, and fabric weight specifications, a physical reference garment is optional. However, supplying a reference garment helps the sample machinist calibrate collar ribbing, armhole slope, and handfeel much faster.",
    },
    {
      q: "How much does a first prototype sample typically cost?",
      a: "Prototype sampling fees are generally 2x to 3x the estimated bulk per-unit FOB cost. This premium reflects single-garment CAD pattern drafting, individual fabric cutting, sample machinist labour, and setup time. Some manufacturers credit a portion of sampling fees back upon placement of a bulk production purchase order.",
    },
    {
      q: "What fabric is used if bulk production fabric is not ready yet?",
      a: "For initial prototype (proto) fit samples, manufacturers often use in-house substitute fabric of matching weight (GSM) and stretch characteristics. Once pattern lines and fit proportions are validated on the proto sample, the final pre-production (PP) sample is sewn using exact bulk-dyed production fabric.",
    },
    {
      q: "What is the estimated turnaround time for a first sample at Fenalt?",
      a: "Fenalt estimates prototype fit sample turnaround at 10 to 14 days following tech pack verification and pattern sign-off, subject to fabric availability in our Dhaka sampling hub.",
    },
    {
      q: "Which size should a brand sample first?",
      a: "Brands usually sample their mid-range size - typically Medium for menswear and unisex collections, or Small/Medium for womenswear. Validating the base pattern on a central size ensures accurate size grading when scaling up to XL/2XL or down to XS.",
    },
    {
      q: "What should I do if my tech pack has missing information?",
      a: "Work with a technical designer or a managed production partner like Fenalt before submitting for sampling. Resolving missing measurements or ambiguous construction notes prior to sampling prevents wasted sampling fees and extra revision rounds.",
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
            How to Prepare for Your{" "}
            <span className="italic font-medium text-[#2D5016]">First Clothing Sample.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Thorough preparation before submitting a sample order reduces revision rounds, saves development budget, and ensures predictable sampling turnaround times.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Preparation Protocol</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The quality of your first sample directly reflects the <strong className="font-medium">completeness of your initial submission package</strong>. Clear specifications eliminate pattern room guesswork.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Many first-time brand founders assume that ordering a sample is simply a matter of sending mood board images to a factory. In industrial garment manufacturing, sample machinists build garments strictly according to pattern templates and tech pack spec sheets. Preparing complete documentation upfront is the single most effective way to achieve an accurate first sample.
          </p>
        </div>
      </section>

      {/* Prep Checklist */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Preparation Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">7 Essential Steps Before Ordering a Sample</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prepItems.map((item, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{item.step}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Expectations Section */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Supplier Collaboration</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">What Pattern Rooms Expect From Brands</h2>
          <div className="space-y-4">
            {factoryExpectations.map((exp, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{exp.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{exp.detail}</p>
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
              { href: "/learn/what-a-clothing-manufacturer-needs-from-a-brand", label: "What a Clothing Manufacturer Needs From a Brand" },
              { href: "/learn/types-of-apparel-samples", label: "The Different Types of Apparel Samples Explained" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Fashion Brands" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/apparel-sampling-services", label: "Fenalt Apparel Sampling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Ready to order your first sample?</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Submit your tech pack or reference garment to Fenalt for expert pattern development and sampling execution in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Sampling Request <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
