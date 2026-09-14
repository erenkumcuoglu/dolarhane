"use client";

import { useEffect, useState } from "react";
import { SLOGANLAR, SURE } from "@/lib/sloganlar";

/**
 * MANŞET — dönen slogan seti.
 *
 * İş planı §10–11'e göre ana ürün peşin ev sahipliği; kredi yalnızca
 * bizden ev almış müşterilere açılıyor. Eski manşet ("Taksitini kiracınız
 * ödeyecek.") bu yüzden kamuya açık sayfadan kalktı, yerine slayt 7'deki
 * slogan seti geçti.
 *
 * h1'in içinde üç varyant yığılı; görünmeyenler aria-hidden, yani
 * erişilebilir ad her an tek cümle. Üçü de kaynakta olduğu için tarayıcı
 * ve arama tarafı hepsini görüyor. Aynı ızgara hücresinde durdukları için
 * kutu en uzun slogana göre yer kaplıyor — dönerken sayfa zıplamıyor.
 *
 * Görünür kumanda YOK (tasarım kararı). WCAG 2.2.2 otomatik güncellenen
 * içerik için yine de bir durdurma yolu istiyor; üç kademe var:
 *  - üstüne gelince / içine odaklanınca duraklıyor,
 *  - klavyeyle ulaşılan gizli bir düğme tamamen durduruyor (yalnız
 *    odaklanınca görünür — sayfadaki "İçeriğe geç" bağlantısıyla aynı
 *    idiom),
 *  - prefers-reduced-motion açıkken hiç dönmüyor.
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

      {!durduruldu && !azHareket ? (
        <button
          type="button"
          className="v2-slogan__dur"
          onClick={() => setDurduruldu(true)}
        >
          Slogan dönüşünü durdur
        </button>
      ) : null}
    </div>
  );
}
