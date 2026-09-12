export default function MarqueeBand({ items }: { items: string[] }) {
    const seq = [...items, ...items]; // dua kopi → seamless -50%
    return (
        <div aria-hidden className="relative z-10 mt-24 -rotate-[1.5deg] scale-x-105 overflow-hidden">
            <div className="v2-band py-3.5">
                <div className="v2-marquee-track flex w-max whitespace-nowrap">
                    {seq.map((t, i) => (<span key={i} className="mx-4 font-v2-mono text-sm font-bold uppercase tracking-[.25em] text-v2-canvas">{t} ◆</span>))}
                </div>
            </div>
        </div>
    );
}
