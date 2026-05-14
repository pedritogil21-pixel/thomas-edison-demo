"use client";

import { useState } from "react";
import { faq } from "@/lib/content/faq";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-[72px]">
      <div className="w-[min(900px,92%)] mx-auto">
        <span className="font-display font-bold text-yellow-dark tracking-[0.14em] uppercase text-xs">
          Preguntas frecuentes
        </span>
        <h2 className="font-display font-bold leading-[1.1] mt-2.5 mb-3.5 tracking-tight text-[clamp(30px,5vw,44px)]">
          Antes de inscribirte, lo que más nos preguntan.
        </h2>
        <p className="text-muted max-w-[640px] mb-9 text-base">
          Si tu duda no está acá, escribínos por WhatsApp con el botón verde de
          la esquina inferior — atendemos directo desde la dirección.
        </p>

        <ul className="grid gap-3" role="list">
          {faq.map((item, idx) => {
            const isOpen = open === idx;
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-btn-${idx}`;
            return (
              <li
                key={item.q}
                className={`bg-white border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-yellow-dark" : "border-ink/10"
                }`}
              >
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-5 lg:px-7 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-yellow-soft/30 transition-colors"
                >
                  <span className="font-display font-bold text-ink text-[16px] lg:text-[17px] leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 w-9 h-9 rounded-full grid place-items-center font-display text-xl transition-all ${
                      isOpen
                        ? "bg-yellow text-ink rotate-45"
                        : "bg-ink/5 text-ink"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="px-5 lg:px-7 pb-5 text-muted leading-relaxed text-[15px]"
                >
                  {item.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
