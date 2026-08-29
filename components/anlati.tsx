import {
  CANLI,
  KANONIK,
  US_YILLIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  nakitOrani,
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
  const giris = KANONIK.fiyat * nakitOrani();
  const pesinat = fmtUsd(giris);
  /* Asıl fark getiri oranında değil, gereken sermayede: Türkiye'de kira
     taksiti karşılamadığı için kredi fiilen işlemiyor, yani aynı büyüklükte
     bir varlığa sahip olmak için tutarın tamamını koymak gerekiyor.
     Kat, finance.ts'ten türetiliyor — elle yazılmış rakam değil. */
  /* aşağı yuvarlanıyor: 'en az' ifadesiyle tutarlı olsun ve
     kapanış masrafları hesaba katılmadığı için lehimize şişmesin */
  const kat = Math.floor((KANONIK.fiyat / giris) * 10) / 10;
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

        <div className="kart kart--wash sermaye">
          <div>
            <p className="xs amber-t">
              Aynı büyüklükte bir varlık için Türkiye&apos;de gereken sermaye
            </p>
            <p className="sermaye__v num">
              en az {kat.toString().replace(".", ",")} kat
            </p>
          </div>
          <p className="sm sermaye__a">
            Burada {pesinat} koyup {fmtUsd(KANONIK.fiyat)}&apos;lık bir eve
            sahip oluyorsunuz; kalanını kiracı ödüyor. Türkiye&apos;de kira
            taksitin {fmtOran(CANLI.tr.oran)}&apos;i olduğu için kredi fiilen
            işlemiyor — aradaki farkı her ay siz ödersiniz. Yani aynı evin
            karşılığını almak için tutarın tamamını koymanız gerekir.
          </p>
        </div>

        <p className="vurus ayni__not">
          Türkiye kolonu bugün bulunabilen <strong>en iyi</strong> koşulla
          kuruldu; piyasa ortalaması daha kötü.
        </p>
      </div>
    </section>
  );
}

/* ── 05 · Ev sahipliği ────────────────────────────────────────
   Bu bölüm Türkiye mevzuatı hakkında hüküm kurmuyor: sol kolon
   insanların dile getirdiği ENDİŞE, sağ kolon bizim kendi işleyişimiz.
   Yumuşak dil bilinçli — kimseyi ya da bir düzeni suçlamıyoruz.

   Öz-eleştiri satırı yapının parçası: bölüm onsuz çizilmez. */

const KARSITLIK: [string, string, string][] = [
  [
    "Belirsizlik",
    "“Bir anlaşmazlık çıkarsa ne kadar süreceğini kestiremiyorum.”",
    "Süreç ve süreler yazılı. Ne kadar sürdüğünü görüşmede net olarak söylüyoruz.",
  ],
  [
    "Kiranın geride kalması",
    "“Kira zamanla piyasanın gerisinde kalıyor.”",
    "Sözleşme yenilemesinde kira piyasa seviyesine göre belirleniyor.",
  ],
  [
    "Bakım ve hasar",
    "“Bir sorun çıkarsa masrafı bana kalır.”",
    "Depozito, ev sahibi sigortası ve yönetim şirketinin düzenli denetimi devrede.",
  ],
];

export function KiraciMeselesi() {
  return (
    <section className="sect kiraci">
      <div className="kap">
        <div className="sect__bas">
          <h2 className="h2">Ev sahibi olmak yorucu olabiliyor.</h2>
          <p className="xs sect__yan">
            Türkiye&apos;de birçok kişi evini kiraya vermekten çekiniyor; bunun
            konuşulan nedenleri var. Bizim tarafta işin nasıl yürüdüğünü
            anlatalım.
          </p>
        </div>

        <div className="kart kiraci__tablo">
          <div className="kiraci__satir kiraci__satir--bas" aria-hidden="true">
            <span className="xs">Konu</span>
            <span className="xs">Sık duyulan endişe</span>
            <span className="xs kiraci__bizBas">Bizim tarafta nasıl işliyor</span>
          </div>
          {KARSITLIK.map(([k, t, b]) => (
            <div className="kiraci__satir" key={k}>
              <span className="kiraci__k">{k}</span>
              <span className="kiraci__tr">
                <span className="mini kiraci__mob">Sık duyulan endişe</span>
                {t}
              </span>
              <span className="kiraci__biz">
                <span className="mini kiraci__mob kiraci__mob--biz">
                  Bizim tarafta nasıl işliyor
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
