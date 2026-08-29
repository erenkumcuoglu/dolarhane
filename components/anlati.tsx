import {
  CANLI,
  KANONIK,
  US_YILLIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  vadeSonu,
} from "@/lib/finance";

/* ── 03 · Neden Amerika ───────────────────────────────────────
   Bu bölümde tek bir rakam yok; iş yükü metinde. Sayfanın rakam
   bütçesi (≤70) buraya harcanmıyor. */

const GEREKCELER: [string, string][] = [
  [
    "Kira sözleşmesi bir hak, temenni değil.",
    "Ev sahibinin hakkının fiilen işlediği eyaletlerde alım yapıyoruz. Tahliye süresi öngörülebilir, süreç yazılı.",
  ],
  [
    "Gelir dolar, gider dolar.",
    "Kur riski taşımıyorsunuz; kurun içindesiniz. Kira dolar gelir, taksit ve giderler dolar çıkar.",
  ],
  [
    "Otuz yıl sabit faiz.",
    "ABD'de konut kredisi vadesi boyunca sabit — taksit ilk ay ne ise otuzuncu yıl da o.",
  ],
  [
    "Ev, ev olarak duruyor.",
    "Sıradan bir orta kuşak mahallesinde, garajlı, bahçeli, kiracısı olan bir müstakil ev. Egzotik bir enstrüman değil.",
  ],
];

export function NedenAmerika() {
  return (
    <section className="sect neden">
      <div className="kap">
        <div className="sect__bas">
          <h2 className="h2">Neden Amerika.</h2>
          <p className="xs sect__yan">
            Rakamsız dört gerekçe — hesap bir sonraki bölümde.
          </p>
        </div>
        <ul className="neden__ler">
          {GEREKCELER.map(([b, a]) => (
            <li className="kart neden__h" key={b}>
              <h3 className="h3">{b}</h3>
              <p>{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 04 · Türkiye'de aynı para ────────────────────────────────
   Dört satır, iki kolon. Rakamlar finance.ts'ten. */

export function TurkiyeAyniPara() {
  const pesinat = fmtUsd(
    KANONIK.fiyat * KANONIK.pesinatOrani + KANONIK.fiyat * 0.04,
  );
  const satirlar: [string, string, string][] = [
    [
      "Bu parayla alınabilen",
      "Dar bir daire, çeperde",
      "3 yatak odalı, garajlı, bahçeli",
    ],
    [
      "Kredi",
      `Efektif yıllık ${fmtYuzde(CANLI.tr.efektifYillik * 100)}`,
      `Yıllık ${fmtYuzde(US_YILLIK * 100, 2)} · ${KANONIK.vadeYil} yıl sabit`,
    ],
    [
      "Kira taksiti karşılar mı",
      `Hayır · ${fmtOran(CANLI.tr.oran)}`,
      `Evet · ${fmtOran(CANLI.us.oran)}`,
    ],
    ["Gelirin para birimi", "TL", "USD"],
  ];

  return (
    <section className="sect ayni">
      <div className="kap">
        <h2 className="h2 ayni__h">Aynı {pesinat} Türkiye&apos;de ne yapar.</h2>

        <div className="kart ayni__tablo">
          <div className="ayni__satir ayni__satir--bas" aria-hidden="true">
            <span />
            <span className="xs">İstanbul&apos;da daire</span>
            <span className="xs ayni__bizBas">Amerika&apos;da müstakil ev</span>
          </div>
          {satirlar.map(([k, t, a]) => (
            <div className="ayni__satir" key={k}>
              <span className="xs ayni__k">{k}</span>
              <span className="ayni__tr">
                <span className="mini ayni__mob">İstanbul&apos;da daire</span>
                {t}
              </span>
              <span className="ayni__biz">
                <span className="mini ayni__mob">Amerika&apos;da ev</span>
                {a}
              </span>
            </div>
          ))}
        </div>

        <p className="vurus ayni__not">
          Türkiye kolonu bugün bulunabilen <strong>en iyi</strong> koşulla
          kuruldu; piyasa ortalaması daha kötü.
        </p>
      </div>
    </section>
  );
}

/* ── 05 · Kiracı meselesi ─────────────────────────────────────
   Tek yönlü olmasın diye kartın altındaki öz-eleştiri satırı
   yapının parçası: bu satır olmadan bölüm eksiktir. */

const KARSITLIK: [string, string, string][] = [
  [
    "Çıkarabilmek",
    "Tahliye davası yıllara yayılabilir",
    "Süreç yazılı ve öngörülebilir; süreyi görüşmede söylüyoruz",
  ],
  [
    "Kira artışı",
    "Yasal tavan ile enflasyonun altında kalır",
    "Sözleşme yenilemesinde piyasa kirası",
  ],
  [
    "Hasar",
    "Depozito bir aylık kira, hasarı karşılamaz",
    "Depozito + ev sahibi sigortası + yönetim şirketinin denetimi",
  ],
];

export function KiraciMeselesi() {
  return (
    <section className="sect kiraci">
      <div className="kap">
        <div className="sect__bas">
          <h2 className="h2">Kiracı meselesi.</h2>
          <p className="xs sect__yan">
            Türkiye&apos;de mülk sahibi olmanın fiilî hâli ile bizim aldığımız
            eyaletlerdeki fark. Olgu, korku pazarlaması değil.
          </p>
        </div>

        <div className="kart kiraci__tablo">
          <div className="kiraci__satir kiraci__satir--bas" aria-hidden="true">
            <span className="xs">Konu</span>
            <span className="xs">Türkiye&apos;de tanıdık olan</span>
            <span className="xs kiraci__bizBas">Bizim aldığımız eyaletlerde</span>
          </div>
          {KARSITLIK.map(([k, t, b]) => (
            <div className="kiraci__satir" key={k}>
              <span className="kiraci__k">{k}</span>
              <span className="kiraci__tr">
                <span className="mini kiraci__mob">Türkiye&apos;de tanıdık olan</span>
                {t}
              </span>
              <span className="kiraci__biz">
                <span className="mini kiraci__mob kiraci__mob--biz">
                  Bizim aldığımız eyaletlerde
                </span>
                {b}
              </span>
            </div>
          ))}
          <div className="kiraci__ozelestiri">
            <p className="vurus">
              Bizim tarafta da kiracı riski var — kötü bir kiracı birkaç aylık
              gelir ve avukat masrafı kaybettirebilir.{" "}
              <a href="#detay">Riskler ve sorular</a> bölümünde yazıyor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 07 · Getiriyle ne olur ───────────────────────────────────
   Kredili senaryoda cebe giren nakit ayda $35; bu bölüm o rakamın
   üstüne kurulamaz, yoksa "Nakit ve getiri" ile çelişir. Üç rakam da
   ya peşin alımdan ya biriken servetten geliyor ve her birinin altında
   hangi senaryo olduğu yazılı. */

export function GetiriyleNeOlur() {
  const net = CANLI.net;
  const u = CANLI.us;
  const son = vadeSonu();

  const uc: { v: string; a: string; e: string; amber?: boolean }[] = [
    {
      v: fmtUsd(net.netYillik),
      a: "Yılda, net. Bir çocuğun özel okul taksitinin büyük kısmı. TL karşılığını yazmıyoruz — kur değişiyor, site kur basmıyor.",
      e: `peşin alım · ${fmtYuzde(net.netGetiri * 100, 2)} net`,
      amber: true,
    },
    {
      v: fmtUsd(u.anaparaAylikIlkYil),
      a: "Ayda biriken anapara. Her ay, siz hiçbir şey yapmadan, evin sizin olan kısmı büyüyor.",
      e: "kredili alım · ilk yıl ortalaması",
    },
    {
      v: fmtUsd(son.kiracininKapattigi),
      a: `Otuz yılda kiracının kapattığı tutar. Bu parayı siz ödemiyorsunuz; sizin koyduğunuz ${fmtUsd(son.sizinKoydugunuz)}.`,
      e: `kredili alım · ${KANONIK.vadeYil} yıl`,
    },
  ];

  return (
    <section className="sect getiri">
      <div className="kap">
        <h2 className="h2">Getiriyle ne olur.</h2>
        <div className="getiri__ler">
          {uc.map((x) => (
            <div className="getiri__h" key={x.e}>
              <p className={`getiri__v num${x.amber ? " getiri__v--amber" : ""}`}>
                {x.v}
              </p>
              <p>{x.a}</p>
              <span className="chip">{x.e}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
