import type { NextRequest } from "next/server";
import type { NextConfig } from "next";

function addSecurityHeaders(): Array<{
  key: string;
  value: string;
}> {
  return [
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  ];
}

const nextConfig: NextConfig = {
  // pin root: D:\MiniProject\package-lock.json (luar repo ini) bikin Next infer workspace-root ke folder parent
  // -> `next start` nyari .next di parent (nggak ada) -> semua route 404. Ini permanent fix (disarankan Next sendiri).
  outputFileTracingRoot: __dirname,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: addSecurityHeaders(),
      },
    ];
  },
};

export default nextConfig;
