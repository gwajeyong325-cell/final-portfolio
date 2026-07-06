"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollIndicator from "@/components/ScrollIndicator";

type Section = "home" | "about" | "projects";
const SECTIONS: Section[] = ["home", "about", "projects"];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setScrollProgress(progress);

      // Determine active section by scroll position
      const idx = Math.min(
        Math.round(scrollTop / clientHeight),
        SECTIONS.length - 1
      );
      setActiveSection(SECTIONS[idx]);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: Section) => {
    const container = scrollRef.current;
    const el = document.getElementById(id);
    if (!container || !el) return;
    container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Fixed sidebar */}
      <Sidebar activeSection={activeSection} onNavClick={scrollToSection} />

      {/* Scrollable content — pushed past sidebar via padding-left */}
      <div
        ref={scrollRef}
        data-scroll
        style={{
          position: "fixed",
          top: 0,
          left: "var(--sidebar-w)",
          right: 0,
          bottom: 0,
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          backgroundColor: "#F5F5F5",
        }}
      >
        <HomeSection onVisible={() => setActiveSection("home")} />
        <AboutSection onVisible={() => setActiveSection("about")} />
        <ProjectsSection onVisible={() => setActiveSection("projects")} />
      </div>

      {/* Fixed scroll indicator */}
      <ScrollIndicator scrollProgress={scrollProgress} />
    </>
  );
}
