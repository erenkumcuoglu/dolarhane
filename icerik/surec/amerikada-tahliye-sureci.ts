import type { Blok } from "@/lib/bloklar";

/**
 * Eyalete bağlı bir konu ama kural 11 gereği eyalet adı YAZILMIYOR.
 * Genel çerçeve + "kendi eyaletinizi sorun" yönlendirmesi.
 */
export const amerikadaTahliyeSureci: Blok[] = [
  {
    t: "p",
    metin:
      "Tahliye mahkeme işidir. Amerika'da ev sahibinin kiracıyı kendi " +
      "başına çıkarma yetkisi **yoktur** — kilidi değiştirmek, elektriği " +
      "kesmek, eşyayı dışarı koymak her eyalette yasa dışıdır ve ev " +
      "sahibini tazminat ödeyen taraf haline getirir.",
  },
  {
    t: "p",
    metin:
      "Bu kötü haber değil. Süreç yazılı, öngörülebilir ve kayıtlı olduğu " +
      "için ne kadar süreceği ve ne kadara mal olacağı **baştan hesaplanabilir** " +
      "bir kalemdir.",
  },

  { t: "h", metin: "Adımlar" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Yasal ihbar.** Süresi ve biçimi eyalet kanunuyla belirlenir. Yanlış yazılmış bir ihbar süreci sıfırlar — en sık yapılan hata budur.",
      "**Dava açılışı.** İhbar süresi dolduğunda mahkemeye başvurulur; harç ödenir.",
      "**Duruşma.** Kiracı savunma hakkını kullanabilir; ev sahibinin yükümlülüğünü yerine getirmediği iddiası en sık savunmadır.",
      "**Karar.** Ev sahibi lehine çıkarsa tahliye kararı yazılır.",
      "**İcra.** Kiracı kendi çıkmazsa mülki amir eşliğinde tahliye yapılır. Bu adımı yalnız görevli yürütür.",
    ],
  },
  {
    t: "not",
    baslik: "Süre eyalete göre çok değişiyor",
    metin:
      "Bazı eyaletlerde ödeme ihbarı birkaç gün, toplam süreç birkaç " +
      "hafta; bazılarında ihbar bir ayı bulur ve mahkeme takvimi süreci " +
      "aylara yayar. Bu fark net getiriye doğrudan yansır ve mülk alınmadan " +
      "önce sorulması gereken bir sorudur: **bu eyalette tahliye tipik " +
      "olarak ne kadar sürüyor?**",
  },

  { t: "h", metin: "Gerçek maliyet kalemleri" },
  {
    t: "tablo",
    basliklar: ["Kalem", "Ne kadar", "Not"],
    satirlar: [
      ["Mahkeme harcı", "Görece küçük", "Eyalet ve ilçeye göre değişir"],
      ["Avukat", "Değişken", "Basit dosyada yönetim şirketi kendi yürütebiliyor"],
      ["Kaybedilen kira", "Genelde en büyük kalem", "İhbardan icraya kadar geçen tüm süre"],
      ["Yeniden hazırlık", "Değişken", "Tahliyeyle çıkan kiracı evi iyi bırakmıyor"],
      ["Yeni yerleştirme ücreti", "Bir aylık kiranın yarısı ile tamamı arası", "Süreç bitince yeniden doğar"],
    ],
    vurgu: [2],
    not:
      "Vurgulu satır asıl kalemdir: harç ve avukat çoğu zaman kaybedilen " +
      "kiranın yanında küçük kalır. Tahliyenin maliyeti **süredir.**",
  },
  {
    t: "not",
    baslik: "Depozito bunu karşılamaz",
    metin:
      "Depozito genellikle bir aylık kira civarındadır ve tahliyeye giden " +
      "bir dosyada biriken kayıp bunu aşar. Kalan fark için yasal takip " +
      "mümkündür ama tahsil edilebilirliği düşüktür. **Pratikte asıl " +
      "koruma tahliye değil, kiracı elemesidir.**",
  },

  { t: "h", metin: "Tahliyeye gitmemenin yolları" },
  {
    t: "p",
    metin:
      "Deneyimli yönetim şirketleri dosyaların çoğunu mahkemeye " +
      "götürmeden kapatıyor. Yaygın üç yol:",
  },
  {
    t: "liste",
    maddeler: [
      "**Ödeme planı.** Geçici bir gelir kaybıysa yazılı plan çoğu zaman işe yarıyor.",
      "**Anlaşmalı çıkış.** Kiracıya taşınma masrafı ödeyip anahtarı almak, aylarca sürecek bir davadan ucuz olabiliyor. Duygusal olarak ters gelir, aritmetik olarak sık sık doğrudur.",
      "**Sözleşmeyi yenilememek.** Sorun ödemede değil davranıştaysa, süre dolduğunda yenilememek tahliyeden hem hızlı hem ucuzdur.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Tahliye sürecini ben mi yürütüyorum?",
        c:
          "Hayır, yönetim şirketi yürütüyor. Sizin rolünüz kararı onaylamak " +
          "ve masrafı karşılamak. Sözleşmede tahliye masraflarının nasıl " +
          "paylaşılacağı yazılı olmalı.",
      },
      {
        s: "Türkiye'den bir şey imzalamam gerekir mi?",
        c:
          "Genellikle yönetim şirketinin vekâleti yeterlidir. Bazı " +
          "mahkemelerde mal sahibinin imzası istenebilir; bu durumda belge " +
          "elektronik ya da konsolosluk onaylı olarak gönderilir.",
      },
      {
        s: "Kiracı evi tahrip ederse?",
        c:
          "Tahliye kararıyla birlikte hasar için de talepte bulunulabilir. " +
          "Hüküm almak mümkün, tahsil etmek genelde zordur. Sigorta " +
          "poliçesinin kötü niyetli hasarı kapsayıp kapsamadığı poliçeye " +
          "göre değişir ve alırken sorulmalıdır.",
      },
    ],
  },
];
