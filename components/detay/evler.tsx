import { fmtUsd } from "@/lib/finance";

const EVLER = [
  {
    z: "Bölge A · orta kuşak",
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
    z: "Bölge B · orta kuşak",
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
      "Alım sonrası tadilatı bitti, kiracı arayışı başladı. Bu bantta bir evin kiracı bulma ortalaması 31 gün.",
  },
  {
    z: "Bölge A · orta kuşak",
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
    z: "Bölge C · orta kuşak",
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
      <div className="sect__bas">
        <h3 className="h2">Evler görünür. Adresler görüşmede.</h3>
        <p className="xs sect__yan">
          Örnek portföy · {EVLER.length} mülk · kartlar örnektir
        </p>
      </div>

      <ul className="evler">
        {EVLER.map((e, i) => (
          <li className="kart ev" key={i}>
            <div className="yuva yuva--1610 ev__foto">
              <span className="yuva__et">ev fotoğrafı · 16:10</span>
            </div>
            <div className="ev__gov">
              <div>
                <p className="mini ev__z">{e.z}</p>
                <p className="ev__p num">{fmtUsd(e.p)}</p>
                <p className="xs">
                  {e.oda} · {e.yil}
                </p>
              </div>

              <dl className="ev__ler">
                <div>
                  <dt>Kira</dt>
                  <dd className="num">{fmtUsd(e.kira)}</dd>
                </div>
                <div>
                  <dt>Net getiri</dt>
                  <dd className="num ev__getiri">{e.getiri}</dd>
                </div>
                <div>
                  <dt>Durum</dt>
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
                      <dt>Kullanım</dt>
                      <dd className="num">{e.m2} m²</dd>
                    </div>
                    <div>
                      <dt>Arsa</dt>
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
                  <p className="xs">
                    Adres, mahalle analizi ve dosya görüşmede
                  </p>
                </div>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
