"use client";

import { useState } from "react";

type PhotoProps = {
  src: string; // foto do tema claro
  darkSrc?: string; // foto do tema escuro (opcional)
  name: string;
};

export default function Photo({ src, darkSrc, name }: PhotoProps) {
  const [lightFailed, setLightFailed] = useState(false);
  const [darkFailed, setDarkFailed] = useState(false);

  const useDark = Boolean(darkSrc) && !darkFailed;

  // Sem nenhuma foto carregando: mostra a inicial do nome
  if (lightFailed && !useDark) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-ink-800 text-7xl font-semibold text-accent">
        {name.charAt(0)}
      </div>
    );
  }

  const img = "h-full w-full object-cover";

  return (
    <>
      {/* Foto do tema claro */}
      {!lightFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`Foto de ${name}`}
          className={`${img} ${useDark ? "hidden [html.light_&]:block" : "block"}`}
          onError={() => setLightFailed(true)}
        />
      )}

      {/* Foto do tema escuro */}
      {useDark && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={darkSrc}
          alt={`Foto de ${name}`}
          className={`${img} block [html.light_&]:hidden`}
          onError={() => setDarkFailed(true)}
        />
      )}
    </>
  );
}
