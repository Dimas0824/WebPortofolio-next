const raw = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// ponytail: env may be given without scheme (e.g. "heydims.my.id"); normalize once so every consumer gets a valid absolute URL
export const SITE_URL = (/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).replace(/\/+$/, "");
