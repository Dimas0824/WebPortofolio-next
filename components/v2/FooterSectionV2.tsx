import profile from "@/content/profile";

export default function FooterV2() {
    return (
        <footer className="border-t border-v2-hairline py-7">
            <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 px-4 font-v2-mono text-[10px] uppercase tracking-[.15em] text-v2-muted sm:flex-row md:px-6">
                <span className="v2-notch bg-v2-ink px-2 py-1 text-[11px] font-bold tracking-normal text-v2-canvas">ID:</span>
                <nav aria-label="Navigasi footer" className="flex gap-6">
                    <a href="#works" className="hover:text-v2-ink">Works</a>
                    <a href="#stack" className="hover:text-v2-ink">Stack</a>
                    <a href="#about" className="hover:text-v2-ink">About</a>
                    <a href={`mailto:${profile.contacts.email}`} className="hover:text-v2-ink">Email</a>
                </nav>
                <span>© 2026 Irsyad Dimas</span>
            </div>
        </footer>
    );
}
