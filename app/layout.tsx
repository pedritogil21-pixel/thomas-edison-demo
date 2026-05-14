import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ACADEMIA, TAGLINE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { allSchemas } from "@/lib/seo/schemas";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thomas-smoky.vercel.app";

export const viewport: Viewport = {
  themeColor: "#f4c430",
  width: "device-width",
  initialScale: 1,
};

const DESCRIPTION = `${ACADEMIA} en Moquegua. Preparación intensiva para Biomédicas, Ingenierías y Sociales en universidades del sur del Perú (UNAM, UNSA, UNJBG). ${TAGLINE}. C. Moquegua 360.`;
const TITLE_DEFAULT = `${ACADEMIA} · Preparación UNAM Moquegua`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s · Thomas Edison Moquegua",
  },
  description: DESCRIPTION,
  applicationName: ACADEMIA,
  authors: [{ name: ACADEMIA }],
  keywords: [
    "academia preuniversitaria Moquegua",
    "UNAM Moquegua",
    "Universidad Nacional de Moquegua",
    "CEPRE UNAM",
    "preparación UNAM",
    "academia Moquegua",
    "ingeniería UNAM",
    "Biomédicas Moquegua",
    "Thomas Edison Moquegua",
    "preuniversitaria sur del Perú",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: ACADEMIA,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido principal
        </a>
        <div id="contenido">{children}</div>
        <FloatingWhatsApp />
        <JsonLd data={allSchemas()} />
      </body>
    </html>
  );
}
