import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://morrow-cafe.vercel.app"),
  title: "Claim ₹150 OFF | Morrow Café — Sector 104, Noida",
  description:
    "Exclusive in-café offer for Morrow Café visitors. Claim ₹150 OFF your next visit on handcrafted brews, artisanal sourdough, and seasonal kitchen plates.",
  keywords: [
    "Morrow Cafe",
    "Morrow Cafe Noida",
    "Sector 104 Noida Cafe",
    "Specialty Coffee Noida",
    "Morrow Cafe discount",
    "Cafe voucher Noida",
  ],
  authors: [{ name: "Morrow Café" }],
  openGraph: {
    title: "Claim ₹150 OFF | Morrow Café — Sector 104, Noida",
    description:
      "Exclusive in-café offer for Morrow Café visitors. Claim ₹150 OFF your next visit in seconds.",
    url: "https://morrow-cafe.vercel.app",
    siteName: "Morrow Café",
    images: [
      {
        url: "/images/morrow-hero.webp",
        width: 1200,
        height: 630,
        alt: "Morrow Café Ambiance & Coffee",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claim ₹150 OFF | Morrow Café — Sector 104, Noida",
    description:
      "Exclusive in-café offer for Morrow Café visitors. Claim ₹150 OFF your next visit.",
    images: ["/images/morrow-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${newsreader.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1F1A17] font-sans selection:bg-[#E67E43]/20 selection:text-[#933D10] flex flex-col">
        {children}
      </body>
    </html>
  );
}
