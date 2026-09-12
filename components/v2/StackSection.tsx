import { Brain, Code, Database, Wrench } from "lucide-react";
import type { ExpertiseGroup } from "@/content/types";

const META: Record<string, { icon: typeof Code; tag: string }> = {
    "Languages & Frameworks": { icon: Code, tag: "code" },
    "Database Management": { icon: Database, tag: "data" },
    "Machine Learning & Data Science": { icon: Brain, tag: "ml" },
    "Tools & Platforms": { icon: Wrench, tag: "tools" },
};

// koreksi user v4: filter chips di atas, list di bawah = radio + named-peer Tailwind, nol JS.
// Kelas literal; index wajib selaras urutan groups (deterministik dr content/skills.ts).
const PEER = ["peer/s1", "peer/s2", "peer/s3", "peer/s4"];
const PANEL_ON = ["peer-checked/s1:block", "peer-checked/s2:block", "peer-checked/s3:block", "peer-checked/s4:block"];
const CHIP_ON = ["peer-checked/s1:border-v2-coral peer-checked/s1:bg-v2-coral peer-checked/s1:text-v2-canvas", "peer-checked/s2:border-v2-coral peer-checked/s2:bg-v2-coral peer-checked/s2:text-v2-canvas", "peer-checked/s3:border-v2-coral peer-checked/s3:bg-v2-coral peer-checked/s3:text-v2-canvas", "peer-checked/s4:border-v2-coral peer-checked/s4:bg-v2-coral peer-checked/s4:text-v2-canvas"];
const CHIP_FOCUS = ["peer-focus-visible/s1:outline-2 peer-focus-visible/s1:outline-v2-sun", "peer-focus-visible/s2:outline-2 peer-focus-visible/s2:outline-v2-sun", "peer-focus-visible/s3:outline-2 peer-focus-visible/s3:outline-v2-sun", "peer-focus-visible/s4:outline-2 peer-focus-visible/s4:outline-v2-sun"];
export default function StackSection({ groups }: { groups: ExpertiseGroup[] }) {
    return (
        <section id="stack" className="py-24">
            <div className="mx-auto max-w-[760px] px-4 md:px-6">
                <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">02 / STACK</p>
                <h2 className="mt-3 mb-8 font-v2-display text-5xl font-bold uppercase md:text-6xl">Tool yang dipegang</h2>
                {groups.map((g, i) => (
                    <input key={g.category} type="radio" name="v2-stack" id={`stk-${i}`} className={`sr-only ${PEER[i] ?? ""}`} defaultChecked={i === 0} aria-label={g.category} />
                ))}
                <div className="mb-6 flex flex-wrap gap-2 border-b border-v2-hairline pb-5">
                    {groups.map((g, i) => {
                        const tag = (META[g.category] ?? { tag: g.category }).tag;
                        return (
                            <label key={g.category} htmlFor={`stk-${i}`} className={`inline-flex cursor-pointer select-none items-center gap-2 rounded-full border border-v2-hairline px-4 py-2 font-v2-mono text-[10px] uppercase tracking-[.18em] text-v2-muted transition-colors ${CHIP_ON[i] ?? ""} ${CHIP_FOCUS[i] ?? ""}`}>
                                {tag} <span className="opacity-60">{g.items.length}</span>
                            </label>
                        );
                    })}
                </div>
                {groups.map((g, i) => (
                    <ul key={g.category} className={`hidden divide-y divide-v2-hairline border-b border-v2-hairline ${PANEL_ON[i] ?? ""}`}>
                        {g.items.map((x) => (
                            <li key={x} className="flex items-center gap-4 py-3">
                                <span className="font-v2-mono text-[13px] uppercase tracking-[.08em] text-v2-ink">{x}</span>
                                <span className="ml-auto font-v2-mono text-[9px] uppercase tracking-[.2em] text-v2-muted">{(META[g.category] ?? { tag: g.category }).tag}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
}
