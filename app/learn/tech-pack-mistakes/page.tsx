import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Common Tech Pack Mistakes That Delay Clothing Production",
  description:
    "The most common tech pack mistakes that cause sample delays, inaccurate quotes, and production problems - and exactly how to avoid each one.",
  alternates: { canonical: "https://www.fenalt.com/learn/tech-pack-mistakes" },
  openGraph: {
    title: "Common Tech Pack Mistakes That Delay Clothing Production",
    description: "The most common tech pack mistakes that cause sample delays, inaccurate quotes, and production problems - and exactly how to avoid each one.",
    url: "https://www.fenalt.com/learn/tech-pack-mistakes",
  },
};

export default function TechPackMistakesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Tech Pack Mistakes That Delay Clothing Production",
    description: "Common tech pack mistakes that cause sample misalignment, pricing inaccuracies, and production delays.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://www.fenalt.com" },
    url: "https://www.fenalt.com/learn/tech-pack-mistakes",
    mainEntityOfPage: "https://www.fenalt.com/learn/tech-pack-mistakes",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Common Tech Pack Mistakes", item: "https://www.fenalt.com/learn/tech-pack-mistakes" },
    ],
  };

  const mistakes = [
    {
      mistake: "Missing or Incomplete Measurements",
      impact: "The most common cause of first-sample rejection. Without a complete POM (points of measure) table, the manufacturer must estimate measurements - or copy a standard sizing chart that may not match your design intent.",
      fix: "Include a full measurement spec table covering every measurement point for every included size, with tolerance columns. Specify how each measurement is taken (e.g. 'chest: 1\" below armhole, laid flat, total width').",
    },
    {
      mistake: "Vague or Missing Fabric Specification",
      impact: "Without a clear fabric specification, the manufacturer sources whatever is available and close to your description. The first sample arrives in fabric that may have the wrong weight, texture, or hand-feel.",
      fix: "Specify: fabric composition (e.g. 100% combed cotton), construction (single jersey, French Terry, etc.), weight range (e.g. 280–320gsm), and finish (pre-shrunk, mercerised, etc.). Include a physical swatch if possible.",
    },
    {
      mistake: "Colour Given as a Name Rather Than a Reference Code",
      impact: "Colour names like 'forest green' or 'dusty pink' are interpreted differently by every mill and factory. The colour in your sample will not match your expectation.",
      fix: "Always specify colour using Pantone (PMS) codes for solids, or request a lab-dip approval (the factory dyes a swatch to your target and you approve before proceeding).",
    },
    {
      mistake: "Print and Embroidery Placement Described in Approximate Terms",
      impact: "'Centre chest' is not a placement instruction. Without precise coordinates (measured from a reference seam), placement will vary between samples and between production units.",
      fix: "State placement as exact measurements from reference seams: e.g. 'Centre front chest print: 12cm from collar seam, centred on chest seam to seam width.' Include a placement diagram.",
    },
    {
      mistake: "No Bill of Materials (BOM)",
      impact: "Without a BOM, the manufacturer makes assumptions about trims - zipper type, zip pull style, drawcord material, label positioning, button size. Every assumption is a potential revision.",
      fix: "List every component with specification: main zipper (e.g. YKK #5 nylon coil, auto-lock pull, antique brass), drawcord (6mm flat cotton, matching body colour), main label (woven neck label, 5cm x 2.5cm, own artwork supplied).",
    },
    {
      mistake: "Tech Pack Not Updated After Design Changes",
      impact: "Design iterations happen during development. If the tech pack is not updated to reflect each change, manufacturers work from outdated versions. Conflicting versions cause mislabelled samples and QC disputes.",
      fix: "Version-control your tech pack: date each version, use a clear revision numbering system (v1, v2, v3), and always confirm in writing which version is the current reference for each sample round.",
    },
    {
      mistake: "No Construction Detail on Critical Seams",
      impact: "The manufacturer defaults to their standard construction. For garments where seam type matters (e.g. raglan sleeve, flatlock seam, bound collar), the result may be structurally or aesthetically different from what was intended.",
      fix: "Specify seam type for every critical seam: e.g. 'shoulder seam: flatlock', 'side seam: 4-thread overlock, topstitch ¼\"', 'hem: twin needle, ¼\" hem allowance'.",
    },
    {
      mistake: "Single Size Measurement Only (No Graded Table)",
      impact: "If you only provide measurements for one size, the manufacturer grades the rest using their standard grade rules - which may not match your intended fit across the size curve.",
      fix: "Provide a full graded measurement table - measurements for every size in your size run. Even if you are only sampling one size initially, the manufacturer needs to know the grade plan.",
    },
    {
      mistake: "No Tolerance Column in the Measurement Sheet",
      impact: "Without tolerances, the manufacturer and QC inspector have no defined acceptable range. Every measurement either passes or fails against the exact number - creating constant disagreement.",
      fix: "Add a tolerance column to each measurement row. Common garment measurement tolerance: ±1cm for smaller measurements, ±1.5cm for body width, length, and major dimensional measurements.",
    },
    {
      mistake: "Relying on Reference Images Instead of Technical Drawings",
      impact: "A photograph of a reference garment cannot show stitch type, internal construction, seam allowances, or exact proportions. Manufacturers interpret what they see rather than follow what you require.",
      fix: "Use technical flat sketches (front and back views at minimum) drawn to accurate proportions, with callout lines pointing to key construction details.",
    },
  ];

  const faqs = [
    {
      q: "How many sample revisions can a bad tech pack cause?",
      a: "A significantly incomplete tech pack can cause 4 to 7+ sample rounds rather than the typical 2 to 3. Each revision adds 1 to 3 weeks to the pre-production timeline. For brands with seasonal or drop-based deadlines, this can mean missing retail windows entirely.",
    },
    {
      q: "Does Fenalt help with tech pack development?",
      a: "Yes. Fenalt's technical team in Dhaka reviews and assists with tech pack creation and POM drafting as part of a managed production engagement.",
    },
    {
      q: "What is the single worst mistake to make in a tech pack?",
      a: "Omitting point-of-measure (POM) specifications entirely or providing 3D conceptual renderings without flat dimensions. Pattern makers require 2D measurements to build CAD templates.",
    },
    {
      q: "How can I check if my tech pack is factory-ready?",
      a: "Conduct a pre-submission audit: verify that flat vector sketches match POM table descriptions, every trim is listed in the BOM, Pantone codes are specified, and tolerance limits are clearly defined.",
    },
    {
      q: "Should I include wash care symbols in my tech pack?",
      a: "Yes. Specifying care tag copy, fiber composition percentages, and ISO wash symbols ensures legal compliance for retail distribution in destination markets (US, UK, EU, AU).",
    },
    {
      q: "How do version numbers prevent manufacturing errors?",
      a: "Updating version numbers (e.g. TechPack_Style101_v2.pdf) whenever specs change ensures pattern makers, sample machinists, and QC inspectors all work from the exact same revision standard.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }} />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">Fenalt Learn</Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Patterns</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Common Tech Pack Mistakes{" "}
            <span className="italic font-medium text-[#2D5016]">That Delay Clothing Production.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Ten avoidable mistakes that add sample rounds, inflate costs, and push timelines - with exactly how to fix each one.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">The 10 Mistakes</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">What Causes Production Delays - and How to Avoid Them</h2>
          <div className="space-y-6">
            {mistakes.map((item, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-3xl font-light text-[#E5DDD3] shrink-0 w-8 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">{item.mistake}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A882] mb-1">Impact</p>
                        <p className="text-sm text-[#6B6560] leading-relaxed">{item.impact}</p>
                      </div>
                      <div className="border-l-2 border-[#2D5016] pl-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5016] mb-1">How to Fix It</p>
                        <p className="text-sm text-[#6B6560] leading-relaxed">{item.fix}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/what-is-a-tech-pack", label: "What Is a Tech Pack in Apparel Manufacturing?" },
              { href: "/learn/what-to-include-in-a-tech-pack", label: "What Should Be Included in a Tech Pack?" },
              { href: "/learn/tech-pack-measurements", label: "How to Create Measurements for a Tech Pack" },
              { href: "/learn/bill-of-materials-apparel", label: "What Is a Bill of Materials (BOM) in Apparel?" },
              { href: "/learn/points-of-measure-garment", label: "What Are Points of Measure (POM) in Garments?" },
              { href: "/tech-pack-development-apparel", label: "Fenalt Tech Pack Development Services" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Get tech pack support from Fenalt</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s technical team reviews and develops tech packs for brands preparing for their first or next production project.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
