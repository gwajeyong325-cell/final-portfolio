"use client";

import { motion, Transition } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } as Transition}
      style={{
        position: "absolute",
        top: "5.3vh",
        left: "5.5vw",
        right: "5.5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: "clamp(12px, 1.1vw, 16px)",
          letterSpacing: "0.02em",
          color: "#1A1A1A",
        }}
      >
        PARK SU YOUNG
      </span>
      <span
        style={{
          fontWeight: 500,
          fontSize: "clamp(12px, 1.1vw, 16px)",
          letterSpacing: "0.02em",
          color: "#1A1A1A",
        }}
      >
        2026 H1
      </span>
    </motion.header>
  );
}
