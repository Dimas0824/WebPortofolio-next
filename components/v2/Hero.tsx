import { V2Maskot } from "./ui";

export default function V2Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden pb-16 pt-[84px]"
    >
      <div className="relative mx-auto w-full max-w-[1180px] px-4 md:px-6">
        <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">
          HALO — SAYA
        </p>
        <h1 className="sr-only">
          Irsyad Dimas — Full-Stack Developer, Data &amp; Automation
        </h1>

        {/* DESKTOP: dua baris, satu avatar nge-bridge (IRS|YAD / DIM|AS). Mobile: stack lama yang di-approve. */}
        <div
          aria-hidden
          className="relative mx-auto mt-6 hidden max-w-[980px] grid-cols-[1fr_auto_1fr] items-center gap-x-0 md:grid md:grid-rows-[auto_auto]"
        >
          <span className="self-end justify-self-end pb-[5vh] font-v2-display font-black uppercase leading-[.8] text-v2-ink text-[clamp(3.5rem,10.5vw,9.5rem)]">
            Irs
          </span>
          <V2Maskot
            priority
            className="z-10 row-span-2 self-center -my-4 h-auto w-[var(--v2-hero-avatar-w)] v2-float"
          />
          <span className="self-end justify-self-start pb-[6vh] font-v2-display font-black uppercase leading-[.8] text-v2-ink text-[clamp(3.5rem,10.5vw,9.5rem)]">
            Yad
          </span>
          <span className="self-start justify-self-end pt-[1vh] font-v2-display font-black uppercase leading-[.8] text-v2-ink text-[clamp(3.5rem,10.5vw,9.5rem)]">
            Dim
          </span>
          <span className="self-start justify-self-start pt-[1vh] font-v2-display font-black uppercase leading-[.8] text-v2-ink text-[clamp(3.5rem,10.5vw,9.5rem)]">
            as
          </span>
        </div>
        <div aria-hidden className="flex flex-col items-center gap-2 md:hidden">
          <span className="font-v2-display font-black uppercase leading-[.82] text-v2-ink text-[clamp(3rem,15vw,11.5rem)]">
            Irsyad
          </span>
          <V2Maskot priority className="h-auto w-[min(22vw,160px)] v2-float" />
          <span className="font-v2-display font-black uppercase leading-[.82] text-v2-ink text-[clamp(3rem,15vw,11.5rem)]">
            Dimas
          </span>
        </div>

        <p className="mx-auto mt-4 flex w-fit items-center gap-3 border-t border-v2-hairline px-6 pt-4 font-v2-mono text-[10px] uppercase tracking-[.18em] text-v2-muted">
          Full-Stack Dev{" "}
          <span className="text-v2-coral" aria-hidden>
            |
          </span>{" "}
          Data and Automation
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#kontak"
            className="v2-notch inline-flex items-center gap-2 bg-v2-coral px-8 py-4 font-v2-display text-xl font-black uppercase text-white transition-transform hover:-translate-y-0.5"
          >
            Ngobrol <span aria-hidden>↗</span>
          </a>
          <a
            href="#works"
            className="v2-notch inline-flex items-center gap-2 border border-v2-hairline px-8 py-4 font-v2-display text-xl font-black uppercase text-v2-ink transition-colors hover:bg-v2-ink hover:text-v2-canvas"
          >
            Lihat Works <span aria-hidden>↓</span>
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-v2-hairline px-4 py-2 font-v2-mono text-[10px] uppercase tracking-[.12em] text-v2-muted">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-v2-coral"
              aria-hidden
            />
            Open to work &amp; collaboration
          </span>
        </div>
      </div>
    </section>
  );
}
