/* eslint-disable @next/next/no-img-element -- ImageResponse renders plain <img>, not next/image. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt =
  "Herock Nigeria Ltd. EPC and man power supply company. Port Harcourt, since 1993.";

// Logo, photo and fonts are kept outside public/ so they only feed the share image.
// Literal paths let the build trace these files into the deployed function.

const navy = "#0a2350";
const red = "#e2231a";
const blue = "#1446a0";

export async function createOgImage() {
  const [logo, photo, display, body] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/logo.png")),
    readFile(join(process.cwd(), "assets/og/site-team.jpg")),
    readFile(join(process.cwd(), "assets/og/archivo-condensed-600.ttf")),
    readFile(join(process.cwd(), "assets/og/archivo-500.ttf")),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", fontFamily: "Archivo" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "640px",
            height: "100%",
            padding: "56px 64px 0",
          }}
        >
          <img
            src={`data:image/png;base64,${logo.toString("base64")}`}
            width={170}
            height={175}
            alt=""
            style={{ marginLeft: "-8px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Archivo Condensed",
                fontSize: 72,
                lineHeight: 0.98,
                letterSpacing: "-0.01em",
                color: navy,
              }}
            >
              EPC and man power supply company
            </div>
            <div style={{ display: "flex", marginTop: "24px", fontSize: 28, color: blue }}>
              Port Harcourt, since 1993
            </div>
          </div>
          <div style={{ display: "flex", height: "56px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", width: "120px", height: "12px", background: red }} />
            <div style={{ display: "flex", width: "120px", height: "12px", background: blue }} />
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", width: "560px", height: "100%" }}>
          <img
            src={`data:image/jpeg;base64,${photo.toString("base64")}`}
            width={560}
            height={630}
            alt=""
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 0,
              top: 0,
              width: "14px",
              height: "100%",
              background: red,
            }}
          />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Archivo Condensed", data: display, weight: 600, style: "normal" },
        { name: "Archivo", data: body, weight: 500, style: "normal" },
      ],
    },
  );
}
