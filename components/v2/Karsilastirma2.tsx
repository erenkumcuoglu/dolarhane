/**
 * v2 karşılaştırma — ana sayfadaki "Aynı $X Türkiye'de ne yapar" tablosunun
 * bu dünyaya çevirisi. İçerik aynı (anlati.tsx · TurkiyeAyniPara); değişen
 * yalnız kabuk: beyaz kart, lacivert başlık satırı, altta altın sermaye bandı.
 *
 * Türkiye kolonu bugün bulunabilen EN İYİ koşulla kurulu; bu satır kartın
 * dibinde yazılı kalır (DESIGN.md · karşılaştırma kasten aleyhimize).
 */
import {
  CANLI,
  KANONIK,
  US_YILLIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  nakitOrani,
} from "@/lib/finance";

export function Karsilastirma2() {
  const giris = KANONIK.fiyat * nakitOrani();
  const kat = Math.floor((KANONIK.fiyat / giris) * 10) / 10;

  const satirlar: [string, string, string][] = [
    ["Bu parayla alınabilen", "Dar bir daire, çeperde", "3 yatak odalı, garajlı, bahçeli"],
    [
      "Kredi",
      `Efektif yıllık ${fmtYuzde(CANLI.tr.efektifYillik * 100)}`,
      `Yıllık ${fmtYuzde(US_YILLIK * 100, 2)} · ${KANONIK.vadeYil} yıl sabit`,
    ],
    ["Kira taksiti karşılar mı", `Hayır · ${fmtOran(CANLI.tr.oran)}`, `Evet · ${fmtOran(CANLI.us.oran)}`],
    ["Gelirin para birimi", "TL", "USD"],
  ];

  return (
    <section className="v2-sect v2-kars" id="v2-karsilastirma">
      <div className="v2-kap">
        <div className="v2-sect__bas">
          <h2 className="v2-h2">
            Aynı {fmtUsd(giris)} Türkiye&apos;de ne yapar.
          </h2>
          <p className="v2-xs v2-sect__yan">
            Aynı ev, aynı peşinat, aynı vade. Tek fark faiz.
          </p>
        </div>

        <div className="v2-kart v2-kars__kart">
          <div className="v2-kars__s v2-kars__s--bas">
            <span />
            <span className="v2-xs">İstanbul&apos;da daire</span>
            <span className="v2-xs v2-kars__biz">Amerika&apos;da müstakil ev</span>
          </div>
          {satirlar.map(([k, t, a]) => (
            <div className="v2-kars__s" key={k}>
              <span className="v2-xs v2-kars__k">{k}</span>
              <span className="v2-kars__tr">
                <em className="v2-mini">İstanbul&apos;da daire</em>
                {t}
              </span>
              <span className="v2-kars__us">
                <em className="v2-mini">Amerika&apos;da ev</em>
                {a}
              </span>
            </div>
          ))}
        </div>

        <div className="v2-sermaye">
          <div>
            <p className="v2-xs">
              Aynı büyüklükte bir varlık için Türkiye&apos;de gereken sermaye
            </p>
            <p className="v2-sermaye__v v2-num">
              en az {kat.toString().replace(".", ",")} kat
            </p>
          </div>
          <p className="v2-sm">
            Türkiye kolonu bugün bulunabilen <strong>en iyi</strong> koşulla
            kuruldu; piyasa ortalaması daha kötü. Buradaki kredi fiilen
            işlemediği için aradaki farkı her ay ev sahibi öder.
          </p>
        </div>
      </div>
    </section>
  );
}
