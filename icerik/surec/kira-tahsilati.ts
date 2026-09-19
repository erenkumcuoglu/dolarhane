import type { Blok } from "@/lib/bloklar";

/** Operasyon dörtlüsü — 2/4. Evergreen. */
export const kiraTahsilati: Blok[] = [
  {
    t: "p",
    metin:
      "Kira size doğrudan gelmiyor. Kiracı [yönetim şirketine](/surec/property-management-sozlesmesi/) ödüyor, şirket " +
      "giderleri ve kendi ücretini düşüyor, kalanı sizin hesabınıza " +
      "aktarıyor. Aradaki her adım kayıtlı ve aylık raporda satır satır " +
      "görünüyor — **bu yüzden tahsilat, güvenilmesi gereken değil " +
      "denetlenebilen bir süreçtir.**",
  },

  { t: "h", metin: "Paranın izlediği yol" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Kiracı ayın belirlenen gününde yönetim şirketinin sistemine öder — genellikle otomatik banka transferiyle.",
      "Şirket tahsil edilen tutardan **yönetim ücretini** düşer (sektörde yaygın aralık tahsil edilen kiranın %8–10'u).",
      "O ay yapılmış [tamir](/surec/tamir-masrafini-kim-oduyor/), aidat ya da vergi ödemesi varsa o da düşülür.",
      "Kalan tutar sizin ABD banka hesabınıza aktarılır; genellikle ayın belirli bir gününde.",
      "Aynı gün aylık gelir-gider raporu (owner statement) yayınlanır.",
    ],
  },
  {
    t: "not",
    baslik: "Dikkat edilecek tek yapısal nokta",
    metin:
      "Kira, yönetim şirketinin kendi parasından **ayrı bir emanet hesabında** " +
      "tutulmalı. Bu birçok eyalette lisans şartıdır. Sözleşme imzalamadan " +
      "önce sorulacak soru şu: müşteri parası ayrı hesapta mı tutuluyor?",
  },

  { t: "h", metin: "Aylık rapor neyi gösterir" },
  {
    t: "tablo",
    basliklar: ["Satır", "Ne anlama gelir"],
    satirlar: [
      ["Tahsil edilen kira", "Kiracının fiilen ödediği tutar — sözleşmedeki tutar değil"],
      ["Yönetim ücreti", "Tahsil edilen üzerinden hesaplanır; kira gelmezse genelde ücret de doğmaz"],
      ["Tamir ve bakım", "O ay yapılan işler, faturalarıyla"],
      ["Rezerv", "Şirketin acil işler için elinde tuttuğu asgari bakiye"],
      ["Net aktarım", "Hesabınıza geçen tutar"],
    ],
    not:
      "Raporda fatura eki yoksa isteyin. Fatura göstermeyen bir tamir " +
      "kalemi, denetlenemeyen bir giderdir.",
  },

  { t: "h", metin: "Kira gelmezse" },
  {
    t: "p",
    metin:
      "Gecikme, tahliyenin ilk adımı değil; standart bir süreçtir ve " +
      "çoğu durumda tahliyeye varmadan çözülür.",
  },
  {
    t: "liste",
    maddeler: [
      "Sözleşmede yazılı **ödemesiz gün** dolar (genellikle birkaç gün).",
      "Gecikme bedeli işler ve hatırlatma gönderilir.",
      "Ödeme hâlâ gelmezse yasal ihbar verilir; süresi ve biçimi eyalete göre sıkı kurallara bağlıdır.",
      "Çözülmezse [mahkeme süreci](/surec/amerikada-tahliye-sureci/) başlar.",
    ],
  },
  {
    t: "not",
    baslik: "Aleyhimize olan not",
    metin:
      "Tahsilat kaybı sıfır değildir ve sıfır olacağını söyleyen hesaba " +
      "güvenmeyin. Getiri modelinde her zaman bir tahsilat kaybı payı " +
      "bulunmalı; payı düşük tutmanın yolu kirayı yükseltmek değil, " +
      "[kiracı elemesini sıkı tutmaktır](/surec/kiraci-nasil-bulunuyor/).",
  },

  { t: "h", metin: "Para Türkiye'ye nasıl geliyor" },
  {
    t: "p",
    metin:
      "Kira önce **sizin adınıza açılmış ABD hesabına** geçer. Oradan " +
      "[Türkiye'ye transfer](/surec/para-transferi/) tamamen sizin kontrolünüzdedir: istediğiniz " +
      "zaman, istediğiniz tutarda. Çoğu yatırımcı biriktirip yılda birkaç " +
      "kez transfer ediyor, çünkü her transferin masrafı var.",
  },
  {
    t: "p",
    metin:
      "Kirayı ABD'de bırakmanın ikinci bir sebebi daha var: tamir, vergi ve " +
      "sigorta ödemeleri oradan yapılıyor. Hesapta bir tampon tutmak, her " +
      "gider için Türkiye'den para göndermekten hem ucuz hem hızlı.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Kira dolar olarak mı yatıyor?",
        c:
          "Evet. Kiracı dolarla ödüyor, ABD hesabınıza dolar geçiyor. " +
          "Döviz dönüşümü ancak siz Türkiye'ye transfer ettiğinizde ve " +
          "sizin seçtiğiniz anda oluyor.",
      },
      {
        s: "Yönetim şirketi ödemezse ne olur?",
        c:
          "Müşteri parasının ayrı emanet hesapta tutulması şartı tam olarak " +
          "bunun içindir. Ayrıca birçok eyalette emlak lisansı bu yükümlülüğe " +
          "bağlıdır; ihlali lisans kaybına kadar gider. Sözleşmeye aylık " +
          "aktarım tarihini yazdırın.",
      },
      {
        s: "Bu geliri Türkiye'de beyan etmem gerekiyor mu?",
        c:
          "Türkiye'de tam mükellefseniz yurt dışı kira geliriniz beyana " +
          "tabidir ve ABD'de ödenen vergi için mahsup mekanizması vardır. " +
          "Ayrıca ABD tarafında da yıllık beyan yükümlülüğünüz doğar. " +
          "Bu iki tarafı da vergi kümesinde ayrıca anlatıyoruz.",
      },
    ],
  },
];
