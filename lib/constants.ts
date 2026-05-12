export const ACADEMIA = "Academia Preuniversitaria Thomas Edison";
export const ACADEMIA_SHORT = "Thomas Edison";
export const TAGLINE = "Te preparamos para el éxito";

export const WA_PHONE = "51953631118";
export const WA_PHONE_DISPLAY = "+51 953 631 118";

export const EMAIL = "elichur@gmail.com";

export const DIRECCION = {
  street: "C. Moquegua 360",
  locality: "Moquegua",
  region: "Moquegua",
  country: "PE",
  latitude: -17.1946186,
  longitude: -70.9363695,
  placeId: "ChIJSThjcFGdRJEROZk4G6NBRNA",
} as const;

export const HORARIO_DISPLAY = "L-V 8:30am-8pm · Sáb 8am-8:30pm · Dom 8am-12:30pm";

export const HORARIO_SCHEMA = [
  { days: ["Mo", "Tu", "We", "Th", "Fr"], opens: "08:30", closes: "20:00" },
  { days: ["Sa"], opens: "08:00", closes: "20:30" },
  { days: ["Su"], opens: "08:00", closes: "12:30" },
] as const;

export const ANIO_FUNDACION = 2018;
