"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1.0] as const;
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PROJECTS = [
  {
    title: "CGV 랜딩페이지 리뉴얼",
    category: "WEB Design",
    thumbnail: `${BASE}/images/projects/pj1.png`,
    pdf: `${BASE}/images/projects/project1_cgv.pdf`,
  },
  {
    title: "계명대학교 수강신청 앱",
    category: "UX/UI Design",
    thumbnail: `${BASE}/images/projects/pj2.png`,
    pdf: `${BASE}/images/projects/project2_kmu.pdf`,
  },
  {
    title: "YES24 예매페이지 리뉴얼",
    category: "WEB Design",
    thumbnail: `${BASE}/images/projects/pj3.png`,
    pdf: `${BASE}/images/projects/project3_yes24.pdf`,
  },
];

function ProjectCard({
  title,
  category,
  thumbnail,
  pdf,
  delay,
}: {
  title: string;
  category: string;
  thumbnail: string;
  pdf: string;
  delay: number;
}) {
  return (
    <motion.a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} 프로젝트 열기`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease } as Transition}
      whileHover={{ scale: 1.02 }}
      style={{
        display: "block",
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Thumbnail — A4 portrait ratio (210:297) */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "210 / 297",
          borderRadius: "clamp(8px, 0.9vw, 14px)",
          overflow: "hidden",
          backgroundColor: "#D9D9D9",
          marginBottom: "clamp(10px, 1.4vh, 18px)",
        }}
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1440px) 40vw, 33vw"
        />
      </div>

      {/* Title + Badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 0.8vw, 14px)" }}>
        <span
          style={{
            fontWeight: 600,
            fontSize: "clamp(12px, 1vw, 15px)",
            color: "#231F20",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </span>
        <span
          style={{
            display: "inline-block",
            padding: "clamp(3px, 0.4vh, 5px) clamp(10px, 0.9vw, 16px)",
            borderRadius: "999px",
            backgroundColor: "#B33E5C",
            color: "#fff",
            fontWeight: 600,
            fontSize: "clamp(10px, 0.75vw, 12px)",
            letterSpacing: "0.03em",
            whiteSpace: "nowrap",
          }}
        >
          {category}
        </span>
      </div>
    </motion.a>
  );
}

export default function ProjectsSection({ onVisible }: { onVisible: () => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.closest("[data-scroll]") as HTMLElement | null;
    if (!el || !parent) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(); },
      { root: parent, threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100svh",
        scrollSnapAlign: "start",
        backgroundColor: "#F5F5F5",
        padding: "clamp(48px, 7vh, 80px) clamp(40px, 4.5vw, 72px) clamp(40px, 6vh, 72px)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease } as Transition}
        style={{
          fontWeight: 800,
          fontSize: "clamp(22px, 2.2vw, 34px)",
          letterSpacing: "0.04em",
          color: "#231F20",
          marginBottom: "clamp(28px, 4.5vh, 52px)",
        }}
      >
        PROJECTS
      </motion.h2>

      {/* 2-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "clamp(28px, 3.5vh, 48px) clamp(24px, 2.5vw, 40px)",
          maxWidth: "calc(100% - clamp(40px, 5vw, 80px))",
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} {...project} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
