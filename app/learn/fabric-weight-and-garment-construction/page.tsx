import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "How Fabric Weight Affects Garment Construction",
  description:
    "Explore how fabric weight (GSM) impacts sewing needle selection, seam thread tension, ribbing choices, pattern volume ease, and structural reinforcement.",
  alternates: {
    canonical: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
  },
  openGraph: {
    title: "How Fabric Weight Affects Garment Construction",
    description:
      "Explore how fabric weight (GSM) impacts sewing needle selection, seam thread tension, ribbing choices, pattern volume ease, and structural reinforcement.",
    url: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
  },
};

export default function FabricWeightAndGarmentConstructionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Fabric Weight Affects Garment Construction",
    description:
      "A technical analysis of how fabric GSM dictates sewing machine needle gauges, thread tension, seam reinforcement, and pattern grading.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
    mainEntityOfPage: "https://fenalt.com/learn/fabric-weight-and-garment-construction",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Fabric Weight and Construction", item: "https://fenalt.com/learn/fabric-weight-and-garment-construction" },
    ],
  };

  const structuralImpacts = [
    {
      title: "1. Sewing Machine Needle Gauge & Point Selection",
      desc: "Lightweight 150 GSM jersey requires fine 75/11 ballpoint needles to prevent fiber tearing; heavy 450+ GSM French Terry fleece demands 90/14 or 100/16 heavy ballpoint needles to penetrate thick fabric layers cleanly without skipping stitches.",
    },
    {
      title: "2. Thread Tex Size & Machine Seam Tension Calibration",
      desc: "Heavyweight knits exert higher stress on seams. Using thin thread (Tex 24) on a 450 GSM hoodie causes seam popping under movement; heavy fabrics require high-tenacity core-spun polyester thread (Tex 40+) and recalibrated presser foot tension.",
    },
    {
      title: "3. Collar & Cuff Ribbing GSM Matching",
      desc: "Mismatching body fabric and trim weight causes distortion. Pairing a 450 GSM heavy French Terry body with a flimsy 200 GSM neck ribbing causes collar baconing (waving). Ribbing GSM must be matched proportionally (e.g. 400 GSM 2x2 ribbing).",
    },
    {
      title: "4. Pattern Volume Ease & Internal Seam Bulk Allowance",
      desc: "Thick, heavy fabrics consume physical internal volume at folded seam joins. A pattern drafted for a 180 GSM t-shirt will fit significantly tighter if cut in 300 GSM heavy jersey without adding pattern thickness ease.",
    },
    {
      title: "5. Zipper, Pocket & Stress-Point Reinforcement",
      desc: "Heavy fabric weight pulls on kangaroo pockets, zip plackets, and drawcord eyelets. Heavyweight hoodies require fusible woven interlining tape behind pocket openings and metal eyelets to prevent fabric sagging and tearing.",
    },
    {
      title: "6. Wash Shrinkage & Seam Spirality Dynamics",
      desc: "Heavy knit fabrics hold more moisture during laundering. Pattern makers must apply empirical wash-shrinkage allowances (+3% to +6%) to cut patterns to prevent garment distortion post-wash.",
    },
  ];

  const parametersMatrix = [
    { fabricTier: "Lightweight (140–180 GSM)", needleSize: "75/11 Ballpoint", threadTex: "Tex 24 / Tex 30", ribbingMatch: "200–240 GSM 1x1 Rib", seamAllowance: "0.6 cm Overlock" },
    { fabricTier: "Midweight (200–280 GSM)", needleSize: "80/12 to 90/14 Ballpoint", threadTex: "Tex 30 / Tex 40", ribbingMatch: "280–320 GSM 1x1 or 2x2 Rib", seamAllowance: "0.8 cm Overlock" },
    { fabricTier: "Heavyweight (350–500 GSM)", needleSize: "90/14 to 100/16 Heavy Ballpoint", threadTex: "Tex 40 / Tex 60 Core-Spun", ribbingMatch: "380–420 GSM 2x2 Rib", seamAllowance: "1.0 cm Heavy Overlock + Topstitch" },
  ];

  const faqs = [
    {
      q: "Can the exact same pattern be used for 180 GSM and 450 GSM fabrics?",
      a: "No. Heavy 450 GSM cotton French Terry is thicker and has less natural stretch than 180 GSM single jersey. Sewing a 180 GSM pattern in 450 GSM fabric results in a tighter fit because the thick fabric bulk consumes internal ease at every seam join.",
    },
    {
      q: "Why do heavy hoodies pucker along pocket seams?",
      a: "Puckering occurs when sewing machine presser foot pressure is set too high or needle gauge is too thick, pushing multiple heavy fabric layers unevenly during stitching. Adjusting differential feed and thread tension eliminates pocket seam puckering.",
    },
    {
      q: "What needle type should be used for heavyweight cotton jersey?",
      a: "Heavyweight cotton knits (240–300 GSM) require a medium ballpoint needle (size 80/12 or 90/14). Ballpoint needles slide between knitted yarn loops rather than piercing or cutting the cotton fibers.",
    },
    {
      q: "Why is ribbing weight matching critical for streetwear hoodies?",
      a: "If collar or cuff ribbing is lighter in GSM than the body fleece, the ribbing will stretch out and lose shape after a few wears. Heavyweight 450 GSM hoodies must be paired with substantial 400 GSM 2x2 cotton/spandex ribbing for crisp shape recovery.",
    },
    {
      q: "How does fabric weight affect zipper installation?",
      a: "Heavy fleece bodies weigh down front zip plackets. Without woven interfacing reinforcement behind the zipper tape, heavy hoodies develop wavy, distorted zippers after sewing.",
    },
    {
      q: "How does Fenalt calibrate construction for different fabric weights?",
      a: "Fenalt's Dhaka sample room tests needle gauges, thread Tex sizes, presser foot pressure, and seam allowance ease for each fabric weight during prototype development prior to bulk sewing.",
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
            How Fabric Weight Affects{" "}
            <span className="italic font-medium text-[#2D5016]">Garment Construction.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Fabric GSM dictates sewing needle sizes, thread Tex gauges, machine tension, pattern ease, and ribbing choices. Understand the technical mechanics of sewing different fabric weights.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Garment Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Fabric GSM is not just a material specification — it <strong className="font-medium">dictates the technical machinery setup</strong> and pattern engineering required on the production line.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Changing from a 180 GSM single jersey to a 450 GSM French Terry requires far more than changing raw material rolls. Heavy fabrics alter internal seam bulk, needle penetration resistance, thread stress, and pocket reinforcement requirements. Calibrating garment construction to match fabric weight prevents seam popping, puckering, and fitting errors.
          </p>
        </div>
      </section>

      {/* 6 Structural Impacts */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Dependencies</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Ways Fabric Weight Dictates Construction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {structuralImpacts.map((item, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{item.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Fabric Weight vs Machinery Setup Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Fabric Tier</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Needle Gauge</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Thread Tex</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Ribbing Match</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/6">Seam Allowance</th>
                </tr>
              </thead>
              <tbody>
                {parametersMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.fabricTier}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.needleSize}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.threadTex}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.ribbingMatch}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.seamAllowance}</td>
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
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
              { href: "/learn/how-to-choose-fabric-for-clothing-brand", label: "How to Choose Fabric for a Clothing Brand" },
              { href: "/learn/cotton-fabric-types-explained", label: "Cotton Fabric Types Explained for Fashion Brands" },
              { href: "/apparel-production-management", label: "Fenalt Production Engineering Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Engineered garment construction</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt calibrates sewing machinery setups, thread Tex gauges, and pattern seam allowances to match your exact fabric GSM in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
