"use client";

type Section = "home" | "about" | "projects";

const NAV: { id: Section; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "projects", label: "PROJECTS" },
];

export default function Sidebar({
  activeSection,
  onNavClick,
}: {
  activeSection: Section;
  onNavClick: (id: Section) => void;
}) {
  return (
    <aside
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "var(--sidebar-w)",
        height: "100svh",
        backgroundColor: "#F5F5F5",
        borderRight: "1px solid #DEDEDE",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(32px, 4.5vh, 52px) clamp(20px, 2.2vw, 36px)",
        zIndex: 100,
      }}
    >
      {/* ── Name ── */}
      <div>
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(22px, 2.4vw, 34px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#231F20",
            marginBottom: "clamp(20px, 2.8vh, 36px)",
          }}
        >
          PARK
          <br />
          SU
          <br />
          YOUNG
        </h1>

        {/* Wine-red separator */}
        <div
          style={{
            width: "clamp(60px, 5.5vw, 90px)",
            height: "1.5px",
            backgroundColor: "#B33E5C",
          }}
        />
      </div>

      {/* ── Navigation ── */}
      <nav
        aria-label="Main navigation"
        style={{ display: "flex", flexDirection: "column", gap: "clamp(36px, 7vh, 80px)" }}
      >
        {NAV.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onNavClick(id)}
            aria-label={`${label} 섹션으로 이동`}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textAlign: "left",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: "clamp(11px, 0.95vw, 15px)",
              letterSpacing: "0.1em",
              color: activeSection === id ? "#B33E5C" : "#231F20",
              transition: "color 0.3s ease",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* ── Contact ── */}
      <div>
        <p
          style={{
            fontWeight: 700,
            fontSize: "clamp(10px, 0.82vw, 13px)",
            letterSpacing: "0.1em",
            color: "#B33E5C",
            marginBottom: "0.6vh",
          }}
        >
          CONTACT
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(10px, 0.82vw, 13px)",
            color: "#888",
            letterSpacing: "0",
          }}
        >
          piaoxiuying03@gmail.com
        </p>
      </div>
    </aside>
  );
}
