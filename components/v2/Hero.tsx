import { SpillBackdrop, V2Maskot } from "./ui";

export default function V2Hero() {
    return (
        <section id="top" className="relative flex min-h-[88vh] items-center overflow-hidden pb-16 pt-[84px]">
            <SpillBackdrop />
            <div className="relative mx-auto w-full max-w-[1180px] px-4 md:px-6">
                <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">HALO — SAYA</p>

                <h1 className="sr-only">Irsyad Dimas — Full-Stack Developer, Data &amp; Automation</h1>
                <div aria-hidden className="mt-6 select-none">
                    <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-6">
                        <span className="font-v2-display font-black uppercase leading-[.82] text-v2-ink text-[clamp(3rem,15vw,11.5rem)]">Irsyad</span>
                        <V2Maskot priority className="h-auto w-[min(32vw,220px)] shrink-0 v2-float lg:w-[min(24vw,300px)]" />
                        <span className="font-v2-display font-black uppercase leading-[.82] text-v2-ink text-[clamp(3rem,15vw,11.5rem)]">Dimas</span>
                    </div>
                    <div className="mx-auto mt-3 flex max-w-[860px] justify-between gap-6 px-1 font-v2-mono text-[10px] uppercase tracking-[.18em] text-v2-muted">
                        <span>Full-Stack Developer</span>
                        <span className="text-right">Data &amp; Automation</span>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <p className="inline-flex items-center gap-2 rounded-full border border-v2-hairline px-4 py-2 font-v2-mono text-[11px] uppercase tracking-[.12em] text-v2-muted">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-v2-coral" aria-hidden />
                        Open to work &amp; collaboration
                        <span className="sr-only"> — siap untuk proyek baru dan kolaborasi</span>
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="#kontak" rel="noopener noreferrer" className="v2-notch inline-flex items-center gap-2 bg-v2-coral px-8 py-4 font-v2-display text-xl font-black uppercase text-white transition-transform hover:-translate-y-0.5">
                        Ngobrol <span aria-hidden>↗</span>
                    </a>
                    <a href="#works" className="v2-notch inline-flex items-center gap-2 border border-v2-hairline px-8 py-4 font-v2-display text-xl font-black uppercase text-v2-ink transition-colors hover:bg-v2-ink hover:text-v2-canvas">
                        Lihat Works <span aria-hidden>↓</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
