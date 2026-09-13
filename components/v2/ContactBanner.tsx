import profile from "@/content/profile";
import { V2Maskot } from "./ui";
import CopyButton from "./CopyButton";
import { IconMail, IconGithub, IconLinkedin, IconInstagram } from "./icons";

const TILES = [
  { href: `mailto:${profile.contacts.email}`, label: "Email", Icon: IconMail },
  { href: profile.contacts.github, label: "GitHub", Icon: IconGithub },
  { href: profile.contacts.linkedin, label: "LinkedIn", Icon: IconLinkedin },
  { href: profile.contacts.instagram, label: "Instagram", Icon: IconInstagram },
];

export default function ContactBanner() {
  return (
    <section id="kontak" className="py-24">
      <div
        className="v2-spill relative mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-v2-hairline px-5 py-8 md:px-8"
        style={{ background: "#1B3D4A" }}
      >
        <p className="font-v2-mono text-xs uppercase tracking-[.2em] text-v2-sun">
          00 / PENUTUP
        </p>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-v2-display text-[clamp(1.8rem,4.6vw,3.3rem)] font-black uppercase leading-[.9] text-v2-ink">
              Terima kasih
              <br />
              <span className="text-v2-coral">sudah mampir.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-v2-muted">
              Salam kenal, saya Irsyad — terbuka untuk kolaborasi, kerja, atau
              sekadar ngobrol teknis.
            </p>
            <p className="mt-4 font-v2-mono text-[11px] italic text-v2-muted">
              &ldquo;{profile.philosophy}&rdquo;
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.contacts.email}?subject=Halo%20dari%20portofolio`}
                className="v2-notch inline-flex items-center gap-2 bg-v2-coral px-8 py-3.5 font-v2-display text-lg font-black uppercase text-white transition-transform hover:-translate-y-0.5"
              >
                <IconMail className="h-5 w-5" /> Kirim email{" "}
                <span aria-hidden>↗</span>
              </a>
              <CopyButton email={profile.contacts.email} />
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-v2-hairline px-4 py-2 font-v2-mono text-[11px] uppercase text-v2-muted">
              Open for collaboration
            </span>
            <V2Maskot
              flip
              alt="Maskot melambaikan tangan (versi cermin)"
              className="w-[min(30vw,150px)] v2-float"
            />
            <div className="mt-4 grid grid-cols-4 gap-3">
              {TILES.filter((t) => t.href).map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-[12px] border-[1.5px] border-v2-hairline text-v2-ink transition-transform hover:-translate-y-0.5 hover:border-v2-ink/60"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
