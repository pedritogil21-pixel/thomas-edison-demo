export type AreaKey = "biomedicas" | "ingenierias" | "sociales";

export type Area = {
  key: AreaKey;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  carrerasUnam: string[];
  carrerasRelacionadas?: string[];
};

/**
 * Las 3 grandes areas que prepara la academia, alineadas con
 * la oferta real de UNAM Moquegua (4 facultades, 11 programas).
 *
 * Fuente: https://www.unam.edu.pe (junio 2026)
 */
export const areas: Record<AreaKey, Area> = {
  biomedicas: {
    key: "biomedicas",
    name: "Biomédicas",
    emoji: "🩺",
    tagline: "Te llama cuidar y salvar vidas.",
    description:
      "Te interesa el cuerpo humano, la salud y aplicar ciencia para ayudar a otros. Sos empática/o, paciente y te imaginas trabajando con personas que necesitan apoyo.",
    carrerasUnam: ["Medicina (sede Moquegua)"],
    carrerasRelacionadas: [
      "Enfermería (UNJBG Tacna, UNSA Arequipa)",
      "Odontología (UNSA, UNJBG)",
      "Obstetricia",
      "Tecnología Médica",
    ],
  },
  ingenierias: {
    key: "ingenierias",
    name: "Ingenierías",
    emoji: "🛠️",
    tagline: "Diseñás, construís, hacés que las cosas funcionen.",
    description:
      "Te apasionan los números, la lógica y resolver problemas con tecnología. Te gusta entender cómo funcionan las cosas y dejar algo construido que dure.",
    carrerasUnam: [
      "Ingeniería de Minas (Moquegua)",
      "Ingeniería Civil (Moquegua)",
      "Ingeniería Agroindustrial (Moquegua)",
      "Ingeniería de Sistemas e Informática (Ilo)",
      "Ingeniería Ambiental (Ilo)",
      "Ingeniería Pesquera (Ilo)",
    ],
  },
  sociales: {
    key: "sociales",
    name: "Sociales y Gestión",
    emoji: "⚖️",
    tagline: "Lo tuyo son las personas, las leyes, los negocios.",
    description:
      "Te llama entender a la gente, las organizaciones y la sociedad. Te ves liderando equipos, negociando, defendiendo causas o gestionando recursos.",
    carrerasUnam: [
      "Gestión Pública y Desarrollo Social (Moquegua)",
      "Administración (Ilo)",
      "Contabilidad (Moquegua/Ilo)",
      "Derecho (Moquegua/Ilo)",
    ],
  },
};
