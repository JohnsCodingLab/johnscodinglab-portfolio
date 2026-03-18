import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "primary" | "accent" | "muted" | "outline" | "success" | "danger";
    dot?: boolean;
    pulse?: boolean;
    prefix?: string;
}

export function Badge({
    children,
    variant = "outline",
    dot = false,
    pulse = false,
    prefix,
    className,
    ...props
}: BadgeProps) {
    const base =
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-mono tracking-[0.15em] uppercase border transition-all duration-150";

    const variants: Record<string, string> = {
        primary:
            "bg-[rgba(74,201,160,0.08)] text-primary border-[rgba(74,201,160,0.25)] hover:bg-[rgba(74,201,160,0.12)] hover:border-[rgba(74,201,160,0.4)]",
        accent: "bg-[rgba(192,133,74,0.08)] text-accent  border-[rgba(192,133,74,0.25)] hover:bg-[rgba(192,133,74,0.12)] hover:border-[rgba(192,133,74,0.4)]",
        muted: "bg-[rgba(26,42,58,0.5)]   text-muted   border-[rgba(26,42,58,0.8)]   hover:border-[rgba(74,201,160,0.2)] hover:text-foreground",
        outline:
            "bg-transparent            text-foreground/70 border-ui/60            hover:border-[rgba(74,201,160,0.3)] hover:text-foreground",
        success:
            "bg-[rgba(74,201,160,0.06)] text-primary border-[rgba(74,201,160,0.2)]",
        danger: "bg-[rgba(255,50,80,0.07)]  text-[#ff3250] border-[rgba(255,50,80,0.25)] hover:bg-[rgba(255,50,80,0.12)]",
    };

    const dotColors: Record<string, string> = {
        primary: "#4ac9a0",
        accent: "#c0854a",
        muted: "#556678",
        outline: "#e0e8f0",
        success: "#4ac9a0",
        danger: "#ff3250",
    };

    return (
        <span className={cn(base, variants[variant], className)} {...props}>
            {dot && (
                <span
                    className={cn(
                        "w-1.5 h-1.5 rounded-full shrink-0",
                        pulse && "animate-pulse",
                    )}
                    style={{
                        background: dotColors[variant],
                        boxShadow: `0 0 4px ${dotColors[variant]}`,
                    }}
                />
            )}
            {prefix && <span className="opacity-40 select-none">{prefix}</span>}
            {children}
        </span>
    );
}
