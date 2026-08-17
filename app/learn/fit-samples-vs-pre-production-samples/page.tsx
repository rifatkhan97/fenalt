import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Fit Samples vs Pre-Production Samples: What's the Difference?",
  description:
    "Understand the key differences between fit samples and pre-production (PP) samples - their distinct purposes, material requirements, approval criteria, and role in preventing bulk production defects.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/fit-samples-vs-pre-production-samples",
  },
  openGraph: {
    title: "Fit Samples vs Pre-Production Samples: What's the Difference?",
    description:
      "Understand the key differences between fit samples and pre-production (PP) samples - their distinct purposes, material requirements, approval criteria, and role in preventing bulk production defects.",
    url: "https://www.fenalt.com/learn/fit-samples-vs-pre-production-samples",
  },
};

export default function FitSamplesVsPreProductionSamplesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fit Samples vs Pre-Production Samples: What's the Difference?",
    description: "A technical comparison of fit samples versus pre-production (PP) samples in clothing manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/fit-samples-vs-pre-production-samples",
    mainEntityOfPage: "https://www.fenalt.com/learn/fit-samples-vs-pre-production-samples",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Fit Samples vs Pre-Production Samples", item: "https://www.fenalt.com/learn/fit-samples-vs-pre-production-samples" },
    ],
  };

  const comparisonPoints = [
    {
      factor: "Primary Objective",
      fit: "Validate pattern dimensions, drape, and sizing ergonomics on a fit model or dress form.",
      pp: "Lock in the final production standard (Golden Sample) for bulk sewing - the contractual quality reference.",
    },
    {
      factor: "Fabric & Material Used",
      fit: "Substitute or available in-house fabric of similar GSM and stretch - not necessarily the exact production material.",
      pp: "Exact bulk production fabric, in the correct dye lot, with all production trims fully applied.",
    },
    {
      factor: "Trims & Labels",
      fit: "Generic stock zippers, threads, and buttons. Brand labels are typically omitted at this stage.",
      pp: "Exact brand woven labels, care tags, custom zippers, drawcords, hangtags, and all production trims.",
    },
    {
      factor: "Factory of Production",
      fit: "Often produced in a dedicated sample room - may be at the same factory or at a specialist sampling studio.",
      pp: "Must be produced by the exact production factory that will make the bulk order. Factory-specific capability is what is being verified.",
    },
    {
      factor: "Wash & Finish Treatments",
      fit: "Wash treatments (enzyme wash, garment dye, silicon softener) are typically not applied at fit sample stage.",
      pp: "All specified wash treatments must be applied exactly as they will be in bulk - as wash treatments affect garment measurements, colour, and hand-feel.",
    },
    {
      factor: "Timing in Lifecycle",
      fit: "Early product development phase - after initial pattern is drafted, but before final fabric and trim selection is confirmed.",
      pp: "Immediately preceding bulk cutting - all materials, trims, and patterns must be finalised before the PP sample is made.",
    },
    {
      factor: "Approval Consequence",
      fit: "Approval triggers the next revision round or, if correct, authorises progress to the PP sample stage.",
      pp: "Approval is the non-negotiable prerequisite for bulk cutting. The signed PP sample becomes the Golden Sample and must be retained at the factory.",
    },
    {
      factor: "Revision Expectation",
      fit: "Revisions are normal and expected. 2 to 4 fit sample rounds before PP sign-off is typical for a new style.",
      pp: "Revisions should be rare - the PP sample is made after fit is approved. If the PP sample requires major revision, there is likely a process breakdown.",
    },
  ];

  const fitSampleChecklist = [
    "Measure all POM sheet dimensions and compare to targets with stated tolerances",
    "Evaluate on a fit model or calibrated dress form in the base sample size",
    "Check silhouette proportions: does the garment match the design sketch?",
    "Test functional elements: pocket access, zipper function, hood drawcord ease",
    "Assess fabric drape and behaviour on a moving body",
    "Identify any construction concerns: puckering seams, uneven stitching, off-grain panels",
    "Document all observations in writing with specific measurements, not general impressions",
  ];

  const ppSampleChecklist = [
    "Confirm fabric shade against the approved lab dip - particularly important at PP stage with final dye lot",
    "Verify all trims match approval references (zipper brand, puller, drawcord tip, label text)",
    "Measure all POM dimensions against final approved spec (tighter tolerance than fit sample)",
    "Apply and evaluate all specified wash treatments - confirm they do not affect fit adversely",
    "Confirm label placement (woven neck label, care label, size label, hangtag attachment point)",
    "Sign off in writing and physically tag the approved PP sample as the Golden Sample",
    "Confirm Golden Sample will be retained at the production factory throughout the bulk run",
  ];

  const faqs = [
    {
      q: "Can I use the Fit Sample as my Pre-Production (PP) Sample?",
      a: "Only if the fit sample was produced using the exact final bulk fabric, in the correct dye lot, with all production trims and wash treatments applied - at the actual production factory. This is an unusual scenario. In most development cycles, fit samples are made in substitute fabric and in a different environment from the bulk factory, making them unsuitable as PP samples without these conditions being met.",
    },
    {
      q: "What happens after the Pre-Production (PP) Sample is approved?",
      a: "The PP sample is physically signed or tagged to indicate brand approval, and retained at the production factory as the Golden Sample - the binding quality reference for the bulk run. Bulk fabric cutting can begin. QC inspectors conducting in-line and pre-shipment checks compare bulk units against the Golden Sample throughout production.",
    },
    {
      q: "How detailed does fit sample feedback need to be?",
      a: "Very specific. Feedback should reference the POM sheet line items with specific measurements: for example, 'chest measurement is 52cm - target is 56cm, please increase by 4cm'. General feedback like 'the chest is too narrow' creates ambiguity about which seam the pattern maker should adjust and by how much. Specific feedback with measurements directly reduces the number of revision rounds needed.",
    },
    {
      q: "Why must the PP sample be made at the production factory?",
      a: "Different factories have different machinery, sewing specifications, and operator skill sets. A fit sample made at a sample studio may sew cleaner seams than a production factory will produce at scale. The PP sample tests not only the final materials but also the production factory's specific capability to replicate the approved standard. This is why the production factory must make the PP sample - not a substitute sample room.",
    },
    {
      q: "What should I do if I receive a PP sample that doesn't pass approval?",
      a: "Reject it in writing with specific notes detailing exactly what needs to be corrected - not a general rejection. Require the factory to revise and resubmit a corrected PP sample before bulk cutting begins. Never approve a PP sample under time pressure if it contains genuine quality failures. The cost of a failed bulk run is always higher than the delay caused by an additional PP sample round.",
    },
    {
      q: "How many fit sample rounds is normal before reaching the PP stage?",
      a: "For new styles with a new manufacturer, 2 to 3 fit sample rounds before PP is typical. Brands with complete tech packs and reference garments sometimes reach PP in one or two rounds. Brands with incomplete or evolving tech packs - or brands providing conflicting feedback - may require 4 or more rounds. The PP stage is not reached until all fit and construction issues from the fit sample phase are fully resolved.",
    },
    {
      q: "Is there a cost difference between fit samples and PP samples?",
      a: "PP samples are typically more expensive than early fit samples because they use production-grade materials (exact bulk fabric, all trims, wash treatments) which have higher material costs, and are made at the production factory where production sample room pricing may apply. Fit samples in substitute fabrics have lower material cost. Both are priced per unit and billed as sampling fees by the manufacturer.",
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

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling & Product Dev</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Fit Samples vs Pre-Production Samples:{" "}
            <span className="italic font-medium text-[#2D5016]">What&apos;s the Difference?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Confusing a fit sample with a pre-production sample - or conflating their approval criteria - is one of the most common sampling process errors. Each type solves a fundamentally different problem.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview callout */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Core Distinction</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">fit sample</strong> asks: <em>&ldquo;Does this pattern produce the right garment?&rdquo;</em> A <strong className="font-medium">pre-production sample</strong> asks: <em>&ldquo;Can this factory produce that garment in these materials at this standard?&rdquo;</em>
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Both questions need a positive answer before bulk production begins. They require different materials, different production environments, and different approval criteria - which is why treating them as interchangeable leads to systematic sampling errors that reach the bulk order.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Comparison</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-10">Fit Sample vs PP Sample: 8-Point Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A2A2A]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-1/4">Factor</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Fit Sample</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-[#C8A882] w-[37.5%]">Pre-Production (PP) Sample</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#262626]" : "bg-[#2A2A2A]"}>
                    <td className="p-4 text-sm font-semibold text-[#E5DDD3] border-t border-[#333333] align-top">{row.factor}</td>
                    <td className="p-4 text-sm text-[#9B948E] border-t border-[#333333] leading-relaxed align-top">{row.fit}</td>
                    <td className="p-4 text-sm text-[#E5DDD3] border-t border-[#333333] leading-relaxed align-top font-medium">{row.pp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Approval Criteria</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">What to Evaluate at Each Stage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-4 pb-3 border-b border-[#E5DDD3]">When Reviewing a Fit Sample</h3>
              <div className="space-y-3">
                {fitSampleChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[#2D5016] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#6B6560] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-4 pb-3 border-b border-[#E5DDD3]">When Reviewing a PP Sample</h3>
              <div className="space-y-3">
                {ppSampleChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[#2D5016] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#6B6560] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
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

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/types-of-apparel-samples", label: "The 7 Types of Apparel Samples Explained" },
              { href: "/learn/how-many-samples-before-production", label: "How Many Samples Before Production?" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Brands" },
              { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
              { href: "/apparel-sampling-services", label: "Fenalt Sampling Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Commission sampling with proper sign-off process</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages the complete sampling cycle - fit development through PP approval - with transparent communication at every stage.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
