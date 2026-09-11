export default function StackSection({ groups }: { groups: { category: string; items: string[] }[] }) {
    return (
        <section id="stack" className="py-24">
            <div className="mx-auto max-w-[1180px] px-4 md:px-6">
                <div className="mb-10">
                    <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">02 / STACK</p>
                    <h2 className="mt-3 font-v2-display text-5xl font-bold uppercase md:text-6xl">Tool yang dipegang</h2>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    {groups.map((g, i) => (
                        <div key={g.category} className="rounded-[24px] border border-v2-hairline bg-v2-raised p-6">
                            <span aria-hidden className="font-v2-display text-6xl font-black leading-none text-transparent [-webkit-text-stroke:1px_#fbc02d]">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="mt-4 text-lg font-extrabold tracking-tight text-v2-ink">{g.category}</h3>
                            <ul className="mt-3 flex flex-wrap gap-1.5">
                                {g.items.map((x) => <li key={x} className="rounded-full border border-v2-hairline px-2.5 py-1 font-v2-mono text-[11px] uppercase text-v2-muted">{x}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
