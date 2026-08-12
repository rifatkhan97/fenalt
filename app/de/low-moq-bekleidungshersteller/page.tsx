import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Scissors, Package, Layers, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Low-MOQ Bekleidungshersteller ab 50 Stück | Fenalt",
  description:
    "Textilproduktion in kleinen Mengen ab 50 Stück für Modemarken im DACH-Raum. Fenalt bietet Kapsel-Produktion mit Vor-Ort Qualitätskontrolle und Circular-Stoffen.",
  alternates: {
    canonical: "https://fenalt.com/de/low-moq-bekleidungshersteller",
    languages: {
      "de": "https://fenalt.com/de/low-moq-bekleidungshersteller",
      "en": "https://fenalt.com/low-moq-apparel-manufacturing",
      "x-default": "https://fenalt.com/low-moq-apparel-manufacturing",
    },
  },
  openGraph: {
    title: "Low-MOQ Bekleidungshersteller ab 50 Stück | Fenalt",
    description:
      "Textilproduktion in kleinen Mengen ab 50 Stück für Modemarken im DACH-Raum. Fenalt bietet Kapsel-Produktion mit Vor-Ort Qualitätskontrolle und Circular-Stoffen.",
    url: "https://fenalt.com/de/low-moq-bekleidungshersteller",
  },
};

export default function GermanLowMOQBekleidungsherstellerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Low-MOQ Bekleidungsproduktion & Kleinserien",
    "provider": {
      "@type": "Organization",
      "name": "Fenalt",
      "url": "https://fenalt.com",
    },
    "serviceType": "Low MOQ Bekleidungshersteller, Kleine Mengen Kleidung produzieren, Kleinserien Bekleidung",
    "areaServed": ["Germany", "Austria", "Switzerland"],
    "description":
      "Kleine Stückzahlen Bekleidungsproduktion ab 50 Einheiten für aufstrebende Modemarken im DACH-Raum. Inklusive Vor-Ort Qualitätskontrolle, Deadstock-Stoffen und DDP-Versand.",
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
        "name": "Low-MOQ Bekleidungshersteller",
        "item": "https://fenalt.com/de/low-moq-bekleidungshersteller",
      },
    ],
  };

  const faqs = [
    {
      q: "Kann eine Kleinserie von 50 Stück auf verschiedene Größen aufgeteilt werden?",
      a: "Ja. Bei einer Produktion von 50 oder 100 Stück können die Einheiten gemäß Ihrem Größenschlüssel auf Standardgrößen (z. B. S, M, L, XL) aufgeteilt werden.",
    },
    {
      q: "Warum ist die Produktion kleiner Mengen bei Fenalt wirtschaftlich?",
      a: "Durch die direkte Anbindung geprüfter Micro-Factories in Dhaka und den Zugriff auf hochwertige Deadstock-Stoffe ('Jhoot') entfallen die hohen Mindestmengen klassischer Großbetriebe.",
    },
    {
      q: "Wie läuft der Freigabeprozess vor der Serienproduktion ab?",
      a: "Vor dem Serienstart erstellen wir physische Muster zur Passform- und Verarbeitungskontrolle (Dauer ca. 10–14 Tage). Erst nach Ihrer schriftlichen Freigabe beginnt die Produktion.",
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
      title: "Test- & Prototypen-Drop",
      tag: "Ab 50 Stück",
      subtitle: "Ideal für neue Kollektionsideen und junge Designer.",
      body: "Physische Prototypen entwickeln, Schnittgenauigkeit testen und erste limitierte Kapsel-Releases produzieren, ohne Kapital im Lager zu binden.",
      features: ["Schnitt- & Musterentwicklung", "Stoff-Matching vor Ort", "Passformfreigabe", "50–99 Stück Kapsel-Batch"],
    },
    {
      icon: Package,
      title: "Standard Kapselkollektion",
      tag: "100–300 Stück",
      subtitle: "Die optimale Serie für wachsende DTC-Labels.",
      body: "Produktion saisonaler Drops mit hochwertigen Deadstock- oder Baumwoll-Strickstoffen, lückenloser Vor-Ort QC und Markenverpackung.",
      features: ["100–300 Stück pro Modell", "Zugang zu Deadstock-Textilien", "Vor-Ort Produktionsaudits", "Individuelle Labels & Trims"],
    },
    {
      icon: Layers,
      title: "Skalierende Serien",
      tag: "500+ Stück",
      subtitle: "Für etablierte Marken mit steigender Nachfrage.",
      body: "Übergang von Kleinserien zu volumstarken Produktionsläufen mit dedizierten Ansprechpartnern und flexiblen Handelskonditionen (DDP/FOB).",
      features: ["500+ Stück Bestellungen", "Dedizierter Audit-Leiter", "DDP/FOB Handelskonditionen", "Priorisiertes Factory-Matching"],
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
            Kleine Mengen &amp; Kapsel-Serien
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-[#1A1A1A] leading-[1.05] max-w-5xl mb-8">
            Low-MOQ Bekleidungsproduktion{" "}
            <span className="italic font-medium text-[#2D5016]">ab 50 Stück.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl mb-12">
            Verringern Sie Ihr Lagerrisiko. Produzieren Sie hochwertige Bekleidungskollektionen bereits ab 50 Einheiten—mit klaren Abläufen, nachhaltigen Stoffen und physischer Vor-Ort Qualitätskontrolle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              Angebot Anfragen <ArrowRight size={16} />
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
              Vorteile
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-8">
              Warum kleine Stückzahlen den Unterschied machen
            </h2>
            <div className="space-y-6 text-[#6B6560] text-base lg:text-lg leading-relaxed">
              <p>
                Hohe Mindestbestellmengen zwingen junge Modemarken oft dazu, große Mengen der gleichen Ausführung zu bestellen. Das bindet Eigenkapital und erhöht das Risiko von unverkaufter Ware.
              </p>
              <p>
                <strong>Fenalt macht Kleinserien im DACH-Raum kalkulierbar:</strong> Durch die Zusammenarbeit mit spezialisierten Micro-Factories in Bangladesch steuern wir Produktionen ab 50 Stück mit vollem Qualitätsanspruch und transparenter Kalkulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produktionsstufen */}
      <section className="py-24 lg:py-32 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">
              Mengenstufen
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-[#1A1A1A]">
              Kleine Stückzahlen flexibel produzieren
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
                    <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                      {tier.body}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-6 border-t border-[#E5DDD3]">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-[#1A1A1A]">
                        <CheckCircle2 size={14} className="text-[#2D5016] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Deadstock Accent */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
                Materiallösung
              </p>
              <h2 className="font-display text-4xl lg:text-6xl font-light text-[#FAF9F6] mb-8 leading-tight">
                Niedrige Minimums durch Deadstock-Stoffe
              </h2>
              <div className="space-y-6 text-[#E5DDD3] text-base leading-relaxed font-light">
                <p>
                  Bei herkömmlichen Textilherstellern verlangen Webereien oft hohe Mindestmengen für neue Einfärbungen.
                </p>
                <p>
                  Fenalt nutzt hochwertigen <strong className="text-[#C8A882] font-medium">Jhoot Deadstock</strong>—erstklassige Baumwoll- und Strickstoffe aus Überproduktionen großer Marken. Dies ermöglicht kleine Kollektionsserien mit exzellenten Stoffqualitäten ohne unrentable Stoff-Mindestmengen.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#2A2A2A] border border-[#3A3A3A]">
              <div className="flex items-center gap-4 mb-4">
                <Leaf size={24} className="text-[#C8A882]" />
                <h3 className="font-display text-xl font-medium text-[#FAF9F6]">
                  Ressourcenschonende Kollektionen
                </h3>
              </div>
              <p className="text-sm text-[#E5DDD3] leading-relaxed">
                Nutzung vorhandener Textilreserven zur Reduzierung von Rohstoffverschwendung bei voll erhaltener Qualität.
              </p>
            </div>
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
              href="/de/streetwear-hersteller"
              className="p-6 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors group"
            >
              <h3 className="font-display text-xl font-medium text-[#1A1A1A] group-hover:text-[#2D5016] flex items-center justify-between">
                Streetwear Hersteller <ArrowRight size={16} />
              </h3>
              <p className="text-sm text-[#6B6560] mt-2">Heavyweight Hoodies &amp; Oversized Tees ab 320gsm.</p>
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
              Low-MOQ FAQ
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
            Starten Sie Ihre Kapselkollektion
          </h2>
          <p className="text-[#6B6560] leading-relaxed text-base lg:text-lg mb-10 max-w-xl mx-auto">
            Senden Sie uns Ihre Vorstellungen. Sie erhalten innerhalb von 24–48 Stunden ein Angebot für Ihre Kleinserie.
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
          >
            Angebot Anfragen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
