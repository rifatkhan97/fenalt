"use client";

import { useState } from "react";
import {
  Shield,
  CheckCircle2,
  Leaf,
  ChevronDown,
  ArrowRight,
  FileCheck,
  Layers,
  Package,
} from "lucide-react";

const categories = [
  "T-Shirts & Tops",
  "Bottoms (Trousers, Shorts)",
  "Outerwear",
  "Knitwear",
  "Activewear",
  "Accessories",
  "Other",
];

const unitRanges = [
  "50–99 units",
  "100–299 units",
  "300–499 units",
  "500–999 units",
  "1,000+ units",
];

const guarantees = [
  {
    icon: Shield,
    title: "Strict NDA / IP Protection",
    desc: "Your designs, tech packs, and brand assets are covered by a mutual NDA from the moment of submission.",
  },
  {
    icon: CheckCircle2,
    title: "100% Quality Managed",
    desc: "Every order includes in-line and final QC audits. We guarantee AQL-compliant delivery.",
  },
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    desc: "We only partner with factories that meet our ethical sourcing standards - verified by our on-site team.",
  },
];

const faqItems = [
  {
    q: "What happens after I submit?",
    a: "Our team reviews your submission and responds with an initial quote within 24–48 business hours. We may reach out with a few clarifying questions to ensure the quote is accurate. Once approved, you'll be matched with a factory and a dedicated project manager.",
  },
  {
    q: "How is my IP and design protected?",
    a: "Every project is covered by a mutual Non-Disclosure Agreement (NDA) from the moment of submission. Your tech packs, sketches, and brand assets are never shared beyond the factory directly involved in your production. Factory partners sign separate confidentiality agreements.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept most standard formats: PDF, AI, PSD, DXF, DWG for tech packs, and PNG/JPG for reference imagery. If you only have hand sketches, we can work with those too - just describe your vision clearly in the project description.",
  },
  {
    q: "Is there a fee for submitting a quote request?",
    a: "No. Submitting a quote request is completely free. You only commit once you formally approve a quote and project agreement.",
  },
];

export default function IntakePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    email: "",
    category: "",
    units: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ─── Section 1: Form Header ──────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Get Started
          </p>
          <h1 className="font-display text-5xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05]">
            Ready to build your{" "}
            <span className="italic font-medium text-[#2D5016]">
              collection?
            </span>
          </h1>
          <p className="mt-8 text-lg text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Submit your project details below and our team will respond with a
            fully transparent, no-obligation quote within 24–48 hours.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Preparation Checklist ────────────────── */}
      <section className="pb-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-6">
              <FileCheck size={20} className="text-[#2D5016] mt-0.5 flex-shrink-0" />
              <h2 className="font-display text-2xl font-medium text-[#1A1A1A]">
                Before You Submit
              </h2>
            </div>
            <p className="text-[#6B6560] mb-6">
              To give you the most accurate quote, please have the following
              ready:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: FileCheck,
                  num: "01",
                  title: "Tech Pack or Sketches",
                  desc: "Clear design reference - a formal tech pack, hand sketches, or reference images.",
                },
                {
                  icon: Layers,
                  num: "02",
                  title: "Estimated Quantities",
                  desc: "Your approximate target units for this production run.",
                },
                {
                  icon: Package,
                  num: "03",
                  title: "Preferred Fabric Types",
                  desc: "A sense of your material preference - heavyweight cotton, knitwear, deadstock, etc.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <span className="font-display text-2xl font-light text-[#C8A882]/60 min-w-[2rem]">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] mb-1 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6B6560] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: The Intake Form ──────────────────────── */}
      <section className="pb-24 lg:pb-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {submitted ? (
            <div className="bg-[#2D5016] text-[#FAF9F6] p-16 text-center">
              <CheckCircle2
                size={48}
                className="mx-auto mb-6 text-[#C8A882]"
                strokeWidth={1}
              />
              <h2 className="font-display text-4xl font-light mb-4">
                Submission Received
              </h2>
              <p className="text-[#C8A882] leading-relaxed max-w-md mx-auto">
                Thank you. Our team will review your project and respond with a
                detailed quote within 24–48 business hours.
              </p>
            </div>
          ) : (
            <div className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-12">
              <h2 className="font-display text-3xl font-light text-[#1A1A1A] mb-8">
                Project Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name + Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="brandName"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                    >
                      Brand Name *
                    </label>
                    <input
                      id="brandName"
                      name="brandName"
                      type="text"
                      required
                      value={formData.brandName}
                      onChange={handleChange}
                      placeholder="Your Brand"
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@yourbrand.com"
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                  />
                </div>

                {/* Row 3: Category + Units */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                    >
                      Garment Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#2D5016] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="units"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                    >
                      Estimated Units *
                    </label>
                    <select
                      id="units"
                      name="units"
                      required
                      value={formData.units}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#2D5016] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {unitRanges.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your garment, fabric preferences, construction details, and timeline. (Note: We will request your tech packs and reference images via email after you submit this request.)"
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    id="intake-submit"
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
                  >
                    Request Quote <ArrowRight size={14} />
                  </button>
                  <p className="mt-3 text-xs text-[#6B6560]">
                    By submitting, you agree to our Privacy Policy and NDA terms.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ─── Section 4: The Fenalt Guarantee ───────────────── */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Our Commitment
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              The Fenalt Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5DDD3]">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] p-10 lg:p-12 text-center group"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-[#2D5016] mb-6 group-hover:bg-[#2D5016] transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-[#2D5016] group-hover:text-[#FAF9F6] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-4">
                    {g.title}
                  </h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Trust & FAQ ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Trust &amp; FAQ
            </h2>
          </div>

          <div className="space-y-0 border-t border-[#E5DDD3]">
            {faqItems.map((faq, i) => (
              <div key={i} className="border-b border-[#E5DDD3]">
                <button
                  id={`faq-intake-${i}`}
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
        </div>
      </section>

      {/* ─── Section 6: Alternative Contact ──────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] mb-4">
            Not ready for a full project?
          </p>
          <p className="text-[#6B6560] leading-relaxed mb-8 max-w-lg mx-auto">
            Reach out for press inquiries, factory partnerships, brand
            collaborations, or general questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@fenalt.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              hello@fenalt.com
            </a>
            <a
              href="mailto:press@fenalt.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              press@fenalt.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
