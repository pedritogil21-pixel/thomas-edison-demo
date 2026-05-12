import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ACADEMIA, TAGLINE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4c430",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${ACADEMIA} · Preparación UNAM Moquegua`,
  description: `${ACADEMIA} — preparación preuniversitaria en Moquegua para Biomédicas, Ingenierías y Sociales (UNAM, UNSA, UNJBG). ${TAGLINE}. C. Moquegua 360.`,
  applicationName: ACADEMIA,
  authors: [{ name: ACADEMIA }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
