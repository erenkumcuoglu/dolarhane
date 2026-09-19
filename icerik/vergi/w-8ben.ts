import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const w8ben: Blok[] = [
  {
    t: "p",
    metin:
      "W-8 formları vergi beyanı değil, **beyan öncesi bildirimdir**: " +
      "karşı tarafa “ben ABD mükellefi değilim, durumum şu” demenizi " +
      "sağlıyorlar. Doğru formu vermezseniz karşı taraf en yüksek " +
      "kesintiyi uygulamak durumunda kalıyor.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Hangi form ne zaman" },
  {
    t: "tablo",
    basliklar: ["Form", "Ne için", "Kime verilir"],
    satirlar: [
      [
        "W-8BEN",
        "Yabancı **gerçek kişi** olduğunuzu bildirir; anlaşma indirimi talebini taşır",
        "Ödemeyi yapan taraf — banka, aracı, yönetim şirketi",
      ],
      [
        "W-8BEN-E",
        "Aynısının **tüzel kişilik** hali",
        "Aynı",
      ],
      [
        "W-8ECI",
        "Gelirin ABD'de yürütülen bir faaliyete bağlı olduğunu bildirir — **net yöntemi seçtiğinizde** gündeme geliyor",
        "Ödemeyi yapan taraf",
      ],
    ],
    vurgu: [2],
    not:
      "Vurgulu satır kira geliri için kritik olan. Net yöntemle " +
      "vergilenmeyi seçtiyseniz (bkz. 1040-NR beyanı), doğru bildirim " +
      "brüt kesinti yapılmasını önleyen kalem oluyor. Hangi formun sizin " +
      "durumunuza uygun olduğu muhasebeciye sorulmalı — yanlış form, " +
      "yanlış kesinti demek.",
  },

  { t: "h", metin: "Kime verdiğiniz önemli" },
  {
    t: "p",
    metin:
      "Form IRS'e gönderilmiyor; **ödemeyi yapan tarafta** kalıyor ve o " +
      "taraf kesinti kararını buna göre veriyor. Kira geliri zincirinde " +
      "bu genellikle yönetim şirketi oluyor.",
  },
  {
    t: "liste",
    maddeler: [
      "Yönetim şirketiyle sözleşme imzalarken hangi formu istediklerini sorun.",
      "Form süreli — genellikle belirli bir süre sonra yenilenmesi gerekiyor.",
      "Durumunuz değişirse (tapu yapısı, ikamet, vergi statüsü) form yenilenmeli.",
      "Boş ya da hatalı form, en yüksek kesintiyle sonuçlanıyor.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Bu formu ben mi dolduruyorum?",
        c:
          "Teknik olarak evet ama ilk yıl muhasebeciyle doldurmak " +
          "mantıklı: hangi formun uygun olduğu ve anlaşma maddesine " +
          "atıf yapılıp yapılacağı durumunuza bağlı.",
      },
      {
        s: "ITIN olmadan verebilir miyim?",
        c:
          "Bazı durumlarda vergi kimlik numarası alanı zorunlu oluyor. " +
          "Bu yüzden ITIN süreci genellikle bu formlardan önce " +
          "başlatılıyor.",
      },
      {
        s: "Anlaşma indirimi kira gelirinde işe yarıyor mu?",
        c:
          "Türkiye-ABD gelir vergisi anlaşmasının gayrimenkul gelirine " +
          "ilişkin maddeleri var, ama gayrimenkul gelirinde genel " +
          "yaklaşım mülkün bulunduğu ülkenin vergilendirme hakkını " +
          "koruması yönünde. Somut durumunuz için uzmana danışın.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "IRS · Form W-8BEN — Certificate of Foreign Status of Beneficial Owner " +
          "for United States Tax Withholding and Reporting (Individuals)",
        url: "https://www.irs.gov/forms-pubs/about-form-w-8ben",
      },
      {
        metin: "IRS · Form W-8BEN-E — aynı bildirimin tüzel kişilik hali",
        url: "https://www.irs.gov/forms-pubs/about-form-w-8ben-e",
      },
      {
        metin:
          "IRS · Form W-8ECI — gelirin ABD'de yürütülen bir ticari faaliyetle " +
          "bağlantılı olduğunun bildirimi",
        url: "https://www.irs.gov/forms-pubs/about-form-w-8eci",
      },
    ],
  },
];
