import { WA_PHONE, ACADEMIA } from "./constants";

export function waUrl(text: string): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

export const MSG_DEFAULT = `Hola, vi la web de ${ACADEMIA} y quiero más información sobre el ciclo CEPRE UNAM.`;

export const msgReservaCiclo = (ciclo: string) =>
  `Hola, quiero reservar mi vacante en el ciclo ${ciclo} de ${ACADEMIA}.`;
