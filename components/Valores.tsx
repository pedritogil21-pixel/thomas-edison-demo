import Link from "next/link";
import { SparkleIcon, BookIcon, UsersIcon } from "./icons";

const items = [
  {
    Icon: SparkleIcon,
    title: "Test vocacional incluido",
    body: "Antes de elegir carrera, evaluamos tus intereses y aptitudes. Hacé el test ahora — 8 preguntas, 2 minutos.",
    href: "/test-vocacional",
    cta: "Hacer test →",
  },
  {
    Icon: BookIcon,
    title: "Enfoque sur del Perú",
    body: "Preparación para UNAM Moquegua, UNSA Arequipa y UNJBG Tacna — áreas Biomédicas, Ingenierías y Sociales.",
  },
  {
    Icon: UsersIcon,
    title: "Atención uno a uno",
    body: "Academia pequeña por elección: cada alumno tiene un docente guía que sigue su avance semana a semana.",
  },
];

export function Valores() {
  return (
    <section className="py-[72px]">
      <div className="w-[min(1120px,92%)] mx-auto">
        <span className="font-display font-bold text-yellow-dark tracking-[0.14em] uppercase text-xs">
          Por qué Thomas Edison
        </span>
        <h2 className="font-display font-bold leading-[1.1] mt-2.5 mb-3.5 tracking-tight text-[clamp(30px,5vw,44px)]">
          La academia pensada para el alumno de Moquegua.
        </h2>
        <p className="text-muted max-w-[640px] mb-9 text-base">
          Sabemos cómo evalúa la UNAM y qué necesitas reforzar como estudiante de
          la región. Sin traer métodos de fuera: método hecho acá, para la
          admisión de acá.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {items.map(({ Icon, title, body, href, cta }) => {
            const inner = (
              <>
                <div className="w-12 h-12 rounded-[10px] bg-yellow text-ink grid place-items-center mb-3.5">
                  <Icon width={22} height={22} />
                </div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-muted text-[15px] m-0">{body}</p>
                {cta && (
                  <span className="mt-3 inline-flex items-center gap-1 text-yellow-dark font-display font-bold text-sm">
                    {cta}
                  </span>
                )}
              </>
            );
            const className =
              "block bg-white border border-ink/10 rounded-[14px] p-[26px] transition-all hover:border-yellow-dark hover:-translate-y-[3px]";
            return href ? (
              <Link key={title} href={href} className={className}>
                {inner}
              </Link>
            ) : (
              <article key={title} className={className}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
