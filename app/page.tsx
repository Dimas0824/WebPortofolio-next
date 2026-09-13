import { existsSync } from "node:fs";
import { join } from "node:path";
import profile from "@/content/profile";
import { getExpertiseGroups, getWorks } from "@/lib/v2/data";
import V2Hero from "@/components/v2/Hero";
import WorksReel from "@/components/v2/WorksReel";
import StackSection from "@/components/v2/StackSection";
import AboutSection from "@/components/v2/AboutSection";
import ContactBanner from "@/components/v2/ContactBanner";

export default function V2Page() {
    const works = getWorks();
    // file-based screenshot contract (Task 9 capture): public/images/v2/work-{i}.jpeg
    const shots = works.map((_, i) => (existsSync(join("public", "images", "v2", `work-${i}.jpeg`)) ? `/images/v2/work-${i}.jpeg` : null));
    return (
        <main>
            <V2Hero />
            <WorksReel works={works} shots={shots} />
            <StackSection groups={getExpertiseGroups()} />
            <AboutSection profile={profile} />
            <ContactBanner />
        </main>
    );
}
