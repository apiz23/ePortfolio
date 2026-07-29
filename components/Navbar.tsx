"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = [
  { id: "home" },
  { id: "skills" },
  { id: "education" },
  { id: "experience" },
  { id: "projects" },
  { id: "contact" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-edge"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <nav className="flex items-center justify-between h-14" aria-label="Site navigation">
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToId("home"); }}
            className="font-display text-lg tracking-[-0.02em] text-foreground hover:text-lime-400 transition-colors"
            aria-label="Back to top"
          >
            HF<span className="text-lime-400">.</span>
          </Link>

          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollToId(id); }}
                  className={`relative px-3 py-1.5 text-xs font-mono uppercase tracking-[0.12em] transition-all ${
                    isActive
                      ? "text-lime-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-lime-400"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="sm:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden border-b border-edge bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
              {navLinks.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = active === id;
                return (
                  <button
                    key={href}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => scrollToId(id), 200);
                    }}
                    className={`text-left w-full py-2.5 font-display text-xl tracking-[-0.02em] transition-colors ${
                      isActive ? "text-lime-400" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}