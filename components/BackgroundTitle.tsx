"use client";

import { motion, Transition } from "framer-motion";

export default function BackgroundTitle() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] } as Transition}
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: "-20px",
        left: "18vw",
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(200px, 22vw, 320px)",
          color: "#2B2B2B",
          display: "inline-flex",
          alignItems: "baseline",
          letterSpacing: "-0.02em",
        }}
      >
        <span>Portfo</span>
        <span>l</span>
        {/* Custom 'i' with Wine Red dot */}
        <span style={{ position: "relative", display: "inline-block" }}>
          {/* Transparent 'i' preserves correct spacing */}
          <span style={{ color: "transparent" }}>i</span>
          {/* 'i' vertical stem */}
          <span
            style={{
              position: "absolute",
              bottom: "0.04em",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0.13em",
              height: "0.68em",
              backgroundColor: "#2B2B2B",
              display: "block",
            }}
          />
          {/* Wine Red dot */}
          <span
            style={{
              position: "absolute",
              top: "0.04em",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0.38em",
              height: "0.38em",
              borderRadius: "50%",
              backgroundColor: "#B33E5C",
              display: "block",
            }}
          />
        </span>
        <span>o</span>
      </span>
    </motion.div>
  );
}
