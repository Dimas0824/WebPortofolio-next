"use client";
import profile from "@/content/profile";
import { useEffect, useState } from "react";
import { IconGithub, IconLinkedin, IconInstagram } from "./icons";

const LINKS = [
    { id: "works", href: "#works", label: "WORKS" },
    { id: "stack", href: "#stack", label: "STACK" },
    { id: "about", href: "#about", label: "ABOUT" },
    { id: "kontak", href: "#kontak", label: "KONTAK" },
] as const;

const SOCIALS = [
    { label: "GitHub", href: profile.contacts.github, Icon: IconGithub },
    { label: "LinkedIn", href: profile.contacts.linkedin, Icon: IconLinkedin },
    { label: "Instagram", href: profile.contacts.instagram, Icon: IconInstagram },
] as const;

export default function V2Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
        if (!els.length) return;
        const io = new IntersectionObserver(
            (es) => es.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
            { rootMargin: "-45% 0px -45% 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!open) return;
        const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", close);
        document.documentElement.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", close); document.documentElement.style.overflow = ""; };
    }, [open]);

    return (
        <>
            <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-v2-canvas/90 backdrop-blur-md border-b border-v2-hairline" : "bg-transparent"}`}>
                <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 md:px-6" style={{ height: scrolled ? 64 : 84, transition: "height .3s" }}>
                    <a href="/v2" className="v2-notch bg-v2-ink px-3 py-2 font-v2-mono text-sm font-bold text-v2-canvas" aria-label="irsyad dimas beranda">ID:</a>

                    <nav aria-label="Navigasi utama" className="hidden lg:flex items-center gap-9">
                        {LINKS.map((l) => (
                            <a key={l.id} href={l.href} className="group relative font-v2-mono text-xs uppercase tracking-[.12em] text-v2-muted transition-colors hover:text-v2-ink">
                                {l.label}
                                <span className={`absolute -bottom-2.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-v2-coral transition-opacity ${activeId === l.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex items-center gap-2" aria-label="Sosial media">
                            {SOCIALS.filter((s) => s.href).map(({ label, href, Icon }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    className="text-v2-muted transition-colors hover:bg-v2-ink hover:text-v2-canvas bg-v2-ink/10 grid place-items-center h-9 w-9 rounded-full">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? "Tutup menu" : "Buka menu"}
                            className="lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-1.5">
                            <span className={`h-0.5 w-6 bg-v2-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
                            <span className={`h-0.5 w-6 bg-v2-ink transition-transform ${open ? "-translate-y-0.5 -rotate-45" : ""}`} />
                        </button>
                    </div>
                </div>
            </header>

            {open && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-v2-canvas pt-24" role="dialog" aria-modal="true" aria-label="Menu navigasi">
                    {LINKS.map((l) => (
                        <a key={l.id} href={l.href} onClick={() => setOpen(false)} className="font-v2-display text-6xl font-black uppercase leading-none text-v2-ink hover:text-v2-coral lg:hidden">
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}
