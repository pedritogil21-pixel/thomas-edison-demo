import { TAGLINE, DIRECCION, HORARIO_DISPLAY } from "@/lib/constants";
import { waUrl, MSG_DEFAULT } from "@/lib/whatsapp";
import { WhatsAppIcon, PinIcon, ClockIcon, StarIcon } from "./icons";
import { TrackedAnchor } from "./analytics/TrackedAnchor";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-bg relative overflow-hidden bg-ink text-white min-h-[calc(100svh-68px)] flex items-center py-16 lg:py-20"
    >
      <div className="w-[min(1120px,92%)] mx-auto relative z-[1]">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow text-ink font-display text-xs font-bold tracking-[0.08em] uppercase">
          Moquegua · {TAGLINE}
        </span>

        <h1 className="hero-h1 font-display font-bold leading-[1.05] my-6 tracking-tight text-[clamp(36px,6vw,60px)] max-w-[860px]">
          Descubre tu vocación. <em>Ingresa a la UNAM.</em>
        </h1>

        <p className="text-white/80 max-w-[620px] mb-8 text-[clamp(16px,1.9vw,19px)]">
          En Thomas Edison no te tratamos como número. Preparamos a cada postulante
          para <strong className="text-white font-semibold">Biomédicas, Ingenierías y Sociales</strong>{" "}
          con un método paso a paso, simulacros y tutoría uno a uno.
        </p>

        <div className="flex flex-wrap gap-3">
          <TrackedAnchor
            href={waUrl(MSG_DEFAULT)}
            target="_blank"
            rel="noopener"
            event="whatsapp_click"
            params={{ source: "hero_cta" }}
            className="inline-flex items-center gap-2.5 px-[22px] py-3.5 rounded-full bg-yellow text-ink font-bold text-[15px] font-display transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-brand)" }}
          >
            <WhatsAppIcon />
            Inscríbete al CEPRE UNAM
          </TrackedAnchor>
          <a
            href="#ciclos"
            className="inline-flex items-center gap-2.5 px-[22px] py-3.5 rounded-full bg-transparent text-white font-bold text-[15px] font-display border border-white/30 hover:border-white/60 hover:bg-white/5 transition-colors"
          >
            Ver cursos y horarios
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-white/75 text-sm">
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
