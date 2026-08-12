import {
  FileText,
  Factory,
  ShieldCheck,
  Truck,
  Search,
  Ruler,
  Scan,
  ClipboardCheck,
} from "lucide-react";

export const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Tech Pack",
    desc: "Share your design files, sketches, or spec sheets securely through our intake engine. Our team reviews and acknowledges within 24 hours.",
  },
  {
    icon: Factory,
    step: "02",
    title: "Match & Source",
    desc: "We analyse your requirements - fabric, construction, quantity, timeline - and match your project with the most capable factory in our verified network.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "On-Site QC",
    desc: "Our team physically visits the factory floor, auditing stitching quality, working conditions, and material accuracy at multiple production checkpoints.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Delivered to Your Door",
    desc: "We handle all customs documentation, export declarations, and international freight - from air-freight samples to full sea-freight production runs.",
  },
];

export const qcItems = [
  {
    icon: Search,
    title: "Fabric Defect Checks",
    desc: "Every roll of fabric is inspected for weave defects, colour inconsistencies, and weight deviations before cutting begins.",
  },
  {
    icon: Ruler,
    title: "Dimensional Tolerance",
    desc: "Strict ±1.5cm measurement tolerances enforced at the pattern, cut, and finished-garment stages.",
  },
  {
    icon: Scan,
    title: "Needle Detection",
    desc: "All finished garments pass through calibrated metal and needle detection equipment before packing.",
  },
  {
    icon: ClipboardCheck,
    title: "AQL Packing Inspections",
    desc: "Final carton inspections follow ANSI/ASQ Z1.4 Acceptable Quality Levels, ensuring packing accuracy and carton integrity.",
  },
];

export const faqs = [
  {
    q: "What are typical lead times?",
    a: "Most orders - from sample approval to delivery - take 4 to 6 weeks for standard production runs. Sample development alone typically takes 10–14 days. Rush timelines are available on request and may carry a premium.",
  },
  {
    q: "Who is responsible for import duties and taxes?",
    a: "We offer both DDP (Delivered Duty Paid) and FOB (Free on Board) incoterms. Under DDP, all duties, VAT, and customs fees are included in your landed quote. Under FOB, you take responsibility at port of origin. We'll advise which is best for your situation.",
  },
  {
    q: "What happens if there's a defect in my order?",
    a: "Fenalt operates a zero-tolerance defect policy above our AQL threshold. If units fail inspection on delivery, we coordinate replacement production at no additional cost. Our on-site QC is designed to prevent this - but our guarantee means you're always protected.",
  },
  {
    q: "Can I visit the factory myself?",
    a: "Yes. We actively encourage factory visits and can arrange guided tours of our partner factories in coordination with our local team. This builds trust and gives you direct insight into your supply chain.",
  },
  {
    q: "Do you work with brands outside the US and UK?",
    a: "Absolutely. We work with brands across North America, Europe, and Australia. Our team is structured to manage cross-timezone communication and can coordinate international freight to any major destination.",
  },
];
