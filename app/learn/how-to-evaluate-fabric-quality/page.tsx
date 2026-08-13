import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Evaluate Fabric Quality Before Bulk Production",
  description:
    "Learn how to audit fabric quality prior to bulk sewing — evaluating GSM weight accuracy, dimensional shrinkage, colorfastness, pilling resistance, and 4-Point System roll inspection.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
  },
  openGraph: {
    title: "How to Evaluate Fabric Quality Before Bulk Production",
    description:
      "Learn how to audit fabric quality prior to bulk sewing — evaluating GSM weight accuracy, dimensional shrinkage, colorfastness, pilling resistance, and 4-Point System roll inspection.",
    url: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
  },
};

export default function HowToEvaluateFabricQualityPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Evaluate Fabric Quality Before Bulk Production",
    description:
      "A technical fabric testing guide covering GSM verification, lab-dip color matching, skewing/bowing, and lab wash audits.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-evaluate-fabric-quality",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Evaluate Fabric Quality", item: "https://fenalt.com/learn/how-to-evaluate-fabric-quality" },
    ],
  };

  const tests = [
    {
      name: "1. GSM Circular Cutter & Precision Scale Weigh-In",
      desc: "Cut a 100 cm² fabric sample circle using a circular cutter and weigh it on a digital scale to verify that actual fabric weight matches tech pack GSM specs within ±5% tolerance.",
    },
    {
      name: "2. Dimensional Shrinkage & Spirality (Seam Twist) Test",
      desc: "Mark a 50cm × 50cm benchmark square on raw fabric swatches, perform 3 commercial laundering cycles according to care label specs, and calculate length/width shrinkage % and seam spirality twist.",
    },
    {
      name: "3. Colorfastness to Washing, Light & Crocking (Rubbing)",
      desc: "Rub dry and wet white cotton test cloths against dyed fabric (crockmeter test) to evaluate color bleed, and test colorfastness under home washing and light exposure using grey scale ratings.",
    },
    {
      name: "4. Martindale Abrasion & Surface Pilling Audit",
      desc: "Rub fabric swatches under controlled mechanical friction over 2,000 to 5,000+ cycles to evaluate surface fuzzing, fiber breakage, and pill formation grade (Grade 1 to Grade 5).",
    },
    {
      name: "5. Skewing, Bowing & Grainline Straightness Check",
      desc: "Inspect raw fabric rolls for skewing (diagonal yarn distortion) or bowing (curved width lines) to prevent side seam twisting once garments are cut and assembled.",
    },
    {
      name: "6. ASTM D5430 4-Point System Raw Fabric Roll Inspection",
      desc: "Unroll fabric on an inspection table to detect visual defects (slubs, holes, dye streaks, drop stitches) and calculate penalty points per 100 square yards before cutting.",
    },
  ];

  const fourPointRules = [
    { defectLength: "Defects up to 3 inches (7.5 cm)", penalty: "1 Point", detail: "Minor slubs, small yarn knots, or localized color specks." },
    { defectLength: "Defects 3 to 6 inches (7.5 – 15 cm)", penalty: "2 Points", detail: "Medium slubs, noticeable thick yarn ends." },
    { defectLength: "Defects 6 to 9 inches (15 – 22.5 cm)", penalty: "3 Points", detail: "Long yarn streaks, visible uneven dyeing." },
    { defectLength: "Defects over 9 inches (22.5 cm) or holes", penalty: "4 Points", detail: "Holes, drop stitches, wide oil stains, horizontal bar shading." },
  ];

  const faqs = [
    {
      q: "What is an acceptable fabric shrinkage rate for 100% cotton knits?",
      a: "The standard commercial shrinkage tolerance for unwashed 100% cotton knits is typically ±5% in length and width. Pre-shrunk, compacted, or bio-washed cotton knits achieve under ±3% dimensional stability.",
    },
    {
      q: "What is the 4-Point System in fabric roll inspection?",
      a: "The ASTM D5430 4-Point System is the standard method for inspecting raw fabric rolls. It assigns penalty points (1 to 4) based on defect length per 100 square yards. Fabric rolls exceeding 40 points per 100 sq yds are rejected before cutting.",
    },
    {
      q: "What causes fabric pilling on cotton-polyester blends?",
      a: "Pilling occurs when short surface fibers break and tangle into small balls. Synthetic polyester fibers are stronger than short cotton fibers, holding pills onto the fabric surface. Using long-staple combed cotton and anti-pilling finishing minimizes this issue.",
    },
    {
      q: "Why is seam spirality (seam twist) a fabric quality defect?",
      a: "Spirality occurs when circular knit yarns relax post-wash, causing side seams on t-shirts or hoodies to twist around toward the front of the body. Inspecting fabric skewness before cutting prevents garment twisting.",
    },
    {
      q: "What is a lab dip in fabric color matching?",
      a: "A lab dip is a small fabric swatch dyed by the mill to match a specific Pantone (PMS) color code. The brand team inspects the lab dip under a standardized light box (D65 daylight) and approves the shade band before bulk dyeing.",
    },
    {
      q: "How does Fenalt evaluate fabric quality in Bangladesh?",
      a: "Fenalt's Dhaka technical team inspects raw fabric rolls using 4-Point System inspection tables, verifies GSM with digital scales, conducts lab-dip color matching, and tests dimensional shrinkage before approving fabric for bulk cutting.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Fabrics &amp; Materials</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Evaluate Fabric Quality{" "}
            <span className="italic font-medium text-[#2D5016]">Before Bulk Production.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Audit raw fabric quality prior to cutting — evaluating GSM weight accuracy, shrinkage stability, colorfastness, pilling resistance, and 4-Point System roll inspection.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Quality Control Gate</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Discovering fabric defects <strong className="font-medium">before cutting costs a fraction</strong> of discovering them after thousands of garments are sewn.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Raw fabric is the single largest component of garment production. If bulk fabric arrives with uneven GSM weight, excessive wash shrinkage, or shading variance across rolls, every completed garment will share the defect. Implementing systematic fabric testing before pattern cutting protects your production investment.
          </p>
        </div>
      </section>

      {/* 6 Tests */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Testing Protocol</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Essential Fabric Quality Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((t, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{t.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Point System Guide */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Industrial Standards</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">ASTM D5430 4-Point System Scoring Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Defect Length / Size</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Penalty Points</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-7/12">Typical Defect Examples</th>
                </tr>
              </thead>
              <tbody>
                {fourPointRules.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.defectLength}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.penalty}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.detail}</td>
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
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/fabric-sourcing-guide-for-fashion-brands", label: "Fabric Sourcing Guide for Fashion Brands" },
              { href: "/learn/garment-shrinkage-in-apparel-manufacturing", label: "Garment Shrinkage in Apparel Manufacturing" },
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Raw Fabric Inspection Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Rigorous fabric quality inspection</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt conducts 4-Point System raw fabric roll audits, lab-dip approvals, and GSM weight testing for your apparel orders in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
