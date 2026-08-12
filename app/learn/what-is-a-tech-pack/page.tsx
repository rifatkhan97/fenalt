import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Tech Pack in Apparel Manufacturing?",
  description:
    "Understand what a tech pack is, why every clothing manufacturer needs one, and what sections it must contain to get accurate samples and production pricing.",
  alternates: {
    canonical: "https://fenalt.com/learn/what-is-a-tech-pack",
  },
  openGraph: {
    title: "What Is a Tech Pack in Apparel Manufacturing?",
    description:
      "Understand what a tech pack is, why every clothing manufacturer needs one, and what sections it must contain to get accurate samples and production pricing.",
    url: "https://fenalt.com/learn/what-is-a-tech-pack",
  },
};

export default function WhatIsATechPackPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Tech Pack in Apparel Manufacturing?",
    description:
      "A guide to tech packs — what they are, what they contain, and why they are essential for clothing production.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/what-is-a-tech-pack",
    mainEntityOfPage: "https://fenalt.com/learn/what-is-a-tech-pack",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "What Is a Tech Pack", item: "https://fenalt.com/learn/what-is-a-tech-pack" },
    ],
  };

  const sections = [
    {
      title: "Cover Page / Sketch Sheet",
      body: "A flat technical sketch (front and back views) of the garment, along with the style name, style number, season, target market, date, and revision number. This establishes identity across every revision.",
    },
    {
      title: "Fabric & Materials Specifications",
      body: "Every material used in the garment is listed: shell fabric (composition, weight in GSM, finish), lining, interlinings, threads, trims (zippers, buttons, snaps, toggles, cords). Fabric content affects manufacturing pricing, care labelling, and import classification.",
    },
    {
      title: "Colourway Page",
      body: "Colour references for every fabric and trim, ideally specified in Pantone (PMS) or a lab-dip reference. Relying on colour names alone ('olive green') produces inconsistent results across different mills.",
    },
    {
      title: "Bill of Materials (BOM)",
      body: "A complete itemised list of every component — fabric, thread, label, zipper, button, hangtag, polybag — with supplier preference notes, unit cost (if known), and quantity per garment.",
    },
    {
      title: "Construction Details",
      body: "Stitch type, stitch density (stitches per inch), seam allowances, seam finishes, topstitching specifications, and any special construction notes (e.g. bound buttonholes, flat-fell seams, French seams).",
    },
    {
      title: "Graded Measurement Spec Sheet",
      body: "A table of points of measure (POM) across every included size (e.g. XS–3XL), with tolerances per measurement point. This is the document a quality control inspector uses to check garments during and after production.",
    },
    {
      title: "Print / Embroidery Placement Page",
      body: "Exact dimensions and placement coordinates (in centimetres from reference seams) for every graphic, logo, embroidery, or woven label. Vague placement instructions are a major source of inconsistency.",
    },
    {
      title: "Label & Packaging Instructions",
      body: "Specifications for neck labels (woven or printed), care/content labels, size labels, hangtags, poly-bag types, folding method, and carton packing ratios.",
    },
  ];

  const faqs = [
    {
      q: "Can I send a manufacturer just a sketch instead of a tech pack?",
      a: "A sketch alone is insufficient for accurate sampling or pricing. Manufacturers need specific measurements, fabric weights, and construction details. You may receive a rough quote from a sketch, but it will not be accurate. Expect significant revision rounds without a proper tech pack.",
    },
    {
      q: "Who creates a tech pack?",
      a: "Ideally a technical designer or product developer. Some brands use Adobe Illustrator templates; others use specialised tools like Techpacker or Canopy. Some manufacturers (including Fenalt) offer tech pack development services for brands that need assistance.",
    },
    {
      q: "Does Fenalt require a tech pack to start?",
      a: "A tech pack significantly speeds up the sampling process and reduces revision rounds. Fenalt's team can assist with tech pack development for brands that have a design concept but haven't yet created a full technical document.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs & Pattern Making</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            What Is a Tech Pack{" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Manufacturing?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A tech pack is the single most important document in clothing production. Without one, manufacturers cannot produce consistent samples — or accurate quotes. Here is exactly what it contains and why it matters.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Definition</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">tech pack</strong> (technical package) is a structured document — typically a multi-page PDF or spreadsheet — that communicates every detail of a garment to a manufacturer: construction, materials, measurements, colours, trims, labels, and packaging.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-5">
            <p>
              It functions as the binding contract between a brand and a factory. When a manufacturer sews a garment from a tech pack, they are not interpreting — they are following instructions. If those instructions are vague, incomplete, or contradictory, the output will reflect that.
            </p>
            <p>
              Tech packs exist because verbal instructions, email threads, and hand-drawn sketches are unreliable at scale. A factory floor producing 500 identical garments cannot operate from a photograph.
            </p>
          </div>
        </div>
      </section>

      {/* 8 sections */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">What Goes Inside</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">The 8 Core Sections of a Garment Tech Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((sec, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-light text-[#E5DDD3] shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{sec.title}</h3>
                    <p className="text-sm text-[#E5DDD3] leading-relaxed">{sec.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Why This Matters</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-8">What Happens Without a Tech Pack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Manufacturers must make assumptions — leading to sample misalignment",
              "Pricing quotes will be inaccurate and require multiple revisions",
              "Sample revision rounds increase, adding weeks and cost",
              "Inconsistency between samples from different factories",
              "Bulk production defects become harder to contest without a written standard",
              "Quality control inspectors have no reference document to check against",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#2A2A2A] border border-[#3A3A3A]">
                <CheckCircle2 size={16} className="text-[#C8A882] mt-0.5 shrink-0" />
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{point}</p>
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
              { href: "/learn/tech-pack-mistakes", label: "Common Tech Pack Mistakes That Delay Production" },
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample?" },
              { href: "/tech-pack-development-apparel", label: "Fenalt Tech Pack Development Services" },
              { href: "/learn/how-clothing-manufacturing-works", label: "How Clothing Manufacturing Works" },
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Need help creating your tech pack?</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt's technical team can assist with tech pack creation and pattern making as part of a full managed production engagement.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
