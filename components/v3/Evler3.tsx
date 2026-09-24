/**
 * V3 seçilmiş evler — tam üç kart (brief §4).
 *
 * v2'de dört kart vardı ve her kartın altında dört satırlık yatırım
 * dökümü tekrar ediyordu; brief bu tekrarı açıkça yasaklıyor ("Do not
 * repeat the calculator's investment analysis"). Kart artık hafif:
 * fotoğraf, bölge künyesi, temel künye, fiyat ve TEK eylem.
 *
 * Portföyde henüz gerçek ev yok; kartlar [ÖRNEK VERİ] damgalı ve her
 * fotoğraf "temsilî" rozetli kalıyor (kural 9 ve 16). Şehir/eyalet adı
 * yazılmaz (kural 11).
 */
import { EVLER } from "@/lib/portfoy";
import { fmtUsd, getiri } from "@/lib/finance";

const UC = EVLER.slice(0, 3);

export function Evler3() {
  return (
    <section className="v3-sect v3-evler" id="v3-evler">
      <div className="v3-kap">
        <div className="v3-bas">
          <h2 className="v3-h2">Seçilmiş evler.</h2>
          <p className="v3-bas__yan">
            Ürün bandındaki müstakil evlerden üçü. Adres, mahalle analizi ve
            tam dosya görüşmede açılıyor.
          </p>
        </div>

        <p className="v3-damga">
          [ÖRNEK VERİ — gerçek portföy kartları ve fotoğrafları gelecek]
        </p>

        <ul className="v3-evler__ler">
          {UC.map((e) => {
            const u = getiri(e.fiyat);
            return (
              <li className="v3-ev" key={e.z + e.fiyat}>
                <div className="v3-ev__foto">
                  <img
                    src={e.foto}
                    width={760}
                    height={475}
                    loading="lazy"
                    alt="Temsilî ev fotoğrafı"
                  />
                  <span className="v3-temsili">temsilî</span>
                </div>
                <div className="v3-ev__gov">
                  <p className="v3-ev__z">
                    {e.z}
                    <i>{e.durum}</i>
                  </p>
                  <p className="v3-ev__p v3-num">{fmtUsd(e.fiyat)}</p>
                  <p className="v3-ev__kunye">
                    {e.oda} · {e.m2} m² · {e.yil}
                  </p>
                  <p className="v3-ev__kira">
                    beklenen kira{" "}
                    <b className="v3-num">{fmtUsd(u.kiraAylik)}/ay</b>
                  </p>
                  <a className="v3-ev__eylem" href="#v3-kapanis">
                    Bu evi görüşmede açalım
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
