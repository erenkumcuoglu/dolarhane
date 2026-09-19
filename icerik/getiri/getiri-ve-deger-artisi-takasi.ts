import type { Blok } from "@/lib/bloklar";

/**
 * Kümenin entelektüel çekirdeği ve bize karşı argümanı bizim yazdığımız
 * sayfa. Coğrafya İLKE düzeyinde konuşuluyor, envanter düzeyinde değil
 * (SEO-GEO-PLAN §4.5, DESIGN.md kural 11).
 */
export const getiriVeDegerArtisiTakasi: Blok[] = [
  {
    t: "p",
    metin:
      "Gayrimenkulde iki türlü kazanılır: **kira** ve **değer artışı.** " +
      "Ve bu ikisi aynı yerde birlikte yüksek olmuyor. Yüksek kira " +
      "getirisi, değer artışının düşük olduğu yerlerde çıkıyor — bu bir " +
      "tesadüf değil, aritmetiğin zorunlu sonucu.",
  },

  { t: "h", metin: "Neden zorunlu" },
  {
    t: "p",
    metin:
      "Kira getirisi bir kesirdir: kira bölü fiyat. Bir bölgede fiyatların " +
      "hızlı artmasını bekleyen alıcılar varsa, o beklenti **bugünkü " +
      "fiyata** yansır. Payda büyür, getiri düşer.",
  },
  {
    t: "p",
    metin:
      "Tersi de doğru: kimsenin fiyat artışı beklemediği bir yerde fiyat " +
      "düşük kalır, kira ise yerel gelire bağlı olduğu için aynı ölçüde " +
      "düşmez. Payda küçük, getiri yüksek.",
  },
  {
    t: "tablo",
    basliklar: ["", "Değer artışı odaklı piyasa", "Nakit akışı odaklı piyasa"],
    satirlar: [
      ["Fiyat", "Yüksek", "Düşük"],
      ["[Kira/fiyat oranı](/getiri/kira-carpani/)", "Düşük", "Yüksek"],
      ["[Aylık nakit akışı](/getiri/nakit-akisi-nasil-hesaplanir/)", "Genelde negatif ya da ince", "Pozitif"],
      ["Kazanç nereden", "Satıştaki fiyat farkından", "Her ayki kiradan"],
      ["Ne zaman paraya döner", "Sattığınızda", "Her ay"],
      ["Ana risk", "Beklenen artış gerçekleşmezse", "Yerel ekonomi zayıflarsa"],
    ],
    not:
      "İki sütun da meşru stratejidir. Yanlış olan, birini alıp diğerinin " +
      "sonuçlarını beklemek.",
  },

  { t: "h", metin: "Bu bir takas, bir kusur değil" },
  {
    t: "p",
    metin:
      "Nakit akışı odaklı bir mülk alıyorsanız, **değer artışından " +
      "vazgeçiyorsunuz** ve bunu bilerek yapıyorsunuz. Karşılığında her " +
      "ay eline para geçen bir varlık alıyorsunuz.",
  },
  {
    t: "p",
    metin:
      "Sorun, bu takasın söylenmemesi. Yüksek kira getirisini reklam edip " +
      "değer artışını da ima eden bir sunum, iki dünyanın iyi yanlarını " +
      "aynı anda vaat ediyor demektir — ve o ikisi aynı mülkte bir arada " +
      "durmuyor.",
  },
  {
    t: "not",
    baslik: "Aleyhimize olan not",
    metin:
      "Nakit akışı odaklı bölgelerde mülk değerinin uzun vadede yatay " +
      "kalması, hatta reel olarak gerilemesi mümkündür. Bunu bir ihtimal " +
      "olarak değil, **modelin varsayımı** olarak kabul edin: [getiriyi " +
      "kiradan hesaplayın](/hesap/), satıştaki fiyatı hesaba hiç katmayın. " +
      "Katmadığınız bir şey hayal kırıklığı yaratmaz.",
  },

  { t: "h", metin: "Yüksek getirinin altında ne var" },
  {
    t: "p",
    metin:
      "Getiri yükseldikçe altında yatan sebebi sormak gerekiyor. " +
      "Yüksek getiri üç şeyden birinin fiyatlanmış hali olabiliyor:",
  },
  {
    t: "liste",
    maddeler: [
      "**Ekonomik daralma.** [Nüfus ve istihdam geriliyorsa](/guven/yurt-disi-ev-yatirimi-riskleri/) kira talebi de zamanla geriler.",
      "**Tek sektöre bağımlılık.** Bölge tek bir işverene ya da sektöre bağlıysa risk yoğunlaşmıştır.",
      "**Mülkün kendi durumu.** Eski yapı, düşük sınıf mahalle, yüksek devir. [Getiri yüksek görünür, net getiri değildir](/getiri/brut-vs-net-getiri/).",
    ],
  },
  {
    t: "p",
    metin:
      "Üçü de çözülemez değil ama üçü de **bilinerek** alınmalı. " +
      "Yüksek getiri bir ödül değil, bir fiyat etiketidir: karşılığında " +
      "bir şeyden vazgeçiyorsunuz ve neyden vazgeçtiğinizi bilmeniz " +
      "gerekiyor.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "İkisini birden alamaz mıyım?",
        c:
          "Dengeli bölgeler var ama ikisinde de orta seviyede kalırlar. " +
          "“Yüksek kira + yüksek değer artışı” vaadi genellikle ya geçmiş " +
          "bir dönemin anlatısıdır ya da eksik hesaplanmış bir getiridir.",
      },
      {
        s: "Değer artışını tamamen yok mu sayayım?",
        c:
          "Modelde sayın: sıfır kabul edin. Olursa ikramiye olur. " +
          "Modelin ayakta durması için gereken şey kira olmalı; değer " +
          "artışı gerekliyse o zaman nakit akışı yatırımı değil, " +
          "spekülasyon yapıyorsunuz demektir.",
      },
      {
        s: "Enflasyon kira tarafını korur mu?",
        c:
          "Kısmen. Kiralar zamanla yerel gelire ve enflasyona göre " +
          "ayarlanır, ama sözleşme süresi boyunca sabittir ve artış " +
          "piyasanın izin verdiği kadardır. Otomatik bir koruma değil, " +
          "gecikmeli bir uyum.",
      },
    ],
  },
];
