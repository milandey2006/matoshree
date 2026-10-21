import type { Metadata, Viewport } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--nf-serif",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--nf-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--nf-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matoshreepolymers.com"),
  title: "Matoshree Polymers Pvt. Ltd. — PET plastic rolls, plastic chips & trading",
  description:
    "Matoshree Polymers Pvt. Ltd. manufactures PET plastic rolls from scrap bottles, converts plastic waste into plastic chips, and trades in plastic bottle rolls. Bhupatinagar, Purba Medinipur, West Bengal.",
  keywords: [
    "Matoshree Polymers",
    "PET plastic rolls",
    "plastic bottle rolls",
    "plastic chips",
    "scrap PET bottles",
    "plastic recycling West Bengal",
    "Purba Medinipur",
    "Bhupatinagar",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.matoshreepolymers.com",
    siteName: "Matoshree Polymers Pvt. Ltd.",
    title: "Matoshree Polymers Pvt. Ltd.",
    description: "PET plastic rolls from scrap bottles, plastic chips, and trading of plastic bottle rolls.",
    images: [{ url: "/logo.png", alt: "Matoshree Polymers logo" }],
  },
  icons: { icon: "/icon-mark.png", apple: "/icon-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ec",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
