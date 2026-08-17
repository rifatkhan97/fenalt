import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Clothing Manufacturing Works: From Design to Finished Garment",
  description:
    "A complete, plain-language guide to how clothing manufacturing works - from initial design sketches and tech packs through sampling, production, quality control, and export.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/how-clothing-manufacturing-works",
  },
  openGraph: {
    title: "How Clothing Manufacturing Works: From Design to Finished Garment",
    description:
      "A complete, plain-language guide to how clothing manufacturing works - from initial design sketches and tech packs through sampling, production, quality control, and export.",
    url: "https://www.fenalt.com/learn/how-clothing-manufacturing-works",
  },
};

export default function HowClothingManufacturingWorksPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Clothing Manufacturing Works: From Design to Finished Garment",
    description:
      "A plain-language overview of the full apparel manufacturing process - design, tech pack, sampling, production, QC, and export.",
    author: {
      "@type": "Organization",
      name: "Fenalt",
      url: "https://www.fenalt.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Fenalt",
      url: "https://www.fenalt.com",
    },
    url: "https://www.fenalt.com/learn/how-clothing-manufacturing-works",
    mainEntityOfPage: "https://www.fenalt.com/learn/how-clothing-manufacturing-works",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      {
        "@type": "ListItem",
        position: 3,
        name: "How Clothing Manufacturing Works",
        item: "https://www.fenalt.com/learn/how-clothing-manufacturing-works",
      },
    ],
  };

  const steps = [
    {
      number: "01",
      title: "Design & Concept",
      body: "The process starts with a design - a sketch, mood board, or reference garment. At this stage, the brand decides on silhouette, fabric direction, colourway, and any special techniques (embroidery, printing, washes). This design intent needs to be translated into precise technical documents before a manufacturer can begin. Without technical documentation, even a clearly communicated creative vision cannot be produced consistently at scale.",
    },
    {
      number: "02",
      title: "Tech Pack Development",
      body: "A tech pack (technical package) is the blueprint manufacturers work from. It documents every measurement, fabric specification, trim detail, seam type, print placement, and construction instruction. Without a clear tech pack, manufacturers cannot produce consistent garments or give accurate quotes. Vague tech packs are the most common cause of sampling delays and rework costs. The investment of time in a thorough tech pack pays dividends across every subsequent production stage.",
    },
    {
      number: "03",
      title: "Pattern Making",
      body: "Once the tech pack is finalised, a pattern maker converts measurements and construction details into physical or digital cut patterns - the templates used to cut fabric pieces. Most modern manufacturers use CAD pattern software, though some traditional techniques persist for complex tailored garments. The master pattern is graded into the full size run, with incremental measurements applied per size to ensure consistent proportions across XS through 3XL.",
    },
    {
      number: "04",
      title: "Fabric & Material Sourcing",
      body: "Before samples can be made, fabric must be sourced and lab dip–approved. This means selecting the correct fabric composition, weight (measured in GSM), and colourway from a mill or fabric merchant, then approving dyed swatches against the brand's colour standard. Trim sourcing (threads, zippers, buttons, labels) happens in parallel. Fabric lead times are one of the most frequently underestimated variables in production scheduling - custom-dyed fabrics in particular can add 3 to 5 weeks to the overall timeline.",
    },
    {
      number: "05",
      title: "Prototype / Fit Sampling",
      body: "The first physical garment - called a prototype or first fit sample - is sewn to test how the pattern translates into a real garment. It checks fit, drape, proportion, and stitching. The brand evaluates the sample against the POM spec sheet and provides written fit notes requesting specific adjustments. Multiple sample rounds may follow before the brand signs off on a final approved sample. The number of revision rounds depends heavily on how complete and accurate the original tech pack was.",
    },
    {
      number: "06",
      title: "Pre-Production Approval",
      body: "Once the final sample is approved, a pre-production (PP) sample is made from the actual bulk production materials, in the factory that will produce the bulk order. This confirms that the factory can replicate the approved standard before a full production run begins. The signed-off PP sample becomes the Golden Sample - the binding quality reference retained at the factory against which every bulk production unit is compared during in-line and pre-shipment inspection.",
    },
    {
      number: "07",
      title: "Bulk Production",
      body: "With PP approval given, fabric is cut at scale, sewn in production line sequences, and assembled. In-line quality inspections happen during production - checking measurements, stitching, and construction at regular intervals, not just at the end. This is when brands with an on-the-ground oversight function have a significant advantage: factory-floor problems caught during production are far less expensive to correct than problems discovered after the entire order is sewn.",
    },
    {
      number: "08",
      title: "Final Inspection & Quality Control",
      body: "Before garments are packed, a final pre-shipment inspection is conducted. This typically follows a sampling methodology such as ANSI/ASQ Z1.4 (AQL 2.5) to check defects statistically across the order. Inspectors measure garments against the POM sheet, check print and embellishment placement, evaluate stitching and construction, and compare visual presentation against the golden sample. Passed garments are then finished - thread trimmed, pressed, hung or folded, tagged, and packed into cartons.",
    },
    {
      number: "09",
      title: "Export, Shipping & Import",
      body: "Finished cartons are loaded for sea freight (for bulk orders) or air freight (for urgent or small volumes). Sea freight from Bangladesh to Europe or North America typically takes 20 to 35 days. The brand or their freight forwarder handles customs entry at the destination, import duties and taxes, and delivery to the final warehouse or fulfilment centre. Customs clearance adds 2 to 5 business days at the destination port depending on country and classification.",
    },
  ];

  const commonMistakes = [
    { mistake: "Insufficient tech pack detail", consequence: "Causes most sampling delays and produces misaligned first samples - wasting weeks and revision fees before production can begin." },
    { mistake: "Skipping sampling entirely", consequence: "Strongly inadvisable for custom cut-and-sew garments. Skipping sampling frequently results in fit failures discovered after bulk production - very expensive to correct." },
    { mistake: "Underestimating fabric lead times", consequence: "Fabric sourcing and lab dip approval add weeks before the first stitch is sewn - and this phase runs independently from sampling, meaning it must be started early." },
    { mistake: "End-of-line QC only", consequence: "In-line inspection during sewing catches defects while they can still be corrected. End-of-line-only inspection discovers defects after the entire production run is complete." },
    { mistake: "No import cost planning", consequence: "Import duty and freight cost should be planned before order placement. Unexpected landed costs materially affect product margin." },
    { mistake: "First-collection timeline optimism", consequence: "Most first-time brands underestimate total timeline by 4 to 8 weeks. Plan with buffer - not best-case assumptions." },
  ];

  const faqs = [
    {
      q: "How long does the full clothing manufacturing process take?",
      a: "It varies significantly by order complexity. Sampling alone - from tech pack to approved sample - can take 3 to 6 weeks with revisions. Bulk production typically adds 4 to 6 weeks. Sea freight to Europe or North America adds 4 to 5 weeks. Allow a minimum of 14–20 weeks for a first collection from scratch with a complete tech pack. Add 4 to 8 weeks if tech pack development is also required.",
    },
    {
      q: "Can a brand skip sampling and go straight to bulk production?",
      a: "Technically possible with blank-based products being decorated (printing, embroidery) rather than manufactured from scratch. But strongly inadvisable for custom cut-and-sew garments. Skipping sampling on a custom design frequently results in fit or construction errors that are very expensive to correct across an entire bulk production run - the cost of rework or remaking is always higher than the cost of proper sampling.",
    },
    {
      q: "What should a brand prepare before contacting a manufacturer?",
      a: "At minimum: a design concept clearly communicated (sketch, reference garment, or mood board), a target fabric direction (composition, weight, colour), an approximate order quantity, a target delivery window, and ideally a partial or complete tech pack. A manufacturer can provide a rough indicative quote from a brief description, but an accurate commitment requires a complete tech pack.",
    },
    {
      q: "What is the most important approval gate in the production process?",
      a: "Pre-production (PP) sample sign-off. This is the last opportunity to identify and correct any specification, material, or construction issue before bulk cutting begins. Once fabric is cut and sewing starts at scale, correction is extremely costly. A thorough PP sample review is the highest-value quality decision a brand makes in the production cycle.",
    },
    {
      q: "Does Fenalt manage the full manufacturing process?",
      a: "Fenalt operates as an on-the-ground operational liaison in Dhaka, Bangladesh, managing fabric sourcing, sampling, production oversight, quality control, and export coordination with audited independent partner micro-factories. Brands can submit their project directly to Fenalt to access this managed end-to-end production service.",
    },
    {
      q: "What happens if something goes wrong during bulk production?",
      a: "Problems discovered during in-line production auditing can be corrected before they affect the full run - sewing errors caught early are relatively inexpensive to address. Problems discovered at pre-shipment inspection require rework before dispatch. Problems discovered after export are the most expensive and operationally complex to resolve. This is why in-line QC oversight is critical, not optional.",
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
            How Clothing Manufacturing Works:{" "}
            <span className="italic font-medium text-[#2D5016]">From Design to Finished Garment.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A plain-language guide to the full apparel production process - what happens at each stage, what brands need to prepare, and where things commonly go wrong.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The Full Process</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">The 9 Stages of Apparel Manufacturing</h2>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 border-b border-[#E5DDD3] py-10 last:border-b-0">
                <div className="shrink-0 font-display text-4xl font-light text-[#E5DDD3] w-12 mt-1">{step.number}</div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-base text-[#6B6560] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key takeaways */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Key Takeaways</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-8">What Brands Most Often Get Wrong</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonMistakes.map((item, i) => (
              <div key={i} className="p-5 bg-[#262626] border border-[#333333]">
                <p className="text-sm font-semibold text-[#C8A882] mb-2">{item.mistake}</p>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{item.consequence}</p>
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

      {/* Related articles */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/clothing-manufacturing-timeline", label: "How Long Does Clothing Manufacturing Usually Take?" },
              { href: "/learn/apparel-production-process-explained", label: "The Apparel Production Process Step by Step" },
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Explained" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors"
              >
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">
            Ready to start your production project?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages the full process - from sampling to export - with on-the-ground oversight in Dhaka, Bangladesh.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
