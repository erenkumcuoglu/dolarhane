import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const eviSatmak: Blok[] = [
  {
    t: "p",
    metin:
      "Satabilirsiniz; elde tutma süresi için yasal bir alt sınır yok. " +
      "Ama satış anında **üç ayrı kalem** aynı anda devreye giriyor ve " +
      "bunları alım kararı verirken bilmek, satış kararı verirken " +
      "öğrenmekten çok daha ucuz.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Satışta devreye giren üç kalem" },
  {
    t: "tablo",
    basliklar: ["Kalem", "Ne oluyor", "Ne zaman ödeniyor"],
    satirlar: [
      [
        "**Kapanışta stopaj (FIRPTA)**",
        "Satış bedelinin bir yüzdesi kaynakta kesiliyor — kazanç üzerinden değil, **bedel** üzerinden",
        "Kapanış anında",
      ],
      [
        "**Değer artış kazancı**",
        "Satış bedeli eksi düzeltilmiş maliyet. Elde tutma süresi bir yılı aşıyorsa uzun vadeli sayılıyor",
        "Yıllık beyanla",
      ],
      [
        "**Amortisman geri alımı**",
        "Yıllarca gider yazdığınız amortisman satışta geri alınıyor; yazmasanız bile hesaplanıyor",
        "Yıllık beyanla",
      ],
    ],
    vurgu: [2],
    not:
      "Vurgulu satır en sık atlanan kalem. Amortisman gider yazıldığı " +
      "yıllarda vergiyi düşürüyor, satışta ise vergilendirilebilir " +
      "tutarı yükseltiyor. Yani amortisman bir **indirim değil erteleme.**",
  },

  {
    t: "not",
    baslik: "Üç yıl kısa bir süre",
    metin:
      "Alım masrafları (kapanış, hizmet bedeli) ve satış masrafları " +
      "(emlakçı komisyonu, kapanış) birlikte **bedelin yaklaşık %8-10'u** " +
      "büyüklüğünde. Üç yılda bu masrafı çıkaracak bir değer artışı " +
      "garanti değil. Bu modelin getirisi **kira akışında**; değer " +
      "artışı üstüne çıkarsa iyi, planın merkezine konmaz. Kısa vadede " +
      "satmayı düşünüyorsanız bu yatırım büyük ihtimalle yanlış araç.",
  },

  { t: "h", metin: "Kapanış sonrası ne oluyor" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Kapanışta stopaj kesiliyor ve IRS'e gönderiliyor; kalan tutar size ödeniyor.",
      "Yıllık beyanınızda gerçek kazanç ve gerçek vergi hesaplanıyor.",
      "Kesilen stopaj bu vergiden mahsup ediliyor.",
      "Fazla kesildiyse iade ediliyor — ama beyanla ve zamana yayılarak.",
      "Aynı gelir Türkiye'de de beyana tabi; ABD'de ödenen vergi anlaşma kapsamında mahsup ediliyor.",
    ],
  },
  {
    t: "p",
    metin:
      "Gerçek verginiz kesilecek stopajdan düşükse **kapanıştan önce** " +
      "azaltılmış stopaj belgesi için başvurulabiliyor. Süreç zaman " +
      "aldığı için satış kararı verilir verilmez başlatılması gerekiyor.",
  },

  { t: "h", metin: "Belge saklama" },
  {
    t: "liste",
    maddeler: [
      "Alım bedeli ve kapanış dosyası — düzeltilmiş maliyetin tabanı.",
      "Yapılan iyileştirmelerin faturaları — maliyeti yükseltir, kazancı düşürür.",
      "Her yıl yazılan amortisman dökümü — satışta geri alım hesabı buradan çıkıyor.",
      "Satış kapanış dosyası ve kesilen stopaj belgesi.",
    ],
  },
  {
    t: "not",
    baslik: "Saklanmayan belge, fazla vergi",
    metin:
      "İyileştirme faturası olmayan yatırımcı, yaptığı harcamayı " +
      "maliyete ekleyemiyor ve olduğundan yüksek bir kazanç üzerinden " +
      "vergilendiriliyor. Bu tamamen önlenebilir bir kayıp.",
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "IRS · Foreign Investment in Real Property Tax Act (FIRPTA) — satışta kaynakta kesinti",
        url: "https://www.irs.gov/individuals/international-taxpayers/firpta-withholding",
      },
      {
        metin:
          "IRS · Form 8288-B, Application for Withholding Certificate — azaltılmış stopaj başvurusu",
        url: "https://www.irs.gov/forms-pubs/about-form-8288-b",
      },
      {
        metin:
          "IRS · Publication 544, Sales and Other Dispositions of Assets — kazanç hesabı ve düzeltilmiş maliyet",
        url: "https://www.irs.gov/publications/p544",
      },
      {
        metin:
          "IRS · Publication 527, Residential Rental Property — amortisman ve satışta geri alım",
        url: "https://www.irs.gov/publications/p527",
      },
      {
        metin:
          "Oranlar, elde tutma süresi eşikleri ve geri alım hesabı kişinin durumuna göre değişir; bu sayfa oran yazmıyor.",
      },
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Kaç yıl tutmak zorundayım?",
        c:
          "Yasal bir zorunluluk yok. Ama alım ve satış masrafları " +
          "birlikte bedelin yaklaşık %8-10'u; bu masrafı kira akışıyla " +
          "ya da değer artışıyla çıkarmadan satmak zarar demek.",
      },
      {
        s: "Zararına satarsam vergi çıkmaz değil mi?",
        c:
          "Kazanç vergisi çıkmayabilir ama kapanıştaki stopaj yine " +
          "kesilebiliyor, çünkü stopaj kazanç üzerinden değil bedel " +
          "üzerinden hesaplanıyor. Bu durumda azaltılmış stopaj belgesi " +
          "başvurusu daha da önemli hale geliyor.",
      },
      {
        s: "Amortisman yazmazsam geri alım da olmaz mı?",
        c:
          "Hayır. Geri alım, yazılabilecek amortisman üzerinden " +
          "hesaplanabiliyor. Yani yazmamak sizi korumuyor, sadece her " +
          "yıl fazladan vergi ödemiş oluyorsunuz.",
      },
      {
        s: "Satışı siz mi yönetiyorsunuz?",
        c:
          "Evet, alımda olduğu gibi satışta da süreci biz yürütüyoruz: " +
          "değerleme, listeleme, kapanış koordinasyonu ve stopaj " +
          "evrakı. Muhasebeci eşleştirmesi de bu aşamada yapılıyor.",
      },
    ],
  },
];
