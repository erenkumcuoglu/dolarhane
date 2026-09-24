"use client";

import { Fragment, useEffect, useState } from "react";
import { SLOGANLAR, SURE } from "@/lib/sloganlar";

/**
 * V4 manşet — onaylı slogan seti (slayt 7), kelime kelime maskeyle.
 *
 * Her slogan son cümlesinden bölünüyor: ilk kısım dik, son cümle italik
 * altın. Böylece üç slogan da aynı iki vuruşlu ritimle okunuyor ("iddia →
 * karşılık").
 *
 * Erişilebilirlik Slogan3 ile aynı üç kademede: hover/focus duraklatır,
 * klavyeyle ulaşılan düğme tamamen durdurur, reduced-motion hiç döndürmez.
 * Bütün sloganlar aynı ızgara hücresinde üst üste duruyor — yükseklik en
 * uzun sloganınki, dönüşte sayfa zıplamıyor.
 */
const SURE_V4 = Math.max(SURE, 5200);

function bol(s: string): [string, string] {
  const m = s.match(/^(.*[.!?])\s+([^.!?]+[.!?])$/);
  return m ? [m[1], m[2]] : [s, ""];
}

export function Slogan4() {
  const [aktif, setAktif] = useState(0);
  const [duraklat, setDuraklat] = useState(false);
  const [durdu, setDurdu] = useState(false);
  const [az, setAz] = useState(false);

  useEffect(() => {
    setAz(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (durdu || duraklat || az) return;
    const t = setInterval(() => setAktif((i) => (i + 1) % SLOGANLAR.length), SURE_V4);
    return () => clearInterval(t);
  }, [durdu, duraklat, az]);

  return (
    <div
      className="v4-slogan"
      onMouseEnter={() => setDuraklat(true)}
      onMouseLeave={() => setDuraklat(false)}
      onFocusCapture={() => setDuraklat(true)}
      onBlurCapture={() => setDuraklat(false)}
    >
      <h1 className="v4-slogan__yigin">
        {SLOGANLAR.map((s, i) => {
          const [a, b] = bol(s);
          let k = 0;
          const kelimeler = (t: string, italik: boolean) =>
            t.split(" ").map((w) => {
              const n = k++;
              return (
                <Fragment key={n}>
                  <span className="v4-slogan__w">
                    <span className={italik ? "v4-slogan__i v4-slogan__i--vurgu" : "v4-slogan__i"} style={{ ["--n" as string]: n }}>
                      {w}
                    </span>
                  </span>{" "}
                </Fragment>
              );
            });
          return (
            <span
              key={s}
              className={`v4-slogan__m${i === aktif ? " v4-slogan__m--acik" : ""}`}
              aria-hidden={i !== aktif}
            >
              {kelimeler(a, false)}
              {b ? <br className="v4-slogan__br" /> : null}
              {b ? kelimeler(b, true) : null}
            </span>
          );
        })}
      </h1>

      <div className="v4-slogan__alt">
        <div className="v4-slogan__noktalar" aria-hidden="true">
          {SLOGANLAR.map((s, i) => (
            <span key={s} className={i === aktif ? "on" : ""} style={{ ["--sure" as string]: `${SURE_V4}ms` }} />
          ))}
        </div>
        {!durdu && !az ? (
          <button type="button" className="v4-slogan__dur" onClick={() => setDurdu(true)}>
            Slogan dönüşünü durdur
          </button>
        ) : null}
      </div>
    </div>
  );
}
