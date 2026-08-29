"use client";

import { useEffect, useState } from "react";

const BOLUMLER: [string, string][] = [
  ["h-cetvel", "Cetvel"],
  ["h-nakit", "Nakit ve getiri"],
  ["h-otuz", "30 yıl"],
  ["h-kars", "Karşılaştırma"],
];

/** Masaüstünde yapışkan içindekiler. Telefonda gizli. */
export function Toc() {
  const [aktif, setAktif] = useState(0);

  useEffect(() => {
    let kare = 0;
    const olc = () => {
      cancelAnimationFrame(kare);
      kare = requestAnimationFrame(() => {
        let bulunan = 0;
        BOLUMLER.forEach(([id], i) => {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 160) bulunan = i;
        });
        setAktif(bulunan);
      });
    };
    window.addEventListener("scroll", olc, { passive: true });
    window.addEventListener("resize", olc);
    olc();
    return () => {
      window.removeEventListener("scroll", olc);
      window.removeEventListener("resize", olc);
      cancelAnimationFrame(kare);
    };
  }, []);

  return (
    <nav className="toc" aria-label="Sayfa içindekiler">
      <p className="mini toc__bas">İÇİNDEKİLER</p>
      {BOLUMLER.map(([id, ad], i) => (
        <a
          key={id}
          href={`#${id}`}
          className={`toc__h${aktif === i ? " toc__h--aktif" : ""}`}
          aria-current={aktif === i ? "true" : undefined}
        >
          {ad}
        </a>
      ))}
    </nav>
  );
}
