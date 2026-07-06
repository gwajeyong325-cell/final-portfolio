"use client";

import { motion, Transition } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1.0] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease } as Transition,
});

export default function HeroSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* UI/UX DESIGN */}
      <motion.span
        {...fadeUp(0.15)}
        style={{
          display: "block",
          fontWeight: 700,
          fontSize: "clamp(10px, 0.85vw, 13px)",
          letterSpacing: "0.12em",
          color: "#B33E5C",
          marginBottom: "1.2vh",
        }}
      >
        UI/UX DESIGN
      </motion.span>

      {/* PARK SU YOUNG */}
      <motion.h1
        {...fadeUp(0.25)}
        style={{
          fontWeight: 700,
          fontSize: "clamp(36px, 5vw, 76px)",
          lineHeight: 1.05,
          color: "#1A1A1A",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          marginBottom: "1vh",
        }}
      >
        PARK SU YOUNG
      </motion.h1>

      {/* Designer Portfolio */}
      <motion.p
        {...fadeUp(0.35)}
        style={{
          fontWeight: 500,
          fontSize: "clamp(16px, 2.2vw, 32px)",
          color: "#666666",
          marginBottom: "2.5vh",
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
          fontSize: "clamp(13px, 1.15vw, 17px)",
          lineHeight: 1.8,
          color: "#333333",
        }}
      >
        사용자의 경험을 이해하고,
        <br />
        이유 있는 디자인을 만듭니다.
      </motion.p>

      {/* Spacer */}
      <div style={{ height: "6vh" }} />

      {/* Wine Red line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.55, delay: 0.5, ease } as Transition}
        style={{
          width: "clamp(48px, 4.9vw, 70px)",
          height: "2px",
          backgroundColor: "#B33E5C",
          marginBottom: "3.5vh",
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
