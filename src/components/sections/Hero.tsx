"use client";

import { motion } from "motion/react";
import { ArrowRight, Terminal, MapPin, Code2, Layers } from "lucide-react";
import Image from "next/image";

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";
// const subtle = "rgba(26,42,58,0.8)";

const stats = [
    { value: "3+", label: "Years exp." },
    { value: "20+", label: "Projects built" },
    { value: "∞", label: "Coffee cups" },
];

const techBadges = ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker"];

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
            {/* ── BACKGROUND ELEMENTS ── */}
            {/* Grid pattern */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
                style={{
                    backgroundImage: `linear-gradient(${teal} 1px, transparent 1px), linear-gradient(90deg, ${teal} 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Radial glow — teal center */}
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12]"
                style={{
                    background: `radial-gradient(circle, ${teal} 0%, transparent 70%)`,
                }}
            />

            {/* Amber glow top-right */}
            <div
                className="pointer-events-none absolute top-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full opacity-[0.08]"
                style={{
                    background: `radial-gradient(circle, ${amber} 0%, transparent 70%)`,
                }}
            />

            {/* Scanline overlay */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.018]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
                }}
            />

            {/* ── MAIN GRID ── */}
            <div className="container relative mx-auto grid min-h-[calc(100vh-96px)] grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
                {/* ── LEFT: TEXT CONTENT ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col space-y-8 z-10"
                >
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center self-start gap-2 rounded-sm border px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase backdrop-blur-sm"
                        style={{
                            borderColor: `rgba(74,201,160,0.3)`,
                            background: `rgba(74,201,160,0.07)`,
                            color: teal,
                        }}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                            style={{ boxShadow: `0 0 5px ${teal}` }}
                        />
                        <Terminal className="h-3 w-3" />
                        Available for new opportunities
                    </motion.div>

                    {/* Heading */}
                    <div className="space-y-3">
                        {/* small label */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[11px] font-mono tracking-[0.25em] uppercase"
                            style={{ color: muted }}
                        >
                            full-stack software engineer
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-[64px] leading-[1.05]"
                        >
                            Crafting{" "}
                            <span
                                className="relative inline-block text-primary"
                                style={{
                                    textShadow: `0 0 40px rgba(74,201,160,0.3)`,
                                }}
                            >
                                Scalable
                                {/* underline accent */}
                                <span
                                    className="absolute -bottom-1 left-0 h-0.5 w-full"
                                    style={{
                                        background: `linear-gradient(to right, ${teal}, transparent)`,
                                    }}
                                />
                            </span>
                            <br />
                            Digital{" "}
                            <span className="text-foreground/80">
                                Experiences
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="max-w-lg text-base sm:text-lg leading-relaxed"
                            style={{ color: muted }}
                        >
                            Building robust backends, clean architecture, and
                            engaging modern interfaces — one commit at a time.
                        </motion.p>
                    </div>

                    {/* Tech stack badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-2"
                    >
                        {techBadges.map((tech, i) => (
                            <span
                                key={tech}
                                className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono rounded-sm border"
                                style={{
                                    color: `rgba(74,201,160,0.75)`,
                                    borderColor: `rgba(74,201,160,0.18)`,
                                    background: `rgba(74,201,160,0.05)`,
                                    animationDelay: `${i * 60}ms`,
                                }}
                            >
                                <span
                                    style={{ color: `rgba(74,201,160,0.35)` }}
                                >
                                    ▸
                                </span>
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className="flex flex-col gap-3 sm:flex-row"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-sm border px-7 text-[12px] font-mono font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.98]"
                            style={{
                                background: `linear-gradient(135deg, rgba(74,201,160,0.18), rgba(74,201,160,0.08))`,
                                borderColor: `rgba(74,201,160,0.45)`,
                                color: teal,
                                boxShadow: `0 0 24px rgba(74,201,160,0.1)`,
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background = `rgba(74,201,160,0.2)`;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow =
                                    `0 0 32px rgba(74,201,160,0.2)`;
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.background =
                                    `linear-gradient(135deg, rgba(74,201,160,0.18), rgba(74,201,160,0.08))`;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow =
                                    `0 0 24px rgba(74,201,160,0.1)`;
                            }}
                        >
                            <Code2 className="h-3.5 w-3.5" />
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="group inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-sm border px-7 text-[12px] font-mono font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.98]"
                            style={{
                                borderColor: `rgba(26,42,58,1)`,
                                color: `#e0e8f0`,
                                background: `rgba(14,21,32,0.8)`,
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = `rgba(74,201,160,0.3)`;
                                (e.currentTarget as HTMLElement).style.color =
                                    teal;
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = `rgba(26,42,58,1)`;
                                (e.currentTarget as HTMLElement).style.color =
                                    `#e0e8f0`;
                            }}
                        >
                            Contact Me
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                        className="flex items-center gap-6 pt-2"
                    >
                        {stats
                            .map((stat, i) => (
                                <div key={stat.label}>
                                    <div className="flex items-baseline gap-0.5">
                                        <span
                                            className="text-xl font-bold font-mono"
                                            style={{ color: teal }}
                                        >
                                            {stat.value}
                                        </span>
                                    </div>
                                    <p
                                        className="text-[10px] font-mono tracking-widest uppercase mt-0.5"
                                        style={{ color: muted }}
                                    >
                                        {stat.label}
                                    </p>
                                    {i < stats.length - 1 && (
                                        <div className="hidden" />
                                    )}
                                </div>
                            ))
                            .reduce((acc: React.ReactNode[], el, i) => {
                                if (i > 0)
                                    acc.push(
                                        <div
                                            key={`div-${i}`}
                                            className="w-px h-8 self-center"
                                            style={{
                                                background: `rgba(26,42,58,1)`,
                                            }}
                                        />,
                                    );
                                acc.push(el);
                                return acc;
                            }, [])}

                        {/* location */}
                        <div
                            className="ml-auto hidden sm:flex items-center gap-1.5 text-[10px] font-mono"
                            style={{ color: muted }}
                        >
                            <MapPin
                                className="h-3 w-3"
                                style={{ color: `rgba(74,201,160,0.5)` }}
                            />
                            Nigeria
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── RIGHT: IMAGE ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    className="relative hidden lg:flex items-end justify-center h-[620px] w-full"
                >
                    {/* Card frame behind the image */}
                    <div
                        className="absolute inset-x-8 bottom-0 top-8 rounded-sm border"
                        style={{
                            borderColor: `rgba(74,201,160,0.1)`,
                            background: `linear-gradient(160deg, rgba(14,21,32,0.6) 0%, rgba(8,13,20,0.3) 100%)`,
                        }}
                    >
                        {/* grid inside card */}
                        <div
                            className="absolute inset-0 rounded-sm opacity-[0.04]"
                            style={{
                                backgroundImage: `linear-gradient(${teal} 1px, transparent 1px), linear-gradient(90deg, ${teal} 1px, transparent 1px)`,
                                backgroundSize: "32px 32px",
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
                                className={`absolute w-5 h-5 ${pos}`}
                                style={{ borderColor: `rgba(74,201,160,0.5)` }}
                            />
                        ))}

                        {/* top-left label */}
                        <div
                            className="absolute top-3 left-4 flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase"
                            style={{ color: `rgba(74,201,160,0.4)` }}
                        >
                            <Layers className="h-2.5 w-2.5" />
                            Levi John Favour
                        </div>

                        {/* top-right tag */}
                        <div
                            className="absolute top-3 right-4 text-[9px] font-mono px-2 py-0.5 rounded-sm border"
                            style={{
                                color: amber,
                                borderColor: `rgba(192,133,74,0.3)`,
                                background: `rgba(192,133,74,0.08)`,
                            }}
                        >
                            FULL-STACK
                        </div>
                    </div>

                    {/* The actual photo */}
                    <div className="relative z-20 h-full w-full">
                        <Image
                            // src="https://res.cloudinary.com/df48sytdb/image/upload/v1773748325/portfolio/nobg2_151121.png"
                            src="https://res.cloudinary.com/df48sytdb/image/upload/v1773748648/portfolio/nobg2_151121.png"
                            alt="Levi John Favour — Full Stack Developer"
                            fill
                            className="object-contain object-bottom drop-shadow-2xl"
                            priority
                            unoptimized
                        />
                    </div>

                    {/* Bottom glow under feet */}
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-3/5 z-0"
                        style={{
                            background: `radial-gradient(ellipse, rgba(74,201,160,0.12) 0%, transparent 70%)`,
                        }}
                    />

                    {/* Floating info card — bottom left */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute left-0 bottom-24 z-30 rounded-sm border px-4 py-3"
                        style={{
                            background: `rgba(14,21,32,0.95)`,
                            borderColor: `rgba(74,201,160,0.2)`,
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        <p
                            className="text-[10px] font-mono tracking-widest uppercase mb-1"
                            style={{ color: muted }}
                        >
                            Status
                        </p>
                        <div className="flex items-center gap-2">
                            <span
                                className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                                style={{ boxShadow: `0 0 5px ${teal}` }}
                            />
                            <span
                                className="text-[12px] font-mono font-bold"
                                style={{ color: `#e0e8f0` }}
                            >
                                Open to work
                            </span>
                        </div>
                    </motion.div>

                    {/* Floating info card — bottom right */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="absolute right-0 bottom-24 z-30 rounded-sm border px-4 py-3"
                        style={{
                            background: `rgba(14,21,32,0.95)`,
                            borderColor: `rgba(192,133,74,0.2)`,
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        <p
                            className="text-[10px] font-mono tracking-widest uppercase mb-1"
                            style={{ color: muted }}
                        >
                            Based in
                        </p>
                        <div className="flex items-center gap-2">
                            <MapPin
                                className="h-3 w-3"
                                style={{ color: amber }}
                            />
                            <span
                                className="text-[12px] font-mono font-bold"
                                style={{ color: `#e0e8f0` }}
                            >
                                Nigeria, WA
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ── SCROLL HINT ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span
                    className="text-[9px] font-mono tracking-[0.25em] uppercase"
                    style={{ color: `rgba(85,102,120,0.6)` }}
                >
                    scroll
                </span>
                <div
                    className="w-px h-10 origin-top animate-[grow_2s_ease-in-out_infinite]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(74,201,160,0.4), transparent)`,
                    }}
                />
            </motion.div>
        </section>
    );
}
