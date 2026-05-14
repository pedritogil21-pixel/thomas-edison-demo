import Link from "next/link";
import { getArea, type AreaScore } from "@/lib/vocacional/score";
import { type Respuestas } from "@/lib/vocacional/score";
import { ACADEMIA } from "@/lib/constants";
import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, CheckIcon } from "../icons";

type Props = {
  results: AreaScore[];
  onRestart: () => void;
  answers: Respuestas;
};

export function Result({ results, onRestart }: Props) {
  if (results.length === 0) {
    return (
      <div className="max-w-[680px] mx-auto px-5 py-14 text-center">
        <h1 className="font-display font-bold text-2xl mb-3">No pudimos calcular tu resultado.</h1>
        <p className="text-muted mb-5">Parece que no completaste suficientes preguntas. Probemos otra vez.</p>
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow text-ink font-display font-bold cursor-pointer"
        >
          Volver a empezar
        </button>
      </div>
    );
  }

  const top = results[0]!;
  const second = results[1];
  const topArea = getArea(top.area);
  const secondArea = second ? getArea(second.area) : null;

  const areaNames = secondArea
    ? `${topArea.name} y ${secondArea.name}`
    : topArea.name;

  const waMessage =
    `Hola ${ACADEMIA}, hice el test vocacional y mi resultado es:\n` +
    `${areaNames}.\n\n` +
    `Quiero más información sobre los ciclos.`;

  return (
    <div className="max-w-[820px] mx-auto px-5 py-10 lg:py-14">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow text-ink font-display text-xs font-bold tracking-[0.08em] uppercase">
        Tu resultado
      </span>
      <h1 className="font-display font-bold leading-[1.1] mt-4 mb-3 tracking-tight text-[clamp(28px,4.6vw,42px)]">
        Tu mayor afinidad es con{" "}
        <span className="text-yellow-dark">{areaNames}</span>.
      </h1>
      <p className="text-muted text-base lg:text-lg mb-8 max-w-[640px]">
        Te recomendamos explorar estas áreas con un docente Edison. Coordinamos
        una orientación 1 a 1 sin costo antes de que decidas el ciclo.
      </p>

      {/* Carta área principal */}
      <article className="bg-ink text-white rounded-3xl p-7 lg:p-10 mb-5 border border-yellow/30 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-80 h-80 bg-yellow/15 rounded-full blur-3xl pointer-events-none"
        />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-yellow text-ink grid place-items-center text-2xl">
              {topArea.emoji}
            </div>
            <div>
              <div className="font-display text-xs tracking-[0.14em] uppercase text-yellow font-bold">
                Top 1 · {top.points} pts
              </div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl m-0 text-white">
                {topArea.name}
              </h2>
            </div>
          </div>
          <p className="text-white/85 text-base mb-2 font-medium">
            {topArea.tagline}
          </p>
          <p className="text-white/70 text-[15px] mb-6">{topArea.description}</p>

          <h3 className="font-display text-yellow text-sm tracking-[0.1em] uppercase font-bold mb-3">
            Carreras en UNAM Moquegua
          </h3>
          <ul className="grid gap-2 mb-6">
            {topArea.carrerasUnam.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-white/90 text-[15px]">
                <CheckIcon width={18} height={18} className="text-yellow shrink-0 mt-1" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          {topArea.carrerasRelacionadas && topArea.carrerasRelacionadas.length > 0 && (
            <>
              <h3 className="font-display text-yellow text-sm tracking-[0.1em] uppercase font-bold mb-3 mt-6">
                También preparamos para
              </h3>
              <ul className="grid gap-2">
                {topArea.carrerasRelacionadas.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-white/70 text-[14px]">
                    <span className="text-yellow shrink-0 mt-0.5">→</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </article>

      {/* Carta área secundaria */}
      {secondArea && (
        <article className="bg-white border border-ink/10 rounded-3xl p-6 lg:p-7 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-yellow-soft text-ink grid place-items-center text-xl">
              {secondArea.emoji}
            </div>
            <div>
              <div className="font-display text-xs tracking-[0.14em] uppercase text-yellow-dark font-bold">
                Top 2 · {second!.points} pts
              </div>
              <h2 className="font-display font-bold text-xl m-0">{secondArea.name}</h2>
            </div>
          </div>
          <p className="text-ink/85 mb-3 font-medium text-[15px]">{secondArea.tagline}</p>
          <details className="text-[14px] text-muted">
            <summary className="cursor-pointer font-semibold text-ink/75 hover:text-ink">
              Ver carreras de esta área
            </summary>
            <div className="mt-2 grid gap-1.5">
              {secondArea.carrerasUnam.map((c) => (
                <div key={c} className="text-[14px]">→ {c}</div>
              ))}
            </div>
          </details>
        </article>
      )}

      {/* CTAs */}
      <div className="grid gap-3 sm:flex sm:flex-wrap mt-6">
        <a
          href={waUrl(waMessage)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-yellow text-ink font-bold font-display flex-1 sm:flex-initial"
          style={{ boxShadow: "var(--shadow-brand)" }}
        >
          <WhatsAppIcon />
          Coordinar inscripción
        </a>
        <Link
          href="/#ciclos"
          className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-ink/20 text-ink font-display font-bold hover:bg-ink/5"
        >
          Ver ciclos
        </Link>
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-full text-muted font-display hover:text-ink cursor-pointer"
        >
          ← Repetir test
        </button>
      </div>

      <p className="text-xs text-muted mt-8 max-w-[560px]">
        Este test es una orientación general. La decisión final depende de tus
        intereses, posibilidades y conversación con la dirección de la academia.
      </p>
    </div>
  );
}
