import type { Metadata } from "next";
import IntakeForm from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Start Your Apparel Project - Project Intake & Quote Request",
  description:
    "Submit your apparel design, tech packs, or sketches to Fenalt. Get a transparent B2B manufacturing quote within 24–48 hours for low-MOQ capsule runs.",
  alternates: {
    canonical: "https://www.fenalt.com/intake",
  },
  openGraph: {
    title: "Start Your Apparel Project - Project Intake & Quote Request | Fenalt",
    description:
      "Submit your apparel design, tech packs, or sketches to Fenalt. Get a transparent B2B manufacturing quote within 24–48 hours for low-MOQ capsule runs.",
    url: "https://www.fenalt.com/intake",
  },
};

export default function IntakePage() {
  return <IntakeForm />;
}
