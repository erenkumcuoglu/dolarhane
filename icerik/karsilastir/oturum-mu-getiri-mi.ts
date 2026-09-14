import type { Blok } from "@/lib/bloklar";

/**
 * Kümenin en değerli sayfası. İşi yanlış alıcıyı ELEMEK: oturum isteyen
 * kişiyi dürüstçe başka yere yönlendiriyor. Kimse yapmıyor çünkü herkes
 * tek şey satıyor (SEO-GEO-PLAN §4.5).
 */
export const oturumMuGetiriMi: Blok[] = [
  {
    t: "p",
    metin:
      "Yurt dışında ev almanın iki ayrı amacı var ve çoğu zaman aynı " +
      "kelimelerle konuşuluyor: **oturum hakkı** ve **kira getirisi.** " +
      "Aynı bütçeyle ikisini de en iyi şekilde almak mümkün değil, çünkü " +
      "biri için ödediğiniz prim diğerinden çıkıyor.",
  },
  {
    t: "p",
    metin:
      "Bu sayfanın işi size bir şey satmak değil, **hangi soruyu " +
      "sorduğunuzu netleştirmek.** Cevabınız oturumsa doğru yer biz " +
      "değiliz ve bunu açıkça yazıyoruz.",
  },

  { t: "h", metin: "İki farklı ürün" },
  {
    t: "tablo",
    basliklar: ["", "Oturum odaklı alım", "Getiri odaklı alım"],
    satirlar: [
      ["Asıl aldığınız şey", "Bir izin — eve bağlı olarak verilen", "Bir nakit akışı"],
      ["Fiyatı belirleyen", "Programın eşiği", "Kiranın fiyata oranı"],
      ["Tipik getiri seviyesi", "Düşük — yerleşik programlarda brüt %3-4 civanında konuşuluyor", "Nakit akışı odaklı piyasalarda belirgin daha yüksek"],
      ["Mülkün konumu", "Programın izin verdiği bölge", "Kira talebinin güçlü olduğu yer"],
      ["Karar ufku", "Oturum yenilenme takvimi", "Uzun vade, kira odaklı"],
      ["Ana risk", "Program kurallarının değişmesi", "Yerel ekonominin zayıflaması"],
    ],
    not:
      "İki sütun da meşru. Yanlış olan, birini alıp diğerinin sonucunu " +
      "beklemek — ya da ikisini birden vaat eden bir sunuma inanmak.",
  },

  { t: "h", metin: "Eşik primi" },
  {
    t: "p",
    metin:
      "Oturum programları bir **asgari yatırım tutarı** belirliyor. " +
      "Bu tutar, o piyasada satıcıların fiyat davranışını doğrudan " +
      "etkiliyor: eşiğin hemen üstünde yoğunlaşan bir arz oluşuyor.",
  },
  {
    t: "p",
    metin:
      "Sonuç şu: eşiği karşılamak için aldığınız mülkün fiyatı, aynı " +
      "mülkün kira üretme kapasitesinden bağımsız belirlenmiş olabiliyor. " +
      "**Oturum istiyorsanız bu prim ödenmeye değer bir şeydir.** " +
      "İstemiyorsanız, sadece fazladan ödemiş olursunuz.",
  },
  {
    t: "not",
    baslik: "Tersi de doğru",
    metin:
      "Getiri odaklı bir mülk çoğu programın eşiğinin altında kalır ve " +
      "size hiçbir oturum hakkı vermez. Nakit akışı için alınan bir evden " +
      "sonradan oturum çıkmaz. Karar baştan verilmeli.",
  },

  { t: "h", metin: "Oturum istiyorsanız" },
  {
    t: "p",
    metin:
      "Bunu yazmak işimize gelmiyor ama doğru: **oturum ya da AB " +
      "hareket serbestliği istiyorsanız ABD'de kiralık ev yanlış araç.** " +
      "ABD'de gayrimenkul almak size oturum, vize ya da çalışma izni " +
      "vermiyor — mülkiyet ile göçmenlik ayrı konular.",
  },
  {
    t: "liste",
    maddeler: [
      "Amacınız Schengen hareketliliğiyse gayrimenkul karşılığı oturum veren programlara bakın.",
      "Amacınız bir B planı ise oturum hakkının yenilenme koşullarını ve aile kapsamını inceleyin.",
      "Amacınız çocuk eğitimiyse hangi statünün hangi okul haklarını verdiğini ayrıca araştırın.",
    ],
  },
  {
    t: "not",
    baslik: "Kurallar değişiyor — karar anında doğrulayın",
    metin:
      "Oturum programları siyasi kararlarla değişiyor. Son yıllarda bazı " +
      "ülkeler gayrimenkul yolunu programdan çıkardı, bazıları eşikleri " +
      "yükseltti, biri yatırımcı vizesini tamamen kaldırdı. Bu sayfadaki " +
      "genel çerçeveye dayanarak karar vermeyin; başvuru anındaki resmî " +
      "koşulları doğrulayın. **Kural istikrarı, programın kendisi kadar " +
      "önemli bir kriterdir.**",
  },

  { t: "h", metin: "Getiri istiyorsanız" },
  {
    t: "p",
    metin:
      "O zaman sorulacak soru “hangi ülke oturum veriyor” değil, " +
      "**“kira hangi para biriminde ve net kaç”**.",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Kiranın **hangi para biriminde** ödendiğine bakın. Dolar geliri istiyorsanız arada bir kur sabitleyicisi olmasın.",
      "Net getiriyi hesaplayın — brüt değil. Vergi, sigorta, yönetim, boşluk, capex dahil.",
      "Mülkiyetin **hukuki dayanıklılığını** sorun: kayıt sistemi, tapu sigortası, uyuşmazlıkta mahkeme yolu.",
      "Tahliye ve kiracı hukukunun ne kadar öngörülebilir olduğunu öğrenin.",
      "Oturum primi ödemiyor olduğunuzu doğrulayın: aynı kirayı daha düşük fiyata veren bir piyasa var mı?",
    ],
  },

  { t: "h", metin: "Karar tablosu" },
  {
    t: "tablo",
    basliklar: ["Önceliğiniz", "Bakılacak yer", "Biz uygun muyuz"],
    satirlar: [
      ["AB oturumu / Schengen", "Gayrimenkul karşılığı oturum programları", "Hayır"],
      ["Pasaport / vatandaşlık", "Vatandaşlık programları", "Hayır"],
      ["Dolar cinsinden kira geliri", "Kiranın yerli para birimi olarak dolar olduğu piyasalar", "Evet"],
      ["Tatil / kendi kullanım", "Kullanacağınız bölge", "Hayır"],
      ["Kısa vadede sermaye kazancı", "Değer artışı odaklı piyasalar", "Hayır"],
      ["Uzun vadeli nakit akışı", "Nakit akışı odaklı piyasalar", "Evet"],
    ],
    vurgu: [2, 5],
    not:
      "Altı satırın dördünde cevap hayır. Bu bir eksiklik değil; " +
      "ne sattığımızı bilmek, ne satmadığımızı da bilmek demek.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "ABD'de ev alırsam vize başvurumda avantaj olur mu?",
        c:
          "Mülk sahibi olmak vize kararında bir hak doğurmuyor. Bazı vize " +
          "türlerinde ülkeye bağ göstermek dolaylı olarak değerlendirilebilir " +
          "ama bu bir garanti değildir ve mülk almanın gerekçesi olamaz.",
      },
      {
        s: "İkisini birden yapmak için iki ayrı alım mantıklı mı?",
        c:
          "Bütçe yetiyorsa evet ve çoğu zaman en dürüst çözüm bu: oturum " +
          "için programın istediği mülk, getiri için kira mantığına uygun " +
          "mülk. Tek mülkten iki sonuç beklemek yerine iki ayrı karar " +
          "vermek.",
      },
      {
        s: "Neden kendi aleyhinize yazıyorsunuz?",
        c:
          "Yanlış beklentiyle gelen alıcı, ikimiz için de kötü sonuç. " +
          "Oturum arayan birine kira geliri satmak kısa vadede satış, uzun " +
          "vadede şikâyet üretir.",
      },
    ],
  },
];
