import type { Blok } from "@/lib/bloklar";

/** Operasyon dörtlüsü — 1/4. Mekanizma içeriği, evergreen. */
export const kiraciNasilBulunuyor: Blok[] = [
  {
    t: "p",
    metin:
      "Kiracıyı siz bulmuyorsunuz; mülk yönetim şirketi buluyor. Sizin " +
      "yaptığınız tek şey **kabul kriterlerini onaylamak** ve sonucu " +
      "görmek. Süreç Amerika'da standartlaşmış durumda ve federal ayrımcılık " +
      "yasaları nedeniyle kişisel tercihe kapalı.",
  },

  { t: "h", metin: "Eleme kriterleri" },
  {
    t: "p",
    metin:
      "Yönetim şirketi başvuranları sabit ve yazılı kriterlerle eler. " +
      "Kriterler baştan belirlenir ve **herkese aynı** uygulanır — bu bir " +
      "nezaket değil, yasal zorunluluk.",
  },
  {
    t: "tablo",
    basliklar: ["Kriter", "Neye bakılır", "Neden önemli"],
    satirlar: [
      [
        "Gelir",
        "Aylık brüt gelirin kiraya oranı; yaygın eşik kiranın üç katı",
        "Ödeme gücünün en güçlü tek göstergesi",
      ],
      [
        "Kredi geçmişi",
        "Kredi notu ve ödenmemiş borç kaydı",
        "Geçmiş ödeme davranışı gelecek ödeme davranışını tahmin ediyor",
      ],
      [
        "Tahliye kaydı",
        "Daha önce mahkeme kararıyla tahliye edilmiş mi",
        "En ağır sinyal; tek başına ret sebebi olabiliyor",
      ],
      [
        "İstihdam doğrulaması",
        "İşveren teyidi, maaş bordrosu",
        "Beyan edilen gelirin gerçek olduğunu gösterir",
      ],
      [
        "Önceki ev sahibi referansı",
        "Zamanında ödedi mi, evi nasıl bıraktı",
        "Kâğıtta görünmeyen davranışı gösteren tek kalem",
      ],
    ],
    not:
      "Eşikler piyasaya ve mülkün sınıfına göre değişir. Kriterleri " +
      "gevşetmek boşluğu kısaltır ama tahsilat riskini yükseltir — bu bir " +
      "takastır, ve kararı siz verirsiniz.",
  },
  {
    t: "not",
    baslik: "Sizin seçemeyeceğiniz şeyler",
    metin:
      "Federal Fair Housing yasası ırk, renk, din, cinsiyet, ulusal köken, " +
      "aile durumu ve engellilik temelinde ayrımcılığı yasaklıyor; birçok " +
      "eyalet ve şehir listeyi genişletiyor. Ev sahibi olarak bu başlıklarda " +
      "tercih **belirtemezsiniz** — belirtmeniz yönetim şirketini de sizi de " +
      "yasal riske sokar. Seçim gelir ve ödeme geçmişi üzerinden yapılır.",
  },

  { t: "h", metin: "Ne kadar sürer" },
  {
    t: "p",
    metin:
      "İlandan imzaya kadar geçen süre mevsime, mülkün sınıfına ve kiranın " +
      "piyasaya göre konumuna bağlı. Sektör verisinde kiracılar arası " +
      "ortalama boşluk iki hafta civarında ölçülüyor; daha alt sınıf " +
      "mülklerde belirgin biçimde uzuyor.",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Ev kiraya hazır hale getirilir (temizlik, küçük tamirler, fotoğraf).",
      "İlan yayınlanır ve gösterimler başlar.",
      "Başvurular alınır, eleme yapılır, referanslar aranır.",
      "Sözleşme imzalanır, depozito ve ilk kira tahsil edilir.",
      "Ev teslim edilir; giriş durumu fotoğraflı tutanakla kaydedilir.",
    ],
  },
  {
    t: "not",
    baslik: "Hızın bedeli",
    metin:
      "Kirayı piyasanın üstüne koyarsanız ev daha uzun boş kalır. " +
      "Bir ay fazla boşluk, aylık kirada yapacağınız küçük bir artışın " +
      "yıllık toplamını genelde götürüyor. Boşluk, kira artışından " +
      "daha pahalı bir kalemdir.",
  },

  { t: "h", metin: "Yerleştirme ücreti" },
  {
    t: "p",
    metin:
      "Yönetim şirketi yeni kiracı yerleştirdiğinde aylık yönetim ücretinden " +
      "ayrı bir **yerleştirme ücreti** alır. Sektörde yaygın aralık bir aylık " +
      "kiranın yarısı ile tamamı arasındadır. Bu ücret her kiracı değişiminde " +
      "yeniden doğar — kiracının ne kadar kaldığının neden önemli olduğunu " +
      "gösteren en somut kalem budur.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Kiracıyı ben onaylıyor muyum?",
        c:
          "Kriterleri siz onaylıyorsunuz, kişiyi değil. Kriterleri karşılayan " +
          "başvuru geldiğinde yönetim şirketi ilerler. Kişi bazında seçim " +
          "yapmak hem operasyonu yavaşlatır hem ayrımcılık riski doğurur.",
      },
      {
        s: "Kiracının kim olduğunu öğrenebilir miyim?",
        c:
          "Sözleşme sizin mülkünüze ait olduğu için temel bilgilere " +
          "erişirsiniz. Ancak kredi raporu gibi hassas belgeler gizlilik " +
          "kuralları nedeniyle yönetim şirketinde kalır; size eleme sonucu " +
          "bildirilir.",
      },
      {
        s: "Depozito ne kadar ve kimde durur?",
        c:
          "Tutar ve nasıl tutulacağı eyalete göre düzenlenir; birçok eyalet " +
          "üst sınır koyar ve ayrı hesapta tutulmasını ister. Depozito " +
          "gelir değildir — çıkışta hasar yoksa iade edilir.",
      },
    ],
  },
];
