"use client";

import { motion, Transition } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1.0] as const;

export default function EmailSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.0, ease } as Transition}
      style={{
        position: "absolute",
        bottom: "21vh",
        left: "5.5vw",
      }}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: "clamp(9px, 0.8vw, 12px)",
          letterSpacing: "0.1em",
          color: "#999999",
          marginBottom: "0.5vh",
        }}
      >
        EMAIL
      </p>
      <p
        style={{
          fontWeight: 400,
          fontSize: "clamp(10px, 0.85vw, 13px)",
          color: "#666666",
          letterSpacing: "0",
        }}
      >
        piaoxiuying03@gmail.com
      </p>
    </motion.div>
  );
}
