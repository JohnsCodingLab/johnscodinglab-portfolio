"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [inkStyle, setInkStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* sliding ink underline */
    const handleLinkHover = (index: number) => {
        const el = navLinksRef.current[index];
        if (!el) return;
        const parent = el.parentElement?.parentElement;
        if (!parent) return;
        const parentRect = parent.getBoundingClientRect();
        const rect = el.getBoundingClientRect();
        setInkStyle({
            left: rect.left - parentRect.left,
            width: rect.width,
            opacity: 1,
        });
        setActiveLink(links[index].href);
    };

    const handleNavLeave = () => {
        setInkStyle((s) => ({ ...s, opacity: 0 }));
        setActiveLink(null);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
                isScrolled ? "py-3" : "py-5",
            )}
        >
            <div className="container mx-auto px-6 md:px-12 pointer-events-auto">
                <nav
                    className={cn(
                        "relative mx-auto flex max-w-4xl items-center justify-between px-5 py-3 transition-all duration-500",
                        isScrolled
                            ? "rounded-sm border bg-panel/90 backdrop-blur-md shadow-xl shadow-black/30"
                            : "rounded-sm border border-transparent bg-transparent",
                    )}
                    style={
                        isScrolled
                            ? { borderColor: "rgba(74,201,160,0.12)" }
                            : {}
                    }
                >
                    {/* scrolled: top teal line */}
                    {isScrolled && (
                        <div
                            className="absolute top-0 left-6 right-6 h-px"
                            style={{
                                background:
                                    "linear-gradient(to right, transparent, rgba(74,201,160,0.4), transparent)",
                            }}
                        />
                    )}

                    {/* ── LOGO ── */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2.5 shrink-0"
                    >
                        <div
                            className="relative flex h-8 w-8 items-center justify-center rounded-sm border transition-all duration-200 group-hover:border-primary/60 group-hover:shadow-[0_0_12px_rgba(74,201,160,0.2)]"
                            style={{
                                background: "rgba(74,201,160,0.08)",
                                borderColor: "rgba(74,201,160,0.25)",
                            }}
                        >
                            <Terminal
                                size={15}
                                strokeWidth={2}
                                className="text-primary"
                            />
                            {/* pulse dot */}
                            <span
                                className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                                style={{ boxShadow: "0 0 4px #4ac9a0" }}
                            />
                        </div>

                        <div className="leading-none">
                            <span className="block text-[13px] font-bold font-mono tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                                JohnsCodingLab
                            </span>
                            <span className="block text-[9px] font-mono tracking-[0.18em] uppercase text-muted mt-0.5">
                                portfolio
                            </span>
                        </div>
                    </Link>

                    {/* ── DESKTOP LINKS ── */}
                    <div
                        className="relative hidden md:flex items-center gap-1"
                        onMouseLeave={handleNavLeave}
                    >
                        {/* sliding ink */}
                        <div
                            className="absolute bottom-0 h-px bg-primary transition-all duration-200"
                            style={{
                                left: inkStyle.left,
                                width: inkStyle.width,
                                opacity: inkStyle.opacity,
                                boxShadow: "0 0 6px rgba(74,201,160,0.5)",
                            }}
                        />

                        {links.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                ref={(el) => {
                                    navLinksRef.current[i] = el;
                                }}
                                onMouseEnter={() => handleLinkHover(i)}
                                className={cn(
                                    "relative px-4 py-2 text-[12px] font-mono tracking-widest uppercase transition-colors duration-150",
                                    activeLink === link.href
                                        ? "text-foreground"
                                        : "text-muted hover:text-foreground",
                                )}
                            >
                                <span className="mr-1 text-primary opacity-40">
                                    {String(i + 1).padStart(2, "0")}.
                                </span>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* ── CTA ── */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="group relative inline-flex h-9 items-center justify-center gap-2 rounded-sm border px-5 text-[11px] font-mono font-bold tracking-widest uppercase transition-all duration-200 overflow-hidden hover:shadow-[0_0_20px_rgba(74,201,160,0.15)] active:scale-95"
                            style={{
                                borderColor: "rgba(74,201,160,0.35)",
                                color: "#4ac9a0",
                                background: "rgba(74,201,160,0.06)",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "rgba(74,201,160,0.14)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.6)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "rgba(74,201,160,0.06)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.35)";
                            }}
                        >
                            <span className="relative z-10">
                                Let&apos;s Talk
                            </span>
                            <span className="text-[10px] opacity-50 relative z-10">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* ── MOBILE MENU BUTTON ── */}
                    <button
                        className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1 rounded-sm border transition-all"
                        style={{
                            borderColor: "rgba(74,201,160,0.25)",
                            background: "rgba(74,201,160,0.05)",
                        }}
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className="block h-px w-full bg-primary transition-all duration-200"
                            style={{
                                transform: menuOpen
                                    ? "translateY(5px) rotate(45deg)"
                                    : "none",
                            }}
                        />
                        <span
                            className="block h-px w-full bg-primary transition-all duration-200"
                            style={{ opacity: menuOpen ? 0 : 1 }}
                        />
                        <span
                            className="block h-px w-full bg-primary transition-all duration-200"
                            style={{
                                transform: menuOpen
                                    ? "translateY(-5px) rotate(-45deg)"
                                    : "none",
                            }}
                        />
                    </button>
                </nav>

                {/* ── MOBILE MENU ── */}
                <div
                    className="md:hidden mx-auto max-w-4xl overflow-hidden transition-all duration-300"
                    style={{
                        maxHeight: menuOpen ? "300px" : "0",
                        opacity: menuOpen ? 1 : 0,
                    }}
                >
                    <div
                        className="mt-1 rounded-sm border p-4 space-y-1"
                        style={{
                            background: "rgba(14,21,32,0.97)",
                            borderColor: "rgba(74,201,160,0.15)",
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        {links.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-[12px] font-mono tracking-widest uppercase text-muted transition-all hover:text-foreground hover:bg-white/5"
                            >
                                <span className="text-primary opacity-40 text-[10px]">
                                    {String(i + 1).padStart(2, "0")}.
                                </span>
                                {link.label}
                            </Link>
                        ))}
                        <div
                            className="pt-2 border-t"
                            style={{ borderColor: "rgba(74,201,160,0.1)" }}
                        >
                            <Link
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm border text-[11px] font-mono font-bold tracking-widest uppercase transition-all"
                                style={{
                                    borderColor: "rgba(74,201,160,0.35)",
                                    color: "#4ac9a0",
                                    background: "rgba(74,201,160,0.06)",
                                }}
                            >
                                Let&apos;s Talk →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
