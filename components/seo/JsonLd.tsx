type Props = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Inyecta JSON-LD como `<script type="application/ld+json">`.
 * Server component (no "use client") — el JSON se renderiza en el HTML
 * inicial para que crawlers lo lean sin ejecutar JS.
 */
export function JsonLd({ data }: Props) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // El JSON ya esta sanitizado por JSON.stringify; no hay user input.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
