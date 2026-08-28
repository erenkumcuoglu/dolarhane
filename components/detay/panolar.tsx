import {
  CANLI,
  KANONIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  giderler,
  vadeSonu,
  zamanCizgisi,
} from "@/lib/finance";

/* ── 01 · Nakit ve getiri ─────────────────────────────────── */

export function Nakit() {
  const u = CANLI.us;
  const net = CANLI.net;
  const g = giderler(KANONIK.fiyat);

  return (
    <div className="pano pano--iki">
      <div>
        <h3 className="h2 pano__h">
          Kira taksiti karşılıyor. Cebinize giren para yine de az.
        </h3>
        <p className="vurus pano__vurus">
          Asıl kazanç nakitte değil: evi fiilen kiracı satın alıyor, siz peşinatı
          koydunuz.
        </p>
        <div className="ikili">
          <div className="kart kart--tint ikili__h">
            <p className="xs">Ayda cebinize giren nakit</p>
            <p className="ikili__v num">{fmtUsd(u.nakitAkisiAylik)}</p>
          </div>
          <div className="kart kart--wash ikili__h">
            <p className="xs">Ayda biriken anapara</p>
            <p className="ikili__v ikili__v--amber num">
              {fmtUsd(u.anaparaAylikIlkYil)}
            </p>
          </div>
        </div>
        <p className="xs pano__dip">
          {fmtUsd(u.kira)} kira − {fmtUsd(u.isletmeAylik)} işletme −{" "}
          {fmtUsd(u.taksit)} taksit. Anapara ilk 12 ayın ortalaması.
        </p>
      </div>

      <div>
        <div className="pano__ustbas">
          <h4 className="h3">Brüt getiri bir reklamdır.</h4>
          <p className="xs">{fmtUsd(KANONIK.fiyat)} · peşin · yıllık</p>
        </div>
        <div className="kart defter">
          <div className="defter__s defter__s--bas">
            <span>Brüt kira geliri</span>
            <span className="num">{fmtUsd(net.brutYillik)}</span>
          </div>
          {g.map((x) => (
            <div className="defter__s" key={x.etiket}>
              <span>
                {x.etiket}
                {x.not ? <em className="chip">{x.not}</em> : null}
              </span>
              <span className="num defter__eksi">−{fmtUsd(x.tutarYillik)}</span>
            </div>
          ))}
          <div className="defter__s defter__s--net">
            <span>Net nakit akışı</span>
            <span className="num">
              {fmtUsd(net.netYillik)} · {fmtYuzde(net.netGetiri * 100, 2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 02 · 30 yıl ──────────────────────────────────────────── */

export function OtuzYil() {
  const son = vadeSonu();
  const km = zamanCizgisi();

  return (
    <div className="pano">
      <h3 className="h2 pano__h">Otuz yıl sonra ev sizin. Parasını kiracınız ödedi.</h3>
      <p className="lede pano__lede">
        Peşinatı siz koyuyorsunuz; geri kalanını her ay bir başkası kapatıyor.
      </p>

      <ol className="tasar">
        {km.map((k) => (
          <li className="tasar__h" key={k.yil}>
            <p className="mini">{k.yil}. yıl</p>
            <p className="tasar__v num">{fmtYuzde(k.ozkaynakOrani * 100)}</p>
            <p className="xs">kapandı</p>
            <div className="tasar__ray" aria-hidden="true">
              <span style={{ width: `${k.ozkaynakOrani * 100}%` }} />
            </div>
            <p className="xs">Kalan kredi {fmtUsd(k.kalanKredi)}</p>
          </li>
        ))}
      </ol>

      <div className="ucler">
        <div className="kart kart--tint ucler__h">
          <p className="xs">Sizin koyduğunuz</p>
          <p className="ucler__v num">{fmtUsd(son.sizinKoydugunuz)}</p>
        </div>
        <div className="kart kart--wash ucler__h">
          <p className="xs">Kiracının kapattığı</p>
          <p className="ucler__v ucler__v--amber num">
            {fmtUsd(son.kiracininKapattigi)}
          </p>
        </div>
        <div className="kart kart--tint ucler__h">
          <p className="xs">Elinizde kalan</p>
          <p className="ucler__v">Borçsuz ev</p>
        </div>
      </div>

      <p className="xs pano__dip">
        Bu tabloda kira 30 yıl boyunca hiç artmıyor: gerçekçi değil, kasten
        kötümser. Değer artışı da varsayılmıyor — vade sonundaki ev bugünkü
        fiyatıyla {fmtUsd(son.borcsuzEv)}.
      </p>
    </div>
  );
}

/* ── 05 · Riskler ve sorular ──────────────────────────────── */

const RISKLER: [string, string][] = [
  [
    "Kaldıraç iki yönlü çalışır",
    "Kredili alımda nakit akışı incedir. Boşluk uzarsa ya da büyük bir onarım çıkarsa o ay taksiti siz ödersiniz.",
  ],
  [
    "Bu bir nakit akışı yatırımı, değer artışı yatırımı değil",
    "Orta kuşak şehirlerde fiyat artışı sahil metropollerinin gerisinde kalır. Eviniz her ay kira üretir; birkaç yılda katlanmasını beklemeyin.",
  ],
  [
    "Likit değildir",
    "Nakde dönmek tipik olarak 1–3 ay sürer ve satış masrafı yaklaşık %6–8'dir. Yarın lazım olacak parayla girilecek bir yatırım değil.",
  ],
  [
    "Kur her iki yöne de işler",
    "Geliriniz dolar; bu bugünkü tabloda avantaj. Ancak TL dolara karşı değer kazanırsa TL cinsinden geliriniz azalır.",
  ],
  [
    "Eski yapı stoku, gerçek bakım gideri",
    "Bu bantta evlerin çoğu 1940–1980 arası. Çatı, ısıtma ve tesisat 5.000–15.000 $'lık kalemler olarak çıkabilir; %8 bakım payı bunun için ama tek yılda aşılabilir.",
  ],
  [
    "Kiracı riski gerçektir",
    "Bölgeleri tahliye süresi ve ev sahibi hakları güçlü eyaletlerden seçiyoruz, ama kötü bir kiracı birkaç aylık gelir ve avukat masrafı kaybettirebilir.",
  ],
  [
    "İki ülkede beyan yükümlülüğü",
    "Hem ABD'de hem Türkiye'de beyan gerekir. Bu işi biz yürütüyoruz, ancak yükümlülük hukuken size aittir ve süreklidir.",
  ],
];

const SORULAR: [string, string][] = [
  [
    "Vefat edersem ailem ne olacak?",
    "ABD'de yerleşik olmayan yabancıların veraset vergisi istisnası yalnızca 60.000 dolar. Evi doğrudan kendi adınıza alırsanız mirasçılarınız bu eşiğin üstü için ciddi bir vergiyle karşılaşabilir. Doğru yapı — LLC ya da uygun bir mülkiyet düzeni — bunu baştan çözer.",
  ],
  [
    "Amerika'ya gitmem gerekiyor mu?",
    "Hayır. Vergi numarası, teklif, ev denetimi, escrow ve tapu kapanışı dahil süreç tamamen uzaktan yürüyor; imzalar elektronik.",
  ],
  [
    "Yabancı olarak gerçekten kredi alabilir miyim?",
    "Evet. Bu programlar Türkiye'deki gelirinize ya da ABD kredi geçmişinize bakmıyor — evin kira gelirinin taksiti karşılayıp karşılamadığına bakıyor. Peşinat %25–30.",
  ],
  [
    "Kiracı ödemezse ne oluyor?",
    "Önce tahsilat takibi ve ödeme planı; çözülmezse yasal tahliye sürecini biz yürütüyoruz. Hesaptaki %8 boşluk payı tam olarak bu ihtimal için ayrılmış.",
  ],
  [
    "Parayı nasıl göndereceğim, Türkiye'de beyan gerekir mi?",
    "Transfer bağımsız bir escrow şirketinin hesabına yapılır — bizim hesabımıza değil. Türkiye'de kira gelirinizi beyan eder, çifte vergilendirme anlaşmasıyla ABD'de ödediğinizi mahsup edersiniz. Bu beyanı sizin adınıza biz hazırlıyoruz.",
  ],
];

export function Riskler() {
  return (
    <div className="pano">
      <h3 className="h2 pano__h">Ters gidebilecek şeyler.</h3>
      <p className="lede pano__lede">
        Bu bölümü rakiplerimizde bulamazsınız. Bulunmaması, risklerin yok olduğu
        anlamına gelmiyor — sadece söylenmediği anlamına geliyor.
      </p>

      <ul className="riskler">
        {RISKLER.map(([b, a]) => (
          <li className="kart risk" key={b}>
            <p className="h3 risk__b">{b}</p>
            <p className="sm">{a}</p>
          </li>
        ))}
      </ul>

      <h4 className="h3 pano__ara">Sorulmayan ama sorulması gereken sorular</h4>
      <div className="sss">
        {SORULAR.map(([s, c], i) => (
          <details className="kart sss__h" key={s} open={i === 0}>
            <summary>
              <span>{s}</span>
              <i aria-hidden="true" />
            </summary>
            <p className="sm">{c}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ── 06 · Karşılaştırma ───────────────────────────────────── */

export function Karsilastirma() {
  const net = CANLI.net;
  const t = CANLI.tr;
  const u = CANLI.us;

  const satir: [string, string, string, string, string, boolean?][] = [
    [
      "Yıllık net nakit getiri",
      "%5,6 · TL",
      "Yok",
      "%2–3 · USD",
      `${fmtYuzde(net.netGetiri * 100, 2)} · USD`,
    ],
    [
      "Kredi kullanılabilirliği",
      `Efektif ${fmtYuzde(t.efektifYillik * 100)} faiz`,
      "—",
      "—",
      "Yıllık %7,25",
    ],
    [
      "Kira, taksiti karşılıyor mu",
      `Hayır · ${fmtOran(t.oran)}`,
      "—",
      "—",
      `Evet · ${fmtOran(u.oran)}`,
    ],
    ["Reel değer koruması", "Zayıf · −%5,8", "Güçlü", "Orta", "Güçlü"],
    ["Yönetim yükü", "Sizde", "Yok", "Yok", "Bizde"],
    ["Likidite", "Düşük", "Yüksek", "Yüksek", "Düşük–orta", true],
    ["Varlığın bulunduğu hukuk", "Türkiye", "Kasanız", "Türk bankası", "ABD"],
  ];

  return (
    <div className="pano">
      <h3 className="h2 pano__h">
        Gerçek rakibimiz Amerika&apos;daki başka bir ev değil.
      </h3>
      <p className="lede pano__lede">
        Elinizdeki para bugün dört yerden birine gidiyor. Dördünü de aynı tabloya
        koyduk.
      </p>

      {/* mobilde yığın kart, masaüstünde tek başlıklı tablo — yatay kaydırma yok.
          Masaüstünde hücre etiketleri görsel olarak gizlenir (erişilebilirlik
          ağacında kalır), üstteki başlık şeridi onların yerini alır. */}
      <div className="kars">
        <div className="kars__bas" aria-hidden="true">
          <span />
          <span className="xs">İstanbul&apos;da daire</span>
          <span className="xs">Altın</span>
          <span className="xs">Dolar mevduat</span>
          <span className="xs kars__basbiz">Dolarhane</span>
        </div>
        {satir.map(([olcut, ist, altin, mev, biz, aleyhte]) => (
          <div className="kart kars__h" key={olcut}>
            <p className="kars__olcut">{olcut}</p>
            <dl className="kars__ler">
              <div>
                <dt className="xs">İstanbul&apos;da daire</dt>
                <dd>{ist}</dd>
              </div>
              <div>
                <dt className="xs">Altın</dt>
                <dd>{altin}</dd>
              </div>
              <div>
                <dt className="xs">Dolar mevduat</dt>
                <dd>{mev}</dd>
              </div>
              <div className={aleyhte ? "kars__biz kars__biz--aleyhte" : "kars__biz"}>
                <dt className="xs">Dolarhane</dt>
                <dd>{biz}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <p className="xs pano__dip">
        Likidite satırı bizim aleyhimize; o yüzden kazanç rengiyle değil nötr
        gösteriliyor.
      </p>
    </div>
  );
}
