import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "How Many Samples Should a Fashion Brand Expect Before Production?",
  description:
    "Learn how many sampling rounds (typically 2 to 4) a clothing brand should expect before bulk manufacturing - and the specific factors that increase or reduce revision cycles.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-many-samples-before-production",
  },
  openGraph: {
    title: "How Many Samples Should a Fashion Brand Expect Before Production?",
    description:
      "Learn how many sampling rounds (typically 2 to 4) a clothing brand should expect before bulk manufacturing - and the specific factors that increase or reduce revision cycles.",
    url: "https://fenalt.com/learn/how-many-samples-before-production",
  },
};

export default function HowManySamplesBeforeProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Many Samples Should a Fashion Brand Expect Before Production?",
    description:
      "A realistic breakdown of sampling rounds, iteration expectations, and sample costs for clothing brands.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-many-samples-before-production",
    mainEntityOfPage: "https://fenalt.com/learn/how-many-samples-before-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How Many Samples Before Production", item: "https://fenalt.com/learn/how-many-samples-before-production" },
    ],
  };

  const samplingRounds = [
    {
      round: "Round 1: Prototype / First Fit Sample",
      focus: "Test general silhouette, basic proportions, and construction feasibility. Minor measurement deviations are expected. Evaluate on a body or dress form.",
      timePerRound: "1–2 weeks (factory production) + transit time if evaluated in person",
      outcome: "Written fit notes listing required adjustments. Rarely signed off at this stage for new styles with a new manufacturer.",
    },
    {
      round: "Round 2: Revised Fit Sample",
      focus: "Incorporates all Round 1 corrections. Evaluates graded measurement accuracy, pocket placement, collar fit, and drape in the revised construction.",
      timePerRound: "1–2 weeks (factory revision) + transit time",
      outcome: "If accurate, may proceed to PP sample. If additional corrections needed, a third round is initiated.",
    },
    {
      round: "Round 3: Second Revision (if required)",
      focus: "Addresses remaining adjustments from Round 2 feedback. More common for complex garments, specialty washes, embellishments, or tight measurement tolerances.",
      timePerRound: "1–2 weeks + transit time",
      outcome: "Sign-off to proceed to PP sample, or additional iteration if needed.",
    },
    {
      round: "Pre-Production (PP) Sample",
      focus: "Made from actual bulk production fabric at the production factory, with all trims, labels, and wash treatments applied. Becomes the Golden Sample upon approval.",
      timePerRound: "1–2 weeks",
      outcome: "Brand sign-off in writing authorises bulk fabric cutting to begin. This is the last opportunity for correction before bulk production starts.",
    },
  ];

  const factorsMoreRounds = [
    { factor: "Incomplete or ambiguous tech pack", detail: "Missing measurements, imprecise construction notes, or colour references requiring interpretation by the factory increase interpretation errors in the first sample." },
    { factor: "New manufacturer relationship", detail: "A factory working with a brand for the first time has no knowledge of the brand's fit preferences and aesthetic standards - more rounds to calibrate." },
    { factor: "Complex construction techniques", detail: "Garments with specialty washes, puff printing, heavy-duty hardware, flatlock seaming, bonded panels, or structured silhouettes require more iterations to perfect." },
    { factor: "Multiple colourways", detail: "Each colourway may have different fabric behaviour, particularly for different-weight dye lots, requiring separate lab dip and fit evaluation." },
    { factor: "Inconsistent or conflicting brand feedback", detail: "Feedback that changes between rounds - or feedback from multiple stakeholders with differing opinions - forces additional revision cycles that resolve the conflict rather than improve the garment." },
    { factor: "High fit precision requirements", detail: "Brands targeting slim-fit silhouettes, athletic sizing, or body-conscious categories have tighter tolerances and more fit sensitivity per measurement deviation." },
  ];

  const factorsFewerRounds = [
    { factor: "Detailed, complete tech pack", detail: "Every measurement, construction detail, fabric specification, and colour reference locked before submission. The single most effective way to reduce sampling rounds." },
    { factor: "Experienced manufacturer in category", detail: "A manufacturer with proven experience in your specific product category (e.g. heavyweight knit fleece) applies known construction standards and requires less interpretation." },
    { factor: "Clear, single-decision-maker feedback", detail: "One person responsible for all brand feedback, with clear written notes referencing specific measurements and spec sheet line items." },
    { factor: "Physical reference garment provided", detail: "Giving the factory a reference garment that represents the target fit standard provides a tangible guide that transcends measurement-only tech packs." },
    { factor: "Established manufacturer relationship", detail: "A factory familiar with your brand's standards, previous approved patterns, and taste profile can produce closer first samples." },
  ];

  const faqs = [
    {
      q: "Is it normal to need 3 or 4 sample revisions for a complex hoodie?",
      a: "Yes. Complex garments - hoodies with embellishments, heavy-duty zippers, custom washes, or puff printing - frequently require 3 rounds before achieving a PP-ready standard. Particularly for new manufacturer relationships, 3 rounds is common even for straightforward styles. Factor this into your production timeline rather than planning for a best-case 1-round scenario.",
    },
    {
      q: "How can I avoid excessive sampling rounds?",
      a: "The most effective single action is providing a detailed, complete tech pack before submission - with exact measurement specifications, point-of-measure tolerances, construction notes, and Pantone colour references. Beyond this: providing a physical reference garment, designating a single feedback decision-maker, and ensuring feedback is specific and written (not verbal or general impressions) significantly reduces revision cycles.",
    },
    {
      q: "Does each sampling round add to the production cost?",
      a: "Yes. Each revision round typically incurs a sampling fee (for labour and materials) and adds one to three weeks to the development timeline. For international brands, physical sample transit also adds cost and time. The upfront investment in a high-quality tech pack - which may cost a few hundred to a few thousand dollars - is typically recovered within the first or second revision round saved.",
    },
    {
      q: "Can I skip from a first prototype directly to a PP sample?",
      a: "Technically possible for simple, low-risk styles (e.g. a basic t-shirt reorder) if the first prototype is exceptionally accurate. For new styles, new manufacturers, or new fabrics - this approach is high risk. PP samples made from bulk production fabric made an inaccurate pattern produce a very expensive starting point for correction, because the approval threshold is the highest at this stage.",
    },
    {
      q: "How much does each sample round cost?",
      a: "Sampling fees vary significantly by manufacturer, garment category, and complexity. As a rough guide, proto and fit samples for knit garments (hoodies, t-shirts) typically range from $30 to $150 USD per sample unit, while more complex woven or embellished styles may range from $80 to $300+ per sample. Labs dips for colour approvals are often charged separately at $5 to $20 per lab dip round. These fees are typically paid upfront.",
    },
    {
      q: "Is it possible to evaluate samples remotely without receiving them in person?",
      a: "Yes - and many brands do. High-resolution photography against a white background, flat-lay measurement photos, and video walkthroughs from the factory are commonly used for remote evaluation. However, remote review has limitations: it cannot capture fabric hand-feel, drape, or subtle construction quality. For initial rounds on new styles, in-person or fit-model evaluation provides more reliable sign-off than photography alone.",
    },
    {
      q: "What happens if I approve a PP sample and it doesn't match bulk production?",
      a: "The signed PP sample becomes the contractual quality standard. If bulk units deviate from it in a measurable way - incorrect measurements, different fabric shade, wrong trim, missing label - the brand has grounds to reject the shipment or request rework. This is why the PP sample approval process must be rigorous, not perfunctory.",
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
            How Many Samples Should a Brand{" "}
            <span className="italic font-medium text-[#2D5016]">Expect Before Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Expecting a first sample to be 100% bulk-ready is the most common planning mistake in fashion product development. Most garments require 2 to 4 revision rounds - here is what actually drives that number.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Repeat size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Iteration Standard</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Standard commercial product development incorporates <strong className="font-medium">2 to 4 sampling iterations</strong> prior to bulk cutting. The exact number depends on tech pack quality, garment complexity, and the brand-factory relationship.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-4">
            <p>
              Sampling is not a failure when revisions are needed - it is the system working as intended. Each revision round catches a category of problem before it can compound across your entire bulk production. The question is not whether to sample, but how to sample efficiently.
            </p>
            <p>
              Understanding what drives additional rounds allows brands to make targeted investments - in their tech pack, in their feedback process, or in their manufacturer selection - that compress the total development cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Rounds */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Typical Sampling Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">Standard Sampling Workflow Before Bulk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {samplingRounds.map((sr, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{sr.round}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed mb-3">{sr.focus}</p>
                <p className="text-xs text-[#9B948E] mb-1"><span className="font-semibold text-[#C8A882]">Time per round:</span> {sr.timePerRound}</p>
                <p className="text-xs text-[#9B948E]"><span className="font-semibold text-[#C8A882]">Typical outcome:</span> {sr.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Risk Factors</p>
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] mb-6">What Increases Revision Rounds</h2>
              <div className="space-y-4">
                {factorsMoreRounds.map((f, i) => (
                  <div key={i} className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{f.factor}</h3>
                    <p className="text-xs text-[#6B6560] leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2D5016] mb-4">Efficiency Drivers</p>
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] mb-6">What Reduces Revision Rounds</h2>
              <div className="space-y-4">
                {factorsFewerRounds.map((f, i) => (
                  <div key={i} className="p-4 bg-[#F2EFE9] border border-[#E5DDD3]">
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{f.factor}</h3>
                    <p className="text-xs text-[#6B6560] leading-relaxed">{f.detail}</p>
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

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/types-of-apparel-samples", label: "The 7 Types of Apparel Samples Explained" },
              { href: "/learn/why-samples-need-multiple-revisions", label: "Why Apparel Samples Sometimes Need Multiple Revisions" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/learn/tech-pack-to-bulk-production", label: "What Happens Between a Tech Pack and Bulk Production?" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Fast-track your sample approvals</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s pattern makers assist with tech pack optimisation to reduce revision cycles and accelerate pre-production sign-off.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
