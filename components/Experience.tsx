"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO, clipReveal, hoverLift, staggerContainer, staggerItem } from "@/lib/animations";

const experiences = [
  {
    company: "Xeersoft",
    period: "2023 - 2024",
    position: "Software Developer Intern",
    location: "Bukit Indah, Johor Bahru",
    periodPill: "1 yr",
    achievements: [
      "Implemented 5+ new features for Tokopak QR commerce system",
      "Improved system performance by 30% through code optimization",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Participated in daily stand-ups and agile development processes",
    ],
    technologies: ["React", "jQuery", "PostgreSQL", "Laravel", "Git", "Docker", "REST API"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-alt py-24 border-t border-edge"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-6 bg-lime-400" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-lime-400">
            Experience
          </span>
        </div>
        <motion.h2
          variants={clipReveal}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="font-display text-foreground tracking-[-0.02em] leading-[0.95] mb-12"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          EXPERIENCE
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="space-y-0 relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[99px] top-3 bottom-3 w-px bg-edge hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={staggerItem}
              {...hoverLift}
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
              className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 border-t border-edge py-5 relative group transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[94px] top-[1.65rem] w-[11px] h-[11px] rounded-full border-2 border-edge bg-lime-400 -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300" />

              <div className="pt-0.5">
                {/* Period pill */}
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.08em] text-lime-400 border border-edge px-2 py-0.5 mb-2">
                  {exp.periodPill}
                </span>
                <p className="font-mono text-[13px] text-foreground">{exp.company}</p>
                <p className="font-mono text-[12px] text-muted-foreground mt-0.5">{exp.location}</p>
                <p className="font-mono text-[12px] text-muted-foreground mt-1">{exp.period}</p>
              </div>
              <div>
                <h3 className="font-display text-[17px] tracking-[-0.01em] text-foreground mb-4">{exp.position}</h3>
                <ul className="space-y-2.5 mb-5">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-[1.6]">
                      <span
                        aria-hidden="true"
                        className={`inline-block w-1.5 h-1.5 rounded-full mt-[0.6em] shrink-0 transition-colors duration-300 ${
                          hoveredExp === index ? "bg-lime-400" : "bg-muted-foreground/40"
                        }`}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[12px] text-muted-foreground border border-edge px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-edge" />
        </motion.div>
      </div>
    </section>
  );
}