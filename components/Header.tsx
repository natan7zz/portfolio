import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const brand = "Natan";

const codeFont = "'VT323', ui-monospace, Menlo, Consolas, monospace";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#conhecimentos", label: "Conhecimentos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          aria-label={`${brand} - início`}
          style={{ fontFamily: codeFont }}
          className="group inline-flex items-center text-3xl font-normal tracking-wide"
        >
          <span className="text-zinc-500 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-accent">
            {"<"}
          </span>
          <span className="text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">
            {brand}
          </span>
          <span className="text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
            {"/>"}
          </span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex items-center gap-4 text-sm sm:gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative py-1 font-bold text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                <span className="hidden sm:inline">{l.label}</span>
                <span className="sm:hidden">{l.label.split(" ")[0]}</span>
                {/* Linha ciano que cresce da esquerda para a direita */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
