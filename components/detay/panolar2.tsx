import { KONTAK } from "@/lib/kontak";
import { fmtUsd } from "@/lib/finance";

/* ── 03 · Evler ───────────────────────────────────────────── */

const EVLER = [
  {
    z: "Bölge A",
    p: 168_000,
    kira: 1_780,
    getiri: "%6,8",
    durum: "Kiracılı",
    yil: 1952,
    oda: "3 yatak · 1,5 banyo",
    m2: 112,
    arsa: 510,
    ozellik: ["Ayrık garaj", "Kapalı veranda", "Bodrum"],
    karakter:
      "Aynı kiracı üç yıldır oturuyor; sözleşme geçen yaz 14 ay daha uzatıldı.",
  },
  {
    z: "Bölge B",
    p: 214_000,
    kira: 2_100,
    getiri: "%6,2",
    durum: "Tadilat bitti",
    yil: 1968,
    oda: "3 yatak · 2 banyo",
    m2: 134,
    arsa: 640,
    ozellik: ["Çatı yenilendi", "Yeni kombi", "İki araçlık garaj"],
    karakter:
      "Alım sonrası tadilatı bitti, kiracı arayışı başladı. Bu bantta kiracı bulma ortalaması 31 gün.",
  },
  {
    z: "Bölge A",
    p: 152_000,
    kira: 1_712,
    getiri: "%7,1",
    durum: "Kiracılı",
    yil: 1948,
    oda: "2 yatak · 1 banyo",
    m2: 96,
    arsa: 470,
    ozellik: ["Ahşap cephe", "Arka bahçe", "Çamaşır odası"],
    karakter:
      "Kiracı beş yıldır aynı. Bandın en küçük evi ve en yüksek getirisi — küçük ev, düşük fiyat, aynı kira talebi.",
  },
  {
    z: "Bölge C",
    p: 192_500,
    kira: 1_940,
    getiri: "%6,5",
    durum: "Kiracılı",
    yil: 1971,
    oda: "3 yatak · 2 banyo",
    m2: 121,
    arsa: 580,
    ozellik: ["İki araçlık garaj", "Kapalı otopark", "Tam bodrum"],
    karakter:
      "Aile mahallesi; kiracı profili genelde uzun süreli. Bu tip evler boş kalma süresini kısaltıyor.",
  },
];

export function Evler() {
  return (
    <div className="pano">
      <h3 className="h2 pano__h">Evler görünür. Adresler görüşmede.</h3>
      <p className="lede pano__lede">
        1940–1980 arası, garajlı, bahçeli müstakil evler — Amerika&apos;nın orta
        kuşağının sıradan konut stoku. Rakamlar ve evin kendisi açık; adres,
        mahalle analizi ve satın alma dosyası ilk görüşmede.
      </p>
      <p className="damga">Örnek portföy · 4 mülk · kartlar örnektir</p>

      <ul className="evler">
        {EVLER.map((e, i) => (
          <li className="kart ev" key={i}>
            <div className="yuva yuva--1610 ev__foto">
              <span className="yuva__et">ev fotoğrafı · 16:10</span>
            </div>
            <div className="ev__gov">
              <p className="mini ev__z">{e.z}</p>
              <p className="ev__p num">{fmtUsd(e.p)}</p>
              <p className="xs">
                {e.oda} · {e.yil}
              </p>

              <dl className="ev__ler">
                <div>
                  <dt className="xs">Kira</dt>
                  <dd className="num">{fmtUsd(e.kira)}</dd>
                </div>
                <div>
                  <dt className="xs">Net getiri</dt>
                  <dd className="num ev__getiri">{e.getiri}</dd>
                </div>
                <div>
                  <dt className="xs">Durum</dt>
                  <dd>{e.durum}</dd>
                </div>
              </dl>

              <details className="ev__kunye">
                <summary>
                  <span>Künye ve karakter</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="ev__kunyeic">
                  <dl className="ev__olcu">
                    <div>
                      <dt className="xs">Kullanım</dt>
                      <dd className="num">{e.m2} m²</dd>
                    </div>
                    <div>
                      <dt className="xs">Arsa</dt>
                      <dd className="num">{e.arsa} m²</dd>
                    </div>
                  </dl>
                  <ul className="ev__ozellik">
                    {e.ozellik.map((o) => (
                      <li className="chip" key={o}>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <p className="sm">{e.karakter}</p>
                </div>
              </details>

              <p className="xs ev__kilit">Adres ve dosya görüşmede</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── 04 · Nasıl çalışır ───────────────────────────────────── */

const ADIMLAR = [
  {
    n: "01",
    s: "Bugün",
    b: "Bir mesaj gönderin",
    a: KONTAK.wa
      ? "WhatsApp'tan yazın ya da formu doldurun. İkisi de aynı yere düşüyor."
      : "Aşağıdaki formu doldurun. Talebiniz kaydedilir, aynı gün dönüş yapılır.",
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
    a: "Takvimden kendi slotunuzu seçiyorsunuz. Bizim uygunluğumuzu beklemiyorsunuz.",
  },
  {
    n: "04",
    s: "Online",
    b: "Birebir görüşme",
    a: "45 dakika Zoom. Bütçenize göre üç gerçek ev, üç gerçek net tablo. Satış konuşması değil, hesap.",
  },
];

export function NasilCalisir() {
  return (
    <div className="pano">
      <h3 className="h2 pano__h">Nasıl ilerliyor.</h3>
      <p className="lede pano__lede">
        Tüm görüşmeler online. Ofise gelmenizi, uçağa binmenizi ya da birini
        evinize almanızı gerektiren hiçbir adım yok.
      </p>

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

      <div className="kart kart--wash hikaye">
        <h4 className="h3">Bu işe müşteri olarak başladık.</h4>
        <p className="sm hikaye__p">
          Birkaç yıl önce varlığımızı Amerika&apos;ya taşıdık ve elimizde hiçbir
          rehber yoktu. Hangi eyalette ev sahibinin hakkı korunuyor, hangi kredi
          yabancıya açık, tapu kimin adına çıkmalı — hepsini hata yaparak
          öğrendik.
        </p>
        <p className="vurus">
          Size aldığımız evlerin aynısından kendimiz de alıyoruz. Kötü bir
          mahalleyi size satmak, önce kendi tablomuzu bozar.
        </p>
      </div>
    </div>
  );
}
