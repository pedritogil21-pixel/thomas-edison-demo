"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { preguntas, TOTAL_PREGUNTAS } from "@/lib/content/preguntas-vocacionales";
import { topAreas, type Respuestas } from "@/lib/vocacional/score";
import { Question } from "./Question";
import { Result } from "./Result";

const STORAGE_KEY = "thomas-edison-vocacional-v1";

type StoredState = {
  answers: Respuestas;
  step: number;
};

export function Wizard() {
  const [step, setStep] = useState(-1); // -1 = intro, 0..N-1 = preguntas, N = resultado
  const [answers, setAnswers] = useState<Respuestas>({});
  const [hydrated, setHydrated] = useState(false);

  // Cargar estado guardado al montar
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredState;
        if (parsed.answers && typeof parsed.step === "number") {
          setAnswers(parsed.answers);
          setStep(parsed.step);
        }
      }
    } catch {
      // ignore parse errors, empezar de cero
    }
    setHydrated(true);
  }, []);

  // Guardar despues de cada cambio
  useEffect(() => {
    if (!hydrated) return;
    if (step === -1 && Object.keys(answers).length === 0) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, step } as StoredState),
      );
    } catch {
      // localStorage lleno o bloqueado, no critico
    }
  }, [answers, step, hydrated]);

  function start() {
    setStep(0);
  }

  function handleSelect(optionIdx: number) {
    const q = preguntas[step];
    if (!q) return;
    setAnswers((prev) => ({ ...prev, [q.id]: optionIdx }));
  }

  function next() {
    if (step < TOTAL_PREGUNTAS - 1) {
      setStep(step + 1);
    } else {
      setStep(TOTAL_PREGUNTAS); // resultado
    }
  }

  function prev() {
    if (step > 0) setStep(step - 1);
  }

  function restart() {
    setAnswers({});
    setStep(-1);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  if (!hydrated) {
    return (
      <div className="min-h-[60vh] grid place-items-center text-muted">
        <div className="animate-pulse">Cargando…</div>
      </div>
    );
  }

  // Pantalla resultado
  if (step >= TOTAL_PREGUNTAS) {
    const results = topAreas(answers);
    return <Result results={results} onRestart={restart} answers={answers} />;
  }

  // Pantalla intro
  if (step === -1) {
    const hasProgress = Object.keys(answers).length > 0;
    return (
      <div className="max-w-[680px] mx-auto px-5 py-12 lg:py-20">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow text-ink font-display text-xs font-bold tracking-[0.08em] uppercase">
          Test vocacional · Gratuito · 2 minutos
        </span>
        <h1 className="font-display font-bold leading-[1.1] mt-5 mb-4 tracking-tight text-[clamp(32px,5.5vw,52px)]">
          ¿Para qué área del conocimiento estás hecha/o?
        </h1>
        <p className="text-muted text-lg mb-7">
          {TOTAL_PREGUNTAS} preguntas sencillas. Sin registro, sin compartir datos.
          Al final te decimos tus 2 áreas con más afinidad y qué carreras
          de UNAM Moquegua te calzan mejor.
        </p>

        <ul className="grid gap-3 mb-8 text-ink">
          <li className="flex items-start gap-3">
            <span className="text-yellow-dark font-display font-bold text-xl leading-none mt-0.5">→</span>
            <span>Pensado para postulantes UNAM Moquegua, UNSA y UNJBG.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-dark font-display font-bold text-xl leading-none mt-0.5">→</span>
            <span>Tus respuestas se guardan automáticamente — podés volver después.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-dark font-display font-bold text-xl leading-none mt-0.5">→</span>
            <span>No es una prueba: no hay respuestas correctas o incorrectas.</span>
          </li>
        </ul>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={start}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-yellow text-ink font-bold text-[15px] font-display transition-transform hover:-translate-y-0.5 cursor-pointer"
            style={{ boxShadow: "var(--shadow-brand)" }}
          >
            {hasProgress ? "Continuar test" : "Empezar test"} →
          </button>
          {hasProgress && (
            <button
              onClick={restart}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-ink/20 text-ink font-display font-bold text-[15px] hover:bg-ink/5 cursor-pointer"
            >
              Empezar de cero
            </button>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-muted font-display text-[15px] hover:text-ink"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  // Pantalla pregunta
  const q = preguntas[step]!;
  const selected = answers[q.id];
  const progressPct = Math.round(((step + 1) / TOTAL_PREGUNTAS) * 100);

  return (
    <div className="max-w-[680px] mx-auto px-5 py-10 lg:py-14">
      {/* Header con progreso */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-display text-xs font-bold tracking-[0.12em] uppercase text-muted">
          Pregunta {step + 1} de {TOTAL_PREGUNTAS}
        </span>
        <button
          onClick={restart}
          className="text-xs text-muted hover:text-ink underline-offset-2 hover:underline cursor-pointer"
        >
          Cancelar
        </button>
      </div>
      <div
        className="h-1.5 rounded-full bg-ink/10 overflow-hidden mb-8"
        role="progressbar"
        aria-valuenow={progressPct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso del test"
      >
        <div
          className="h-full bg-yellow transition-all duration-300 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <Question
        question={q}
        selected={selected}
        onSelect={handleSelect}
      />

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          onClick={prev}
          disabled={step === 0}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/20 text-ink font-display font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-ink/5 cursor-pointer"
        >
          ← Atrás
        </button>
        <button
          onClick={next}
          disabled={selected === undefined}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-ink text-yellow font-bold font-display text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-graphite cursor-pointer"
        >
          {step === TOTAL_PREGUNTAS - 1 ? "Ver mi resultado" : "Siguiente"} →
        </button>
      </div>
    </div>
  );
}
