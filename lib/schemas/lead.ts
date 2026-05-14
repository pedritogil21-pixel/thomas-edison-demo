import { z } from "zod";

// Acepta numeros peruanos: "987 654 321", "987654321", "+51 987 654 321", "51987654321"
const phoneRegex = /^(\+?51\s?)?9\d{2}\s?\d{3}\s?\d{3}$/;

export const leadSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(80, "El nombre es demasiado largo"),
  celular: z
    .string()
    .trim()
    .regex(phoneRegex, "Número de celular peruano inválido"),
  colegio: z.string().trim().max(120).optional().or(z.literal("")),
  carrera: z.string().trim().max(80).optional().or(z.literal("")),
  ciclo: z.string().trim().max(60).optional().or(z.literal("")),
  // Honeypot: campo oculto que solo bots completan
  website: z.string().optional().or(z.literal("")),
});

export type Lead = z.infer<typeof leadSchema>;

/**
 * Normaliza el celular a formato E.164 sin "+" para usar con wa.me
 * Ej: "987 654 321" -> "51987654321"
 */
export function toWhatsAppNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("51") ? digits : `51${digits}`;
}
