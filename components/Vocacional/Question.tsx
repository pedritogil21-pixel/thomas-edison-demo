import type { Question as QuestionType } from "@/lib/content/preguntas-vocacionales";

type Props = {
  question: QuestionType;
  selected: number | undefined;
  onSelect: (optionIdx: number) => void;
};

export function Question({ question, selected, onSelect }: Props) {
  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="font-display font-bold leading-[1.15] text-[clamp(22px,3.5vw,32px)] text-ink mb-6">
        {question.text}
      </legend>

      <div className="grid gap-3" role="radiogroup">
        {question.options.map((opt, idx) => {
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(idx)}
              className={`text-left p-4 lg:p-5 rounded-2xl border-2 transition-all cursor-pointer ${
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
