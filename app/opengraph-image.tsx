import { ImageResponse } from "next/og";

export const alt = "Hafizu — Software Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "#FAFAFA",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(#E4E4E7 1px, transparent 1px), linear-gradient(90deg, #E4E4E7 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.4,
          }}
        />

        {/* Redline corner markers */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 20,
            height: 20,
            borderTop: "2px solid #B45309",
            borderLeft: "2px solid #B45309",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 20,
            height: 20,
            borderTop: "2px solid #B45309",
            borderRight: "2px solid #B45309",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            width: 20,
            height: 20,
            borderBottom: "2px solid #B45309",
            borderLeft: "2px solid #B45309",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 20,
            height: 20,
            borderBottom: "2px solid #B45309",
            borderRight: "2px solid #B45309",
          }}
        />

        {/* Sheet label */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center" }}>
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.14em",
              color: "#737373",
              textTransform: "uppercase",
            }}
          >
            Sheet 01 / Intro
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 10px",
              border: "1px solid #F5CBB8",
              background: "#FDF2F0",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "#B45309",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#B45309",
                display: "flex",
              }}
            />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: 900,
            fontSize: 72,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "#141414",
            textTransform: "uppercase",
          }}
        >
          <span>MUHD</span>
          <span>HAFIZUDDIN</span>
        </div>

        {/* Rule */}
        <div
          style={{
            width: "100%",
            height: 3,
            background: "#141414",
            marginTop: 16,
            marginBottom: 16,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: 16,
              letterSpacing: "0.06em",
              color: "#737373",
              textTransform: "uppercase",
            }}
          >
            Software Engineering Student
          </span>
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.1em",
              color: "#737373",
            }}
          >
            hafizu.dev
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
