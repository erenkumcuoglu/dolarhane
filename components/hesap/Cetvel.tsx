"use client";

import { useState } from "react";
import {
  BAND,
  KANONIK,
  TR_AYLIK,
  TR_VADE_TAVAN_YIL,
  US_YILLIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  tr,
  us,
} from "@/lib/finance";

/**
 * Cetvelin tamamı — üç kaydırıcı, üç sonuç, koyu özet bandı ve on satırlık
 * tablo. v3'te tablo katlanıyordu; /hesap sayfasının işi denetlenmek olduğu
 * için burada açık duruyor.
 *
 * Türkiye kolonu 10 yıl üstünde kurgusal vade üretmez: kendi fiili
 * azamisinden hesaplanır ve bu satırda yazılı olarak söylenir.
 */
export function Cetvel() {
  const [fiyat, setFiyat] = useState<number>(KANONIK.fiyat);
  const [pesinat, setPesinat] = useState(25);
  const [vade, setVade] = useState<number>(KANONIK.vadeYil);

  const u = us(fiyat, pesinat / 100, vade);
  const t = tr(fiyat, pesinat / 100, vade);
  const altinda = u.oran < 1;
  const fazlaFaiz = t.toplamFaiz - u.toplamFaiz;

  const satirlar: [string, string, string, string?][] = [
    ["Ev fiyatı", fmtUsd(fiyat), fmtUsd(fiyat), "aynı"],
    ["Peşinat", fmtUsd(u.pesinat), fmtUsd(t.pesinat), "aynı"],
    ["Kredi tutarı", fmtUsd(u.kredi), fmtUsd(t.kredi), "aynı"],
    [
      "Vade",
      `${vade} yıl`,
      t.tavanlandi ? `${TR_VADE_TAVAN_YIL} yıl · azami` : `${vade} yıl`,
      t.tavanlandi ? "farklı" : "aynı",
    ],
    [
      "Faiz oranı",
      `yıllık ${fmtYuzde(US_YILLIK * 100, 2)}`,
      `aylık ${fmtYuzde(TR_AYLIK * 100, 2)} · efektif ${fmtYuzde(t.efektifYillik * 100)}`,
      "tek fark",
    ],
    ["Aylık taksit", fmtUsd(u.taksit), fmtUsd(t.taksit), "sonuç"],
    ["Toplam faiz", fmtUsd(u.toplamFaiz), fmtUsd(t.toplamFaiz)],
    ["Toplam geri ödeme", fmtUsd(u.toplamGeriOdeme), fmtUsd(t.toplamGeriOdeme)],
    [
      "Peşinat dahil toplam maliyet",
      fmtUsd(u.toplamMaliyet),
      fmtUsd(t.toplamMaliyet),
    ],
    ["Kira, taksitin kaç katı", fmtOran(u.oran), fmtOran(t.oran), "sonuç"],
  ];

  return (
    <section className="hpano" id="h-cetvel">
      <h2 className="h2 cetvel__h">
        Aynı ev, aynı peşinat, aynı vade. Tek fark faiz.
      </h2>

      <div className="kart cetvel__kart">
        <div className="kollar">
          <div className="kol">
            <label className="xs" htmlFor="c-fiyat">
              Ev fiyatı
            </label>
            <output className="kol__v num" htmlFor="c-fiyat">
              {fmtUsd(fiyat)}
            </output>
            <input
              id="c-fiyat"
              type="range"
              min={BAND.min}
              max={BAND.max}
              step={10_000}
              value={fiyat}
              aria-valuetext={fmtUsd(fiyat)}
              onChange={(e) => setFiyat(Number(e.target.value))}
            />
          </div>
          <div className="kol">
            <label className="xs" htmlFor="c-pesinat">
              Peşinat oranı
            </label>
            <output className="kol__v num" htmlFor="c-pesinat">
              %{pesinat}
            </output>
            <input
              id="c-pesinat"
              type="range"
              min={25}
              max={45}
              step={5}
              value={pesinat}
              aria-valuetext={`yüzde ${pesinat}`}
              onChange={(e) => setPesinat(Number(e.target.value))}
            />
          </div>
          <div className="kol">
            <label className="xs" htmlFor="c-vade">
              Vade
            </label>
            <output className="kol__v num" htmlFor="c-vade">
              {vade} yıl
            </output>
            <input
              id="c-vade"
              type="range"
              min={10}
              max={30}
              step={5}
              value={vade}
              aria-valuetext={`${vade} yıl`}
              onChange={(e) => setVade(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="sonuclar" aria-live="polite">
          <div className="sonuc">
            <p className="xs">Aylık taksit · ABD</p>
            <p className="sonuc__v num">{fmtUsd(u.taksit)}</p>
            <p className="xs">
              yıllık {fmtYuzde(US_YILLIK * 100, 2)} · {vade} yıl
            </p>
          </div>
          <div className="sonuc">
            <p className="xs">Aylık taksit · Türkiye</p>
            <p className="sonuc__v sonuc__v--tr num">{fmtUsd(t.taksit)}</p>
            <p className="xs">
              aylık {fmtYuzde(TR_AYLIK * 100, 2)} · {t.gerceklesenVadeYil} yıl
            </p>
          </div>
          <div className={`sonuc sonuc--amber${altinda ? " sonuc--uyari" : ""}`}>
            <p className="xs amber-t">Kira, taksitin kaç katı</p>
            <p className="sonuc__v num">{fmtOran(u.oran)}</p>
            <p className="xs sonuc__alt">Türkiye aynı evde {fmtOran(t.oran)}</p>
          </div>
        </div>

        {altinda && (
          <p className="uyari" role="status">
            Bu vadede kira taksiti karşılamıyor — farkı siz ödersiniz.
          </p>
        )}

        <div className="ozetband">
          <span className="ozetband__k">
            Türkiye&apos;de aynı kredi için fazladan ödenen faiz
            {t.tavanlandi
              ? ` (Türkiye ${t.gerceklesenVadeYil} yıl, azami)`
              : ""}
          </span>
          <span className="ozetband__v num">{fmtUsd(fazlaFaiz)}</span>
        </div>

        <div className="tabloKap">
          <div className="tablo">
            <div className="tablo__satir tablo__satir--bas">
              <span>Kalem</span>
              <span>ABD · Dolarhane</span>
              <span>Türkiye</span>
            </div>
            {satirlar.map(([k, uv, tv, chip]) => (
              <div className="tablo__satir" key={k}>
                <span className="tablo__k">
                  {k}
                  {chip ? (
                    <em
                      className={`chip${chip === "tek fark" ? " chip--pivot" : ""}`}
                    >
                      {chip}
                    </em>
                  ) : null}
                </span>
                <span className="num">{uv}</span>
                <span className="num tablo__tr">{tv}</span>
              </div>
            ))}
          </div>
          <p className="xs cetvel__not">
            Türkiye aylık {fmtYuzde(TR_AYLIK * 100, 2)} — bugün bulunabilen{" "}
            <strong>en düşük oranlardan biri</strong>; piyasa ortalaması %3,7.
            Karşılaştırmayı kasten kendi aleyhimize kuruyoruz.
            Türkiye&apos;de vadeler fiilen {TR_VADE_TAVAN_YIL} yılla sınırlı:{" "}
            {TR_VADE_TAVAN_YIL} yıl üstünde kolon kurgusal vade uydurmaz, kendi
            fiili azamisinden hesaplanır.
          </p>
        </div>
      </div>
    </section>
  );
}
