import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/schemas/lead";
import { sendLeadEmail } from "@/lib/resend";

// Default Node runtime (no edge). Resend SDK funciona en ambos pero Node
// es mas estable para envios.
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "JSON inválido" },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Datos inválidos",
        issues: parsed.error.issues.map((i) => ({
          field: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  // Honeypot: si "website" está lleno, es un bot. Respuesta 200 silenciosa.
  if (lead.website && lead.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendLeadEmail(lead);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/lead] Resend error:", err);
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { ok: false, error: `No pudimos procesar tu inscripción: ${message}` },
      { status: 500 },
    );
  }
}
