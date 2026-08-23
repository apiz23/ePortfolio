"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { clipReveal, EASE_OUT_EXPO, hoverGlow } from "@/lib/animations";
import Image from "next/image";

const levelWidth = { Advanced: "w-[85%]", Intermediate: "w-[65%]", Familiar: "w-[40%]" };

const skills = [
  { src: "/svg/nextjs.svg", alt: "Next.js", name: "Next.js", level: "Advanced" as const },
  { src: "/svg/react.svg", alt: "React", name: "React", level: "Advanced" as const },
  { src: "/svg/typescript.svg", alt: "TypeScript", name: "TypeScript", level: "Advanced" as const },
  { src: "/svg/tailwindcss.svg", alt: "Tailwind CSS", name: "Tailwind CSS", level: "Advanced" as const },
  { src: "/svg/nodejs.svg", alt: "Node.js", name: "Node.js", level: "Intermediate" as const },
  { src: "/svg/postgresql.svg", alt: "PostgreSQL", name: "PostgreSQL", level: "Intermediate" as const },
  { src: "/svg/supabase.svg", alt: "Supabase", name: "Supabase", level: "Intermediate" as const },
  { src: "/svg/git.svg", alt: "Git", name: "Git", level: "Advanced" as const },
  { src: "/svg/docker.svg", alt: "Docker", name: "Docker", level: "Familiar" as const },
  { src: "/svg/figma.svg", alt: "Figma", name: "Figma", level: "Familiar" as const },
];

function SkillIcon({ src, alt, isHovered }: { src: string; alt: string; isHovered: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className={`transition-all duration-300 ${
        isHovered ? "grayscale hue-rotate-[260deg] saturate-[3] brightness-125" : ""
      }`}
    />
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-alt py-24 border-t border-edge"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-6 bg-purple-500" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-purple-500">
            Skills & Tools
          </span>
        </div>
        <motion.h2
          variants={clipReveal}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="font-display text-foreground tracking-[-0.02em] leading-[0.95] mb-12"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          SKILLS
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-px bg-edge border border-edge">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ delay: index * 0.04, duration: 0.4, ease: EASE_OUT_EXPO }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              {...hoverGlow}
              className="bg-background p-5 flex flex-col gap-2.5 relative group cursor-default transition-all duration-300"
            >
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                className="absolute inset-0 bg-purple-500/5 pointer-events-none"
              />

              {/* Icon with glow on hover */}
              <span className={`text-2xl transition-all duration-300 relative z-10 ${
                hoveredIndex === index ? "text-purple-500 drop-shadow-[0_0_8px_hsl(var(--purple)/0.4)]" : "text-muted-foreground"
              }`}>
                <SkillIcon src={skill.src} alt={skill.alt} isHovered={hoveredIndex === index} />
              </span>

              <span className="font-display text-[17px] text-foreground tracking-[-0.01em] relative z-10">
                {skill.name}
              </span>

              <span className={`font-mono text-[10px] uppercase tracking-[0.1em] relative z-10 transition-colors duration-300 ${
                hoveredIndex === index ? "text-purple-500" : "text-muted-foreground"
              }`}>
                {skill.level}
              </span>

              {/* Skill level bar */}
              <div className="h-px w-full bg-edge relative z-10 mt-1 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={sectionInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.3 + index * 0.04, duration: 0.6, ease: EASE_OUT_EXPO }}
                  style={{ transformOrigin: "left" }}
                  className={`h-full bg-purple-500 ${levelWidth[skill.level]}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}