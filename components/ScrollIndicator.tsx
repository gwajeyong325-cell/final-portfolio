"use client";

const TRACK_H = 110; // px — visible line height
const DOT_R = 9;     // px — dot radius

export default function ScrollIndicator({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const dotY = scrollProgress * TRACK_H;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        right: "clamp(16px, 2.5vw, 40px)",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        zIndex: 200,
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {/* Track + moving dot */}
      <div style={{ position: "relative", width: DOT_R * 2, height: TRACK_H + DOT_R * 2 }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: DOT_R,
            transform: "translateX(-50%)",
            width: "1px",
            height: TRACK_H,
            backgroundColor: "#C8C8C8",
          }}
        />
        {/* Dot */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: dotY,
            transform: "translateX(-50%)",
            width: DOT_R * 2,
            height: DOT_R * 2,
            borderRadius: "50%",
            backgroundColor: "#B33E5C",
            transition: "top 0.4s ease",
          }}
        />
      </div>

      {/* SCROLL text */}
      <p
        style={{
          marginTop: "12px",
          writingMode: "vertical-lr",
          fontSize: "clamp(9px, 0.75vw, 11px)",
          fontWeight: 500,
          letterSpacing: "0.22em",
          color: "#AAAAAA",
        }}
      >
        SCROLL
      </p>
    </div>
  );
}
