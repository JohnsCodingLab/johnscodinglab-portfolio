"use client";

import { motion } from "motion/react";
import { FolderGit2, ArrowUpRight, Star } from "lucide-react";
import { ProjectCard, ProjectData } from "../ui/ProjectCard";

const teal = "#4ac9a0";
const muted = "#556678";

export function Projects({ projects }: { projects: ProjectData[] }) {
    if (!projects || projects.length === 0) return null;

    const featured = projects.filter((p) => p.featured);
    const regular = projects.filter((p) => !p.featured);

    return (
        <section
            id="projects"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* bg grid */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.022]"
                style={{
                    backgroundImage: `linear-gradient(${teal} 1px, transparent 1px), linear-gradient(90deg, ${teal} 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14"
                >
                    <div className="flex items-center gap-3">
                        <span
                            className="text-[11px] font-mono tracking-[0.2em] uppercase"
                            style={{ color: "rgba(74,201,160,0.5)" }}
                        >
                            02.
                        </span>
                        <FolderGit2 className="h-4 w-4 text-primary" />
                        <h2 className="text-2xl font-bold font-mono tracking-tight text-foreground">
                            _selected_work
                        </h2>
                        <div
                            className="hidden md:block h-px w-40"
                            style={{
                                background:
                                    "linear-gradient(to right, rgba(74,201,160,0.3), transparent)",
                            }}
                        />
                        <span
                            className="hidden lg:block text-[10px] font-mono tracking-widest"
                            style={{ color: "rgba(85,102,120,0.5)" }}
                        >
                            what i&apos;ve built
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* stat pill */}
                        <div
                            className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-sm border text-[10px] font-mono"
                            style={{
                                borderColor: "rgba(26,42,58,1)",
                                background: "rgba(14,21,32,0.8)",
                                color: muted,
                            }}
                        >
                            <span>
                                <span style={{ color: teal }}>
                                    {projects.length}
                                </span>{" "}
                                projects
                            </span>
                            <div
                                className="w-px h-3"
                                style={{ background: "rgba(26,42,58,1)" }}
                            />
                            <span>
                                <span style={{ color: "#c0854a" }}>
                                    {featured.length}
                                </span>{" "}
                                featured
                            </span>
                        </div>

                        <a
                            href="https://github.com/johnscodinglab"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-150 rounded-sm border px-3 py-2"
                            style={{
                                color: teal,
                                background: "rgba(74,201,160,0.05)",
                                borderColor: "rgba(74,201,160,0.25)",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "rgba(74,201,160,0.1)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.45)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "rgba(74,201,160,0.05)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.25)";
                            }}
                        >
                            Full archive
                            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </motion.div>

                {/* ── FEATURED ── */}
                {featured.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <Star
                                className="h-3 w-3"
                                style={{ color: "#c0854a" }}
                            />
                            <span
                                className="text-[10px] font-mono tracking-[0.2em] uppercase"
                                style={{ color: "rgba(192,133,74,0.7)" }}
                            >
                                Featured
                            </span>
                            <div
                                className="h-px flex-1 max-w-[120px]"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(192,133,74,0.25), transparent)",
                                }}
                            />
                        </div>

                        <div
                            className={`grid gap-5 lg:gap-6 ${featured.length === 1 ? "grid-cols-1 max-w-2xl" : "grid-cols-1 md:grid-cols-2"}`}
                        >
                            {featured.map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={i}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* ── DIVIDER ── */}
                {featured.length > 0 && regular.length > 0 && (
                    <div className="flex items-center gap-4 mb-10">
                        <div
                            className="h-px flex-1"
                            style={{ background: "rgba(26,42,58,0.8)" }}
                        />
                        <span
                            className="text-[10px] font-mono tracking-widest uppercase"
                            style={{ color: "rgba(85,102,120,0.4)" }}
                        >
                            other projects
                        </span>
                        <div
                            className="h-px flex-1"
                            style={{ background: "rgba(26,42,58,0.8)" }}
                        />
                    </div>
                )}

                {/* ── REGULAR ── */}
                {regular.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
                            {regular.map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={featured.length + i}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* ── SHOW MORE (6+ projects) ── */}
                {projects.length >= 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <a
                            href="https://github.com/johnscodinglab"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-sm border text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-200"
                            style={{
                                color: teal,
                                borderColor: "rgba(74,201,160,0.3)",
                                background: "rgba(74,201,160,0.05)",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "rgba(74,201,160,0.12)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.5)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow =
                                    "0 0 24px rgba(74,201,160,0.1)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "rgba(74,201,160,0.05)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.3)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = "none";
                            }}
                        >
                            View all projects on GitHub
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
