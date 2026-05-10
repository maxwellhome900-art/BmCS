import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BMCC NYC Cybersecurity Class | Certification Prep Hub",
  description:
    "Central hub for BMCC NYC cybersecurity students: ISC2 CC prep, Linux+ prep apps, and Security+ coming soon. Dark-mode, exam-focused certification portal.",
  keywords: [
    "BMCC",
    "cybersecurity",
    "ISC2",
    "CC",
    "Linux+",
    "Security+",
    "certification prep",
    "NYC",
  ],
  openGraph: {
    title: "BMCC NYC Cybersecurity Class — Certification Prep Hub",
    description:
      "Launch ISC2 CC and Linux+ prep apps from one premium student portal. Security+ uploading soon.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#020617] text-slate-200">{children}</body>
    </html>
  );
}
