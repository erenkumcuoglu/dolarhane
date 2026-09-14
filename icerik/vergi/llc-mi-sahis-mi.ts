import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const llcMiSahisMi: Blok[] = [
  {
    t: "p",
    metin:
      "Mülkü kendi adınıza mı, bir LLC üzerinden mi almalısınız? " +
      "Cevap kişiye göre değişiyor ama yaygın bir yanlış inanç var: " +
      "**LLC kurmak vergiyi azaltmıyor.** Sağladığı şey farklı ve " +
      "maliyeti var.",
  },
  CPA_UYARISI,

  { t: "h", metin: "LLC ne sağlar, ne sağlamaz" },
  {
    t: "tablo",
    basliklar: ["Konu", "LLC ne yapıyor"],
    satirlar: [
      [
        "Sorumluluk ayrımı",
        "**Sağlıyor.** Mülke ilişkin bir dava kişisel varlıklarınıza uzanmıyor — bu asıl faydası",
      ],
      [
        "Gelir vergisi",
        "**Değiştirmiyor.** Tek ortaklı LLC vergi açısından genellikle yok sayılıyor; gelir yine sizin beyanınıza geliyor",
      ],
      [
        "Veraset vergisi",
        "**Otomatik çözmüyor.** Yok sayılan bir yapıda ABD taşınmazı hâlâ doğrudan US-situs varlık gibi değerlendirilebiliyor",
      ],
      [
        "Gizlilik",
        "Kısmen. Tapu şirket adına çıkıyor ama birçok eyalet ortak bilgisini kayda tabi tutuyor",
      ],
      [
        "Çoklu mülk yönetimi",
        "Kolaylaştırıyor. Birden fazla ev tek yapı altında toplanabiliyor",
      ],
      [
        "Kredi",
        "Bazı kredi verenler şart koşuyor, bazıları LLC'ye kredi vermiyor. Önce krediye sorulmalı",
      ],
    ],
    vurgu: [1, 2],
    not:
      "Vurgulu iki satır en sık yanlış bilinen. LLC bir **sorumluluk** " +
      "aracı; vergi aracı değil. Vergi avantajı arıyorsanız yanlış yerde " +
      "arıyorsunuz demektir.",
  },

  { t: "h", metin: "Maliyetler" },
  {
    t: "liste",
    maddeler: [
      "Kuruluş ücreti ve kayıtlı temsilci (registered agent) yıllık bedeli.",
      "Yıllık beyan ve eyalet raporlama yükümlülükleri.",
      "Muhasebe maliyetinin artması — ek formlar gündeme geliyor.",
      "Mülkü sonradan LLC'ye devretmek yeni bir tapu işlemi; masraf ve bazı yerlerde devir vergisi doğuruyor.",
    ],
  },
  {
    t: "not",
    baslik: "Karar zamanlaması",
    metin:
      "Yapı kararı **kapanıştan önce** verilmeli. Sonradan devir hem " +
      "masraflı hem bazı durumlarda kredi sözleşmesini ihlal ediyor. " +
      "Tapu kimin adına çıkacaksa, bu soruya cevap o karar anında " +
      "veriliyor.",
  },

  { t: "h", metin: "Pratikte nasıl karar veriliyor" },
  {
    t: "tablo",
    basliklar: ["Durum", "Yaygın yaklaşım"],
    satirlar: [
      ["Tek mülk, sade yapı", "Çoğu alıcı kendi adına alıyor — LLC'nin maliyeti faydasını aşıyor"],
      ["Birden fazla mülk", "LLC anlamlı hale geliyor; sorumluluk ayrımı ve yönetim kolaylığı"],
      ["Ortaklı alım", "Yapı neredeyse zorunlu; pay ve karar kuralları yazılı olmalı"],
      ["Veraset kaygısı ağır", "LLC tek başına yetmiyor; ayrı bir planlama gerekiyor"],
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Hangi eyalette LLC kurmalıyım?",
        c:
          "Genellikle mülkün bulunduğu eyalet pratik oluyor; başka bir " +
          "eyalette kurulan LLC, mülkün olduğu eyalette ayrıca kayıt " +
          "yaptırmak zorunda kalabiliyor ve maliyet ikiye çıkıyor.",
      },
      {
        s: "LLC kurmak ABD'de vergi mükellefi olmama sebep olur mu?",
        c:
          "Kira geliri zaten ABD kaynaklı olduğu için beyan yükümlülüğü " +
          "LLC'den bağımsız doğuyor. LLC bu yükümlülüğü yaratmıyor, " +
          "ama beyanın biçimini etkileyebiliyor.",
      },
      {
        s: "Türkiye'de kurulu şirketimle alabilir miyim?",
        c:
          "Teknik olarak mümkün ama vergi sonuçları belirgin biçimde " +
          "farklılaşıyor ve genellikle dezavantajlı olabiliyor. " +
          "Bu, uzman görüşü olmadan verilecek bir karar değil.",
      },
    ],
  },
];
