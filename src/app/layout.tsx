import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Johns Coding Lab | Developer Portfolio",
    description:
        "Software Engineer specializing in robust, scalable systems and modern web architecture.",
    icons: {
        icon: "/icon.jpeg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={cn(
                    geistSans.variable,
                    geistMono.variable,
                    "min-h-screen font-sans antialiased selection:bg-primary/30 selection:text-primary",
                )}
            >
                <div className="relative flex min-h-screen flex-col">
                    {/* We will add Navbar here later */}
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                    {/* We will add Footer here later */}
                </div>
            </body>
        </html>
    );
}
