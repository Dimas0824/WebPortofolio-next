import projectsData from "@/content/projects";
import skillsData from "@/content/skills";
import type { PortfolioItem, ExpertiseGroup } from "@/content/types";

const CURATED = [
    "FloodWatch — Dashboard & Analytics",
    "FloodWatch — Simulator Digital Twin",
    "FloodWatch — ESP32 Firmware",
    "Invoice & Kwitansi Generator",
    "PayTo — Sistem Kasir Toko",
    "MAGNET — Sistem Informasi Magang",
    "DiscipLink V2 — Secure MVC Refactor",
    "DiscipLink — Sistem Informasi Tata Tertib",
    "IHSG LSTM Forecasting",
    "Streamlytics Netflix — User Segmentation",
    "Oi!Kerjain — Daily Task Scheduler",
    "Simple TikTok Post Text Mining",
    "Uninformed Search Algorithms Comparison",
    "Sistem Kasir Cafe (CASS)",
];

/** norm(): samakan U+2013/2014 vs "-", rapikan spasi; kurasi anti-roboh akibat copy-paste dash */
const norm = (s: string) => s.replace(/[\u2013\u2014]/g, "-").replace(/\s+/g, " ").trim().toLowerCase();

export function getWorks(): PortfolioItem[] {
    const byT = new Map(projectsData.map((p) => [norm(p.title), p]));
    const picked = CURATED.map((t) => byT.get(norm(t))).filter((p): p is PortfolioItem => !!p);
    const rest = projectsData.filter((p) => !picked.includes(p));
    return [...picked, ...rest];
}

export function getExpertiseGroups(): ExpertiseGroup[] {
    return Object.entries(skillsData).map(([category, items]) => ({ category, items }));
}
