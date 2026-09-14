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
      ["Satış kapanışı", "Alıcı tarafı, bedelin bir yüzdesini keserek IRS'e gönderiyor"],
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
      "kapanıştan önce **azaltılmış stopaj belgesi** için başvurmak " +
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
          "Sabit bir oran uygulanıyor ve bedelin belirli eşiklerine göre " +
          "istisnalar bulunuyor. Güncel oran ve eşikler yayın öncesinde " +
          "uzman tarafından doğrulanacak; karar aşamasında muhasebeciden " +
          "teyit alın.",
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
];
