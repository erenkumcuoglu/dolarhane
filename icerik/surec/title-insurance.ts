import type { Blok } from "@/lib/bloklar";

/** İşlem mekaniği. Evergreen. */
export const titleInsurance: Blok[] = [
  {
    t: "p",
    metin:
      "Title insurance, tapunuza **geçmişten** gelebilecek bir hak " +
      "iddiasına karşı sigortadır. Diğer sigortalardan bir farkı var: " +
      "gelecekte olacak bir şeyi değil, **satın almadan önce olmuş ama " +
      "ortaya çıkmamış** bir şeyi güvence altına alır.",
  },
  {
    t: "p",
    metin:
      "Primi bir kez, kapanışta ödenir. Aidat yoktur; koruma siz mülkü " +
      "elinizde tuttuğunuz sürece devam eder.",
  },

  { t: "h", metin: "Neden gerekiyor" },
  {
    t: "p",
    metin:
      "Kapanıştan önce tapu araştırması yapılır ve mülkiyet zinciri geriye " +
      "doğru taranır. Araştırma çok şey yakalar ama her şeyi yakalayamaz: " +
      "kayıtlara hiç girmemiş ya da yanlış girmiş bir şey, araştırmada " +
      "görünmez. Sigorta tam olarak o boşluğu kapatır.",
  },
  {
    t: "tablo",
    basliklar: ["Tipik risk", "Nasıl ortaya çıkar"],
    satirlar: [
      ["Bilinmeyen mirasçı", "Yıllar sonra hak iddia ediyor"],
      ["Sahte imza / sahte tapu", "Zincirin bir yerinde geçersiz bir devir"],
      ["Kayıt hatası", "İlçe kütüğünde yanlış yazılmış isim, parsel ya da sınır"],
      ["Bildirilmemiş haciz ya da vergi borcu", "Önceki malikten kalan yük mülke bağlı geliyor"],
      ["Müteahhit alacağı", "Önceki malikin ödemediği iş için mülke konmuş şerh"],
      ["Sınır ve geçiş hakkı uyuşmazlığı", "Komşunun kullanım hakkı iddiası"],
    ],
    not:
      "Bunların ortak özelliği şu: hepsi **siz almadan önce** olmuş " +
      "şeyler. Dikkatli bir alıcı olmanız bunlardan korumuyor.",
  },

  { t: "h", metin: "İki ayrı poliçe var" },
  {
    t: "tablo",
    basliklar: ["Poliçe", "Kimi korur", "Kim ister"],
    satirlar: [
      [
        "Kredi veren poliçesi (lender's)",
        "Bankayı, kredi bakiyesi kadar",
        "Kredi kullanıyorsanız banka zorunlu tutar",
      ],
      [
        "Malik poliçesi (owner's)",
        "**Sizi**, alım bedeli kadar",
        "İsteğe bağlı — ve asıl önemli olan bu",
      ],
    ],
    vurgu: [1],
    not:
      "Sık yapılan hata: kredi veren poliçesi alındı diye korunduğunu " +
      "sanmak. O poliçe bankayı korur, sizi değil. **Malik poliçesi ayrıca " +
      "alınır** ve almadıysanız tapu riski tamamen sizdedir.",
  },

  { t: "h", metin: "Neyi kapsamaz" },
  {
    t: "liste",
    maddeler: [
      "Siz malikken doğan yükler — ödemediğiniz vergi, sizin borcunuz için konan haciz.",
      "İmar ve kullanım kısıtları; bunlar tapu kusuru değil, kamu düzenlemesidir.",
      "Fiziksel durum — çatı, tesisat, hasar. Onlar ev sigortasının ve inceleme raporunun konusu.",
      "Poliçede açıkça istisna edilmiş kalemler. **İstisna listesi okunmalıdır**; araştırmada çıkan bilinen bir sorun oraya yazılmış olabilir.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Yabancı alıcı için farklı mı işliyor?",
        c:
          "Hayır. Title insurance mülke bağlıdır, malikin uyruğuna değil. " +
          "Aynı poliçe, aynı kapsam.",
      },
      {
        s: "Prim ne kadar?",
        c:
          "Alım bedeline göre hesaplanır ve eyalete göre değişir; bazı " +
          "eyaletlerde tarife düzenlemeye tabidir. Kapanış masrafları " +
          "içinde tek seferlik kalemdir.",
      },
      {
        s: "Sattığımda devrediyor mu?",
        c:
          "Hayır. Malik poliçesi size aittir ve mülkü sattığınızda sona " +
          "erer; yeni alıcı kendi poliçesini alır. Ancak poliçe, siz " +
          "malikken ortaya çıkan geçmiş kaynaklı bir iddiada satıştan " +
          "sonra da sizi korumaya devam eder.",
      },
    ],
  },
];
