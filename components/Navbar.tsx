import { Github } from "lucide-react";

export type NavbarProps = {
    profile: {
        name: string;
        contacts?: {
            github?: string;
        };
    };
};

const Navbar: React.FC<NavbarProps> = ({ profile }) => {
    const initial = profile.name?.[0]?.toUpperCase() ?? "P";

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#FDFCFB]/95 border-b border-[#EAD7BB]/50 animate-fade-slide-in">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Convert onClick + motion.a to anchor link */}
                <a href="#top" id="top" className="text-lg font-black tracking-tighter uppercase flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-7 h-7 bg-gradient-to-tr from-[#C2996B] to-[#F2C18D] rounded-lg rotate-12 flex items-center justify-center text-white shadow-md shadow-[#C2996B]/30 hover:rotate-0 hover:scale-110 transition-all duration-300">
                        {initial}
                    </div>
                    <span>{profile.name}</span>
                </a>
                <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
                    <a href="#work" className="hover:text-[#C2996B] transition-colors">
                        Work
                    </a>
                    <a href="#expertise" className="hover:text-[#C2996B] transition-colors">
                        Expertise
                    </a>
                    <a href="#contact" className="hover:text-[#C2996B] transition-colors">
                        Contact
                    </a>
                    {profile.contacts?.github && (
                        <a
                            href={profile.contacts.github}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#1A1A1A] text-white px-5 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#C2996B] hover:to-[#F2C18D] hover:text-white transition-all duration-300 font-black shadow-[3px_3px_0px_0px_rgba(242,193,141,1)] hover:shadow-[5px_5px_0px_0px_rgba(194,153,107,0.5)] border border-[#1A1A1A]"
                        >
                            GITHUB
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
