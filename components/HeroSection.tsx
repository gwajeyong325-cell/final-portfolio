"use client";

import { motion, Transition } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.25, 0.1, 0.25, 1.0],
  } as Transition,
});

export default function HeroSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* UI/UX DESIGN label */}
      <motion.span
        {...fadeUp(0.15)}
        style={{
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "0.12em",
          color: "#B33E5C",
          marginBottom: "16px",
          display: "block",
        }}
      >
        UI/UX DESIGN
      </motion.span>

      {/* Name - Large */}
      <motion.h1
        {...fadeUp(0.25)}
        style={{
          fontWeight: 700,
          fontSize: "clamp(52px, 5.5vw, 80px)",
          lineHeight: 1.05,
          color: "#1A1A1A",
          letterSpacing: "-0.01em",
          marginBottom: "12px",
        }}
      >
        PARK SU YOUNG
      </motion.h1>

      {/* Designer Portfolio subtitle */}
      <motion.p
        {...fadeUp(0.35)}
        style={{
          fontWeight: 500,
          fontSize: "clamp(22px, 2.4vw, 32px)",
          color: "#666666",
          marginBottom: "28px",
          letterSpacing: "0",
        }}
      >
        Designer Portfolio
      </motion.p>

      {/* Description */}
      <motion.p
        {...fadeUp(0.45)}
        style={{
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: 1.8,
          color: "#333333",
        }}
      >
        사용자의 경험을 이해하고,
        <br />
        이유 있는 디자인을 만듭니다.
      </motion.p>

      {/* Spacer */}
      <div style={{ height: "72px" }} />

      {/* Wine Red horizontal line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1.0] } as Transition}
        style={{
          width: "70px",
          height: "2px",
          backgroundColor: "#B33E5C",
          marginBottom: "48px",
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
