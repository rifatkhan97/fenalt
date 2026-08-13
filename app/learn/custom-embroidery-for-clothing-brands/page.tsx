import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Embroidery for Clothing Brands: Technical Guide",
  description:
    "Master custom embroidery in apparel manufacturing - flat stitching, 3D puff embroidery, stitch count calculations, backing stabilizer selection, and DST artwork digitizing.",
  alternates: {
    canonical: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
  },
  openGraph: {
    title: "Custom Embroidery for Clothing Brands: Technical Guide",
    description:
      "Master custom embroidery in apparel manufacturing - flat stitching, 3D puff embroidery, stitch count calculations, backing stabilizer selection, and DST artwork digitizing.",
    url: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
  },
};

export default function CustomEmbroideryForClothingBrandsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Embroidery for Clothing Brands: Technical Guide",
    description:
      "A technical breakdown of industrial embroidery, DST file digitizing, 3D foam puff embroidery, and fabric stabilization.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
    mainEntityOfPage: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Custom Embroidery for Clothing Brands", item: "https://fenalt.com/learn/custom-embroidery-for-clothing-brands" },
    ],
  };

  const steps = [
    {
      title: "1. Artwork Digitizing (DST / EMB File Creation)",
      desc: "Converting 2D vector graphic files (.AI or .EPS) into machine-readable DST stitch paths. Digitizing defines exact needle penetration angles, underlay density, pull compensation, and jump stitch trims.",
    },
    {
      title: "2. Flat Satin Stitching vs 3D EVA Foam Puff Embroidery",
      desc: "Flat embroidery lays thread directly flush onto the fabric. 3D Puff embroidery inserts high-density EVA foam beneath dense satin stitches, elevating logos by 2mm to 4mm for dramatic 3D relief on caps, hoodies, and jackets.",
    },
    {
      title: "3. Backing Stabilizers (Cutaway vs Tearaway vs Soluble)",
      desc: "Knit fabrics (jersey, French Terry) require permanent non-woven Cutaway backing to prevent fabric stretching during stitching. Woven fabrics (twill, denim) use Tearaway backing; textured fabrics use water-soluble top film.",
    },
    {
      title: "4. Stitch Count Calculation & Unit Pricing Math",
      desc: "Unlike screen printing (priced per color screen), embroidery is priced based on total stitch count (e.g. 5,000 stitches vs 25,000 stitches) and machine run-time, regardless of thread color count.",
    },
    {
      title: "5. Thread Selection (Polyester vs Rayon vs Specialty)",
      desc: "100% 40wt trilobal polyester thread provides high tensile strength, chlorine bleach resistance, and vibrant sheen. Rayon offers silky handfeel; specialty metallic or glow-in-the-dark threads add premium accents.",
    },
    {
      title: "6. Fabric GSM Compatibility & Puckering Prevention",
      desc: "Heavy stitch counts (15,000+ stitches) on lightweight 160 GSM jersey cause severe fabric puckering. High stitch density requires heavy 240+ GSM cotton, proper hoop tensioning, and heavy cutaway backing.",
    },
  ];

  const techniqueMatrix = [
    {
      technique: "Flat Satin & Fill Embroidery",
      bestFor: "Small chest logos, sleeve branding, corporate logos.",
      stitchDensity: "Standard (4.0 – 4.5 pts)",
      keyAdvantage: "Clean detail, soft handfeel, versatile across knits and wovens.",
    },
    {
      technique: "3D Foam Puff Embroidery",
      bestFor: "Snapback caps, thick hoodie chest logos, beanie cuffs.",
      stitchDensity: "High Density (2.0 – 2.5 pts)",
      keyAdvantage: "Elevated 3D physical depth (3mm EVA foam core).",
    },
    {
      technique: "Chenille Patch Embroidery",
      bestFor: "Varsity jackets, vintage streetwear sweatshirts.",
      stitchDensity: "Loop Pile",
      keyAdvantage: "Plush, fuzzy towel-like tactile texture.",
    },
    {
      technique: "Appliqué Embroidery",
      bestFor: "Large oversized back logos on hoodies or jackets.",
      stitchDensity: "Edge Border Satin",
      keyAdvantage: "Saves total stitch count by sewing fabric shapes onto garments.",
    },
  ];

  const faqs = [
    {
      q: "Why is small text difficult to embroider cleanly?",
      a: "Embroidery thread has physical thickness (40wt thread is ~0.4mm wide). Text smaller than 4mm to 5mm in height loses legibility because needle holes overlap and fill in fine letter loops (like 'e' or 'a'). Simplify small text for embroidery.",
    },
    {
      q: "Can lightweight t-shirt fabric support large heavy embroidery?",
      a: "No. Heavy embroidery designs (15,000+ stitches) pull on lightweight 160 GSM single jersey, causing severe fabric puckering and sagging. Heavy chest embroidery requires midweight to heavyweight cotton (240+ GSM) and cutaway stabilizer backing.",
    },
    {
      q: "What is the difference between Cutaway and Tearaway embroidery backing?",
      a: "Tearaway backing is torn away cleanly by hand after embroidery and is used on stable woven fabrics like denim and twill. Cutaway backing remains permanently attached to the reverse side and is mandatory for elastic knits (t-shirts, hoodies) to prevent design distortion over time.",
    },
    {
      q: "How does embroidery pricing differ from screen printing?",
      a: "Screen printing charges setup fees per color. Embroidery pricing is based on total stitch count (how many thousand stitches are in the design) and machine run time. A 10-color logo with 5,000 stitches costs significantly less to embroider than a 2-color logo with 30,000 stitches.",
    },
    {
      q: "What is an embroidery DST file?",
      a: "A DST file is a digitized industrial embroidery file created in software (like Wilcom or Tajima DG). It converts vector artwork into precise coordinate commands directing needle movements, thread cuts, color stops, and stitch lengths.",
    },
    {
      q: "How does Fenalt execute custom embroidery in Bangladesh?",
      a: "Fenalt operates multi-head computerized embroidery machines (Tajima and Barudan) in Dhaka, digitizing DST files, testing sample swatches, and matching thread colors to Pantone standards.",
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
            Custom Embroidery{" "}
            <span className="italic font-medium text-[#2D5016]">for Clothing Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A technical guide to industrial apparel embroidery - flat stitching, 3D EVA foam puff, DST digitizing, stitch count calculations, and stabilizer backing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Tactile Decoration</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Embroidery provides <strong className="font-medium">a textured, high-value physical finish</strong> that communicates premium brand positioning on hoodies, caps, and jackets.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Unlike flat graphic printing, embroidery adds physical dimension and sheen to apparel. Achieving crisp, professional embroidery requires mastering artwork digitizing (DST files), selecting correct thread weights, matching backing stabilizers to fabric GSM, and controlling stitch density to prevent fabric puckering.
          </p>
        </div>
      </section>

      {/* 6 Technical Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Production Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Essentials of Industrial Embroidery</h2>
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

      {/* Embroidery Technique Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Technique Comparison</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Embroidery Styles &amp; Applications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Embroidery Style</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/3">Best Garment Application</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/6">Stitch Density</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Visual &amp; Tactile Effect</th>
                </tr>
              </thead>
              <tbody>
                {techniqueMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.technique}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.bestFor}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.stitchDensity}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.keyAdvantage}</td>
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
              { href: "/learn/screen-printing-vs-dtg-clothing", label: "Screen Printing vs DTG Printing for Apparel" },
              { href: "/learn/garment-customization-options-explained", label: "Garment Customization Options Explained" },
              { href: "/learn/stitch-type-and-garment-quality", label: "How Stitch Type Affects Garment Quality" },
              { href: "/learn/how-to-manufacture-hoodies", label: "How to Manufacture Custom Hoodies" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/custom-embroidery-apparel-manufacturing", label: "Fenalt Custom Embroidery Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision custom embroidery</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt operates multi-head Tajima embroidery machinery in Dhaka, executing flat stitching, 3D foam puff, and chenille patches.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
