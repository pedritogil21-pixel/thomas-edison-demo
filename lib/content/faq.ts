export type FaqItem = {
  q: string;
  a: string;
};

/**
 * FAQs aprobadas por el cliente. Las respuestas estan redactadas
 * en tono cercano y honesto: cuando no tenemos info exacta (precios,
 * fechas), invitamos a coordinar por WhatsApp en vez de inventar.
 */
export const faq: FaqItem[] = [
  {
    q: "¿Para qué universidades preparan?",
    a: "Nuestro foco principal es UNAM Moquegua (Universidad Nacional de Moquegua) en sus 11 carreras de Biomédicas, Ingenierías y Sociales. También preparamos para UNSA Arequipa y UNJBG Tacna, así que si tu plan B es esas universidades estás cubierto.",
  },
  {
    q: "¿Cuándo empieza el próximo ciclo?",
    a: "Manejamos 4 ciclos al año: Verano (Ene-Feb), CEPRE Anual (Mar-Dic), CEPRE Intensivo (May-Ago) y Ordinario (Jul-Set). Las fechas exactas de inicio del próximo ciclo y las vacantes disponibles te las confirmamos por WhatsApp al 953 631 118.",
  },
  {
    q: "¿Cuánto cuesta la matrícula y la pensión?",
    a: "Los precios varían según el ciclo (Anual, Intensivo, Ordinario o Verano) y el momento del año en que te inscribes (hay descuento por matrícula temprana). Como referencia, las pensiones mensuales de academias preuniversitarias en Moquegua rondan entre S/250 y S/450. Los precios vigentes los confirmamos al momento de la matrícula.",
  },
  {
    q: "¿Aceptan pago en cuotas?",
    a: "Sí. Coordinamos un plan de pagos mensual o quincenal según el ciclo y tu situación. Lo conversamos directamente al momento de matricularte.",
  },
  {
    q: "¿Cuántos alumnos hay por aula?",
    a: "Trabajamos con grupos chicos (en general de 15 a 25 alumnos por aula). Es una decisión deliberada: nuestro modelo se basa en que el docente conozca a cada estudiante y siga su avance semana a semana.",
  },
  {
    q: "¿Hacen simulacros tipo UNAM?",
    a: "Sí. En todos los ciclos hacemos simulacros calibrados al estilo del examen ordinario UNAM (mismos tipos de pregunta, áreas y tiempos). Después de cada simulacro revisamos resultados por alumno para reforzar lo que falló.",
  },
  {
    q: "¿Qué pasa si entro tarde al ciclo?",
    a: "Te recibimos. Coordinamos sesiones de nivelación individuales para que te pongas al día con el grupo, sin costo extra durante las primeras semanas. La idea es que nadie quede atrás por entrar después.",
  },
  {
    q: "¿Dan material de estudio o hay que comprarlo aparte?",
    a: "El material Edison (separatas, balotario UNAM, hojas de práctica y simulacros) está incluido en la pensión. No hay costos ocultos por libros o copias.",
  },
  {
    q: "¿Hacen un test vocacional antes de matricularme?",
    a: "Sí, es gratuito. Podés hacer la versión online en 2 minutos desde nuestro test vocacional. Si querés profundizar, coordinamos una sesión 1 a 1 con un docente guía antes de que decidas el ciclo.",
  },
  {
    q: "¿Dónde están ubicados y cómo llego?",
    a: "Estamos en C. Moquegua 360, en pleno centro de Moquegua. Hay paraderos a media cuadra y librerías cerca. Si tomás combi o moto desde fuera del centro, cualquier conductor sabe dónde queda 'Calle Moquegua altura del 360'.",
  },
];
