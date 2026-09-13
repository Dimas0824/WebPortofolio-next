import type { Profile } from "@/content/types";

export default function AboutSection({ profile }: { profile: Profile }) {
  const photo = profile.images?.[0] ?? "";
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="mb-10">
          <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">
            03 / ABOUT
          </p>
          <h2 className="mt-3 font-v2-display text-5xl font-bold uppercase md:text-6xl">
            Siapa Saya?
          </h2>
        </div>
        <div className="grid gap-8 rounded-[24px] bg-v2-raised p-6 md:grid-cols-[40%_1fr] md:p-10">
          <div className="relative">
            <span
              aria-hidden
              className="absolute -left-0.5 -top-3 z-10 bg-v2-deep font-v2-mono text-[10px] uppercase tracking-[.2em] text-v2-sun"
            >
              HUMAN.JPG
            </span>
            <img
              src={photo}
              alt={`Foto ${profile.name}`}
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[16px] border-2 border-v2-ink object-cover"
            />
          </div>
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
              aria-hidden
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
