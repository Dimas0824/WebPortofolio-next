import { V2Maskot } from "./ui";
import { HeroWordmarkIrsyad, HeroWordmarkDimas } from "./HeroWordmark";

export default function V2Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen lg:h-screen lg:overflow-hidden items-center justify-center pt-[92px] pb-6 md:pt-[104px] md:pb-8"
    >
      <div className="relative mx-auto w-full max-w-[1240px] px-4 md:px-6 h-full flex flex-col justify-between items-center">
        {/* Top Greeting Badge: Symmetrically & Optically Centered */}
        <div className="w-full flex justify-center items-center z-20 shrink-0 mb-4 md:mb-2">
          <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-v2-surface/80 border border-v2-hairline backdrop-blur-sm shadow-sm text-center ml-8">
            <p className="font-v2-mono text-xs uppercase tracking-[0.25em] text-v2-sun font-bold pl-[0.25em]">
              HALO — SAYA
            </p>
          </div>
        </div>

        {/* Accessible Heading for SEO & Screen Readers */}
        <h1 className="sr-only">
          Irsyad Dimas — Full-Stack Developer &amp; Data AIoT Portfolio
        </h1>

        {/* DESKTOP (lg and up): Bespoke Art Deco Interlocking Wordmark (IRSYAD [Bridge/Mascot] DIMAS) */}
        <div
          aria-hidden="true"
          className="relative w-full max-w-[800px] xl:max-w-[860px] hidden lg:flex items-center my-auto text-v2-ink select-none"
        >
          {/* IRSYAD Column (Symmetrical wing: flex-1 items-end locks snugly against left of mascot) */}
          <div className="flex-1 flex flex-col items-end z-10">
            <div className="h-[190px] xl:h-[220px]">
              <HeroWordmarkIrsyad className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)] text-v2-ink" />
            </div>
            <p className="mt-3.5 mr-20font-v2-mono text-xs xl:text-sm font-bold uppercase tracking-[0.45em] text-v2-ink/85 pr-2">
              FULL-STACK DEV
            </p>
          </div>

          {/* Center Mascot (Mathematically locked at 50% screen center!) */}
          <div className="relative w-[190px] xl:w-[220px] h-[190px] xl:h-[220px] flex items-center justify-center shrink-0">
            {/* 
              PENGATURAN AVATAR DESKTOP (Bisa Anda sesuaikan sendiri di sini):
              - Tinggi (Size): h-[680px] xl:h-[750px] 2xl:h-[780px] (ubah angka px untuk membesarkan/mengecilkan)
              - Posisi Vertikal: top-[-180px] xl:top-[-200px] 2xl:top-[-210px] (angka minus makin besar = makin naik ke atas)
              - Posisi Horizontal: -ml-6 = geser 24px ke kiri (ubah angka / hapus untuk kembali center)
            */}
            <V2Maskot
              priority
              className="absolute z-15 h-[680px] xl:h-[750px] 2xl:h-[780px] w-auto max-w-none -ml-6 top-[-180px] xl:top-[-200px] 2xl:top-[-210px] v2-float filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] pointer-events-none select-none"
            />
          </div>

          {/* DIMAS Column (Symmetrical wing: flex-1 items-start locks snugly against right of mascot) */}
          <div className="flex-1 flex flex-col items-start z-10">
            <div className="h-[190px] xl:h-[220px]">
              <HeroWordmarkDimas className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)] text-v2-ink" />
            </div>
            <p className="mt-3.5 ml-8 font-v2-mono text-xs xl:text-sm font-bold uppercase tracking-[0.45em] text-v2-ink/85 pl-2">
              AIoT
            </p>
          </div>
        </div>

        {/* TABLET & MOBILE (< lg): Elegant Stacked Art Deco Composition */}
        <div
          aria-hidden="true"
          className="flex lg:hidden flex-col items-center my-auto w-full max-w-[340px] sm:max-w-[420px] gap-4 text-v2-ink select-none"
        >
          <div className="h-[75px] sm:h-[100px] w-auto">
            <HeroWordmarkIrsyad className="h-full w-auto text-v2-ink" />
          </div>
          <div className="relative my-1">
            {/* PENGATURAN AVATAR MOBILE/TABLET: ubah h-[225px] / sm:h-[290px] */}
            <V2Maskot
              priority
              className="h-[225px] sm:h-[290px] w-auto v2-float filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div className="h-[75px] sm:h-[100px] w-auto">
            <HeroWordmarkDimas className="h-full w-auto text-v2-ink" />
          </div>
          <p className="mt-1 font-v2-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-v2-ink/80 text-center">
            Full-Stack Dev <span className="text-v2-coral">|</span> AIoT
          </p>
        </div>

        {/* Bottom CTA Action Buttons: Layered OVER the mascot's shoes with z-30 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 z-30 relative shrink-0 mt-4 lg:mt-[-70px] xl:mt-[-85px]">
          <a
            href="#kontak"
            className="v2-notch inline-flex items-center justify-center gap-2 bg-v2-coral px-8 py-3.5 font-v2-display text-lg font-black uppercase text-v2-canvas transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-xl shadow-v2-coral/30 hover:shadow-2xl hover:shadow-v2-coral/45 w-full sm:w-auto"
          >
            Ngobrol <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#works"
            className="v2-notch inline-flex items-center justify-center gap-2 border border-v2-hairline bg-v2-canvas/80 backdrop-blur-md px-8 py-3.5 font-v2-display text-lg font-black uppercase text-v2-ink transition-all hover:bg-v2-ink hover:text-v2-canvas hover:-translate-y-0.5 shadow-xl shadow-black/40 w-full sm:w-auto"
          >
            Lihat Works <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
