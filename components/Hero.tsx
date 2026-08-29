"use client";

import { useState } from "react";
import {
  CANLI,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  KANONIK,
  krediliGercek,
  nakittenFiyat,
  us,
} from "@/lib/finance";

/**
 * v4 hero.
 *
 * Masaüstü: iki kolon, kaydırıcı kartı fotoğrafa biner.
 * Telefon: manşetin altında iki hücreli kanıt kutusu, tam genişlik 4:5
 * fotoğraf, üstüne binen kart, altında iki hücreli ikinci şerit. Kanıt
 * bandının dört hücresi telefonda ikiye bölünüyor; bu yüzden Band bileşeni
 * telefonda gizli ve eksik iki hücre burada.
 *
 * Rozetteki oran sabit değil: kaydırıcı hareket ettikçe hesaplanıyor.
 */
export function Hero() {
  const [nakit, setNakit] = useState(58_000);
  const fiyat = nakittenFiyat(nakit);
  const g = krediliGercek(fiyat);
  const u = us(fiyat);

  return (
    <header className="hero" id="pano">
      <div className="kap hero__in">
        <div className="hero__soz">
          <p className="rozet">
            <i aria-hidden="true" />
            Kira, taksitin {fmtOran(u.oran)} katı
          </p>
          <h1 className="hero-t">
            Amerika&apos;da bir eviniz olacak.
            <br />
            <span className="amber">Taksitini kiracınız ödeyecek.</span>
          </h1>
          <p className="lede hero__lede">
            Orta kuşakta müstakil bir ev, ilk günden kiracılı. Tapu sizin
            adınıza, yönetim bizde.
          </p>

          {/* telefonda kanıt bandının ilk iki hücresi */}
          <div className="hero__kanit">
            <div>
              <p className="num hero__kanitV">{fmtOran(CANLI.us.oran)}</p>
              <p className="xs">kira / taksit · ABD</p>
            </div>
            <div>
              <p className="num hero__kanitV hero__kanitV--tr">
                {fmtOran(CANLI.tr.oran)}
              </p>
              <p className="xs">Türkiye&apos;de aynı ev</p>
            </div>
            <p className="xs hero__kanitAlt">
              Aynı ev, aynı peşinat, aynı vade. Tek fark faiz.
            </p>
          </div>

          <div className="hero__eylem">
            <a className="btn btn--lg" href="#gorusme">
              45 dakikalık görüşme alın
            </a>
            <a className="btn btn--sessiz" href="/hesap/">
              Hesabın tamamı →
            </a>
          </div>
        </div>

        <div className="hero__gorsel">
          <div className="yuva yuva--45">
            <span className="yuva__et">ev fotoğrafı · 4:5 · portföyden</span>
          </div>
          <div className="kart nakit">
            <label className="xs" htmlFor="hero-nakit">
              Elinizdeki nakit
            </label>
            <output className="nakit__v num" htmlFor="hero-nakit">
              {fmtUsd(nakit)}
            </output>
            <input
              id="hero-nakit"
              type="range"
              min={44_000}
              max={87_000}
              step={1_000}
              value={nakit}
              aria-valuetext={fmtUsd(nakit)}
              onChange={(e) => setNakit(Number(e.target.value))}
            />
            <div className="nakit__alt">
              <div>
                <p className="xs">Alabileceğiniz ev</p>
                <p className="num nakit__s">{fmtUsd(fiyat)}</p>
              </div>
              <div className="nakit__sag">
                <p className="xs">Aylık taksit</p>
                <p className="num nakit__s nakit__s--amber">
                  {fmtUsd(g.taksit)}
                </p>
              </div>
            </div>
            {/* telefonda hero içi ikincil eylem karta iniyor */}
            <a className="btn btn--cizgi nakit__link" href="/hesap/">
              Hesabın tamamı →
            </a>
          </div>
        </div>
      </div>

      {/* telefonda kanıt bandının son iki hücresi */}
      <div className="hero__kanit2">
        <div>
          <p className="num hero__kanitV hero__kanitV--amber">
            {fmtYuzde(CANLI.net.netGetiri * 100, 2)}
          </p>
          <p className="xs">net getiri · brüt değil</p>
        </div>
        <div>
          <p className="num hero__kanitV">{KANONIK.vadeYil} yıl</p>
          <p className="xs">sonunda borçsuz ev</p>
        </div>
      </div>
    </header>
  );
}
