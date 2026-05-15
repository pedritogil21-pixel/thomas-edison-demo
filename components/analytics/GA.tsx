import Script from "next/script";

/**
 * Google Analytics 4 server component.
 *
 * - Lee NEXT_PUBLIC_GA_ID del env. Si no esta seteada, retorna null
 *   (no carga gtag, no enviar requests). Permite deploys seguros antes
 *   de que el cliente cree la propiedad GA4.
 * - Cuando se setea la env, los Scripts se inyectan en el HTML SSR
 *   y gtag queda disponible para los eventos custom de lib/analytics.ts
 */
export function GA() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
