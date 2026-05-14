import { ImageResponse } from "next/og";
import { ACADEMIA_SHORT, DIRECCION, ANIO_FUNDACION } from "@/lib/constants";

export const runtime = "edge";

export const alt = "Academia Preuniversitaria Thomas Edison · Preparación UNAM Moquegua";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 60%, #0f0f0f 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow amarillo decorativo arriba-izquierda */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle, rgba(244,196,48,0.28) 0%, rgba(244,196,48,0) 70%)",
            display: "flex",
          }}
        />
        {/* Glow amarillo decorativo abajo-derecha */}
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -100,
            width: 440,
            height: 440,
            background:
              "radial-gradient(circle, rgba(244,196,48,0.20) 0%, rgba(244,196,48,0) 70%)",
            display: "flex",
          }}
        />

        {/* Top: branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#f4c430",
              color: "#0f0f0f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            TE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: 22,
                color: "#f4c430",
                fontWeight: 800,
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              {ACADEMIA_SHORT}
            </div>
            <div
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 500,
              }}
            >
              Academia preuniversitaria · Moquegua, Perú
            </div>
          </div>
        </div>

        {/* Middle: main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            Descubre tu vocación.
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
              color: "#f4c430",
              display: "flex",
            }}
          >
            Ingresa a la UNAM.
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.75,
              marginTop: 16,
              fontWeight: 500,
              display: "flex",
            }}
          >
            Preparación intensiva · Biomédicas, Ingenierías y Sociales
          </div>
        </div>

        {/* Bottom: trust strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(244,196,48,0.35)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 36,
              fontSize: 22,
              color: "rgba(255,255,255,0.78)",
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex" }}>
              📍 {DIRECCION.street}
            </div>
            <div style={{ display: "flex" }}>
              Desde {ANIO_FUNDACION}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              color: "#f4c430",
              fontWeight: 800,
            }}
          >
            ⭐ 5★ en Google
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
