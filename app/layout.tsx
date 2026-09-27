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
  title: "Claim ₹150 OFF | Morrow Cafe — Sector 104, Noida",
  description:
    "Exclusive in-Cafe offer for Morrow Cafe visitors. Claim ₹150 OFF your next visit on handcrafted brews, artisanal sourdough, and seasonal kitchen plates.",
  keywords: [
    "Morrow Cafe",
    "Morrow Cafe Noida",
    "Sector 104 Noida Cafe",
    "Specialty Coffee Noida",
    "Morrow Cafe discount",
    "Cafe voucher Noida",
  ],
  authors: [{ name: "Morrow Cafe" }],
  openGraph: {
    title: "Claim ₹150 OFF | Morrow Cafe — Sector 104, Noida",
    description:
      "Exclusive in-Cafe offer for Morrow Cafe visitors. Claim ₹150 OFF your next visit in seconds.",
    url: "https://morrow-cafe.vercel.app",
    siteName: "Morrow Cafe",
    images: [
      {
        url: "/images/morrow-hero.webp",
        width: 1200,
        height: 630,
        alt: "Morrow Cafe Ambiance & Coffee",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claim ₹150 OFF | Morrow Cafe — Sector 104, Noida",
    description:
      "Exclusive in-Cafe offer for Morrow Cafe visitors. Claim ₹150 OFF your next visit.",
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
      <body className="min-h-screen bg-warm-100 text-warm-900 font-sans selection:bg-warm-400/20 selection:text-warm-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}
