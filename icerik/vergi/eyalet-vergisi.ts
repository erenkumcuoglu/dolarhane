import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const eyaletVergisi: Blok[] = [
  {
    t: "p",
    metin:
      "ABD'de vergi **tek katmanlı değil.** Federal katmanın üstüne " +
      "eyalet, bazı yerlerde de şehir katmanı biniyor. Kira geliriniz " +
      "mülkün bulunduğu eyalette doğduğu için, o eyaletin gelir vergisi " +
      "varsa **orada da beyan** vermeniz gerekebiliyor.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Üç ayrı vergi, sık karıştırılıyor" },
  {
    t: "tablo",
    basliklar: ["Vergi", "Kim alıyor", "Neyin üzerinden"],
    satirlar: [
      ["Federal gelir vergisi", "IRS", "Net kira geliri (net yöntemi seçildiyse)"],
      [
        "**Eyalet gelir vergisi**",
        "Mülkün bulunduğu eyalet",
        "Aynı gelir — ama eyaletin kendi kuralıyla",
      ],
      [
        "Emlak vergisi",
        "İlçe / belediye",
        "**Gelirden bağımsız** — evin değeri üzerinden, her yıl",
      ],
    ],
    vurgu: [1],
    not:
      "Üçüncü satır ayrı bir konu ve karıştırılmamalı: emlak vergisi " +
      "kâr etseniz de etmeseniz de ödeniyor. İlk iki satır ise gelir " +
      "üzerinden ve birbirinin üstüne biniyor.",
  },

  { t: "h", metin: "Her eyalette yok" },
  {
    t: "p",
    metin:
      "Bazı eyaletlerde kişisel gelir vergisi hiç yok, bazılarında sabit " +
      "oranlı, bazılarında kademeli. Bu, aynı kirayı getiren iki evin " +
      "net getirisini **bulundukları eyalete göre** farklılaştırıyor — " +
      "ve bu fark hiçbir brüt getiri tablosunda görünmüyor.",
  },
  {
    t: "liste",
    maddeler: [
      "Eyaletin kişisel gelir vergisi var mı, yok mu.",
      "Varsa yerleşik olmayanlar için ayrı bir beyanname isteniyor mu.",
      "Beyan alt sınırı var mı — düşük gelirde beyan gerekmeyebiliyor.",
      "Şehir ya da yerel düzeyde ek bir gelir vergisi var mı.",
      "Eyalette ödenen vergi federal beyanda indirilebiliyor mu.",
    ],
  },
  {
    t: "not",
    baslik: "Bu sayfa eyalet adı ve oran vermiyor",
    metin:
      "Oranlar ve eşikler eyaletten eyalete, yıldan yıla değişiyor; " +
      "listelenen bir tablo yayınlandığı gün eskimeye başlıyor. " +
      "**Faaliyet bölgemizin kendi rakamları ilk görüşmede, yazılı " +
      "olarak veriliyor** ve hesap tablosuna dahil ediliyor. Karar " +
      "aşamasında muhasebeciyle teyit edilmesi gereken kalem budur.",
  },

  { t: "h", metin: "Neden alım kararında sorulmalı" },
  {
    t: "p",
    metin:
      "Emlak vergisi ve eyalet gelir vergisi birlikte, aynı kirayı " +
      "getiren iki ev arasında **net getiriyi puanlarla** ayırabiliyor. " +
      "Bir evi değerlendirirken sorulacak soru “kira ne kadar” değil, " +
      "“bu eyalette **bu kiradan geriye ne kalıyor**”.",
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "IRS · Publication 519, U.S. Tax Guide for Aliens — federal katman; eyalet vergisi federal beyandan ayrıdır",
        url: "https://www.irs.gov/publications/p519",
      },
      {
        metin:
          "Eyalet gelir vergisi kuralları ilgili eyaletin kendi vergi idaresi tarafından belirlenir; tek bir ABD kaynağı yoktur.",
      },
      {
        metin:
          "Emlak vergisi oranı ilçe düzeyinde belirlenir; modeldeki oran hesap sayfasında yazılıdır.",
      },
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "İki ayrı beyan mı vereceğim?",
        c:
          "Eyaletin gelir vergisi varsa ve beyan eşiğini aşıyorsanız " +
          "evet: federal beyan ayrı, eyalet beyanı ayrı. İkisini de " +
          "aynı muhasebeci hazırlıyor.",
      },
      {
        s: "Eyalette ödediğim vergiyi Türkiye'de mahsup edebilir miyim?",
        c:
          "Çifte vergilendirmeyi önleme anlaşması kapsamında ABD'de " +
          "ödenen vergi Türkiye'de mahsup ediliyor. Eyalet vergisinin " +
          "bu kapsama nasıl girdiği durumunuza bağlı — mali " +
          "müşavirinize sorun.",
      },
      {
        s: "Gelir vergisi olmayan bir eyalet daha mı iyi?",
        c:
          "Tek başına belirleyici değil. Gelir vergisi olmayan " +
          "eyaletlerin bir kısmı bunu daha yüksek emlak vergisiyle " +
          "dengeliyor. Bakılacak şey tek bir oran değil, evin toplam " +
          "gider tablosu.",
      },
    ],
  },
];
