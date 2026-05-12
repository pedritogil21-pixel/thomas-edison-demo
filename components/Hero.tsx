import Image from "next/image";
import { TAGLINE, DIRECCION, HORARIO_DISPLAY, ANIO_FUNDACION } from "@/lib/constants";
import { waUrl, MSG_DEFAULT } from "@/lib/whatsapp";
import { WhatsAppIcon, PinIcon, ClockIcon, StarIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-bg relative overflow-hidden bg-ink text-white min-h-[calc(100svh-68px)] flex items-center"
    >
      <div className="w-[min(1200px,92%)] mx-auto relative z-[1] grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center py-14 lg:py-10">
        {/* Columna texto */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow text-ink font-display text-xs font-bold tracking-[0.08em] uppercase">
            Moquegua · {TAGLINE}
          </span>

          <h1 className="hero-h1 font-display font-bold leading-[1.05] my-5 tracking-tight text-[clamp(34px,4.6vw,56px)]">
            Descubre tu vocación. <em>Ingresa a la UNAM.</em>
          </h1>

          <p className="text-white/80 max-w-[560px] mb-7 text-[clamp(15px,1.4vw,18px)]">
            En Thomas Edison no te tratamos como número. Preparamos a cada
            postulante para <strong className="text-white font-semibold">Biomédicas, Ingenierías y Sociales</strong> con un
            método paso a paso, simulacros y tutoría uno a uno.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={waUrl(MSG_DEFAULT)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-[22px] py-3.5 rounded-full bg-yellow text-ink font-bold text-[15px] font-display transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-brand)" }}
            >
              <WhatsAppIcon />
              Inscríbete al CEPRE UNAM
            </a>
            <a
              href="#ciclos"
              className="inline-flex items-center gap-2.5 px-[22px] py-3.5 rounded-full bg-transparent text-white font-bold text-[15px] font-display border border-white/30 hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              Ver cursos y horarios
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-white/75 text-sm">
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

        {/* Columna foto — solo desktop */}
        <div className="hidden lg:block relative">
          <div
            aria-hidden
            className="absolute -inset-8 bg-yellow/15 rounded-[36px] blur-3xl pointer-events-none"
          />
          <div
            className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-yellow/30"
            style={{ boxShadow: "var(--shadow-deep)" }}
          >
            <Image
              src="/foto-aula.webp"
              alt="Estudiantes de Thomas Edison en aula durante simulacro"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 0px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent"
            />
          </div>

          {/* Badge flotante credibilidad */}
          <div className="absolute -bottom-5 -left-5 bg-yellow text-ink rounded-2xl px-5 py-3.5 shadow-xl">
            <div className="text-[10px] tracking-[0.14em] uppercase font-display font-bold opacity-70">
              Desde
            </div>
            <div className="font-display font-bold text-3xl leading-none">
              {ANIO_FUNDACION}
            </div>
            <div className="text-[11px] tracking-tight opacity-75 mt-1 font-medium">
              en el centro de Moquegua
            </div>
          </div>

          {/* Chip flotante a la derecha */}
          <div className="absolute -top-3 -right-3 bg-ink/80 backdrop-blur-md text-white rounded-full px-4 py-2 border border-yellow/30 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            <span className="text-xs font-display font-bold tracking-wide">Vacantes abiertas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
