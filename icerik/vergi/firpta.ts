import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const firpta: Blok[] = [
  {
    t: "p",
    metin:
      "FIRPTA, yabancı bir kişi ABD'de gayrimenkul **sattığında** satış " +
      "bedeli üzerinden yapılan bir **stopajdır.** Vergi değil, vergiye " +
      "mahsup edilmek üzere kaynakta tutulan bir tutar — ama bu ayrımı " +
      "bilmeyen satıcı için nakit akışı şoku olabiliyor.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Nasıl işliyor" },
  {
    t: "p",
    metin:
      "Stopaj **kazanç** üzerinden değil, **satış bedeli** üzerinden " +
      "hesaplanıyor. Aradaki fark kritik: zararına sattığınız bir mülkte " +
      "bile stopaj doğabiliyor.",
  },
  {
    t: "tablo",
    basliklar: ["Adım", "Ne oluyor"],
    satirlar: [
      [
        "Satış kapanışı",
        "Alıcı tarafı bedelin **%15'ini** keserek **Form 8288** ile IRS'e gönderiyor",
      ],
      ["Kalan tutar", "Satıcıya ödeniyor"],
      ["Yıllık beyan", "Gerçek kazanç hesaplanıyor ve gerçek vergi belirleniyor"],
      ["Mahsup", "Kesilen stopaj gerçek vergiden düşülüyor"],
      ["Fazlası", "Varsa iade ediliyor — ama beyanla ve zamana yayılarak"],
    ],
    not:
      "Son satır asıl mesele: fazla kesilen tutar kaybolmuyor ama " +
      "**hemen geri gelmiyor.** Aradaki süre boyunca paranız IRS'te " +
      "bekliyor.",
  },
  {
    t: "not",
    baslik: "Azaltma mümkün",
    metin:
      "Gerçek vergi yükümlülüğünüz kesilecek stopajdan düşükse, " +
      "kapanıştan önce **Form 8288-B** ile **azaltılmış stopaj belgesi** " +
      "için başvurmak " +
      "mümkün. Süreç zaman alıyor ve satış kararı verilir verilmez " +
      "başlatılması gerekiyor — kapanışa gün kalınca başvurmak işe " +
      "yaramıyor.",
  },

  { t: "h", metin: "Alım anında bilinmesi gerekenler" },
  {
    t: "p",
    metin:
      "FIRPTA satış anında karşınıza çıkıyor ama **alım anında " +
      "planlanması** gereken bir kalem:",
  },
  {
    t: "liste",
    maddeler: [
      "**Amortisman geri alımı.** Yıllar boyunca indirdiğiniz amortisman, satışta kazanca ekleniyor. Vergisiz bir indirim değil, ertelenmiş bir vergi.",
      "**Tutma süresi.** Kısa süreli tutmada işlem masrafları ve stopaj etkisi birleşiyor; bu varlık kısa vadeli alım-satım için uygun değil.",
      "**Tapu yapısı.** Mülkün kimin adına olduğu, satış anındaki vergi muamelesini etkiliyor.",
      "**Belge saklama.** Alım bedeli, kapanış masrafları ve yapılan iyileştirmelerin kaydı kazancı düşürüyor — saklanmayan belge, fazla vergi demek.",
    ],
  },
  {
    t: "not",
    baslik: "En sık atlanan",
    metin:
      "Son madde. Alım kapanış dökümü ve yıllar içindeki büyük " +
      "iyileştirme faturaları, satışta kazancı düşüren kalemler. " +
      "İlk günden bir klasör açıp saklamak, on yıl sonra doğrudan " +
      "para kazandırıyor.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Stopaj oranı ne?",
        c:
          "Varsayılan oran **satış bedelinin %15'i.** Bedelin belirli " +
          "eşiklerinin altında ve alıcının mülkü konut olarak kullanacağı " +
          "durumlarda istisnalar ve daha düşük oranlar var. Oran kazanç " +
          "üzerinden değil bedel üzerinden hesaplandığı için, sizin " +
          "gerçek verginiz bundan düşükse fark beyanla geri geliyor — ya " +
          "da kapanıştan önce Form 8288-B ile azaltılmış stopaj belgesi " +
          "alınıyor. Sizin durumunuza hangi eşiğin uyduğunu muhasebeciyle " +
          "teyit edin.",
      },
      {
        s: "Zararına satarsam da kesiliyor mu?",
        c:
          "Stopaj bedel üzerinden hesaplandığı için evet, kesilebiliyor. " +
          "Bu durumda azaltılmış stopaj belgesi başvurusu daha da " +
          "önemli hale geliyor.",
      },
      {
        s: "Mülkü mirasçılarım satarsa?",
        c:
          "Kurallar mirasçının statüsüne ve mülkün intikal biçimine göre " +
          "değişiyor; ayrıca veraset vergisi tarafı da devreye giriyor. " +
          "İki konu birlikte planlanmalı.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "IRS · Foreign Investment in Real Property Tax Act (FIRPTA) — varsayılan " +
          "stopaj oranı satış bedelinin %15'i",
        url: "https://www.irs.gov/individuals/international-taxpayers/firpta-withholding",
      },
      {
        metin:
          "IRS · Form 8288 ve Form 8288-A — stopajın beyanı ve satıcıya verilen " +
          "belge",
        url: "https://www.irs.gov/forms-pubs/about-form-8288",
      },
      {
        metin:
          "IRS · Form 8288-B, Application for Withholding Certificate — azaltılmış " +
          "stopaj başvurusu",
        url: "https://www.irs.gov/forms-pubs/about-form-8288-b",
      },
    ],
  },
];
