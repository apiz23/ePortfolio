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

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,hsl(var(--purple)/0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />

      <div className="w-full">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row min-h-[80vh]">
            {/* Left text content */}
            <motion.div
              style={{ y: scrollY, opacity: scrollOpacity }}
              className="relative z-10 flex-1 max-w-xl py-12 lg:py-12"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-8 bg-purple-500" />
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-purple-500">
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
                className="flex flex-wrap gap-6 sm:gap-8 mt-8"
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
                  <span className="font-display text-[2.5rem] text-purple-500 leading-none">Closed</span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-1.5">For Work</p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease: EASE_OUT_EXPO }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8"
              >
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-purple-500 text-white font-mono text-[12px] uppercase tracking-[0.08em] px-5 py-3 hover:bg-purple-400 transition-colors"
                >
                  View My Work ↓
                </Link>
                <Link
                  href="https://docs.google.com/document/d/1SsIiM2VCZnLpso4zuoE6EraAcZrMW_pmXiKLz_1Go8Y/edit?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 border border-edge text-muted-foreground font-mono text-[12px] uppercase tracking-[0.08em] px-5 py-3 hover:border-purple-500 hover:text-foreground transition-colors"
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

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT_EXPO }}
              style={{ y: imageY }}
              className="hidden lg:flex flex-1 items-center justify-end pr-0"
            >
              <div className="flex flex-col items-center gap-8">
                <div className="relative">
                  <div className="relative w-fit max-w-[280px] h-[500px] border border-edge">
                    <Image
                      src="/img/profile.png"
                      alt="Hafizuddin Hamid"
                      width={280}
                      height={250}
                      priority
                      className="object-cover object-top w-full h-full"
                    />
                    <div className="absolute -top-[1px] -left-[1px] w-6 h-[2px] bg-purple-500" />
                    <div className="absolute -top-[1px] -left-[1px] w-[2px] h-6 bg-purple-500" />
                    <div className="absolute -top-[1px] -right-[1px] w-6 h-[2px] bg-purple-500" />
                    <div className="absolute -top-[1px] -right-[1px] w-[2px] h-6 bg-purple-500" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-6 h-[2px] bg-purple-500" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-[2px] h-6 bg-purple-500" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-6 h-[2px] bg-purple-500" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-[2px] h-6 bg-purple-500" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-3 text-center">
                    Hafizuddin · Software Engineer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
