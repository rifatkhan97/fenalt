import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MissionNewsletter from "@/components/MissionNewsletter";

export const metadata: Metadata = {
  title: "Our Mission - FenoRise",
  description:
    "Rewiring the Global Supply Chain. Fenorise connects ethical micro-factories with global fashion brands through the circular Jhoot economy.",
};

export default function MissionPage() {

  return (
    <>
      {/* ─── Section 1: Header ───────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#FAF9F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Our Purpose
          </p>
          <h1 className="font-display text-5xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl">
            Rewiring the{" "}
            <span className="italic font-medium text-[#2D5016]">Global</span>{" "}
            Supply Chain.
          </h1>
          <div className="mt-10 h-px max-w-sm bg-[#C8A882]" />
        </div>
      </section>

      {/* ─── Section 2: The Manifesto ────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-12">
            The Manifesto
          </p>
          <div className="space-y-8">
            <p className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] leading-snug">
              The next time you check your clothing tag, you likely won&apos;t
              see the story of who actually sewed it.
            </p>
            <p className="font-display text-3xl lg:text-5xl font-light text-[#C8A882] leading-snug italic">
              Beyond the massive mega-factories lies a shadow economy of
              thousands of micro-garment factories,
            </p>
            <p className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] leading-snug">
              overwhelmingly founded by former line operators who took a leap of
              faith.
            </p>
          </div>

          {/* Decorative rule */}
          <div className="flex items-center gap-6 mt-16">
            <div className="h-px flex-1 bg-[#2A2A2A]" />
            <span className="text-xs text-[#6B6560] uppercase tracking-widest">
              FenoRise, 2026
            </span>
            <div className="h-px flex-1 bg-[#2A2A2A]" />
          </div>
        </div>
      </section>

      {/* ─── Section 3: The Cost of Disconnection ────────────── */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
                The Problem
              </p>
              <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-8 leading-tight">
                The Cost of Disconnection
              </h2>
              <div className="space-y-6 text-[#6B6560] text-lg leading-relaxed">
                <p>
                  Without digital presence, these factories are{" "}
                  <strong className="text-[#1A1A1A]">
                    locked out of the global market.
                  </strong>{" "}
                  They cannot discover international buyers. They cannot
                  communicate in technical design language. They cannot prove
                  their quality without an intermediary.
                </p>
                <p>
                  When orders dry up, these factories close. Shattering dreams
                  and devastating the families that depend on them - not because
                  of a lack of skill, but a lack of access.
                </p>
                <p>
                  The global fashion industry loses billions in capacity to this
                  disconnection. And the people who bear that cost are the ones
                  who can least afford it.
                </p>
              </div>
            </div>

            {/* Visual accent */}
            <div className="space-y-4">
              {[
                {
                  num: "Offline",
                  desc: "The vast majority of micro-factories operate entirely without a digital footprint.",
                },
                {
                  num: "Grassroots",
                  desc: "Founded overwhelmingly by highly skilled, former factory line operators.",
                },
                {
                  num: "Millions",
                  desc: "Of livelihoods and families depend entirely on the informal manufacturing sector.",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-8 p-8 bg-[#FAF9F6] border-l-4 border-[#C8A882]"
                >
                  <span className="font-display text-3xl sm:text-4xl font-light text-[#C8A882] min-w-[8rem] flex-shrink-0">
                    {stat.num}
                  </span>
                  <p className="text-[#6B6560] text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Our Solution ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#2D5016] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-8">
            The Bridge
          </p>
          <h2 className="font-display text-4xl lg:text-7xl font-light text-[#FAF9F6] leading-tight mb-10">
            Our Solution
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-[#E5DDD3] leading-relaxed font-light">
              Fenorise is the{" "}
              <span className="text-[#C8A882] italic font-medium">
                operational bridge.
              </span>{" "}
              We empower grassroots creativity, foster safer workspaces, ensure
              fair wages, and turn the dreams of local factory owners into
              globally competitive realities.
            </p>
          </div>

          {/* Solution pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Empower Creativity", desc: "Give micro-factory owners access to global buyers and design language." },
              { title: "Safe Workspaces", desc: "Advocate for and audit factory working conditions on every order." },
              { title: "Fair Wages", desc: "Ensure fair margins flow directly to factory owners and their teams." },
              { title: "Global Access", desc: "Translate capability into internationally competitive supply chain presence." },
            ].map((pillar, i) => (
              <div key={i} className="text-left p-6 border border-[#3D6226] hover:border-[#C8A882] transition-colors duration-300">
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#C8A882] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: The Circular Mission ─────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/deadstock_fabric_rolls.jpg"
                  alt="Deadstock circular fabric rolls being repurposed"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay stat */}
              <div className="absolute -bottom-6 -right-6 bg-[#1A1A1A] text-[#FAF9F6] p-8 hidden md:block">
                <p className="font-display text-4xl font-light text-[#C8A882]">
                  400k
                </p>
                <p className="text-xs text-[#E5DDD3] mt-1 max-w-[10rem]">
                  Tonnes of deadstock available annually
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
                Circular Economy
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
                The Circular Mission
              </h2>
              <div className="space-y-5 text-[#6B6560] text-lg leading-relaxed">
                <p>
                  Fast fashion generates waste. We harvest it.
                </p>
                <p>
                  By structuring the informal &apos;Jhoot&apos; economy - the
                  off-cut fabric discarded by mega-factories - we turn
                  what would become landfill into{" "}
                  <strong className="text-[#1A1A1A]">premium garments.</strong>
                </p>
                <p>
                  These deadstock fabrics often possess exceptional quality.
                  They were produced to meet demanding luxury standards before
                  being discarded due to overproduction or cancelled orders.
                  We rescue and reintegrate them into the supply chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Our Story ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
                THE STORY
              </p>
              <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-8 leading-tight">
                Born from the factory floor. Built for the global market.
              </h2>
              <div className="text-[#6B6560] text-base lg:text-lg leading-relaxed">
                <p>
                  FenoRise is a deeply personal mission. It began in 2017 on the apparel side, experiencing firsthand how incredibly difficult it is for an independent clothing line to find reliable makers and ensure consistent quality. But spending years on the factory floors of Bangladesh revealed the other side of the equation. We listened to highly skilled micro-factory operators who took a massive leap of faith to start their own businesses, only to watch them close. Their dreams shattered not from a lack of talent, but because they simply couldn&apos;t secure enough work orders at a fair price.
                </p>
                <p className="mt-4">
                  FenoRise was built to bridge this exact gap. Combining deep on-the-ground manufacturing experience with modern operational infrastructure, our specialized team is here to solve both problems. We exist to give independent brands the reliable quality they need to grow, while ensuring local makers get the fair pricing and consistent access they need to see their own dreams come true.
                </p>
                <p className="mt-6 font-display text-base lg:text-lg italic text-[#C8A882]">
                  —{" "}
                  <a
                    href="https://www.linkedin.com/in/rifatiller/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-[#1A1A1A] transition-colors"
                  >
                    Rifat
                  </a>{" "}
                  &amp; the FenoRise Team
                </p>
              </div>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="relative aspect-[4/3] bg-[#E5DDD3] border border-[#D4C9B8] flex items-center justify-center p-8 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-[#6B6560] leading-relaxed max-w-sm">
                [Insert high-quality candid image of factory floor collaboration or fabric inspection]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Join the Movement ────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-8">
            Be Part of It
          </p>
          <h2 className="font-display text-4xl lg:text-7xl font-light text-[#1A1A1A] leading-tight mb-6">
            Join the{" "}
            <span className="italic text-[#2D5016] font-medium">Movement.</span>
          </h2>
          <p className="text-lg text-[#6B6560] leading-relaxed mb-12 max-w-2xl mx-auto">
            Support the sustainable micro-manufacturing movement. Start a
            project or join our network of brands, factories, and advocates
            committed to a fairer supply chain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/intake"
              id="mission-cta-primary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Start a Project <ArrowRight size={14} />
            </Link>
            <a
              href="mailto:hello@fenorise.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Join Our Network
            </a>
          </div>

          {/* Newsletter */}
          <MissionNewsletter />
        </div>
      </section>
    </>
  );
}
