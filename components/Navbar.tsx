"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";

  const isGerman = pathname.startsWith("/de");

  const getLanguageLink = (targetLang: "en" | "de") => {
    if (targetLang === "de") {
      if (pathname === "/streetwear-manufacturing") return "/de/streetwear-hersteller";
      if (pathname === "/low-moq-apparel-manufacturing") return "/de/low-moq-bekleidungshersteller";
      if (pathname === "/capabilities") return "/de/bekleidungshersteller";
      return "/de/bekleidungshersteller";
    } else {
      if (pathname === "/de/streetwear-hersteller") return "/streetwear-manufacturing";
      if (pathname === "/de/low-moq-bekleidungshersteller") return "/low-moq-apparel-manufacturing";
      if (pathname === "/de/bekleidungshersteller") return "/capabilities";
      return "/";
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const serviceLinks = [
    { href: "/low-moq-apparel-manufacturing", label: isGerman ? "Low-MOQ Produktion" : "Low MOQ Apparel Manufacturing" },
    { href: "/small-batch-clothing-manufacturer", label: isGerman ? "Kleines Batch-Hersteller" : "Small Batch Manufacturing" },
    { href: "/boutique-clothing-manufacturer", label: isGerman ? "Boutique-Bekleidung" : "Boutique Clothing Manufacturing" },
    { href: "/streetwear-manufacturing", label: isGerman ? "Streetwear Produktion" : "Streetwear Manufacturing" },
    { href: "/hoodie-manufacturing", label: isGerman ? "Hoodie & Fleece Produktion" : "Hoodie & Fleece Manufacturing" },
    { href: "/clothing-manufacturer-bangladesh", label: isGerman ? "Bekleidungshersteller Bangladesh" : "Clothing Manufacturer Bangladesh" },
    { href: "/sitemap", label: isGerman ? "Alle Services (Sitemap)" : "All Services & Directory" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#FAF9F6] backdrop-blur-md shadow-sm border-b border-[#E5DDD3]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Fenalt Logo"
                width={280}
                height={70}
                className="h-12 lg:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide uppercase"
              >
                Home
              </Link>
              <Link
                href="/capabilities"
                className="text-sm font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide uppercase"
              >
                Capabilities
              </Link>

              {/* Services Dropdown (Desktop) */}
              <div className="relative group">
                <button className="text-sm font-medium text-[#6B6560] group-hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide uppercase flex items-center gap-1 py-2">
                  Services
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-[#FAF9F6] border border-[#E5DDD3] shadow-lg py-3 px-4 space-y-2 z-50">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A882] px-2 mb-1">
                    Manufacturing Categories
                  </p>
                  {serviceLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block px-2 py-1.5 text-xs text-[#1A1A1A] hover:bg-[#F2EFE9] hover:text-[#2D5016] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/operations"
                className="text-sm font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide uppercase"
              >
                Operations
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide uppercase"
              >
                Resources
              </Link>
              <Link
                href="/mission"
                className="text-sm font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide uppercase"
              >
                Our Mission
              </Link>
            </div>

            {/* Desktop CTA & Language Selector */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Selector */}
              <div className="flex items-center text-xs font-semibold uppercase tracking-widest text-[#6B6560] border-r border-[#E5DDD3] pr-6">
                <Link
                  href={getLanguageLink("en")}
                  className={`px-1.5 py-0.5 transition-colors ${
                    !isGerman ? "text-[#1A1A1A] font-bold border-b border-[#2D5016]" : "hover:text-[#1A1A1A]"
                  }`}
                >
                  EN
                </Link>
                <span className="mx-1 text-[#E5DDD3]">/</span>
                <Link
                  href={getLanguageLink("de")}
                  className={`px-1.5 py-0.5 transition-colors ${
                    isGerman ? "text-[#2D5016] font-bold border-b border-[#2D5016]" : "hover:text-[#1A1A1A]"
                  }`}
                >
                  DE
                </Link>
              </div>

              <Link
                href="/intake"
                className="inline-flex items-center px-5 py-2.5 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-medium rounded-none hover:bg-[#2D5016] transition-colors duration-300 tracking-wide"
              >
                {isGerman ? "Projekt Starten" : "Start Your Project"}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#1A1A1A] p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-y-auto ${
            isOpen ? "max-h-[calc(100vh-4rem)] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          } bg-[#FAF9F6] border-t border-[#E5DDD3] px-6 shadow-2xl`}
        >
          <div className="flex flex-col space-y-4">
            {/* Primary Nav Links */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-[#1A1A1A] hover:text-[#2D5016] transition-colors py-2 border-b border-[#E5DDD3]/60 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight size={16} className="text-[#C8A882]" />
            </Link>

            <Link
              href="/capabilities"
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-[#1A1A1A] hover:text-[#2D5016] transition-colors py-2 border-b border-[#E5DDD3]/60 flex items-center justify-between"
            >
              <span>Capabilities</span>
              <ArrowRight size={16} className="text-[#C8A882]" />
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[#E5DDD3]/60 pb-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-lg font-display font-medium text-[#1A1A1A] hover:text-[#2D5016] transition-colors py-2 flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`text-[#C8A882] transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-200 overflow-hidden pl-4 space-y-3 ${
                  servicesOpen ? "max-h-96 py-2" : "max-h-0"
                }`}
              >
                {serviceLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-[#6B6560] hover:text-[#2D5016] transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/operations"
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-[#1A1A1A] hover:text-[#2D5016] transition-colors py-2 border-b border-[#E5DDD3]/60 flex items-center justify-between"
            >
              <span>Operations</span>
              <ArrowRight size={16} className="text-[#C8A882]" />
            </Link>

            <Link
              href="/resources"
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-[#1A1A1A] hover:text-[#2D5016] transition-colors py-2 border-b border-[#E5DDD3]/60 flex items-center justify-between"
            >
              <span>Resources Hub</span>
              <ArrowRight size={16} className="text-[#C8A882]" />
            </Link>

            <Link
              href="/mission"
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-[#1A1A1A] hover:text-[#2D5016] transition-colors py-2 border-b border-[#E5DDD3]/60 flex items-center justify-between"
            >
              <span>Our Mission</span>
              <ArrowRight size={16} className="text-[#C8A882]" />
            </Link>

            {/* Language Switcher in Mobile Drawer */}
            <div className="pt-4 pb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-3">
                <Globe size={14} className="text-[#C8A882]" />
                <span>Region / Language</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={getLanguageLink("en")}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 text-center text-xs font-semibold tracking-wider uppercase border transition-colors ${
                    !isGerman
                      ? "bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A]"
                      : "bg-[#F2EFE9] text-[#1A1A1A] border-[#E5DDD3] hover:border-[#1A1A1A]"
                  }`}
                >
                  English (EN)
                </Link>
                <Link
                  href={getLanguageLink("de")}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 text-center text-xs font-semibold tracking-wider uppercase border transition-colors ${
                    isGerman
                      ? "bg-[#2D5016] text-[#FAF9F6] border-[#2D5016]"
                      : "bg-[#F2EFE9] text-[#1A1A1A] border-[#E5DDD3] hover:border-[#2D5016]"
                  }`}
                >
                  Deutsch (DE)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
