import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Fenalt - B2B Manufacturing & Factory Partnerships",
  description:
    "Get in touch with Fenalt's operational team in Dhaka. Inquire about factory partnerships, supply chain management, micro-factory sourcing, or press inquiries.",
  alternates: {
    canonical: "https://www.fenalt.com/contact",
  },
  openGraph: {
    title: "Contact Fenalt - B2B Manufacturing & Factory Partnerships | Fenalt",
    description:
      "Get in touch with Fenalt's operational team in Dhaka. Inquire about factory partnerships, supply chain management, micro-factory sourcing, or press inquiries.",
    url: "https://www.fenalt.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
