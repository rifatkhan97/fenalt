import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "How Stitch Type Affects Garment Quality",
  description:
    "Learn how industrial sewing stitch classes (ISO 4915 / ASTM D6193) - Lockstitch 301, Overlock 504, Coverstitch 605, Chainstitch 401, and Flatlock - dictate seam strength, flexibility, and longevity.",
  alternates: {
    canonical: "https://www.fenalt.com/learn/stitch-type-and-garment-quality",
  },
  openGraph: {
    title: "How Stitch Type Affects Garment Quality",
    description:
      "Learn how industrial sewing stitch classes (ISO 4915 / ASTM D6193) - Lockstitch 301, Overlock 504, Coverstitch 605, Chainstitch 401, and Flatlock - dictate seam strength, flexibility, and longevity.",
    url: "https://www.fenalt.com/learn/stitch-type-and-garment-quality",
  },
};

export default function StitchTypeAndGarmentQualityPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Stitch Type Affects Garment Quality",
    description:
      "A technical guide to ISO 4915 sewing stitch classifications, SPI density, and seam elasticity in clothing manufacturing.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/stitch-type-and-garment-quality",
    mainEntityOfPage: "https://www.fenalt.com/learn/stitch-type-and-garment-quality",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Stitch Type and Garment Quality", item: "https://www.fenalt.com/learn/stitch-type-and-garment-quality" },
    ],
  };

  const stitches = [
    {
      name: "1. Lockstitch (Class 301)",
      isoCode: "ISO 4915 Class 301",
      bestFor: "Woven shirts, denim pocket joins, zippers, and patch pockets.",
      description: "Formed by interlocking a top needle thread with a bottom bobbin thread. Creates a strong, neat, non-stretch seam with identical appearance on both face and reverse. Ideal for structural wovens, but pops if stretched on knits.",
    },
    {
      name: "2. 2-Needle Chainstitch (Class 401)",
      isoCode: "ISO 4915 Class 401",
      bestFor: "Denim inseams, waistband attachments, and heavy workwear seams.",
      description: "Formed by one or more needle threads passing through the fabric and looping with a looper thread underneath. Offers higher elasticity and tensile strength than lockstitch, stretching along seam lines under heavy load.",
    },
    {
      name: "3. 3-Thread / 4-Thread Overlock (Class 504 / 514)",
      isoCode: "ISO 4915 Class 504/514",
      bestFor: "T-shirt, hoodie, and sweatshirt main side seams and shoulder joins.",
      description: "Trims excess fabric edge while binding raw edges with looping threads to prevent fraying. Essential for knitted garments because the looper stitches stretch naturally with elastic fabric expansion.",
    },
    {
      name: "4. 5-Thread Safety Stitch (Class 516)",
      isoCode: "ISO 4915 Class 516",
      bestFor: "Woven trouser side seams, denim outseams, and casual shirts.",
      description: "Combines a 3-thread overlock edge-finish (Class 504) with a parallel 2-thread chainstitch seam (Class 401) in a single operation, producing an ultra-durable, high-strength seam.",
    },
    {
      name: "5. Twin-Needle Coverstitch & Flatlock (Class 602 / 605)",
      isoCode: "ISO 4915 Class 602/605",
      bestFor: "T-shirt sleeve hems, bottom hem hems, neck taping, and activewear flat seams.",
      description: "Uses top cover threads and bottom looper threads to cover raw hem edges with decorative, highly elastic stitching. Flatlock (Class 607) butt-joins two fabric edges flat without seam bulk for activewear comfort.",
    },
    {
      name: "6. Bartack & Keyhole Buttonhole Stitches (Class 304 / 101)",
      isoCode: "ISO 4915 Class 304/101",
      bestFor: "Pocket corners, belt loops, fly zippers, buttonholes, and stress points.",
      description: "High-density zig-zag lockstitches concentrated over small areas to reinforce stress points and prevent seam ripping under extreme tension.",
    },
  ];

  const stitchMatrix = [
    { garmentArea: "T-Shirt Side Seam", recommendedStitch: "4-Thread Overlock (Class 514)", spiTarget: "10 – 12 SPI", keyRequirement: "Elasticity to prevent popping when put on." },
    { garmentArea: "T-Shirt Bottom & Sleeve Hem", recommendedStitch: "Twin-Needle Coverstitch (Class 605)", spiTarget: "10 – 12 SPI", keyRequirement: "Clean cover finish with 4-way stretch recovery." },
    { garmentArea: "Hoodie Kangaroo Pocket Corners", recommendedStitch: "28-Stitch Bartack (Class 304)", spiTarget: "High Density", keyRequirement: "Stress-point reinforcement against heavy pocket loading." },
    { garmentArea: "Denim Inseam / Waistband", recommendedStitch: "Double-Chainstitch (Class 401)", spiTarget: "8 – 10 SPI", keyRequirement: "High tensile strength and workwear abrasion resistance." },
  ];

  const faqs = [
    {
      q: "What is SPI in garment manufacturing?",
      a: "SPI stands for Stitches Per Inch. It measures stitch density along a seam line. Premium quality knits specify 10 to 12 SPI. Lower SPI (under 8) results in weak seams that pull apart or pop under tension; excessively high SPI (over 14) can cut delicate yarns.",
    },
    {
      q: "Why do t-shirt hem threads pop when stretched?",
      a: "Hem threads pop when an inflexible lockstitch (Class 301) is incorrectly used instead of an elastic coverstitch (Class 605). Lockstitch threads do not stretch, breaking immediately when elastic knit fabric expands.",
    },
    {
      q: "What is the difference between Overlock and Flatlock stitching?",
      a: "Overlock joins two fabric panels together with an internal raised seam allowance ridge. Flatlock (Class 607) butt-joins two raw fabric edges perfectly flat side-by-side with no interior seam ridge, eliminating skin chafing in activewear.",
    },
    {
      q: "What is a Bartack stitch and why is it necessary?",
      a: "A bartack is a tight, repeating zig-zag stitch applied across stress points - such as pocket corners, belt loops, zipper bottoms, and sleeve plackets - to prevent fabric tearing under heavy pull force.",
    },
    {
      q: "How does stitch type affect garment manufacturing cost?",
      a: "Complex stitch classes (like 5-thread safety stitching or 4-needle 6-thread flatlocking) require specialized industrial sewing machines, higher thread consumption, and trained operators - slightly increasing per-unit labor cost while dramatically improving garment durability.",
    },
    {
      q: "How does Fenalt specify stitch standards for client orders?",
      a: "Fenalt's technical design team documents exact stitch classes (ISO 4915), thread Tex sizes, and SPI targets in brand tech packs, auditing seam quality on the micro-factory floor in Dhaka.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Garment Construction</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How Stitch Type Affects{" "}
            <span className="italic font-medium text-[#2D5016]">Garment Quality.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to industrial ISO 4915 sewing stitch classes - Lockstitch 301, Overlock 504, Coverstitch 605, Chainstitch 401, and SPI density standards.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scissors size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Seam Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Selecting the wrong stitch class can cause <strong className="font-medium">seam popping, fabric fraying, or unravelling</strong> - even when high-end fabrics are used.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In apparel manufacturing, stitch type dictates how seams respond to stress, stretch, and washing. Knitted fabrics require elastic looping stitches (like overlock and coverstitch) that extend with body movement, whereas structural wovens depend on high-tenacity lockstitches or chainstitches. Specifying correct ISO stitch classes in tech packs guarantees physical garment durability.
          </p>
        </div>
      </section>

      {/* 6 Stitch Classes */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Classification Guide</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Industrial Sewing Stitch Classes</h2>
          <div className="space-y-6">
            {stitches.map((st, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-medium text-[#FAF9F6]">{st.name}</h3>
                  <span className="inline-block px-3 py-1 bg-[#2D5016] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider">{st.isoCode}</span>
                </div>
                <p className="text-xs text-[#C8A882] font-semibold mb-3 uppercase tracking-wider">Best For: {st.bestFor}</p>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stitch Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technical Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Stitch Class Application Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Garment Area</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Recommended Stitch Class</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/6">Target SPI</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Performance Goal</th>
                </tr>
              </thead>
              <tbody>
                {stitchMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.garmentArea}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.recommendedStitch}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.spiTarget}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.keyRequirement}</td>
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
              { href: "/learn/stitch-type-and-garment-quality", label: "Apparel Seam Types & Construction Explained" },
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/learn/what-makes-high-quality-streetwear", label: "Neckline Types for T-Shirts & Sweatshirts" },
              { href: "/learn/what-makes-high-quality-streetwear", label: "Pocket Types in Apparel Manufacturing" },
              { href: "/learn/custom-hangtags-neck-labels-apparel", label: "Garment Trims and Hardware Sourcing Guide" },
              { href: "/cut-and-sew-clothing-manufacturer-bangladesh", label: "Fenalt Cut-and-Sew Manufacturing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision seam engineering</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt enforces exact ISO 4915 stitch classes, SPI targets, and seam allowances across micro-factory lines in Dhaka.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
