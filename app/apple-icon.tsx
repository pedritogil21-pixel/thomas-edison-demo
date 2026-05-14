import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4c430",
          color: "#0f0f0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 100,
          fontWeight: 800,
          letterSpacing: -4,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        TE
      </div>
    ),
    { ...size },
  );
}
