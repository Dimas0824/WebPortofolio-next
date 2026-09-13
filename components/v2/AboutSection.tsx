import type { Profile } from "@/content/types";

export default function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="mb-10">
          <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">
            03 / ABOUT
          </p>
          <h2 className="mt-3 font-v2-display text-5xl font-bold uppercase md:text-6xl text-v2-ink">
            Siapa Saya?
          </h2>
        </div>

        <div className="grid gap-8 rounded-[24px] bg-v2-raised p-6 md:grid-cols-[40%_1fr] md:p-10">
          {/* LEFT: Futuristic IT Developer ID Card with Cybernetic Ornaments */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-0.5 -top-3 z-10 bg-v2-deep font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-sun"
            >
              ID.SYS
            </span>

            <div className="relative flex aspect-[4/5] w-full flex-col justify-between rounded-[16px] border border-v2-hairline bg-v2-canvas/75 p-6 md:p-7 shadow-lg overflow-hidden backdrop-blur-md">
              {/* Futuristic Circuit & Grid Background Ornament */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 30%, #2a5c6d 0%, transparent 70%), radial-gradient(circle, #ecefdc 1px, transparent 1px)`,
                  backgroundSize: "100% 100%, 14px 14px",
                }}
              />

              {/* HUD Corner Reticle Ornaments */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-2.5 left-2.5 font-v2-mono text-[9px] text-v2-sun/50 select-none"
              >
                ┌──
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-2.5 right-2.5 font-v2-mono text-[9px] text-v2-sun/50 select-none"
              >
                ──┐
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-2.5 left-2.5 font-v2-mono text-[9px] text-v2-sun/50 select-none"
              >
                └──
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-2.5 right-2.5 font-v2-mono text-[9px] text-v2-sun/50 select-none"
              >
                ──┘
              </div>

              {/* Top Header: ID Code, Chip Ornament & Live Status */}
              <div className="relative z-10 flex items-center justify-between border-b border-v2-hairline/80 pb-3.5">
                <div className="flex items-center gap-2.5">
                  {/* Micro Tech Smart-Chip Ornament */}
                  <div className="relative h-6 w-8 rounded-[3px] border border-v2-sun/50 bg-gradient-to-br from-v2-sun/25 via-v2-sun/10 to-transparent p-0.5 shadow-sm">
                    <div className="relative h-full w-full rounded-[2px] border border-v2-sun/30 flex items-center justify-center">
                      <div className="absolute inset-x-0 h-[1px] bg-v2-sun/40" />
                      <div className="absolute inset-y-0 w-[1px] bg-v2-sun/40" />
                      <div className="h-2 w-2 rounded-[1px] border border-v2-sun/70 bg-v2-canvas/90" />
                    </div>
                  </div>
                  <div>
                    <span className="font-v2-mono text-[10px] font-bold uppercase tracking-[0.2em] text-v2-sun block leading-none">
                      DEV // ID-01
                    </span>
                    <span className="font-v2-mono text-[8px] uppercase tracking-[0.25em] text-v2-muted block mt-1">
                      BIO-KEY: 0824
                    </span>
                  </div>
                </div>

                {/* Live Telemetry Ping */}
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-v2-mono text-[8.5px] uppercase tracking-[0.18em] text-emerald-300 font-semibold">
                    SYS: ONLINE
                  </span>
                </div>
              </div>

              {/* Center: Identity & Specs (Futuristic Typography & Clean Data Lines) */}
              <div className="relative z-10 my-auto py-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-v2-mono text-[8.5px] uppercase tracking-[0.28em] text-v2-muted/80">
                    OPERATOR IDENTITY
                  </p>
                  <span className="font-v2-mono text-[8px] uppercase tracking-wider text-v2-sun/70">
                    [AUTH_LVL.1]
                  </span>
                </div>

                <h3 className="font-v2-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-v2-ink drop-shadow-sm">
                  SAMID
                </h3>
                <p className="font-v2-mono text-[11px] uppercase tracking-[0.2em] text-v2-coral font-bold mt-0.5">
                  Irsyad Dimas
                </p>

                {/* Technical Telemetry Ribbon */}
                <div className="my-3 flex items-center justify-between border-y border-v2-hairline/40 py-1.5 font-v2-mono text-[8px] uppercase tracking-[0.18em] text-v2-muted/70">
                  <span>LNK: 10GbE</span>
                  <span>•</span>
                  <span>SIG: 99.8%</span>
                  <span>•</span>
                  <span>CORE: ASYNC</span>
                </div>

                {/* Spec Rows */}
                <div className="space-y-2 font-v2-mono text-[11px]">
                  <div className="flex items-baseline justify-between border-b border-v2-hairline/40 pb-1.5">
                    <span className="text-v2-muted text-[10px] uppercase tracking-wider">
                      ROLE
                    </span>
                    <span className="text-v2-ink font-semibold tracking-wide">
                      INFORMATICS ENG.
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-v2-hairline/40 pb-1.5">
                    <span className="text-v2-muted text-[10px] uppercase tracking-wider">
                      FOCUS
                    </span>
                    <span className="text-v2-ink font-semibold tracking-wide">
                      WEB &amp; AIoT
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-v2-hairline/40 pb-1.5">
                    <span className="text-v2-muted text-[10px] uppercase tracking-wider">
                      BASE
                    </span>
                    <span className="text-v2-ink tracking-wide">
                      INDONESIA [UTC+7]
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom: Barcode Ornament & Cybernetic Signature */}
              <div className="relative z-10 border-t border-v2-hairline/80 pt-3 flex items-center justify-between">
                <div className="space-y-0.5 font-v2-mono">
                  <span className="text-[7.5px] uppercase tracking-[0.25em] text-v2-muted/70 block">
                    SECURITY PROTOCOL
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-v2-sun font-bold">
                    SYS // DETERMINISTIC
                  </span>
                </div>

                {/* Futuristic Micro Optical Barcode Ornament */}
                <div
                  aria-hidden="true"
                  className="flex items-end gap-[2px] h-5 opacity-70 select-none"
                >
                  <span className="w-[1px] h-full bg-v2-sun" />
                  <span className="w-[2px] h-3 bg-v2-ink" />
                  <span className="w-[1px] h-full bg-v2-ink" />
                  <span className="w-[3px] h-4 bg-v2-sun" />
                  <span className="w-[1px] h-full bg-v2-ink" />
                  <span className="w-[2px] h-2 bg-v2-ink" />
                  <span className="w-[1px] h-full bg-v2-sun" />
                  <span className="w-[3px] h-full bg-v2-ink" />
                  <span className="w-[1px] h-3.5 bg-v2-ink" />
                  <span className="w-[2px] h-full bg-v2-sun" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Restored Exactly to Original */}
          <div className="flex flex-col justify-center">
            <p className="mt-1 max-w-xl leading-relaxed text-v2-muted">
              Panggil aja Samid — masih undergraduate di Informatics
              Engineering, tapi kerjaan di atas tadi udah cukup jujur soal apa
              yang saya suka: bikin sesuatu yang tadinya ribet jadi simpel dan
              otomatis. Kalau ada yang menarik dari situ, atau cuma mau ngobrol,
              tinggal geser ke bawah.
            </p>
            <hr
              className="my-6 h-px w-10 border-0 bg-v2-hairline"
              aria-hidden="true"
            />
            {profile.philosophy && (
              <blockquote className="font-v2-display text-2xl font-bold uppercase leading-tight text-v2-ink md:text-3xl">
                &ldquo;{profile.philosophy}&rdquo;
              </blockquote>
            )}
            <p className="mt-4 font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-muted">
              {profile.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
