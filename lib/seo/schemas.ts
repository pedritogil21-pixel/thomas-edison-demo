import {
  ACADEMIA,
  DIRECCION,
  EMAIL,
  WA_PHONE,
  ANIO_FUNDACION,
} from "@/lib/constants";
import { ciclos, type Ciclo } from "@/lib/content/ciclos";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thomas-smoky.vercel.app";

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": ORG_ID,
    name: ACADEMIA,
    alternateName: "Thomas Edison Moquegua",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.webp`,
    image: `${SITE_URL}/logo.webp`,
    description:
      "Academia preuniversitaria en Moquegua, Perú. Preparación intensiva para postulantes a Biomédicas, Ingenierías y Sociales en universidades del sur del Perú (UNAM Moquegua, UNSA Arequipa, UNJBG Tacna).",
    foundingDate: String(ANIO_FUNDACION),
    telephone: `+${WA_PHONE}`,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: DIRECCION.street,
      addressLocality: DIRECCION.locality,
      addressRegion: DIRECCION.region,
      addressCountry: DIRECCION.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: DIRECCION.latitude,
      longitude: DIRECCION.longitude,
    },
    hasMap: `https://www.google.com/maps/place/?q=place_id:${DIRECCION.placeId}`,
    areaServed: {
      "@type": "City",
      name: "Moquegua",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "12:30",
      },
    ],
    knowsLanguage: "es",
    slogan: "Te preparamos para el éxito",
  };
}

export function courseSchema(ciclo: Ciclo) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: ciclo.title,
    description: ciclo.description,
    provider: {
      "@type": "EducationalOrganization",
      "@id": ORG_ID,
      name: ACADEMIA,
      url: SITE_URL,
      sameAs: SITE_URL,
    },
    educationalLevel: "Preparación preuniversitaria",
    courseMode: "Onsite",
    inLanguage: "es",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    offers: {
      "@type": "Offer",
      category: "Preparación universitaria",
      priceCurrency: "PEN",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
  };
}

export function allSchemas() {
  return [organizationSchema(), ...ciclos.map(courseSchema)];
}
