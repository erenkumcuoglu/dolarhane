import type { Blok } from "@/lib/bloklar";

export const nakitAkisiNasilHesaplanir: Blok[] = [
  {
    t: "p",
    metin:
      "Nakit akışı, bütün giderler ve kredi taksiti ödendikten sonra " +
      "cebinize kalan paradır. Getiri metrikleri arasında en az " +
      "yorumlanabilir olanı budur: ya pozitiftir ya değildir.",
  },
  {
    t: "p",
    metin:
      "Hesap yukarıdan aşağı bir şelale gibi işler. Her basamakta bir " +
      "kalem düşülür ve **atlanan her basamak sonucu olduğundan iyi " +
      "gösterir.**",
  },

  { t: "h", metin: "Şelale" },
  {
    t: "tablo",
    basliklar: ["Basamak", "İşlem", "Sık yapılan hata"],
    satirlar: [
      ["Brüt kira", "Aylık kira × 12", "Piyasa kirası yerine iddia edilen kirayı kullanmak"],
      ["− Boşluk", "Bir yüzde payı düş", "Sıfır kabul etmek"],
      ["− Tahsilat kaybı", "Ayrı bir pay düş", "Boşlukla aynı şey sanmak"],
      ["= Tahsil edilen kira", "", ""],
      ["− Emlak vergisi", "Yıllık", "Bölgesel farkı hafife almak"],
      ["− Sigorta", "Yıllık", ""],
      ["− Yönetim ücreti", "Tahsil edilen üzerinden yüzde", "Sözleşmedeki kira üzerinden hesaplandığını fark etmemek"],
      ["− Bakım", "Yüzde ya da sabit", ""],
      ["− Capex rezervi", "Ayrı kalem", "Bakımla birleştirmek ya da hiç ayırmamak"],
      ["− Aidat", "Varsa", ""],
      ["= Net işletme geliri", "Cap rate buradan hesaplanır", ""],
      ["− Kredi taksiti", "Anapara + faiz", ""],
      ["= Nakit akışı", "Cebinize kalan", ""],
    ],
    vurgu: [10, 12],
    not:
      "Vurgulu iki satır iki farklı metriğin doğduğu yer: **net işletme " +
      "geliri** cap rate'i verir, **nakit akışı** cebinize geçeni. " +
      "Aradaki tek fark kredi taksitidir.",
  },

  { t: "h", metin: "Yüzdeye çevirmek" },
  {
    t: "p",
    metin:
      "Nakit akışını yüzdeye çevirirken bölen **yatırdığınız toplam " +
      "sermaye** olmalı — evin fiyatı değil:",
  },
  {
    t: "liste",
    maddeler: [
      "Peşinat",
      "Kapanış masrafları",
      "Kiraya hazırlık giderleri",
    ],
  },
  {
    t: "p",
    metin:
      "Bu üçünün toplamına **nakit üstü nakit getiri** (cash-on-cash) " +
      "denir ve kaldıraç kullanıyorsanız bakılacak asıl orandır. Fiyata " +
      "bölmek getiriyi sistematik olarak yüksek gösterir.",
  },
  {
    t: "not",
    baslik: "Negatif nakit akışı her zaman kötü değil",
    metin:
      "Değer artışı odaklı bir stratejide negatif nakit akışı bilinçli " +
      "bir tercih olabilir: her ay cebinizden para çıkar, kazancı satışta " +
      "beklersiniz. Ama bu bir **spekülasyon kararıdır** ve öyle " +
      "adlandırılmalı. Nakit akışı için alınmış bir mülkte negatif " +
      "sonuç, hesabın yanlış kurulduğunu gösterir.",
  },

  { t: "h", metin: "Yıllığı aylığa bölmeyin" },
  {
    t: "p",
    metin:
      "Yıllık nakit akışını on ikiye bölüp “ayda şu kadar” demek " +
      "yanıltıcı. Giderler yıl içinde düzgün dağılmıyor: emlak vergisi " +
      "yılda bir ya da iki kez, sigorta yıllık, capex ise hiç " +
      "beklenmedik bir ayda geliyor.",
  },
  {
    t: "p",
    metin:
      "Pratik sonuç: ABD hesabınızda bir **tampon** tutun. Aylık " +
      "ortalamaya göre planlanmış bir nakit akışı, vergi ayında sizi " +
      "açığa düşürebilir.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Capex rezervi ne kadar olmalı?",
        c:
          "Tek bir doğru oran yok; yapının yaşına ve durumuna bağlı. " +
          "Mantık şu: çatı, ısıtma sistemi ve su ısıtıcının kalan ömrünü " +
          "tahmin edin, değişim maliyetini o aylara bölün. İnceleme " +
          "raporu bu tahmini yapmanızı sağlayan belgedir.",
      },
      {
        s: "Amortismanı hesaba katmalı mıyım?",
        c:
          "Nakit akışına hayır — amortisman nakit çıkışı değil, vergi " +
          "kalemidir. Vergi sonrası getiriyi hesaplarken evet, çünkü " +
          "vergiye tabi geliri düşürüyor. İkisi ayrı hesap.",
      },
      {
        s: "Peşin alırsam nakit akışı ne olur?",
        c:
          "Kredi taksiti olmadığı için nakit akışı net işletme gelirine " +
          "eşitlenir ve daha yüksek çıkar. Ama koyduğunuz sermaye çok " +
          "daha büyük olduğu için **yüzde olarak** getiriniz genellikle " +
          "düşer. Hangisinin doğru olduğu paranın alternatif kullanımına " +
          "bağlı.",
      },
    ],
  },
];
