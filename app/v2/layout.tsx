import { Big_Shoulders, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type React from "react";
import V2Navbar from "@/components/v2/Navbar";
import FooterV2 from "@/components/v2/FooterSectionV2";
import { NoiseLayer } from "@/components/v2/ui";

const display = Big_Shoulders({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-bigshoulders", display: "swap" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "600", "800"], variable: "--font-jakarta", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-spacemono", display: "swap" });

export const metadata: Metadata = {
    title: "irsyad dimas — v2 (baru)",
    description: "Versi baru portofolio — sedang proses.",
    robots: { index: false, follow: true },
};
export const viewport: Viewport = { themeColor: "#14303B", width: "device-width", initialScale: 1, maximumScale: 10 };

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={`${display.variable} ${sans.variable} ${mono.variable} v2-root font-v2-body min-h-screen overflow-x-clip`}>
            <NoiseLayer />
            <V2Navbar />
            {children}
            <FooterV2 />
        </div>
    );
}
