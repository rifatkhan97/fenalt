import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Leaf, Heart, ArrowRight } from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Fenorise - Sustainable, Low-MOQ Manufacturing. Fully Managed.",
  description:
    "We connect independent fashion brands with ethical micro-factories. Sustainable circular fabrics, zero communication barriers, fully managed quality control.",
};

const advantages = [
  {
    icon: MessageSquare,
    title: "Zero Communication Friction",
    body: "We translate your Western tech-packs into actionable floor instructions. No language barriers, no time-zone delays.",
  },
  {
    icon: Leaf,
    title: "Circular Sustainability",
    body: "We utilize 'Jhoot'-premium deadstock fabrics discarded by mega-factories to reduce global textile waste.",
  },
  {
    icon: Heart,
    title: "Ethical Micro-Factory Support",
    body: "We partner exclusively with independent micro-factories, paying fair margins that secure livelihoods.",
  },
];

const audiences = [
  {
    label: "Independent Designers",
    body: "Low minimums to bring your first vision to life. We handle the complexity of overseas production so you can focus on design.",
    tag: "From 50 units",
  },
  {
    label: "Growing DTC Brands",
    body: "Scale seamlessly with reliable, managed repeat production. Our floor teams ensure consistent quality across every run.",
    tag: "100–500 units",
  },
  {
    label: "Eco-Conscious Labels",
    body: "Leverage our circular deadstock network to lower your environmental footprint without sacrificing quality or margin.",
    tag: "Circular fabrics",
  },
];

const stats = [
  { value: "10,000+", label: "Micro-factories in our network zone" },
  { value: "100%", label: "Fully Managed QC on every order" },
  { value: "400k", label: "Tonnes of Deadstock available annually" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Section 1: Hero ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F2EFE9]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero_fabric_texture.jpg"
            alt="Premium fabric texture"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2EFE9]/60 via-[#FAF9F6]/40 to-[#FAF9F6]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6 animate-fade-in-up">
            Sustainable Manufacturing Platform
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-4xl mb-8 animate-fade-in-up delay-100">
            Sustainable,{" "}
            <span className="italic font-medium">Low-MOQ</span>{" "}
            Manufacturing.{" "}
            <span className="text-[#2D5016]">Fully Managed.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12 animate-fade-in-up delay-200">
            We connect independent fashion brands with highly capable, ethical
            micro-factories. Launch your collection using sustainable circular
            fabrics, with zero communication barriers and fully managed quality
            control.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              href="/intake"
              id="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/capabilities"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              See Our Capabilities
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <span className="text-xs text-[#6B6560] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C8A882] to-transparent" />
        </div>
      </section>

      {/* ─── Section 2: The Fenorise Advantage ──────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Why Fenorise
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              The Fenorise Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5DDD3]">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] p-10 lg:p-12 group hover:bg-[#F2EFE9] transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#C8A882] mb-8 group-hover:bg-[#C8A882] group-hover:text-[#FAF9F6] transition-all duration-300 text-[#C8A882]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-medium text-[#1A1A1A] mb-4">
                    {adv.title}
                  </h3>
                  <p className="text-[#6B6560] leading-relaxed text-sm lg:text-base">
                    {adv.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider max-w-7xl mx-auto px-6 lg:px-8" />

      {/* ─── Section 3: Who We Serve ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Our Clients
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Who We Serve
            </h2>
          </div>

          <div className="space-y-0">
            {audiences.map((audience, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-16 border-t border-[#E5DDD3] ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Block */}
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#6B6560] text-xs font-semibold uppercase tracking-widest mb-6">
                    {audience.tag}
                  </span>
                  <h3 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
                    {audience.label}
                  </h3>
                  <p className="text-[#6B6560] leading-relaxed text-lg max-w-lg">
                    {audience.body}
                  </p>
                  <Link
                    href="/intake"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#2D5016] hover:gap-4 transition-all duration-300"
                  >
                    Get started <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Visual Accent */}
                <div className="flex-1 w-full">
                  <div
                    className={`aspect-[4/3] w-full bg-gradient-to-br flex items-center justify-center relative overflow-hidden ${
                      i === 0
                        ? "from-[#F2EFE9] to-[#E5DDD3]"
                        : i === 1
                        ? "from-[#E8F0E0] to-[#D4E4C4]"
                        : "from-[#EDE8E0] to-[#D8CEBC]"
                    }`}
                  >
                    <span className="font-display text-8xl lg:text-9xl font-light text-[#1A1A1A]/10 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="h-px bg-[#C8A882]/40" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Impact Metrics ───────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center md:text-left md:px-12 ${
                  i !== 0 ? "md:border-l md:border-[#2A2A2A]" : ""
                }`}
              >
                <p className="font-display text-5xl lg:text-7xl font-light text-[#C8A882] mb-4">
                  {stat.value}
                </p>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Testimonial Carousel ─────────────────── */}
      <TestimonialsCarousel />

      {/* ─── Section 6: Final CTA Banner ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#2D5016]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Ready to Begin?
          </p>
          <h2 className="font-display text-4xl lg:text-7xl font-light text-[#FAF9F6] leading-tight mb-10">
            Stop compromising on{" "}
            <span className="italic font-medium">quality</span> and minimums.
          </h2>
          <Link
            href="/intake"
            id="final-cta"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#FAF9F6] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#C8A882] transition-colors duration-300"
          >
            Build Your Collection Today
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
