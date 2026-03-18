import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Terminal, User, Clock } from "lucide-react";
import type { Metadata } from "next";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://portfolio-api-pm4w.onrender.com/api";

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    coverImage?: string;
    tags: string[];
    publishedAt?: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        const res = await fetch(`${API_URL}/blog/${slug}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data || json;
    } catch {
        return null;
    }
}

function estimateReadTime(content: string): number {
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return { title: "Post Not Found" };
    return {
        title: `${post.title} | JohnsCodingLab Blog`,
        description: post.excerpt || "Read this article on my portfolio",
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) notFound();

    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : "Unpublished";

    const readTime = estimateReadTime(post.content);

    return (
        <main className="min-h-screen pb-32" style={{ background: "#080d14" }}>
            {/* bg grid */}
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(${teal} 1px, transparent 1px), linear-gradient(90deg, ${teal} 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* scanlines */}
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-[0.015]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                }}
            />

            {/* ── STICKY NAV BAR ── */}
            <div
                className="pt-40 z-50 border-b backdrop-blur-md"
                style={{
                    borderColor: "rgba(26,42,58,1)",
                    background: "rgba(8,13,20,0.9)",
                }}
            >
                {/* top teal line */}
                <div
                    className="h-px w-full"
                    style={{
                        background: `linear-gradient(to right, transparent, rgba(74,201,160,0.3) 30%, rgba(74,201,160,0.15) 70%, transparent)`,
                    }}
                />

                <div className="container mx-auto max-w-4xl px-6 md:px-12 py-3 flex items-center justify-between">
                    <Link
                        href="/#blog"
                        className="group inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-150 px-3 py-1.5 rounded-sm border"
                        style={{
                            color: muted,
                            borderColor: "rgba(26,42,58,1)",
                        }}
                        onMouseEnter={undefined}
                    >
                        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                        Back to Blog
                    </Link>

                    <div
                        className="flex items-center gap-2 text-[10px] font-mono"
                        style={{ color: "rgba(85,102,120,0.5)" }}
                    >
                        <Terminal
                            className="h-3 w-3"
                            style={{ color: "rgba(74,201,160,0.4)" }}
                        />
                        <span>blog</span>
                        <span style={{ color: "rgba(74,201,160,0.3)" }}>/</span>
                        <span
                            className="truncate max-w-[140px]"
                            style={{ color: `rgba(74,201,160,0.6)` }}
                        >
                            {slug}
                        </span>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-6 md:px-12 max-w-4xl pt-14 md:pt-20">
                {/* ── ARTICLE HEADER ── */}
                <header className="mb-12 space-y-6">
                    {/* tags */}
                    {post.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-sm border"
                                    style={{
                                        color: amber,
                                        borderColor: "rgba(192,133,74,0.3)",
                                        background: "rgba(192,133,74,0.07)",
                                    }}
                                >
                                    <Tag className="h-2.5 w-2.5" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* title */}
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] font-mono"
                        style={{ color: "#e0e8f0" }}
                    >
                        {post.title}
                    </h1>

                    {/* excerpt */}
                    {post.excerpt && (
                        <p
                            className="text-base leading-relaxed max-w-2xl"
                            style={{ color: muted }}
                        >
                            {post.excerpt}
                        </p>
                    )}

                    {/* meta row */}
                    <div
                        className="flex flex-wrap items-center gap-5 py-4 border-t border-b text-[11px] font-mono"
                        style={{
                            borderColor: "rgba(26,42,58,0.8)",
                            color: muted,
                        }}
                    >
                        <span className="flex items-center gap-1.5">
                            <User
                                className="h-3 w-3"
                                style={{ color: `rgba(74,201,160,0.5)` }}
                            />
                            JohnsCodingLab
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar
                                className="h-3 w-3"
                                style={{ color: `rgba(74,201,160,0.5)` }}
                            />
                            {formattedDate}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock
                                className="h-3 w-3"
                                style={{ color: `rgba(74,201,160,0.5)` }}
                            />
                            {readTime} min read
                        </span>

                        {/* status pill */}
                        <span
                            className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border tracking-widest uppercase text-[9px]"
                            style={{
                                color: teal,
                                borderColor: "rgba(74,201,160,0.25)",
                                background: "rgba(74,201,160,0.06)",
                            }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Published
                        </span>
                    </div>
                </header>

                {/* ── COVER IMAGE ── */}
                {post.coverImage && (
                    <div
                        className="relative w-full mb-14 rounded-sm overflow-hidden border"
                        style={{
                            aspectRatio: "21/9",
                            borderColor: "rgba(26,42,58,1)",
                        }}
                    >
                        {/* corner accents */}
                        {[
                            "top-2 left-2 border-t border-l",
                            "top-2 right-2 border-t border-r",
                            "bottom-2 left-2 border-b border-l",
                            "bottom-2 right-2 border-b border-r",
                        ].map((pos, i) => (
                            <div
                                key={i}
                                className={`absolute w-4 h-4 z-20 ${pos}`}
                                style={{ borderColor: "rgba(74,201,160,0.45)" }}
                            />
                        ))}
                        <div
                            className="pointer-events-none absolute inset-0 z-10 opacity-[0.025]"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                            }}
                        />
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* bottom fade */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
                            style={{
                                background:
                                    "linear-gradient(to top, #080d14, transparent)",
                            }}
                        />
                    </div>
                )}

                {/* ── CONTENT ── */}
                <div
                    className="prose-custom leading-relaxed font-sans text-base md:text-[17px]"
                    style={
                        {
                            "--prose-teal": teal,
                            "--prose-amber": amber,
                            "--prose-code-bg": "rgba(14,21,32,0.9)",
                            "--prose-pre-bg": "#080d14",
                            "--prose-border": "rgba(26,42,58,1)",
                        } as React.CSSProperties
                    }
                >
                    <style>{`
                        .prose-custom p                  { margin-bottom: 1.5rem; color: #8899aa; line-height: 1.85; }
                        .prose-custom h1                 { font-size: 1.875rem; font-weight: 800; font-family: monospace; color: #e0e8f0; margin: 3rem 0 1.25rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(26,42,58,1); }
                        .prose-custom h2                 { font-size: 1.5rem;   font-weight: 700; font-family: monospace; color: #e0e8f0; margin: 2.5rem 0 1rem;  padding-bottom: 0.5rem; border-bottom: 1px solid rgba(26,42,58,1); }
                        .prose-custom h3                 { font-size: 1.25rem;  font-weight: 700; font-family: monospace; color: #e0e8f0; margin: 2rem 0 0.75rem; }
                        .prose-custom h2::before         { content: "// "; color: rgba(74,201,160,0.4); font-size: 0.9em; }
                        .prose-custom h3::before         { content: "# ";  color: rgba(192,133,74,0.5); font-size: 0.9em; }
                        .prose-custom ul                 { list-style: none; padding-left: 0; margin-bottom: 1.5rem; }
                        .prose-custom ul li              { position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; color: #8899aa; }
                        .prose-custom ul li::before      { content: "▸"; position: absolute; left: 0; color: ${teal}; font-size: 0.75rem; top: 0.2rem; }
                        .prose-custom ol                 { padding-left: 1.5rem; margin-bottom: 1.5rem; }
                        .prose-custom ol li              { margin-bottom: 0.5rem; color: #8899aa; }
                        .prose-custom ol li::marker      { color: ${teal}; font-family: monospace; font-size: 0.85rem; }
                        .prose-custom blockquote         { border-left: 2px solid ${teal}; padding: 0.75rem 1.25rem; margin: 2rem 0; background: rgba(74,201,160,0.04); border-radius: 0 4px 4px 0; }
                        .prose-custom blockquote p       { color: #aabbcc; font-style: italic; margin: 0; }
                        .prose-custom a                  { color: ${teal}; text-decoration: underline; text-underline-offset: 3px; transition: color 0.15s; }
                        .prose-custom a:hover            { color: #7de8c0; }
                        .prose-custom strong             { font-weight: 700; color: #e0e8f0; }
                        .prose-custom em                 { color: #aabbcc; }
                        .prose-custom code               { font-family: monospace; font-size: 0.875em; padding: 0.2em 0.5em; border-radius: 4px; background: rgba(14,21,32,0.9); color: ${teal}; border: 1px solid rgba(74,201,160,0.2); }
                        .prose-custom pre                { background: #080d14; border: 1px solid rgba(26,42,58,1); border-radius: 4px; padding: 1.25rem; overflow-x: auto; margin: 1.5rem 0; position: relative; }
                        .prose-custom pre::before        { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(to right, ${teal}60, transparent); }
                        .prose-custom pre code           { background: transparent; border: none; padding: 0; color: #c0d0e0; font-size: 0.9em; }
                        .prose-custom hr                 { border: none; border-top: 1px solid rgba(26,42,58,1); margin: 3rem 0; }
                        .prose-custom img                { max-width: 100%; height: auto; border-radius: 4px; border: 1px solid rgba(26,42,58,1); margin: 2rem auto; display: block; }
                        .prose-custom table              { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.9rem; }
                        .prose-custom th                 { text-align: left; padding: 0.6rem 1rem; font-family: monospace; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: ${teal}; border-bottom: 1px solid rgba(74,201,160,0.2); }
                        .prose-custom td                 { padding: 0.6rem 1rem; color: #8899aa; border-bottom: 1px solid rgba(26,42,58,0.6); }
                        .prose-custom tr:hover td        { background: rgba(74,201,160,0.03); }
                    `}</style>

                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </article>

            {/* ── FOOTER / END OF POST ── */}
            <div className="container mx-auto px-6 md:px-12 max-w-4xl mt-20">
                <div
                    className="rounded-sm border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{
                        borderColor: "rgba(26,42,58,1)",
                        background: "rgba(14,21,32,0.6)",
                    }}
                >
                    <div className="text-center sm:text-left">
                        <p
                            className="text-[12px] font-mono font-bold mb-1"
                            style={{ color: "#e0e8f0" }}
                        >
                            Thanks for reading
                        </p>
                        <p
                            className="text-[11px] font-mono"
                            style={{ color: muted }}
                        >
                            More articles coming soon
                        </p>
                    </div>

                    <Link
                        href="/#blog"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-150"
                        style={{
                            color: teal,
                            borderColor: "rgba(74,201,160,0.3)",
                            background: "rgba(74,201,160,0.06)",
                        }}
                    >
                        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                        All Articles
                    </Link>
                </div>

                {/* dot terminator */}
                <div className="flex items-center justify-center gap-3 mt-12">
                    <div
                        className="h-px flex-1"
                        style={{ background: "rgba(26,42,58,0.6)" }}
                    />
                    <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                            background: teal,
                            boxShadow: `0 0 8px ${teal}`,
                        }}
                    />
                    <div
                        className="h-px flex-1"
                        style={{ background: "rgba(26,42,58,0.6)" }}
                    />
                </div>
            </div>
        </main>
    );
}
