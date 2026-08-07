"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FileText,
  Factory,
  ShieldCheck,
  Truck,
  Search,
  Ruler,
  Scan,
  ClipboardCheck,
  MapPin,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const steps = [
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

const qcItems = [
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

const faqs = [
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

export default function OperationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ─── Section 1: Header ───────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C8A882] blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            How It Works
          </p>
          <h1 className="font-display text-5xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-4xl">
            Boots on the{" "}
            <span className="italic font-medium text-[#2D5016]">Ground.</span>
          </h1>
          <p className="mt-8 text-lg text-[#6B6560] max-w-2xl leading-relaxed">
            We are not software. We are an operational team embedded in the
            manufacturing ecosystem, ensuring every order is physically
            supervised from first stitch to final freight.
          </p>
          <div className="mt-10 h-px max-w-sm bg-[#C8A882]" />
        </div>
      </section>

      {/* ─── Section 2: Production Timeline ─────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              The Process
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Production Timeline
            </h2>
          </div>

          {/* Vertical Stepper */}
          <div className="relative max-w-3xl">
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-[#E5DDD3]" />

            <div className="space-y-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex gap-10 pb-16 relative group">
                    {/* Step indicator */}
                    <div className="flex-shrink-0 w-14 h-14 bg-[#FAF9F6] border border-[#E5DDD3] group-hover:border-[#C8A882] group-hover:bg-[#F2EFE9] transition-all duration-300 flex items-center justify-center z-10">
                      <Icon
                        size={20}
                        className="text-[#C8A882]"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-bold text-[#C8A882] uppercase tracking-widest">
                        Step {step.step}
                      </span>
                      <h3 className="font-display text-3xl font-medium text-[#1A1A1A] mt-1 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-[#6B6560] leading-relaxed max-w-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Quality Control Standards ────────────── */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Our Standards
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Quality Control
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5DDD3]">
            {qcItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] p-8 lg:p-10 group hover:bg-[#2D5016] transition-colors duration-500"
                >
                  <div className="w-12 h-12 border border-[#E5DDD3] group-hover:border-[#C8A882] flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-[#6B6560] group-hover:text-[#C8A882] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#FAF9F6] mb-3 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B6560] group-hover:text-[#C8A882] leading-relaxed transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Logistics & Shipping ─────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px]">
            {/* Text Side */}
            <div className="bg-[#1A1A1A] text-[#FAF9F6] p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
                Global Freight
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#FAF9F6] mb-8">
                Logistics &amp; Shipping
              </h2>
              <div className="space-y-6 text-[#E5DDD3] text-sm leading-relaxed">
                <p>
                  We offer flexible incoterms to match your operational
                  preferences. Choose{" "}
                  <strong className="text-[#C8A882]">DDP</strong> (Delivered
                  Duty Paid) for an all-inclusive landed cost, or{" "}
                  <strong className="text-[#C8A882]">FOB</strong> (Free on
                  Board) if you have your own freight agreements.
                </p>
                <p>
                  Air-freight is available for samples and urgent orders.
                  Full sea-freight LCL and FCL options are structured for
                  scaling production runs, dramatically lowering your per-unit
                  logistics cost.
                </p>
                <p>
                  Our partners ensure{" "}
                  <strong className="text-[#C8A882]">
                    direct door-to-door delivery
                  </strong>{" "}
                  with real-time tracking, customs documentation handling, and a
                  single point of contact throughout transit.
                </p>
              </div>
            </div>

            {/* Visual Side */}
            <div className="bg-[#F2EFE9] p-12 lg:p-16 flex flex-col gap-8 justify-center">
              {[
                { mode: "Air Freight", time: "3–7 days", use: "Samples & time-sensitive drops" },
                { mode: "Sea Freight LCL", time: "35–45 days", use: "Cost-effective for standard capsule runs" },
                { mode: "Sea Freight FCL", time: "30–40 days", use: "Dedicated containers for high-volume scaling" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 pb-6 border-b border-[#E5DDD3] last:border-0 last:pb-0"
                >
                  <div className="w-10 h-10 bg-[#2D5016] flex items-center justify-center flex-shrink-0">
                    <Truck size={16} className="text-[#FAF9F6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">
                      {item.mode}
                    </h4>
                    <p className="text-sm text-[#6B6560]">
                      <span className="text-[#2D5016] font-medium">
                        {item.time}
                      </span>{" "}
                      - {item.use}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Our Local Presence ───────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/factory_presence.jpg"
                alt="Sewing machines and thread cones on the factory floor - Fenalt local presence"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#FAF9F6]/90 backdrop-blur-sm px-4 py-2">
                <MapPin size={14} className="text-[#2D5016]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">
                  On the Ground
                </span>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
                Physical Presence
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
                We&apos;re not just software.
              </h2>
              <div className="space-y-5 text-[#6B6560] leading-relaxed">
                <p>
                  Our team is physically embedded in the manufacturing hubs
                  where your garments are made. This means we can walk onto the
                  factory floor, speak directly with supervisors, and make
                  real-time production decisions.
                </p>
                <p>
                  We are your eyes, ears, and hands in the supply chain. When
                  your tech-pack requires interpretation, we&apos;re there. When a
                  defect emerges mid-run, we catch it before it compounds into a
                  costly issue.
                </p>
                <p>
                  This physical presence is what separates Fenalt from
                  sourcing platforms that merely broker introductions and
                  disappear. We stay until you have your product in hand.
                </p>
              </div>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#2D5016] hover:gap-4 transition-all duration-300"
              >
                Read our mission <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Operations FAQ ───────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Common Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Operations FAQ
            </h2>
          </div>

          <div className="space-y-0 border-t border-[#E5DDD3]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E5DDD3]">
                <button
                  id={`faq-ops-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between py-7 text-left gap-4 group"
                >
                  <span className="font-display text-xl lg:text-2xl font-light text-[#1A1A1A] group-hover:text-[#2D5016] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#6B6560] mt-1 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i
                      ? "max-h-64 opacity-100 pb-7"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#6B6560] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#6B6560] mb-6">Still have questions?</p>
            <Link
              href="/intake"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
