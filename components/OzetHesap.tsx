"use client";

import { useState } from "react";
import {
  BAND,
  KANONIK,
  US_YILLIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  us,
} from "@/lib/finance";

/**
 * Ana sayfadaki hesap artık bu: tek kaydırıcı, üç sayı, tek düğme.
 * Peşinat ve vade sabit — üç kaydırıcılı cetvel, 10 satırlık tablo ve
 * Türkiye kolonu /hesap sayfasında.
 */
export function OzetHesap() {
  const [fiyat, setFiyat] = useState<number>(KANONIK.fiyat);
  const u = us(fiyat);

  return (
    <section className="sect ozet" id="cetvel">
      <div className="kap">
        <div className="kart ozet__kart">
          <div className="ozet__sol">
            <h2 className="h2 ozet__h">Kaba hesap, otuz saniyede.</h2>
            <div className="kol">
              <label className="xs" htmlFor="o-fiyat">
                Ev fiyatı
              </label>
              <output className="kol__v num" htmlFor="o-fiyat">
                {fmtUsd(fiyat)}
              </output>
              <input
                id="o-fiyat"
                type="range"
                min={BAND.min}
                max={BAND.max}
                step={10_000}
                value={fiyat}
                aria-valuetext={fmtUsd(fiyat)}
                onChange={(e) => setFiyat(Number(e.target.value))}
              />
            </div>
            <p className="xs ozet__sabit">
              Peşinat {fmtYuzde(KANONIK.pesinatOrani * 100)}, vade{" "}
              {KANONIK.vadeYil} yıl, yıllık {fmtYuzde(US_YILLIK * 100, 2)}{" "}
              sabit.
            </p>
          </div>

          <div className="ozet__sag">
            <div className="ozet__ler" aria-live="polite">
              <div className="kart kart--tint ozet__h3">
                <p className="xs">Aylık taksit</p>
                <p className="ozet__v num">{fmtUsd(u.taksit)}</p>
              </div>
              <div className="kart kart--tint ozet__h3">
                <p className="xs">Beklenen kira</p>
                <p className="ozet__v num">{fmtUsd(u.kira)}</p>
              </div>
              <div className="kart kart--wash ozet__h3 ozet__h3--oran">
                <p className="xs amber-t">Kira / taksit</p>
                <p className="ozet__v ozet__v--amber num">{fmtOran(u.oran)}</p>
              </div>
            </div>
            <a className="btn btn--lg" href="/hesap/">
              Hesabın tamamını açın →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
