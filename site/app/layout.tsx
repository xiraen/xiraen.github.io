import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-space", display: "swap" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://xiraen.github.io"),
  title: "XIRAEN — Ruang untuk perspektif baru",
  description: "Platform sosial dan AI berbasis Telegram. Jelajahi Stream, asisten AI, XIRA Energy, serta visi jaringan kecerdasan XIRAEN.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "XIRAEN — Ruang untuk perspektif baru",
    description: "Manusia, ide, dan kecerdasan. Satu ekosistem yang terus berkembang.",
    url: "https://xiraen.github.io/",
    siteName: "XIRAEN",
    locale: "id_ID",
    type: "website",
  },
  twitter: { card: "summary", title: "XIRAEN — XIRA Expert Network", description: "Sosial, AI, dan perspektif baru." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={display.variable + " " + bodyFont.variable}>
      <body className="bg-bg font-body text-ink antialiased">
        <a className="skip-link" href="#konten">Lewati navigasi</a>
        {children}
      </body>
    </html>
  );
}
