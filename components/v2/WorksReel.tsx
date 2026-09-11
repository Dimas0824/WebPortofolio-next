"use client";
import { useEffect, useRef, useState } from "react";
import type { PortfolioItem } from "@/content/types";
import { Eyebrow } from "./ui";
import WorkCard from "./WorkCard";

export default function WorksReel({ works, shots = [] }: { works: PortfolioItem[]; shots?: (string | null)[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [center, setCenter] = useState(0);
    const [hover, setHover] = useState<number | null>(null);
    const active = hover ?? center;

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        let raf = 0;
        const measure = () => {
            const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
            let best = 0, diff = Number.POSITIVE_INFINITY;
            Array.from(el.children).forEach((c, i) => {
                const r = (c as HTMLElement).getBoundingClientRect();
                const d = Math.abs(r.left + r.width / 2 - mid);
                if (d < diff) { diff = d; best = i; }
            });
            setCenter(best);
        };
        const onScroll = () => { setHover(null); cancelAnimationFrame(raf); raf = requestAnimationFrame(measure); };
        el.addEventListener("scroll", onScroll, { passive: true });
        requestAnimationFrame(measure); // aktif awal = tengah geografis, bukan index-0 buta
        return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
    }, []);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const el = trackRef.current; if (!el) return;
        const card = el.children[active] as HTMLElement | undefined;
        const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
        el.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * step, behavior: "smooth" });
    };

    return (
        <section id="works" className="relative py-24">
            <div className="mx-auto mb-10 flex max-w-[1180px] items-end justify-between gap-6 px-4 md:px-6">
                <div>
                    <Eyebrow index="01" label="WORKS" />
                    <h2 className="mt-3 font-v2-display text-5xl font-bold uppercase md:text-6xl">Yang pernah dibangun</h2>
                </div>
                <p className="hidden font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-muted md:block">← drag / swipe →</p>
            </div>
            <div role="group" aria-label="Daftar proyek — geser horizontal" tabIndex={0} onKeyDown={onKeyDown} className="outline-none">
                <div ref={trackRef} className="v2-reel mx-auto flex max-w-[1180px] snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-8 md:px-6">
                    {works.map((w, i) => (
                        <WorkCard key={w.title} work={w} index={i} isActive={i === active} onHover={setHover} shot={shots[i] ?? null} />
                    ))}
                </div>
            </div>
        </section>
    );
}
