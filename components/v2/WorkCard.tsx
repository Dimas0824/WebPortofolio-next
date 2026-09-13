import type { PortfolioItem } from "@/content/types";

function initials(title: string) {
  return title
    .split(/[\s\-—–()]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export default function WorkCard({
  work,
  index,
  shot = null,
}: {
  work: PortfolioItem;
  index: number;
  shot?: string | null;
}) {
  return (
    <a
      href={work.link}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="v2-hcard group block min-w-0 shrink-0 grow-0 basis-[58vw] snap-center select-none rounded-[24px] border border-v2-hairline bg-v2-raised p-5 no-underline md:basis-[calc((100%_-_2.5rem)/3*1.009)]"
      title={work.title}
    >
      <h3 className="sr-only">
        {work.title} — {work.category}. {work.description} Buka repositori di
        tab baru.
      </h3>
      <div className="flex items-start justify-between gap-2">
        <p className="font-v2-mono text-xs leading-tight">
          <span className="text-v2-sun">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          <span className="text-v2-muted">/ {work.category ?? "WEB"}</span>
        </p>
        <span
          className="grid aspect-square w-8 shrink-0 place-items-center rounded-lg border border-v2-hairline font-v2-mono text-xs text-v2-muted"
          aria-hidden
        >
          ↗
        </span>
      </div>
      <div
        className={
          shot
            ? "relative mt-4 aspect-square overflow-hidden rounded-[16px] bg-v2-deep"
            : "v2-hatch relative mt-4 grid aspect-square place-items-center overflow-hidden rounded-[16px]"
        }
      >
        {shot && (
          <img
            src={shot}
            alt=""
            width={720}
            height={720}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}
        {!shot && (
          <>
            <span
              aria-hidden
              className="absolute -bottom-[0.18em] right-2 select-none font-v2-display text-[22vw] leading-none text-v2-ink/15 lg:text-[6rem]"
            >
              {initials(work.title)}
            </span>
            <span className="relative z-10 max-w-[85%] truncate border border-v2-hairline bg-v2-canvas px-2 py-1 font-v2-mono text-[9px] uppercase tracking-[.16em] text-v2-muted">
              {work.title}
            </span>
          </>
        )}
        <div className="v2-reveal absolute inset-x-0 bottom-0 z-20 overflow-hidden rounded-b-[16px] bg-gradient-to-t from-v2-canvas from-40% via-v2-canvas/92 to-transparent px-4 pb-4 pt-10">
          <p className="text-sm leading-relaxed text-v2-muted">{work.description}</p>
          <span className="v2-shine mt-3 inline-flex items-center gap-2 rounded-full bg-v2-coral px-4 py-2 font-v2-display text-base font-black uppercase text-v2-canvas">
            View project <span aria-hidden>↗</span>
          </span>
        </div>
      </div>
      <p className="mt-5 truncate font-v2-display text-[22px] font-bold uppercase leading-none text-v2-ink">
        {work.title}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {work.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full border border-v2-hairline px-2.5 py-1 font-v2-mono text-[10px] uppercase text-v2-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
