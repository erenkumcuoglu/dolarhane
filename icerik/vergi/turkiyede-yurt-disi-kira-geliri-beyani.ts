import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const turkiyedeYurtDisiKiraGeliriBeyani: Blok[] = [
  {
    t: "p",
    metin:
      "Türkiye'de tam mükellefseniz — yani vergi ikametgâhınız " +
      "Türkiye'deyse — **dünya çapındaki geliriniz** Türkiye'de beyana " +
      "tabi. ABD'deki kira geliri de buna dahil. ABD'de beyan vermiş " +
      "olmak Türkiye tarafındaki yükümlülüğü ortadan kaldırmıyor.",
  },
  {
    t: "p",
    metin:
      "Ama iki kez vergi ödemiyorsunuz: gelir vergisi anlaşması ve " +
      "iç mevzuattaki mahsup mekanizması aradaki çifte yükü önlemek " +
      "için var.",
  },
  CPA_UYARISI,

  { t: "h", metin: "İki tarafın sırası" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**ABD tarafı önce.** Kira geliri ABD kaynaklı olduğu için vergilendirme hakkı öncelikle ABD'de; orada beyan verilir ve vergi hesaplanır.",
      "**Türkiye tarafı sonra.** Aynı gelir Türkiye beyanına da girer.",
      "**Mahsup.** ABD'de ödenen vergi, Türkiye'de hesaplanan vergiden indirilir — belgelenmesi şartıyla.",
    ],
  },
  {
    t: "not",
    baslik: "Mahsup otomatik değil",
    metin:
      "İndirim için ABD'de ödenen verginin **belgelenmesi** gerekiyor ve " +
      "belgenin biçimi konusunda kurallar var. Ayrıca mahsup edilebilecek " +
      "tutar, Türkiye'de o gelire isabet eden vergiyle sınırlı olabiliyor. " +
      "Yani ABD'de ödediğiniz her kuruş mutlaka düşmüyor.",
  },

  { t: "h", metin: "Hesabı doğru kurmak" },
  {
    t: "p",
    metin:
      "Getiri hesabınızda dikkat edilecek nokta şu: **net getiri, iki " +
      "tarafın vergisi sonrasıdır.** ABD tarafındaki net getiri " +
      "hesabınız, Türkiye tarafı işlendikten sonra değişebilir.",
  },
  {
    t: "liste",
    maddeler: [
      "Kira gelirinin hangi kur üzerinden TL'ye çevrileceği önemli — beyan TL cinsinden yapılıyor.",
      "ABD'de amortisman düşerek azalttığınız vergiye tabi gelir, Türkiye tarafında aynı şekilde düşmeyebiliyor.",
      "İki ülkenin gider kabul ettiği kalemler örtüşmeyebiliyor.",
      "Beyan zamanlaması ve mali yıl farkları hesaplamayı karmaşıklaştırıyor.",
    ],
  },
  {
    t: "not",
    baslik: "Bu sayfanın sınırı",
    metin:
      "Türkiye tarafındaki eşikler, oranlar ve istisna kuralları " +
      "değişiyor. Burada yöntemin mantığını anlatıyoruz; **güncel " +
      "tutarlar ve sizin durumunuza uygulanışı için mali müşavirinize " +
      "danışmanız gerekiyor.** Bu sayfadaki çerçeveye dayanarak beyan " +
      "vermeyin.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Türkiye'de yaşamıyorsam ne olur?",
        c:
          "Vergi ikametgâhınız Türkiye dışındaysa Türkiye'deki " +
          "yükümlülüğünüz değişiyor. İkametgâh tespiti teknik bir konu " +
          "ve yalnız nerede oturduğunuza bakılarak yapılmıyor; " +
          "uzmana sorulmalı.",
      },
      {
        s: "Beyan vermezsem fark edilir mi?",
        c:
          "Ülkeler arasında mali bilgi paylaşımı mekanizmaları " +
          "genişledi ve yurt dışı hesap bilgileri paylaşılabiliyor. " +
          "Beyan etmemek bir strateji değil, bir risk.",
      },
      {
        s: "İki muhasebeci mi tutmam gerekiyor?",
        c:
          "Pratikte genellikle evet: ABD beyanı için orada, Türkiye " +
          "beyanı için burada. İkisinin birbirinden haberdar olması " +
          "mahsubun doğru işlemesi için önemli.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "Gelir İdaresi Başkanlığı · Gelir Vergisi Kanunu — tam mükellefler " +
          "Türkiye içinde ve dışında elde ettikleri kazançların tamamı üzerinden " +
          "vergilendirilir",
        url: "https://www.gib.gov.tr",
      },
      {
        metin:
          "Gelir İdaresi Başkanlığı · yıllık gelir vergisi beyannamesi ve " +
          "gayrimenkul sermaye iradı rehberi",
        url: "https://www.gib.gov.tr",
      },
      {
        metin:
          "İstisna tutarları, beyan sınırları ve oranlar her yıl yeniden " +
          "belirlenir; beyan döneminde güncel tutar esas alınmalıdır.",
      },
    ],
  },
];
