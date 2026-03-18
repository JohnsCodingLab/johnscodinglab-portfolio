"use client";

import {
    Terminal,
    Github,
    Linkedin,
    Twitter,
    ArrowUp,
    Mail,
} from "lucide-react";

const teal = "#4ac9a0";
const muted = "#556678";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/johnscodinglab",
    },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:levijohnfavour@gmail.com" },
];

export function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            className="relative w-full border-t overflow-hidden"
            style={{ borderColor: "rgba(26,42,58,1)", background: "#080d14" }}
        >
            {/* scanlines */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                }}
            />

            {/* top teal line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background: `linear-gradient(to right, transparent, rgba(74,201,160,0.3) 30%, rgba(74,201,160,0.15) 70%, transparent)`,
                }}
            />

            <div className="relative container mx-auto px-6 md:px-12 max-w-6xl">
                {/* ── TOP ROW ── */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b"
                    style={{ borderColor: "rgba(26,42,58,0.8)" }}
                >
                    {/* brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2.5">
                            <div
                                className="w-7 h-7 rounded-sm border flex items-center justify-center text-[12px] font-mono font-bold shrink-0"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(74,201,160,0.15), rgba(74,201,160,0.06))",
                                    borderColor: "rgba(74,201,160,0.3)",
                                    color: teal,
                                    boxShadow: "0 0 10px rgba(74,201,160,0.1)",
                                }}
                            >
                                J
                            </div>
                            <div>
                                <p
                                    className="text-[13px] font-mono font-bold"
                                    style={{ color: "#e0e8f0" }}
                                >
                                    JohnsCodingLab
                                </p>
                                <p
                                    className="text-[9px] font-mono tracking-[0.2em] uppercase"
                                    style={{ color: "rgba(85,102,120,0.6)" }}
                                >
                                    portfolio · {new Date().getFullYear()}
                                </p>
                            </div>
                        </div>
                        <p
                            className="text-[12px] font-mono leading-relaxed"
                            style={{ color: muted }}
                        >
                            Full-stack engineer building robust systems and
                            engaging digital experiences.
                        </p>
                        {/* status */}
                        <div
                            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border text-[10px] font-mono tracking-widest uppercase"
                            style={{
                                color: teal,
                                borderColor: "rgba(74,201,160,0.25)",
                                background: "rgba(74,201,136,0.06)",
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                                style={{ boxShadow: `0 0 4px ${teal}` }}
                            />
                            Open to work
                        </div>
                    </div>

                    {/* nav links */}
                    <div className="space-y-4">
                        <p
                            className="text-[9px] font-mono tracking-[0.25em] uppercase"
                            style={{ color: "rgba(85,102,120,0.6)" }}
                        >
                            navigation
                        </p>
                        <ul className="space-y-2">
                            {navLinks.map((link, i) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-[12px] font-mono transition-colors duration-150"
                                        style={{ color: muted }}
                                        onMouseEnter={(e) =>
                                            ((
                                                e.currentTarget as HTMLElement
                                            ).style.color = "#e0e8f0")
                                        }
                                        onMouseLeave={(e) =>
                                            ((
                                                e.currentTarget as HTMLElement
                                            ).style.color = muted)
                                        }
                                    >
                                        <span
                                            style={{
                                                color: "rgba(74,201,160,0.3)",
                                                fontSize: "9px",
                                            }}
                                        >
                                            {String(i + 1).padStart(2, "0")}.
                                        </span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* socials */}
                    <div className="space-y-4">
                        <p
                            className="text-[9px] font-mono tracking-[0.25em] uppercase"
                            style={{ color: "rgba(85,102,120,0.6)" }}
                        >
                            connect
                        </p>
                        <ul className="space-y-2">
                            {socials.map(({ icon: Icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target={
                                            href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noreferrer"
                                        className="group flex items-center gap-2.5 text-[12px] font-mono transition-all duration-150"
                                        style={{ color: muted }}
                                        onMouseEnter={(e) =>
                                            ((
                                                e.currentTarget as HTMLElement
                                            ).style.color = teal)
                                        }
                                        onMouseLeave={(e) =>
                                            ((
                                                e.currentTarget as HTMLElement
                                            ).style.color = muted)
                                        }
                                    >
                                        <div
                                            className="w-6 h-6 rounded-sm border flex items-center justify-center transition-all duration-150"
                                            style={{
                                                borderColor: "rgba(26,42,58,1)",
                                                background: "transparent",
                                            }}
                                            onMouseEnter={(e) => {
                                                (
                                                    e.currentTarget as HTMLElement
                                                ).style.borderColor =
                                                    "rgba(74,201,160,0.3)";
                                                (
                                                    e.currentTarget as HTMLElement
                                                ).style.background =
                                                    "rgba(74,201,160,0.07)";
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
                                            <Icon className="h-3 w-3" />
                                        </div>
                                        {label}
                                        <span className="sr-only">{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── BOTTOM ROW ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">
                    <div
                        className="flex items-center gap-2"
                        style={{ color: "rgba(85,102,120,0.6)" }}
                    >
                        <Terminal
                            className="h-3 w-3"
                            style={{ color: "rgba(74,201,160,0.4)" }}
                        />
                        <span className="text-[11px] font-mono">
                            Designed &amp; Built by{" "}
                            <span style={{ color: teal }}>JohnsCodingLab</span>{" "}
                            — © {new Date().getFullYear()}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span
                            className="text-[10px] font-mono"
                            style={{ color: "rgba(85,102,120,0.4)" }}
                        >
                            v1.0.0
                        </span>
                        <div
                            className="w-px h-3"
                            style={{ background: "rgba(26,42,58,1)" }}
                        />
                        {/* back to top */}
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-150 px-2.5 py-1.5 rounded-sm border"
                            style={{
                                borderColor: "rgba(26,42,58,1)",
                                color: muted,
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.3)";
                                (e.currentTarget as HTMLElement).style.color =
                                    teal;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "rgba(74,201,160,0.06)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(26,42,58,1)";
                                (e.currentTarget as HTMLElement).style.color =
                                    muted;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = "transparent";
                            }}
                        >
                            <ArrowUp className="h-3 w-3" />
                            Back to top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
