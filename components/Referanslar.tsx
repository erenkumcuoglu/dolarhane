import { DEGERLEME_KAYNAGI, ORNEK, REFERANSLAR } from "@/lib/referanslar";
import { fmtUsd } from "@/lib/finance";

/**
 * Referans tablosu — masaüstünde tablo, telefonda kart.
 *
 * Kaç ev olduğu yazılmıyor: sayı bugün küçük, tablo büyüyecek. İddia
 * "şu kadar sattık" değil, "işte rakamlar".
 *
 * "Güncel değerleme" kolonu yalnız kaynağı yazılıysa görünür —
 * kaynaksız bir değerleme rakamı sitedeki bütün iddia disiplinini bozar.
 */
export function Referanslar() {
  const degerlemeGoster = DEGERLEME_KAYNAGI !== "";

  return (
    <section className="sect ref" id="referanslar">
      <div className="kap">
        <div className="sect__bas">
          <h2 className="h2 ref__h">
            Bazı evlerimizin <span className="amber">getirileri.</span>
          </h2>
          <p className="xs sect__yan">
            Portföyümüzden örnekler: alım fiyatı, bugünkü kira ve kiracı
            durumu. Tablo yeni alımlarla büyüyor.
          </p>
        </div>

        <div className="ref__damgalar">
          {ORNEK ? (
            <p className="damga">
              [ÖRNEK VERİ — gerçek tablo ve fotoğraflar gelecek]
            </p>
          ) : null}
          {!degerlemeGoster ? (
            <p className="damga">
              [DEĞERLEME KAYNAĞI GİRİLMEDİ — değerleme kolonu gizli]
            </p>
          ) : null}
        </div>

        <div className={`reft${degerlemeGoster ? "" : " reft--dar"}`}>
          <div className="reft__satir reft__satir--bas" aria-hidden="true">
            <span />
            <span className="xs">Alım tarihi</span>
            <span className="xs">Alış fiyatı</span>
            {degerlemeGoster ? (
              <span className="xs reft__amber">Güncel değerleme</span>
            ) : null}
            <span className="xs reft__amber">Güncel aylık kira</span>
            <span className="xs">Kiracı ve alıcı</span>
          </div>

          {REFERANSLAR.map((r) => (
            <div className="reft__satir" key={r.alimTarihi}>
              <div className="yuva yuva--1610 reft__foto">
                <span className="yuva__et">gerçek ev fotoğrafı</span>
              </div>

              <div className="reft__h">
                <span className="mini reft__mob">Alım tarihi</span>
                <span className="reft__tarih">{r.alimTarihi}</span>
              </div>
              <div className="reft__h">
                <span className="mini reft__mob">Alış fiyatı</span>
                <span className="reft__v num">{fmtUsd(r.alisFiyati)}</span>
              </div>
              {degerlemeGoster ? (
                <div className="reft__h">
                  <span className="mini reft__mob reft__amber">
                    Güncel değerleme
                  </span>
                  <span className="reft__v reft__amber num">
                    {fmtUsd(r.guncelDegerleme)}
                  </span>
                </div>
              ) : null}
              <div className="reft__h">
                <span className="mini reft__mob reft__amber">
                  Güncel aylık kira
                </span>
                <span className="reft__v reft__amber num">
                  {fmtUsd(r.guncelKira)}
                </span>
              </div>
              <div className="reft__h reft__kim">
                <span className="mini reft__mob">Kiracı ve alıcı</span>
                <span className="sm">{r.kiraciDurumu}</span>
                <span className="xs">{r.alici}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="sm ref__dip">
          {degerlemeGoster ? (
            <>Değerleme: {DEGERLEME_KAYNAGI}. </>
          ) : null}
          Adres, mahalle ve tam dosya görüşmede; portföyün geri kalanının
          tablosunu da orada açıyoruz.
        </p>
      </div>
    </section>
  );
}
