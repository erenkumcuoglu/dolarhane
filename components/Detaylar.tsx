"use client";

import { useState } from "react";
import { Nakit, OtuzYil, Riskler, Karsilastirma } from "./detay/panolar";
import { Evler, NasilCalisir } from "./detay/panolar2";

/**
 * DETAYLAR — altı bölüm.
 *
 * Masaüstü: numaralı ilerleme rayı, başlığa tıklayarak geçilir; tek panel
 * görünür. Mobil: akordeon — artboard'ın kararı ("başlığa dokununca açılır").
 *
 * İçerik tek yerde tanımlı; iki kabuk aynı panelleri render ediyor, yani
 * masaüstü ve mobil arasında içerik ikizlenmiyor.
 */
const BOLUMLER = [
  { no: "01", ad: "Nakit ve getiri", P: Nakit },
  { no: "02", ad: "30 yıl", P: OtuzYil },
  { no: "03", ad: "Evler", P: Evler },
  { no: "04", ad: "Nasıl çalışır", P: NasilCalisir },
  { no: "05", ad: "Riskler ve sorular", P: Riskler },
  { no: "06", ad: "Karşılaştırma", P: Karsilastirma },
];

export function Detaylar() {
  const [aktif, setAktif] = useState(0);

  return (
    <section className="sect detay" id="detay">
      <div className="kap">
        <div className="detay__bas">
          <h2 className="h2">Detaylar</h2>
          <p className="xs detay__ipucu">
            Altı bölüm · başlığa dokununca açılır
          </p>
        </div>

        {/* masaüstü: ilerleme rayı + tek panel */}
        <div className="detay__masa">
          <div className="ray" role="tablist" aria-label="Detay bölümleri">
            {BOLUMLER.map((b, i) => (
              <button
                key={b.no}
                role="tab"
                type="button"
                id={`sekme-${b.no}`}
                aria-selected={aktif === i}
                aria-controls={`panel-${b.no}`}
                className={`ray__h${aktif === i ? " ray__h--aktif" : ""}`}
                onClick={() => setAktif(i)}
              >
                <span className="ray__no num">{b.no}</span>
                <span className="ray__ad">{b.ad}</span>
              </button>
            ))}
          </div>
          {BOLUMLER.map((b, i) =>
            aktif === i ? (
              <div
                key={b.no}
                role="tabpanel"
                id={`panel-${b.no}`}
                aria-labelledby={`sekme-${b.no}`}
                className="detay__panel"
              >
                <b.P />
              </div>
            ) : null,
          )}
        </div>

        {/* mobil: akordeon */}
        <div className="detay__mob">
          {BOLUMLER.map((b, i) => (
            <details className="kat" key={b.no} open={i === 0}>
              <summary>
                <span className="kat__no num">{b.no}</span>
                <span className="kat__ad">{b.ad}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="kat__ic">
                <b.P />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
