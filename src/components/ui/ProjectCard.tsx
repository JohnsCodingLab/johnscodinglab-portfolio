"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
    Github,
    ExternalLink,
    Star,
    FolderGit2,
    ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ProjectModal } from "./ProjectModal";
import { Badge } from "./Bage";

export interface ProjectData {
    id: string;
    title: string;
    slug: string;
    description: string;
    techStack: string[];
    coverImage?: string;
    githubUrl?: string;
    previewUrl?: string;
    featured: boolean;
}

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";

export function ProjectCard({
    project,
    index = 0,
}: {
    project: ProjectData;
    index: number;
}) {
    const [modalOpen, setModalOpen] = useState(false);

    const color = project.featured ? amber : teal;
    const colorSubtle = project.featured
        ? "rgba(192,133,74,0.09)"
        : "rgba(74,201,160,0.07)";
    const colorBorder = project.featured
        ? "rgba(192,133,74,0.28)"
        : "rgba(74,201,160,0.22)";
    const colorBorderD = project.featured
        ? "rgba(192,133,74,0.3)"
        : "rgba(26,42,58,1)";

    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex flex-col h-full rounded-sm border overflow-hidden transition-all duration-300"
                style={{
                    borderColor: colorBorderD,
                    background: "rgba(14,21,32,0.9)",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                        colorBorder;
                    (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 8px 40px ${color}0d`;
                    (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                        colorBorderD;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)";
                }}
            >
                {/* scanlines */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 opacity-[0.018]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                    }}
                />

                {/* corner accents */}
                {[
                    "top-0 left-0 border-t border-l",
                    "top-0 right-0 border-t border-r",
                    "bottom-0 left-0 border-b border-l",
                    "bottom-0 right-0 border-b border-r",
                ].map((pos, i) => (
                    <div
                        key={i}
                        className={`pointer-events-none absolute w-3 h-3 z-20 ${pos} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        style={{ borderColor: `${color}60` }}
                    />
                ))}

                {/* top color bar */}
                <div
                    className="h-0.5 w-full shrink-0 relative z-10"
                    style={{
                        background: `linear-gradient(to right, ${color}90, ${color}20, transparent)`,
                    }}
                />

                {/* ── IMAGE ── */}
                <div
                    className="relative w-full overflow-hidden border-b"
                    style={{
                        aspectRatio: "16/9",
                        borderColor: "rgba(26,42,58,0.8)",
                    }}
                >
                    {project.coverImage ? (
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    ) : (
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                            style={{ background: "rgba(8,13,20,0.8)" }}
                        >
                            <div
                                className="absolute inset-0 opacity-[0.06]"
                                style={{
                                    backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
                                    backgroundSize: "28px 28px",
                                }}
                            />
                            <FolderGit2
                                className="h-10 w-10 relative z-10"
                                style={{ color: `${color}40` }}
                            />
                            <span
                                className="relative z-10 text-[10px] font-mono tracking-widest uppercase"
                                style={{ color: `${color}30` }}
                            >
                                preview unavailable
                            </span>
                        </div>
                    )}

                    {/* bottom fade */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(14,21,32,0.95), transparent)",
                        }}
                    />

                    {/* index badge — top left */}
                    <div
                        className="absolute top-3 left-3 z-20 text-[9px] font-mono px-2 py-0.5 rounded-sm border"
                        style={{
                            color: muted,
                            borderColor: "rgba(26,42,58,0.9)",
                            background: "rgba(8,13,20,0.85)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        #{String(index + 1).padStart(2, "0")}
                    </div>

                    {/* top-right: featured + github */}
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                        {project.featured && (
                            <div
                                className="flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-sm border tracking-widest uppercase"
                                style={{
                                    color: amber,
                                    borderColor: "rgba(192,133,74,0.45)",
                                    background: "rgba(8,13,20,0.85)",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <Star className="h-2.5 w-2.5" />
                                Featured
                            </div>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-sm border transition-all duration-150"
                                style={{
                                    color: muted,
                                    borderColor: "rgba(26,42,58,0.9)",
                                    background: "rgba(8,13,20,0.85)",
                                    backdropFilter: "blur(8px)",
                                }}
                                onMouseEnter={(e) => {
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.color = color;
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.borderColor = `${color}40`;
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.background = colorSubtle;
                                }}
                                onMouseLeave={(e) => {
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.color = muted;
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.borderColor = "rgba(26,42,58,0.9)";
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.background = "rgba(8,13,20,0.85)";
                                }}
                            >
                                <Github className="h-3.5 w-3.5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* ── BODY ── */}
                <div className="relative z-10 flex flex-col flex-1 p-5 space-y-3">
                    <h3
                        className="text-[15px] font-mono font-bold leading-snug transition-colors duration-200 group-hover:text-primary"
                        style={{ color: "#e0e8f0" }}
                    >
                        {project.title}
                    </h3>

                    <p
                        className="text-[12px] leading-relaxed font-sans flex-1"
                        style={{ color: muted }}
                    >
                        {project.description}
                    </p>

                    {/* tech tags */}
                    <div className="flex flex-wrap gap-1.5 pb-1">
                        {project.techStack?.slice(0, 4).map((tag) => (
                            <Badge
                                key={tag}
                                variant={
                                    project.featured ? "accent" : "primary"
                                }
                                prefix="▸"
                            >
                                {tag}
                            </Badge>
                        ))}
                        {project.techStack?.length > 4 && (
                            <span
                                className="text-[10px] font-mono px-2 py-0.5 rounded-sm border"
                                style={{
                                    color: muted,
                                    borderColor: "rgba(26,42,58,1)",
                                }}
                            >
                                +{project.techStack.length - 4}
                            </span>
                        )}
                    </div>

                    {/* ── CTA ROW ── */}
                    <div
                        className="flex items-center gap-2 pt-4 border-t"
                        style={{ borderColor: "rgba(26,42,58,0.8)" }}
                    >
                        {/* view more → opens modal */}
                        <button
                            onClick={() => setModalOpen(true)}
                            className="group/btn flex-1 inline-flex items-center justify-center gap-2 h-9 rounded-sm border text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.98]"
                            style={{
                                background: colorSubtle,
                                borderColor: `${color}30`,
                                color,
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = project.featured
                                    ? "rgba(192,133,74,0.15)"
                                    : "rgba(74,201,160,0.14)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = `${color}55`;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = `0 0 16px ${color}12`;
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = colorSubtle;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = `${color}30`;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = "none";
                            }}
                        >
                            View More
                            <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>

                        {/* live preview */}
                        {project.previewUrl ? (
                            <a
                                href={project.previewUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-sm border text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.98]"
                                style={{
                                    borderColor: "rgba(26,42,58,1)",
                                    color: muted,
                                    background: "transparent",
                                }}
                                onMouseEnter={(e) => {
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.borderColor =
                                        "rgba(74,201,160,0.25)";
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.color = "#e0e8f0";
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.background =
                                        "rgba(255,255,255,0.03)";
                                }}
                                onMouseLeave={(e) => {
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.borderColor = "rgba(26,42,58,1)";
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.color = muted;
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.background = "transparent";
                                }}
                            >
                                Preview
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        ) : (
                            <div
                                className="flex-1 inline-flex items-center justify-center h-9 rounded-sm border text-[11px] font-mono tracking-widest uppercase opacity-30 cursor-default select-none"
                                style={{
                                    borderColor: "rgba(26,42,58,1)",
                                    color: muted,
                                }}
                            >
                                No Preview
                            </div>
                        )}
                    </div>
                </div>
            </motion.article>

            {/* Modal portaled to document.body — outside the article's stacking context */}
            {typeof window !== "undefined" &&
                createPortal(
                    <ProjectModal
                        slug={project.slug}
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                    />,
                    document.body,
                )}
        </>
    );
}
