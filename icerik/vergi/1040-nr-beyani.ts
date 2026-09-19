import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

/** TASLAK — CPA imzası bekliyor. */
export const beyan1040NR: Blok[] = [
  {
    t: "p",
    metin:
      "ABD'de kira geliri elde eden ve ABD'de yerleşik olmayan bir " +
      "yabancının yıllık beyan yükümlülüğü var. Beyan verilmediğinde " +
      "gelir vergisiz kalmıyor — tam tersine, **daha ağır bir yöntemle** " +
      "vergilendiriliyor.",
  },
  CPA_UYARISI,

  { t: "h", metin: "İki farklı vergilendirme yöntemi" },
  {
    t: "p",
    metin:
      "Bu, kümenin en yüksek para değeri olan bilgisi ve Türkçe'de " +
      "neredeyse hiç yazılmıyor. Yabancı bir kişinin ABD kira geliri iki " +
      "şekilde vergilenebiliyor:",
  },
  {
    t: "tablo",
    basliklar: ["", "Varsayılan yöntem", "Beyanla seçilen yöntem"],
    satirlar: [
      [
        "Neyin üzerinden",
        "**Brüt kira** — hiçbir gider düşülmeden",
        "**Net gelir** — giderler ve amortisman düşüldükten sonra",
      ],
      [
        "Gider indirimi",
        "Yok",
        "Emlak vergisi, sigorta, yönetim, tamir, faiz, amortisman",
      ],
      [
        "Nasıl uygulanır",
        "Kaynakta sabit oranlı kesinti",
        "Yıllık beyan ve seçim bildirimi",
      ],
      [
        "Sonuç",
        "Giderleri yüksek bir mülkte gerçek kazançtan fazla vergi",
        "Gerçek kazanç üzerinden vergi",
      ],
    ],
    vurgu: [0],
    not:
      "Vurgulu satır kararı taşıyor. Brüt üzerinden sabit oranlı kesinti, " +
      "giderleri olan bir mülkte fiili kazancınızın tamamını ya da " +
      "üstünü alabilir. Net yönteme geçiş **otomatik değil** — beyanla " +
      "ve bir seçim bildirimiyle yapılıyor.",
  },
  {
    t: "not",
    baslik: "Pratik sonuç",
    metin:
      "“Beyan vermezsem kimse fark etmez” yaklaşımı burada tersine " +
      "çalışıyor: beyan vermemek sizi vergiden kurtarmıyor, **daha " +
      "yüksek vergilendirme yöntemine bırakıyor.** Bu seçimin nasıl ve " +
      "hangi süre içinde yapılacağı teknik bir konu ve muhasebeciyle " +
      "ilk yıl içinde ele alınmalı.",
  },

  { t: "h", metin: "Beyan için gerekenler" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**ITIN** — vergi kimlik numarası. Beyan bunun olmadan verilemiyor.",
      "Yıllık kira geliri kaydı — yönetim şirketinin owner statement'ları.",
      "Gider belgeleri: emlak vergisi, sigorta, yönetim ücreti, tamir faturaları, varsa kredi faiz dökümü.",
      "Amortisman hesabı — binanın değeri, arsa payı ayrıştırılmış halde.",
      "Kapanış hesap dökümü (ilk yıl için).",
    ],
  },

  { t: "h", metin: "Eyalet tarafı ayrı" },
  {
    t: "p",
    metin:
      "Federal beyan tek başına yeterli olmayabiliyor: mülkün bulunduğu " +
      "eyaletin de kendi gelir vergisi ve beyan yükümlülüğü olabilir. " +
      "Bazı eyaletlerde gelir vergisi yok, bazılarında var. Bu, mülk " +
      "seçiminin vergi tarafına dokunan bir kalem.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Zarar çıkarsa ne olur?",
        c:
          "Net yöntemde amortisman ve giderler geliri aşabiliyor ve " +
          "kâğıt üzerinde zarar oluşabiliyor. Bu zararın nasıl " +
          "kullanılabileceği kuralları teknik; muhasebeciye sorulmalı.",
      },
      {
        s: "Türkiye'de de beyan edecek miyim?",
        c:
          "Türkiye'de tam mükellefseniz yurt dışı kira geliriniz orada da " +
          "beyana tabi ve ABD'de ödenen vergi için mahsup mekanizması " +
          "var. İki tarafı ayrı sayfalarda anlatıyoruz.",
      },
      {
        s: "Beyanı kim hazırlıyor?",
        c:
          "ABD'de yabancı yatırımcı beyanı konusunda deneyimli bir " +
          "muhasebeci. Bu genel bir mali müşavirlik işi değil; " +
          "yerleşik olmayan mükellef kuralları ayrı bir uzmanlık.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin: "IRS · Form 1040-NR, U.S. Nonresident Alien Income Tax Return",
        url: "https://www.irs.gov/forms-pubs/about-form-1040-nr",
      },
      {
        metin:
          "IRS · Publication 519, U.S. Tax Guide for Aliens — yabancıların " +
          "vergilendirilmesi ve net yöntemi seçimi",
        url: "https://www.irs.gov/publications/p519",
      },
      {
        metin:
          "IRS · Publication 527, Residential Rental Property — kira geliri ve " +
          "indirilebilir giderler",
        url: "https://www.irs.gov/publications/p527",
      },
      {
        metin:
          "Internal Revenue Code §871(d) — gayrimenkul gelirinin net esasa göre " +
          "vergilendirilmesi seçimi",
      },
    ],
  },
];
