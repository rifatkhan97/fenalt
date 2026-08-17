import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "The Different Types of Apparel Samples Explained",
  description:
    "A complete guide to the 7 garment sample types - Proto, Fit, Size Set, Salesperson (SMS), Pre-Production (PP), Top of Production (TOP), and Shipping samples - and when each is required in the production cycle.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/types-of-apparel-samples",
  },
  openGraph: {
    title: "The Different Types of Apparel Samples Explained",
    description:
      "A complete guide to the 7 garment sample types - Proto, Fit, Size Set, Salesperson (SMS), Pre-Production (PP), Top of Production (TOP), and Shipping samples - and when each is required in the production cycle.",
    url: "https://www.fenalt.com/learn/types-of-apparel-samples",
  },
};

export default function TypesOfApparelSamplesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Different Types of Apparel Samples Explained",
    description:
      "A technical guide detailing every sample stage in garment manufacturing, from initial proto sample to Top of Production (TOP).",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/types-of-apparel-samples",
    mainEntityOfPage: "https://www.fenalt.com/learn/types-of-apparel-samples",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Types of Apparel Samples", item: "https://www.fenalt.com/learn/types-of-apparel-samples" },
    ],
  };

  const sampleTypes = [
    {
      name: "Prototype (Proto) Sample",
      purpose: "Test general silhouette, design feasibility, and overall aesthetic intent using available in-house or substitute fabric.",
      detail: "The prototype is made quickly from whatever fabric is available at the factory - not necessarily the final production material. Its purpose is to test whether the design concept physically works: proportions, panel placement, pocket functionality, and basic construction logic. At this stage, minor deviations from the final tech pack measurements are expected and normal. Brands should evaluate the proto for silhouette and overall impression, not final measurement accuracy.",
      usedBy: "All brands developing custom styles",
      required: "Yes - for all new styles",
    },
    {
      name: "Fit Sample",
      purpose: "Evaluate anatomical drape, measurement accuracy, and sizing on a physical fit model - using actual or representative fabric.",
      detail: "The fit sample is typically the second iteration of the prototype after initial revision. Its primary function is technical: verifying that the garment fits correctly on a live body or standard dress form, that all measurements match the tech pack POM sheet within tolerances, and that the construction details (seam positioning, pocket placement, collar sit) perform as specified. Written fit notes from this evaluation drive the next revision round.",
      usedBy: "All brands with custom fit requirements",
      required: "Yes - for all new styles",
    },
    {
      name: "Size Set Samples",
      purpose: "Verify pattern grading accuracy across the complete size spectrum (e.g. XS through 3XL).",
      detail: "Once the base size pattern is approved, size set samples are made in each size to verify that the incremental grading measurements are correct - and that proportions remain consistent across the range. For example, a sleeve length graded from M to XL might show the correct total length but incorrect proportion if the grading algorithm is applied incorrectly. Size sets are most important for brands with a wide size range or those targeting markets with strict size compliance standards.",
      usedBy: "Brands with full size runs (particularly activewear, inclusive sizing)",
      required: "Conditional - required for wide size ranges; smaller ranges may be sampled selectively",
    },
    {
      name: "Salesperson Sample (SMS)",
      purpose: "Showcase finished garments in exact bulk fabrics for trade shows, lookbooks, wholesale buyers, and pre-season ordering.",
      detail: "SMS (sometimes called Showroom Samples or Sales Samples) are made in final production fabric and colours, with all trims, labels, and finishing details exactly as the bulk product will appear. They are used for sales presentations, photography, lookbooks, and buyer review before the production run is completed. They are not quality inspection documents - they are marketing and pre-sales tools. Many brands treat their approved PP sample as their SMS to reduce cost.",
      usedBy: "Brands with wholesale accounts, trade show presence, or pre-season ordering",
      required: "Conditional - only needed for brands with external sales presentations",
    },
    {
      name: "Pre-Production (PP) Sample",
      purpose: "The binding production standard - constructed from actual bulk fabric, with all production trims, labels, and wash treatments applied, at the production factory.",
      detail: "The PP sample is the most critical sample in the production cycle. Once signed off by the brand, it becomes the Golden Sample - the physical quality benchmark retained at the factory against which every bulk production unit is compared during in-line inspection and pre-shipment audit. A PP sample that passes brand approval contains all production materials and cannot deviate from the bulk order in fabric, colour, construction, or trims. Never allow bulk cutting to begin without PP sample sign-off.",
      usedBy: "All brands - mandatory for all production runs",
      required: "Yes - non-negotiable before bulk cutting",
    },
    {
      name: "Top of Production (TOP) Sample",
      purpose: "Pulled directly from the first 10% of bulk sewing to audit that production-line quality matches the approved PP standard.",
      detail: "A TOP sample is taken from the live production run - typically from the first batch to come off the sewing line - to verify that the production environment is replicating the approved PP sample standard at scale. Problems found at TOP stage can still be corrected across the remaining 90% of the order. Problems found at pre-shipment on 100% of units are exponentially more expensive to address. TOP sampling is standard practice for high-volume or high-value orders.",
      usedBy: "High-volume brands and brands with premium quality requirements",
      required: "Recommended for orders above 500 units or premium product tiers",
    },
    {
      name: "Shipping Sample",
      purpose: "Pulled from final packed export cartons to verify polybagging, hangtag placement, folding method, and correct carton ratio.",
      detail: "A shipping sample is the final quality check before garments leave the factory - confirming that the physical product matches the approved standard and that all packaging elements (polybag, hangtag, sticker, barcode, size label) are correctly applied. It also verifies that the carton size ratios match the purchase order. Discrepancies found at shipping sample stage can still be corrected before export; those found by the buyer after delivery cannot.",
      usedBy: "All brands shipping international orders",
      required: "Strongly recommended - especially for export orders",
    },
  ];

  const brandTypeMatrix = [
    { brandType: "DTC startup (first collection, small MOQ)", samples: "Proto + Revised Fit + PP Sample", notes: "3 samples are the practical minimum. Skip size sets unless launching a wide range." },
    { brandType: "DTC brand (repeat season, known manufacturer)", samples: "Fit Sample + PP Sample", notes: "Pattern already exists; proto may not be needed for reorders." },
    { brandType: "Wholesale brand (buyers, trade shows)", samples: "Proto + Revised Fit + SMS + PP Sample", notes: "Salesperson sample required for pre-season buyer review." },
    { brandType: "High-volume / premium brand", samples: "Proto + Fit + Size Set + PP + TOP Sample", notes: "TOP sample is critical for orders above 500 units where line correction is still feasible." },
  ];

  const faqs = [
    {
      q: "Do emerging brands need to make all 7 types of samples?",
      a: "No. Small direct-to-consumer brands typically only require a prototype fit sample and a pre-production (PP) sample before starting bulk cutting. This is a minimum of two physical iterations plus revision rounds within each. Size set samples, salesperson samples, and TOP samples become relevant as volume, distribution, and quality requirements increase.",
    },
    {
      q: "Who pays for sample development?",
      a: "The brand pays for sample development - covering pattern drafting labour, sample machinist labour, and any fabric or trim costs for the sample units. Sampling fees vary by manufacturer, garment complexity, and number of units produced per sample. Some manufacturers credit sampling fees against the bulk order value upon PO issuance; others treat sampling as a separate fixed cost. Always confirm the sampling fee structure before commissioning.",
    },
    {
      q: "What is the difference between a fit sample and a pre-production sample?",
      a: "A fit sample tests the pattern - usually using substitute or available fabric - with the primary goal of achieving correct measurements and proportions. A pre-production (PP) sample is made from the actual bulk production fabric, at the production factory, with all production trims and labels in place. The PP sample represents the exact standard that bulk production will be held to. It is the binding quality reference, not a design iteration.",
    },
    {
      q: "Can a salesperson sample be the same as the PP sample?",
      a: "In practice, many brands combine these. If the PP sample is made in final production fabric with all trims and labels, it is often used as the showroom or sales presentation sample before bulk production begins. The key constraint is that the PP sample should not leave the brand's possession if it is also serving as the golden sample for factory QC - some brands make two identical units at PP stage for this reason.",
    },
    {
      q: "What should I evaluate when I receive a fit sample?",
      a: "Measure every point of measure (POM) on the spec sheet and compare against the target measurements and tolerance. Evaluate fit on a live model or dress form in the target size. Assess: does the silhouette match the intended design? Do pockets function as intended? Is the fabric draping correctly? Is construction (seam allowances, stitching) acceptable? Document all adjustment notes in writing with specific measurements - not general impressions.",
    },
    {
      q: "How long does sample development take between rounds?",
      a: "Each revision round typically takes 7 to 14 days at the factory - plus 3 to 7 business days each way for international shipping if samples are reviewed in person. International brands evaluating samples physically should plan 2 to 3 weeks per revision round including transit. Brands using digital photo or video review can reduce this to the production time only, provided the feedback methodology is sufficiently rigorous.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling & Product Dev</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            The Different Types of Apparel{" "}
            <span className="italic font-medium text-[#2D5016]">Samples Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Not all apparel samples serve the same purpose. Each type in the sampling hierarchy isolates specific variables - from silhouette to fit to production replication. This guide explains all seven.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Layers size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Sampling Taxonomy</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Each sample stage isolates specific variables - <strong className="font-medium">silhouette (proto), fit & drape (fit sample), aesthetics (SMS), and final production standard (PP sample)</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            A structured sampling process protects the bulk order. Each approval gate catches a specific category of problem before it can multiply across hundreds or thousands of production units. Understanding which samples serve which function allows brands to move through development more efficiently - rather than combining conflicting objectives in a single sample round.
          </p>
        </div>
      </section>

      {/* 7 Sample Types */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Sampling Spectrum</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">7 Garment Sample Types - What Each One Is For</h2>
          <div className="space-y-5">
            {sampleTypes.map((st, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-1">{st.name}</h3>
                <p className="text-xs text-[#C8A882] font-semibold mb-3 uppercase tracking-wider">{st.purpose}</p>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-4">{st.detail}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <p className="text-xs text-[#9B948E]"><span className="font-semibold text-[#E5DDD3]">Used by:</span> {st.usedBy}</p>
                  <p className="text-xs text-[#9B948E]"><span className="font-semibold text-[#E5DDD3]">Required:</span> {st.required}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand type matrix */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Planning Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-6">Which Samples Does Your Brand Need?</h2>
          <p className="text-base text-[#6B6560] leading-relaxed mb-10 max-w-2xl">
            The right sampling sequence depends on your distribution model, quality requirements, and production volume.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest">Brand Type</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest">Typical Samples Required</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest">Notes</th>
                </tr>
              </thead>
              <tbody>
                {brandTypeMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.brandType}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.samples}</td>
                    <td className="p-4 text-sm text-[#9B948E] border-t border-[#E5DDD3] leading-relaxed align-top italic">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/learn/how-many-samples-before-production", label: "How Many Samples Should a Brand Expect Before Production?" },
              { href: "/learn/sample-approval-checklist", label: "Sample Approval Checklist for Brands" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Develop your prototype samples</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt offers fast-turnaround sampling services - developing precision proto, fit, and pre-production samples in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Sampling Request <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
