"use client";

import { motion, Transition } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const ease = [0.25, 0.1, 0.25, 1.0] as const;

const navItems = [
  { label: "ABOUT ME", href: "/about", active: false },
  { label: "PROJECTS", href: "/projects", active: true },
  { label: "CONTACT", href: "#contact", active: false },
];

function NavItem({
  label,
  href,
  active,
  index,
}: {
  label: string;
  href: string;
  active: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const isWine = active || hovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease } as Transition}
    >
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(20px, 2.2vw, 32px)",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "clamp(11px, 0.95vw, 14px)",
            letterSpacing: "0.09em",
            color: isWine ? "#B33E5C" : "#1A1A1A",
            transition: "color 0.3s ease",
          }}
        >
          {label}
        </span>
        <motion.span
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.3, ease } as Transition}
          style={{
            fontSize: "clamp(13px, 1.1vw, 17px)",
            color: isWine ? "#B33E5C" : "#1A1A1A",
            transition: "color 0.3s ease",
            display: "inline-block",
          }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}

export default function NavigationMenu() {
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "2.8vh" }}>
      {navItems.map((item, index) => (
        <NavItem key={item.label} {...item} index={index} />
      ))}
    </nav>
  );
}
