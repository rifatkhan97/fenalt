import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Fenalt",
  description:
    "Fenalt Terms of Service. Understand the agreement governing the use of our manufacturing platform and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement",
        body: "By accessing the Fenalt website, submitting a project intake form, or engaging Fenalt for any manufacturing or sourcing service, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.",
      },
      {
        subtitle: "Eligibility",
        body: "Our services are intended for businesses and professional brand operators. By engaging Fenalt, you represent that you are operating on behalf of a business entity and have the authority to enter into legally binding agreements.",
      },
    ],
  },
  {
    title: "2. Services Provided",
    content: [
      {
        subtitle: "Scope of Services",
        body: "Fenalt provides supply chain facilitation services, including but not limited to: factory matching and liaison, sample development coordination, production management, in-line and final quality control audits, and international freight coordination. The specific scope of services for your project is defined in your individual project agreement and quote.",
      },
      {
        subtitle: "Service Modifications",
        body: "Fenalt reserves the right to modify, suspend, or discontinue any aspect of its services at any time. We will provide reasonable notice of any material changes that affect active projects.",
      },
    ],
  },
  {
    title: "3. Project Agreements & Quotes",
    content: [
      {
        subtitle: "Quote Validity",
        body: "All quotes issued by Fenalt are valid for 14 calendar days from the date of issue unless otherwise stated. Quotes are subject to revision if project specifications change materially after the quote is issued.",
      },
      {
        subtitle: "Project Confirmation",
        body: "A project becomes active and binding upon written confirmation from the client and receipt of any agreed deposit payment. Submission of a project intake form does not constitute a binding agreement - it initiates the quotation process only.",
      },
      {
        subtitle: "Changes to Confirmed Orders",
        body: "Design or specification changes to a confirmed order may incur additional costs and affect lead times. Any changes must be submitted in writing and are subject to Fenalt approval and revised pricing. Fenalt cannot be held responsible for delays or defects resulting from client-initiated mid-production changes.",
      },
    ],
  },
  {
    title: "4. Payment Terms",
    content: [
      {
        subtitle: "Deposit",
        body: "Projects typically require a deposit of 30–50% of the total project value upon order confirmation, with the balance due prior to shipment. Specific payment schedules are outlined in individual project agreements.",
      },
      {
        subtitle: "Late Payments",
        body: "Payments not received by the due date may result in production delays. Fenalt reserves the right to suspend or cancel production for orders with overdue balances, without liability for resulting delays.",
      },
      {
        subtitle: "Currency",
        body: "All quotes and invoices are issued in USD unless otherwise agreed in writing. Any currency conversion fees are the responsibility of the client.",
      },
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      {
        subtitle: "Client Ownership",
        body: "All designs, tech packs, and brand assets submitted by the client remain the exclusive intellectual property of the client. Fenalt claims no ownership over client-submitted creative works.",
      },
      {
        subtitle: "Confidentiality",
        body: "Fenalt will not reproduce, distribute, display, or share client designs beyond what is strictly required to fulfil the agreed project scope. All factory partners are bound by confidentiality agreements before accessing client files.",
      },
      {
        subtitle: "Fenalt Materials",
        body: "All content on the Fenalt website - including text, graphics, logos, and processes - is the intellectual property of Fenalt and may not be copied, reproduced, or distributed without prior written consent.",
      },
    ],
  },
  {
    title: "6. Quality Control & Defects",
    content: [
      {
        subtitle: "QC Standard",
        body: "Fenalt performs in-line and final quality control inspections in accordance with ANSI/ASQ Z1.4 AQL standards. Our guarantee covers defects that fall outside the agreed AQL tolerance threshold.",
      },
      {
        subtitle: "Defect Resolution",
        body: "If delivered units contain defects exceeding the agreed AQL tolerance, Fenalt will coordinate replacement production at no additional cost to the client. The client must notify Fenalt of any defects within 14 days of delivery with photographic evidence.",
      },
      {
        subtitle: "Limitations",
        body: "Fenalt is not liable for defects arising from client-provided materials, client-approved samples, or design specifications that were approved prior to production. Subjective aesthetic preferences that were not documented in the original tech pack are not covered by our defect policy.",
      },
    ],
  },
  {
    title: "7. Shipping & Delivery",
    content: [
      {
        subtitle: "Lead Times",
        body: "All lead times quoted by Fenalt are estimates based on current factory capacity and standard logistics timelines. Fenalt shall not be liable for delays caused by force majeure events, customs clearance complications, carrier delays, or circumstances outside our reasonable control.",
      },
      {
        subtitle: "Risk of Loss",
        body: "Risk of loss or damage transfers to the client at the point defined by the agreed incoterm (DDP or FOB) in the project agreement. Fenalt recommends that clients arrange cargo insurance for all shipments.",
      },
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      {
        subtitle: "Liability Cap",
        body: "To the maximum extent permitted by applicable law, Fenalt's total liability to any client for any claim arising from our services shall not exceed the total amount paid by that client for the specific project giving rise to the claim.",
      },
      {
        subtitle: "Consequential Damages",
        body: "Fenalt shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to lost profits, lost revenue, brand damage, or business interruption, even if Fenalt has been advised of the possibility of such damages.",
      },
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      {
        subtitle: "Jurisdiction",
        body: "These Terms of Service shall be governed by and construed in accordance with applicable commercial law. Any disputes arising from the use of our services shall first be subject to good-faith negotiation, and thereafter to binding arbitration if unresolved.",
      },
    ],
  },
  {
    title: "10. Changes to These Terms",
    content: [
      {
        subtitle: "Updates",
        body: "Fenalt reserves the right to update these Terms of Service at any time. Material changes will be communicated to active clients via email. Continued use of our services following notification of changes constitutes acceptance of the revised terms.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#1A1A1A] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Legal
          </p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-[#FAF9F6] leading-tight">
            Terms of Service
          </h1>
          <p className="mt-6 text-[#6B6560] text-sm">
            Last updated: July 2024 &nbsp;·&nbsp; Effective immediately
          </p>
          <p className="mt-4 text-[#E5DDD3] leading-relaxed max-w-2xl">
            These Terms of Service govern your use of the Fenalt platform and
            manufacturing services. Please read them carefully. By engaging our
            services, you agree to these terms in full.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-6 bg-[#F2EFE9] border-b border-[#E5DDD3] sticky top-16 lg:top-20 z-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              "Acceptance",
              "Services",
              "Quotes",
              "Payment",
              "IP",
              "Quality",
              "Shipping",
              "Liability",
            ].map((label, i) => (
              <span
                key={i}
                className="text-xs text-[#6B6560] hover:text-[#1A1A1A] cursor-pointer transition-colors"
              >
                §{i + 1} {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Intro note */}
          <div className="mb-14 p-6 bg-[#F2EFE9] border-l-4 border-[#C8A882]">
            <p className="text-sm text-[#6B6560] leading-relaxed">
              <strong className="text-[#1A1A1A]">Plain language note:</strong>{" "}
              We&apos;ve written these terms to be as clear and fair as
              possible. If you have any questions about anything in this
              document, please reach out before engaging our services and
              we&apos;ll explain in plain terms.
            </p>
          </div>

          <div className="space-y-14">
            {sections.map((section, i) => (
              <div key={i} className="border-t border-[#E5DDD3] pt-10">
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-[#1A1A1A] mb-8">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((item, j) => (
                    <div key={j}>
                      <h3 className="font-semibold text-[#1A1A1A] text-sm uppercase tracking-wide mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-[#6B6560] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 p-8 bg-[#1A1A1A] text-[#FAF9F6]">
            <h3 className="font-display text-2xl font-medium text-[#FAF9F6] mb-3">
              Questions about these Terms?
            </h3>
            <p className="text-[#E5DDD3] mb-5 text-sm leading-relaxed">
              If anything in these terms is unclear, reach out before starting
              a project. We&apos;re committed to full transparency.
            </p>
            <a
              href="mailto:legal@fenalt.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A882] text-[#1A1A1A] text-sm font-semibold tracking-wide hover:bg-[#FAF9F6] transition-colors duration-300"
            >
              legal@fenalt.com
            </a>
          </div>

          {/* Nav links */}
          <div className="mt-10 flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            >
              ← Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            >
              Back to Home →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
