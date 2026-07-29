"use client";

import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { clipReveal, EASE_OUT_EXPO, hoverLift } from "@/lib/animations";
import { LinkPreview } from "@/components/ui/link-preview";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  image_src: string;
  github_link: string;
  visit_link: string;
  featured: boolean;
  category: string;
  year: string;
  badges: string[];
};

const categories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "webapp", label: "Web Apps" },
  { id: "frontend", label: "Frontend" },
];

function SkeletonRow({ delay }: { delay: number }) {
  return (
    <div
      className="flex items-center gap-4 border-t border-edge py-4"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-6 h-3 bg-edge rounded animate-pulse shrink-0" />
      <div className="flex-1 h-4 bg-edge rounded animate-pulse" />
      <div className="hidden sm:block w-20 h-3 bg-edge rounded animate-pulse" />
      <div className="hidden sm:block w-8 h-3 bg-edge rounded animate-pulse" />
      <div className="w-4 h-3 bg-edge rounded animate-pulse shrink-0" />
    </div>
  );
}

export default function Project() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const [filter, setFilter] = useState<string>("all");
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section ref={sectionRef} id="projects" className="py-24 border-t border-edge">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-6 bg-lime-400" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-lime-400">
            Projects
          </span>
        </div>
        <div className="flex justify-between items-baseline">
          <motion.h2
            variants={clipReveal}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="font-display text-foreground tracking-[-0.02em] leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            PROJECTS
          </motion.h2>
          <span className="font-mono text-[13px] text-muted-foreground">
            {loading ? "—" : `${filteredProjects.length} / ${projects.length}`}
          </span>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mt-4 mb-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              aria-pressed={filter === cat.id}
              className={`font-mono text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 transition-all duration-200 cursor-pointer focus-visible:outline-none ${
                filter === cat.id
                  ? "bg-lime-400 text-[#0a0a0a]"
                  : "bg-background text-muted-foreground border border-edge hover:border-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project list */}
        {loading ? (
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonRow key={i} delay={i * 60} />
            ))}
            <div className="border-t border-edge" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {filteredProjects.length === 0 ? (
                <div className="border-t border-edge py-16 text-center">
                  <p className="font-mono text-[13px] text-muted-foreground">
                    No projects in this category yet.
                  </p>
                </div>
              ) : (
                filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.4,
                        ease: EASE_OUT_EXPO,
                      }}
                      {...hoverLift}
                    >
                    {(() => {
                      const rowClassName =
                        "border-t border-edge py-4 flex items-center gap-4 cursor-pointer group hover:bg-surface-alt transition-all duration-200";
                      const rowContent = (
                        <>
                          <span className="font-mono text-[12px] text-muted-foreground/50 w-6 shrink-0 group-hover:text-lime-400 transition-colors duration-200" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[17px] font-semibold text-foreground flex-1 min-w-0 truncate group-hover:text-lime-400 transition-colors duration-200 font-display tracking-[-0.01em]">
                            {project.title}
                          </span>
                          <span className="hidden lg:inline text-[14px] text-muted-foreground truncate max-w-[28ch] shrink-0">
                            {project.description}
                          </span>
                          <span className="hidden sm:flex items-center gap-1.5 shrink-0">
                            {project.badges.slice(0, 2).map((badge) => (
                              <span key={badge} className="font-mono text-[12px] px-1.5 py-0.5 bg-surface-alt text-muted-foreground">
                                {badge}
                              </span>
                            ))}
                          </span>
                          {project.year && (
                            <span className="hidden sm:inline font-mono text-[11px] text-muted-foreground/50 shrink-0">
                              {project.year}
                            </span>
                          )}
                          <span
                            className="font-mono text-sm text-muted-foreground/30 group-hover:text-lime-400 transition-colors duration-200 shrink-0"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </>
                      );

                      const previewUrl = project.visit_link || project.github_link;

                      if (!previewUrl) {
                        return <div className={rowClassName}>{rowContent}</div>;
                      }

                      return (
                        <LinkPreview
                          url={previewUrl}
                          width={240}
                          height={150}
                          className={rowClassName}
                        >
                          {rowContent}
                        </LinkPreview>
                      );
                    })()}
                  </motion.div>
                ))
              )}
              <div className="border-t border-edge" />
            </motion.div>
          </AnimatePresence>
        )}

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Link
            href="https://github.com/apiz23"
            target="_blank"
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
          >
            <Github className="h-3 w-3 group-hover:text-lime-400 transition-colors" />
            <span>View all on GitHub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}