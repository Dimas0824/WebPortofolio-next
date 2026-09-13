import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import type React from "react";
import V2Navbar from "@/components/v2/Navbar";
import FooterV2 from "@/components/v2/FooterSectionV2";
import { NoiseLayer } from "@/components/v2/ui";

const display = localFont({
    src: [
        { path: "../../public/fonts/bigshoulders-700.woff2", weight: "700", style: "normal" },
        { path: "../../public/fonts/bigshoulders-800.woff2", weight: "800", style: "normal" },
        { path: "../../public/fonts/bigshoulders-900.woff2", weight: "900", style: "normal" },
    ],
    variable: "--font-bigshoulders",
    display: "swap",
});
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
        <div className={`${display.variable} ${sans.variable} ${mono.variable} v2-root v2-silk font-v2-body min-h-screen overflow-x-clip`}>
            <NoiseLayer />
            <V2Navbar />
            {children}
            <FooterV2 />
        </div>
    );
}
