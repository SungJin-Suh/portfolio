import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "David Suh — Software Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f172a",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: "#e2e8f0" }}>
          David (SungJin) Suh
        </div>
        <div style={{ fontSize: 36, color: "#5eead4", marginTop: 16 }}>
          Software Developer
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            marginTop: 36,
            maxWidth: 940,
            lineHeight: 1.4,
          }}
        >
          I build web and mobile apps that make complicated things feel simple.
        </div>
        <div style={{ fontSize: 24, color: "#64748b", marginTop: 44 }}>
          Vancouver, BC · david-suh.vercel.app
        </div>
      </div>
    ),
    size,
  );
}