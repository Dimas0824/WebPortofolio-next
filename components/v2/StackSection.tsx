import { Brain, ChevronRight, Code, Database, Wrench } from "lucide-react";
import type { ExpertiseGroup } from "@/content/types";

const META: Record<string, { icon: typeof Code; tag: string }> = {
    "Languages & Frameworks": { icon: Code, tag: "code" },
    "Database Management": { icon: Database, tag: "data" },
    "Machine Learning & Data Science": { icon: Brain, tag: "ml" },
    "Tools & Platforms": { icon: Wrench, tag: "tools" },
};

// koreksi user 2026-09-12 larut: list flat 28 terlalu panjang & kehilangan kategori.
// details[name] = accordion eksklusif NATIF (satu terbuka, nol JS). Grup data apa adanya (TF/Keras boleh muncul di 2 grup).
export default function StackSection({ groups }: { groups: ExpertiseGroup[] }) {
    return (
        <section id="stack" className="py-24">
            <div className="mx-auto max-w-[760px] px-4 md:px-6">
                <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">02 / STACK</p>
                <h2 className="mt-3 mb-8 font-v2-display text-5xl font-bold uppercase md:text-6xl">Tool yang dipegang</h2>
                <div className="border-t border-v2-hairline">
                    {groups.map((g, i) => {
                        const m = META[g.category] ?? { icon: Code, tag: g.category };
                        const Icon = m.icon;
                        return (
                            <details key={g.category} name="v2-stack" open={i === 0} className="group/acc border-b border-v2-hairline">
                                <summary className="flex cursor-pointer list-none items-center gap-3 py-4 transition-colors hover:text-v2-sun [&::-webkit-details-marker]:hidden">
                                    <Icon className="h-4 w-4 shrink-0 text-v2-sun" aria-hidden />
                                    <span className="font-v2-mono text-xs uppercase tracking-[.18em] text-v2-ink">{g.category}</span>
                                    <span className="ml-auto font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-muted">{g.items.length} tools</span>
                                    <ChevronRight className="h-4 w-4 shrink-0 text-v2-muted transition-transform group-open/acc:rotate-90" aria-hidden />
                                </summary>
                                <ul className="divide-y divide-v2-hairline pb-2">
                                    {g.items.map((x) => (
                                        <li key={x} className="flex items-center gap-4 py-2.5 pl-7">
                                            <span className="font-v2-mono text-[13px] uppercase tracking-[.08em] text-v2-ink">{x}</span>
                                            <span className="ml-auto font-v2-mono text-[9px] uppercase tracking-[.2em] text-v2-muted">{m.tag}</span>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
