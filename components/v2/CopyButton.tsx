"use client";
import { useRef, useState } from "react";

export default function CopyButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    return (
        <button type="button" aria-live="polite"
            onClick={async () => {
                try { await navigator.clipboard.writeText(email); } catch { window.prompt("Salin email:", email); return; }
                setCopied(true);
                if (timer.current) clearTimeout(timer.current);
                timer.current = setTimeout(() => setCopied(false), 2000);
            }}
            className="v2-notch border border-v2-hairline px-8 py-3.5 font-v2-display text-lg font-black uppercase text-v2-ink transition-colors hover:bg-v2-ink hover:text-v2-canvas">
            {copied ? "TERSALIN ✓" : "COPY EMAIL"}
        </button>
    );
}
