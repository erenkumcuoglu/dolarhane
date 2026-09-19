import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const depreciationAmortisman: Blok[] = [
  {
    t: "p",
    metin:
      "Amortisman, ABD vergi sisteminde kiralık gayrimenkulün en güçlü " +
      "aracı: **nakit çıkışı olmadan** vergiye tabi gelirinizi düşürüyor. " +
      "Elinizden para çıkmıyor ama vergi matrahınız azalıyor.",
  },
  {
    t: "p",
    metin:
      "Ama bedava değil. Satışta geri geliyor — ve bunu bilmeyen satıcı " +
      "için sürpriz oluyor.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Mantığı" },
  {
    t: "p",
    metin:
      "Vergi sistemi, binanın zamanla yıprandığını varsayıyor ve bu " +
      "yıpranmayı her yıl bir gider olarak yazmanıza izin veriyor. " +
      "Konut amaçlı kira mülkünde bu süre **27,5 yıl** ve indirim eşit " +
      "dilimlerle yapılıyor: bina değerinin yaklaşık **%3,6'sı** her yıl " +
      "gider yazılıyor. Arsa bu hesaba girmiyor.",
  },
  {
    t: "tablo",
    basliklar: ["Kalem", "Amortismana tabi mi"],
    satirlar: [
      ["Bina", "**Evet** — amortismanın konusu bu"],
      ["Arsa", "**Hayır.** Arsa yıpranmıyor sayılıyor"],
      ["Beyaz eşya, halı gibi kalemler", "Evet ama daha kısa sürelerle"],
      ["İyileştirmeler (yeni çatı, yeni sistem)", "Evet, kendi süreleriyle"],
      ["Rutin tamir", "Hayır — aynı yıl tam gider yazılıyor"],
    ],
    vurgu: [1],
    not:
      "Vurgulu satır kritik: **alım bedeli bina ve arsa arasında " +
      "ayrıştırılmak zorunda** ve yalnız bina kısmı amortize ediliyor. " +
      "Ayrıştırma oranı keyfi değil; ilçe değerleme kaydı ya da " +
      "değerleme raporu dayanak alınıyor.",
  },

  { t: "h", metin: "Neden bu kadar önemli" },
  {
    t: "p",
    metin:
      "Amortisman, kira gelirinizin bir kısmını vergiden koruyor. " +
      "Bazı durumlarda vergiye tabi geliri sıfıra kadar indiriyor, " +
      "hatta kâğıt üzerinde zarar yaratıyor — cebinize para girmeye " +
      "devam ederken.",
  },
  {
    t: "p",
    metin:
      "Bu yüzden **vergi sonrası getiri, vergi öncesi getiriden " +
      "beklendiği kadar düşük olmuyor.** Getiri hesabında amortismanı " +
      "hiç hesaba katmamak, vergi yükünü olduğundan yüksek tahmin etmek " +
      "demek.",
  },
  {
    t: "not",
    baslik: "Ama nakit akışı hesabına girmiyor",
    metin:
      "Amortisman bir muhasebe kalemi; cebinizden para çıkmıyor. " +
      "Nakit akışı hesabınıza **koymayın.** Vergi hesabınıza koyun. " +
      "İkisini karıştırmak, elinizde olmayan parayı varmış gibi " +
      "göstermek demek.",
  },

  { t: "h", metin: "Satışta geri alım" },
  {
    t: "p",
    metin:
      "Yıllar boyunca indirdiğiniz amortisman, mülkü sattığınızda " +
      "kazanca ekleniyor ve vergilendiriliyor. Yani amortisman bir " +
      "**vergi affı değil, vergi ertelemesi.**",
  },
  {
    t: "liste",
    maddeler: [
      "Erteleme yine değerli: bugün ödemediğiniz vergiyi yıllarca kullanıyorsunuz.",
      "Ama satış planlaması yaparken geri alım kalemini hesaba katmak gerekiyor.",
      "FIRPTA stopajı ile birlikte satış anındaki nakit etkisi ciddi olabiliyor.",
      "Amortismanı hiç kullanmamak bir çözüm değil — geri alım, kullanıp kullanmadığınıza bakmaksızın hesaplanabiliyor.",
    ],
  },
  {
    t: "not",
    baslik: "Son madde en çok şaşırtan",
    metin:
      "“Amortisman yazmazsam satışta sorun olmaz” yaklaşımı işe " +
      "yaramıyor: geri alım, **yazabileceğiniz** amortisman üzerinden " +
      "hesaplanabiliyor. Yani yazmamak sizi korumuyor, sadece her yıl " +
      "fazla vergi ödemenize yol açıyor. Bu kuralın detayı uzmanla " +
      "teyit edilmeli.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Amortisman süresi kaç yıl?",
        c:
          "Kiralık konut için belirli bir süre uygulanıyor ve bu süre " +
          "mevzuatta tanımlı. Güncel süre ve yöntem yayın öncesinde " +
          "uzman tarafından doğrulanacak.",
      },
      {
        s: "Bina/arsa ayrımını kim yapıyor?",
        c:
          "Muhasebeciniz, ilçe değerleme kaydına ya da bağımsız " +
          "değerlemeye dayanarak. Keyfi bir oran kullanmak sonradan " +
          "sorun çıkarabiliyor; dayanak belgeli olmalı.",
      },
      {
        s: "Türkiye tarafında da düşülüyor mu?",
        c:
          "Türkiye'nin kendi gider ve amortisman kuralları var ve " +
          "ABD'dekiyle örtüşmüyor. Bu, iki ülkenin vergiye tabi gelir " +
          "hesabının farklı çıkmasının başlıca sebeplerinden biri.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "IRS · Publication 527, Residential Rental Property — konut amaçlı kira " +
          "mülkünde amortisman süresi 27,5 yıl (doğrusal, MACRS)",
        url: "https://www.irs.gov/publications/p527",
      },
      {
        metin: "IRS · Publication 946, How To Depreciate Property",
        url: "https://www.irs.gov/publications/p946",
      },
      {
        metin:
          "Amortisman yalnız BİNA için ayrılır; arsa amortismana tabi değildir. " +
          "Bina/arsa ayrımı genellikle ilçe değerleme kaydına dayandırılır.",
      },
    ],
  },
];
