"use client";

import { useState } from "react";
import {
  KANONIK,
  fmtOran,
  fmtUsd,
  krediliGercek,
  nakittenFiyat,
  tr,
} from "@/lib/finance";

/**
 * HERO — v3 artboard'larından port.
 *
 * Masaüstü: sol kolon vaat + eylem, sağ kolon 4:5 fotoğraf yuvası ve
 * üstüne binen canlı nakit kartı.
 * Mobil: vaat → oran çifti (tezin iki yarısı ilk ekranda) → fotoğraf →
 * nakit kartı. Sıralama mobil artboard'dan; eylem yapışkan başlıkta.
 */
export function Hero() {
  const [nakit, setNakit] = useState(58_000);
  const fiyat = nakittenFiyat(nakit);
  const u = krediliGercek(fiyat, KANONIK.pesinatOrani, KANONIK.vadeYil);
  const t = tr(fiyat, KANONIK.pesinatOrani, KANONIK.vadeYil);

  return (
    <header className="hero" id="pano">
      <div className="kap hero__kap">
        {/* ── vaat ── */}
        <div className="hero__soz">
          <p className="rozet">
            <i aria-hidden="true" />
            Kira, taksitin {fmtOran(u.oran).replace("x", "")} katı
          </p>

          <h1 className="hero-t hero__h1">
            Amerika&apos;da bir eviniz olacak.
            <br />
            <span className="amber">Taksitini kiracınız ödeyecek.</span>
          </h1>

          <p className="lede hero__lede">
            Orta kuşakta müstakil bir ev, ilk günden kiracılı. Tapu sizin adınıza,
            yönetim bizde.
          </p>

          {/* oran çifti — mobilde ilk ekranda, masaüstünde kanıt bandında */}
          <div className="kart oranlar" aria-label="Kira taksit karşılama oranı">
            <div className="oranlar__ust">
              <div>
                <p className="oranlar__v num">{fmtOran(u.oran)}</p>
                <p className="xs">kira / taksit · ABD</p>
              </div>
              <div>
                <p className="oranlar__v oranlar__v--tr num">{fmtOran(t.oran)}</p>
                <p className="xs">Türkiye&apos;de aynı ev</p>
              </div>
            </div>
            <p className="oranlar__alt xs">
              Aynı ev, aynı peşinat, aynı vade. Tek fark faiz.
            </p>
          </div>

          <div className="hero__eylem">
            <a className="btn btn--lg" href="#gorusme">
              45 dakikalık görüşme alın
            </a>
            <a className="tlink" href="#detay">
              Hesabı görün
            </a>
          </div>
        </div>

        {/* ── fotoğraf yuvası + canlı nakit kartı ── */}
        <div className="hero__gorsel">
          <div className="yuva yuva--45">
            <span className="yuva__et">ev fotoğrafı · 4:5 · portföyden</span>
          </div>

          <div className="kart kart--yuksek nakit">
            <div className="nakit__ust">
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
            </div>
            <dl className="nakit__alt" aria-live="polite">
              <div>
                <dt className="xs">Alabileceğiniz ev</dt>
                <dd className="nakit__c num">{fmtUsd(fiyat)}</dd>
              </div>
              <div>
                <dt className="xs">Aylık taksit</dt>
                <dd className="nakit__c nakit__c--amber num">{fmtUsd(u.taksit)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </header>
  );
}
