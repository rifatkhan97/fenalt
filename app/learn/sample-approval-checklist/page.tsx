import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "Sample Approval Checklist for Fashion Brands",
  description:
    "A systematic sample evaluation checklist covering measurement verification, seam construction, fabric handfeel, wash testing, artwork accuracy, and pre-production sign-off.",
  alternates: {
    canonical: "https://fenalt.com/learn/sample-approval-checklist",
  },
  openGraph: {
    title: "Sample Approval Checklist for Fashion Brands",
    description:
      "A systematic sample evaluation checklist covering measurement verification, seam construction, fabric handfeel, wash testing, artwork accuracy, and pre-production sign-off.",
    url: "https://fenalt.com/learn/sample-approval-checklist",
  },
};

export default function SampleApprovalChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sample Approval Checklist for Fashion Brands",
    description:
      "An exhaustive sample inspection checklist for evaluating prototype and pre-production garments before authorizing bulk cutting.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/sample-approval-checklist",
    mainEntityOfPage: "https://fenalt.com/learn/sample-approval-checklist",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Sample Approval Checklist", item: "https://fenalt.com/learn/sample-approval-checklist" },
    ],
  };

  const categories = [
    {
      title: "1. Measurement & POM Audit",
      items: [
        "Measure every Point of Measure (POM) flat on a smooth inspection table against the tech pack spec sheet",
        "Verify each measurement falls within the specified tolerance range (e.g. ±1.0 cm to ±1.5 cm)",
        "Check bilateral symmetry across left and right sides (sleeve length, chest width, pocket positioning, shoulder seam slope)",
        "Verify body length and sweep width match target specs before and after sample washing",
      ],
    },
    {
      title: "2. Fit, Silhouette & Ergonomics",
      items: [
        "Evaluate sample on a physical fit model or calibrated dress form matching target body dimensions",
        "Inspect shoulder seam positioning, armhole depth, sleeve pitch, and neck collar circumference",
        "Test functional range of motion (arm extension, bending, sitting) for fabric binding or tension",
        "Verify garment silhouette and proportions match 2D design vector sketches",
      ],
    },
    {
      title: "3. Fabric Weight, Handfeel & Shrinkage",
      items: [
        "Verify fabric weight in GSM matches tech pack targets using a fabric swatch cutter or mill certification",
        "Assess fabric handfeel, drape, opacity, and softness against approved swatches",
        "Launder sample 3x according to care instructions to calculate dimensional shrinkage and spirality (seam twist)",
        "Check fabric stretch recovery and pilling resistance after wash testing",
      ],
    },
    {
      title: "4. Stitching & Construction Integrity",
      items: [
        "Inspect stitch density (Stitches Per Inch / SPI) for consistency along structural seams",
        "Check for seam puckering, skipped stitches, tension distortion, or loose thread ends",
        "Verify appropriate stitch types were used (lockstitch for structural seams, overlock for raw edges, coverstitch for hems)",
        "Evaluate ribbing recovery at necklines, cuffs, and waistbands",
      ],
    },
    {
      title: "5. Artwork, Printing, Embroidery & Trims",
      items: [
        "Verify artwork placement coordinates measured from reference seams (e.g. HPS or center front)",
        "Inspect print clarity, opacity, edge sharpness, and puff print elevation",
        "Check embroidery stitch density, backing material cleanliness, and thread tension",
        "Test zipper operation, snap attachment strength, drawcord finish, and eyelet alignment",
        "Verify woven neck label, care tag legal copy, size label, and hangtag placement",
      ],
    },
  ];

  const documentationSteps = [
    {
      title: "Take High-Resolution Measurement Photos",
      desc: "Photograph every point of measure with a flexible garment measuring tape laid flat beside the seam to document exact deltas visually.",
    },
    {
      title: "Use Consolidated Fit Comment Worksheets",
      desc: "Compile all measurement observations, photos, and revision requests into one master PDF or spreadsheet instead of fragmented notes.",
    },
    {
      title: "Differentiate Mandatory Corrections from Optional Refinements",
      desc: "Label feedback items clearly as 'Must Fix Before Bulk' versus 'Optional Aesthetic Preference' to help pattern makers prioritise adjustments.",
    },
    {
      title: "Physically Pin or Mark Samples if Returning",
      desc: "If returning the physical sample to the factory, use tailor's chalk, safety pins, or masking tape directly on the garment to indicate seam shifts.",
    },
  ];

  const faqs = [
    {
      q: "What should I do if a sample fails measurement tolerances?",
      a: "Document the exact measurement discrepancies with clear flat-lay photos showing tape measure alignment beside the POM. State the required numerical delta (+/- cm) in your fit comment worksheet and request a revised sample before authorizing pre-production sign-off.",
    },
    {
      q: "How many wash cycles should a sample undergo during testing?",
      a: "Perform at least 3 home laundering cycles according to the garment's specified care label instructions. Re-measure all key points of measure after drying to calculate fabric shrinkage percentage and verify that graphics, embroidery backing, and seams hold up.",
    },
    {
      q: "Who is responsible for conducting the sample approval check?",
      a: "The brand's technical designer, product manager, or founder is responsible for reviewing and approving the sample. If the brand works with a managed production partner like Fenalt, local technical managers assist by conducting preliminary POM checks in Dhaka before dispatching samples.",
    },
    {
      q: "Can I approve a Pre-Production (PP) sample with minor pending revisions?",
      a: "Approval with comments is acceptable only if the remaining changes are administrative (such as adjusting care label text) and do not affect pattern dimensions, fabric, or construction. If measurements, fit, or fabric require adjustment, a revised PP sample must be reviewed.",
    },
    {
      q: "What measurement tolerance is acceptable in apparel manufacturing?",
      a: "Standard industrial measurement tolerances for knitwear and casual streetwear range from ±1.0 cm to ±1.5 cm across major points of measure (chest, body length, sleeve length). Tighter categories like activewear may enforce ±0.5 cm.",
    },
    {
      q: "What happens after the sample approval checklist is fully signed off?",
      a: "Once the pre-production sample is approved in writing, it is sealed at the factory as the Golden Sample. The factory completes full size-run CAD grading, locks cutting markers, orders bulk materials, and schedules bulk sewing.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sampling &amp; Product Dev</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            Sample Approval Checklist{" "}
            <span className="italic font-medium text-[#2D5016]">for Fashion Brands.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            A step-by-step evaluation framework covering measurements, fit ergonomics, seam construction, wash stability, and graphic execution before bulk cutting authorization.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Audit Protocol</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Evaluating a sample requires a <strong className="font-medium">systematic point-by-point audit</strong>. Catching measurement deviations during sampling prevents bulk production defects.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Approving a sample without a structured checklist leaves your bulk order vulnerable to unexamined errors. A thorough inspection evaluates dimensions, anatomical drape, stitching quality, trim functionality, and fabric performance post-laundering.
          </p>
        </div>
      </section>

      {/* 5 Categories Checklist */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Master Checklist</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">5 Categories to Check Before Sign-Off</h2>
          <div className="space-y-8">
            {categories.map((cat, i) => (
              <div key={i} className="p-6 lg:p-8 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-xl font-medium text-[#C8A882] mb-4">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#E5DDD3] leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#2D5016] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Document Feedback */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Inspection Workflow</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">How to Document Sample Inspection Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentationSteps.map((step, i) => (
              <div key={i} className="p-6 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{step.desc}</p>
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
              { href: "/learn/what-is-a-clothing-sample", label: "What Is a Clothing Sample and Why Is It Important?" },
              { href: "/learn/fit-samples-vs-pre-production-samples", label: "Fit Samples vs Pre-Production Samples" },
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/learn/how-many-samples-before-production", label: "How Many Samples Before Production?" },
              { href: "/learn/garment-quality-checklist-for-brands", label: "Garment Quality Checklist for Brands" },
              { href: "/apparel-sampling-services", label: "Fenalt Professional Sampling Services" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Precision sampling and pre-production checks</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt&apos;s Dhaka technical team inspects sample measurements, fabric handfeel, and seam construction before sample dispatch.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Sampling Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
