import { EVLER_V4, evYolu, onluk } from "@/lib/evler-v4";
import { fmtUsd, getiri } from "@/lib/finance";
import { Ok4 } from "./isaret";

/**
 * V4 seçilmiş evler — editoryal yerleşim, ızgara değil.
 *
 * Bir büyük (4:5) + iki küçük (3:2), sağ kolon aşağı kaydırılmış.
 * Her fotoğrafta "temsilî" rozeti (kural 9 ve 16; damga Eren'in isteğiyle kalktı).
 * (kural 9 ve 16). Şehir/eyalet adı yazılmaz (kural 11).
 * Fotoğraflar V3'teki evlerle aynı, yüksek çözünürlüklü kaynaktan ve
 * sayfanın renk dünyasına göre ortak bir ton ayarından geçti.
 */

export function Evler4() {
  return (
    <section className="v4-evler" id="v4-evler" aria-labelledby="v4-evler-bas">
      <div className="v4-kap">
        <div className="v4-evler__bas">
          <h2 className="v4-h2" id="v4-evler-bas" data-r>
            Seçilmiş <em>evler.</em>
          </h2>
          <div data-r>
            <p className="v4-p">
              Portföyümüzdeki evlerden bazıları. Tam adres, mahalle analizi ve
              diğer detay bilgileri görüşmede alabilirsiniz.
            </p>
          </div>
        </div>

        <ul className="v4-evler__ler">
          {EVLER_V4.map(({ slug, ev, foto, w, h }, i) => {
            const g = getiri(ev.fiyat);
            return (
              <li className={`v4-ev v4-ev--${i === 0 ? "buyuk" : "kucuk"}`} key={slug} data-r style={{ ["--d" as string]: `${i * 100}ms` }}>
                <a href={evYolu(slug)} className="v4-ev__ic">
                  <span className="v4-ev__foto">
                    <img src={foto} width={w} height={h} loading="lazy" alt="Temsilî ev fotoğrafı" />
                    <span className="v4-rozet">temsilî</span>
                  </span>
                  <span className="v4-ev__gov">
                    <span className="v4-ev__z">
                      {ev.z}
                      <i>{ev.durum}</i>
                    </span>
                    <span className="v4-ev__satir">
                      <span className="v4-ev__p v4-num">{fmtUsd(ev.fiyat)}</span>
                      <span className="v4-ev__kira">
                        beklenen kira <b className="v4-num">{fmtUsd(onluk(g.kiraAylik))}/ay</b>
                      </span>
                    </span>
                    <span className="v4-ev__kunye">
                      {ev.oda} · {ev.m2} m² · {ev.yil} yapımı
                    </span>
                    <span className="v4-ev__eylem">
                      Evin detaylarını görün <Ok4 />
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
