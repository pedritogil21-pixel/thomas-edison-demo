export type Ciclo = {
  slug: string;
  tag: string;
  title: string;
  when: string;
  description: string;
  bullets: string[];
};

export const ciclos: Ciclo[] = [
  {
    slug: "cepre-unam-anual",
    tag: "5to secundaria",
    title: "CEPRE UNAM Anual",
    when: "Mar — Dic · turno tarde",
    description:
      "Ciclo anual de preparación intensiva para postulantes de 5to de secundaria que apuntan a UNAM Moquegua, UNSA Arequipa o UNJBG Tacna. Cubre Biomédicas, Ingenierías y Sociales con simulacros mensuales y orientación vocacional.",
    bullets: ["Áreas UNAM completas", "Simulacro mensual", "Orientación vocacional"],
  },
  {
    slug: "cepre-unam-intensivo",
    tag: "Egresados",
    title: "CEPRE UNAM Intensivo",
    when: "May — Ago · mañana",
    description:
      "Ciclo intensivo de 4 meses para egresados de secundaria que buscan ingreso en el examen ordinario UNAM. Balotario completo, tutoría individual semanal y simulacros tipo examen.",
    bullets: ["Preparación acelerada", "Balotario UNAM", "Tutoría individual"],
  },
  {
    slug: "ordinario-unam",
    tag: "Todos los niveles",
    title: "Ordinario UNAM",
    when: "Jul — Set",
    description:
      "Preparación focalizada en el examen ordinario UNAM con repasos por área (Biomédicas, Ingenierías, Sociales) y simulacros semanales calibrados al estilo del examen.",
    bullets: ["Enfoque al examen ordinario", "Repasos por área", "Simulacro cada semana"],
  },
  {
    slug: "verano-edison",
    tag: "Refuerzo",
    title: "Verano Edison",
    when: "Ene — Feb · vacacional",
    description:
      "Ciclo vacacional para reforzar Razonamiento Verbal, Matemática y Ciencias básicas. Ideal para estudiantes que entran a 5to de secundaria o quieren empezar el año con ventaja.",
    bullets: ["Razonamiento + Letras", "Ciencias básicas", "Hábitos de estudio"],
  },
];
