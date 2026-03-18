"use client";

import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";

const experiences = [
    {
        id: 1,
        company: "SAULTECH",
        role: "Frontend Developer",
        period: "2022 — 2025",
        location: "Remote",
        type: "Full-time",
        current: true,
        description:
            "Built modern, responsive web interfaces using React.js, Next.js, Tailwind CSS, and Zustand. Collaborated cross-functionally with designers and backend engineers.",
        highlights: [
            "Reusable component architecture, improving dev speed",
            "Optimized load performance & reduced bundle sizes",
            "Consistent UI/UX across cross-functional teams",
        ],
        techStack: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "JS"],
        color: teal,
    },
    {
        id: 2,
        company: "Gighub",
        role: "Frontend Developer",
        period: "11/2024 — 04/2025",
        location: "Remote",
        type: "Project",
        current: false,
        description:
            "Developed a job matching and professional networking platform with responsive dashboards and analytics features.",
        highlights: [
            "Responsive dashboards with modern UI/UX patterns",
            "Charting libraries for analytics visualization",
            "Efficient state management using Zustand",
        ],
        techStack: ["React.js", "Next.js", "Zustand", "Tailwind CSS"],
        color: teal,
    },
    {
        id: 3,
        company: "Church Pastoral Assignment System",
        role: "Full-Stack Developer",
        period: "2021",
        location: "Gombe, Nigeria",
        type: "Project",
        current: false,
        description:
            "Built a field-assignment management platform for large-scale pastoral deployments and assignments.",
        highlights: [
            "Managed assignments for 1000+ pastors annually",
            "Improved efficiency by 70% with conflict detection",
            "Scalable APIs + frontend dashboard for insights",
        ],
        techStack: ["Java", "Spring Boot", "React.js", "REST APIs"],
        color: amber,
    },
    {
        id: 4,
        company: "United States of Africa (USAF)",
        role: "Frontend Developer",
        period: "2022",
        location: "Remote",
        type: "Volunteer",
        current: false,
        description:
            "Contributed to user-facing web apps for a pan-African initiative in a collaborative agile environment.",
        highlights: [
            "Responsive web apps using ReactJS",
            "Agile sprints and cross-team code reviews",
            "Git-based version control in team setting",
        ],
        techStack: ["React.js", "JavaScript", "HTML", "CSS", "Git"],
        color: amber,
    },
];

export function Experience() {
    return (
        <section
            id="experience"
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
                    className="flex items-center gap-3 mb-14"
                >
                    <span
                        className="text-[11px] font-mono tracking-[0.2em] uppercase"
                        style={{ color: "rgba(74,201,160,0.5)" }}
                    >
                        03.
                    </span>
                    <Briefcase className="h-4 w-4 text-primary" />
                    <h2 className="text-2xl font-bold font-mono tracking-tight text-foreground">
                        _experience
                    </h2>
                    <div
                        className="h-px flex-1 max-w-xs"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(74,201,160,0.3), transparent)",
                        }}
                    />
                    <span
                        className="hidden md:block text-[10px] font-mono tracking-widest"
                        style={{ color: "rgba(85,102,120,0.5)" }}
                    >
                        where i&apos;ve worked
                    </span>
                </motion.div>

                {/* ── 2-COLUMN GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="group relative rounded-sm border overflow-hidden flex flex-col transition-all duration-300"
                            style={{
                                borderColor: "rgba(26,42,58,1)",
                                background: "rgba(14,21,32,0.85)",
                            }}
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = `${exp.color}35`;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.boxShadow = `0 0 28px ${exp.color}09`;
                                (
                                    e.currentTarget as HTMLElement
                                ).style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(26,42,58,1)";
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
                                    style={{ borderColor: `${exp.color}55` }}
                                />
                            ))}

                            {/* top color bar */}
                            <div
                                className="h-0.5 w-full relative z-10 shrink-0"
                                style={{
                                    background: `linear-gradient(to right, ${exp.color}80, ${exp.color}20, transparent)`,
                                }}
                            />

                            {/* ── CARD HEADER ── */}
                            <div
                                className="relative z-10 px-5 py-4 border-b space-y-3"
                                style={{ borderColor: "rgba(26,42,58,0.8)" }}
                            >
                                {/* index + badges row */}
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-[9px] font-mono"
                                        style={{
                                            color: "rgba(85,102,120,0.45)",
                                        }}
                                    >
                                        #{String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        {exp.current && (
                                            <span
                                                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border text-[9px] font-mono tracking-widest uppercase"
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
                                                Current
                                            </span>
                                        )}
                                        <span
                                            className="px-2 py-0.5 rounded-sm border text-[9px] font-mono tracking-widest uppercase"
                                            style={{
                                                color: muted,
                                                borderColor: "rgba(26,42,58,1)",
                                            }}
                                        >
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>

                                {/* role + company */}
                                <div>
                                    <h3
                                        className="text-[14px] font-mono font-bold leading-snug"
                                        style={{ color: "#e0e8f0" }}
                                    >
                                        {exp.role}
                                    </h3>
                                    <span
                                        className="text-[12px] font-mono"
                                        style={{ color: exp.color }}
                                    >
                                        @ {exp.company}
                                    </span>
                                </div>

                                {/* period + location */}
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span
                                        className="flex items-center gap-1 text-[10px] font-mono"
                                        style={{ color: muted }}
                                    >
                                        <Calendar className="h-3 w-3" />
                                        {exp.period}
                                    </span>
                                    <span
                                        className="flex items-center gap-1 text-[10px] font-mono"
                                        style={{ color: muted }}
                                    >
                                        <MapPin className="h-3 w-3" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            {/* ── CARD BODY ── */}
                            <div className="relative z-10 px-5 py-4 flex flex-col flex-1 space-y-3">
                                <p
                                    className="text-[12px] leading-relaxed font-sans"
                                    style={{ color: muted }}
                                >
                                    {exp.description}
                                </p>

                                {/* highlights */}
                                <div className="space-y-1.5 flex-1">
                                    {exp.highlights.map((point, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-2 text-[11px] font-mono"
                                        >
                                            <ArrowRight
                                                className="h-3 w-3 mt-0.5 shrink-0"
                                                style={{ color: exp.color }}
                                            />
                                            <span style={{ color: "#8899aa" }}>
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* tech stack */}
                                <div
                                    className="flex flex-wrap gap-1.5 pt-3 border-t"
                                    style={{
                                        borderColor: "rgba(26,42,58,0.8)",
                                    }}
                                >
                                    {exp.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[9px] font-mono px-2 py-0.5 rounded-sm border"
                                            style={{
                                                color: `${exp.color}90`,
                                                borderColor: `${exp.color}20`,
                                                background: `${exp.color}07`,
                                            }}
                                        >
                                            ▸ {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
