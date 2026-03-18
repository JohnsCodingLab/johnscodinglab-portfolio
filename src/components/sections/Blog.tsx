"use client";

import { motion } from "motion/react";
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    readTime?: number;
    tags?: string[];
}

function estimateReadTime(excerpt: string): number {
    return Math.max(1, Math.ceil(excerpt.split(/\s+/).length / 40));
}

function formatDate(dateStr: string): string {
    if (!dateStr) return "Coming Soon";
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function Blog({ posts }: { posts: BlogPost[] }) {
    if (!posts || posts.length === 0) return null;

    const [featured, ...rest] = posts;

    return (
        <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
            {/* bg grid */}
            {/* <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.022]"
                style={{
                    backgroundImage: `linear-gradient(${teal} 1px, transparent 1px), linear-gradient(90deg, ${teal} 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            /> */}

            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-14"
                >
                    <span
                        className="text-[11px] font-mono tracking-[0.2em] uppercase"
                        style={{ color: "rgba(192,133,74,0.6)" }}
                    >
                        04.
                    </span>
                    <BookOpen className="h-4 w-4 text-accent" />
                    <h2 className="text-2xl font-bold font-mono tracking-tight text-foreground">
                        _latest_thoughts
                    </h2>
                    <div
                        className="h-px flex-1 max-w-xs"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(192,133,74,0.3), transparent)",
                        }}
                    />
                    <span
                        className="hidden md:block text-[10px] font-mono tracking-widest"
                        style={{ color: "rgba(85,102,120,0.5)" }}
                    >
                        articles &amp; write-ups
                    </span>
                </motion.div>

                {/* ── FEATURED POST (first) ── */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <Link
                            href={`/blog/${featured.slug}`}
                            className="group block rounded-sm border overflow-hidden transition-all duration-300"
                            style={{
                                borderColor: "rgba(192,133,74,0.3)",
                                background: "rgba(14,21,32,0.85)",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(192,133,74,0.5)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow =
                                    "0 8px 40px rgba(192,133,74,0.08)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(192,133,74,0.3)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = "none";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.transform = "translateY(0)";
                            }}
                        >
                            {/* scanlines */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                                style={{
                                    backgroundImage:
                                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                                }}
                            />

                            {/* top amber bar */}
                            <div
                                className="h-0.5 w-full"
                                style={{
                                    background: `linear-gradient(to right, ${amber}80, ${amber}20, transparent)`,
                                }}
                            />

                            <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6">
                                {/* left */}
                                <div className="flex-1 space-y-4">
                                    {/* label + date */}
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-sm border"
                                            style={{
                                                color: amber,
                                                borderColor:
                                                    "rgba(192,133,74,0.3)",
                                                background:
                                                    "rgba(192,133,74,0.07)",
                                            }}
                                        >
                                            Latest Post
                                        </span>
                                        <span
                                            className="flex items-center gap-1 text-[10px] font-mono"
                                            style={{ color: muted }}
                                        >
                                            <Calendar className="h-3 w-3" />
                                            {formatDate(featured.publishedAt)}
                                        </span>
                                        <span
                                            className="flex items-center gap-1 text-[10px] font-mono"
                                            style={{ color: muted }}
                                        >
                                            <Clock className="h-3 w-3" />
                                            {featured.readTime ??
                                                estimateReadTime(
                                                    featured.excerpt,
                                                )}{" "}
                                            min read
                                        </span>
                                    </div>

                                    {/* title */}
                                    <h3
                                        className="text-xl md:text-2xl font-mono font-bold leading-snug transition-colors duration-200 group-hover:text-accent"
                                        style={{ color: "#e0e8f0" }}
                                    >
                                        {featured.title}
                                    </h3>

                                    {/* excerpt */}
                                    <p
                                        className="text-[13px] leading-relaxed line-clamp-3"
                                        style={{ color: muted }}
                                    >
                                        {featured.excerpt}
                                    </p>

                                    {/* tags */}
                                    {featured.tags &&
                                        featured.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5">
                                                {featured.tags
                                                    .slice(0, 3)
                                                    .map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-[9px] font-mono px-2 py-0.5 rounded-sm border"
                                                            style={{
                                                                color: `${amber}90`,
                                                                borderColor: `${amber}20`,
                                                                background: `${amber}07`,
                                                            }}
                                                        >
                                                            ▸ {tag}
                                                        </span>
                                                    ))}
                                            </div>
                                        )}
                                </div>

                                {/* read cta */}
                                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-between gap-4 shrink-0">
                                    <span
                                        className="text-[9px] font-mono tracking-widest uppercase"
                                        style={{
                                            color: "rgba(85,102,120,0.4)",
                                        }}
                                    >
                                        #01
                                    </span>
                                    <span
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-200"
                                        style={{
                                            color: amber,
                                            borderColor:
                                                "rgba(192,133,74,0.35)",
                                            background: "rgba(192,133,74,0.07)",
                                        }}
                                    >
                                        Read Article
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* ── REST OF POSTS ── */}
                {rest.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {rest.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.07,
                                }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group relative flex flex-col h-full rounded-sm border overflow-hidden transition-all duration-300"
                                    style={{
                                        borderColor: "rgba(26,42,58,1)",
                                        background: "rgba(14,21,32,0.85)",
                                    }}
                                    onMouseEnter={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.borderColor =
                                            "rgba(74,201,160,0.25)";
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.boxShadow =
                                            `0 8px 28px rgba(74,201,160,0.06)`;
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.borderColor =
                                            "rgba(26,42,58,1)";
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.boxShadow = "none";
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.transform = "translateY(0)";
                                    }}
                                >
                                    {/* scanlines */}
                                    <div
                                        className="pointer-events-none absolute inset-0 opacity-[0.018]"
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
                                            className={`pointer-events-none absolute w-3 h-3 z-10 ${pos} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                            style={{
                                                borderColor:
                                                    "rgba(74,201,160,0.5)",
                                            }}
                                        />
                                    ))}

                                    {/* top teal bar */}
                                    <div
                                        className="h-0.5 w-full shrink-0"
                                        style={{
                                            background: `linear-gradient(to right, ${teal}60, transparent)`,
                                        }}
                                    />

                                    <div className="relative z-10 flex flex-col flex-1 p-5 space-y-3">
                                        {/* index + date */}
                                        <div className="flex items-center justify-between">
                                            <span
                                                className="text-[9px] font-mono"
                                                style={{
                                                    color: "rgba(85,102,120,0.45)",
                                                }}
                                            >
                                                #
                                                {String(index + 2).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>
                                            <span
                                                className="flex items-center gap-1 text-[9px] font-mono"
                                                style={{ color: muted }}
                                            >
                                                <Calendar className="h-2.5 w-2.5" />
                                                {formatDate(post.publishedAt)}
                                            </span>
                                        </div>

                                        {/* title */}
                                        <h3
                                            className="text-[14px] font-mono font-bold leading-snug transition-colors duration-200 group-hover:text-primary"
                                            style={{ color: "#e0e8f0" }}
                                        >
                                            {post.title}
                                        </h3>

                                        {/* excerpt */}
                                        <p
                                            className="text-[12px] leading-relaxed line-clamp-3 flex-1"
                                            style={{ color: muted }}
                                        >
                                            {post.excerpt}
                                        </p>

                                        {/* footer */}
                                        <div
                                            className="flex items-center justify-between pt-3 border-t"
                                            style={{
                                                borderColor:
                                                    "rgba(26,42,58,0.8)",
                                            }}
                                        >
                                            <span
                                                className="flex items-center gap-1 text-[10px] font-mono"
                                                style={{ color: muted }}
                                            >
                                                <Clock className="h-3 w-3" />
                                                {post.readTime ??
                                                    estimateReadTime(
                                                        post.excerpt,
                                                    )}{" "}
                                                min read
                                            </span>
                                            <span
                                                className="flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase transition-colors duration-200 group-hover:text-primary"
                                                style={{ color: teal }}
                                            >
                                                Read
                                                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
