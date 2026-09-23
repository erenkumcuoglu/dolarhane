"use client";

import { useEffect, useState } from "react";
import { SLOGANLAR, SURE } from "@/lib/sloganlar";

/**
 * V3 manşet — dönen slogan seti.
 *
 * Mantık Slogan2 ile birebir aynı (WCAG 2.2.2'nin üç kademesi: hover/focus
 * duraklatır, klavyeyle ulaşılan gizli düğme durdurur, reduced-motion hiç
 * döndürmez). Kopyalandı çünkü iki dünya birbirinin sınıf adını
 * kilitlememeli; biri seçildiğinde diğeri silinecek.
 */
export function Slogan3() {
  const [aktif, setAktif] = useState(0);
  const [duraklat, setDuraklat] = useState(false);
  const [durduruldu, setDurduruldu] = useState(false);
  const [azHareket, setAzHareket] = useState(false);

  useEffect(() => {
    setAzHareket(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (durduruldu || duraklat || azHareket) return;
    const t = setInterval(
      () => setAktif((i) => (i + 1) % SLOGANLAR.length),
      SURE,
    );
    return () => clearInterval(t);
  }, [durduruldu, duraklat, azHareket]);

  return (
    <div
      className="v3-slogan"
      onMouseEnter={() => setDuraklat(true)}
      onMouseLeave={() => setDuraklat(false)}
      onFocusCapture={() => setDuraklat(true)}
      onBlurCapture={() => setDuraklat(false)}
    >
      <h1 className="v3-slogan__yigin">
        {SLOGANLAR.map((s, i) => (
          <span
            key={s}
            className={`v3-slogan__m${i === aktif ? " v3-slogan__m--acik" : ""}`}
            aria-hidden={i !== aktif}
          >
            {s}
          </span>
        ))}
      </h1>

      {!durduruldu && !azHareket ? (
        <button
          type="button"
          className="v3-slogan__dur"
          onClick={() => setDurduruldu(true)}
        >
          Slogan dönüşünü durdur
        </button>
      ) : null}
    </div>
  );
}
