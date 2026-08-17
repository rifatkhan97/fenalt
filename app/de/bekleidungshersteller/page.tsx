import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scissors, Package, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Bekleidungshersteller für nachhaltige Modemarken | Fenalt",
  description:
    "Nachhaltige Bekleidungsherstellung und Textilproduktion für europäische Modemarken. Low-MOQ Ab 50 Stück, geprüfte Micro-Factories und Vor-Ort-Qualitätskontrolle.",
  alternates: {
    canonical: "https://www.fenalt.com/de/bekleidungshersteller",
    languages: {
      "de": "https://www.fenalt.com/de/bekleidungshersteller",
      "en": "https://www.fenalt.com/capabilities",
      "x-default": "https://www.fenalt.com/capabilities",
    },
  },
  openGraph: {
    title: "Bekleidungshersteller für nachhaltige Modemarken | Fenalt",
    description:
      "Nachhaltige Bekleidungsherstellung und Textilproduktion für europäische Modemarken. Low-MOQ Ab 50 Stück, geprüfte Micro-Factories und Vor-Ort-Qualitätskontrolle.",
    url: "https://www.fenalt.com/de/bekleidungshersteller",
  },
};

export default function GermanBekleidungsherstellerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bekleidungsherstellung & Textilproduktion",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://www.fenalt.com",
    },
    "serviceType": "Bekleidungshersteller, Textilproduktion, Musterentwicklung, Qualitätskontrolle",
    "areaServed": ["Germany", "Austria", "Switzerland"],
    "description":
      "B2B Bekleidungshersteller für unabhängige Modemarken im DACH-Raum. Produktion ab 50 Stück mit Vor-Ort-Qualitätskontrolle in Dhaka und DDP-Versand.",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fenalt.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bekleidungshersteller",
        "item": "https://www.fenalt.com/de/bekleidungshersteller",
      },
    ],
  };

  const faqs = [
    {
      q: "Wie hoch ist die Mindestbestellmenge (MOQ) bei Fenalt?",
      a: "Fenalt ermöglicht die Produktion von Kleinserien bereits ab 50 Stück pro Modell für Muster-Drops. Standardmäßige Kapselkollektionen liegen bei 100 bis 300 Stück.",
    },
    {
      q: "Wie lange dauern Musterentwicklung und Produktion?",
      a: "Die physische Musterentwicklung (Schnittmuster, Prototyp) dauert in der Regel 10 bis 14 Tage. Die anschließende Serienproduktion benötigt typischerweise 4 bis 6 Wochen.",
    },
    {
      q: "Wie wird die Qualitätskontrolle vor Ort sichergestellt?",
      a: "Unser eigenes Team in Dhaka überprüft Stoffqualitäten, Schnitttoleranzen (±1,5 cm) und Nähte direkt auf der Produktionsfläche der Micro-Factories nach AQL ANSI/ASQ Z1.4 Standards.",
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

  const tiers = [
    {
      icon: Scissors,
      title: "Muster & Prototypen",
      tag: "Ab 50 Stück",
      subtitle: "Für junge Labels und erste Kollektions-Drops.",
      body: "Erstellung von Schnittmustern, Materialbeschaffung und physischen Prototypen zur Passformprüfung vor dem Serienstart.",
    },
    {
      icon: Package,
      title: "Kapsel-Produktion",
      tag: "100–300 Stück",
      subtitle: "Der beliebteste Standard für wachsende Modemarken.",
      body: "Textilproduktion mit hochwertigen Circular-Deadstock-Stoffen ('Jhoot'), lückenloser Vor-Ort-Qualitätskontrolle und Markenverpackung.",
    },
    {
      icon: Layers,
      title: "Skalierende Serien",
      tag: "500+ Stück",
      subtitle: "Für etablierte Labels mit regelmäßigen Re-Orders.",
      body: "Kontinuierliche Produktionsaudits, dedizierte Ansprechpartner und weltweiter DDP/FOB-Versand für volumenstarke Kollektionen.",
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
            B2B Textilproduktion &amp; Sourcing
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Nachhaltige Bekleidungsherstellung für{" "}
            <span className="italic font-medium text-[#2D5016]">europäische Modemarken.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Fenalt verbindet unabhängige Modemarken aus Deutschland, Österreich und der Schweiz mit geprüften Micro-Factories. Kleidung produzieren lassen ab 50 Stück - mit Vor-Ort-Qualitätskontrolle und ohne Sprachbarrieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Projekt Starten <ArrowRight size={16} />
            </Link>
            <Link
              href="/de/low-moq-bekleidungshersteller"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Low-MOQ Details
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Übersicht
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Moderne Bekleidungsproduktion neu gedacht
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Klassische Textilhersteller verlangen von jungen Modemarken oft hohe Mindestbestellmengen von mehreren tausend Stück. Das bindet wertvolles Kapital und führt zu unnötigem Lagerrisiko.
              </p>
              <p>
                <strong>Fenalt bietet die verlässliche Brücke zur Textilherstellung in Bangladesch:</strong> Unser eigenes Team in Dhaka übersetzt Ihre Tech-Packs in präzise Arbeitsanweisungen, steuert die Produktion in spezialisierten Micro-Factories und führt physische Qualitätsprüfungen durch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produktionsmöglichkeiten */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Flexibilität
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Produktionsstufen &amp; Mengen
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-[#E5DDD3] p-8 lg:p-10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 border border-[#C8A882] flex items-center justify-center text-[#C8A882]">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="px-3 py-1 bg-[#F2EFE9] text-[#2D5016] text-xs font-semibold uppercase tracking-wider">
                        {tier.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-2">
                      {tier.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A882] mb-4">
                      {tier.subtitle}
                    </p>
                    <p className="text-sm text-[#6B6560] leading-relaxed">
                      {tier.body}
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
              Sicherheit &amp; Qualität
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8">
              Vor-Ort-Qualitätskontrolle in Dhaka
            </h2>
            <p className="text-lg text-[#E5DDD3] leading-relaxed font-light mb-8">
              Wir verlassen uns nicht auf externe Zwischenhändler. Unser Team besucht die Produktionsflächen persönlich und prüft Stoffe, Nähte und Schnitttoleranzen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Schnitttoleranz ±1,5 cm", desc: "Strikte Einhaltung der Maße bei Zuschnitt und Konfektion." },
              { title: "Nadel- & Metalldetektion", desc: "Kalibrierte Prüfung aller Fertigwaren vor dem Verpacken." },
              { title: "AQL 2.5 Kartonprüfung", desc: "Endkontrolle nach internationalen ANSI/ASQ Z1.4 Standards." },
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
            Weitere Spezialisierungen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/de/streetwear-hersteller"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Streetwear Hersteller <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Heavyweight Hoodies &amp; Oversized Tees ab 320gsm.</p>
            </Link>
            <Link
              href="/de/low-moq-bekleidungshersteller"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Low-MOQ Produktion <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Kleine Stückzahlen ab 50 Einheiten für Kapselkollektionen.</p>
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
              Häufige Fragen
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
            Bereit für Ihre nächste Kollektion?
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Senden Sie uns Ihre Tech-Packs oder Skizzen. Sie erhalten innerhalb von 24–48 Stunden ein transparentes Angebot.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Projekt Starten <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
