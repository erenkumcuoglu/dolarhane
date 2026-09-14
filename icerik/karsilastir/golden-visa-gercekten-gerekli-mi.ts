import type { Blok } from "@/lib/bloklar";

export const goldenVisaGercektenGerekliMi: Blok[] = [
  {
    t: "p",
    metin:
      "Golden visa gerçek bir şey satıyor: oturum hakkı, hareket " +
      "serbestliği, bir B planı. Soru bunun değersiz olup olmadığı değil — " +
      "**sizin ihtiyacınız olup olmadığı.** Çünkü bedeli var ve bedeli " +
      "getiriden çıkıyor.",
  },

  { t: "h", metin: "Ne aldığınızı netleştirin" },
  {
    t: "p",
    metin:
      "“Oturum” tek bir şey değil. Programlar arasında ciddi farklar var " +
      "ve pazarlama dili bu farkları siliyor:",
  },
  {
    t: "tablo",
    basliklar: ["Ne sorulmalı", "Neden önemli"],
    satirlar: [
      ["Oturum mu, vatandaşlık mı?", "İkisi çok farklı; oturum pasaport vermiyor"],
      ["Yenilenme koşulu ne?", "Mülkü satarsanız hak devam ediyor mu?"],
      ["Fiziksel bulunma şartı var mı?", "Bazı programlar yılda belirli süre ikamet istiyor"],
      ["Aile kapsamı ne?", "Eş, çocuk, ebeveyn dahil mi; yaş sınırı var mı?"],
      ["Çalışma hakkı veriyor mu?", "Oturum, otomatik çalışma izni demek değil"],
      ["Vergi mükellefiyeti doğuruyor mu?", "İkamet, o ülkede vergi mükellefi olmak anlamına gelebiliyor"],
      ["Vatandaşlığa yol var mı, kaç yıl?", "Varsa süre ve şartları ne"],
    ],
    vurgu: [5],
  },
  {
    t: "not",
    baslik: "Vurgulu satır en çok atlanan",
    metin:
      "Oturum almak, o ülkede vergi mükellefi hale gelmek anlamına " +
      "gelebiliyor — ve bu, dünya çapındaki gelirinizin oradaki " +
      "beyanınıza girmesi demek olabilir. Getiriye odaklanırken " +
      "**vergi statüsü değişimi** gözden kaçıyor. Bu, bir mali " +
      "danışmana sorulacak sorudur ve program satan tarafa değil.",
  },

  { t: "h", metin: "Bedelin nereden çıktığı" },
  {
    t: "p",
    metin:
      "Program bir asgari tutar belirliyor ve o tutar piyasada bir " +
      "yoğunlaşma yaratıyor: eşiğin hemen üstünde bir arz kümesi " +
      "oluşuyor. Eşiği karşılamak için seçtiğiniz mülkün fiyatı, o " +
      "mülkün kira üretme kapasitesinden bağımsız belirlenmiş olabiliyor.",
  },
  {
    t: "p",
    metin:
      "Buna **eşik primi** diyoruz. Oturum istiyorsanız ödenmeye değer " +
      "bir bedel. İstemiyorsanız, karşılığında hiçbir şey almadığınız " +
      "bir fazla ödemedir.",
  },

  { t: "h", metin: "Kural riski" },
  {
    t: "p",
    metin:
      "Bu programlar siyasi araçlar ve değişiyorlar. Son yıllarda " +
      "yaşananlar tek başına yeterince açık: bir ülke yatırımcı vizesini " +
      "tamamen kaldırdı, bir diğeri gayrimenkul yolunu programından " +
      "çıkardı, bir başkası popüler bölgelerde eşiği yükseltti.",
  },
  {
    t: "not",
    baslik: "Ayrımı doğru kurun",
    metin:
      "Kural değişiklikleri **mülkiyet hakkınızı** etkilemiyor — aldığınız " +
      "ev sizin kalıyor. Etkilediği şey **oturum beklentiniz.** Yani " +
      "programa bağlı bir karar veriyorsanız, programın değişebileceğini " +
      "karara dahil edin; mülkün değeri kalır, primin karşılığı " +
      "kalmayabilir.",
  },

  { t: "h", metin: "Karar" },
  {
    t: "liste",
    maddeler: [
      "**Hareket serbestliği ya da bir B planı ihtiyacınız varsa:** program mantıklı ve prim ödenmeye değer. Ama getiriyi ikincil bekleyin.",
      "**Amacınız sadece döviz cinsinden gelir ise:** primi ödemenin gerekçesi yok. Eşik kısıtı olmayan piyasalarda aynı parayla daha yüksek net getiri aramak daha tutarlı.",
      "**Emin değilseniz:** kararı erteleyin. Oturum ihtiyacı zamanla netleşiyor; eşik primiyle alınmış bir mülkü sonradan getiri mülküne çevirmek mümkün değil.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "ABD'de böyle bir program var mı?",
        c:
          "Gayrimenkul karşılığı oturum veren bir program yok. ABD'de " +
          "yatırımcı vizesi yolları iş kurma ve istihdam yaratma " +
          "temelli; kiralık ev almak bu kapsama girmiyor. Mülk almak " +
          "ile göçmenlik ABD'de ayrı konular.",
      },
      {
        s: "Mülkü satarsam oturumum gider mi?",
        c:
          "Çoğu programda yatırımın sürdürülmesi şartı var; mülkü " +
          "satmak hakkı sona erdirebiliyor. Bu, mülkü satma özgürlüğünüzü " +
          "kısıtlayan gizli bir maliyet — ve likidite hesabına girmesi " +
          "gerekiyor.",
      },
      {
        s: "Program üzerinden alınan mülk kötü mülk mü demek?",
        c:
          "Hayır. İyi mülkler de eşiğin üstünde olabiliyor. Mesele " +
          "mülkün kalitesi değil, seçim kriterinin ne olduğu: eşiği " +
          "karşılamak mı, kira üretmek mi. İkisi aynı mülkte " +
          "buluşabilir ama bunu şans belirler, kriter belirlemez.",
      },
    ],
  },
];
