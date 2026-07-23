"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-baseline mb-6">
              <span className="text-2xl font-light text-[#FAF9F6] tracking-wider">FENO</span>
              <span className="text-2xl font-bold text-[#FAF9F6] tracking-wider">RISE</span>
            </Link>
            <p className="text-sm text-[#C8A882] font-light leading-relaxed italic mt-2">
              Rewiring the Global Supply Chain.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/capabilities", label: "Capabilities" },
                { href: "/operations", label: "Operations" },
                { href: "/mission", label: "Our Mission" },
                { href: "/intake", label: "Start a Project" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E5DDD3] hover:text-[#C8A882] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-5">
              Legal & Contact
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E5DDD3] hover:text-[#C8A882] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-5">
              Stay Connected
            </h4>
            <p className="text-sm text-[#E5DDD3] leading-relaxed mb-5">
              Join our network for updates on sustainable manufacturing.
            </p>
            {submitted ? (
              <p className="text-sm text-[#C8A882] font-medium">
                ✓ You&apos;re on the list. Thank you.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-2.5 bg-[#2A2A2A] border border-[#3A3A3A] text-sm text-[#FAF9F6] placeholder-[#6B6560] focus:outline-none focus:border-[#C8A882] transition-colors"
                />
                <button
                  type="submit"
                  className="px-3 py-2.5 bg-[#C8A882] text-[#1A1A1A] hover:bg-[#2D5016] hover:text-[#FAF9F6] transition-colors duration-300"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            {/* Direct Contact Details */}
            <div className="mt-8 space-y-2 text-sm text-[#E5DDD3]">
              <p className="leading-relaxed">
                Dhaka Housing Main Road, Holding - 4, Level - 9, Dhaka -1207
              </p>
              <p>
                <a
                  href="mailto:hello@fenorise.com"
                  className="hover:text-[#C8A882] transition-colors duration-200"
                >
                  hello@fenorise.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/8801781345299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A882] transition-colors duration-200"
                >
                  WhatsApp: +88 017 8134 5299
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B6560]">
            © {new Date().getFullYear()} Fenorise. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6560]">
            Built with purpose. Manufactured with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
