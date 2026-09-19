import type { Blok } from "@/lib/bloklar";

/**
 * Argüman YAPISAL, jeopolitik değil (SEO-GEO-PLAN §4.5). "Sarsılmaz
 * Amerika" çerçevesi kullanılmıyor: çürütülebilir ve markanın register'ı
 * değil. Savaş, pozisyonun kendisi değil yoğunlaşma riskinin kanıtı.
 */
export const amerikaMiDubaiMi: Blok[] = [
  {
    t: "p",
    metin:
      "İkisi de dolar ya da dolara bağlı gelir vaat ediyor, ikisi de " +
      "Türk alıcıya açık. Ama mülkiyetin **hukuki dayanıklılığı** ve " +
      "kiranın **hangi para biriminde doğduğu** konusunda farklılar — " +
      "ve karar bu iki başlıkta veriliyor.",
  },

  { t: "h", metin: "Karşılaştırma" },
  {
    t: "tablo",
    basliklar: ["", "Dubai / BAE", "ABD"],
    satirlar: [
      [
        "Yabancıya mülkiyet",
        "Freehold var, belirli bölgelerle sınırlı",
        "Tam; ülke genelinde, bölge kısıtı yok",
      ],
      [
        "Kayıt sistemi",
        "Merkezi emlak sicili",
        "[İlçe tapu kütüğü](/guven/tapu-kimin-adina/); kamuya açık ve çevrimiçi sorgulanabilir",
      ],
      [
        "Tapu sigortası",
        "Yaygın bir ürün değil",
        "[Title insurance](/surec/title-insurance/) standart; geçmişten gelen iddiaları kapsıyor",
      ],
      [
        "İçtihat derinliği",
        "Genç bir hukuk pratiği",
        "İki yüzyıllık [kiracı–mal sahibi içtihadı](/surec/amerikada-tahliye-sureci/)",
      ],
      [
        "Kira gelir vergisi",
        "Yok",
        "Var; beyan yükümlülüğüyle birlikte",
      ],
      [
        "Emlak vergisi",
        "Yok",
        "Var ve ilçeye göre belirgin değişiyor — [net getiriyi doğrudan yiyor](/getiri/brut-vs-net-getiri/)",
      ],
      [
        "Kiranın para birimi",
        "Dirhem — dolara **politikayla** sabitlenmiş",
        "Dolar — **yerli** para birimi",
      ],
      [
        "Arz yapısı",
        "Büyük ölçekli projeler; [maketten satış](/karsilastir/maketten-ev-almak-riskleri/) yaygın",
        "Mevcut, oturulmuş müstakil konut stoğu",
      ],
      [
        "Piyasa döngüsü",
        "Arz odaklı ve tarihsel olarak oynak",
        "Yerel ekonomiye bağlı, daha yavaş",
      ],
    ],
    vurgu: [5, 6],
  },
  {
    t: "not",
    baslik: "Dubai'nin gerçek avantajı vergi, ve ciddiye alınmalı",
    metin:
      "Kira gelir vergisinin ve emlak vergisinin olmaması küçük bir fark " +
      "değil. ABD tarafında emlak vergisi tek başına brüt kiranın anlamlı " +
      "bir dilimini alıyor ve ilçeye göre değişiyor. Net getiri " +
      "karşılaştırmasında bu kalem Dubai'nin lehine çalışıyor — " +
      "**bunu yazmamak dürüst olmazdı.**",
  },

  { t: "h", metin: "Asıl ayrım: kira hangi parada doğuyor" },
  {
    t: "p",
    metin:
      "Vurgulanan iki satırdan ikincisi kararın merkezinde. Dirhem dolara " +
      "sabitlenmiş durumda ve uzun süredir öyle — pratikte dolar geliri " +
      "gibi davranıyor. Ama **sabitleme bir politika tercihidir**, para " +
      "biriminin doğası değil.",
  },
  {
    t: "p",
    metin:
      "ABD'de kira doğrudan dolar cinsinden doğuyor; arada sürdürülmesi " +
      "gereken bir kur rejimi yok. Dolar geliri istiyorsanız aradaki " +
      "fark, bir kur rejimine bağımlı olup olmamak.",
  },
  {
    t: "p",
    metin:
      "Bu bir kehanet değil; bir **bağımlılık farkı.** Sabitlemenin " +
      "bozulacağını söylemiyoruz — sadece hesabınızın ona bağlı olup " +
      "olmadığını bilmeniz gerektiğini söylüyoruz.",
  },

  { t: "h", metin: "Yoğunlaşma riski" },
  {
    t: "p",
    metin:
      "TCMB verisine göre Türkiye'den yurt dışı gayrimenkule yapılan " +
      "ödemeler 2021'de 216 milyon dolarken 2025'te 2.675 milyon dolara " +
      "çıktı. Bu büyümenin önemli bir kısmı az sayıda destinasyona, " +
      "başta Dubai ve Yunanistan'a yöneldi.",
  },
  {
    t: "p",
    metin:
      "2026'nın ilk ayları yıllık bazda güçlü başladı (Ocak +%44, " +
      "Şubat +%18), ardından bölgesel bir jeopolitik gerilimin etkisiyle " +
      "sert şekilde geriledi — Mayıs'ta 143 milyon dolarla son 29 ayın " +
      "en düşük seviyesine indi.",
  },
  {
    t: "not",
    baslik: "Buradan çıkan sonuç ne, ne değil",
    metin:
      "Bu veri “şu bölge tehlikeli” demiyor — **tek bir bölgede " +
      "yoğunlaşmanın bir risk olduğunu** gösteriyor. Portföyün tamamı " +
      "aynı coğrafi ve siyasi döngüye bağlıysa, o döngü ne yöne giderse " +
      "portföy de o yöne gidiyor. Coğrafi dağılım, getiri kadar bir " +
      "kriterdir.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Hangisi daha yüksek net getiri veriyor?",
        c:
          "Tek bir cevap yok; vergi avantajı Dubai'nin, mülkiyet " +
          "altyapısı ve para birimi ABD'nin lehine. Net getiri karşılaştırması " +
          "ancak somut iki mülk üzerinden, aynı varsayımlarla ve aynı " +
          "kalemler düşülerek yapılabilir. Genel bir üstünlük iddiası " +
          "yanıltıcı olur.",
      },
      {
        s: "Dubai'de maketten almak riskli mi?",
        c:
          "Maketten alım, hangi ülkede olursa olsun ayrı bir risk sınıfı: " +
          "teslim edilmemiş bir şey satın alıyorsunuz. [Ayrı sayfada ele " +
          "alıyoruz](/karsilastir/maketten-ev-almak-riskleri/).",
      },
      {
        s: "İkisine de yatırım yapılabilir mi?",
        c:
          "Evet ve yoğunlaşma riskine karşı mantıklı olabilir — " +
          "[Dubai tarafının yapısal riskleri ayrı bir sayfada](/karsilastir/dubai-ev-yatirimi-riskleri/). " +
          "Bu sayfanın amacı birini elemek değil, karşılaştırmanın hangi " +
          "başlıklarda yapılması gerektiğini göstermek.",
      },
    ],
  },
];
