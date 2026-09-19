import type { Blok } from "@/lib/bloklar";

export const yunanistanMiAmerikaMi: Blok[] = [
  {
    t: "p",
    metin:
      "Bu karşılaştırma genellikle yanlış eksende yapılıyor. Yunanistan " +
      "ağırlıkla **oturum** için alınıyor, ABD **kira getirisi** için. " +
      "İkisini getiri oranı üzerinden kıyaslamak, biri için ödenen primi " +
      "görmezden gelmek demek.",
  },
  {
    t: "p",
    metin:
      "Doğru soru şu: **oturum hakkı sizin için ne kadar değerli?** " +
      "[Ayrımın tamamı ayrı bir sayfada](/karsilastir/oturum-mu-getiri-mi/). " +
      "Cevap “çok” ise Yunanistan'ın düşük getirisi bir kusur değil, " +
      "primin bedeli. Cevap “gerekmiyor” ise o primi neden ödüyorsunuz?",
  },

  { t: "h", metin: "Karşılaştırma" },
  {
    t: "tablo",
    basliklar: ["", "Yunanistan", "ABD"],
    satirlar: [
      [
        "Asıl çekicilik",
        "Gayrimenkul karşılığı oturum ve Schengen hareketliliği",
        "Dolar cinsinden kira geliri",
      ],
      [
        "Asgari tutar",
        "Program eşiğine bağlı; popüler bölgelerde eşik yükseltildi",
        "Yok — bütçenize göre",
      ],
      [
        "Tipik brüt getiri",
        "Yerleşik oturum piyasalarında görece düşük seviyelerde konuşuluyor",
        "Nakit akışı odaklı piyasalarda belirgin daha yüksek",
      ],
      [
        "Kiranın para birimi",
        "Euro",
        "Dolar",
      ],
      [
        "Kural istikrarı",
        "Program siyasi kararla değişebiliyor; eşikler geçmişte yükseltildi",
        "Mülkiyet rejimi programa bağlı değil",
      ],
      [
        "Mülkiyet altyapısı",
        "AB hukuk çerçevesi",
        "İlçe kütüğü + [title insurance](/surec/title-insurance/)",
      ],
      [
        "Kiracı profili",
        "Ağırlıkla kısa dönem / turizm odaklı olabiliyor",
        "[Uzun dönem oturum kiracısı](/surec/kiraci-nasil-bulunuyor/)",
      ],
    ],
    vurgu: [4],
  },
  {
    t: "not",
    baslik: "Vurgulu satır asıl farkı taşıyor",
    metin:
      "Oturum programları siyasi araçlardır ve değişiyorlar: son yıllarda " +
      "bir ülke gayrimenkul yolunu programdan çıkardı, biri yatırımcı " +
      "vizesini tamamen kaldırdı, Yunanistan popüler bölgelerde eşiği " +
      "yükseltti. **Mülkiyet hakkınız bu değişikliklerden etkilenmiyor; " +
      "ama oturum beklentiniz etkileniyor.** Programa bağlı bir karar " +
      "veriyorsanız, programın değişebileceğini karara dahil edin.",
  },

  { t: "h", metin: "Turizm kirası ile oturum kirası aynı şey değil" },
  {
    t: "p",
    metin:
      "Oturum programlarının yoğunlaştığı bölgeler genellikle turistik " +
      "bölgeler. Orada kira, uzun dönem oturum kirası değil kısa dönem " +
      "konaklama geliri olabiliyor. Bu ayrım getirinin karakterini " +
      "tamamen değiştiriyor:",
  },
  {
    t: "tablo",
    basliklar: ["", "Kısa dönem / turizm", "Uzun dönem oturum"],
    satirlar: [
      ["Brüt gelir", "Daha yüksek görünebilir", "Daha düşük ve sabit"],
      ["Mevsimsellik", "Yüksek — [yılın bir kısmında boş](/surec/ev-bos-kalirsa/)", "Yok"],
      ["İşletme gideri", "Yüksek: temizlik, platform komisyonu, yönetim", "Düşük"],
      ["Düzenleme riski", "Şehirler kısıtlama getirebiliyor", "Düşük"],
      ["Yıllık net", "Oynak", "Öngörülebilir"],
    ],
    not:
      "Kısa dönem gelir [brütte etkileyici görünüp nette yakınsayabiliyor](/getiri/brut-vs-net-getiri/). " +
      "Karşılaştırma yaparken iki modelin aynı türden gelir olmadığını " +
      "hesaba katın.",
  },

  { t: "h", metin: "Dürüst sonuç" },
  {
    t: "liste",
    maddeler: [
      "**Schengen hareketliliği ya da AB'de bir B planı istiyorsanız:** Yunanistan tarafına bakın. ABD'de ev almak size bunu vermiyor ve biz de vermiyoruz.",
      "**Dolar cinsinden öngörülebilir kira geliri istiyorsanız:** oturum primi ödemenin gerekçesi yok.",
      "**İkisini de istiyorsanız:** iki ayrı karar verin, tek mülkten iki sonuç beklemeyin.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Euro mu dolar mı daha iyi?",
        c:
          "“Daha iyi” yoktur; hangi para biriminde harcayacağınıza ve " +
          "hangi riskten korunmak istediğinize bağlı. TL'den çıkış " +
          "arıyorsanız ikisi de çalışır. Rezerv para birimi tercihi ise " +
          "ayrı bir tartışma ve getiri hesabının parçası değil.",
      },
      {
        s: "Yunanistan'da aldığım ev kira getirisi sağlamaz mı?",
        c:
          "Sağlar. Mesele getirinin olup olmaması değil, seviyesi ve " +
          "karakteri. Oturum eşiği fiyatı yukarı çektiği ölçüde getiri " +
          "oranı baskılanıyor.",
      },
      {
        s: "Programa güvenip alıp sonra kural değişirse ne olur?",
        c:
          "Genellikle kazanılmış haklar korunuyor ama yenileme koşulları " +
          "değişebiliyor. Bu yüzden başvuru anındaki resmî metni ve " +
          "yenileme şartlarını bir avukatla teyit etmek gerekiyor — " +
          "aracının özetiyle değil.",
      },
    ],
  },
];
