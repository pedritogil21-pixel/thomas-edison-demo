import { Resend } from "resend";
import type { Lead } from "./schemas/lead";
import { toWhatsAppNumber } from "./schemas/lead";

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(lead: Lead): string {
  const waNumber = toWhatsAppNumber(lead.celular);
  const fields = [
    ["Nombre", lead.nombre],
    ["Celular", lead.celular],
    ["Colegio", lead.colegio || "—"],
    ["Carrera de interés", lead.carrera || "Aún no decide"],
    ["Ciclo de interés", lead.ciclo || "—"],
  ] as const;

  const rows = fields
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:8px 16px;color:#6b6b60;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;border-bottom:1px solid #f0f0f0;white-space:nowrap">${k}</td>
          <td style="padding:8px 16px;color:#0f0f0f;font-size:15px;border-bottom:1px solid #f0f0f0">${escapeHtml(v)}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="es"><body style="margin:0;padding:0;background:#fafaf5;font-family:system-ui,-apple-system,sans-serif">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid rgba(15,15,15,0.08)">
    <div style="background:#0f0f0f;color:#f4c430;padding:20px 28px;font-weight:700;font-size:18px;letter-spacing:0.02em">
      🎓 Nuevo lead · Academia Thomas Edison
    </div>
    <table cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse">${rows}</table>
    <div style="padding:20px 28px;border-top:1px solid #f0f0f0">
      <a href="https://wa.me/${waNumber}" style="display:inline-block;background:#25D366;color:#062e14;padding:11px 18px;border-radius:999px;text-decoration:none;font-weight:700;font-size:14px">
        📱 Abrir WhatsApp con ${escapeHtml(lead.nombre.split(" ")[0])}
      </a>
    </div>
    <div style="padding:14px 28px;background:#fafaf5;color:#6b6b60;font-size:12px">
      Lead capturado desde thomas-smoky.vercel.app · ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}
    </div>
  </div>
</body></html>`;
}

function buildText(lead: Lead): string {
  const waNumber = toWhatsAppNumber(lead.celular);
  return `Nuevo lead - Academia Thomas Edison

Nombre:    ${lead.nombre}
Celular:   ${lead.celular}
Colegio:   ${lead.colegio || "-"}
Carrera:   ${lead.carrera || "Aún no decide"}
Ciclo:     ${lead.ciclo || "-"}

Abrir WhatsApp: https://wa.me/${waNumber}

Capturado: ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}`;
}

export async function sendLeadEmail(lead: Lead): Promise<void> {
  const apiKey = getEnv("RESEND_API_KEY");
  const from = getEnv("RESEND_FROM");
  const to = getEnv("RESEND_TO");

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Nuevo lead Thomas Edison · ${lead.nombre}`,
    html: buildHtml(lead),
    text: buildText(lead),
  });

  if (error) {
    throw new Error(
      typeof error === "string" ? error : (error.message ?? "Resend send failed"),
    );
  }
}
