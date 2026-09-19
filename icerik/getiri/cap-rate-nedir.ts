import type { Blok } from "@/lib/bloklar";

export const capRateNedir: Blok[] = [
  {
    t: "p",
    metin:
      "Cap rate, bir mülkün **kredisiz** getirisidir: yıllık net işletme " +
      "geliri bölü fiyat. Kredi kullanıp kullanmadığınızı hesaba katmaz, " +
      "ve tam olarak bu yüzden işe yarar — mülkleri finansmandan " +
      "arındırılmış halde karşılaştırmanızı sağlar.",
  },
  {
    t: "p",
    metin:
      "Türkçe'de tam karşılığı yerleşmediği için çoğu zaman İngilizce " +
      "haliyle kullanılıyor. [Kira çarpanının](/getiri/kira-carpani/) tersi gibi düşünülebilir, " +
      "ama önemli bir farkla: **çarpan brüt kirayı, cap rate net işletme " +
      "gelirini kullanır.**",
  },

  { t: "h", metin: "Net işletme geliri nedir" },
  {
    t: "p",
    metin:
      "Cap rate'in tamamı bu kaleme bağlı, ve yanlış hesaplanan tek şey " +
      "de genelde bu oluyor.",
  },
  {
    t: "tablo",
    basliklar: ["", "Dahil", "Hariç"],
    satirlar: [
      ["Kira geliri", "Evet — [boşluk ve tahsilat kaybı](/surec/ev-bos-kalirsa/) düşülmüş hali", ""],
      ["Emlak vergisi", "Evet", ""],
      ["Sigorta", "Evet", ""],
      ["[Yönetim ücreti](/surec/property-management-sozlesmesi/)", "Evet", ""],
      ["[Bakım ve capex rezervi](/surec/tamir-masrafini-kim-oduyor/)", "Evet", ""],
      ["Kredi taksiti", "", "Hariç — cap rate kredisiz bakar"],
      ["Amortisman (vergi kalemi)", "", "Hariç — nakit çıkışı değil"],
      ["Gelir vergisi", "", "Hariç — malike göre değişir"],
    ],
    not:
      "Son üç satır kritik. Kredi taksitini düşen bir hesap cap rate " +
      "değildir; nakit akışıdır ve ayrı bir metriktir.",
  },
  {
    t: "not",
    baslik: "En sık manipüle edilen kalem",
    metin:
      "Bakım, capex rezervi ve boşluk payı hesaba konmazsa net işletme " +
      "geliri şişer ve cap rate olduğundan yüksek çıkar. Birinin size " +
      "verdiği cap rate'i görünce sorulacak soru: **bu net işletme " +
      "gelirinde boşluk ve capex var mı?**",
  },

  { t: "h", metin: "Ne işe yarar, ne işe yaramaz" },
  {
    t: "liste",
    maddeler: [
      "**Yarar:** aynı piyasadaki iki mülkü kıyaslamaya. Finansman farkı ortadan kalktığı için elma ile elma karşılaştırırsınız.",
      "**Yarar:** bir piyasanın genel seviyesini anlamaya. Cap rate'lerin düştüğü bir piyasada fiyatlar gelire göre yükseliyor demektir.",
      "**Yaramaz:** sizin cebinize ne geçeceğini söylemeye. Onun için [nakit akışı hesabı](/getiri/nakit-akisi-nasil-hesaplanir/) gerekir.",
      "**Yaramaz:** farklı piyasaları doğrudan kıyaslamaya. Düşük cap rate düşük risk, yüksek cap rate yüksek risk anlamına gelme eğilimindedir; iki sayı aynı ölçekte değildir.",
    ],
  },

  { t: "h", metin: "Yüksek cap rate iyi midir" },
  {
    t: "p",
    metin:
      "Otomatik olarak değil. Cap rate'i yükselten iki şey var: gelirin " +
      "yüksek olması ya da **fiyatın düşük olması.** İkincisi genellikle " +
      "bir riskin fiyatlanmış halidir — zayıf mahalle, eski yapı, daralan " +
      "ekonomi.",
  },
  {
    t: "p",
    metin:
      "Bu yüzden cap rate tek başına bir karar aracı değil, bir " +
      "**soru üreticisi**: neden bu kadar yüksek?",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Cap rate ile kira çarpanı arasındaki fark ne?",
        c:
          "Çarpan brüt kirayı kullanır ve kabaca kaç yılda amorti " +
          "edeceğini söyler; cap rate net işletme gelirini kullanır ve " +
          "yıllık yüzde verir. Çarpan ve [%1 kuralı](/getiri/yuzde-1-kurali/) hızlı eleme, cap rate daha " +
          "ciddi bir ölçüdür.",
      },
      {
        s: "Kredi kullanınca cap rate değişir mi?",
        c:
          "Hayır. Cap rate mülkün özelliğidir, sizin finansmanınızın " +
          "değil. Değişen şey sizin **nakit üstü nakit** getiriniz olur.",
      },
      {
        s: "Cap rate'i kim belirliyor?",
        c:
          "Piyasa. Alıcıların o bölgede o risk için kabul ettiği getiri " +
          "seviyesi cap rate'i oluşturuyor. Tek bir mülkün cap rate'i, " +
          "piyasanın seviyesinden çok saparsa sebebi araştırılmalı.",
      },
    ],
  },
];
