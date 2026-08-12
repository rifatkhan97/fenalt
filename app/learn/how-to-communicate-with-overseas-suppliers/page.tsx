import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Communicate With Overseas Apparel Suppliers",
  description:
    "Master cross-border communication with clothing manufacturers — tech pack clarity, visual feedback PDFs, time zone management, and clear payment terms.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-communicate-with-overseas-suppliers",
  },
  openGraph: {
    title: "How to Communicate With Overseas Apparel Suppliers",
    description:
      "Master cross-border communication with clothing manufacturers — tech pack clarity, visual feedback PDFs, time zone management, and clear payment terms.",
    url: "https://fenalt.com/learn/how-to-communicate-with-overseas-suppliers",
  },
};

export default function HowToCommunicateWithOverseasSuppliersPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Communicate With Overseas Apparel Suppliers",
    description:
      "A practical communication manual for fashion brand founders managing overseas clothing factories in South Asia.",
    author: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    publisher: { "@type": "Organization", name: "Fenalt", url: "https://fenalt.com" },
    url: "https://fenalt.com/learn/how-to-communicate-with-overseas-suppliers",
    mainEntityOfPage: "https://fenalt.com/learn/how-to-communicate-with-overseas-suppliers",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fenalt.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://fenalt.com/resources" },
      { "@type": "ListItem", position: 3, name: "Communicate With Overseas Suppliers", item: "https://fenalt.com/learn/how-to-communicate-with-overseas-suppliers" },
    ],
  };

  const rules = [
    { title: "1. Use Visual Annotated Graphics over Long Prose", desc: "Annotate photographs and tech pack sketches with clear arrows and numerical deltas (e.g. '+1.5cm') rather than long paragraph emails." },
    { title: "2. Consolidate Questions in Numbered Bullet Lists", desc: "Avoid sending scattered instant messages. Send single daily summary emails with clear numbered questions." },
    { title: "3. Confirm Mutual Understanding of Milestones", desc: "Always request written confirmation of dates: lab-dip submission, sample dispatch, bulk cutting start, and FRI inspection." },
    { title: "4. Designate a Single Brand Point-of-Contact", desc: "Prevent contradictory instructions by designating one internal decision-maker to communicate with factory merchandisers." },
  ];

  const faqs = [
    {
      q: "What is the best communication channel for overseas apparel production?",
      a: "Formal email for contract approvals, tech pack PDFs, and costings; WhatsApp / WeChat for daily photo updates and quick sample clarifications.",
    },
    {
      q: "How do I handle time zone differences with Bangladesh (GMT+6)?",
      a: "Send detailed daily recap emails at the end of your US/European business day so factory merchandisers can address them at the start of their morning shift.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbsJsonLd, faqJsonLd]) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C8A882] mb-6">
            <BookOpen size={16} />
            <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.25em] hover:text-[#2D5016] transition-colors">
              Fenalt Learn
            </Link>
            <span className="text-xs text-[#C8A882]">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Sourcing &amp; Strategy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Communicate With{" "}
            <span className="italic font-medium text-[#2D5016]">Overseas Suppliers.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Clear cross-border communication eliminates production delays and prevents factory misinterpretations. Master the rules of supplier messaging.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge — reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Communication Standards</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Effective overseas communication relies on <strong className="font-medium">annotated visual feedback, numbered daily summaries, and single-point-of-contact sign-offs</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Best Practices</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">4 Communication Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((r, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] text-[#FAF9F6] flex items-center justify-center mb-4 text-xs font-bold">✓</div>
                <h3 className="font-display text-xl font-medium text-[#FAF9F6] mb-2">{r.title}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#F2EFE9] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">Continue Learning</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/learn/how-to-give-sample-feedback", label: "How to Give Useful Feedback on a Clothing Sample" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/build-long-term-relationship-clothing-manufacturer", label: "Build a Long-Term Relationship With a Manufacturer" },
              { href: "/overseas-production-management-apparel", label: "Fenalt Overseas Production Management" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center justify-between p-5 bg-[#FAF9F6] border border-[#E5DDD3] hover:border-[#2D5016] transition-colors">
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2D5016] pr-4">{link.label}</span>
                <ArrowRight size={14} className="shrink-0 text-[#6B6560] group-hover:text-[#2D5016] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Dedicated English merchandising team</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt assigns native English-speaking account managers in Dhaka to ensure seamless communication on every order.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
