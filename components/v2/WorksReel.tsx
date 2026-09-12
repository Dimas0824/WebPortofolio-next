import type { PortfolioItem } from "@/content/types";
import { Eyebrow } from "./ui";
import WorkCard from "./WorkCard";

export default function WorksReel({ works, shots = [] }: { works: PortfolioItem[]; shots?: (string | null)[] }) {
    return (
        <section id="works" className="relative py-24">
            <div className="mx-auto mb-10 flex max-w-[1180px] items-end justify-between gap-6 px-4 md:px-6">
                <div>
                    <Eyebrow index="01" label="WORKS" />
                    <h2 className="mt-3 font-v2-display text-5xl font-bold uppercase md:text-6xl">Yang pernah dibangun</h2>
                </div>
                <p className="hidden font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-muted md:block">← drag / swipe →</p>
            </div>
            <div role="group" aria-label="Daftar proyek — geser horizontal" className="px-4 pb-8 md:px-6">
                <div className="v2-reel mx-auto -my-6 flex max-w-[1180px] gap-5 overflow-x-auto px-1 py-6 snap-x snap-mandatory">
                    {works.map((w, i) => (<WorkCard key={w.title} work={w} index={i} shot={shots[i] ?? null} />))}
                </div>
            </div>
        </section>
    );
}
