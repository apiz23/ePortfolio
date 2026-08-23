"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO, clipReveal, hoverLift } from "@/lib/animations";
import { LinkPreview } from "@/components/ui/link-preview";
import { Mail } from "lucide-react";
import Image from "next/image";

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
    icon: <Image src="/svg/linkedin.svg" alt="LinkedIn" width={16} height={16} />,
  },
  {
    label: "GITHUB",
    href: "https://github.com/apiz23",
    preview: true,
    icon: <Image src="/svg/github.svg" alt="GitHub" width={16} height={16} className="invert" />,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="contact"
      className="section-alt py-24 border-t border-edge"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div ref={sectionRef}>
          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-6 bg-purple-500" />
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-purple-500">
                  Contact
                </span>
              </div>
              <motion.h2
                variants={clipReveal}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                className="font-display tracking-[-0.02em] leading-[0.95] text-foreground"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              >
                Let&apos;s build
                <br />
                <span className="text-purple-500">something.</span>
              </motion.h2>
              <p className="text-[16px] text-muted-foreground mt-3 leading-[1.65] max-w-[40ch]">
                Open to full-time roles, internships, and interesting projects. Based in
                Johor, Malaysia.
              </p>
            </div>

            {/* Link cards */}
            <div className="flex flex-col gap-3">
              {links.map(({ label, href, preview, icon }, index) => {
                const rowClassName =
                  "flex items-center justify-between border border-edge px-5 py-4 hover:border-purple-500/50 hover:bg-purple-500/[0.02] transition-all duration-200 group cursor-pointer";
                const rowContent = (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground group-hover:text-purple-500 transition-colors duration-200">
                        {icon}
                      </span>
                      <span className="font-mono text-[15px] uppercase tracking-[0.08em] text-foreground group-hover:text-purple-500 transition-colors duration-200">
                        {label}
                      </span>
                    </div>
                    <span className="font-mono text-[16px] text-muted-foreground group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all duration-200">
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
            <span className="font-display text-sm text-purple-500 tracking-[-0.01em]">
              HF.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}