"use client";

import { useState, type FormEvent } from "react";
import { ACADEMIA } from "@/lib/constants";
import { waUrl } from "@/lib/whatsapp";
import { events } from "@/lib/analytics";
import { WhatsAppIcon, LockIcon, CheckIcon } from "./icons";

type FormState = "idle" | "submitting" | "success" | "error";

const ciclosOptions = [
  "CEPRE UNAM Anual",
  "CEPRE UNAM Intensivo",
  "Ordinario UNAM",
  "Verano Edison",
];

// Carreras agrupadas por area UNAM/sur-Peru (positioning B)
const carrerasGrupos = [
  {
    label: "Biomédicas",
    items: ["Medicina Humana", "Enfermería", "Odontología", "Obstetricia", "Tecnología Médica"],
  },
  {
    label: "Ingenierías",
    items: [
      "Ingeniería Agroindustrial",
      "Ingeniería Ambiental",
      "Ingeniería Civil",
      "Ingeniería de Sistemas",
      "Ingeniería de Minas",
      "Ingeniería Pesquera",
    ],
  },
  {
    label: "Sociales",
    items: ["Gestión Pública", "Administración", "Contabilidad", "Derecho", "Educación"],
  },
];

function buildWaMessage(data: Record<string, string>): string {
  return (
    `Hola ${ACADEMIA}, quiero inscribirme.\n` +
    `• Nombre: ${data.nombre}\n` +
    `• Celular: ${data.celular}\n` +
    `• Colegio: ${data.colegio || "-"}\n` +
    `• Carrera de interés: ${data.carrera || "Aún no decido"}\n` +
    `• Ciclo: ${data.ciclo || "-"}`
  );
}

export function FormInscripcion() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [lastData, setLastData] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setLastData(data);
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || `HTTP ${res.status}`);
      }

      setState("success");
      events.leadFormSubmit(data.carrera);
      // Disparamos WhatsApp en paralelo para reforzar el canal
      window.open(waUrl(buildWaMessage(data)), "_blank", "noopener");
    } catch (err) {
      console.error("Lead submit failed:", err);
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
      setState("error");
    }
  }

  const inputClass =
    "px-3.5 py-3 rounded-[10px] border border-ink/10 bg-paper text-ink transition-all";
  const labelClass = "text-[13px] font-bold text-ink grid gap-1.5 font-display";

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
              Completa el formulario y nuestro equipo te contacta el mismo día.
              Coordinamos ciclo, horario y precio sin llamadas innecesarias.
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

          {/* Success view */}
          {state === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="rounded-[14px] border border-yellow/40 bg-yellow-soft p-7 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-yellow grid place-items-center text-ink">
                <CheckIcon width={26} height={26} />
              </div>
              <h3 className="font-display text-2xl m-0">¡Listo, {lastData.nombre?.split(" ")[0]}!</h3>
              <p className="m-0 text-ink/75">
                Recibimos tus datos y te abrimos WhatsApp para que coordines en el mismo
                instante con la dirección. Si la ventana de WhatsApp no se abrió,
                tocá el botón:
              </p>
              <a
                href={waUrl(buildWaMessage(lastData))}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 px-[22px] py-3.5 rounded-full bg-ink text-yellow font-bold font-display"
              >
                <WhatsAppIcon />
                Abrir WhatsApp ahora
              </a>
            </div>
          )}

          {/* Form view (idle, submitting, error) */}
          {state !== "success" && (
            <form onSubmit={handleSubmit} noValidate className="grid gap-3.5">
              {/* Honeypot — invisible para humanos, accesible solo a bots ingenuos */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
              >
                <label>
                  No completar este campo
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </label>
              </div>

              <label className={labelClass}>
                Nombre completo
                <input
                  required
                  type="text"
                  name="nombre"
                  placeholder="Ej. Ana Choque Flores"
                  autoComplete="name"
                  minLength={2}
                  maxLength={80}
                  className={inputClass}
                />
              </label>
              <label className={labelClass}>
                Celular (WhatsApp)
                <input
                  required
                  type="tel"
                  name="celular"
                  placeholder="Ej. 987 654 321"
                  autoComplete="tel"
                  pattern="(\+?51\s?)?9\d{2}\s?\d{3}\s?\d{3}"
                  className={inputClass}
                />
              </label>
              <label className={labelClass}>
                Colegio de procedencia
                <input
                  type="text"
                  name="colegio"
                  placeholder="Ej. I.E. Simón Bolívar"
                  maxLength={120}
                  className={inputClass}
                />
              </label>
              <label className={labelClass}>
                Carrera de interés
                <select name="carrera" className={inputClass} defaultValue="">
                  <option value="">Aún no decido</option>
                  {carrerasGrupos.map((g) => (
                    <optgroup key={g.label} label={g.label}>
                      {g.items.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </optgroup>
                  ))}
                  <option>Otra</option>
                </select>
              </label>
              <label className={labelClass}>
                Ciclo que te interesa
                <select name="ciclo" className={inputClass} defaultValue={ciclosOptions[0]}>
                  {ciclosOptions.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              {state === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="rounded-[10px] border border-red-400/40 bg-red-50 text-red-800 text-sm p-3"
                >
                  <strong>No pudimos enviar tu inscripción.</strong> {errorMsg}
                  <br />
                  <span>Probá de nuevo o escribínos directo por WhatsApp con el botón verde flotante.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="mt-1 bg-ink text-yellow px-[22px] py-3.5 rounded-full font-bold cursor-pointer inline-flex items-center justify-center gap-2.5 font-display hover:-translate-y-px hover:bg-graphite disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                style={{ boxShadow: "var(--shadow-deep)" }}
              >
                {state === "submitting" ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-yellow border-t-transparent rounded-full animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    <CheckIcon />
                    Reservar mi vacante
                  </>
                )}
              </button>

              <span className="text-xs text-muted inline-flex items-center gap-2 font-body font-medium">
                <LockIcon width={14} height={14} />
                Tus datos solo se usan para coordinar tu matrícula.
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
