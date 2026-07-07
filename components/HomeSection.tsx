"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.25, 0.1, 0.25, 1.0] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease } as Transition,
});

export default function HomeSection({ onVisible }: { onVisible: () => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.closest("[data-scroll]") as HTMLElement | null;
    if (!el || !parent) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(); },
      { root: parent, threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        position: "relative",
        height: "100svh",
        scrollSnapAlign: "start",
        overflow: "hidden",
        backgroundColor: "#F5F5F5",
      }}
    >
      {/* ── Hero text ── */}
      <div
        style={{
          position: "absolute",
          top: "clamp(56px, 9vh, 96px)",
          left: "clamp(40px, 4.5vw, 72px)",
        }}
      >
        {/* Label */}
        <motion.span
          {...fadeUp(0.1)}
          style={{
            display: "block",
            fontWeight: 700,
            fontSize: "clamp(10px, 0.85vw, 13px)",
            letterSpacing: "0.13em",
            color: "#B33E5C",
            marginBottom: "clamp(8px, 1vh, 14px)",
          }}
        >
          UI/UX DESIGN
        </motion.span>

        {/* Name */}
        <motion.h2
          {...fadeUp(0.2)}
          style={{
            fontWeight: 800,
            fontSize: "clamp(44px, 5.2vw, 80px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#231F20",
            whiteSpace: "nowrap",
            marginBottom: "clamp(6px, 0.9vh, 12px)",
          }}
        >
          PARK SU YOUNG
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          style={{
            fontWeight: 400,
            fontSize: "clamp(16px, 1.7vw, 26px)",
            color: "#666",
            marginBottom: "clamp(20px, 3vh, 36px)",
          }}
        >
          2026 Designer Portfolio
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontWeight: 400,
            fontSize: "clamp(13px, 1.1vw, 17px)",
            lineHeight: 1.8,
            color: "#444",
          }}
        >
          사용자의 경험을 이해하고,
          <br />
          이유 있는 디자인을 만듭니다.
        </motion.p>
      </div>

      {/* ── Background "Portfolio" typography ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease } as Transition}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, 'Futura', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(180px, 18vw, 340px)",
            color: "#2B2B2B",
            letterSpacing: "-0.02em",
          }}
        >
          Portfolio
        </span>
      </motion.div>
    </section>
  );
}
