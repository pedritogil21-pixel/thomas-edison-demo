"use client";

import { waUrl, MSG_DEFAULT } from "@/lib/whatsapp";
import { events } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

/**
 * Boton flotante de WhatsApp. Visible siempre, mobile + desktop.
 * Client component porque trackea click para GA4. Pulse via CSS
 * keyframe (definido en globals.css) y respeta prefers-reduced-motion.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={waUrl(MSG_DEFAULT)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => events.whatsAppClick("fab")}
      aria-label="Escribir por WhatsApp a Academia Thomas Edison"
      className="fab-wa fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl grid place-items-center hover:scale-110 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <WhatsAppIcon width={28} height={28} />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
