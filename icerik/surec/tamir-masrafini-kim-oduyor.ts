import type { Blok } from "@/lib/bloklar";

/** Operasyon dörtlüsü — 4/4. Evergreen. */
export const tamirMasrafiniKimOduyor: Blok[] = [
  {
    t: "p",
    metin:
      "Kural basit: **yapısal ve sistemsel olan ev sahibine, kullanımdan " +
      "doğan kiracıya aittir.** Çatı sizin, kırılan cam genellikle kiracının. " +
      "Arada kalan gri alanı da sözleşme belirler — bu yüzden sözleşmedeki " +
      "sorumluluk maddesi, kira tutarından sonra en önemli satırdır.",
  },

  { t: "h", metin: "Kim neyi öder" },
  {
    t: "tablo",
    basliklar: ["Kalem", "Kim öder", "Neden"],
    satirlar: [
      [
        "Çatı, temel, dış cephe",
        "Ev sahibi",
        "Yapısal; mülkün kendisine ait",
      ],
      [
        "Isıtma-soğutma, su ısıtıcı, tesisat",
        "Ev sahibi",
        "Yaşanabilirlik yükümlülüğü; çoğu eyalette yasal zorunluluk",
      ],
      [
        "Beyaz eşya (evle birlikte verildiyse)",
        "Ev sahibi",
        "Mülkün parçası sayılıyor",
      ],
      [
        "Ampul, filtre, pil gibi sarf",
        "Kiracı",
        "Rutin kullanım",
      ],
      [
        "Kiracının yol açtığı hasar",
        "Kiracı",
        "Normal yıpranmanın ötesinde; depozitodan mahsup edilebilir",
      ],
      [
        "Tıkanan gider",
        "Duruma göre",
        "Kök/yapı kaynaklıysa ev sahibi, kullanım hatasıysa kiracı",
      ],
      [
        "Bahçe ve kar temizliği",
        "Sözleşmeye göre",
        "Müstakil evde genelde kiracıya bırakılır, yazılmazsa ev sahibinde kalır",
      ],
    ],
    not:
      "“Normal yıpranma” ile “hasar” ayrımı çıkışta en çok tartışılan " +
      "konudur. Girişte çekilen fotoğraflı durum tutanağı bu tartışmayı " +
      "baştan bitirir — tutanaksız çıkışta tartışma kiracı lehine sonuçlanma " +
      "eğilimindedir.",
  },

  { t: "h", metin: "Onay eşiği" },
  {
    t: "p",
    metin:
      "Yönetim sözleşmesinde bir **onay eşiği** bulunur: bu tutarın altındaki " +
      "işler size sorulmadan yapılır, üstündekiler için onayınız alınır. Eşik " +
      "yoksa iki kötü sonuçtan biri çıkar — ya her ampul için size " +
      "yazılır, ya da haberiniz olmadan büyük faturalar doğar.",
  },
  {
    t: "liste",
    maddeler: [
      "Eşiği sözleşmeye **rakamla** yazdırın.",
      "Acil durumları ayrı tutun: su basması, ısıtmanın durması, elektrik arızası onay beklemez — bekleyemez de.",
      "Onay istenen her iş için **teklif** isteyin, fatura sonradan gelsin.",
      "Aylık raporda her tamir kaleminin faturası eki olsun.",
    ],
  },
  {
    t: "not",
    baslik: "Acil işlerde onay beklenmez",
    metin:
      "Çoğu eyalette ev sahibinin yaşanabilirliği sağlama yükümlülüğü var. " +
      "Isıtma kışın çalışmıyorsa bu bir konfor meselesi değil yasal " +
      "yükümlülüktür; geciktirmek kira kesintisine ve davaya kadar gider. " +
      "Yönetim şirketinin acil işlerde onaysız hareket etme yetkisi " +
      "olmalıdır.",
  },

  { t: "h", metin: "Bakım ile büyük onarım farkı" },
  {
    t: "p",
    metin:
      "İkisi aynı kalem değil ve aynı şekilde bütçelenmiyor.",
  },
  {
    t: "tablo",
    basliklar: ["", "Bakım", "Büyük onarım"],
    satirlar: [
      ["Ne", "Küçük, sık, öngörülebilir", "Büyük, seyrek, ertelenemez"],
      ["Örnek", "Musluk, boya, filtre, küçük tesisat", "Çatı, ısıtma sistemi, su ısıtıcı"],
      ["Bütçeleme", "Aylık gider gibi", "Her ay ayrılan rezerv"],
      ["Vergi tarafı", "Genelde aynı yıl gider yazılır", "Genelde amortismana tabi"],
    ],
    not:
      "Bakım ile büyük onarımın vergi muamelesi farklıdır ve sınır her zaman " +
      "net değildir. ABD beyanını hazırlayan muhasebeciyle birlikte " +
      "sınıflandırmak gerekir.",
  },
  {
    t: "p",
    metin:
      "Büyük onarımın püf noktası şu: **gerçekleştiği ay değil, her ay " +
      "maliyetlidir.** Çatı on beş yılda bir değişiyorsa o maliyetin yüz " +
      "seksen aya bölünmüş hali sizin gerçek aylık giderinizdir. Rezerv " +
      "ayırmayan bir hesap, çatı değişene kadar iyi görünür.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Her tamirden haberim olur mu?",
        c:
          "Onay eşiğinin üstündekiler onayınıza gelir; altındakiler yapılır " +
          "ve aylık raporda faturasıyla görünür. Yani haberiniz olur, ama " +
          "hepsi için izniniz istenmez — eşiği siz belirlersiniz.",
      },
      {
        s: "Tamir için Türkiye'den para göndermem gerekiyor mu?",
        c:
          "Genellikle hayır. Tamir bedeli o ayki kiradan düşülür. Kirayı " +
          "aşan büyük bir işte ABD hesabınızdaki tampondan karşılanır; " +
          "tampon da yetmezse transfer gerekir. Hesapta bir rezerv tutmanın " +
          "asıl sebebi budur.",
      },
      {
        s: "Yönetim şirketi tamiri pahalıya yaptırırsa?",
        c:
          "Bu gerçek bir risktir; bazı şirketler kendi bağlı ekiplerini " +
          "kullanır. Korunma yolu sözleşmede: belirli tutarın üstünde " +
          "**birden fazla teklif** şartı koydurun ve şirketin tamir " +
          "faturasından pay alıp almadığını açıkça sorun.",
      },
      {
        s: "Kiracı hasar verip çıkarsa ne oluyor?",
        c:
          "Önce depozitodan mahsup edilir. Depozito yetmezse fark için " +
          "yasal takip mümkündür ama tahsil edilebilirliği düşüktür. " +
          "Pratikte asıl koruma depozito ve iyi kiracı elemesidir.",
      },
    ],
  },
];
