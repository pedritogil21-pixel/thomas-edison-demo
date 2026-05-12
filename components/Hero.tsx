import { TAGLINE, DIRECCION, HORARIO_DISPLAY } from "@/lib/constants";
import { waUrl, MSG_DEFAULT } from "@/lib/whatsapp";
import { WhatsAppIcon, PinIcon, ClockIcon, StarIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden bg-ink text-white py-[76px] md:py-[76px] pt-[76px] pb-[100px]">
      <div className="w-[min(1120px,92%)] mx-auto relative z-[1]">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow text-ink font-display text-xs font-bold tracking-[0.08em] uppercase">
          Moquegua · {TAGLINE}
        </span>

        <h1 className="hero-h1 font-display font-bold leading-[1.02] my-5 tracking-tight text-[clamp(36px,6.5vw,64px)]">
          Descubre tu vocación. <em>Ingresa a la UNAM.</em>
        </h1>

        <p className="text-white/80 max-w-[620px] mb-7 text-[clamp(16px,2.2vw,19px)]">
          En Thomas Edison no te tratamos como número. Preparamos a cada postulante
          para el examen ordinario UNAM con un método paso a paso, simulacros
          y tutoría uno a uno.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={waUrl(MSG_DEFAULT)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-[22px] py-3.5 rounded-full bg-yellow text-ink font-bold text-[15px] font-display transition-transform hover:-translate-y-px"
            style={{ boxShadow: "var(--shadow-brand)" }}
          >
            <WhatsAppIcon />
            Inscríbete al CEPRE UNAM
          </a>
          <a
            href="#ciclos"
            className="inline-flex items-center gap-2.5 px-[22px] py-3.5 rounded-full bg-transparent text-white font-bold text-[15px] font-display border border-white/35 hover:bg-white/10"
          >
            Ver cursos y horarios
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 text-white/80 text-sm">
          <span className="inline-flex items-center gap-2">
            <PinIcon width={16} height={16} className="text-yellow" />
            {DIRECCION.street}, {DIRECCION.locality}
          </span>
          <span className="inline-flex items-center gap-2">
            <ClockIcon width={16} height={16} className="text-yellow" />
            {HORARIO_DISPLAY}
          </span>
          <span className="inline-flex items-center gap-2">
            <StarIcon width={16} height={16} className="text-yellow" />
            5★ en Google
          </span>
        </div>
      </div>
    </section>
  );
}
