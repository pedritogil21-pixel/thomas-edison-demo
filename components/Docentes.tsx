type Docente = {
  initials: string;
  name: string;
  subject: string;
  bio: string;
};

const docentes: Docente[] = [
  { initials: "FQ", name: "Prof. Fernando Q.", subject: "Matemática", bio: "Ingeniero UNAM. Método paso a paso para razonamiento lógico." },
  { initials: "RC", name: "Prof. Rocío C.", subject: "Biología", bio: "Biólogo marino. Especialista en área Biomédicas UNAM." },
  { initials: "HM", name: "Prof. Héctor M.", subject: "Física · Química", bio: "Formación en docencia técnica. Enfoque ingenierías y agroindustria." },
  { initials: "DL", name: "Prof. Diana L.", subject: "Lenguaje · RV", bio: "Redacción académica. Apoyo a alumnos de quintos de secundaria." },
];

export function Docentes() {
  return (
    <section id="docentes" className="bg-yellow py-[72px]">
      <div className="w-[min(1120px,92%)] mx-auto">
        <span className="font-display font-bold text-yellow-dark tracking-[0.14em] uppercase text-xs">
          Plana docente
        </span>
        <h2 className="font-display font-bold leading-[1.1] mt-2.5 mb-3.5 tracking-tight text-[clamp(30px,5vw,44px)] text-ink">
          Docentes que conocen la UNAM desde adentro.
        </h2>
        <p className="text-ink/75 max-w-[640px] mb-9 text-base">
          Profesionales locales que entienden el examen UNAM, trabajan con pocos
          alumnos y construyen confianza desde el primer día.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {docentes.map((d) => (
            <article
              key={d.name}
              className="bg-ink text-white border border-ink rounded-[14px] p-[22px] transition-transform hover:-translate-y-0.5"
            >
              <div className="w-[54px] h-[54px] rounded-full bg-yellow text-ink grid place-items-center font-display font-bold text-lg mb-3">
                {d.initials}
              </div>
              <h4 className="m-0 font-display text-lg">{d.name}</h4>
              <div className="text-yellow text-[13px] font-semibold my-1 tracking-[0.06em] uppercase">
                {d.subject}
              </div>
              <p className="m-0 text-white/75 text-sm">{d.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
