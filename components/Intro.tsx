"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import { EASE_OUT_EXPO } from "@/lib/animations";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 80]
  );
  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.5]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -30]
  );
  const decorY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 120]
  );
  const decorOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0.15, 0.15, 0.15] : [0.15, 0.08, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        style={{ y: decorY, opacity: decorOpacity }}
        className="absolute top-1/4 -right-20 w-[300px] h-[300px] border border-edge/30 rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: decorY, opacity: decorOpacity }}
        className="absolute bottom-1/4 -left-16 w-[200px] h-[200px] border border-edge/20 rounded-full pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,hsl(var(--lime)/0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-60" />

      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex min-h-[80vh]">
          {/* Left text content */}
          <motion.div
            style={{ y: scrollY, opacity: scrollOpacity }}
            className="relative z-10 flex-1 max-w-xl py-12"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-lime-400" />
              <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-lime-400">
                Software Engineering Student
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT_EXPO }}
              className="font-display leading-[0.95] text-foreground"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              <span className="block">MUHD</span>
              <span className="block text-foreground">
                HAFIZUDDIN
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: EASE_OUT_EXPO }}
              className="text-[17px] text-muted-foreground leading-[1.65] max-w-[45ch] mt-5"
            >
              Final-year Software Engineering student at UTHM Malaysia. Full-stack
              developer building production-grade systems with Next.js, TypeScript,
              and PostgreSQL.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE_OUT_EXPO }}
              className="flex gap-8 mt-8"
            >
              <div>
                <span className="font-display text-[2.5rem] text-foreground leading-none">12+</span>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-1.5">Projects</p>
              </div>
              <div>
                <span className="font-display text-[2.5rem] text-foreground leading-none">1yr</span>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-1.5">Experience</p>
              </div>
              <div>
                <span className="font-display text-[2.5rem] text-lime-400 leading-none">Open</span>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-1.5">For Work</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE_OUT_EXPO }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 bg-lime-400 text-[#0a0a0a] font-mono text-[12px] uppercase tracking-[0.08em] px-5 py-3 hover:bg-lime-300 transition-colors"
              >
                View My Work ↓
              </Link>
              <Link
                href="https://docs.google.com/document/d/1SsIiM2VCZnLpso4zuoE6EraAcZrMW_pmXiKLz_1Go8Y/edit?usp=sharing"
                target="_blank"
                className="inline-flex items-center gap-2 border border-edge text-muted-foreground font-mono text-[12px] uppercase tracking-[0.08em] px-5 py-3 hover:border-ink-dim hover:text-foreground transition-colors"
              >
                <RiExternalLinkLine className="h-3.5 w-3.5" />
                Resume
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-5 mt-6"
            >
              <Link href="https://github.com/apiz23" target="_blank" aria-label="GitHub" className="font-mono text-[13px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/muh-hafizuddin/" target="_blank" aria-label="LinkedIn" className="font-mono text-[13px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </Link>
              <Link href="#contact" aria-label="Contact" className="font-mono text-[13px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
                Email
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual - fills remaining space, content flush to right edge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT_EXPO }}
              style={{ y: imageY }}
              className="hidden lg:flex flex-1 items-center justify-end pr-0"
            >
              <div className="flex flex-col items-center gap-8">
                <div className="relative">
              <div className="relative w-[240px] h-[300px] border border-edge">
                <Image
                  src="/img/profile2.jpg"
                  alt="Hafizuddin Hamid"
                  width={240}
                  height={300}
                  priority
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute -top-[1px] -left-[1px] w-6 h-[2px] bg-lime-400" />
                <div className="absolute -top-[1px] -left-[1px] w-[2px] h-6 bg-lime-400" />
                <div className="absolute -top-[1px] -right-[1px] w-6 h-[2px] bg-lime-400" />
                <div className="absolute -top-[1px] -right-[1px] w-[2px] h-6 bg-lime-400" />
                <div className="absolute -bottom-[1px] -left-[1px] w-6 h-[2px] bg-lime-400" />
                <div className="absolute -bottom-[1px] -left-[1px] w-[2px] h-6 bg-lime-400" />
                <div className="absolute -bottom-[1px] -right-[1px] w-6 h-[2px] bg-lime-400" />
                <div className="absolute -bottom-[1px] -right-[1px] w-[2px] h-6 bg-lime-400" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-3 text-center">
                Hafizuddin · Software Engineer
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT_EXPO }}
              className="mt-8 w-full max-w-[280px] border border-edge p-4 bg-surface-alt/50"
            >
              <div className="flex items-center gap-1.5 mb-3">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="h-2 w-2 rounded-full bg-lime-400" />
              </div>
              <div className="font-mono text-[11px] leading-[1.8] text-muted-foreground">
                <span className="text-lime-400">$</span> whoami<br />
                <span className="pl-4">→ muhd-hafizuddin</span><br />
                <span className="text-lime-400">$</span> echo $SKILLS<br />
                <span className="pl-4">→ full-stack · typescript · next.js</span><br />
                <span className="text-lime-400">$</span> status<br />
                <span className="pl-4">→ open for opportunities</span>
              </div>
            </motion.div>
          </div>
          </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}