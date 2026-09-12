import { Brain, Code, Database, Wrench } from "lucide-react";
import type { ExpertiseGroup } from "@/content/types";

const META: Record<string, { icon: typeof Code; tag: string }> = {
    "Languages & Frameworks": { icon: Code, tag: "code" },
    "Database Management": { icon: Database, tag: "data" },
    "Machine Learning & Data Science": { icon: Brain, tag: "ml" },
    "Tools & Platforms": { icon: Wrench, tag: "tools" },
};

export default function StackSection({ groups }: { groups: ExpertiseGroup[] }) {
    const seen = new Map<string, string>(); // last-wins → TF/Keras jatuh ke tag "ml" (akurat)
    for (const g of groups) for (const x of g.items) seen.set(x, g.category);
    const rows = [...seen].map(([name, group]) => ({ name, group }));
    return (
        <section id="stack" className="py-24">
            <div className="mx-auto max-w-[760px] px-4 md:px-6">
                <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">02 / STACK</p>
                <h2 className="mt-3 mb-8 font-v2-display text-5xl font-bold uppercase md:text-6xl">Tool yang dipegang</h2>
                <ul className="divide-y divide-v2-hairline border-y border-v2-hairline">
                    {rows.map((r) => {
                        const m = META[r.group] ?? { icon: Code, tag: r.group };
                        const Icon = m.icon;
                        return (
                            <li key={`${r.group}-${r.name}`} className="flex items-center gap-4 py-3">
                                <Icon className="h-4 w-4 shrink-0 text-v2-sun" aria-hidden />
                                <span className="font-v2-mono text-[13px] uppercase tracking-[.08em] text-v2-ink">{r.name}</span>
                                <span className="ml-auto font-v2-mono text-[9px] uppercase tracking-[.2em] text-v2-muted">{m.tag}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
