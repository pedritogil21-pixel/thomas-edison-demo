import { waUrl, msgReservaCiclo } from "@/lib/whatsapp";
import { ciclos } from "@/lib/content/ciclos";

export function Ciclos() {
  return (
    <section id="ciclos" className="bg-ink text-white py-[72px]">
      <div className="w-[min(1120px,92%)] mx-auto">
        <span className="font-display font-bold text-yellow tracking-[0.14em] uppercase text-xs">
          Ciclos 2026
        </span>
        <h2 className="font-display font-bold leading-[1.1] mt-2.5 mb-3.5 tracking-tight text-[clamp(30px,5vw,44px)] text-white">
          Un ciclo para cada momento del postulante.
        </h2>
        <p className="text-white/70 max-w-[640px] mb-9 text-base">
          Desde quintos de secundaria hasta egresados que buscan segunda oportunidad.
          Precios y formas de pago coordinamos directo por WhatsApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {ciclos.map((c) => (
            <article
              key={c.title}
              className="bg-graphite border border-yellow/25 rounded-[14px] p-[22px] flex flex-col gap-2.5 transition-all hover:border-yellow hover:-translate-y-[3px] text-white"
            >
              <span className="self-start text-[11px] font-bold tracking-[0.12em] uppercase bg-yellow text-ink px-2.5 py-1 rounded font-display">
                {c.tag}
              </span>
              <h3 className="font-display text-xl mt-1 text-white">{c.title}</h3>
              <p className="text-white/60 text-sm">{c.when}</p>
              <ul className="ciclo-list list-none p-0 mt-1.5 text-sm text-white/75 grid gap-1.5">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <span className="text-[13px] text-yellow font-bold mt-1.5">
                Consulta precios por WhatsApp
              </span>
              <a
                href={waUrl(msgReservaCiclo(c.title))}
                target="_blank"
                rel="noopener"
                className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-yellow text-ink font-bold text-sm font-display hover:bg-white"
              >
                Reservar vacante
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
