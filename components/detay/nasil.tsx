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

export function NasilCalisir() {
  return (
    <div className="pano">
      <div className="sect__bas">
        <h3 className="h2">Nasıl ilerliyor.</h3>
        <p className="xs sect__yan">
          Tüm görüşmeler online. Ofise gelmenizi gerektiren hiçbir adım yok.
        </p>
      </div>

      <ol className="akis">
        {ADIMLAR.map((a) => (
          <li className="kart akis__h" key={a.n}>
            <p className="akis__n num">
              {a.n}
              <em className="chip">{a.s}</em>
            </p>
            <p className="h3 akis__b">{a.b}</p>
            <p className="sm">{a.a}</p>
          </li>
        ))}
      </ol>

      <div className="pano--iki nasil__alt">
        <div className="hikaye">
          <h4 className="h3">Bu işe müşteri olarak başladık.</h4>
          <p className="hikaye__p">
            Birkaç yıl önce varlığımızı Amerika&apos;ya taşıdık ve elimizde
            hiçbir rehber yoktu. Hangi eyalette ev sahibinin hakkı korunuyor,
            hangi kredi yabancıya açık, tapu kimin adına çıkmalı — hepsini hata
            yaparak öğrendik.
          </p>
          <p className="vurus vurus--cizgi">
            Size aldığımız evlerin aynısından kendimiz de alıyoruz. Kötü bir
            mahalleyi size satmak, önce kendi tablomuzu bozar.
          </p>
        </div>

        <div>
          <div className="sect__bas">
            <h4 className="h3">Rakamlarımız her ay burada olacak</h4>
            <p className="xs sect__yan">henüz yayınlanmış dönem yok</p>
          </div>
          <dl className="seffaf">
            {SEFFAFLIK.map((s) => (
              <div className="seffaf__s" key={s.k}>
                <dt>
                  {s.k}
                  {SEFFAFLIK_ORNEK ? (
                    <em className="chip">örnek · gerçek veri değil</em>
                  ) : null}
                </dt>
                <dd className="num">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
