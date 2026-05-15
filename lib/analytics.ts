type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/**
 * Dispara un evento custom a GA4. No-op si gtag no esta cargado
 * (env NEXT_PUBLIC_GA_ID ausente). Nunca lanza excepciones.
 *
 * Uso: track("whatsapp_click", { source: "fab" })
 */
export function track(
  event: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
  } catch {
    // Silently ignore — analytics never breaks UX
  }
}

// Eventos tipados que disparamos en la landing
export const events = {
  leadFormSubmit: (carrera?: string) =>
    track("lead_form_submit", { carrera: carrera || "no_decide" }),
  whatsAppClick: (source: string) => track("whatsapp_click", { source }),
  testVocacionalComplete: (top1: string, top2?: string) =>
    track("test_vocacional_complete", {
      top1,
      top2: top2 || "ninguna",
    }),
  cicloCardClick: (ciclo: string) => track("ciclo_card_click", { ciclo }),
  faqOpen: (pregunta: string) => track("faq_open", { pregunta: pregunta.slice(0, 80) }),
};
