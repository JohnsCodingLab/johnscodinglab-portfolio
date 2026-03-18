"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Terminal, Code, Database, Cpu, User } from "lucide-react";

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";

const skills = [
    {
        icon: Code,
        name: "Languages",
        tools: ["Javascript", "Typescript", "Java", "Python"],
        color: muted,
    },
    {
        icon: Code,
        name: "Frontend",
        tools: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
        color: teal,
    },
    {
        icon: Database,
        name: "Backend",
        tools: [
            "NestJS",
            "Node.js",
            "Express",
            "Springboot",
            "Django",
            "PostgreSQL",
        ],
        color: amber,
    },
    {
        icon: Cpu,
        name: "DevOps",
        tools: ["Docker", "CI/CD", "Jest", "Microservices"],
        color: "#aa88ff",
    },
];

const facts = [
    { label: "Name", value: "Levi John Favour" },
    { label: "Role", value: "Full-Stack Engineer" },
    { label: "Focus", value: "Backend + Frontend" },
    { label: "Status", value: "Open to work", highlight: true },
];

export function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
            {/* section bg grid */}
            {/* <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(${teal} 1px, transparent 1px), linear-gradient(90deg, ${teal} 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            /> */}

            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                {/* ── SECTION HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="flex items-center gap-3">
                        <span
                            className="text-[11px] font-mono tracking-[0.2em] uppercase"
                            style={{ color: `rgba(74,201,160,0.5)` }}
                        >
                            01.
                        </span>
                        <User className="h-4 w-4 text-primary" />
                        <h2 className="text-2xl font-bold font-mono tracking-tight text-foreground">
                            _about_me
                        </h2>
                    </div>
                    <div
                        className="h-px flex-1 max-w-xs"
                        style={{
                            background: `linear-gradient(to right, rgba(74,201,160,0.3), transparent)`,
                        }}
                    />
                    <span
                        className="text-[10px] font-mono tracking-widest"
                        style={{ color: `rgba(85,102,120,0.5)` }}
                    >
                        who i am
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 items-start">
                    {/* ── LEFT: TEXT ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 space-y-8"
                    >
                        {/* paragraphs */}
                        <div
                            className="space-y-5 text-sm leading-loose"
                            style={{ color: muted }}
                        >
                            <p>
                                I&apos;m a dedicated Full-Stack Software
                                Engineer driven by an insatiable curiosity for
                                how complex systems operate — and a desire to
                                build solutions that are not only functional but
                                architecturally sound.
                            </p>
                            <p>
                                My primary focus is developing enterprise-grade
                                backend systems with{" "}
                                <span
                                    className="font-mono px-1.5 py-0.5 rounded-sm text-primary"
                                    style={{
                                        background: "rgba(74,201,160,0.08)",
                                        border: "1px solid rgba(74,201,160,0.15)",
                                    }}
                                >
                                    NestJS
                                </span>{" "}
                                and{" "}
                                <span
                                    className="font-mono px-1.5 py-0.5 rounded-sm text-primary"
                                    style={{
                                        background: "rgba(74,201,160,0.08)",
                                        border: "1px solid rgba(74,201,160,0.15)",
                                    }}
                                >
                                    Node.js
                                </span>
                                , while crafting highly interactive frontends
                                with{" "}
                                <span
                                    className="font-mono px-1.5 py-0.5 rounded-sm text-primary"
                                    style={{
                                        background: "rgba(74,201,160,0.08)",
                                        border: "1px solid rgba(74,201,160,0.15)",
                                    }}
                                >
                                    Next.js
                                </span>{" "}
                                and{" "}
                                <span
                                    className="font-mono px-1.5 py-0.5 rounded-sm text-primary"
                                    style={{
                                        background: "rgba(74,201,160,0.08)",
                                        border: "1px solid rgba(74,201,160,0.15)",
                                    }}
                                >
                                    Tailwind CSS
                                </span>
                                .
                            </p>
                            <p>
                                Whether I&apos;m designing a rate-limited API
                                gateway, architecting a PostgreSQL schema, or
                                orchestrating micro-interactions with Framer
                                Motion — I believe great software is the perfect
                                balance of raw performance and intuitive design.
                            </p>
                        </div>

                        {/* quick facts table */}
                        <div
                            className="rounded-sm border overflow-hidden"
                            style={{
                                borderColor: "rgba(26,42,58,1)",
                                background: "rgba(14,21,32,0.6)",
                            }}
                        >
                            <div
                                className="px-4 py-2 border-b flex items-center gap-2 text-[9px] font-mono tracking-[0.2em] uppercase"
                                style={{
                                    borderColor: "rgba(26,42,58,1)",
                                    color: `rgba(74,201,160,0.5)`,
                                }}
                            >
                                <Terminal className="h-3 w-3" />
                                quick_facts.json
                            </div>
                            <div
                                className="divide-y"
                                style={{ borderColor: "rgba(26,42,58,0.8)" }}
                            >
                                {facts.map(({ label, value, highlight }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-4 px-4 py-2.5 text-[12px] font-mono"
                                    >
                                        <span
                                            className="w-16 shrink-0"
                                            style={{
                                                color: `rgba(85,102,120,0.8)`,
                                            }}
                                        >
                                            {label}
                                        </span>
                                        <span
                                            style={{
                                                color: "rgba(80,80,120,0.5)",
                                            }}
                                        >
                                            :
                                        </span>
                                        {highlight ? (
                                            <span
                                                className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm border text-[10px] tracking-widest uppercase"
                                                style={{
                                                    color: teal,
                                                    borderColor:
                                                        "rgba(74,201,160,0.3)",
                                                    background:
                                                        "rgba(74,201,160,0.07)",
                                                }}
                                            >
                                                <span
                                                    className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                                                    style={{
                                                        boxShadow: `0 0 4px ${teal}`,
                                                    }}
                                                />
                                                {value}
                                            </span>
                                        ) : (
                                            <span style={{ color: "#e0e8f0" }}>
                                                &quot;{value}&quot;
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: IMAGE ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2 relative mx-auto w-full max-w-xs lg:max-w-none"
                    >
                        {/* glow behind */}
                        <div
                            className="absolute inset-0 -z-10 rounded-full opacity-20"
                            style={{
                                background: `radial-gradient(circle, ${teal} 0%, transparent 70%)`,
                                filter: "blur(60px)",
                            }}
                        />

                        {/* offset decorative square */}
                        <div
                            className="absolute translate-x-3 translate-y-3 inset-0 -z-10 rounded-sm border"
                            style={{ borderColor: "rgba(74,201,160,0.15)" }}
                        />

                        {/* main frame */}
                        <div
                            className="relative z-10 rounded-sm border-2 p-2 transition-all duration-500 hover:scale-[1.015] group"
                            style={{
                                borderColor: "rgba(74,201,160,0.25)",
                                background: "rgba(14,21,32,0.8)",
                                boxShadow: "0 0 40px rgba(74,201,160,0.06)",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.45)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow =
                                    "0 0 40px rgba(74,201,160,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(74,201,160,0.25)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow =
                                    "0 0 40px rgba(74,201,160,0.06)";
                            }}
                        >
                            {/* corner accents */}
                            {[
                                "top-0 left-0 border-t border-l",
                                "top-0 right-0 border-t border-r",
                                "bottom-0 left-0 border-b border-l",
                                "bottom-0 right-0 border-b border-r",
                            ].map((pos, i) => (
                                <div
                                    key={i}
                                    className={`absolute w-4 h-4 ${pos} z-20`}
                                    style={{
                                        borderColor: `rgba(74,201,160,0.6)`,
                                    }}
                                />
                            ))}

                            {/* image */}
                            <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm">
                                <Image
                                    src="https://res.cloudinary.com/df48sytdb/image/upload/v1773419216/me_m7uyyu.jpg"
                                    alt="Levi John Favour"
                                    fill
                                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                                />

                                {/* scan line sweep on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(to bottom, transparent 40%, rgba(74,201,160,0.08) 50%, transparent 60%)",
                                    }}
                                />

                                {/* bottom overlay bar */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex items-center gap-2"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(8,13,20,0.95), transparent)",
                                    }}
                                >
                                    <Terminal
                                        className="h-3 w-3 shrink-0"
                                        style={{ color: teal }}
                                    />
                                    <span
                                        className="text-[9px] font-mono tracking-[0.2em] uppercase"
                                        style={{ color: teal }}
                                    >
                                        sys_active
                                    </span>
                                    <span
                                        className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse"
                                        style={{
                                            background: teal,
                                            boxShadow: `0 0 4px ${teal}`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* amber badge — floating top right */}
                        <div
                            className="absolute -top-3 -right-3 z-20 px-2.5 py-1 rounded-sm border text-[9px] font-mono tracking-widest uppercase"
                            style={{
                                color: amber,
                                borderColor: "rgba(192,133,74,0.35)",
                                background: "rgba(8,13,20,0.95)",
                            }}
                        >
                            Full-Stack
                        </div>
                    </motion.div>
                </div>
                {/* skill cards */}
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group rounded-sm border p-4 transition-all duration-200"
                            style={{
                                borderColor: "rgba(26,42,58,1)",
                                background: "rgba(14,21,32,0.6)",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = `${skill.color}30`;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = `0 0 20px ${skill.color}08`;
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(26,42,58,1)";
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = "none";
                            }}
                        >
                            {/* top color bar */}
                            <div
                                className="h-0.5 w-full mb-4 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, ${skill.color}60, transparent)`,
                                }}
                            />

                            <div className="flex items-center gap-2 mb-3">
                                <div
                                    className="w-6 h-6 rounded-sm border flex items-center justify-center"
                                    style={{
                                        borderColor: `${skill.color}25`,
                                        background: `${skill.color}0d`,
                                    }}
                                >
                                    <skill.icon
                                        className="h-3 w-3"
                                        style={{ color: skill.color }}
                                    />
                                </div>
                                <span
                                    className="text-[11px] font-mono font-bold tracking-widest uppercase"
                                    style={{ color: "#e0e8f0" }}
                                >
                                    {skill.name}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-1">
                                {skill.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm border"
                                        style={{
                                            color: `${skill.color}90`,
                                            borderColor: `${skill.color}18`,
                                            background: `${skill.color}07`,
                                        }}
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
