"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO, clipReveal, hoverLift } from "@/lib/animations";
import { LinkPreview } from "@/components/ui/link-preview";
import { Mail, Linkedin, Github } from "lucide-react";

const links = [
  {
    label: "EMAIL",
    href: "mailto:piz230601@gmail.com",
    preview: false,
    icon: <Mail className="h-4 w-4" />,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/muh-hafizuddin",
    preview: true,
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "GITHUB",
    href: "https://github.com/apiz23",
    preview: true,
    icon: <Github className="h-4 w-4" />,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="contact"
      className="section-alt py-20 border-t border-edge"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div ref={sectionRef}>
          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-6 bg-lime-400" />
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-lime-400">
                  Contact
                </span>
              </div>
              <motion.h2
                variants={clipReveal}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                className="font-display tracking-[-0.02em] leading-[1] text-foreground"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                Let&apos;s build
                <br />
                something.
              </motion.h2>
              <p className="text-[16px] text-muted-foreground mt-3 leading-[1.65] max-w-[40ch]">
                Open to full-time roles, internships, and interesting projects. Based in
                Johor, Malaysia.
              </p>
            </div>

            {/* Link cards */}
            <div className="flex flex-col gap-2.5">
              {links.map(({ label, href, preview, icon }, index) => {
                const rowClassName =
                  "flex items-center justify-between border border-edge px-4 py-3 hover:border-lime-400/50 hover:bg-lime-400/[0.02] transition-all duration-200 group cursor-pointer";
                const rowContent = (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground group-hover:text-lime-400 transition-colors duration-200">
                        {icon}
                      </span>
                      <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-foreground group-hover:text-lime-400 transition-colors duration-200">
                        {label}
                      </span>
                    </div>
                    <span className="font-mono text-[15px] text-muted-foreground group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all duration-200">
                      ↗
                    </span>
                  </>
                );

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ delay: index * 0.06, duration: 0.4, ease: EASE_OUT_EXPO }}
                    {...hoverLift}
                  >
                    {preview ? (
                      <LinkPreview url={href} className={rowClassName}>
                        {rowContent}
                      </LinkPreview>
                    ) : (
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={rowClassName}
                      >
                        {rowContent}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-5 border-t border-edge flex justify-between items-center">
            <span className="font-mono text-[12px] text-muted-foreground">
              © 2026 Hafizuddin Hamid
            </span>
            <span className="font-display text-sm text-lime-400 tracking-[-0.01em]">
              HF.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}