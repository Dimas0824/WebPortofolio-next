export default function MarqueeBand({ items }: { items: string[] }) {
    const seq = [...items, ...items]; // dua kopi → seamless -50%
    return (
        <div aria-hidden className="relative z-10 -rotate-[1.5deg] scale-x-105 overflow-hidden border-y-2 border-v2-canvas bg-v2-sun text-v2-canvas">
            <div className="v2-marquee-track flex w-max whitespace-nowrap py-3.5">
                {seq.map((t, i) => (
                    <span key={i} className="mx-4 font-v2-mono text-sm font-bold uppercase tracking-[.25em]">{t} ◆</span>
                ))}
            </div>
        </div>
    );
}
