import profile from "@/content/profile";
import skillsData from "@/content/skills";
import projectsData from "@/content/projects";
import MarqueeStrip from "@/components/MarqueeStrip";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ExpertiseSection from "@/components/ExpertiseSection";
import FooterSection from "@/components/FooterSection";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/client/CustomCursor";
import RootMotionConfig from "@/components/client/RootMotionConfig";
import ProjectsSection from "@/components/client/ProjectsSection";
import ContactSection from "@/components/client/ContactSection";

// Normalize skills into expertise groups (same as source)
const normalizeExpertise = (skills: Record<string, string[]>): Array<{ category: string; items: string[] }> =>
    Object.entries(skills).map(([category, items]) => ({ category, items }));

// Normalize projects (same as source PortfolioApp)
const normalizeProjects = (projects: any[]): any[] =>
    projects.map((project) => ({
        ...project,
        category: project.category ?? project.tech[0] ?? "Project",
    }));

export default function Home() {
    const expertiseGroups = normalizeExpertise(skillsData);
    const projects = normalizeProjects(projectsData);

    return (
        <RootMotionConfig>
            <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-[#F2C18D]">
                <NoiseOverlay />
                <CustomCursor />

                {/* Header - same order as source PortfolioApp */}
                <header>
                    <Navbar profile={profile} />
                    <HeroSection profile={profile} />
                </header>

                {/* Main content */}
                <main>
                    <MarqueeStrip items={profile.passion ?? []} />
                    <ExpertiseSection expertiseGroups={expertiseGroups} />
                    <ProjectsSection projects={projects} />
                    <ContactSection contacts={profile.contacts} name={profile.name} />
                </main>

                {/* Footer */}
                <footer>
                    <FooterSection contacts={profile.contacts} />
                </footer>
            </div>
        </RootMotionConfig>
    );
}
