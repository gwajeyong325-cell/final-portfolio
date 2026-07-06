"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.25, 0.1, 0.25, 1.0] as const;

const CHAR_FONT = "'Abhaya Libre', 'Noto Serif SC', 'Noto Serif KR', serif";

export default function AboutSection({ onVisible }: { onVisible: () => void }) {
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
      id="about"
      ref={ref}
      style={{
        position: "relative",
        height: "100svh",
        scrollSnapAlign: "start",
        overflow: "hidden",
        backgroundColor: "#F5F5F5",
      }}
    >
      {/* ── Text block ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease } as Transition}
        style={{
          position: "absolute",
          top: "clamp(48px, 8vh, 80px)",
          left: "clamp(40px, 4.5vw, 72px)",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(22px, 2.2vw, 34px)",
            letterSpacing: "0.04em",
            color: "#231F20",
            marginBottom: "0.5vh",
          }}
        >
          ABOUT ME
        </h2>
        <p
          style={{
            fontWeight: 600,
            fontSize: "clamp(13px, 1.1vw, 17px)",
            color: "#231F20",
            marginBottom: "1.4vh",
          }}
        >
          박수영(2004~)
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(13px, 1.05vw, 16px)",
            lineHeight: 1.75,
            color: "#555",
          }}
        >
          이름의 '秀'를 향해
          <br />
          끊임없이 고민합니다.
        </p>
      </motion.div>

      {/* ── 秀 Layer 3 — bottom-left outline (largest) ── */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-12%",
          left: "-8%",
          fontFamily: CHAR_FONT,
          fontWeight: 800,
          fontSize: "clamp(440px, 55vw, 760px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "2.5px #B33E5C",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        秀
      </span>

      {/* ── 秀 Layer 2 — filled center ── */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "14%",
          left: "18%",
          fontFamily: CHAR_FONT,
          fontWeight: 800,
          fontSize: "clamp(340px, 42vw, 580px)",
          lineHeight: 1,
          color: "#231F20",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        秀
      </span>

      {/* ── 秀 Layer 1 — top-right outline ── */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-18%",
          right: "-10%",
          fontFamily: CHAR_FONT,
          fontWeight: 800,
          fontSize: "clamp(440px, 55vw, 760px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "2.5px #B33E5C",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        秀
      </span>

      {/* ── Caption ── */}
      <p
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "clamp(20px, 3.5vh, 44px)",
          right: "clamp(40px, 5vw, 80px)",
          fontWeight: 400,
          fontSize: "clamp(11px, 0.9vw, 14px)",
          color: "#231F20",
          letterSpacing: "0.04em",
          zIndex: 10,
        }}
      >
        : 빼어날 '수'
      </p>
    </section>
  );
}
