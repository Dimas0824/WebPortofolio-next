"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-black tracking-tighter text-[#1A1A1A]">Oops!</h1>
        <p className="text-gray-500 font-medium">Something went wrong.</p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-xs hover:bg-[#F2C18D] hover:text-[#1A1A1A] transition-all shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
