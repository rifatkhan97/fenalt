"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendIntakeEmail, type AttachmentInput } from "@/app/actions/send-email";
import {
  Shield,
  CheckCircle2,
  Leaf,
  ChevronDown,
  ArrowRight,
  FileCheck,
  Layers,
  Package,
  Paperclip,
  X,
} from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  brandName: z.string().min(1, "Brand name is required"),
  email: z.string().email("Invalid email address"),
  category: z.string().min(1, "Garment category is required"),
  units: z.string().min(1, "Estimated units is required"),
  description: z.string().min(10, "Project description must be at least 10 characters"),
  fileLink: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^https?:\/\/.+/.test(val.trim()),
      { message: "Please enter a full link starting with https:// or http://" }
    ),
});

type FormData = z.infer<typeof schema>;

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

const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB

/** Read a File and return its Base64 content string (no data-URI prefix). */
function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip "data:<mime>;base64," prefix
      resolve(result.split(",")[1]);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function IntakeForm() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      brandName: "",
      email: "",
      category: "",
      units: "",
      description: "",
      fileLink: "",
    },
  });

  /** Validate and stage a single chosen file. */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setUploadError("Unsupported file type. Please upload a PDF, JPG, or PNG file.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setUploadError(
        "This file is larger than 3MB. Please use the file/link field below to share your tech pack instead."
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setUploadedFile(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /** Clear the staged file. */
  const removeFile = () => {
    setUploadedFile(null);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    setUploadError(null);
    try {
      // Client-side guard against stale state
      if (uploadedFile) {
        if (!ALLOWED_TYPES.includes(uploadedFile.type)) {
          setUploadError("Unsupported file type. Please upload a PDF, JPG, or PNG file.");
          return;
        }
        if (uploadedFile.size > MAX_FILE_SIZE) {
          setUploadError(
            "This file is larger than 3MB. Please use the file/link field below to share your tech pack instead."
          );
          return;
        }
      }

      // Build payload: Base64-encode file in-memory if present (never written to disk)
      const payload: Parameters<typeof sendIntakeEmail>[0] = { ...data };

      if (uploadedFile) {
        payload.attachment = {
          name: uploadedFile.name,
          type: uploadedFile.type,
          content: await readFileAsBase64(uploadedFile),
        };
      }

      const result = await sendIntakeEmail(payload);
      if (result && "error" in result && result.error) {
        setServerError(result.error);
      } else if (result && "success" in result && result.success) {
        if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
            event_category: "Intake",
            event_label: data.category,
            value: 1,
          });
        }
        setSubmitted(true);
        setUploadedFile(null);
        setUploadError(null);
        reset();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "A network or server error occurred. Please try again.";
      setServerError(message);
    }
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
                      <h3 className="font-semibold text-[#1A1A1A] mb-1 text-sm flex items-center gap-1.5">
                        <Icon size={14} className="text-[#2D5016]" />
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                      type="text"
                      {...register("name")}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                    )}
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
                      type="text"
                      {...register("brandName")}
                      placeholder="Your Brand"
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                    />
                    {errors.brandName && (
                      <p className="mt-1 text-xs text-red-600">{errors.brandName.message}</p>
                    )}
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
                    type="email"
                    {...register("email")}
                    placeholder="jane@yourbrand.com"
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
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
                      {...register("category")}
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
                    {errors.category && (
                      <p className="mt-1 text-xs text-red-600">{errors.category.message}</p>
                    )}
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
                      {...register("units")}
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
                    {errors.units && (
                      <p className="mt-1 text-xs text-red-600">{errors.units.message}</p>
                    )}
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
                    rows={5}
                    {...register("description")}
                    placeholder="Describe your garment, fabric preferences, construction details, and timeline."
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors resize-none"
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>
                  )}
                </div>

                {/* Row 5: File Upload (Optional) */}
                <div>
                  <label
                    htmlFor="file-upload"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Tech Pack / Design Reference
                    <span className="normal-case tracking-normal font-normal text-[#C8A882] ml-1.5">(Optional)</span>
                  </label>
                  <p className="text-xs text-[#6B6560] mb-3">
                    Upload 1 PDF, JPG, or PNG up to 3MB. For larger or multiple files, use the link below.
                  </p>

                  {/* Hidden native file input — single file only */}
                  <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    accept="application/pdf,image/jpeg,image/png"
                    onChange={handleFileChange}
                    className="sr-only"
                    aria-label="Upload tech pack or design reference"
                  />

                  {/* Styled trigger — hidden once a file is staged */}
                  {!uploadedFile && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 px-4 py-4 border border-dashed border-[#C8A882] bg-[#F2EFE9] text-sm text-[#6B6560] hover:border-[#2D5016] hover:text-[#2D5016] transition-colors duration-200 cursor-pointer"
                    >
                      <Paperclip size={14} className="flex-shrink-0" />
                      <span>Click to browse</span>
                    </button>
                  )}

                  {/* Staged file row */}
                  {uploadedFile && (
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#F2EFE9] border border-[#E5DDD3] text-sm">
                      <span className="text-[#1A1A1A] truncate max-w-[75%]">{uploadedFile.name}</span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="flex items-center gap-1 ml-4 text-xs text-[#6B6560] hover:text-red-600 transition-colors flex-shrink-0"
                        aria-label={`Remove ${uploadedFile.name}`}
                      >
                        <X size={12} />
                        Remove
                      </button>
                    </div>
                  )}

                  {/* Upload validation error */}
                  {uploadError && (
                    <p className="mt-2 text-xs text-red-600">{uploadError}</p>
                  )}
                </div>

                {/* Row 6: External File Link (Optional) */}
                <div>
                  <label
                    htmlFor="fileLink"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Tech Pack / Design Files Link
                    <span className="normal-case tracking-normal font-normal text-[#C8A882] ml-1.5">(Optional)</span>
                  </label>
                  <p className="text-xs text-[#6B6560] mb-3">
                    For larger tech packs or multiple files, share a Google Drive, Dropbox, WeTransfer, OneDrive, or similar link.
                  </p>
                  <input
                    id="fileLink"
                    type="text"
                    {...register("fileLink")}
                    placeholder="https://..."
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                  />
                  {errors.fileLink && (
                    <p className="mt-1 text-xs text-red-600">{errors.fileLink.message}</p>
                  )}
                </div>

                {serverError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-semibold mb-4">
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    id="intake-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Request Quote"} <ArrowRight size={14} />
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
