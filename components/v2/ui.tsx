export function Eyebrow({ index, label, className = "" }: { index: string; label: string; className?: string }) {
    return (
        <p className={`font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun ${className}`}>
            {index} / {label}
        </p>
    );
}
export function SpillBackdrop() {
    // v2-spill + vignette radial — satu panggilan, dua lapisan sesuai §4.1
    return (
        <>
            <div aria-hidden className="v2-spill pointer-events-none absolute -top-[15%] right-[-10%] -z-10 h-[70vh] w-[55vw] rotate-[35deg]" />
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse 90% 60% at 50% 38%, rgba(42,92,109,.5), transparent 70%)" }} />
        </>
    );
}
export function NoiseLayer() {
    // stipple global — reuse class .noise-overlay yang SUDAH ada di globals.css (no edit file lama)
    return <div aria-hidden className="noise-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.04]" />;
}
const MASKOT_SRC = "/images/profile/maskot.svg";
export function V2Maskot({ className = "", alt = "Maskot 3D Irsyad Dimas berdiri membawa laptop", priority = false, flip = false }: { className?: string; alt?: string; priority?: boolean; flip?: boolean }) {
    return (
        <img src={MASKOT_SRC} alt={alt} width={466} height={834}
            loading={priority ? "eager" : "lazy"}
            {...(priority ? { fetchPriority: "high" as const } : {})}
            className={`${className} ${flip ? "-scale-x-100" : ""}`} />
    );
}
