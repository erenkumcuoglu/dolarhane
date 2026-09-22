/**
 * v2 portföy kartları — referans tasarımdaki dört kartlı ızgara.
 *
 * Veri components/detay/evler.tsx'teki EVLER dizisinden; iki dünya tek
 * kaynağı paylaşıyor. Üç sapma bilinçli:
 *  - Konum etiketi şehir/eyalet değil bölge künyesi (kural 11).
 *  - Izgaranın üstünde "[ÖRNEK VERİ]" damgası var ve her fotoğrafta
 *    "temsilî" rozeti duruyor (kural 9 ve 16).
 *  - Kart alt satırı referanstaki "nakit akış"ı değil peşinat, taksit ve
 *    kirayı gösteriyor: kredili nakit akışı reklam kalemi değil (kural 13).
 */
import { EVLER } from "@/lib/portfoy";
import { GIDER, fmtUsd, fmtYuzde, getiri } from "@/lib/finance";
import { IkonOk } from "./ikon";

export function Firsatlar2() {
  return (
    <section className="v2-sect v2-firsat" id="v2-firsatlar">
      <div className="v2-kap">
        <div className="v2-sect__bas">
          <h2 className="v2-h2">Örnek portföy.</h2>
          <p className="v2-xs v2-sect__yan">
            Ürün bandındaki müstakil evler. Adres, mahalle analizi ve tam dosya
            görüşmede açılıyor.
          </p>
        </div>

        <p className="v2-damga">
          [ÖRNEK VERİ — gerçek portföy kartları ve fotoğrafları gelecek]
        </p>

        <ul className="v2-firsat__ler">
          {EVLER.map((e) => {
            const u = getiri(e.fiyat);
            return (
              <li className="v2-kart v2-ev" key={e.z + e.fiyat}>
                <div className="v2-ev__foto">
                  <img
                    src={e.foto}
                    width={760}
                    height={475}
                    loading="lazy"
                    alt="Temsilî ev fotoğrafı"
                  />
                  <span className="v2-ev__durum">{e.durum}</span>
                  <span className="v2-temsili">temsilî</span>
                </div>

                <div className="v2-ev__gov">
                  <p className="v2-mini v2-ev__z">{e.z}</p>
                  <div className="v2-ev__ust">
                    <p className="v2-ev__p v2-num">{fmtUsd(e.fiyat)}</p>
                    <p className="v2-ev__getiri">
                      <b className="v2-num">{fmtYuzde(u.nakitGetiri * 100, 1)}</b>
                      <i>nakit getiri</i>
                    </p>
                  </div>
                  <p className="v2-xs v2-ev__kunye">
                    {e.oda} · {e.m2} m² · {e.yil}
                  </p>

                  {/* Peşinat ve taksit satırları kalktı — peşin model. */}
                  <dl className="v2-ev__ler">
                    <div>
                      <dt>Giriş bileti</dt>
                      <dd className="v2-num">{fmtUsd(u.giris.toplam)}</dd>
                    </div>
                    <div>
                      <dt>Beklenen kira</dt>
                      <dd className="v2-num">{fmtUsd(u.kiraAylik)}</dd>
                    </div>
                    <div>
                      <dt>Aylık eline geçen</dt>
                      <dd className="v2-num">{fmtUsd(u.nakitAylik)}</dd>
                    </div>
                    <div>
                      {/* Karşılık kartta da görünüyor: portföy kartı
                          hesap panelinden bağımsız okunuyor ve orada
                          verilen sözün burada tutulması gerekiyor. */}
                      <dt>Önerilen bakım payı</dt>
                      <dd className="v2-num">−{fmtUsd(u.karsilikAylik)}</dd>
                    </div>
                  </dl>

                  <a className="v2-btn v2-btn--blok" href="#v2-form">
                    Görüşmede açalım
                    <IkonOk />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="v2-mini v2-firsat__not">
          Kira ve net getiri her evin kendi fiyatından hesaplanıyor. Net
          getiri, giriş bileti üzerinden: emlak vergisi{" "}
          {fmtYuzde(GIDER.emlakVergisiOrani * 100, 2)}, mülk yönetimi{" "}
          {fmtYuzde(GIDER.yonetimOrani * 100)}, boşluk{" "}
          {fmtYuzde(GIDER.boslukOrani * 100)} ve bakım{" "}
          {fmtYuzde(GIDER.bakimOrani * 100)} düşülmüş hâli. Satır satır
          dökümü hesap bölümünde.
        </p>
      </div>
    </section>
  );
}
