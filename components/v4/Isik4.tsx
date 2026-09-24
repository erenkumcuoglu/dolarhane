"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Kaydırdıkça kelime kelime koyulaşan cümle.
 *
 * Cümle bölümün ortasına doğru ilerledikçe sönük tondan mürekkebe geçiyor;
 * okuma hızı kaydırma hızına bağlanıyor. Metin DOM'da tam ve tek parça —
 * ekran okuyucu için değişen hiçbir şey yok. Hareket kısılmışsa ya da JS
 * yoksa cümle baştan tam koyu.
 */
export function Isik4({ metin, vurgu = [] }: { metin: string; vurgu?: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const kelimeler = metin.split(" ");
  const [yanan, setYanan] = useState(kelimeler.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const hesapla = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      /* Cümlenin üstü ekranın %85'ine gelince başla, altı %45'e gelince bitir. */
      const bas = vh * 0.85;
      const bit = vh * 0.45 - r.height;
      const p = Math.min(1, Math.max(0, (bas - r.top) / (bas - bit)));
      setYanan(Math.round(p * kelimeler.length));
    };
    const dinle = () => {
      if (!raf) raf = requestAnimationFrame(hesapla);
    };
    hesapla();
    window.addEventListener("scroll", dinle, { passive: true });
    window.addEventListener("resize", dinle);
    return () => {
      window.removeEventListener("scroll", dinle);
      window.removeEventListener("resize", dinle);
      cancelAnimationFrame(raf);
    };
  }, [kelimeler.length]);

  return (
    <p className="v4-isik" ref={ref}>
      {kelimeler.map((w, i) => (
        <span
          key={i}
          className={`${i < yanan ? "on" : ""}${vurgu.includes(w.replace(/[.,—]/g, "")) ? " v4-isik__v" : ""}`}
        >
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
