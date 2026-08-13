import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "CAD Pattern Making for Fashion Brands Explained",
  description:
    "Discover how Computer-Aided Design (CAD) pattern making works — digital vector drafting, automated marker efficiency, DXF export, 3D simulation, and rapid size grading.",
  alternates: {
    canonical: "https://fenalt.com/learn/cad-pattern-making-explained",
  },
  openGraph: {
    title: "CAD Pattern Making for Fashion Brands Explained",
    description:
      "Discover how Computer-Aided Design (CAD) pattern making works — digital vector drafting, automated marker efficiency, DXF export, 3D simulation, and rapid size grading.",
    url: "https://fenalt.com/learn/cad-pattern-making-explained",
  },
};

export default function CadPatternMakingExplainedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "CAD Pattern Making for Fashion Brands Explained",
    description:
      "A technical guide to digital CAD pattern software, vector pattern drafting, marker optimization, and automated fabric yield calculations.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/cad-pattern-making-explained",
    mainEntityOfPage: "https://fenalt.com/learn/cad-pattern-making-explained",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "CAD Pattern Making Explained", item: "https://fenalt.com/learn/cad-pattern-making-explained" },
    ],
  };

  const benefits = [
    {
      title: "1. 0.1mm Vector Seam Precision & Automatic Notching",
      desc: "CAD software eliminates manual ruler and paper drafting inaccuracies, enforcing exact sub-millimetre precision on seam allowances, dart angles, grainlines, and matching notch cutouts.",
    },
    {
      title: "2. Automated Differential Size Grading",
      desc: "Applying computerized grade rule tables scales master base patterns across XS through 3XL in seconds, maintaining exact proportional relationships across complex panel joins.",
    },
    {
      title: "3. Computerized Fabric Marker Optimization",
      desc: "CAD nesting algorithms rotate and interlock panel shapes across fabric roll widths to achieve up to 88%+ fabric utilization, reducing costly raw fabric waste by 5% to 8%.",
    },
    {
      title: "4. Universal Open File Compatibility (DXF / AAMA)",
      desc: "Digital pattern files export to open DXF/AAMA standards, allowing brands to email patterns directly to sample rooms and cutting tables anywhere in the world without physical pattern shipping.",
    },
    {
      title: "5. Integrated 3D Virtual Garment Fitting",
      desc: "Modern CAD suites integrate 3D virtual avatars (like CLO3D or Optitex 3D) to test fabric drape, tension heatmaps, and pattern fit virtually before cutting physical sample cloth.",
    },
    {
      title: "6. Cloud Archiving & Rapid Style Reorders",
      desc: "Digital CAD libraries store approved brand master blocks permanently. Future seasonal reorders or style variations reuse existing proven patterns without redrafting fees.",
    },
  ];

  const markerOptimizationFactors = [
    {
      factor: "Maximum Fabric Yield Calculation",
      detail: "CAD software calculates exact fabric consumption per size ratio prior to cutting, enabling precise yarn and raw fabric purchasing.",
    },
    {
      factor: "Automatic Directional Grain Alignment",
      detail: "Ensures pattern panels respect fabric wale/warp directions and nap rules (e.g. for velvet or brushed fleece) during automated nesting.",
    },
    {
      factor: "Integration with Automated CNC Cutting Tables",
      detail: "CAD plot files drive computerized multi-ply knife cutters directly, cutting hundreds of fabric layers simultaneously with zero human cutting error.",
    },
    {
      factor: "Shrinkage Compensation Adjustments",
      detail: "Pattern makers can scale CAD markers globally by exact fabric wash shrinkage percentages (+2% warp, -1% weft) with a single click.",
    },
  ];

  const faqs = [
    {
      q: "What CAD software programs are standard in garment manufacturing?",
      a: "Lectra Modaris, Gerber Technology (AccuMark), Optitex, EFI Optitex, and CLO 3D are the primary industrial CAD pattern making software packages used by garment factories worldwide.",
    },
    {
      q: "Can physical paper patterns be converted into digital CAD files?",
      a: "Yes. Factories convert physical paper patterns into vector CAD files using digitizing boards (stylus tracing), high-resolution photo digitizers, or optical scanner software.",
    },
    {
      q: "What file extension should I ask for when requesting my CAD patterns?",
      a: "Always request pattern exports in open DXF format with AAMA/ASTM specs (e.g. .DXF with associated .RUL grade rule files). This ensures your patterns can be opened by any factory regardless of their specific CAD software brand.",
    },
    {
      q: "How does CAD marker making save money for fashion brands?",
      a: "Fabric accounts for 60% to 70% of a garment's FOB manufacturing cost. CAD marker nesting optimizes panel placement to minimize fabric waste, saving 5% to 8% in total raw material cost per order.",
    },
    {
      q: "Is 3D virtual CAD sampling accurate enough to replace physical samples?",
      a: "3D virtual sampling accelerates early fit evaluation and silhouette testing, significantly reducing physical proto revisions. However, final pre-production approval still requires a physical PP sample to verify real-world fabric handfeel and wash behavior.",
    },
    {
      q: "Does Fenalt use CAD pattern making for client projects?",
      a: "Yes. Fenalt's technical design hub in Dhaka uses professional CAD pattern engineering for all sampling, size grading, marker nesting, and automated CNC cutting coordination.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Patterns</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            CAD Pattern Making{" "}
            <span className="italic font-medium text-[#2D5016]">for Fashion Brands Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Computer-Aided Design (CAD) pattern making digitizes garment engineering — enabling sub-millimetre vector accuracy, instant size grading, and maximum fabric yield.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Monitor size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Digital Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">CAD pattern making</strong> replaces paper drafting with vector geometry, connecting design tech packs directly to automated factory cutting tables.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Digital CAD software is the operational standard in modern industrial apparel manufacturing. Converting paper patterns into vector CAD files allows pattern engineers to modify seam lines instantly, grade size runs mathematically, and calculate optimal cutting markers that reduce fabric consumption.
          </p>
        </div>
      </section>

      {/* 6 Benefits */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Advantages</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Capabilities of Digital CAD Pattern Making</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{b.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marker Optimization */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Cost Efficiency</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">How CAD Marker Making Reduces Unit Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {markerOptimizationFactors.map((m, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{m.factor}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{m.detail}</p>
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
              { href: "/learn/what-is-pattern-making", label: "What Is Pattern Making in Clothing Production?" },
              { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: Key Differences" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure (POM) in Garments?" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/apparel-pattern-making-services", label: "Fenalt CAD Pattern Making & Grading Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Digitize your garment patterns</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt converts tech packs into production CAD patterns, nested size grading, and optimized cutting markers in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
