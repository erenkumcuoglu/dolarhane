import {
  DEGERLEME_KAYNAGI,
  ORNEK,
  REFERANSLAR,
} from "@/lib/referanslar";
import { fmtUsd } from "@/lib/finance";

/** Küçük sayılar yazıyla: "3 ev sattık" değil "üç ev sattık". */
const YAZI: Record<number, string> = {
  1: "bir",
  2: "iki",
  3: "üç",
  4: "dört",
  5: "beş",
};

/**
 * Üç ev, üçünün de tam tablosu.
 *
 * Sayının azlığı gizlenmiyor, sahipleniliyor: "yüzlerce mutlu müşteri"
 * imasına girmiyoruz. "Güncel değerleme" satırı yalnız kaynağı yazılıysa
 * gösterilir — kaynaksız bir değerleme rakamı, sitenin bütün iddia
 * disiplinini bozar.
 */
export function Referanslar() {
  const degerlemeGoster = DEGERLEME_KAYNAGI !== "";

  return (
    <section className="sect ref" id="referanslar">
      <div className="kap">
        <div className="ref__bas">
          <h2 className="h2 ref__h">
            Şu ana kadar {YAZI[REFERANSLAR.length] ?? REFERANSLAR.length} ev
            sattık.
            <br />
            <span className="amber">
              {YAZI[REFERANSLAR.length]
                ? `${YAZI[REFERANSLAR.length].charAt(0).toLocaleUpperCase("tr")}${YAZI[REFERANSLAR.length].slice(1)}ünün`
                : "Hepsinin"}{" "}
              de tam tablosu burada.
            </span>
          </h2>
          <div className="ref__damgalar">
            {ORNEK ? (
              <p className="damga">
                [ÖRNEK VERİ — gerçek tablo ve fotoğraflar gelecek]
              </p>
            ) : null}
            {/* Kaynaksız değerleme bir iddiadır: kaynak girilene kadar o
                satır kartlardan tamamen düşüyor, uyarı bölüm başında bir
                kez duruyor — kart başına tekrar etmiyor. */}
            {!degerlemeGoster ? (
              <p className="damga">
                [DEĞERLEME KAYNAĞI GİRİLMEDİ — değerleme satırı gizli]
              </p>
            ) : null}
          </div>
        </div>

        <ul className="ref__ler">
          {REFERANSLAR.map((r) => (
            <li className="kart ref__kart" key={r.alimTarihi}>
              <div className="yuva yuva--1610 ref__foto">
                <span className="yuva__et">gerçek ev fotoğrafı · 16:10</span>
              </div>
              <div className="ref__gov">
                {degerlemeGoster ? (
                  <p className="xs ref__kaynak">
                    değerleme: {DEGERLEME_KAYNAGI}
                  </p>
                ) : null}

                <dl className="ref__rakam">
                  <div>
                    <dt className="xs">Alım tarihi</dt>
                    <dd className="num ref__tarih">{r.alimTarihi}</dd>
                  </div>
                  <div>
                    <dt className="xs">Alış fiyatı</dt>
                    <dd className="num">{fmtUsd(r.alisFiyati)}</dd>
                  </div>
                  {degerlemeGoster ? (
                    <div>
                      <dt className="xs ref__amberE">Güncel değerleme</dt>
                      <dd className="num ref__amberV">
                        {fmtUsd(r.guncelDegerleme)}
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="xs ref__amberE">Güncel aylık kira</dt>
                    <dd className="num ref__amberV">{fmtUsd(r.guncelKira)}</dd>
                  </div>
                </dl>

                <dl className="ref__kunye">
                  <div>
                    <dt>Kiracı durumu</dt>
                    <dd>{r.kiraciDurumu}</dd>
                  </div>
                  <div>
                    <dt>Alıcı</dt>
                    <dd>{r.alici}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <p className="sm ref__dip">
          Bunların dışında kendi portföyümüzde tuttuğumuz evler de var;
          hepsinin tablosunu görüşmede açıyoruz.
        </p>
      </div>
    </section>
  );
}
