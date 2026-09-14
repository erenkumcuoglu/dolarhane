"use client";

import { useEffect, useState } from "react";
import { SLOGANLAR, SURE } from "@/lib/sloganlar";

/**
 * MANŞET — dönen slogan seti.
 *
 * İş planı slayt 10–11'e göre ana ürün PEŞİN ev sahipliği; kredi yalnızca
 * bizden ev almış müşterilere açılıyor. Bu yüzden eski manşet
 * ("Taksitini kiracınız ödeyecek.") kamuya açık sayfadan kalktı ve yerine
 * slayt 7'deki slogan seti geçti.
 *
 * h1'in içinde üç varyant yığılı duruyor; görünmeyenler aria-hidden, yani
 * erişilebilir ad her an tek bir cümle. Üçü de kaynakta olduğu için
 * tarayıcı ve arama tarafı hepsini görüyor.
 *
 * Altın bar hem ilerleme göstergesi hem kumanda: dolan segment o slogana
 * kalan süreyi gösteriyor, tıklanınca o slogana geçip dönüşü durduruyor.
 *
 * WCAG 2.2.2 (otomatik güncellenen içerik) üç kademeyle karşılanıyor:
 * üstüne gelince/odaklanınca duraklıyor, bara basınca tamamen duruyor,
 * prefers-reduced-motion açıkken hiç dönmüyor.
 */
export function Slogan2() {
  const [aktif, setAktif] = useState(0);
  const [duraklat, setDuraklat] = useState(false);
  const [durduruldu, setDurduruldu] = useState(false);
  const [azHareket, setAzHareket] = useState(false);

  useEffect(() => {
    setAzHareket(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (durduruldu || duraklat || azHareket) return;
    const t = setInterval(
      () => setAktif((i) => (i + 1) % SLOGANLAR.length),
      SURE,
    );
    return () => clearInterval(t);
  }, [durduruldu, duraklat, azHareket]);

  const doluyor = !durduruldu && !azHareket;

  return (
    <div
      className="v2-slogan"
      onMouseEnter={() => setDuraklat(true)}
      onMouseLeave={() => setDuraklat(false)}
      onFocusCapture={() => setDuraklat(true)}
      onBlurCapture={() => setDuraklat(false)}
    >
      <h1 className="v2-slogan__yigin">
        {SLOGANLAR.map((s, i) => (
          <span
            key={s}
            className={`v2-slogan__m${i === aktif ? " v2-slogan__m--acik" : ""}`}
            aria-hidden={i !== aktif}
          >
            {s}
          </span>
        ))}
      </h1>

      <div className="v2-slogan__bar" role="group" aria-label="Slogan seç">
        {SLOGANLAR.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-label={s}
            aria-current={i === aktif ? "true" : undefined}
            onClick={() => {
              setAktif(i);
              setDurduruldu(true); /* kullanıcı devraldı */
            }}
          >
            <span className="v2-slogan__ray" aria-hidden="true">
              <span
                /* key: her geçişte dolma animasyonu baştan başlasın */
                key={`${aktif}-${duraklat}`}
                className={
                  i < aktif || (i === aktif && !doluyor)
                    ? "v2-slogan__dolu v2-slogan__dolu--tam"
                    : i === aktif
                      ? "v2-slogan__dolu v2-slogan__dolu--doluyor"
                      : "v2-slogan__dolu"
                }
                style={
                  i === aktif && doluyor
                    ? {
                        animationDuration: `${SURE}ms`,
                        animationPlayState: duraklat ? "paused" : "running",
                      }
                    : undefined
                }
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
