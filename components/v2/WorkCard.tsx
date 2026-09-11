import type { PortfolioItem } from "@/content/types";

function initials(title: string) { return title.split(/[\s\-—–()]+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase(); }

export default function WorkCard({ work, index, isActive, onHover, shot = null }: { work: PortfolioItem; index: number; isActive: boolean; onHover: (i: number | null) => void; shot?: string | null }) {
    return (
        <a href={work.link} target="_blank" rel="noopener noreferrer" data-active={isActive}
            onMouseEnter={() => onHover(index)} onMouseLeave={() => onHover(null)} onFocus={() => onHover(index)} onBlur={() => onHover(null)}
            className="v2-card block shrink-0 grow-0 basis-[78vw] snap-center rounded-[24px] border border-v2-hairline bg-v2-raised p-5 no-underline md:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]">
            <h3 className="sr-only">{work.title} — {work.category}. Buka repositori di tab baru.</h3>
            <div className="flex items-start justify-between gap-2">
                <p className="font-v2-mono text-xs leading-tight"><span className="text-v2-sun">{String(index + 1).padStart(2, "0")}</span> <span className="text-v2-muted">/ {work.category ?? "WEB"}</span></p>
                <span className="grid aspect-square w-8 shrink-0 place-items-center rounded-lg border border-v2-hairline font-v2-mono text-xs text-v2-muted" aria-hidden>↗</span>
            </div>
            <div className={shot ? "relative mt-4 aspect-square overflow-hidden rounded-[16px] bg-v2-deep" : "v2-hatch relative mt-4 grid aspect-square place-items-center overflow-hidden rounded-[16px]"}>
                {shot ? (
                    <img src={shot} alt="" width={720} height={720} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
                ) : (
                    <>
                        <span aria-hidden className="absolute -bottom-[0.18em] right-2 select-none font-v2-display text-[22vw] leading-none text-v2-ink/15 lg:text-[9.5vw]">{initials(work.title)}</span>
                        <span className="relative z-10 max-w-[85%] truncate border border-v2-hairline bg-v2-canvas px-2 py-1 font-v2-mono text-[9px] uppercase tracking-[.16em] text-v2-muted">{work.title}</span>
                    </>
                )}
            </div>
            <p className="mt-5 truncate font-v2-display text-[26px] font-bold uppercase leading-none text-v2-ink">{work.title}</p>
            {isActive ? (
                <>
                    <p className="line-clamp-2 mt-2 text-sm leading-relaxed text-v2-muted">{work.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-v2-coral px-5 py-2.5 font-v2-display text-xl font-black uppercase text-white">View case <span aria-hidden>↗</span></span>
                </>
            ) : (
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {work.tech.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full border border-v2-hairline px-2.5 py-1 font-v2-mono text-[10px] uppercase text-v2-muted">{t}</span>
                    ))}
                </div>
            )}
        </a>
    );
}
