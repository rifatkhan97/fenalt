"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/operations", label: "Operations" },
    { href: "/mission", label: "Our Mission" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E5DDD3]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="text-xl lg:text-2xl font-bold text-[#1A1A1A] tracking-wide group-hover:opacity-80 transition-opacity uppercase font-sans">
                FENALT
              </span>
              <span className="text-xl lg:text-2xl font-medium text-[#2D5016] group-hover:opacity-80 transition-opacity ml-1">
                /
              </span>
              <span className="text-xl lg:text-2xl font-extrabold text-[#2D5016] group-hover:opacity-80 transition-opacity -ml-0.5">
                .
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/intake"
                className="inline-flex items-center px-5 py-2.5 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-medium rounded-none hover:bg-[#2D5016] transition-colors duration-300 tracking-wide"
              >
                Start Your Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#1A1A1A] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-[#FAF9F6] border-t border-[#E5DDD3]`}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <Link
          href="/intake"
          className="block w-full text-center px-5 py-3.5 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
        >
          Start Your Project
        </Link>
      </div>
    </>
  );
}
