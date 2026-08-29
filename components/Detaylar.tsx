"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Evler } from "./detay/evler";
import { NasilCalisir } from "./detay/nasil";
import { Riskler } from "./detay/riskler";

/**
 * DETAYLAR — üç bölüm. (Nakit / 30 yıl / Karşılaştırma /hesap'a taşındı.)
 *
 * Masaüstü: bölüm 300vh yüksekliğinde bir ray; içerik yapışkan kalıyor ve
 * kaydırma ilerledikçe paneller yana kayarak değişiyor. Başlığa tıklamak
 * ilgili noktaya kaydırıyor — yani klavyeyle de erişilebilir.
 * Telefon: akordeon, tek panel açık.
 *
 * İçerik tek kaynaktan: iki kabuk aynı üç bileşeni render ediyor.
 */
const BOLUMLER = [
  { no: "01", ad: "Evler", P: Evler },
  { no: "02", ad: "Nasıl çalışır", P: NasilCalisir },
  { no: "03", ad: "Riskler ve sorular", P: Riskler },
];

const SON = BOLUMLER.length - 1;
const NAV = 76;

export function Detaylar() {
  const [p, setP] = useState(0);
  const [acik, setAcik] = useState(0);
  const kutu = useRef<HTMLDivElement>(null);
  const kare = useRef(0);

  const yol = useCallback(() => {
    const el = kutu.current;
    if (!el) return null;
    const pencere = Math.max(window.innerHeight - NAV, 520);
    const y = el.offsetHeight - pencere;
    return { el, y: y > 0 ? y : 1 };
  }, []);

  useEffect(() => {
    const olc = () => {
      cancelAnimationFrame(kare.current);
      kare.current = requestAnimationFrame(() => {
        const m = yol();
        if (!m) return;
        const ust = m.el.getBoundingClientRect().top - NAV;
        const t = Math.max(0, Math.min(1, -ust / m.y));
        setP(t * SON);
      });
    };
    window.addEventListener("scroll", olc, { passive: true });
    window.addEventListener("resize", olc);
    olc();
    return () => {
      window.removeEventListener("scroll", olc);
      window.removeEventListener("resize", olc);
      cancelAnimationFrame(kare.current);
    };
  }, [yol]);

  const git = (i: number) => {
    const m = yol();
    if (!m) return;
    const ust = window.scrollY + m.el.getBoundingClientRect().top - NAV;
    window.scrollTo({ top: ust + (i / SON) * m.y, behavior: "smooth" });
  };

  const aktif = Math.round(p);

  return (
    <section className="sect--0 detay" id="detay">
      {/* masaüstü: yapışkan ray */}
      <div className="detay__ray" ref={kutu}>
        <div className="detay__yapis">
          <div className="kap detay__bas">
            <div className="sect__bas">
              <h2 className="h2">Detaylar</h2>
              <p className="xs sect__yan">
                Kaydırdıkça ilerler · başlığa tıklayarak da atlayabilirsiniz
              </p>
            </div>
            <div className="sekme" role="tablist" aria-label="Detay bölümleri">
              <span
                className="sekme__iz"
                aria-hidden="true"
                style={{
                  width: `${100 / BOLUMLER.length}%`,
                  left: `${(p / BOLUMLER.length) * 100}%`,
                }}
              />
              {BOLUMLER.map((b, i) => (
                <button
                  key={b.no}
                  type="button"
                  role="tab"
                  id={`sekme-${b.no}`}
                  aria-selected={aktif === i}
                  aria-controls={`panel-${b.no}`}
                  className={`sekme__h${aktif === i ? " sekme__h--aktif" : ""}`}
                  onClick={() => git(i)}
                >
                  <span className="sekme__no num">{b.no}</span>
                  <span className="sekme__ad">{b.ad}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="detay__sahne">
            {BOLUMLER.map((b, i) => {
              const d = i - aktif;
              const bu = d === 0;
              return (
                <div
                  key={b.no}
                  role="tabpanel"
                  id={`panel-${b.no}`}
                  aria-labelledby={`sekme-${b.no}`}
                  className="detay__panel"
                  aria-hidden={!bu}
                  style={{
                    transform: `translateX(${bu ? 0 : d > 0 ? 64 : -64}px)`,
                    opacity: bu ? 1 : 0,
                    pointerEvents: bu ? "auto" : "none",
                    transitionDelay: bu ? "180ms" : "0ms",
                  }}
                >
                  <div className="kap">
                    <b.P />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* telefon: akordeon */}
      <div className="kap detay__mob">
        <div className="sect__bas">
          <h2 className="h2">Detaylar</h2>
          <p className="xs sect__yan">
            {BOLUMLER.length} bölüm · başlığa dokununca açılır
          </p>
        </div>
        <div className="katlar">
          {BOLUMLER.map((b, i) => (
            <div className="kat" key={b.no}>
              <button
                type="button"
                className={`kat__bas${acik === i ? " kat__bas--acik" : ""}`}
                aria-expanded={acik === i}
                aria-controls={`kat-${b.no}`}
                onClick={() => setAcik(acik === i ? -1 : i)}
              >
                <span className="kat__no num">{b.no}</span>
                <span className="kat__ad">{b.ad}</span>
                <i aria-hidden="true" />
              </button>
              {acik === i ? (
                <div className="kat__ic" id={`kat-${b.no}`}>
                  <b.P />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
