/**
 * İÇERİK KAYIT DEFTERİ — bilgi mimarisinin tek kaynağı.
 *
 * Rota, sitemap, breadcrumb, küme listesi ve JSON-LD hepsi buradan üretilir.
 * Bir yazı eklemek = buraya bir kayıt + `icerik/<kume>/<slug>.ts` dosyası.
 * Elle yazılan URL yok; elle tutulan sitemap yok.
 *
 * Karar dayanağı: SEO-GEO-PLAN.md §11 (URL taksonomisi) ve
 * VERI-TAKVIMI.md §3.5 (tazelik kademeleri).
 */

/* ── Kümeler ─────────────────────────────────────────────────────
   Konu klasörleri KÖKTE, maksimum iki seviye. `bilgi-bankasi` gibi
   bir sarmalayıcı bilinçli olarak YOK: navigasyon etiketi, konu değil —
   kimse aramıyor, crawler'a anlam taşımıyor, her URL'ye boş segment
   ekliyor. Klasörün varlık sebebi ise gerçek: breadcrumb, kümeleme
   sinyali ve Search Console'da küme bazında performans ölçümü. */
export const KUME_SIRASI = [
  "getiri",
  "vergi",
  "surec",
  "guven",
  "karsilastir",
  "araclar",
  "endeks",
] as const;

export type KumeAnahtari = (typeof KUME_SIRASI)[number];

/** Tazelik kademesi — VERI-TAKVIMI.md §3.5. Tarihin gösterilip
 *  gösterilmeyeceğini bu belirler, yazarın tercihi değil. */
export type Tazelik =
  /** Veriye bağlı, kaynağın ritminde güncelleniyor. Görünür tarih + dateModified. */
  | "canli"
  /** Eşiğe bağlı, periyodik denetleniyor. Değiştiyse "güncellendi", değişmediyse "gözden geçirildi". */
  | "denetim"
  /** Mekanizma içeriği. TARİH GÖSTERİLMEZ — tazelik bu sorgulara etki etmiyor,
   *  tarih yalnızca çürüme riski yaratıyor. */
  | "evergreen"
  /** Doğduğu tarihte donan aylık bülten. Bir daha güncellenmiyor. */
  | "bulten";

export type Kume = {
  slug: KumeAnahtari;
  /** Breadcrumb ve navigasyonda görünen kısa ad. */
  ad: string;
  /** Küme (pillar) sayfasının H1'i. */
  baslik: string;
  /** Pillar özeti ve meta description. */
  ozet: string;
};

export const KUMELER: Record<KumeAnahtari, Kume> = {
  getiri: {
    slug: "getiri",
    ad: "Getiri",
    baslik: "Getiri mekaniği",
    ozet:
      "Kira çarpanı, amortisman, cap rate, DSCR ve nakit akışı — bir evin " +
      "gerçekten ne kazandırdığını hesaplamanın yolu. Brüt değil net.",
  },
  vergi: {
    slug: "vergi",
    ad: "Vergi",
    baslik: "Vergi ve hukuk",
    ozet:
      "ABD ve Türkiye tarafı: ITIN, 1040-NR, FIRPTA, veraset vergisi istisnası, " +
      "yurt dışı kira gelirinin beyanı.",
  },
  surec: {
    slug: "surec",
    ad: "Süreç",
    baslik: "Süreç ve uzaktan sahiplik",
    ozet:
      "Evi görmeden almak, uzaktan tapu kapanışı, escrow, title insurance, " +
      "kiracı yönetimi ve tahsilat — işin fiilen nasıl yürüdüğü.",
  },
  guven: {
    slug: "guven",
    ad: "Güven",
    baslik: "Güven ve şüphe",
    ozet:
      "Güvenli mi, para nasıl gidiyor, tapu kimin adına, ne ters gidebilir — " +
      "aleyhimize olan cevaplar dahil.",
  },
  karsilastir: {
    slug: "karsilastir",
    ad: "Karşılaştırma",
    baslik: "Destinasyon karşılaştırması",
    ozet:
      "ABD, Dubai, Yunanistan ve diğerleri. Oturum mu getiri mi — " +
      "hangi soruyu sorduğunuz cevabı değiştiriyor.",
  },
  araclar: {
    slug: "araclar",
    ad: "Araçlar",
    baslik: "Hesaplayıcılar",
    ozet:
      "Kirayla karşılama oranı, net nakit akışı, amortisman, DSCR. " +
      "Varsayımlar açık, girdiler sizin.",
  },
  endeks: {
    slug: "endeks",
    ad: "Endeks",
    baslik: "Canlı veri",
    ozet:
      "Türklerin yurt dışı gayrimenkul alımı ve getiri endeksleri. " +
      "Kaynağı ve metodolojisi açık, aylık güncelleniyor.",
  },
};

/* ── Yazılar ─────────────────────────────────────────────────── */

export type Yazi = {
  slug: string;
  kume: KumeAnahtari;
  baslik: string;
  /** Meta description ve küme listesinde görünen özet. Tek cümle,
   *  sorunun net cevabı — SEO-GEO-PLAN §8.2 "alıntılanabilir birim". */
  ozet: string;
  tazelik: Tazelik;
  /** ISO tarih. `evergreen` kademesinde YAZILMAZ ve gösterilmez. */
  guncelleme?: string;
  /** Hangi veri serisine bağlı. Seri hareket ettiğinde bu sayfa güncellenir,
   *  bağlı olmadığı seri hareket ettiğinde DOKUNULMAZ. VERI-TAKVIMI §3.5. */
  veriBagi?: string[];
  /** E-E-A-T künyesi — SEO-GEO-PLAN §7. Boşsa gösterilmez, uydurulmaz. */
  yazar?: string;
  gozdenGeciren?: string;
  /** Yalnız "yayin" olanlar rota ve sitemap üretir. Taslaklar veri olarak durur. */
  durum: "taslak" | "yayin";
};

/**
 * Yayın defteri.
 *
 * NOT — para sayfaları burada DEĞİL: `/amerikadan-ev-almak`,
 * `/dolarla-kira`, `/yurt-disinda-ev-almak` ve `/ev-kalite-cercevesi`
 * kökte durur ve kendi `app/<slug>/page.tsx` dosyalarını alır.
 * Kökte dinamik rota açmıyoruz — `/hesap` ve `/v2` gibi mevcut
 * statik rotaları gölgeleme riski var.
 */
export const YAZILAR: Yazi[] = [
  {
    slug: "kira-carpani",
    kume: "getiri",
    baslik: "Kira çarpanı nedir, nasıl hesaplanır",
    ozet:
      "Kira çarpanı bir evin fiyatının yıllık kirasına bölünmesidir ve kendini " +
      "kaç yılda ödeyeceğini söyler. Asıl soru çarpanın kaç olduğu değil, " +
      "hangi kirayla hesaplandığıdır.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "evi-gormeden-ev-almak",
    kume: "surec",
    baslik: "Evi görmeden ev almak",
    ozet:
      "Asıl soru görmeden alınır mı değil; sizin gözünüzün yerine ne geçtiği " +
      "ve o gözlerin kimin için çalıştığı. Üç bağımsız inceleme, neyi " +
      "gördükleri ve nerede kör oldukları.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "kiraci-nasil-bulunuyor",
    kume: "surec",
    baslik: "Kiracı nasıl bulunuyor",
    ozet:
      "Kiracıyı yönetim şirketi buluyor, siz kriterleri onaylıyorsunuz. " +
      "Eleme nasıl yapılır, ne kadar sürer, yerleştirme ücreti nedir ve " +
      "yasa gereği neyi seçemezsiniz.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "kira-tahsilati",
    kume: "surec",
    baslik: "Kira tahsilatı nasıl oluyor",
    ozet:
      "Kira kiracıdan yönetim şirketine, oradan ABD hesabınıza geçer. " +
      "Aradaki her adım aylık raporda satır satır görünür — tahsilat " +
      "güvenilen değil denetlenen bir süreçtir.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "ev-bos-kalirsa",
    kume: "surec",
    baslik: "Ev boş kalırsa ne oluyor",
    ozet:
      "Boşluk bir aksilik değil, öngörülebilir bir gider kalemi. Boşlukta " +
      "hangi giderler durur hangileri devam eder, ve devir neden boşluktan " +
      "pahalıdır.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "tamir-masrafini-kim-oduyor",
    kume: "surec",
    baslik: "Tamir masrafını kim ödüyor",
    ozet:
      "Yapısal ve sistemsel olan ev sahibine, kullanımdan doğan kiracıya " +
      "aittir. Onay eşiği, acil işler, ve bakım ile büyük onarımın neden " +
      "farklı bütçelendiği.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "amerikada-tahliye-sureci",
    kume: "surec",
    baslik: "Amerika'da tahliye süreci",
    ozet:
      "Tahliye mahkeme işidir; ev sahibinin kendi başına çıkarma yetkisi " +
      "yoktur. Adımlar, gerçek maliyet kalemleri, ve mahkemeye gitmeden " +
      "kapatmanın üç yolu.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "property-management-sozlesmesi",
    kume: "surec",
    baslik: "Yönetim sözleşmesinde nelere bakılır",
    ozet:
      "Uzaktan ev sahipliğinde getirinizi belirleyen tek belge tapu değil, " +
      "yönetim sözleşmesidir. Ücret yapısı, okumadan imzalanmayacak altı " +
      "madde ve teşvik testi.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "uzaktan-tapu-kapanisi",
    kume: "surec",
    baslik: "Uzaktan tapu kapanışı",
    ozet:
      "Kapanış için Amerika'da bulunmanız gerekmiyor. İmzanın beş yolu, " +
      "ve uzaktan alımın en büyük pratik riski: havale talimatı " +
      "dolandırıcılığı.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "escrow-nedir",
    kume: "surec",
    baslik: "Escrow nedir, ne işe yarar",
    ozet:
      "Escrow alıcı ile satıcı arasında duran tarafsız üçüncü taraftır. " +
      "Çözdüğü sorun basit: kimse diğerine güvenmek zorunda kalmıyor.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "title-insurance",
    kume: "surec",
    baslik: "Title insurance nedir",
    ozet:
      "Tapunuza geçmişten gelebilecek hak iddialarına karşı tek seferlik " +
      "primle alınan sigorta. Kredi veren poliçesi bankayı korur — sizi " +
      "koruyan malik poliçesi ayrıca alınır.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "closing-costs",
    kume: "surec",
    baslik: "Kapanış masrafları",
    ozet:
      "Fiyatın üstüne gelen tek seferlik kalemler. Getiri hesabında en sık " +
      "unutulan şey — unutulunca yatırılan sermaye küçük, getiri yüksek " +
      "görünüyor.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "amerikadan-ev-almak-guvenli-mi",
    kume: "guven",
    baslik: "Amerika'dan ev almak güvenli mi",
    ozet:
      "Tek soru değil, iki ayrı soru: hukuki güvenlik yüksektir, ticari " +
      "güvenlik kiminle çalıştığınıza bağlıdır. İkisini ayırmadan verilen " +
      "cevap yanıltıcı olur.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "neden-bize-henuz-guvenmemelisiniz",
    kume: "guven",
    baslik: "Neden bize henüz güvenmemelisiniz",
    ozet:
      "Portföyümüzde ev yok ve kimseye ev satmadık. Elimizde olmayan şey " +
      "deneyim, olan şey yöntem şeffaflığı — ve bize ne zaman " +
      "güvenebileceğinizin ölçütü.",
    tazelik: "denetim",
    guncelleme: "2026-09-13",
    durum: "yayin",
  },
  {
    slug: "dolandiricilik-nasil-anlasilir",
    kume: "guven",
    baslik: "Dolandırıcılık nasıl anlaşılır",
    ozet:
      "Dolandırıcılık genellikle sahte bir ev üzerinden değil, gerçek bir " +
      "evin etrafına kurulan yanlış bir süreç üzerinden yürür. Durdurucu " +
      "sinyaller ve kendiniz doğrulayabileceğiniz dört şey.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "tapu-kimin-adina",
    kume: "guven",
    baslik: "Tapu kimin adına çıkıyor",
    ozet:
      "Kendi adınıza, LLC üzerinden ya da ortak mülkiyet. Karar kapanıştan " +
      "önce verilir, sonradan değiştirmek yeni bir devir demektir. Tapuyu " +
      "ilçe kütüğünden kendiniz doğrulayabilirsiniz.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "parayi-nasil-gonderiyorum",
    kume: "guven",
    baslik: "Parayı nasıl gönderiyorum",
    ozet:
      "Bankadan bankaya, kapanış şirketinin emanet hesabına. Akışın " +
      "tamamı, Türkiye tarafında istenen belgeler, ve havale talimatının " +
      "neden asla e-postadan doğrulanmadığı.",
    tazelik: "denetim",
    guncelleme: "2026-09-13",
    durum: "yayin",
  },
  {
    slug: "yurt-disi-ev-yatirimi-riskleri",
    kume: "guven",
    baslik: "Yurt dışı ev yatırımının riskleri",
    ozet:
      "Likidite ve düşük değer artışı teknikle çözülmeyen koşullar, " +
      "yönetilecek risk değil. Bizim iş modelimizin aleyhine olan üç şey " +
      "dahil.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "kirayla-karsilama-orani",
    kume: "getiri",
    baslik: "Kirayla karşılama oranı",
    ozet:
      "Kira, kredi taksitinin kaç katı? Bir bölme işlemi, ve evin kendi " +
      "borcunu ödeyip ödemediğini söyleyen tek sayı. Ama tek başına " +
      "yeterli değil — neyi görmediği de yazılı.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "getiri-ve-deger-artisi-takasi",
    kume: "getiri",
    baslik: "Getiri ile değer artışı arasındaki takas",
    ozet:
      "Yüksek kira getirisi, değer artışının düşük olduğu yerlerde çıkar. " +
      "Bu tesadüf değil, aritmetiğin zorunlu sonucu — ve bilerek yapılan " +
      "bir takas.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "cap-rate-nedir",
    kume: "getiri",
    baslik: "Cap rate nedir",
    ozet:
      "Mülkün kredisiz getirisi: net işletme geliri bölü fiyat. " +
      "Mülkleri finansmandan arındırılmış halde karşılaştırmaya yarar, " +
      "cebinize ne geçeceğini söylemez.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "dscr-nedir",
    kume: "getiri",
    baslik: "DSCR nedir, neden Türk alıcı için önemli",
    ozet:
      "Mülkün gelirinin borç ödemesini karşılama oranı. ABD'de geliriniz " +
      "ve kredi geçmişiniz yokken kredi kullanmanın yolu bu metrikten " +
      "geçiyor.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "yuzde-1-kurali",
    kume: "getiri",
    baslik: "%1 kuralı",
    ozet:
      "Aylık kira, fiyatın en az yüzde biri olmalı. Otuz saniyelik bir " +
      "ön eleme aracı — karar aracı değil. Neyi hiç görmediği önemli.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "nakit-akisi-nasil-hesaplanir",
    kume: "getiri",
    baslik: "Nakit akışı nasıl hesaplanır",
    ozet:
      "Brüt kiradan başlayıp cebinize kalana inen şelale. Her basamakta " +
      "bir kalem düşülür; atlanan her basamak sonucu olduğundan iyi " +
      "gösterir.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "getiri-tuzaklari",
    kume: "getiri",
    baslik: "Getiri sunumundaki sekiz tuzak",
    ozet:
      "Bir getiri rakamı yanlış olmadan da yanıltıcı olabilir. Sekiz " +
      "sunum biçimi, her birinin söylemediği şey ve sorulması gereken " +
      "soru.",
    tazelik: "evergreen",
    durum: "yayin",
  },
  {
    slug: "brut-vs-net-getiri",
    kume: "getiri",
    baslik: "Ucuz ev tuzağı: brüt ile net arasındaki fark",
    ozet:
      "Brütte ucuz ev önde, nette geride. Sebep fiyat değil mahalle " +
      "sınıfı — ve farkı açan altı kalemin hiçbiri brüt hesapta yok.",
    tazelik: "evergreen",
    // TASLAK: C/D varsayımları kalibre edilmeden sayısal tablo
    // yayınlanmıyor. Bkz. EV-KALITE-CERCEVESI.md §5.
    durum: "taslak",
  },
];

/* ── Türetilmiş yardımcılar ──────────────────────────────────── */

export const yayindakiler = (): Yazi[] =>
  YAZILAR.filter((y) => y.durum === "yayin");

export const kumeninYazilari = (k: KumeAnahtari): Yazi[] =>
  yayindakiler().filter((y) => y.kume === k);

/** Kayıtta en az bir yayın yazısı olan kümeler. Boş küme sayfası açılmaz —
 *  ince içerik ve öksüz rota üretmesin. */
export const doluKumeler = (): Kume[] =>
  KUME_SIRASI.map((k) => KUMELER[k]).filter(
    (k) => kumeninYazilari(k.slug).length > 0,
  );

export const yaziYolu = (y: Pick<Yazi, "kume" | "slug">): string =>
  `/${y.kume}/${y.slug}/`;

export const kumeYolu = (k: KumeAnahtari): string => `/${k}/`;

export const yaziBul = (kume: string, slug: string): Yazi | undefined =>
  yayindakiler().find((y) => y.kume === kume && y.slug === slug);

/** Breadcrumb izi. Ana sayfa her zaman ilk halka. */
export type Kirinti = { ad: string; yol: string };

export const kirintiIzi = (y?: Yazi, k?: Kume): Kirinti[] => {
  const iz: Kirinti[] = [{ ad: "Dolarhane", yol: "/" }];
  const kume = k ?? (y ? KUMELER[y.kume] : undefined);
  if (kume) iz.push({ ad: kume.ad, yol: kumeYolu(kume.slug) });
  if (y) iz.push({ ad: y.baslik, yol: yaziYolu(y) });
  return iz;
};

/**
 * Tarih gösterilecek mi?
 * `evergreen` kademesinde kesinlikle hayır — bu bir yazar tercihi değil,
 * politika (VERI-TAKVIMI §3.5). Tarihe ihtiyacı olmayan içeriğe gönüllü
 * tarih koymak, kütüphaneyi kendi elinle çürütmektir.
 */
export const tarihGosterilir = (y: Yazi): boolean =>
  y.tazelik !== "evergreen" && Boolean(y.guncelleme);
