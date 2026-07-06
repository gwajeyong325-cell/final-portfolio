"use client";

import { motion, Transition } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
  const isActive = active;
  const color = isActive || hovered ? "#B33E5C" : "#1A1A1A";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        { duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] } as Transition
      }
    >
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "0.08em",
            color,
            transition: "color 0.3s ease",
          }}
        >
          {label}
        </span>
        <motion.span
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] } as Transition}
          style={{
            fontSize: "18px",
            color,
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
    <nav style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      {navItems.map((item, index) => (
        <NavItem key={item.label} {...item} index={index} />
      ))}
    </nav>
  );
}
