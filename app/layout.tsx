import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fenalt - Sustainable, Low-MOQ Manufacturing. Fully Managed.",
  description:
    "Fenalt connects independent fashion brands with highly capable, ethical micro-factories. Launch your collection using sustainable circular fabrics, with zero communication barriers and fully managed quality control.",
  keywords:
    "sustainable manufacturing, micro-factory, low MOQ, ethical fashion, circular fabrics, deadstock, B2B fashion supply chain",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Fenalt - Rewiring the Global Supply Chain",
    description:
      "Sustainable, Low-MOQ Manufacturing. Fully Managed. Ethical micro-factories, circular fabrics, zero friction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fenalt",
    "description": "Sustainable B2B apparel manufacturing platform.",
    "url": "https://fenalt.com",
    "logo": "https://fenalt.com/icon.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dhaka Housing Main Road, Holding - 4, Level - 9",
      "addressLocality": "Dhaka",
      "postalCode": "1207",
      "addressCountry": "BD"
    },
    "email": "hello@fenalt.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801781345299",
      "contactType": "customer service",
      "availableLanguage": ["en", "bn"]
    }
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BJ61PT6MLV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJ61PT6MLV');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xyozk0bshw");
          `}
        </Script>
      </head>
      <body className="bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
