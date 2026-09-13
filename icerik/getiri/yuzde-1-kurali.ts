import type { Blok } from "@/lib/bloklar";

export const yuzde1Kurali: Blok[] = [
  {
    t: "p",
    metin:
      "%1 kuralı şunu söyler: aylık kira, evin fiyatının en az yüzde biri " +
      "olmalı. 150.000 dolarlık bir ev için ayda 1.500 dolar. Amerikan " +
      "yatırımcı literatüründe onlarca yıldır dolaşan bir baş parmak " +
      "kuralıdır.",
  },
  {
    t: "p",
    metin:
      "Doğru kullanımı **otuz saniyelik bir ön elemedir** — bir karar " +
      "aracı değil. Bu ayrımı kaçıranlar kuralın kendisinden çok zarar " +
      "görüyor.",
  },

  { t: "h", metin: "Neyi iyi yapıyor" },
  {
    t: "p",
    metin:
      "Bir ilan listesini hızla taramaya yarıyor. Yüzlerce ev arasından " +
      "bakmaya değmeyecekleri saniyeler içinde eliyor. Bir hesap makinesi " +
      "bile gerekmiyor: fiyatın son iki sıfırını silin, çıkan sayı " +
      "kabaca hedef kiradır.",
  },

  { t: "h", metin: "Neyi hiç görmüyor" },
  {
    t: "tablo",
    basliklar: ["Görmediği", "Neden önemli"],
    satirlar: [
      ["Emlak vergisi", "İlçeden ilçeye çok değişiyor; iki ev aynı kuralı geçip net getirileri çok farklı olabiliyor"],
      ["Sigorta", "Bölge riskine göre değişiyor"],
      ["Boşluk ve devir", "Düşük sınıf mülkte kuralı rahat geçen ev, nette kaybettirebiliyor"],
      ["Capex", "Eski yapıda büyük onarım getiriyi yiyor"],
      ["Aidat", "Varsa doğrudan nete vuruyor"],
      ["Faiz oranı", "Kredi maliyeti yüksekken kuralı geçmek yetmiyor"],
    ],
    not:
      "Kural yalnız iki sayıya bakıyor: kira ve fiyat. Getiriyi belirleyen " +
      "kalemlerin çoğu bu ikisinin dışında.",
  },
  {
    t: "not",
    baslik: "Kuralın geçerliliği zamanla değişti",
    metin:
      "Kural, ev fiyatlarının kiralara göre bugünkünden düşük olduğu bir " +
      "dönemde yerleşti. Fiyatlar kiralardan hızlı arttıkça kuralı geçen " +
      "mülk sayısı azaldı. Bugün pek çok piyasada %1'i geçen mülk, " +
      "genellikle **bir sebeple** ucuzdur — ve o sebep araştırılmalıdır.",
  },

  { t: "h", metin: "Doğru kullanım" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Listeyi kuralla tarayın; geçmeyenleri eleyin.",
      "Geçenler için **cap rate** hesaplayın — boşluk, vergi, sigorta, yönetim ve capex dahil.",
      "Kredi kullanacaksanız **DSCR** ve **nakit akışı** hesaplayın.",
      "Kararı üçüncü adımdaki sayılarla verin; kural burada artık işini bitirmiştir.",
    ],
  },
  {
    t: "p",
    metin:
      "Kuralı geçemeyen iyi bir mülk olabilir, geçen kötü bir mülk " +
      "olabilir. Kural bir filtredir; filtreye takılmamak nitelik " +
      "belgesi değildir.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "%2 kuralı diye bir şey de var mı?",
        c:
          "Var ve aynı mantıkla çalışıyor, ama %2'yi geçen mülkler " +
          "neredeyse her zaman çok düşük sınıf bölgelerde oluyor. Yüksek " +
          "eşik, daha iyi yatırım değil, daha yüksek risk anlamına " +
          "gelme eğiliminde.",
      },
      {
        s: "Fiyata kapanış masraflarını da katmalı mıyım?",
        c:
          "Hızlı elemede gerekmiyor. Ama ciddi hesapta bölen **yatırılan " +
          "toplam sermaye** olmalı: fiyat + kapanış + kiraya hazırlık.",
      },
      {
        s: "Kural Türkiye için de geçerli mi?",
        c:
          "Aritmetik olarak uygulanabilir ama Türkiye'de kira/fiyat " +
          "oranları bu eşiğin çok altında seyrediyor; kural fiilen hiçbir " +
          "mülkü geçirmez. Eşikler piyasaya özgüdür ve taşınamaz.",
      },
    ],
  },
];
