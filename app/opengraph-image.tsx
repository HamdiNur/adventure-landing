import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Freefall to Deep Blue — Skydiving & Scuba Diving";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background:
            "linear-gradient(to bottom, #EAF3F7 0%, #3E7CA6 45%, #0B3D3F 70%, #031A1F 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#FF6B4A",
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          🪂 Freefall to Deep Blue 🌊
        </div>
        <div
          style={{
            fontSize: 64,
            color: "white",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Freefall through sky. Sink into blue.
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)", marginTop: 30 }}>
          Tandem skydives from 6,000m · Reef dives to -40m
        </div>
      </div>
    ),
    { ...size }
  );
}