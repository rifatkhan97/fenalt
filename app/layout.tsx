import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Fenorise - Sustainable, Low-MOQ Manufacturing. Fully Managed.",
  description:
    "Fenorise connects independent fashion brands with highly capable, ethical micro-factories. Launch your collection using sustainable circular fabrics, with zero communication barriers and fully managed quality control.",
  keywords:
    "sustainable manufacturing, micro-factory, low MOQ, ethical fashion, circular fabrics, deadstock, B2B fashion supply chain",
  openGraph: {
    title: "Fenorise - Rewiring the Global Supply Chain",
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
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
