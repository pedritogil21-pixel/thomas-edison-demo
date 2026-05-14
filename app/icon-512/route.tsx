import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = { width: 512, height: 512 };

// 512x512 maskable icon. La carga maskable necesita un "safe zone"
// del 80% en el centro - dejamos margen para que el sistema
// pueda recortar circular o redondeado sin perder el "TE".
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f0f0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            background: "#f4c430",
            borderRadius: 80,
            color: "#0f0f0f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 220,
            fontWeight: 800,
            letterSpacing: -8,
          }}
        >
          TE
        </div>
      </div>
    ),
    {
      ...size,
      headers: { "Content-Type": "image/png" },
    },
  );
}
