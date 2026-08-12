import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "CAD Pattern Making for Fashion Brands Explained",
  description:
    "Discover how Computer-Aided Design (CAD) pattern making works — digital vector drafting, automated marker efficiency, DXF export, and rapid size grading.",
  alternates: {
    canonical: "https://fenalt.com/learn/cad-pattern-making-explained",
  },
  openGraph: {
    title: "CAD Pattern Making for Fashion Brands Explained",
    description:
      "Discover how Computer-Aided Design (CAD) pattern making works — digital vector drafting, automated marker efficiency, DXF export, and rapid size grading.",
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
    { title: "1. Precise Digital Seam Allowances & Notches", desc: "CAD eliminates manual paper drawing errors, enforcing exact 0.1 mm precision on seam allowances, grainlines, and notch anchors." },
    { title: "2. Instant Computerized Size Grading", desc: "Applying digital grade rule tables instantly scales master patterns across XS through 3XL without manual re-drafting." },
    { title: "3. Automated Fabric Marker Optimization", desc: "CAD nesting software arranges pattern pieces on fabric rolls to achieve maximum yield (reducing fabric waste by up to 8%)." },
    { title: "4. Universal DXF / AAMA File Portability", desc: "Digital pattern files can be emailed instantly to mills and factories globally — eliminating paper pattern shipping costs." },
  ];

  const faqs = [
    {
      q: "What CAD software packages are standard in garment manufacturing?",
      a: "Optitex, Lectra, Gerber Technology, and CLO 3D are the leading industrial CAD software systems used by pattern makers worldwide.",
    },
    {
      q: "Can hand-drawn paper patterns be converted into CAD?",
      a: "Yes. Factories use digitizing tablets or high-resolution optical cameras to scan physical paper patterns into vector CAD files.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Tech Packs &amp; Pattern Making</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            CAD Pattern Making for Brands{" "}
            <span className="italic font-medium text-[#2D5016]">Explained.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Computer-Aided Design (CAD) has transformed garment pattern engineering — delivering pinpoint accuracy, fast size grading, and optimized fabric yield.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Monitor size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Digital Engineering</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              <strong className="font-medium">CAD Pattern Making</strong> replaces cardboard templates with digital vector files — enabling automated marker nesting and global file exchange.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Core Advantages</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-12">4 Key Benefits of CAD Patterning</h2>
          <div className="space-y-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-2">{b.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{b.desc}</p>
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
              { href: "/learn/what-is-pattern-making", label: "What Is Pattern Making in Clothing Production?" },
              { href: "/learn/apparel-size-grading-explained", label: "How Apparel Size Grading Works Across Sizes" },
              { href: "/learn/tech-pack-vs-sewing-pattern", label: "Tech Pack vs Sewing Pattern: What's the Difference?" },
              { href: "/apparel-pattern-making-services", label: "Fenalt Pattern Making Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-4">Digital CAD pattern engineering</h2>
          <p className="text-[#E5DDD3] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt drafts digital DXF CAD patterns and optimized markers to minimize fabric consumption and accelerate sampling.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
