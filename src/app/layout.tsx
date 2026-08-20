import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linen & Bloom — Boutique Home Cleaning · West LA",
  description:
    "A boutique home-cleaning service founded by UCLA students. Biweekly care for Brentwood, Westwood, and Santa Monica — with dedicated cleaners and thoughtful attention to detail.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
