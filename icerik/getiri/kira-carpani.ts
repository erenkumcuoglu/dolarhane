import type { Blok } from "@/lib/bloklar";

/**
 * Köprü sayfası: metrik Türkçe'de yerleşik ve aranıyor, ama cevabı her zaman
 * Türkiye'yle veriliyor. "Peki daha iyi çarpan nerede" köprüsü kurulmamış.
 * RAKIP-HARITASI.md §1-C.
 *
 * Bu sayfa metriği öğretir, ülke karşılaştırması YAPMAZ — o ayrı bir sayfa.
 * Mekanizma içeriği olduğu için evergreen: tarih gösterilmez.
 */
export const kiraCarpani: Blok[] = [
  {
    t: "p",
    metin:
      "4 milyon TL'ye aldığınız, ayda 25.000 TL kira getiren bir daire " +
      "düşünün. Yıllık kira 300.000 TL; 4.000.000 ÷ 300.000 = **13,3**. " +
      "Kira çarpanı budur: ev kendini kağıt üstünde 13 yılda ödüyor.",
  },
  {
    t: "p",
    metin:
      "Kağıt üstünde. Çünkü bu hesap **brüt kirayı** kullanır ve brüt kira, " +
      "elinize geçen para değildir. Asıl soru çarpanın kaç olduğu değil, " +
      "çarpanı hesaplarken hangi kirayı kullandığınızdır.",
  },

  { t: "h", metin: "Nasıl hesaplanır" },
  {
    t: "p",
    metin:
      "İki yaygın biçimi var ve ikisi aynı bilgiyi verir: " +
      "**Kira çarpanı = Fiyat ÷ (Aylık kira × 12)**. Amortisman süresi de " +
      "budur — çarpan kaçsa, kabaca o kadar yıl demektir.",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Evin alış fiyatını yazın (alım masrafları dahil — tapu, komisyon, ekspertiz).",
      "Aylık kirayı 12 ile çarpın.",
      "Birinciyi ikinciye bölün.",
    ],
  },
  {
    t: "not",
    baslik: "En sık yapılan hata",
    metin:
      "Alım masraflarını fiyata eklememek. Komisyon, tapu harcı ve tadilat " +
      "toplamı yatırımınızın parçasıdır; hesaba katılmazsa çarpan olduğundan " +
      "iyi görünür.",
  },

  { t: "h", metin: "Brüt çarpan neyi saklar" },
  {
    t: "p",
    metin:
      "Brüt kira ile net kira arasındaki farkı dört kalem açar. Hiçbiri " +
      "istisnai değildir; hepsi her ev için geçerlidir.",
  },
  {
    t: "tablo",
    basliklar: ["Kalem", "Ne yapar", "Neden gözden kaçar"],
    satirlar: [
      [
        "Boşluk",
        "Evin kiracısız geçirdiği süre gelirden düşer",
        "Hesap, evin 12 ay dolu olduğunu varsayar",
      ],
      [
        "Devir maliyeti",
        "Her kiracı değişiminde boşluk + hazırlık gideri",
        "Kiracı ne sıklıkla değişiyor, hesaba hiç girmez",
      ],
      [
        "Vergi ve sabit giderler",
        "Emlak vergisi, sigorta, aidat",
        "Ülkeden ülkeye ve bölgeden bölgeye çok değişir",
      ],
      [
        "Bakım ve büyük onarım",
        "Rutin bakım ayrı, çatı/tesisat gibi kalemler ayrı",
        "Yıllara yayıldığı için aylık hesapta görünmez",
      ],
    ],
    not:
      "Bu dört kalem düşüldükten sonra kalan rakam **net kira**dır. " +
      "Çarpanı net kirayla yeniden hesaplayın; gerçek amortisman süresi odur.",
  },
  {
    t: "p",
    metin:
      "Sonuç şu: iki ev aynı brüt çarpana sahip olabilir ve net çarpanları " +
      "birbirinden çok farklı çıkabilir. Brüt çarpan bir **ön eleme aracıdır** — " +
      "otuz saniyede bakılır, karar verilmez.",
  },

  { t: "h", metin: "Türkiye'de çarpan nerede duruyor" },
  {
    t: "p",
    metin:
      "Türk sektör kaynaklarına göre Türkiye'de brüt kira getirisi genel " +
      "olarak %3–7 bandında seyrediyor; bu da kabaca 14–33 yıllık bir brüt " +
      "amortismana karşılık geliyor. İstanbul genelinde ortalama amortisman " +
      "süresinin 2024 itibarıyla 16–19 yıl aralığına indiği, bazı çevre " +
      "ilçelerde tek odalı dairelerde 10–12 yıla kadar düştüğü belirtiliyor.",
  },
  {
    t: "not",
    baslik: "Bu rakamlar hakkında",
    metin:
      "Yukarıdaki aralıklar Türk emlak ve değerleme sektörünün yayınlarından " +
      "derlenmiştir ve **brüttür**. Net rakam, yukarıdaki dört kalem " +
      "düşüldükten sonra belirgin biçimde daha uzun bir amortisman verir. " +
      "Kendi evinizi hesaplarken kendi giderlerinizi kullanın; ortalama, " +
      "sizin eviniz değildir.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Kira çarpanı kaç olmalı?",
        c:
          "Tek bir doğru sayı yok; çarpan ancak aynı para birimi ve benzer " +
          "gider yapısı içinde karşılaştırılabilir. Düşük çarpan her zaman " +
          "daha iyi değildir — çok düşük çarpan genellikle bir riskin " +
          "fiyatlanmış hali olur.",
      },
      {
        s: "Kira çarpanı ile amortisman süresi aynı şey mi?",
        c:
          "Pratik olarak evet. Çarpan bir orandır, amortisman süresi o oranın " +
          "yıl cinsinden okunuşudur. Aynı hesabın iki adıdır.",
      },
      {
        s: "Krediyle alırsam çarpan değişir mi?",
        c:
          "Çarpanın kendisi değişmez — o, evin fiyatı ile kirası arasındaki " +
          "ilişkidir. Ama sizin cebinize dokunan getiri değişir, çünkü koyduğunuz " +
          "sermaye daha küçüktür ve kira taksitin bir kısmını karşılar. " +
          "Bu ayrı bir hesaptır.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "Türkiye brüt getiri bandı ve İstanbul amortisman süreleri: Türk emlak " +
          "ve değerleme sektörü yayınlarından derleme (2024).",
      },
    ],
  },
];
