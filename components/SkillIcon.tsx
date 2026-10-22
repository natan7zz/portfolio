"use client";

import { useState } from "react";

// Mostra o ícone da tecnologia. Se a imagem não carregar (link errado ou arquivo
// que ainda não foi colocado em /public), aparece um quadrado com a inicial.
export default function SkillIcon({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 font-mono text-lg font-bold text-accent">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={36}
      height={36}
      loading="lazy"
      className="h-9 w-9 object-contain"
      onError={() => setFailed(true)}
    />
  );
}
