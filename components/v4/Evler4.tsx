import { EVLER } from "@/lib/portfoy";
import { fmtUsd, getiri } from "@/lib/finance";
import { Kunye4, Ok4 } from "./isaret";

/**
 * V4 seçilmiş evler — editoryal yerleşim, ızgara değil.
 *
 * Bir büyük (4:5) + iki küçük (3:2), sağ kolon aşağı kaydırılmış.
 * Portföy hâlâ örnek: [ÖRNEK VERİ] damgası ve her fotoğrafta "temsilî"
 * (kural 9 ve 16). Şehir/eyalet adı yazılmaz (kural 11).
 * Fotoğraflar V3'teki evlerle aynı, yüksek çözünürlüklü kaynaktan ve
 * sayfanın renk dünyasına göre ortak bir ton ayarından geçti.
 */
const SIRA = [
  { ev: EVLER[0], foto: "/ev/v4/ev-01-1200.jpg", w: 1200, h: 800 },
  { ev: EVLER[1], foto: "/ev/v4/ev-02-1200.jpg", w: 1200, h: 1600 },
  { ev: EVLER[2], foto: "/ev/v4/ev-03-1200.jpg", w: 1200, h: 800 },
];

export function Evler4() {
  return (
    <section className="v4-evler" id="v4-evler" aria-labelledby="v4-evler-bas">
      <div className="v4-kap">
        <Kunye4 no="04" ad="Evler" />
        <div className="v4-evler__bas">
          <h2 className="v4-h2" id="v4-evler-bas" data-r>
            Seçilmiş <em>evler.</em>
          </h2>
          <div data-r>
            <p className="v4-p">
              Ürün bandındaki müstakil evlerden üçü. Adres, mahalle analizi ve tam
              dosya görüşmede açılıyor.
            </p>
            <p className="v4-damga">[ÖRNEK VERİ — gerçek portföy kartları ve fotoğrafları gelecek]</p>
          </div>
        </div>

        <ul className="v4-evler__ler">
          {SIRA.map(({ ev, foto, w, h }, i) => {
            const g = getiri(ev.fiyat);
            return (
              <li className={`v4-ev v4-ev--${i === 0 ? "buyuk" : "kucuk"}`} key={ev.foto} data-r style={{ ["--d" as string]: `${i * 100}ms` }}>
                <a href="#v4-kapanis" className="v4-ev__ic">
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
                        beklenen kira <b className="v4-num">{fmtUsd(g.kiraAylik)}/ay</b>
                      </span>
                    </span>
                    <span className="v4-ev__kunye">
                      {ev.oda} · {ev.m2} m² · {ev.yil} yapımı
                    </span>
                    <span className="v4-ev__eylem">
                      Bu evi görüşmede açalım <Ok4 />
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
