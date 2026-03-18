"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
    X,
    Github,
    ExternalLink,
    Star,
    FolderGit2,
    Loader2,
    Terminal,
    Tag,
    ArrowRight,
} from "lucide-react";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://portfolio-api-pm4w.onrender.com/api";

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";

interface FullProject {
    id: string;
    title: string;
    slug: string;
    description: string;
    about: string;
    techStack: string[];
    coverImage?: string;
    githubUrl?: string;
    previewUrl?: string;
    featured: boolean;
    sortOrder?: number;
}

interface ProjectModalProps {
    slug: string;
    isOpen: boolean;
    onClose: () => void;
}

function SectionLabel({
    icon: Icon,
    label,
    color,
}: {
    icon: React.ElementType;
    label: string;
    color: string;
}) {
    return (
        <div className="flex items-center gap-2 mb-3">
            <Icon className="h-3 w-3" style={{ color }} />
            <span
                className="text-[9px] font-mono tracking-[0.25em] uppercase"
                style={{ color: `${color}80` }}
            >
                {label}
            </span>
            <div
                className="flex-1 h-px"
                style={{
                    background: `linear-gradient(to right, ${color}20, transparent)`,
                }}
            />
        </div>
    );
}

export function ProjectModal({ slug, isOpen, onClose }: ProjectModalProps) {
    const [project, setProject] = useState<FullProject | null>(null);
    const [imgError, setImgError] = useState(false);
    const [fetchedSlug, setFetchedSlug] = useState<string | null>(null);
    const loading = isOpen && fetchedSlug !== slug;

    useEffect(() => {
        if (!isOpen || !slug) return;
        const controller = new AbortController();
        fetch(`${API_URL}/projects/${slug}`, { signal: controller.signal })
            .then((r) => r.json())
            .then((json) => {
                if (!controller.signal.aborted) {
                    setProject(json.data || json);
                    setFetchedSlug(slug);
                }
            })
            .catch((err) => {
                if (!controller.signal.aborted) console.error(err);
            });
        return () => {
            controller.abort();
            setProject(null);
            setImgError(false);
            setFetchedSlug(null);
        };
    }, [isOpen, slug]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const color = project?.featured ? amber : teal;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 backdrop-blur-sm"
                        style={{ background: "rgba(8,13,20,0.85)" }}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 280,
                        }}
                        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl flex flex-col overflow-hidden"
                        style={{
                            background: "#080d14",
                            borderLeft: "1px solid rgba(26,42,58,1)",
                            boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
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

                        {/* left accent line — dynamic color */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-px z-10 pointer-events-none"
                            style={{
                                background: `linear-gradient(to bottom, transparent, ${color}40 20%, ${color}20 80%, transparent)`,
                            }}
                        />

                        {/* ── HEADER ── */}
                        <div
                            className="relative z-10 flex items-center justify-between px-6 py-3.5 border-b shrink-0"
                            style={{ borderColor: "rgba(26,42,58,1)" }}
                        >
                            <div className="flex items-center gap-2">
                                <Terminal
                                    className="h-3.5 w-3.5"
                                    style={{ color: `${teal}60` }}
                                />
                                <span
                                    className="text-[10px] font-mono tracking-[0.25em] uppercase"
                                    style={{ color: `${teal}60` }}
                                >
                                    project.detail
                                </span>
                                {project && (
                                    <>
                                        <span
                                            style={{
                                                color: "rgba(26,42,58,1)",
                                            }}
                                        >
                                            /
                                        </span>
                                        <span
                                            className="text-[10px] font-mono"
                                            style={{ color: `${color}80` }}
                                        >
                                            {project.slug}
                                        </span>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={onClose}
                                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border text-[10px] font-mono tracking-widest uppercase transition-all duration-150"
                                style={{
                                    borderColor: "rgba(26,42,58,1)",
                                    color: muted,
                                }}
                                onMouseEnter={(e) => {
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.borderColor = "rgba(255,50,80,0.3)";
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.color = "#ff3250";
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.background = "rgba(255,50,80,0.06)";
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
                                <X className="h-3 w-3" />
                                Esc
                            </button>
                        </div>

                        {/* ── SCROLLABLE BODY ── */}
                        <div
                            className="relative z-10 flex-1 overflow-y-auto"
                            style={{
                                scrollbarWidth: "thin",
                                scrollbarColor: `rgba(74,201,160,0.15) transparent`,
                            }}
                        >
                            {/* loading */}
                            {loading && (
                                <div className="flex flex-col items-center justify-center gap-3 h-64">
                                    <Loader2
                                        className="h-5 w-5 animate-spin"
                                        style={{ color: teal }}
                                    />
                                    <span
                                        className="text-[10px] font-mono tracking-widest uppercase"
                                        style={{ color: muted }}
                                    >
                                        fetching data...
                                    </span>
                                </div>
                            )}

                            {!loading && project && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* ── COVER IMAGE ── */}
                                    <div
                                        className="relative w-full border-b"
                                        style={{
                                            aspectRatio: "16/9",
                                            borderColor: "rgba(26,42,58,1)",
                                        }}
                                    >
                                        {project.coverImage && !imgError ? (
                                            <Image
                                                src={project.coverImage}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                onError={() =>
                                                    setImgError(true)
                                                }
                                            />
                                        ) : (
                                            <div
                                                className="absolute inset-0 flex items-center justify-center"
                                                style={{
                                                    background:
                                                        "rgba(8,13,20,1)",
                                                }}
                                            >
                                                <div
                                                    className="absolute inset-0 opacity-[0.06]"
                                                    style={{
                                                        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
                                                        backgroundSize:
                                                            "32px 32px",
                                                    }}
                                                />
                                                <FolderGit2
                                                    className="h-14 w-14 relative z-10"
                                                    style={{
                                                        color: `${color}25`,
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {/* top color bar */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-0.5 z-10"
                                            style={{
                                                background: `linear-gradient(to right, ${color}80, transparent)`,
                                            }}
                                        />

                                        {/* bottom fade */}
                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none z-10"
                                            style={{
                                                background:
                                                    "linear-gradient(to top, #080d14 20%, transparent)",
                                            }}
                                        />

                                        {/* featured badge */}
                                        {project.featured && (
                                            <div
                                                className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-1 rounded-sm border text-[9px] font-mono tracking-widest uppercase"
                                                style={{
                                                    color: amber,
                                                    borderColor:
                                                        "rgba(192,133,74,0.4)",
                                                    background:
                                                        "rgba(8,13,20,0.85)",
                                                    backdropFilter: "blur(8px)",
                                                }}
                                            >
                                                <Star className="h-2.5 w-2.5" />{" "}
                                                Featured
                                            </div>
                                        )}
                                    </div>

                                    {/* ── CONTENT ── */}
                                    <div className="p-6 space-y-7">
                                        {/* title block */}
                                        <div className="space-y-2">
                                            <h2
                                                className="text-xl font-mono font-bold leading-snug"
                                                style={{ color: "#e0e8f0" }}
                                            >
                                                {project.title}
                                            </h2>
                                            <p
                                                className="text-[13px] leading-relaxed font-sans"
                                                style={{ color: muted }}
                                            >
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* about */}
                                        {project.about && (
                                            <div>
                                                <SectionLabel
                                                    icon={Terminal}
                                                    label="about"
                                                    color={color}
                                                />
                                                <div
                                                    className="prose-sm text-[13px] font-sans leading-relaxed rounded-sm border p-4 space-y-2"
                                                    style={{
                                                        color: "#8899aa",
                                                        borderColor:
                                                            "rgba(26,42,58,1)",
                                                        background:
                                                            "rgba(14,21,32,0.6)",
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: project.about,
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {/* tech stack */}
                                        {project.techStack?.length > 0 && (
                                            <div>
                                                <SectionLabel
                                                    icon={Tag}
                                                    label="tech_stack"
                                                    color={color}
                                                />
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map(
                                                        (tech) => (
                                                            <span
                                                                key={tech}
                                                                className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-sm border transition-all duration-150"
                                                                style={{
                                                                    color: `${color}90`,
                                                                    borderColor: `${color}22`,
                                                                    background: `${color}07`,
                                                                }}
                                                            >
                                                                <ArrowRight className="h-2.5 w-2.5" />
                                                                {tech}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* CTAs */}
                                        <div
                                            className="flex flex-wrap gap-3 pt-2 border-t"
                                            style={{
                                                borderColor: "rgba(26,42,58,1)",
                                            }}
                                        >
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-sm border font-mono text-[11px] font-bold tracking-widest uppercase transition-all duration-200"
                                                    style={{
                                                        borderColor: `${color}35`,
                                                        background: `${color}09`,
                                                        color,
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.background =
                                                            `${color}18`;
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.borderColor =
                                                            `${color}55`;
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.boxShadow =
                                                            `0 0 16px ${color}12`;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.background =
                                                            `${color}09`;
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.borderColor =
                                                            `${color}35`;
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.boxShadow =
                                                            "none";
                                                    }}
                                                >
                                                    <Github className="h-3.5 w-3.5" />{" "}
                                                    View Source
                                                </a>
                                            )}
                                            {project.previewUrl && (
                                                <a
                                                    href={project.previewUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-sm border font-mono text-[11px] font-bold tracking-widest uppercase transition-all duration-200"
                                                    style={{
                                                        borderColor:
                                                            "rgba(26,42,58,1)",
                                                        background:
                                                            "transparent",
                                                        color: "#e0e8f0",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.borderColor =
                                                            "rgba(74,201,160,0.25)";
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.background =
                                                            "rgba(255,255,255,0.03)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.borderColor =
                                                            "rgba(26,42,58,1)";
                                                        (
                                                            e.currentTarget as HTMLElement
                                                        ).style.background =
                                                            "transparent";
                                                    }}
                                                >
                                                    <ExternalLink className="h-3.5 w-3.5" />{" "}
                                                    Live Preview
                                                </a>
                                            )}
                                        </div>

                                        {/* footer note */}
                                        <p
                                            className="text-[10px] font-mono text-center pb-2"
                                            style={{
                                                color: "rgba(85,102,120,0.35)",
                                            }}
                                        >
                                            press{" "}
                                            <kbd
                                                className="px-1 py-0.5 rounded-sm border text-[9px]"
                                                style={{
                                                    borderColor:
                                                        "rgba(26,42,58,1)",
                                                }}
                                            >
                                                esc
                                            </kbd>{" "}
                                            to close
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
