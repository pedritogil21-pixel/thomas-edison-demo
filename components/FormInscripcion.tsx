"use client";

import { useState, type FormEvent } from "react";
import { ACADEMIA } from "@/lib/constants";
import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, LockIcon, CheckIcon } from "./icons";

const carreras = [
  "",
  "Ingeniería Agroindustrial",
  "Ingeniería Ambiental",
  "Ingeniería de Sistemas",
  "Ingeniería Pesquera",
  "Gestión Pública",
  "Otra",
];

const ciclosOptions = [
  "CEPRE UNAM Anual",
  "CEPRE UNAM Intensivo",
  "Ordinario UNAM",
  "Verano Edison",
];

export function FormInscripcion() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!data.nombre || !data.celular) {
      form.reportValidity();
      setSubmitting(false);
      return;
    }

    const text =
      `Hola ${ACADEMIA}, quiero inscribirme.\n` +
      `• Nombre: ${data.nombre}\n` +
      `• Celular: ${data.celular}\n` +
      `• Colegio: ${data.colegio || "-"}\n` +
      `• Carrera de interés: ${data.carrera || "Aún no decido"}\n` +
      `• Ciclo: ${data.ciclo || "-"}`;

    window.open(waUrl(text), "_blank", "noopener");
    setSubmitting(false);
  }

  return (
    <section id="inscripcion" className="bg-paper py-[72px]">
      <div className="w-[min(1120px,92%)] mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 bg-white border border-ink/10 rounded-[20px] p-7 lg:p-10"
          style={{ boxShadow: "var(--shadow-deep)" }}
        >
          <div>
            <span className="font-display font-bold text-yellow-dark tracking-[0.14em] uppercase text-xs">
              Inscripción en línea
            </span>
            <h2 className="font-display font-bold leading-[1.1] mt-2.5 mb-3.5 tracking-tight text-[clamp(30px,5vw,44px)]">
              Reserva tu vacante en 1 minuto.
            </h2>
            <p className="text-muted">
              Completa el formulario y tus datos llegan directo al WhatsApp de la dirección. Coordinamos
              ciclo, horario y precio sin llamadas innecesarias.
            </p>
            <ul className="list-none p-0 mt-4 grid gap-3">
              <li className="flex gap-3 items-start text-ink">
                <CheckIcon width={20} height={20} className="text-yellow-dark shrink-0 mt-0.5" />
                <span>Test vocacional gratuito antes del ciclo.</span>
              </li>
              <li className="flex gap-3 items-start text-ink">
                <CheckIcon width={20} height={20} className="text-yellow-dark shrink-0 mt-0.5" />
                <span>Descuento por matrícula temprana.</span>
              </li>
              <li className="flex gap-3 items-start text-ink">
                <CheckIcon width={20} height={20} className="text-yellow-dark shrink-0 mt-0.5" />
                <span>Atención directa de la dirección.</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-3.5">
            <label className="text-[13px] font-bold text-ink grid gap-1.5 font-display">
              Nombre completo
              <input
                required
                type="text"
                name="nombre"
                placeholder="Ej. Ana Choque Flores"
                autoComplete="name"
                className="px-3.5 py-3 rounded-[10px] border border-ink/10 bg-paper text-ink transition-all"
              />
            </label>
            <label className="text-[13px] font-bold text-ink grid gap-1.5 font-display">
              Celular (WhatsApp)
              <input
                required
                type="tel"
                name="celular"
                placeholder="Ej. 987 654 321"
                autoComplete="tel"
                pattern="[0-9 +]{7,}"
                className="px-3.5 py-3 rounded-[10px] border border-ink/10 bg-paper text-ink transition-all"
              />
            </label>
            <label className="text-[13px] font-bold text-ink grid gap-1.5 font-display">
              Colegio de procedencia
              <input
                type="text"
                name="colegio"
                placeholder="Ej. I.E. Simón Bolívar"
                className="px-3.5 py-3 rounded-[10px] border border-ink/10 bg-paper text-ink transition-all"
              />
            </label>
            <label className="text-[13px] font-bold text-ink grid gap-1.5 font-display">
              Carrera de interés
              <select
                name="carrera"
                className="px-3.5 py-3 rounded-[10px] border border-ink/10 bg-paper text-ink transition-all"
                defaultValue=""
              >
                <option value="">Aún no decido</option>
                {carreras.slice(1).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="text-[13px] font-bold text-ink grid gap-1.5 font-display">
              Ciclo que te interesa
              <select
                name="ciclo"
                className="px-3.5 py-3 rounded-[10px] border border-ink/10 bg-paper text-ink transition-all"
                defaultValue={ciclosOptions[0]}
              >
                {ciclosOptions.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 bg-ink text-yellow px-[22px] py-3.5 rounded-full font-bold cursor-pointer inline-flex items-center justify-center gap-2.5 font-display hover:-translate-y-px hover:bg-graphite disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              style={{ boxShadow: "var(--shadow-deep)" }}
            >
              <WhatsAppIcon />
              {submitting ? "Enviando…" : "Enviar al WhatsApp Edison"}
            </button>

            <span className="text-xs text-muted inline-flex items-center gap-2 font-body font-medium">
              <LockIcon width={14} height={14} />
              Tus datos solo se usan para coordinar tu matrícula.
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
