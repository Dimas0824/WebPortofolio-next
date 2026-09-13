import { Brain, Code, Database, Wrench } from "lucide-react";
import type { ExpertiseGroup } from "@/content/types";

const META: Record<string, { icon: typeof Code; tag: string }> = {
  "Languages & Frameworks": { icon: Code, tag: "code" },
  "Database Management": { icon: Database, tag: "data" },
  "Machine Learning & Data Science": { icon: Brain, tag: "ml" },
  "Tools & Platforms": { icon: Wrench, tag: "tools" },
};

// Filter chips di atas, list di bawah = pure-CSS radio + named-peer Tailwind (nol JS).
const PEER = ["peer/s1", "peer/s2", "peer/s3", "peer/s4"];
const PANEL_ON = [
  "peer-checked/s1:block",
  "peer-checked/s2:block",
  "peer-checked/s3:block",
  "peer-checked/s4:block",
];

export default function StackSection({ groups }: { groups: ExpertiseGroup[] }) {
  return (
    <section id="stack" className="py-24">
      <div className="mx-auto max-w-[760px] px-4 md:px-6">
        <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">
          02 / STACK
        </p>
        <h2 className="mt-3 mb-8 font-v2-display text-5xl font-bold uppercase md:text-6xl text-v2-ink">
          Tool yang digunakan
        </h2>

        {/* Pure CSS Radio Peers for Filter State */}
        {groups.map((g, i) => (
          <input
            key={g.category}
            type="radio"
            name="v2-stack"
            id={`stk-${i}`}
            className={`sr-only ${PEER[i] ?? ""}`}
            defaultChecked={i === 0}
            aria-label={g.category}
          />
        ))}

        {/* Chip Filter Buttons (Centered & with v2-stackrow for orange active state) */}
        <div className="v2-stackrow mb-8 flex flex-wrap justify-center gap-2.5 border-b border-v2-hairline pb-6">
          {groups.map((g, i) => {
            const tag = (META[g.category] ?? { tag: g.category }).tag;
            return (
              <label
                key={g.category}
                htmlFor={`stk-${i}`}
                className="inline-flex cursor-pointer select-none items-center gap-2 rounded-full border border-v2-hairline px-4 py-2 font-v2-mono text-[11px] uppercase tracking-[.18em] text-v2-muted transition-colors hover:border-v2-ink/40 hover:text-v2-ink"
              >
                {tag} <span className="opacity-60">{g.items.length}</span>
              </label>
            );
          })}
        </div>

        {/* Editorial Refined List */}
        {groups.map((g, i) => {
          const tag = (META[g.category] ?? { tag: g.category }).tag;
          return (
            <ul
              key={g.category}
              className={`hidden divide-y divide-v2-hairline border-b border-v2-hairline ${PANEL_ON[i] ?? ""}`}
            >
              {g.items.map((x, idx) => (
                <li
                  key={x}
                  className="group flex items-center justify-between py-3.5 px-3 -mx-3 rounded-lg transition-all duration-150 hover:bg-v2-surface/50"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="font-v2-mono text-[11px] font-bold tracking-wider text-v2-sun/80 select-none shrink-0 w-6">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-v2-mono text-[13px] md:text-[14px] uppercase tracking-[.08em] text-v2-ink transition-all duration-150 group-hover:text-v2-sun group-hover:translate-x-1">
                      {x}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full border border-v2-hairline/70 px-2.5 py-0.5 font-v2-mono text-[9px] uppercase tracking-[.18em] text-v2-muted transition-colors group-hover:border-v2-sun/40 group-hover:text-v2-ink">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </section>
  );
}
