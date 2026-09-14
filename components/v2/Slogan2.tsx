"use client";

import { useEffect, useState } from "react";
import { SLOGANLAR, SURE } from "@/lib/sloganlar";

/**
 * Karşılamada dönen slogan.
 *
 * Manşet (h1) sabit kalıyor — sayfanın tezi odur ve arama tarafında da
 * sabit olmalı. Dönen kısım onun altındaki satır.
 *
 * Erişilebilirlik kararları:
 * - Üçü de DOM'da duruyor; görünmeyenler `aria-hidden`. Canlı bölge YOK:
 *   olsaydı ekran okuyucu her dönüşte kullanıcının sözünü keserdi.
 * - WCAG 2.2.2 otomatik güncellenen içerik için durdurma yolu istiyor.
 *   Üç kademe var: üstüne gelince/odaklanınca duraklıyor, noktaya basınca
 *   tamamen duruyor, `prefers-reduced-motion` açıkken hiç dönmüyor.
 * - Üçü aynı ızgara hücresinde yığılı; kutu en uzun slogana göre yer
 *   kaplıyor, dönerken sayfa zıplamıyor.
 */
export function Slogan2() {
  const [aktif, setAktif] = useState(0);
  const [duraklat, setDuraklat] = useState(false);
  const [durduruldu, setDurduruldu] = useState(false);

  useEffect(() => {
    if (durduruldu || duraklat) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(
      () => setAktif((i) => (i + 1) % SLOGANLAR.length),
      SURE,
    );
    return () => clearInterval(t);
  }, [durduruldu, duraklat]);

  return (
    <div
      className="v2-slogan"
      onMouseEnter={() => setDuraklat(true)}
      onMouseLeave={() => setDuraklat(false)}
      onFocusCapture={() => setDuraklat(true)}
      onBlurCapture={() => setDuraklat(false)}
    >
      <p className="v2-slogan__yigin">
        {SLOGANLAR.map((s, i) => (
          <span
            key={s}
            className={`v2-slogan__m${i === aktif ? " v2-slogan__m--acik" : ""}`}
            aria-hidden={i !== aktif}
          >
            {s}
          </span>
        ))}
      </p>

      <span className="v2-slogan__nokta" role="group" aria-label="Slogan seç">
        {SLOGANLAR.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-label={s}
            aria-current={i === aktif ? "true" : undefined}
            className={i === aktif ? "acik" : undefined}
            onClick={() => {
              setAktif(i);
              setDurduruldu(true); /* kullanıcı devraldı */
            }}
          />
        ))}
      </span>
    </div>
  );
}
