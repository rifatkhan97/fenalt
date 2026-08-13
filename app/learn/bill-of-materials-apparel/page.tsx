import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Bill of Materials (BOM) in Apparel Production?",
  description:
    "Learn what an apparel Bill of Materials (BOM) is in garment manufacturing — including fabric specs, trims, threads, labels, hardware, and yield calculations.",
  alternates: {
    canonical: "https://fenalt.com/learn/bill-of-materials-apparel",
  },
  openGraph: {
    title: "What Is a Bill of Materials (BOM) in Apparel Production?",
    description:
      "Learn what an apparel Bill of Materials (BOM) is in garment manufacturing — including fabric specs, trims, threads, labels, hardware, and yield calculations.",
    url: "https://fenalt.com/learn/bill-of-materials-apparel",
  },
};

export default function BillOfMaterialsApparelPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is a Bill of Materials (BOM) in Apparel Production?",
    description:
      "A technical guide to the Bill of Materials (BOM) in apparel tech packs, costings, and inventory procurement.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/bill-of-materials-apparel",
    mainEntityOfPage: "https://fenalt.com/learn/bill-of-materials-apparel",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Bill of Materials Apparel", item: "https://fenalt.com/learn/bill-of-materials-apparel" },
    ],
  };

  const components = [
    {
      name: "1. Primary & Secondary Shell Fabrics",
      detail: "Shell fabric composition (e.g. 100% combed cotton), GSM weight (e.g. 450 GSM French Terry), fabric width, finish (e.g. silicone soft wash), Pantone colour code, and estimated yardage/meter consumption per garment.",
    },
    {
      name: "2. Linings, Interlinings & Pocketing",
      detail: "Secondary fabrics used inside hoods, pockets, collar bands, or waistbands — including fusible woven/non-woven interlining weight (GSM), pocket twill composition, and adhesive specifications.",
    },
    {
      name: "3. Sewing Threads & Seam Tapes",
      detail: "Core-spun polyester or cotton thread specifications, thread weight/Tex size, Pantone color matching codes, and seam-sealing tapes for waterproof or activewear construction.",
    },
    {
      name: "4. Hardware, Fasteners & Trims",
      detail: "Zippers (YKK gauge, tape length, metal vs nylon coil, slider finish), metal snaps, buttons, eyelets, cord locks, Aglet tips, rivets, and elastic banding dimensions.",
    },
    {
      name: "5. Branding Labels, Care Tags & Packaging",
      detail: "Woven main neck labels, satin care/content tags with legal wash symbols, size flag labels, hangtags, safety pins, printed polybags, and barcode sticker specifications.",
    },
    {
      name: "6. Master Packaging & Export Supplies",
      detail: "Individual polybag thickness (microns), silica gel desiccant packs, folding cardboard collar stays, and export carton marking specs (carton dimensions, max weight, size ratios).",
    },
  ];

  const bomStructureColumns = [
    { column: "Item Category & Description", detail: "Identifies the specific material component (e.g. Shell Fabric, Neck Label, Front Zipper)." },
    { column: "Material Specification & Color Code", detail: "Provides full technical details: composition, weight (GSM), finish, and Pantone TCX/C reference." },
    { column: "Supplier Reference / Code", detail: "Lists mill name, supplier item code, or stock part number for exact reordering." },
    { column: "Consumption Yield per Garment", detail: "Quantifies exact material used per unit (e.g. 1.25 meters fabric, 1 piece zipper, 2 buttons)." },
    { column: "Placement / Location on Garment", detail: "Defines physical location (e.g. Center front closure, interior left side seam 10cm above hem)." },
  ];

  const faqs = [
    {
      q: "What is a Bill of Materials (BOM) in apparel manufacturing?",
      a: "A Bill of Materials (BOM) is a comprehensive itemized master table inside a tech pack that lists every raw material, fabric, trim, thread, label, hardware, and packaging component required to produce a single finished garment.",
    },
    {
      q: "Who is responsible for creating the BOM?",
      a: "The brand's technical designer or product developer compiles the initial BOM during tech pack creation. The manufacturer's sourcing team reviews and updates it with exact mill supplier codes, fabric consumption yields, and unit component costs.",
    },
    {
      q: "Why is an accurate BOM essential for FOB unit costing?",
      a: "The BOM is the primary foundation for FOB unit cost calculation. Omitting small components — such as specialized drawstrings, care tags, or heavy-duty threads — leads to unexpected cost surcharges during bulk production.",
    },
    {
      q: "What is fabric yield or consumption in a BOM?",
      a: "Fabric yield (or consumption) is the total quantity of fabric required to cut and assemble one garment, including cut-waste allowances. For example, a hoodie may require 1.35 meters of 180cm-wide French Terry fabric per garment.",
    },
    {
      q: "What is the difference between a BOM and a Tech Pack?",
      a: "A tech pack is the complete multi-page design specification blueprint (sketches, POM tables, specs, BOM). A BOM is one specific master page inside the tech pack that details all raw material components and supply references.",
    },
    {
      q: "How does Fenalt use the BOM during manufacturing?",
      a: "Fenalt's Dhaka procurement team uses the BOM to source raw fabric rolls, negotiate trim prices, conduct lab-dip dye matching, and verify incoming raw material deliveries against pre-production specs.",
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
            What Is a Bill of Materials (BOM){" "}
            <span className="italic font-medium text-[#2D5016]">in Apparel Production?</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            The Bill of Materials (BOM) is the master inventory list of every fabric, thread, trim, label, and packaging component needed to manufacture your garment.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileSpreadsheet size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Inventory Engine</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              A <strong className="font-medium">Bill of Materials (BOM)</strong> is the itemized procurement sheet inside a tech pack that details every raw material requirement and component yield.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            In commercial clothing manufacturing, an incomplete BOM creates supply chain bottlenecks. If a single zipper puller, neck label, or thread color match is missing from the BOM, production halts until the component is sourced. A complete BOM enables accurate FOB pricing and seamless raw material purchasing.
          </p>
        </div>
      </section>

      {/* 6 Categories */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Component Breakdown</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Essential Categories Included in an Apparel BOM</h2>
          <div className="space-y-6">
            {components.map((comp, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{comp.name}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{comp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Columns */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Data Architecture</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Structure of a Professional BOM Sheet</h2>
          <div className="space-y-4">
            {bomStructureColumns.map((col, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#F2EFE9] border border-[#E5DDD3]">
                <CheckCircle2 size={18} className="text-[#2D5016] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-1">{col.column}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">{col.detail}</p>
                </div>
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
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Tech Pack?" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/custom-hangtags-neck-labels-apparel", label: "Custom Labels and Hangtags for Fashion Brands" },
              { href: "/learn/fabric-choice-and-manufacturing-cost", label: "How Fabric Choice Affects Manufacturing Cost" },
              { href: "/fabric-sourcing-bangladesh", label: "Fenalt Raw Fabric & Trim Sourcing Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Master raw material procurement</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt audit BOMs, sources raw fabric rolls, and manages trim procurement with Dhaka-based factory oversight.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
