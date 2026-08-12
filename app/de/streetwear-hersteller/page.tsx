import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Layers, Shirt, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Streetwear Hersteller für Heavyweight Kollektionen | Fenalt",
  description:
    "Spezialisierter Streetwear Hersteller für Modemarken im DACH-Raum. Produktion von Heavyweight Hoodies, Oversized T-Shirts & Fleece ab 50 Stück mit Vor-Ort QC.",
  alternates: {
    canonical: "https://fenalt.com/de/streetwear-hersteller",
    languages: {
      "de": "https://fenalt.com/de/streetwear-hersteller",
      "en": "https://fenalt.com/streetwear-manufacturing",
      "x-default": "https://fenalt.com/streetwear-manufacturing",
    },
  },
  openGraph: {
    title: "Streetwear Hersteller für Heavyweight Kollektionen | Fenalt",
    description:
      "Spezialisierter Streetwear Hersteller für Modemarken im DACH-Raum. Produktion von Heavyweight Hoodies, Oversized T-Shirts & Fleece ab 50 Stück mit Vor-Ort QC.",
    url: "https://fenalt.com/de/streetwear-hersteller",
  },
};

export default function GermanStreetwearHerstellerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Streetwear Hersteller & Bekleidungsproduktion",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Streetwear Hersteller, Heavyweight Hoodie Produktion, Oversized T-Shirt Hersteller",
    "areaServed": ["Germany", "Austria", "Switzerland"],
    "description":
      "Spezialisierte Streetwear Bekleidungsproduktion für deutsche, österreichische und Schweizer Streetwear-Labels. Heavyweight Stoffe (320gsm–480gsm), Puff-Druck, Stickerei & Low-MOQ Drops.",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Streetwear Hersteller",
        "item": "https://fenalt.com/de/streetwear-hersteller",
      },
    ],
  };

  const faqs = [
    {
      q: "Welche Stoffgewichte (GSM) stehen für Streetwear zur Verfügung?",
      a: "Wir bieten Heavyweight T-Shirts von 240gsm bis 300gsm sowie Hoodies und Sweatpants von 350gsm bis 480gsm aus 100% Baumwolle French Terry oder Fleece.",
    },
    {
      q: "Können eigene Schnitte (Drop Shoulder / Oversized) umgesetzt werden?",
      a: "Ja. Unser Team in Dhaka erstellt anhand Ihrer Tech-Packs oder Referenzmuster individuelle Schnittmuster mit überschnittenen Schultern und Kastenschnitten (Boxy Fit).",
    },
    {
      q: "Wie hoch ist die Mindestbestellmenge für Streetwear Drops?",
      a: "Unsere Streetwear Kapsel-Drops starten bereits ab 50 bis 100 Stück pro Modell, ideal für limitierte Kollektionen ohne hohe Lagerbestände.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const categories = [
    {
      icon: Layers,
      title: "Heavyweight Hoodies & Fleece",
      specs: "380gsm – 480gsm French Terry",
      body: "Verstärkte Doppelkapuzen, formstabile Bündchen, Flatlock-Nähte und custom Ösen & Kordeln.",
    },
    {
      icon: Shirt,
      title: "Oversized & Boxy T-Shirts",
      specs: "240gsm – 300gsm Gekämmte Baumwolle",
      body: "Drop-Shoulder-Passformen, dichte 1,25-Zoll Kragenrippen und gewaschene Stofffinishes für einen edlen Griff.",
    },
    {
      icon: Sparkles,
      title: "Veredelung & Branding",
      specs: "Puff-Druck, Stickerei, Labels",
      body: "High-Density Stickereien, 3D-Puffdruck, Weblabels am Nacken und individuell gebrandete Verpackungen.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Heavyweight Stoffe &amp; Custom Fits
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Streetwear Hersteller für{" "}
            <span className="italic font-medium text-[#2D5016]">Heavyweight Kollektionen.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Produzieren Sie hochwertige Streetwear mit 320gsm+ Stoffen, French Terry Fleece, Oversized-Schnitten und spezialisierten Druckverarbeitungen - abgesichert durch Vor-Ort Qualitätskontrolle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Streetwear Projekt Starten <ArrowRight size={16} />
            </Link>
            <Link
              href="/de/bekleidungshersteller"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Übersicht Bekleidungshersteller
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Spezialisierung
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Anforderungen moderner Streetwear-Labels
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Streetwear erfordert andere Standards als einfache Standard-Rohlinge. Käufer im DACH-Raum erwarten schweres Stoffgewicht, stabilen Kapuzenfall, dichte Kragenrippen und präzisen Druck.
              </p>
              <p>
                <strong>Fenalt vereint Streetwear-Design mit kontrollierter Produktion:</strong> Wir beschaffen schwere Baumwoll-Strickwaren, wählen spezialisierte Micro-Factories in Dhaka und prüfen jeden Druck und jede Naht direkt auf dem Produktionsboden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Produkt-Fokus
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Streetwear Produktkategorien
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882] mb-8">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider mb-4">
                      {item.specs}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualitätskontrolle */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
              Qualitätssicherung
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              Vor-Ort QC für einwandfreie Drops
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Vom Schrumpfungstest schwerer Fleece-Stoffe bis zur Prüfung von High-Density Puffdrucken kontrolliert unser Team in Dhaka jedes Kleidungsstück vor dem Versand.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Schrumpfungsprüfungen", desc: "Verifizierung der Stoffstabilität vor Zuschnitt und Konfektion." },
              { title: "Druck- & Nahtaudits", desc: "Kontrolle von Siebdruck-Passgenauigkeit und Flatlock-Nähten." },
              { title: "Nadel- & Metalldetektion", desc: "Sicherheitsprüfung aller Fertigwaren vor dem Export." },
            ].map((qc, i) => (
              <div key={i} className="p-6 bg-[#2A2A2A] border border-[#3A3A3A]">
                <ShieldCheck size={20} className="text-[#C8A882] mb-4" />
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-2">{qc.title}</h3>
                <p className="text-xs text-[#E5DDD3] leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Silo */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Verwandte Seiten
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/de/bekleidungshersteller"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Bekleidungshersteller Overview <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Allgemeine Textilproduktion &amp; Micro-Factory Sourcing.</p>
            </Link>
            <Link
              href="/de/low-moq-bekleidungshersteller"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Low-MOQ Produktion <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Kleinstserien ab 50 Einheiten für limitierte Drops.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Fragen &amp; Antworten
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Streetwear FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-6">
            Bereit für Ihren nächsten Streetwear Drop?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Senden Sie uns Ihre Tech-Packs oder Referenzbilder für ein unverbindliches Angebot innerhalb von 24–48 Stunden.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Streetwear Projekt Starten <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
