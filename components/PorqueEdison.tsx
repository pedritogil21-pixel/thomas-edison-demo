import { ANIO_FUNDACION } from "@/lib/constants";
import { CheckIcon } from "./icons";

const bullets = [
  <><strong>C. Moquegua 360</strong>, en pleno centro, cerca de paraderos y librerías.</>,
  <><strong>Especialistas UNAM</strong>, sin repartir foco en otras universidades.</>,
  <><strong>Academia pequeña</strong>: nadie se pierde en el aula, nadie pasa desapercibido.</>,
  <><strong>Material Edison</strong> redactado para el estudiante de Moquegua.</>,
];

export function PorqueEdison() {
  return (
    <section id="porque" className="py-[72px]">
      <div className="w-[min(1120px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-7 lg:gap-12 items-center">
        <div>
          <span className="font-display font-bold text-yellow-dark tracking-[0.14em] uppercase text-xs">
            La diferencia Edison
          </span>
          <h2 className="font-display font-bold leading-[1.1] mt-2.5 mb-3.5 tracking-tight text-[clamp(30px,5vw,44px)]">
            Porque inventar tu futuro también es práctica.
          </h2>
          <p className="text-muted max-w-[640px] mb-3 text-base">
            Edison decía: <i>&quot;el genio es 1% inspiración y 99% transpiración&quot;</i>.
            Nosotros ponemos el método para que esa transpiración sea inteligente:
            hora a hora, simulacro a simulacro, hasta el día del examen.
          </p>
          <ul className="list-none p-0 mt-3 grid gap-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 items-start text-ink">
                <CheckIcon width={22} height={22} className="text-yellow-dark shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          <div className="border border-yellow-dark rounded-xl p-[18px] bg-yellow">
            <b className="font-display text-[34px] text-ink block leading-none">5★</b>
            <span className="text-[13px] text-ink/70">Google Maps</span>
          </div>
          <div className="border border-ink/10 rounded-xl p-[18px] bg-white">
            <b className="font-display text-[34px] text-ink block leading-none">UNAM</b>
            <span className="text-[13px] text-muted">Enfoque exclusivo</span>
          </div>
          <div className="border border-ink/10 rounded-xl p-[18px] bg-white">
            <b className="font-display text-[34px] text-ink block leading-none">{ANIO_FUNDACION}</b>
            <span className="text-[13px] text-muted">Año de fundación</span>
          </div>
          <div className="border border-ink/10 rounded-xl p-[18px] bg-white">
            <b className="font-display text-[34px] text-ink block leading-none">1:1</b>
            <span className="text-[13px] text-muted">Tutoría personal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
