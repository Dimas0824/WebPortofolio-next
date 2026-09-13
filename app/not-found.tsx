import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <h1 className="sr-only">Halaman tidak ditemukan — portofolio</h1>
      <p aria-hidden className="select-none font-v2-display font-black uppercase leading-[.82] text-[clamp(3.5rem,18vw,12rem)] text-v2-ink">
        Salah
        <br />
        jalan.
      </p>
      <p className="mt-6 font-v2-mono text-xs uppercase tracking-[.15em] text-v2-muted">
        404 · yang kamu cari bukan di sini
      </p>
      <Link
        href="/"
        className="v2-notch mt-10 bg-v2-coral px-8 py-4 font-v2-display text-xl font-black uppercase text-v2-canvas"
      >
        ← Balik ke beranda
      </Link>
    </main>
  );
}
