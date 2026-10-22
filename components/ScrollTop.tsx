"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white [html:not(.light)_&]:text-ink-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-accent-soft hover:shadow-[0_10px_25px_-5px_rgba(0,240,255,0.6)]"
      >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <polyline points="6 12 12 6 18 12" />
        <polyline points="6 19 12 13 18 19" />
      </svg>
    </a>
  );
}
