import type { Blok } from "@/lib/bloklar";

/** Aleyhimize olan sayfa. Markanın tonu burada en açık hali. */
export const yurtDisiEvYatirimiRiskleri: Blok[] = [
  {
    t: "p",
    metin:
      "Bu sayfa satış sayfası değil. Amerika'da kira getirisi için ev " +
      "almanın gerçek riskleri burada — bazıları bizim iş modelimizin " +
      "aleyhine.",
  },

  { t: "h", metin: "Yapısal riskler" },
  {
    t: "tablo",
    basliklar: ["Risk", "Gerçekte ne oluyor", "Azaltılır mı"],
    satirlar: [
      [
        "Likidite",
        "Gayrimenkul hızlı satılmaz. Acil paraya ihtiyacınız olursa aylar sürebilir ve aceleyle satmak fiyattan yer",
        "Hayır. Bu varlık sınıfının doğası. Acil ihtiyaç fonunuzu ayrı tutun",
      ],
      [
        "Değer artışı düşüklüğü",
        "Yüksek kira getirisi, değer artışının düşük olduğu yerlerde çıkar. [Nakit akışı alıyorsunuz, sermaye kazancı değil](/getiri/getiri-ve-deger-artisi-takasi/)",
        "Hayır — bu bir takas. Ama bilerek yapılırsa risk değil, tercih olur",
      ],
      [
        "Nüfus ve istihdam gerilemesi",
        "Kira talebinin dayandığı ekonomi zayıflarsa kira da mülk değeri de düşer",
        "Kısmen. Tek sektöre bağlı bölgelerden kaçınmak",
      ],
      [
        "Büyük onarım şoku",
        "Çatı ya da ısıtma sistemi beklenenden erken giderse bir yılın getirisi silinebilir",
        "Kısmen. [Rezerv ayırmak](/surec/tamir-masrafini-kim-oduyor/) ve inceleme raporunu ciddiye almak",
      ],
      [
        "Kiracı riski",
        "Ödememe, hasar, tahliye süresi. [Tahliye aylar sürebilir](/surec/amerikada-tahliye-sureci/) ve maliyeti [kaybedilen kiradır](/surec/ev-bos-kalirsa/)",
        "Kısmen. Eleme kriterlerini sıkı tutmak",
      ],
      [
        "Mesafe",
        "Sorunu kendiniz göremiyor, müdahale edemiyorsunuz. Aradaki her şey [yönetim şirketine](/surec/property-management-sozlesmesi/) bağlı",
        "Kısmen. Sözleşme ve raporlama disiplini",
      ],
    ],
    vurgu: [0, 1],
  },
  {
    t: "not",
    baslik: "Vurgulu iki satır azaltılamaz",
    metin:
      "Likidite ve değer artışı düşüklüğü tekniğle çözülmüyor. Bunlar " +
      "yönetilecek risk değil, **kabul edilecek koşul.** Kabul " +
      "edemiyorsanız bu varlık sınıfı size uygun değil ve bunu baştan " +
      "bilmek herkes için iyi.",
  },

  { t: "h", metin: "Mevzuat ve vergi riskleri" },
  {
    t: "liste",
    maddeler: [
      "**Veraset vergisi.** ABD'de yabancılar için istisna çok düşüktür ve ABD'deki gayrimenkul bu vergiye tabidir. Planlanmazsa mirasçılar için ciddi bir yük doğurur.",
      "**Emlak vergisi artışı.** Oran ilçe kararıyla değişebiliyor; mülk yeniden değerlenirse vergi de yükseliyor.",
      "**Vergi mevzuatı değişimi.** Hem ABD hem Türkiye tarafında kurallar değişebilir; bugünkü hesap yarının hesabı değil.",
      "**Sigorta maliyeti.** Bazı bölgelerde primler hızla artıyor ve [net getiriyi](/getiri/brut-vs-net-getiri/) aşındırıyor.",
    ],
  },

  { t: "h", metin: "Bizim iş modelimizin aleyhine olan üç şey" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Aracısız alınabilir.** Yerinde bir emlakçı ve bir yönetim şirketiyle doğrudan çalışmak mümkün. Aracı katmanı bir maliyet ve bunun farkındayız.",
      "**Türkiye'de de kira geliri elde edilebilir.** Getiri oranı düşük ama mesafe, kur ve mevzuat riski yok. Karar sadece orana bakarak verilmemeli.",
      "**Dolar geliri tek başına strateji değil.** Kur avantajı, kötü seçilmiş bir evin zayıf net getirisini kurtarmıyor.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "En büyük risk hangisi?",
        c:
          "Tek bir risk değil, bir kombinasyon: yanlış mahallede alınmış, " +
          "[brüt getirisine bakılarak seçilmiş](/getiri/getiri-tuzaklari/), rezerv ayrılmamış bir ev. " +
          "Bu üçü bir aradaysa kötü sonuç neredeyse kesindir.",
      },
      {
        s: "Kur riski var mı?",
        c:
          "Kira dolar cinsinden olduğu için TL karşısında bir koruma " +
          "sağlıyor. Ama tersi de doğru: giriş anındaki kur, dolar " +
          "cinsinden maliyetinizi belirliyor. Kurun yüksek olduğu bir anda " +
          "girmek, dolar getirisini değiştirmez ama TL cinsinden " +
          "maliyetinizi yükseltir.",
      },
      {
        s: "Ne kadar süre tutmayı planlamalıyım?",
        c:
          "[Alım ve satım masrafları](/surec/closing-costs/) tek seferlik ve önemli tutarda. Kısa " +
          "vadede satarsanız bu masraflar getiriyi yiyor. Bu varlık uzun " +
          "vade için mantıklı; kısa vadeli para için değil.",
      },
    ],
  },
];
