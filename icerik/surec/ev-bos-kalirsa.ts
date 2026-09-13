import type { Blok } from "@/lib/bloklar";

/** Operasyon dörtlüsü — 3/4. Evergreen. */
export const evBosKalirsa: Blok[] = [
  {
    t: "p",
    metin:
      "Ev boş kalır. Soru “kalır mı” değil, **“ne sıklıkla ve ne kadar”** — " +
      "ve bunun hesaba baştan konulup konulmadığı. Boşluk bir aksilik değil, " +
      "öngörülebilir bir gider kalemidir; sürpriz olmasının tek sebebi " +
      "modele hiç yazılmamış olmasıdır.",
  },

  { t: "h", metin: "Boşlukta ne durur, ne durmaz" },
  {
    t: "tablo",
    basliklar: ["Kalem", "Ev boşken"],
    satirlar: [
      ["Kira geliri", "Durur"],
      ["Emlak vergisi", "Devam eder — mülkün kiralı olup olmaması değiştirmez"],
      ["Sigorta", "Devam eder; uzun boşlukta poliçe koşulları değişebilir"],
      ["Aidat (varsa)", "Devam eder"],
      ["Su, elektrik, doğalgaz", "Kiracı çıkınca ev sahibine döner"],
      ["Yönetim ücreti", "Genelde durur — tahsil edilen kira üzerinden alınır"],
      ["Kredi taksiti", "Devam eder"],
    ],
    vurgu: [1, 6],
    not:
      "Kritik olan iki satır vurgulu: vergi ve kredi taksiti boşlukta da " +
      "işliyor. Nakit akışı hesabında bu iki kalem her ay var sayılmalı.",
  },

  { t: "h", metin: "Boşluk ne kadar sürer" },
  {
    t: "p",
    metin:
      "Sektör verisinde kiracılar arası ortalama boşluk iki hafta civarında " +
      "ölçülüyor; ama bu ortalama mülk sınıfına göre belirgin biçimde " +
      "ayrışıyor. Alt sınıf mülklerde hem boşluk uzun hem devir sık — " +
      "ikisi birleşince yıllık kayıp katlanıyor.",
  },
  {
    t: "p",
    metin:
      "Süreyi belirleyen dört şey var: kiranın piyasaya göre konumu, evin " +
      "kiraya hazır olup olmadığı, mevsim (yaz aylarında hareket daha " +
      "yoğun), ve mahallenin kiracı talebi.",
  },
  {
    t: "not",
    baslik: "En pahalı kalem boşluk değil, devir",
    metin:
      "Bir kiracının çıkıp yenisinin girmesi yalnız boş geçen ayı " +
      "maliyetlendirmiyor: ev yeniden kiraya hazırlanıyor (boya, temizlik, " +
      "küçük tamir) ve yönetim şirketine yeniden **yerleştirme ücreti** " +
      "ödeniyor. Bu yüzden uzun kalan bir kiracı, yüksek kiradan daha " +
      "değerlidir. Kirayı her yıl piyasanın tepesine çekmek çoğu zaman " +
      "net getiriyi düşürür.",
  },

  { t: "h", metin: "Boşluğu modele koymak" },
  {
    t: "p",
    metin:
      "Doğru yöntem, boşluğu “olursa” diye düşünmek değil, yıllık gelirden " +
      "sabit bir yüzde düşmek. Getiri hesabınızda boşluk payı yoksa hesap " +
      "brütün başka bir adıdır.",
  },
  {
    t: "liste",
    maddeler: [
      "Yıllık brüt kiradan bir **boşluk payı** düşün.",
      "Ayrı bir **tahsilat kaybı** payı ekleyin — boşlukla aynı şey değil.",
      "Devir sıklığını tahmin edin ve her devirin maliyetini yıla yayın.",
      "Kalan rakam üzerinden getiriyi hesaplayın.",
    ],
    sirali: true,
  },
  {
    t: "p",
    metin:
      "Payların ne olacağı mülkün sınıfına ve piyasaya bağlı; tek bir doğru " +
      "sayı yok. Önemli olan sıfır olmaması.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Ev boşken kira garantisi veren var mı?",
        c:
          "Bazı şirketler “garantili kira” adı altında ürün sunuyor. Bu bir " +
          "sigorta değil, fiyata gömülü bir vaattir: garantiyi veren taraf " +
          "riski üstlenirken beklediği kirayı düşürür. Ücretsiz olmadığını " +
          "bilerek değerlendirin ve garantiyi kimin, hangi mali güçle " +
          "verdiğine bakın.",
      },
      {
        s: "Uzun boşlukta sigortam etkilenir mi?",
        c:
          "Evet, etkilenebilir. Birçok poliçe uzun süre boş kalan mülkte " +
          "teminatı daraltıyor ya da ayrı bir boş mülk poliçesi istiyor. " +
          "Boşluk uzayacaksa sigortacıya bildirmek gerekir.",
      },
      {
        s: "Boşken evi ben kullanabilir miyim?",
        c:
          "Mülk sizin, kullanabilirsiniz. Ancak yatırım amaçlı alınmış bir " +
          "mülkü kişisel kullanıma açmak vergi tarafında sonuç doğurabiliyor; " +
          "kullanım süresi belirli eşikleri aşarsa giderlerin indirilebilirliği " +
          "etkilenir.",
      },
    ],
  },
];
