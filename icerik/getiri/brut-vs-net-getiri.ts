import type { Blok } from "@/lib/bloklar";

/**
 * ⚠ TASLAK — YAYIN ENGELİ VAR.
 *
 * Ucuz ev aritmetiği modellendi (`veri/ucuz-ev-modeli.py`) ama C/D
 * varsayımları kalibre edilmedi: model %71 gider oranı veriyor, sektör
 * kaynaklarında Class C bandı %45-55. Farkın bir kısmı tanımsal (opex
 * oranları capex'i hariç tutuyor), bir kısmı D sınıfının C'den kötü
 * olması. Agresif varsayımla kurulmuş bir tablo ilk itirazda çöker ve
 * bizi tam eleştirdiğimiz konuma düşürür.
 *
 * Bu yüzden sayfa mekanizmayı anlatıyor, RAKAM VERMİYOR. Kalibrasyon
 * tamamlanıp varsayımlar kaynağa bağlandığında sayısal tablo eklenecek
 * ve `durum` "yayin"a çevrilecek. Bkz. EV-KALITE-CERCEVESI.md §5.
 */
export const brutVsNetGetiri: Blok[] = [
  {
    t: "p",
    metin:
      "İki ev aynı brüt getiriye sahip olabilir ve net getirileri " +
      "birbirinden çok farklı çıkabilir. Bunun en sık görüldüğü yer, " +
      "ucuz ev ile daha pahalı evin karşılaştırılması: **brütte ucuz ev " +
      "genellikle önde, nette genellikle geride.**",
  },
  {
    t: "p",
    metin:
      "Sebebi fiyat değil, **mahalle sınıfı.** Ucuz ev ucuz olduğu için " +
      "kaybettirmiyor; sınıfı düşük olduğu için kaybettiriyor. Aradaki " +
      "fark brüt rakama bakan alıcıya hiç görünmüyor.",
  },

  { t: "h", metin: "Farkı açan altı kalem" },
  {
    t: "tablo",
    basliklar: ["Kalem", "Düşük sınıf mülkte", "Neden"],
    satirlar: [
      ["Boşluk süresi", "Uzun", "Kiracı havuzu dar, talep oynak"],
      ["Devir sıklığı", "Yüksek", "Kiracı istikrarı düşük; her devir boşluk + hazırlık + yerleştirme ücreti doğuruyor"],
      ["Tahsilat kaybı", "Yapısal", "Kira/gelir oranı gergin"],
      ["Capex", "Yüksek", "Yapı eski; çatı, tesisat ve ısıtma ömrünün sonuna yakın"],
      ["Tahliye sıklığı", "Yüksek", "Her dosya kaybedilen kira demek"],
      ["Yönetim ücreti", "Oransal yükü ağır", "Yüzde aynı ama düşük kiranın üstünde"],
    ],
    not:
      "Altı kalemin hiçbiri brüt getiri hesabında yok. Hepsi nette " +
      "ortaya çıkıyor ve altısı aynı yönde çalışıyor — bu yüzden fark " +
      "toplanarak değil, katlanarak büyüyor.",
  },
  {
    t: "not",
    baslik: "Bu sayfa henüz rakam vermiyor",
    metin:
      "Mekanizma yukarıda; sayısal karşılaştırma tablosu ise varsayımlar " +
      "kaynağa bağlanmadan yayınlanmayacak. Elimizdeki ilk model, " +
      "sektör kaynaklarının verdiği gider oranı bandının üstünde bir " +
      "sonuç veriyor ve **kendi lehimize agresif bir tablo yayınlamak, " +
      "tam olarak bu sayfada eleştirdiğimiz şey olurdu.** Kalibrasyon " +
      "tamamlanınca tablo eklenecek.",
  },

  { t: "h", metin: "Kendi karşılaştırmanızı kurmak" },
  {
    t: "p",
    metin:
      "Beklemeden kendiniz yapabilirsiniz. Yöntem, iki evi aynı " +
      "varsayımlarla değil **kendi gerçek varsayımlarıyla** modellemek:",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "İki ev için ayrı ayrı boşluk payı belirleyin — aynı payı ikisine vermeyin.",
      "Devir sıklığını ayrı tahmin edin ve her devirin maliyetini yıla yayın.",
      "Capex rezervini yapı yaşına göre ayrı hesaplayın.",
      "Emlak vergisini ilçe kaydından **gerçek rakamla** alın, tahmin etmeyin.",
      "İkisini de yatırılan toplam sermayeye bölün.",
    ],
  },
  {
    t: "p",
    metin:
      "Aynı varsayımları iki eve birden uygulamak, tam olarak farkın " +
      "kaynağını silmek demek. Karşılaştırmanın anlamı, varsayımların " +
      "farklı olmasında.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Ucuz ev her zaman kötü mü?",
        c:
          "Hayır. Yerel piyasayı bilen, tamiri kendi yöneten ve devri " +
          "sindirebilen bir yatırımcı için düşük sınıf mülk çalışabiliyor. " +
          "Uzaktan, ilk kez ve yönetim şirketiyle alan biri için " +
          "aritmetik ters işliyor.",
      },
      {
        s: "Pahalı ev almak çözüm mü?",
        c:
          "Fiyat değil sınıf belirleyici. Aynı fiyat bandında iyi ve kötü " +
          "mahalle var. Bakılacak şey fiyat etiketi değil, mahallenin ve " +
          "yapının ölçülebilir parametreleri.",
      },
    ],
  },
];
