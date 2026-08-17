import type { Metadata } from "next";
import OperationsContent from "@/components/OperationsContent";
import { faqs } from "@/data/operationsData";

export const metadata: Metadata = {
  title: "How Fenalt Operates - On-Site QC & Garment Logistics",
  description:
    "Discover how Fenalt manages tech pack translation, micro-factory matching, multi-point on-site quality control, and end-to-end international freight for apparel brands.",
  alternates: {
    canonical: "https://www.fenalt.com/operations",
  },
  openGraph: {
    title: "How Fenalt Operates - On-Site QC & Garment Logistics | Fenalt",
    description:
      "Discover how Fenalt manages tech pack translation, micro-factory matching, multi-point on-site quality control, and end-to-end international freight for apparel brands.",
    url: "https://www.fenalt.com/operations",
  },
};

export default function OperationsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <OperationsContent />
    </>
  );
}
