"use client";

import { motion, Transition } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } as Transition}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "48px",
        paddingLeft: "80px",
        paddingRight: "80px",
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: "16px",
          letterSpacing: "0.02em",
          color: "#1A1A1A",
        }}
      >
        PARK SU YOUNG
      </span>
      <span
        style={{
          fontWeight: 500,
          fontSize: "16px",
          letterSpacing: "0.02em",
          color: "#1A1A1A",
        }}
      >
        2026 H1
      </span>
    </motion.header>
  );
}
