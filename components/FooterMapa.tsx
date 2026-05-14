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
              sizes="44px"
              loading="lazy"
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
          <div className="rounded-[14px] overflow-hidden border border-yellow/25 bg-graphite">
            <iframe
              title="Ubicación de Academia Thomas Edison en Moquegua"
              src={`https://www.google.com/maps?q=${DIRECCION.latitude},${DIRECCION.longitude}&z=17&output=embed`}
              width="100%"
              height="220"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <noscript>
              <div className="p-4 text-sm text-white/70">
                Activa JavaScript para ver el mapa.{" "}
                <a
                  href={`https://www.google.com/maps/place/?q=place_id:${DIRECCION.placeId}`}
                  className="text-yellow underline"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </noscript>
          </div>
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${DIRECCION.placeId}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-3 text-xs text-yellow hover:text-white font-display font-bold tracking-wide uppercase"
          >
            Cómo llegar →
          </a>
        </div>
      </div>

      <div className="w-[min(1120px,92%)] mx-auto mt-9 pt-4 border-t border-white/10 text-xs text-white/55 flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} {ACADEMIA_SHORT} · Moquegua</span>
        <span>{TAGLINE} · Ingresa a la UNAM.</span>
      </div>
    </footer>
  );
}
