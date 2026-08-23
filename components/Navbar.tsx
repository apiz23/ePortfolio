"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";

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
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <nav className="flex items-center justify-between h-14" aria-label="Site navigation">
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToId("home"); }}
            className="font-display text-lg tracking-[-0.02em] text-foreground hover:text-purple-500 transition-colors"
            aria-label="Back to top"
          >
            HF<span className="text-purple-500">.</span>
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
                  className={`relative px-3 py-1.5 text-xs font-mono uppercase tracking-[0.12em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "text-purple-500"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-purple-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="sm:hidden text-muted-foreground hover:text-foreground transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
        <DrawerContent className="border-t border-edge">
          <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
          <div className="px-6 py-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = active === id;
                return (
                  <button
                    key={href}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      requestAnimationFrame(() => scrollToId(id));
                    }}
                    className={`text-left w-full py-3 px-3 font-display text-xl tracking-[-0.02em] transition-all min-h-[44px] relative ${
                      isActive
                        ? "text-purple-500"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-purple-500 rounded-full" />
                    )}
                    {label}
                  </button>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="my-4 h-px bg-edge" />

            {/* Social links */}
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/apiz23"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-purple-500 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/muh-hafizuddin"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-purple-500 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </motion.header>
  );
}