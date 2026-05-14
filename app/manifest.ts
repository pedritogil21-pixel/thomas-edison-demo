import type { MetadataRoute } from "next";
import { ACADEMIA, ACADEMIA_SHORT, TAGLINE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: ACADEMIA,
    short_name: ACADEMIA_SHORT,
    description: `${ACADEMIA} · ${TAGLINE} · Preparación UNAM Moquegua.`,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fafaf5",
    theme_color: "#f4c430",
    lang: "es-PE",
    dir: "ltr",
    categories: ["education"],
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
