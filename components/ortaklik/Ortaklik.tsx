"use client";

import { useState } from "react";
import { HATLAR, ORTAKLIK, type Hat } from "@/lib/ortaklik";

/**
 * İki hatlı ortaklık anlatımı.
 *
 * Hat seçimi sayfanın ortak kısmını (şeffaflık, SSS, form) değiştirmiyor;
 * yalnız adımlar ve kazanç satırı değişiyor. Brief §6'nın kararı: ortak
 * olan şey tek kez yazılır.
 *
 * Kazanç bölümü sayfanın TEK sayısal yeri ve rakamlar lib/ortaklik.ts'te
 * boş; boş kaldıkça kırmızı [alan] basılıyor, uydurulmuyor.
 */
export function Ortaklik() {
  const [hat, setHat] = useState<Hat>("portfoy");
  const secili = HATLAR.find((h) => h.anahtar === hat)!;

  const kazanc: [string, string][] = [
    [
      hat === "portfoy" ? "Portföy bedeli" : "Tanıştırma bedeli",
      hat === "portfoy" ? ORTAKLIK.portfoyBedeli : ORTAKLIK.tanistirmaBedeli,
    ],
    ["Ne zaman ödeniyor", ORTAKLIK.odemeZamani],
    ["Nasıl ödeniyor", ORTAKLIK.odemeSekli],
    ...(ORTAKLIK.altSinir
      ? ([["Koşul", ORTAKLIK.altSinir]] as [string, string][])
      : []),
  ];

  return (
    <>
      <section className="v2-sect" id="ort-hat">
        <div className="v2-kap">
          <div className="v2-sect__bas">
            <h2 className="v2-h2">Hangisi sizsiniz?</h2>
            <p className="v2-xs v2-sect__yan">
              Seçiminize göre aşağıdaki adımlar değişiyor.
            </p>
          </div>

          <div className="ort-hat" role="tablist" aria-label="Ortaklık hattı">
            {HATLAR.map((h) => (
              <button
                key={h.anahtar}
                type="button"
                role="tab"
                aria-selected={hat === h.anahtar}
                className={`v2-kart ort-hat__h${hat === h.anahtar ? " ort-hat__h--acik" : ""}`}
                onClick={() => setHat(h.anahtar)}
              >
                <span className="ort-hat__ad">{h.ad}</span>
                <span className="v2-sm">{h.kim}</span>
                <span className="v2-xs ort-hat__ne">
                  Getirdiğiniz: {h.getirdigi}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-sect" id="ort-nasil">
        <div className="v2-kap">
          <div className="v2-sect__bas">
            <h2 className="v2-h2">Nasıl işliyor.</h2>
            <p className="v2-xs v2-sect__yan">{secili.ad} · dört adım</p>
          </div>

          <ol className="ort-adim">
            {secili.adimlar.map((a, i) => (
              <li className="v2-kart ort-adim__h" key={a.b}>
                <p className="ort-adim__n v2-num">{String(i + 1).padStart(2, "0")}</p>
                <p className="v2-h3">{a.b}</p>
                <p className="v2-sm">{a.a}</p>
                {/* Ortağın satış vaadi işin AZLIĞI — her adımda yazılı. */}
                <p className="v2-xs ort-adim__siz">{a.siz}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="v2-sect" id="ort-kazanc">
        <div className="v2-kap">
          <div className="v2-sect__bas">
            <h2 className="v2-h2">Ne kazanırsınız.</h2>
            <p className="v2-xs v2-sect__yan">
              Sayfanın tek sayısal bölümü — ve rakamlar henüz karara
              bağlanmadı.
            </p>
          </div>

          <dl className="v2-kart ort-kazanc">
            {kazanc.map(([k, v]) => (
              <div key={k}>
                <dt className="v2-xs">{k}</dt>
                <dd>
                  {v ? (
                    v
                  ) : (
                    <span className="v2-todo">
                      [{k.toLocaleUpperCase("tr")}]
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="v2-sm ort-kazanc__not">
            Ödenen tutar bir <strong>emlak komisyonu değil</strong>;
            Dolarhane&apos;nin kendi hizmet bedelinden karşılanan bir
            tanıştırma bedelidir. ABD&apos;de brokerlık komisyonu yalnız
            lisanslı taraflar arasında paylaşılabilir — bu sayfa öyle bir
            paylaşım vaat etmiyor.
          </p>
        </div>
      </section>
    </>
  );
}
