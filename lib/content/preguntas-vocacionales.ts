import type { AreaKey } from "./areas";

/**
 * Una pregunta del test vocacional.
 *
 * Cada `option` puede sumar puntos a una o varias areas (objeto parcial
 * con AreaKey -> puntos). Las puntuaciones tipicas:
 *  - 2 puntos = señal fuerte hacia un area
 *  - 1 punto = señal moderada o compartida entre 2 areas
 */
export type Option = {
  label: string;
  scores: Partial<Record<AreaKey, number>>;
};

export type Question = {
  id: string;
  text: string;
  options: [Option, Option, Option, Option];
};

export const preguntas: Question[] = [
  {
    id: "q1-colegio",
    text: "En el colegio, ¿en qué tipo de tarea te sentías más cómoda/o?",
    options: [
      { label: "Disecciones, experimentos de biología o laboratorio",
        scores: { biomedicas: 2 } },
      { label: "Resolver problemas largos de matemática o física",
        scores: { ingenierias: 2 } },
      { label: "Exposiciones, debates, ensayos de comunicación",
        scores: { sociales: 2 } },
      { label: "Cualquiera donde te dejaban liderar al grupo",
        scores: { sociales: 1, ingenierias: 1 } },
    ],
  },
  {
    id: "q2-primer-dia-trabajo",
    text: "Imagina tu primer día de trabajo. ¿Qué te emocionaría más?",
    options: [
      { label: "Atender a alguien que llega necesitando ayuda urgente",
        scores: { biomedicas: 2 } },
      { label: "Diseñar el plano de un edificio o un sistema técnico",
        scores: { ingenierias: 2 } },
      { label: "Negociar un acuerdo o defender un caso importante",
        scores: { sociales: 2 } },
      { label: "Coordinar un equipo para un proyecto del Estado",
        scores: { sociales: 1, ingenierias: 1 } },
    ],
  },
  {
    id: "q3-materia-favorita",
    text: "¿Qué materia del colegio te apasionó (o te apasiona) más?",
    options: [
      { label: "Biología, anatomía, química orgánica",
        scores: { biomedicas: 2 } },
      { label: "Matemática, física, dibujo técnico",
        scores: { ingenierias: 2 } },
      { label: "Comunicación, historia, economía, cívica",
        scores: { sociales: 2 } },
      { label: "Computación y programación",
        scores: { ingenierias: 1, sociales: 1 } },
    ],
  },
  {
    id: "q4-personalidad",
    text: "¿Con cuál de estas descripciones te identificás más?",
    options: [
      { label: "Empática, paciente, le gusta cuidar a la gente",
        scores: { biomedicas: 2 } },
      { label: "Lógica/o, ordenada/o, le gusta entender cómo funcionan las cosas",
        scores: { ingenierias: 2 } },
      { label: "Comunicativa/o, persuasiva/o, líder natural",
        scores: { sociales: 2 } },
      { label: "Curiosa/o, le gusta investigar sola/o",
        scores: { biomedicas: 1, ingenierias: 1 } },
    ],
  },
  {
    id: "q5-contenido",
    text: "¿Qué tipo de contenido consumís más en YouTube o Netflix?",
    options: [
      { label: "Documentales de salud, ciencia o biología (cuerpo humano, descubrimientos médicos)",
        scores: { biomedicas: 2 } },
      { label: "Tutoriales de tecnología, autos, construcción o cómo se fabrican las cosas",
        scores: { ingenierias: 2 } },
      { label: "Política, derecho, finanzas o casos legales",
        scores: { sociales: 2 } },
      { label: "Emprendimiento, marketing o vlogs personales",
        scores: { sociales: 1, ingenierias: 1 } },
    ],
  },
  {
    id: "q6-visita-moquegua",
    text: "Si te dieran una visita guiada en Moquegua, ¿cuál preferirías?",
    options: [
      { label: "El Hospital Regional para ver cómo trabajan los médicos",
        scores: { biomedicas: 2 } },
      { label: "Una obra de construcción, una mina activa o un puerto en Ilo",
        scores: { ingenierias: 2 } },
      { label: "La Municipalidad, un juzgado o la Corte Superior",
        scores: { sociales: 2 } },
      { label: "Una empresa exportadora local (palta, aceituna, pisco)",
        scores: { sociales: 1, ingenierias: 1 } },
    ],
  },
  {
    id: "q7-motivacion",
    text: "¿Qué te motivaría más al elegir tu carrera?",
    options: [
      { label: "Salvar vidas o mejorar la salud de la gente",
        scores: { biomedicas: 2 } },
      { label: "Construir cosas concretas que duren décadas",
        scores: { ingenierias: 2 } },
      { label: "Cambiar leyes, instituciones o cómo se gobierna",
        scores: { sociales: 2 } },
      { label: "Generar ingresos con un emprendimiento propio",
        scores: { sociales: 1, ingenierias: 1 } },
    ],
  },
  {
    id: "q8-proyecto",
    text: "¿Qué tipo de proyecto te encantaría liderar algún día?",
    options: [
      { label: "Una campaña de salud rural en zonas alejadas de Moquegua",
        scores: { biomedicas: 2 } },
      { label: "Una app, un sistema o una obra de infraestructura grande",
        scores: { ingenierias: 2 } },
      { label: "Una iniciativa para mejorar la administración pública",
        scores: { sociales: 2 } },
      { label: "Tu propio emprendimiento o negocio familiar",
        scores: { sociales: 1, ingenierias: 1 } },
    ],
  },
];

export const TOTAL_PREGUNTAS = preguntas.length;
