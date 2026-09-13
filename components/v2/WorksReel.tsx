"use client";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
            if (!(e.target instanceof Element) || !e.target.closest(".v2-hcard")) return;
            if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
            const atStart = el.scrollLeft <= 1;
            const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
            if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? el.clientWidth : 1);
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        ref.current?.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * ref.current.clientWidth * 0.8, behavior: "smooth" });
    };
    const step = (dir: 1 | -1) => {
        const el = ref.current;
        if (!el) return;
        const card = el.querySelector<HTMLElement>(".v2-hcard");
        el.scrollBy({ left: dir * (card ? card.offsetWidth + 20 : el.clientWidth * 0.8), behavior: "smooth" });
    };
    const arrow = "absolute top-1/2 z-30 hidden -translate-y-1/2 place-items-center rounded-full border border-v2-hairline bg-v2-raised p-3 text-v2-ink shadow-lg transition-transform hover:scale-110 md:grid";
    return (
        <section id="works" className="relative py-24">
            <div className="mx-auto mb-10 flex max-w-[1180px] items-end justify-between gap-6 px-4 md:px-6">
                <div>
                    <Eyebrow index="01" label="WORKS" />
                    <h2 className="mt-3 font-v2-display text-5xl font-bold uppercase md:text-6xl">Yang pernah dibangun</h2>
                </div>
                <p className="hidden font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-muted md:block">← scroll / drag →</p>
            </div>
            <div ref={ref} tabIndex={0} onKeyDown={onKeyDown} role="group" aria-label="Daftar proyek — gulir atau tekan tombol panah" className="v2-reel mx-auto -my-20 flex max-w-[1180px] gap-5 overflow-x-auto px-14 py-20 snap-x snap-proximity outline-none md:px-14">
                {works.map((w, i) => (<WorkCard key={w.title} work={w} index={i} shot={shots[i] ?? null} />))}
            </div>
            <button type="button" aria-label="Proyek sebelumnya" onClick={() => step(-1)} className={`${arrow} left-3 md:left-6`}><ChevronLeft /></button>
            <button type="button" aria-label="Proyek berikutnya" onClick={() => step(1)} className={`${arrow} right-3 md:right-6`}><ChevronRight /></button>
        </section>
    );
}
