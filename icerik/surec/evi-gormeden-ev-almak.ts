import type { Blok } from "@/lib/bloklar";

/**
 * Kümenin amiral sayfası. Haritadaki en büyük tek boşluk: Türkçe'de bu
 * soruyu ciddi biçimde cevaplayan tek sayfa yok, çünkü satıcının işine
 * gelmiyor (RAKIP-HARITASI §3).
 *
 * Ton kuralı: alıcıyı silahlandır, kimseyi suçlama. Sayfa bizden
 * almayacak birine de yarıyor olmalı — yaramıyorsa yanlış yazılmıştır.
 * Mekanizma içeriği: evergreen, tarih gösterilmez.
 */
export const eviGormedenEvAlmak: Blok[] = [
  {
    t: "p",
    metin:
      "Asıl soru “görmeden alınır mı” değil. Alınıyor — Amerika'da " +
      "yatırım amaçlı ev alanların önemli bir kısmı evi hiç görmüyor, " +
      "çünkü ülkenin kendi içinde de uzaktan yatırım yaygın bir pratik. " +
      "Asıl soru şu: **sizin gözünüzün yerine ne geçiyor, ve o gözler " +
      "kimin için çalışıyor?**",
  },
  {
    t: "p",
    metin:
      "Bu sayfa o üç gözü, ne gördüklerini ve nerede kör olduklarını " +
      "anlatıyor. Kimden alırsanız alın işinize yarar.",
  },

  { t: "h", metin: "Yerinize bakan üç bağımsız göz" },
  {
    t: "p",
    metin:
      "Amerika'da işlemin standart parçası olan üç ayrı inceleme var. " +
      "Üçünün de ortak özelliği şu: **siz ödersiniz, dolayısıyla size karşı " +
      "sorumludurlar.** Satıcının ya da aracının size gönderdiği rapor bunların " +
      "yerine geçmez.",
  },
  {
    t: "tablo",
    basliklar: ["İnceleme", "Ne görür", "Kimin için çalışır"],
    satirlar: [
      [
        "Ev incelemesi (inspection)",
        "Çatı, tesisat, elektrik, ısıtma-soğutma, temel, su izi. Yüzlerce kalemlik yazılı rapor, fotoğraflı.",
        "Sizin için. Lisanslı ve bağımsız bir inspector'ı **siz** tutarsınız.",
      ],
      [
        "Değerleme (appraisal)",
        "Evin piyasa değeri. Yakın zamanda satılmış benzer evlerle karşılaştırma.",
        "Kredi kullanıyorsanız banka için — ama sonucu sizi de korur: fiyat şişkinse ortaya çıkar.",
      ],
      [
        "Tapu araştırması (title search)",
        "[Mülkiyet zinciri, ipotek, haciz, vergi borcu, komşu hak iddiası](/surec/title-insurance/).",
        "Sizin için. Sonucu [title insurance](/surec/title-insurance/) ile sigortalanır.",
      ],
    ],
    not:
      "Üçü de kapanıştan önce yapılır ve üçünün de raporu **size** teslim edilir. " +
      "Rapor size verilmiyorsa, o inceleme sizin için yapılmamış demektir.",
  },
  {
    t: "not",
    baslik: "Tek kural bu",
    metin:
      "Satıcının seçtiği ve satıcının ödediği bir incelemeyle yetinmeyin. " +
      "Kendi inspector'ınızı tutmak birkaç yüz dolarlık bir kalemdir ve " +
      "gördüğü tek bir çatı sorunu o parayı kat kat çıkarır. Bu, bizden " +
      "alsanız da geçerlidir.",
  },

  { t: "h", metin: "Fotoğraf ve video neyi göstermez" },
  {
    t: "p",
    metin:
      "Sanal tur iyi bir başlangıç ama sistematik olarak belirli şeyleri " +
      "gizler. Kamera bunları göstermez:",
  },
  {
    t: "liste",
    maddeler: [
      "**Çatının yaşı.** Çatı üstten fotoğraflanmaz; kalan ömrünü ancak inceleme raporu söyler.",
      "**Isıtma-soğutma sisteminin yaşı.** Cihazın üstündeki etiket okunmadan bilinmez ve değişim maliyeti büyük kalemdir.",
      "**Temel ve bodrum nemi.** Kuru bir günde çekilen video, yağmurda su alan bir bodrumu göstermez.",
      "**Tesisat ve elektrik.** Duvarın arkası kamerada yok.",
      "**Koku ve ses.** Rutubet, küf ve yol gürültüsü kayda girmez.",
      "**Mahalle.** Evin fotoğrafı mahallenin fotoğrafı değildir; sokağın ötesi kadraja alınmaz.",
    ],
  },
  {
    t: "p",
    metin:
      "Bunların hepsi inceleme raporunda vardır. Mahalle ise ayrı bir " +
      "iştir ve kamuya açık verilerle sizin de kontrol edebileceğiniz " +
      "bir şeydir — okul puanı, suç oranı, medyan gelir ve emlak vergisi " +
      "oranı adres bazında açıktır.",
  },

  { t: "h", metin: "Kirayı doğrulamak" },
  {
    t: "p",
    metin:
      "Görmeden alımda en çok abartılan rakam evin fiyatı değil, **kirasıdır.** " +
      "Fiyat tapuda kayıtlı ve doğrulanabilir; “bu ev şu kadar kira getirir” " +
      "cümlesi ise bir iddiadır.",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Ev şu anda kiralıysa **mevcut kira sözleşmesini** isteyin. Tutar, süre ve kiracının ödeme geçmişi orada yazılıdır.",
      "Boşsa, aynı mahallede benzer büyüklükteki evlerin **ilan edilmiş** kiralarına bakın — [iddia edilen değil, ilan edilen](/getiri/getiri-tuzaklari/).",
      "Bağımsız bir kira analizi isteyin. Satıcıdan ayrı bir taraf, bölgenin kira verisinden tahmin üretir.",
    ],
  },
  {
    t: "not",
    baslik: "Aleyhimize olan not",
    metin:
      "Kiralı satılan bir ev her zaman iyi haber değildir. Piyasanın üstünde " +
      "bir kirayla oturan kiracı, [sözleşme bitince çıkabilir](/surec/kiraci-nasil-bulunuyor/) ve ev gerçek " +
      "piyasa kirasına döner. Mevcut kirayı değil, **piyasa kirasını** " +
      "hesaba koyun.",
  },

  { t: "h", metin: "Geri dönebileceğiniz noktalar" },
  {
    t: "p",
    metin:
      "Amerika'daki alım sözleşmelerinde “şarta bağlılık” denen çıkış " +
      "kapıları vardır. Bunlar sözleşmeye yazılmazsa yoktur — sonradan " +
      "eklenemez.",
  },
  {
    t: "tablo",
    basliklar: ["Şart", "Ne sağlar", "Tipik süre"],
    satirlar: [
      [
        "İnceleme şartı",
        "Rapor kötü çıkarsa kapanıştan cayma ya da fiyat/tamir pazarlığı hakkı",
        "Sözleşmeden sonra birkaç gün ile iki hafta arası",
      ],
      [
        "Değerleme şartı",
        "Ev anlaşılan fiyatın altında değerlenirse cayma hakkı",
        "Kredi sürecine bağlı",
      ],
      [
        "Finansman şartı",
        "Kredi çıkmazsa [kapora](/surec/escrow-nedir/) yanmadan çıkma hakkı",
        "Kredi onayına bağlı",
      ],
      [
        "Tapu şartı",
        "Tapuda sorun çıkarsa cayma hakkı",
        "Title araştırması tamamlanana kadar",
      ],
    ],
    not:
      "Süreler eyalete, sözleşmeye ve piyasanın sıcaklığına göre değişir. " +
      "Rekabetin yüksek olduğu piyasalarda alıcılar bu şartlardan feragat " +
      "etmeye zorlanır — **görmeden alıyorsanız feragat etmeyin.**",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Evi görmeden almak yasal olarak sorunlu mu?",
        c:
          "Hayır. Amerika'da [kapanış çoğunlukla taraflar aynı odada olmadan](/surec/uzaktan-tapu-kapanisi/) " +
          "yapılır; imzalar noter ya da konsolosluk aracılığıyla uzaktan " +
          "atılabilir. Evi görmek yasal bir şart değil, ticari bir tercihtir.",
      },
      {
        s: "Sonradan gidip görebilir miyim?",
        c:
          "Evet, ama kiracı oturuyorsa haber vermeden giremezsiniz — kiracının " +
          "kullanım hakkı mülkiyetten ayrıdır ve ziyaret kurallara bağlıdır. " +
          "Ev sahibi olmanız evin kapısını istediğiniz an açabileceğiniz " +
          "anlamına gelmiyor.",
      },
      {
        s: "İnceleme raporunu anlayamazsam ne olur?",
        c:
          "Rapor teknik ama sonuç bölümü sade yazılır ve kalemler önem " +
          "sırasına dizilir. Ayrıca inspector'la telefonda konuşma hakkınız " +
          "var; raporu kendi ağzından açıklamasını isteyin.",
      },
      {
        s: "En sık yapılan hata ne?",
        c:
          "Satıcının gönderdiği rapor ve fotoğraflarla yetinmek. İkinci en " +
          "sık hata, iddia edilen kirayı piyasa kirası sanmak.",
      },
    ],
  },
];
