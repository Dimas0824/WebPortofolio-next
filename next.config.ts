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
