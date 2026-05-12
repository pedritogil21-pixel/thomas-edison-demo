# Academia Thomas Edison · Landing

Sitio preuniversitario de Academia Thomas Edison (Moquegua, Perú). Next.js 15 App Router + Tailwind v4 + TypeScript.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy

Push a `main` → deploy automático a Vercel (proyecto `thomas`).

## Variables de entorno

Configuradas en Vercel → Settings → Environment Variables:

| Variable | Uso |
|---|---|
| `RESEND_API_KEY` | Envío del formulario de inscripción |
| `RESEND_FROM` | Remitente (por defecto `onboarding@resend.dev`) |
| `RESEND_TO` | Destinatario de leads |
| `NEXT_PUBLIC_SITE_URL` | URL canónica para SEO/sitemap |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |

## Estructura

```
app/             rutas y layout
components/      secciones UI
lib/             constantes + helpers
public/          imágenes (logo, fotos)
```
