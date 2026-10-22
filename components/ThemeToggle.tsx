"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  // Aplica o tema salvo na última visita
  useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("light");
      }
    } catch {
      // sem localStorage: usa o tema escuro
    }
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // sem localStorage: o tema só vale nesta visita
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
      title={isLight ? "Tema escuro" : "Tema claro"}
      className="group flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-accent hover:text-accent hover:shadow-[0_6px_16px_-4px_rgba(0,240,255,0.55)]"
    >
      {/* Sol (aparece no tema escuro) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-sun h-5 w-5 transition-transform duration-500 group-hover:rotate-90"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Lua (aparece no tema claro) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-moon h-5 w-5 transition-transform duration-500 group-hover:-rotate-12"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
