import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle index="02" label="destaques" title="Projetos em destaque" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} className="h-full">
          <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              ) : (
                <span className="font-mono text-2xl text-accent/70">{`{ ${p.title} }`}</span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                {p.year && <span className="font-bold text-zinc-300">{p.year}</span>}
              </div>
              <p className="mt-2 text-zinc-400">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="cursor-default rounded-lg border border-accent/20 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-accent hover:bg-accent hover:text-ink-950 hover:shadow-[0_6px_16px_-4px_rgba(0,240,255,0.55)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 pt-2 text-sm font-medium text-white transition hover:text-accent"
              >
                Ver projeto →
              </a>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
