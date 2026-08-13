import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Reduce Defects in Apparel Production: Factory Guide",
  description:
    "Explore proven strategies to minimize garment manufacturing defects - implementing poka-yoke jigs, preventative machine maintenance, operator training, and AQL 2.5 auditing.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-reduce-defects-in-apparel-production",
  },
  openGraph: {
    title: "How to Reduce Defects in Apparel Production: Factory Guide",
    description:
      "Explore proven strategies to minimize garment manufacturing defects - implementing poka-yoke jigs, preventative machine maintenance, operator training, and AQL 2.5 auditing.",
    url: "https://fenalt.com/learn/how-to-reduce-defects-in-apparel-production",
  },
};

export default function HowToReduceDefectsInApparelProductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Reduce Defects in Apparel Production: Factory Guide",
    description:
      "A technical guide to reducing garment defects through Poka-Yoke error proofing, sewing machine maintenance, and operator quality training.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-reduce-defects-in-apparel-production",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-reduce-defects-in-apparel-production",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Reduce Defects in Production", item: "https://fenalt.com/learn/how-to-reduce-defects-in-apparel-production" },
    ],
  };

  const strategies = [
    {
      title: "1. Poka-Yoke Mechanical Attachment Jigs",
      desc: "Installing error-proofing devices (magnetic seam guides, custom folder attachments, pneumatic rib hem folders) that physically prevent operators from sewing crooked seams or misaligned hems.",
    },
    {
      title: "2. Scheduled Preventative Sewing Machine Maintenance",
      desc: "Enforcing daily needle replacement schedules (every 8 working hours), checking looper hook timing, and cleaning bobbin cases to eliminate skipped stitches, thread breaks, and oil spots.",
    },
    {
      title: "3. Operator Station Line-Side Retraining Protocols",
      desc: "Utilizing real-time Traffic Light inline QC data to flag operators making recurring handling errors, deploying floor technicians for immediate line-side retraining before bundle completion.",
    },
    {
      title: "4. Fabric Roll Unrolling & Climate Conditioning",
      desc: "Allowing knitted fabric rolls to unroll tension-free on spreading tables for 24 hours in temperature-controlled rooms prior to cutting, preventing post-cut panel contraction.",
    },
    {
      title: "5. Pre-Production Golden Sample Alignment",
      desc: "Mounting an approved physical Golden PP Sample directly at the head of every sewing line, allowing operators and inline inspectors to reference exact seam specs and construction standards.",
    },
    {
      title: "6. Digital Pareto Defect Frequency Analysis",
      desc: "Tracking top defect categories (e.g. 80% of defects caused by 2 specific operations) via digital tablet logs, allowing factory engineers to redesign difficult assembly steps.",
    },
  ];

  const reductionMatrix = [
    { strategy: "Poka-Yoke Jigs", targetedDefects: "Crooked seams, uneven hem widths, pocket misalignment", defectReductionPotential: "60% – 80% Reduction" },
    { strategy: "Daily Needle Changes", targetedDefects: "Needle cutting, fabric pinholes, skipped stitches", defectReductionPotential: "70% – 90% Reduction" },
    { strategy: "24-Hr Fabric Relaxation", targetedDefects: "Seam spirality, length/width distortion post-wash", defectReductionPotential: "50% – 70% Reduction" },
    { strategy: "Inline Traffic Light QC", targetedDefects: "Systemic operator handling errors, wrong stitch density", defectReductionPotential: "40% – 60% Reduction" },
  ];

  const faqs = [
    {
      q: "What is Poka-Yoke in garment manufacturing?",
      a: "Poka-Yoke is a Japanese lean manufacturing term meaning 'error-proofing'. In garment sewing, it refers to mechanical attachments (such as magnetic edge guides, automatic rib folders, or laser alignment lights) that make it physically impossible for operators to sew incorrectly.",
    },
    {
      q: "What is an acceptable defect rate in apparel manufacturing?",
      a: "Commercial standard ANSI/ASQ Z1.4 AQL 2.5 allows a maximum major defect rate of under 2.5% across a bulk production lot. High-performing export factories aim for internal defect rates below 1.5%.",
    },
    {
      q: "How frequently should sewing machine needles be replaced?",
      a: "Sewing machine needles should be replaced every 8 working hours (or immediately upon hitting a metal zipper or hard seam). Worn needle tips develop micro-burrs that sever knitted yarns, causing pinholes post-wash.",
    },
    {
      q: "What is Pareto Analysis in garment defect reduction?",
      a: "Pareto Analysis applies the 80/20 rule to garment quality - identifying the 20% of sewing operations causing 80% of total factory defects, allowing quality managers to target corrective actions precisely.",
    },
    {
      q: "How does fabric relaxation reduce garment sizing defects?",
      a: "Knitted fabric rolls under tension on mill spools contract when unrolled. Allowing rolls to rest un-tensioned for 24 hours before cutting ensures panels maintain accurate CAD dimensions post-cut.",
    },
    {
      q: "How does Fenalt help factories reduce defects in Bangladesh?",
      a: "Fenalt's Dhaka quality engineers audit partner factory needle replacement logs, implement Poka-Yoke folder attachments, track inline Traffic Light data, and enforce AQL 2.5 pre-shipment standards.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Quality Control</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Reduce Defects{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Production: Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Explore proven strategies to minimize garment manufacturing defects - implementing Poka-Yoke jigs, preventative machine maintenance, operator training, and AQL 2.5 auditing.
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Defect Reduction</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Reducing garment defects requires <strong className="font-medium">engineering error-proofing into the sewing line</strong> rather than inspecting flaws after assembly.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            World-class apparel manufacturing focuses on defect prevention at every station. Implementing Poka-Yoke error-proofing attachments, maintaining rigid daily needle replacement logs, relaxing knitted fabric rolls prior to cutting, and deploying real-time inline QC data drastically lower factory defect rates and protect brand margins.
          </p>
        </div>
      </section>

      {/* 6 Strategies */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Factory Engineering</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Proven Defect Reduction Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((s, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{s.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reduction Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Impact Analysis</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Defect Reduction Strategy &amp; Impact Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Prevention Strategy</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/2">Targeted Garment Defects</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Estimated Defect Reduction</th>
                </tr>
              </thead>
              <tbody>
                {reductionMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.strategy}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.targetedDefects}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.defectReductionPotential}</td>
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
              { href: "/learn/common-clothing-quality-problems", label: "Common Clothing Quality Problems & Solutions" },
              { href: "/learn/in-line-quality-control-garment-manufacturing", label: "In-Line Quality Control in Garment Manufacturing" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/learn/what-is-aql-in-apparel-quality-control", label: "What Is AQL in Apparel Quality Control?" },
              { href: "/learn/garment-quality-checklist-for-brands", label: "Garment Quality Checklist for Brands" },
              { href: "/apparel-quality-control-services", label: "Fenalt Factory Quality Control Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Engineer zero-defect manufacturing</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt implements error-proofing jigs, daily machine maintenance, and AQL 2.5 pre-shipment inspections in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
