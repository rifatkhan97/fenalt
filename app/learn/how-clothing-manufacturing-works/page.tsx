import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Clothing Manufacturing Works: From Design to Finished Garment",
  description:
    "A complete, plain-language guide to how clothing manufacturing works — from initial design sketches and tech packs through sampling, production, quality control, and export.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-clothing-manufacturing-works",
  },
  openGraph: {
    title: "How Clothing Manufacturing Works: From Design to Finished Garment",
    description:
      "A complete, plain-language guide to how clothing manufacturing works — from initial design sketches and tech packs through sampling, production, quality control, and export.",
    url: "https://fenalt.com/learn/how-clothing-manufacturing-works",
  },
};

export default function HowClothingManufacturingWorksPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Clothing Manufacturing Works: From Design to Finished Garment",
    description:
      "A plain-language overview of the full apparel manufacturing process — design, tech pack, sampling, production, QC, and export.",
    author: {
      "@type": "Organization",
      name: "Fenalt",
      url: "https://fenalt.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Fenalt",
      url: "https://fenalt.com",
    },
    url: "https://fenalt.com/learn/how-clothing-manufacturing-works",
    mainEntityOfPage: "https://fenalt.com/learn/how-clothing-manufacturing-works",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      {
        "@type": "ListItem",
        position: 3,
        name: "How Clothing Manufacturing Works",
        item: "https://fenalt.com/learn/how-clothing-manufacturing-works",
      },
    ],
  };

  const steps = [
    {
      number: "01",
      title: "Design & Concept",
      body: "The process starts with a design — a sketch, mood board, or reference garment. At this stage, the brand decides on silhouette, fabric direction, colourway, and any special techniques (embroidery, printing, washes). This design intent needs to eventually be translated into precise technical documents.",
    },
    {
      number: "02",
      title: "Tech Pack Development",
      body: "A tech pack (technical package) is the blueprint manufacturers work from. It documents every measurement, fabric specification, trim detail, seam type, print placement, and construction instruction. Without a clear tech pack, manufacturers cannot produce consistent garments. Vague tech packs are the most common cause of sampling delays.",
    },
    {
      number: "03",
      title: "Pattern Making",
      body: "Once the tech pack is finalised, a pattern maker converts measurements and construction details into physical or digital cut patterns — the templates used to cut fabric pieces. Most modern manufacturers use CAD (computer-aided design) pattern software, though some traditional techniques persist for complex tailored garments.",
    },
    {
      number: "04",
      title: "Fabric & Material Sourcing",
      body: "Before samples can be made, fabric must be sourced and lab dip–approved. This means selecting the correct fabric composition, weight (measured in GSM), and colourway from a mill or fabric merchant, then approving dyed swatches against the brand's colour standard. Trim sourcing (threads, zippers, buttons, labels) happens in parallel.",
    },
    {
      number: "05",
      title: "Prototype / Fit Sampling",
      body: "The first physical garment — called a prototype or first fit sample — is sewn to test how the pattern translates into a real garment. It checks fit, drape, proportion, and stitching. Multiple sample rounds may follow before the brand signs off on a final approved sample (sometimes called a golden sample or SMS — salesman's sample).",
    },
    {
      number: "06",
      title: "Pre-Production Approval",
      body: "Once the final sample is approved, a pre-production (PP) sample is made from the actual production materials, in the factory that will produce the bulk order. This confirms that the factory can replicate the approved standard before a full production run begins.",
    },
    {
      number: "07",
      title: "Bulk Production",
      body: "With PP approval given, fabric is cut at scale, sewn in production line sequences, and assembled. In-line quality inspections happen during production — checking measurements, stitching, and construction at regular intervals, not just at the end.",
    },
    {
      number: "08",
      title: "Final Inspection & Quality Control",
      body: "Before garments are packed, a final pre-shipment inspection is conducted. This typically follows a sampling methodology (such as ANSI/ASQ Z1.4 AQL 2.5) to catch defects statistically across the order. Passed garments are then finished — hung, tagged, folded, and packed into cartons.",
    },
    {
      number: "09",
      title: "Export, Shipping & Import",
      body: "Finished cartons are loaded and shipped — either by sea freight (for bulk orders) or air freight (for urgent or small volumes). The brand or their freight forwarder handles customs entry, import duties, and delivery to the final warehouse or fulfilment centre.",
    },
  ];

  const faqs = [
    {
      q: "How long does the full clothing manufacturing process take?",
      a: "It varies significantly by order complexity. Sampling alone — from tech pack to approved sample — can take 3 to 6 weeks with revisions. Bulk production typically adds 4 to 6 weeks. Shipping time depends on destination and method. Allow a minimum of 12–20 weeks for a first collection from scratch.",
    },
    {
      q: "Can a brand skip sampling and go straight to bulk production?",
      a: "Technically possible with blank-based products, but strongly inadvisable for custom cut-and-sew garments. Skipping sampling on a custom design frequently results in fit or quality issues that are very expensive to correct after bulk production.",
    },
    {
      q: "Does Fenalt manage the full manufacturing process?",
      a: "Fenalt operates as an on-the-ground operational liaison in Dhaka, Bangladesh, managing fabric sourcing, sampling, production oversight, quality control, and export coordination with audited independent partner micro-factories.",
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
            A plain-language guide to the full apparel production process — what happens at each stage, what brands need to prepare, and where things commonly go wrong.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
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
      <section className="py-20 lg:py-24 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Key Takeaways</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">What Brands Most Often Get Wrong</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Insufficient tech pack detail causes most sampling delays and misaligned samples.",
              "Skipping sampling entirely is one of the most expensive decisions a brand can make.",
              "Fabric lead times are often overlooked — sourcing and approvals add weeks before a stitch is sewn.",
              "In-line inspection matters more than end-of-line inspection for quality consistency.",
              "Import duty and freight cost planning should happen before order placement, not after.",
              "First-time brands frequently underestimate total timeline by 4 to 8 weeks.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#FAF9F6] border border-[#E5DDD3]">
                <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                <p className="text-sm text-[#6B6560] leading-relaxed">{point}</p>
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
              { href: "/learn/how-to-choose-a-clothing-manufacturer", label: "How to Choose a Clothing Manufacturer" },
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">
            Ready to start your production project?
          </h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt manages the full process — from sampling to export — with on-the-ground oversight in Dhaka, Bangladesh.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300"
          >
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
