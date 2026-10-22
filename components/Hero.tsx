import { highlights, profile } from "@/lib/data";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal direction="left">
          <p className="text-xl font-bold text-accent sm:text-2x2">{profile.role}</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="name-white">{profile.name} Sousa</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="cursor-default rounded-md border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-accent hover:bg-accent hover:text-ink-950 hover:shadow-[0_6px_16px_-4px_rgba(0,240,255,0.55)]"
              >
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group relative overflow-hidden rounded-lg bg-accent px-6 py-3 font-medium text-ink-950 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-accent-soft hover:shadow-[0_0_30px_rgba(0,240,255,0.65)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative inline-flex items-center gap-2">
                Vamos conversar
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 text-zinc-300 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white hover:shadow-[0_10px_25px_-5px_rgba(10,102,194,0.6)]"
            >
              <LinkedInIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 text-zinc-300 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-[#8957e5] hover:bg-[#8957e5] hover:text-white hover:shadow-[0_10px_25px_-5px_rgba(137,87,229,0.6)]"
            >
              <GitHubIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110" />
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-accent/60" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-800">
            <Photo src={profile.photo} darkSrc={profile.photoDark} name={profile.name} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
