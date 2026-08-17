import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Plan a Small-Batch Apparel Launch",
  description:
    "A strategic roadmap for fashion startups launching small-batch clothing collections - low MOQs, fabric stock sourcing, pre-orders, tech packs, and risk-managed inventory.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/how-to-plan-small-batch-apparel-launch",
  },
  openGraph: {
    title: "How to Plan a Small-Batch Apparel Launch",
    description:
      "A strategic roadmap for fashion startups launching small-batch clothing collections - low MOQs, fabric stock sourcing, pre-orders, tech packs, and risk-managed inventory.",
    url: "https://www.fenalt.com/learn/how-to-plan-small-batch-apparel-launch",
  },
};

export default function HowToPlanSmallBatchApparelLaunchPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Plan a Small-Batch Apparel Launch",
    description:
      "A step-by-step launch framework for emerging fashion brands entering production with low minimum quantities.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/how-to-plan-small-batch-apparel-launch",
    mainEntityOfPage: "https://www.fenalt.com/learn/how-to-plan-small-batch-apparel-launch",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Plan Small Batch Launch", item: "https://www.fenalt.com/learn/how-to-plan-small-batch-apparel-launch" },
    ],
  };

  const steps = [
    {
      title: "1. Define a Tight 3 to 4 Piece Capsule Collection",
      desc: "Limit your initial launch to a focused core matrix (e.g. 1 hero hoodie, 2 heavyweight t-shirts, 1 sweatpant). Sharing fabric bases across styles maximizes fabric roll yield and reduces MOQs.",
    },
    {
      title: "2. Source High-Quality Mill Stock Fabrics",
      desc: "Bypass high custom mill dyeing minimums (300+ meters) by selecting pre-knitted stock combed cotton or French Terry fleece in curated core colors (black, heather grey, off-white, olive).",
    },
    {
      title: "3. Build Tech Packs & Order Pre-Production Golden Samples",
      desc: "Draft 2D CAD tech packs with complete POM measurement tables and sample 2 to 3 iterations. Test wash shrinkage, print curing, and fit until you sign off on a flawless golden sample.",
    },
    {
      title: "4. Run Pre-Order Marketing & Test Demand",
      desc: "Use high-resolution photography or 3D digital renders of approved golden samples to drive pre-orders, validating market demand and refining size ratio curves before placing bulk production.",
    },
    {
      title: "5. Execute Low MOQ Factory Production (50–100 Units/Style)",
      desc: "Place your bulk cutting order with a specialized small-batch factory. Enforce AQL 2.5 quality control inspections at cutting, sewing line assembly, and final polybag packing.",
    },
    {
      title: "6. Customer Fulfillment & Rapid Reorder Pipeline",
      desc: "Fulfill customer orders promptly, collect fit feedback, analyze size curve sell-through, and immediately place rapid reorders for winning hero items while maintaining low inventory overhead.",
    },
  ];

  const launchTimelineMatrix = [
    { phase: "Phase 1: Concept & Tech Pack Drafting", duration: "Weeks 1 – 2", budgetShare: "10% of Launch Capital", keyMilestone: "Finalize POM measurement tables, bill of materials, and vector artwork." },
    { phase: "Phase 2: Proto Sampling & Fit Approvals", duration: "Weeks 3 – 5", budgetShare: "15% of Launch Capital", keyMilestone: "Receive and audit 1st physical sample; execute 3x wash shrinkage test." },
    { phase: "Phase 3: Pre-Orders & Size Ratio Allocation", duration: "Weeks 6 – 7", budgetShare: "15% Marketing Spend", keyMilestone: "Launch campaign using golden samples; lock in size curve quantities." },
    { phase: "Phase 4: Bulk Small-Batch Sewing & QC", duration: "Weeks 8 – 11", budgetShare: "50% Production FOB", keyMilestone: "Bulk fabric cutting, screen printing, line sewing, AQL 2.5 inspection." },
    { phase: "Phase 5: Freight Shipping & E-Commerce Launch", duration: "Weeks 12 – 13", budgetShare: "10% Freight & Duty", keyMilestone: "Air/Ocean freight delivery to warehouse; customer order fulfillment." },
  ];

  const faqs = [
    {
      q: "What quantity qualifies as a small-batch apparel launch?",
      a: "Small-batch clothing production typically ranges from 50 to 150 units per style across a full size run (XS to 2XL), allowing startups to enter the market with manageable inventory capital.",
    },
    {
      q: "Why are per-unit costs higher for small-batch production runs?",
      a: "Small production runs amortize fixed setup expenses (digital marker creation, cutting table spreading, screen printing frame setup, machine thread re-tooling) over fewer units, resulting in a slightly higher per-unit FOB price.",
    },
    {
      q: "Should I pre-sell my small-batch collection before ordering bulk production?",
      a: "Running pre-orders using approved golden samples is an excellent way to fund production and lock in accurate size curve ratios. Ensure sample fit and factory lead times are 100% verified to avoid delivery delays.",
    },
    {
      q: "How many styles should be in a first-time clothing drop?",
      a: "A 3-to-4 style capsule collection (such as 1 hoodie, 2 t-shirts, and 1 sweatpant) is optimal for a debut drop. Focus capital on exceptional fabric weight and fit rather than spreading funds across 15 different SKUs.",
    },
    {
      q: "Can I use custom neck labels and hangtags in a small-batch launch?",
      a: "Yes. Custom woven neck labels and printed hangtags can be produced in batches of 500 to 1,000 units at low cost. The factory holds excess labels for future reorder runs.",
    },
    {
      q: "How does Fenalt assist with small-batch apparel launches in Dhaka?",
      a: "Fenalt's Dhaka technical team manages tech pack creation, proto sampling, stock fabric sourcing, low MOQ sewing line allocation (50–100 units), and AQL 2.5 quality control for startup labels.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Low MOQ &amp; Startups</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Plan a{" "}
            <span className="italic font-medium text-[#2D5016]">Small-Batch Apparel Launch.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A step-by-step launch framework for fashion startups entering production - low MOQs, fabric stock sourcing, pre-orders, tech packs, and risk-managed inventory.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Startup Execution</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Launching a clothing brand successfully comes down to <strong className="font-medium">disciplined execution: tight capsule design, golden samples, and low MOQ pilot runs</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Planning a small-batch apparel launch allows emerging designers to validate products with real customers while minimizing inventory risk. By focusing on a tight 3-to-4 piece capsule matrix, utilizing high-grade mill stock fabrics, locking in pre-production golden samples, and ordering small batches (50 to 100 units/style), startups build sustainable brand momentum.
          </p>
        </div>
      </section>

      {/* 6 Launch Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Step-by-Step Roadmap</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Stages of a Small-Batch Apparel Launch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{st.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Timeline Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Master Timeline</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">12-Week Small-Batch Launch Timeline</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Launch Phase</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/6">Duration</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Budget Allocation</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Key Deliverable</th>
                </tr>
              </thead>
              <tbody>
                {launchTimelineMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.phase}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.duration}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.budgetShare}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.keyMilestone}</td>
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
              { href: "/learn/what-does-low-moq-mean", label: "What Does Low MOQ Mean in Clothing Manufacturing?" },
              { href: "/learn/low-moq-vs-bulk-manufacturing", label: "Low MOQ vs Bulk Manufacturing: What Changes?" },
              { href: "/learn/how-many-units-for-new-fashion-brand", label: "How Many Units Should a New Brand Produce?" },
              { href: "/learn/startups-prepare-for-first-production-run", label: "How Startups Prepare for First Production Run" },
              { href: "/learn/reduce-risk-when-launching-clothing-collection", label: "How to Reduce Risk When Launching a Collection" },
              { href: "/low-moq-apparel-manufacturing", label: "Fenalt Small-Batch Launch Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Plan your small-batch clothing launch</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt guides emerging clothing labels through tech packs, sampling, stock fabric selection, and small-batch production in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
