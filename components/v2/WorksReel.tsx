"use client";
import { useEffect, useRef } from "react";
import type { PortfolioItem } from "@/content/types";
import { Eyebrow } from "./ui";
import WorkCard from "./WorkCard";

// koreksi user v4: desktop nggak punya swipe -> wheel vertikal di atas reel dipetakan jadi scroll horizontal,
// arrow keys buat keyboard. consumption cuma kalau reel masih punya ruang; di ujung, halaman lanjut natural.
export default function WorksReel({ works, shots = [] }: { works: PortfolioItem[]; shots?: (string | null)[] }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
            const atStart = el.scrollLeft <= 1;
            const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
            if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        ref.current?.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * ref.current.clientWidth * 0.8, behavior: "smooth" });
    };
    return (
        <section id="works" className="relative py-24">
            <div className="mx-auto mb-10 flex max-w-[1180px] items-end justify-between gap-6 px-4 md:px-6">
                <div>
                    <Eyebrow index="01" label="WORKS" />
                    <h2 className="mt-3 font-v2-display text-5xl font-bold uppercase md:text-6xl">Yang pernah dibangun</h2>
                </div>
                <p className="hidden font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-muted md:block">← scroll / drag →</p>
            </div>
            <div ref={ref} tabIndex={0} onKeyDown={onKeyDown} role="group" aria-label="Daftar proyek — gulir atau tekan tombol panah" className="v2-reel mx-auto -my-20 flex max-w-[1180px] gap-5 overflow-x-auto px-14 py-20 snap-x snap-mandatory outline-none md:px-14">
                {works.map((w, i) => (<WorkCard key={w.title} work={w} index={i} shot={shots[i] ?? null} />))}
            </div>
        </section>
    );
}
