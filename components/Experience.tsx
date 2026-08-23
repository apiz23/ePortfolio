"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO, clipReveal, hoverLift, staggerContainer, staggerItem } from "@/lib/animations";

const experiences = [
  {
    company: "OC Global Technology Sdn Bhd",
    period: "Aug 2026 - Present",
    position: "Software Support Intern",
    location: "Johor Bahru, Malaysia · On-site",
    periodPill: "1 mo",
    achievements: [
      "Assist in data testing for existing projects and prepare datasets using test cases",
      "Conduct basic UI checks and quality assurance validations",
      "Prepare and assist with user manuals, technical documentation, and project reporting",
    ],
    technologies: ["Software Testing", "Quality Assurance", "Technical Documentation"],
  },
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

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-alt py-24 border-t border-edge"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-6 bg-purple-500" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-purple-500">
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
              className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 border-t border-edge py-5 relative group transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className={`hidden md:block absolute left-[94px] top-[1.65rem] w-[11px] h-[11px] rounded-full border-2 border-edge ${index === 0 ? 'bg-purple-500' : 'bg-muted-foreground/40'} -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300`} />

              <div className="pt-0.5">
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.08em] text-purple-500 border border-edge px-2 py-0.5 mb-2">
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
                        className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-[0.6em] shrink-0"
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