import Image from "next/image";
import { ACADEMIA_SHORT, EMAIL, DIRECCION, HORARIO_DISPLAY, WA_PHONE_DISPLAY, TAGLINE } from "@/lib/constants";
import { waUrl, MSG_DEFAULT } from "@/lib/whatsapp";
import { WhatsAppIcon, PinIcon, ClockIcon, MailIcon } from "./icons";

export function FooterMapa() {
  return (
    <footer id="contacto" className="bg-ink text-white/80 pt-14 pb-7">
      <div className="w-[min(1120px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_1fr] gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/logo.webp"
              alt={ACADEMIA_SHORT}
              width={44}
              height={44}
              className="w-11 h-11 rounded-full bg-white p-1"
            />
            <h4 className="text-yellow font-display text-lg m-0">{ACADEMIA_SHORT}</h4>
          </div>
          <p className="text-white/70 text-sm m-0 mb-4">
            Academia preuniversitaria · preparación para universidades del sur del Perú.
            Centro de Moquegua.
          </p>
          <a
            href={waUrl(MSG_DEFAULT)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-[18px] py-3 rounded-full bg-[#25D366] text-[#062e14] font-bold text-[15px] mt-2.5 font-display"
          >
            <WhatsAppIcon />
            {WA_PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <h4 className="text-yellow font-display text-lg m-0 mb-3">Contacto</h4>
          <div className="flex gap-3 items-start mb-3 text-sm">
            <PinIcon width={18} height={18} className="text-yellow shrink-0 mt-0.5" />
            <span>
              {DIRECCION.street}
              <br />
              {DIRECCION.locality}, Perú
            </span>
          </div>
          <div className="flex gap-3 items-start mb-3 text-sm">
            <ClockIcon width={18} height={18} className="text-yellow shrink-0 mt-0.5" />
            <span>{HORARIO_DISPLAY}</span>
          </div>
          <div className="flex gap-3 items-start mb-3 text-sm">
            <MailIcon width={18} height={18} className="text-yellow shrink-0 mt-0.5" />
            <span>{EMAIL}</span>
          </div>
        </div>

        <div>
          <h4 className="text-yellow font-display text-lg m-0 mb-3">Dónde estamos</h4>
          <div className="bg-graphite border border-yellow/25 rounded-[14px] p-3.5">
            <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa referencial" className="w-full h-auto block">
              <rect width="320" height="180" fill="#1a1a1a" />
              <g stroke="rgba(244,196,48,0.25)" strokeWidth="1">
                <path d="M0 40 L320 40" />
                <path d="M0 80 L320 80" />
                <path d="M0 120 L320 120" />
                <path d="M80 0 L80 180" />
                <path d="M160 0 L160 180" />
                <path d="M240 0 L240 180" />
              </g>
              <rect x="40" y="76" width="240" height="8" fill="rgba(244,196,48,0.4)" />
              <text x="160" y="70" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="rgba(244,196,48,0.9)" textAnchor="middle">CALLE MOQUEGUA</text>
              <circle cx="160" cy="80" r="9" fill="#f4c430" />
              <circle cx="160" cy="80" r="16" fill="none" stroke="#f4c430" strokeOpacity="0.4" />
              <text x="160" y="108" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#fff" textAnchor="middle">Thomas Edison · 360</text>
              <text x="160" y="165" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)" textAnchor="middle">Centro de Moquegua</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-[min(1120px,92%)] mx-auto mt-9 pt-4 border-t border-white/10 text-xs text-white/55 flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} {ACADEMIA_SHORT} · Moquegua</span>
        <span>{TAGLINE} · Ingresa a la UNAM.</span>
      </div>
    </footer>
  );
}
