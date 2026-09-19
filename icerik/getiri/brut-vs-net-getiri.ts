import type { Blok } from "@/lib/bloklar";

/**
 * Kalibrasyon tamamlandı (2026-09-19) — bkz. EV-KALITE-CERCEVESI.md §5.
 *
 * Yayın engeli şuydu: model C/D için %71 gider oranı veriyordu, sektör
 * kaynakları Class C için %45-55 diyor. Fark ÖLÇÜLDÜ ve tanımsal çıktı:
 * bizim oranımız capex ve devir maliyeti DAHİL ve BRÜT kiraya bölünmüş;
 * sektörün kullandığı taban ise capex hariç ve EGI'ye (boşluk-tahsilat
 * düşülmüş kira) bölünmüş. Aynı modeli sektör tabanında okuyunca C/D
 * %54,9, B %39,6 — ikisi de kendi bandının içinde.
 *
 * Yani model agresif değil, daha eksiksiz bir tabanda ölçülmüş. Sayfa
 * bu yüzden İKİ TABANI DA yazıyor; itiraz gelmeden cevaplanıyor.
 *
 * Rakamlar nokta değil BANT olarak veriliyor — EV-KALITE-CERCEVESI §5'in
 * kendi koyduğu yayın şartı ("kaynağa bağlanacak ya da bant olarak
 * verilecek") bu şekilde karşılanıyor. Varsayımlar tabloda açıkta.
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
  { t: "h", metin: "Aynı ilçede iki ev" },
  {
    t: "p",
    metin:
      "Aşağıdaki model iki evi **aynı ilçede, aynı efektif emlak vergisi " +
      "oranıyla** karşılaştırıyor. Tek değişken mahalle sınıfı. Rakamlar " +
      "nokta değil bant: varsayıma dayandıkları için virgülden sonrasını " +
      "iddia etmiyoruz.",
  },
  {
    t: "tablo",
    basliklar: ["", "C/D sınıfı · ~85.000 $", "B sınıfı · ~200.000 $"],
    satirlar: [
      ["Aylık kira", "~900 $", "~1.900 $"],
      ["**Brüt getiri**", "**~%12,5–13**", "**~%11–11,5**"],
      ["Boşluk payı", "~%10", "~%5"],
      ["Ortalama kiracılık süresi", "~1,5 yıl", "~3 yıl"],
      ["Capex rezervi (kiranın payı)", "~%10", "~%6"],
      ["**Net getiri**", "**~%2**", "**~%5–5,5**"],
      ["Peşin alımda amortisman", "~50 yıl", "~19 yıl"],
    ],
    vurgu: [1, 5],
    not:
      "Brütte ucuz ev **1,3 puan önde**, nette **3,3 puan geride.** " +
      "Fiyat değil sınıf: iki eve de aynı vergi oranı uygulandı. " +
      "Model ve bütün varsayımlar açık — bu bir MODEL, iddia değil.",
  },
  {
    t: "not",
    baslik: "Gider oranı hangi tabana göre",
    metin:
      "Bu modelde C/D'nin gider oranı brüt kiranın **~%71'i** çıkıyor ve " +
      "bu, sektör kaynaklarının Class C için verdiği **%45–55** bandının " +
      "üstünde görünüyor. Fark tanımsal: ABD'de yerleşik kullanımda " +
      "işletme gideri oranı **capex'i hariç tutar** ve **EGI'ye** " +
      "(boşluk ve tahsilat kaybı düşülmüş kira) bölünür. Aynı modeli o " +
      "tabanda okuduğunuzda C/D **%54,9**, B **%39,6** — ikisi de kendi " +
      "bandının içinde. Biz capex ve devir maliyetini dahil edip brüt " +
      "kiraya bölüyoruz; **daha eksiksiz ve kendi aleyhimize** bir taban. " +
      "Karşılaştırırken hangi tabanda konuşulduğunu sormak gerekiyor.",
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
    t: "kaynak",
    maddeler: [
      {
        metin:
          "Model ve varsayımların tamamı: veri/ucuz-ev-modeli.py — " +
          "boşluk, devir sıklığı, capex, bakım, yönetim ve devir " +
          "maliyeti parametreleri dosyada açık ve değiştirilebilir.",
      },
      {
        metin:
          "Class C için %45-55, Class B için ~%35-45 işletme gideri " +
          "bandı: ABD konut yatırımı sektör yayınlarından derleme. " +
          "Bu bantlar capex hariç ve EGI tabanlıdır.",
      },
      {
        metin:
          "Emlak vergisi iki senaryoda da aynı efektif oranla " +
          "uygulanmıştır; amaç sınıf farkını izole etmek.",
      },
    ],
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
        s: "Gider oranınız neden sektörden yüksek?",
        c:
          "Çünkü farklı tabanda ölçüyoruz. Sektör oranı capex'i hariç " +
          "tutar ve boşluk düşülmüş kiraya böler; biz capex ve devir " +
          "maliyetini dahil edip brüt kiraya bölüyoruz. Aynı model " +
          "sektör tabanında okunduğunda C/D %54,9, B %39,6 — ikisi de " +
          "banda giriyor. Daha eksiksiz taban, daha yüksek oran; " +
          "aritmetik aynı.",
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
