import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const cifteVergilendirmeTrAbd: Blok[] = [
  {
    t: "p",
    metin:
      "Türkiye ile ABD arasında bir **gelir vergisi** anlaşması var ve " +
      "aynı gelirin iki kez vergilendirilmesini önlemek için kurulmuş " +
      "durumda. Kira geliriniz bu anlaşmanın kapsamında.",
  },
  {
    t: "p",
    metin:
      "Ama anlaşmanın kapsadığı ve kapsamadığı şeyler var — ve en " +
      "kritik kalem **kapsamadığı** taraf.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Anlaşma neyi kapsıyor" },
  {
    t: "tablo",
    basliklar: ["Konu", "Anlaşma kapsamında mı"],
    satirlar: [
      ["Kira geliri", "Evet — gelir vergisi kapsamında"],
      ["Gayrimenkul satış kazancı", "Evet, gelir vergisi tarafı"],
      ["Temettü, faiz, telif", "Evet, kendi maddeleriyle"],
      [
        "**Veraset ve intikal vergisi**",
        "**Hayır** — gelir vergisi anlaşması bunu kapsamıyor",
      ],
    ],
    vurgu: [3],
    not:
      "Vurgulu satır bu sayfanın en önemli bilgisi. Gelir vergisi " +
      "anlaşmasının varlığı, vefat halinde doğacak ABD veraset vergisi " +
      "hakkında **hiçbir koruma sağlamıyor.** İki ayrı anlaşma türü ve " +
      "birini diğeriyle karıştırmak yaygın bir hata.",
  },

  { t: "h", metin: "Nasıl işliyor: mahsup yöntemi" },
  {
    t: "p",
    metin:
      "Gayrimenkul gelirinde genel yaklaşım, **mülkün bulunduğu ülkenin** " +
      "vergilendirme hakkını koruması. Yani ABD'deki ev için ABD önce " +
      "vergilendiriyor; Türkiye aynı geliri beyana dahil ediyor ve ABD'de " +
      "ödenen vergiyi mahsup ediyor.",
  },
  {
    t: "p",
    metin:
      "Sonuç olarak toplam vergi yükünüz, kabaca **iki ülkenin " +
      "yükünün yükseği** kadar oluyor — toplamı kadar değil. Ama bu " +
      "kabaca; mahsubun sınırları ve gider kabul farkları nedeniyle " +
      "tam örtüşme her zaman olmuyor.",
  },
  {
    t: "not",
    baslik: "Anlaşmayı kendiniz yorumlamayın",
    metin:
      "Vergi anlaşmaları teknik metinler ve tek bir maddesi bağlamından " +
      "koparıldığında yanlış sonuç veriyor. Hangi maddenin sizin " +
      "durumunuza uygulandığı, ikamet statünüze ve gelirin niteliğine " +
      "bağlı. Uzman görüşü olmadan anlaşma maddesine dayanarak pozisyon " +
      "almayın.",
  },

  { t: "h", metin: "Pratikte ne yapmalı" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "ABD tarafında beyan verin ve ödenen vergiyi belgeleyin.",
      "Belgeyi Türkiye beyanında mahsup için kullanın.",
      "İki muhasebecinin birbirinden haberdar olmasını sağlayın.",
      "Veraset tarafını **ayrı** bir konu olarak ele alın — bu anlaşma oraya bakmıyor.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Anlaşma sayesinde daha az mı vergi ödeyeceğim?",
        c:
          "Anlaşma vergiyi azaltmıyor; **çifte ödemeyi** önlüyor. " +
          "Toplam yükünüz kabaca iki ülkenin yükünün yükseği " +
          "seviyesinde kalıyor.",
      },
      {
        s: "Anlaşma değişebilir mi?",
        c:
          "Vergi anlaşmaları protokollerle güncellenebiliyor. Uzun " +
          "vadeli bir yatırımda bu bir belirsizlik kalemi ve modelin " +
          "varsayımı olarak not edilmeli.",
      },
      {
        s: "Veraset için bir anlaşma var mı?",
        c:
          "ABD'nin bazı ülkelerle ayrı veraset/intikal vergisi " +
          "anlaşmaları bulunuyor. Türkiye tarafında böyle bir " +
          "anlaşmanın olup olmadığı ve varsa kapsamı, uzmana " +
          "doğrulatılması gereken kritik bir soru — çünkü cevap " +
          "istisna tutarını doğrudan etkiliyor.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "Türkiye Cumhuriyeti ile Amerika Birleşik Devletleri arasında Gelir " +
          "Üzerinden Alınan Vergilerde Çifte Vergilendirmeyi Önleme ve Vergi " +
          "Kaçakçılığına Engel Olma Anlaşması",
        url: "https://www.gib.gov.tr",
      },
      {
        metin:
          "Gelir İdaresi Başkanlığı · çifte vergilendirmeyi önleme anlaşmaları ve " +
          "yurt dışında ödenen verginin mahsubu",
        url: "https://www.gib.gov.tr",
      },
      {
        metin: "IRS · Publication 901, U.S. Tax Treaties",
        url: "https://www.irs.gov/publications/p901",
      },
    ],
  },
];
