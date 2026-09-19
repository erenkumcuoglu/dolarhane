import type { Blok } from "@/lib/bloklar";

/**
 * Hassas sayfa. Kurallar: rakip firma adı YOK, jeopolitik kehanet YOK,
 * "Dubai kötü" iddiası YOK. Yapısal riskler ve onları azaltma yolları —
 * Dubai'ye yatırım yapacak birine de yarayacak biçimde.
 */
export const dubaiEvYatirimiRiskleri: Blok[] = [
  {
    t: "p",
    metin:
      "Bu sayfa Dubai'yi elemek için yazılmadı. Dubai'nin gerçek " +
      "avantajları var: kira gelir vergisi ve emlak vergisi yok, " +
      "İstanbul'a yakın, işlem hızlı. **Aşağıdakiler bu avantajları " +
      "ortadan kaldırmıyor; hesaba katılması gereken yapısal riskler.**",
  },
  {
    t: "p",
    metin:
      "Bizden almayacak, Dubai'den alacak birine de yarasın diye " +
      "azaltma yollarını da yazdık.",
  },

  { t: "h", metin: "Yapısal riskler" },
  {
    t: "tablo",
    basliklar: ["Risk", "Neden", "Nasıl azaltılır"],
    satirlar: [
      [
        "Arz döngüsü",
        "Piyasa büyük ölçekli proje arzıyla şekilleniyor; yeni arz dalgaları kira ve fiyat üzerinde baskı yaratabiliyor",
        "Teslim takvimindeki arz hacmini araştırmak; yeni proje yoğunluğunun düşük olduğu yerleşik bölgeleri tercih etmek",
      ],
      [
        "Maketten alım",
        "[Teslim edilmemiş bir mülk](/karsilastir/maketten-ev-almak-riskleri/) satın alınıyor; gecikme ve spesifikasyon değişikliği riski var",
        "Geliştiricinin teslim geçmişini incelemek, emanet hesabı korumasını doğrulamak, mevcut mülkü tercih etmek",
      ],
      [
        "Bölge kısıtı",
        "Yabancıya freehold yalnız belirlenmiş alanlarda",
        "Mülkün freehold alanda olduğunu tapu kaydından doğrulamak",
      ],
      [
        "Tapu sigortası yaygın değil",
        "ABD'deki [title insurance](/surec/title-insurance/) benzeri bir ürün standart değil",
        "Tapu araştırmasını avukatla yapmak; sicil kaydını doğrudan görmek",
      ],
      [
        "Kur rejimi bağımlılığı",
        "Kira dirhem cinsinden; dolara sabitleme bir politika tercihi",
        "Azaltılamaz. Hesabın buna bağlı olduğunu bilerek karar vermek",
      ],
      [
        "Bölgesel jeopolitik yoğunlaşma",
        "Varlıkların tamamı aynı bölgede ise aynı döngüye maruz",
        "Coğrafi dağılım — tek bölgeye bağlı kalmamak",
      ],
    ],
    vurgu: [4],
  },
  {
    t: "not",
    baslik: "Ne söylemiyoruz",
    metin:
      "Kur sabitlemesinin bozulacağını söylemiyoruz; uzun süredir " +
      "sürdürülüyor. Bölgeyle ilgili bir kehanette de bulunmuyoruz. " +
      "Söylediğimiz tek şey: **bir politika tercihine bağlı olan bir " +
      "hesap ile o tercihe bağlı olmayan bir hesap aynı şey değildir**, " +
      "ve bu farkı bilerek karar vermek gerekir.",
  },

  { t: "h", metin: "Veriden görünen şey" },
  {
    t: "p",
    metin:
      "TCMB verisine göre Türkiye'den yurt dışı gayrimenkule yapılan " +
      "ödemeler 2026'nın ilk iki ayında yıllık bazda güçlü artarken " +
      "(Ocak +%44, Şubat +%18), bölgesel bir jeopolitik gerilimin " +
      "ardından geriledi ve Mayıs'ta 143 milyon dolarla son 29 ayın en " +
      "düşük seviyesine indi.",
  },
  {
    t: "p",
    metin:
      "Bu düşüş kategorinin **tamamında** yaşandı, yalnız tek bir " +
      "destinasyonda değil. Dolayısıyla veriden çıkan sonuç “şu ülkeden " +
      "kaçın” değil: **tek bir bölgeye yoğunlaşmış bir portföy, o " +
      "bölgenin siyasi döngüsüne birebir bağlıdır.**",
  },

  { t: "h", metin: "Alacaksanız sorulacak beş soru" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Mülk **mevcut mu, maketten mi**? Maketten ise geliştiricinin teslim geçmişi ne?",
      "Freehold alanda mı? Sicil kaydından doğrulanabiliyor mu?",
      "Teslim takviminde bölgeye ne kadar **yeni arz** geliyor?",
      "Vaat edilen kira, **ilan edilen** kiralarla uyumlu mu? [Uyumsuzluk en yaygın getiri tuzağı](/getiri/getiri-tuzaklari/).",
      "Ödeme [emanet hesabına](/surec/escrow-nedir/) mı gidiyor, geliştiricinin hesabına mı?",
    ],
  },
  {
    t: "not",
    baslik: "Aynı beş soruyu bize de sorun",
    metin:
      "Bu sorular Dubai'ye özgü değil. Mülkün mevcut olup olmadığı, " +
      "kaydın doğrulanabilirliği, vaat edilen kiranın ilanlarla uyumu ve " +
      "paranın nereye gittiği — hangi ülkede olursanız sorulmalı. " +
      "Bize sorduğunuzda cevap veremediğimiz bir kalem varsa, bu bizim " +
      "eksiğimizdir.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Dubai'de vergi olmaması getiriyi ne kadar değiştiriyor?",
        c:
          "Anlamlı ölçüde. Kira gelir vergisinin ve emlak vergisinin " +
          "olmaması, [aynı brüt getiriden daha yüksek net getiri](/getiri/brut-vs-net-getiri/) kalması " +
          "demek. Bu, Dubai'nin en güçlü ve en somut argümanı.",
      },
      {
        s: "O zaman neden ABD?",
        c:
          "Mülkiyet altyapısı, tapu sigortası, içtihat derinliği ve " +
          "kiranın yerli dolar olması. Vergi tarafında Dubai önde, " +
          "hukuki dayanıklılık ve para birimi tarafında ABD. Hangisinin " +
          "sizin için ağır olduğuna siz karar veriyorsunuz.",
      },
      {
        s: "Bu sayfa taraflı değil mi?",
        c:
          "Taraflıyız — ABD'de ev satıyoruz. O yüzden Dubai'nin " +
          "avantajlarını da yazdık ve riskleri azaltma yollarını da " +
          "verdik. Yalnız riskleri sıralayıp avantajları saklamak " +
          "taraflılık olurdu.",
      },
    ],
  },
];
