import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Manufacture Hoodies: Complete Technical Guide",
  description:
    "Learn how luxury hoodies are manufactured - selecting 400–500+ GSM fleece/French Terry, double-layered hood construction, kangaroo pocket bartacking, and heavy ribbing.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/how-to-manufacture-hoodies",
  },
  openGraph: {
    title: "How to Manufacture Hoodies: Complete Technical Guide",
    description:
      "Learn how luxury hoodies are manufactured - selecting 400–500+ GSM fleece/French Terry, double-layered hood construction, kangaroo pocket bartacking, and heavy ribbing.",
    url: "https://www.fenalt.com/learn/how-to-manufacture-hoodies",
  },
};

export default function HowToManufactureHoodiesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Manufacture Hoodies: Complete Technical Guide",
    description:
      "A technical manufacturing guide for heavy luxury streetwear hoodies - covering fleece GSM weights, double-layer hoods, flatlock stitching, and pocket construction.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/how-to-manufacture-hoodies",
    mainEntityOfPage: "https://www.fenalt.com/learn/how-to-manufacture-hoodies",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Manufacture Hoodies", item: "https://www.fenalt.com/learn/how-to-manufacture-hoodies" },
    ],
  };

  const features = [
    {
      title: "1. Heavyweight Cotton Fleece & French Terry (400–550 GSM)",
      desc: "Luxury streetwear hoodies demand 100% combed cotton heavy loop-back fleece or 450 GSM French Terry for structured drape, plush warmth, and zero fabric sagging.",
    },
    {
      title: "2. Double-Layered Self-Lined Hood Construction",
      desc: "Crafting double-shell hoods (lined with identical outer fabric) ensures the hood maintains a structured, upright shape without collapsing flat against the back.",
    },
    {
      title: "3. Heavy 400 GSM 2x2 Cotton/Spandex Ribbing",
      desc: "Matching body fleece with substantial 400 GSM 2x2 elastane-reinforced ribbing on sleeve cuffs and waistband to prevent shape distortion after repeated wearing.",
    },
    {
      title: "4. Reinforced Kangaroo Pocket Bartacking & Interlining",
      desc: "Applying high-density bartack stitches across top pocket stress corners and fusing woven interlining tape behind pocket seams prevents fabric tearing under heavy load.",
    },
    {
      title: "5. Custom Metal Hardware (Eyelets & Aglets)",
      desc: "Installing custom-engraved metal eyelets around hood drawstring openings and capping flat cotton drawcords with engraved metal aglets elevates retail brand perception.",
    },
    {
      title: "6. Industrial Bio-Washing & Pre-Shrinking Treatments",
      desc: "Pre-washing heavy fleece bodies with silicone softeners or vintage pigment washes relaxes cotton fibers and eliminates post-purchase shrinkage.",
    },
  ];

  const hoodieMatrix = [
    {
      feature: "Fabric Weight (GSM)",
      budgetBlank: "280 GSM – 320 GSM Poly-Cotton",
      luxuryCutAndSew: "420 GSM – 500+ GSM 100% Combed Cotton",
    },
    {
      feature: "Hood Construction",
      budgetBlank: "Single-layer fabric or thin jersey lining",
      luxuryCutAndSew: "Double-layered self-fabric heavy hood",
    },
    {
      feature: "Cuff & Hem Ribbing",
      budgetBlank: "Lightweight 220 GSM 1x1 ribbing",
      luxuryCutAndSew: "Heavyweight 400 GSM 2x2 cotton/spandex ribbing",
    },
    {
      feature: "Pocket Stress Reinforcement",
      budgetBlank: "Standard single-needle stitching",
      luxuryCutAndSew: "28-stitch bartacks + woven interlining tape",
    },
  ];

  const faqs = [
    {
      q: "What makes a hoodie feel heavy, rigid, and premium?",
      a: "A combination of high GSM fabric (400+ GSM), 100% long-staple combed cotton yarns, unbrushed loopback French Terry construction, double-layered self-lined hoods, and heavy 400 GSM 2x2 ribbing.",
    },
    {
      q: "What decoration methods work best on heavyweight hoodies?",
      a: "High-density 3D puff screen printing, traditional plastisol print, direct 3D embroidery, and chenille patches work exceptionally well on heavy cotton fleece.",
    },
    {
      q: "What is the difference between a raglan sleeve and a drop-shoulder hoodie?",
      a: "A raglan sleeve extends in one continuous piece from the collar down under the arm (common in athletic wear). A drop-shoulder sleeve sets the shoulder seam 5cm to 10cm further down the arm, creating the relaxed, boxy silhouette essential in modern streetwear.",
    },
    {
      q: "How do I prevent hoodie zippers from waving post-wash?",
      a: "Zip placket waving occurs when heavy fleece contracts along light zipper tape. Applying fusible woven interlining tape along front placket edges before sewing zippers keeps plackets flat.",
    },
    {
      q: "What is the minimum order quantity (MOQ) for custom hoodies?",
      a: "Fenalt manufactures custom cut-and-sew streetwear hoodies with low MOQs starting at 50 to 100 units per style in Dhaka.",
    },
    {
      q: "How does Fenalt execute custom hoodie production in Dhaka?",
      a: "Fenalt's technical design team in Dhaka manages 450+ GSM French Terry fabric sourcing, CAD drop-shoulder pattern grading, double-layer hood assembly, and AQL 2.5 quality auditing.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Streetwear</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Manufacture Hoodies:{" "}
            <span className="italic font-medium text-[#2D5016]">Technical Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to manufacturing heavy streetwear hoodies - selecting 400–500+ GSM French Terry, double-layered hood construction, heavy ribbing, and custom hardware.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Flame size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Streetwear Flagship</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The hoodie is the centerpiece of any streetwear brand: <strong className="font-medium">fabric GSM, hood structure, and boxy proportions</strong> define retail luxury.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Manufacturing a luxury streetwear hoodie requires far more than printing graphics on off-the-shelf blanks. Engineering a signature hoodie involves sourcing 400+ GSM 100% cotton French Terry, constructing double-layered self-fabric hoods that stand upright, attaching heavy 2x2 ribbing, and reinforcing kangaroo pockets with dense bartacks.
          </p>
        </div>
      </section>

      {/* 6 Technical Features */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Standards</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Elements of a Luxury Streetwear Hoodie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{f.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoodie Comparison Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Construction Spec</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Budget Blank vs Luxury Cut-and-Sew Hoodie</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Construction Feature</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Budget Blank Hoodie</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-[37.5%]">Fenalt Custom Cut-and-Sew Hoodie</th>
                </tr>
              </thead>
              <tbody>
                {hoodieMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.feature}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.budgetBlank}</td>
                    <td className="p-4 text-sm text-[#1A1A1A] border-t border-[#E5DDD3] leading-relaxed align-top font-medium">{row.luxuryCutAndSew}</td>
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
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/how-to-manufacture-a-streetwear-collection", label: "How to Manufacture a Streetwear Collection" },
              { href: "/learn/puff-print-vs-screen-print-streetwear", label: "Puff Print vs Screen Print for Streetwear" },
              { href: "/learn/what-makes-high-quality-streetwear", label: "What Makes High-Quality Streetwear?" },
              { href: "/learn/custom-hangtags-neck-labels-apparel", label: "Garment Trims and Hardware Sourcing Guide" },
              { href: "/hoodie-manufacturing", label: "Fenalt Custom Hoodie Manufacturing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture custom heavy hoodies</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt sources 450+ GSM French Terry, constructs double-layered heavy hoods, and sews custom streetwear hoodies in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
