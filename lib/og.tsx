import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt =
  "Herock Nigeria Ltd. EPC and man power supply company. Port Harcourt.";

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a2350",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", width: "16px", background: "#e2231a" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", width: "88px", height: "8px", background: "#ffffff" }} />
          <div
            style={{
              display: "flex",
              marginTop: "36px",
              fontSize: 24,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9d6ea",
            }}
          >
            Port Harcourt
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "18px",
              fontSize: 68,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Herock Nigeria Ltd
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: 32,
              color: "#c9d6ea",
            }}
          >
            EPC and man power supply company
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
