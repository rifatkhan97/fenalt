import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shirt } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Manufacture T-Shirts: Complete Production Guide",
  description:
    "A step-by-step manufacturing guide for custom t-shirts — fabric GSM selection (180–300 GSM), pattern fits, collar ribbing construction, screen printing, and line sewing.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
  },
  openGraph: {
    title: "How to Manufacture T-Shirts: Complete Production Guide",
    description:
      "A step-by-step manufacturing guide for custom t-shirts — fabric GSM selection (180–300 GSM), pattern fits, collar ribbing construction, screen printing, and line sewing.",
    url: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
  },
};

export default function HowToManufactureTShirtsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Manufacture T-Shirts: Complete Production Guide",
    description:
      "A complete technical guide on custom t-shirt production — fabric sourcing, pattern drafting, collar rib attachment, printing, and quality control.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-manufacture-t-shirts",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "How to Manufacture T-Shirts", item: "https://fenalt.com/learn/how-to-manufacture-t-shirts" },
    ],
  };

  const steps = [
    {
      title: "1. Combed Cotton Single Jersey Sourcing (180–300 GSM)",
      desc: "Select fiber weight and yarn spinning. Everyday retail tees use 180–200 GSM 30s combed cotton; heavyweight streetwear tees use 240–300 GSM 20s combed cotton single jersey for boxy drape and zero show-through.",
    },
    {
      title: "2. Pattern Fit Engineering (Boxy vs Slim vs Drop Shoulder)",
      desc: "Draft flat 2D pattern panels specifying armhole drop, chest width, shoulder slope, and sleeve length. Oversized streetwear cuts extend shoulder seams by 4cm to 8cm for a relaxed drop-shoulder silhouette.",
    },
    {
      title: "3. Collar Ribbing Construction & Shoulder-to-Shoulder Taping",
      desc: "Select 1x1 or 2x2 cotton/spandex ribbing for the collar neckband. Enforce twin-needle shoulder-to-shoulder internal neck taping to prevent collar stretching, seam irritation, and neck deformation over time.",
    },
    {
      title: "4. Panel Decoration (Screen Printing, DTG, or Embroidery)",
      desc: "Execute automatic carousel screen printing (plastisol, water-based, or puff ink) or direct embroidery on cut fabric panels prior to garment assembly for precise graphic alignment.",
    },
    {
      title: "5. Line Assembly & Twin-Needle Coverstitching",
      desc: "Join front and back body panels using 4-thread overlock machinery (Class 514). Hem sleeve openings and bottom hems using twin-needle coverstitch machinery (Class 605) for elastic stretch recovery.",
    },
    {
      title: "6. Industrial Bio-Washing, Ironing & Quality Inspection",
      desc: "Garments undergo silicone bio-wash softening or vintage pigment washing, steam pressing, 100% measurement checking against tech pack specs, tag attachment, and individual polybag packaging.",
    },
  ];

  const tshirtMatrix = [
    {
      type: "Everyday Retail T-Shirt",
      fabricWeight: "180 GSM – 200 GSM",
      yarnSpec: "30s Combed Ring-Spun Cotton",
      collarRibbing: "2.0cm 1x1 Ribbing",
      fitStyle: "Standard Retail / Regular Fit",
    },
    {
      type: "Premium Heavyweight Streetwear Tee",
      fabricWeight: "240 GSM – 300 GSM",
      yarnSpec: "20s Combed Ring-Spun Cotton",
      collarRibbing: "3.0cm Heavy 1x1 or 2x2 Ribbing",
      fitStyle: "Oversized / Dropped Shoulder / Boxy Fit",
    },
  ];

  const faqs = [
    {
      q: "What is shoulder-to-shoulder neck taping on a t-shirt?",
      a: "Shoulder-to-shoulder neck taping is a narrow jersey bias tape stitched across the interior neck seam from the left shoulder seam to the right shoulder seam. It reinforces the collar, prevents collar baconing, and covers raw seam allowances for comfort.",
    },
    {
      q: "What is the minimum order quantity (MOQ) for custom t-shirts at Fenalt?",
      a: "Fenalt manufactures custom cut-and-sew t-shirts starting at flexible low minimum order quantities of 50 to 100 units per colorway in Dhaka.",
    },
    {
      q: "What is the best cotton fabric for heavyweight streetwear t-shirts?",
      a: "100% combed ring-spun cotton Single Jersey weighing 240 GSM to 300 GSM is the industry benchmark for luxury streetwear t-shirts, providing clean boxy structure and screen print clarity.",
    },
    {
      q: "Why is panel printing done before sewing a t-shirt?",
      a: "Printing graphics on flat cut fabric panels prior to line sewing guarantees perfectly centered graphic alignment and allows prints to cross over seam boundaries without ink bleeding.",
    },
    {
      q: "How do I prevent t-shirt collars from stretching or waving?",
      a: "Collar waving (baconing) is prevented by blending 5% spandex/elastane into the collar ribbing fabric and enforcing high-density twin-needle coverstitching along the collar join.",
    },
    {
      q: "How does Fenalt coordinate t-shirt manufacturing in Bangladesh?",
      a: "Fenalt's Dhaka team manages raw combed cotton yarn procurement, CAD pattern grading, carousel screen printing, line sewing, and AQL 2.5 quality control for international clothing brands.",
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
            How to Manufacture T-Shirts:{" "}
            <span className="italic font-medium text-[#2D5016]">Production Guide.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A complete technical guide to custom t-shirt production — fabric GSM selection, pattern fit engineering, collar neck taping, screen printing, and line sewing.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shirt size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Garment Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              The humble t-shirt is the ultimate test of apparel manufacturing: <strong className="font-medium">fabric weight, collar recovery, and fit proportion</strong> define brand quality.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            While t-shirts appear simple, manufacturing a luxury t-shirt requires precise technical decisions. Sourcing long-staple combed cotton single jersey, engineering custom boxy fits with dropped shoulders, attaching dense cotton/spandex collar ribbing, and applying durable screen prints separate boutique streetwear tees from generic promotional blanks.
          </p>
        </div>
      </section>

      {/* 6 Production Steps */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Manufacturing Workflow</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Stages of T-Shirt Production</h2>
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

      {/* T-Shirt Matrix Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Spec Reference</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">T-Shirt Specification Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">T-Shirt Category</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Fabric GSM</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Yarn Specification</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Collar Construction</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/5">Silhouette Fit</th>
                </tr>
              </thead>
              <tbody>
                {tshirtMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.type}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-semibold">{row.fabricWeight}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.yarnSpec}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top">{row.collarRibbing}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] align-top font-medium">{row.fitStyle}</td>
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
              { href: "/learn/combed-cotton-vs-regular-cotton", label: "Combed Cotton vs Regular Cotton" },
              { href: "/learn/what-does-gsm-mean-in-clothing", label: "What Does GSM Mean in Clothing?" },
              { href: "/learn/screen-printing-vs-dtg-clothing", label: "Screen Printing vs DTG Printing for Apparel" },
              { href: "/learn/heavyweight-streetwear-fabrics-explained", label: "Heavyweight Streetwear Fabrics Explained" },
              { href: "/learn/how-to-manufacture-a-streetwear-collection", label: "How to Manufacture a Streetwear Collection" },
              { href: "/heavyweight-cotton-t-shirt-manufacturer", label: "Fenalt Heavyweight T-Shirt Manufacturing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Manufacture custom t-shirts in Dhaka</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt sources 100% combed cotton jersey, drafts custom boxy CAD patterns, and screen prints custom t-shirts in Bangladesh.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
