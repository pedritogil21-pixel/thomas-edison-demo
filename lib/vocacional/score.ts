import type { AreaKey } from "@/lib/content/areas";
import { areas } from "@/lib/content/areas";
import { preguntas } from "@/lib/content/preguntas-vocacionales";

export type Respuestas = Record<string, number>; // questionId -> optionIndex (0-3)

export type AreaScore = {
  area: AreaKey;
  points: number;
  pct: number; // 0-100
};

/**
 * Calcula puntos por area a partir de las respuestas, devuelve top-2.
 *
 * Si hay empate exacto entre 2 areas para el primer puesto, se respeta
 * el orden definido (biomedicas > ingenierias > sociales) para
 * desempatar de forma deterministica.
 */
export function scoreRespuestas(respuestas: Respuestas): AreaScore[] {
  const totals: Record<AreaKey, number> = {
    biomedicas: 0,
    ingenierias: 0,
    sociales: 0,
  };

  for (const q of preguntas) {
    const optIdx = respuestas[q.id];
    if (optIdx === undefined) continue;
    const option = q.options[optIdx];
    if (!option) continue;
    for (const [k, pts] of Object.entries(option.scores)) {
      const key = k as AreaKey;
      totals[key] = (totals[key] ?? 0) + (pts ?? 0);
    }
  }

  const max = Math.max(totals.biomedicas, totals.ingenierias, totals.sociales, 1);

  return (Object.keys(totals) as AreaKey[])
    .map((area) => ({
      area,
      points: totals[area],
      pct: Math.round((totals[area] / max) * 100),
    }))
    .sort((a, b) => b.points - a.points);
}

/**
 * Top 2 areas. La segunda solo cuenta si tiene >= 50% del puntaje de la primera
 * (sino, solo retorna 1 area para no diluir el mensaje).
 */
export function topAreas(respuestas: Respuestas): AreaScore[] {
  const sorted = scoreRespuestas(respuestas);
  if (sorted.length === 0) return [];
  const first = sorted[0]!;
  if (first.points === 0) return [];
  const second = sorted[1];
  if (second && second.points >= first.points * 0.5) {
    return [first, second];
  }
  return [first];
}

export function getArea(key: AreaKey) {
  return areas[key];
}
