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
      ["Fiyatı belirleyen", "Programın eşiği", "[Kiranın fiyata oranı](/getiri/kira-carpani/)"],
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

  { t: "h", metin: "Oturum vermeyen bir mülkün verdiği şey" },
  {
    t: "p",
    metin:
      "Buraya kadar ne **vermediğimizi** yazdık. Verdiği şey de gerçek ve " +
      "oturumdan tamamen farklı bir cinsten: **bir izin değil, bir gelir.**",
  },
  {
    t: "tablo",
    basliklar: ["", "Oturum hakkı", "Kira geliri"],
    satirlar: [
      [
        "Asgari tutar",
        "Program söylüyor — eşiğin altına inemezsiniz",
        "**Yok.** Tutarı bütçeniz belirliyor, bir program değil",
      ],
      [
        "Ne zaman işlemeye başlar",
        "Başvuru ve onay sürecinden sonra",
        "Ev kiralıysa ilk aydan",
      ],
      [
        "Sizi nereye bağlar",
        "Yenileme takvimine; bazı programlarda fiziksel bulunma şartına",
        "**Hiçbir yere.** Gelir, sizin nerede yaşadığınıza bağlı değil",
      ],
      [
        "Vergi statünüz",
        "İkamet, o ülkede mükellefiyet doğurabiliyor",
        "Mülkün bulunduğu ülkede kira beyanı; ikamet statünüz değişmiyor",
      ],
      [
        "Mülkü satma özgürlüğü",
        "Yatırımı sürdürme şartı varsa kısıtlı",
        "Serbest",
      ],
      [
        "Kural değişimine maruz",
        "Evet — program siyasi kararla değişebiliyor",
        "Mülkiyet rejimi bir programa bağlı değil",
      ],
    ],
    vurgu: [0, 2],
    not:
      "Vurgulu iki satır asıl farkı taşıyor. Eşik yokluğu, [aynı parayla " +
      "daha fazla ev](/hesap/) ya da daha iyi mahalle seçebilmek demek. Bağsızlık " +
      "ise şu demek: **dolar geliriniz İstanbul'da da, Lizbon'da da, " +
      "Bangkok'ta da aynı miktarda geliyor.** Bir oturum hakkı sizi " +
      "kullandığınız ülkeye yaklaştırır; kira geliri hiçbir ülkeye " +
      "mecbur bırakmaz.",
  },
  {
    t: "not",
    baslik: "“Pasif gelir” ne kadar pasif",
    metin:
      "Kira geliri sık sık pasif gelir olarak anlatılıyor ve tamamen " +
      "yanlış değil: evi siz yönetmiyorsunuz, [kiracıyı siz bulmuyorsunuz](/surec/kiraci-nasil-bulunuyor/), " +
      "[tahsilatı siz yapmıyorsunuz](/surec/kira-tahsilati/). Ama **bedelsiz de değil** — yönetim " +
      "ücreti, boşluk, devir ve büyük onarım her zaman var. [Bu sitede " +
      "bunların hepsini ayrı ayrı yazdık](/surec/). Pasif olan sizin emeğiniz; " +
      "gider kalemleri pasif değil.",
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
      "[Net getiriyi hesaplayın — brüt değil](/getiri/brut-vs-net-getiri/). Vergi, sigorta, yönetim, boşluk, capex dahil.",
      "Mülkiyetin **hukuki dayanıklılığını** sorun: kayıt sistemi, [tapu sigortası](/surec/title-insurance/), uyuşmazlıkta mahkeme yolu.",
      "[Tahliye ve kiracı hukukunun](/surec/amerikada-tahliye-sureci/) ne kadar öngörülebilir olduğunu öğrenin.",
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
      ["Kısa vadede sermaye kazancı", "[Değer artışı odaklı piyasalar](/getiri/getiri-ve-deger-artisi-takasi/)", "Hayır"],
      ["Uzun vadeli nakit akışı", "Nakit akışı odaklı piyasalar", "Evet"],
    ],
    vurgu: [2, 5],
    not:
      "Altı satırın dördünde cevap hayır. Bu bir eksiklik değil: " +
      "tek bir şey yapıyoruz ve onu yaptığımızı söylüyoruz. " +
      "Son iki satırdaysanız — dolar cinsinden, uzun vadeli, eşiksiz bir " +
      "gelir arıyorsanız — konuşacak çok şeyimiz var.",
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
