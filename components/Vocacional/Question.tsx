"use client";

import { useRef, type KeyboardEvent } from "react";
import type { Question as QuestionType } from "@/lib/content/preguntas-vocacionales";

type Props = {
  question: QuestionType;
  selected: number | undefined;
  onSelect: (optionIdx: number) => void;
};

export function Question({ question, selected, onSelect }: Props) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKey(e: KeyboardEvent<HTMLButtonElement>, idx: number) {
    let next: number | null = null;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (idx + 1) % question.options.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (idx - 1 + question.options.length) % question.options.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = question.options.length - 1;
        break;
    }
    if (next !== null) {
      e.preventDefault();
      onSelect(next);
      refs.current[next]?.focus();
    }
  }

  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="font-display font-bold leading-[1.15] text-[clamp(22px,3.5vw,32px)] text-ink mb-6">
        {question.text}
      </legend>

      <div className="grid gap-3" role="radiogroup" aria-label={question.text}>
        {question.options.map((opt, idx) => {
          const isSelected = selected === idx;
          // tabIndex: solo el seleccionado (o el primero si no hay) entra en tab order
          const inTabOrder =
            (selected === undefined && idx === 0) || isSelected;
          return (
            <button
              key={idx}
              ref={(el) => { refs.current[idx] = el; }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={inTabOrder ? 0 : -1}
              onClick={() => onSelect(idx)}
              onKeyDown={(e) => handleKey(e, idx)}
              className={`text-left p-4 lg:p-5 rounded-2xl border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                isSelected
                  ? "border-yellow bg-yellow-soft shadow-[0_8px_30px_-12px_rgba(244,196,48,0.4)]"
                  : "border-ink/10 bg-white hover:border-ink/30 hover:-translate-y-px"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <span
                  className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border-2 grid place-items-center font-display font-bold text-[11px] ${
                    isSelected
                      ? "border-yellow-dark bg-yellow text-ink"
                      : "border-ink/25 text-ink/40"
                  }`}
                  aria-hidden="true"
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className={`text-[15px] lg:text-base leading-snug ${isSelected ? "text-ink font-semibold" : "text-ink/85"}`}>
                  {opt.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
