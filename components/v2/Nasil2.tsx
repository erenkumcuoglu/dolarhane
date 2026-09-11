/**
 * v2 süreç şeridi — dört adım yatay ray, altında aylık işletme rakamları.
 * İçerik nasil.tsx ile aynı kaynaktan: ADIMLAR metni ve SEFFAFLIK tablosu.
 *
 * Şeffaflık satırları henüz fiili operasyondan gelmiyor; her biri kendi
 * "örnek · gerçek veri değil" etiketini taşımaya devam ediyor.
 */
import { KONTAK } from "@/lib/kontak";
import { SEFFAFLIK, SEFFAFLIK_ORNEK } from "@/lib/referanslar";

const ADIMLAR = [
  {
    n: "01",
    s: "Bugün",
    b: "Bir mesaj gönderin",
    a: KONTAK.wa
      ? "WhatsApp'tan yazın ya da formu doldurun. İkisi de aynı yere düşüyor."
      : "Formu doldurun. Talebiniz kaydedilir ve aynı gün dönüş yapılır.",
  },
  {
    n: "02",
    s: "Aynı gün",
    b: "Hemen konuşmaya başlayalım",
    a: "Hedefinizi, bütçenizi ve beklentinizi anlıyoruz. Bu aşamada hiçbir taahhüt yok.",
  },
  {
    n: "03",
    s: "Siz seçin",
    b: "Uygun olduğunuz zamana randevu",
    a: "Takvimden kendi slotunuzu seçiyorsunuz.",
  },
  {
    n: "04",
    s: "Online",
    b: "Birebir görüşme",
    a: "45 dakika Zoom. Üç gerçek ev, üç gerçek net tablo.",
  },
];

export function Nasil2() {
  return (
    <section className="v2-sect v2-nasil" id="v2-nasil">
      <div className="v2-kap">
        <div className="v2-sect__bas">
          <h2 className="v2-h2">Nasıl ilerliyor.</h2>
          <p className="v2-xs v2-sect__yan">
            Tüm görüşmeler online. Ofise gelmenizi gerektiren hiçbir adım yok.
          </p>
        </div>

        <ol className="v2-akis">
          {ADIMLAR.map((a) => (
            <li key={a.n}>
              <p className="v2-akis__n v2-num">{a.n}</p>
              <p className="v2-akis__s v2-mini">{a.s}</p>
              <h3 className="v2-h4">{a.b}</h3>
              <p className="v2-sm">{a.a}</p>
            </li>
          ))}
        </ol>

        <div className="v2-seffaf">
          <div className="v2-seffaf__bas">
            <h3 className="v2-h4">Rakamlarımız her ay burada olacak</h3>
            <p className="v2-mini">henüz yayınlanmış dönem yok</p>
          </div>
          <dl>
            {SEFFAFLIK.map((s) => (
              <div key={s.k}>
                <dt>
                  {s.k}
                  {SEFFAFLIK_ORNEK ? <em>örnek · gerçek veri değil</em> : null}
                </dt>
                <dd className="v2-num">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
