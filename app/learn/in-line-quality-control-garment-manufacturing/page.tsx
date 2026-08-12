import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "In-Line Quality Control in Garment Manufacturing",
  description:
    "Explore In-Line Quality Control (IPQC) during garment assembly — Traffic Light Systems, roving inspectors, operator station checks, and instant defect prevention.",
  alternates: {
    canonical: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
  },
  openGraph: {
    title: "In-Line Quality Control in Garment Manufacturing",
    description:
      "Explore In-Line Quality Control (IPQC) during garment assembly — Traffic Light Systems, roving inspectors, operator station checks, and instant defect prevention.",
    url: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
  },
};

export default function InLineQualityControlGarmentManufacturingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "In-Line Quality Control in Garment Manufacturing",
    description:
      "A technical operational guide to In-Process Quality Control (IPQC) and real-time sewing line defect management.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
    mainEntityOfPage: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "In-Line Quality Control", item: "https://fenalt.com/learn/in-line-quality-control-garment-manufacturing" },
    ],
  };

  const systems = [
    { title: "1. Roving In-Line Quality Auditors", desc: "Roving inspectors continuously check 7 to 10 garments per operator station during live sewing, correcting machine tension or operator handling issues on the spot." },
    { title: "2. The Traffic Light System (Green / Yellow / Red)", desc: "Operator stations display visual indicators. Green = zero defects; Yellow = 1 minor defect detected; Red = machine halted for line supervisor retraining." },
    { title: "3. Critical Operation Checkpoints", desc: "Placing dedicated stationary QC auditors at high-risk assembly stages: collar attaching, sleeve setting, and zipper installation." },
    { title: "4. Real-Time Defect Log Tracking", desc: "Digital tablets record defect frequencies (e.g. skipped stitches at station 4) to identify machine malfunction trends immediately." },
  ];

  const faqs = [
    {
      q: "What is the difference between In-Line QC and End-of-Line QC?",
      a: "In-Line QC inspects work-in-progress components while garments are actively being sewn. End-of-Line QC inspects fully assembled garments before washing or finishing.",
    },
    {
      q: "Why is In-Line QC superior to catching defects at final packing?",
      a: "In-Line QC prevents defect replication. Catching an error on line station 3 saves hundreds of units from being sewn incorrectly.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction &amp; Quality</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            In-Line Quality Control{" "}
            <span className="italic font-medium text-[#2D5016]">in Garment Manufacturing.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            In-Line Quality Control (IPQC) catches sewing errors at the exact machine station where they occur — preventing mass defects and costly re-work.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Activity size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Live Line Oversight</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">In-Line Quality Control</strong> uses roving inspectors and Traffic Light Systems to catch operator errors in real time during sewing.
            </p>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Inline Methodologies</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Pillars of In-Line QC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((s, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{s.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{s.desc}</p>
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

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-to-check-during-clothing-production", label: "What Should Be Checked During Clothing Production?" },
              { href: "/learn/final-inspection-finished-garments", label: "Final Inspection for Finished Garments" },
              { href: "/learn/apparel-quality-control-explained", label: "Apparel Quality Control Framework" },
              { href: "/factory-quality-control-bangladesh", label: "Fenalt Factory Quality Control Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Real-time inline quality management</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt enforces Traffic Light IPQC protocols across every partner sewing line in Dhaka — ensuring zero systemic defects.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
