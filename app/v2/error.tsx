"use client";

export default function V2Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
            <p aria-hidden className="font-v2-display text-7xl font-black uppercase text-v2-coral">Nge-hang.</p>
            <p className="mt-4 max-w-sm font-v2-mono text-sm text-v2-muted">{error.message || "Terjadi galat. Coba lagi."}</p>
            <button onClick={reset} className="v2-notch mt-8 border border-v2-hairline px-8 py-4 font-v2-display text-lg font-bold uppercase text-v2-ink hover:bg-v2-ink hover:text-v2-canvas">Coba lagi</button>
        </div>
    );
}
