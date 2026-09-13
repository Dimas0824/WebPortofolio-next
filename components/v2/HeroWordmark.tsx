import React from "react";

/**
 * Bespoke Art Deco Typography Wordmarks ("IRSYAD" & "DIMAS")
 * Engineered directly to user specifications and reference rules:
 * - NO ceiling line / top roof blocking the letters
 * - Sharp 90-degree corners on rectilinear characters (I, M, left stems of R, D)
 * - Smooth, rounded stadium curves on 'S' matching the reference
 * - Unmistakable open V-fork on 'Y'
 * - Condensed, architectural, abstract Art Deco display typography
 */

export function HeroWordmarkIrsyad({ className = "" }: { className?: string }) {
  // Total ViewBox: 320 x 200
  // BESAR-KECIL ART DECO DISPLAY (No ceiling bars, no underlines, clean baseline):
  // - I (BESAR, 0..200, sharp 90°)
  // - R (BESAR, 0..200, clean Art Deco R)
  // - S (KECIL, 76..200, flat cut terminals, smooth stadium bends)
  // - Y (BESAR, 0..200, open V-fork, solid center stem)
  // - A (KECIL, 76..200, clean baseline)
  // - D (BESAR, 0..200, sharp 90° left stem, stadium right curve)
  return (
    <svg
      viewBox="0 0 320 200"
      fill="currentColor"
      aria-hidden="true"
      className={`h-full w-auto select-none ${className}`}
    >
      {/* I (BESAR): [0, 20] Sharp 90-degree vertical pillar */}
      <rect x="0" y="0" width="20" height="200" />

      {/* R (BESAR): [32, 88] Clean Art Deco R */}
      <rect x="32" y="0" width="20" height="200" />
      {/* R Bowl */}
      <path
        fillRule="evenodd"
        d="
          M 52 0 H 70 A 18 18 0 0 1 88 18 V 56 A 18 18 0 0 1 70 74 H 52 Z
          M 52 20 H 66 A 6 6 0 0 1 72 26 V 48 A 6 6 0 0 1 66 54 H 52 Z
        "
      />
      {/* R Leg: sweeps gracefully outward to baseline */}
      <path d="M 60 74 Q 66 120 86 200 H 65 Q 52 130 52 74 Z" />

      {/* S (KECIL): [98, 144] Flat cut terminals, smooth stadium bends */}
      <path
        d="
          M 144 86
          H 116
          A 16 16 0 0 0 98 102
          V 126
          C 98 144, 144 156, 144 174
          V 184
          A 16 16 0 0 1 128 200
          H 98
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />

      {/* Y (BESAR): [152, 208] Beautiful Art Deco Open V-Fork */}
      <path
        fillRule="evenodd"
        d="
          M 152 0
          H 172
          L 180 72
          L 188 0
          H 208
          L 190 90
          V 200
          H 170
          V 90
          Z
        "
      />

      {/* A (KECIL): [218, 262] Flush on baseline, no underline */}
      <path
        fillRule="evenodd"
        d="
          M 218 200 V 94 A 18 18 0 0 1 236 76 H 244 A 18 18 0 0 1 262 94 V 200 H 244 V 146 H 236 V 200 H 218 Z
          M 236 94 H 244 V 128 H 236 Z
        "
      />

      {/* D (BESAR): [272, 316] Clean Art Deco D, no underline */}
      <rect x="272" y="0" width="20" height="200" />
      <path
        fillRule="evenodd"
        d="
          M 292 0 H 300 A 16 16 0 0 1 316 16 V 184 A 16 16 0 0 1 300 200 H 292 Z
          M 292 20 H 296 A 4 4 0 0 1 300 24 V 176 A 4 4 0 0 1 296 180 H 292 Z
        "
      />
    </svg>
  );
}

export function HeroWordmarkDimas({ className = "" }: { className?: string }) {
  // Total ViewBox: 272 x 200 (Clean baseline, no underlines, S unclipped)
  // BESAR-KECIL ART DECO DISPLAY:
  // - D (BESAR, 0..200)
  // - I (KECIL, 76..200, flush on baseline)
  // - M (BESAR, 0..200, sharp 90° outer stems, geometric V)
  // - A (KECIL, 76..200, flush on baseline)
  // - S (BESAR, 0..200, full-height smooth Art Deco stadium curves with flat horizontal terminals)
  return (
    <svg
      viewBox="0 0 272 200"
      fill="currentColor"
      aria-hidden="true"
      className={`h-full w-auto select-none ${className}`}
    >
      {/* D (BESAR): [0, 44] Clean Art Deco D, no underline */}
      <rect x="0" y="0" width="20" height="200" />
      <path
        fillRule="evenodd"
        d="
          M 20 0 H 28 A 16 16 0 0 1 44 16 V 184 A 16 16 0 0 1 28 200 H 20 Z
          M 20 20 H 26 A 4 4 0 0 1 30 24 V 176 A 4 4 0 0 1 26 180 H 20 Z
        "
      />

      {/* I (KECIL): [56, 76] Flush on baseline, no underline */}
      <rect x="56" y="76" width="20" height="124" />

      {/* M (BESAR): [86, 148] Clean Art Deco M, no underline */}
      <rect x="86" y="0" width="18" height="200" />
      <rect x="130" y="0" width="18" height="200" />
      <polygon points="104,0 117,90 130,0 142,0 123,115 111,115 92,0" />

      {/* A (KECIL): [158, 202] Flush on baseline, no underline */}
      <path
        fillRule="evenodd"
        d="
          M 158 200 V 94 A 18 18 0 0 1 176 76 H 184 A 18 18 0 0 1 202 94 V 200 H 184 V 146 H 176 V 200 H 158 Z
          M 176 94 H 184 V 128 H 176 Z
        "
      />

      {/* S (BESAR): [212, 260] Full Height Smooth Art Deco Curves with flat terminals, 100% UNCLIPPED */}
      <path
        d="
          M 258 10
          H 230
          A 18 18 0 0 0 212 28
          V 72
          C 212 94, 258 114, 258 136
          V 172
          A 18 18 0 0 1 240 190
          H 212
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Unified Desktop SVG Wordmark (IRSYAD [Bridge] DIMAS)
 */
export function HeroWordmarkDesktop({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between w-full select-none ${className}`}>
      <div className="h-full">
        <HeroWordmarkIrsyad />
      </div>
      <div className="h-full">
        <HeroWordmarkDimas />
      </div>
    </div>
  );
}

// Retain PORT & FOLIO exports for reference or fallback tests
export function HeroWordmarkPort({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 196 200" fill="currentColor" aria-hidden="true" className={`h-full w-auto select-none ${className}`}>
      <rect x="0" y="0" width="20" height="200" />
      <path fillRule="evenodd" d="M 20 0 H 56 A 20 20 0 0 1 76 20 V 60 A 20 20 0 0 1 56 80 H 20 V 60 H 52 A 10 10 0 0 0 62 50 V 30 A 10 10 0 0 0 52 20 H 20 Z" />
      <path fillRule="evenodd" d="M 46 94 H 58 A 18 18 0 0 1 76 112 V 182 A 18 18 0 0 1 58 200 H 46 A 18 18 0 0 1 28 182 V 112 A 18 18 0 0 1 46 94 Z M 48 116 H 56 A 6 6 0 0 1 62 122 V 172 A 6 6 0 0 1 56 178 H 48 A 6 6 0 0 1 42 172 V 122 A 6 6 0 0 1 48 116 Z" />
      <rect x="88" y="0" width="20" height="200" />
      <path fillRule="evenodd" d="M 108 0 H 130 A 18 18 0 0 1 148 18 V 62 A 18 18 0 0 1 130 80 H 108 V 60 H 126 A 10 10 0 0 0 134 50 V 30 A 10 10 0 0 0 126 20 H 108 Z" />
      <path d="M 108 78 Q 122 110 148 200 H 126 Q 110 125 108 88 Z" />
      <rect x="88" y="0" width="108" height="20" />
      <rect x="154" y="0" width="20" height="200" />
    </svg>
  );
}

export function HeroWordmarkFolio({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 206 200" fill="currentColor" aria-hidden="true" className={`h-full w-auto select-none ${className}`}>
      <rect x="0" y="0" width="20" height="200" />
      <rect x="0" y="0" width="76" height="20" />
      <rect x="0" y="72" width="70" height="20" />
      <path fillRule="evenodd" d="M 46 104 H 58 A 18 18 0 0 1 76 122 V 182 A 18 18 0 0 1 58 200 H 46 A 18 18 0 0 1 28 182 V 122 A 18 18 0 0 1 46 104 Z M 48 126 H 56 A 6 6 0 0 1 62 132 V 172 A 6 6 0 0 1 56 178 H 48 A 6 6 0 0 1 42 172 V 132 A 6 6 0 0 1 48 126 Z" />
      <rect x="88" y="0" width="20" height="200" />
      <rect x="88" y="180" width="54" height="20" />
      <rect x="122" y="0" width="20" height="180" />
      <path fillRule="evenodd" d="M 176 0 H 186 A 20 20 0 0 1 206 20 V 180 A 20 20 0 0 1 186 200 H 176 A 20 20 0 0 1 156 180 V 20 A 20 20 0 0 1 176 0 Z M 178 22 H 184 A 6 6 0 0 1 190 28 V 172 A 6 6 0 0 1 184 178 H 178 A 6 6 0 0 1 172 172 V 28 A 6 6 0 0 1 178 22 Z" />
    </svg>
  );
}
