import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Fenorise",
  description:
    "Fenorise Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        body: "When you submit a project intake form, sign up for our newsletter, or contact us directly, we collect information you provide - including your name, email address, brand name, project descriptions, and any files you upload (such as tech packs or design references).",
      },
      {
        subtitle: "Automatically Collected Information",
        body: "When you visit our website, we may collect certain technical information automatically, including your IP address, browser type, device type, referring URLs, and pages visited. This information is used solely to improve the functionality and performance of our website.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "Project Fulfilment",
        body: "Information submitted via our intake form is used exclusively to assess your project requirements, prepare a quote, and facilitate manufacturing operations. Your design files and tech packs are shared only with the specific factory partner assigned to your project, and only under a confidentiality agreement.",
      },
      {
        subtitle: "Communications",
        body: "If you join our newsletter, we will send you periodic updates on sustainable manufacturing, our network, and platform news. You may unsubscribe at any time via the link included in every email.",
      },
      {
        subtitle: "Service Improvement",
        body: "We use aggregated, anonymised usage data to improve our website experience and better understand how brands interact with our platform.",
      },
    ],
  },
  {
    title: "3. Intellectual Property & NDA",
    content: [
      {
        subtitle: "Strict Confidentiality",
        body: "All design files, tech packs, brand assets, and project details submitted to Fenorise are treated as strictly confidential. Upon project initiation, a mutual Non-Disclosure Agreement (NDA) is executed between Fenorise and the client. Factory partners involved in production sign separate confidentiality agreements.",
      },
      {
        subtitle: "No Third-Party Sharing",
        body: "We will never sell, rent, or otherwise share your proprietary design information with any third party beyond the manufacturing partners directly required for your project. We do not use your designs for any marketing, portfolio, or promotional purpose without your explicit written consent.",
      },
    ],
  },
  {
    title: "4. Data Storage & Security",
    content: [
      {
        subtitle: "How We Store Your Data",
        body: "Project files and personal information are stored on encrypted, access-controlled systems. Access to your project data is restricted to Fenorise team members and factory partners with a direct role in your order.",
      },
      {
        subtitle: "Retention",
        body: "We retain your project data for a period of 24 months following project completion, after which it is securely deleted unless you request otherwise or ongoing business requirements necessitate retention.",
      },
    ],
  },
  {
    title: "5. Cookies",
    content: [
      {
        subtitle: "Use of Cookies",
        body: "Our website may use essential cookies to ensure basic functionality such as navigation and form submission. We do not use tracking cookies, advertising cookies, or third-party analytics cookies without your explicit consent.",
      },
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      {
        subtitle: "Access & Deletion",
        body: "You have the right to request access to the personal data we hold about you, request corrections, or request deletion. To exercise these rights, please contact us at privacy@fenorise.com. We will respond to all requests within 30 days.",
      },
      {
        subtitle: "Marketing Opt-Out",
        body: "You may opt out of marketing communications at any time by clicking the unsubscribe link in any email we send, or by contacting us directly.",
      },
    ],
  },
  {
    title: "7. Changes to This Policy",
    content: [
      {
        subtitle: "Policy Updates",
        body: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify active clients of any material changes via email. Continued use of our services after a policy update constitutes acceptance of the revised terms.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-[#FAF9F6] border-b border-[#E5DDD3]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-6">
            Legal
          </p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-[#1A1A1A] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-6 text-[#6B6560] text-sm">
            Last updated: July 2024 &nbsp;·&nbsp; Effective immediately
          </p>
          <p className="mt-4 text-[#6B6560] leading-relaxed max-w-2xl">
            At Fenorise, your privacy and the security of your intellectual
            property are not afterthoughts - they are foundational to how we
            operate. This policy explains how we collect, use, and protect your
            information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
          <div className="mt-16 p-8 bg-[#F2EFE9] border border-[#E5DDD3]">
            <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mb-3">
              Questions about this Policy?
            </h3>
            <p className="text-[#6B6560] mb-5">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact our team directly.
            </p>
            <a
              href="mailto:privacy@fenorise.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#2D5016] transition-colors duration-300"
            >
              privacy@fenorise.com
            </a>
          </div>

          {/* Nav back */}
          <div className="mt-10 flex gap-6 text-sm">
            <Link
              href="/"
              className="text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/terms"
              className="text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            >
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
