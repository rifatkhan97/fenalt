"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendContactEmail } from "@/app/actions/send-contact-email";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const result = await sendContactEmail(data);
      if (result && "error" in result && result.error) {
        setServerError(result.error);
      } else if (result && "success" in result && result.success) {
        setSubmitted(true);
        reset();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "A network or server error occurred. Please try again.";
      setServerError(message);
    }
  };

  return (
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-32 bg-[#FAF9F6] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Contact Details & Trust Signals */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Operations &amp; Support
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-6">
              Get in Touch
            </h1>
            <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-8">
              For general inquiries, factory partnership opportunities, or press, please reach out to our team on the ground in Dhaka. If you are an independent label looking to submit a tech pack for a manufacturing quote, please use our dedicated project portal.
            </p>

            {/* Action Link */}
            <div className="mb-12">
              <Link
                href="/intake"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#1A1A1A] hover:text-[#2D5016] border-b border-[#1A1A1A] hover:border-[#2D5016] pb-1 transition-colors group"
              >
                Start a Manufacturing Project{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Contact Info Block */}
            <div className="space-y-6 pt-8 border-t border-[#E5DDD3]">
              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F2EFE9] border border-[#E5DDD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#C8A882]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-1">
                    Headquarters
                  </h3>
                  <p className="text-sm text-[#1A1A1A] leading-relaxed">
                    Dhaka Housing Main Road, Holding - 4, Level - 9, Dhaka -1207
                  </p>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F2EFE9] border border-[#E5DDD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-[#C8A882]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-1">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:hello@fenalt.com"
                    className="text-sm text-[#1A1A1A] hover:text-[#2D5016] transition-colors"
                  >
                    hello@fenalt.com
                  </a>
                </div>
              </div>

              {/* WhatsApp / Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F2EFE9] border border-[#E5DDD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-[#C8A882]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-1">
                    WhatsApp / Phone
                  </h3>
                  <a
                    href="tel:+8801781345299"
                    className="text-sm text-[#1A1A1A] hover:text-[#2D5016] transition-colors"
                  >
                    +88 017 8134 5299
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-12">
            <h2 className="font-display text-3xl font-light text-[#1A1A1A] mb-8">
              Send a Message
            </h2>

            {submitted ? (
              <div className="bg-[#2D5016] text-[#FAF9F6] p-12 text-center">
                <CheckCircle2
                  size={44}
                  className="mx-auto mb-4 text-[#C8A882]"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-3xl font-light mb-3">
                  Message Sent
                </h3>
                <p className="text-[#C8A882] text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. A member of our team in Dhaka will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register("name")}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    placeholder="jane@yourbrand.com"
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    {...register("subject")}
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#2D5016] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Factory Partnership">Factory Partnership</option>
                    <option value="Press & Media">Press &amp; Media</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    {...register("message")}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {serverError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-semibold mb-4">
                    {serverError}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
