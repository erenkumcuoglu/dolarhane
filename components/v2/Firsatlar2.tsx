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
import { EVLER } from "@/components/detay/evler";
import { KANONIK, fmtUsd, us } from "@/lib/finance";
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
            const u = us(e.p);
            return (
              <li className="v2-kart v2-ev" key={e.z + e.p}>
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
                    <p className="v2-ev__p v2-num">{fmtUsd(e.p)}</p>
                    <p className="v2-ev__getiri">
                      <b className="v2-num">{e.getiri}</b>
                      <i>net getiri</i>
                    </p>
                  </div>
                  <p className="v2-xs v2-ev__kunye">
                    {e.oda} · {e.m2} m² · {e.yil}
                  </p>

                  <dl className="v2-ev__ler">
                    <div>
                      <dt>Peşinat</dt>
                      <dd className="v2-num">{fmtUsd(u.pesinat)}</dd>
                    </div>
                    <div>
                      <dt>Aylık taksit</dt>
                      <dd className="v2-num">{fmtUsd(u.taksit)}</dd>
                    </div>
                    <div>
                      <dt>Beklenen kira</dt>
                      <dd className="v2-num">{fmtUsd(e.kira)}</dd>
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
          Peşinat %{KANONIK.pesinatOrani * 100} ve taksit, her evin kendi
          fiyatından hesaplanıyor. Net getiri peşin alımın rakamıdır; kredili
          senaryoda nakit fazlası incedir, hesap bölümünde satır satır yazılı.
        </p>
      </div>
    </section>
  );
}
