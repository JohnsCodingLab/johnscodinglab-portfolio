"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    Send,
    Terminal,
    Mail,
    MapPin,
    Github,
    Linkedin,
    MessageSquare,
    Copy,
    Check,
} from "lucide-react";

const teal = "#4ac9a0";
const amber = "#c0854a";
const muted = "#556678";

const inputClass = `
    w-full bg-transparent border rounded-sm px-4 py-2.5 text-sm font-mono
    placeholder:text-[#2a3a4a] outline-none transition-all duration-200
    text-foreground
    border-[rgba(26,42,58,1)]
    focus:border-[rgba(74,201,160,0.5)]
    focus:[box-shadow:0_0_0_1px_rgba(74,201,160,0.1),_0_0_16px_rgba(74,201,160,0.05)]
`;

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "levijohnfavour@gmail.com",
        href: "mailto:levijohnfavour@gmail.com",
        color: teal,
        copyable: true,
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/johnscodinglab",
        href: "https://github.com/johnscodinglab",
        color: "#e0e8f0",
        copyable: false,
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/levijohn",
        href: "https://linkedin.com/in/levijohn",
        color: "#0a8cff",
        copyable: false,
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Nigeria, West Africa",
        href: null,
        color: amber,
        copyable: false,
    },
];

export function Contact() {
    const [copied, setCopied] = useState(false);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Ensure API_URL is available
    const API_URL =
        process.env.NEXT_PUBLIC_API_URL ||
        "https://portfolio-api-pm4w.onrender.com/api";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        const formElement = e.currentTarget;
        const formData = new FormData(formElement);
        const payload = {
            name: formData.get("name")?.toString() || "",
            email: formData.get("email")?.toString() || "",
            subject: formData.get("subject")?.toString() || "New Inquiry",
            message: formData.get("message")?.toString() || "",
        };

        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setSent(true);
                // React event target reset
                formElement.reset();
            } else {
                console.error("Failed to send message:", await res.text());
                alert(
                    "Failed to send message. Please try again or use direct email.",
                );
            }
        } catch (error) {
            console.error("Contact form error:", error);
            alert(
                "Something went wrong. Please check your connection and try again.",
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <section
            id="contact"
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

            {/* radial glow */}
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
                style={{
                    background: `radial-gradient(circle, ${teal} 0%, transparent 70%)`,
                }}
            />

            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-14 space-y-4"
                >
                    {/* section label */}
                    <div className="flex items-center gap-3">
                        <span
                            className="text-[11px] font-mono tracking-[0.2em] uppercase"
                            style={{ color: "rgba(74,201,160,0.5)" }}
                        >
                            03.
                        </span>
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <h2 className="text-2xl font-bold font-mono tracking-tight text-foreground">
                            _get_in_touch
                        </h2>
                    </div>

                    <div
                        className="h-px w-48"
                        style={{
                            background: `linear-gradient(to right, transparent, rgba(74,201,160,0.4), transparent)`,
                        }}
                    />

                    <p
                        className="max-w-lg text-sm leading-relaxed"
                        style={{ color: muted }}
                    >
                        I&apos;m currently open to new opportunities. Whether
                        you have a project proposal, a question, or just want to
                        connect — my inbox is always open.
                    </p>

                    {/* status */}
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border text-[11px] font-mono tracking-widest uppercase"
                        style={{
                            color: teal,
                            borderColor: "rgba(74,201,160,0.3)",
                            background: "rgba(74,201,160,0.07)",
                        }}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                            style={{ boxShadow: `0 0 5px ${teal}` }}
                        />
                        Available for work
                    </div>
                </motion.div>

                {/* ── TWO COLUMN ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* LEFT: contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {/* terminal header */}
                        <div
                            className="rounded-sm border overflow-hidden"
                            style={{
                                borderColor: "rgba(26,42,58,1)",
                                background: "rgba(14,21,32,0.8)",
                            }}
                        >
                            <div
                                className="flex items-center gap-2 px-4 py-2.5 border-b text-[9px] font-mono tracking-[0.2em] uppercase"
                                style={{
                                    borderColor: "rgba(26,42,58,1)",
                                    color: "rgba(74,201,160,0.5)",
                                }}
                            >
                                <Terminal className="h-3 w-3" />
                                contact_info.json
                            </div>

                            <div className="p-4 space-y-1 font-mono text-[11px]">
                                <p style={{ color: "rgba(85,102,120,0.6)" }}>
                                    {"{"}
                                </p>
                                {contactLinks.map(
                                    (
                                        {
                                            icon: Icon,
                                            label,
                                            value,
                                            href,
                                            color,
                                            copyable,
                                        },
                                        i,
                                    ) => (
                                        <div
                                            key={label}
                                            className="group flex items-start gap-2 pl-4 py-1.5 rounded-sm transition-all duration-150 cursor-default"
                                            style={{ color: muted }}
                                            onMouseEnter={(e) => {
                                                (
                                                    e.currentTarget as HTMLElement
                                                ).style.background =
                                                    "rgba(255,255,255,0.02)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (
                                                    e.currentTarget as HTMLElement
                                                ).style.background =
                                                    "transparent";
                                            }}
                                        >
                                            <Icon
                                                className="h-3.5 w-3.5 shrink-0 mt-0.5"
                                                style={{ color }}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <span
                                                    style={{
                                                        color: "rgba(85,102,120,0.7)",
                                                    }}
                                                >
                                                    &quot;{label}&quot;
                                                </span>
                                                <span
                                                    style={{
                                                        color: "rgba(85,102,120,0.5)",
                                                    }}
                                                >
                                                    :{" "}
                                                </span>
                                                {href ? (
                                                    <a
                                                        href={href}
                                                        target={
                                                            href.startsWith(
                                                                "http",
                                                            )
                                                                ? "_blank"
                                                                : undefined
                                                        }
                                                        rel="noreferrer"
                                                        className="transition-colors hover:underline"
                                                        style={{ color }}
                                                    >
                                                        &quot;{value}&quot;
                                                    </a>
                                                ) : (
                                                    <span
                                                        style={{
                                                            color: "#e0e8f0",
                                                        }}
                                                    >
                                                        &quot;{value}&quot;
                                                    </span>
                                                )}
                                                {i <
                                                    contactLinks.length - 1 && (
                                                    <span
                                                        style={{
                                                            color: "rgba(85,102,120,0.4)",
                                                        }}
                                                    >
                                                        ,
                                                    </span>
                                                )}
                                            </div>
                                            {copyable && (
                                                <button
                                                    onClick={() =>
                                                        handleCopy(value)
                                                    }
                                                    type="button"
                                                    className="opacity-0 group-hover:opacity-100 transition-all p-1 rounded-sm border"
                                                    style={{
                                                        borderColor:
                                                            "rgba(74,201,160,0.25)",
                                                        background:
                                                            "rgba(74,201,160,0.07)",
                                                        color: teal,
                                                    }}
                                                >
                                                    {copied ? (
                                                        <Check className="h-2.5 w-2.5" />
                                                    ) : (
                                                        <Copy className="h-2.5 w-2.5" />
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    ),
                                )}
                                <p style={{ color: "rgba(85,102,120,0.6)" }}>
                                    {"}"}
                                </p>
                            </div>
                        </div>

                        {/* response time note */}
                        <div
                            className="px-4 py-3 rounded-sm border text-[11px] font-mono"
                            style={{
                                borderColor: "rgba(192,133,74,0.2)",
                                background: "rgba(192,133,74,0.05)",
                                color: amber,
                            }}
                        >
                            <span className="opacity-60">⚡</span> Avg. response
                            time: &lt; 24 hours
                        </div>
                    </motion.div>

                    {/* RIGHT: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div
                            className="rounded-sm border overflow-hidden"
                            style={{
                                borderColor: "rgba(26,42,58,1)",
                                background: "rgba(14,21,32,0.8)",
                            }}
                        >
                            {/* form header bar */}
                            <div
                                className="flex items-center gap-2 px-5 py-3 border-b"
                                style={{ borderColor: "rgba(26,42,58,1)" }}
                            >
                                <Send className="h-3.5 w-3.5 text-primary" />
                                <span
                                    className="text-[11px] font-mono font-bold tracking-widest uppercase"
                                    style={{ color: "#e0e8f0" }}
                                >
                                    Send a Message
                                </span>
                                {/* top teal bar */}
                                <div className="flex-1" />
                                <span
                                    className="text-[10px] font-mono"
                                    style={{ color: "rgba(85,102,120,0.5)" }}
                                >
                                    new_message.ts
                                </span>
                            </div>

                            {sent ? (
                                /* success state */
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center"
                                >
                                    <div
                                        className="w-12 h-12 rounded-sm border flex items-center justify-center"
                                        style={{
                                            borderColor: "rgba(74,201,160,0.3)",
                                            background: "rgba(74,201,160,0.08)",
                                        }}
                                    >
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p
                                            className="text-sm font-mono font-bold mb-1"
                                            style={{ color: "#e0e8f0" }}
                                        >
                                            Message sent!
                                        </p>
                                        <p
                                            className="text-[12px] font-mono"
                                            style={{ color: muted }}
                                        >
                                            {" "}
                                            I&apos;ll get back to you within 24
                                            hours.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSent(false)}
                                        className="text-[11px] font-mono tracking-widest uppercase px-4 py-2 rounded-sm border transition-all"
                                        style={{
                                            borderColor: "rgba(74,201,160,0.3)",
                                            color: teal,
                                            background: "rgba(74,201,160,0.06)",
                                        }}
                                    >
                                        Send another →
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-5 space-y-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* name */}
                                        <div className="space-y-1.5">
                                            <label
                                                className="text-[10px] font-mono tracking-[0.2em] uppercase"
                                                style={{ color: muted }}
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className={inputClass}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        {/* email */}
                                        <div className="space-y-1.5">
                                            <label
                                                className="text-[10px] font-mono tracking-[0.2em] uppercase"
                                                style={{ color: muted }}
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className={inputClass}
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* subject */}
                                    <div className="space-y-1.5">
                                        <label
                                            className="text-[10px] font-mono tracking-[0.2em] uppercase"
                                            style={{ color: muted }}
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className={inputClass}
                                            placeholder="Project proposal / Job opportunity / Just saying hi"
                                        />
                                    </div>

                                    {/* message */}
                                    <div className="space-y-1.5">
                                        <label
                                            className="text-[10px] font-mono tracking-[0.2em] uppercase"
                                            style={{ color: muted }}
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            className={`${inputClass} resize-none leading-relaxed`}
                                            placeholder="// Tell me about your project or idea..."
                                            required
                                        />
                                    </div>

                                    {/* submit */}
                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="group w-full flex items-center justify-center gap-2 h-11 rounded-sm border text-[12px] font-mono font-bold tracking-widest uppercase transition-all duration-200 active:scale-[0.99] disabled:opacity-60"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(74,201,160,0.16), rgba(74,201,160,0.08))`,
                                            borderColor: "rgba(74,201,160,0.4)",
                                            color: teal,
                                            boxShadow:
                                                "0 0 24px rgba(74,201,160,0.08)",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!sending) {
                                                (
                                                    e.currentTarget as HTMLElement
                                                ).style.background =
                                                    "rgba(74,201,160,0.2)";
                                                (
                                                    e.currentTarget as HTMLElement
                                                ).style.boxShadow =
                                                    "0 0 30px rgba(74,201,160,0.15)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            (
                                                e.currentTarget as HTMLElement
                                            ).style.background =
                                                `linear-gradient(135deg, rgba(74,201,160,0.16), rgba(74,201,160,0.08))`;
                                            (
                                                e.currentTarget as HTMLElement
                                            ).style.boxShadow =
                                                "0 0 24px rgba(74,201,160,0.08)";
                                        }}
                                    >
                                        {sending ? (
                                            <>
                                                <span
                                                    className="w-3 h-3 rounded-full border-2 border-t-transparent animate-spin"
                                                    style={{
                                                        borderColor: teal,
                                                        borderTopColor:
                                                            "transparent",
                                                    }}
                                                />
                                                Transmitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
