import type { Blok } from "@/lib/bloklar";

/**
 * KALDIRAÇ YAZISI — ürün değil, içerik.
 *
 * 2026-09'da ürün peşin alıma döndü (iş planı §10-11) ama bu sayfa
 * BİLEREK duruyor: kredili alım Türkçe'de aranan bir konu ve buradan
 * gelen kişi gerçek alıcı. Huni şu: kredi sorgusu → yazı → görüşme →
 * peşin ev; kaldıraç sonradan, mevcut müşteriye açılan bir seçenek.
 *
 * Bu yüzden sayfanın tek şartı var: kredi SAĞLADIĞIMIZ izlenimi
 * vermemek. Aşağıdaki "Biz kredi sağlamıyoruz" bloğu o işi görüyor
 * ve kaldırılmamalı.
 */
export const dscrNedir: Blok[] = [
  {
    t: "p",
    metin:
      "DSCR, mülkün gelirinin borç ödemesini karşılama oranıdır: net " +
      "işletme geliri bölü yıllık kredi ödemesi. 1,00 başabaştır; altı " +
      "açık verir, üstü pay bırakır.",
  },
  {
    t: "p",
    metin:
      "Türk alıcı için bu metriğin ayrı bir önemi var: **ABD'de mülkün " +
      "kendi gelirine bakarak kredi veren ürünler bu orana göre karar " +
      "veriyor.** Yani ABD'de geliriniz ve kredi geçmişiniz olmadan da " +
      "kredi kullanmanın yolu buradan geçiyor.",
  },
  {
    t: "not",
    baslik: "Biz kredi sağlamıyoruz",
    metin:
      "Bu sayfa metriği anlatıyor, bir ürün sunmuyor. **Sattığımız şey " +
      "peşin alınan, ilk günden kiracılı bir ev** — kredi aracılığı " +
      "yapmıyoruz, kredi vereni biz bulmuyoruz ve hiçbir kredi " +
      "koşulunu taahhüt etmiyoruz. Kaldıraç, ancak bizden ev almış bir " +
      "yatırımcı portföyünü büyütmek istediğinde ayrıca konuşulan bir " +
      "konu. Bugün geçerli olan hesap [peşin hesaptır](/hesap/).",
  },

  { t: "h", metin: "Neden Türk alıcı için kritik" },
  {
    t: "p",
    metin:
      "Klasik konut kredisinde banka **kişiye** bakar: maaş bordrosu, " +
      "vergi beyanı, kredi notu. Türkiye'de yaşayan birinin ABD'de bu " +
      "geçmişi yoktur ve bu yüzden klasik krediye erişim zordur.",
  },
  {
    t: "p",
    metin:
      "DSCR mantığıyla çalışan krediler ise **mülke** bakar: bu ev " +
      "kirasıyla taksiti karşılıyor mu? Karşılıyorsa alıcının kişisel " +
      "geliri ikincil hale geliyor.",
  },
  {
    t: "tablo",
    basliklar: ["", "Kişiye bakan kredi", "Mülke bakan kredi"],
    satirlar: [
      ["Neye bakılır", "Gelir, kredi notu, borç/gelir oranı", "Mülkün [net işletme geliri](/getiri/cap-rate-nedir/)"],
      ["Yabancı için", "Zor — ABD geçmişi yok", "Mümkün"],
      ["Peşinat", "Daha düşük olabiliyor", "Genelde daha yüksek"],
      ["Faiz", "Daha düşük", "Daha yüksek"],
      ["Belge yükü", "Ağır", "Daha hafif"],
    ],
    not:
      "Erişim kolaylığının bedeli faiz ve peşinat. Bu bir dezavantaj " +
      "değil, bir fiyat — ve karşılaştırılırken böyle değerlendirilmeli.",
  },

  { t: "h", metin: "Eşik" },
  {
    t: "p",
    metin:
      "Kredi verenler genellikle 1,20–1,25 üstünü istiyor. Gerekçesi " +
      "basit: 1,00 tam başabaş demek ve hiçbir tampon bırakmıyor. Bir ay " +
      "boşluk ya da bir büyük tamir, 1,00'deki bir mülkü açığa düşürür.",
  },
  {
    t: "not",
    baslik: "Kredi verenin eşiği sizin eşiğiniz değil",
    metin:
      "Banka 1,20'yi kabul ediyor olabilir ama bu sizin için yeterli " +
      "olduğu anlamına gelmiyor. Bankanın riski krediyle sınırlı; sizinki " +
      "değil. [Boşluk, devir ve capex'i](/getiri/brut-vs-net-getiri/) de karşılayacak bir pay istiyorsanız " +
      "kendi eşiğinizi daha yukarıda tutmanız gerekir.",
  },

  { t: "h", metin: "DSCR'ı yükseltmenin yolları ve bedelleri" },
  {
    t: "liste",
    maddeler: [
      "**Peşinatı artırmak.** Taksit düşer, oran yükselir — ama koyduğunuz sermaye büyür ve nakit üstü nakit getiriniz düşebilir.",
      "**Vadeyi uzatmak.** Aylık taksit düşer, oran yükselir — toplam faiz artar.",
      "**Daha yüksek kiralı mülk seçmek.** En sağlıklı yol, ama yüksek kira genelde daha düşük sınıf mülk demek olabiliyor.",
      "**Gideri düşük göstermek.** Oranı kâğıt üzerinde yükseltir, gerçeği değiştirmez. Kendinizi kandırmanın en pahalı yolu.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "DSCR ile kirayla karşılama oranı aynı şey mi?",
        c:
          "Yakın ama aynı değil. [Kirayla karşılama oranı](/getiri/kirayla-karsilama-orani/) **brüt kirayı** " +
          "taksite böler; DSCR **net işletme gelirini** böler. DSCR daha " +
          "muhafazakâr ve daha gerçekçidir; karşılama oranı daha hızlı bir " +
          "ön elemedir.",
      },
      {
        s: "DSCR kredisi için ABD'de şirket kurmam gerekir mi?",
        c:
          "Bazı kredi verenler mülkün bir tüzel kişilik adına olmasını " +
          "istiyor, bazıları istemiyor. Şart, krediyi verene göre değişiyor " +
          "ve başvurmadan önce sorulmalı — çünkü [tapu yapısı](/guven/tapu-kimin-adina/) kararını " +
          "etkiliyor.",
      },
      {
        s: "Oran düşükse kredi hiç çıkmaz mı?",
        c:
          "Genelde çıkmaz ya da peşinat yükseltilerek çıkar. Bazı krediler " +
          "eşiğin altına belirli koşullarla izin veriyor ama faiz " +
          "yükseliyor. Düşük oran, kredinin değil mülkün uyarısıdır.",
      },
    ],
  },
];
