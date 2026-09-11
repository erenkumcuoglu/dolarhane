/**
 * v2 referans şeridi — satılmış evlerin güncel rakamları.
 *
 * İki kural burada da geçerli: kaç ev olduğu İDDİA EDİLMİYOR (kural 14) ve
 * "güncel değerleme" kolonu kaynağı yazılı olmadıkça tamamen düşüyor
 * (kural 12). Fotoğraf yuvası yok — bu satırlar belirli bir işlem hakkında
 * somut iddia taşıyor, altına temsilî kare koymak uydurma kanıt olur.
 */
import { DEGERLEME_KAYNAGI, ORNEK, REFERANSLAR } from "@/lib/referanslar";
import { fmtUsd } from "@/lib/finance";

export function Referans2() {
  const degerleme = DEGERLEME_KAYNAGI !== "";

  return (
    <section className="v2-sect v2-ref" id="v2-referanslar">
      <div className="v2-kap">
        <div className="v2-sect__bas">
          <h2 className="v2-h2">
            Bazı evlerimizin <em>getirileri.</em>
          </h2>
          <p className="v2-xs v2-sect__yan">
            Alım fiyatı, bugünkü kira ve kiracı durumu. Tablo yeni alımlarla
            büyüyor.
          </p>
        </div>

        {ORNEK ? <p className="v2-damga">[ÖRNEK VERİ — gerçek tablo gelecek]</p> : null}
        {!degerleme ? (
          <p className="v2-damga">
            [DEĞERLEME KAYNAĞI GİRİLMEDİ — değerleme kolonu gizli]
          </p>
        ) : null}

        <div className="v2-kart v2-reft">
          <div className="v2-reft__s v2-reft__s--bas">
            <span className="v2-xs">Alım tarihi</span>
            <span className="v2-xs">Alış fiyatı</span>
            {degerleme ? <span className="v2-xs">Güncel değerleme</span> : null}
            <span className="v2-xs">Güncel aylık kira</span>
            <span className="v2-xs">Kiracı ve alıcı</span>
          </div>
          {REFERANSLAR.map((r) => (
            <div className="v2-reft__s" key={r.alimTarihi}>
              <span>
                <em className="v2-mini">Alım tarihi</em>
                {r.alimTarihi}
              </span>
              <span className="v2-num">
                <em className="v2-mini">Alış fiyatı</em>
                {fmtUsd(r.alisFiyati)}
              </span>
              {degerleme ? (
                <span className="v2-num">
                  <em className="v2-mini">Güncel değerleme</em>
                  {fmtUsd(r.guncelDegerleme)}
                </span>
              ) : null}
              <span className="v2-num v2-reft__kira">
                <em className="v2-mini">Güncel aylık kira</em>
                {fmtUsd(r.guncelKira)}
              </span>
              <span className="v2-reft__kim">
                <em className="v2-mini">Kiracı ve alıcı</em>
                {r.kiraciDurumu}
                <i>{r.alici}</i>
              </span>
            </div>
          ))}
        </div>

        <p className="v2-mini v2-firsat__not">
          {degerleme ? `Değerleme: ${DEGERLEME_KAYNAGI}. ` : ""}
          Adres, mahalle ve tam dosya görüşmede; portföyün geri kalanının
          tablosunu da orada açıyoruz.
        </p>
      </div>
    </section>
  );
}
