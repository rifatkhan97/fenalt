import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Communicate With Overseas Apparel Suppliers",
  description:
    "Master cross-border communication with clothing manufacturers - tech pack clarity, visual feedback PDFs, time zone management, and clear payment terms.",
  alternates: {
    canonical: "https://fenalt.com/learn/how-to-communicate-with-overseas-suppliers",
  },
  openGraph: {
    title: "How to Communicate With Overseas Apparel Suppliers",
    description:
      "Master cross-border communication with clothing manufacturers - tech pack clarity, visual feedback PDFs, time zone management, and clear payment terms.",
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
    {
      title: "1. Use Visual Annotated Diagrams over Long Prose",
      desc: "Annotate sample feedback photographs with clear red arrows, circles, and exact numerical measurements (e.g. 'Increase chest width +1.5cm') rather than writing long descriptive paragraphs.",
    },
    {
      title: "2. Consolidate Technical Questions in Numbered Lists",
      desc: "Avoid sending multiple fragmented instant messages. Send single daily recap emails containing clear numbered questions so factory merchandisers can address every point systematically.",
    },
    {
      title: "3. Confirm Written Understanding of Critical Path Milestones",
      desc: "Always request written email confirmation of key deadline dates - including lab-dip submission, sample dispatch, bulk fabric cutting start, and final FRI inspection.",
    },
    {
      title: "4. Designate a Single Brand Point-of-Contact",
      desc: "Prevent contradictory technical instructions by designating one internal decision-maker to communicate with factory merchandisers and pattern makers.",
    },
    {
      title: "5. Leverage Asynchronous Time-Zone Workflows (GMT+6)",
      desc: "Send detailed daily recap emails at the end of your Western business day so factory merchandisers in Dhaka can process and act on them during their morning shift.",
    },
    {
      title: "6. Utilize Local Technical Liaisons to Bridge Cultural Gaps",
      desc: "Partner with an on-the-ground liaison in Dhaka (like Fenalt) to translate complex brand design requirements into precise factory technical specifications.",
    },
  ];

  const communicationChannelMatrix = [
    { channelType: "Formal Email", primaryUse: "Tech packs, PO contracts, itemized quotes, FRI reports", bestPractice: "Use PDF attachments & numbered questions." },
    { channelType: "Instant Messaging (WhatsApp)", primaryUse: "Daily photo updates, inline sewing clips, quick Q&A", bestPractice: "Keep messages focused; summarize outcomes in email." },
    { channelType: "Video Call (Google Meet)", primaryUse: "Kickoff PP meetings, sample revision walkthroughs", bestPractice: "Send written meeting minutes post-call." },
  ];

  const faqs = [
    {
      q: "What is the best communication channel for managing overseas apparel production?",
      a: "Formal email for contract approvals, tech pack PDFs, and costings; WhatsApp / WeChat for daily factory floor photo updates, quick fabric checks, and sample video reviews.",
    },
    {
      q: "How do I manage time zone differences with Bangladesh (GMT+6)?",
      a: "Send detailed recap emails at the end of your US/European business day. The factory team in Dhaka receives them at the start of their morning shift and works on them while you sleep.",
    },
    {
      q: "Why is visual feedback far more effective than text descriptions?",
      a: "English may be a second language for overseas factory line operators. Annotating high-resolution sample photos with clear arrows, red circles, and numerical deltas removes ambiguity.",
    },
    {
      q: "What should I do if an overseas manufacturer stops responding?",
      a: "Sudden communication silence usually indicates a production problem (such as fabric shade failure or sample delay). Having an on-the-ground liaison in Dhaka allows immediate in-person factory visits to resolve issues.",
    },
    {
      q: "How do I give sample revision feedback without causing factory frustration?",
      a: "Consolidate all revision notes into a single structured Sample Review PDF detailing POM measurements, photos, and exact required changes. Express appreciation for good elements alongside corrections.",
    },
    {
      q: "How does Fenalt streamline communication between brands and Dhaka factories?",
      a: "Fenalt acts as your bilingual technical team in Dhaka - managing daily factory floor updates, translating brand design notes into technical spec sheets, and providing structured photo inspection reports.",
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6560]">Bangladesh &amp; International</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] mb-6">
            How to Communicate With{" "}
            <span className="italic font-medium text-[#2D5016]">Overseas Apparel Suppliers.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#6B6560] leading-relaxed max-w-2xl">
            Master cross-border communication with clothing manufacturers - tech pack clarity, visual feedback PDFs, time zone management, and clear payment terms.
          </p>
          <p className="mt-4 text-xs text-[#9B948E] uppercase tracking-widest">General industry knowledge • Reviewed by Fenalt editorial team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F2EFE9] border border-[#E5DDD3] p-8 lg:p-12 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare size={20} className="text-[#C8A882]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882]">Cross-Border Clarity</span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-[#1A1A1A] leading-relaxed">
              Clear, visual communication is the <strong className="font-medium">single most effective tool for preventing overseas production errors</strong>.
            </p>
          </div>
          <p className="text-base text-[#6B6560] leading-relaxed">
            Communicating effectively with overseas apparel suppliers requires structured, visual documentation. By using annotated sample feedback PDFs, consolidating inquiries into single numbered emails, utilizing time-zone asynchronous workflows, and leveraging an on-the-ground liaison in Dhaka, fashion brands build seamless supplier relationships.
          </p>
        </div>
      </section>

      {/* 6 Rules */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Communication Rules</p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#FAF9F6] mb-12">6 Rules of Overseas Supplier Communication</h2>
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

      {/* Channel Protocol Table */}
      <section className="py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Communication Channels</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#1A1A1A] mb-8">Cross-Border Apparel Communication Protocol Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-[#FAF9F6]">
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Communication Channel</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/2">Primary Operational Use</th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest w-1/4">Best Practice Rule</th>
                </tr>
              </thead>
              <tbody>
                {communicationChannelMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F2EFE9]" : "bg-[#FAF9F6]"}>
                    <td className="p-4 text-sm font-semibold text-[#1A1A1A] border-t border-[#E5DDD3] align-top">{row.channelType}</td>
                    <td className="p-4 text-sm text-[#6B6560] border-t border-[#E5DDD3] leading-relaxed align-top">{row.primaryUse}</td>
                    <td className="p-4 text-sm text-[#2D5016] border-t border-[#E5DDD3] align-top font-medium">{row.bestPractice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-4">Questions</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#FAF9F6] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#262626] border border-[#333333]">
                <h3 className="font-display text-lg font-medium text-[#FAF9F6] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#E5DDD3] leading-relaxed">{faq.a}</p>
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
              { href: "/learn/how-apparel-manufacturing-in-bangladesh-works", label: "How Apparel Manufacturing in Bangladesh Works" },
              { href: "/learn/what-to-know-before-sourcing-from-bangladesh", label: "What to Know Before Sourcing From Bangladesh" },
              { href: "/learn/how-international-clothing-production-is-coordinated", label: "How International Production Is Coordinated" },
              { href: "/learn/questions-to-ask-an-apparel-manufacturer", label: "Questions to Ask an Apparel Manufacturer" },
              { href: "/learn/build-long-term-relationship-clothing-manufacturer", label: "Build a Long-Term Manufacturer Relationship" },
              { href: "/apparel-production-management-services", label: "Fenalt Technical Communication Services in Dhaka" },
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
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1A1A1A] mb-4">Bridge the communication gap</h2>
          <p className="text-[#6B6560] leading-relaxed text-base mb-10 max-w-xl mx-auto">
            Fenalt acts as your local technical office in Dhaka - translating tech packs, managing sample revisions, and providing daily updates.
          </p>
          <Link href="/intake" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300">
            Submit Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
